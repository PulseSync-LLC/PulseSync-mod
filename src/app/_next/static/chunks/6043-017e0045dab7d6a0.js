(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6043],
    {
        1001: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
        },
        2755: (e, t, a) => {
            'use strict';
            a.d(t, { QueryToVibeSimple: () => u });
            var i = a(32290),
                r = a(63618),
                n = a(49574),
                o = a(90625),
                l = a(28301),
                s = a.n(l);
            let d = {
                    [n.Sxu.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [n.Sxu.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                c = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                u = (e) => {
                    let { className: t, ...a } = e,
                        { lumen: l } = (0, n.Pjs)();
                    return (0, i.jsx)(o.D, {
                        className: (0, r.$)(s().root, t),
                        lumenImages: l.getFallbackImage(a.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: c,
                        ...a,
                    });
                };
        },
        10057: (e, t, a) => {
            'use strict';
            a.d(t, { QueryToVibe: () => s });
            var i = a(32290),
                r = a(49574),
                n = a(90625);
            let o = {
                    [r.Sxu.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [r.Sxu.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                l = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                s = (e) => (0, i.jsx)(n.D, { animationByTheme: o, animationConfig: l, ...e });
        },
        15597: (e) => {
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
        17123: (e, t, a) => {
            'use strict';
            a.d(t, { VibeCard: () => _ });
            var i = a(32290),
                r = a(63618),
                n = a(96103),
                o = a(55178),
                l = a(91027),
                s = a(14934),
                d = a(86269),
                c = a(71926),
                u = a(49574),
                m = a(44574),
                g = a(15597),
                C = a.n(g);
            let _ = (0, n.PA)((e) => {
                let { vibe: t, children: a, className: n } = e,
                    { pageId: g } = (0, u.$au)(),
                    [_, p] = (0, o.useState)(!1),
                    { blockIdForFrom: y } = (0, u.N8n)(),
                    {
                        settings: { isMobile: A },
                        user: v,
                    } = (0, u.Pjs)(),
                    { sendPlaySearchFeedback: b } = (0, u.zEv)(),
                    B = (0, u.brA)(),
                    { withPlusPopoverWeb: h, withFreemiumCloseListening: D } = (0, u.XCI)(),
                    { isPlaying: E, isPaused: F, togglePlay: x } = (0, u.B0S)({ seeds: t.seeds, pageIdForFrom: g, blockIdForFrom: y }),
                    f = (0, u.PT7)(),
                    V = E || F,
                    w = (0, o.useCallback)(() => {
                        A && (_ || E || (p(!0), null == b || b()), x());
                    }, [A, E, _, b, x]),
                    S = (0, l.c)(() => {
                        !f() && (h || (_ || E || (p(!0), null == b || b()), x(), B(!E)));
                    }),
                    N = (0, o.useCallback)(
                        () =>
                            (0, i.jsx)(
                                m.DM,
                                {
                                    isPlaying: E,
                                    onClick: S,
                                    className: (0, r.$)(C().playButton, C().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [E, S, t],
                    ),
                    T = (0, o.useMemo)(() => {
                        let e = !v.hasPlus && D;
                        return v.isAuthorized
                            ? (0, i.jsx)(
                                  m.SU,
                                  { isEnabled: e && h, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: N },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, i.jsx)(m.Zr, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: N });
                    }, [v.hasPlus, v.isAuthorized, t, N, h, D]),
                    k = (0, o.useMemo)(
                        () =>
                            (0, i.jsxs)(d.Paper, {
                                className: C().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: w,
                                children: [
                                    (0, i.jsx)(m.BW, {
                                        size: 200,
                                        fit: 'cover',
                                        className: C().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    V && (0, i.jsx)(m.PD, { stopAnimation: F, className: C().playingAnimation }),
                                    (0, i.jsx)(s.hg, {
                                        className: (0, r.$)(C().controls, { [C().controls_isPlaying]: V }, C().important),
                                        bottomContainerClassName: C().playControl,
                                        radius: 'round',
                                        playControl: T,
                                    }),
                                ],
                            }),
                        [w, t.backgroundColor, t.imageUrl, t.title, V, F, T],
                    );
                return (0, i.jsx)(s.MN, {
                    className: (0, r.$)(C().root, n),
                    textPosition: 'center',
                    title: (0, i.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title },
                        t.getKey('Description'),
                    ),
                    description: (0, i.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: k,
                    children: a,
                });
            });
        },
        19529: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(32290),
                r = a(63618),
                n = a(52138),
                o = a(6752),
                l = a(44574),
                s = a(75487),
                d = a.n(s);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: s,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: g,
                        className: C,
                        fallbackIconSize: _,
                    } = e,
                    p = (0, o.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(l.q1, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(d().root, d()['root_radius_'.concat(p)], { [d().root_withShadow]: !!t.entityType }, C),
                    radius: p,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: s,
                    alt: g,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: _,
                });
            };
        },
        20183: (e, t, a) => {
            'use strict';
            a.d(t, { SearchVibeCard: () => A });
            var i = a(32290),
                r = a(63618),
                n = a(96103),
                o = a(55178),
                l = a(59824),
                s = a(91027),
                d = a(58359),
                c = a(71926),
                u = a(49574),
                m = a(44574),
                g = a(85015),
                C = a(48472),
                _ = a(19529),
                p = a(98925),
                y = a.n(p);
            let A = (0, n.PA)((e) => {
                let { className: t, vibe: a, cover: n, coverClassName: p, playButtonIconSize: A, description: v, agentVariant: b } = e,
                    { ref: B, intersectionPropertyId: h } = (0, u.nMI)(),
                    { pageId: D } = (0, u.$au)(),
                    [E, F] = (0, o.useState)(!1),
                    { blockIdForFrom: x } = (0, u.N8n)(),
                    { withPlusPopoverSearchVibeCard: f } = (0, u.XCI)(),
                    { sendPlaySearchFeedback: V } = (0, u.zEv)(),
                    w = (0, u.brA)(),
                    [S, N] = (0, o.useState)(!1),
                    T = (0, u.PT7)(),
                    { isPlaying: k, togglePlay: I, isCurrent: P } = (0, u.B0S)({ seeds: a.seeds, pageIdForFrom: D, blockIdForFrom: x }),
                    L = (0, s.c)(() => {
                        if (!T()) {
                            if (f) return void N(!0);
                            E || k || (F(!0), null == V || V()), I(), w(!k);
                        }
                    }),
                    j = (0, s.c)(() => {
                        k || L();
                    }),
                    K = (0, s.c)((e) => {
                        2 === e.detail ? j() : (0, d.P)(e, m.$f.ripple);
                    }),
                    R = (0, o.useCallback)(() => {
                        if (a.shouldShowAgent && a.agent && b)
                            switch (b) {
                                case g.h.LARGE:
                                    return (0, i.jsxs)('div', {
                                        className: (0, r.$)(y().root, m.$f.playButtonCell, p),
                                        children: [
                                            (0, i.jsx)(C.VibeCardView, { agent: a.agent, isPlaying: k }),
                                            (0, i.jsx)(m.DM, {
                                                variant: 'filled',
                                                className: y().playButton,
                                                iconClassName: y().playButtonIcon,
                                                isPlaying: k,
                                                onClick: L,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case g.h.SMALL:
                                    return (0, i.jsx)(_.n, {
                                        agent: a.agent,
                                        isPlaying: k,
                                        isCurrent: P,
                                        onPlayButtonClick: L,
                                        alt: ''.concat(v, ' ').concat(a.title),
                                        className: (0, r.$)(m.$f.playButtonCell, p),
                                    });
                            }
                        return (0, i.jsx)(m.q1, {
                            isAvailable: !0,
                            coverUri: null == n ? void 0 : n.uri,
                            title: a.title,
                            className: (0, r.$)(m.$f.playButtonCell, p),
                            entityCoverStyle: { backgroundColor: null == n ? void 0 : n.color },
                            radius: 'round',
                            onPlayButtonClick: L,
                            isPlaying: k,
                            isCurrent: P,
                            playButtonIconSize: A,
                            alt: ''.concat(v, ' ').concat(a.title),
                        });
                    }, [b, null == n ? void 0 : n.color, null == n ? void 0 : n.uri, p, v, L, P, k, A, a.agent, a.shouldShowAgent, a.title]);
                return (0, i.jsxs)(m.Cj, {
                    ref: B,
                    'data-intersection-property-id': h,
                    className: (0, r.$)(m.$f.root, t),
                    'aria-label': a.title,
                    onClick: K,
                    ...(0, l.Am)(l.OA.vibe.SEARCH_VIBE_CARD),
                    children: [
                        (0, i.jsx)(m.SU, {
                            isOpened: S,
                            onOpenChange: N,
                            isEnabled: f,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.stationType,
                            renderChildren: R,
                        }),
                        (0, i.jsx)(m.ro, {
                            title: (0, i.jsx)(c.Caption, { className: (0, r.$)(m.$f.text, m.$f.titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                            description: v,
                        }),
                    ],
                });
            });
        },
        20982: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
            var i = a(49574);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.pX4)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        28099: (e) => {
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
        28301: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        38819: (e) => {
            e.exports = { root: 'NotificationPin_root__DBEub', view: 'NotificationPin_view__daGc_', image: 'NotificationPin_image__o5F7B' };
        },
        48472: (e, t, a) => {
            'use strict';
            a.d(t, { VibeCardView: () => F });
            var i = a(32290),
                r = a(90040),
                n = a(57249),
                o = a(63618),
                l = a(96103),
                s = a(65493),
                d = a(55178),
                c = a(52138),
                u = a(91027),
                m = a(6752),
                g = a(44989),
                C = a(50162),
                _ = a(79856),
                p = a(49574),
                y = a(86249);
            let A = { h: 16, s: 10, l: 65 },
                v = { h: 16, s: 15, l: 20 },
                b = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                    return Math.min(a, Math.max(t, e)) / 100;
                };
            var B = a(28099),
                h = a.n(B),
                D = a(49124);
            let E = s.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = D.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
            let F = (0, l.PA)((e) => {
                let { agent: t, isPlaying: a } = e,
                    [r, n] = (0, d.useState)(null),
                    { state: l, toggleTrue: s } = (0, g.e)(!1),
                    { state: B, toggleTrue: D, toggleFalse: F } = (0, g.e)(!1),
                    { theme: x } = (0, p.DPo)(),
                    f = (0, d.useRef)(null),
                    V = t.entityType === c.h.ARTIST,
                    w = t.entityType === c.h.ALBUM || t.entityType === c.h.TRACK || t.entityType === c.h.PLAYLIST,
                    S = t.cover.color,
                    N = t.cover.uri,
                    T = (0, u.c)(async () => {
                        if (l && S && x) {
                            F();
                            let {
                                    color: e,
                                    glow1: a,
                                    glow2: i,
                                } = ((e) => {
                                    let t,
                                        { averageColor: a, theme: i, custom: r } = e,
                                        { h: n, s: o, l } = (0, p.g8k)(a);
                                    if (r) {
                                        if (i === p.Sxu.Dark) {
                                            let e = b(o + 5, 50, 100);
                                            return {
                                                color: (0, p.YLU)(n, e, b(l - 40, 12, 25)),
                                                glow1: (0, p.YLU)(n, e, b(l - 5, 45, 60)),
                                                glow2: (0, p.YLU)(n, e, b(l + 35, 80, 90)),
                                            };
                                        }
                                        let e = b(o - 2, 50, 100);
                                        return {
                                            color: (0, p.YLU)(n, e, b(l + 43, 80, 95)),
                                            glow1: (0, p.YLU)(n, e, b(l + 5, 45, 75)),
                                            glow2: (0, p.YLU)(n, e, b(l, 35, 55)),
                                        };
                                    }
                                    if (o > 12) {
                                        let e = (0, y.c)(n);
                                        t = e ? (0, p.g8k)(e.primary) : { h: n, s: o, l };
                                    } else t = l > 35 ? A : v;
                                    return { color: (0, p.YLU)(t.h, t.s / 100, t.l / 100) };
                                })({ averageColor: S, theme: x, custom: !t.entityType }),
                                n = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: a },
                                        { id: 'glow_2', type: 'Color', value: i },
                                    ],
                                });
                            await (null == r ? void 0 : r.setThemeData(n)), D();
                        }
                    }),
                    k = (0, u.c)(() => {
                        s(), T();
                    });
                (0, d.useEffect)(() => {
                    a ? null == r || r.play() : null == r || r.pause();
                }, [r, a]),
                    (0, d.useEffect)(() => {
                        T();
                    }, [S, T, x, l]),
                    (0, d.useEffect)(() => {
                        if (r)
                            return (
                                r.setUseFrameInterpolation(!1),
                                r.setRenderConfig({ devicePixelRatio: 0.1 }),
                                r.addEventListener('load', k),
                                () => {
                                    r.removeEventListener('load', k);
                                }
                            );
                    }, [r, k]);
                let I = !l || !B,
                    P = (0, m.L)(() => {
                        if (!f.current) return;
                        let e = V ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(f.current.clientWidth * e, 'px') };
                    });
                return (0, i.jsxs)('div', {
                    ref: f,
                    className: (0, o.$)(h().root, { [h().root_loading]: I }),
                    style: P,
                    children: [
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(h().cover, { [h().cover_round]: V, [h().cover_square]: w, [h().cover_loading]: I }),
                            children: [
                                t.entityType &&
                                    N &&
                                    (0, i.jsx)(C.Image, { src: N, size: 200, fit: 'cover', withAvatarReplace: !0, className: h().image, withLoadingIndicator: !1 }),
                                (0, i.jsx)(E, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: h().animation }),
                            ],
                        }),
                        (0, i.jsx)(_.Shimmer, { className: (0, o.$)(h().shimmer, { [h().shimmer_loading]: I }), isActive: !0, radius: V ? 'round' : 'm' }),
                    ],
                });
            });
        },
        51025: (e) => {
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
        52138: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { h: () => i }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(i || (i = {}));
        },
        57318: (e, t, a) => {
            'use strict';
            a.d(t, {
                cw: () => D.QueryToVibe,
                Ks: () => E.QueryToVibeSimple,
                H2: () => F.SearchVibeCard,
                yi: () => x.VibeAgentCard,
                hl: () => _.h,
                xy: () => f.VibeButton,
                Eb: () => f.VibeButtonShimmer,
                Zn: () => V.VibeCard,
                Gh: () => h,
                nr: () => w.n,
                er: () => n,
                OH: () => g,
                A7: () => p.useOnPinClick,
                fp: () => C,
                KU: () => r.K,
                lb: () => y,
            });
            var i = a(60754),
                r = a(20982);
            let n = (e) => {
                var t, a, n, o;
                return (0, i.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (n = null == (t = e.colors) ? void 0 : t.average) ? n : '',
                        waveText: null != (o = null == (a = e.colors) ? void 0 : a.waveText) ? o : '',
                    },
                    agent: (0, r.K)(e.agent),
                });
            };
            var o = a(49574),
                l = a(86249);
            let s = Array.from({ length: 16 }, () => '#000000'),
                d = {
                    carmine: [
                        '#F5002E',
                        '#CF0027',
                        '#AF0021',
                        '#94001C',
                        '#7C0017',
                        '#690014',
                        '#590011',
                        '#4B000E',
                        '#40000C',
                        '#36000A',
                        '#2D0008',
                        '#250007',
                        '#1D0005',
                        '#140004',
                        '#0B0002',
                        '#000000',
                    ],
                    fuchsia: [
                        '#F5007C',
                        '#CF0069',
                        '#AF0059',
                        '#94004B',
                        '#7C003F',
                        '#690035',
                        '#59002D',
                        '#4B0026',
                        '#400020',
                        '#36001B',
                        '#2D0017',
                        '#250013',
                        '#1D000F',
                        '#14000A',
                        '#0B0006',
                        '#000000',
                    ],
                    coral: [
                        '#F53700',
                        '#CF2F00',
                        '#AF2700',
                        '#942100',
                        '#7C1C00',
                        '#691800',
                        '#591400',
                        '#4B1100',
                        '#400E00',
                        '#360C00',
                        '#2D0A00',
                        '#250800',
                        '#1D0700',
                        '#140400',
                        '#0B0200',
                        '#000000',
                    ],
                    tangerine: [
                        '#F56E00',
                        '#CF5D00',
                        '#AF4F00',
                        '#944200',
                        '#7C3800',
                        '#692F00',
                        '#592800',
                        '#4B2200',
                        '#401D00',
                        '#361800',
                        '#2D1400',
                        '#251100',
                        '#1D0D00',
                        '#140900',
                        '#0B0500',
                        '#000000',
                    ],
                    clover: [
                        '#34C03E',
                        '#2CA334',
                        '#25892C',
                        '#1F7425',
                        '#1A621F',
                        '#16521B',
                        '#134516',
                        '#103B13',
                        '#0D3210',
                        '#0B2A0E',
                        '#0A230B',
                        '#081D09',
                        '#061707',
                        '#041005',
                        '#020903',
                        '#000000',
                    ],
                    emerald: [
                        '#00F5A9',
                        '#00CF8F',
                        '#00AF79',
                        '#009466',
                        '#007C56',
                        '#006948',
                        '#00593D',
                        '#004B34',
                        '#00402C',
                        '#003625',
                        '#002D1F',
                        '#002519',
                        '#001D14',
                        '#00140E',
                        '#000B08',
                        '#000000',
                    ],
                    turquoise: [
                        '#00F5CD',
                        '#00CFAE',
                        '#00AF93',
                        '#00947C',
                        '#007C68',
                        '#006958',
                        '#00594A',
                        '#004B3F',
                        '#004035',
                        '#00362D',
                        '#002D26',
                        '#00251F',
                        '#001D18',
                        '#001411',
                        '#000B09',
                        '#000000',
                    ],
                    aquamarine: [
                        '#00D6F5',
                        '#00B5CF',
                        '#0099AF',
                        '#008194',
                        '#006D7C',
                        '#005C69',
                        '#004D59',
                        '#00424B',
                        '#003840',
                        '#002F36',
                        '#00272D',
                        '#002025',
                        '#00191D',
                        '#001214',
                        '#000A0B',
                        '#000000',
                    ],
                    glacier: [
                        '#5C8E9B',
                        '#4E7883',
                        '#42666F',
                        '#37565D',
                        '#2F484F',
                        '#273D42',
                        '#213338',
                        '#1C2B2F',
                        '#182528',
                        '#141F22',
                        '#111A1C',
                        '#0E1517',
                        '#0B1112',
                        '#080C0D',
                        '#040607',
                        '#000000',
                    ],
                    slate: [
                        '#4F6C9B',
                        '#435B83',
                        '#384D6F',
                        '#30415D',
                        '#28374F',
                        '#222E42',
                        '#1D2738',
                        '#18212F',
                        '#141C28',
                        '#111822',
                        '#0F141C',
                        '#0C1017',
                        '#090D12',
                        '#07090D',
                        '#040507',
                        '#000000',
                    ],
                    sapphire: [
                        '#0C41E8',
                        '#0A37C4',
                        '#092EA6',
                        '#07278C',
                        '#062176',
                        '#051C63',
                        '#041854',
                        '#041447',
                        '#03113C',
                        '#030E33',
                        '#020C2B',
                        '#020A23',
                        '#01081B',
                        '#010513',
                        '#01030A',
                        '#000000',
                    ],
                    indigo: [
                        '#160CE8',
                        '#130AC4',
                        '#1009A6',
                        '#0D078C',
                        '#0B0676',
                        '#090563',
                        '#080454',
                        '#070447',
                        '#06033C',
                        '#050333',
                        '#04022B',
                        '#030223',
                        '#03011B',
                        '#020113',
                        '#01010A',
                        '#000000',
                    ],
                    amethyst: [
                        '#5035C0',
                        '#442DA3',
                        '#392689',
                        '#302074',
                        '#291B62',
                        '#221752',
                        '#1D1345',
                        '#18103B',
                        '#150E32',
                        '#120C2A',
                        '#0F0A23',
                        '#0C081D',
                        '#090617',
                        '#070410',
                        '#040209',
                        '#000000',
                    ],
                    plum: [
                        '#7C35C0',
                        '#692DA3',
                        '#592689',
                        '#4B2074',
                        '#3F1B62',
                        '#351752',
                        '#2D1345',
                        '#26103B',
                        '#200E32',
                        '#1B0C2A',
                        '#170A23',
                        '#13081D',
                        '#0F0617',
                        '#0A0410',
                        '#060209',
                        '#000000',
                    ],
                    orchid: [
                        '#BB1ADB',
                        '#9E16B9',
                        '#86139D',
                        '#711084',
                        '#5F0D6F',
                        '#500B5E',
                        '#44094F',
                        '#390843',
                        '#310739',
                        '#290630',
                        '#220528',
                        '#1C0421',
                        '#16031A',
                        '#100212',
                        '#08010A',
                        '#000000',
                    ],
                    raspberry: [
                        '#DB1A7D',
                        '#B9166A',
                        '#9D1359',
                        '#84104B',
                        '#6F0D40',
                        '#5E0B36',
                        '#4F092D',
                        '#430826',
                        '#390720',
                        '#30061B',
                        '#280517',
                        '#210413',
                        '#1A030F',
                        '#12020A',
                        '#0A0106',
                        '#000000',
                    ],
                },
                c = {
                    carmine: [
                        '#FFCCD6',
                        '#D8ADB5',
                        '#B69299',
                        '#9A7B81',
                        '#82686D',
                        '#6D575C',
                        '#5C4A4D',
                        '#4E3E42',
                        '#423538',
                        '#382D2F',
                        '#2F2527',
                        '#261F20',
                        '#1E1819',
                        '#151112',
                        '#0B090A',
                        '#000000',
                    ],
                    fuchsia: [
                        '#FFCCE6',
                        '#D8ADC3',
                        '#B692A4',
                        '#9A7B8B',
                        '#826875',
                        '#6D5763',
                        '#5C4A53',
                        '#4E3E46',
                        '#42353C',
                        '#382D32',
                        '#2F252A',
                        '#261F23',
                        '#1E181B',
                        '#151113',
                        '#0B090A',
                        '#000000',
                    ],
                    coral: [
                        '#FFD7CC',
                        '#D8B6AD',
                        '#B69A92',
                        '#9A827B',
                        '#826D68',
                        '#6D5C57',
                        '#5C4E4A',
                        '#4E423E',
                        '#423835',
                        '#382F2D',
                        '#2F2825',
                        '#26201F',
                        '#1E1918',
                        '#151211',
                        '#0B0A09',
                        '#000000',
                    ],
                    tangerine: [
                        '#FFE3CC',
                        '#D8C0AD',
                        '#B6A292',
                        '#9A897B',
                        '#827368',
                        '#6D6157',
                        '#5C524A',
                        '#4E463E',
                        '#423B35',
                        '#38322D',
                        '#2F2A25',
                        '#26221F',
                        '#1E1B18',
                        '#151311',
                        '#0B0A09',
                        '#000000',
                    ],
                    clover: [
                        '#D7F4D9',
                        '#B6CFB8',
                        '#9AAE9B',
                        '#829383',
                        '#6D7C6E',
                        '#5C695D',
                        '#4E584F',
                        '#424B42',
                        '#383F38',
                        '#2F3630',
                        '#282D28',
                        '#202521',
                        '#191D1A',
                        '#121412',
                        '#0A0B0A',
                        '#000000',
                    ],
                    emerald: [
                        '#CCFFEF',
                        '#ADD8CA',
                        '#92B6AB',
                        '#7B9A90',
                        '#688279',
                        '#576D66',
                        '#4A5C56',
                        '#3E4E49',
                        '#35423E',
                        '#2D3834',
                        '#252F2C',
                        '#1F2624',
                        '#181E1C',
                        '#111514',
                        '#090B0B',
                        '#000000',
                    ],
                    turquoise: [
                        '#CCFFF7',
                        '#ADD8D1',
                        '#92B6B1',
                        '#7B9A95',
                        '#68827D',
                        '#576D6A',
                        '#4A5C59',
                        '#3E4E4C',
                        '#354240',
                        '#2D3836',
                        '#252F2D',
                        '#1F2625',
                        '#181E1D',
                        '#111515',
                        '#090B0B',
                        '#000000',
                    ],
                    aquamarine: [
                        '#CCF9FF',
                        '#ADD3D8',
                        '#92B2B6',
                        '#7B969A',
                        '#687F82',
                        '#576B6D',
                        '#4A5A5C',
                        '#3E4C4E',
                        '#354142',
                        '#2D3738',
                        '#252E2F',
                        '#1F2626',
                        '#181D1E',
                        '#111515',
                        '#090B0B',
                        '#000000',
                    ],
                    glacier: [
                        '#DFE9EC',
                        '#BDC5C8',
                        '#9FA7A9',
                        '#868C8E',
                        '#717678',
                        '#606465',
                        '#515455',
                        '#444748',
                        '#3A3C3D',
                        '#313334',
                        '#292B2B',
                        '#222324',
                        '#1A1B1C',
                        '#131314',
                        '#0A0A0B',
                        '#000000',
                    ],
                    slate: [
                        '#DDE4EE',
                        '#BBC1CA',
                        '#9EA3AA',
                        '#85898F',
                        '#707479',
                        '#5F6266',
                        '#505256',
                        '#444649',
                        '#393B3E',
                        '#303234',
                        '#292A2C',
                        '#212224',
                        '#1A1B1C',
                        '#121314',
                        '#0A0A0B',
                        '#000000',
                    ],
                    sapphire: [
                        '#CFDAFC',
                        '#AFB9D5',
                        '#949CB4',
                        '#7D8398',
                        '#696F80',
                        '#595D6C',
                        '#4B4F5B',
                        '#3F434D',
                        '#363941',
                        '#2D3037',
                        '#26282E',
                        '#1F2126',
                        '#181A1E',
                        '#111215',
                        '#090A0B',
                        '#000000',
                    ],
                    indigo: [
                        '#D1CFFC',
                        '#B1AFD5',
                        '#9594B4',
                        '#7E7D98',
                        '#6A6980',
                        '#5A596C',
                        '#4C4B5B',
                        '#403F4D',
                        '#363641',
                        '#2E2D37',
                        '#26262E',
                        '#1F1F26',
                        '#19181E',
                        '#111115',
                        '#09090B',
                        '#000000',
                    ],
                    amethyst: [
                        '#DDD7F4',
                        '#BBB6CF',
                        '#9E9AAE',
                        '#858293',
                        '#706D7C',
                        '#5F5C69',
                        '#504E58',
                        '#44424B',
                        '#39383F',
                        '#302F36',
                        '#29282D',
                        '#212025',
                        '#1A191D',
                        '#121214',
                        '#0A0A0B',
                        '#000000',
                    ],
                    plum: [
                        '#E6D7F4',
                        '#C3B6CF',
                        '#A49AAE',
                        '#8B8293',
                        '#756D7C',
                        '#635C69',
                        '#534E58',
                        '#46424B',
                        '#3C383F',
                        '#322F36',
                        '#2A282D',
                        '#232025',
                        '#1B191D',
                        '#131214',
                        '#0A0A0B',
                        '#000000',
                    ],
                    orchid: [
                        '#F3D1FA',
                        '#CEB1D4',
                        '#AE95B3',
                        '#937E97',
                        '#7B6A7F',
                        '#685A6B',
                        '#584C5A',
                        '#4A404D',
                        '#3F3641',
                        '#352E37',
                        '#2D262E',
                        '#251F26',
                        '#1D191D',
                        '#141115',
                        '#0B090B',
                        '#000000',
                    ],
                    raspberry: [
                        '#FAD1E6',
                        '#D4B1C3',
                        '#B395A4',
                        '#977E8B',
                        '#7F6A75',
                        '#6B5A63',
                        '#5A4C53',
                        '#4D4046',
                        '#41363C',
                        '#372E32',
                        '#2E262A',
                        '#261F23',
                        '#1D191B',
                        '#151113',
                        '#0B090A',
                        '#000000',
                    ],
                },
                u = 'slate',
                m = { primary: '#4F6C9B', secondary: '#DDE4EE', primaryStops: d[u], secondaryStops: c[u], primaryDarkIdleStops: s },
                g = (e) => {
                    if (!e) return m;
                    let { h: t } = (0, o.g8k)(e),
                        a = (0, l.c)(t);
                    return a ? { primary: a.primary, secondary: a.secondary, primaryStops: d[a.name], secondaryStops: c[a.name], primaryDarkIdleStops: s } : m;
                },
                C = () => {
                    let {
                            experiments: e,
                            user: { hasPlus: t, isLumenAvailable: a },
                        } = (0, o.Pjs)(),
                        i = e.checkExperiment(o.zal.WebNextQueryToVibeLumenOptionCheck, 'on');
                    return t && e.checkExperiment(o.zal.WebNextQueryToVibe, 'on') && (!i || !!a);
                };
            var _ = a(85015),
                p = a(64089);
            let y = (e, t) => {
                var a;
                return (0, i.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (a = e.type) ? a : void 0, agent: (0, r.K)(t) });
            };
            var A = a(95428);
            let v = i.gK.model('VibeAgent', { animationUri: i.gK.string, cover: A.$B, entityType: i.gK.maybe(i.gK.string) });
            var b = a(21263),
                B = a(80785);
            let h = i.gK
                .model('Vibe', {
                    title: i.gK.optional(i.gK.string, ''),
                    description: i.gK.maybe(i.gK.string),
                    seeds: i.gK.array(i.gK.string),
                    imageUrl: i.gK.maybe(i.gK.string),
                    animationUrl: i.gK.maybe(i.gK.string),
                    backgroundImageUrl: i.gK.maybe(i.gK.string),
                    backgroundColor: i.gK.maybe(i.gK.string),
                    type: i.gK.maybe(i.gK.string),
                    colors: i.gK.maybe(i.gK.model({ average: i.gK.maybe(i.gK.string), waveText: i.gK.maybe(i.gK.string) })),
                    agent: i.gK.maybe(v),
                })
                .views((e) => {
                    let t = {
                        get stationId() {
                            var a;
                            return null != (a = e.seeds[0]) ? a : '';
                        },
                        get seedsId() {
                            return e.seeds.join(',');
                        },
                        get context() {
                            if (e.seeds) {
                                if (t.stationId !== o.M19) return e.title;
                                else if (e.seeds.length > 1) return e.title;
                            }
                            return null;
                        },
                        get pinId() {
                            return (0, b.f)(e.seeds);
                        },
                        get isPinned() {
                            if (!(0, i._n)(e)) return !1;
                            let { pinsCollection: t } = (0, i.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get stationType() {
                            var r, n;
                            return null != (n = null == (r = t.stationId) ? void 0 : r.split(':')[0]) ? n : '';
                        },
                        get isMix() {
                            return e.type === B.y.MIX;
                        },
                        get isQ2V() {
                            return e.type === B.y.Q2V;
                        },
                        get shouldShowAgent() {
                            if (!(0, i._n)(e)) return !1;
                            let { experiments: t } = (0, i.Zn)(e);
                            return t.checkExperiment(o.zal.WebNextWaveAgentExperiment, 'on');
                        },
                        get cover() {
                            return (0, i.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                    togglePin: (0, i.L3)(function* () {
                        if (!(0, i._n)(e)) return;
                        let { pinsCollection: t, user: a } = (0, i.Zn)(e);
                        if (a.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                    }),
                    getDescription() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                        if (!(0, i._n)(e)) return t;
                        let { experiments: a } = (0, i.Zn)(e);
                        return a.checkExperiment(o.zal.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                    },
                }));
            var D = a(10057),
                E = a(2755),
                F = a(20183),
                x = a(85305),
                f = a(58875),
                V = a(17123);
            a(48472);
            var w = a(19529);
        },
        58875: (e, t, a) => {
            'use strict';
            a.d(t, { VibeButton: () => B, VibeButtonShimmer: () => b });
            var i = a(32290),
                r = a(63618),
                n = a(96103),
                o = a(55178),
                l = a(60900),
                s = a(59824),
                d = a(44989),
                c = a(58359),
                u = a(63423),
                m = a(82586),
                g = a(50162),
                C = a(79856),
                _ = a(71926),
                p = a(49574),
                y = a(44574),
                A = a(51025),
                v = a.n(A);
            let b = (e) => {
                    let { isActive: t, className: a } = e;
                    return (0, i.jsx)(C.Shimmer, { isActive: t, className: (0, r.$)(v().root, a) });
                },
                B = (0, n.PA)((e) => {
                    let { className: t, vibe: a } = e,
                        { formatMessage: n } = (0, l.A)(),
                        { pageId: C } = (0, p.$au)(),
                        { blockIdForFrom: A } = (0, p.N8n)(),
                        { ref: b, intersectionPropertyId: B } = (0, p.nMI)(),
                        { toggleTrue: h, toggleFalse: D, state: E } = (0, d.e)(!1),
                        { withPlusPopoverWeb: F } = (0, p.XCI)(),
                        x = a.title.length > 26,
                        { isPlaying: f, togglePlay: V } = (0, p.B0S)({ seeds: a.seeds, pageIdForFrom: C, blockIdForFrom: A }),
                        w = (0, p.brA)(),
                        S = (0, o.useCallback)(
                            (e) => {
                                F ||
                                    ((0, c.P)(e, v().ripple),
                                    h(),
                                    V().finally(() => {
                                        D(), w(!f);
                                    }));
                            },
                            [D, h, V, f, w, F],
                        ),
                        N = (0, o.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = a.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = a.colors) ? void 0 : t.waveText,
                            };
                        }, [a.colors]),
                        T = f ? 'pause' : 'play',
                        k = f ? s.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : s.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        I = (0, o.useCallback)(
                            () =>
                                (0, i.jsxs)(u.$, {
                                    style: N,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: S,
                                    className: (0, r.$)(v().root, v().button, { [v().button_loading]: E }, t),
                                    'data-intersection-property-id': B,
                                    ref: b,
                                    ...(0, s.Am)(s.e8.landing.VIBE_DISCOVERY_ITEM),
                                    children: [
                                        (0, i.jsx)(g.Image, {
                                            className: v().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: a.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, i.jsxs)('span', {
                                            className: v().textContainer,
                                            children: [
                                                (0, i.jsx)(_.Caption, {
                                                    className: v().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: a.getDescription(n({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, i.jsxs)(_.Caption, {
                                                    className: (0, r.$)(v().title, { [v().title_long]: x }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, i.jsx)(m.Icon, { className: v().icon, size: 'xxs', variant: T, ...(0, s.Am)(k) }), a.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, n, S, k, T, B, x, E, b, N, a],
                        );
                    return (0, i.jsx)(y.SU, { isEnabled: F, placement: 'top', textVariant: 'vibe', vibeTextVariant: a.stationType, renderChildren: I });
                });
        },
        61280: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        64089: (e, t, a) => {
            'use strict';
            a.d(t, { useOnPinClick: () => v });
            var i = a(32290),
                r = a(92708),
                n = a(55178),
                o = a(60900),
                l = a(90404),
                s = a(49574),
                d = a(44574),
                c = a(96103),
                u = a(59824),
                m = a(6752),
                g = a(50162),
                C = a(19529),
                _ = a(38819),
                p = a.n(_);
            let y = (0, c.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: r } = (0, s.Pjs)(),
                    n = r.checkExperiment(s.zal.WebNextWaveAgentExperiment, 'on'),
                    o = (0, m.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, i.jsx)(C.n, { agent: t.agent, shouldShowControl: !1, className: p().view })
                            : (0, i.jsx)(g.Image, {
                                  className: p().image,
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
                    l = n && t.agent ? void 0 : 'round';
                return (0, i.jsx)(d.k4, {
                    closeToast: a,
                    entityVariant: d.cp.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: l,
                    className: p().root,
                });
            });
            var A = a(20982);
            let v = (e) => {
                let { user: t, pinsCollection: a } = (0, s.Pjs)(),
                    { notify: c } = (0, s.lkh)(),
                    { formatMessage: u } = (0, o.A)(),
                    [m, g] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized)
                        return void c((0, i.jsx)(d.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.uQT.ERROR });
                    if (m) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        o = a.get(e.pinId);
                    g(!0);
                    let C = await e.togglePin();
                    g(!1),
                        o &&
                            o.type === l._.WAVE_ITEM &&
                            o.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = o.data.backgroundImageUrl), (n.colors = o.data.colors), (n.agent = o.data.agent)),
                        C &&
                            'object' == typeof C &&
                            'data' in C &&
                            (C.data.backgroundImageUrl && (n.backgroundImageUrl = C.data.backgroundImageUrl),
                            C.data.colors && (n.colors = { average: C.data.colors.average, waveText: C.data.colors.waveText }),
                            C.data.agent && (n.agent = (0, A.K)(C.data.agent))),
                        C
                            ? c((0, i.jsx)(y, { vibe: n }), { containerId: s.uQT.INFO })
                            : c((0, i.jsx)(d.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: s.uQT.ERROR });
                }, [u, c, m, a, t.isAuthorized, e]);
            };
        },
        67404: (e, t, a) => {
            'use strict';
            a.d(t, { $4: () => h, z1: () => y });
            var i,
                r = a(32290),
                n = a(55178),
                o = a(91027),
                l = a(49574),
                s = a(63618),
                d = a(96103),
                c = a(60900),
                u = a(59824),
                m = a(63423),
                g = a(84638),
                C = a(61280),
                _ = a.n(C);
            let p = (0, d.PA)((e) => {
                    let { open: t, onOpenChange: a, onPlayClick: i, playButtonShowDelay: d = 0 } = e,
                        { formatMessage: C } = (0, c.A)(),
                        {
                            settings: { isMobile: p },
                        } = (0, l.Pjs)(),
                        y = (0, o.c)(() => a(!1)),
                        A = (0, o.c)(() => {
                            i(), a(!1);
                        }),
                        { language: v } = (0, l.h6b)(),
                        [b, B] = (0, n.useState)(!1);
                    return (
                        (0, n.useEffect)(() => {
                            if (!t) return void B(!1);
                            let e = window.setTimeout(() => B(!0), d);
                            return () => window.clearTimeout(e);
                        }, [t, d]),
                        (0, r.jsxs)(g.a, {
                            open: t,
                            onOpenChange: a,
                            onClose: y,
                            placement: p ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, s.$)(_().root, (0, l.JH_)(l.Sxu.Dark)),
                            headerClassName: _().header,
                            contentClassName: _().content,
                            closeOnOutsidePress: !0,
                            closeButtonProps: (0, u.Am)(u.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON),
                            escapeKey: !0,
                            ...(0, u.Am)(u.S7.AWAKE_LUMEN_MODAL),
                            children: [
                                (0, r.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: _().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(v),
                                    ...(0, u.Am)(u.S7.AWAKE_LUMEN_MODAL_IFRAME),
                                }),
                                (0, r.jsx)(m.$, {
                                    className: (0, s.$)(_().playButton, b && _().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: A,
                                    ...(0, u.Am)(u.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON),
                                    children: C({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                y = () => {
                    let { lumen: e } = (0, l.Pjs)(),
                        [t, a] = (0, n.useState)(!1),
                        i = (0, n.useRef)(null),
                        s = (0, o.c)((e) => {
                            (i.current = e), a(!0);
                        }),
                        d = (0, o.c)(async (t) => {
                            try {
                                t || (await e.getData(!0));
                            } finally {
                                t || (i.current = null), a(t);
                            }
                        }),
                        c = (0, o.c)(() => {
                            var e;
                            return null == (e = i.current) ? void 0 : e.call(i);
                        });
                    return {
                        awakeLumenModal: e.isEnabled ? (0, r.jsx)(p, { open: t, onOpenChange: d, onPlayClick: c, playButtonShowDelay: e.playButtonShowDelay }) : null,
                        requestAwakeLumenModal: s,
                    };
                };
            var A = a(60754);
            !(function (e) {
                (e.AWAKENED = 'awakened'), (e.UNAWAKENED = 'unawakened');
            })(i || (i = {}));
            var v = a(95428);
            let b = [
                    {
                        [l.Sxu.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ef3dacc851cba63a44/%%',
                        [l.Sxu.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa855b357516550b967b1/%%',
                    },
                    {
                        [l.Sxu.Dark]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69dcb1f03dacc851cba63a45/%%',
                        [l.Sxu.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa856b357516550b967b2/%%',
                    },
                    {
                        [l.Sxu.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ee3dacc851cba63a43/%%',
                        [l.Sxu.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa854b357516550b967b0/%%',
                    },
                ],
                B = A.gK.model('LumenThemes', { light: v.$B, dark: v.$B }),
                h = A.gK
                    .compose(A.gK.model('Lumen', { status: A.gK.maybeNull(A.gK.enumeration(Object.values(i))), themes: A.gK.maybeNull(B) }), v.XT)
                    .views((e) => ({
                        get isAwakened() {
                            return e.status === i.AWAKENED;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, A.Zn)(e);
                            return t.checkExperiment(l.zal.WebNextQueryToVibeXLumen, 'on');
                        },
                        get isTriedToLoadData() {
                            return !e.isNeededToLoad && !e.isLoading;
                        },
                        get playButtonShowDelay() {
                            var t;
                            let { experiments: a } = (0, A.Zn)(e),
                                i = null == (t = a.getExperiment(l.zal.WebNextQueryToVibeXLumen)) ? void 0 : t.value.playButtonShowDelay;
                            return 'number' != typeof i || Number.isNaN(i) ? 0 : Number(i);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, A.L3)(function* (t) {
                            let { lumenResource: a, modelActionsLogger: i } = (0, A._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    e.loadingState = l.GuX.PENDING;
                                    let { status: i, themes: r } = yield a.getLumen(void 0, { cacheControl: t ? 'no-cache' : void 0 });
                                    (e.status = i), (e.themes = { light: (0, l.pX4)(r.light.cover), dark: (0, l.pX4)(r.dark.cover) }), (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getFallbackImage: function () {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            return null !=
                                (e =
                                    b[
                                        ((e) => {
                                            let t = 0;
                                            for (let a = 0; a < e.length; a++) t = (Math.imul(t, 31) + e.charCodeAt(a)) >>> 0;
                                            return t;
                                        })(t) % b.length
                                    ])
                                ? e
                                : b[0];
                        },
                    }));
        },
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        80785: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { y: () => i }),
                (function (e) {
                    (e.MIX = 'MIX'), (e.Q2V = 'Q2V');
                })(i || (i = {}));
        },
        85015: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return (e.SMALL = 'small'), (e.LARGE = 'large'), e;
            })({});
        },
        85305: (e, t, a) => {
            'use strict';
            a.d(t, { VibeAgentCard: () => y });
            var i = a(32290),
                r = a(63618),
                n = a(96103),
                o = a(55178),
                l = a(59824),
                s = a(6752),
                d = a(14934),
                c = a(71926),
                u = a(49574),
                m = a(44574),
                g = a(64089),
                C = a(48472),
                _ = a(85927),
                p = a.n(_);
            let y = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: a = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: _ = 3, className: y } = e,
                    { pageId: A } = (0, u.$au)(),
                    { blockIdForFrom: v } = (0, u.N8n)(),
                    { ref: b, intersectionPropertyId: B } = (0, u.nMI)(),
                    { withPlusPopoverWeb: h } = (0, u.XCI)(),
                    [D, E] = (0, o.useState)(!1),
                    F = (0, g.useOnPinClick)(t),
                    { isPlaying: x, togglePlay: f } = (0, u.B0S)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: v }),
                    V = (0, u.brA)(),
                    w = (0, o.useCallback)(() => {
                        h || (f(), V(!x));
                    }, [h, f, V, x]),
                    S = (0, o.useCallback)(
                        () =>
                            (0, i.jsx)(
                                m.DM,
                                {
                                    className: (0, r.$)(p().playButton, p().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: w,
                                    isPlaying: x,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, w, x],
                    ),
                    N = (0, s.L)(() =>
                        (0, i.jsx)(
                            m.SU,
                            { isEnabled: h, isOpened: D, onOpenChange: E, placement: 'top', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: S },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    T = (0, s.L)(() =>
                        (0, i.jsx)(m.O0, { onClick: F, isPinned: t.isPinned, className: (0, r.$)(p().pinButton, p().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    k = (0, s.L)(() =>
                        (0, i.jsxs)('div', {
                            className: p().cover,
                            onClick: w,
                            children: [
                                t.agent && (0, i.jsx)(C.VibeCardView, { agent: t.agent, isPlaying: x }),
                                (0, i.jsx)(d.hg, { isVisible: D, className: p().controls, playControl: a ? N : void 0, pinControl: T }),
                            ],
                        }),
                    );
                return (0, i.jsx)(d.MN, {
                    ref: b,
                    className: (0, r.$)(p().root, y),
                    'data-intersection-property-id': B,
                    contentLinesCount: _,
                    view: k,
                    textPosition: 'center',
                    wrapperClassName: (0, r.$)({ [p().additionals_hide]: !n }),
                    title: (0, i.jsx)(c.Caption, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, i.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    ...(0, l.Am)(l.OA.vibe.VIBE_AGENT_CARD),
                });
            });
        },
        85927: (e) => {
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
        86249: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => r });
            let i = [
                    { name: 'carmine', start: 337, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                    { name: 'fuchsia', start: 1, end: 22, primary: '#F5007C', secondary: '#FFCCE6' },
                    { name: 'coral', start: 22, end: 45, primary: '#F53700', secondary: '#FFD7CC' },
                    { name: 'tangerine', start: 45, end: 67, primary: '#F56E00', secondary: '#FFE3CC' },
                    { name: 'clover', start: 67, end: 90, primary: '#34C03E', secondary: '#D7F4D9' },
                    { name: 'emerald', start: 90, end: 157, primary: '#00F5A9', secondary: '#CCFFEF' },
                    { name: 'turquoise', start: 157, end: 180, primary: '#00F5CD', secondary: '#CCFFF7' },
                    { name: 'aquamarine', start: 180, end: 202, primary: '#00D6F5', secondary: '#CCF9FF' },
                    { name: 'glacier', start: 202, end: 213, primary: '#5C8E9B', secondary: '#DFE9EC' },
                    { name: 'slate', start: 213, end: 225, primary: '#4F6C9B', secondary: '#DDE4EE' },
                    { name: 'sapphire', start: 225, end: 240, primary: '#0C41E8', secondary: '#CFDAFC' },
                    { name: 'indigo', start: 240, end: 255, primary: '#160CE8', secondary: '#D1CFFC' },
                    { name: 'amethyst', start: 255, end: 280, primary: '#5035C0', secondary: '#DDD7F4' },
                    { name: 'plum', start: 280, end: 300, primary: '#7C35C0', secondary: '#E6D7F4' },
                    { name: 'orchid', start: 300, end: 320, primary: '#BB1ADB', secondary: '#F3D1FA' },
                    { name: 'raspberry', start: 320, end: 337, primary: '#DB1A7D', secondary: '#FAD1E6' },
                ],
                r = (e) => i.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t < e.end : t >= e.start && t < e.end))(t, e));
        },
        90625: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => E });
            var i = a(32290),
                r = a(90040),
                n = a(57249),
                o = a(63618),
                l = a(96103),
                s = a(65493),
                d = a(55178),
                c = a(60900),
                u = a(59824),
                m = a(91027),
                g = a(50162),
                C = a(71926),
                _ = a(49574),
                p = a(44574);
            let y = async (e, t) => {
                let { loop: a = !1, markerId: i, frameRange: r, mode: n = 'forward' } = t,
                    o = null,
                    l = null;
                if (i) {
                    let t = e.markers().find((e) => e.name === i);
                    if (!t) return;
                    (o = t.time), (l = t.time + t.duration);
                } else if (r) {
                    var s;
                    (o = r.start), (l = null != (s = r.end) ? s : e.totalFrames);
                }
                null !== o &&
                    null !== l &&
                    (await Promise.all([e.setLoop(a), e.setMode(n), e.setSegment(o, l), e.setFrame('reverse' === n ? l : o)]), o !== l && (await e.play()));
            };
            var A = a(1001),
                v = a.n(A),
                b = a(49124);
            let B = { align: [0, 0.5], fit: 'contain' },
                h = { autoResize: !0, freezeOnOffscreen: !1 },
                D = s.default.default(
                    () =>
                        Promise.resolve()
                            .then(a.bind(a, 90040))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = b.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
            let E = (0, l.PA)((e) => {
                var t, a, r, n, l, s;
                let { animationByTheme: A, animationConfig: b, className: E, lumenImages: F, requestAwakeLumenModal: x, vibe: f } = e,
                    { formatMessage: V } = (0, c.A)(),
                    { pageId: w } = (0, _.$au)(),
                    { blockIdForFrom: S } = (0, _.N8n)(),
                    { sendPlaySearchFeedback: N } = (0, _.zEv)(),
                    T = (0, _.brA)(),
                    k = (0, _.fBs)(),
                    { ref: I, intersectionPropertyId: P } = (0, _.nMI)(),
                    L = (0, _.DPo)(),
                    { lumen: j } = (0, _.Pjs)(),
                    K = null != (a = L.theme) ? a : _.Sxu.Dark,
                    R = j.getFallbackImage(),
                    U = (0, d.useRef)(!1),
                    O = (0, d.useRef)(b[f ? 'idle' : 'loading']),
                    [M, z] = (0, d.useState)(null),
                    [$, W] = (0, d.useState)(!1),
                    {
                        isPlaying: Q,
                        togglePlay: X,
                        isCurrent: Y,
                    } = (0, _.B0S)({ blockIdForFrom: S, pageIdForFrom: w, seeds: null != (r = null == f ? void 0 : f.seeds) ? r : [] });
                (0, d.useEffect)(() => k(), [k]),
                    (0, d.useEffect)(() => {
                        if (!M || U.current) return;
                        let e = () => {
                            (U.current = !0), y(M, O.current);
                        };
                        return M.addEventListener('load', e), () => M.removeEventListener('load', e);
                    }, [M]),
                    (0, d.useEffect)(() => {
                        let e = ((e, t, a, i) =>
                            a || e === (null == i ? void 0 : i.loading)
                                ? t
                                    ? null == i
                                        ? void 0
                                        : i.playing
                                    : e === i.playing
                                      ? null == i
                                          ? void 0
                                          : i.paused
                                      : e === i.loading
                                        ? null == i
                                            ? void 0
                                            : i.idle
                                        : null
                                : null == i
                                  ? void 0
                                  : i.loading)(O.current, Q, !!f, b);
                        e && e !== O.current && ((O.current = e), M && U.current && y(M, e));
                    }, [b, M, Y, Q, f]);
                let q = (0, m.c)(() => {
                        $ || Q || (W(!0), null == N || N()), X(), T(!0);
                    }),
                    G = (0, m.c)(() => {
                        if (f) {
                            if (Q) {
                                X(), T(!1);
                                return;
                            }
                            if (j.isEnabled && !j.isAwakened) {
                                null == x || x(q);
                                return;
                            }
                            q();
                        }
                    }),
                    H = (0, m.c)((e) => {
                        (e.code === _.vLr.SPACE || e.code === _.vLr.ENTER) && (e.preventDefault(), G());
                    }),
                    Z = null != (n = null == f ? void 0 : f.title) ? n : V({ id: 'entity-names.query-to-vibe-loading-title' }),
                    J = null != (l = null == f ? void 0 : f.description) ? l : V({ id: 'entity-names.query-to-vibe-loading-description' }),
                    ee = !j.isEnabled || j.isTriedToLoadData,
                    et = j.isEnabled ? (null != (s = null == j || null == (t = j.themes) ? void 0 : t[K].uri) ? s : R[K]) : (null != F ? F : R)[K],
                    ea = f ? u.OA.vibe.QUERY_TO_VIBE_BLOCK : u.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK;
                return (0, i.jsxs)('div', {
                    'aria-label': Z,
                    'aria-description': J,
                    className: (0, o.$)(p.$f.root, v().root, { [v().root_loading]: !f }, E),
                    tabIndex: 0,
                    onClick: G,
                    onKeyDown: H,
                    ...(0, u.Am)(ea),
                    children: [
                        (0, i.jsx)(D, { className: v().comet, layout: B, src: A[null != K ? K : _.Sxu.Dark], renderConfig: h, dotLottieRefCallback: z }),
                        (0, i.jsxs)('div', {
                            className: v().iconContainer,
                            children: [
                                Y && (0, i.jsx)(p.PD, { className: v().iconPulse, stopAnimation: !Q }),
                                ee &&
                                    (0, i.jsx)(g.Image, {
                                        className: v().icon,
                                        src: et,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        withFallback: !1,
                                        withLoadingIndicator: !1,
                                    }),
                            ],
                        }),
                        (0, i.jsx)(p.ro, {
                            className: v().meta,
                            title: (0, i.jsx)(C.Caption, {
                                className: (0, o.$)(p.$f.text, p.$f.titleText, v().caption),
                                size: 'm',
                                variant: 'div',
                                type: 'text',
                                children: Z,
                            }),
                            description: J,
                            titleLineClamp: 2,
                        }),
                        f && (0, i.jsx)('div', { ref: I, 'data-intersection-property-id': P }),
                    ],
                });
            });
        },
        98925: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
    },
]);
