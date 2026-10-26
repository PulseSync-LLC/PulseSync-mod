(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2445],
    {
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        12714: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i, o: () => a });
            var n = r(49337);
            let a = { [n.S.Dark]: 'ym-dark-theme', [n.S.Light]: 'ym-light-theme' },
                i = (e) => {
                    switch (e) {
                        case n.S.Light:
                        case n.S.Dark:
                            return a[e];
                        default:
                            return '';
                    }
                };
        },
        16351: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => Y });
            var n = r(25839),
                a = r(10648),
                i = r(57249),
                s = r(82298),
                o = r(88204),
                l = r(13624),
                c = r(74631),
                _ = r(39004),
                d = r(84059),
                u = r(44031),
                m = r(61493),
                p = r(71035),
                h = r(23818),
                g = r(4254),
                v = r(61777),
                y = r(29481),
                f = r(47009),
                x = r(26742),
                T = r(52512),
                E = r(97952),
                b = r(19156),
                w = r(85743),
                k = r(87201),
                A = r(27954),
                C = r(49337),
                N = r(96618),
                S = r(17226),
                L = r(6969),
                M = r(63494),
                j = r(79856),
                W = r.n(j),
                D = r(77698),
                I = r(74987);
            let R = async (e, t) => {
                let { loop: r = !1, markerId: n, frameRange: a, mode: i = 'forward' } = t,
                    s = null,
                    o = null;
                if (n) {
                    let t = e.markers().find((e) => e.name === n);
                    if (!t) return;
                    ((s = t.time), (o = t.time + t.duration));
                } else if (a) {
                    var l;
                    ((s = a.start), (o = null != (l = a.end) ? l : e.totalFrames));
                }
                null !== s &&
                    null !== o &&
                    (await Promise.all([e.setLoop(r), e.setMode(i), e.setSegment(s, o), e.setFrame('reverse' === i ? o : s)]), s !== o && (await e.play()));
            };
            var B = r(42393),
                P = r.n(B),
                O = r(49124);
            let U = { align: [0, 0.5], fit: 'contain' },
                z = { autoResize: !0, freezeOnOffscreen: !1 },
                V = l.default.default(
                    () =>
                        Promise.resolve()
                            .then(r.bind(r, 10648))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = O.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(i, e).href);
            }
            let Y = (0, o.PA)((e) => {
                var t, r, a, i, o;
                let { animationByTheme: l, animationConfig: j, className: B, lumenImages: O, requestAwakeLumenModal: Y, vibe: $ } = e,
                    { formatMessage: F } = (0, _.A)(),
                    K = (0, d.useSearchParams)(),
                    H = (0, M.z)(),
                    { pageId: Q } = (0, E.$)(),
                    { blockIdForFrom: G } = (0, x.N)(),
                    { sendPlaySearchFeedback: q } = (0, w.z)(),
                    X = (0, f.b)(),
                    Z = (0, y.N)(),
                    J = (0, v.f)(),
                    { ref: ee, intersectionPropertyId: et } = (0, T.n)(),
                    er = (0, N.W)(),
                    { lumen: en } = (0, A.g)(),
                    { cover: ea, fallbackImage: ei } = (0, b.x)(),
                    es = 'true' === K.get(L.K.LUMEN_AWAKE_PARAM),
                    eo = en.isEnabled && !en.isTriedToLoadData,
                    el = en.isEnabled && !en.isAwakened,
                    ec = null != (t = er.theme) ? t : C.S.Dark,
                    e_ = (0, c.useRef)(!1),
                    ed = (0, c.useRef)(j[$ ? 'idle' : 'loading']),
                    eu = (0, c.useRef)(void 0),
                    [em, ep] = (0, c.useState)(null),
                    {
                        isPlaying: eh,
                        togglePlay: eg,
                        isCurrent: ev,
                    } = (0, k.B)({ blockIdForFrom: G, pageIdForFrom: Q, seeds: null != (r = null == $ ? void 0 : $.seeds) ? r : [] });
                ((0, c.useEffect)(() => J(), [J]),
                    (0, c.useEffect)(() => {
                        if (!em || e_.current) return;
                        let e = () => {
                            ((e_.current = !0), R(em, ed.current));
                        };
                        return (em.addEventListener('load', e), () => em.removeEventListener('load', e));
                    }, [em]),
                    (0, c.useEffect)(() => {
                        let e = ((e, t, r, n) =>
                            r || e === (null == n ? void 0 : n.loading)
                                ? t
                                    ? null == n
                                        ? void 0
                                        : n.playing
                                    : e === n.playing
                                      ? null == n
                                          ? void 0
                                          : n.paused
                                      : e === n.loading
                                        ? null == n
                                            ? void 0
                                            : n.idle
                                        : null
                                : null == n
                                  ? void 0
                                  : n.loading)(ed.current, eh, !!$, j);
                        e && e !== ed.current && ((ed.current = e), em && e_.current && R(em, e));
                    }, [j, em, ev, eh, $]));
                let ey = (0, p.c)(() => {
                    (eu.current === (null == $ ? void 0 : $.seedsId) || eh || ((eu.current = null == $ ? void 0 : $.seedsId), null == q || q()), eg(), X(!0));
                });
                (0, c.useEffect)(() => {
                    es && !eo && $ && (el && (null == Y || Y(ey)), H([L.K.LUMEN_AWAKE_PARAM]));
                }, [Y, H, es, el, eo, ey, $]);
                let ef = (0, p.c)(() => {
                        if ($) {
                            if (eh) {
                                (eg(), X(!1));
                                return;
                            }
                            if (el) {
                                (Z({ to: u.AppScreen.LumenAwakeningScreen }), null == Y || Y(ey));
                                return;
                            }
                            ey();
                        }
                    }),
                    ex = (0, p.c)((e) => {
                        (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), ef());
                    }),
                    eT = null != (a = null == $ ? void 0 : $.title) ? a : F({ id: 'entity-names.query-to-vibe-loading-title' }),
                    eE = null != (i = null == $ ? void 0 : $.description) ? i : F({ id: 'entity-names.query-to-vibe-loading-description' }),
                    eb = !en.isEnabled || en.isTriedToLoadData,
                    ew = en.isEnabled ? ea : null != (o = null == O ? void 0 : O[ec]) ? o : ei,
                    ek = $ ? m.OA.vibe.QUERY_TO_VIBE_BLOCK : m.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    eA = $ && (!en.isEnabled || en.isTriedToLoadData);
                return (0, n.jsxs)('div', {
                    'aria-label': eT,
                    'aria-description': eE,
                    className: (0, s.$)(W().root, P().root, { [P().root_loading]: !$ }, B),
                    tabIndex: 0,
                    onClick: ef,
                    onKeyDown: ex,
                    'data-test-id': ek,
                    children: [
                        (0, n.jsx)(V, { className: P().comet, layout: U, src: l[null != ec ? ec : C.S.Dark], renderConfig: z, dotLottieRefCallback: ep }),
                        (0, n.jsxs)('div', {
                            className: P().iconContainer,
                            children: [
                                ev && (0, n.jsx)(I.P, { className: P().iconPulse, stopAnimation: !eh }),
                                eb && (0, n.jsx)(h._V, { className: P().icon, src: ew, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, n.jsx)(D.r, {
                            className: P().meta,
                            title: (0, n.jsx)(g.HL, { className: (0, s.$)(W().text, W().titleText, P().caption), size: 'm', variant: 'div', type: 'text', children: eT }),
                            description: eE,
                            titleLineClamp: 2,
                        }),
                        eA && (0, n.jsx)('div', { ref: ee, 'data-intersection-property-id': et }),
                    ],
                });
            });
        },
        17226: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        19e3: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => s });
            var n = r(25839),
                a = r(74631),
                i = r(10407);
            let s = (e) => {
                let { sourceContextData: t, children: r } = e,
                    s = (0, a.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, n.jsx)(i.l.Provider, { value: s, children: r });
            };
        },
        19156: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => s });
            var n = r(27954),
                a = r(49337),
                i = r(96618);
            let s = () => {
                var e, t, r, s, o, l;
                let { lumen: c } = (0, n.g)(),
                    { theme: _ } = (0, i.W)(),
                    d = null != _ ? _ : a.S.Dark,
                    u = null == (e = c.themes) ? void 0 : e[d],
                    m = c.getFallbackImage()[d],
                    p = null != (s = null == u ? void 0 : u.cover.uri) ? s : m;
                return {
                    cover: p,
                    fullCover: null != (o = null == u || null == (t = u.fullCover) ? void 0 : t.uri) ? o : p,
                    faceCover: null != (l = null == u || null == (r = u.faceCover) ? void 0 : r.uri) ? l : p,
                    solidColor: null == u ? void 0 : u.solidColor,
                    fallbackImage: m,
                };
            };
        },
        22034: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        26237: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => i });
            var n = r(27954),
                a = r(44806);
            let i = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: r },
                    } = (0, n.g)(),
                    i = e.checkExperiment(a.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(a.z.WebNextQueryToVibe, 'on') && (!i || !!r);
            };
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        40701: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        42393: (e) => {
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
        51707: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => u });
            var n = r(25839),
                a = r(82298),
                i = r(27954),
                s = r(49337),
                o = r(16351),
                l = r(40701),
                c = r.n(l);
            let _ = {
                    [s.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [s.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                d = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                u = (e) => {
                    let { className: t, ...r } = e,
                        { lumen: s } = (0, i.g)();
                    return (0, n.jsx)(o.D, {
                        className: (0, a.$)(c().root, t),
                        lumenImages: s.getFallbackImage(r.vibe.seeds[0]),
                        animationByTheme: _,
                        animationConfig: d,
                        ...r,
                    });
                };
        },
        51859: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, u: () => a });
            var n = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                a = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        53168: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        63494: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => s });
            var n = r(71035),
                a = r(27954),
                i = r(83918);
            let s = () => {
                let { location: e } = (0, a.g)(),
                    t = (0, i.X)();
                return (0, n.c)((r) => {
                    let n = new URL(window.location.href);
                    r.forEach((e) => n.searchParams.delete(e));
                    let a = n.toString();
                    (t(a), e.setHref(a), e.setSearchParams(n.searchParams.toString()));
                });
            };
        },
        64715: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => M });
            var n = r(25839),
                a = r(82298),
                i = r(88204),
                s = r(74631),
                o = r(39004),
                l = r(8487);
            r(93588);
            var c = r(4071),
                _ = r(66738),
                d = r(4254),
                u = r(67379),
                m = r(44031),
                p = r(87277),
                h = r(59450),
                g = r(84e3),
                v = r(97952),
                y = r(89192),
                f = r(53712),
                x = r(27954),
                T = r(44806),
                E = r(15270),
                b = r(23818),
                w = r(85686);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = r(27990),
                C = r.n(A);
            let N = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { slam: i } = (0, x.g)(),
                    { contentRef: s } = (0, y.g)(),
                    o = (0, w.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(C().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(E.L, { withBackwardFallback: '/', className: (0, a.$)(C().navigation, { [C().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, a.$)(C().content, { [C().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(b._V, { className: C().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, n.jsx)(d.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(d.HL, {
                                            className: C().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                i.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: C().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            className: C().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = r(68854),
                L = r.n(S);
            let M = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: i } = (0, o.A)(),
                    b = (0, s.useContext)(x.P),
                    w = null == b ? void 0 : b.experiments.checkExperiment(T.z.WebNextUnstableMusicScreen, 'on'),
                    k = i(w ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: n } = (0, v.$)(),
                        a = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let i = (0, u.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: n,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, p.z5)(t.evgenInstance, i);
                    }, [t, e, r, n, a]);
                })(k);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, v.$)(),
                            n = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let a = (0, u.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, r, n]),
                        };
                    })(),
                    C = (0, s.useCallback)(() => {
                        (A(), (window.location.href = f.Z.main.href));
                    }, [A]),
                    { contentRef: S } = (0, y.g)();
                return w
                    ? (0, n.jsx)(N, { className: t, withBackwardControl: r })
                    : (0, n.jsxs)('div', {
                          className: (0, a.$)(L().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(L().navigation, { [L().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, a.$)(L().content, { [L().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(_.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, a.$)(L().title, L().important), variant: 'h3', size: 'xs', children: k }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, a.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: C,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        68854: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        69041: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => E });
            var n = r(25839),
                a = r(82298),
                i = r(46189),
                s = r(88204),
                o = r(74631),
                l = r.t(o, 2),
                c = r(61493),
                _ = r(9911),
                d = {
                    810: (e) => {
                        e.exports = l;
                    },
                },
                u = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = u[t];
                    if (void 0 !== r) return r.exports;
                    var n = (u[t] = { exports: {} });
                    return (d[t](n, n.exports, e), n.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let n = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(n.current) : (t.current = n.current));
                        }, [t]),
                        n
                    );
                };
            })(),
                m.__esModule);
            var p = m.useForwardRef,
                h = r(51859),
                g = r(27954),
                v = r(80986),
                y = r(22034),
                f = r.n(y);
            let x = { [h.u.Desktop]: { start: 40, end: 20 }, [h.u.Mobile]: { start: 40, end: 40 } },
                T = (0, s.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: s,
                            scrollPadding: l,
                            isCarouselBetweenArrows: d = !1,
                            controlsWrapperClassName: u,
                            buttonSize: m,
                            buttonVariant: y,
                            withSecondaryColor: T,
                        } = e,
                        {
                            settings: { isMobile: E },
                        } = (0, g.g)(),
                        b = p(s, null),
                        { shouldBackwardButtonBeDisabled: w, shouldForwardButtonBeDisabled: k, shouldHideControls: A } = (0, _.Y)(b),
                        [C, N] = (0, o.useMemo)(() => {
                            let e = (0, i.A)(x, l);
                            return [E ? e[h.u.Mobile].start : e[h.u.Desktop].start, E ? e[h.u.Mobile].end : e[h.u.Desktop].end];
                        }, [l, E]),
                        S = (0, o.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = b.current) ? void 0 : t.children[e],
                                    { current: n } = b;
                                if (!n || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - n.scrollLeft < C) {
                                    n.scrollLeft = r.offsetLeft - C;
                                    return;
                                }
                                let a = n.scrollLeft + n.clientWidth - r.offsetLeft - r.offsetWidth;
                                a < N && (n.scrollLeft -= a - N);
                            },
                            [b, N, C],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                var t, n;
                                (S(e), null == (t = (n = r.props).onTabChange) || t.call(n, e));
                            },
                            [r, S],
                        ),
                        M = (0, o.cloneElement)(r, { forwardRef: b, className: (0, a.$)(f().wrapper, r.props.className, f().carousel, f().important), onTabChange: L });
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(
                            f().root,
                            {
                                [f().root_carouselBetweenArrows]: d,
                                [f().root_arrowLeft_hidden]: w,
                                [f().root_arrowRight_hidden]: k,
                                [f().root_arrow_hidden]: w && k && A,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, n.jsx)('div', { className: f().list, children: M }),
                            !E &&
                                (0, n.jsx)(v.X, {
                                    className: (0, a.$)(f().buttons, u),
                                    carouselRef: b,
                                    backwardControlClassName: f().control,
                                    forwardControlClassName: f().control,
                                    withSecondaryColor: T,
                                    buttonSize: m,
                                    buttonVariant: y,
                                }),
                        ],
                    });
                }),
                E = (0, o.forwardRef)((e, t) => (0, n.jsx)(T, { forwardRef: t, ...e }));
        },
        72968: (e) => {
            e.exports = {
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
        77698: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => m });
            var n = r(25839),
                a = r(82298),
                i = r(39004),
                s = r(61493),
                o = r(49656),
                l = r(66738),
                c = r(4254),
                _ = r(32652),
                d = r(72968),
                u = r.n(d);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: r,
                        description: d,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: h,
                        version: g,
                        title: v,
                        artistsComponent: y,
                        likesCount: f,
                        isLiked: x,
                        releaseYear: T,
                        titleLineClamp: E = 1,
                    } = e,
                    { formatMessage: b, formatNumber: w } = (0, i.A)(),
                    k = (0, o.L)(() => {
                        let e = null == y ? void 0 : y((0, a.$)(u().text, u().artistLink), (0, a.$)(u().text, u().artistCaption));
                        if (!e && !f) return;
                        let t = (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, n.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof f &&
                                    f > 0 &&
                                    (0, n.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': b({ id: 'entity-names.likes-counter' }, { counter: f }),
                                        'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, n.jsx)(l.I, {
                                                className: u().icon,
                                                variant: x ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, n.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: w(f),
                                            }),
                                        ],
                                    }),
                                !!f && e && t,
                                e,
                                !!T && e && t,
                                (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: T }),
                            ],
                        });
                    });
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: r, [u().root_disliked]: t }, h),
                    'data-test-id': s.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, n.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, n.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: g }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: E,
                                    type: 'text',
                                    'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        v,
                                        g &&
                                            (0, n.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(g),
                                            }),
                                    ],
                                }),
                                p && (0, n.jsx)(_.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        d &&
                            (0, n.jsx)(c.HL, {
                                className: (0, a.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: d,
                            }),
                        k,
                    ],
                });
            };
        },
        79856: (e) => {
            e.exports = {
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
        82196: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => j });
            var n = r(25839),
                a = r(74631),
                i = r(44031),
                s = r(71035),
                o = r(49656),
                l = r(20258),
                c = r(95314),
                _ = r(10322),
                d = r(27954),
                u = r(82298),
                m = r(88204),
                p = r(39004),
                h = r(61493),
                g = r(4071),
                v = r(35622),
                y = r(67379),
                f = r(87277),
                x = r(59450),
                T = r(84e3),
                E = r(79670),
                b = r(25488),
                w = r(97952),
                k = r(83243),
                A = r(96433),
                C = r(12714),
                N = r(49337),
                S = r(53168),
                L = r.n(S);
            let M = (0, m.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: r,
                            settings: { isMobile: o },
                        } = (0, d.g)(),
                        { formatMessage: c } = (0, p.A)(),
                        { language: _ } = (0, A.h)(),
                        m = (0, a.useRef)(null),
                        [S, M] = (0, a.useState)(!1),
                        [j, W] = (0, a.useState)(!1),
                        D = (() => {
                            let e = (0, x.st)(),
                                { hash: t } = (0, x.gf)(),
                                r = (0, T.U)(),
                                { pageId: n, pageStyle: a, pagePlacement: o } = (0, w.$)(),
                                { objectId: c = '', objectType: _ } = (0, b.J)();
                            return (0, s.c)((s) => {
                                let { actionType: d, mainObjectType: u = _, mainObjectId: m = c, userInteractionType: p = i.UserInteractionType.Tap } = s;
                                if (!e || !t || !n || !l.xK.includes(n) || !l.fD.includes(n)) return;
                                let h = E.W[n];
                                if (!h) return;
                                let g = (0, y.F)({
                                    params: {
                                        hash: t,
                                        pageId: h,
                                        pageStyle: a,
                                        pagePlacement: o,
                                        mainObjectType: u,
                                        mainObjectId: m,
                                        actionType: d,
                                        userInteractionType: p,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                g && (0, f.bv)(e.evgenInstance, g);
                            });
                        })(),
                        I = (0, k.l)({ mainObjectType: i.DomainObjectType.Lumen }),
                        R = (0, s.c)(async (e) => {
                            let t = r.isAwakened;
                            try {
                                e || (await r.getData(!0));
                            } finally {
                                (e || (!t && r.isAwakened && D({ actionType: i.ActionType.LumenAwakened }), I(!1), (m.current = null)), M(e));
                            }
                        }),
                        B = (0, s.c)(() => R(!1)),
                        P = (0, s.c)(() => {
                            var e;
                            (null == (e = m.current) || e.call(m), R(!1));
                        });
                    return (
                        (0, a.useEffect)(() => {
                            t.current = (e) => {
                                ((m.current = e), I(!0), M(!0));
                            };
                        }, [t, I]),
                        (0, a.useEffect)(() => {
                            if (!S) return void W(!1);
                            let e = window.setTimeout(() => W(!0), r.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [S, r.playButtonShowDelay]),
                        (0, n.jsxs)(v.a, {
                            open: S,
                            onOpenChange: R,
                            onClose: B,
                            placement: o ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, u.$)(L().root, (0, C.J)(N.S.Dark)),
                            headerClassName: L().header,
                            contentClassName: L().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: h.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': h.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, n.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: L().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(_),
                                    'data-test-id': h.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, n.jsx)(g.$, {
                                    className: (0, u.$)(L().playButton, j && L().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: P,
                                    'data-test-id': h.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                j = () => {
                    let { lumen: e } = (0, d.g)(),
                        t = (0, a.useRef)(() => void 0),
                        r = (0, s.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, o.L)(() => {
                            if (e.isEnabled)
                                return (0, n.jsx)(_.n, {
                                    pageEntityId: '',
                                    pageId: l._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: i.PageStyles.Sheet,
                                    pagePlacement: i.PagePlacements.Bottom,
                                    children: (0, n.jsx)(c.B, {
                                        objectId: '',
                                        objectType: i.DomainObjectType.Lumen,
                                        children: (0, n.jsx)(M, { requestAwakeLumenModalRef: t }),
                                    }),
                                });
                        }),
                        requestAwakeLumenModal: r,
                    };
                };
        },
        82967: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => y });
            var n = r(25839),
                a = r(82298),
                i = r(88204),
                s = r(74631),
                o = r(61493),
                l = r(54880),
                c = r(50209),
                _ = r(27954),
                d = r(6349),
                u = r(62661),
                m = r(2096),
                p = r(77737),
                h = r(69730),
                g = r(7929),
                v = r.n(g);
            let y = (0, i.PA)((e) => {
                var t;
                let {
                        track: r,
                        playContextParams: i,
                        className: g,
                        withDNDBlock: y,
                        isDragging: f,
                        draggingClassName: x,
                        ignoreDislikedStyles: T,
                        withSecondaryColor: E,
                        handleRemove: b,
                        withDislike: w,
                        withTrailer: k = !0,
                        beforeTitle: A,
                        removeButtonAriaLabel: C,
                        hideControls: N,
                    } = e,
                    S = (0, c.D)({ playContextParams: i, entityId: r.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, _.g)(),
                    M = (0, l.X)(r.trackSource, { isMobile: L }),
                    j = (0, s.useCallback)(
                        (e) =>
                            (0, n.jsx)(d.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...e,
                            }),
                        [T, r.coverUri, r.isAvailable, r.isDisliked, r.title],
                    );
                return (0, n.jsx)(h.C, {
                    className: (0, a.$)(g, { [v().trackWithDots]: y, [v().important]: y }),
                    track: r,
                    beforeBlock: y ? (0, n.jsx)(u.O, { className: (0, a.$)(v().dots, x), isDragging: f }) : void 0,
                    meta: (0, n.jsx)(p.j, { withArtistLink: M, beforeTitle: A, track: r, ignoreDislikedStyles: T, withSecondaryColor: E }),
                    playButtonCellRender: j,
                    controls: (0, n.jsx)(m.Q, {
                        track: r,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: null == (t = i.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: E,
                        handleRemove: b,
                        withDislike: w,
                        withTrailer: k,
                        removeButtonAriaLabel: C,
                        hideControls: N,
                    }),
                    ...S,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        83918: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => a });
            var n = r(74631);
            let a = () =>
                (0, n.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
    },
]);
