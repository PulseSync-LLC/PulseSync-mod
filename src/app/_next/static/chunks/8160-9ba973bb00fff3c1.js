(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8160],
    {
        4664: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => j });
            var a = e(32290),
                l = e(63618),
                s = e(96103),
                r = e(55178),
                o = e(21732),
                n = e(71483),
                c = e(44884),
                d = e(96333),
                _ = e(91027),
                u = e(58359),
                A = e(71735),
                m = e(2969),
                C = e(23352),
                x = e(72396),
                p = e(46200),
                v = e(5537),
                k = e(28999),
                b = e(90169),
                y = e(57594),
                h = e(5154),
                N = e(1444),
                f = e(40229),
                T = e(54171),
                P = e(8677),
                I = e(27616),
                E = e(68912);
            let j = (0, s.PA)((t) => {
                var i;
                let { className: e, track: s, pageId: j, playContextParams: g } = t,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: w } = (0, p.q)(),
                    { ref: M, intersectionPropertyId: $ } = (0, C.n)(),
                    {
                        track: S,
                        settings: { isMobile: B },
                        paywall: { modal: z },
                    } = (0, y.g)(),
                    D = (0, v.N)(),
                    { from: R } = (0, x.f)({ pageId: j }),
                    H = (0, m.b)(),
                    Y = {
                        contextData: { type: n.K.Various, meta: { id: s.entityId }, from: R, overrideContextType: c.b.Search },
                        queueParams: { index: 0, entityId: s.id },
                        loadContextMeta: !0,
                    },
                    O = null != g ? g : Y,
                    { isPlaying: U, isCurrent: V, togglePlay: K, restartPlay: F } = (0, b.D)({ playContextParams: O, entityId: s.entityId }),
                    Q = (0, A.P)(),
                    Z = (0, T.w)({ track: s, callback: K }),
                    q = (0, r.useCallback)(() => {
                        S.open({ trackId: s.id, albumId: s.albumId });
                    }, [S, s.id, s.albumId]),
                    W = (0, T.w)({ track: s, callback: q }),
                    { sendPlaySearchFeedback: X } = (0, k.z)(),
                    [G, J] = (0, r.useState)(!1),
                    tt = (0, _.c)(() => {
                        if (!Q()) {
                            if (L) return void w();
                            if (D) return void z.open();
                            G || U || (J(!0), null == X || X()), Z(), H(!U);
                        }
                    }),
                    ti = (0, _.c)(() => {
                        if (U) return void F();
                        tt();
                    }),
                    te = (0, _.c)((t) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            L && s.isAvailableOnlyForPlus && w(), D && s.isAvailableOnlyForPlus && z.open();
                            return;
                        }
                        if (L) return void w();
                        let i = !B && (2 === t.detail || (1 === t.detail && s.hasTrackLink));
                        return D && !i
                            ? void z.open()
                            : ((0, u.P)(t, h.$f.ripple), B)
                              ? void tt()
                              : 2 === t.detail
                                ? void ti()
                                : void (1 === t.detail && s.hasTrackLink && (W(), D && z.open()));
                    }),
                    ta = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(f.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: h.$f.playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [s],
                    ),
                    tl = null == ta ? void 0 : ta({ onPlayButtonClick: tt, isPlaying: U, isCurrent: V });
                return (0, a.jsxs)(N.C, {
                    ref: M,
                    'data-intersection-property-id': $,
                    className: (0, l.$)(h.$f.root, e),
                    'aria-label': ''
                        .concat(s.artistsNames, ' ')
                        .concat(s.title, ' ')
                        .concat(null != (i = s.version) ? i : ''),
                    onClick: te,
                    'data-test-id': o.Kq.track.SEARCH_TRACK_CARD,
                    children: [
                        tl,
                        s.type === d.S.PODCAST
                            ? (0, a.jsx)(I.w, { track: s, playContextParams: O, withPodcastName: !0, withListeningProgress: !0, withAlbumTitleLink: !B })
                            : (0, a.jsx)(E.j, { withArtistLink: !B, track: s }),
                        (0, a.jsx)(P.Q, { className: h.$f.controlsBarCell, track: s }),
                    ],
                });
            });
        },
        5154: (t, i, e) => {
            'use strict';
            e.d(i, { v2: () => c, $f: () => l(), VN: () => r(), SE: () => n() });
            var a = e(50880),
                l = e.n(a),
                s = e(59449),
                r = e.n(s),
                o = e(28488),
                n = e.n(o);
            let c = {
                src: '/_next/static/media/artist.c49b2bfa.png',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEU7SUNzfno6TEYVIB4tOTVMaXExOjY1PTpEUEw+T0k2RUA0Qz40Qz1UXVpAS0dncG1IUk6VnZuIkI3hJMzHAAAADHRSTlMu/e4u/gCv7fix563DJ+jkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhxHAIAwEsMe4ci6Q/YeNBEG4BwSg9VYSEL3e8A1QzjfcB5ZZlXmg7FXOim23+9qGQM0U8gNH4wIMxKVMaQAAAABJRU5ErkJggg==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        17596: (t) => {
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
        20183: (t, i, e) => {
            'use strict';
            e.d(i, { H: () => g });
            var a = e(32290),
                l = e(63618),
                s = e(96103),
                r = e(55178),
                o = e(21732),
                n = e(91027),
                c = e(58359),
                d = e(71926),
                _ = e(71735),
                u = e(2969),
                A = e(84782),
                m = e(23352),
                C = e(37240),
                x = e(7697),
                p = e(28999),
                v = e(43564),
                k = e(5154),
                b = e(32156),
                y = e(78570),
                h = e(1444),
                N = e(90326),
                f = e(40229),
                T = e(85015),
                P = e(47593),
                I = e(19529),
                E = e(98925),
                j = e.n(E);
            let g = (0, s.PA)((t) => {
                let { className: i, vibe: e, cover: s, coverClassName: E, playButtonIconSize: g, description: L, agentVariant: w } = t,
                    { ref: M, intersectionPropertyId: $ } = (0, m.n)(),
                    { pageId: S } = (0, C.$)(),
                    [B, z] = (0, r.useState)(!1),
                    { blockIdForFrom: D } = (0, A.N)(),
                    { withPlusPopoverSearchVibeCard: R } = (0, x.X)(),
                    { sendPlaySearchFeedback: H } = (0, p.z)(),
                    Y = (0, u.b)(),
                    [O, U] = (0, r.useState)(!1),
                    V = (0, _.P)(),
                    { isPlaying: K, togglePlay: F, isCurrent: Q } = (0, v.B)({ seeds: e.seeds, pageIdForFrom: S, blockIdForFrom: D }),
                    Z = (0, n.c)(() => {
                        if (!V()) {
                            if (R) return void U(!0);
                            B || K || (z(!0), null == H || H()), F(), Y(!K);
                        }
                    }),
                    q = (0, n.c)(() => {
                        K || Z();
                    }),
                    W = (0, n.c)((t) => {
                        2 === t.detail ? q() : (0, c.P)(t, k.$f.ripple);
                    }),
                    X = (0, r.useCallback)(() => {
                        if (e.shouldShowAgent && e.agent && w)
                            switch (w) {
                                case T.h.LARGE:
                                    return (0, a.jsxs)('div', {
                                        className: (0, l.$)(j().root, k.$f.playButtonCell, E),
                                        children: [
                                            (0, a.jsx)(P.s, { agent: e.agent, isPlaying: K }),
                                            (0, a.jsx)(N.D, {
                                                variant: 'filled',
                                                className: j().playButton,
                                                iconClassName: j().playButtonIcon,
                                                isPlaying: K,
                                                onClick: Z,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case T.h.SMALL:
                                    return (0, a.jsx)(I.n, {
                                        agent: e.agent,
                                        isPlaying: K,
                                        isCurrent: Q,
                                        onPlayButtonClick: Z,
                                        alt: ''.concat(L, ' ').concat(e.title),
                                        className: (0, l.$)(k.$f.playButtonCell, E),
                                    });
                            }
                        return (0, a.jsx)(f.q, {
                            isAvailable: !0,
                            coverUri: null == s ? void 0 : s.uri,
                            title: e.title,
                            className: (0, l.$)(k.$f.playButtonCell, E),
                            entityCoverStyle: { backgroundColor: null == s ? void 0 : s.color },
                            radius: 'round',
                            onPlayButtonClick: Z,
                            isPlaying: K,
                            isCurrent: Q,
                            playButtonIconSize: g,
                            alt: ''.concat(L, ' ').concat(e.title),
                        });
                    }, [w, null == s ? void 0 : s.color, null == s ? void 0 : s.uri, E, L, Z, Q, K, g, e.agent, e.shouldShowAgent, e.title]);
                return (0, a.jsxs)(h.C, {
                    ref: M,
                    'data-intersection-property-id': $,
                    className: (0, l.$)(k.$f.root, i),
                    'aria-label': e.title,
                    onClick: W,
                    'data-test-id': o.OA.vibe.SEARCH_VIBE_CARD,
                    children: [
                        (0, a.jsx)(b.S, {
                            isOpened: O,
                            onOpenChange: U,
                            isEnabled: R,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: e.stationType,
                            renderChildren: X,
                        }),
                        (0, a.jsx)(y.r, {
                            title: (0, a.jsx)(d.HL, { className: (0, l.$)(k.$f.text, k.$f.titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            description: L,
                        }),
                    ],
                });
            });
        },
        20930: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        28488: (t) => {
            t.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        31640: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        42383: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => R });
            var a = e(32290),
                l = e(63618),
                s = e(96103),
                r = e(55178),
                o = e(60900),
                n = e(16172),
                c = e(21732),
                d = e(71483),
                _ = e(91027),
                u = e(58359),
                A = e(71926),
                m = e(91853),
                C = e(71735),
                x = e(47745),
                p = e(2969),
                v = e(23352),
                k = e(72396),
                b = e(5537),
                y = e(84062),
                h = e(28999),
                N = e(90169),
                f = e(57594),
                T = e(5154),
                P = e(78570),
                I = e(1444),
                E = e(61258),
                j = e(40229),
                g = e(82586),
                L = e(5942),
                w = e(54391),
                M = e(92744),
                $ = e(29268),
                S = e(4008),
                B = e(17596),
                z = e.n(B);
            let D = (0, s.PA)((t) => {
                    var i;
                    let { className: e, artist: s, likeIconSize: o = 'xxs' } = t,
                        { user: c, trailer: d } = (0, f.g)(),
                        u = (0, C.P)(),
                        { sendLikeSearchFeedback: A } = (0, h.z)(),
                        m = (0, L.K)(s),
                        [x, p] = (0, r.useState)(!1),
                        v = (0, _.c)(async () => {
                            x || s.isLiked || (p(!0), null == A || A()), await m();
                        }),
                        k = (0, w.F)(),
                        b = (0, _.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            d.openArtistTrailer(s.id), k(n.ky.Artist, s.id);
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(z().root, z().controls, e, { [z().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(S.WithOffline, {
                                            fallback: (0, a.jsx)(M.c, {
                                                size: 'xs',
                                                iconSize: o,
                                                className: (0, l.$)(z().item, z().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: v,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)(S.WithOffline, {
                                                fallback: (0, a.jsx)($.k, {
                                                    className: (0, l.$)(z().item, z().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: b,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(z().item, z().item_buttonArrow),
                                children: (0, a.jsx)(g.I, { className: T.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                R = (0, s.PA)((t) => {
                    let { className: i, artist: e, pageId: s, description: g, coverClassName: L, playButtonIconSize: w, likeIconSize: M } = t,
                        { formatMessage: $ } = (0, o.A)(),
                        { ref: S, intersectionPropertyId: B } = (0, v.n)(),
                        { from: z } = (0, k.f)({ pageId: s }),
                        [R, H] = (0, r.useState)(!1),
                        Y = (0, y.Z)(e.url),
                        O = (0, p.b)(),
                        U = (0, C.P)(),
                        { sendNavigateSearchFeedback: V, sendPlaySearchFeedback: K } = (0, h.z)(),
                        F = (0, x.N)(),
                        {
                            paywall: { modal: Q },
                        } = (0, f.g)(),
                        Z = (0, b.N)(),
                        {
                            isPlaying: q,
                            isCurrent: W,
                            togglePlay: X,
                        } = (0, N.D)({ playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(e.id) }, from: z }, loadContextMeta: !0 } }),
                        G = (0, m.S)({ artist: e, callback: Y }),
                        J = (0, m.S)({ artist: e, callback: X }),
                        tt = (0, _.c)((t) => {
                            null == V || V(), F({ to: n.QT.ArtistScreen }), G(t);
                        }),
                        ti = (0, _.c)(() => {
                            if (!U()) {
                                if (Z) return void Q.open();
                                R || q || (H(!0), null == K || K()), J(), O(!q);
                            }
                        }),
                        te = (0, _.c)((t) => {
                            (0, u.P)(t, T.$f.ripple), tt(t);
                        }),
                        ta = (0, _.c)((t) => {
                            t.stopPropagation(), tt(t);
                        }),
                        tl = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(j.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.name,
                                    className: (0, l.$)(T.$f.playButtonCell, L),
                                    radius: 'round',
                                    alt: $({ id: 'entity-names.artist-name' }, { artistName: e.name }),
                                    ...t,
                                }),
                            [e, L, $],
                        ),
                        ts = null == tl ? void 0 : tl({ onPlayButtonClick: ti, isPlaying: q, isCurrent: W, playButtonIconSize: w }),
                        tr = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(E.N, {
                                          className: (0, l.$)(T.$f.text, T.$f.titleLink),
                                          href: e.url,
                                          onClick: ta,
                                          'data-test-id': c.Kq.artist.SEARCH_ARTIST_CARD_TITLE_LINK,
                                          children: e.name,
                                      })
                                    : (0, a.jsx)(A.HL, { className: (0, l.$)(T.$f.text, T.$f.titleText), size: 'm', variant: 'div', type: 'text', children: e.name }),
                            [e.isAvailable, e.name, e.url, ta],
                        );
                    return (0, a.jsxs)(I.C, {
                        ref: S,
                        'data-intersection-property-id': B,
                        className: (0, l.$)(T.$f.root, { [T.$f.root_disabled]: !e.isAvailable }, i),
                        'aria-label': e.name,
                        onClick: te,
                        'data-test-id': c.Kq.artist.HORIZONTAL_ARTIST_CARD,
                        children: [
                            ts,
                            (0, a.jsx)(P.r, {
                                isDisabled: !e.isAvailable,
                                isDisliked: !1,
                                likesCount: e.actualLikesCount,
                                isLiked: e.isLiked,
                                title: tr,
                                description: g,
                            }),
                            (0, a.jsx)(D, { className: T.$f.controlsBar, artist: e, likeIconSize: M }),
                        ],
                    });
                });
        },
        44884: (t, i, e) => {
            'use strict';
            var a;
            e.d(i, { b: () => a }),
                (function (t) {
                    (t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search');
                })(a || (a = {}));
        },
        50476: (t, i, e) => {
            'use strict';
            e.d(i, { v: () => O });
            var a = e(32290),
                l = e(63618),
                s = e(96103),
                r = e(55178),
                o = e(60900),
                n = e(39407),
                c = e(16172),
                d = e(21732),
                _ = e(71483),
                u = e(91027),
                A = e(58359),
                m = e(82586),
                C = e(71926),
                x = e(71735),
                p = e(47745),
                v = e(2969),
                k = e(23352),
                b = e(72396),
                y = e(5537),
                h = e(84062),
                N = e(28999),
                f = e(90169),
                T = e(57594),
                P = e(5154),
                I = e(78570),
                E = e(1444),
                j = e(61258),
                g = e(40229),
                L = e(13931),
                w = e(73141),
                M = e(54391),
                $ = e(92744),
                S = e(29268),
                B = e(4008),
                z = e(84534),
                D = e.n(z);
            let R = (0, s.PA)((t) => {
                var i;
                let { className: e, playlist: s, likeIconSize: o = 'xxs' } = t,
                    { user: n, trailer: d } = (0, T.g)(),
                    _ = (0, x.P)(),
                    { sendLikeSearchFeedback: A } = (0, N.z)(),
                    C = (0, w.K)(s),
                    [p, v] = (0, r.useState)(!1),
                    k = (0, u.c)(async () => {
                        p || s.isLiked || (v(!0), null == A || A()), await C();
                    }),
                    b = (0, M.F)(),
                    y = (0, u.c)((t) => {
                        if ((t.stopPropagation(), _())) return void t.preventDefault();
                        d.openPlaylistTrailer(s.id), b(c.ky.Playlist, s.id);
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(D().root, D().controls, e, { [D().controls_disabled]: !s.isAvailable }),
                    children: [
                        s.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(B.WithOffline, {
                                        fallback: (0, a.jsx)($.c, {
                                            size: 'xs',
                                            iconSize: o,
                                            className: (0, l.$)(D().item, D().likeIcon),
                                            isLiked: s.isLiked,
                                            onClick: k,
                                            disabled: !n.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                        (0, a.jsx)(B.WithOffline, {
                                            fallback: (0, a.jsx)(S.k, {
                                                className: (0, l.$)(D().item, D().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: y,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, l.$)(D().item, D().item_buttonArrow),
                            children: (0, a.jsx)(m.I, { className: P.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var H = e(61947),
                Y = e.n(H);
            let O = (0, s.PA)((t) => {
                let { className: i, playlist: e, pageId: s, coverClassName: w, playButtonIconSize: M, likeIconSize: $ } = t,
                    { ref: S, intersectionPropertyId: B } = (0, k.n)(),
                    { from: z } = (0, b.f)({ pageId: s }),
                    [D, H] = (0, r.useState)(!1),
                    O = (0, v.b)(),
                    U = (0, L.r)(e),
                    V = e.title || '',
                    { formatMessage: K, formatNumber: F } = (0, o.A)(),
                    Q = (0, x.P)(),
                    { sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: q } = (0, N.z)(),
                    W = (0, p.N)(),
                    {
                        paywall: { modal: X },
                    } = (0, T.g)(),
                    G = (0, y.N)(),
                    {
                        isPlaying: J,
                        isCurrent: tt,
                        togglePlay: ti,
                    } = (0, f.D)({ playContextParams: { contextData: { type: _.K.Playlist, meta: { id: e.id, uuid: e.uuid }, from: z }, loadContextMeta: !0 } }),
                    te = (0, h.Z)(e.url),
                    ta = (0, u.c)((t) => {
                        null == Z || Z(), W({ to: c.QT.PlaylistScreen }), t.preventDefault(), te(t);
                    }),
                    tl = (0, u.c)(() => {
                        if (!Q()) {
                            if (G) return void X.open();
                            D || J || (H(!0), null == q || q()), ti(), O(!J);
                        }
                    }),
                    ts = (0, u.c)((t) => {
                        (0, A.P)(t, P.$f.ripple), ta(t);
                    }),
                    tr = (0, u.c)((t) => {
                        t.stopPropagation(), ta(t);
                    }),
                    to = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(g.q, {
                                isAvailable: e.isAvailable,
                                isDisliked: !1,
                                coverUri: e.coverUri,
                                title: V,
                                className: (0, l.$)(P.$f.playButtonCell, w),
                                alt: K({ id: 'entity-names.playlist-name' }, { playlistName: V }),
                                radius: 'xs',
                                ...t,
                            }),
                        [e, V, w, K],
                    ),
                    tn = null == to ? void 0 : to({ onPlayButtonClick: tl, isPlaying: J, isCurrent: tt, playButtonIconSize: M }),
                    tc = (0, r.useMemo)(
                        () =>
                            e.url && e.isAvailable
                                ? (0, a.jsx)(j.N, { className: (0, l.$)(P.$f.text, P.$f.titleLink), href: e.url, onClick: tr, children: V })
                                : (0, a.jsx)(C.HL, { className: (0, l.$)(P.$f.text, P.$f.titleText), size: 'm', variant: 'div', type: 'text', children: V }),
                        [tr, e.isAvailable, e.url, V],
                    ),
                    td = (0, r.useMemo)(() => {
                        if (void 0 === e.actualLikesCount || void 0 === e.tracksCount) return;
                        let t = (0, a.jsx)(C.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            i = e.isLiked ? 'likedVariant' : 'likeVariant',
                            l = ''.concat(U, ' ').concat(K({ id: 'entity-names.tracks-count' }, { value: e.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: Y().description,
                            'aria-label': l,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: Y().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(m.I, { className: Y().icon, variant: i, size: 'xxs' }),
                                        (0, a.jsx)(C.HL, { variant: 'span', size: 'm', weight: 'medium', children: F(e.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: Y().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(C.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'entity-names.tracks-count', values: { value: F(e.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [K, F, U, e.actualLikesCount, e.isLiked, e.tracksCount]);
                return (0, a.jsxs)(E.C, {
                    ref: S,
                    'data-intersection-property-id': B,
                    className: (0, l.$)(P.$f.root, { [P.$f.root_disabled]: !e.isAvailable }, i),
                    'aria-label': e.title || K({ id: 'entity-names.playlist' }),
                    onClick: ts,
                    'data-test-id': d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD,
                    children: [tn, (0, a.jsx)(I.r, { isDisabled: !e.isAvailable, title: tc, description: td }), (0, a.jsx)(R, { playlist: e, likeIconSize: $ })],
                });
            });
        },
        50880: (t) => {
            t.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        59449: (t) => {
            t.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        61947: (t) => {
            t.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        78570: (t, i, e) => {
            'use strict';
            e.d(i, { r: () => A });
            var a = e(32290),
                l = e(63618),
                s = e(60900),
                r = e(21732),
                o = e(6752),
                n = e(82586),
                c = e(71926),
                d = e(13798),
                _ = e(31640),
                u = e.n(_);
            let A = (t) => {
                let {
                        isDisliked: i,
                        isDisabled: e,
                        description: _,
                        getDescriptionTexts: A,
                        explicitMarkVariant: m,
                        className: C,
                        version: x,
                        title: p,
                        artistsComponent: v,
                        likesCount: k,
                        isLiked: b,
                        releaseYear: y,
                        titleLineClamp: h = 1,
                    } = t,
                    { formatMessage: N, formatNumber: f } = (0, s.A)(),
                    T = (0, o.L)(() => {
                        let t = null == v ? void 0 : v((0, l.$)(u().text, u().artistLink), (0, l.$)(u().text, u().artistCaption));
                        if (!t && !k) return;
                        let i = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof k &&
                                    k > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': N({ id: 'entity-names.likes-counter' }, { counter: k }),
                                        'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(n.I, {
                                                className: u().icon,
                                                variant: b ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: f(k),
                                            }),
                                        ],
                                    }),
                                !!k && t && i,
                                t,
                                !!y && t && i,
                                (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: y }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(u().root, { [u().root_disabled]: e, [u().root_disliked]: i }, C),
                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, a.jsxs)(c.HL, {
                                    className: (0, l.$)(u().text, u().title, { [u().title_withVersion]: x }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: h,
                                    type: 'text',
                                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        p,
                                        x &&
                                            (0, a.jsx)(c.HL, {
                                                className: (0, l.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(x),
                                            }),
                                    ],
                                }),
                                m && (0, a.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: A, variant: m }),
                            ],
                        }),
                        _ &&
                            (0, a.jsx)(c.HL, {
                                className: (0, l.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: _,
                            }),
                        T,
                    ],
                });
            };
        },
        84534: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__mf9o_',
                item: 'ControlsBar_item__4YJMp',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__9hTqa',
                controls: 'ControlsBar_controls__DcFpX',
                likeIcon: 'ControlsBar_likeIcon__g8y02',
                trailerIcon: 'ControlsBar_trailerIcon__iH6eY',
                controls_disabled: 'ControlsBar_controls_disabled___hlf6',
            };
        },
        85015: (t, i, e) => {
            'use strict';
            e.d(i, { h: () => a });
            var a = (function (t) {
                return (t.SMALL = 'small'), (t.LARGE = 'large'), t;
            })({});
        },
        88446: (t, i, e) => {
            'use strict';
            e.d(i, { M: () => Y });
            var a = e(32290),
                l = e(63618),
                s = e(96103),
                r = e(55178),
                o = e(16172),
                n = e(21732),
                c = e(71483),
                d = e(91027),
                _ = e(6752),
                u = e(58359),
                A = e(71926),
                m = e(34883),
                C = e(7462),
                x = e(41677),
                p = e(71735),
                v = e(47745),
                k = e(2969),
                b = e(23352),
                y = e(72396),
                h = e(5537),
                N = e(84062),
                f = e(28999),
                T = e(90169),
                P = e(57594),
                I = e(5154),
                E = e(78570),
                j = e(1444),
                g = e(61258),
                L = e(40229),
                w = e(82586),
                M = e(63363),
                $ = e(54391),
                S = e(92744),
                B = e(29268),
                z = e(4008),
                D = e(20930),
                R = e.n(D);
            let H = (0, s.PA)((t) => {
                    var i;
                    let { className: e, album: s, likeIconSize: n = 'xxs' } = t,
                        { user: c, trailer: _ } = (0, P.g)(),
                        u = (0, p.P)(),
                        { sendLikeSearchFeedback: A } = (0, f.z)(),
                        m = (0, M.K)(s),
                        [C, x] = (0, r.useState)(!1),
                        v = (0, d.c)(async () => {
                            C || s.isLiked || (x(!0), null == A || A()), await m();
                        }),
                        k = (0, $.F)(),
                        b = (0, d.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            _.openAlbumTrailer(s.id), k(o.ky.Album, String(s.id));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(R().root, R().controls, e, { [R().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(z.WithOffline, {
                                            fallback: (0, a.jsx)(S.c, {
                                                size: 'xs',
                                                iconSize: n,
                                                className: (0, l.$)(R().item, R().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: v,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)(z.WithOffline, {
                                                fallback: (0, a.jsx)(B.k, {
                                                    className: (0, l.$)(R().item, R().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: b,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(R().item, R().item_buttonArrow),
                                children: (0, a.jsx)(w.I, { className: I.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                Y = (0, s.PA)((t) => {
                    let { className: i, album: e, pageId: s, coverClassName: w, playButtonIconSize: M, likeIconSize: $, shouldShowReleaseYear: S, description: B } = t,
                        z = (0, C.r)(e.type),
                        { ref: D, intersectionPropertyId: R } = (0, b.n)(),
                        { from: Y } = (0, y.f)({ pageId: s }),
                        [O, U] = (0, r.useState)(!1),
                        V = (0, k.b)(),
                        K = (0, N.Z)(e.url),
                        F = (0, p.P)(),
                        { sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: Z } = (0, f.z)(),
                        q = (0, v.N)(),
                        {
                            paywall: { modal: W },
                        } = (0, P.g)(),
                        X = (0, h.N)(),
                        {
                            isPlaying: G,
                            isCurrent: J,
                            togglePlay: tt,
                        } = (0, T.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: e.id }, from: Y }, loadContextMeta: !0 } }),
                        ti = (0, m.c)({ album: e, callback: K }),
                        te = (0, m.c)({ album: e, callback: tt }),
                        ta = (0, d.c)((t) => {
                            null == Q || Q(), q({ to: o.QT.AlbumScreen }), ti(t);
                        }),
                        tl = (0, d.c)(() => {
                            if (!F()) {
                                if (X) return void W.open();
                                O || G || (U(!0), null == Z || Z()), te(), V(!G);
                            }
                        }),
                        ts = (0, d.c)((t) => {
                            (0, u.P)(t, I.$f.ripple), ta(t);
                        }),
                        tr = (0, d.c)((t) => {
                            t.stopPropagation(), ta(t);
                        }),
                        to = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(L.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: (0, l.$)(I.$f.playButtonCell, w),
                                    alt: ''.concat(z, ' ').concat(e.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [e.coverUri, e.isAvailable, e.title, w, z],
                        ),
                        tn = null == to ? void 0 : to({ onPlayButtonClick: tl, isPlaying: G, isCurrent: J, playButtonIconSize: M }),
                        tc = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(g.N, { className: (0, l.$)(I.$f.text, I.$f.titleLink), href: e.url, onClick: tr, children: e.title })
                                    : (0, a.jsx)(A.HL, { className: (0, l.$)(I.$f.text, I.$f.titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            [e.isAvailable, e.title, e.url, tr],
                        ),
                        td = (0, r.useCallback)(
                            (t, i) => {
                                var l;
                                return (null == (l = e.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(x.i, { linkClassName: t, captionClassName: i, artists: e.artists, lineClamp: 1, withLink: e.isAvailable })
                                    : null;
                            },
                            [e.artists, e.isAvailable],
                        ),
                        t_ = (0, _.L)(() => [e.artistNames, e.title, e.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(j.C, {
                        ref: D,
                        'data-intersection-property-id': R,
                        className: (0, l.$)(I.$f.root, { [I.$f.root_disabled]: !e.isAvailable }, i),
                        'aria-label': t_,
                        onClick: ts,
                        'data-test-id': n.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tn,
                            (0, a.jsx)(E.r, {
                                isDisabled: !e.isAvailable,
                                version: e.version,
                                title: tc,
                                artistsComponent: td,
                                getDescriptionTexts: e.getDescriptionTexts,
                                explicitMarkVariant: e.explicitDisclaimer,
                                likesCount: e.isNonMusic ? e.actualLikesCount : void 0,
                                isLiked: e.isNonMusic ? e.isLiked : void 0,
                                releaseYear: e.isNonMusic && S ? e.year : void 0,
                                description: B,
                            }),
                            (0, a.jsx)(H, { className: I.$f.controlsBar, album: e, likeIconSize: $ }),
                        ],
                    });
                });
        },
        98925: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
    },
]);
