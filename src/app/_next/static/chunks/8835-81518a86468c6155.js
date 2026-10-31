(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8835],
    {
        6900: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i, o: () => a });
            var r = n(8655);
            let a = { [r.S.Dark]: 'ym-dark-theme', [r.S.Light]: 'ym-light-theme' },
                i = (e) => {
                    switch (e) {
                        case r.S.Light:
                        case r.S.Dark:
                            return a[e];
                        default:
                            return '';
                    }
                };
        },
        7019: (e) => {
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
        9184: (e) => {
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
        10829: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => y });
            var r = n(88800),
                a = n(65724),
                i = n(84961),
                s = n(53548),
                o = n(17392),
                l = n(34126),
                c = n(39079),
                _ = n(72288),
                d = n(39267),
                u = n(13619),
                m = n(73805),
                p = n(15232),
                h = n(56712),
                g = n(26243),
                v = n.n(g);
            let y = (0, i.PA)((e) => {
                var t;
                let {
                        track: n,
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
                    S = (0, c.D)({ playContextParams: i, entityId: n.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, _.g)(),
                    M = (0, l.X)(n.trackSource, { isMobile: L }),
                    j = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: n.isAvailable,
                                isDisliked: n.isDisliked,
                                coverUri: n.coverUri,
                                title: n.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...e,
                            }),
                        [T, n.coverUri, n.isAvailable, n.isDisliked, n.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, a.$)(g, { [v().trackWithDots]: y, [v().important]: y }),
                    track: n,
                    beforeBlock: y ? (0, r.jsx)(u.O, { className: (0, a.$)(v().dots, x), isDragging: f }) : void 0,
                    meta: (0, r.jsx)(p.j, { withArtistLink: M, beforeTitle: A, track: n, ignoreDislikedStyles: T, withSecondaryColor: E }),
                    playButtonCellRender: j,
                    controls: (0, r.jsx)(m.Q, {
                        track: n,
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
        14912: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => a });
            var r = n(53548);
            let a = () =>
                (0, r.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        28119: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => i });
            var r = n(72288),
                a = n(97956);
            let i = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: n },
                    } = (0, r.g)(),
                    i = e.checkExperiment(a.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(a.z.WebNextQueryToVibe, 'on') && (!i || !!n);
            };
        },
        29126: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        32353: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r, u: () => a });
            var r = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                a = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => M });
            var r = n(88800),
                a = n(65724),
                i = n(84961),
                s = n(53548),
                o = n(2058),
                l = n(88969);
            n(30282);
            var c = n(96817),
                _ = n(52300),
                d = n(29504),
                u = n(78793),
                m = n(92716),
                p = n(99984),
                h = n(90780),
                g = n(65523),
                v = n(14518),
                y = n(44230),
                f = n(4370),
                x = n(72288),
                T = n(97956),
                E = n(56248),
                b = n(90688),
                w = n(78940);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = n(96856),
                C = n.n(A);
            let N = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { slam: s } = (0, x.g)(),
                    { contentRef: o } = (0, y.g)(),
                    _ = (0, w.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(C().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(E.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(C().navigation, { [C().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: i,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(C().content, { [C().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(b._V, { className: C().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, r.jsx)(d.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(d.HL, {
                                            className: C().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: C().button,
                                        onClick: _,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            className: C().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = n(9184),
                L = n.n(S);
            let M = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { formatMessage: b } = (0, o.A)(),
                    w = (0, s.useContext)(x.P),
                    k = null == w ? void 0 : w.experiments.checkExperiment(T.z.WebNextUnstableMusicScreen, 'on'),
                    A = b(k ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let i = (0, u.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, p.z5)(t.evgenInstance, i);
                    }, [t, e, n, r, a]);
                })(A);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, v.$)(),
                            r = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let a = (0, u.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, n, r]),
                        };
                    })(),
                    S = (0, s.useCallback)(() => {
                        (C(), (window.location.href = f.Z.main.href));
                    }, [C]),
                    { contentRef: M } = (0, y.g)();
                return k
                    ? (0, r.jsx)(N, { className: t, withBackwardControl: n, onBack: i })
                    : (0, r.jsxs)('div', {
                          className: (0, a.$)(L().root, t),
                          children: [
                              n &&
                                  (0, r.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(L().navigation, { [L().navigation_desktop]: !M }),
                                      withForwardControl: !1,
                                      onBackwardClick: i,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, a.$)(L().content, { [L().content_shrink]: !n }),
                                  children: [
                                      (0, r.jsx)(_.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(d.DZ, { className: (0, a.$)(L().title, L().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, r.jsxs)(d.HL, {
                                          className: (0, a.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: S,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33586: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => s });
            var r = n(88800),
                a = n(53548),
                i = n(12241);
            let s = (e) => {
                let { sourceContextData: t, children: n } = e,
                    s = (0, a.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, r.jsx)(i.l.Provider, { value: s, children: n });
            };
        },
        34250: (e) => {
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
        39585: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => u });
            var r = n(88800),
                a = n(65724),
                i = n(72288),
                s = n(8655),
                o = n(44378),
                l = n(82039),
                c = n.n(l);
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
                    let { className: t, ...n } = e,
                        { lumen: s } = (0, i.g)();
                    return (0, r.jsx)(o.D, {
                        className: (0, a.$)(c().root, t),
                        lumenImages: s.getFallbackImage(n.vibe.seeds[0]),
                        animationByTheme: _,
                        animationConfig: d,
                        ...n,
                    });
                };
        },
        44378: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => Y });
            var r = n(88800),
                a = n(13758),
                i = n(57249),
                s = n(65724),
                o = n(84961),
                l = n(6087),
                c = n(53548),
                _ = n(2058),
                d = n(58390),
                u = n(92716),
                m = n(17392),
                p = n(29993),
                h = n(90688),
                g = n(29504),
                v = n(28163),
                y = n(96527),
                f = n(76675),
                x = n(34500),
                T = n(28830),
                E = n(14518),
                b = n(81438),
                w = n(55693),
                k = n(47964),
                A = n(72288),
                C = n(8655),
                N = n(69704),
                S = n(49176),
                L = n(34303),
                M = n(76168),
                j = n(62270),
                W = n.n(j),
                D = n(76816),
                I = n(34945);
            let R = async (e, t) => {
                let { loop: n = !1, markerId: r, frameRange: a, mode: i = 'forward' } = t,
                    s = null,
                    o = null;
                if (r) {
                    let t = e.markers().find((e) => e.name === r);
                    if (!t) return;
                    ((s = t.time), (o = t.time + t.duration));
                } else if (a) {
                    var l;
                    ((s = a.start), (o = null != (l = a.end) ? l : e.totalFrames));
                }
                null !== s &&
                    null !== o &&
                    (await Promise.all([e.setLoop(n), e.setMode(i), e.setSegment(s, o), e.setFrame('reverse' === i ? o : s)]), s !== o && (await e.play()));
            };
            var B = n(7019),
                P = n.n(B),
                O = n(49124);
            let U = { align: [0, 0.5], fit: 'contain' },
                z = { autoResize: !0, freezeOnOffscreen: !1 },
                V = l.default.default(
                    () =>
                        Promise.resolve()
                            .then(n.bind(n, 13758))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = O.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(i, e).href);
            }
            let Y = (0, o.PA)((e) => {
                var t, n, a, i, o;
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
                    en = (0, N.W)(),
                    { lumen: er } = (0, A.g)(),
                    { cover: ea, fallbackImage: ei } = (0, b.x)(),
                    es = 'true' === K.get(L.K.LUMEN_AWAKE_PARAM),
                    eo = er.isEnabled && !er.isTriedToLoadData,
                    el = er.isEnabled && !er.isAwakened,
                    ec = null != (t = en.theme) ? t : C.S.Dark,
                    e_ = (0, c.useRef)(!1),
                    ed = (0, c.useRef)(j[$ ? 'idle' : 'loading']),
                    eu = (0, c.useRef)(void 0),
                    [em, ep] = (0, c.useState)(null),
                    {
                        isPlaying: eh,
                        togglePlay: eg,
                        isCurrent: ev,
                    } = (0, k.B)({ blockIdForFrom: G, pageIdForFrom: Q, seeds: null != (n = null == $ ? void 0 : $.seeds) ? n : [] });
                ((0, c.useEffect)(() => J(), [J]),
                    (0, c.useEffect)(() => {
                        if (!em || e_.current) return;
                        let e = () => {
                            ((e_.current = !0), R(em, ed.current));
                        };
                        return (em.addEventListener('load', e), () => em.removeEventListener('load', e));
                    }, [em]),
                    (0, c.useEffect)(() => {
                        let e = ((e, t, n, r) =>
                            n || e === (null == r ? void 0 : r.loading)
                                ? t
                                    ? null == r
                                        ? void 0
                                        : r.playing
                                    : e === r.playing
                                      ? null == r
                                          ? void 0
                                          : r.paused
                                      : e === r.loading
                                        ? null == r
                                            ? void 0
                                            : r.idle
                                        : null
                                : null == r
                                  ? void 0
                                  : r.loading)(ed.current, eh, !!$, j);
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
                    eb = !er.isEnabled || er.isTriedToLoadData,
                    ew = er.isEnabled ? ea : null != (o = null == O ? void 0 : O[ec]) ? o : ei,
                    ek = $ ? m.OA.vibe.QUERY_TO_VIBE_BLOCK : m.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    eA = $ && (!er.isEnabled || er.isTriedToLoadData);
                return (0, r.jsxs)('div', {
                    'aria-label': eT,
                    'aria-description': eE,
                    className: (0, s.$)(W().root, P().root, { [P().root_loading]: !$ }, B),
                    tabIndex: 0,
                    onClick: ef,
                    onKeyDown: ex,
                    'data-test-id': ek,
                    children: [
                        (0, r.jsx)(V, { className: P().comet, layout: U, src: l[null != ec ? ec : C.S.Dark], renderConfig: z, dotLottieRefCallback: ep }),
                        (0, r.jsxs)('div', {
                            className: P().iconContainer,
                            children: [
                                ev && (0, r.jsx)(I.P, { className: P().iconPulse, stopAnimation: !eh }),
                                eb && (0, r.jsx)(h._V, { className: P().icon, src: ew, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, r.jsx)(D.r, {
                            className: P().meta,
                            title: (0, r.jsx)(g.HL, { className: (0, s.$)(W().text, W().titleText, P().caption), size: 'm', variant: 'div', type: 'text', children: eT }),
                            description: eE,
                            titleLineClamp: 2,
                        }),
                        eA && (0, r.jsx)('div', { ref: ee, 'data-intersection-property-id': et }),
                    ],
                });
            });
        },
        49176: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => r });
            var r = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        62270: (e) => {
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
        69048: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => j });
            var r = n(88800),
                a = n(53548),
                i = n(92716),
                s = n(29993),
                o = n(79070),
                l = n(12816),
                c = n(77948),
                _ = n(59844),
                d = n(72288),
                u = n(65724),
                m = n(84961),
                p = n(2058),
                h = n(17392),
                g = n(96817),
                v = n(11372),
                y = n(78793),
                f = n(99984),
                x = n(90780),
                T = n(65523),
                E = n(37436),
                b = n(46166),
                w = n(14518),
                k = n(2345),
                A = n(51611),
                C = n(6900),
                N = n(8655),
                S = n(29126),
                L = n.n(S);
            let M = (0, m.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: n,
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
                                n = (0, T.U)(),
                                { pageId: r, pageStyle: a, pagePlacement: o } = (0, w.$)(),
                                { objectId: c = '', objectType: _ } = (0, b.J)();
                            return (0, s.c)((s) => {
                                let { actionType: d, mainObjectType: u = _, mainObjectId: m = c, userInteractionType: p = i.UserInteractionType.Tap } = s;
                                if (!e || !t || !r || !l.xK.includes(r) || !l.fD.includes(r)) return;
                                let h = E.W[r];
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
                                    logger: n,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                g && (0, f.bv)(e.evgenInstance, g);
                            });
                        })(),
                        I = (0, k.l)({ mainObjectType: i.DomainObjectType.Lumen }),
                        R = (0, s.c)(async (e) => {
                            let t = n.isAwakened;
                            try {
                                e || (await n.getData(!0));
                            } finally {
                                (e || (!t && n.isAwakened && D({ actionType: i.ActionType.LumenAwakened }), I(!1), (m.current = null)), M(e));
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
                            let e = window.setTimeout(() => W(!0), n.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [S, n.playButtonShowDelay]),
                        (0, r.jsxs)(v.a, {
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
                                (0, r.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: L().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(_),
                                    'data-test-id': h.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, r.jsx)(g.$, {
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
                        n = (0, s.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, o.L)(() => {
                            if (e.isEnabled)
                                return (0, r.jsx)(_.n, {
                                    pageEntityId: '',
                                    pageId: l._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: i.PageStyles.Sheet,
                                    pagePlacement: i.PagePlacements.Bottom,
                                    children: (0, r.jsx)(c.B, {
                                        objectId: '',
                                        objectType: i.DomainObjectType.Lumen,
                                        children: (0, r.jsx)(M, { requestAwakeLumenModalRef: t }),
                                    }),
                                });
                        }),
                        requestAwakeLumenModal: n,
                    };
                };
        },
        76168: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => s });
            var r = n(29993),
                a = n(72288),
                i = n(14912);
            let s = () => {
                let { location: e } = (0, a.g)(),
                    t = (0, i.X)();
                return (0, r.c)((n) => {
                    let r = new URL(window.location.href);
                    n.forEach((e) => r.searchParams.delete(e));
                    let a = r.toString();
                    (t(a), e.setHref(a), e.setSearchParams(r.searchParams.toString()));
                });
            };
        },
        76816: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => m });
            var r = n(88800),
                a = n(65724),
                i = n(2058),
                s = n(17392),
                o = n(79070),
                l = n(52300),
                c = n(29504),
                _ = n(90224),
                d = n(34250),
                u = n.n(d);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: n,
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
                        let t = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, r.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof f &&
                                    f > 0 &&
                                    (0, r.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': b({ id: 'entity-names.likes-counter' }, { counter: f }),
                                        'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, r.jsx)(l.I, {
                                                className: u().icon,
                                                variant: x ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, r.jsx)(c.HL, {
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
                                (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: T }),
                            ],
                        });
                    });
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: n, [u().root_disliked]: t }, h),
                    'data-test-id': s.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, r.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, r.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: g }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: E,
                                    type: 'text',
                                    'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        v,
                                        g &&
                                            (0, r.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(g),
                                            }),
                                    ],
                                }),
                                p && (0, r.jsx)(_.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        d &&
                            (0, r.jsx)(c.HL, {
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
        81192: (e) => {
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
        81438: (e, t, n) => {
            'use strict';
            n.d(t, { x: () => s });
            var r = n(72288),
                a = n(8655),
                i = n(69704);
            let s = () => {
                var e, t, n, s, o, l;
                let { lumen: c } = (0, r.g)(),
                    { theme: _ } = (0, i.W)(),
                    d = null != _ ? _ : a.S.Dark,
                    u = null == (e = c.themes) ? void 0 : e[d],
                    m = c.getFallbackImage()[d],
                    p = null != (s = null == u ? void 0 : u.cover.uri) ? s : m;
                return {
                    cover: p,
                    fullCover: null != (o = null == u || null == (t = u.fullCover) ? void 0 : t.uri) ? o : p,
                    faceCover: null != (l = null == u || null == (n = u.faceCover) ? void 0 : n.uri) ? l : p,
                    solidColor: null == u ? void 0 : u.solidColor,
                    fallbackImage: m,
                };
            };
        },
        82039: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        94058: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => E });
            var r = n(88800),
                a = n(65724),
                i = n(14231),
                s = n(84961),
                o = n(53548),
                l = n.t(o, 2),
                c = n(17392),
                _ = n(88021),
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
                    var n = u[t];
                    if (void 0 !== n) return n.exports;
                    var r = (u[t] = { exports: {} });
                    return (d[t](r, r.exports, e), r.exports);
                })(810);
                m.useForwardRef = function (t, n) {
                    let r = (0, e.useRef)(n);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(r.current) : (t.current = r.current));
                        }, [t]),
                        r
                    );
                };
            })(),
                m.__esModule);
            var p = m.useForwardRef,
                h = n(32353),
                g = n(72288),
                v = n(31764),
                y = n(81192),
                f = n.n(y);
            let x = { [h.u.Desktop]: { start: 40, end: 20 }, [h.u.Mobile]: { start: 40, end: 40 } },
                T = (0, s.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: n,
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
                                let n = null == (t = b.current) ? void 0 : t.children[e],
                                    { current: r } = b;
                                if (!r || !(n instanceof HTMLElement)) return;
                                if (n.offsetLeft - r.scrollLeft < C) {
                                    r.scrollLeft = n.offsetLeft - C;
                                    return;
                                }
                                let a = r.scrollLeft + r.clientWidth - n.offsetLeft - n.offsetWidth;
                                a < N && (r.scrollLeft -= a - N);
                            },
                            [b, N, C],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                var t, r;
                                (S(e), null == (t = (r = n.props).onTabChange) || t.call(r, e));
                            },
                            [n, S],
                        ),
                        M = (0, o.cloneElement)(n, { forwardRef: b, className: (0, a.$)(f().wrapper, n.props.className, f().carousel, f().important), onTabChange: L });
                    return (0, r.jsxs)('div', {
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
                            (0, r.jsx)('div', { className: f().list, children: M }),
                            !E &&
                                (0, r.jsx)(v.X, {
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
                E = (0, o.forwardRef)((e, t) => (0, r.jsx)(T, { forwardRef: t, ...e }));
        },
        96856: (e) => {
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
    },
]);
