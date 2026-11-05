(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [812],
    {
        202: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var a = i(39499),
                r = i(29993);
            let s = (e) => {
                let { format: t, onSuccess: i, onError: s } = e;
                return {
                    startClipboardWrite: (0, r.c)(() => {
                        let e = () => void 0,
                            r = () => void 0,
                            n = !1,
                            o = new Promise((t, i) => {
                                ((e = t), (r = i));
                            }),
                            l = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == i || i());
                                } catch (e) {
                                    n || null == s || s(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await o], { type: 'text/plain' }))() }));
                        return {
                            copy: (i) => (e(t(i)), l),
                            cancel: () => {
                                ((n = !0), r(new a.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        1401: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => c });
            var a = i(88800),
                r = i(52300),
                s = i(15077),
                n = i(42729),
                o = i(14307),
                l = i.n(o);
            let c = (e) => {
                let { vibe: t, closeToast: i } = e;
                return (0, a.jsx)(n.O, {
                    className: l().root,
                    closeToast: i,
                    entityVariant: s.c.VIBE,
                    customCover: (0, a.jsx)(r.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        2147: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => c });
            var a = i(88800),
                r = i(79390),
                s = i(29993),
                n = i(25555),
                o = i(72288),
                l = i(1401);
            let c = function (e) {
                let { showNotificationOnMobile: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { user: i, paywall: c } = (0, o.g)(),
                    u = (0, n.I)({
                        action: async () => (await (null == e ? void 0 : e.toggleLike())) === r.f.OK,
                        notification: (0, a.jsx)(l.T, { vibe: { isLiked: !(null == e ? void 0 : e.isLiked) } }),
                        showNotificationOnMobile: t,
                    });
                return (0, s.c)(async () => {
                    if (e) {
                        if (i.isAuthorized && !i.hasPlus && !e.isLiked) return void c.openModal();
                        await u();
                    }
                });
            };
        },
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var a = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        14307: (e) => {
            e.exports = { root: 'NotificationLike_root__DM13k' };
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => k });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(58390),
                c = i(17392),
                u = i(79070),
                d = i(17610),
                _ = i(29504),
                g = i(13946),
                m = i(55693),
                v = i(72288),
                h = i(24548),
                x = i(85587),
                p = i(90224),
                f = i(91292),
                b = i(7608),
                T = i(6667),
                I = i(85463),
                N = i(65462),
                C = i.n(N);
            let k = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: N,
                        withExplicitMark: k,
                        withSecondaryColor: E,
                        captionSize: w = 'm',
                        explicitSize: y = 'xxxs',
                        withAllArtistsTitle: A,
                        textClassName: L,
                        artistsClassName: R,
                        ignoreDislikedStyles: S,
                        withCustomTooltip: j = !0,
                        hasLineClamp: M = !0,
                        withSavingQueryParams: O,
                        beforeTitle: P,
                        withArtistLink: z,
                        variant: U,
                        withTrackLink: V,
                        afterTitle: $,
                        withContextMenuArtists: D,
                    } = e,
                    { formatMessage: B } = (0, o.A)(),
                    { sendNavigateSearchFeedback: K } = (0, m.z)(),
                    {
                        settings: { isMobile: F },
                        slam: H,
                    } = (0, v.g)(),
                    W = (0, T.$)({ withCustomTooltip: j }),
                    q = (0, l.useSearchParams)(),
                    Y = (0, b.B)(s, {
                        isMobile: F,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: N,
                        withTrackLink: V,
                        withArtistLink: z,
                        variant: U,
                        withExplicitMark: k,
                        query: O ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: Z,
                        tooltipText: Q,
                        titleAttribute: G,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var r, s;
                        let { canEnableCustomTooltip: n, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (r = t.version) ? r : ''),
                            u = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(u, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !o,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(s, Y, { canEnableCustomTooltip: W, isMobile: F }, B),
                    et = (0, I.O)({ track: s, onNavigate: K, withSavingQueryParams: O, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(_.HL, {
                                    className: (0, r.$)(C().text, C().title),
                                    type: 'entity',
                                    size: w,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [w, X, Q, ee],
                    ),
                    ea = (0, u.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, a.jsx)(d.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: h.V,
                                  children: (0, a.jsx)(_.HL, {
                                      className: (0, r.$)(C().text, C().title),
                                      type: 'entity',
                                      size: w,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: G,
                                      children: X,
                                  }),
                              })
                            : Y.link
                              ? (0, a.jsx)(f.N, {
                                    onClick: et,
                                    className: C().albumLink,
                                    href: Y.link.href,
                                    'aria-label': Z,
                                    title: G,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, n.useMemo)(() => +!!M, [M]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(C().root, { [C().root_disabled]: !s.isAvailable, [C().root_disliked]: s.isDisliked && !S, [C().root_withSecondaryColor]: E }, t),
                    children: (0, a.jsxs)('div', {
                        className: C().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(C().titleContainer, { [C().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, a.jsxs)(_.HL, {
                                        className: (0, r.$)(C().text, L),
                                        type: 'entity',
                                        size: w,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            ea,
                                            Y.version &&
                                                (0, a.jsxs)(_.HL, {
                                                    className: (0, r.$)(C().text, C().version),
                                                    type: 'entity',
                                                    size: w,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, a.jsx)(p.N, {
                                            containerClassName: C().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: y,
                                            variant: Y.explicitMark,
                                            className: C().explicitMark,
                                            trackId: s.id,
                                        }),
                                    $,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, a.jsx)(g.i, {
                                    className: (0, r.$)(C().text, { [C().artists]: M }, R, L),
                                    withAllArtistsTitle: A,
                                    linkClassName: (0, r.$)(C().text, C().link),
                                    captionClassName: (0, r.$)(C().text, C().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: er,
                                    captionSize: w,
                                    withContextMenu: D,
                                }),
                        ],
                    }),
                });
            });
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => E });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                n = i(2058),
                o = i(42078),
                l = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                _ = i(65724),
                g = i(84961),
                m = i(17392),
                v = i(79070),
                h = i(90688),
                x = i(97956),
                p = i(90420),
                f = i(15077),
                b = i(33719),
                T = i(55211),
                I = i(14329),
                N = i.n(I);
            let C = (0, g.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, u.g)(),
                    s = r.checkExperiment(x.z.WebNextWaveAgentExperiment, 'on'),
                    n = t.type === p.q7,
                    o = (0, v.L)(() => {
                        var e;
                        return s && t.agent
                            ? (0, a.jsx)(T.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(N().view, { [N().multivibeContainer]: n }),
                                  coverClassName: (0, _.$)({ [N().multivibeCover]: n }),
                                  entityCoverClassName: (0, _.$)({ [N().multivibeAvatar]: n }),
                                  controlClassName: (0, _.$)({ [N().multivibeControl]: n }),
                              })
                            : (0, a.jsx)(h._V, {
                                  className: N().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': m.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = s && t.agent ? void 0 : 'round';
                return (0, a.jsx)(b.k, {
                    closeToast: i,
                    entityVariant: f.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: l,
                    className: N().root,
                });
            });
            var k = i(93512);
            let E = (e) => {
                let { user: t, pinsCollection: i } = (0, u.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: g } = (0, n.A)(),
                    [m, v] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, a.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let s = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        n = (0, r.HO)(i.get(e.pinId));
                    v(!0);
                    let c = await e.togglePin();
                    (v(!1),
                        n &&
                            n.type === o._.WAVE_ITEM &&
                            n.data.backgroundImageUrl &&
                            ((s.backgroundImageUrl = n.data.backgroundImageUrl), (s.colors = n.data.colors), (s.agent = n.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (s.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (s.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (s.agent = (0, k.K)(c.data.agent))),
                        c
                            ? _((0, a.jsx)(C, { vibe: s }), { containerId: l.u.INFO })
                            : _((0, a.jsx)(d.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [g, _, m, i, t.isAuthorized, e]);
            };
        },
        21284: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(a || (a = {})));
        },
        21869: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => u });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                n = i(72288),
                o = i(93091),
                l = i(27817),
                c = i(16112);
            let u = (0, s.PA)((e) => {
                let { vibe: t, onLikeClick: i, className: s, iconClassName: u, likeActiveClassName: d } = e,
                    {
                        user: _,
                        settings: { isMobile: g },
                    } = (0, n.g)(),
                    m = (0, c.A)(t);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !g && (0, a.jsx)(l.L, { className: s, iconClassName: u, onClick: m, isPinned: t.isPinned }),
                        (0, a.jsx)(o.T, { className: (0, r.$)(s, t.isLiked && d), iconClassName: u, onClick: i, isLiked: t.isLiked, disabled: !_.isAuthorized }),
                    ],
                });
            });
        },
        25555: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => d });
            var a = i(88800),
                r = i(53548),
                s = i(2058),
                n = i(29993),
                o = i(66943),
                l = i(29595),
                c = i(74965),
                u = i(72288);
            let d = (e) => {
                let { action: t, notification: i, showNotificationOnMobile: d = !1 } = e,
                    {
                        user: _,
                        settings: { isMobile: g },
                    } = (0, u.g)(),
                    { formatMessage: m } = (0, s.A)(),
                    { notify: v } = (0, c.l)(),
                    h = (0, r.useRef)(!1);
                return (0, n.c)(async () => {
                    if (!_.isAuthorized) return void v((0, a.jsx)(o.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (!h.current) {
                        h.current = !0;
                        try {
                            (await t())
                                ? (!g || d) && v(i, { containerId: l.u.INFO })
                                : v((0, a.jsx)(o.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                        } finally {
                            h.current = !1;
                        }
                    }
                });
            };
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35402: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => o });
            var a = i(13758),
                r = i(57249),
                s = i(6087),
                n = i(49124);
            let o = s.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = n.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(r, e).href);
            }
        },
        42078: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(a || (a = {})));
        },
        51105: (e) => {
            e.exports = { message: 'ShareVibeSuccessNotification_message__edF4z', icon: 'ShareVibeSuccessNotification_icon__zjcuv' };
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => s });
            var a = i(5120),
                r = i(31510);
            let s = (e) => {
                let t = (0, r.e)(e);
                return (0, a.wg)(t);
            };
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => u });
            var a = i(88800),
                r = i(65724),
                s = i(21284),
                n = i(79070),
                o = i(39267),
                l = i(85925),
                c = i.n(l);
            let u = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: u,
                        shouldShowControl: d = !0,
                        playButtonIconSize: _,
                        alt: g,
                        className: m,
                        coverClassName: v,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: p,
                    } = e,
                    f = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(f)], { [c().root_withShadow]: !!t.entityType }, m),
                    radius: f,
                    onPlayButtonClick: u,
                    isPlaying: i,
                    isCurrent: l,
                    alt: g,
                    withLoadingIndicator: !1,
                    shouldShowControl: d,
                    playButtonIconSize: _,
                    fallbackIconSize: p,
                    coverClassName: v,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var a = i(4086),
                r = i(41928);
            let s = () => {
                let e = (0, r.N)(),
                    t = e.get(a.$I),
                    i = e.get(a.EN),
                    s = e.get(a.N1),
                    n = e.get(a._1),
                    o = e.get(a.V3),
                    l = e.get(a.Lb),
                    c = e.get(a.wK),
                    u = e.get(a.tz),
                    d = e.get(a.$8),
                    _ = e.get(a.Oo),
                    g = e.get(a.X4),
                    m = e.get(a.O9),
                    v = e.get(a.E),
                    h = e.get(a.wH),
                    x = e.get(a.ok),
                    p = e.get(a.X8),
                    f = e.get(a.yq),
                    b = e.get(a.NN),
                    T = e.get(a.qN),
                    I = e.get(a.ro),
                    N = e.get(a.nM),
                    C = e.get(a.Ut),
                    k = e.get(a.K1),
                    E = e.get(a.eu),
                    w = e.get(a.SD),
                    y = e.get(a.aE),
                    A = e.get(a.ki),
                    L = e.get(a.c9),
                    R = e.get(a.en),
                    S = e.get(a.jQ),
                    j = e.get(a.cZ),
                    M = e.get(a.Zl),
                    O = e.get(a.CN),
                    P = e.get(a.P1),
                    z = e.get(a.zj),
                    U = e.get(a.re),
                    V = e.get(a.JM),
                    $ = e.get(a.Lk),
                    D = e.get(a.$$),
                    B = e.get(a.sv),
                    K = e.get(a.gd),
                    F = e.get(a.Ez),
                    H = e.get(a.u2),
                    W = e.get(a.TD),
                    q = e.get(a.dh),
                    Y = e.get(a.LC),
                    X = e.get(a.PL),
                    Z = e.get(a.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: s,
                    usersResource: n,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: _,
                    topResource: g,
                    artistsResource: m,
                    slidesResource: v,
                    redAlertResource: h,
                    rotorResource: x,
                    waveResource: p,
                    searchResource: f,
                    searchPlaylistResource: b,
                    playlistResource: T,
                    playlistsResource: I,
                    pinResource: N,
                    metatagsResource: C,
                    tagResource: k,
                    feedResource: E,
                    wizard3Resource: w,
                    pinsResource: y,
                    musicHistoryResource: A,
                    dynamicPagesResource: L,
                    chartResource: R,
                    clipsResource: S,
                    lyricViewsResource: j,
                    nonMusicResource: M,
                    donationResource: O,
                    loaderResource: P,
                    lumenResource: z,
                    prefixlessResource: U,
                    streamsResource: V,
                    filtersResource: $,
                    ugcResource: D,
                    collectionResource: B,
                    adsResource: K,
                    personalResource: F,
                    familyResource: H,
                    childrenLandingResource: W,
                    promoResource: q,
                    telemetryResource: Y,
                    labelsResource: X,
                    concertsResource: Z,
                    wordsResource: e.get(a.dA),
                    wheelResource: e.get(a.$Y),
                };
            };
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(34970),
                l = i.n(o);
            let c = (0, s.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: s,
                        minTextLength: o,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: u = !1,
                        placeholder: d,
                        onChangeFinish: _,
                        withOutline: g = !1,
                        readOnly: m = !1,
                        'aria-label': v,
                        'data-test-id': h,
                    } = e,
                    [x, p] = (0, n.useState)(i),
                    f = (0, n.useRef)(!1),
                    b = (0, n.useRef)(null),
                    T = (0, n.useCallback)((e) => {
                        p(e.target.value);
                    }, []),
                    I = (0, n.useCallback)(
                        (e) => {
                            if (u && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (f.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [u],
                    ),
                    N = (0, n.useCallback)(() => {
                        let e = x.trim();
                        f.current || (o && e.length < o) ? ((f.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [x, f, o, _, i]);
                ((0, n.useEffect)(() => {
                    b.current && ((b.current.selectionStart = b.current.value.length), (b.current.selectionEnd = b.current.value.length));
                }, []),
                    (0, n.useLayoutEffect)(() => {
                        let e = b.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [b, x]));
                let C = (0, n.useMemo)(() => ('textarea' === c ? (e) => (0, a.jsx)('textarea', { ref: b, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [c]);
                return (0, a.jsx)(C, {
                    className: (0, r.$)(l().root, t, { [l().root_textarea]: 'textarea' === c, [l().root_outline]: g }),
                    type: 'text',
                    value: x,
                    readOnly: m,
                    maxLength: s,
                    onBlur: N,
                    onChange: T,
                    onKeyDown: I,
                    placeholder: d,
                    'aria-label': v,
                    autoFocus: !0,
                    'data-test-id': h,
                });
            });
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var a = i(4086),
                r = i(41928),
                s = i(44084);
            let n = new WeakMap(),
                o = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, i), i);
                    })((0, r.N)().get(a.Zf));
        },
        68974: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => A });
            var a = i(88800),
                r = i(84961),
                s = i(88969),
                n = i(17392),
                o = i(52300),
                l = i(19934),
                c = i(53548),
                u = i(2058),
                d = i(35412),
                _ = i(39499),
                g = i(29993),
                m = i(4086),
                v = i(41928),
                h = i(65523),
                x = i(29595),
                p = i(74965),
                f = i(57448),
                b = i(72288),
                T = i(72131),
                I = i(202),
                N = i(66943),
                C = i(29504),
                k = i(59304),
                E = i(51105),
                w = i.n(E);
            let y = (e) => {
                    let { closeToast: t } = e;
                    return (0, a.jsx)(k.$, {
                        closeToast: t,
                        cover: (0, a.jsx)(o.I, { className: w().icon, size: 'xs', variant: 'chain' }),
                        coverRadius: 's',
                        message: (0, a.jsx)(C.HL, {
                            className: w().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, a.jsx)(s.A, { id: 'shared-vibe.link-successfully-copied', values: { b: (e) => (0, a.jsx)('b', { children: e }) } }),
                        }),
                    });
                },
                A = (0, r.PA)((e) => {
                    let { vibe: t, className: i, iconClassName: r } = e,
                        { shareVibe: C } = ((e) => {
                            let { vibe: t } = e,
                                { user: i, paywall: r, slam: s } = (0, b.g)(),
                                { waveResource: n } = (0, f.f)(),
                                { notify: o } = (0, p.l)(),
                                { formatMessage: l } = (0, u.A)(),
                                C = (0, h.U)(),
                                k = (0, v.N)().get(m.V4),
                                E = (0, T._)(k.webHost),
                                w = (0, c.useRef)(!1),
                                A = (0, g.c)((e) => {
                                    (e && C.error(new _.t('Failed to share a vibe', { cause: e })),
                                        o((0, a.jsx)(N.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                                }),
                                { startClipboardWrite: L } = (0, I.$)({
                                    format: (e) => (0, d.no)('/myvibe/:shareId', { params: { shareId: e }, options: { host: 'https://'.concat(E) } }).href,
                                    onSuccess: () => {
                                        o((0, a.jsx)(y, {}), { containerId: x.u.INFO });
                                    },
                                    onError: A,
                                });
                            return {
                                shareVibe: (0, g.c)(async () => {
                                    let e;
                                    if (!w.current) {
                                        if (!i.isAuthorized)
                                            return void o((0, a.jsx)(N.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), {
                                                containerId: x.u.ERROR,
                                            });
                                        if (!i.hasPlus) return void r.openModal();
                                        if (s.networkStatus.isOffline || s.isOfflineModeEnabled) return void A();
                                        w.current = !0;
                                        try {
                                            e = L();
                                            let { shareId: i } = await n.createShare({ seeds: [...t.seeds] });
                                            await e.copy(i);
                                        } catch (t) {
                                            (null == e || e.cancel(), A(t));
                                        } finally {
                                            w.current = !1;
                                        }
                                    }
                                }),
                            };
                        })({ vibe: t });
                    return t.isShareEnabled
                        ? (0, a.jsx)(l.Dr, {
                              className: i,
                              icon: (0, a.jsx)(o.I, { className: r, variant: 'share', size: 'xxs' }),
                              onClick: C,
                              'data-test-id': n.S7.CONTEXT_MENU_SHARE_BUTTON,
                              children: (0, a.jsx)(s.A, { id: 'interface-actions.share' }),
                          })
                        : null;
                });
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => r, W: () => s });
            var a = i(53548);
            let r = (0, a.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, a.useContext)(r);
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var a,
                r = i(53548),
                s = {
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                n = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var a = (n[t] = { exports: {} });
                    return (s[t](a, a.exports, e), a.exports);
                })(810);
                o.useToggle = (t) => {
                    let [i, a] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        a(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            a((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            a(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            a(!1);
                        }, []);
                    return { state: i, toggle: r, setState: a, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var a = i(51231);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
    },
]);
