(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5853],
    {
        4139: (t) => {
            t.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        18608: (t, i, e) => {
            'use strict';
            e.d(i, { v: () => K });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                n = e(39004),
                o = e(8487),
                c = e(36619),
                d = e(61493),
                _ = e(22939),
                u = e(71035),
                m = e(11823),
                C = e(66738),
                x = e(4254),
                p = e(79367),
                v = e(29481),
                b = e(47009),
                k = e(52512),
                A = e(30290),
                y = e(61561),
                h = e(85686),
                N = e(85743),
                T = e(50209),
                j = e(27954),
                I = e(79856),
                L = e.n(I),
                E = e(77698),
                S = e(18284),
                P = e(97522),
                f = e(6349),
                B = e(41459),
                g = e(62948),
                z = e(34159),
                w = e(64720),
                M = e(71996),
                D = e(6304),
                R = e(95814),
                H = e.n(R);
            let $ = (0, s.PA)((t) => {
                var i;
                let { className: e, playlist: s, likeIconSize: n = 'xxs' } = t,
                    { user: o, trailer: d } = (0, j.g)(),
                    _ = (0, p.P)(),
                    { sendLikeSearchFeedback: m } = (0, N.z)(),
                    x = (0, g.K)(s),
                    [v, b] = (0, r.useState)(!1),
                    k = (0, u.c)(async () => {
                        (v || s.isLiked || (b(!0), null == m || m()), await x());
                    }),
                    A = (0, z.F)(),
                    y = (0, u.c)((t) => {
                        if ((t.stopPropagation(), _())) return void t.preventDefault();
                        (d.openPlaylistTrailer(s.id), A(c.DomainObjectType.Playlist, s.id));
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(H().root, H().controls, e, { [H().controls_disabled]: !s.isAvailable }),
                    children: [
                        s.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(D.WithOffline, {
                                        fallback: (0, a.jsx)(w.c, {
                                            size: 'xs',
                                            iconSize: n,
                                            className: (0, l.$)(H().item, H().likeIcon),
                                            isLiked: s.isLiked,
                                            onClick: k,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                        (0, a.jsx)(D.WithOffline, {
                                            fallback: (0, a.jsx)(M.k, {
                                                className: (0, l.$)(H().item, H().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: y,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, l.$)(H().item, H().item_buttonArrow),
                            children: (0, a.jsx)(C.I, { className: L().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var O = e(4139),
                Y = e.n(O);
            let K = (0, s.PA)((t) => {
                let { className: i, playlist: e, pageId: s, coverClassName: I, playButtonIconSize: g, likeIconSize: z } = t,
                    { ref: w, intersectionPropertyId: M } = (0, k.n)(),
                    { from: D } = (0, A.f)({ pageId: s }),
                    [R, H] = (0, r.useState)(!1),
                    O = (0, b.b)(),
                    K = (0, B.r)(e),
                    U = e.title || '',
                    { formatMessage: V, formatNumber: q } = (0, n.A)(),
                    Z = (0, p.P)(),
                    { sendNavigateSearchFeedback: F, sendPlaySearchFeedback: W } = (0, N.z)(),
                    G = (0, v.N)(),
                    {
                        paywall: { modal: J },
                    } = (0, j.g)(),
                    X = (0, y.N)(),
                    {
                        isPlaying: Q,
                        isCurrent: tt,
                        togglePlay: ti,
                    } = (0, T.D)({ playContextParams: { contextData: { type: _.K.Playlist, meta: { id: e.id, uuid: e.uuid }, from: D }, loadContextMeta: !0 } }),
                    te = (0, h.Z)(e.url),
                    ta = (0, u.c)((t) => {
                        (null == F || F(), G({ to: c.AppScreen.PlaylistScreen }), t.preventDefault(), te(t));
                    }),
                    tl = (0, u.c)(() => {
                        if (!Z()) {
                            if (X) return void J.open();
                            (R || Q || (H(!0), null == W || W()), ti(), O(!Q));
                        }
                    }),
                    ts = (0, u.c)((t) => {
                        ((0, m.P)(t, L().ripple), ta(t));
                    }),
                    tr = (0, u.c)((t) => {
                        (t.stopPropagation(), ta(t));
                    }),
                    tn = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(f.q, {
                                isAvailable: e.isAvailable,
                                isDisliked: !1,
                                coverUri: e.coverUri,
                                title: U,
                                className: (0, l.$)(L().playButtonCell, I),
                                alt: V({ id: 'entity-names.playlist-name' }, { playlistName: U }),
                                radius: 'xs',
                                ...t,
                            }),
                        [e, U, I, V],
                    ),
                    to = null == tn ? void 0 : tn({ onPlayButtonClick: tl, isPlaying: Q, isCurrent: tt, playButtonIconSize: g }),
                    tc = (0, r.useMemo)(
                        () =>
                            e.url && e.isAvailable
                                ? (0, a.jsx)(P.N, { className: (0, l.$)(L().text, L().titleLink), href: e.url, onClick: tr, children: U })
                                : (0, a.jsx)(x.HL, { className: (0, l.$)(L().text, L().titleText), size: 'm', variant: 'div', type: 'text', children: U }),
                        [tr, e.isAvailable, e.url, U],
                    ),
                    td = (0, r.useMemo)(() => {
                        if (void 0 === e.actualLikesCount || void 0 === e.tracksCount) return;
                        let t = (0, a.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            i = e.isLiked ? 'likedVariant' : 'likeVariant',
                            l = ''.concat(K, ' ').concat(V({ id: 'entity-names.tracks-count' }, { value: e.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: Y().description,
                            'aria-label': l,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: Y().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(C.I, { className: Y().icon, variant: i, size: 'xxs' }),
                                        (0, a.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', children: q(e.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: Y().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(x.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'entity-names.tracks-count', values: { value: q(e.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [V, q, K, e.actualLikesCount, e.isLiked, e.tracksCount]);
                return (0, a.jsxs)(S.C, {
                    ref: w,
                    'data-intersection-property-id': M,
                    className: (0, l.$)(L().root, { [L().root_disabled]: !e.isAvailable }, i),
                    'aria-label': e.title || V({ id: 'entity-names.playlist' }),
                    onClick: ts,
                    'data-test-id': d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD,
                    children: [to, (0, a.jsx)(E.r, { isDisabled: !e.isAvailable, title: tc, description: td }), (0, a.jsx)($, { playlist: e, likeIconSize: z })],
                });
            });
        },
        23820: (t) => {
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
        28045: (t, i, e) => {
            'use strict';
            e.d(i, { M: () => Y });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                n = e(36619),
                o = e(61493),
                c = e(22939),
                d = e(71035),
                _ = e(49656),
                u = e(11823),
                m = e(4254),
                C = e(99835),
                x = e(73614),
                p = e(4331),
                v = e(79367),
                b = e(29481),
                k = e(47009),
                A = e(52512),
                y = e(30290),
                h = e(61561),
                N = e(85686),
                T = e(85743),
                j = e(50209),
                I = e(27954),
                L = e(79856),
                E = e.n(L),
                S = e(77698),
                P = e(18284),
                f = e(97522),
                B = e(6349),
                g = e(66738),
                z = e(71705),
                w = e(34159),
                M = e(64720),
                D = e(71996),
                R = e(6304),
                H = e(70418),
                $ = e.n(H);
            let O = (0, s.PA)((t) => {
                    var i;
                    let { className: e, album: s, likeIconSize: o = 'xxs' } = t,
                        { user: c, trailer: _ } = (0, I.g)(),
                        u = (0, v.P)(),
                        { sendLikeSearchFeedback: m } = (0, T.z)(),
                        C = (0, z.K)(s),
                        [x, p] = (0, r.useState)(!1),
                        b = (0, d.c)(async () => {
                            (x || s.isLiked || (p(!0), null == m || m()), await C());
                        }),
                        k = (0, w.F)(),
                        A = (0, d.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (_.openAlbumTrailer(s.id), k(n.DomainObjectType.Album, String(s.id)));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)($().root, $().controls, e, { [$().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(R.WithOffline, {
                                            fallback: (0, a.jsx)(M.c, {
                                                size: 'xs',
                                                iconSize: o,
                                                className: (0, l.$)($().item, $().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: b,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)(R.WithOffline, {
                                                fallback: (0, a.jsx)(D.k, {
                                                    className: (0, l.$)($().item, $().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: A,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)($().item, $().item_buttonArrow),
                                children: (0, a.jsx)(g.I, { className: E().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                Y = (0, s.PA)((t) => {
                    let { className: i, album: e, pageId: s, coverClassName: L, playButtonIconSize: g, likeIconSize: z, shouldShowReleaseYear: w, description: M } = t,
                        D = (0, x.r)(e.type),
                        { ref: R, intersectionPropertyId: H } = (0, A.n)(),
                        { from: $ } = (0, y.f)({ pageId: s }),
                        [Y, K] = (0, r.useState)(!1),
                        U = (0, k.b)(),
                        V = (0, N.Z)(e.url),
                        q = (0, v.P)(),
                        { sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: F } = (0, T.z)(),
                        W = (0, b.N)(),
                        {
                            paywall: { modal: G },
                        } = (0, I.g)(),
                        J = (0, h.N)(),
                        {
                            isPlaying: X,
                            isCurrent: Q,
                            togglePlay: tt,
                        } = (0, j.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: e.id }, from: $ }, loadContextMeta: !0 } }),
                        ti = (0, C.c)({ album: e, callback: V }),
                        te = (0, C.c)({ album: e, callback: tt }),
                        ta = (0, d.c)((t) => {
                            (null == Z || Z(), W({ to: n.AppScreen.AlbumScreen }), ti(t));
                        }),
                        tl = (0, d.c)(() => {
                            if (!q()) {
                                if (J) return void G.open();
                                (Y || X || (K(!0), null == F || F()), te(), U(!X));
                            }
                        }),
                        ts = (0, d.c)((t) => {
                            ((0, u.P)(t, E().ripple), ta(t));
                        }),
                        tr = (0, d.c)((t) => {
                            (t.stopPropagation(), ta(t));
                        }),
                        tn = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(B.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: (0, l.$)(E().playButtonCell, L),
                                    alt: ''.concat(D, ' ').concat(e.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [e.coverUri, e.isAvailable, e.title, L, D],
                        ),
                        to = null == tn ? void 0 : tn({ onPlayButtonClick: tl, isPlaying: X, isCurrent: Q, playButtonIconSize: g }),
                        tc = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(f.N, { className: (0, l.$)(E().text, E().titleLink), href: e.url, onClick: tr, children: e.title })
                                    : (0, a.jsx)(m.HL, { className: (0, l.$)(E().text, E().titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            [e.isAvailable, e.title, e.url, tr],
                        ),
                        td = (0, r.useCallback)(
                            (t, i) => {
                                var l;
                                return (null == (l = e.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(p.i, { linkClassName: t, captionClassName: i, artists: e.artists, lineClamp: 1, withLink: e.isAvailable })
                                    : null;
                            },
                            [e.artists, e.isAvailable],
                        ),
                        t_ = (0, _.L)(() => [e.artistNames, e.title, e.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(P.C, {
                        ref: R,
                        'data-intersection-property-id': H,
                        className: (0, l.$)(E().root, { [E().root_disabled]: !e.isAvailable }, i),
                        'aria-label': t_,
                        onClick: ts,
                        'data-test-id': o.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            to,
                            (0, a.jsx)(S.r, {
                                isDisabled: !e.isAvailable,
                                version: e.version,
                                title: tc,
                                artistsComponent: td,
                                getDescriptionTexts: e.getDescriptionTexts,
                                explicitMarkVariant: e.explicitDisclaimer,
                                likesCount: e.isNonMusic ? e.actualLikesCount : void 0,
                                isLiked: e.isNonMusic ? e.isLiked : void 0,
                                releaseYear: e.isNonMusic && w ? e.year : void 0,
                                description: M,
                            }),
                            (0, a.jsx)(O, { className: E().controlsBar, album: e, likeIconSize: z }),
                        ],
                    });
                });
        },
        32911: (t, i, e) => {
            'use strict';
            e.d(i, { h: () => a });
            var a = (function (t) {
                return ((t.SMALL = 'small'), (t.LARGE = 'large'), t);
            })({});
        },
        42324: (t, i, e) => {
            'use strict';
            var a;
            (e.d(i, { b: () => a }),
                (function (t) {
                    ((t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search'));
                })(a || (a = {})));
        },
        51011: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => $ });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                n = e(39004),
                o = e(36619),
                c = e(61493),
                d = e(22939),
                _ = e(71035),
                u = e(11823),
                m = e(4254),
                C = e(1797),
                x = e(79367),
                p = e(29481),
                v = e(47009),
                b = e(52512),
                k = e(30290),
                A = e(61561),
                y = e(85686),
                h = e(85743),
                N = e(50209),
                T = e(27954),
                j = e(79856),
                I = e.n(j),
                L = e(77698),
                E = e(18284),
                S = e(97522),
                P = e(6349),
                f = e(66738),
                B = e(7361),
                g = e(34159),
                z = e(64720),
                w = e(71996),
                M = e(6304),
                D = e(23820),
                R = e.n(D);
            let H = (0, s.PA)((t) => {
                    var i;
                    let { className: e, artist: s, likeIconSize: n = 'xxs' } = t,
                        { user: c, trailer: d } = (0, T.g)(),
                        u = (0, x.P)(),
                        { sendLikeSearchFeedback: m } = (0, h.z)(),
                        C = (0, B.K)(s),
                        [p, v] = (0, r.useState)(!1),
                        b = (0, _.c)(async () => {
                            (p || s.isLiked || (v(!0), null == m || m()), await C());
                        }),
                        k = (0, g.F)(),
                        A = (0, _.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (d.openArtistTrailer(s.id), k(o.DomainObjectType.Artist, s.id));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(R().root, R().controls, e, { [R().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(M.WithOffline, {
                                            fallback: (0, a.jsx)(z.c, {
                                                size: 'xs',
                                                iconSize: n,
                                                className: (0, l.$)(R().item, R().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: b,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)(M.WithOffline, {
                                                fallback: (0, a.jsx)(w.k, {
                                                    className: (0, l.$)(R().item, R().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: A,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(R().item, R().item_buttonArrow),
                                children: (0, a.jsx)(f.I, { className: I().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                $ = (0, s.PA)((t) => {
                    let { className: i, artist: e, pageId: s, description: j, coverClassName: f, playButtonIconSize: B, likeIconSize: g } = t,
                        { formatMessage: z } = (0, n.A)(),
                        { ref: w, intersectionPropertyId: M } = (0, b.n)(),
                        { from: D } = (0, k.f)({ pageId: s }),
                        [R, $] = (0, r.useState)(!1),
                        O = (0, y.Z)(e.url),
                        Y = (0, v.b)(),
                        K = (0, x.P)(),
                        { sendNavigateSearchFeedback: U, sendPlaySearchFeedback: V } = (0, h.z)(),
                        q = (0, p.N)(),
                        {
                            paywall: { modal: Z },
                        } = (0, T.g)(),
                        F = (0, A.N)(),
                        {
                            isPlaying: W,
                            isCurrent: G,
                            togglePlay: J,
                        } = (0, N.D)({ playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(e.id) }, from: D }, loadContextMeta: !0 } }),
                        X = (0, C.S)({ artist: e, callback: O }),
                        Q = (0, C.S)({ artist: e, callback: J }),
                        tt = (0, _.c)((t) => {
                            (null == U || U(), q({ to: o.AppScreen.ArtistScreen }), X(t));
                        }),
                        ti = (0, _.c)(() => {
                            if (!K()) {
                                if (F) return void Z.open();
                                (R || W || ($(!0), null == V || V()), Q(), Y(!W));
                            }
                        }),
                        te = (0, _.c)((t) => {
                            ((0, u.P)(t, I().ripple), tt(t));
                        }),
                        ta = (0, _.c)((t) => {
                            (t.stopPropagation(), tt(t));
                        }),
                        tl = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(P.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.name,
                                    className: (0, l.$)(I().playButtonCell, f),
                                    radius: 'round',
                                    alt: z({ id: 'entity-names.artist-name' }, { artistName: e.name }),
                                    ...t,
                                }),
                            [e, f, z],
                        ),
                        ts = null == tl ? void 0 : tl({ onPlayButtonClick: ti, isPlaying: W, isCurrent: G, playButtonIconSize: B }),
                        tr = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(S.N, {
                                          className: (0, l.$)(I().text, I().titleLink),
                                          href: e.url,
                                          onClick: ta,
                                          'data-test-id': c.Kq.artist.SEARCH_ARTIST_CARD_TITLE_LINK,
                                          children: e.name,
                                      })
                                    : (0, a.jsx)(m.HL, { className: (0, l.$)(I().text, I().titleText), size: 'm', variant: 'div', type: 'text', children: e.name }),
                            [e.isAvailable, e.name, e.url, ta],
                        );
                    return (0, a.jsxs)(E.C, {
                        ref: w,
                        'data-intersection-property-id': M,
                        className: (0, l.$)(I().root, { [I().root_disabled]: !e.isAvailable }, i),
                        'aria-label': e.name,
                        onClick: te,
                        'data-test-id': c.Kq.artist.HORIZONTAL_ARTIST_CARD,
                        children: [
                            ts,
                            (0, a.jsx)(L.r, {
                                isDisabled: !e.isAvailable,
                                isDisliked: !1,
                                likesCount: e.actualLikesCount,
                                isLiked: e.isLiked,
                                title: tr,
                                description: j,
                            }),
                            (0, a.jsx)(H, { className: I().controlsBar, artist: e, likeIconSize: g }),
                        ],
                    });
                });
        },
        68224: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => P });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                n = e(61493),
                o = e(22939),
                c = e(42324),
                d = e(75501),
                _ = e(71035),
                u = e(11823),
                m = e(79367),
                C = e(47009),
                x = e(52512),
                p = e(30290),
                v = e(29872),
                b = e(61561),
                k = e(85743),
                A = e(50209),
                y = e(27954),
                h = e(79856),
                N = e.n(h),
                T = e(18284),
                j = e(6349),
                I = e(26115),
                L = e(74756),
                E = e(3912),
                S = e(41544);
            let P = (0, s.PA)((t) => {
                var i;
                let { className: e, track: s, pageId: h, playContextParams: P } = t,
                    { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: B } = (0, v.q)(),
                    { ref: g, intersectionPropertyId: z } = (0, x.n)(),
                    {
                        track: w,
                        settings: { isMobile: M },
                        paywall: { modal: D },
                    } = (0, y.g)(),
                    R = (0, b.N)(),
                    { from: H } = (0, p.f)({ pageId: h }),
                    $ = (0, C.b)(),
                    O = {
                        contextData: { type: o.K.Various, meta: { id: s.entityId }, from: H, overrideContextType: c.b.Search },
                        queueParams: { index: 0, entityId: s.id },
                        loadContextMeta: !0,
                    },
                    Y = null != P ? P : O,
                    { isPlaying: K, isCurrent: U, togglePlay: V, restartPlay: q } = (0, A.D)({ playContextParams: Y, entityId: s.entityId }),
                    Z = (0, m.P)(),
                    F = (0, I.w)({ track: s, callback: V }),
                    W = (0, r.useCallback)(() => {
                        w.open({ trackId: s.id, albumId: s.albumId });
                    }, [w, s.id, s.albumId]),
                    G = (0, I.w)({ track: s, callback: W }),
                    { sendPlaySearchFeedback: J } = (0, k.z)(),
                    [X, Q] = (0, r.useState)(!1),
                    tt = (0, _.c)(() => {
                        if (!Z()) {
                            if (f) return void B();
                            if (R) return void D.open();
                            (X || K || (Q(!0), null == J || J()), F(), $(!K));
                        }
                    }),
                    ti = (0, _.c)(() => {
                        if (K) return void q();
                        tt();
                    }),
                    te = (0, _.c)((t) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (f && s.isAvailableOnlyForPlus && B(), R && s.isAvailableOnlyForPlus && D.open());
                            return;
                        }
                        if (f) return void B();
                        let i = !M && (2 === t.detail || (1 === t.detail && s.hasTrackLink));
                        return R && !i
                            ? void D.open()
                            : ((0, u.P)(t, N().ripple), M)
                              ? void tt()
                              : 2 === t.detail
                                ? void ti()
                                : void (1 === t.detail && s.hasTrackLink && (G(), R && D.open()));
                    }),
                    ta = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(j.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: N().playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [s],
                    ),
                    tl = null == ta ? void 0 : ta({ onPlayButtonClick: tt, isPlaying: K, isCurrent: U });
                return (0, a.jsxs)(T.C, {
                    ref: g,
                    'data-intersection-property-id': z,
                    className: (0, l.$)(N().root, e),
                    'aria-label': ''
                        .concat(s.artistsNames, ' ')
                        .concat(s.title, ' ')
                        .concat(null != (i = s.version) ? i : ''),
                    onClick: te,
                    'data-test-id': n.Kq.track.SEARCH_TRACK_CARD,
                    children: [
                        tl,
                        s.type === d.S.PODCAST
                            ? (0, a.jsx)(E.w, { track: s, playContextParams: Y, withPodcastName: !0, withListeningProgress: !0, withAlbumTitleLink: !M })
                            : (0, a.jsx)(S.j, { withArtistLink: !M, track: s }),
                        (0, a.jsx)(L.Q, { className: N().controlsBarCell, track: s }),
                    ],
                });
            });
        },
        70418: (t) => {
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
        72968: (t) => {
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
        77698: (t, i, e) => {
            'use strict';
            e.d(i, { r: () => m });
            var a = e(25839),
                l = e(82298),
                s = e(39004),
                r = e(61493),
                n = e(49656),
                o = e(66738),
                c = e(4254),
                d = e(62926),
                _ = e(72968),
                u = e.n(_);
            let m = (t) => {
                let {
                        isDisliked: i,
                        isDisabled: e,
                        description: _,
                        getDescriptionTexts: m,
                        explicitMarkVariant: C,
                        className: x,
                        version: p,
                        title: v,
                        artistsComponent: b,
                        likesCount: k,
                        isLiked: A,
                        releaseYear: y,
                        titleLineClamp: h = 1,
                    } = t,
                    { formatMessage: N, formatNumber: T } = (0, s.A)(),
                    j = (0, n.L)(() => {
                        let t = null == b ? void 0 : b((0, l.$)(u().text, u().artistLink), (0, l.$)(u().text, u().artistCaption));
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
                                            (0, a.jsx)(o.I, {
                                                className: u().icon,
                                                variant: A ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: T(k),
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
                    className: (0, l.$)(u().root, { [u().root_disabled]: e, [u().root_disliked]: i }, x),
                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, a.jsxs)(c.HL, {
                                    className: (0, l.$)(u().text, u().title, { [u().title_withVersion]: p }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: h,
                                    type: 'text',
                                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        v,
                                        p &&
                                            (0, a.jsx)(c.HL, {
                                                className: (0, l.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(p),
                                            }),
                                    ],
                                }),
                                C && (0, a.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: m, variant: C }),
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
                        j,
                    ],
                });
            };
        },
        79856: (t) => {
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
        95814: (t) => {
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
        98031: (t, i, e) => {
            'use strict';
            e.d(i, { H: () => f });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                n = e(61493),
                o = e(71035),
                c = e(11823),
                d = e(4254),
                _ = e(79367),
                u = e(47009),
                m = e(26742),
                C = e(52512),
                x = e(97952),
                p = e(85743),
                v = e(87201),
                b = e(27954),
                k = e(5668),
                A = e(79856),
                y = e.n(A),
                h = e(77698),
                N = e(18284),
                T = e(49438),
                j = e(6349),
                I = e(32911),
                L = e(10557),
                E = e(86209),
                S = e(99626),
                P = e.n(S);
            let f = (0, s.PA)((t) => {
                let { className: i, vibe: e, cover: s, coverClassName: A, playButtonIconSize: S, description: f, agentVariant: B } = t,
                    { ref: g, intersectionPropertyId: z } = (0, C.n)(),
                    { pageId: w } = (0, x.$)(),
                    [M, D] = (0, r.useState)(!1),
                    { blockIdForFrom: R } = (0, m.N)(),
                    { freeAccess: H } = (0, b.g)(),
                    { sendPlaySearchFeedback: $ } = (0, p.z)(),
                    O = (0, u.b)(),
                    [Y, K] = (0, r.useState)(!1),
                    U = (0, _.P)(),
                    { isPlaying: V, togglePlay: q, isCurrent: Z } = (0, v.B)({ seeds: e.seeds, pageIdForFrom: w, blockIdForFrom: R }),
                    F = (0, o.c)(() => {
                        if (!U()) {
                            if (H.isSearchVibeStartRestricted) return void K(!0);
                            (M || V || (D(!0), null == $ || $()), q(), O(!V));
                        }
                    }),
                    W = (0, o.c)(() => {
                        V || F();
                    }),
                    G = (0, o.c)((t) => {
                        2 === t.detail ? W() : (0, c.P)(t, y().ripple);
                    }),
                    J = (0, r.useCallback)(() => {
                        if (e.shouldShowAgent && e.agent && B)
                            switch (B) {
                                case I.h.LARGE:
                                    return (0, a.jsxs)('div', {
                                        className: (0, l.$)(P().root, y().playButtonCell, A),
                                        children: [
                                            (0, a.jsx)(L.s, { agent: e.agent, isPlaying: V }),
                                            (0, a.jsx)(T.D, {
                                                variant: 'filled',
                                                className: P().playButton,
                                                iconClassName: P().playButtonIcon,
                                                isPlaying: V,
                                                onClick: F,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case I.h.SMALL:
                                    return (0, a.jsx)(E.n, {
                                        agent: e.agent,
                                        isPlaying: V,
                                        isCurrent: Z,
                                        onPlayButtonClick: F,
                                        alt: ''.concat(f, ' ').concat(e.title),
                                        className: (0, l.$)(y().playButtonCell, A),
                                    });
                            }
                        return (0, a.jsx)(j.q, {
                            isAvailable: !0,
                            coverUri: null == s ? void 0 : s.uri,
                            title: e.title,
                            className: (0, l.$)(y().playButtonCell, A),
                            entityCoverStyle: { backgroundColor: null == s ? void 0 : s.color },
                            radius: 'round',
                            onPlayButtonClick: F,
                            isPlaying: V,
                            isCurrent: Z,
                            playButtonIconSize: S,
                            alt: ''.concat(f, ' ').concat(e.title),
                        });
                    }, [B, null == s ? void 0 : s.color, null == s ? void 0 : s.uri, A, f, F, Z, V, S, e.agent, e.shouldShowAgent, e.title]);
                return (0, a.jsxs)(N.C, {
                    ref: g,
                    'data-intersection-property-id': z,
                    className: (0, l.$)(y().root, i),
                    'aria-label': e.title,
                    onClick: G,
                    'data-test-id': n.OA.vibe.SEARCH_VIBE_CARD,
                    children: [
                        (0, a.jsx)(k.S, {
                            isOpened: Y,
                            onOpenChange: K,
                            isEnabled: H.isSearchVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: e.stationType,
                            renderChildren: J,
                        }),
                        (0, a.jsx)(h.r, {
                            title: (0, a.jsx)(d.HL, { className: (0, l.$)(y().text, y().titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            description: f,
                        }),
                    ],
                });
            });
        },
        99626: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
    },
]);
