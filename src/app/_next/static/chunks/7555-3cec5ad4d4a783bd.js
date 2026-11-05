(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7555],
    {
        4196: (t, i, e) => {
            'use strict';
            e.d(i, { v: () => q });
            var a = e(88800),
                l = e(65724),
                s = e(84961),
                r = e(53548),
                o = e(2058),
                n = e(88969),
                c = e(87999),
                d = e(62414),
                u = e(33979),
                m = e(80643),
                _ = e(17392),
                v = e(18593),
                C = e(29993),
                x = e(52073),
                p = e(52300),
                b = e(29504),
                k = e(5407),
                A = e(84384),
                h = e(4795),
                y = e(78940),
                j = e(55693),
                N = e(39079),
                f = e(72288),
                P = e(62270),
                g = e.n(P),
                S = e(76816),
                L = e(8990),
                I = e(91292),
                B = e(39267),
                z = e(47513),
                w = e(85902),
                D = e(57934),
                T = e(49738),
                $ = e(56446),
                R = e(64546),
                H = e(94628),
                O = e.n(H);
            let M = (0, s.PA)((t) => {
                var i;
                let { className: e, playlist: s, likeIconSize: o = 'xxs' } = t,
                    { user: n, trailer: d } = (0, f.g)(),
                    u = (0, k.P)(),
                    { sendLikeSearchFeedback: m } = (0, j.z)(),
                    _ = (0, w.K)(s),
                    [v, x] = (0, r.useState)(!1),
                    b = (0, C.c)(async () => {
                        (v || s.isLiked || (x(!0), null == m || m()), await _());
                    }),
                    A = (0, D.F)(),
                    h = (0, C.c)((t) => {
                        if ((t.stopPropagation(), u())) return void t.preventDefault();
                        (d.openPlaylistTrailer(s.id), A(c.DomainObjectType.Playlist, s.id));
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(O().root, O().controls, e, { [O().controls_disabled]: !s.isAvailable }),
                    children: [
                        s.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(R.WithOffline, {
                                        fallback: (0, a.jsx)(T.c, {
                                            size: 'xs',
                                            iconSize: o,
                                            className: (0, l.$)(O().item, O().likeIcon),
                                            isLiked: s.isLiked,
                                            onClick: b,
                                            disabled: !n.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                        (0, a.jsx)(R.WithOffline, {
                                            fallback: (0, a.jsx)($.k, {
                                                className: (0, l.$)(O().item, O().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: h,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, l.$)(O().item, O().item_buttonArrow),
                            children: (0, a.jsx)(p.I, { className: g().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var F = e(75937),
                K = e.n(F);
            let q = (0, s.PA)((t) => {
                let { className: i, playlist: e, pageId: s, coverClassName: P, playButtonIconSize: w, likeIconSize: D } = t,
                    T = (0, d.D)(),
                    { from: $ } = (0, A.f)({ pageId: s }),
                    [R, H] = (0, r.useState)(!1),
                    O = (0, u.g)(),
                    F = (0, z.r)(e),
                    q = e.title || '',
                    { formatMessage: U, formatNumber: V } = (0, o.A)(),
                    Z = (0, k.P)(),
                    { sendNavigateSearchFeedback: Y, sendPlaySearchFeedback: E } = (0, j.z)(),
                    W = (0, m.S)(),
                    {
                        paywall: { modal: J },
                    } = (0, f.g)(),
                    G = (0, h.N)(),
                    {
                        isPlaying: Q,
                        isCurrent: X,
                        togglePlay: tt,
                    } = (0, N.D)({ playContextParams: { contextData: { type: v.K.Playlist, meta: { id: e.id, uuid: e.uuid }, from: $ }, loadContextMeta: !0 } }),
                    ti = (0, y.Z)(e.url),
                    te = (0, C.c)((t) => {
                        (null == Y || Y(), W({ to: c.AppScreen.PlaylistScreen }), t.preventDefault(), ti(t));
                    }),
                    ta = (0, C.c)(() => {
                        if (!Z()) {
                            if (G) return void J.open();
                            (R || Q || (H(!0), null == E || E()), tt(), Q || O());
                        }
                    }),
                    tl = (0, C.c)((t) => {
                        ((0, x.P)(t, g().ripple), te(t));
                    }),
                    ts = (0, C.c)((t) => {
                        (t.stopPropagation(), te(t));
                    }),
                    tr = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(B.q, {
                                isAvailable: e.isAvailable,
                                isDisliked: !1,
                                coverUri: e.coverUri,
                                title: q,
                                className: (0, l.$)(g().playButtonCell, P),
                                alt: U({ id: 'entity-names.playlist-name' }, { playlistName: q }),
                                radius: 'xs',
                                ...t,
                            }),
                        [e, q, P, U],
                    ),
                    to = null == tr ? void 0 : tr({ onPlayButtonClick: ta, isPlaying: Q, isCurrent: X, playButtonIconSize: w }),
                    tn = (0, r.useMemo)(
                        () =>
                            e.url && e.isAvailable
                                ? (0, a.jsx)(I.N, { className: (0, l.$)(g().text, g().titleLink), href: e.url, onClick: ts, children: q })
                                : (0, a.jsx)(b.HL, { className: (0, l.$)(g().text, g().titleText), size: 'm', variant: 'div', type: 'text', children: q }),
                        [ts, e.isAvailable, e.url, q],
                    ),
                    tc = (0, r.useMemo)(() => {
                        if (void 0 === e.actualLikesCount || void 0 === e.tracksCount) return;
                        let t = (0, a.jsx)(b.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            i = e.isLiked ? 'likedVariant' : 'likeVariant',
                            l = ''.concat(F, ' ').concat(U({ id: 'entity-names.tracks-count' }, { value: e.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: K().description,
                            'aria-label': l,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: K().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(p.I, { className: K().icon, variant: i, size: 'xxs' }),
                                        (0, a.jsx)(b.HL, { variant: 'span', size: 'm', weight: 'medium', children: V(e.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: K().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(b.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'entity-names.tracks-count', values: { value: V(e.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [U, V, F, e.actualLikesCount, e.isLiked, e.tracksCount]);
                return (0, a.jsxs)(L.C, {
                    ref: T,
                    className: (0, l.$)(g().root, { [g().root_disabled]: !e.isAvailable }, i),
                    'aria-label': e.title || U({ id: 'entity-names.playlist' }),
                    onClick: tl,
                    'data-test-id': _.Kq.playlist.HORIZONTAL_PLAYLIST_CARD,
                    children: [to, (0, a.jsx)(S.r, { isDisabled: !e.isAvailable, title: tn, description: tc }), (0, a.jsx)(M, { playlist: e, likeIconSize: D })],
                });
            });
        },
        27639: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => M });
            var a = e(88800),
                l = e(65724),
                s = e(84961),
                r = e(53548),
                o = e(2058),
                n = e(87999),
                c = e(62414),
                d = e(33979),
                u = e(80643),
                m = e(17392),
                _ = e(18593),
                v = e(29993),
                C = e(52073),
                x = e(29504),
                p = e(91959),
                b = e(5407),
                k = e(84384),
                A = e(4795),
                h = e(78940),
                y = e(55693),
                j = e(39079),
                N = e(72288),
                f = e(62270),
                P = e.n(f),
                g = e(76816),
                S = e(8990),
                L = e(91292),
                I = e(39267),
                B = e(52300),
                z = e(64207),
                w = e(57934),
                D = e(49738),
                T = e(56446),
                $ = e(64546),
                R = e(34406),
                H = e.n(R);
            let O = (0, s.PA)((t) => {
                    var i;
                    let { className: e, artist: s, likeIconSize: o = 'xxs' } = t,
                        { user: c, trailer: d } = (0, N.g)(),
                        u = (0, b.P)(),
                        { sendLikeSearchFeedback: m } = (0, y.z)(),
                        _ = (0, z.K)(s),
                        [C, x] = (0, r.useState)(!1),
                        p = (0, v.c)(async () => {
                            (C || s.isLiked || (x(!0), null == m || m()), await _());
                        }),
                        k = (0, w.F)(),
                        A = (0, v.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (d.openArtistTrailer(s.id), k(n.DomainObjectType.Artist, s.id));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(H().root, H().controls, e, { [H().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)($.WithOffline, {
                                            fallback: (0, a.jsx)(D.c, {
                                                size: 'xs',
                                                iconSize: o,
                                                className: (0, l.$)(H().item, H().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: p,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)($.WithOffline, {
                                                fallback: (0, a.jsx)(T.k, {
                                                    className: (0, l.$)(H().item, H().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: A,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(H().item, H().item_buttonArrow),
                                children: (0, a.jsx)(B.I, { className: P().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                M = (0, s.PA)((t) => {
                    let { className: i, artist: e, pageId: s, description: f, coverClassName: B, playButtonIconSize: z, likeIconSize: w } = t,
                        { formatMessage: D } = (0, o.A)(),
                        T = (0, c.D)(),
                        { from: $ } = (0, k.f)({ pageId: s }),
                        [R, H] = (0, r.useState)(!1),
                        M = (0, h.Z)(e.url),
                        F = (0, d.g)(),
                        K = (0, b.P)(),
                        { sendNavigateSearchFeedback: q, sendPlaySearchFeedback: U } = (0, y.z)(),
                        V = (0, u.S)(),
                        {
                            paywall: { modal: Z },
                        } = (0, N.g)(),
                        Y = (0, A.N)(),
                        {
                            isPlaying: E,
                            isCurrent: W,
                            togglePlay: J,
                        } = (0, j.D)({ playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(e.id) }, from: $ }, loadContextMeta: !0 } }),
                        G = (0, p.S)({ artist: e, callback: M }),
                        Q = (0, p.S)({ artist: e, callback: J }),
                        X = (0, v.c)((t) => {
                            (null == q || q(), V({ to: n.AppScreen.ArtistScreen }), G(t));
                        }),
                        tt = (0, v.c)(() => {
                            if (!K()) {
                                if (Y) return void Z.open();
                                (R || E || (H(!0), null == U || U()), Q(), E || F());
                            }
                        }),
                        ti = (0, v.c)((t) => {
                            ((0, C.P)(t, P().ripple), X(t));
                        }),
                        te = (0, v.c)((t) => {
                            (t.stopPropagation(), X(t));
                        }),
                        ta = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(I.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.name,
                                    className: (0, l.$)(P().playButtonCell, B),
                                    radius: 'round',
                                    alt: D({ id: 'entity-names.artist-name' }, { artistName: e.name }),
                                    ...t,
                                }),
                            [e, B, D],
                        ),
                        tl = null == ta ? void 0 : ta({ onPlayButtonClick: tt, isPlaying: E, isCurrent: W, playButtonIconSize: z }),
                        ts = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(L.N, {
                                          className: (0, l.$)(P().text, P().titleLink),
                                          href: e.url,
                                          onClick: te,
                                          'data-test-id': m.Kq.artist.SEARCH_ARTIST_CARD_TITLE_LINK,
                                          children: e.name,
                                      })
                                    : (0, a.jsx)(x.HL, { className: (0, l.$)(P().text, P().titleText), size: 'm', variant: 'div', type: 'text', children: e.name }),
                            [e.isAvailable, e.name, e.url, te],
                        );
                    return (0, a.jsxs)(S.C, {
                        ref: T,
                        className: (0, l.$)(P().root, { [P().root_disabled]: !e.isAvailable }, i),
                        'aria-label': e.name,
                        onClick: ti,
                        'data-test-id': m.Kq.artist.HORIZONTAL_ARTIST_CARD,
                        children: [
                            tl,
                            (0, a.jsx)(g.r, {
                                isDisabled: !e.isAvailable,
                                isDisliked: !1,
                                likesCount: e.actualLikesCount,
                                isLiked: e.isLiked,
                                title: ts,
                                description: f,
                            }),
                            (0, a.jsx)(O, { className: P().controlsBar, artist: e, likeIconSize: w }),
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
        46811: (t, i, e) => {
            'use strict';
            e.d(i, { M: () => K });
            var a = e(88800),
                l = e(65724),
                s = e(84961),
                r = e(53548),
                o = e(87999),
                n = e(62414),
                c = e(33979),
                d = e(80643),
                u = e(17392),
                m = e(18593),
                _ = e(29993),
                v = e(79070),
                C = e(52073),
                x = e(29504),
                p = e(60757),
                b = e(29008),
                k = e(13946),
                A = e(5407),
                h = e(84384),
                y = e(4795),
                j = e(78940),
                N = e(55693),
                f = e(39079),
                P = e(72288),
                g = e(62270),
                S = e.n(g),
                L = e(76816),
                I = e(8990),
                B = e(91292),
                z = e(39267),
                w = e(52300),
                D = e(92966),
                T = e(57934),
                $ = e(49738),
                R = e(56446),
                H = e(64546),
                O = e(33932),
                M = e.n(O);
            let F = (0, s.PA)((t) => {
                    var i;
                    let { className: e, album: s, likeIconSize: n = 'xxs' } = t,
                        { user: c, trailer: d } = (0, P.g)(),
                        u = (0, A.P)(),
                        { sendLikeSearchFeedback: m } = (0, N.z)(),
                        v = (0, D.K)(s),
                        [C, x] = (0, r.useState)(!1),
                        p = (0, _.c)(async () => {
                            (C || s.isLiked || (x(!0), null == m || m()), await v());
                        }),
                        b = (0, T.F)(),
                        k = (0, _.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (d.openAlbumTrailer(s.id), b(o.DomainObjectType.Album, String(s.id)));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(M().root, M().controls, e, { [M().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(H.WithOffline, {
                                            fallback: (0, a.jsx)($.c, {
                                                size: 'xs',
                                                iconSize: n,
                                                className: (0, l.$)(M().item, M().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: p,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)(H.WithOffline, {
                                                fallback: (0, a.jsx)(R.k, {
                                                    className: (0, l.$)(M().item, M().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: k,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(M().item, M().item_buttonArrow),
                                children: (0, a.jsx)(w.I, { className: S().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                K = (0, s.PA)((t) => {
                    let { className: i, album: e, pageId: s, coverClassName: g, playButtonIconSize: w, likeIconSize: D, shouldShowReleaseYear: T, description: $ } = t,
                        R = (0, b.r)(e.type),
                        H = (0, n.D)(),
                        { from: O } = (0, h.f)({ pageId: s }),
                        [M, K] = (0, r.useState)(!1),
                        q = (0, c.g)(),
                        U = (0, j.Z)(e.url),
                        V = (0, A.P)(),
                        { sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: Y } = (0, N.z)(),
                        E = (0, d.S)(),
                        {
                            paywall: { modal: W },
                        } = (0, P.g)(),
                        J = (0, y.N)(),
                        {
                            isPlaying: G,
                            isCurrent: Q,
                            togglePlay: X,
                        } = (0, f.D)({ playContextParams: { contextData: { type: m.K.Album, meta: { id: e.id }, from: O }, loadContextMeta: !0 } }),
                        tt = (0, p.c)({ album: e, callback: U }),
                        ti = (0, p.c)({ album: e, callback: X }),
                        te = (0, _.c)((t) => {
                            (null == Z || Z(), E({ to: o.AppScreen.AlbumScreen }), tt(t));
                        }),
                        ta = (0, _.c)(() => {
                            if (!V()) {
                                if (J) return void W.open();
                                (M || G || (K(!0), null == Y || Y()), ti(), G || q());
                            }
                        }),
                        tl = (0, _.c)((t) => {
                            ((0, C.P)(t, S().ripple), te(t));
                        }),
                        ts = (0, _.c)((t) => {
                            (t.stopPropagation(), te(t));
                        }),
                        tr = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(z.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: (0, l.$)(S().playButtonCell, g),
                                    alt: ''.concat(R, ' ').concat(e.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [e.coverUri, e.isAvailable, e.title, g, R],
                        ),
                        to = null == tr ? void 0 : tr({ onPlayButtonClick: ta, isPlaying: G, isCurrent: Q, playButtonIconSize: w }),
                        tn = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(B.N, { className: (0, l.$)(S().text, S().titleLink), href: e.url, onClick: ts, children: e.title })
                                    : (0, a.jsx)(x.HL, { className: (0, l.$)(S().text, S().titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            [e.isAvailable, e.title, e.url, ts],
                        ),
                        tc = (0, r.useCallback)(
                            (t, i) => {
                                var l;
                                return (null == (l = e.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(k.i, { linkClassName: t, captionClassName: i, artists: e.artists, lineClamp: 1, withLink: e.isAvailable })
                                    : null;
                            },
                            [e.artists, e.isAvailable],
                        ),
                        td = (0, v.L)(() => [e.artistNames, e.title, e.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(I.C, {
                        ref: H,
                        className: (0, l.$)(S().root, { [S().root_disabled]: !e.isAvailable }, i),
                        'aria-label': td,
                        onClick: tl,
                        'data-test-id': u.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            to,
                            (0, a.jsx)(L.r, {
                                isDisabled: !e.isAvailable,
                                version: e.version,
                                title: tn,
                                artistsComponent: tc,
                                getDescriptionTexts: e.getDescriptionTexts,
                                explicitMarkVariant: e.explicitDisclaimer,
                                likesCount: e.isNonMusic ? e.actualLikesCount : void 0,
                                isLiked: e.isNonMusic ? e.isLiked : void 0,
                                releaseYear: e.isNonMusic && T ? e.year : void 0,
                                description: $,
                            }),
                            (0, a.jsx)(F, { className: S().controlsBar, album: e, likeIconSize: D }),
                        ],
                    });
                });
        },
        58378: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => I });
            var a = e(88800),
                l = e(65724),
                s = e(84961),
                r = e(53548),
                o = e(62414),
                n = e(33979),
                c = e(17392),
                d = e(18593),
                u = e(59758),
                m = e(54667),
                _ = e(29993),
                v = e(52073),
                C = e(5407),
                x = e(84384),
                p = e(9618),
                b = e(4795),
                k = e(55693),
                A = e(39079),
                h = e(72288),
                y = e(62270),
                j = e.n(y),
                N = e(8990),
                f = e(39267),
                P = e(95993),
                g = e(73805),
                S = e(48215),
                L = e(15232);
            let I = (0, s.PA)((t) => {
                var i;
                let { className: e, track: s, pageId: y, playContextParams: I } = t,
                    { shouldShowBuySubscriptionModal: B, showBuySubscriptionModal: z } = (0, p.q)(),
                    w = (0, o.D)(),
                    {
                        track: D,
                        settings: { isMobile: T },
                        paywall: { modal: $ },
                    } = (0, h.g)(),
                    R = (0, b.N)(),
                    { from: H } = (0, x.f)({ pageId: y }),
                    O = (0, n.g)(),
                    M = {
                        contextData: { type: d.K.Various, meta: { id: s.entityId }, from: H, overrideContextType: u.b.Search },
                        queueParams: { index: 0, entityId: s.id },
                        loadContextMeta: !0,
                    },
                    F = null != I ? I : M,
                    { isPlaying: K, isCurrent: q, togglePlay: U, restartPlay: V } = (0, A.D)({ playContextParams: F, entityId: s.entityId }),
                    Z = (0, C.P)(),
                    Y = (0, P.w)({ track: s, callback: U }),
                    E = (0, r.useCallback)(() => {
                        D.open({ trackId: s.id, albumId: s.albumId });
                    }, [D, s.id, s.albumId]),
                    W = (0, P.w)({ track: s, callback: E }),
                    { sendPlaySearchFeedback: J } = (0, k.z)(),
                    [G, Q] = (0, r.useState)(!1),
                    X = (0, _.c)(() => {
                        if (!Z()) {
                            if (B) return void z();
                            if (R) return void $.open();
                            (G || K || (Q(!0), null == J || J()), Y(), K || O());
                        }
                    }),
                    tt = (0, _.c)(() => {
                        if (K) return void V();
                        X();
                    }),
                    ti = (0, _.c)((t) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (B && s.isAvailableOnlyForPlus && z(), R && s.isAvailableOnlyForPlus && $.open());
                            return;
                        }
                        if (B) return void z();
                        let i = !T && (2 === t.detail || (1 === t.detail && s.hasTrackLink));
                        return R && !i
                            ? void $.open()
                            : ((0, v.P)(t, j().ripple), T)
                              ? void X()
                              : 2 === t.detail
                                ? void tt()
                                : void (1 === t.detail && s.hasTrackLink && (W(), R && $.open()));
                    }),
                    te = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(f.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: j().playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [s],
                    ),
                    ta = null == te ? void 0 : te({ onPlayButtonClick: X, isPlaying: K, isCurrent: q });
                return (0, a.jsxs)(N.C, {
                    ref: w,
                    className: (0, l.$)(j().root, e),
                    'aria-label': ''
                        .concat(s.artistsNames, ' ')
                        .concat(s.title, ' ')
                        .concat(null != (i = s.version) ? i : ''),
                    onClick: ti,
                    'data-test-id': c.Kq.track.SEARCH_TRACK_CARD,
                    children: [
                        ta,
                        s.type === m.S.PODCAST
                            ? (0, a.jsx)(S.w, { track: s, playContextParams: F, withPodcastName: !0, withListeningProgress: !0, withAlbumTitleLink: !T })
                            : (0, a.jsx)(L.j, { withArtistLink: !T, track: s }),
                        (0, a.jsx)(g.Q, { className: j().controlsBarCell, track: s }),
                    ],
                });
            });
        },
        59758: (t, i, e) => {
            'use strict';
            var a;
            (e.d(i, { b: () => a }),
                (function (t) {
                    ((t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search'));
                })(a || (a = {})));
        },
        67665: (t, i, e) => {
            'use strict';
            e.d(i, { H: () => I });
            var a = e(88800),
                l = e(65724),
                s = e(84961),
                r = e(53548),
                o = e(62414),
                n = e(64543),
                c = e(33979),
                d = e(17392),
                u = e(29993),
                m = e(52073),
                _ = e(29504),
                v = e(5407),
                C = e(55693),
                x = e(47964),
                p = e(72288),
                b = e(52726),
                k = e(62270),
                A = e.n(k),
                h = e(76816),
                y = e(8990),
                j = e(16704),
                N = e(39267),
                f = e(91198),
                P = e(45347),
                g = e(55211),
                S = e(83307),
                L = e.n(S);
            let I = (0, s.PA)((t) => {
                let { className: i, vibe: e, cover: s, coverClassName: k, playButtonIconSize: S, description: I, agentVariant: B, controls: z } = t,
                    w = (0, o.D)(),
                    { screen: D } = (0, n.j)(),
                    T = null == D ? void 0 : D.pageIdForFrom,
                    [$, R] = (0, r.useState)(!1),
                    { block: H } = (0, n.j)(),
                    O = null == H ? void 0 : H.blockIdForFrom,
                    { freeAccess: M } = (0, p.g)(),
                    { sendPlaySearchFeedback: F } = (0, C.z)(),
                    K = (0, c.g)(),
                    [q, U] = (0, r.useState)(!1),
                    V = (0, v.P)(),
                    { isPlaying: Z, togglePlay: Y, isCurrent: E } = (0, x.B)({ seeds: e.seeds, pageIdForFrom: T, blockIdForFrom: O }),
                    W = (0, u.c)(() => {
                        if (!V()) {
                            if (M.isSearchVibeStartRestricted) return void U(!0);
                            ($ || Z || (R(!0), null == F || F()), Y(), Z || K());
                        }
                    }),
                    J = (0, u.c)(() => {
                        Z || W();
                    }),
                    G = (0, u.c)((t) => {
                        2 === t.detail ? J() : (0, m.P)(t, A().ripple);
                    }),
                    Q = (0, r.useCallback)(() => {
                        if (e.shouldShowAgent && e.agent && B)
                            switch (B) {
                                case f.h.LARGE:
                                    return (0, a.jsxs)('div', {
                                        className: (0, l.$)(L().root, A().playButtonCell, k),
                                        children: [
                                            (0, a.jsx)(P.s, { agent: e.agent, isPlaying: Z }),
                                            (0, a.jsx)(j.D, {
                                                variant: 'filled',
                                                className: L().playButton,
                                                iconClassName: L().playButtonIcon,
                                                isPlaying: Z,
                                                onClick: W,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case f.h.SMALL:
                                    return (0, a.jsx)(g.n, {
                                        agent: e.agent,
                                        isPlaying: Z,
                                        isCurrent: E,
                                        onPlayButtonClick: W,
                                        alt: ''.concat(I, ' ').concat(e.title),
                                        className: (0, l.$)(A().playButtonCell, k),
                                    });
                            }
                        return (0, a.jsx)(N.q, {
                            isAvailable: !0,
                            coverUri: null == s ? void 0 : s.uri,
                            title: e.title,
                            className: (0, l.$)(A().playButtonCell, k),
                            entityCoverStyle: { backgroundColor: null == s ? void 0 : s.color },
                            radius: 'round',
                            onPlayButtonClick: W,
                            isPlaying: Z,
                            isCurrent: E,
                            playButtonIconSize: S,
                            alt: ''.concat(I, ' ').concat(e.title),
                        });
                    }, [B, null == s ? void 0 : s.color, null == s ? void 0 : s.uri, k, I, W, E, Z, S, e.agent, e.shouldShowAgent, e.title]);
                return (0, a.jsxs)(y.C, {
                    ref: w,
                    className: (0, l.$)(A().root, i),
                    'aria-label': e.title,
                    onClick: G,
                    'data-test-id': d.OA.vibe.SEARCH_VIBE_CARD,
                    children: [
                        (0, a.jsx)(b.S, {
                            isOpened: q,
                            onOpenChange: U,
                            isEnabled: M.isSearchVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: e.stationType,
                            renderChildren: Q,
                        }),
                        (0, a.jsx)(h.r, {
                            title: (0, a.jsx)(_.HL, { className: (0, l.$)(A().text, A().titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            description: I,
                        }),
                        z,
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
        83307: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
        91198: (t, i, e) => {
            'use strict';
            e.d(i, { h: () => a });
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
