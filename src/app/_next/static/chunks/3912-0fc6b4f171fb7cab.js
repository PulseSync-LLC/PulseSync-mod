(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3912],
    {
        3291: (t) => {
            t.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        7103: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => r });
            var l = i(44020),
                a = i(47480);
            let r = (t) => {
                let { formatMessage: e } = (0, a.A)();
                return (0, l.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let l = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(l, ' ').concat(i);
                }, [e, t]);
            };
        },
        9066: (t, e, i) => {
            'use strict';
            i.d(e, { HorizontalPlaylistCard: () => L });
            var l = i(62936),
                a = i(79950),
                r = i(19718),
                s = i(44020),
                n = i(47480),
                o = i(26731),
                c = i(23480),
                d = i(8669),
                u = i(81959),
                m = i(59935),
                y = i(49923),
                p = i(85742),
                v = i(20418),
                _ = i(42561),
                g = i(85906),
                x = i(7103),
                k = i(25358),
                C = i(71318),
                P = i.n(C);
            let f = (0, r.PA)((t) => {
                var e;
                let { className: i, playlist: r, likeIconSize: n = 'xxs' } = t,
                    { user: o, trailer: d } = (0, _.Pjs)(),
                    u = (0, _.PT7)(),
                    { sendLikeSearchFeedback: y } = (0, _.zEv)(),
                    v = (0, k.KX)(r),
                    [x, C] = (0, s.useState)(!1),
                    f = (0, m.c)(async () => {
                        x || r.isLiked || (C(!0), null == y || y()), await v();
                    }),
                    h = (0, _.Ftl)(),
                    j = (0, m.c)((t) => {
                        if ((t.stopPropagation(), u())) return void t.preventDefault();
                        d.openPlaylistTrailer(r.id), h(c.ky.Playlist, r.id);
                    });
                return (0, l.jsxs)('div', {
                    className: (0, a.$)(P().root, P().controls, i, { [P().controls_disabled]: !r.isAvailable }),
                    children: [
                        r.isAvailable &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(g.aQ, {
                                        fallback: (0, l.jsx)(g.cy, {
                                            size: 'xs',
                                            iconSize: n,
                                            className: (0, a.$)(P().item, P().likeIcon),
                                            isLiked: r.isLiked,
                                            onClick: f,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (e = r.trailer) ? void 0 : e.isAvailable) &&
                                        (0, l.jsx)(g.aQ, {
                                            fallback: (0, l.jsx)(g.kJ, {
                                                className: (0, a.$)(P().item, P().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: j,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, l.jsx)('div', {
                            className: (0, a.$)(P().item, P().item_buttonArrow),
                            children: (0, l.jsx)(p.Icon, { className: g.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var h = i(3291),
                j = i.n(h);
            let L = (0, r.PA)((t) => {
                let { className: e, playlist: i, pageId: r, coverClassName: k, playButtonIconSize: C, likeIconSize: P } = t,
                    { ref: h, intersectionPropertyId: L } = (0, _.nMI)(),
                    { from: A } = (0, _.fyy)({ pageId: r }),
                    [b, N] = (0, s.useState)(!1),
                    K = (0, _.brA)(),
                    w = (0, x.r)(i),
                    B = i.title || '',
                    { formatMessage: T, formatNumber: z } = (0, n.A)(),
                    E = (0, _.PT7)(),
                    { sendNavigateSearchFeedback: I, sendPlaySearchFeedback: S } = (0, _.zEv)(),
                    R = (0, _.NKK)(),
                    {
                        paywall: { modal: F },
                    } = (0, _.Pjs)(),
                    M = (0, _.NPu)(),
                    {
                        isPlaying: O,
                        isCurrent: $,
                        togglePlay: Y,
                    } = (0, _.Dx4)({ playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: A }, loadContextMeta: !0 } }),
                    U = (0, _.ZpR)(i.url),
                    D = (0, m.c)((t) => {
                        null == I || I(), R({ to: c.QT.PlaylistScreen }), t.preventDefault(), U(t);
                    }),
                    q = (0, m.c)(() => {
                        if (!E()) {
                            if (M) return void F.open();
                            b || O || (N(!0), null == S || S()), Y(), K(!O);
                        }
                    }),
                    V = (0, m.c)((t) => {
                        (0, y.P)(t, g.$f.ripple), D(t);
                    }),
                    H = (0, m.c)((t) => {
                        t.stopPropagation(), D(t);
                    }),
                    Z = (0, s.useCallback)(
                        (t) =>
                            (0, l.jsx)(g.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: B,
                                className: (0, a.$)(g.$f.playButtonCell, k),
                                alt: T({ id: 'entity-names.playlist-name' }, { playlistName: B }),
                                radius: 'xs',
                                ...t,
                            }),
                        [i, B, k, T],
                    ),
                    X = null == Z ? void 0 : Z({ onPlayButtonClick: q, isPlaying: O, isCurrent: $, playButtonIconSize: C }),
                    W = (0, s.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, l.jsx)(g.N_, { className: (0, a.$)(g.$f.text, g.$f.titleLink), href: i.url, onClick: H, children: B })
                                : (0, l.jsx)(v.Caption, { className: (0, a.$)(g.$f.text, g.$f.titleText), size: 'm', variant: 'div', type: 'text', children: B }),
                        [H, i.isAvailable, i.url, B],
                    ),
                    Q = (0, s.useMemo)(() => {
                        if (void 0 === i.actualLikesCount || void 0 === i.tracksCount) return;
                        let t = (0, l.jsx)(v.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            e = i.isLiked ? 'likedVariant' : 'likeVariant',
                            a = ''.concat(w, ' ').concat(T({ id: 'entity-names.tracks-count' }, { value: i.tracksCount }));
                        return (0, l.jsxs)('div', {
                            className: j().description,
                            'aria-label': a,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: j().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, l.jsx)(p.Icon, { className: j().icon, variant: e, size: 'xxs' }),
                                        (0, l.jsx)(v.Caption, { variant: 'span', size: 'm', weight: 'medium', children: z(i.actualLikesCount) }),
                                    ],
                                }),
                                (0, l.jsxs)('div', {
                                    className: j().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, l.jsx)(v.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, l.jsx)(o.A, { id: 'entity-names.tracks-count', values: { value: z(i.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [T, z, w, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, l.jsxs)(g.Cj, {
                    ref: h,
                    'data-intersection-property-id': L,
                    className: (0, a.$)(g.$f.root, { [g.$f.root_disabled]: !i.isAvailable }, e),
                    'aria-label': i.title || T({ id: 'entity-names.playlist' }),
                    onClick: V,
                    ...(0, d.Am)(d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [X, (0, l.jsx)(g.ro, { isDisabled: !i.isAvailable, title: W, description: Q }), (0, l.jsx)(f, { playlist: i, likeIconSize: P })],
                });
            });
        },
        12534: (t) => {
            t.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        20433: (t, e, i) => {
            'use strict';
            i.d(e, { PlaylistsCarousel: () => d });
            var l = i(62936),
                a = i(44020),
                r = i(23480),
                s = i(42561),
                n = i(85906),
                o = i(88587);
            let c = (t) => {
                    let {
                            forwardRef: e,
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            title: d,
                            description: u,
                            playlists: m,
                            containerClassName: y,
                            className: p,
                            headerClassName: v,
                            viewAllActionLink: _,
                            headingVariant: g,
                            shouldSendAnalyticsOnLoaded: x,
                            ...k
                        } = t,
                        C = (0, s.fBs)();
                    return (
                        (0, a.useEffect)(() => {
                            x && !i && C();
                        }, [i, C, x]),
                        (0, l.jsx)(n.OY, {
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            className: p,
                            headerClassName: v,
                            containerClassName: y,
                            ref: e,
                            title: d,
                            description: u,
                            viewAllActionLink: _,
                            headingVariant: g,
                            ...k,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((t, e) =>
                                          (0, l.jsx)(
                                              s.Bki,
                                              {
                                                  objectType: r.ky.Playlist,
                                                  objectId: t.id,
                                                  objectPosX: e + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, l.jsx)(o.PlaylistCard, { playlist: t, contentLinesCount: 3 }),
                                              },
                                              t.key,
                                          ),
                                      ),
                        })
                    );
                },
                d = (0, a.forwardRef)((t, e) => (0, l.jsx)(c, { forwardRef: e, ...t }));
        },
        40507: (t) => {
            t.exports = {
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
        68606: (t) => {
            t.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        71318: (t) => {
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
        79670: (t, e, i) => {
            'use strict';
            i.d(e, {
                pA: () => P.EmptyPlaylistBlock,
                vf: () => f.HorizontalPlaylistCard,
                B6: () => h.PlaylistCard,
                BL: () => k,
                IP: () => C,
                EC: () => j.PlaylistsCarousel,
                bk: () => r,
                ZC: () => c,
                Ew: () => u,
                pd: () => y,
            });
            var l = i(51606),
                a = i(42561);
            let r = (t) => {
                var e, i;
                let { playlist: r, generatedPlaylistType: s, likesCount: n, trailer: o, tracksCount: c } = t;
                return (0, l.wg)({
                    isAvailable: null == (i = r.available) || i,
                    uuid: r.playlistUuid,
                    title: r.title,
                    uid: r.uid,
                    kind: r.kind,
                    coverUri: null == (e = r.cover) ? void 0 : e.uri,
                    generatedPlaylistType: s,
                    likesCount: n,
                    tracksCount: c,
                    trailer: (0, a.mxW)(o),
                });
            };
            var s = i(69526),
                n = i(44020);
            (0, n.cache)(async (t, e) => {
                var i;
                let l;
                try {
                    let { container: i, backendHostTld: r, locale: s, host: n, fullUrl: o, isRSC: c, requestUrl: d } = await (0, a.IhE)();
                    if (c) return { playlist: void 0, backendHostTld: r, locale: s, host: n, fullUrl: o, requestUrl: d };
                    let u = i.get(a._19);
                    l = {
                        playlist: await u.getPlaylistWithTracksIds({ userId: t, playlistKind: e, resumeStream: !1 }),
                        backendHostTld: r,
                        locale: s,
                        host: n,
                        fullUrl: o,
                        requestUrl: d,
                    };
                } catch (t) {
                    return (0, a.tfF)(t, () => ({ playlist: void 0, ...(0, a.Bj3)() }));
                }
                return (null == (i = l.playlist) ? void 0 : i.error) === 'not-found' && (0, s.notFound)(), l;
            }),
                (0, n.cache)(async (t) => {
                    var e;
                    let i;
                    (0, a.sU0)(t) || (0, s.notFound)();
                    try {
                        let { container: e, backendHostTld: l, locale: r, host: s, fullUrl: n, isRSC: o, requestUrl: c } = await (0, a.IhE)();
                        if (o) return { playlist: void 0, backendHostTld: l, locale: r, host: s, fullUrl: n, requestUrl: c };
                        let d = e.get(a.qNr);
                        i = {
                            playlist: await d.getPlaylist({ playlistUuid: t, resumeStream: !1, richTracks: !1 }),
                            backendHostTld: l,
                            locale: r,
                            host: s,
                            fullUrl: n,
                            requestUrl: c,
                        };
                    } catch (t) {
                        return (0, a.tfF)(t, () => ({ playlist: void 0, ...(0, a.Bj3)() }));
                    }
                    return (null == (e = i.playlist) ? void 0 : e.error) === 'not-found' && (0, s.notFound)(), i;
                });
            var o = i(25358);
            let c = (t) =>
                (0, l.wg)({
                    ...(0, o.jX)(t),
                    owner: t.owner ? ((t) => ({ uid: t.uid, login: t.login, name: t.name, sex: t.sex, verified: t.verified }))(t.owner) : void 0,
                    description: t.description,
                    tags: t.tags,
                    modified: t.modified,
                    madeFor: t.madeFor ? ((t) => (0, l.wg)({ caseForms: t.caseForms ? (0, a.NH4)(t.caseForms) : null }))(t.madeFor) : null,
                });
            var d = i(81628);
            let u = (t) => {
                var e, i;
                return (0, l.wg)({ ...(0, o.jX)(t), artists: null != (i = null == t || null == (e = t.artists) ? void 0 : e.map(d.dM)) ? i : [] });
            };
            var m = i(43026);
            let y = (t) => {
                var e, i;
                return (0, l.wg)({ ...(0, o.jX)(t), tracks: null != (i = null == t || null == (e = t.tracks) ? void 0 : e.map(m.Rw)) ? i : [] });
            };
            var p = i(54690);
            let v = l.gK.model('PlaylistOwner', { caseForms: l.gK.maybeNull(p.lg) });
            var _ = i(78980);
            let g = l.gK.model('PlaylistOwner', {
                    uid: l.gK.number,
                    login: l.gK.string,
                    name: l.gK.string,
                    sex: l.gK.enumeration(Object.values(_.U)),
                    verified: l.gK.boolean,
                }),
                x = l.gK.model('PlaylistTag', { id: l.gK.string, value: l.gK.string }),
                k = o.$o
                    .props({
                        owner: l.gK.maybe(g),
                        modified: l.gK.string,
                        description: l.gK.maybe(l.gK.string),
                        tags: l.gK.maybeNull(l.gK.array(x)),
                        madeFor: l.gK.maybeNull(v),
                    })
                    .views((t) => ({
                        get seeds() {
                            var e;
                            return ['playlist:'.concat(null == (e = t.owner) ? void 0 : e.login, '_').concat(t.kind)];
                        },
                        get tagsString() {
                            let { experiments: e } = (0, l.Zn)(t);
                            if (!e.checkExperiment(a.zal.WebEditorsFeatures, 'on') || !Array.isArray(t.tags) || !t.tags.length) return null;
                            return t.tags.map((t) => t.value).join(', ');
                        },
                    }))
                    .actions((t) => ({
                        changeDescription: (0, l.L3)(function* (e) {
                            if (!(0, l._n)(t)) return a.FlZ.ERROR;
                            if (t.description === e) return a.FlZ.OK;
                            if (e.length > o.iz) return a.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: r } = (0, l._$)(t);
                            if (t.canUserChange) {
                                let l = t.description;
                                t.description = e;
                                try {
                                    let l = yield i.changePlaylistDescription({ description: e, userId: t.uid, playlistKind: t.kind });
                                    return (t.description = l.description), a.FlZ.OK;
                                } catch (e) {
                                    (t.description = l), r.error(e);
                                }
                            }
                            return a.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, l.L3)(function* (e) {
                            if (!(0, l._n)(t)) return a.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: r } = (0, l._$)(t);
                            try {
                                let l = yield i.uploadPlaylistCover({ userId: t.uid, formData: e, playlistKind: t.kind });
                                return (t.coverUri = l.cover.uri), a.FlZ.OK;
                            } catch (t) {
                                r.error(t);
                            }
                            return a.FlZ.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                C = o.Zq.props({ artists: l.gK.maybe(l.gK.array(d.PK)) });
            var P = i(95565),
                f = i(9066),
                h = i(88587),
                j = i(20433);
        },
        79966: (t) => {
            t.exports = { root: 'VirtualList_root__kEvf_' };
        },
        88587: (t, e, i) => {
            'use strict';
            i.d(e, { PlaylistCard: () => b });
            var l = i(62936),
                a = i(79950),
                r = i(19718),
                s = i(44020),
                n = i(47480),
                o = i(23480),
                c = i(8669),
                d = i(81959),
                u = i(59935),
                m = i(60188),
                y = i(16258),
                p = i(85742),
                v = i(56721),
                _ = i(20418),
                g = i(81628),
                x = i(25358),
                k = i(42561),
                C = i(85906),
                P = i(7103),
                f = i(64304),
                h = i(35250);
            let j = (0, r.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: a, open: r, ...s } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, k.qBP)(),
                    {
                        experiments: y,
                        settings: { isMobile: p },
                        trailer: v,
                        user: _,
                    } = (0, k.Pjs)(),
                    g = (0, x.KX)(i),
                    P = (0, x.A7)(i),
                    j = (0, k.Ftl)(),
                    { formatMessage: L } = (0, n.A)(),
                    A = (0, k.PT7)(),
                    b = y.checkExperiment(k.zal.WebEditorsFeatures, 'on'),
                    N = (0, h.A_)({ entityVariant: k.DwC.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, k.NBO)(r);
                let K = (0, u.c)(() => {
                    if (d) return void m();
                    A() || (v.openPlaylistTrailer(i.id), j(o.ky.Playlist, i.id));
                });
                return (0, l.jsxs)(f.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: L({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, c.Am)(c.Kq.playlist.PLAYLIST_CONTEXT_MENU),
                    ...s,
                    children: [
                        b && (0, l.jsx)(h.dx, { entityVariant: k.DwC.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : N }),
                        !p && (0, l.jsx)(C.L1, { onClick: P, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(C.TW, { onClick: g, isLiked: i.isLiked, disabled: !_.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, l.jsx)(C.No, { onClick: K, disabled: !i.isAvailable }),
                    ],
                });
            });
            var L = i(40507),
                A = i.n(L);
            let b = (0, r.PA)((t) => {
                let { className: e, playlist: i, children: r, contentLinesCount: f, customDescription: h } = t,
                    { ref: L, intersectionPropertyId: b } = (0, k.nMI)(),
                    {
                        trailer: N,
                        user: K,
                        paywall: { modal: w },
                    } = (0, k.Pjs)(),
                    { from: B, utmLink: T } = (0, k.fyy)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: z } = (0, n.A)(),
                    { sendLikeSearchFeedback: E, sendNavigateSearchFeedback: I, sendPlaySearchFeedback: S } = (0, k.zEv)(),
                    [R, F] = (0, s.useState)(!1),
                    [M, O] = (0, s.useState)(!1),
                    [$, Y] = (0, s.useState)(!1),
                    U = (0, P.r)(i),
                    D = (0, x.KX)(i),
                    q = (0, x.A7)(i),
                    V = (0, k.NKK)(),
                    H = (0, k.brA)(),
                    Z = (0, k.ZpR)(i.url),
                    X = (0, k.Ftl)(),
                    W = (0, k.PT7)(),
                    Q = (0, u.c)((t) => {
                        if ((t.stopPropagation(), W())) return void t.preventDefault();
                        N.setUtmLink(T), N.openPlaylistTrailer(i.id), X(o.ky.Playlist, i.id);
                    }),
                    [J, G] = (0, s.useState)(!1),
                    { isPlaying: tt, togglePlay: te } = (0, k.Dx4)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: B, utmLink: T }, loadContextMeta: !0 },
                    }),
                    ti = (0, u.c)(() => {
                        V({ to: o.QT.PlaylistScreen }), null == I || I();
                    }),
                    tl = (0, u.c)((t) => {
                        ti(), Z(t);
                    }),
                    ta = (0, k.NPu)(),
                    tr = (0, u.c)(() => {
                        if (!W()) {
                            if (ta) return void w.open();
                            R || tt || (F(!0), null == S || S()), te(), H(!tt);
                        }
                    }),
                    ts = (0, u.c)(() => {
                        M || i.isLiked || (O(!0), null == E || E()), D();
                    }),
                    tn = (0, u.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    to = (0, u.c)((t) => {
                        Y(t), G(t);
                    }),
                    tc = (0, s.useMemo)(() => {
                        var t;
                        return h
                            ? (0, l.jsx)(_.Caption, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: h }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, l.jsx)(
                                    g.iQ,
                                    { className: A().artists, artists: i.artists, lineClamp: 1, linkClassName: A().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [h, i]),
                    td = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                C.cy,
                                {
                                    className: (0, a.$)(A().likeButton, A().control),
                                    isLiked: i.isLiked,
                                    onClick: ts,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tu = (0, s.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, l.jsx)(
                                C.nE,
                                {
                                    children: (0, l.jsx)(
                                        C.kJ,
                                        { className: (0, a.$)(A().trailerButton, A().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: Q },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [Q, i]),
                    tm = (0, s.useMemo)(
                        () =>
                            (0, l.jsx)(
                                C.O0,
                                { onClick: q, isPinned: i.isPinned, className: (0, a.$)(A().pinButton, A().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [q, i],
                    ),
                    ty = (0, s.useMemo)(
                        () =>
                            (0, l.jsx)(v.Paper, {
                                className: A().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, c.Am)(c.Kq.playlist.PLAYLIST_CARD),
                                children: (0, l.jsxs)('div', {
                                    className: A().coverBlock,
                                    onClick: tl,
                                    children: [
                                        (0, l.jsx)(C.BW, {
                                            className: A().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: U,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(y.hg, {
                                            isVisible: $ || J,
                                            className: A().controls,
                                            playControl: (0, l.jsx)(
                                                C.DM,
                                                {
                                                    className: (0, a.$)(A().playButton, A().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tr,
                                                    isPlaying: tt,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: td,
                                            menuControl: (0, l.jsx)(
                                                j,
                                                {
                                                    playlist: i,
                                                    onOpenChange: to,
                                                    open: $,
                                                    onClick: tn,
                                                    className: (0, a.$)(A().menuButton, A().control),
                                                    icon: (0, l.jsx)(p.Icon, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    ...(0, c.Am)(c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON),
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tm,
                                            trailerControl: tu,
                                        }),
                                    ],
                                }),
                            }),
                        [tl, i, U, $, J, tr, tt, td, to, tn, tm, tu],
                    ),
                    tp = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(y.MN, {
                    ref: L,
                    'aria-label': U,
                    className: (0, a.$)(A().root, e),
                    title: (0, l.jsx)(_.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, c.Am)(c.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, l.jsx)(C.N_, { className: A().titleLink, href: i.url, onClick: ti, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(C.N_, { href: i.url, onClick: ti, children: i.title }),
                    'data-intersection-property-id': b,
                    contentLinesCount: f,
                    view: ty,
                    description: tc,
                    ...(0, c.Am)(c.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        tp &&
                            (0, l.jsx)(C.xW, {
                                ariaLabel: z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: D,
                            }),
                        r,
                    ],
                });
            });
        },
        92339: (t) => {
            t.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        95565: (t, e, i) => {
            'use strict';
            i.d(e, { EmptyPlaylistBlock: () => m });
            var l = i(62936),
                a = i(79950),
                r = i(44020),
                s = i(26731),
                n = i(8669),
                o = i(85742),
                c = i(20418),
                d = i(92339),
                u = i.n(d);
            let m = (t) => {
                let { className: e, isEmptySearch: i } = t,
                    d = (0, r.useMemo)(
                        () => (i ? (0, l.jsx)(s.A, { id: 'search-results.not-found-title' }) : (0, l.jsx)(s.A, { id: 'error-messages.empty-collection-playlist-title' })),
                        [i],
                    ),
                    m = (0, r.useMemo)(
                        () =>
                            i
                                ? (0, l.jsx)(s.A, { id: 'search-results.not-found-description' })
                                : (0, l.jsx)(s.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [i],
                    );
                return (0, l.jsxs)('div', {
                    className: (0, a.$)(u().root, e),
                    ...(0, n.Am)(n.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, l.jsx)('div', {
                            className: u().iconBackground,
                            children: (0, l.jsx)(o.Icon, { variant: 'search', size: 'l', className: u().icon, ...(0, n.Am)(n.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON) }),
                        }),
                        (0, l.jsx)(c.Heading, { variant: 'h3', size: 'xs', className: u().title, ...(0, n.Am)(n.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE), children: d }),
                        (0, l.jsx)(c.Caption, {
                            variant: 'span',
                            size: 'l',
                            className: u().subtitle,
                            ...(0, n.Am)(n.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
                            children: m,
                        }),
                    ],
                });
            };
        },
        96318: (t) => {
            t.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        99041: (t, e, i) => {
            'use strict';
            i.d(e, { Q$: () => P, Ux: () => x, wj: () => b, LW: () => u, rA: () => d });
            var l = i(49696),
                a = i(60188),
                r = i(42561),
                s = i(45064),
                n = i(44020),
                o = i(59935);
            let c = { width: 400, height: 400 },
                d = (t) => {
                    let { count: e, getEstimateSize: i, gap: l, containerRef: a, overscan: d = 2 } = t,
                        {
                            settings: { isMobile: u },
                        } = (0, r.Pjs)(),
                        { contentScrollRef: m } = (0, r.gKY)(),
                        y = (0, n.useRef)(new Map()),
                        p = (0, n.useRef)(void 0),
                        v = {
                            count: e,
                            gap: l,
                            estimateSize: (t) => {
                                let e = y.current.get(String(t));
                                return null != e ? e : i(t);
                            },
                            overscan: d,
                            initialRect: c,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((t, e, i) => {
                                if (!e) return 0;
                                let l = e.getBoundingClientRect().top;
                                return t && 1 ? l + window.scrollY : !t && i ? l + i.scrollTop : 0;
                            })(u, a, m),
                        },
                        _ = (0, s.XW)(v),
                        g = (0, s.Te)({ ...v, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        x = u ? _ : g,
                        k = (0, o.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, n.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((t) => {
                                    let e = !1;
                                    t.forEach((t) => {
                                        let i = t.target.getAttribute('data-index');
                                        if (t.target && i) {
                                            let l = t.contentRect.height;
                                            l && l !== y.current.get(i) && (y.current.set(i, t.contentRect.height), (e = !0));
                                        }
                                    }),
                                        e && k();
                                }));
                        }, [k]),
                        { virtualizer: x, resizeObserver: p.current }
                    );
                },
                u = (t) => {
                    let {
                            count: e,
                            getEstimateRowSize: i,
                            rowGap: s,
                            columnGap: n,
                            minColumnWidth: o,
                            maxColumnWidth: c,
                            minColumnCount: u,
                            maxColumnCount: m,
                            containerRef: y,
                        } = t,
                        { rowCount: p, columnCount: v } = (0, r.E11)({
                            totalCount: e,
                            columnGap: null != n ? n : 0,
                            minColumnCount: u,
                            maxColumnWidth: c,
                            minColumnWidth: o,
                            maxColumnCount: m,
                            containerRef: y,
                        }),
                        { virtualizer: _, resizeObserver: g } = d({ count: p, getEstimateSize: i, gap: s, containerRef: y }),
                        x = (0, l.A)(
                            Array.from({ length: e }, (t, e) => e),
                            v,
                        ),
                        k = (0, a.L)(() => {
                            var t, e;
                            if (!_.range) return null;
                            let i = null == (t = x[_.range.startIndex]) ? void 0 : t.at(0),
                                l = null == (e = x[_.range.endIndex]) ? void 0 : e.at(-1);
                            return void 0 !== i && void 0 !== l ? { startIndex: i, endIndex: l } : null;
                        });
                    return { virtualizer: _, rowResizeObserver: g, indices: x, columnCount: v, visibleRange: k };
                };
            var m = i(62936),
                y = i(19718),
                p = i(56874),
                v = i(79950),
                _ = i(68606),
                g = i.n(_);
            let x = (0, y.PA)((t) => {
                let { indices: e, virtualItem: i, renderItemByIndex: l, columnClassName: a, className: r, resizeObserver: s, scrollMargin: o } = t,
                    c = (0, n.useRef)(null),
                    d = e[i.index],
                    u = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - o, 'px') };
                return (
                    (0, n.useEffect)(() => {
                        let t = c.current;
                        if (t)
                            return (
                                null == s || s.observe(t),
                                () => {
                                    null == s || s.unobserve(t);
                                }
                            );
                    }, [s]),
                    (0, m.jsx)('div', {
                        'data-index': i.index,
                        ref: c,
                        style: u,
                        className: (0, v.$)(g().root, r),
                        children: null == d ? void 0 : d.map((t) => (0, m.jsx)('div', { className: a, children: l(t) }, ''.concat(i.key, '_').concat(t))),
                    })
                );
            });
            var k = i(96318),
                C = i.n(k);
            let P = (0, y.PA)((t) => {
                let {
                        count: e,
                        rowGap: i,
                        columnGap: l,
                        getEstimateRowSize: a,
                        minColumnCount: r = 2,
                        minColumnWidth: s,
                        maxColumnWidth: o,
                        maxColumnCount: c,
                        renderItemByIndex: d,
                        onChangeRange: y,
                    } = t,
                    [v, _] = (0, p.d)(),
                    {
                        virtualizer: g,
                        rowResizeObserver: k,
                        columnCount: P,
                        indices: f,
                    } = u({
                        count: e,
                        rowGap: i,
                        columnGap: l,
                        getEstimateRowSize: a,
                        minColumnCount: r,
                        minColumnWidth: s,
                        maxColumnWidth: o,
                        maxColumnCount: c,
                        containerRef: v,
                    });
                (0, n.useEffect)(() => {
                    !g.isScrolling && g.range && (null == y || y(g.range, P));
                }, [y, g.isScrolling, g.range, P]);
                let h = { '--virtual-grid-height': ''.concat(g.getTotalSize(), 'px'), '--virtual-grid-column-count': P };
                return (0, m.jsx)('div', {
                    ref: _,
                    style: h,
                    className: C().root,
                    children: g.getVirtualItems().map((t) =>
                        (0, m.jsx)(
                            x,
                            {
                                className: C().row,
                                columnClassName: C().column,
                                virtualItem: t,
                                resizeObserver: k,
                                indices: f,
                                renderItemByIndex: d,
                                scrollMargin: g.options.scrollMargin,
                            },
                            t.key,
                        ),
                    ),
                });
            });
            var f = i(12534),
                h = i.n(f);
            let j = (t) => {
                let { item: e, scrollMargin: i, resizeObserver: l, renderItemByIndex: a } = t,
                    [r, s] = (0, p.d)();
                (0, n.useEffect)(
                    () => (
                        r && l && l.observe(r),
                        () => {
                            r && l && l.unobserve(r);
                        }
                    ),
                    [r, l],
                );
                let o = { transform: 'translate3d(0, '.concat(e.start - i, 'px, 0)') };
                return (0, m.jsx)('div', { 'data-index': e.index, className: h().root, ref: s, style: o, children: a(e.index) }, e.key);
            };
            var L = i(79966),
                A = i.n(L);
            let b = (t) => {
                let { count: e, getEstimateRowSize: i, renderItemByIndex: l, onChangeRange: a } = t,
                    [r, s] = (0, p.d)(),
                    { virtualizer: o, resizeObserver: c } = d({ count: e, getEstimateSize: i, containerRef: r, overscan: 3 });
                (0, n.useEffect)(() => {
                    !o.isScrolling && o.range && a && a(o.range);
                }, [a, o.isScrolling, o.range]);
                let u = o.getTotalSize(),
                    y = o.getVirtualItems(),
                    v = o.options.scrollMargin;
                return (0, m.jsx)('div', {
                    className: A().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: s,
                    children: y.map((t) => (0, m.jsx)(j, { item: t, scrollMargin: v, resizeObserver: c, renderItemByIndex: l }, t.key)),
                });
            };
        },
    },
]);
