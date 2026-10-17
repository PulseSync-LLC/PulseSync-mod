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
            e.d(i, { v: () => F });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                o = e(39004),
                n = e(8487),
                c = e(44031),
                d = e(61493),
                u = e(22939),
                m = e(71035),
                _ = e(11823),
                v = e(66738),
                p = e(4254),
                C = e(79367),
                x = e(29481),
                b = e(47009),
                k = e(52512),
                A = e(30290),
                y = e(61561),
                h = e(85686),
                N = e(85743),
                j = e(50209),
                f = e(27954),
                P = e(79856),
                L = e.n(P),
                S = e(77698),
                g = e(18284),
                B = e(97522),
                I = e(6349),
                z = e(41459),
                w = e(62948),
                D = e(34159),
                T = e(64720),
                $ = e(71996),
                R = e(6304),
                H = e(95814),
                O = e.n(H);
            let M = (0, s.PA)((t) => {
                var i;
                let { className: e, playlist: s, likeIconSize: o = 'xxs' } = t,
                    { user: n, trailer: d } = (0, f.g)(),
                    u = (0, C.P)(),
                    { sendLikeSearchFeedback: _ } = (0, N.z)(),
                    p = (0, w.K)(s),
                    [x, b] = (0, r.useState)(!1),
                    k = (0, m.c)(async () => {
                        (x || s.isLiked || (b(!0), null == _ || _()), await p());
                    }),
                    A = (0, D.F)(),
                    y = (0, m.c)((t) => {
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
                                            onClick: k,
                                            disabled: !n.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                        (0, a.jsx)(R.WithOffline, {
                                            fallback: (0, a.jsx)($.k, {
                                                className: (0, l.$)(O().item, O().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: y,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, l.$)(O().item, O().item_buttonArrow),
                            children: (0, a.jsx)(v.I, { className: L().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var K = e(4139),
                q = e.n(K);
            let F = (0, s.PA)((t) => {
                let { className: i, playlist: e, pageId: s, coverClassName: P, playButtonIconSize: w, likeIconSize: D } = t,
                    { ref: T, intersectionPropertyId: $ } = (0, k.n)(),
                    { from: R } = (0, A.f)({ pageId: s }),
                    [H, O] = (0, r.useState)(!1),
                    K = (0, b.b)(),
                    F = (0, z.r)(e),
                    U = e.title || '',
                    { formatMessage: V, formatNumber: Z } = (0, o.A)(),
                    Y = (0, C.P)(),
                    { sendNavigateSearchFeedback: E, sendPlaySearchFeedback: W } = (0, N.z)(),
                    J = (0, x.N)(),
                    {
                        paywall: { modal: G },
                    } = (0, f.g)(),
                    Q = (0, y.N)(),
                    {
                        isPlaying: X,
                        isCurrent: tt,
                        togglePlay: ti,
                    } = (0, j.D)({ playContextParams: { contextData: { type: u.K.Playlist, meta: { id: e.id, uuid: e.uuid }, from: R }, loadContextMeta: !0 } }),
                    te = (0, h.Z)(e.url),
                    ta = (0, m.c)((t) => {
                        (null == E || E(), J({ to: c.AppScreen.PlaylistScreen }), t.preventDefault(), te(t));
                    }),
                    tl = (0, m.c)(() => {
                        if (!Y()) {
                            if (Q) return void G.open();
                            (H || X || (O(!0), null == W || W()), ti(), K(!X));
                        }
                    }),
                    ts = (0, m.c)((t) => {
                        ((0, _.P)(t, L().ripple), ta(t));
                    }),
                    tr = (0, m.c)((t) => {
                        (t.stopPropagation(), ta(t));
                    }),
                    to = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(I.q, {
                                isAvailable: e.isAvailable,
                                isDisliked: !1,
                                coverUri: e.coverUri,
                                title: U,
                                className: (0, l.$)(L().playButtonCell, P),
                                alt: V({ id: 'entity-names.playlist-name' }, { playlistName: U }),
                                radius: 'xs',
                                ...t,
                            }),
                        [e, U, P, V],
                    ),
                    tn = null == to ? void 0 : to({ onPlayButtonClick: tl, isPlaying: X, isCurrent: tt, playButtonIconSize: w }),
                    tc = (0, r.useMemo)(
                        () =>
                            e.url && e.isAvailable
                                ? (0, a.jsx)(B.N, { className: (0, l.$)(L().text, L().titleLink), href: e.url, onClick: tr, children: U })
                                : (0, a.jsx)(p.HL, { className: (0, l.$)(L().text, L().titleText), size: 'm', variant: 'div', type: 'text', children: U }),
                        [tr, e.isAvailable, e.url, U],
                    ),
                    td = (0, r.useMemo)(() => {
                        if (void 0 === e.actualLikesCount || void 0 === e.tracksCount) return;
                        let t = (0, a.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            i = e.isLiked ? 'likedVariant' : 'likeVariant',
                            l = ''.concat(F, ' ').concat(V({ id: 'entity-names.tracks-count' }, { value: e.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: q().description,
                            'aria-label': l,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: q().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(v.I, { className: q().icon, variant: i, size: 'xxs' }),
                                        (0, a.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', children: Z(e.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: q().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(n.A, { id: 'entity-names.tracks-count', values: { value: Z(e.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [V, Z, F, e.actualLikesCount, e.isLiked, e.tracksCount]);
                return (0, a.jsxs)(g.C, {
                    ref: T,
                    'data-intersection-property-id': $,
                    className: (0, l.$)(L().root, { [L().root_disabled]: !e.isAvailable }, i),
                    'aria-label': e.title || V({ id: 'entity-names.playlist' }),
                    onClick: ts,
                    'data-test-id': d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD,
                    children: [tn, (0, a.jsx)(S.r, { isDisabled: !e.isAvailable, title: tc, description: td }), (0, a.jsx)(M, { playlist: e, likeIconSize: D })],
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
            e.d(i, { M: () => q });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                o = e(44031),
                n = e(61493),
                c = e(22939),
                d = e(71035),
                u = e(49656),
                m = e(11823),
                _ = e(4254),
                v = e(99835),
                p = e(73614),
                C = e(56348),
                x = e(79367),
                b = e(29481),
                k = e(47009),
                A = e(52512),
                y = e(30290),
                h = e(61561),
                N = e(85686),
                j = e(85743),
                f = e(50209),
                P = e(27954),
                L = e(79856),
                S = e.n(L),
                g = e(77698),
                B = e(18284),
                I = e(97522),
                z = e(6349),
                w = e(66738),
                D = e(71705),
                T = e(34159),
                $ = e(64720),
                R = e(71996),
                H = e(6304),
                O = e(70418),
                M = e.n(O);
            let K = (0, s.PA)((t) => {
                    var i;
                    let { className: e, album: s, likeIconSize: n = 'xxs' } = t,
                        { user: c, trailer: u } = (0, P.g)(),
                        m = (0, x.P)(),
                        { sendLikeSearchFeedback: _ } = (0, j.z)(),
                        v = (0, D.K)(s),
                        [p, C] = (0, r.useState)(!1),
                        b = (0, d.c)(async () => {
                            (p || s.isLiked || (C(!0), null == _ || _()), await v());
                        }),
                        k = (0, T.F)(),
                        A = (0, d.c)((t) => {
                            if ((t.stopPropagation(), m())) return void t.preventDefault();
                            (u.openAlbumTrailer(s.id), k(o.DomainObjectType.Album, String(s.id)));
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
                                                onClick: b,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                            (0, a.jsx)(H.WithOffline, {
                                                fallback: (0, a.jsx)(R.k, {
                                                    className: (0, l.$)(M().item, M().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: A,
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
                q = (0, s.PA)((t) => {
                    let { className: i, album: e, pageId: s, coverClassName: L, playButtonIconSize: w, likeIconSize: D, shouldShowReleaseYear: T, description: $ } = t,
                        R = (0, p.r)(e.type),
                        { ref: H, intersectionPropertyId: O } = (0, A.n)(),
                        { from: M } = (0, y.f)({ pageId: s }),
                        [q, F] = (0, r.useState)(!1),
                        U = (0, k.b)(),
                        V = (0, N.Z)(e.url),
                        Z = (0, x.P)(),
                        { sendNavigateSearchFeedback: Y, sendPlaySearchFeedback: E } = (0, j.z)(),
                        W = (0, b.N)(),
                        {
                            paywall: { modal: J },
                        } = (0, P.g)(),
                        G = (0, h.N)(),
                        {
                            isPlaying: Q,
                            isCurrent: X,
                            togglePlay: tt,
                        } = (0, f.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: e.id }, from: M }, loadContextMeta: !0 } }),
                        ti = (0, v.c)({ album: e, callback: V }),
                        te = (0, v.c)({ album: e, callback: tt }),
                        ta = (0, d.c)((t) => {
                            (null == Y || Y(), W({ to: o.AppScreen.AlbumScreen }), ti(t));
                        }),
                        tl = (0, d.c)(() => {
                            if (!Z()) {
                                if (G) return void J.open();
                                (q || Q || (F(!0), null == E || E()), te(), U(!Q));
                            }
                        }),
                        ts = (0, d.c)((t) => {
                            ((0, m.P)(t, S().ripple), ta(t));
                        }),
                        tr = (0, d.c)((t) => {
                            (t.stopPropagation(), ta(t));
                        }),
                        to = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(z.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: (0, l.$)(S().playButtonCell, L),
                                    alt: ''.concat(R, ' ').concat(e.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [e.coverUri, e.isAvailable, e.title, L, R],
                        ),
                        tn = null == to ? void 0 : to({ onPlayButtonClick: tl, isPlaying: Q, isCurrent: X, playButtonIconSize: w }),
                        tc = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(I.N, { className: (0, l.$)(S().text, S().titleLink), href: e.url, onClick: tr, children: e.title })
                                    : (0, a.jsx)(_.HL, { className: (0, l.$)(S().text, S().titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            [e.isAvailable, e.title, e.url, tr],
                        ),
                        td = (0, r.useCallback)(
                            (t, i) => {
                                var l;
                                return (null == (l = e.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(C.i, { linkClassName: t, captionClassName: i, artists: e.artists, lineClamp: 1, withLink: e.isAvailable })
                                    : null;
                            },
                            [e.artists, e.isAvailable],
                        ),
                        tu = (0, u.L)(() => [e.artistNames, e.title, e.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(B.C, {
                        ref: H,
                        'data-intersection-property-id': O,
                        className: (0, l.$)(S().root, { [S().root_disabled]: !e.isAvailable }, i),
                        'aria-label': tu,
                        onClick: ts,
                        'data-test-id': n.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tn,
                            (0, a.jsx)(g.r, {
                                isDisabled: !e.isAvailable,
                                version: e.version,
                                title: tc,
                                artistsComponent: td,
                                getDescriptionTexts: e.getDescriptionTexts,
                                explicitMarkVariant: e.explicitDisclaimer,
                                likesCount: e.isNonMusic ? e.actualLikesCount : void 0,
                                isLiked: e.isNonMusic ? e.isLiked : void 0,
                                releaseYear: e.isNonMusic && T ? e.year : void 0,
                                description: $,
                            }),
                            (0, a.jsx)(K, { className: S().controlsBar, album: e, likeIconSize: D }),
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
            e.d(i, { c: () => M });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                o = e(39004),
                n = e(44031),
                c = e(61493),
                d = e(22939),
                u = e(71035),
                m = e(11823),
                _ = e(4254),
                v = e(1797),
                p = e(79367),
                C = e(29481),
                x = e(47009),
                b = e(52512),
                k = e(30290),
                A = e(61561),
                y = e(85686),
                h = e(85743),
                N = e(50209),
                j = e(27954),
                f = e(79856),
                P = e.n(f),
                L = e(77698),
                S = e(18284),
                g = e(97522),
                B = e(6349),
                I = e(66738),
                z = e(7361),
                w = e(34159),
                D = e(64720),
                T = e(71996),
                $ = e(6304),
                R = e(23820),
                H = e.n(R);
            let O = (0, s.PA)((t) => {
                    var i;
                    let { className: e, artist: s, likeIconSize: o = 'xxs' } = t,
                        { user: c, trailer: d } = (0, j.g)(),
                        m = (0, p.P)(),
                        { sendLikeSearchFeedback: _ } = (0, h.z)(),
                        v = (0, z.K)(s),
                        [C, x] = (0, r.useState)(!1),
                        b = (0, u.c)(async () => {
                            (C || s.isLiked || (x(!0), null == _ || _()), await v());
                        }),
                        k = (0, w.F)(),
                        A = (0, u.c)((t) => {
                            if ((t.stopPropagation(), m())) return void t.preventDefault();
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
                                                onClick: b,
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
                                children: (0, a.jsx)(I.I, { className: P().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                M = (0, s.PA)((t) => {
                    let { className: i, artist: e, pageId: s, description: f, coverClassName: I, playButtonIconSize: z, likeIconSize: w } = t,
                        { formatMessage: D } = (0, o.A)(),
                        { ref: T, intersectionPropertyId: $ } = (0, b.n)(),
                        { from: R } = (0, k.f)({ pageId: s }),
                        [H, M] = (0, r.useState)(!1),
                        K = (0, y.Z)(e.url),
                        q = (0, x.b)(),
                        F = (0, p.P)(),
                        { sendNavigateSearchFeedback: U, sendPlaySearchFeedback: V } = (0, h.z)(),
                        Z = (0, C.N)(),
                        {
                            paywall: { modal: Y },
                        } = (0, j.g)(),
                        E = (0, A.N)(),
                        {
                            isPlaying: W,
                            isCurrent: J,
                            togglePlay: G,
                        } = (0, N.D)({ playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(e.id) }, from: R }, loadContextMeta: !0 } }),
                        Q = (0, v.S)({ artist: e, callback: K }),
                        X = (0, v.S)({ artist: e, callback: G }),
                        tt = (0, u.c)((t) => {
                            (null == U || U(), Z({ to: n.AppScreen.ArtistScreen }), Q(t));
                        }),
                        ti = (0, u.c)(() => {
                            if (!F()) {
                                if (E) return void Y.open();
                                (H || W || (M(!0), null == V || V()), X(), q(!W));
                            }
                        }),
                        te = (0, u.c)((t) => {
                            ((0, m.P)(t, P().ripple), tt(t));
                        }),
                        ta = (0, u.c)((t) => {
                            (t.stopPropagation(), tt(t));
                        }),
                        tl = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(B.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: !1,
                                    coverUri: e.coverUri,
                                    title: e.name,
                                    className: (0, l.$)(P().playButtonCell, I),
                                    radius: 'round',
                                    alt: D({ id: 'entity-names.artist-name' }, { artistName: e.name }),
                                    ...t,
                                }),
                            [e, I, D],
                        ),
                        ts = null == tl ? void 0 : tl({ onPlayButtonClick: ti, isPlaying: W, isCurrent: J, playButtonIconSize: z }),
                        tr = (0, r.useMemo)(
                            () =>
                                e.url && e.isAvailable
                                    ? (0, a.jsx)(g.N, {
                                          className: (0, l.$)(P().text, P().titleLink),
                                          href: e.url,
                                          onClick: ta,
                                          'data-test-id': c.Kq.artist.SEARCH_ARTIST_CARD_TITLE_LINK,
                                          children: e.name,
                                      })
                                    : (0, a.jsx)(_.HL, { className: (0, l.$)(P().text, P().titleText), size: 'm', variant: 'div', type: 'text', children: e.name }),
                            [e.isAvailable, e.name, e.url, ta],
                        );
                    return (0, a.jsxs)(S.C, {
                        ref: T,
                        'data-intersection-property-id': $,
                        className: (0, l.$)(P().root, { [P().root_disabled]: !e.isAvailable }, i),
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
                                description: f,
                            }),
                            (0, a.jsx)(O, { className: P().controlsBar, artist: e, likeIconSize: w }),
                        ],
                    });
                });
        },
        68224: (t, i, e) => {
            'use strict';
            e.d(i, { c: () => B });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                o = e(61493),
                n = e(22939),
                c = e(42324),
                d = e(75501),
                u = e(71035),
                m = e(11823),
                _ = e(79367),
                v = e(47009),
                p = e(52512),
                C = e(30290),
                x = e(29872),
                b = e(61561),
                k = e(85743),
                A = e(50209),
                y = e(27954),
                h = e(79856),
                N = e.n(h),
                j = e(18284),
                f = e(6349),
                P = e(26115),
                L = e(2096),
                S = e(51253),
                g = e(77737);
            let B = (0, s.PA)((t) => {
                var i;
                let { className: e, track: s, pageId: h, playContextParams: B } = t,
                    { shouldShowBuySubscriptionModal: I, showBuySubscriptionModal: z } = (0, x.q)(),
                    { ref: w, intersectionPropertyId: D } = (0, p.n)(),
                    {
                        track: T,
                        settings: { isMobile: $ },
                        paywall: { modal: R },
                    } = (0, y.g)(),
                    H = (0, b.N)(),
                    { from: O } = (0, C.f)({ pageId: h }),
                    M = (0, v.b)(),
                    K = {
                        contextData: { type: n.K.Various, meta: { id: s.entityId }, from: O, overrideContextType: c.b.Search },
                        queueParams: { index: 0, entityId: s.id },
                        loadContextMeta: !0,
                    },
                    q = null != B ? B : K,
                    { isPlaying: F, isCurrent: U, togglePlay: V, restartPlay: Z } = (0, A.D)({ playContextParams: q, entityId: s.entityId }),
                    Y = (0, _.P)(),
                    E = (0, P.w)({ track: s, callback: V }),
                    W = (0, r.useCallback)(() => {
                        T.open({ trackId: s.id, albumId: s.albumId });
                    }, [T, s.id, s.albumId]),
                    J = (0, P.w)({ track: s, callback: W }),
                    { sendPlaySearchFeedback: G } = (0, k.z)(),
                    [Q, X] = (0, r.useState)(!1),
                    tt = (0, u.c)(() => {
                        if (!Y()) {
                            if (I) return void z();
                            if (H) return void R.open();
                            (Q || F || (X(!0), null == G || G()), E(), M(!F));
                        }
                    }),
                    ti = (0, u.c)(() => {
                        if (F) return void Z();
                        tt();
                    }),
                    te = (0, u.c)((t) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (I && s.isAvailableOnlyForPlus && z(), H && s.isAvailableOnlyForPlus && R.open());
                            return;
                        }
                        if (I) return void z();
                        let i = !$ && (2 === t.detail || (1 === t.detail && s.hasTrackLink));
                        return H && !i
                            ? void R.open()
                            : ((0, m.P)(t, N().ripple), $)
                              ? void tt()
                              : 2 === t.detail
                                ? void ti()
                                : void (1 === t.detail && s.hasTrackLink && (J(), H && R.open()));
                    }),
                    ta = (0, r.useCallback)(
                        (t) =>
                            (0, a.jsx)(f.q, {
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
                    tl = null == ta ? void 0 : ta({ onPlayButtonClick: tt, isPlaying: F, isCurrent: U });
                return (0, a.jsxs)(j.C, {
                    ref: w,
                    'data-intersection-property-id': D,
                    className: (0, l.$)(N().root, e),
                    'aria-label': ''
                        .concat(s.artistsNames, ' ')
                        .concat(s.title, ' ')
                        .concat(null != (i = s.version) ? i : ''),
                    onClick: te,
                    'data-test-id': o.Kq.track.SEARCH_TRACK_CARD,
                    children: [
                        tl,
                        s.type === d.S.PODCAST
                            ? (0, a.jsx)(S.w, { track: s, playContextParams: q, withPodcastName: !0, withListeningProgress: !0, withAlbumTitleLink: !$ })
                            : (0, a.jsx)(g.j, { withArtistLink: !$, track: s }),
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
            e.d(i, { H: () => I });
            var a = e(25839),
                l = e(82298),
                s = e(88204),
                r = e(74631),
                o = e(61493),
                n = e(71035),
                c = e(11823),
                d = e(4254),
                u = e(79367),
                m = e(47009),
                _ = e(26742),
                v = e(52512),
                p = e(97952),
                C = e(85743),
                x = e(87201),
                b = e(27954),
                k = e(5668),
                A = e(79856),
                y = e.n(A),
                h = e(77698),
                N = e(18284),
                j = e(49438),
                f = e(6349),
                P = e(32911),
                L = e(10557),
                S = e(86209),
                g = e(99626),
                B = e.n(g);
            let I = (0, s.PA)((t) => {
                let { className: i, vibe: e, cover: s, coverClassName: A, playButtonIconSize: g, description: I, agentVariant: z } = t,
                    { ref: w, intersectionPropertyId: D } = (0, v.n)(),
                    { pageId: T } = (0, p.$)(),
                    [$, R] = (0, r.useState)(!1),
                    { blockIdForFrom: H } = (0, _.N)(),
                    { freeAccess: O } = (0, b.g)(),
                    { sendPlaySearchFeedback: M } = (0, C.z)(),
                    K = (0, m.b)(),
                    [q, F] = (0, r.useState)(!1),
                    U = (0, u.P)(),
                    { isPlaying: V, togglePlay: Z, isCurrent: Y } = (0, x.B)({ seeds: e.seeds, pageIdForFrom: T, blockIdForFrom: H }),
                    E = (0, n.c)(() => {
                        if (!U()) {
                            if (O.isSearchVibeStartRestricted) return void F(!0);
                            ($ || V || (R(!0), null == M || M()), Z(), K(!V));
                        }
                    }),
                    W = (0, n.c)(() => {
                        V || E();
                    }),
                    J = (0, n.c)((t) => {
                        2 === t.detail ? W() : (0, c.P)(t, y().ripple);
                    }),
                    G = (0, r.useCallback)(() => {
                        if (e.shouldShowAgent && e.agent && z)
                            switch (z) {
                                case P.h.LARGE:
                                    return (0, a.jsxs)('div', {
                                        className: (0, l.$)(B().root, y().playButtonCell, A),
                                        children: [
                                            (0, a.jsx)(L.s, { agent: e.agent, isPlaying: V }),
                                            (0, a.jsx)(j.D, {
                                                variant: 'filled',
                                                className: B().playButton,
                                                iconClassName: B().playButtonIcon,
                                                isPlaying: V,
                                                onClick: E,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case P.h.SMALL:
                                    return (0, a.jsx)(S.n, {
                                        agent: e.agent,
                                        isPlaying: V,
                                        isCurrent: Y,
                                        onPlayButtonClick: E,
                                        alt: ''.concat(I, ' ').concat(e.title),
                                        className: (0, l.$)(y().playButtonCell, A),
                                    });
                            }
                        return (0, a.jsx)(f.q, {
                            isAvailable: !0,
                            coverUri: null == s ? void 0 : s.uri,
                            title: e.title,
                            className: (0, l.$)(y().playButtonCell, A),
                            entityCoverStyle: { backgroundColor: null == s ? void 0 : s.color },
                            radius: 'round',
                            onPlayButtonClick: E,
                            isPlaying: V,
                            isCurrent: Y,
                            playButtonIconSize: g,
                            alt: ''.concat(I, ' ').concat(e.title),
                        });
                    }, [z, null == s ? void 0 : s.color, null == s ? void 0 : s.uri, A, I, E, Y, V, g, e.agent, e.shouldShowAgent, e.title]);
                return (0, a.jsxs)(N.C, {
                    ref: w,
                    'data-intersection-property-id': D,
                    className: (0, l.$)(y().root, i),
                    'aria-label': e.title,
                    onClick: J,
                    'data-test-id': o.OA.vibe.SEARCH_VIBE_CARD,
                    children: [
                        (0, a.jsx)(k.S, {
                            isOpened: q,
                            onOpenChange: F,
                            isEnabled: O.isSearchVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: e.stationType,
                            renderChildren: G,
                        }),
                        (0, a.jsx)(h.r, {
                            title: (0, a.jsx)(d.HL, { className: (0, l.$)(y().text, y().titleText), size: 'm', variant: 'div', type: 'text', children: e.title }),
                            description: I,
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
