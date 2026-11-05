(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1986],
    {
        6900: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r, o: () => a });
            var i = n(8655);
            let a = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return a[e];
                        default:
                            return '';
                    }
                };
        },
        7019: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                root_withControls: 'QueryToVibeBase_root_withControls__h9kvG',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
                controls: 'QueryToVibeBase_controls__MZ7Wo',
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
            n.d(t, { K: () => g });
            var i = n(88800),
                a = n(65724),
                r = n(84961),
                o = n(53548),
                s = n(17392),
                l = n(34126),
                c = n(39079),
                d = n(72288),
                _ = n(39267),
                u = n(13619),
                m = n(73805),
                p = n(15232),
                x = n(56712),
                v = n(26243),
                h = n.n(v);
            let g = (0, r.PA)((e) => {
                var t;
                let {
                        track: n,
                        playContextParams: r,
                        className: v,
                        withDNDBlock: g,
                        isDragging: b,
                        draggingClassName: T,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: C,
                        handleRemove: E,
                        withDislike: k,
                        withTrailer: N = !0,
                        beforeTitle: f,
                        removeButtonAriaLabel: w,
                        hideControls: A,
                    } = e,
                    j = (0, c.D)({ playContextParams: r, entityId: n.entityId }),
                    {
                        settings: { isMobile: M },
                    } = (0, d.g)(),
                    I = (0, l.X)(n.trackSource, { isMobile: M }),
                    L = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(_.q, {
                                isAvailable: n.isAvailable,
                                isDisliked: n.isDisliked,
                                coverUri: n.coverUri,
                                title: n.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, n.coverUri, n.isAvailable, n.isDisliked, n.title],
                    );
                return (0, i.jsx)(x.C, {
                    className: (0, a.$)(v, { [h().trackWithDots]: g, [h().important]: g }),
                    track: n,
                    beforeBlock: g ? (0, i.jsx)(u.O, { className: (0, a.$)(h().dots, T), isDragging: b }) : void 0,
                    meta: (0, i.jsx)(p.j, { withArtistLink: I, beforeTitle: f, track: n, ignoreDislikedStyles: y, withSecondaryColor: C }),
                    playButtonCellRender: L,
                    controls: (0, i.jsx)(m.Q, {
                        track: n,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: E,
                        withDislike: k,
                        withTrailer: N,
                        removeButtonAriaLabel: w,
                        hideControls: A,
                    }),
                    ...j,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        14912: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => a });
            var i = n(53548);
            let a = () =>
                (0, i.useCallback)((e) => {
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
            n.d(t, { f: () => r });
            var i = n(72288),
                a = n(97956);
            let r = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: n },
                    } = (0, i.g)(),
                    r = e.checkExperiment(a.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(a.z.WebNextQueryToVibe, 'on') && (!r || !!n);
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
            n.d(t, { P: () => i, u: () => a });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                a = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => S });
            var i = n(88800),
                a = n(65724),
                r = n(84961),
                o = n(53548),
                s = n(2058),
                l = n(88969);
            n(30282);
            var c = n(96817),
                d = n(52300),
                _ = n(29504),
                u = n(87999),
                m = n(47149),
                p = n(84423),
                x = n(89846),
                v = n(64543),
                h = n(63582);
            let g = (0, h.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: n } = (0, x.g)(),
                        { screen: i } = (0, v.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !n || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: u.ActionType.Refresh,
                                userInteractionType: u.UserInteractionType.Tap,
                                entityType: u.EntityTypes.Error,
                                entityId: u.EntityTypes.SomethingWrong,
                                hash: n,
                                pageId: i.pageId,
                                pageStyle: u.PageStyles.Fullscreen,
                                pagePlacement: u.PagePlacements.Fullscreen,
                                mainObjectType: u.DomainObjectType.NonApplicable,
                                mainObjectId: u.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, n, null == i ? void 0 : i.pageId]),
                    };
                }),
                b = (0, h.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let n = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, x.g)(),
                        { screen: a } = (0, v.j)();
                    (0, o.useEffect)(() => {
                        if (!n || !i || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: u.EntityTypes.Error,
                            entityId: u.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: a.pageId,
                            pageStyle: u.PageStyles.Fullscreen,
                            pagePlacement: u.PagePlacements.Fullscreen,
                            mainObjectType: u.DomainObjectType.NonApplicable,
                            mainObjectId: u.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(n, t);
                    }, [n, e, i, null == a ? void 0 : a.pageId]);
                });
            var T = n(44230),
                y = n(4370),
                C = n(72288),
                E = n(97956),
                k = n(56248),
                N = n(90688),
                f = n(78940);
            let w = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = n(96856),
                j = n.n(A);
            let M = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: r } = e,
                    { slam: o } = (0, C.g)(),
                    { contentRef: s } = (0, T.g)(),
                    d = (0, f.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(j().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(j().navigation, { [j().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, a.$)(j().content, { [j().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(N._V, { className: j().image, src: w.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, i.jsx)(_.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(_.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: j().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(_.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = n(9184),
                L = n.n(I);
            let S = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: r } = e,
                    { formatMessage: u } = (0, s.A)(),
                    m = (0, o.useContext)(C.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    x = u(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(x);
                let { sendRefreshEvent: v } = g(),
                    h = (0, o.useCallback)(() => {
                        (v(), (window.location.href = y.Z.main.href));
                    }, [v]),
                    { contentRef: N } = (0, T.g)();
                return p
                    ? (0, i.jsx)(M, { className: t, withBackwardControl: n, onBack: r })
                    : (0, i.jsxs)('div', {
                          className: (0, a.$)(L().root, t),
                          children: [
                              n &&
                                  (0, i.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(L().navigation, { [L().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, a.$)(L().content, { [L().content_shrink]: !n }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(_.DZ, { className: (0, a.$)(L().title, L().important), variant: 'h3', size: 'xs', children: x }),
                                      (0, i.jsxs)(_.HL, {
                                          className: (0, a.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: h,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(_.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
            n.d(t, { _: () => o });
            var i = n(88800),
                a = n(53548),
                r = n(12241);
            let o = (e) => {
                let { sourceContextData: t, children: n } = e,
                    o = (0, a.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(r.l.Provider, { value: o, children: n });
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
            var i = n(88800),
                a = n(65724),
                r = n(72288),
                o = n(8655),
                s = n(44378),
                l = n(82039),
                c = n.n(l);
            let d = {
                    [o.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [o.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                _ = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                u = (e) => {
                    let { className: t, controls: n, ...o } = e,
                        { lumen: l } = (0, r.g)();
                    return (0, i.jsx)(s.D, {
                        className: (0, a.$)(c().root, t),
                        lumenImages: l.getFallbackImage(o.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: _,
                        controls: n,
                        ...o,
                    });
                };
        },
        39631: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => k });
            var i = n(88800),
                a = n(53548),
                r = n(40907),
                o = n(72288),
                s = n(97956),
                l = n(90420),
                c = n(84961),
                d = n(2058),
                _ = n(17392),
                u = n(29993),
                m = n(29832),
                p = n(52300),
                x = n(19934),
                v = n(68974),
                h = n(2147),
                g = n(21869),
                b = n(49738),
                T = n(64546),
                y = n(83559),
                C = n.n(y);
            let E = (0, c.PA)((e) => {
                    let { vibe: t } = e,
                        {
                            settings: { isMobile: n },
                        } = (0, o.g)(),
                        { formatMessage: a } = (0, d.A)(),
                        r = (0, h.K)(t, { showNotificationOnMobile: !0 }),
                        s = (0, u.c)((e) => {
                            e.stopPropagation();
                        });
                    return (0, i.jsx)('div', {
                        className: C().root,
                        onClick: s,
                        onDoubleClick: s,
                        onKeyDown: s,
                        children: (0, i.jsx)(m.hg, {
                            className: C().controls,
                            bottomContainerClassName: C().bottom,
                            isVisible: !0,
                            likeControl: (0, i.jsx)(T.WithOffline, {
                                fallback: (0, i.jsx)('div', {
                                    className: C().like,
                                    children: (0, i.jsx)(b.c, { size: 'xs', iconSize: 'xxs', className: C().likeButton, isLiked: t.isLiked, onClick: r }),
                                }),
                            }),
                            menuControl: (0, i.jsx)('div', {
                                className: C().menu,
                                children: (0, i.jsxs)(x.W1, {
                                    className: C().contextMenuButton,
                                    isMobile: n,
                                    menuClassName: n ? void 0 : C().contextMenu,
                                    variant: 'text',
                                    size: 'xs',
                                    icon: (0, i.jsx)(p.I, { variant: 'more', size: 'xs' }),
                                    ariaLabel: a({ id: 'interface-actions.context-menu' }),
                                    'data-test-id': _.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                                    children: [(0, i.jsx)(T.WithOffline, { fallback: (0, i.jsx)(g.S, { vibe: t, onLikeClick: r }) }), (0, i.jsx)(v.u, { vibe: t })],
                                }),
                            }),
                        }),
                    });
                }),
                k = () => {
                    let {
                        experiments: e,
                        user: { isAuthorized: t },
                    } = (0, o.g)();
                    return (0, a.useCallback)(
                        (n) =>
                            e.checkExperiment(s.z.WebNextWaveLikesAndShares, 'on') && t && n
                                ? n.stationType === l.q7
                                    ? (0, i.jsx)(r.w, { wave: n })
                                    : n.isLikeEnabled
                                      ? (0, i.jsx)(E, { vibe: n })
                                      : null
                                : null,
                        [e, t],
                    );
                };
        },
        40887: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => _ });
            var i = n(88800),
                a = n(53548),
                r = n(2058),
                o = n(29993),
                s = n(29595),
                l = n(74965),
                c = n(27506),
                d = n(66943);
            let _ = (e) => {
                let { room: t, onRoomSuccessExit: n } = e,
                    [_, u] = (0, a.useState)(!1),
                    { notify: m } = (0, l.l)(),
                    p = (0, a.useRef)(!1),
                    { formatMessage: x } = (0, r.A)();
                return {
                    exitVibeRoom: (0, o.c)(async () => {
                        t &&
                            !p.current &&
                            (u(!0),
                            (p.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === c.F.ERROR
                                ? m((0, i.jsx)(d.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR })
                                : n(),
                            u(!1),
                            (p.current = !1));
                    }),
                    isPending: _,
                };
            };
        },
        40907: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => S });
            var i = n(88800),
                a = n(65724),
                r = n(84961),
                o = n(2058),
                s = n(88969),
                l = n(17392),
                c = n(29993),
                d = n(79070),
                _ = n(78275),
                u = n(98148),
                m = n(52300),
                p = n(19934),
                x = n(21416),
                v = n(29504),
                h = n(29595),
                g = n(74965),
                b = n(4370),
                T = n(78940),
                y = n(72288),
                C = n(74773),
                E = n(66943),
                k = n(59378),
                N = n(56475),
                f = n(87999),
                w = n(70621),
                A = n(40887),
                j = n(16112),
                M = n(89718),
                I = n(59265),
                L = n.n(I);
            let S = (0, r.PA)((e) => {
                var t, n, r;
                let { wave: I, context: S, className: R, renderContextButton: O } = e,
                    {
                        collection: { vibeRooms: B },
                        settings: { isMobile: D },
                        user: P,
                    } = (0, y.g)(),
                    { formatMessage: W } = (0, o.A)(),
                    { notify: U } = (0, g.l)(),
                    z = (0, T.Z)(b.Z.collectionVibeRooms.href),
                    { state: V, toggleTrue: F, toggleFalse: H } = (0, _.e)(!1),
                    Y = B.items.find((e) => {
                        var t;
                        return (null == e || null == (t = e.wave) ? void 0 : t.pinId) === I.pinId;
                    }),
                    K = B.loadingState === C.G.PENDING,
                    { editVibeRoom: $, isPending: Q } = (0, N.h)(Y),
                    G = (0, c.c)(() => {
                        Y && B.deleteRoomFromItems(Y.id);
                    }),
                    {
                        handlePinClick: X,
                        handleExitClick: q,
                        isExitPending: Z,
                    } = ((e) => {
                        let { room: t, onRoomSuccessExit: n } = e,
                            i = (0, j.A)(null == t ? void 0 : t.wave),
                            { exitVibeRoom: a, isPending: r } = (0, A.J)({ room: t, onRoomSuccessExit: n }),
                            o = (0, w.D)();
                        return {
                            handleExitClick: (0, c.c)(async () => {
                                (o({ actionType: f.ActionType.Remove, userInteractionType: f.UserInteractionType.Tap }), await a());
                            }),
                            handlePinClick: (0, c.c)(async () => {
                                (o({ actionType: f.ActionType.Pin, userInteractionType: f.UserInteractionType.Tap }), await i());
                            }),
                            isExitPending: r,
                        };
                    })({ room: Y, onRoomSuccessExit: G }),
                    J = (0, c.c)(async (e) => {
                        e &&
                            P.isAuthorized &&
                            !Q &&
                            !Z &&
                            (await B.getData(),
                            B.isRejected && U((0, i.jsx)(E.h, { error: W({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                    }),
                    ee = (0, c.c)(() => {
                        J(!0);
                    }),
                    et = (0, c.c)((e) => {
                        e.stopPropagation();
                    }),
                    en = (0, c.c)(async (e) => {
                        Q || (await $(e), H());
                    }),
                    ei = (0, d.L)(() =>
                        V && Y && !D
                            ? (0, i.jsx)(k.A, {
                                  text: Y.name,
                                  className: L().renameInput,
                                  onChangeFinish: en,
                                  readOnly: Q,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: W({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': W({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': l.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    ea = (0, d.L)(() =>
                        K
                            ? (0, i.jsx)('div', {
                                  className: L().loader,
                                  'data-test-id': l.Kq.multivibe.MULTIVIBE_CONTEXT_MENU_LOADER,
                                  children: (0, i.jsx)(x.y, { size: 'xs' }),
                              })
                            : Y
                              ? (0, i.jsx)(M.J, { room: Y, className: R, onRenameClick: F, onPinClick: X, onExitClick: q, isExitPending: Z, isRenamePending: Q })
                              : null,
                    ),
                    er = (0, i.jsxs)(i.Fragment, {
                        children: [
                            ea,
                            Y && !K && (0, i.jsx)(u.c, { className: L().divider }),
                            (0, i.jsx)(p.Dr, {
                                className: R,
                                icon: (0, i.jsx)(m.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: z,
                                'data-test-id': l.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, i.jsxs)('span', {
                                    className: L().collection,
                                    children: [
                                        (0, i.jsx)(s.A, { id: 'interface-actions.show-all' }),
                                        (0, i.jsx)(v.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: L().description,
                                            children: (0, i.jsx)(s.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                if (O) return O({ context: null != (t = null == Y ? void 0 : Y.name) ? t : S, contextControl: ei, onOpenChange: J, children: er });
                let eo = null != (r = null != (n = null == Y ? void 0 : Y.name) ? n : S) ? r : I.title,
                    es = W({ id: 'interface-actions.context-menu' });
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(L().controls, { [L().controls_renaming]: !!ei }),
                    onClick: et,
                    onDoubleClick: et,
                    onKeyDown: et,
                    children: [
                        ei,
                        (0, i.jsx)(p.W1, {
                            className: L().contextMenuButton,
                            wrapperClassName: (0, a.$)({ [L().contextMenu_hidden]: !!ei }),
                            menuClassName: D ? void 0 : L().contextMenu,
                            isMobile: D,
                            size: 'xs',
                            variant: 'text',
                            icon: (0, i.jsx)(m.I, { variant: 'more', size: 'xs' }),
                            ariaLabel: eo ? ''.concat(eo, ': ').concat(es) : es,
                            onShow: ee,
                            returnFocus: !ei,
                            'data-test-id': l.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                            children: er,
                        }),
                    ],
                });
            });
        },
        44378: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => P });
            var i = n(88800),
                a = n(65724),
                r = n(84961),
                o = n(53548),
                s = n(2058),
                l = n(58390),
                c = n(87999),
                d = n(64543),
                _ = n(33979),
                u = n(80643),
                m = n(49784),
                p = n(62414),
                x = n(17392),
                v = n(29993),
                h = n(90688),
                g = n(29504),
                b = n(81438),
                T = n(55693),
                y = n(47964),
                C = n(72288),
                E = n(8655),
                k = n(69704),
                N = n(49176),
                f = n(34303),
                w = n(76168),
                A = n(35402),
                j = n(62270),
                M = n.n(j),
                I = n(76816),
                L = n(34945);
            let S = async (e, t) => {
                let { loop: n = !1, markerId: i, frameRange: a, mode: r = 'forward' } = t,
                    o = null,
                    s = null;
                if (i) {
                    let t = e.markers().find((e) => e.name === i);
                    if (!t) return;
                    ((o = t.time), (s = t.time + t.duration));
                } else if (a) {
                    var l;
                    ((o = a.start), (s = null != (l = a.end) ? l : e.totalFrames));
                }
                null !== o &&
                    null !== s &&
                    (await Promise.all([e.setLoop(n), e.setMode(r), e.setSegment(o, s), e.setFrame('reverse' === r ? s : o)]), o !== s && (await e.play()));
            };
            var R = n(7019),
                O = n.n(R);
            let B = { align: [0, 0.5], fit: 'contain' },
                D = { autoResize: !0, freezeOnOffscreen: !1 },
                P = (0, r.PA)((e) => {
                    var t, n, r, j, R;
                    let { animationByTheme: P, animationConfig: W, className: U, controls: z, lumenImages: V, requestAwakeLumenModal: F, vibe: H } = e,
                        { formatMessage: Y } = (0, s.A)(),
                        K = (0, l.useSearchParams)(),
                        $ = (0, w.z)(),
                        { screen: Q } = (0, d.j)(),
                        G = null == Q ? void 0 : Q.pageIdForFrom,
                        { block: X } = (0, d.j)(),
                        q = null == X ? void 0 : X.blockIdForFrom,
                        { sendPlaySearchFeedback: Z } = (0, T.z)(),
                        J = (0, _.g)(),
                        ee = (0, u.S)();
                    (0, m.W)();
                    let et = (0, p.D)(),
                        en = (0, k.W)(),
                        { lumen: ei } = (0, C.g)(),
                        { cover: ea, fallbackImage: er } = (0, b.x)(),
                        eo = 'true' === K.get(f.K.LUMEN_AWAKE_PARAM),
                        es = ei.isEnabled && !ei.isTriedToLoadData,
                        el = ei.isEnabled && !ei.isAwakened,
                        ec = null != (t = en.theme) ? t : E.S.Dark,
                        ed = (0, o.useRef)(!1),
                        e_ = (0, o.useRef)(W[H ? 'idle' : 'loading']),
                        eu = (0, o.useRef)(void 0),
                        [em, ep] = (0, o.useState)(null),
                        {
                            isPlaying: ex,
                            togglePlay: ev,
                            isCurrent: eh,
                        } = (0, y.B)({ blockIdForFrom: q, pageIdForFrom: G, seeds: null != (n = null == H ? void 0 : H.seeds) ? n : [] });
                    ((0, o.useEffect)(() => {
                        if (!em || ed.current) return;
                        let e = () => {
                            ((ed.current = !0), S(em, e_.current));
                        };
                        return (em.addEventListener('load', e), () => em.removeEventListener('load', e));
                    }, [em]),
                        (0, o.useEffect)(() => {
                            let e = ((e, t, n, i) =>
                                n || e === (null == i ? void 0 : i.loading)
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
                                      : i.loading)(e_.current, ex, !!H, W);
                            e && e !== e_.current && ((e_.current = e), em && ed.current && S(em, e));
                        }, [W, em, eh, ex, H]));
                    let eg = (0, v.c)(() => {
                        (eu.current === (null == H ? void 0 : H.seedsId) || ex || ((eu.current = null == H ? void 0 : H.seedsId), null == Z || Z()), ev(), ex || J());
                    });
                    (0, o.useEffect)(() => {
                        eo && !es && H && (el && (null == F || F(eg)), $([f.K.LUMEN_AWAKE_PARAM]));
                    }, [F, $, eo, el, es, eg, H]);
                    let eb = (0, v.c)(() => {
                            if (H) {
                                if (ex) return void ev();
                                if (el) {
                                    (ee({ to: c.AppScreen.LumenAwakeningScreen }), null == F || F(eg));
                                    return;
                                }
                                eg();
                            }
                        }),
                        eT = (0, v.c)((e) => {
                            (e.code === N.v.SPACE || e.code === N.v.ENTER) && (e.preventDefault(), eb());
                        }),
                        ey = null != (r = null == H ? void 0 : H.title) ? r : Y({ id: 'entity-names.query-to-vibe-loading-title' }),
                        eC = null != (j = null == H ? void 0 : H.description) ? j : Y({ id: 'entity-names.query-to-vibe-loading-description' }),
                        eE = !ei.isEnabled || ei.isTriedToLoadData,
                        ek = ei.isEnabled ? ea : null != (R = null == V ? void 0 : V[ec]) ? R : er,
                        eN = H ? x.OA.vibe.QUERY_TO_VIBE_BLOCK : x.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                        ef = H && (!ei.isEnabled || ei.isTriedToLoadData);
                    return (0, i.jsxs)('div', {
                        'aria-label': ey,
                        'aria-description': eC,
                        className: (0, a.$)(M().root, O().root, { [O().root_loading]: !H, [O().root_withControls]: z }, U),
                        tabIndex: 0,
                        onClick: eb,
                        onKeyDown: eT,
                        'data-test-id': eN,
                        children: [
                            (0, i.jsx)(A.j, { className: O().comet, layout: B, src: P[null != ec ? ec : E.S.Dark], renderConfig: D, dotLottieRefCallback: ep }),
                            (0, i.jsxs)('div', {
                                className: O().iconContainer,
                                children: [
                                    eh && (0, i.jsx)(L.P, { className: O().iconPulse, stopAnimation: !ex }),
                                    eE &&
                                        (0, i.jsx)(h._V, {
                                            className: O().icon,
                                            src: ek,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            withLoadingIndicator: !1,
                                        }),
                                ],
                            }),
                            (0, i.jsx)(I.r, {
                                className: O().meta,
                                title: (0, i.jsx)(g.HL, {
                                    className: (0, a.$)(M().text, M().titleText, O().caption),
                                    size: 'm',
                                    variant: 'div',
                                    type: 'text',
                                    children: ey,
                                }),
                                description: eC,
                                titleLineClamp: 2,
                            }),
                            z && (0, i.jsx)('div', { className: O().controls, children: z }),
                            ef && (0, i.jsx)('div', { ref: et }),
                        ],
                    });
                });
        },
        49176: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        56475: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => _ });
            var i = n(88800),
                a = n(53548),
                r = n(2058),
                o = n(29993),
                s = n(29595),
                l = n(74965),
                c = n(27506),
                d = n(66943);
            let _ = (e) => {
                let [t, n] = (0, a.useState)(!1),
                    { notify: _ } = (0, l.l)(),
                    u = (0, a.useRef)(!1),
                    { formatMessage: m } = (0, r.A)();
                return {
                    editVibeRoom: (0, o.c)(async (t) => {
                        e &&
                            !u.current &&
                            (n(!0),
                            (u.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                _((0, i.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            n(!1),
                            (u.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        59265: (e) => {
            e.exports = {
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
        76168: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var i = n(29993),
                a = n(72288),
                r = n(14912);
            let o = () => {
                let { location: e } = (0, a.g)(),
                    t = (0, r.X)();
                return (0, i.c)((n) => {
                    let i = new URL(window.location.href);
                    n.forEach((e) => i.searchParams.delete(e));
                    let a = i.toString();
                    (t(a), e.setHref(a), e.setSearchParams(i.searchParams.toString()));
                });
            };
        },
        76816: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => m });
            var i = n(88800),
                a = n(65724),
                r = n(2058),
                o = n(17392),
                s = n(79070),
                l = n(52300),
                c = n(29504),
                d = n(90224),
                _ = n(34250),
                u = n.n(_);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: n,
                        description: _,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: x,
                        version: v,
                        title: h,
                        artistsComponent: g,
                        likesCount: b,
                        isLiked: T,
                        releaseYear: y,
                        titleLineClamp: C = 1,
                    } = e,
                    { formatMessage: E, formatNumber: k } = (0, r.A)(),
                    N = (0, s.L)(() => {
                        let e = null == g ? void 0 : g((0, a.$)(u().text, u().artistLink), (0, a.$)(u().text, u().artistCaption));
                        if (!e && !b) return;
                        let t = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof b &&
                                    b > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': E({ id: 'entity-names.likes-counter' }, { counter: b }),
                                        'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(l.I, {
                                                className: u().icon,
                                                variant: T ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: k(b),
                                            }),
                                        ],
                                    }),
                                !!b && e && t,
                                e,
                                !!y && e && t,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: y }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: n, [u().root_disliked]: t }, x),
                    'data-test-id': o.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: v }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: C,
                                    type: 'text',
                                    'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        h,
                                        v &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(v),
                                            }),
                                    ],
                                }),
                                p && (0, i.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        _ &&
                            (0, i.jsx)(c.HL, {
                                className: (0, a.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: _,
                            }),
                        N,
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
            n.d(t, { x: () => o });
            var i = n(72288),
                a = n(8655),
                r = n(69704);
            let o = () => {
                var e, t, n, o, s, l;
                let { lumen: c } = (0, i.g)(),
                    { theme: d } = (0, r.W)(),
                    _ = null != d ? d : a.S.Dark,
                    u = null == (e = c.themes) ? void 0 : e[_],
                    m = c.getFallbackImage()[_],
                    p = null != (o = null == u ? void 0 : u.cover.uri) ? o : m;
                return {
                    cover: p,
                    fullCover: null != (s = null == u || null == (t = u.fullCover) ? void 0 : t.uri) ? s : p,
                    faceCover: null != (l = null == u || null == (n = u.faceCover) ? void 0 : n.uri) ? l : p,
                    solidColor: null == u ? void 0 : u.solidColor,
                    fallbackImage: m,
                };
            };
        },
        82039: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        83559: (e) => {
            e.exports = {
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
        89718: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => u });
            var i = n(88800),
                a = n(84961),
                r = n(88969),
                o = n(17392),
                s = n(52300),
                l = n(19934),
                c = n(21416),
                d = n(72288),
                _ = n(27817);
            let u = (0, a.PA)((e) => {
                var t;
                let { room: n, onRenameClick: a, isRenamePending: u, onPinClick: m, onExitClick: p, isExitPending: x, className: v } = e,
                    {
                        settings: { isMobile: h },
                    } = (0, d.g)(),
                    g = !(null == n ? void 0 : n.isDisabled) && !h,
                    b = !(null == n ? void 0 : n.isDisabled) && !h;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        g && (0, i.jsx)(_.L, { className: v, onClick: m, isPinned: null == (t = n.wave) ? void 0 : t.isPinned }),
                        b &&
                            (0, i.jsx)(l.Dr, {
                                className: v,
                                icon: (0, i.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: a,
                                disabled: u,
                                spinner: u ? (0, i.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, i.jsx)(r.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, i.jsx)(l.Dr, {
                            className: v,
                            icon: (0, i.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: p,
                            disabled: x,
                            spinner: x ? (0, i.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, i.jsx)(r.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        90233: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => w });
            var i = n(88800),
                a = n(53548),
                r = n(87999),
                o = n(76903),
                s = n(7833),
                l = n(29993),
                c = n(79070),
                d = n(98427),
                _ = n(72288),
                u = n(65724),
                m = n(84961),
                p = n(46462),
                x = n(17392),
                v = n(11372),
                h = n(6900),
                g = n(8655),
                b = n(29126),
                T = n.n(b),
                y = n(2058),
                C = n(54721),
                E = n(96817),
                k = n(51611);
            let N = (e) => {
                    let { isPlayButtonVisible: t, onPlayClick: n } = e,
                        { formatMessage: a } = (0, y.A)(),
                        { language: r } = (0, k.h)();
                    return (
                        (0, C.u)(),
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: T().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(r),
                                    'data-test-id': x.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, i.jsx)(E.$, {
                                    className: (0, u.$)(T().playButton, t && T().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: n,
                                    'data-test-id': x.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: a({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                },
                f = (0, m.PA)((e) => {
                    let { open: t, onOpenChange: n, onPlayAfterAwake: o } = e,
                        {
                            lumen: s,
                            settings: { isMobile: c },
                        } = (0, _.g)(),
                        [d, m] = (0, a.useState)(!1),
                        b = (0, p.I)(),
                        y = (0, l.c)(async (e) => {
                            let t = s.isAwakened;
                            try {
                                e || (await s.getData(!0));
                            } finally {
                                (e ||
                                    t ||
                                    !s.isAwakened ||
                                    b({
                                        actionType: r.ActionType.LumenAwakened,
                                        userInteractionType: r.UserInteractionType.Tap,
                                        entityId: r.EntityTypes.Button,
                                        entityType: r.EntityTypes.Button,
                                    }),
                                    n(e));
                            }
                        }),
                        C = (0, l.c)(() => y(!1)),
                        E = (0, l.c)(() => {
                            (o(), y(!1));
                        });
                    return (
                        (0, a.useEffect)(() => {
                            if (!t) return void m(!1);
                            let e = window.setTimeout(() => m(!0), s.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [t, s.playButtonShowDelay]),
                        (0, i.jsx)(v.a, {
                            open: t,
                            onOpenChange: y,
                            onClose: C,
                            placement: c ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, u.$)(T().root, (0, h.J)(g.S.Dark)),
                            headerClassName: T().header,
                            contentClassName: T().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: x.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': x.S7.AWAKE_LUMEN_MODAL,
                            children: (0, i.jsx)(N, { isPlayButtonVisible: d, onPlayClick: E }),
                        })
                    );
                }),
                w = () => {
                    let { lumen: e } = (0, _.g)(),
                        t = (0, a.useRef)(null),
                        [n, u] = (0, a.useState)(!1),
                        [m, p] = (0, a.useState)(0),
                        x = (0, l.c)((e) => {
                            ((t.current = e), n || (p((e) => e + 1), u(!0)));
                        }),
                        v = (0, l.c)(() => {
                            var e;
                            return null == (e = t.current) ? void 0 : e.call(t);
                        }),
                        h = (0, l.c)((e) => {
                            (e || (t.current = null), u(e));
                        });
                    return {
                        awakeLumenModal: (0, c.L)(() => {
                            if (e.isEnabled)
                                return (0, i.jsx)(
                                    o.a,
                                    {
                                        mainObjectId: '',
                                        mainObjectType: r.DomainObjectType.Lumen,
                                        pageId: r.AppScreen.LumenAwakeningScreen,
                                        pageIdForFrom: d.b.LUMEN_AWAKENING_SCREEN,
                                        pageStyle: r.PageStyles.Sheet,
                                        pagePlacement: r.PagePlacements.Bottom,
                                        children: (0, i.jsx)(s.B, {
                                            objectId: '',
                                            objectType: r.DomainObjectType.Lumen,
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, i.jsx)(f, { open: n, onOpenChange: h, onPlayAfterAwake: v }),
                                        }),
                                    },
                                    m,
                                );
                        }),
                        requestAwakeLumenModal: x,
                    };
                };
        },
        94058: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => C });
            var i = n(88800),
                a = n(65724),
                r = n(14231),
                o = n(84961),
                s = n(53548),
                l = n.t(s, 2),
                c = n(17392),
                d = n(88021),
                _ = {
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
                    var i = (u[t] = { exports: {} });
                    return (_[t](i, i.exports, e), i.exports);
                })(810);
                m.useForwardRef = function (t, n) {
                    let i = (0, e.useRef)(n);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                m.__esModule);
            var p = m.useForwardRef,
                x = n(32353),
                v = n(72288),
                h = n(31764),
                g = n(81192),
                b = n.n(g);
            let T = { [x.u.Desktop]: { start: 40, end: 20 }, [x.u.Mobile]: { start: 40, end: 40 } },
                y = (0, o.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: n,
                            forwardRef: o,
                            scrollPadding: l,
                            isCarouselBetweenArrows: _ = !1,
                            controlsWrapperClassName: u,
                            buttonSize: m,
                            buttonVariant: g,
                            withSecondaryColor: y,
                        } = e,
                        {
                            settings: { isMobile: C },
                        } = (0, v.g)(),
                        E = p(o, null),
                        { shouldBackwardButtonBeDisabled: k, shouldForwardButtonBeDisabled: N, shouldHideControls: f } = (0, d.Y)(E),
                        [w, A] = (0, s.useMemo)(() => {
                            let e = (0, r.A)(T, l);
                            return [C ? e[x.u.Mobile].start : e[x.u.Desktop].start, C ? e[x.u.Mobile].end : e[x.u.Desktop].end];
                        }, [l, C]),
                        j = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let n = null == (t = E.current) ? void 0 : t.children[e],
                                    { current: i } = E;
                                if (!i || !(n instanceof HTMLElement)) return;
                                if (n.offsetLeft - i.scrollLeft < w) {
                                    i.scrollLeft = n.offsetLeft - w;
                                    return;
                                }
                                let a = i.scrollLeft + i.clientWidth - n.offsetLeft - n.offsetWidth;
                                a < A && (i.scrollLeft -= a - A);
                            },
                            [E, A, w],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                var t, i;
                                (j(e), null == (t = (i = n.props).onTabChange) || t.call(i, e));
                            },
                            [n, j],
                        ),
                        I = (0, s.cloneElement)(n, { forwardRef: E, className: (0, a.$)(b().wrapper, n.props.className, b().carousel, b().important), onTabChange: M });
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(
                            b().root,
                            {
                                [b().root_carouselBetweenArrows]: _,
                                [b().root_arrowLeft_hidden]: k,
                                [b().root_arrowRight_hidden]: N,
                                [b().root_arrow_hidden]: k && N && f,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: b().list, children: I }),
                            !C &&
                                (0, i.jsx)(h.X, {
                                    className: (0, a.$)(b().buttons, u),
                                    carouselRef: E,
                                    backwardControlClassName: b().control,
                                    forwardControlClassName: b().control,
                                    withSecondaryColor: y,
                                    buttonSize: m,
                                    buttonVariant: g,
                                }),
                        ],
                    });
                }),
                C = (0, s.forwardRef)((e, t) => (0, i.jsx)(y, { forwardRef: t, ...e }));
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
