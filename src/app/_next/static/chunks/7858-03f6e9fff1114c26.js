(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3909, 7858],
    {
        3283: (e, t, i) => {
            'use strict';
            i.d(t, { PlaylistsCarousel: () => c });
            var a = i(54486),
                r = i(61910),
                n = i(43350),
                l = i(83252),
                s = i(80585),
                o = i(45318);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: c,
                            description: u,
                            playlists: _,
                            containerClassName: m,
                            className: g,
                            headerClassName: p,
                            viewAllActionLink: y,
                            headingVariant: v,
                            shouldSendAnalyticsOnLoaded: C,
                            ...b
                        } = e,
                        h = (0, l.fBs)();
                    return (
                        (0, r.useEffect)(() => {
                            C && !i && h();
                        }, [i, h, C]),
                        (0, a.jsx)(s.OY, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: g,
                            headerClassName: p,
                            containerClassName: m,
                            ref: t,
                            title: c,
                            description: u,
                            viewAllActionLink: y,
                            headingVariant: v,
                            ...b,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, a.jsx)(
                                              l.Bki,
                                              {
                                                  objectType: n.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, a.jsx)(o.PlaylistCard, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                c = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        5065: (e, t, i) => {
            'use strict';
            i.d(t, { SearchVibeCard: () => C });
            var a = i(54486),
                r = i(50420),
                n = i(28303),
                l = i(61910),
                s = i(31500),
                o = i(8817),
                d = i(73633),
                c = i(97800),
                u = i(83252),
                _ = i(80585),
                m = i(69673),
                g = i(55639),
                p = i(67075),
                y = i(42783),
                v = i.n(y);
            let C = (0, n.PA)((e) => {
                let { className: t, vibe: i, cover: n, coverClassName: y, playButtonIconSize: C, description: b, agentVariant: h } = e,
                    { ref: x, intersectionPropertyId: k } = (0, u.nMI)(),
                    { pageId: P } = (0, u.$au)(),
                    [A, f] = (0, l.useState)(!1),
                    { blockIdForFrom: j } = (0, u.N8n)(),
                    { isFreemium: w } = (0, u.XCI)(),
                    { sendPlaySearchFeedback: N } = (0, u.zEv)(),
                    I = (0, u.brA)(),
                    [B, V] = (0, l.useState)(!1),
                    L = (0, u.PT7)(),
                    { isPlaying: T, togglePlay: K, isCurrent: S } = (0, u.B0S)({ seeds: i.seeds, pageIdForFrom: P, blockIdForFrom: j }),
                    E = (0, o.c)(() => {
                        if (!L()) {
                            if (w) return void V(!0);
                            A || T || (f(!0), null == N || N()), K(), I(!T);
                        }
                    }),
                    z = (0, o.c)(() => {
                        T || E();
                    }),
                    R = (0, o.c)((e) => {
                        2 === e.detail ? z() : (0, d.P)(e, _.$f.ripple);
                    }),
                    U = (0, l.useCallback)(() => {
                        if (i.shouldShowAgent && i.agent && h)
                            switch (h) {
                                case m.h.LARGE:
                                    return (0, a.jsxs)('div', {
                                        className: (0, r.$)(v().root, _.$f.playButtonCell, y),
                                        children: [
                                            (0, a.jsx)(g.VibeCardView, { agent: i.agent, isPlaying: T }),
                                            (0, a.jsx)(_.DM, {
                                                variant: 'filled',
                                                className: v().playButton,
                                                iconClassName: v().playButtonIcon,
                                                isPlaying: T,
                                                onClick: E,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case m.h.SMALL:
                                    return (0, a.jsx)(p.n, {
                                        agent: i.agent,
                                        isPlaying: T,
                                        isCurrent: S,
                                        onPlayButtonClick: E,
                                        alt: ''.concat(b, ' ').concat(i.title),
                                        className: (0, r.$)(_.$f.playButtonCell, y),
                                    });
                            }
                        return (0, a.jsx)(_.q1, {
                            isAvailable: !0,
                            coverUri: null == n ? void 0 : n.uri,
                            title: i.title,
                            className: (0, r.$)(_.$f.playButtonCell, y),
                            entityCoverStyle: { backgroundColor: null == n ? void 0 : n.color },
                            radius: 'round',
                            onPlayButtonClick: E,
                            isPlaying: T,
                            isCurrent: S,
                            playButtonIconSize: C,
                            alt: ''.concat(b, ' ').concat(i.title),
                        });
                    }, [h, null == n ? void 0 : n.color, null == n ? void 0 : n.uri, y, b, E, S, T, C, i.agent, i.shouldShowAgent, i.title]);
                return (0, a.jsxs)(_.Cj, {
                    ref: x,
                    'data-intersection-property-id': k,
                    className: (0, r.$)(_.$f.root, t),
                    'aria-label': i.title,
                    onClick: R,
                    ...(0, s.Am)(s.OA.vibe.SEARCH_VIBE_CARD),
                    children: [
                        (0, a.jsx)(_.SU, {
                            isOpened: B,
                            onOpenChange: V,
                            isEnabled: w,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: i.stationType,
                            renderChildren: U,
                        }),
                        (0, a.jsx)(_.ro, {
                            title: (0, a.jsx)(c.Caption, { className: (0, r.$)(_.$f.text, _.$f.titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            description: b,
                        }),
                    ],
                });
            });
        },
        7317: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        14148: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { h: () => a }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(a || (a = {}));
        },
        20875: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPinClick: () => b });
            var a = i(54486),
                r = i(63930),
                n = i(61910),
                l = i(43426),
                s = i(60049),
                o = i(83252),
                d = i(80585),
                c = i(28303),
                u = i(31500),
                _ = i(27510),
                m = i(58360),
                g = i(67075),
                p = i(96957),
                y = i.n(p);
            let v = (0, c.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, o.Pjs)(),
                    n = r.checkExperiment(o.zal.WebNextWaveAgentExperiment, 'on'),
                    l = (0, _.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, a.jsx)(g.n, { agent: t.agent, shouldShowControl: !1, className: y().view })
                            : (0, a.jsx)(m.Image, {
                                  className: y().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  ...(0, u.Am)(u.S7.BASE_NOTIFICATION_PIN_VIBE_COVER),
                              });
                    }),
                    s = n && t.agent ? void 0 : 'round';
                return (0, a.jsx)(d.k4, {
                    closeToast: i,
                    entityVariant: d.cp.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: l,
                    radius: s,
                    className: y().root,
                });
            });
            var C = i(35248);
            let b = (e) => {
                let { user: t, pinsCollection: i } = (0, o.Pjs)(),
                    { notify: c } = (0, o.lkh)(),
                    { formatMessage: u } = (0, l.A)(),
                    [_, m] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized)
                        return void c((0, a.jsx)(d.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                    if (_) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        l = i.get(e.pinId);
                    m(!0);
                    let g = await e.togglePin();
                    m(!1),
                        l &&
                            l.type === s._.WAVE_ITEM &&
                            l.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = l.data.backgroundImageUrl), (n.colors = l.data.colors), (n.agent = l.data.agent)),
                        g &&
                            'object' == typeof g &&
                            'data' in g &&
                            (g.data.backgroundImageUrl && (n.backgroundImageUrl = g.data.backgroundImageUrl),
                            g.data.colors && (n.colors = { average: g.data.colors.average, waveText: g.data.colors.waveText }),
                            g.data.agent && (n.agent = (0, C.K)(g.data.agent))),
                        g
                            ? c((0, a.jsx)(v, { vibe: n }), { containerId: o.uQT.INFO })
                            : c((0, a.jsx)(d.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                }, [u, c, _, i, t.isAuthorized, e]);
            };
        },
        23265: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var a = i(61910),
                r = i(43426);
            let n = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let a = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(a, ' ').concat(i);
                }, [t, e]);
            };
        },
        25325: (e) => {
            e.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        29443: (e, t, i) => {
            'use strict';
            i.d(t, { VibeAgentCard: () => v });
            var a = i(54486),
                r = i(50420),
                n = i(28303),
                l = i(61910),
                s = i(31500),
                o = i(27510),
                d = i(71712),
                c = i(97800),
                u = i(83252),
                _ = i(80585),
                m = i(20875),
                g = i(55639),
                p = i(97569),
                y = i.n(p);
            let v = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: p = 3, className: v } = e,
                    { pageId: C } = (0, u.$au)(),
                    { blockIdForFrom: b } = (0, u.N8n)(),
                    { ref: h, intersectionPropertyId: x } = (0, u.nMI)(),
                    { isFreemium: k } = (0, u.XCI)(),
                    [P, A] = (0, l.useState)(!1),
                    f = (0, m.useOnPinClick)(t),
                    { isPlaying: j, togglePlay: w } = (0, u.B0S)({ seeds: t.seeds, pageIdForFrom: C, blockIdForFrom: b }),
                    N = (0, u.brA)(),
                    I = (0, l.useCallback)(() => {
                        k || (w(), N(!j));
                    }, [k, w, N, j]),
                    B = (0, l.useCallback)(
                        () =>
                            (0, a.jsx)(
                                _.DM,
                                {
                                    className: (0, r.$)(y().playButton, y().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: I,
                                    isPlaying: j,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, I, j],
                    ),
                    V = (0, o.L)(() =>
                        (0, a.jsx)(
                            _.SU,
                            { isEnabled: k, isOpened: P, onOpenChange: A, placement: 'top', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: B },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    L = (0, o.L)(() =>
                        (0, a.jsx)(_.O0, { onClick: f, isPinned: t.isPinned, className: (0, r.$)(y().pinButton, y().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    T = (0, o.L)(() =>
                        (0, a.jsxs)('div', {
                            className: y().cover,
                            onClick: I,
                            children: [
                                t.agent && (0, a.jsx)(g.VibeCardView, { agent: t.agent, isPlaying: j }),
                                (0, a.jsx)(d.hg, { isVisible: P, className: y().controls, playControl: i ? V : void 0, pinControl: L }),
                            ],
                        }),
                    );
                return (0, a.jsx)(d.MN, {
                    ref: h,
                    className: (0, r.$)(y().root, v),
                    'data-intersection-property-id': x,
                    contentLinesCount: p,
                    view: T,
                    textPosition: 'center',
                    wrapperClassName: (0, r.$)({ [y().additionals_hide]: !n }),
                    title: (0, a.jsx)(c.Caption, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, a.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    ...(0, s.Am)(s.OA.vibe.VIBE_AGENT_CARD),
                });
            });
        },
        29717: (e, t, i) => {
            'use strict';
            i.d(t, { VibeButton: () => x, VibeButtonShimmer: () => h });
            var a = i(54486),
                r = i(50420),
                n = i(28303),
                l = i(61910),
                s = i(43426),
                o = i(31500),
                d = i(62443),
                c = i(73633),
                u = i(77881),
                _ = i(5956),
                m = i(58360),
                g = i(22674),
                p = i(97800),
                y = i(83252),
                v = i(80585),
                C = i(97811),
                b = i.n(C);
            let h = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, a.jsx)(g.Shimmer, { isActive: t, className: (0, r.$)(b().root, i) });
                },
                x = (0, n.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: n } = (0, s.A)(),
                        { pageId: g } = (0, y.$au)(),
                        { blockIdForFrom: C } = (0, y.N8n)(),
                        { ref: h, intersectionPropertyId: x } = (0, y.nMI)(),
                        { toggleTrue: k, toggleFalse: P, state: A } = (0, d.e)(!1),
                        { isFreemium: f } = (0, y.XCI)(),
                        j = i.title.length > 26,
                        { isPlaying: w, togglePlay: N } = (0, y.B0S)({ seeds: i.seeds, pageIdForFrom: g, blockIdForFrom: C }),
                        I = (0, y.brA)(),
                        B = (0, l.useCallback)(
                            (e) => {
                                f ||
                                    ((0, c.P)(e, b().ripple),
                                    k(),
                                    N().finally(() => {
                                        P(), I(!w);
                                    }));
                            },
                            [P, k, N, w, I, f],
                        ),
                        V = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = i.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = i.colors) ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        L = w ? 'pause' : 'play',
                        T = w ? o.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : o.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        K = (0, l.useCallback)(
                            () =>
                                (0, a.jsxs)(u.$, {
                                    style: V,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: B,
                                    className: (0, r.$)(b().root, b().button, { [b().button_loading]: A }, t),
                                    'data-intersection-property-id': x,
                                    ref: h,
                                    ...(0, o.Am)(o.e8.landing.VIBE_DISCOVERY_ITEM),
                                    children: [
                                        (0, a.jsx)(m.Image, {
                                            className: b().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, a.jsxs)('span', {
                                            className: b().textContainer,
                                            children: [
                                                (0, a.jsx)(p.Caption, {
                                                    className: b().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: i.getDescription(n({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, a.jsxs)(p.Caption, {
                                                    className: (0, r.$)(b().title, { [b().title_long]: j }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, a.jsx)(_.Icon, { className: b().icon, size: 'xxs', variant: L, ...(0, o.Am)(T) }), i.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, n, B, T, L, x, j, A, h, V, i],
                        );
                    return (0, a.jsx)(v.SU, { isEnabled: f, placement: 'top', textVariant: 'vibe', vibeTextVariant: i.stationType, renderChildren: K });
                });
        },
        35248: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var a = i(83252);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.pX4)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        38263: (e) => {
            e.exports = {
                root: 'VibeCard_root__9TDjP',
                playingAnimation: 'VibeCard_playingAnimation__iRgvh',
                cover: 'VibeCard_cover__LbX93',
                image: 'VibeCard_image__luolD',
                controls: 'VibeCard_controls__CcEVx',
                controls_isPlaying: 'VibeCard_controls_isPlaying__1_Ass',
                important: 'VibeCard_important__WPWqc',
                control: 'VibeCard_control__SM3H4',
                playControl: 'VibeCard_playControl__pZxq5',
                playButton: 'VibeCard_playButton__LWepP',
            };
        },
        42783: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
        45318: (e, t, i) => {
            'use strict';
            i.d(t, { PlaylistCard: () => w });
            var a = i(54486),
                r = i(50420),
                n = i(28303),
                l = i(61910),
                s = i(43426),
                o = i(43350),
                d = i(31500),
                c = i(63585),
                u = i(8817),
                _ = i(27510),
                m = i(71712),
                g = i(5956),
                p = i(6971),
                y = i(97800),
                v = i(63695),
                C = i(52733),
                b = i(83252),
                h = i(80585),
                x = i(23265),
                k = i(61958),
                P = i(83504);
            let A = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: n, ...l } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: _ } = (0, b.qBP)(),
                    {
                        experiments: m,
                        settings: { isMobile: g },
                        trailer: p,
                        user: y,
                    } = (0, b.Pjs)(),
                    v = (0, C.KX)(i),
                    x = (0, C.A7)(i),
                    A = (0, b.Ftl)(),
                    { formatMessage: f } = (0, s.A)(),
                    j = (0, b.PT7)(),
                    w = m.checkExperiment(b.zal.WebEditorsFeatures, 'on'),
                    N = (0, P.A_)({ entityVariant: b.DwC.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, b.NBO)(n);
                let I = (0, u.c)(() => {
                    if (c) return void _();
                    j() || (p.openPlaylistTrailer(i.id), A(o.ky.Playlist, i.id));
                });
                return (0, a.jsxs)(k.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: n,
                    offsetOptions: 10,
                    isMobile: g,
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU),
                    ...l,
                    children: [
                        w && (0, a.jsx)(P.dx, { entityVariant: b.DwC.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : N }),
                        !g && (0, a.jsx)(h.L1, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(h.TW, { onClick: v, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, a.jsx)(h.No, { onClick: I, disabled: !i.isAvailable }),
                    ],
                });
            });
            var f = i(57333),
                j = i.n(f);
            let w = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: k, customDescription: P } = e,
                    { ref: f, intersectionPropertyId: w } = (0, b.nMI)(),
                    { trailer: N, user: I } = (0, b.Pjs)(),
                    { from: B, utmLink: V } = (0, b.fyy)({ contextId: i.uuid, contextType: c.K.Playlist }),
                    { formatMessage: L } = (0, s.A)(),
                    { sendLikeSearchFeedback: T, sendNavigateSearchFeedback: K, sendPlaySearchFeedback: S } = (0, b.zEv)(),
                    [E, z] = (0, l.useState)(!1),
                    [R, U] = (0, l.useState)(!1),
                    [M, $] = (0, l.useState)(!1),
                    O = (0, x.r)(i),
                    F = (0, C.KX)(i),
                    D = (0, C.A7)(i),
                    Y = (0, b.NKK)(),
                    H = (0, b.brA)(),
                    Z = (0, b.ZpR)(i.url),
                    W = (0, b.Ftl)(),
                    X = (0, b.PT7)(),
                    q = (0, u.c)((e) => {
                        if ((e.stopPropagation(), X())) return void e.preventDefault();
                        N.setUtmLink(V), N.openPlaylistTrailer(i.id), W(o.ky.Playlist, i.id);
                    }),
                    [Q, G] = (0, l.useState)(!1),
                    { isPlaying: J, togglePlay: ee } = (0, b.Dx4)({
                        playContextParams: { contextData: { type: c.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: B, utmLink: V }, loadContextMeta: !0 },
                    }),
                    et = (0, u.c)(() => {
                        Y({ to: o.QT.PlaylistScreen }), null == K || K();
                    }),
                    ei = (0, u.c)((e) => {
                        et(), Z(e);
                    }),
                    ea = (0, u.c)(() => {
                        X() || (E || J || (z(!0), null == S || S()), ee(), H(!J));
                    }),
                    er = (0, u.c)(() => {
                        R || i.isLiked || (U(!0), null == T || T()), F();
                    }),
                    en = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    el = (0, u.c)((e) => {
                        $(e), G(e);
                    }),
                    es = (0, l.useMemo)(() => {
                        var e;
                        return P
                            ? (0, a.jsx)(y.Caption, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: P }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    v.iQ,
                                    { className: j().artists, artists: i.artists, lineClamp: 1, linkClassName: j().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [P, i]),
                    eo = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                h.cy,
                                {
                                    className: (0, r.$)(j().likeButton, j().control),
                                    isLiked: i.isLiked,
                                    onClick: er,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !I.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    ed = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                h.nE,
                                {
                                    children: (0, a.jsx)(
                                        h.kJ,
                                        { className: (0, r.$)(j().trailerButton, j().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: q },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [q, i]),
                    ec = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                h.O0,
                                { onClick: D, isPinned: i.isPinned, className: (0, r.$)(j().pinButton, j().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [D, i],
                    ),
                    eu = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(p.Paper, {
                                className: j().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CARD),
                                children: (0, a.jsxs)('div', {
                                    className: j().coverBlock,
                                    onClick: ei,
                                    children: [
                                        (0, a.jsx)(h.BW, {
                                            className: j().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: O,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(m.hg, {
                                            isVisible: M || Q,
                                            className: j().controls,
                                            playControl: (0, a.jsx)(
                                                h.DM,
                                                {
                                                    className: (0, r.$)(j().playButton, j().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ea,
                                                    isPlaying: J,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eo,
                                            menuControl: (0, a.jsx)(
                                                A,
                                                {
                                                    playlist: i,
                                                    onOpenChange: el,
                                                    open: M,
                                                    onClick: en,
                                                    className: (0, r.$)(j().menuButton, j().control),
                                                    icon: (0, a.jsx)(g.Icon, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON),
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ec,
                                            trailerControl: ed,
                                        }),
                                    ],
                                }),
                            }),
                        [ei, i, O, M, Q, ea, J, eo, el, en, ec, ed],
                    ),
                    e_ = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(m.MN, {
                    ref: f,
                    'aria-label': O,
                    className: (0, r.$)(j().root, t),
                    title: (0, a.jsx)(y.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, d.Am)(d.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, a.jsx)(h.N_, { className: j().titleLink, href: i.url, onClick: et, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(h.N_, { href: i.url, onClick: et, children: i.title }),
                    'data-intersection-property-id': w,
                    contentLinesCount: k,
                    view: eu,
                    description: es,
                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        e_ &&
                            (0, a.jsx)(h.xW, {
                                ariaLabel: L({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: F,
                            }),
                        n,
                    ],
                });
            });
        },
        46121: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        47719: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { y: () => a }), ((a || (a = {})).MIX = 'MIX');
        },
        55639: (e, t, i) => {
            'use strict';
            i.d(t, { VibeCardView: () => k });
            var a = i(54486),
                r = i(38974),
                n = i(57249),
                l = i(50420),
                s = i(28303),
                o = i(83645),
                d = i(61910),
                c = i(14148),
                u = i(8817),
                _ = i(27510),
                m = i(62443),
                g = i(58360),
                p = i(22674),
                y = i(83252);
            let v = (e) => Math.max(0, Math.min(100, e)) / 100;
            var C = i(7317),
                b = i.n(C),
                h = i(49124);
            let x = o.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 38974))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = h.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
            let k = (0, s.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [r, n] = (0, d.useState)(null),
                    { state: s, toggleTrue: o } = (0, m.e)(!1),
                    { state: C, toggleTrue: h, toggleFalse: k } = (0, m.e)(!1),
                    { theme: P } = (0, y.DPo)(),
                    A = (0, d.useRef)(null),
                    f = t.entityType === c.h.ARTIST,
                    j = t.cover.color,
                    w = t.cover.uri,
                    N = (0, u.c)(async () => {
                        if (s && j && P) {
                            k();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: a,
                                    mask: n,
                                } = ((e) => {
                                    let { averageColor: t, theme: i, custom: a } = e,
                                        { h: r, s: n, l: l } = (0, y.g8k)(t),
                                        s = l,
                                        o = [0, 0, 0];
                                    a
                                        ? (i === y.Sxu.Dark || (s += 79), (o = (0, y.YLU)(r, v(n), v(s))))
                                        : (o = (0, y.YLU)(r, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100));
                                    let d = i === y.Sxu.Dark ? [0.07, 0.07, 0.07] : [0.96, 0.96, 0.96];
                                    return {
                                        color: o,
                                        glow1: i === y.Sxu.Dark ? (0, y.YLU)(r, v(n), v(s + 36)) : (0, y.YLU)(r, v(n), v(s - 29)),
                                        glow2: i === y.Sxu.Dark ? (0, y.YLU)(r, v(n), v(s + 79)) : (0, y.YLU)(r, v(n), v(s - 53)),
                                        mask: d,
                                    };
                                })({ averageColor: j, theme: P, custom: !t.entityType }),
                                l = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: a },
                                        { id: 'mask', type: 'Color', value: n },
                                    ],
                                });
                            await (null == r ? void 0 : r.setThemeData(l)), h();
                        }
                    }),
                    I = (0, u.c)(() => {
                        o(), N();
                    });
                (0, d.useEffect)(() => {
                    i ? null == r || r.play() : null == r || r.pause();
                }, [r, i]),
                    (0, d.useEffect)(() => {
                        N();
                    }, [j, N, P, s]),
                    (0, d.useEffect)(() => {
                        if (r)
                            return (
                                r.setUseFrameInterpolation(!1),
                                r.setRenderConfig({ devicePixelRatio: 0.1 }),
                                r.addEventListener('load', I),
                                () => {
                                    r.removeEventListener('load', I);
                                }
                            );
                    }, [r, I]);
                let B = !s || !C,
                    V = (0, _.L)(() => {
                        if (!A.current) return;
                        let e = f ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(A.current.clientWidth * e, 'px') };
                    });
                return (0, a.jsxs)('div', {
                    ref: A,
                    className: (0, l.$)(b().root, { [b().root_loading]: B }),
                    style: V,
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, l.$)(b().cover, { [b().cover_round]: f, [b().cover_loading]: B }),
                            children: [
                                t.entityType &&
                                    w &&
                                    (0, a.jsx)(g.Image, { src: w, size: 200, fit: 'cover', withAvatarReplace: !0, className: b().image, withLoadingIndicator: !1 }),
                                (0, a.jsx)(x, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: b().animation }),
                            ],
                        }),
                        (0, a.jsx)(p.Shimmer, { className: (0, l.$)(b().shimmer, { [b().shimmer_loading]: B }), isActive: !0, radius: f ? 'round' : 's' }),
                    ],
                });
            });
        },
        57333: (e) => {
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
        61352: (e) => {
            e.exports = {
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
        66894: (e, t, i) => {
            'use strict';
            i.d(t, { HorizontalPlaylistCard: () => f });
            var a = i(54486),
                r = i(50420),
                n = i(28303),
                l = i(61910),
                s = i(43426),
                o = i(47713),
                d = i(43350),
                c = i(31500),
                u = i(63585),
                _ = i(8817),
                m = i(73633),
                g = i(5956),
                p = i(97800),
                y = i(83252),
                v = i(80585),
                C = i(23265),
                b = i(52733),
                h = i(61352),
                x = i.n(h);
            let k = (0, n.PA)((e) => {
                var t;
                let { className: i, playlist: n, likeIconSize: s = 'xxs' } = e,
                    { user: o, trailer: c } = (0, y.Pjs)(),
                    u = (0, y.PT7)(),
                    { sendLikeSearchFeedback: m } = (0, y.zEv)(),
                    p = (0, b.KX)(n),
                    [C, h] = (0, l.useState)(!1),
                    k = (0, _.c)(async () => {
                        C || n.isLiked || (h(!0), null == m || m()), await p();
                    }),
                    P = (0, y.Ftl)(),
                    A = (0, _.c)((e) => {
                        if ((e.stopPropagation(), u())) return void e.preventDefault();
                        c.openPlaylistTrailer(n.id), P(d.ky.Playlist, n.id);
                    });
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(x().root, x().controls, i, { [x().controls_disabled]: !n.isAvailable }),
                    children: [
                        n.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(v.aQ, {
                                        fallback: (0, a.jsx)(v.cy, {
                                            size: 'xs',
                                            iconSize: s,
                                            className: (0, r.$)(x().item, x().likeIcon),
                                            isLiked: n.isLiked,
                                            onClick: k,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                        (0, a.jsx)(v.aQ, {
                                            fallback: (0, a.jsx)(v.kJ, {
                                                className: (0, r.$)(x().item, x().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: A,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, r.$)(x().item, x().item_buttonArrow),
                            children: (0, a.jsx)(g.Icon, { className: v.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var P = i(25325),
                A = i.n(P);
            let f = (0, n.PA)((e) => {
                let { className: t, playlist: i, pageId: n, coverClassName: b, playButtonIconSize: h, likeIconSize: x } = e,
                    { ref: P, intersectionPropertyId: f } = (0, y.nMI)(),
                    { from: j } = (0, y.fyy)({ pageId: n }),
                    [w, N] = (0, l.useState)(!1),
                    I = (0, y.brA)(),
                    B = (0, C.r)(i),
                    V = i.title || '',
                    { formatMessage: L, formatNumber: T } = (0, s.A)(),
                    K = (0, y.PT7)(),
                    { sendNavigateSearchFeedback: S, sendPlaySearchFeedback: E } = (0, y.zEv)(),
                    z = (0, y.NKK)(),
                    {
                        isPlaying: R,
                        isCurrent: U,
                        togglePlay: M,
                    } = (0, y.Dx4)({ playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: j }, loadContextMeta: !0 } }),
                    $ = (0, y.ZpR)(i.url),
                    O = (0, _.c)((e) => {
                        null == S || S(), z({ to: d.QT.PlaylistScreen }), e.preventDefault(), $(e);
                    }),
                    F = (0, _.c)(() => {
                        K() || (w || R || (N(!0), null == E || E()), M(), I(!R));
                    }),
                    D = (0, _.c)((e) => {
                        (0, m.P)(e, v.$f.ripple), O(e);
                    }),
                    Y = (0, _.c)((e) => {
                        e.stopPropagation(), O(e);
                    }),
                    H = (0, l.useCallback)(
                        (e) =>
                            (0, a.jsx)(v.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: V,
                                className: (0, r.$)(v.$f.playButtonCell, b),
                                alt: L({ id: 'entity-names.playlist-name' }, { playlistName: V }),
                                radius: 'xs',
                                ...e,
                            }),
                        [i, V, b, L],
                    ),
                    Z = null == H ? void 0 : H({ onPlayButtonClick: F, isPlaying: R, isCurrent: U, playButtonIconSize: h }),
                    W = (0, l.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, a.jsx)(v.N_, { className: (0, r.$)(v.$f.text, v.$f.titleLink), href: i.url, onClick: Y, children: V })
                                : (0, a.jsx)(p.Caption, { className: (0, r.$)(v.$f.text, v.$f.titleText), size: 'm', variant: 'div', type: 'text', children: V }),
                        [Y, i.isAvailable, i.url, V],
                    ),
                    X = (0, l.useMemo)(() => {
                        if (void 0 === i.actualLikesCount || void 0 === i.tracksCount) return;
                        let e = (0, a.jsx)(p.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            t = i.isLiked ? 'likedVariant' : 'likeVariant',
                            r = ''.concat(B, ' ').concat(L({ id: 'entity-names.tracks-count' }, { value: i.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: A().description,
                            'aria-label': r,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: A().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(g.Icon, { className: A().icon, variant: t, size: 'xxs' }),
                                        (0, a.jsx)(p.Caption, { variant: 'span', size: 'm', weight: 'medium', children: T(i.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: A().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        e,
                                        (0, a.jsx)(p.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'entity-names.tracks-count', values: { value: T(i.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [L, T, B, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, a.jsxs)(v.Cj, {
                    ref: P,
                    'data-intersection-property-id': f,
                    className: (0, r.$)(v.$f.root, { [v.$f.root_disabled]: !i.isAvailable }, t),
                    'aria-label': i.title || L({ id: 'entity-names.playlist' }),
                    onClick: D,
                    ...(0, c.Am)(c.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [Z, (0, a.jsx)(v.ro, { isDisabled: !i.isAvailable, title: W, description: X }), (0, a.jsx)(k, { playlist: i, likeIconSize: x })],
                });
            });
        },
        67075: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => c });
            var a = i(54486),
                r = i(50420),
                n = i(14148),
                l = i(27510),
                s = i(80585),
                o = i(46121),
                d = i.n(o);
            let c = (e) => {
                let { agent: t, isPlaying: i, isCurrent: o, onPlayButtonClick: c, shouldShowControl: u = !0, playButtonIconSize: _, alt: m, className: g } = e,
                    p = (0, l.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(s.q1, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(d().root, d()['root_radius_'.concat(p)], { [d().root_withShadow]: !!t.entityType }, g),
                    radius: p,
                    onPlayButtonClick: c,
                    isPlaying: i,
                    isCurrent: o,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                });
            };
        },
        67317: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        69673: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            var a = (function (e) {
                return (e.SMALL = 'small'), (e.LARGE = 'large'), e;
            })({});
        },
        72467: (e, t, i) => {
            'use strict';
            i.d(t, { EmptyPlaylistBlock: () => _ });
            var a = i(54486),
                r = i(50420),
                n = i(61910),
                l = i(47713),
                s = i(31500),
                o = i(5956),
                d = i(97800),
                c = i(67317),
                u = i.n(c);
            let _ = (e) => {
                let { className: t, isEmptySearch: i } = e,
                    c = (0, n.useMemo)(
                        () => (i ? (0, a.jsx)(l.A, { id: 'search-results.not-found-title' }) : (0, a.jsx)(l.A, { id: 'error-messages.empty-collection-playlist-title' })),
                        [i],
                    ),
                    _ = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, a.jsx)(l.A, { id: 'search-results.not-found-description' })
                                : (0, a.jsx)(l.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [i],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, t),
                    ...(0, s.Am)(s.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, a.jsx)('div', {
                            className: u().iconBackground,
                            children: (0, a.jsx)(o.Icon, { variant: 'search', size: 'l', className: u().icon, ...(0, s.Am)(s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON) }),
                        }),
                        (0, a.jsx)(d.Heading, { variant: 'h3', size: 'xs', className: u().title, ...(0, s.Am)(s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE), children: c }),
                        (0, a.jsx)(d.Caption, {
                            variant: 'span',
                            size: 'l',
                            className: u().subtitle,
                            ...(0, s.Am)(s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
                            children: _,
                        }),
                    ],
                });
            };
        },
        76866: (e, t, i) => {
            'use strict';
            i.d(t, {
                H2: () => p.SearchVibeCard,
                yi: () => y.VibeAgentCard,
                hl: () => l.h,
                xy: () => v.VibeButton,
                Eb: () => v.VibeButtonShimmer,
                Zn: () => C.VibeCard,
                Gh: () => g,
                nr: () => b.n,
                er: () => n,
                A7: () => s.useOnPinClick,
                KU: () => r.K,
                lb: () => o,
            });
            var a = i(93064),
                r = i(35248);
            let n = (e) => {
                var t, i, n, l;
                return (0, a.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (n = null == (t = e.colors) ? void 0 : t.average) ? n : '',
                        waveText: null != (l = null == (i = e.colors) ? void 0 : i.waveText) ? l : '',
                    },
                    agent: (0, r.K)(e.agent),
                });
            };
            var l = i(69673),
                s = i(20875);
            let o = (e, t) => {
                var i;
                return (0, a.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (i = e.type) ? i : void 0, agent: (0, r.K)(t) });
            };
            var d = i(26433);
            let c = a.gK.model('VibeAgent', { animationUri: a.gK.string, cover: d.$B, entityType: a.gK.maybe(a.gK.string) });
            var u = i(52509),
                _ = i(47719),
                m = i(83252);
            let g = a.gK
                .model('Vibe', {
                    title: a.gK.optional(a.gK.string, ''),
                    description: a.gK.maybe(a.gK.string),
                    seeds: a.gK.array(a.gK.string),
                    imageUrl: a.gK.maybe(a.gK.string),
                    animationUrl: a.gK.maybe(a.gK.string),
                    backgroundImageUrl: a.gK.maybe(a.gK.string),
                    backgroundColor: a.gK.maybe(a.gK.string),
                    type: a.gK.maybe(a.gK.string),
                    colors: a.gK.maybe(a.gK.model({ average: a.gK.maybe(a.gK.string), waveText: a.gK.maybe(a.gK.string) })),
                    agent: a.gK.maybe(c),
                })
                .views((e) => {
                    let t = {
                        get stationId() {
                            var i;
                            return null != (i = e.seeds[0]) ? i : '';
                        },
                        get seedsId() {
                            return e.seeds.join(',');
                        },
                        get context() {
                            if (e.seeds) {
                                if (t.stationId !== m.M19) return e.title;
                                else if (e.seeds.length > 1) return e.title;
                            }
                            return null;
                        },
                        get pinId() {
                            return (0, u.f)(e.seeds);
                        },
                        get isPinned() {
                            if (!(0, a._n)(e)) return !1;
                            let { pinsCollection: t } = (0, a.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get stationType() {
                            var r, n;
                            return null != (n = null == (r = t.stationId) ? void 0 : r.split(':')[0]) ? n : '';
                        },
                        get isMix() {
                            return e.type === _.y.MIX;
                        },
                        get shouldShowAgent() {
                            if (!(0, a._n)(e)) return !1;
                            let { experiments: t } = (0, a.Zn)(e);
                            return t.checkExperiment(m.zal.WebNextWaveAgentExperiment, 'on');
                        },
                        get cover() {
                            return (0, a.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                    togglePin: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, a.Zn)(e);
                        if (i.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                    }),
                    getDescription() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                        if (!(0, a._n)(e)) return t;
                        let { experiments: i } = (0, a.Zn)(e);
                        return i.checkExperiment(m.zal.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                    },
                }));
            var p = i(5065),
                y = i(29443),
                v = i(29717),
                C = i(85693);
            i(55639);
            var b = i(67075);
        },
        83909: (e, t, i) => {
            'use strict';
            i.d(t, {
                pA: () => x.EmptyPlaylistBlock,
                vf: () => k.HorizontalPlaylistCard,
                B6: () => P.PlaylistCard,
                BL: () => b,
                IP: () => h,
                EC: () => A.PlaylistsCarousel,
                bk: () => n,
                ZC: () => d,
                Ew: () => u,
                pd: () => m,
            });
            var a = i(93064),
                r = i(83252);
            let n = (e) => {
                var t, i;
                let { playlist: n, generatedPlaylistType: l, likesCount: s, trailer: o, tracksCount: d } = e;
                return (0, a.wg)({
                    isAvailable: null == (i = n.available) || i,
                    uuid: n.playlistUuid,
                    title: n.title,
                    uid: n.uid,
                    kind: n.kind,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    generatedPlaylistType: l,
                    likesCount: s,
                    tracksCount: d,
                    trailer: (0, r.mxW)(o),
                });
            };
            var l = i(97396),
                s = i(61910);
            (0, s.cache)(async (e, t) => {
                var i;
                let a;
                try {
                    let { container: i, backendHostTld: n, locale: l, host: s, fullUrl: o, isRSC: d, requestUrl: c } = await (0, r.IhE)();
                    if (d) return { playlist: void 0, backendHostTld: n, locale: l, host: s, fullUrl: o, requestUrl: c };
                    let u = i.get(r._19);
                    a = {
                        playlist: await u.getPlaylistWithTracksIds({ userId: e, playlistKind: t, resumeStream: !1 }),
                        backendHostTld: n,
                        locale: l,
                        host: s,
                        fullUrl: o,
                        requestUrl: c,
                    };
                } catch (e) {
                    return (0, r.tfF)(e, () => ({ playlist: void 0, ...(0, r.Bj3)() }));
                }
                return (null == (i = a.playlist) ? void 0 : i.error) === 'not-found' && (0, l.notFound)(), a;
            }),
                (0, s.cache)(async (e) => {
                    var t;
                    let i;
                    (0, r.sU0)(e) || (0, l.notFound)();
                    try {
                        let { container: t, backendHostTld: a, locale: n, host: l, fullUrl: s, isRSC: o, requestUrl: d } = await (0, r.IhE)();
                        if (o) return { playlist: void 0, backendHostTld: a, locale: n, host: l, fullUrl: s, requestUrl: d };
                        let c = t.get(r.qNr);
                        i = {
                            playlist: await c.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 }),
                            backendHostTld: a,
                            locale: n,
                            host: l,
                            fullUrl: s,
                            requestUrl: d,
                        };
                    } catch (e) {
                        return (0, r.tfF)(e, () => ({ playlist: void 0, ...(0, r.Bj3)() }));
                    }
                    return (null == (t = i.playlist) ? void 0 : t.error) === 'not-found' && (0, l.notFound)(), i;
                });
            var o = i(52733);
            let d = (e) =>
                (0, a.wg)({
                    ...(0, o.jX)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeFor: e.madeFor ? ((e) => (0, a.wg)({ caseForms: e.caseForms ? (0, r.NH4)(e.caseForms) : null }))(e.madeFor) : null,
                });
            var c = i(63695);
            let u = (e) => {
                var t, i;
                return (0, a.wg)({ ...(0, o.jX)(e), artists: null != (i = null == e || null == (t = e.artists) ? void 0 : t.map(c.dM)) ? i : [] });
            };
            var _ = i(54460);
            let m = (e) => {
                var t, i;
                return (0, a.wg)({ ...(0, o.jX)(e), tracks: null != (i = null == e || null == (t = e.tracks) ? void 0 : t.map(_.Rw)) ? i : [] });
            };
            var g = i(26433);
            let p = a.gK.model('PlaylistOwner', { caseForms: a.gK.maybeNull(g.lg) });
            var y = i(66534);
            let v = a.gK.model('PlaylistOwner', {
                    uid: a.gK.number,
                    login: a.gK.string,
                    name: a.gK.string,
                    sex: a.gK.enumeration(Object.values(y.U)),
                    verified: a.gK.boolean,
                }),
                C = a.gK.model('PlaylistTag', { id: a.gK.string, value: a.gK.string }),
                b = o.$o
                    .props({
                        owner: a.gK.maybe(v),
                        modified: a.gK.string,
                        description: a.gK.maybe(a.gK.string),
                        tags: a.gK.maybeNull(a.gK.array(C)),
                        madeFor: a.gK.maybeNull(p),
                    })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return ['playlist:'.concat(null == (t = e.owner) ? void 0 : t.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, a.Zn)(e);
                            if (!t.checkExperiment(r.zal.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, a.L3)(function* (t) {
                            if (!(0, a._n)(e)) return r.FlZ.ERROR;
                            if (e.description === t) return r.FlZ.OK;
                            if (t.length > o.iz) return r.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: n } = (0, a._$)(e);
                            if (e.canUserChange) {
                                let a = e.description;
                                e.description = t;
                                try {
                                    let a = yield i.changePlaylistDescription({ description: t, userId: e.uid, playlistKind: e.kind });
                                    return (e.description = a.description), r.FlZ.OK;
                                } catch (t) {
                                    (e.description = a), n.error(t);
                                }
                            }
                            return r.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, a.L3)(function* (t) {
                            if (!(0, a._n)(e)) return r.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: n } = (0, a._$)(e);
                            try {
                                let a = yield i.uploadPlaylistCover({ userId: e.uid, formData: t, playlistKind: e.kind });
                                return (e.coverUri = a.cover.uri), r.FlZ.OK;
                            } catch (e) {
                                n.error(e);
                            }
                            return r.FlZ.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                h = o.Zq.props({ artists: a.gK.maybe(a.gK.array(c.PK)) });
            var x = i(72467),
                k = i(66894),
                P = i(45318),
                A = i(3283);
        },
        85693: (e, t, i) => {
            'use strict';
            i.d(t, { VibeCard: () => p });
            var a = i(54486),
                r = i(50420),
                n = i(28303),
                l = i(61910),
                s = i(8817),
                o = i(71712),
                d = i(6971),
                c = i(97800),
                u = i(83252),
                _ = i(80585),
                m = i(38263),
                g = i.n(m);
            let p = (0, n.PA)((e) => {
                let { vibe: t, children: i, className: n } = e,
                    { pageId: m } = (0, u.$au)(),
                    [p, y] = (0, l.useState)(!1),
                    { blockIdForFrom: v } = (0, u.N8n)(),
                    {
                        settings: { isMobile: C },
                        user: b,
                    } = (0, u.Pjs)(),
                    { sendPlaySearchFeedback: h } = (0, u.zEv)(),
                    x = (0, u.brA)(),
                    { isFreemium: k } = (0, u.XCI)(),
                    { isPlaying: P, isPaused: A, togglePlay: f } = (0, u.B0S)({ seeds: t.seeds, pageIdForFrom: m, blockIdForFrom: v }),
                    j = (0, u.PT7)(),
                    w = P || A,
                    N = (0, l.useCallback)(() => {
                        C && (p || P || (y(!0), null == h || h()), f());
                    }, [C, P, p, h, f]),
                    I = (0, s.c)(() => {
                        !j() && (k || (p || P || (y(!0), null == h || h()), f(), x(!P)));
                    }),
                    B = (0, l.useCallback)(
                        () =>
                            (0, a.jsx)(
                                _.DM,
                                {
                                    isPlaying: P,
                                    onClick: I,
                                    className: (0, r.$)(g().playButton, g().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [P, I, t],
                    ),
                    V = (0, l.useMemo)(() => {
                        let e = !b.hasPlus && !1;
                        return b.isAuthorized
                            ? (0, a.jsx)(
                                  _.SU,
                                  { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: B },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, a.jsx)(_.Zr, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: B });
                    }, [b.hasPlus, b.isAuthorized, t, B]),
                    L = (0, l.useMemo)(
                        () =>
                            (0, a.jsxs)(d.Paper, {
                                className: g().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: N,
                                children: [
                                    (0, a.jsx)(_.BW, {
                                        size: 200,
                                        fit: 'cover',
                                        className: g().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    w && (0, a.jsx)(_.PD, { stopAnimation: A, className: g().playingAnimation }),
                                    (0, a.jsx)(o.hg, {
                                        className: (0, r.$)(g().controls, { [g().controls_isPlaying]: w }, g().important),
                                        bottomContainerClassName: g().playControl,
                                        radius: 'round',
                                        playControl: V,
                                    }),
                                ],
                            }),
                        [N, t.backgroundColor, t.imageUrl, t.title, w, A, V],
                    );
                return (0, a.jsx)(o.MN, {
                    className: (0, r.$)(g().root, n),
                    textPosition: 'center',
                    title: (0, a.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title },
                        t.getKey('Description'),
                    ),
                    description: (0, a.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: L,
                    children: i,
                });
            });
        },
        96957: (e) => {
            e.exports = { root: 'NotificationPin_root__DBEub', view: 'NotificationPin_view__daGc_', image: 'NotificationPin_image__o5F7B' };
        },
        97569: (e) => {
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
        97811: (e) => {
            e.exports = {
                root: 'VibeButton_root___i3R5',
                ripple: 'VibeButton_ripple__cmoBR',
                textContainer: 'VibeButton_textContainer__j9nOW',
                title: 'VibeButton_title__sLC0I',
                title_long: 'VibeButton_title_long__gSVM5',
                subtitle: 'VibeButton_subtitle__MQ_Ca',
                image: 'VibeButton_image__GOwKJ',
                button: 'VibeButton_button__tXFAm',
                button_loading: 'VibeButton_button_loading__LYnUR',
                titleContainer: 'VibeButton_titleContainer__yrRRu',
                'applying-setting': 'VibeButton_applying-setting__Jd_3C',
                icon: 'VibeButton_icon__KIv7n',
            };
        },
    },
]);
