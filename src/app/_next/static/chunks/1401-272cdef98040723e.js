(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1401],
    {
        4196: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => $ });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                n = i(53548),
                r = i(2058),
                o = i(88969),
                c = i(87999),
                d = i(62414),
                _ = i(33979),
                u = i(80643),
                x = i(17392),
                m = i(18593),
                v = i(29993),
                C = i(52073),
                b = i(52300),
                p = i(29504),
                k = i(5407),
                A = i(84384),
                h = i(4795),
                N = i(78940),
                y = i(55693),
                T = i(39079),
                j = i(72288),
                I = i(62270),
                E = i.n(I),
                g = i(76816),
                M = i(8990),
                L = i(91292),
                P = i(39267),
                f = i(47513),
                S = i(85902),
                B = i(57934),
                R = i(49738),
                z = i(56446),
                O = i(64546),
                w = i(94628),
                D = i.n(w);
            let H = (0, s.PA)((t) => {
                var e;
                let { className: i, playlist: s, likeIconSize: r = 'xxs' } = t,
                    { user: o, trailer: d } = (0, j.g)(),
                    _ = (0, k.P)(),
                    { sendLikeSearchFeedback: u } = (0, y.z)(),
                    x = (0, S.K)(s),
                    [m, C] = (0, n.useState)(!1),
                    p = (0, v.c)(async () => {
                        (m || s.isLiked || (C(!0), null == u || u()), await x());
                    }),
                    A = (0, B.F)(),
                    h = (0, v.c)((t) => {
                        if ((t.stopPropagation(), _())) return void t.preventDefault();
                        (d.openPlaylistTrailer(s.id), A(c.DomainObjectType.Playlist, s.id));
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(D().root, D().controls, i, { [D().controls_disabled]: !s.isAvailable }),
                    children: [
                        s.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(O.WithOffline, {
                                        fallback: (0, a.jsx)(R.c, {
                                            size: 'xs',
                                            iconSize: r,
                                            className: (0, l.$)(D().item, D().likeIcon),
                                            isLiked: s.isLiked,
                                            onClick: p,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                        (0, a.jsx)(O.WithOffline, {
                                            fallback: (0, a.jsx)(z.k, {
                                                className: (0, l.$)(D().item, D().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: h,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, l.$)(D().item, D().item_buttonArrow),
                            children: (0, a.jsx)(b.I, { className: E().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var U = i(75937),
                V = i.n(U);
            let $ = (0, s.PA)((t) => {
                let { className: e, playlist: i, pageId: s, coverClassName: I, playButtonIconSize: S, likeIconSize: B } = t,
                    R = (0, d.D)(),
                    { from: z } = (0, A.f)({ pageId: s }),
                    [O, w] = (0, n.useState)(!1),
                    D = (0, _.g)(),
                    U = (0, f.r)(i),
                    $ = i.title || '',
                    { formatMessage: Y, formatNumber: K } = (0, r.A)(),
                    F = (0, k.P)(),
                    { sendNavigateSearchFeedback: q, sendPlaySearchFeedback: W } = (0, y.z)(),
                    Z = (0, u.S)(),
                    {
                        paywall: { modal: X },
                    } = (0, j.g)(),
                    J = (0, h.N)(),
                    {
                        isPlaying: G,
                        isCurrent: Q,
                        togglePlay: tt,
                    } = (0, T.D)({ playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: z }, loadContextMeta: !0 } }),
                    te = (0, N.Z)(i.url),
                    ti = (0, v.c)((t) => {
                        (null == q || q(), Z({ to: c.AppScreen.PlaylistScreen }), t.preventDefault(), te(t));
                    }),
                    ta = (0, v.c)(() => {
                        if (!F()) {
                            if (J) return void X.open();
                            (O || G || (w(!0), null == W || W()), tt(), G || D());
                        }
                    }),
                    tl = (0, v.c)((t) => {
                        ((0, C.P)(t, E().ripple), ti(t));
                    }),
                    ts = (0, v.c)((t) => {
                        (t.stopPropagation(), ti(t));
                    }),
                    tn = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(P.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: $,
                                className: (0, l.$)(E().playButtonCell, I),
                                alt: Y({ id: 'entity-names.playlist-name' }, { playlistName: $ }),
                                radius: 'xs',
                                ...t,
                            }),
                        [i, $, I, Y],
                    ),
                    tr = null == tn ? void 0 : tn({ onPlayButtonClick: ta, isPlaying: G, isCurrent: Q, playButtonIconSize: S }),
                    to = (0, n.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, a.jsx)(L.N, { className: (0, l.$)(E().text, E().titleLink), href: i.url, onClick: ts, children: $ })
                                : (0, a.jsx)(p.HL, { className: (0, l.$)(E().text, E().titleText), size: 'm', variant: 'div', type: 'text', children: $ }),
                        [ts, i.isAvailable, i.url, $],
                    ),
                    tc = (0, n.useMemo)(() => {
                        if (void 0 === i.actualLikesCount || void 0 === i.tracksCount) return;
                        let t = (0, a.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            e = i.isLiked ? 'likedVariant' : 'likeVariant',
                            l = ''.concat(U, ' ').concat(Y({ id: 'entity-names.tracks-count' }, { value: i.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: V().description,
                            'aria-label': l,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: V().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(b.I, { className: V().icon, variant: e, size: 'xxs' }),
                                        (0, a.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', children: K(i.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: V().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'entity-names.tracks-count', values: { value: K(i.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [Y, K, U, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, a.jsxs)(M.C, {
                    ref: R,
                    className: (0, l.$)(E().root, { [E().root_disabled]: !i.isAvailable }, e),
                    'aria-label': i.title || Y({ id: 'entity-names.playlist' }),
                    onClick: tl,
                    'data-test-id': x.Kq.playlist.HORIZONTAL_PLAYLIST_CARD,
                    children: [tr, (0, a.jsx)(g.r, { isDisabled: !i.isAvailable, title: to, description: tc }), (0, a.jsx)(H, { playlist: i, likeIconSize: B })],
                });
            });
        },
        27639: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => H });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                n = i(53548),
                r = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(33979),
                _ = i(80643),
                u = i(17392),
                x = i(18593),
                m = i(29993),
                v = i(52073),
                C = i(29504),
                b = i(91959),
                p = i(5407),
                k = i(84384),
                A = i(4795),
                h = i(78940),
                N = i(55693),
                y = i(39079),
                T = i(72288),
                j = i(62270),
                I = i.n(j),
                E = i(76816),
                g = i(8990),
                M = i(91292),
                L = i(39267),
                P = i(52300),
                f = i(64207),
                S = i(57934),
                B = i(49738),
                R = i(56446),
                z = i(64546),
                O = i(34406),
                w = i.n(O);
            let D = (0, s.PA)((t) => {
                    var e;
                    let { className: i, artist: s, likeIconSize: r = 'xxs' } = t,
                        { user: c, trailer: d } = (0, T.g)(),
                        _ = (0, p.P)(),
                        { sendLikeSearchFeedback: u } = (0, N.z)(),
                        x = (0, f.K)(s),
                        [v, C] = (0, n.useState)(!1),
                        b = (0, m.c)(async () => {
                            (v || s.isLiked || (C(!0), null == u || u()), await x());
                        }),
                        k = (0, S.F)(),
                        A = (0, m.c)((t) => {
                            if ((t.stopPropagation(), _())) return void t.preventDefault();
                            (d.openArtistTrailer(s.id), k(o.DomainObjectType.Artist, s.id));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(w().root, w().controls, i, { [w().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(z.WithOffline, {
                                            fallback: (0, a.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: r,
                                                className: (0, l.$)(w().item, w().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: b,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                            (0, a.jsx)(z.WithOffline, {
                                                fallback: (0, a.jsx)(R.k, {
                                                    className: (0, l.$)(w().item, w().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: A,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(w().item, w().item_buttonArrow),
                                children: (0, a.jsx)(P.I, { className: I().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                H = (0, s.PA)((t) => {
                    let { className: e, artist: i, pageId: s, description: j, coverClassName: P, playButtonIconSize: f, likeIconSize: S } = t,
                        { formatMessage: B } = (0, r.A)(),
                        R = (0, c.D)(),
                        { from: z } = (0, k.f)({ pageId: s }),
                        [O, w] = (0, n.useState)(!1),
                        H = (0, h.Z)(i.url),
                        U = (0, d.g)(),
                        V = (0, p.P)(),
                        { sendNavigateSearchFeedback: $, sendPlaySearchFeedback: Y } = (0, N.z)(),
                        K = (0, _.S)(),
                        {
                            paywall: { modal: F },
                        } = (0, T.g)(),
                        q = (0, A.N)(),
                        {
                            isPlaying: W,
                            isCurrent: Z,
                            togglePlay: X,
                        } = (0, y.D)({ playContextParams: { contextData: { type: x.K.Artist, meta: { id: Number(i.id) }, from: z }, loadContextMeta: !0 } }),
                        J = (0, b.S)({ artist: i, callback: H }),
                        G = (0, b.S)({ artist: i, callback: X }),
                        Q = (0, m.c)((t) => {
                            (null == $ || $(), K({ to: o.AppScreen.ArtistScreen }), J(t));
                        }),
                        tt = (0, m.c)(() => {
                            if (!V()) {
                                if (q) return void F.open();
                                (O || W || (w(!0), null == Y || Y()), G(), W || U());
                            }
                        }),
                        te = (0, m.c)((t) => {
                            ((0, v.P)(t, I().ripple), Q(t));
                        }),
                        ti = (0, m.c)((t) => {
                            (t.stopPropagation(), Q(t));
                        }),
                        ta = (0, n.useCallback)(
                            (t) =>
                                (0, a.jsx)(L.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.name,
                                    className: (0, l.$)(I().playButtonCell, P),
                                    radius: 'round',
                                    alt: B({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                                    ...t,
                                }),
                            [i, P, B],
                        ),
                        tl = null == ta ? void 0 : ta({ onPlayButtonClick: tt, isPlaying: W, isCurrent: Z, playButtonIconSize: f }),
                        ts = (0, n.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, a.jsx)(M.N, {
                                          className: (0, l.$)(I().text, I().titleLink),
                                          href: i.url,
                                          onClick: ti,
                                          'data-test-id': u.Kq.artist.SEARCH_ARTIST_CARD_TITLE_LINK,
                                          children: i.name,
                                      })
                                    : (0, a.jsx)(C.HL, { className: (0, l.$)(I().text, I().titleText), size: 'm', variant: 'div', type: 'text', children: i.name }),
                            [i.isAvailable, i.name, i.url, ti],
                        );
                    return (0, a.jsxs)(g.C, {
                        ref: R,
                        className: (0, l.$)(I().root, { [I().root_disabled]: !i.isAvailable }, e),
                        'aria-label': i.name,
                        onClick: te,
                        'data-test-id': u.Kq.artist.HORIZONTAL_ARTIST_CARD,
                        children: [
                            tl,
                            (0, a.jsx)(E.r, {
                                isDisabled: !i.isAvailable,
                                isDisliked: !1,
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                title: ts,
                                description: j,
                            }),
                            (0, a.jsx)(D, { className: I().controlsBar, artist: i, likeIconSize: S }),
                        ],
                    });
                });
        },
        33932: (t) => {
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
        34250: (t) => {
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
        34406: (t) => {
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
        39631: (t, e, i) => {
            'use strict';
            i.d(e, { _: () => T });
            var a = i(88800),
                l = i(53548),
                s = i(40907),
                n = i(72288),
                r = i(97956),
                o = i(90420),
                c = i(84961),
                d = i(2058),
                _ = i(17392),
                u = i(29993),
                x = i(29832),
                m = i(52300),
                v = i(19934),
                C = i(68974),
                b = i(2147),
                p = i(21869),
                k = i(49738),
                A = i(64546),
                h = i(83559),
                N = i.n(h);
            let y = (0, c.PA)((t) => {
                    let { vibe: e } = t,
                        {
                            settings: { isMobile: i },
                        } = (0, n.g)(),
                        { formatMessage: l } = (0, d.A)(),
                        s = (0, b.K)(e, { showNotificationOnMobile: !0 }),
                        r = (0, u.c)((t) => {
                            t.stopPropagation();
                        });
                    return (0, a.jsx)('div', {
                        className: N().root,
                        onClick: r,
                        onDoubleClick: r,
                        onKeyDown: r,
                        children: (0, a.jsx)(x.hg, {
                            className: N().controls,
                            bottomContainerClassName: N().bottom,
                            isVisible: !0,
                            likeControl: (0, a.jsx)(A.WithOffline, {
                                fallback: (0, a.jsx)('div', {
                                    className: N().like,
                                    children: (0, a.jsx)(k.c, { size: 'xs', iconSize: 'xxs', className: N().likeButton, isLiked: e.isLiked, onClick: s }),
                                }),
                            }),
                            menuControl: (0, a.jsx)('div', {
                                className: N().menu,
                                children: (0, a.jsxs)(v.W1, {
                                    className: N().contextMenuButton,
                                    isMobile: i,
                                    menuClassName: i ? void 0 : N().contextMenu,
                                    variant: 'text',
                                    size: 'xs',
                                    icon: (0, a.jsx)(m.I, { variant: 'more', size: 'xs' }),
                                    ariaLabel: l({ id: 'interface-actions.context-menu' }),
                                    'data-test-id': _.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                                    children: [(0, a.jsx)(A.WithOffline, { fallback: (0, a.jsx)(p.S, { vibe: e, onLikeClick: s }) }), (0, a.jsx)(C.u, { vibe: e })],
                                }),
                            }),
                        }),
                    });
                }),
                T = () => {
                    let {
                        experiments: t,
                        user: { isAuthorized: e },
                    } = (0, n.g)();
                    return (0, l.useCallback)(
                        (i) =>
                            t.checkExperiment(r.z.WebNextWaveLikesAndShares, 'on') && e && i
                                ? i.stationType === o.q7
                                    ? (0, a.jsx)(s.w, { vibe: i })
                                    : i.isLikeEnabled
                                      ? (0, a.jsx)(y, { vibe: i })
                                      : null
                                : null,
                        [t, e],
                    );
                };
        },
        40887: (t, e, i) => {
            'use strict';
            i.d(e, { J: () => _ });
            var a = i(88800),
                l = i(53548),
                s = i(2058),
                n = i(29993),
                r = i(29595),
                o = i(74965),
                c = i(27506),
                d = i(66943);
            let _ = (t) => {
                let { room: e, onRoomSuccessExit: i } = t,
                    [_, u] = (0, l.useState)(!1),
                    { notify: x } = (0, o.l)(),
                    m = (0, l.useRef)(!1),
                    { formatMessage: v } = (0, s.A)();
                return {
                    exitVibeRoom: (0, n.c)(async () => {
                        e &&
                            !m.current &&
                            (u(!0),
                            (m.current = !0),
                            (await e.exitRoom({ roomId: e.id })) === c.F.ERROR
                                ? x((0, a.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: r.u.ERROR })
                                : i(),
                            u(!1),
                            (m.current = !1));
                    }),
                    isPending: _,
                };
            };
        },
        40907: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => S });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                n = i(2058),
                r = i(88969),
                o = i(17392),
                c = i(29993),
                d = i(79070),
                _ = i(78275),
                u = i(98148),
                x = i(52300),
                m = i(19934),
                v = i(21416),
                C = i(29504),
                b = i(29595),
                p = i(74965),
                k = i(4370),
                A = i(78940),
                h = i(72288),
                N = i(74773),
                y = i(66943),
                T = i(59378),
                j = i(56475),
                I = i(87999),
                E = i(70621),
                g = i(40887),
                M = i(16112),
                L = i(89718),
                P = i(59265),
                f = i.n(P);
            let S = (0, s.PA)((t) => {
                var e, i, s;
                let { vibe: P, context: S, className: B, renderContextButton: R } = t,
                    {
                        collection: { vibeRooms: z },
                        settings: { isMobile: O },
                        user: w,
                    } = (0, h.g)(),
                    { formatMessage: D } = (0, n.A)(),
                    { notify: H } = (0, p.l)(),
                    U = (0, A.Z)(k.Z.collectionVibeRooms.href),
                    { state: V, toggleTrue: $, toggleFalse: Y } = (0, _.e)(!1),
                    K = z.items.find((t) => {
                        var e;
                        return (null == t || null == (e = t.wave) ? void 0 : e.pinId) === P.pinId;
                    }),
                    F = z.loadingState === N.G.PENDING,
                    { editVibeRoom: q, isPending: W } = (0, j.h)(K),
                    Z = (0, c.c)(() => {
                        K && z.deleteRoomFromItems(K.id);
                    }),
                    {
                        handlePinClick: X,
                        handleExitClick: J,
                        isExitPending: G,
                    } = ((t) => {
                        let { room: e, onRoomSuccessExit: i } = t,
                            a = (0, M.A)(null == e ? void 0 : e.wave),
                            { exitVibeRoom: l, isPending: s } = (0, g.J)({ room: e, onRoomSuccessExit: i }),
                            n = (0, E.D)();
                        return {
                            handleExitClick: (0, c.c)(async () => {
                                (n({ actionType: I.ActionType.Remove, userInteractionType: I.UserInteractionType.Tap }), await l());
                            }),
                            handlePinClick: (0, c.c)(async () => {
                                (n({ actionType: I.ActionType.Pin, userInteractionType: I.UserInteractionType.Tap }), await a());
                            }),
                            isExitPending: s,
                        };
                    })({ room: K, onRoomSuccessExit: Z }),
                    Q = (0, c.c)(async (t) => {
                        t &&
                            w.isAuthorized &&
                            !W &&
                            !G &&
                            (await z.getData(),
                            z.isRejected && H((0, a.jsx)(y.h, { error: D({ id: 'error-messages.error-during-action' }) }), { containerId: b.u.ERROR }));
                    }),
                    tt = (0, c.c)(() => {
                        Q(!0);
                    }),
                    te = (0, c.c)((t) => {
                        t.stopPropagation();
                    }),
                    ti = (0, c.c)(async (t) => {
                        W || (await q(t), Y());
                    }),
                    ta = (0, d.L)(() =>
                        V && K && !O
                            ? (0, a.jsx)(T.A, {
                                  text: K.name,
                                  className: f().renameInput,
                                  onChangeFinish: ti,
                                  readOnly: W,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: D({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': D({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': o.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    tl = (0, d.L)(() =>
                        F
                            ? (0, a.jsx)('div', {
                                  className: f().loader,
                                  'data-test-id': o.Kq.multivibe.MULTIVIBE_CONTEXT_MENU_LOADER,
                                  children: (0, a.jsx)(v.y, { size: 'xs' }),
                              })
                            : K
                              ? (0, a.jsx)(L.J, { room: K, className: B, onRenameClick: $, onPinClick: X, onExitClick: J, isExitPending: G, isRenamePending: W })
                              : null,
                    ),
                    ts = (0, a.jsxs)(a.Fragment, {
                        children: [
                            tl,
                            K && !F && (0, a.jsx)(u.c, { className: f().divider }),
                            (0, a.jsx)(m.Dr, {
                                className: B,
                                icon: (0, a.jsx)(x.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: U,
                                'data-test-id': o.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, a.jsxs)('span', {
                                    className: f().collection,
                                    children: [
                                        (0, a.jsx)(r.A, { id: 'interface-actions.show-all' }),
                                        (0, a.jsx)(C.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: f().description,
                                            children: (0, a.jsx)(r.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                if (R) return R({ context: null != (e = null == K ? void 0 : K.name) ? e : S, contextControl: ta, onOpenChange: Q, children: ts });
                let tn = null != (s = null != (i = null == K ? void 0 : K.name) ? i : S) ? s : P.title,
                    tr = D({ id: 'interface-actions.context-menu' });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(f().controls, { [f().controls_renaming]: !!ta }),
                    onClick: te,
                    onDoubleClick: te,
                    onKeyDown: te,
                    children: [
                        ta,
                        (0, a.jsx)(m.W1, {
                            className: f().contextMenuButton,
                            wrapperClassName: (0, l.$)({ [f().contextMenu_hidden]: !!ta }),
                            menuClassName: O ? void 0 : f().contextMenu,
                            isMobile: O,
                            size: 'xs',
                            variant: 'text',
                            icon: (0, a.jsx)(x.I, { variant: 'more', size: 'xs' }),
                            ariaLabel: tn ? ''.concat(tn, ': ').concat(tr) : tr,
                            onShow: tt,
                            returnFocus: !ta,
                            'data-test-id': o.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                            children: ts,
                        }),
                    ],
                });
            });
        },
        46811: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => V });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                n = i(53548),
                r = i(87999),
                o = i(62414),
                c = i(33979),
                d = i(80643),
                _ = i(17392),
                u = i(18593),
                x = i(29993),
                m = i(79070),
                v = i(52073),
                C = i(29504),
                b = i(60757),
                p = i(29008),
                k = i(13946),
                A = i(5407),
                h = i(84384),
                N = i(4795),
                y = i(78940),
                T = i(55693),
                j = i(39079),
                I = i(72288),
                E = i(62270),
                g = i.n(E),
                M = i(76816),
                L = i(8990),
                P = i(91292),
                f = i(39267),
                S = i(52300),
                B = i(92966),
                R = i(57934),
                z = i(49738),
                O = i(56446),
                w = i(64546),
                D = i(33932),
                H = i.n(D);
            let U = (0, s.PA)((t) => {
                    var e;
                    let { className: i, album: s, likeIconSize: o = 'xxs' } = t,
                        { user: c, trailer: d } = (0, I.g)(),
                        _ = (0, A.P)(),
                        { sendLikeSearchFeedback: u } = (0, T.z)(),
                        m = (0, B.K)(s),
                        [v, C] = (0, n.useState)(!1),
                        b = (0, x.c)(async () => {
                            (v || s.isLiked || (C(!0), null == u || u()), await m());
                        }),
                        p = (0, R.F)(),
                        k = (0, x.c)((t) => {
                            if ((t.stopPropagation(), _())) return void t.preventDefault();
                            (d.openAlbumTrailer(s.id), p(r.DomainObjectType.Album, String(s.id)));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(H().root, H().controls, i, { [H().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(w.WithOffline, {
                                            fallback: (0, a.jsx)(z.c, {
                                                size: 'xs',
                                                iconSize: o,
                                                className: (0, l.$)(H().item, H().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: b,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                            (0, a.jsx)(w.WithOffline, {
                                                fallback: (0, a.jsx)(O.k, {
                                                    className: (0, l.$)(H().item, H().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: k,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(H().item, H().item_buttonArrow),
                                children: (0, a.jsx)(S.I, { className: g().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                V = (0, s.PA)((t) => {
                    let { className: e, album: i, pageId: s, coverClassName: E, playButtonIconSize: S, likeIconSize: B, shouldShowReleaseYear: R, description: z } = t,
                        O = (0, p.r)(i.type),
                        w = (0, o.D)(),
                        { from: D } = (0, h.f)({ pageId: s }),
                        [H, V] = (0, n.useState)(!1),
                        $ = (0, c.g)(),
                        Y = (0, y.Z)(i.url),
                        K = (0, A.P)(),
                        { sendNavigateSearchFeedback: F, sendPlaySearchFeedback: q } = (0, T.z)(),
                        W = (0, d.S)(),
                        {
                            paywall: { modal: Z },
                        } = (0, I.g)(),
                        X = (0, N.N)(),
                        {
                            isPlaying: J,
                            isCurrent: G,
                            togglePlay: Q,
                        } = (0, j.D)({ playContextParams: { contextData: { type: u.K.Album, meta: { id: i.id }, from: D }, loadContextMeta: !0 } }),
                        tt = (0, b.c)({ album: i, callback: Y }),
                        te = (0, b.c)({ album: i, callback: Q }),
                        ti = (0, x.c)((t) => {
                            (null == F || F(), W({ to: r.AppScreen.AlbumScreen }), tt(t));
                        }),
                        ta = (0, x.c)(() => {
                            if (!K()) {
                                if (X) return void Z.open();
                                (H || J || (V(!0), null == q || q()), te(), J || $());
                            }
                        }),
                        tl = (0, x.c)((t) => {
                            ((0, v.P)(t, g().ripple), ti(t));
                        }),
                        ts = (0, x.c)((t) => {
                            (t.stopPropagation(), ti(t));
                        }),
                        tn = (0, n.useCallback)(
                            (t) =>
                                (0, a.jsx)(f.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, l.$)(g().playButtonCell, E),
                                    alt: ''.concat(O, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [i.coverUri, i.isAvailable, i.title, E, O],
                        ),
                        tr = null == tn ? void 0 : tn({ onPlayButtonClick: ta, isPlaying: J, isCurrent: G, playButtonIconSize: S }),
                        to = (0, n.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, a.jsx)(P.N, { className: (0, l.$)(g().text, g().titleLink), href: i.url, onClick: ts, children: i.title })
                                    : (0, a.jsx)(C.HL, { className: (0, l.$)(g().text, g().titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            [i.isAvailable, i.title, i.url, ts],
                        ),
                        tc = (0, n.useCallback)(
                            (t, e) => {
                                var l;
                                return (null == (l = i.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(k.i, { linkClassName: t, captionClassName: e, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        td = (0, m.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(L.C, {
                        ref: w,
                        className: (0, l.$)(g().root, { [g().root_disabled]: !i.isAvailable }, e),
                        'aria-label': td,
                        onClick: tl,
                        'data-test-id': _.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tr,
                            (0, a.jsx)(M.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: to,
                                artistsComponent: tc,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && R ? i.year : void 0,
                                description: z,
                            }),
                            (0, a.jsx)(U, { className: g().controlsBar, album: i, likeIconSize: B }),
                        ],
                    });
                });
        },
        56475: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => _ });
            var a = i(88800),
                l = i(53548),
                s = i(2058),
                n = i(29993),
                r = i(29595),
                o = i(74965),
                c = i(27506),
                d = i(66943);
            let _ = (t) => {
                let [e, i] = (0, l.useState)(!1),
                    { notify: _ } = (0, o.l)(),
                    u = (0, l.useRef)(!1),
                    { formatMessage: x } = (0, s.A)();
                return {
                    editVibeRoom: (0, n.c)(async (e) => {
                        t &&
                            !u.current &&
                            (i(!0),
                            (u.current = !0),
                            (await t.editRoom({ roomId: t.id, name: e })) === c.F.ERROR &&
                                _((0, a.jsx)(d.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: r.u.ERROR }),
                            i(!1),
                            (u.current = !1));
                    }),
                    isPending: e,
                };
            };
        },
        58378: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => L });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                n = i(53548),
                r = i(62414),
                o = i(33979),
                c = i(17392),
                d = i(18593),
                _ = i(59758),
                u = i(54667),
                x = i(29993),
                m = i(52073),
                v = i(5407),
                C = i(84384),
                b = i(9618),
                p = i(4795),
                k = i(55693),
                A = i(39079),
                h = i(72288),
                N = i(62270),
                y = i.n(N),
                T = i(8990),
                j = i(39267),
                I = i(95993),
                E = i(73805),
                g = i(48215),
                M = i(15232);
            let L = (0, s.PA)((t) => {
                var e;
                let { className: i, track: s, pageId: N, playContextParams: L } = t,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: f } = (0, b.q)(),
                    S = (0, r.D)(),
                    {
                        track: B,
                        settings: { isMobile: R },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    O = (0, p.N)(),
                    { from: w } = (0, C.f)({ pageId: N }),
                    D = (0, o.g)(),
                    H = {
                        contextData: { type: d.K.Various, meta: { id: s.entityId }, from: w, overrideContextType: _.b.Search },
                        queueParams: { index: 0, entityId: s.id },
                        loadContextMeta: !0,
                    },
                    U = null != L ? L : H,
                    { isPlaying: V, isCurrent: $, togglePlay: Y, restartPlay: K } = (0, A.D)({ playContextParams: U, entityId: s.entityId }),
                    F = (0, v.P)(),
                    q = (0, I.w)({ track: s, callback: Y }),
                    W = (0, n.useCallback)(() => {
                        B.open({ trackId: s.id, albumId: s.albumId });
                    }, [B, s.id, s.albumId]),
                    Z = (0, I.w)({ track: s, callback: W }),
                    { sendPlaySearchFeedback: X } = (0, k.z)(),
                    [J, G] = (0, n.useState)(!1),
                    Q = (0, x.c)(() => {
                        if (!F()) {
                            if (P) return void f();
                            if (O) return void z.open();
                            (J || V || (G(!0), null == X || X()), q(), V || D());
                        }
                    }),
                    tt = (0, x.c)(() => {
                        if (V) return void K();
                        Q();
                    }),
                    te = (0, x.c)((t) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (P && s.isAvailableOnlyForPlus && f(), O && s.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (P) return void f();
                        let e = !R && (2 === t.detail || (1 === t.detail && s.hasTrackLink));
                        return O && !e
                            ? void z.open()
                            : ((0, m.P)(t, y().ripple), R)
                              ? void Q()
                              : 2 === t.detail
                                ? void tt()
                                : void (1 === t.detail && s.hasTrackLink && (Z(), O && z.open()));
                    }),
                    ti = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(j.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: y().playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [s],
                    ),
                    ta = null == ti ? void 0 : ti({ onPlayButtonClick: Q, isPlaying: V, isCurrent: $ });
                return (0, a.jsxs)(T.C, {
                    ref: S,
                    className: (0, l.$)(y().root, i),
                    'aria-label': ''
                        .concat(s.artistsNames, ' ')
                        .concat(s.title, ' ')
                        .concat(null != (e = s.version) ? e : ''),
                    onClick: te,
                    'data-test-id': c.Kq.track.SEARCH_TRACK_CARD,
                    children: [
                        ta,
                        s.type === u.S.PODCAST
                            ? (0, a.jsx)(g.w, { track: s, playContextParams: U, withPodcastName: !0, withListeningProgress: !0, withAlbumTitleLink: !R })
                            : (0, a.jsx)(M.j, { withArtistLink: !R, track: s }),
                        (0, a.jsx)(E.Q, { className: y().controlsBarCell, track: s }),
                    ],
                });
            });
        },
        59265: (t) => {
            t.exports = {
                controls: 'MultivibeContextMenu_controls__YNvPC',
                controls_renaming: 'MultivibeContextMenu_controls_renaming__ojUjw',
                contextMenu: 'MultivibeContextMenu_contextMenu__F1lu5',
                contextMenu_hidden: 'MultivibeContextMenu_contextMenu_hidden__01LaD',
                contextMenuButton: 'MultivibeContextMenu_contextMenuButton__7_r0x',
                collection: 'MultivibeContextMenu_collection__7dnDT',
                description: 'MultivibeContextMenu_description__v_EaQ',
                divider: 'MultivibeContextMenu_divider__84xJC',
                loader: 'MultivibeContextMenu_loader__iTBIV',
                renameInput: 'MultivibeContextMenu_renameInput___vU4d',
            };
        },
        59758: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { b: () => a }),
                (function (t) {
                    ((t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search'));
                })(a || (a = {})));
        },
        62270: (t) => {
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
        67665: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => L });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                n = i(53548),
                r = i(62414),
                o = i(64543),
                c = i(33979),
                d = i(17392),
                _ = i(29993),
                u = i(52073),
                x = i(29504),
                m = i(5407),
                v = i(55693),
                C = i(47964),
                b = i(72288),
                p = i(52726),
                k = i(62270),
                A = i.n(k),
                h = i(76816),
                N = i(8990),
                y = i(16704),
                T = i(39267),
                j = i(91198),
                I = i(45347),
                E = i(55211),
                g = i(83307),
                M = i.n(g);
            let L = (0, s.PA)((t) => {
                let { className: e, vibe: i, cover: s, coverClassName: k, playButtonIconSize: g, description: L, agentVariant: P, controls: f } = t,
                    S = (0, r.D)(),
                    { screen: B } = (0, o.j)(),
                    R = null == B ? void 0 : B.pageIdForFrom,
                    [z, O] = (0, n.useState)(!1),
                    { block: w } = (0, o.j)(),
                    D = null == w ? void 0 : w.blockIdForFrom,
                    { freeAccess: H } = (0, b.g)(),
                    { sendPlaySearchFeedback: U } = (0, v.z)(),
                    V = (0, c.g)(),
                    [$, Y] = (0, n.useState)(!1),
                    K = (0, m.P)(),
                    { isPlaying: F, togglePlay: q, isCurrent: W } = (0, C.B)({ seeds: i.seeds, pageIdForFrom: R, blockIdForFrom: D }),
                    Z = (0, _.c)(() => {
                        if (!K()) {
                            if (H.isSearchVibeStartRestricted) return void Y(!0);
                            (z || F || (O(!0), null == U || U()), q(), F || V());
                        }
                    }),
                    X = (0, _.c)(() => {
                        F || Z();
                    }),
                    J = (0, _.c)((t) => {
                        2 === t.detail ? X() : (0, u.P)(t, A().ripple);
                    }),
                    G = (0, n.useCallback)(() => {
                        if (i.shouldShowAgent && i.agent && P)
                            switch (P) {
                                case j.h.LARGE:
                                    return (0, a.jsxs)('div', {
                                        className: (0, l.$)(M().root, A().playButtonCell, k),
                                        children: [
                                            (0, a.jsx)(I.s, { agent: i.agent, isPlaying: F }),
                                            (0, a.jsx)(y.D, {
                                                variant: 'filled',
                                                className: M().playButton,
                                                iconClassName: M().playButtonIcon,
                                                isPlaying: F,
                                                onClick: Z,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case j.h.SMALL:
                                    return (0, a.jsx)(E.n, {
                                        agent: i.agent,
                                        isPlaying: F,
                                        isCurrent: W,
                                        onPlayButtonClick: Z,
                                        alt: ''.concat(L, ' ').concat(i.title),
                                        className: (0, l.$)(A().playButtonCell, k),
                                    });
                            }
                        return (0, a.jsx)(T.q, {
                            isAvailable: !0,
                            coverUri: null == s ? void 0 : s.uri,
                            title: i.title,
                            className: (0, l.$)(A().playButtonCell, k),
                            entityCoverStyle: { backgroundColor: null == s ? void 0 : s.color },
                            radius: 'round',
                            onPlayButtonClick: Z,
                            isPlaying: F,
                            isCurrent: W,
                            playButtonIconSize: g,
                            alt: ''.concat(L, ' ').concat(i.title),
                        });
                    }, [P, null == s ? void 0 : s.color, null == s ? void 0 : s.uri, k, L, Z, W, F, g, i.agent, i.shouldShowAgent, i.title]);
                return (0, a.jsxs)(N.C, {
                    ref: S,
                    className: (0, l.$)(A().root, e),
                    'aria-label': i.title,
                    onClick: J,
                    'data-test-id': d.OA.vibe.SEARCH_VIBE_CARD,
                    children: [
                        (0, a.jsx)(p.S, {
                            isOpened: $,
                            onOpenChange: Y,
                            isEnabled: H.isSearchVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: i.stationType,
                            renderChildren: G,
                        }),
                        (0, a.jsx)(h.r, {
                            title: (0, a.jsx)(x.HL, { className: (0, l.$)(A().text, A().titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            description: L,
                        }),
                        f,
                    ],
                });
            });
        },
        75937: (t) => {
            t.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        76816: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => x });
            var a = i(88800),
                l = i(65724),
                s = i(2058),
                n = i(17392),
                r = i(79070),
                o = i(52300),
                c = i(29504),
                d = i(90224),
                _ = i(34250),
                u = i.n(_);
            let x = (t) => {
                let {
                        isDisliked: e,
                        isDisabled: i,
                        description: _,
                        getDescriptionTexts: x,
                        explicitMarkVariant: m,
                        className: v,
                        version: C,
                        title: b,
                        artistsComponent: p,
                        likesCount: k,
                        isLiked: A,
                        releaseYear: h,
                        titleLineClamp: N = 1,
                    } = t,
                    { formatMessage: y, formatNumber: T } = (0, s.A)(),
                    j = (0, r.L)(() => {
                        let t = null == p ? void 0 : p((0, l.$)(u().text, u().artistLink), (0, l.$)(u().text, u().artistCaption));
                        if (!t && !k) return;
                        let e = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof k &&
                                    k > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': y({ id: 'entity-names.likes-counter' }, { counter: k }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(o.I, {
                                                className: u().icon,
                                                variant: A ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: T(k),
                                            }),
                                        ],
                                    }),
                                !!k && t && e,
                                t,
                                !!h && t && e,
                                (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: h }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(u().root, { [u().root_disabled]: i, [u().root_disliked]: e }, v),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, a.jsxs)(c.HL, {
                                    className: (0, l.$)(u().text, u().title, { [u().title_withVersion]: C }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: N,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        b,
                                        C &&
                                            (0, a.jsx)(c.HL, {
                                                className: (0, l.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(C),
                                            }),
                                    ],
                                }),
                                m && (0, a.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: x, variant: m }),
                            ],
                        }),
                        _ &&
                            (0, a.jsx)(c.HL, {
                                className: (0, l.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: _,
                            }),
                        j,
                    ],
                });
            };
        },
        83307: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
        83559: (t) => {
            t.exports = {
                root: 'HorizontalVibeControls_root__S1iQK',
                controls: 'HorizontalVibeControls_controls__AYIDP',
                bottom: 'HorizontalVibeControls_bottom__R4Elh',
                like: 'HorizontalVibeControls_like__ty4og',
                likeButton: 'HorizontalVibeControls_likeButton__77s_p',
                menu: 'HorizontalVibeControls_menu__83kQh',
                contextMenu: 'HorizontalVibeControls_contextMenu__rXU6_',
                contextMenuButton: 'HorizontalVibeControls_contextMenuButton__vX_59',
            };
        },
        89718: (t, e, i) => {
            'use strict';
            i.d(e, { J: () => u });
            var a = i(88800),
                l = i(84961),
                s = i(88969),
                n = i(17392),
                r = i(52300),
                o = i(19934),
                c = i(21416),
                d = i(72288),
                _ = i(27817);
            let u = (0, l.PA)((t) => {
                var e;
                let { room: i, onRenameClick: l, isRenamePending: u, onPinClick: x, onExitClick: m, isExitPending: v, className: C } = t,
                    {
                        settings: { isMobile: b },
                    } = (0, d.g)(),
                    p = !(null == i ? void 0 : i.isDisabled) && !b,
                    k = !(null == i ? void 0 : i.isDisabled) && !b;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        p && (0, a.jsx)(_.L, { className: C, onClick: x, isPinned: null == (e = i.wave) ? void 0 : e.isPinned }),
                        k &&
                            (0, a.jsx)(o.Dr, {
                                className: C,
                                icon: (0, a.jsx)(r.I, { variant: 'edit', size: 'xxs' }),
                                onClick: l,
                                disabled: u,
                                spinner: u ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': n.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(s.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(o.Dr, {
                            className: C,
                            icon: (0, a.jsx)(r.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: m,
                            disabled: v,
                            spinner: v ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': n.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(s.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        91198: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => a });
            var a = (function (t) {
                return ((t.SMALL = 'small'), (t.LARGE = 'large'), t);
            })({});
        },
        94628: (t) => {
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
    },
]);
