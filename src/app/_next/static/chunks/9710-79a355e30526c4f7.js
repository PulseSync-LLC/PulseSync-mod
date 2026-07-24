(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9710],
    {
        76: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => J });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(60900),
                n = i(39407),
                c = i(16172),
                d = i(21732),
                m = i(91027),
                _ = i(6752),
                u = i(44989),
                v = i(14934),
                p = i(71926),
                h = i(71735),
                C = i(48922),
                x = i(12350),
                b = i(47745),
                A = i(2969),
                j = i(23352),
                N = i(22714),
                T = i(37240),
                I = i(7697),
                f = i(28999),
                g = i(43564),
                S = i(57594),
                L = i(86562),
                k = i(10180),
                y = i(90326),
                R = i(85832),
                E = i(45477),
                P = i(75582),
                w = i(58008),
                O = i(90357),
                M = i(64089),
                B = i(82586),
                D = i(19740),
                V = i(99902),
                W = i(84051),
                U = i(27120),
                H = i(56367),
                z = i(3243),
                K = i.n(z);
            let Y = (0, r.PA)((e) => {
                var t;
                let { room: i, onOpenChange: r, onRenameClick: _, isRenamePending: u, onRoomSuccessExit: v, open: p, className: h } = e,
                    {
                        settings: { isMobile: C },
                    } = (0, S.g)(),
                    { formatMessage: b } = (0, o.A)(),
                    A = (0, M.A)(null == i ? void 0 : i.wave),
                    { exitVibeRoom: j, isPending: N } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [s, r] = (0, l.useState)(!1),
                            { notify: n } = (0, P.l)(),
                            c = (0, l.useRef)(!1),
                            { formatMessage: d } = (0, o.A)();
                        return {
                            exitVibeRoom: (0, m.c)(async () => {
                                c.current ||
                                    (r(!0),
                                    (c.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === w.F.ERROR
                                        ? n((0, a.jsx)(O.h, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: E.u.ERROR })
                                        : i(),
                                    r(!1),
                                    (c.current = !1));
                            }),
                            isPending: s,
                        };
                    })({ room: i, onRoomSuccessExit: v }),
                    T = (0, x.m)(),
                    I = (0, W.l)({ mainObjectType: c.ky.NonApplicable }),
                    f = (0, m.c)(async () => {
                        T({ actionType: c.X2.Remove, userInteractionType: c.gi.Tap, objectType: c.ky.Wave }), await j();
                    }),
                    g = (0, m.c)(async () => {
                        T({ actionType: c.X2.Pin, userInteractionType: c.gi.Tap, objectType: c.ky.Wave }), await A();
                    });
                (0, U.N)(p),
                    (0, l.useEffect)(() => {
                        if (p)
                            return (
                                I(!0),
                                () => {
                                    I(!1);
                                }
                            );
                    }, [p, I]);
                let L = !(null == i ? void 0 : i.isDisabled),
                    k = !(null == i ? void 0 : i.isDisabled) && !C;
                return (0, a.jsxs)(D.W1, {
                    isMobile: C,
                    offsetOptions: 10,
                    open: p,
                    onOpenChange: r,
                    ariaLabel: b({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU },
                    size: 's',
                    icon: (0, a.jsx)(B.I, { size: 'xxs', variant: 'more' }),
                    color: 'secondary',
                    variant: 'default',
                    className: h,
                    menuClassName: (0, s.$)(K().root, { [K().root_mobile]: C }),
                    children: [
                        L && (0, a.jsx)(H.L, { onClick: g, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        k &&
                            (0, a.jsx)(D.Dr, {
                                icon: (0, a.jsx)(B.I, { variant: 'edit', size: 'xxs' }),
                                onClick: _,
                                disabled: u,
                                spinner: u ? (0, a.jsx)(V.y, { size: 'xs' }) : void 0,
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(D.Dr, {
                            icon: (0, a.jsx)(B.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: f,
                            disabled: N,
                            spinner: N ? (0, a.jsx)(V.y, { size: 'xs' }) : void 0,
                            children: (0, a.jsx)(n.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
            var F = i(11323),
                $ = i(42106),
                X = i(2833),
                G = i.n(X);
            let Q = (e) => {
                let { align: t, controls: i, src: s, isDisabled: r = !1, isMobileLayout: l = !1 } = e;
                return (0, a.jsx)($.b, {
                    align: t,
                    isDisabled: r,
                    overlay: i,
                    surfaceClassName: G().surface,
                    overlayClassName: G().overlay,
                    children: (0, a.jsx)(F.B, {
                        size: 200,
                        fit: 'cover',
                        className: G().image,
                        src: s,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: l ? 'xxxs' : 'l',
                    }),
                });
            };
            var q = i(67775),
                Z = i.n(q);
            let J = (0, r.PA)((e) => {
                var t, i, r, B;
                let { room: D, contentLinesCount: V = 3, className: W, withMobileLayout: U = !1, onRoomSuccessExit: H } = e,
                    { pageId: z } = (0, T.$)(),
                    { ref: K, intersectionPropertyId: F } = (0, j.n)(),
                    {
                        settings: { isMobile: $ },
                        multivibe: X,
                        user: G,
                    } = (0, S.g)(),
                    { withPlusPopoverWeb: q } = (0, I.X)(),
                    J = (0, h.P)(),
                    { sendPlaySearchFeedback: ee } = (0, f.z)(),
                    [et, ei] = (0, l.useState)(!1),
                    ea = (0, M.A)(D.wave),
                    es = (0, A.b)(),
                    er = (0, x.m)(),
                    el = (0, b.N)(),
                    { state: eo, setState: en } = (0, u.e)(!1),
                    { state: ec, setState: ed } = (0, u.e)(!1),
                    { state: em, toggleTrue: e_, toggleFalse: eu } = (0, u.e)(!1),
                    { formatMessage: ev } = (0, o.A)(),
                    { editVibeRoom: ep, isPending: eh } = ((e) => {
                        let [t, i] = (0, l.useState)(!1),
                            { notify: s } = (0, P.l)(),
                            r = (0, l.useRef)(!1),
                            { formatMessage: n } = (0, o.A)();
                        return {
                            editVibeRoom: (0, m.c)(async (t) => {
                                r.current ||
                                    (i(!0),
                                    (r.current = !0),
                                    (await e.editRoom({ roomId: e.id, name: t })) === w.F.ERROR &&
                                        s((0, a.jsx)(O.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: E.u.ERROR }),
                                    i(!1),
                                    (r.current = !1));
                            }),
                            isPending: t,
                        };
                    })(D),
                    eC = U && $,
                    ex = em || eo || ec,
                    { isPlaying: eb, togglePlay: eA } = (0, g.B)({
                        seeds: null != (B = null == (t = D.wave) ? void 0 : t.seeds) ? B : [],
                        pageIdForFrom: z,
                        blockIdForFrom: c.LA.Multiwave,
                    }),
                    ej = (0, m.c)(() => {
                        !(D.isDisabled || J()) &&
                            (q ||
                                (et || eb || (ei(!0), null == ee || ee()),
                                eA(),
                                es(!eb),
                                er({ actionType: eb ? c.X2.Pause : c.X2.Play, userInteractionType: c.gi.Tap, objectType: c.ky.Wave })));
                    }),
                    eN = (0, m.c)(async () => {
                        er({ actionType: c.X2.Pin, userInteractionType: c.gi.Tap, objectType: c.ky.Wave }), await ea();
                    }),
                    eT = (0, m.c)(() => {
                        if (D.isDisabled) {
                            X.setDisabledRoomId(D.id), X.disabledRoomInfoModal.open(), el({ to: c.QT.MultivibeAloneScreen, objectType: c.ky.Link });
                            return;
                        }
                        eC && ej();
                    }),
                    eI = (0, m.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    ef = (0, m.c)((e) => {
                        e && el({ to: c.QT.MultivibeActionScreen, objectType: c.ky.Link }), en(e), ed(e);
                    }),
                    eg = (0, m.c)((e) => {
                        e.target === e.currentTarget && (e.code === L.v.SPACE || e.code === L.v.ENTER) && (e.preventDefault(), eT());
                    }),
                    [eS, eL] = (0, l.useState)(!1),
                    ek = (0, l.useCallback)(
                        (e) => {
                            eL(!1), ep(e), er({ actionType: c.X2.Rename, userInteractionType: c.gi.Tap, objectType: c.ky.Wave });
                        },
                        [ep, er, eL],
                    ),
                    ey = (0, l.useCallback)(() => {
                        eL(!0), el({ to: c.QT.MultivibeRenameScreen, objectType: c.ky.Link });
                    }, [el, eL]),
                    eR = (0, _.L)(() =>
                        (0, a.jsx)(N.n, {
                            pageId: C._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.QL.Sheet,
                            pagePlacement: c.c4.Bottom,
                            pageEntityId: '',
                            children: (0, a.jsx)(
                                Y,
                                {
                                    room: D,
                                    onOpenChange: ef,
                                    open: eo,
                                    onClick: eI,
                                    isRenamePending: eh,
                                    onRenameClick: ey,
                                    className: (0, s.$)(Z().menuControl, Z().control, { [Z().menuControl_mobile]: eC }),
                                    onRoomSuccessExit: H,
                                    'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                D.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    eE = (0, _.L)(() => {
                        if (!D.isDisabled)
                            return (0, a.jsx)(
                                y.D,
                                {
                                    isPlaying: eb,
                                    onClick: ej,
                                    className: (0, s.$)(Z().playControl, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                D.getKey('PlayButton'),
                            );
                    }),
                    eP = (0, _.L)(() => {
                        var e;
                        if (!D.isDisabled)
                            return (0, a.jsx)(
                                k.O,
                                {
                                    isPinned: null == (e = D.wave) ? void 0 : e.isPinned,
                                    onClick: eN,
                                    className: (0, s.$)(Z().pinControl, Z().control, { [Z().pinControl_mobile]: eC }),
                                    withRipple: !1,
                                },
                                D.getKey('PinButton'),
                            );
                    }),
                    ew = D.isDisabled ? ev({ id: 'multivibe.room-status-disabled' }) : ev({ id: 'multivibe.room-status-enabled' }),
                    eO = ev({ id: 'entity-names.vibe-room-name' }, { name: D.name, status: ew }),
                    eM = D.owner.cover.uri,
                    eB = null == (i = D.members[0]) ? void 0 : i.cover.uri,
                    eD = (null == (r = D.owner) ? void 0 : r.uid) && D.owner.uid === G.puid,
                    eV = eD ? eM : eB,
                    eW = eD ? eB : eM,
                    eU = (0, _.L)(() =>
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(Z().avatarsWrapper, {
                                [Z().avatarsWrapper_mobile]: eC,
                                [Z().avatarsWrapper_disabled]: D.isDisabled,
                                [Z().avatarsWrapper_visible]: ex,
                            }),
                            'aria-label': eO,
                            tabIndex: 0,
                            onClick: eT,
                            onKeyDown: eg,
                            onFocus: e_,
                            onMouseEnter: e_,
                            onMouseLeave: eu,
                            onBlur: eu,
                            'data-test-id': d.OA.vibe.VIBE_ROOM_CARD,
                            children: [
                                (0, a.jsx)(Q, {
                                    align: 'back',
                                    isDisabled: D.isDisabled,
                                    isMobileLayout: eC,
                                    src: eV,
                                    controls: (0, a.jsx)(v.hg, { isVisible: ex, className: Z().cardControls, radius: 'round', pinControl: eP }),
                                }),
                                (0, a.jsx)(Q, {
                                    align: 'front',
                                    isDisabled: D.isDisabled,
                                    isMobileLayout: eC,
                                    src: eW,
                                    controls: (0, a.jsx)(v.hg, { isVisible: ex, className: Z().cardControls, radius: 'round', playControl: eE, menuControl: eR }),
                                }),
                            ],
                        }),
                    ),
                    eH = (0, _.L)(() =>
                        D.isDisabled
                            ? (0, a.jsxs)('span', {
                                  className: Z().unavailableStatus,
                                  children: [
                                      (0, a.jsx)('span', { className: Z().unavailableStatusDot }),
                                      (0, a.jsx)(p.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, a.jsx)(n.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    ez = (0, _.L)(() =>
                        eS
                            ? (0, a.jsx)('div', {
                                  className: Z().textFieldContainer,
                                  children: (0, a.jsx)(R.A, {
                                      text: D.name,
                                      className: Z().textField,
                                      onChangeFinish: ek,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: ev({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                  }),
                              })
                            : (0, a.jsx)(p.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: D.isDisabled ? 1 : 2,
                                  className: (0, s.$)(Z().roomName, { [Z().roomName_disabled]: D.isDisabled, [Z().roomName_mobile]: eC }),
                                  children: D.name,
                              }),
                    );
                return (0, a.jsxs)(v.MN, {
                    ref: K,
                    className: (0, s.$)(Z().root, { [Z().root_mobile]: eC }, W),
                    contentLinesCount: eC ? 2 : V,
                    textPosition: eC ? 'left' : 'center',
                    'data-intersection-property-id': F,
                    wrapperClassName: (0, s.$)(Z().cardWrapper, { [Z().cardWrapper_mobile]: eC }),
                    view: eU,
                    children: [(0, a.jsxs)('div', { className: (0, s.$)(Z().roomInfo, { [Z().roomInfo_mobile]: eC }), 'aria-hidden': !0, children: [ez, eH] }), eC && eR],
                });
            });
        },
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
        1085: (e) => {
            e.exports = {
                root: 'EditorialVibesAgent_root__DWv1O',
                controls: 'EditorialVibesAgent_controls__8zmg0',
                item: 'EditorialVibesAgent_item__D8lQA',
                important: 'EditorialVibesAgent_important__xnrnN',
            };
        },
        2125: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(37862),
                s = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        2755: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(32290),
                s = i(63618),
                r = i(57594),
                l = i(14257),
                o = i(90625),
                n = i(28301),
                c = i.n(n);
            let d = {
                    [l.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [l.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                m = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                _ = (e) => {
                    let { className: t, ...i } = e,
                        { lumen: l } = (0, r.g)();
                    return (0, a.jsx)(o.D, {
                        className: (0, s.$)(c().root, t),
                        lumenImages: l.getFallbackImage(i.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: m,
                        ...i,
                    });
                };
        },
        2833: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        3107: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => y });
            var a = i(32290),
                s = i(55178),
                r = i(16172),
                l = i(91027),
                o = i(6752),
                n = i(48922),
                c = i(26042),
                d = i(22714),
                m = i(57594),
                _ = i(63618),
                u = i(96103),
                v = i(60900),
                p = i(21732),
                h = i(63423),
                C = i(84638),
                x = i(52068),
                b = i(62376),
                A = i(79374),
                j = i(2792),
                N = i(37240),
                T = i(84051),
                I = i(61945),
                f = i(75314),
                g = i(14257),
                S = i(61280),
                L = i.n(S);
            let k = (0, u.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: i,
                            settings: { isMobile: o },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        { language: d } = (0, I.h)(),
                        u = (0, s.useRef)(null),
                        [S, k] = (0, s.useState)(!1),
                        [y, R] = (0, s.useState)(!1),
                        E = (() => {
                            let e = (0, x.st)(),
                                { hash: t } = (0, x.gf)(),
                                i = (0, b.U)(),
                                { pageId: a, pageStyle: s, pagePlacement: o } = (0, N.$)(),
                                { objectId: c = '', objectType: d } = (0, j.J)();
                            return (0, l.c)((l) => {
                                let { actionType: m, mainObjectType: _ = d, mainObjectId: u = c, userInteractionType: v = r.gi.Tap } = l;
                                if (!e || !t || !a || !n.xK.includes(a) || !n.fD.includes(a)) return;
                                let p = A.W[a];
                                if (!p) return;
                                let h = (0, r.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: p,
                                        pageStyle: s,
                                        pagePlacement: o,
                                        mainObjectType: _,
                                        mainObjectId: u,
                                        actionType: m,
                                        userInteractionType: v,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                h && (0, r.bv)(e.evgenInstance, h);
                            });
                        })(),
                        P = (0, T.l)({ mainObjectType: r.ky.Lumen }),
                        w = (0, l.c)(async (e) => {
                            let t = i.isAwakened;
                            try {
                                e || (await i.getData(!0));
                            } finally {
                                e || (!t && i.isAwakened && E({ actionType: r.X2.LumenAwakened }), P(!1), (u.current = null)), k(e);
                            }
                        }),
                        O = (0, l.c)(() => w(!1)),
                        M = (0, l.c)(() => {
                            var e;
                            null == (e = u.current) || e.call(u), w(!1);
                        });
                    return (
                        (0, s.useEffect)(() => {
                            t.current = (e) => {
                                (u.current = e), P(!0), k(!0);
                            };
                        }, [t, P]),
                        (0, s.useEffect)(() => {
                            if (!S) return void R(!1);
                            let e = window.setTimeout(() => R(!0), i.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [S, i.playButtonShowDelay]),
                        (0, a.jsxs)(C.a, {
                            open: S,
                            onOpenChange: w,
                            onClose: O,
                            placement: o ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, _.$)(L().root, (0, f.J)(g.S.Dark)),
                            headerClassName: L().header,
                            contentClassName: L().content,
                            closeOnOutsidePress: !0,
                            closeButtonProps: { 'data-test-id': p.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON },
                            escapeKey: !0,
                            'data-test-id': p.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, a.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: L().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(d),
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, a.jsx)(h.$, {
                                    className: (0, _.$)(L().playButton, y && L().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: M,
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                y = () => {
                    let { lumen: e } = (0, m.g)(),
                        t = (0, s.useRef)(() => void 0),
                        i = (0, l.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, o.L)(() => {
                            if (e.isEnabled)
                                return (0, a.jsx)(d.n, {
                                    pageEntityId: '',
                                    pageId: n._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: r.QL.Sheet,
                                    pagePlacement: r.c4.Bottom,
                                    children: (0, a.jsx)(c.B, { objectId: '', objectType: r.ky.Lumen, children: (0, a.jsx)(k, { requestAwakeLumenModalRef: t }) }),
                                });
                        }),
                        requestAwakeLumenModal: i,
                    };
                };
        },
        3243: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        3417: (e) => {
            e.exports = {
                root: 'PromotionsCard_root__1yY_m',
                coverLink: 'PromotionsCard_coverLink__masNa',
                image: 'PromotionsCard_image__4lmYk',
                titleLink: 'PromotionsCard_titleLink__3q_M5',
                subtitle: 'PromotionsCard_subtitle__fGfn9',
                coverWrapper: 'PromotionsCard_coverWrapper__IbTzz',
                advDisclaimer: 'PromotionsCard_advDisclaimer__moi3V',
                advDisclaimerTrigger: 'PromotionsCard_advDisclaimerTrigger__GOUr2',
                advDisclaimerPopover: 'PromotionsCard_advDisclaimerPopover__h_zAR',
                advDisclaimerText: 'PromotionsCard_advDisclaimerText__2WRMS',
            };
        },
        4274: (e) => {
            e.exports = {
                root: 'NeuromusicButton_root__OMwq0',
                ripple: 'NeuromusicButton_ripple__B9e3A',
                textContainer: 'NeuromusicButton_textContainer__2rb8y',
                title: 'NeuromusicButton_title__mTAB8',
                button: 'NeuromusicButton_button__kT4GN',
                icon: 'NeuromusicButton_icon__HTDr2',
            };
        },
        4550: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { R: () => a }),
                (function (e) {
                    (e.RADIAL = 'RADIAL'), (e.STACK = 'STACK');
                })(a || (a = {}));
        },
        4772: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => d });
            var a = i(32290),
                s = i(63618),
                r = i(79856),
                l = i(57594),
                o = i(42106),
                n = i(18628),
                c = i.n(n);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': n, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: m },
                    } = (0, l.g)(),
                    _ = d && m;
                return (0, a.jsxs)('div', {
                    'aria-label': n,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, a.jsx)(o.b, { align: 'back', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, a.jsx)(o.b, { align: 'front', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: (0, s.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, a.jsx)(r.W, { isActive: t, className: (0, s.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        5347: (e) => {
            e.exports = {
                root: 'NewReleaseCard_root__IY5m_',
                ripple: 'NewReleaseCard_ripple__VoybZ',
                image: 'NewReleaseCard_image__oxm2S',
                info: 'NewReleaseCard_info__rcfoY',
                type: 'NewReleaseCard_type__cW58D',
                title: 'NewReleaseCard_title__N5soS',
                description: 'NewReleaseCard_description__Daz5q',
                container: 'NewReleaseCard_container__XvwZC',
                explicitMark: 'NewReleaseCard_explicitMark__isgxE',
                explicitMarkContainer: 'NewReleaseCard_explicitMarkContainer__QHRoH',
                button: 'NewReleaseCard_button__WPk82',
                paperLink: 'NewReleaseCard_paperLink__NN_8o',
            };
        },
        6791: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { z: () => a }),
                (function (e) {
                    (e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom');
                })(a || (a = {}));
        },
        6943: (e) => {
            e.exports = { trailer: 'PlaylistWithTracks_trailer__dOp1u', root: 'PlaylistWithTracks_root__jchZL' };
        },
        7246: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__9IxUi',
                important: 'SkeletonBlock_important__faY0E',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__QzL5d',
                headerContainer: 'SkeletonBlock_headerContainer__fl8EX',
                tracksContainer: 'SkeletonBlock_tracksContainer__uF8Tg',
            };
        },
        8588: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => v });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(21732),
                n = i(50162),
                c = i(86269),
                d = i(71926),
                m = i(61258),
                _ = i(69748),
                u = i.n(_);
            let v = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: v, covers: p, coverSize: h = 100, captionVariant: C = 'div' } = e,
                    x = (0, l.useMemo)(() => {
                        var e;
                        if (null == p || null == (e = p[0]) ? void 0 : e.color) return { '--subcover-background-color': p[0].color };
                    }, [p]);
                return (0, a.jsx)(m.N, {
                    href: _,
                    className: (0, s.$)(u().link, v),
                    'data-test-id': o.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: x,
                        className: (0, s.$)(u().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: u().plate,
                                'data-test-id': o.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: u().subcover, 'data-test-id': o.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(n._V, {
                                        src: null == p || null == (t = p[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: h,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: C,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': o.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        9724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => x });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(60900),
                o = i(39407),
                n = i(16172),
                c = i(91027),
                d = i(63423),
                m = i(82586),
                _ = i(71926),
                u = i(47745),
                v = i(57594),
                p = i(42106),
                h = i(51740),
                C = i.n(h);
            let x = (0, r.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: r,
                    } = (0, v.g)(),
                    { formatMessage: h } = (0, l.A)(),
                    x = (0, u.N)(),
                    b = t && i,
                    A = (0, c.c)(() => {
                        x({ to: n.QT.MultivibeSendingInvitationScreen, objectType: n.ky.Shortcut }), r.promoModal.open();
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(C().root, { [C().root_mobile]: b }),
                    children: [
                        (0, a.jsxs)(d.$, {
                            className: (0, s.$)(C().button, { [C().button_mobile]: b }),
                            'aria-label': h({ id: 'interface-actions.create' }),
                            onClick: A,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            children: [
                                (0, a.jsx)(p.b, { align: 'back', surfaceClassName: C().surface }),
                                (0, a.jsx)(p.b, {
                                    align: 'front',
                                    surfaceClassName: C().surface,
                                    children: (0, a.jsx)(m.I, { variant: 'add', size: b ? 'xxxs' : 'l', className: C().icon }),
                                }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: C().titleWrapper,
                            children: (0, a.jsx)(_.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, s.$)(C().title, { [C().title_mobile]: b }),
                                children: (0, a.jsx)(o.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        10570: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        10921: (e) => {
            e.exports = {
                root: 'LikesAndHistoryItem_root__oI1gk',
                link: 'LikesAndHistoryItem_link__snTl_',
                start: 'LikesAndHistoryItem_start__wdtiV',
                textContainer: 'LikesAndHistoryItem_textContainer__yGdOu',
                titleIcon: 'LikesAndHistoryItem_titleIcon__2D_yS',
                title: 'LikesAndHistoryItem_title__hdi2H',
                subtitle: 'LikesAndHistoryItem_subtitle__ghuKi',
                covers: 'LikesAndHistoryItem_covers__9k_yw',
                coverContainer: 'LikesAndHistoryItem_coverContainer__fwXXJ',
                cover: 'LikesAndHistoryItem_cover__QlRhz',
            };
        },
        11489: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        12578: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => C });
            var a = i(32290),
                s = i(55178),
                r = i(60900),
                l = i(21732),
                o = i(63423),
                n = i(84638),
                c = i(74196),
                d = i(70204),
                m = i(34186),
                _ = i(21916),
                u = i(74523),
                v = i(97201),
                p = i(11489),
                h = i.n(p);
            let C = (e) => {
                let { dataSessionId: t, isOpened: i, onOpen: p, onClose: C } = e,
                    x = (0, m.N)().get(d.tw),
                    { formatMessage: b } = (0, r.A)(),
                    A = (() => {
                        let e = (0, _.useSearchParams)();
                        return (0, s.useCallback)(
                            (t) => {
                                let i = e.get(v.K.UTM_CAMPAIGN);
                                if (!i) return t;
                                let a = new URLSearchParams();
                                return a.set(v.K.UTM_SOURCE, 'campaignid_'.concat(i)), (0, u.C)(t, a);
                            },
                            [e],
                        );
                    })(),
                    j = (0, s.useCallback)(
                        (e) => {
                            e.origin === x.afisha.host && 'close' === e.data.type && C();
                        },
                        [C, x.afisha.host],
                    );
                (0, s.useEffect)(
                    () => (
                        window.addEventListener('message', j),
                        () => {
                            window.removeEventListener('message', j);
                        }
                    ),
                    [j],
                );
                let N = (0, s.useCallback)(
                        (e) => {
                            e ? p() : C();
                        },
                        [C, p],
                    ),
                    T = A(''.concat(x.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(x.afisha.clientId));
                return (0, a.jsxs)(n.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: i,
                    onOpenChange: N,
                    onClose: C,
                    showHeader: !1,
                    className: h().widget,
                    contentClassName: h().content,
                    overlayColor: 'full',
                    containerProps: { 'data-test-id': l.OA.concert.AFISHA_MODAL },
                    children: [
                        (0, a.jsx)(c.q, { children: (0, a.jsx)(o.$, { 'aria-label': b({ id: 'interface-actions.close' }), onClick: C }) }),
                        (0, a.jsx)('iframe', {
                            src: T,
                            className: h().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        13424: (e) => {
            e.exports = {
                root: 'VerticalListItemShimmer_root__Ppz8c',
                infoContainer: 'VerticalListItemShimmer_infoContainer__ycrKq',
                textContainer: 'VerticalListItemShimmer_textContainer__kHkGo',
                title: 'VerticalListItemShimmer_title__z_x63',
                cover: 'VerticalListItemShimmer_cover__0SqgP',
                action: 'VerticalListItemShimmer_action__DvEuY',
            };
        },
        13819: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => _ });
            var a = i(32290),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(71926),
                n = i(30436),
                c = i(98066),
                d = i(10570),
                m = i.n(d);
            let _ = (0, s.PA)((e) => {
                let { id: t, concert: i } = e,
                    { formatDate: s } = (0, l.A)(),
                    d = [],
                    _ = (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == i ? void 0 : i.place) && d.push((0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: i.place })),
                    (null == i ? void 0 : i.datetime) &&
                        d.push(_, (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', className: m().time, children: s(i.datetime, (0, n.f)()) })),
                    (null == i ? void 0 : i.contentRating) && d.push(_, (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', children: i.contentRating })),
                    (0, a.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, a.jsx)(o.HL, { variant: 'div', size: 'm', weight: 'medium', className: m().city, lineClamp: 1, children: null == i ? void 0 : i.city }),
                            (0, a.jsx)('div', { className: m().info, children: d.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(c.m, { className: m().cashback, valuePercent: i.cashbackValuePercent }),
                            !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(c.m, { className: m().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        13889: (e) => {
            e.exports = { cover: 'FamiliarYou_cover__nY4e8', shimmerCover: 'FamiliarYou_shimmerCover__HFgkx' };
        },
        14209: (e) => {
            e.exports = { item: 'Mixes_item__Om7aR' };
        },
        14631: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => h });
            var a = i(32290),
                s = i(96103),
                r = i(55178),
                l = i(21732),
                o = i(73749),
                n = i(90169),
                c = i(57594),
                d = i(40229),
                m = i(8677),
                _ = i(68912),
                u = i(92102),
                v = i(16409),
                p = i.n(v);
            let h = (0, s.PA)((e) => {
                var t, i;
                let { track: s, playContextParams: v } = e,
                    h = (0, n.D)({ playContextParams: v, entityId: s.entityId }),
                    {
                        settings: { isMobile: C },
                    } = (0, c.g)(),
                    x = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: p().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [s],
                    );
                return (0, a.jsx)(u.C, {
                    track: s,
                    meta: (0, a.jsx)(_.j, { withArtistLink: !C, track: s }),
                    beforeBlock: (0, a.jsx)(o.t, {
                        withIcon: !0,
                        className: p().chartCell,
                        progress: null == (t = s.chart) ? void 0 : t.progress,
                        position: null == (i = s.chart) ? void 0 : i.position,
                        isDisliked: s.isDisliked,
                        isDisabled: !s.isAvailable,
                    }),
                    playButtonCellRender: x,
                    controls: (0, a.jsx)(m.Q, { track: s, className: p().controlsBarCell }),
                    ...h,
                    'data-test-id': l.Kq.track.TRACK_CHART,
                });
            });
        },
        15047: (e) => {
            e.exports = {
                root: 'Promotions_root__Osgj2',
                controls: 'Promotions_controls__IEqvq',
                item: 'Promotions_item__ycc9P',
                important: 'Promotions_important__x_kQK',
            };
        },
        15523: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        16409: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        16696: (e) => {
            e.exports = {
                message: 'OverviewBlock_message__f41Rq',
                modal: 'OverviewBlock_modal__Jxiv2',
                modalHeader: 'OverviewBlock_modalHeader__nerV2',
                modalHeader_withTitle: 'OverviewBlock_modalHeader_withTitle__gjKhp',
                modalContent: 'OverviewBlock_modalContent__fw4fH',
                button: 'OverviewBlock_button__k7t4c',
                modalOverlay: 'OverviewBlock_modalOverlay__1dp_D',
            };
        },
        17365: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__l6Fg6',
                item: 'ControlsBar_item__tEQvM',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__3aZyp',
                contextMenu: 'ControlsBar_contextMenu__1Sj5f',
                contextMenu_visible: 'ControlsBar_contextMenu_visible__FMTw4',
                controls_disabled: 'ControlsBar_controls_disabled__xR0_N',
                controls: 'ControlsBar_controls__PEMXx',
                likeIcon: 'ControlsBar_likeIcon__UBXQm',
            };
        },
        17744: (e) => {
            e.exports = {
                root: 'ArtistWithItemsShimmer_root__0UQ8u',
                actionItems: 'ArtistWithItemsShimmer_actionItems__drxv9',
                actionItem: 'ArtistWithItemsShimmer_actionItem__NksfP',
                actionCover: 'ArtistWithItemsShimmer_actionCover__4LUi8',
                actionTextContainer: 'ArtistWithItemsShimmer_actionTextContainer__Qijsx',
                actionText: 'ArtistWithItemsShimmer_actionText__nUSLH',
                actionText_title: 'ArtistWithItemsShimmer_actionText_title__cXusB',
            };
        },
        18125: (e) => {
            e.exports = {
                root_withControls: 'CollectionAlbumsPresaves_root_withControls__qE_u_',
                controls: 'CollectionAlbumsPresaves_controls__8twKX',
                header: 'CollectionAlbumsPresaves_header__1flkp',
                important: 'CollectionAlbumsPresaves_important__EkdBU',
                tab: 'CollectionAlbumsPresaves_tab__V6yvN',
                tabShimmer: 'CollectionAlbumsPresaves_tabShimmer__T6w2W',
                tabCarousel: 'CollectionAlbumsPresaves_tabCarousel__hobTn',
                tabPanel: 'CollectionAlbumsPresaves_tabPanel__ZHz6v',
                carouselEmpty: 'CollectionAlbumsPresaves_carouselEmpty__8szhR',
                item: 'CollectionAlbumsPresaves_item__to1P9',
            };
        },
        18459: (e) => {
            e.exports = { root: 'CollectionPlaylistsEmpty_root__KGNv_' };
        },
        18628: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
            };
        },
        18941: (e) => {
            e.exports = {
                root: 'Special_root__FOrBZ',
                actions: 'Special_actions__XYuvB',
                textContainer: 'Special_textContainer__pN_TF',
                textColor: 'Special_textColor__dySbq',
                imageContainer: 'Special_imageContainer__V1_E3',
                image: 'Special_image__1sSXR',
                button: 'Special_button__j8gGH',
                advDisclaimer: 'Special_advDisclaimer__aMsoC',
                advDisclaimerTrigger: 'Special_advDisclaimerTrigger__19qVj',
                advDisclaimerPopover: 'Special_advDisclaimerPopover__5WrLl',
                advDisclaimerText: 'Special_advDisclaimerText__eQP9w',
            };
        },
        19111: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        19429: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(80451),
                n = i(19620),
                c = i(49522),
                d = i(26279),
                m = i.n(d),
                _ = i(29869);
            let u = (0, r.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: i,
                            carouselItemClassName: r,
                            forwardRef: d,
                            isShimmerVisible: u,
                            isShimmerActive: v,
                            title: p,
                            description: h,
                            containerClassName: C,
                            headerClassName: x,
                            viewAllActionLink: b,
                            artistIdWithoutLink: A,
                            withVideo: j = !0,
                            clips: N,
                            headingVariant: T,
                            className: I,
                            shouldOpenModalOnCardClick: f = !0,
                            itemCounter: g,
                            ...S
                        } = e,
                        L = (0, l.useId)(),
                        k = (0, l.useRef)(null);
                    return (0, a.jsxs)('section', {
                        className: (0, s.$)(m().root, I),
                        ref: d,
                        ...(0, o.getDataAttrFromProps)(S),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: x,
                                labeledForId: L,
                                title: p,
                                description: h,
                                viewAllActionLink: b,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: k }),
                                headingVariant: T,
                                withDescription: !!h,
                            }),
                            (0, a.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: i,
                                carouselItemClassName: r,
                                isShimmerVisible: u,
                                isShimmerActive: v,
                                containerClassName: C,
                                artistIdWithoutLink: A,
                                withVideo: j,
                                clips: N,
                                shouldOpenModalOnCardClick: f,
                                itemCounter: g,
                                ref: k,
                                'aria-labelledby': L,
                            }),
                        ],
                    });
                }),
                v = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        19522: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var a = i(60900),
                s = i(91027);
            let r = () => {
                let { formatMessage: e, formatNumber: t } = (0, a.A)();
                return (0, s.c)((i) => {
                    var a, s;
                    return (null == (a = i.price) ? void 0 : a.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(i.price.value, { style: 'currency', currency: null == (s = i.price) ? void 0 : s.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        19875: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => m });
            var a = i(55178),
                s = i(16172),
                r = i(52068),
                l = i(62376),
                o = i(79374),
                n = i(84782),
                c = i(37240),
                d = i(51012);
            let m = () => {
                let e = (0, r.st)(),
                    t = (0, l.U)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: m } = (0, c.$)(),
                    { mainObjectType: _, mainObjectId: u } = (0, n.N)(),
                    { skeleton: v } = (0, d.b)();
                return (0, a.useCallback)(
                    (a) => {
                        let { tabId: r = '', tabPos: l = 1, isTabSelectedByDefault: n = !1 } = a;
                        if (!e || !m) return;
                        let c = { hash: i, pageId: o.W[m], tabId: r, tabPos: l, isTabSelectedByDefault: n };
                        v && (c.skeletonId = v), u && _ && ((c.mainObjectType = _), (c.mainObjectId = u));
                        let d = (0, s.Fx)({ params: c, logger: t, context: 'useSendEventOnTabOpened' });
                        d && (0, s.TV)(e.evgenInstance, d);
                    },
                    [e, m, i, v, u, _, t],
                );
            };
        },
        20567: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
        22139: (e) => {
            e.exports = { root: 'CollectionClipsEmpty_root__LwgZS', text: 'CollectionClipsEmpty_text__cZfLW' };
        },
        22773: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => rG });
            var a,
                s = i(96194),
                r = i(32290),
                l = i(55178),
                o = i(16172),
                n = i(26042),
                c = i(63618),
                d = i(96103),
                m = i(60900),
                _ = i(39407),
                u = i(21732),
                v = i(71483);
            !(function (e) {
                (e.TOP = 'top'), (e.CENTER = 'center');
            })(a || (a = {}));
            var p = i(91027),
                h = i(86269),
                C = i(71926),
                x = i(34883),
                b = i(41677),
                A = i(71735),
                j = i(47745),
                N = i(2969),
                T = i(23352),
                I = i(72396),
                f = i(89083),
                g = i(5537),
                S = i(84062),
                L = i(90169),
                k = i(57594),
                y = i(11323),
                R = i(13798),
                E = i(61258),
                P = i(90326),
                w = i(52022),
                O = i.n(w);
            let M = (0, d.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, m.A)(),
                    { ref: s, intersectionPropertyId: l } = (0, T.n)(),
                    n = (0, j.N)(),
                    d = (0, S.Z)(t.albumUrl),
                    w = (0, x.c)({ album: t.album, callback: d }),
                    M = (0, N.b)(),
                    B = (0, A.P)(),
                    {
                        paywall: { modal: D },
                    } = (0, k.g)(),
                    V = (0, g.N)(),
                    { from: W } = (0, I.f)({ contextId: t.album.id, contextType: v.K.Album }),
                    { isPlaying: U, togglePlay: H } = (0, L.D)({
                        playContextParams: {
                            contextData: { type: v.K.Album, meta: { id: t.album.id }, from: W, utmLink: (0, f.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    z = (0, p.c)((e) => {
                        t.setClicked(), n({ to: o.QT.AlbumScreen }), w(e);
                    }),
                    K = (0, p.c)(() => {
                        t.setClicked(), H();
                    }),
                    Y = (0, x.c)({ album: t.album, callback: K }),
                    F = (0, p.c)(() => {
                        if (!B()) {
                            if (V) return void D.open();
                            Y(), M(!U);
                        }
                    }),
                    $ = i({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    X = t.coverContentMode === a.TOP;
                return (0, r.jsxs)('div', {
                    className: O().root,
                    ref: s,
                    'data-intersection-property-id': l,
                    'data-test-id': u.Kq.albumPromo.ALBUM_PROMO_CARD,
                    children: [
                        (0, r.jsxs)(h.t, {
                            className: O().artistCover,
                            radius: 'm',
                            withShadow: !0,
                            'data-test-id': u.Kq.albumPromo.ALBUM_PROMO_CARD_ARTIST_COVER,
                            children: [
                                (0, r.jsx)(E.N, {
                                    className: O().artistLink,
                                    href: t.albumUrl,
                                    onClick: z,
                                    'aria-label': $,
                                    children: (0, r.jsx)(y.B, {
                                        className: (0, c.$)(O().artistImage, { [O().artistImage_withTopPosition]: X }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, r.jsx)(h.t, {
                                    className: O().albumCover,
                                    radius: 'xs',
                                    'data-test-id': u.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER,
                                    children: (0, r.jsx)(E.N, {
                                        className: O().albumLink,
                                        href: t.albumUrl,
                                        onClick: z,
                                        'aria-label': $,
                                        children: (0, r.jsx)(y.B, {
                                            className: O().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: 'cover',
                                            'aria-hidden': !0,
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(P.D, {
                                    className: O().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 'default',
                                    color: 'secondary',
                                    iconSize: 'xxs',
                                    isPlaying: U,
                                    onClick: F,
                                    iconClassName: O().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, r.jsx)(C.HL, {
                                        className: O().buttonText,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, r.jsx)(_.A, { id: 'player-actions.listen' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: O().meta,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: O().titleContainer,
                                    'data-test-id': u.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE,
                                    children: [
                                        (0, r.jsx)(C.HL, {
                                            className: O().title,
                                            variant: 'div',
                                            lineClamp: 1,
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, r.jsx)(E.N, {
                                                className: O().titleLink,
                                                href: t.albumUrl,
                                                onClick: z,
                                                'data-test-id': u.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE_LINK,
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, r.jsx)(R.N, { getDescriptionTexts: t.album.getDescriptionTexts, variant: t.album.explicitDisclaimer, size: 'xxxs' }),
                                    ],
                                }),
                                (0, r.jsx)(b.i, { className: O().artists, linkClassName: O().artistsLink, artists: t.artists, lineClamp: 1, captionSize: 's' }),
                            ],
                        }),
                    ],
                });
            });
            var B = i(80451),
                D = i(75245),
                V = i(19620),
                W = i(49522),
                U = i(78035),
                H = {
                    1964: (e) => {
                        e.exports = U;
                    },
                },
                z = {},
                K = {};
            (() => {
                Object.defineProperty(K, 'X', { value: !0 }), (K.q = void 0);
                var e = (function e(t) {
                    var i = z[t];
                    if (void 0 !== i) return i.exports;
                    var a = (z[t] = { exports: {} });
                    return H[t](a, a.exports, e), a.exports;
                })(1964);
                Object.defineProperty(K, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                K.X;
            var Y = K.q,
                F = i(42406);
            let $ = (e) => {
                let t,
                    { callback: i, visibleTime: a, threshold: s } = e;
                return (0, F.Gv)(
                    (e, s) => {
                        e.isIntersecting &&
                            (t = setTimeout(() => {
                                i(), s.disconnect();
                            }, a)),
                            e.isIntersecting || clearTimeout(t);
                    },
                    { threshold: s },
                );
            };
            var X = i(41640),
                G = i.n(X);
            let Q = (e) => {
                    let {
                            forwardRef: t,
                            isLoaded: i,
                            setOutdated: a,
                            headerClassName: s,
                            containerClassName: o,
                            data: n,
                            meta: d,
                            headingVariant: m,
                            className: _,
                            children: u,
                            ...v
                        } = e,
                        { intersectionPropertyId: p, ref: h } = ((e) => {
                            let { forwardedRef: t, isLoaded: i, data: a, setOutdated: s } = e,
                                { report: r, reporting: o } = null != a ? a : {},
                                { ref: n, intersectionPropertyId: c } = ((e) => {
                                    let { params: t, isLoaded: i } = e,
                                        a = (0, l.useRef)(null),
                                        s = (0, l.useId)(),
                                        r = (0, l.useMemo)(() => {
                                            if (i) return t.map($);
                                        }, [i, t]);
                                    return (
                                        (0, l.useEffect)(
                                            () => (
                                                null == r ||
                                                    r.forEach((e) => {
                                                        a.current && e.observe(a.current);
                                                    }),
                                                () => {
                                                    null == r ||
                                                        r.forEach((e) => {
                                                            e.disconnect();
                                                        });
                                                }
                                            ),
                                            [r],
                                        ),
                                        { intersectionPropertyId: s, ref: a }
                                    );
                                })({
                                    isLoaded: i,
                                    params: (0, l.useMemo)(() => {
                                        var e, t, i;
                                        return [
                                            {
                                                threshold: 0,
                                                visibleTime: null != (e = null == o ? void 0 : o.blockRender.timeMs) ? e : 0,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.blockRender.url;
                                                    e && (null == r || r(e));
                                                },
                                            },
                                            {
                                                threshold: 0.5,
                                                visibleTime: null != (t = null == o ? void 0 : o.blockImpression.timeMs) ? t : 2100,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.blockImpression.url;
                                                    e && (null == r || r(e)), s();
                                                },
                                            },
                                            {
                                                threshold: 0,
                                                visibleTime: null != (i = null == o ? void 0 : o.adImpressions.timeMs) ? i : 2100,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.adImpressions.url;
                                                    e && (null == r || r(e));
                                                },
                                            },
                                        ];
                                    }, [
                                        r,
                                        null == o ? void 0 : o.adImpressions.timeMs,
                                        null == o ? void 0 : o.adImpressions.url,
                                        null == o ? void 0 : o.blockImpression.timeMs,
                                        null == o ? void 0 : o.blockImpression.url,
                                        null == o ? void 0 : o.blockRender.timeMs,
                                        null == o ? void 0 : o.blockRender.url,
                                        s,
                                    ]),
                                });
                            return { intersectionPropertyId: c, ref: Y([n, t]) };
                        })({ forwardedRef: t, data: n, isLoaded: i, setOutdated: a }),
                        C = (0, l.useRef)(null);
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(G().root, _),
                        ref: h,
                        'data-intersection-property-id': p,
                        ...(0, B.getDataAttrFromProps)(v),
                        children: [
                            (0, r.jsx)(V.T, { className: s, title: d.title, controls: (0, r.jsx)(W.X, { className: G().controls, carouselRef: C }), headingVariant: m }),
                            (0, r.jsx)(D.F, { className: o, ref: C, itemClassName: (0, c.$)(G().item, G().important), children: u }),
                        ],
                    });
                },
                q = (0, l.forwardRef)((e, t) => (0, r.jsx)(Q, { forwardRef: t, ...e })),
                Z = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, r.jsx)(q, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.items.length,
                                              children: (0, r.jsx)(M, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                J = (0, l.forwardRef)((e, t) => (0, r.jsx)(Z, { forwardRef: t, ...e }));
            var ee = i(58359),
                et = i(5347),
                ei = i.n(et);
            let ea = (0, d.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            album: a,
                            description: s,
                            trailerButton: n,
                            entityName: d,
                            onClick: _,
                            albumUrl: b,
                            from: T,
                            utmLink: I,
                            coverColor: f,
                            ...w
                        } = e,
                        O = (0, S.Z)(b),
                        M = (0, A.P)(),
                        D = (0, N.b)(),
                        {
                            paywall: { modal: V },
                        } = (0, k.g)(),
                        W = (0, g.N)(),
                        { formatMessage: U } = (0, m.A)(),
                        { isPlaying: H, togglePlay: z } = (0, L.D)({
                            playContextParams: { contextData: { type: v.K.Album, meta: { id: a.id }, from: T, utmLink: I }, loadContextMeta: !0 },
                        }),
                        K = (0, p.c)(() => {
                            null == _ || _(), z();
                        }),
                        Y = (0, x.c)({ album: a, callback: O }),
                        F = (0, x.c)({ album: a, callback: K }),
                        $ = (0, j.N)(),
                        X = (0, p.c)((e) => {
                            (0, ee.P)(e, ei().ripple), e.stopPropagation(), null == _ || _(), $({ to: o.QT.AlbumScreen }), Y(e);
                        }),
                        G = (0, p.c)(() => {
                            if (!M()) {
                                if (W) return void V.open();
                                F(), D(!H);
                            }
                        }),
                        Q = (0, l.useMemo)(() => {
                            let e;
                            if (f) {
                                let { h: t, s: i } = (0, B.hexToHsl)(f);
                                e = 'hsl('.concat(t, ', ').concat(i, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == a ? void 0 : a.averageColor };
                        }, [null == a ? void 0 : a.averageColor, f]),
                        q = d ? ''.concat(d, ' ').concat(a.title) : a.title;
                    return (0, r.jsxs)(h.t, {
                        radius: 'l',
                        className: (0, c.$)(ei().root, t),
                        ref: i,
                        style: Q,
                        ...(0, B.getDataAttrFromProps)(w),
                        children: [
                            (0, r.jsx)(E.N, { href: b, className: ei().paperLink, onClick: X, 'aria-label': q }),
                            (0, r.jsx)(y.B, {
                                className: ei().image,
                                src: a.coverUri,
                                alt: U({ id: 'entity-names.album-name' }, { albumName: a.title }),
                                size: 100,
                                fit: 'cover',
                                withAvatarReplace: !0,
                            }),
                            (0, r.jsxs)('div', {
                                className: ei().info,
                                children: [
                                    (0, r.jsx)(C.HL, {
                                        className: ei().title,
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 2,
                                        'aria-label': q,
                                        'data-test-id': u.Kq.newRelease.NEW_RELEASE_CARD_TITLE,
                                        children: a.title,
                                    }),
                                    s &&
                                        (0, r.jsx)(C.HL, {
                                            className: ei().description,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            'data-test-id': u.Kq.newRelease.NEW_RELEASE_CARD_DESCRIPTION,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)('div', {
                                className: ei().container,
                                children: [
                                    a.explicitDisclaimer &&
                                        (0, r.jsx)(R.N, {
                                            className: ei().explicitMark,
                                            containerClassName: ei().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            variant: a.explicitDisclaimer,
                                        }),
                                    n,
                                    (0, r.jsx)(P.D, {
                                        buttonVariant: 'default',
                                        withHover: !1,
                                        className: ei().button,
                                        iconClassName: ei().buttonIcon,
                                        variant: 'filled',
                                        iconSize: 'm',
                                        isPlaying: H,
                                        onClick: G,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                es = (0, l.forwardRef)((e, t) => (0, r.jsx)(ea, { forwardRef: t, ...e })),
                er = (0, d.PA)((e) => {
                    let { promo: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, T.n)(),
                        { from: s } = (0, I.f)({ contextId: t.album.id, contextType: v.K.Album });
                    return (0, r.jsx)(es, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, f.Z)(t.reportingProperties),
                        from: s,
                        ref: i,
                        'data-intersection-property-id': a,
                        description: t.album.artistNames,
                        'data-test-id': u.Kq.simpleAlbumPromo.SIMPLE_ALBUM_PROMO_CARD,
                    });
                }),
                el = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, r.jsx)(q, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.items.length,
                                              children: (0, r.jsx)(er, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                eo = (0, l.forwardRef)((e, t) => (0, r.jsx)(el, { forwardRef: t, ...e }));
            var en = i(79589),
                ec = i(13819),
                ed = i(61744),
                em = i(66988),
                e_ = i(75127),
                eu = i(37997),
                ev = i(91555),
                ep = i.n(ev);
            let eh = (e) => {
                    let {
                            artistId: t,
                            forwardRef: i,
                            isLoading: a,
                            title: s,
                            viewAllActionLink: n,
                            children: d,
                            className: m,
                            containerClassName: _,
                            headerClassName: u,
                            itemClassName: v,
                            headingVariant: p,
                            ...h
                        } = e,
                        C = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        b = (0, eu.m)({ artistId: t }),
                        A = (0, l.useCallback)(() => {
                            b(o.H2.ArtistConcertsScreen);
                        }, [b]),
                        j = (0, l.useMemo)(
                            () =>
                                (0, em.A)(d, 2)
                                    .slice(0, 4)
                                    .map((e, t) => (0, r.jsx)('div', { className: ep().concertsColumn, children: e }, t)),
                            [d],
                        );
                    return (0, r.jsxs)('section', {
                        ref: i,
                        className: (0, c.$)(ep().root, m),
                        ...h,
                        children: [
                            (0, r.jsx)(V.T, {
                                className: u,
                                labeledForId: C,
                                title: s,
                                viewAllActionLink: n,
                                onViewAllAction: A,
                                controls: (0, r.jsx)(W.X, { className: ep().controls, carouselRef: x }),
                                headingVariant: p,
                                shouldSendAnalyticsOnLoaded: !0,
                            }),
                            (0, r.jsx)(D.F, {
                                itemClassName: (0, c.$)(ep().item, { [ep().item_singleColumn]: 2 >= l.Children.count(d) }, v),
                                className: (0, c.$)(_, { [ep().preventScroll]: a }),
                                ref: x,
                                'aria-labelledby': C,
                                children: a ? Array.from({ length: 2 }, (e, t) => (0, r.jsx)('div', { className: ep().concertsColumn, children: (0, e_.T)(2) }, t)) : j,
                            }),
                        ],
                    });
                },
                eC = (0, l.forwardRef)((e, t) => (0, r.jsx)(eh, { forwardRef: t, ...e }));
            var ex = i(53937),
                eb = i(79406);
            let eA = (0, d.PA)((e) => {
                    var t, i, a, s;
                    let {
                            forwardRef: l,
                            isShimmerVisible: c,
                            isShimmerActive: d,
                            containerClassName: m,
                            headerClassName: _,
                            meta: u,
                            data: v,
                            headingVariant: p,
                            className: h,
                            ...C
                        } = e,
                        { artist: x, concert: b, experiments: A } = (0, k.g)(),
                        j = null != (a = null != (i = x.id) ? i : b.leadArtistId) ? a : '',
                        N = A.checkExperiment(eb.z.WebNextConcertsIdentityEventType, 'on'),
                        T = N ? ed.M : ec.Z;
                    return (0, r.jsx)(n.B, {
                        objectType: o.ky.Shortcut,
                        objectId: String(j),
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: null != (s = null == v || null == (t = v.items) ? void 0 : t.length) ? s : 0,
                        children: (0, r.jsx)(eC, {
                            ref: l,
                            artistId: String(j),
                            title: u.title,
                            viewAllActionLink: u.viewAllActionLink,
                            isLoading: c || d,
                            headingVariant: p,
                            className: h,
                            headerClassName: _,
                            containerClassName: m,
                            ...(0, B.getDataAttrFromProps)(C),
                            children:
                                null == v
                                    ? void 0
                                    : v.items.map((e, t) => {
                                          var i, a;
                                          let {
                                              objectPosX: s,
                                              objectPosY: l,
                                              objectsCount: c,
                                          } = (0, ex.$)({ index: t, count: null != (a = null == (i = v.items) ? void 0 : i.length) ? a : 0, itemsCountPerColumn: 2 });
                                          return (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.ky.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: l,
                                                  objectsCount: c,
                                                  children: (0, r.jsx)(en.V, { artistId: String(j), concert: e, meta: (0, r.jsx)(T, { concert: e }), shouldShowMask: N }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                ej = (0, l.forwardRef)((e, t) => (0, r.jsx)(eA, { forwardRef: t, ...e }));
            var eN = i(74196),
                eT = i(39723),
                eI = i.n(eT);
            let ef = (0, d.PA)((e) => {
                    var t, i, a;
                    let { isShimmerVisible: s, isShimmerActive: l, headerClassName: o, data: n, headingVariant: c } = e,
                        { ref: d, intersectionPropertyId: m } = (0, T.n)(),
                        { playlist: u, artists: v } = n || {},
                        { artist: p } = (0, k.g)(),
                        x = !!(null == (t = p.meta) ? void 0 : t.artist.isAvailable),
                        A = null == (i = p.meta) ? void 0 : i.artist.coverUri,
                        j = null == (a = p.meta) ? void 0 : a.artist.name;
                    return (0, r.jsx)(V.T, {
                        ref: d,
                        'data-intersection-property-id': m,
                        coverUrl: null == u ? void 0 : u.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == u ? void 0 : u.url,
                        title: null == u ? void 0 : u.title,
                        controls: !1,
                        coverContainerClassName: eI().cover,
                        shimmerCoverClassName: eI().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: l,
                        headingVariant: c,
                        className: o,
                        subTitle: (0, r.jsxs)('div', {
                            className: eI().subTitle,
                            children: [
                                (0, r.jsx)(eN.q, {
                                    children: (0, r.jsx)(C.DZ, {
                                        variant: 'h4',
                                        children: (0, r.jsx)(_.A, { id: 'page.artist-pick-aria-label', values: { artistName: j } }),
                                    }),
                                }),
                                (0, r.jsx)(C.HL, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: eI().text,
                                    'aria-hidden': !0,
                                    children: (0, r.jsx)(_.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, r.jsx)(h.t, {
                                    radius: 'round',
                                    className: eI().smallCoverContainer,
                                    children: (0, r.jsx)(y.B, {
                                        fit: 'cover',
                                        src: A,
                                        size: 50,
                                        className: eI().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: x,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                j &&
                                    (0, r.jsx)(C.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: eI().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: j,
                                    }),
                            ],
                        }),
                        description: (0, r.jsx)(b.i, {
                            artists: v,
                            linkClassName: eI().artistLink,
                            spoilerClassName: eI().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, r.jsx)(_.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eg = (0, d.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, className: s, ...l } = e;
                    return (0, r.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, B.getDataAttrFromProps)(l),
                        children: (0, r.jsx)(n.B, {
                            objectType: o.ky.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectId: null != (i = null == (t = l.data) ? void 0 : t.playlist.id) ? i : '',
                            children: (0, r.jsx)(ef, { ...l }),
                        }),
                    });
                }),
                eS = (0, l.forwardRef)((e, t) => (0, r.jsx)(eg, { forwardRef: t, ...e }));
            var eL = i(69951),
                ek = i(98350),
                ey = i(49518),
                eR = i(34223),
                eE = i(81497),
                eP = i.n(eE);
            let ew = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: l,
                            data: d,
                            headerClassName: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        h = (function () {
                            var e;
                            let { artist: t, concert: i } = (0, k.g)();
                            return null != (e = t.id) ? e : i.leadArtistId;
                        })(),
                        { from: C, utmLink: x } = (0, I.f)({ contextType: v.K.Artist, contextId: h });
                    return null === h
                        ? null
                        : (0, r.jsx)(ey.$, {
                              className: u,
                              ref: t,
                              shimmer: (0, r.jsx)(eR.D, { variant: ek.X.PLAYLIST, isActive: a }),
                              maxColumnsCount: ey.D.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              carouselClassName: s,
                              carouselItemClassName: (0, c.$)(eP().item, eP().important),
                              blockHeaderClassName: m,
                              blockHeaderTitle: l.title,
                              blockHeaderDescription: l.description,
                              blockHeaderHeadingVariant: _,
                              viewAllActionLink: l.viewAllActionLink,
                              ...p,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) => {
                                            var i;
                                            let { objectPosX: a, objectPosY: s, objectsCount: l } = (0, ex.$)({ index: t, count: d.items.length });
                                            return (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectId: e.id,
                                                    objectType: o.ky.Track,
                                                    objectPosX: a,
                                                    objectPosY: s,
                                                    objectsCount: l,
                                                    children: (0, r.jsx)(eL.K, {
                                                        track: e,
                                                        playContextParams:
                                                            ((i = e.id),
                                                            d && h
                                                                ? {
                                                                      contextData: { type: v.K.Artist, meta: { id: h }, from: C, utmLink: x },
                                                                      queueParams: { index: t, entityId: i },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: v.K.Artist, meta: { id: '' }, from: C, utmLink: x } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                eO = (0, l.forwardRef)((e, t) => (0, r.jsx)(ew, { forwardRef: t, ...e }));
            var eM = i(6752),
                eB = i(24170),
                eD = i(89020);
            let eV = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: l,
                            meta: c,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        v = (0, eM.L)(() =>
                            i || !d
                                ? (0, r.jsx)(eD.V, { className: s, isActive: a })
                                : (0, r.jsx)(n.B, {
                                      objectType: o.ky.Album,
                                      objectId: String(d.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, r.jsx)(eB.a, { className: s, album: d.album }),
                                  }),
                        );
                    return (0, r.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [(0, r.jsx)(V.T, { className: l, title: c.title, headingVariant: m, titleLineClamp: 1 }), v],
                    });
                },
                eW = (0, l.forwardRef)((e, t) => (0, r.jsx)(eV, { forwardRef: t, ...e }));
            var eU = i(40126);
            let eH = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: l,
                            meta: c,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        v = (0, eM.L)(() =>
                            i || !d
                                ? (0, r.jsx)(eD.V, { className: s, isActive: a })
                                : (0, r.jsx)(n.B, {
                                      objectType: o.ky.UpcomingAlbum,
                                      objectId: String(d.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, r.jsx)(eU.M, { className: s, upcomingAlbum: d.album }),
                                  }),
                        );
                    return (0, r.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [(0, r.jsx)(V.T, { className: l, title: c.title, headingVariant: m, titleLineClamp: 1 }), v],
                    });
                },
                ez = (0, l.forwardRef)((e, t) => (0, r.jsx)(eH, { forwardRef: t, ...e }));
            var eK = i(14631),
                eY = i(59888),
                eF = i(56958);
            let e$ = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: l,
                            data: c,
                            headerClassName: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        { from: p, utmLink: h } = (0, I.f)({ contextType: v.K.Playlist, contextId: null == c ? void 0 : c.playlist.id }),
                        C = (0, eF.i)({ playlistId: null == c ? void 0 : c.playlist.id });
                    return (0, r.jsx)(eY._, {
                        sourceContextData: C,
                        children: (0, r.jsx)(ey.$, {
                            className: _,
                            ref: t,
                            shimmer: (0, r.jsx)(eR.D, { variant: ek.X.PLAYLIST, isActive: a }),
                            maxColumnsCount: ey.D.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            carouselClassName: s,
                            blockHeaderClassName: d,
                            blockHeaderTitle: l.title,
                            blockHeaderDescription: l.description,
                            blockHeaderHeadingVariant: m,
                            viewAllActionLink: l.viewAllActionLink,
                            ...u,
                            children:
                                null == c
                                    ? void 0
                                    : c.items.map((e, t) => {
                                          let { objectPosX: i, objectPosY: a, objectsCount: s } = (0, ex.$)({ index: t, count: c.items.length });
                                          return (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectId: e.data.id,
                                                  objectType: o.ky.Track,
                                                  objectPosX: i,
                                                  objectPosY: a,
                                                  objectsCount: s,
                                                  children: (0, r.jsx)(eK.Q, {
                                                      track: e.data,
                                                      playContextParams: ((e) =>
                                                          c
                                                              ? {
                                                                    contextData: { type: v.K.Playlist, meta: { id: c.playlist.id }, from: p, utmLink: h },
                                                                    queueParams: { index: c.items.findIndex((t) => t.data.id === e), entityId: e },
                                                                    loadContextMeta: !0,
                                                                }
                                                              : { contextData: { type: v.K.Playlist, meta: { id: '' }, from: p, utmLink: h } })(e.data.id),
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eX = (0, l.forwardRef)((e, t) => (0, r.jsx)(e$, { forwardRef: t, ...e }));
            var eG = i(19429);
            let eQ = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                eq = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, meta: l, containerClassName: o, headerClassName: n, className: c, ...d } = e;
                    return (0, r.jsx)(eG.K, {
                        className: c,
                        ref: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        clips: eQ(null == s ? void 0 : s.items),
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        containerClassName: o,
                        headerClassName: n,
                        ...d,
                    });
                },
                eZ = (0, l.forwardRef)((e, t) => (0, r.jsx)(eq, { forwardRef: t, ...e }));
            var eJ = i(98148),
                e0 = i(53226),
                e1 = i.n(e0);
            let e2 = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: l, headingVariant: o } = e,
                        { formatMessage: n } = (0, m.A)();
                    return (0, r.jsxs)('div', {
                        className: e1().root,
                        children: [
                            (0, r.jsx)(V.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: o,
                                withDescription: !!i,
                            }),
                            (0, r.jsx)('div', { className: (0, c.$)(e1().text, l), children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                e3 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (null == d ? void 0 : d.isEmptyBlock)
                        ? (0, r.jsx)(e2, {
                              title: c.title,
                              description: c.description,
                              viewAllActionLink: c.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: l,
                              headingVariant: m,
                          })
                        : (0, r.jsx)(eJ.O, {
                              className: _,
                              ...u,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              headerClassName: l,
                              containerClassName: s,
                              title: c.title,
                              description: c.description,
                              viewAllActionLink: c.viewAllActionLink,
                              ref: t,
                              headingVariant: m,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, r.jsx)(eB.a, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                e6 = (0, l.forwardRef)((e, t) => (0, r.jsx)(e3, { forwardRef: t, ...e }));
            var e9 = i(90404),
                e7 = i(15299),
                e4 = i(84782),
                e8 = i(30564),
                e5 = i(45180),
                te = i(8946),
                tt = i(18125),
                ti = i.n(tt),
                ta = i(91118),
                ts = i(54997),
                tr = i.n(ts);
            let tl = (e) => {
                    let { tab: t, areBothTabsEmpty: i } = e,
                        a = (0, l.useMemo)(() => {
                            switch (t) {
                                case ta.n.ALBUM:
                                    return (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-albums' });
                                case ta.n.PRESAVED_ALBUM:
                                    return (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, r.jsx)('div', { className: (0, c.$)(tr().root, { [tr().root_oneEmptyTab]: !i, [tr().root_twoEmptyTabs]: i }), children: a });
                },
                to = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: v,
                            ...p
                        } = e,
                        { objectsCount: h } = (0, e4.N)(),
                        C = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        b = (0, l.useId)(),
                        A = ''.concat(C, ' ').concat(C, '-description'),
                        j = (0, e7.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        N = (0, l.useMemo)(() => {
                            var e;
                            return (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.items.length) === 0;
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        T = (0, l.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              !(null == _ ? void 0 : _.areBothTabsEmpty) &&
                                                  (0, r.jsx)(D.F, {
                                                      className: (0, c.$)(ti().carouselEmpty, s),
                                                      itemClassName: (0, c.$)(ti().item, ti().important),
                                                      tabIndex: -1,
                                                      children: (0, e8.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, r.jsx)(tl, { tab: e.type, areBothTabsEmpty: null == _ ? void 0 : _.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, r.jsx)(D.F, {
                                          ref: x,
                                          itemClassName: (0, c.$)(ti().item, ti().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: e.items.map((t, i) => {
                                              switch (t.type) {
                                                  case e9._.ALBUM_ITEM:
                                                      return (0, r.jsx)(
                                                          n.B,
                                                          {
                                                              objectType: o.ky.Album,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, r.jsx)(eB.a, { contentLinesCount: 4, album: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case e9._.PRESAVED_ALBUM_ITEM:
                                                      return (0, r.jsx)(
                                                          n.B,
                                                          {
                                                              objectType: o.ky.UpcomingAlbum,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, r.jsx)(eU.M, { contentLinesCount: 4, upcomingAlbum: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [A, s, null == _ ? void 0 : _.areBothTabsEmpty],
                        ),
                        I = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(D.F, {
                                          ref: x,
                                          itemClassName: (0, c.$)(ti().item, ti().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, e8.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, r.jsx)(e7.Kp, { name: t, value: j.value, elementId: b, className: ti().tabPanel, children: T(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, b, T],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(ti().root, v, { [ti().root_withControls]: !N }),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.ky.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, r.jsx)(V.T, {
                                    className: (0, c.$)(d, ti().header, ti().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: C,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: ti().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, r.jsx)(te.wI, {
                                className: (0, c.$)(s, ti().tabCarousel, ti().important),
                                isShimmerVisible: i,
                                elementId: b,
                                shimmer: (0, r.jsx)(te.zr, { isActive: a, className: (0, c.$)(s, ti().tabCarousel, ti().important), shimmerClassName: ti().tabShimmer }),
                                'aria-labelledby': C,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, r.jsx)(e5.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, c.$)(ti().tab, ti().important) }, e.id),
                                          ),
                            }),
                            I,
                        ],
                    });
                }),
                tn = (0, l.forwardRef)((e, t) => (0, r.jsx)(to, { forwardRef: t, ...e }));
            var tc = i(7474),
                td = i(40624),
                tm = i.n(td);
            let t_ = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: l } = e,
                        { formatMessage: o } = (0, m.A)();
                    return (0, r.jsxs)('div', {
                        className: tm().root,
                        children: [
                            (0, r.jsx)(V.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': o({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!i,
                            }),
                            (0, r.jsx)('div', { className: (0, c.$)(tm().text, l), children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                tu = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        className: c,
                        meta: d,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return (null == m ? void 0 : m.isEmptyBlock)
                        ? (0, r.jsx)(t_, {
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: l,
                          })
                        : (0, r.jsx)(eJ.O, {
                              ...u,
                              className: c,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: l,
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: m.items.length,
                                                    children: (0, r.jsx)(tc.a, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                tv = (0, l.forwardRef)((e, t) => (0, r.jsx)(tu, { forwardRef: t, ...e }));
            var tp = i(44989),
                th = i(50162),
                tC = i(19529),
                tx = i(37862),
                tb = i(48922),
                tA = i(7697),
                tj = i(43564),
                tN = i(32156),
                tT = i(1444),
                tI = i(40229),
                tf = i(58910),
                tg = i.n(tf);
            let tS = (e) => {
                    var t;
                    let { item: i } = e,
                        a = (0, p.c)((e) => {
                            (0, ee.P)(e, tg().ripple);
                        });
                    return (0, r.jsxs)(E.N, {
                        href: i.data.viewAllActionLink,
                        className: (0, c.$)(tg().item, tg().menuItem),
                        onClick: a,
                        children: [
                            (0, r.jsx)(th._V, {
                                src: null == (t = i.data.cover) ? void 0 : t.uri,
                                className: tg().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, r.jsx)(C.HL, { className: tg().text, variant: 'div', type: 'entity', size: 'm', weight: 'medium', lineClamp: 2, children: i.data.title }),
                        ],
                    });
                },
                tL = (0, d.PA)((e) => {
                    let { item: t, artistId: i } = e,
                        [a, s] = (0, l.useState)(!1),
                        { state: o, setState: n } = (0, tp.e)(!1),
                        c = (0, A.P)(),
                        { withPlusPopoverWeb: d } = (0, tA.X)(),
                        m = (0, N.b)(),
                        _ = ''.concat(tx.U.ARTIST, '-').concat(i),
                        {
                            isPlaying: u,
                            togglePlay: v,
                            isCurrent: h,
                        } = (0, tj.B)({ seeds: t.data.seeds, pageIdForFrom: tb._Q.RADIO, blockIdForFrom: _, parentContextId: i }),
                        x = (0, p.c)(async () => (d ? void n(!0) : v())),
                        b = (0, p.c)(() => {
                            c() ||
                                (s(!0),
                                x().finally(() => {
                                    s(!1);
                                }),
                                m(!u));
                        }),
                        j = (0, p.c)((e) => {
                            (0, ee.P)(e, tg().ripple), b();
                        }),
                        T = (0, eM.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, r.jsx)(tC.n, { agent: t.data.agent, isCurrent: h, isPlaying: u, onPlayButtonClick: b, playButtonIconSize: 'm' })
                                : (0, r.jsx)(tI.q, {
                                      isCurrent: h,
                                      isPlaying: u,
                                      isAvailable: !0,
                                      isPlayButtonLoading: a,
                                      onPlayButtonClick: b,
                                      title: t.data.title,
                                      entityCoverStyle: { backgroundColor: null == (e = t.data.agent) ? void 0 : e.cover.color },
                                      coverUri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.64426eadaa320f4f1b4b633a/%%',
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                      playButtonIconSize: 'm',
                                  });
                        }),
                        I = (0, l.useCallback)(
                            () =>
                                (0, r.jsxs)(tT.C, {
                                    className: tg().item,
                                    onClick: j,
                                    children: [
                                        T,
                                        (0, r.jsx)(C.HL, {
                                            className: tg().text,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 2,
                                            children: t.data.title,
                                        }),
                                    ],
                                }),
                            [j, T, t.data.title],
                        );
                    return (0, r.jsx)(tN.S, {
                        isEnabled: d,
                        isOpened: o,
                        onOpenChange: n,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t.data.stationType,
                        renderChildren: I,
                    });
                }),
                tk = (e) => {
                    let { items: t, className: i, artistId: a } = e;
                    return (0, r.jsx)('div', {
                        className: (0, c.$)(tg().root, i),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case e9._.MENU_ITEM:
                                    return (0, r.jsx)(tS, { item: e }, e.key);
                                case e9._.WAVE_AGENT_ITEM:
                                    return (0, r.jsx)(tL, { item: e, artistId: a }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var ty = i(79856),
                tR = i(17744),
                tE = i.n(tR);
            let tP = (e) => {
                    let { isActive: t, itemClassName: i, actionItemClassName: a } = e;
                    return (0, r.jsxs)('div', {
                        className: tE().root,
                        children: [
                            (0, r.jsx)(eD.V, { isActive: t, className: i, round: !0, centered: !0 }),
                            (0, r.jsxs)('div', {
                                className: (0, c.$)(tE().actionItems, a),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: tE().actionItem,
                                        children: [
                                            (0, r.jsx)(ty.W, { isActive: t, className: tE().actionCover, radius: 's' }),
                                            (0, r.jsxs)('div', {
                                                className: tE().actionTextContainer,
                                                children: [
                                                    (0, r.jsx)(ty.W, { isActive: t, className: (0, c.$)(tE().actionText, tE().actionText_title), radius: 's' }),
                                                    (0, r.jsx)(ty.W, { isActive: t, className: tE().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: tE().actionItem,
                                        children: [
                                            (0, r.jsx)(ty.W, { isActive: t, className: tE().actionCover, radius: 'round' }),
                                            (0, r.jsxs)('div', {
                                                className: tE().actionTextContainer,
                                                children: [
                                                    (0, r.jsx)(ty.W, { isActive: t, className: (0, c.$)(tE().actionText, tE().actionText_title), radius: 's' }),
                                                    (0, r.jsx)(ty.W, { isActive: t, className: tE().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tw = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, i) => (0, r.jsx)(tP, { ...t }, i));
                };
            var tO = i(77279),
                tM = i.n(tO);
            let tB = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: d,
                            headerClassName: _,
                            className: u,
                            meta: v,
                            data: p,
                            headingVariant: h,
                            ...C
                        } = e,
                        { formatMessage: x } = (0, m.A)(),
                        b = (0, l.useRef)(null);
                    return (0, r.jsxs)('section', {
                        ref: i,
                        className: (0, c.$)(tM().root, u),
                        ...(0, B.getDataAttrFromProps)(C),
                        children: [
                            (0, r.jsx)(V.T, {
                                className: _,
                                title: v.title,
                                description: v.description,
                                viewAllActionLink: v.viewAllActionLink,
                                headingVariant: h,
                                controls: (0, r.jsx)(W.X, { className: tM().controls, carouselRef: b }),
                            }),
                            (0, r.jsx)(D.F, {
                                className: d,
                                ref: b,
                                children: a
                                    ? tw({
                                          isActive: s,
                                          itemClassName: (0, c.$)(tM().item, tM().important),
                                          actionItemClassName: (0, c.$)(tM().actionItem, tM().important),
                                          countWeb: null == (t = v.source) ? void 0 : t.countWeb,
                                      })
                                    : null == p
                                      ? void 0
                                      : p.artists.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: p.artists.length,
                                                    children: (0, r.jsxs)('div', {
                                                        className: tM().itemContainer,
                                                        'aria-label': x({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, r.jsx)(tc.a, { className: (0, c.$)(tM().item, tM().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, r.jsx)(tk, {
                                                                className: (0, c.$)(tM().actionItem, tM().important),
                                                                items: e.items,
                                                                artistId: e.artist.id,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.artist.id,
                                            ),
                                        ),
                            }),
                        ],
                    });
                },
                tD = (0, l.forwardRef)((e, t) => (0, r.jsx)(tB, { forwardRef: t, ...e }));
            var tV = i(22139),
                tW = i.n(tV);
            let tU = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: l, headingVariant: o } = e,
                        { formatMessage: n } = (0, m.A)();
                    return (0, r.jsxs)('div', {
                        className: tW().root,
                        'data-test-id': u.e8.landing.COLLECTION_CLIPS,
                        children: [
                            (0, r.jsx)(V.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: o,
                                withDescription: !!i,
                            }),
                            (0, r.jsx)(C.HL, {
                                className: (0, c.$)(tW().text, l),
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                'data-test-id': u.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-clips-title' }),
                            }),
                        ],
                    });
                },
                tH = (e) => {
                    let { forwardRef: t, containerClassName: i, headerClassName: a, meta: s, data: l, headingVariant: o, ...n } = e;
                    return (null == l ? void 0 : l.isEmptyBlock)
                        ? (0, r.jsx)(tU, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: i,
                              headerClassName: a,
                              headingVariant: o,
                          })
                        : (0, r.jsx)(eZ, { ref: t, meta: s, data: l, containerClassName: i, headerClassName: a, headingVariant: o, ...n });
                },
                tz = (0, l.forwardRef)((e, t) => (0, r.jsx)(tH, { forwardRef: t, ...e }));
            var tK = i(83460),
                tY = i(44277);
            let tF = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...v
                        } = e,
                        p = (0, l.useMemo)(() => {
                            let e =
                                null == m
                                    ? void 0
                                    : m.items.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.items.length,
                                                  children: (0, r.jsx)(tK.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return null == e || e.unshift((0, r.jsx)(tY.B, {}, 'create-playlist-card')), e;
                        }, [null == m ? void 0 : m.items]);
                    return (0, r.jsx)(eJ.O, {
                        className: u,
                        ...v,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: c,
                        title: d.title,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children: p,
                    });
                }),
                t$ = (0, l.forwardRef)((e, t) => (0, r.jsx)(tF, { forwardRef: t, ...e })),
                tX = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: l,
                            headerClassName: c,
                            className: d,
                            meta: _,
                            data: p,
                            headingVariant: h,
                            ...C
                        } = e,
                        { from: x } = (0, I.f)(),
                        { formatMessage: b } = (0, m.A)(),
                        A = Array.isArray(null == p ? void 0 : p.rawTracks)
                            ? b({ id: 'entity-names.number-of-tracks' }, { counter: null == p ? void 0 : p.rawTracks.length })
                            : _.description;
                    return (0, r.jsx)(ey.$, {
                        className: d,
                        shimmer: (0, r.jsx)(eR.D, { variant: ek.X.PLAYLIST, isActive: a }),
                        'data-test-id': u.e8.landing.COLLECTION_DOWNLOADED_TRACKS,
                        maxColumnsCount: ey.D.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        blockHeaderClassName: c,
                        carouselClassName: l,
                        blockHeaderTitle: _.title,
                        viewAllActionLink: _.viewAllActionLink,
                        blockHeaderDescription: A,
                        ref: t,
                        blockHeaderHeadingVariant: h,
                        withBlockHeaderDescription: !0,
                        ...C,
                        children:
                            null == p
                                ? void 0
                                : p.items.map((e, t) => {
                                      let i,
                                          { objectPosX: a, objectPosY: l, objectsCount: c } = (0, ex.$)({ index: t, count: p.items.length });
                                      return (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Track,
                                              objectId: e.id,
                                              objectPosX: a,
                                              objectPosY: l,
                                              objectsCount: c,
                                              children: (0, r.jsx)(eL.K, {
                                                  track: e,
                                                  playContextParams:
                                                      ((i = e.id),
                                                      {
                                                          contextData: { type: v.K.Various, meta: { id: s.t.COLLECTION_DOWNLOADED_TRACKS }, from: x },
                                                          entitiesData: null == p ? void 0 : p.entitiesData,
                                                          queueParams: { index: t, entityId: i },
                                                          loadContextMeta: !1,
                                                      }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                tG = (0, l.forwardRef)((e, t) => (0, r.jsx)(tX, { forwardRef: t, ...e }));
            var tQ = i(61113);
            let tq = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      switch (e.type) {
                                          case e9._.TRACK_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.ky.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, r.jsx)(tQ.w, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case e9._.LIKED_PLAYLIST_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, r.jsx)(tK.B, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case e9._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.ky.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, r.jsx)(eB.a, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                tZ = (0, l.forwardRef)((e, t) => (0, r.jsx)(tq, { forwardRef: t, ...e })),
                tJ = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, r.jsx)(tK.B, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                t0 = (0, l.forwardRef)((e, t) => (0, r.jsx)(tJ, { forwardRef: t, ...e }));
            var t1 = i(37184),
                t2 = i(35629),
                t3 = i.n(t2),
                t6 = i(18459),
                t9 = i.n(t6);
            let t7 = (e) => {
                    let { className: t } = e;
                    return (0, r.jsx)('div', {
                        className: (0, c.$)(t9().root, t),
                        'data-test-id': u.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                        children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                t4 = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: v,
                            ...p
                        } = e,
                        { objectsCount: h } = (0, e4.N)(),
                        C = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        b = (0, l.useId)(),
                        A = ''.concat(C, ' ').concat(C, '-description'),
                        j = (0, e7.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        N = (0, l.useMemo)(() => {
                            var e, t;
                            return (
                                (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.type) !== t1.l.PLAYLIST_CREATED_TAB &&
                                (null == _ || null == (t = _.tabs[j.value]) ? void 0 : t.items.length) === 0
                            );
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        T = (0, l.useCallback)(
                            (e) => {
                                if (e.isEmptyTab && e.type !== t1.l.PLAYLIST_CREATED_TAB)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(D.F, {
                                                className: (0, c.$)(t3().carouselEmpty, s),
                                                itemClassName: (0, c.$)(t3().item, t3().important),
                                                tabIndex: -1,
                                                children: (0, e8.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, r.jsx)(t7, {}),
                                        ],
                                    });
                                let t = e.items.map((t, i) =>
                                    (0, r.jsx)(
                                        n.B,
                                        {
                                            objectType: o.ky.Playlist,
                                            objectId: String(t.id),
                                            objectPosX: i + 1,
                                            objectPosY: 1,
                                            objectsCount: e.items.length,
                                            children: (0, r.jsx)(tK.B, { contentLinesCount: 4, playlist: t }),
                                        },
                                        t.id,
                                    ),
                                );
                                return (
                                    e.type === t1.l.PLAYLIST_CREATED_TAB && t.unshift((0, r.jsx)(tY.B, { className: t3().createPlaylistCard }, 'create-playlist-card')),
                                    (0, r.jsx)(D.F, { ref: x, itemClassName: (0, c.$)(t3().item, t3().important), className: s, 'aria-labelledby': A, children: t })
                                );
                            },
                            [A, s],
                        ),
                        I = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(D.F, {
                                          ref: x,
                                          itemClassName: (0, c.$)(t3().item, t3().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, e8.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, r.jsx)(e7.Kp, { name: t, value: j.value, elementId: b, className: t3().tabPanel, children: T(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, b, T],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(t3().root, v, { [t3().root_withControls]: !N }),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.ky.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, r.jsx)(V.T, {
                                    className: (0, c.$)(d, t3().header, t3().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: C,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: t3().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, r.jsx)(te.wI, {
                                isShimmerVisible: i,
                                className: (0, c.$)(s, t3().tabCarousel, t3().important),
                                elementId: b,
                                shimmer: (0, r.jsx)(te.zr, { isActive: a, className: (0, c.$)(s, t3().tabCarousel, t3().important), shimmerClassName: t3().tabShimmer }),
                                'aria-labelledby': C,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, r.jsx)(e5.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, c.$)(t3().tab, t3().important) }, e.id),
                                          ),
                            }),
                            I,
                        ],
                    });
                }),
                t8 = (0, l.forwardRef)((e, t) => (0, r.jsx)(t4, { forwardRef: t, ...e }));
            var t5 = i(13365),
                ie = i(82586),
                it = i(82219),
                ii = i(86384),
                ia = i.n(ii);
            let is = { [t5._.UP]: 'chartUp', [t5._.DOWN]: 'chartDown', [t5._.SAME]: 'chartSame', [t5._.NEW]: 'chartNew' },
                ir = (0, d.PA)((e) => {
                    let { artist: t, position: i, progress: a, listenTimeSeconds: s, className: l } = e,
                        { formatMessage: o } = (0, m.A)(),
                        n = (0, it.U)(s, o),
                        d = a ? is[a] : null,
                        _ = d
                            ? (0, r.jsx)(ie.I, { variant: d, size: 'xxs', className: (0, c.$)(ia().progressIcon, ia()['progressIcon_'.concat(a)]), 'aria-hidden': !0 })
                            : null,
                        u = (0, eM.L)(() =>
                            void 0 !== i
                                ? (0, r.jsxs)('div', {
                                      className: ia().positionIndicator,
                                      children: [
                                          (0, r.jsx)(C.HL, { variant: 'span', type: 'entity', size: 'm', weight: 'bold', children: i }),
                                          1 === i && (0, r.jsx)(ie.I, { variant: 'crown', size: 'xxs', className: ia().crownIcon, 'aria-hidden': 'true' }),
                                          1 !== i && _,
                                      ],
                                  })
                                : void 0,
                        ),
                        v = (0, eM.L)(() => (0, r.jsx)(C.HL, { variant: 'div', type: 'controls', size: 's', weight: 'medium', className: ia().listenTime, children: n }));
                    return (0, r.jsx)(tc.a, { artist: t, className: l, topTitleElement: u, bottomTitleElement: v, contentLinesCount: 3 });
                }),
                il = (0, d.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        className: c,
                        meta: d,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return i || (null == m ? void 0 : m.items.length)
                        ? (0, r.jsx)(eJ.O, {
                              ...u,
                              className: c,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: l,
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) => {
                                            var i, a;
                                            return (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: m.items.length,
                                                    children: (0, r.jsx)(ir, {
                                                        artist: e.artist,
                                                        position: null == (i = e.top) ? void 0 : i.position,
                                                        progress: null == (a = e.top) ? void 0 : a.progress,
                                                        listenTimeSeconds: e.listenTimeSeconds,
                                                    }),
                                                },
                                                e.artist.id,
                                            );
                                        }),
                          })
                        : (0, r.jsx)(t_, {
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: l,
                          });
                }),
                io = (0, l.forwardRef)((e, t) => (0, r.jsx)(il, { forwardRef: t, ...e }));
            var ic = i(85305),
                id = i(37240),
                im = i(41009),
                i_ = i.n(im);
            let iu = (0, d.PA)((e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: o, isShimmerVisible: n, isShimmerActive: d, headingVariant: m = 'h2', ...u } = e,
                        {
                            settings: { isMobile: v },
                        } = (0, k.g)(),
                        { pageId: p } = (0, id.$)(),
                        { blockIdForFrom: h } = (0, e4.N)(),
                        { withPlusPopoverWeb: x } = (0, tA.X)(),
                        [b, A] = (0, l.useState)(!1),
                        { isPlaying: j, togglePlay: T } = (0, tj.B)({
                            seeds: null != (t = null == s ? void 0 : s.vibe.seeds) ? t : [],
                            pageIdForFrom: p,
                            blockIdForFrom: h,
                        }),
                        I = (0, N.b)(),
                        f = (0, l.useCallback)(() => {
                            x || (T(), I(!j));
                        }, [x, T, I, j]),
                        g = (0, l.useCallback)(
                            () =>
                                (0, r.jsx)(P.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: j,
                                    onClick: f,
                                    className: i_().playButton,
                                    children: (0, r.jsx)(_.A, { id: 'player-actions.listen' }),
                                }),
                            [f, j],
                        ),
                        S = (0, eM.L)(() =>
                            (0, r.jsx)(tN.S, {
                                isEnabled: x,
                                isOpened: b,
                                onOpenChange: A,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == s ? void 0 : s.vibe.stationType,
                                renderChildren: g,
                            }),
                        ),
                        L = (0, eM.L)(() =>
                            n || !s
                                ? (0, r.jsxs)('div', {
                                      className: i_().root,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: i_().shimmerContainer,
                                              children: [
                                                  (0, r.jsx)(ty.W, { isActive: d, radius: 'xs', className: (0, c.$)(i_().coverShimmer, i_().item, i_().important) }),
                                                  v && (0, r.jsx)(ty.W, { radius: 'l', isActive: d, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !v &&
                                              (0, r.jsxs)('div', {
                                                  className: i_().container,
                                                  children: [
                                                      (0, r.jsx)(ty.W, { radius: 'l', isActive: d, width: 300, height: 32 }),
                                                      (0, r.jsx)(ty.W, { radius: 'xxxl', isActive: d, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, r.jsxs)('div', {
                                      className: i_().root,
                                      children: [
                                          (0, r.jsx)(ic.y, {
                                              vibe: s.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, c.$)(i_().item, i_().important),
                                              shouldShowAdditionals: v,
                                              additionalsLinesCount: 1,
                                          }),
                                          !v &&
                                              (0, r.jsxs)('div', {
                                                  className: i_().container,
                                                  children: [
                                                      (0, r.jsx)(C.DZ, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: i_().text,
                                                          lineClamp: 2,
                                                          variant: m,
                                                          children: null == s ? void 0 : s.vibe.description,
                                                      }),
                                                      S,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, r.jsx)('section', { ref: o, title: a.title, className: i, ...(0, B.getDataAttrFromProps)(u), children: L });
                }),
                iv = (0, l.forwardRef)((e, t) => (0, r.jsx)(iu, { forwardRef: t, ...e }));
            var ip = i(42530),
                ih = i(9724),
                iC = i(20472),
                ix = i(4772),
                ib = i(76);
            let iA = (0, d.PA)((e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    a = (0, p.c)(() => {
                        i(t.id);
                    });
                return (0, r.jsx)(ib.E, { room: t, contentLinesCount: 3, onRoomSuccessExit: a });
            });
            var ij = i(27521),
                iN = i.n(ij);
            let iT = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...v
                        } = e,
                        { multivibe: h } = (0, k.g)(),
                        [C, x] = (0, l.useState)([]);
                    (0, l.useEffect)(() => {
                        var e;
                        x((null == m || null == (e = m.items) ? void 0 : e.length) ? (null == m ? void 0 : m.items) : []);
                    }, [null == m ? void 0 : m.items]);
                    let b = (0, p.c)((e) => {
                            x((t) => t.filter((t) => t.id !== e));
                        }),
                        A = C.length,
                        j = (0, eM.L)(() => {
                            let e = C.map((e, t) => {
                                var i, a;
                                return (0, r.jsx)(
                                    n.B,
                                    {
                                        objectType: o.ky.Wave,
                                        objectId: null != (a = null == (i = e.wave) ? void 0 : i.seedsId) ? a : '',
                                        objectPosX: t + 1,
                                        objectPosY: 1,
                                        objectsCount: A,
                                        children: (0, r.jsx)(iA, { room: e, onRoomSuccessExit: b }, e.id),
                                    },
                                    e.id,
                                );
                            });
                            return [
                                (0, r.jsx)(n.B, {
                                    objectType: o.ky.Shortcut,
                                    objectId: '',
                                    objectPosX: 0,
                                    objectPosY: 1,
                                    objectsCount: A,
                                    children: (0, r.jsx)(ih.f, {}, 'create-vibe-room-button'),
                                }),
                                ...e,
                            ];
                        }),
                        N = (0, eM.L)(() => Array.from({ length: 9 }, (e, t) => (0, r.jsx)(ix.P, { isActive: a }, t))),
                        T = (0, eM.L)(() => (h.isNDAEnabled ? (0, r.jsx)(ip.b, { className: iN().multivibeNDA }) : null));
                    return (0, r.jsx)(eJ.O, {
                        className: u,
                        ...v,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        showShimmerInfo: !1,
                        containerClassName: s,
                        headerClassName: c,
                        title: d.title,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink || iC.Z.collectionVibeRooms.href,
                        ref: t,
                        headingVariant: _,
                        customShimmer: N,
                        titleChildren: T,
                        children: j,
                    });
                }),
                iI = (0, l.forwardRef)((e, t) => {
                    let {
                        collection: { vibeRooms: i },
                        user: a,
                    } = (0, k.g)();
                    return i.isEnabled && a.hasPlus ? (0, r.jsx)(iT, { forwardRef: t, ...e, containerClassName: iN().root }) : null;
                });
            var ig = i(50),
                iS = i(36477),
                iL = i(26689),
                ik = i.n(iL),
                iy = i(89616),
                iR = i.n(iy);
            let iE = (0, d.PA)((e) => {
                    let { title: t, colors: i } = e;
                    return (0, r.jsxs)(C.HL, {
                        size: 'm',
                        variant: 'span',
                        className: iR().station,
                        children: [
                            (0, r.jsx)('div', {
                                className: iR().stationColors,
                                children: i.map((e, t) => (0, r.jsx)('span', { className: iR().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                iP = (0, d.PA)((e) => {
                    var t, i, a;
                    let { data: s } = e,
                        { place: n, city: c, address: d, map: _ } = s,
                        u = (() => {
                            let { theme: e } = (0, ig.W)();
                            return (0, l.useCallback)(
                                (t) => {
                                    let i = (0, B.httpsReplacer)(t.replace('%%', '1300,1000')),
                                        { href: a } = (0, iS.u)(i, { query: { theme: null != e ? e : '' } });
                                    return a;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: v } = (0, m.A)(),
                        { href: h, target: x } = ((e) => {
                            let { theme: t } = (0, ig.W)();
                            return (0, iS.u)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (a = null == s || null == (t = s.map) ? void 0 : t.url) ? a : ''),
                        b = (0, j.N)(),
                        { ref: A, intersectionPropertyId: N } = (0, T.n)(),
                        I = (0, p.c)(() => {
                            b({ to: o.QT.Link, deepLink: h });
                        });
                    return (0, r.jsxs)('div', {
                        ref: A,
                        'data-intersection-property-id': N,
                        className: ik().root,
                        children: [
                            (0, r.jsx)(C.DZ, { size: 'm', variant: 'h3', className: ik().heading, children: n }),
                            (0, r.jsx)(E.N, {
                                onClick: I,
                                'aria-label': v({ id: 'entity-names.map-url' }),
                                href: h,
                                className: ik().linkContainer,
                                target: x,
                                children: (0, r.jsx)(th._V, {
                                    createUrlReplacer: u,
                                    className: ik().mapImage,
                                    alt: n,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == _ ? void 0 : _.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, r.jsxs)('div', {
                                className: ik().addressContainer,
                                children: [
                                    (0, r.jsx)(C.HL, { variant: 'span', size: 'm', weight: 'medium', className: ik().address, children: ''.concat(c, ', ').concat(d) }),
                                    (0, r.jsx)('div', {
                                        'aria-label': v({ id: 'entity-names.metro-stations' }),
                                        className: ik().metroStations,
                                        children:
                                            null == (i = s.groupedMetroStations) ? void 0 : i.map((e, t) => (0, r.jsx)(iE, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var iw = i(71583),
                iO = i.n(iw);
            let iM = (0, d.PA)((e) => {
                    let { isActive: t } = e;
                    return (0, r.jsxs)('div', {
                        className: iO().root,
                        children: [
                            (0, r.jsx)(ty.W, { className: iO().heading, radius: 's', isActive: t }),
                            (0, r.jsx)(ty.W, { className: iO().mapImage, radius: 's', isActive: t }),
                            (0, r.jsx)(ty.W, { className: iO().address, radius: 's', isActive: t }),
                            (0, r.jsx)(ty.W, { className: iO().metroStations, radius: 's', isActive: t }),
                        ],
                    });
                }),
                iB = (0, d.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, containerClassName: s, isShimmerVisible: l, isShimmerActive: c, id: d, data: m, ..._ } = e,
                        { concert: u } = (0, k.g)(),
                        v = null != (i = null == (t = u.meta) ? void 0 : t.id) ? i : '',
                        p = (0, eM.L)(() => (l ? (0, r.jsx)(iM, { isActive: c }) : m ? (0, r.jsx)(iP, { data: m }) : void 0));
                    return (0, r.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, B.getDataAttrFromProps)(_),
                        children: (0, r.jsx)(n.B, { objectId: v, objectType: o.ky.Concert, objectPosX: 1, objectPosY: 1, objectsCount: 1, children: p }, d),
                    });
                }),
                iD = (0, l.forwardRef)((e, t) => (0, r.jsx)(iB, { forwardRef: t, ...e }));
            var iV = i(53109),
                iW = i(88404),
                iU = i(70608);
            let iH = (e) => {
                let { filterKey: t, filterValue: i, filterPos: a, children: s } = e,
                    o = (0, l.useMemo)(() => ({ filterKey: t, filterValue: i, filterPos: a }), [t, i, a]);
                return (0, r.jsx)(iU.S.Provider, { value: o, children: s });
            };
            var iz = i(12578),
                iK = i(98066),
                iY = i(62980),
                iF = i(30436),
                i$ = i(86562),
                iX = i(61371),
                iG = i.n(iX);
            let iQ = (e) => {
                let { concert: t } = e,
                    {
                        title: i,
                        datetime: a,
                        city: s,
                        place: n,
                        contentRating: d,
                        cover: _,
                        dataSessionId: u,
                        rank: v,
                        isCashbackExperimentEnabled: x,
                        isIdentityExperimentEnabled: b,
                        cashbackTitle: A,
                        cashbackValuePercent: N,
                    } = t,
                    { formatDate: I } = (0, m.A)(),
                    { ref: f, intersectionPropertyId: g } = (0, T.n)(),
                    L = (0, j.N)(),
                    { state: y, toggleTrue: R, toggleFalse: E } = (0, tp.e)(!1),
                    { experiments: P } = (0, k.g)(),
                    { href: w } = (0, iS.u)('/concert/:concertId', { params: { concertId: t.id } }),
                    O = (0, S.Z)(w),
                    M = P.checkExperiment(eb.z.WebNextConcertPage, 'on'),
                    D = (0, l.useMemo)(() => {
                        let e = x && !!A;
                        if ((b && N) || e)
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eN.q, { children: I(a, (0, iF.f)()) }),
                                    (0, r.jsxs)(C.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: iG().descriptionContainer,
                                        children: [
                                            (0, r.jsx)(C.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: iG().description,
                                                children: n,
                                            }),
                                            (0, r.jsx)(C.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: iG().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            d &&
                                                (0, r.jsx)(C.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: iG().description,
                                                    children: d,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)(iK.m, { className: iG().cashback, title: A, valuePercent: N }),
                                ],
                            });
                        let t = [];
                        return (
                            a && t.push(I(a, (0, iF.f)())),
                            d && t.push(d),
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(C.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: iG().description,
                                        children: n,
                                    }),
                                    (0, r.jsxs)(eN.q, { children: [I(a, (0, iF.f)()), ' ', d] }),
                                    (0, r.jsx)(C.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: iG().description,
                                        'aria-hidden': !0,
                                        children: t.join(' • '),
                                    }),
                                ],
                            })
                        );
                    }, [A, N, d, a, I, x, b, n]),
                    V = (0, l.useCallback)(
                        (e) => {
                            L({ to: o.QT.ConcertPurchaseScreen }), R(), null == e || e.stopPropagation();
                        },
                        [R, L],
                    ),
                    W = (0, p.c)((e) => {
                        if (!M) {
                            V(e), L({ to: o.QT.ConcertScreen });
                            return;
                        }
                        O(e);
                    }),
                    U = (0, l.useCallback)(
                        (e) => {
                            (e.code === i$.v.SPACE || e.code === i$.v.ENTER) && (e.preventDefault(), W());
                        },
                        [W],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(h.t, {
                            className: iG().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: i, s: a, l: s } = (0, B.hexToHsl)(e);
                                    t = 'linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla('
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0) 40%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.1) 43%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.2) 46%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.3) 49%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.4) 52%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.5) 55%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.6) 58%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.7) 61%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.8) 64%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.9) 67%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 70%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 100%\n        )');
                                }
                                return { '--concert-card-linear-gradient': t };
                            })(null == _ ? void 0 : _.color),
                            radius: 'l',
                            role: 'button',
                            tabIndex: 0,
                            onClick: W,
                            onKeyDown: U,
                            ref: f,
                            'data-intersection-property-id': g,
                            children: [
                                (0, r.jsx)(th._V, {
                                    className: iG().cover,
                                    src: null == _ ? void 0 : _.uri,
                                    size: 400,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== v &&
                                    (0, r.jsx)(C.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'bold',
                                        className: (0, c.$)(iG().index, iG().title),
                                        'aria-hidden': !0,
                                        children: v,
                                    }),
                                (0, r.jsxs)('div', {
                                    className: iG().meta,
                                    children: [
                                        (0, r.jsx)(C.DZ, {
                                            variant: 'h3',
                                            size: 'xs',
                                            weight: 'bold',
                                            lineClamp: 3,
                                            className: (0, c.$)(iG().title, iG().concertTitle),
                                            children: i,
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: iG().textContainer,
                                            children: [
                                                a &&
                                                    (0, r.jsx)(iY.d, {
                                                        datetime: a,
                                                        className: iG().date,
                                                        monthClassName: iG().description,
                                                        dayClassName: iG().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, r.jsxs)('div', {
                                                    className: iG().info,
                                                    children: [
                                                        (0, r.jsx)(C.HL, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: iG().title,
                                                            children: s,
                                                        }),
                                                        D,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(iz.h, { dataSessionId: u, isOpened: y, onOpen: R, onClose: E }),
                    ],
                });
            };
            var iq = i(44337),
                iZ = i.n(iq);
            let iJ = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: v,
                            ...p
                        } = e,
                        h = (0, l.useId)(),
                        { experiments: C, concerts: x } = (0, k.g)(),
                        b = (0, l.useRef)(null),
                        A = C.checkExperiment(eb.z.WebNextNewConcertCard, 'on'),
                        j = x.isLocationSelectionExperimentEnabled
                            ? {
                                  filterKey: o.ky.Location,
                                  filterValue: null !== x.locationSelection.selectedLocationId ? String(x.locationSelection.selectedLocationId) : 'auto',
                                  filterPos: 1,
                              }
                            : {},
                        N = (0, l.useMemo)(
                            () =>
                                i
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (i, a) =>
                                              e ? (0, r.jsx)(iW.L, { isActive: t }, a) : (0, r.jsx)(ty.W, { isActive: t, className: iZ().shimmer }, a),
                                          ))(A, a)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: A ? (0, r.jsx)(iV.Q, { concert: e }) : (0, r.jsx)(iQ, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == _ ? void 0 : _.items, a, i, A],
                        );
                    return (0, r.jsx)(iH, {
                        ...j,
                        children: (0, r.jsxs)('section', {
                            ref: t,
                            className: (0, c.$)(iZ().root, { [iZ().root_withNewConcertCards]: A }, v),
                            ...(0, B.getDataAttrFromProps)(p),
                            children: [
                                (0, r.jsx)(V.T, {
                                    className: d,
                                    labeledForId: h,
                                    title: m.title,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: iZ().controls, carouselRef: b }),
                                    headingVariant: u,
                                }),
                                (0, r.jsx)(D.F, { ref: b, itemClassName: (0, c.$)(iZ().item, iZ().important), className: s, 'aria-labelledby': h, children: N }),
                            ],
                        }),
                    });
                }),
                i0 = (0, l.forwardRef)((e, t) => (0, r.jsx)(iJ, { forwardRef: t, ...e }));
            var i1 = i(27151),
                i2 = i.n(i1),
                i3 = i(48318),
                i6 = i.n(i3);
            let i9 = (e) => {
                let { className: t, title: i, subtitle: a, covers: s, link: n, type: d, withLastPlayed: m } = e,
                    _ = (0, j.N)(),
                    v = (0, l.useMemo)(() => {
                        if (0 !== s.length)
                            return (0, r.jsx)('div', {
                                className: i6().covers,
                                'data-test-id': u.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS,
                                children: s.slice(0, 2).map((e, t) =>
                                    (0, r.jsx)(
                                        h.t,
                                        {
                                            className: i6().coverContainer,
                                            radius: 'xs',
                                            children: (0, r.jsx)(th._V, {
                                                className: i6().cover,
                                                size: 80,
                                                src: e.uri,
                                                fit: 'contain',
                                                withAvatarReplace: !0,
                                                fallbackIconSize: 's',
                                                'data-test-id': ''.concat(u.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS, '_').concat(t),
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            });
                    }, [s]),
                    p = (0, l.useCallback)(() => {
                        _({ to: o.QT.Link });
                    }, [_]);
                return (0, r.jsx)(h.t, {
                    className: (0, c.$)(i6().root, i6()['root_'.concat(d)], { [i6().root_withCovers]: s.length > 0, [i6().root_withLastPlayed]: m }, t),
                    radius: 'l',
                    'data-test-id': u.e8.landing.CONTINUE_LISTEN_BASE_ITEM,
                    children: (0, r.jsx)(E.N, {
                        className: i6().link,
                        href: n,
                        onClick: p,
                        'data-test-id': u.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK,
                        children: (0, r.jsxs)('div', {
                            className: i6().content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: i6().textContainer,
                                    children: [
                                        (0, r.jsxs)(C.HL, {
                                            className: i6().title,
                                            size: 'm',
                                            variant: 'div',
                                            'data-test-id': u.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE,
                                            children: [i, (0, r.jsx)(ie.I, { className: i6().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        a &&
                                            (0, r.jsx)(C.HL, {
                                                className: i6().subtitle,
                                                size: 'm',
                                                variant: 'div',
                                                lineClamp: 2,
                                                'data-test-id': u.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_SUBTITLE,
                                                children: a,
                                            }),
                                    ],
                                }),
                                v,
                            ],
                        }),
                    }),
                });
            };
            var i7 = i(8055),
                i4 = i(74924),
                i8 = i(83557),
                i5 = i(66436),
                ae = i(44128),
                at = i(59800),
                ai = i.n(at);
            let aa = (0, d.PA)((e) => {
                    var t, i, a, s, d;
                    let { className: _, lastPlayed: x } = e,
                        { objectsCount: b } = (0, e4.N)(),
                        { formatMessage: j } = (0, m.A)(),
                        { sonataState: T, continueListen: f } = (0, k.g)(),
                        g = (0, ae.e)(),
                        S = (0, i5.$)(),
                        {
                            album: w,
                            playlist: O,
                            track: M,
                            getTrackMeta: B,
                            getPlaylistMeta: D,
                            isNeededToLoad: V,
                            isRejected: W,
                            albumDuration: U,
                            albumDurationLeft: H,
                        } = x.data,
                        { track: z, trackIndex: K, contextType: Y, contextId: F, albumDuration: $, albumStreamProgress: X, trackTempStreamProgress: G } = f,
                        Q = (0, N.b)(),
                        q = (0, A.P)(),
                        Z = (0, l.useMemo)(() => z || M, [z, M]),
                        J = (null == (t = T.entityMeta) ? void 0 : t.isPodcast) || (null == (i = T.entityMeta) ? void 0 : i.isAudiobook),
                        ee = (0, l.useCallback)(async () => {
                            let e = await B();
                            !f.track &&
                                e &&
                                (f.saveTrack({
                                    contextType: w ? v.K.Album : v.K.Playlist,
                                    contextId: w ? w.id : String(null == O ? void 0 : O.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                U && H && (f.saveAlbumDuration(U), f.albumStreamProgress.updateEndPositionSec(U - H)));
                        }, [f, w, U, H, B, null == O ? void 0 : O.id]),
                        et = (0, l.useCallback)(async () => {
                            let e = await D();
                            f.trackIndex || 'number' != typeof e || f.saveTrackIndex(e);
                        }, [D, f]);
                    (0, l.useEffect)(() => {
                        V && (ee(), et());
                    }, [V, ee, et]);
                    let ei = Y === v.K.Album && Z.mainAlbum && (null == Z ? void 0 : Z.mainAlbum.isAudiobook),
                        ea = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                if (
                                    e &&
                                    e.duration &&
                                    (e.duration === 1 / 0
                                        ? null == (t = Z.streamProgress) || t.updateEndPositionSec(0)
                                        : null == (i = Z.streamProgress) || i.updateEndPositionSec(e.position),
                                    ei)
                                ) {
                                    let t = (null == X ? void 0 : X.endPositionSec) || 0,
                                        i = e.position,
                                        a = i - ((null == G ? void 0 : G.endPositionSec) || 0);
                                    null == X || X.updateEndPositionSec(t + a), null == G || G.updateEndPositionSec(i);
                                }
                            },
                            [Z.streamProgress, X, G, ei],
                        ),
                        es = ei ? (null == X ? void 0 : X.endPositionSec) || 0 : (null == (a = Z.streamProgress) ? void 0 : a.endPositionSec) || 0,
                        er = Z.durationMs ? Z.durationMs / 1e3 : 0,
                        el = ei ? $ || 0 : er,
                        eo = (0, i8.m)(es, el),
                        en = (0, l.useMemo)(() => (0, i7.A)(ea, 500), [ea]),
                        { isPlaying: ec, togglePlay: ed } = ((e) => {
                            let { track: t, trackIndex: i, contextType: a, contextId: s } = e,
                                r = (0, l.useMemo)(() => {
                                    switch (a) {
                                        case v.K.Playlist:
                                            return { type: v.K.Playlist, meta: { id: String(s) } };
                                        case v.K.Album:
                                            return { type: v.K.Album, meta: { id: Number(s) } };
                                        case v.K.Various:
                                            return { type: v.K.Various, meta: { id: Number(s) } };
                                        case v.K.Artist:
                                            return { type: v.K.Artist, meta: { id: Number(s) } };
                                        case v.K.Generative:
                                            return { type: v.K.Generative, meta: { id: Number(s) } };
                                        case v.K.Vibe:
                                            return { type: v.K.Vibe, meta: { id: String(s) } };
                                        default:
                                            return { type: v.K.Various, meta: { id: '' } };
                                    }
                                }, [a, s]),
                                { from: o, utmLink: n } = (0, I.f)({ contextId: r.meta.id, contextType: r.type }),
                                c = (0, eM.L)(() => {
                                    switch (a) {
                                        case v.K.Playlist:
                                            return { type: v.K.Playlist, meta: { id: String(s) }, from: o, utmLink: n };
                                        case v.K.Album:
                                            return { type: v.K.Album, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case v.K.Various:
                                            return { type: v.K.Various, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case v.K.Artist:
                                            return { type: v.K.Artist, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case v.K.Generative:
                                            return { type: v.K.Generative, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case v.K.Vibe:
                                            return {
                                                type: v.K.Vibe,
                                                meta: { id: String(s) },
                                                seeds: [String(s)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: o,
                                                utmLink: n,
                                            };
                                        default:
                                            return { type: v.K.Playlist, meta: { id: '' }, from: o, utmLink: n };
                                    }
                                });
                            return (0, L.D)({
                                playContextParams: { contextData: c, queueParams: { entityId: t.id, index: i }, loadContextMeta: !0 },
                                entityId: t.entityId,
                            });
                        })({ track: Z, trackIndex: K, contextType: Y, contextId: F }),
                        em = (0, p.c)(() => {
                            q() || (ed(), Q(!ec));
                        }),
                        e_ = (0, l.useMemo)(() => ({ '--color-background': Z.averageColor }), [Z.averageColor]);
                    (0, l.useEffect)(() => {
                        let e,
                            t =
                                null == g
                                    ? void 0
                                    : g.state.queueState.currentEntity.onChange(() => {
                                          null == e || e(),
                                              (e = g.state.playerState.progress.onChange(() => {
                                                  let e = g.state.playerState.progress.value;
                                                  J && en(e);
                                              }));
                                      });
                        return () => {
                            null == t || t(), null == e || e();
                        };
                    }, [g, en, J, Z.streamProgress]);
                    let eu = ei ? Z.mainAlbum.title : Z.title,
                        ev = ei ? Z.mainAlbum.coverUri : Z.coverUri,
                        ep = (0, l.useMemo)(() => {
                            var e;
                            return j({ id: 'entity-names.album-name' }, { albumName: null == (e = Z.mainAlbum) ? void 0 : e.title });
                        }, [j, null == (s = Z.mainAlbum) ? void 0 : s.title]),
                        eh = (0, l.useMemo)(() => (ei ? ep : j({ id: 'entity-names.track-name' }, { trackName: Z.title })), [j, ei, ep, Z.title]),
                        eC = ei ? Z.mainAlbum.explicitDisclaimer : Z.explicitDisclaimer,
                        ex = S(el - es, !1);
                    return W
                        ? null
                        : (0, r.jsx)(
                              n.B,
                              {
                                  objectType: o.ky.Track,
                                  objectId: String(Z.id),
                                  objectPosX: 0,
                                  objectPosY: 1,
                                  objectsCount: b,
                                  children: (0, r.jsxs)(h.t, {
                                      className: (0, c.$)(ai().root, _),
                                      radius: 'l',
                                      style: e_,
                                      'aria-label': eu,
                                      'data-test-id': u.e8.landing.CONTINUE_LISTEN_TRACK,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: ai().content,
                                              children: [
                                                  (0, r.jsx)(y.B, {
                                                      className: (0, c.$)(ai().cover, ai().important),
                                                      src: ev,
                                                      size: 50,
                                                      alt: eh,
                                                      fit: 'cover',
                                                      withAvatarReplace: !0,
                                                      isAvailable: Z.isAvailable,
                                                      fallbackIconSize: 'xs',
                                                      'aria-hidden': !0,
                                                  }),
                                                  (0, r.jsxs)('div', {
                                                      className: ai().metaTrack,
                                                      children: [
                                                          (0, r.jsxs)(E.N, {
                                                              className: ai().metaContainer,
                                                              href: null == (d = Z.mainAlbum) ? void 0 : d.url,
                                                              'data-test-id': u.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK,
                                                              children: [
                                                                  (0, r.jsx)(C.HL, {
                                                                      className: ai().title,
                                                                      type: 'entity',
                                                                      size: 'm',
                                                                      weight: 'medium',
                                                                      variant: 'span',
                                                                      lineClamp: 1,
                                                                      'aria-label': ep,
                                                                      'data-test-id': u.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK_TITLE,
                                                                      children: eu,
                                                                  }),
                                                                  eC &&
                                                                      (0, r.jsx)(R.N, {
                                                                          getDescriptionTexts: Z.getDescriptionTexts,
                                                                          size: 'xs',
                                                                          variant: eC,
                                                                          className: ai().explicitMark,
                                                                      }),
                                                                  (0, r.jsx)(ie.I, { className: ai().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)('div', {
                                                              className: ai().progress,
                                                              children:
                                                                  !!el &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(i4.q, {
                                                                              'aria-valuetext': eo,
                                                                              'aria-busy': ec && J,
                                                                              fullCircleClassName: ai().fullCircle,
                                                                              progressCircleClassName: ai().progressCircle,
                                                                              value: es,
                                                                              max: el,
                                                                              'data-test-id': u.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS,
                                                                          }),
                                                                          (0, r.jsx)(C.HL, {
                                                                              lineClamp: 1,
                                                                              variant: 'div',
                                                                              size: 'm',
                                                                              'data-test-id': u.e8.landing.CONTINUE_LISTEN_TRACK_META_PROGRESS_TEXT,
                                                                              children: ex,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(P.D, { variant: 'filled', className: ai().playButton, isPlaying: ec && J, onClick: em, iconSize: 'm' }),
                                      ],
                                  }),
                              },
                              Z.id,
                          );
                }),
                as = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, containerClassName: d, headingVariant: _, data: u, ...v } = e,
                        { formatMessage: p } = (0, m.A)(),
                        h = (0, l.useId)(),
                        { objectsCount: C } = (0, e4.N)(),
                        x = (0, l.useMemo)(() => {
                            if (!u || i) return Array.from({ length: 3 }, (e, t) => (0, r.jsx)(ty.W, { className: i2().item, isActive: a }, t));
                            let e = [
                                    u.bookshelf.bookCount ? p({ id: 'entity-names.number-of-books' }, { counter: u.bookshelf.bookCount }) : void 0,
                                    u.bookshelf.podcastCount ? p({ id: 'entity-names.number-of-podcasts' }, { counter: u.bookshelf.podcastCount }) : void 0,
                                ]
                                    .filter(Boolean)
                                    .join(',\n'),
                                t = u.newEpisodes.trackCount ? p({ id: 'entity-names.number-of-episodes' }, { counter: u.newEpisodes.trackCount }) : void 0,
                                s = [];
                            return (
                                u.lastPlayed &&
                                    s.push((0, r.jsx)(aa, { className: (0, c.$)(i2().item, i2().item_lastPlayed), lastPlayed: u.lastPlayed }, u.lastPlayed.type)),
                                s.push(
                                    (0, r.jsx)(
                                        n.B,
                                        {
                                            objectType: o.ky.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: C,
                                            children: (0, r.jsx)(i9, {
                                                className: i2().item,
                                                type: 'bookshelf',
                                                link: iC.Z.collectionShelf.href,
                                                title: u.bookshelf.title,
                                                subtitle: e,
                                                covers: u.bookshelf.covers,
                                                withLastPlayed: !!u.lastPlayed,
                                            }),
                                        },
                                        u.bookshelf.title,
                                    ),
                                    (0, r.jsx)(
                                        n.B,
                                        {
                                            objectType: o.ky.Text,
                                            objectId: 'newEpisodes',
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            objectsCount: C,
                                            children: (0, r.jsx)(i9, {
                                                className: i2().item,
                                                type: 'newEpisodes',
                                                link: iC.Z.collectionShelfNewEpisodes.href,
                                                title: u.newEpisodes.title,
                                                subtitle: t,
                                                covers: u.newEpisodes.covers,
                                                withLastPlayed: !!u.lastPlayed,
                                            }),
                                        },
                                        u.newEpisodes.title,
                                    ),
                                ),
                                s
                            );
                        }, [p, u, a, i, C]);
                    return (0, r.jsxs)('section', {
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(v),
                        children: [
                            (0, r.jsx)(V.T, { className: s, labeledForId: h, title: p({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: _ }),
                            (0, r.jsx)('div', {
                                className: i2().blocksContainer,
                                children: (0, r.jsx)('div', { className: (0, c.$)(i2().container, d), 'aria-labelledby': h, children: x }),
                            }),
                        ],
                    });
                },
                ar = (0, l.forwardRef)((e, t) => (0, r.jsx)(as, { forwardRef: t, ...e })),
                al = (e) => {
                    let { forwardRef: t, headerClassName: i, headingVariant: a, meta: s, ...l } = e;
                    return (0, r.jsx)(n.B, {
                        objectType: o.ky.Text,
                        objectId: String(s.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        objectsCount: 0,
                        children: (0, r.jsx)('section', {
                            ref: t,
                            ...(0, B.getDataAttrFromProps)(l),
                            children: (0, r.jsx)(V.T, { className: i, title: s.title, headingVariant: a, viewAllActionLink: s.viewAllActionLink }),
                        }),
                    });
                },
                ao = (0, l.forwardRef)((e, t) => (0, r.jsx)(al, { forwardRef: t, ...e }));
            var an = i(80097),
                ac = i(74381),
                ad = i(90840),
                am = i(79897),
                a_ = i(91853);
            let au = (0, d.PA)((e) => {
                    let { donation: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, T.n)(),
                        s = (0, ad.Q)()(t.url),
                        l = (0, S.Z)(s),
                        n = (0, S.Z)(t.artist.url),
                        c = (0, j.N)(),
                        d = (0, p.c)(() => {
                            c({ to: o.QT.ArtistScreen }), n();
                        }),
                        m = (0, p.c)(() => {
                            c({ to: o.QT.Link, deepLink: s }), l();
                        }),
                        _ = (0, a_.S)({ artist: t.artist, callback: d });
                    return (0, r.jsx)(am.X, {
                        ref: i,
                        'data-intersection-property-id': a,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: _,
                        onNavigateToDonation: m,
                    });
                }),
                av = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...v
                        } = e,
                        p = (0, l.useMemo)(
                            () =>
                                !i && (null == m ? void 0 : m.items)
                                    ? m.items.map((e, t) => {
                                          let { data: i } = e;
                                          return (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.ky.Donation,
                                                  objectId: i.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.items.length,
                                                  children: (0, r.jsx)(au, { donation: i }),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, ac.k)(a),
                            [null == m ? void 0 : m.items, a, i],
                        );
                    return (0, r.jsx)(an.x, {
                        containerClassName: s,
                        headerClassName: c,
                        headingVariant: _,
                        className: u,
                        forwardRef: t,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink,
                        title: d.title,
                        ...v,
                        children: p,
                    });
                },
                ap = (0, l.forwardRef)((e, t) => (0, r.jsx)(av, { forwardRef: t, ...e }));
            var ah = i(45807),
                aC = i(63423),
                ax = i(51025),
                ab = i.n(ax);
            let aA = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, r.jsx)(ty.W, { isActive: t, className: (0, c.$)(ab().root, i) });
                },
                aj = (0, d.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: a } = (0, m.A)(),
                        { pageId: s } = (0, id.$)(),
                        { blockIdForFrom: o } = (0, e4.N)(),
                        { ref: n, intersectionPropertyId: d } = (0, T.n)(),
                        { toggleTrue: _, toggleFalse: v, state: p } = (0, tp.e)(!1),
                        { withPlusPopoverWeb: h } = (0, tA.X)(),
                        x = i.title.length > 26,
                        { isPlaying: b, togglePlay: A } = (0, tj.B)({ seeds: i.seeds, pageIdForFrom: s, blockIdForFrom: o }),
                        j = (0, N.b)(),
                        I = (0, l.useCallback)(
                            (e) => {
                                h ||
                                    ((0, ee.P)(e, ab().ripple),
                                    _(),
                                    A().finally(() => {
                                        v(), j(!b);
                                    }));
                            },
                            [v, _, A, b, j, h],
                        ),
                        f = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = i.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = i.colors) ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        g = b ? 'pause' : 'play',
                        S = b ? u.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : u.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        L = (0, l.useCallback)(
                            () =>
                                (0, r.jsxs)(aC.$, {
                                    style: f,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: I,
                                    className: (0, c.$)(ab().root, ab().button, { [ab().button_loading]: p }, t),
                                    'data-intersection-property-id': d,
                                    ref: n,
                                    'data-test-id': u.e8.landing.VIBE_DISCOVERY_ITEM,
                                    children: [
                                        (0, r.jsx)(th._V, {
                                            className: ab().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, r.jsxs)('span', {
                                            className: ab().textContainer,
                                            children: [
                                                (0, r.jsx)(C.HL, {
                                                    className: ab().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: i.getDescription(a({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, r.jsxs)(C.HL, {
                                                    className: (0, c.$)(ab().title, { [ab().title_long]: x }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, r.jsx)(ie.I, { className: ab().icon, size: 'xxs', variant: g, 'data-test-id': S }), i.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, a, I, S, g, d, x, p, n, f, i],
                        );
                    return (0, r.jsx)(tN.S, { isEnabled: h, placement: 'top', textVariant: 'vibe', vibeTextVariant: i.stationType, renderChildren: L });
                });
            var aN = i(31906),
                aT = i.n(aN);
            let aI = (e) => {
                    let { forwardRef: t, items: i, itemClassName: a, containerClassName: s, ariaLabelledBy: l } = e;
                    return (0, r.jsx)(D.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, c.$)(aT().item, aT().important, a),
                        'aria-labelledby': l,
                        children:
                            null == i
                                ? void 0
                                : i.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Wave,
                                              objectId: e.stationId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.length,
                                              children: (0, r.jsx)(aj, { vibe: e }),
                                          },
                                          e.stationId,
                                      ),
                                  ),
                    });
                },
                af = (e) => {
                    let { forwardRef: t, isActive: i, itemClassName: a, containerClassName: s, ariaLabelledBy: l, length: o } = e;
                    return (0, r.jsx)(D.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, c.$)(aT().item, aT().important, a),
                        'aria-labelledby': l,
                        children: Array.from({ length: o }, (e, t) => (0, r.jsx)(aA, { isActive: i }, t)),
                    });
                },
                ag = (0, l.forwardRef)((e, t) => (0, r.jsx)(aI, { forwardRef: t, ...e })),
                aS = (0, l.forwardRef)((e, t) => (0, r.jsx)(af, { forwardRef: t, ...e }));
            var aL = i(36687),
                ak = i.n(aL);
            let ay = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: o,
                            meta: n,
                            data: d,
                            className: m,
                            headingVariant: _,
                            ...u
                        } = e,
                        v = (0, l.useId)(),
                        p = (0, l.useRef)(null),
                        { shouldHideControls: h } = (0, ah.Y)(p),
                        C = !!(n.description || n.title || !h),
                        x = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(aS, { isActive: a, ref: p, containerClassName: s, ariaLabelledBy: v, length: 9 })
                                    : (0, r.jsx)(ag, { ref: p, containerClassName: s, ariaLabelledBy: v, items: null == d ? void 0 : d.items }),
                            [null == d ? void 0 : d.items, a, i, s, v],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(ak().root, m),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [
                            C &&
                                (0, r.jsx)(V.T, {
                                    className: o,
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: v,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: ak().controls, carouselRef: p }),
                                    headingVariant: _,
                                    withDescription: !!n.description,
                                }),
                            x,
                        ],
                    });
                },
                aR = (0, l.forwardRef)((e, t) => (0, r.jsx)(ay, { forwardRef: t, ...e }));
            var aE = i(1085),
                aP = i.n(aE);
            let aw = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            className: u,
                            headingVariant: v,
                            ...p
                        } = e,
                        h = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        { shouldHideControls: x } = (0, ah.Y)(C),
                        b = !!(m.description || m.title || !x),
                        A = (0, l.useMemo)(() => {
                            var e;
                            return i
                                ? (0, r.jsx)(D.F, {
                                      ref: C,
                                      itemClassName: (0, c.$)(aP().item, aP().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                      children: (0, e8.k)({ isActive: a, centered: !0 }),
                                  })
                                : (0, r.jsx)(D.F, {
                                      ref: C,
                                      itemClassName: (0, c.$)(aP().item, aP().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                      children:
                                          null == _ || null == (e = _.items)
                                              ? void 0
                                              : e.map((e, t) => {
                                                    var i;
                                                    return (0, r.jsx)(
                                                        n.B,
                                                        {
                                                            objectType: o.ky.Wave,
                                                            objectId: e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null == (i = _.items) ? void 0 : i.length,
                                                            children: (0, r.jsx)(ic.y, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == _ ? void 0 : _.items, a, i, s, h]);
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(aP().root, u),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            b &&
                                (0, r.jsx)(V.T, {
                                    className: d,
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: h,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: aP().controls, carouselRef: C }),
                                    headingVariant: v,
                                    withDescription: !!m.description,
                                }),
                            A,
                        ],
                    });
                },
                aO = (0, l.forwardRef)((e, t) => (0, r.jsx)(aw, { forwardRef: t, ...e }));
            var aM = i(71079),
                aB = i(13889),
                aD = i.n(aB);
            let aV = (0, d.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, meta: l, data: o, headingVariant: n, className: c, ...d } = e,
                        { artist: _ } = (0, k.g)(),
                        { formatMessage: u } = (0, m.A)(),
                        v = (0, eM.L)(() => {
                            if (!o) return;
                            let e = [];
                            return (
                                o.tracksCount && e.push(u({ id: 'entity-names.tracks-count' }, { value: o.tracksCount })),
                                o.collectionAlbumCount && e.push(u({ id: 'entity-names.albums-count' }, { value: o.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        });
                    return (0, r.jsx)('section', {
                        ref: t,
                        className: c,
                        ...(0, B.getDataAttrFromProps)(d),
                        children: (0, r.jsx)(V.T, {
                            className: s,
                            title: l.title,
                            coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                            controls: !1,
                            viewAllActionLink: null == o ? void 0 : o.href(_.id),
                            coverContainerClassName: aD().cover,
                            shimmerCoverClassName: aD().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: v,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                        }),
                    });
                }),
                aW = (0, l.forwardRef)((e, t) => (0, r.jsx)(aV, { forwardRef: t, ...e }));
            var aU = i(74553),
                aH = i.n(aU);
            let az = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: v,
                            ...p
                        } = e,
                        { objectsCount: h } = (0, e4.N)(),
                        C = (0, e7.zb)(0),
                        x = (0, l.useId)(),
                        b = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(D.F, {
                                          ref: b,
                                          itemClassName: (0, c.$)(aH().item, aH().important),
                                          className: s,
                                          'aria-labelledby': ''.concat(x, ' ').concat(x, '-description'),
                                          children: (0, e8.k)({ isActive: a }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.items.map((e) =>
                                            (0, r.jsx)(
                                                e7.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: C.value,
                                                    elementId: A,
                                                    children: (0, r.jsx)(D.F, {
                                                        ref: b,
                                                        itemClassName: (0, c.$)(aH().item, aH().important),
                                                        className: s,
                                                        'aria-labelledby': ''.concat(x, ' ').concat(x, '-description'),
                                                        children: e.data.map((t, i) =>
                                                            (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Album,
                                                                    objectId: String(t.id),
                                                                    objectPosX: i + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: e.data.length,
                                                                    children: (0, r.jsx)(eB.a, { contentLinesCount: 3, album: t }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [i, null == _ ? void 0 : _.items, s, x, a, C.value, A],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(aH().root, v),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.ky.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, r.jsx)(V.T, {
                                    className: (0, c.$)(d, aH().header, aH().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: x,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: aH().controls, carouselRef: b }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, r.jsx)(te.wI, {
                                isShimmerVisible: i,
                                className: (0, c.$)(s, aH().tabCarousel, aH().important),
                                elementId: A,
                                shimmer: (0, r.jsx)(te.nR, { isActive: a, className: (0, c.$)(s, aH().tabCarousel, aH().important) }),
                                'aria-labelledby': x,
                                ...C,
                                children:
                                    null == _
                                        ? void 0
                                        : _.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, r.jsx)(
                                                  e5.o,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, c.$)(aH().tab, aH().important),
                                                      withCovers: !0,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                }),
                aK = (0, l.forwardRef)((e, t) => (0, r.jsx)(az, { forwardRef: t, ...e }));
            var aY = i(81448),
                aF = i(78381),
                a$ = i.n(aF);
            let aX = (e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: o, isShimmerVisible: n, isShimmerActive: c, headingVariant: d } = e,
                        m = (0, l.useMemo)(() => {
                            if (n) {
                                var e;
                                return (0, aY.q)({
                                    className: a$().root,
                                    shimmerClassName: a$().shimmer,
                                    isActive: c,
                                    count: (null == (e = a.source) ? void 0 : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, r.jsx)('div', {
                                className: a$().root,
                                children:
                                    null == s
                                        ? void 0
                                        : s.items.map((e) =>
                                              (0, r.jsx)(
                                                  V.T,
                                                  { titleLineClamp: 1, title: e.data.title, viewAllActionLink: e.data.viewAllActionLink, headingVariant: d },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [null == s ? void 0 : s.items, d, c, n, null == (t = a.source) ? void 0 : t.countWeb]);
                    return (0, r.jsx)('section', { ref: o, title: a.title, className: i, 'data-test-id': u.e8.landing.ITEM_LIST, children: m });
                },
                aG = (0, l.forwardRef)((e, t) => (0, r.jsx)(aX, { forwardRef: t, ...e }));
            var aQ = i(91037),
                aq = i.n(aQ),
                aZ = i(10921),
                aJ = i.n(aZ);
            let a0 = (0, d.PA)((e) => {
                    let { title: t, subtitle: i, link: a, testId: s, icon: o, covers: n, navigateTo: c } = e,
                        {
                            settings: { isMobile: d },
                        } = (0, k.g)(),
                        m = (0, j.N)(),
                        { ref: _, intersectionPropertyId: v } = (0, T.n)(),
                        p = (0, l.useMemo)(() => {
                            if (0 !== n.length)
                                return (0, r.jsx)('div', {
                                    className: aJ().covers,
                                    children: n.map((e, t) =>
                                        (0, r.jsx)(
                                            h.t,
                                            {
                                                className: aJ().coverContainer,
                                                radius: 'xs',
                                                'data-test-id': u.e8.landing.LIKES_HISTORY_COVERS,
                                                children: (0, r.jsx)(th._V, { size: 80, className: aJ().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [n]),
                        x = (0, l.useCallback)(() => {
                            m({ to: c });
                        }, [c, m]);
                    return (0, r.jsx)('div', {
                        ref: _,
                        'data-intersection-property-id': v,
                        className: aJ().root,
                        'data-test-id': s,
                        children: (0, r.jsxs)(E.N, {
                            className: aJ().link,
                            href: a,
                            onClick: x,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: aJ().start,
                                    children: [
                                        o,
                                        (0, r.jsxs)('div', {
                                            className: aJ().textContainer,
                                            children: [
                                                (0, r.jsxs)(C.DZ, {
                                                    className: aJ().title,
                                                    size: d ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    'data-test-id': u.e8.landing.LIKES_HISTORY_TITLE,
                                                    children: [t, (0, r.jsx)(ie.I, { className: aJ().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, r.jsx)(C.HL, {
                                                    className: aJ().subtitle,
                                                    size: 'm',
                                                    variant: 'div',
                                                    lineClamp: 1,
                                                    'data-test-id': u.e8.landing.LIKES_HISTORY_SUBTITLE,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                p,
                            ],
                        }),
                    });
                }),
                a1 = (e) => {
                    let { isActive: t } = e;
                    return (0, r.jsx)(ty.W, { isActive: t, className: aJ().root, height: 82 });
                },
                a2 = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, ...c } = e,
                        { formatMessage: d } = (0, m.A)(),
                        { favorites: _, history: v } = s || {},
                        p = (0, l.useMemo)(
                            () =>
                                _ && v && !i
                                    ? [
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.ky.Playlist,
                                                  objectId: _.id,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, r.jsx)(a0, {
                                                      title: _.title,
                                                      subtitle: d({ id: 'entity-names.number-of-tracks' }, { counter: _.count }),
                                                      link: _.url,
                                                      navigateTo: o.QT.PlaylistScreen,
                                                      testId: u.e8.landing.LIKES_BLOCK,
                                                      icon: (0, r.jsx)(h.t, {
                                                          className: aq().favoritesCoverContainer,
                                                          radius: 'm',
                                                          children: (0, r.jsx)(th._V, {
                                                              className: aq().favoritesCover,
                                                              size: 80,
                                                              src: _.cover.uri,
                                                              fit: 'cover',
                                                              withAvatarReplace: !0,
                                                              alt: _.title,
                                                          }),
                                                      }),
                                                      covers: _.trackCovers,
                                                  }),
                                              },
                                              _.id,
                                          ),
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.ky.Shortcut,
                                                  objectId: v.id,
                                                  objectPosX: 2,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, r.jsx)(a0, {
                                                      title: v.title,
                                                      subtitle: v.artists.join(', '),
                                                      link: v.url,
                                                      navigateTo: o.QT.MusicHistoryScreen,
                                                      testId: u.e8.landing.HISTORY_BLOCK,
                                                      icon: (0, r.jsx)(h.t, {
                                                          className: aq().historyIconContainer,
                                                          radius: 'm',
                                                          children: (0, r.jsx)(ie.I, { className: aq().historyIcon, variant: 'history', size: 'm' }),
                                                      }),
                                                      covers: v.trackCovers,
                                                  }),
                                              },
                                              v.id,
                                          ),
                                      ]
                                    : [(0, r.jsx)(a1, { isActive: a }, 0), (0, r.jsx)(a1, { isActive: a }, 1)],
                            [_, d, v, a, i],
                        );
                    return (0, r.jsx)('section', {
                        ref: t,
                        className: aq().root,
                        ...(0, B.getDataAttrFromProps)(c),
                        children: (0, r.jsx)(D.F, { className: aq().carousel, itemClassName: aq().carouselItem, children: p }),
                    });
                },
                a3 = (0, l.forwardRef)((e, t) => (0, r.jsx)(a2, { forwardRef: t, ...e }));
            var a6 = i(88467),
                a9 = i(14209),
                a7 = i.n(a9);
            let a4 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: d,
                        ...m
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: d,
                        ...m,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        itemClassName: a7().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        'data-test-id': u.e8.landing.MIXES_BLOCK,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e) =>
                                      (0, r.jsx)(
                                          a6.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                a8 = (0, l.forwardRef)((e, t) => (0, r.jsx)(a4, { forwardRef: t, ...e }));
            var a5 = i(8588),
                se = i(50308),
                st = i(55885),
                si = i.n(st);
            let sa = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            headerClassName: a,
                            meta: s,
                            data: d,
                            headingVariant: m,
                            isShimmerActive: _,
                            containerClassName: u,
                            isShimmerVisible: v,
                            className: p,
                            ...h
                        } = e,
                        C = (0, l.useId)(),
                        x = (0, l.useMemo)(() => {
                            if (v) {
                                var e;
                                return (0, r.jsx)(se.e, {
                                    itemClassName: (0, c.$)(si().item, si().important, si().shimmerWithSubcover),
                                    isActive: _,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count: null == (e = s.source) ? void 0 : e.count,
                                });
                            }
                            return null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, r.jsx)(
                                                  a5.V,
                                                  {
                                                      linkClassName: (0, c.$)(si().item, si().important),
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: 'h3',
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  );
                        }, [_, v, null == d ? void 0 : d.items, null == (t = s.source) ? void 0 : t.count]);
                    return (0, r.jsxs)('section', {
                        ref: i,
                        className: p,
                        ...(0, B.getDataAttrFromProps)(h),
                        children: [
                            (0, r.jsx)(V.T, {
                                className: (0, c.$)(si().header, a),
                                labeledForId: C,
                                title: s.title,
                                viewAllActionLink: s.viewAllActionLink,
                                headingVariant: m,
                            }),
                            (0, r.jsx)('div', { className: (0, c.$)(si().mixesGrid, u), children: x }),
                        ],
                    });
                },
                ss = (0, l.forwardRef)((e, t) => (0, r.jsx)(sa, { forwardRef: t, ...e }));
            var sr = i(46997),
                sl = i.n(sr);
            let so = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...v
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...v,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: sl().shimmer,
                        containerClassName: s,
                        headerClassName: l,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        itemClassName: sl().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: m,
                        'data-test-id': u.e8.landing.MIXES_MUSIC,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, r.jsx)(
                                                  a5.V,
                                                  { linkClassName: sl().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sn = (0, l.forwardRef)((e, t) => (0, r.jsx)(so, { forwardRef: t, ...e }));
            var sc = i(39499),
                sd = i.n(sc),
                sm = i(4274),
                s_ = i.n(sm);
            let su = (e) => {
                    let { isActive: t } = e;
                    return (0, r.jsx)(ty.W, { isActive: t, className: s_().root });
                },
                sv = (0, d.PA)((e) => {
                    var t, i;
                    let { neuromusic: a } = e,
                        { from: s } = (0, I.f)(),
                        { isPlaying: o, togglePlay: n } = (0, L.D)({
                            playContextParams: { contextData: { type: v.K.Generative, meta: { id: a.stationId }, from: s }, loadContextMeta: !0 },
                        }),
                        d = (0, l.useCallback)(
                            (e) => {
                                (0, ee.P)(e, s_().ripple), n();
                            },
                            [n],
                        ),
                        m = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--neuromusic-button-background': null == a || null == (e = a.style) ? void 0 : e.backgroundColor,
                                '--neuromusic-button-color': null == a || null == (t = a.style) ? void 0 : t.titleColor,
                            };
                        }, [null == a || null == (t = a.style) ? void 0 : t.backgroundColor, null == a || null == (i = a.style) ? void 0 : i.titleColor]),
                        _ = o ? u.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : u.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, r.jsx)(aC.$, {
                        style: m,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: d,
                        className: (0, c.$)(s_().root, s_().button),
                        'data-test-id': u.e8.landing.NEUROMUSIC_BLOCK_ITEM,
                        children: (0, r.jsxs)('div', {
                            className: s_().textContainer,
                            children: [
                                (0, r.jsx)(ie.I, { className: s_().icon, size: 'xxs', variant: o ? 'pause' : 'play', 'data-test-id': _ }),
                                (0, r.jsx)(C.HL, { className: s_().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: a.title }),
                            ],
                        }),
                    });
                }),
                sp = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: o,
                            meta: n,
                            data: d,
                            className: m,
                            headingVariant: _,
                            ...u
                        } = e,
                        v = (0, l.useId)(),
                        p = (0, l.useRef)(null),
                        h = (0, l.useMemo)(
                            () =>
                                i
                                    ? Array.from({ length: 3 }, (e, t) => (0, r.jsx)(su, { isActive: a }, t))
                                    : null == d
                                      ? void 0
                                      : d.items.map((e, t) => (0, r.jsx)(sv, { neuromusic: e }, t)),
                            [null == d ? void 0 : d.items, a, i],
                        );
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, c.$)(sd().root, m),
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [
                            (0, r.jsx)(V.T, {
                                className: o,
                                labeledForId: v,
                                title: n.title,
                                description: n.description,
                                controls: (0, r.jsx)(W.X, { className: sd().controls, carouselRef: p }),
                                headingVariant: _,
                                withDescription: !!n.description,
                            }),
                            (0, r.jsx)(D.F, { ref: p, itemClassName: (0, c.$)(sd().item, sd().important), className: s, 'aria-labelledby': v, children: h }),
                        ],
                    });
                },
                sh = (0, l.forwardRef)((e, t) => (0, r.jsx)(sp, { forwardRef: t, ...e }));
            var sC = i(7462),
                sx = i(54391),
                sb = i(29268),
                sA = i(11260);
            let sj = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var sN = i(67848),
                sT = i.n(sN);
            let sI = (0, d.PA)((e) => {
                var t, i, a;
                let { album: s, releaseDate: n, coverColor: c, coverUri: d } = e,
                    _ = null == s || null == (t = s.artists) ? void 0 : t[0],
                    { formatDate: x } = (0, m.A)(),
                    { trailer: N } = (0, k.g)(),
                    { ref: f, intersectionPropertyId: g } = (0, T.n)(),
                    L = (0, S.Z)(null != (a = null == _ ? void 0 : _.url) ? a : ''),
                    R = (0, a_.S)({ artist: _, callback: L }),
                    P = (0, sx.F)(),
                    w = (0, sC.r)(s.type),
                    O = (0, A.P)(),
                    { from: M, utmLink: D } = (0, I.f)({ contextId: s.id, contextType: v.K.Album }),
                    V = (0, j.N)(),
                    W = (0, p.c)((e) => {
                        V({ to: o.QT.ArtistScreen, objectId: null == _ ? void 0 : _.id, objectType: o.ky.Artist }), R(e);
                    }),
                    U = (0, p.c)((e) => {
                        if (O()) {
                            e.stopPropagation(), e.preventDefault();
                            return;
                        }
                        (null == s ? void 0 : s.id) && (e.stopPropagation(), N.openAlbumTrailer(s.id), P(o.ky.Album, String(s.id)));
                    }),
                    H = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(sA.L, {
                                children: (0, r.jsx)(sb.k, { variant: 'text', iconSize: 'xs', className: sT().trailerButton, withRipple: !1, onClick: U }),
                            });
                    }, [null == s || null == (i = s.trailer) ? void 0 : i.isAvailable, U]),
                    z = (0, l.useMemo)(() => {
                        if (n)
                            return (0, r.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: sT().descriptionContainer,
                                children: [
                                    (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: w.toLowerCase() }),
                                    (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                    (0, r.jsx)(C.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        children: x(new Date(n), { day: 'numeric', month: 'long' }),
                                    }),
                                ],
                            });
                    }, [w, x, n]);
                return (0, r.jsxs)('div', {
                    className: sT().root,
                    ref: f,
                    'data-intersection-property-id': g,
                    children: [
                        (0, r.jsxs)('div', {
                            className: sT().cover,
                            children: [
                                (0, r.jsxs)(h.t, {
                                    className: sT().coverImage,
                                    radius: 'round',
                                    withShadow: !0,
                                    children: [
                                        (0, r.jsx)(y.B, {
                                            className: sT().image,
                                            src: d,
                                            alt: null == _ ? void 0 : _.name,
                                            size: 300,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)('div', {
                                            className: sT().fade,
                                            style: {
                                                background: ((e) => {
                                                    (e && sj.test(e)) || (e = '#000000');
                                                    let { r: t, g: i, b: a } = (0, B.hexToRgb)(e);
                                                    return 'linear-gradient(180.14deg, rgba('
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0) 30.88%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0.4) 70.8%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0.9) 80.88%)');
                                                })(null == s ? void 0 : s.averageColor),
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(E.N, { className: sT().fade, 'aria-label': null == _ ? void 0 : _.name, href: null == _ ? void 0 : _.url, onClick: W }),
                                (0, r.jsx)(b.i, {
                                    className: sT().artists,
                                    lineClamp: 2,
                                    artists: null == s ? void 0 : s.artists,
                                    linkClassName: sT().artistLink,
                                    captionClassName: sT().artistCaption,
                                    variant: 'breakWord',
                                }),
                            ],
                        }),
                        (0, r.jsx)(es, {
                            className: sT().card,
                            album: s,
                            albumUrl: s.url,
                            from: M,
                            utmLink: D,
                            trailerButton: H,
                            description: z,
                            entityName: w,
                            coverColor: c,
                            'data-test-id': u.Kq.newRelease.NEW_RELEASE_CARD,
                        }),
                    ],
                });
            });
            var sf = i(48293),
                sg = i.n(sf);
            let sS = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: v,
                            ...p
                        } = e,
                        { objectsCount: h } = (0, e4.N)(),
                        C = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        { theme: b } = (0, ig.W)(),
                        A = (0, l.useMemo)(
                            () =>
                                a
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, i) =>
                                              (0, r.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, r.jsx)(ty.W, { isActive: e, radius: 'round', className: sg().shimmerImage }),
                                                          (0, r.jsx)(ty.W, { isActive: e, radius: 'l', className: sg().shimmerCard }),
                                                      ],
                                                  },
                                                  i,
                                              ),
                                          ))(i)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) => {
                                            let i = e.coverUriWithPlaceholder(b);
                                            return (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: (0, r.jsx)(sI, { ...e, coverUri: i }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == _ ? void 0 : _.items, i, a, b],
                        );
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, c.$)(sg().root, v),
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.ky.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, r.jsx)(V.T, {
                                    className: d,
                                    labeledForId: C,
                                    title: m.title,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: sg().controls, carouselRef: x }),
                                    headingVariant: u,
                                }),
                            }),
                            (0, r.jsx)(D.F, { ref: x, itemClassName: (0, c.$)(sg().item, sg().important), className: s, 'aria-labelledby': C, children: A }),
                        ],
                    });
                }),
                sL = (0, l.forwardRef)((e, t) => (0, r.jsx)(sS, { forwardRef: t, ...e })),
                sk = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, r.jsx)(eB.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sy = (0, l.forwardRef)((e, t) => (0, r.jsx)(sk, { forwardRef: t, ...e })),
                sR = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      e.type === e9._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, r.jsx)(eB.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.ky.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, r.jsx)(tK.B, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                sE = (0, l.forwardRef)((e, t) => (0, r.jsx)(sR, { forwardRef: t, ...e }));
            var sP = i(29001),
                sw = i(91693),
                sO = i.n(sw);
            let sM = (e) => {
                    let { forwardRef: t, containerClassName: i, id: a, meta: s, ...l } = e,
                        { formatMessage: d } = (0, m.A)();
                    return (0, r.jsx)('section', {
                        ref: t,
                        className: (0, c.$)(sO().root, i),
                        ...(0, B.getDataAttrFromProps)(l),
                        children: (0, r.jsx)(
                            n.B,
                            {
                                objectType: o.ky.Text,
                                objectId: a,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, r.jsx)(sP.F, { textButton: d({ id: 'interface-actions.further' }), meta: s }),
                            },
                            a,
                        ),
                    });
                },
                sB = (0, l.forwardRef)((e, t) => (0, r.jsx)(sM, { forwardRef: t, ...e })),
                sD = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, r.jsx)(tK.B, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                sV = (0, l.forwardRef)((e, t) => (0, r.jsx)(sD, { forwardRef: t, ...e }));
            var sW = i(6791),
                sU = i(45447),
                sH = i(94631);
            let sz = (e) => {
                    let { items: t, playlistId: i, playlistUuid: a, from: s, utmLink: l } = e;
                    return t.slice(0, 8).map((e, c) => {
                        let d,
                            { objectPosX: m, objectPosY: _, objectsCount: u } = (0, ex.$)({ index: c, count: t.length }),
                            p =
                                ((d = e.id),
                                {
                                    contextData: { type: v.K.Playlist, meta: { id: i, uuid: a }, from: s, utmLink: l, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: c, entityId: d },
                                    loadContextMeta: !0,
                                    entitiesData: t.map((e) => (0, sU.l)(e.id, e.albumId ? String(e.albumId) : void 0)),
                                });
                        return (0, r.jsx)(
                            n.B,
                            {
                                objectType: o.ky.Track,
                                objectId: e.id,
                                objectPosX: m,
                                objectPosY: _,
                                objectsCount: u,
                                children: e.isTrackNonMusic
                                    ? (0, r.jsx)(sH.K, { track: e, playContextParams: p, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, r.jsx)(eL.K, { track: e, playContextParams: p }),
                            },
                            e.id,
                        );
                    });
                },
                sK = { src: '/_next/static/media/heart.602389ae.png' };
            var sY = i(62107),
                sF = i.n(sY);
            let s$ = (0, d.PA)(() => {
                var e, t;
                let { vibe: i } = (0, k.g)(),
                    { pageId: a } = (0, id.$)(),
                    { blockIdForFrom: s } = (0, e4.N)(),
                    o = (0, S.Z)(iC.Z.main.href),
                    { formatMessage: n } = (0, m.A)(),
                    { withPlusPopoverWeb: c } = (0, tA.X)(),
                    d = n({ id: 'vibe-actions.play-vibe' }),
                    { isPlaying: v, togglePlay: p } = (0, tj.B)({
                        seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: a,
                        blockIdForFrom: s,
                    });
                (0, l.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                );
                let h = (0, l.useCallback)(() => {
                        c || (v || p(), o());
                    }, [c, v, o, p]),
                    x = (0, l.useCallback)(
                        () =>
                            (0, r.jsx)(aC.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: sF().myWaveButton,
                                'aria-label': d,
                                onClick: h,
                                'data-test-id': u.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                                children: (0, r.jsx)(C.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, r.jsx)(C.HL, { variant: 'span', size: 'm', weight: 'medium', className: sF().myWaveButtonText, children: d }),
                                }),
                            }),
                        [d, h],
                    );
                return (
                    i.isNeededToLoad && (0, l.use)(i.getLastVibe()),
                    (0, r.jsxs)('div', {
                        className: sF().root,
                        'data-test-id': u.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
                        children: [
                            (0, r.jsx)(th._V, { src: sK.src, className: sF().image, 'data-test-id': u.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE }),
                            (0, r.jsx)(C.DZ, {
                                variant: 'h3',
                                size: 'xs',
                                className: sF().header,
                                'data-test-id': u.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                                children: (0, r.jsx)(_.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, r.jsx)(C.HL, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: sF().text,
                                'data-test-id': u.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                                children: (0, r.jsx)(_.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            (0, r.jsx)(tN.S, { isEnabled: c, placement: 'top', textVariant: 'vibe', renderChildren: x }),
                        ],
                    })
                );
            });
            var sX = i(6943),
                sG = i.n(sX);
            let sQ = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: n,
                            headerClassName: d,
                            meta: u,
                            data: p,
                            type: h,
                            headingVariant: C,
                            className: x,
                            ...b
                        } = e,
                        { from: A, utmLink: j } = (0, I.f)({ contextId: null == p ? void 0 : p.playlist.id, contextType: v.K.Playlist }),
                        {
                            trailer: N,
                            settings: { isMobile: T },
                        } = (0, k.g)(),
                        f = (0, sx.F)(),
                        { formatMessage: g } = (0, m.A)(),
                        S = (0, eF.i)({ playlistId: null == p ? void 0 : p.playlist.id }),
                        L = (null == p ? void 0 : p.totalItemsCount)
                            ? g({ id: 'entity-names.number-of-tracks' }, { counter: null == p ? void 0 : p.totalItemsCount })
                            : u.description,
                        y = [s.t.COLLECTION_PLAYLIST_WITH_LIKES, s.t.SMART_OPEN_PLAYLIST].includes(h),
                        R = u.coverStyle !== sW.z.NONE,
                        E = (0, l.useCallback)(() => {
                            (null == p ? void 0 : p.playlist.id) &&
                                (N.setUtmLink(j), N.openPlaylistTrailer(null == p ? void 0 : p.playlist.id), f(o.ky.Playlist, String(p.playlist.id)));
                        }, [N, null == p ? void 0 : p.playlist.id, f, j]),
                        P = (0, l.useMemo)(() => {
                            if (null == p ? void 0 : p.withRewindTrailerButton)
                                return T
                                    ? (0, r.jsx)(sb.k, { className: sG().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: E })
                                    : (0, r.jsx)(sb.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: sG().trailer,
                                          onClick: E,
                                          children: (0, r.jsx)(_.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == p ? void 0 : p.withRewindTrailerButton, T, E]);
                    return (null == p ? void 0 : p.playlist.isFavouritePlaylist) &&
                        (null == p ? void 0 : p.totalItemsCount) === 0 &&
                        (null == p ? void 0 : p.canShowEmptyBlock)
                        ? (0, r.jsx)(s$, {})
                        : (0, r.jsx)(eY._, {
                              sourceContextData: S,
                              children: (0, r.jsx)(ey.$, {
                                  isShimmerActive: a,
                                  shimmer: (0, r.jsx)(eR.D, { variant: ek.X.PLAYLIST, isActive: a }),
                                  maxColumnsCount: ey.D.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, c.$)(sG().root, x),
                                  isShimmerVisible: i,
                                  blockHeaderClassName: d,
                                  carouselClassName: n,
                                  blockHeaderTitle: u.title,
                                  blockHeaderCoverUrl: null == p ? void 0 : p.getCoverUri(u.coverStyle),
                                  blockHeaderDescription: L,
                                  viewAllActionLink: null == p ? void 0 : p.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: C,
                                  additionalControl: P,
                                  withBlockHeaderDescription: y,
                                  withBlockHeaderCover: R,
                                  ...b,
                                  children:
                                      (null == p ? void 0 : p.items) &&
                                      sz({ items: p.items, playlistId: p.playlist.id, playlistUuid: p.playlist.uuid, from: A, utmLink: j }),
                              }),
                          });
                }),
                sq = (0, l.forwardRef)((e, t) => (0, r.jsx)(sQ, { forwardRef: t, ...e }));
            var sZ = i(32369),
                sJ = i(19875),
                s0 = i(85819),
                s1 = i.n(s0);
            let s2 = (0, d.PA)((e) => {
                    var t, i;
                    let {
                            forwardRef: a,
                            isShimmerVisible: s,
                            isShimmerActive: o,
                            tracksContainerClassName: n,
                            headerClassName: c,
                            meta: d,
                            data: _,
                            headingVariant: u,
                            className: h,
                            ...C
                        } = e,
                        { formatMessage: x } = (0, m.A)(),
                        { from: b, utmLink: A } = (0, I.f)({ contextId: null == _ ? void 0 : _.playlist.id, contextType: v.K.Playlist }),
                        j = (0, eF.i)({ playlistId: null == _ ? void 0 : _.playlist.id, filter: null == _ ? void 0 : _.filters.activeFilter }),
                        N = (0, e7.zb)((null == _ ? void 0 : _.filters.activeFilterIndex) || 0),
                        T = (0, l.useRef)(null),
                        f = (0, sJ.$)(),
                        g = (null == _ ? void 0 : _.totalItemsCount) ? x({ id: 'entity-names.number-of-tracks' }, { counter: _.totalItemsCount }) : d.description,
                        S = (0, p.c)((e) => {
                            var t;
                            if (!N.onTabChange || e === N.value || !_) return;
                            setTimeout(() => {
                                var t, i, a;
                                null == (a = T.current) || null == (i = a.children[e]) || null == (t = i.focus) || t.call(i);
                            }),
                                N.onTabChange(e);
                            let i = null == (t = _.filters.items) ? void 0 : t[e];
                            i && (_.handleFilterClick(i), f({ tabId: i.id, tabPos: e + 1 }));
                        });
                    if (((null == _ ? void 0 : _.playlistLoading.isNeededToLoad) && (0, l.use)(_.getPlaylist()), null == _ ? void 0 : _.shouldShowEmptyPlaylist))
                        return (0, r.jsx)(s$, {});
                    let L = o || !!(null == _ ? void 0 : _.isLoading),
                        k = s || !!(null == _ ? void 0 : _.isLoading) || !!(null == _ ? void 0 : _.isRejected),
                        y = _ && 0 === _.items.length,
                        R = !!(null == _ || null == (t = _.filters.items) ? void 0 : t.length),
                        E = !_ || (null == _ ? void 0 : _.isLoading) || (null == _ || null == (i = _.filters) ? void 0 : i.isShimmerVisible) || y || R,
                        P = (0, eM.L)(() => {
                            var e, t, i, a;
                            if (E)
                                return (0, r.jsx)(sZ.A, {
                                    className: s1().filters,
                                    tabsState: N,
                                    handleFilterClick: S,
                                    ref: T,
                                    items: null != (a = null == _ || null == (e = _.filters) ? void 0 : e.items) ? a : void 0,
                                    isShimmerVisible: null == _ || null == (t = _.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == _ || null == (i = _.filters) ? void 0 : i.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: s1().shimmer,
                                });
                        });
                    return (0, r.jsx)(eY._, {
                        sourceContextData: j,
                        children: (0, r.jsx)(ey.$, {
                            isShimmerActive: L,
                            shimmer: (0, r.jsx)(eR.D, { variant: ek.X.PLAYLIST, isActive: L }),
                            maxColumnsCount: ey.D.TWO,
                            itemsCountPerColumn: 4,
                            className: h,
                            isShimmerVisible: s,
                            isColumnsShimmerVisible: k,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: c,
                            carouselClassName: n,
                            blockHeaderTitle: d.title,
                            blockHeaderCoverUrl: d.coverUri,
                            blockHeaderDescription: g,
                            viewAllActionLink: null == _ ? void 0 : _.playlist.url,
                            ref: a,
                            blockHeaderHeadingVariant: u,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: d.coverStyle !== sW.z.NONE,
                            beforeCarousel: P,
                            ...C,
                            children:
                                (null == _ ? void 0 : _.items) && sz({ items: _.items, playlistId: _.playlist.id, playlistUuid: _.playlist.uuid, from: b, utmLink: A }),
                        }),
                    });
                }),
                s3 = (0, l.forwardRef)((e, t) => (0, r.jsx)(s2, { forwardRef: t, ...e }));
            var s6 = i(48454),
                s9 = i(3417),
                s7 = i.n(s9);
            let s4 = (e) => {
                let { promotion: t } = e,
                    { ref: i, intersectionPropertyId: a } = (0, T.n)(),
                    s = (0, j.N)(),
                    { experiments: n } = (0, k.g)(),
                    d = n.checkExperiment(eb.z.WebNextErids, 'on'),
                    { advDisclaimer: m } = t,
                    [v, p] = (0, l.useState)(!1),
                    x = (0, l.useCallback)(() => {
                        s({ to: o.QT.Link });
                    }, [s]);
                return (0, r.jsxs)('div', {
                    className: (0, c.$)(s7().root, s7().card),
                    ref: i,
                    'data-intersection-property-id': a,
                    'data-test-id': u.e8.landing.EDITORIAL_PROMOTIONS_CARD,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s7().meta,
                            children: [
                                (0, r.jsx)(E.N, {
                                    className: s7().titleLink,
                                    href: t.weblink,
                                    onClick: x,
                                    children: (0, r.jsx)(C.HL, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, r.jsx)(C.HL, {
                                    className: s7().subtitle,
                                    variant: 'div',
                                    lineClamp: 1,
                                    type: 'entity',
                                    size: 's',
                                    weight: 'medium',
                                    children: t.subtitle,
                                }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: s7().coverWrapper,
                            children: [
                                (0, r.jsx)(E.N, {
                                    className: s7().coverLink,
                                    href: t.weblink,
                                    onClick: x,
                                    'aria-hidden': !0,
                                    tabIndex: -1,
                                    children: (0, r.jsx)(h.t, {
                                        className: s7().cover,
                                        radius: 'm',
                                        withShadow: !0,
                                        children: (0, r.jsx)(th._V, {
                                            className: s7().image,
                                            src: t.imageUrl,
                                            alt: t.title,
                                            withAvatarReplace: !0,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                    }),
                                }),
                                d &&
                                    m &&
                                    (0, r.jsx)('div', {
                                        className: s7().advDisclaimer,
                                        children: (0, r.jsxs)(s6.AM, {
                                            placement: 'top-end',
                                            open: v,
                                            onOpenChange: p,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, r.jsxs)(aC.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: s7().advDisclaimerTrigger,
                                                    'data-test-id': u.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, r.jsx)(_.A, { id: 'ads.ad' }), (0, r.jsx)(ie.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, r.jsx)(s6.hl, {
                                                    className: s7().advDisclaimerPopover,
                                                    children: (0, r.jsx)(C.HL, {
                                                        className: s7().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': u.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TEXT,
                                                        children: m,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            };
            var s8 = i(15047),
                s5 = i.n(s8),
                re = i(57762),
                rt = i.n(re);
            let ri = (e) => {
                    let { isActive: t, withHeadingShimmer: i } = e;
                    return (0, r.jsxs)('div', {
                        className: rt().root,
                        children: [
                            (0, r.jsx)(ty.W, { isActive: t, className: rt().cover, radius: 'l' }),
                            (0, r.jsxs)('div', {
                                className: rt().meta,
                                children: [
                                    i && (0, r.jsx)(ty.W, { isActive: t, className: rt().heading, radius: 's' }),
                                    (0, r.jsx)(ty.W, { isActive: t, className: rt().title, radius: 's' }),
                                    (0, r.jsx)(ty.W, { isActive: t, className: rt().subtitle, radius: 's' }),
                                ],
                            }),
                        ],
                    });
                },
                ra = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            data: s,
                            meta: d,
                            containerClassName: m,
                            headerClassName: _,
                            headingVariant: v,
                            className: p,
                            ...h
                        } = e,
                        C = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        b = (0, l.useMemo)(() => {
                            if (i) return Array.from({ length: 6 }, (e, t) => (0, r.jsx)(ri, { isActive: a, withHeadingShimmer: !0 }, t));
                            return null == s
                                ? void 0
                                : s.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.ky.Feature,
                                              objectId: e.featureId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: s.items.length,
                                              children: (0, r.jsx)(s4, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == s ? void 0 : s.items, a, i]);
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(s5().root, p),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(h),
                        'data-test-id': u.e8.landing.EDITORIAL_PROMOTIONS,
                        children: [
                            (0, r.jsx)(V.T, {
                                className: _,
                                labeledForId: C,
                                title: d.title,
                                controls: (0, r.jsx)(W.X, { className: s5().controls, carouselRef: x }),
                                headingVariant: v,
                            }),
                            (0, r.jsx)(D.F, { className: m, ref: x, itemClassName: (0, c.$)(s5().item, s5().important), 'aria-labelledby': C, children: b }),
                        ],
                    });
                },
                rs = (0, l.forwardRef)((e, t) => (0, r.jsx)(ra, { forwardRef: t, ...e })),
                rr = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eJ.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      switch (e.type) {
                                          case e9._.ALBUM_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.ky.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, r.jsx)(eB.a, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case e9._.ARTIST_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.ky.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, r.jsx)(tc.a, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case e9._.PLAYLIST_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, r.jsx)(tK.B, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                rl = (0, l.forwardRef)((e, t) => (0, r.jsx)(rr, { forwardRef: t, ...e }));
            var ro = i(88446),
                rn = i(42383),
                rc = i(69675),
                rd = i(50476),
                rm = i(4664),
                r_ = i(84427),
                ru = i(3107),
                rv = i(40053),
                rp = i(85015),
                rh = i(2755),
                rC = i(20183),
                rx = i(95226),
                rb = i(13424),
                rA = i.n(rb);
            let rj = (e) => {
                let { isActive: t, className: i, ariaLabel: a } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': a,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, c.$)(rA().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: rA().infoContainer,
                            children: [
                                (0, r.jsx)(ty.W, { isActive: t, className: rA().cover, radius: 's' }),
                                (0, r.jsx)('div', { className: rA().textContainer, children: (0, r.jsx)(ty.W, { isActive: t, className: rA().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(ty.W, { isActive: t, className: rA().action, radius: 'l' }),
                    ],
                });
            };
            var rN = i(30733),
                rT = i.n(rN);
            let rI = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            data: s,
                            meta: d,
                            isLoaded: v,
                            headerClassName: p,
                            setIsNeededToLoad: h,
                            tracksContainerClassName: x,
                            className: b,
                            ...A
                        } = e,
                        { formatMessage: j } = (0, m.A)(),
                        {
                            search: { history: N },
                        } = (0, k.g)(),
                        T = (0, r_.d)(),
                        I = !(null == s ? void 0 : s.items.length) && v,
                        f = (0, rv.f)(),
                        { awakeLumenModal: g, requestAwakeLumenModal: S } = (0, ru.z)();
                    return ((0, l.useLayoutEffect)(
                        () => (
                            N.shouldUpdateHistory && (h(), N.setShouldUpdateHistory(!1)),
                            () => {
                                N.hasCleared && h(), N.reset();
                            }
                        ),
                        [N, h],
                    ),
                    I || N.hasCleared)
                        ? (0, r.jsx)('div', {
                              ref: t,
                              className: (0, c.$)(rT().root, rT().fallback),
                              ...(0, B.getDataAttrFromProps)(A),
                              'data-test-id': u.e8.landing.SEARCH_HISTORY_EMPTY,
                              children: (0, r.jsx)(C.HL, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, r.jsx)(_.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, r.jsxs)('div', {
                              ref: t,
                              className: rT().root,
                              ...(0, B.getDataAttrFromProps)(A),
                              'data-test-id': u.e8.landing.SEARCH_HISTORY,
                              children: [
                                  g,
                                  (0, r.jsx)(ey.$, {
                                      className: b,
                                      shimmer: (0, r.jsx)(rj, { isActive: i }),
                                      isShimmerActive: i,
                                      isShimmerVisible: a,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: ey.D.TWO,
                                      blockHeaderClassName: p,
                                      carouselClassName: (0, c.$)(x, rT().content),
                                      blockHeaderTitle: d.title,
                                      blockHeaderDescription: d.description,
                                      viewAllActionLink: d.viewAllActionLink,
                                      children:
                                          null == s
                                              ? void 0
                                              : s.items.map((e, t) => {
                                                    var i, a;
                                                    let {
                                                        objectPosX: l,
                                                        objectPosY: c,
                                                        objectsCount: d,
                                                    } = (0, ex.$)({ index: t, count: s.items.length, itemsCountPerColumn: 5, showedItemsCountInBlock: 10 });
                                                    switch (e.type) {
                                                        case e9._.NON_MUSIC_ALBUM_ITEM:
                                                        case e9._.ALBUM_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    objectsCount: d,
                                                                    children: (0, r.jsx)(ro.M, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e9._.ARTIST_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    objectsCount: d,
                                                                    children: (0, r.jsx)(rn.c, { description: j({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e9._.TRACK_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    objectsCount: d,
                                                                    children: (0, r.jsx)(rm.c, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e9._.LIKED_PLAYLIST_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    objectsCount: d,
                                                                    children: (0, r.jsx)(rd.v, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e9._.WAVE_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Wave,
                                                                    objectId: null != (i = e.data.vibe.seeds[0]) ? i : '',
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    objectsCount: d,
                                                                    children: (0, r.jsx)(rC.H, {
                                                                        vibe: e.data.vibe,
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case e9._.WAVE_AGENT_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.ky.Wave,
                                                                    objectId: null != (a = e.data.seeds[0]) ? a : '',
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    objectsCount: d,
                                                                    children: (0, r.jsx)(rC.H, {
                                                                        vibe: e.data,
                                                                        description: e.data.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: rp.h.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e9._.CLIP_ITEM:
                                                            if (!T) return null;
                                                            return (0, r.jsx)(rc.N, { clip: e.data }, e.data.clipId);
                                                        case e9._.QUERY_TO_VIBE_ITEM:
                                                            return (
                                                                f &&
                                                                (0, r.jsx)(rx.F, {
                                                                    blockId: o.LA.Q2vWave,
                                                                    blockType: o.LA.Q2vWave,
                                                                    blockPosX: 1,
                                                                    blockPosY: 1,
                                                                    objectsCount: 1,
                                                                    children: (0, r.jsx)(
                                                                        n.B,
                                                                        {
                                                                            objectPosX: 1,
                                                                            objectPosY: 1,
                                                                            objectsCount: 1,
                                                                            objectType: o.ky.Wave,
                                                                            objectId: e.data.stationId,
                                                                            children: (0, r.jsx)(rh.K, { requestAwakeLumenModal: S, vibe: e.data }),
                                                                        },
                                                                        e.data.getKey(t),
                                                                    ),
                                                                })
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  v &&
                                      (0, r.jsx)(aC.$, {
                                          onClick: N.clear,
                                          className: rT().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          'data-test-id': u.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON,
                                          children: (0, r.jsx)(_.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                rf = (0, l.forwardRef)((e, t) => (0, r.jsx)(rI, { forwardRef: t, ...e }));
            var rg = i(14257),
                rS = i(18941),
                rL = i.n(rS);
            let rk = (0, d.PA)((e) => {
                    var t, i, a, s, o, n, c, d, m;
                    let { containerClassName: v, meta: p, data: h, forwardRef: x, headingVariant: b = 'h2', ...A } = e,
                        { experiments: j } = (0, k.g)(),
                        N = (0, S.Z)(null != (m = null == h ? void 0 : h.weblink) ? m : ''),
                        { theme: T } = (0, ig.W)(),
                        I = j.checkExperiment(eb.z.WebNextErids, 'on'),
                        f = null == h ? void 0 : h.advDisclaimer,
                        [g, L] = (0, l.useState)(!1),
                        y =
                            T === rg.S.Light
                                ? null == h || null == (t = h.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == h || null == (i = h.darkTheme)
                                  ? void 0
                                  : i.imageUrl,
                        R = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    T === rg.S.Light
                                        ? null == h || null == (e = h.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == h || null == (t = h.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [T, null == h || null == (a = h.darkTheme) ? void 0 : a.textColor, null == h || null == (s = h.lightTheme) ? void 0 : s.textColor]),
                        E = (0, l.useMemo)(() => {
                            var e, t, i, a;
                            return {
                                '--button-color':
                                    T === rg.S.Light
                                        ? null == h || null == (e = h.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == h || null == (t = h.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    T === rg.S.Light
                                        ? null == h || null == (i = h.lightTheme)
                                            ? void 0
                                            : i.buttonTextColor
                                        : null == h || null == (a = h.darkTheme)
                                          ? void 0
                                          : a.buttonTextColor,
                            };
                        }, [
                            T,
                            null == h || null == (o = h.darkTheme) ? void 0 : o.buttonColor,
                            null == h || null == (n = h.lightTheme) ? void 0 : n.buttonColor,
                            null == h || null == (c = h.darkTheme) ? void 0 : c.buttonTextColor,
                            null == h || null == (d = h.lightTheme) ? void 0 : d.buttonTextColor,
                        ]);
                    return (0, r.jsx)('section', {
                        ref: x,
                        title: p.title,
                        className: v,
                        ...(0, B.getDataAttrFromProps)(A),
                        children: (0, r.jsxs)('div', {
                            className: rL().root,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: rL().actions,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: rL().textContainer,
                                            children: [
                                                !!(null == h ? void 0 : h.title) &&
                                                    (0, r.jsx)(C.DZ, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: rL().textColor,
                                                        lineClamp: 2,
                                                        variant: b,
                                                        style: R,
                                                        children: null == h ? void 0 : h.title,
                                                    }),
                                                !!(null == h ? void 0 : h.subtitle) &&
                                                    (0, r.jsx)(C.HL, {
                                                        className: rL().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: R,
                                                        children: null == h ? void 0 : h.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == h ? void 0 : h.weblink) &&
                                            !!(null == h ? void 0 : h.buttonTitle) &&
                                            (0, r.jsx)(aC.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: rL().button,
                                                role: 'link',
                                                onClick: N,
                                                style: E,
                                                children: (0, r.jsx)(C.HL, {
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: null == h ? void 0 : h.buttonTitle,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, r.jsx)('div', {
                                    className: rL().imageContainer,
                                    children: (0, r.jsx)(th._V, {
                                        src: y || (null == h ? void 0 : h.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: 'cover',
                                        size: 300,
                                        withFallback: !1,
                                        className: rL().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                                I &&
                                    f &&
                                    (0, r.jsx)('div', {
                                        className: rL().advDisclaimer,
                                        children: (0, r.jsxs)(s6.AM, {
                                            placement: 'top-end',
                                            open: g,
                                            onOpenChange: L,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, r.jsxs)(aC.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: rL().advDisclaimerTrigger,
                                                    'data-test-id': u.e8.landing.SPECIAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, r.jsx)(_.A, { id: 'ads.ad' }), (0, r.jsx)(ie.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, r.jsx)(s6.hl, {
                                                    className: rL().advDisclaimerPopover,
                                                    children: (0, r.jsx)(C.HL, {
                                                        className: rL().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': u.e8.landing.SPECIAL_ADV_DISCLAIMER_TEXT,
                                                        children: f,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    });
                }),
                ry = (0, l.forwardRef)((e, t) => (0, r.jsx)(rk, { forwardRef: t, ...e }));
            var rR = i(35793),
                rE = i.n(rR);
            let rP = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: o,
                            meta: n,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        v = (0, l.useId)(),
                        p = (0, e7.zb)(0),
                        h = (0, l.useRef)(null),
                        C = (0, l.useId)(),
                        x = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(aS, {
                                          isActive: a,
                                          ref: h,
                                          containerClassName: s,
                                          ariaLabelledBy: ''.concat(v, ' ').concat(v, '-description'),
                                          length: 9,
                                      })
                                    : null == d
                                      ? void 0
                                      : d.items.map((e) =>
                                            (0, r.jsx)(
                                                e7.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: p.value,
                                                    elementId: C,
                                                    children: (0, r.jsx)(ag, {
                                                        ref: h,
                                                        containerClassName: s,
                                                        ariaLabelledBy: ''.concat(v, ' ').concat(v, '-description'),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [null == d ? void 0 : d.items, i, a, s, v, p.value, C],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(rE().root, _),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [
                            (0, r.jsx)(V.T, {
                                className: (0, c.$)(o, rE().header, rE().important),
                                title: n.title,
                                description: n.description,
                                labeledForId: v,
                                viewAllActionLink: n.viewAllActionLink,
                                controls: (0, r.jsx)(W.X, { className: rE().controls, carouselRef: h }),
                                headingVariant: m,
                                withDescription: !!n.description,
                            }),
                            (0, r.jsx)(te.wI, {
                                isShimmerVisible: i,
                                className: (0, c.$)(s, rE().tabCarousel, rE().important),
                                elementId: C,
                                shimmer: (0, r.jsx)(te.zr, { isActive: a, className: (0, c.$)(s, rE().tabCarousel, rE().important), shimmerClassName: rE().tabShimmer }),
                                'aria-labelledby': v,
                                ...p,
                                children:
                                    null == d
                                        ? void 0
                                        : d.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, r.jsx)(
                                                  e5.o,
                                                  { className: (0, c.$)(rE().tab, rE().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            x,
                        ],
                    });
                },
                rw = (0, l.forwardRef)((e, t) => (0, r.jsx)(rP, { forwardRef: t, ...e }));
            var rO = i(53535),
                rM = i.n(rO);
            let rB = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: d,
                            headerClassName: m,
                            meta: _,
                            data: u,
                            headingVariant: v,
                            className: p,
                            ...h
                        } = e,
                        C = (0, l.useId)(),
                        x = (0, e7.zb)(0),
                        b = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                a
                                    ? (0, r.jsx)(D.F, {
                                          ref: b,
                                          itemClassName: (0, c.$)(rM().item, rM().important),
                                          className: d,
                                          'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                          children: (0, e8.k)({ isActive: s, centered: !0 }),
                                      })
                                    : null == u
                                      ? void 0
                                      : u.items.map((e) => {
                                            var t;
                                            return (0, r.jsx)(
                                                e7.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: x.value,
                                                    elementId: A,
                                                    children: (0, r.jsx)(D.F, {
                                                        ref: b,
                                                        itemClassName: (0, c.$)(rM().item, rM().important),
                                                        className: d,
                                                        'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                                        children:
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.map((t, i) => {
                                                                      var a;
                                                                      return (0, r.jsx)(
                                                                          n.B,
                                                                          {
                                                                              objectType: o.ky.Wave,
                                                                              objectId: t.stationId,
                                                                              objectPosX: i + 1,
                                                                              objectPosY: 1,
                                                                              objectsCount: null == (a = e.data) ? void 0 : a.length,
                                                                              children: (0, r.jsx)(ic.y, { vibe: t }),
                                                                          },
                                                                          t.stationId,
                                                                      );
                                                                  }),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == u ? void 0 : u.items, a, s, d, C, x.value, A],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(rM().root, p),
                        ref: i,
                        ...(0, B.getDataAttrFromProps)(h),
                        children: [
                            (0, r.jsx)(V.T, {
                                className: (0, c.$)(m, rM().header, rM().important),
                                title: _.title,
                                description: _.description,
                                labeledForId: C,
                                viewAllActionLink: _.viewAllActionLink,
                                controls: (0, r.jsx)(W.X, { className: rM().controls, carouselRef: b }),
                                headingVariant: v,
                                withDescription: !!_.description,
                            }),
                            (0, r.jsx)(te.wI, {
                                isShimmerVisible: a,
                                className: (0, c.$)(d, rM().tabCarousel, rM().important),
                                elementId: A,
                                shimmer: (0, r.jsx)(te.zr, { isActive: s, className: (0, c.$)(d, rM().tabCarousel, rM().important), shimmerClassName: rM().tabShimmer }),
                                'aria-labelledby': C,
                                ...x,
                                children:
                                    null == u || null == (t = u.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, r.jsx)(
                                                  e5.o,
                                                  { className: (0, c.$)(rM().tab, rM().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                },
                rD = (0, l.forwardRef)((e, t) => (0, r.jsx)(rB, { forwardRef: t, ...e }));
            var rV = i(5154),
                rW = i(47509),
                rU = i.n(rW),
                rH = i(32496),
                rz = i(34775),
                rK = i.n(rz);
            let rY = (0, d.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, k.g)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(rH.n, { isActive: !0, className: rK().titleShimmer, textClassName: rK().titleTextShimmer }),
                            (0, r.jsx)(rH.n, { isActive: !0, className: rK().descriptionShimmer, textClassName: rK().textShimmer }),
                            (0, r.jsx)(rH.n, { isActive: !0, className: rK().descriptionShimmer, textClassName: rK().textShimmer }),
                            (0, r.jsx)(rH.n, { isActive: !0, className: rK().descriptionShimmer, textClassName: rK().textShimmer }),
                            e &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(rH.n, { isActive: !0, className: rK().descriptionShimmer, textClassName: rK().textShimmer }),
                                        (0, r.jsx)(rH.n, { isActive: !0, className: rK().descriptionShimmer, textClassName: rK().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                rF = Array.from({ length: 3 }, () => rV.v2.src),
                r$ = (0, d.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, data: a, headingVariant: s = 'h2' } = e,
                        { formatMessage: o } = (0, m.A)(),
                        { wizard: n } = (0, k.g)(),
                        c = (0, l.useMemo)(
                            () =>
                                (0, r.jsx)('div', {
                                    className: rU().images,
                                    'data-test-id': u.e8.landing.WIZARD_BLOCK_ARTISTS,
                                    children: rF.map((e, t) => {
                                        var i;
                                        let s = null == a || null == (i = a.artists[t]) ? void 0 : i.coverUri;
                                        return (0, r.jsx)(
                                            h.t,
                                            {
                                                className: rU().paper,
                                                radius: 'round',
                                                children: (0, r.jsx)(th._V, {
                                                    className: rU().image,
                                                    src: s || e,
                                                    fit: 'contain',
                                                    withAvatarReplace: !!s,
                                                    'aria-hidden': !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(u.e8.landing.WIZARD_BLOCK_ARTIST_COVER, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                            [null == a ? void 0 : a.artists],
                        ),
                        d = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(rY, {})
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(C.DZ, {
                                                  variant: s,
                                                  size: 'xs',
                                                  className: rU().title,
                                                  'data-test-id': u.e8.landing.WIZARD_BLOCK_TITLE,
                                                  children: null == a ? void 0 : a.title,
                                              }),
                                              (null == a ? void 0 : a.description) &&
                                                  (0, r.jsx)(C.DZ, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: rU().description,
                                                      lineClamp: 5,
                                                      'data-test-id': u.e8.landing.WIZARD_BLOCK_TEXT,
                                                      children: a.description,
                                                  }),
                                          ],
                                      }),
                            [i, s, null == a ? void 0 : a.title, null == a ? void 0 : a.description],
                        );
                    return (0, r.jsxs)('section', {
                        className: rU().root,
                        ref: t,
                        'data-test-id': u.e8.landing.WIZARD_BLOCK,
                        children: [
                            c,
                            d,
                            (0, r.jsx)(aC.$, {
                                className: rU().button,
                                icon: (0, r.jsx)(ie.I, { variant: 'link', size: 'xxs', className: rU().buttonIcon }),
                                color: 'secondary',
                                size: 'm',
                                iconPosition: 'right',
                                radius: 'xxxl',
                                onClick: n.modal.open,
                                'data-test-id': u.e8.landing.WIZARD_BLOCK_BUTTON,
                                children: o({ id: 'wizard.buttonText' }),
                            }),
                        ],
                    });
                }),
                rX = (0, l.forwardRef)((e, t) => (0, r.jsx)(r$, { forwardRef: t, ...e })),
                rG = {
                    [s.t.COLLECTION_PLAYLIST_WITH_LIKES]: sq,
                    [s.t.COLLECTION_FAVOURITE_PLAYLIST]: s3,
                    [s.t.OPEN_PLAYLIST]: sq,
                    [s.t.SMART_OPEN_PLAYLIST]: sq,
                    [s.t.NON_MUSIC_OPEN_PLAYLIST]: sq,
                    [s.t.COLLECTION_ARTISTS]: tv,
                    [s.t.COLLECTION_ARTISTS_AND_TOP]: tv,
                    [s.t.PERSONAL_ARTISTS]: tv,
                    [s.t.NEW_STARS_ARTISTS]: tv,
                    [s.t.EDITORIAL_ARTISTS]: tv,
                    [s.t.META_TAG_POPULAR_ARTISTS]: tv,
                    [s.t.MICRO_GENRE_ARTISTS]: tv,
                    [s.t.MICRO_GENRE_TOP_ARTISTS]: tv,
                    [s.t.META_TAG_ARTISTS]: tv,
                    [s.t.SIMILAR_ARTISTS]: tv,
                    [s.t.NEW_RELEASES]: sL,
                    [s.t.EDITORIAL_NEW_RELEASES]: sL,
                    [s.t.NEW_PLAYLISTS]: aM.Q,
                    [s.t.EDITORIAL_COMPILATION]: aM.Q,
                    [s.t.RECOMMENDED_PLAYLISTS]: aM.Q,
                    [s.t.META_TAG_POPULAR_PLAYLISTS]: aM.Q,
                    [s.t.META_TAG_PLAYLISTS]: aM.Q,
                    [s.t.META_TAG_NEW_ALBUMS]: aM.Q,
                    [s.t.MICRO_GENRE_ALBUMS]: aM.Q,
                    [s.t.META_TAG_ALBUMS]: aM.Q,
                    [s.t.ARTIST_PLAYLISTS]: aM.Q,
                    [s.t.ARTIST_ALBUMS]: aM.Q,
                    [s.t.ARTIST_COMPILATIONS]: aM.Q,
                    [s.t.ARTIST_STUDIO_ALBUMS]: aM.Q,
                    [s.t.ARTIST_SIMILAR_ENTITIES]: aM.Q,
                    [s.t.COLLECTION_SIMILAR_ENTITIES]: aM.Q,
                    [s.t.PROMOTIONS]: rs,
                    [s.t.EDITORIAL_PROMOTIONS]: rs,
                    [s.t.NON_MUSIC_PROMOTIONS]: rs,
                    [s.t.PERSONAL_PLAYLISTS]: sV,
                    [s.t.REWIND_PLAYLISTS]: sV,
                    [s.t.MICRO_GENRE_SIMILAR_WAVE]: aR,
                    [s.t.META_TAG_SIMILAR_WAVE]: aR,
                    [s.t.EDITORIAL_WAVES]: aR,
                    [s.t.META_TAG_WAVE]: aR,
                    [s.t.MICRO_GENRE_WAVE]: aR,
                    [s.t.EDITORIAL_WAVES_AGENT]: aO,
                    [s.t.META_TAG_WAVE_AGENT]: aO,
                    [s.t.MICRO_GENRE_WAVE_AGENT]: aO,
                    [s.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: aO,
                    [s.t.META_TAG_SIMILAR_WAVE_AGENT]: aO,
                    [s.t.CONCERTS_PERSONAL]: i0,
                    [s.t.CONCERTS_TOP]: i0,
                    [s.t.EDITORIAL_CONCERTS]: i0,
                    [s.t.VIEWED_CONCERTS]: i0,
                    [s.t.CLIPS]: eZ,
                    [s.t.ARTIST_CLIPS]: eZ,
                    [s.t.WAVES]: rw,
                    [s.t.SETS_BY_WAVES]: rw,
                    [s.t.WAVES_AGENT]: rD,
                    [s.t.SETS_BY_WAVES_AGENT]: rD,
                    [s.t.CHART_TRACKS]: eX,
                    [s.t.COLLECTION_KIDS]: tZ,
                    [s.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: t8,
                    [s.t.COLLECTION_PLAYLISTS_CREATED]: t$,
                    [s.t.COLLECTION_PLAYLISTS_LIKED]: t0,
                    [s.t.ALBUM_PROMO]: J,
                    [s.t.SIMPLE_ALBUM_PROMO]: eo,
                    [s.t.ITEM_LIST]: aG,
                    [s.t.OVERVIEW]: sB,
                    [s.t.COLLECTION_ALBUMS]: e6,
                    [s.t.COLLECTION_CLIPS]: tz,
                    [s.t.COLLECTION_TOP_ARTISTS]: io,
                    [s.t.RECENTLY_PLAYED]: rl,
                    [s.t.IN_STYLE]: aK,
                    [s.t.SPECIAL]: ry,
                    [s.t.WIZARD]: rX,
                    [s.t.MIXES]: a8,
                    [s.t.MIXES_GRID]: ss,
                    [s.t.MIXES_MUSIC]: sn,
                    [s.t.NEUROMUSIC]: sh,
                    [s.t.CONCERT_PLACE]: iD,
                    [s.t.LIKES_AND_HISTORY]: a3,
                    [s.t.NON_MUSIC_EDITORIAL_COMPILATION]: sE,
                    [s.t.COLLECTION_ALBUMS_PRESAVES]: tn,
                    [s.t.CHART_ALBUMS]: sy,
                    [s.t.DONATIONS]: ap,
                    [s.t.CONTINUE_LISTEN]: ar,
                    [s.t.DISLIKES]: ao,
                    [s.t.COLLECTION_DOWNLOADED_TRACKS]: tG,
                    [s.t.HISTORY]: rf,
                    [s.t.SEARCH_HISTORY]: rf,
                    [s.t.ARTIST_CONCERTS]: ej,
                    [s.t.ARTIST_POPULAR_TRACKS]: eO,
                    [s.t.ARTIST_RELEASE]: eW,
                    [s.t.FAMILIAR_YOU]: aW,
                    [s.t.ARTIST_PICK]: eS,
                    [s.t.ARTIST_UPCOMING_RELEASE]: ez,
                    [s.t.COLLECTION_WAVE_AGENT]: iv,
                    [s.t.COLLECTION_WAVE_ROOMS]: iI,
                    [s.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: tD,
                    [s.t.NON_MUSIC_CATEGORY]: sE,
                    [s.t.PODCASTS_CHART_ALBUMS]: sy,
                };
        },
        25378: (e) => {
            e.exports = {
                root: 'Skeleton_root__ANDaF',
                upperBlocks: 'Skeleton_upperBlocks__zI__5',
                tab: 'Skeleton_tab__Jn6By',
                tabPanel: 'Skeleton_tabPanel__Ke42U',
                tabCarousel: 'Skeleton_tabCarousel__E2kLf',
                important: 'Skeleton_important__ob12_',
                header: 'Skeleton_header__Ir5f4',
                stickyTabs: 'Skeleton_stickyTabs__I_uuk',
            };
        },
        26279: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        26689: (e) => {
            e.exports = {
                root: 'MapBlock_root__lcL__',
                heading: 'MapBlock_heading__20gje',
                linkContainer: 'MapBlock_linkContainer__iO0dw',
                mapImage: 'MapBlock_mapImage__Qch0h',
                addressContainer: 'MapBlock_addressContainer__gFnzq',
                address: 'MapBlock_address__UofT6',
                metroStations: 'MapBlock_metroStations__T3Zpc',
            };
        },
        27151: (e) => {
            e.exports = {
                blocksContainer: 'ContinueListen_blocksContainer__tQ80F',
                container: 'ContinueListen_container__1oxhK',
                item: 'ContinueListen_item__jGg_0',
                item_lastPlayed: 'ContinueListen_item_lastPlayed__AkN1T',
                important: 'ContinueListen_important__xwCU5',
            };
        },
        27521: (e) => {
            e.exports = { root: 'CollectionVibeRooms_root__TCV_x', multivibeNDA: 'CollectionVibeRooms_multivibeNDA__JAncX' };
        },
        28301: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        29001: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => f });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i.t(l, 2),
                n = i(80451),
                c = i(21732),
                d = i(72812),
                m = {
                    4601: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0);
                        let a = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, a.useState)(e);
                            (0, a.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let s = (0, a.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                r = (0, a.useCallback)(() => {
                                    i(!0);
                                }, []),
                                l = (0, a.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: s, setState: i, toggleTrue: r, toggleFalse: l };
                        };
                    },
                    352: (e) => {
                        e.exports = d;
                    },
                    810: (e) => {
                        e.exports = o;
                    },
                },
                _ = {};
            function u(e) {
                var t = _[e];
                if (void 0 !== t) return t.exports;
                var i = (_[e] = { exports: {} });
                return m[e](i, i.exports, u), i.exports;
            }
            var v = {};
            (() => {
                Object.defineProperty(v, '__esModule', { value: !0 }), (v.useTruncate = void 0);
                let e = u(352),
                    t = u(810),
                    i = u(4601);
                v.useTruncate = (a) => {
                    let [s, r] = (0, t.useState)(0),
                        { state: l, toggleTrue: o, toggleFalse: n } = (0, i.useToggle)(!1),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    let { offsetHeight: e, scrollHeight: t } = (null == a ? void 0 : a.current) || {};
                                    e && t && s < t ? o() : n();
                                }, 100),
                            [s, a, n, o],
                        );
                    return (
                        (0, t.useEffect)(() => {
                            var e, t;
                            !s && (null == (e = a.current) ? void 0 : e.offsetHeight) && r(null == (t = a.current) ? void 0 : t.offsetHeight);
                        }, [s, a]),
                        (0, t.useEffect)(
                            () => (
                                c(),
                                window.addEventListener('resize', c),
                                () => {
                                    window.removeEventListener('resize', c);
                                }
                            ),
                            [c],
                        ),
                        { isTruncated: l }
                    );
                };
            })(),
                v.__esModule;
            var p = v.useTruncate,
                h = i(63423),
                C = i(71926),
                x = i(57594),
                b = i(16696),
                A = i.n(b),
                j = i(60900),
                N = i(84638),
                T = i(83920);
            let I = (0, r.PA)((e) => {
                    let { message: t, title: i, className: r, credits: l, messageClassName: o } = e,
                        {
                            modals: { overviewModal: d },
                            settings: { isMobile: m },
                        } = (0, x.g)(),
                        { formatMessage: _ } = (0, j.A)(),
                        { contentRef: u } = (0, T.g)();
                    return (0, a.jsxs)(N.a, {
                        title: i,
                        titleProps: { 'data-test-id': c.Kq.overview.OVERVIEW_MODAL_TITLE },
                        className: (0, s.$)(A().modal, r),
                        contentClassName: A().modalContent,
                        overlayClassName: A().modalOverlay,
                        headerClassName: (0, s.$)(A().modalHeader, { [A().modalHeader_withTitle]: i }),
                        size: 'fitContent',
                        placement: m ? 'default' : 'right',
                        open: d.isOpened,
                        onOpenChange: d.onOpenChange,
                        onClose: d.close,
                        portalNode: m ? null : u,
                        isMobile: m,
                        labelClose: _({ id: 'interface-actions.close' }),
                        containerProps: { 'data-test-id': c.Kq.overview.OVERVIEW_MODAL },
                        closeButtonProps: { 'data-test-id': c.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON },
                        children: [
                            (0, a.jsx)(C.HL, {
                                className: (0, s.$)(A().message, o),
                                size: 'l',
                                variant: 'div',
                                dangerouslySetInnerHTML: { __html: (0, n.sanitizeDOM)(t) },
                                'data-test-id': c.Kq.overview.OVERVIEW_MODAL_MESSAGE,
                            }),
                            l,
                        ],
                    });
                }),
                f = (0, r.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: i,
                            modalClassName: r,
                            creditsModal: o,
                            messageClassName: d,
                            messageModalClassName: m,
                            textButton: _,
                            withShowButton: u,
                        } = e,
                        v = (0, l.useRef)(null),
                        {
                            modals: { overviewModal: b },
                        } = (0, x.g)(),
                        { isTruncated: j } = p(v),
                        N = (j && t.isExpandable) || u;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(C.HL, {
                                ref: v,
                                className: (0, s.$)(A().message, d),
                                size: 'm',
                                variant: 'div',
                                lineClamp: t.visibleLinesCount,
                                dangerouslySetInnerHTML: { __html: (0, n.sanitizeDOM)(t.message || '') },
                                'data-test-id': c.Kq.overview.OVERVIEW_MESSAGE,
                            }),
                            N &&
                                t.message &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(h.$, {
                                            className: (0, s.$)(A().button, i),
                                            onClick: b.open,
                                            radius: 'xs',
                                            variant: 'text',
                                            color: 'secondary',
                                            withRipple: !1,
                                            'data-test-id': c.Kq.overview.OVERVIEW_FURTHER_BUTTON,
                                            children: (0, a.jsx)(C.HL, { size: 'm', variant: 'span', children: _ }),
                                        }),
                                        (0, a.jsx)(I, { message: t.message, title: t.title, className: r, credits: o, messageClassName: m }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        29038: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return (e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e;
            })({});
        },
        30310: (e) => {
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
        30436: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = () => ({ timeStyle: 'short' });
        },
        30733: (e) => {
            e.exports = {
                root: 'SearchHistory_root__0z_bV',
                fallback: 'SearchHistory_fallback____oTN',
                button: 'SearchHistory_button__LBJeT',
                content: 'SearchHistory_content__wSN8E',
            };
        },
        31209: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            var a = i(96194);
            let s = [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, a.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                r = (e) => s.includes(e.type);
        },
        31266: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            let a = (e, t) => {
                let i = new URL(window.location.href),
                    a = i.searchParams;
                return a.set(e, t), (i.search = a.toString()), i.toString();
            };
        },
        31906: (e) => {
            e.exports = { item: 'VibesCarousel_item__AupL0', important: 'VibesCarousel_important__JkzUC' };
        },
        32369: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => P });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(6752),
                n = i(54667),
                c = i(83920),
                d = i(57594),
                m = i(28563),
                _ = i(8946),
                u = i(86168),
                v = i(16172),
                p = i(52068),
                h = i(62376),
                C = i(79374),
                x = i(84782),
                b = i(37240),
                A = i(51012),
                j = i(45180),
                N = i(42701),
                T = i.n(N);
            let I = (e) => {
                let { filter: t, tabsState: i, index: r, isSticky: o, ...n } = e,
                    c = (() => {
                        let e = (0, l.useRef)(!1),
                            t = (0, p.st)(),
                            i = (0, h.U)(),
                            { hash: a } = (0, p.gf)(),
                            { pageId: s } = (0, b.$)(),
                            { mainObjectType: r, mainObjectId: o } = (0, x.N)(),
                            { skeleton: n } = (0, A.b)();
                        return (0, l.useCallback)(
                            (l) => {
                                let { tabId: c = '', tabPos: d = 1, isTabSelectedByDefault: m = !1 } = l;
                                if (!t || !s || e.current) return;
                                let _ = { hash: a, pageId: C.W[s], tabId: c, tabPos: d, isTabSelectedByDefault: m };
                                n && (_.skeletonId = n), o && r && ((_.mainObjectType = r), (_.mainObjectId = o));
                                let u = (0, v.Fx)({ params: _, logger: i, context: 'useSendEventOnTabLoaded' });
                                u && ((0, v.hc)(t.evgenInstance, u), (e.current = !0));
                            },
                            [t, s, a, n, o, r, i],
                        );
                    })();
                return (
                    (0, l.useEffect)(() => {
                        c({ tabId: t.id, tabPos: r + 1, isTabSelectedByDefault: t.id === u.Q.ALL });
                    }, [t.id, r, c]),
                    (0, a.jsx)(j.o, { tabIndex: o ? -1 : 0, className: (0, s.$)(T().root, { [T().root_selected]: r === i.value }), title: t.name, value: r, ...n }, r)
                );
            };
            var f = i(80389),
                g = i.n(f);
            let S = (0, r.PA)((e) => {
                let { className: t, isActive: i = !0, shimmerClassName: r } = e;
                return (0, a.jsx)(_.wI, {
                    className: (0, s.$)(g().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, a.jsx)(_.zr, { className: (0, s.$)(g().root, r), shimmerClassName: g().shimmer, count: 3, isActive: i }),
                });
            });
            var L = i(15523),
                k = i.n(L);
            let y = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 40, end: 40 } },
                R = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 20, end: 50 } },
                E = (0, r.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: i,
                            className: r,
                            forwardRef: n,
                            carouselClassName: u,
                            shimmerClassName: v,
                            isSticky: p,
                            items: h,
                            isShimmerVisible: C,
                            isShimmerActive: x,
                            skipSearchCheck: b = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: j },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: N, playlistStaticFiltersRef: T, contentScrollRef: f } = (0, c.g)(),
                        g = null != h ? h : A.filters.items,
                        L = (0, o.L)(() =>
                            (0, a.jsx)(_.wI, {
                                ref: n,
                                className: (0, s.$)(k().carousel, u),
                                ...t,
                                onTabChange: i,
                                children: null == g ? void 0 : g.map((e, i) => (0, a.jsx)(I, { filter: e, tabsState: t, index: i, isSticky: p }, e.id)),
                            }),
                        ),
                        E = (0, l.useCallback)(() => {
                            T && N && (T.scrollLeft = N.scrollLeft);
                        }, [T, N]),
                        P = (0, l.useCallback)(() => {
                            T && N && (N.classList.add(k().carousel_noSmooth), (N.scrollLeft = T.scrollLeft), N.classList.remove(k().carousel_noSmooth));
                        }, [T, N]),
                        [w, O] = (0, l.useState)(!1);
                    (0, l.useEffect)(() => {
                        w && P();
                    }, [w, P]);
                    let M = (0, l.useCallback)(() => {
                        O((null == N ? void 0 : N.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [N]);
                    return (
                        (0, l.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                p
                                    ? (null == N || N.addEventListener('scroll', E, t), null == N || N.addEventListener('resize', E, t))
                                    : j
                                      ? (window.addEventListener('scroll', M, t), window.addEventListener('resize', M, t))
                                      : (null == f || f.addEventListener('scroll', M, t), null == f || f.addEventListener('resize', M, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [p, f, N, M, E, j]),
                        (null != C ? C : A.filters.isShimmerVisible)
                            ? (0, a.jsx)(S, { isActive: null == x || x, shimmerClassName: v })
                            : g && 0 !== g.length && (b || A.search.isNeededToLoad)
                              ? (0, a.jsx)(m.F, { className: r, carouselElement: L, ref: n, scrollPadding: p ? R : y })
                              : void 0
                    );
                }),
                P = (0, l.forwardRef)((e, t) => (0, a.jsx)(E, { forwardRef: t, ...e }));
        },
        34775: (e) => {
            e.exports = {
                titleShimmer: 'WizardTextShimmer_titleShimmer__g__ye',
                titleTextShimmer: 'WizardTextShimmer_titleTextShimmer__ThHNk',
                textShimmer: 'WizardTextShimmer_textShimmer__QokKt',
                descriptionShimmer: 'WizardTextShimmer_descriptionShimmer__Z9daY',
            };
        },
        35629: (e) => {
            e.exports = {
                root_withControls: 'CollectionPlaylists_root_withControls__YV7o_',
                controls: 'CollectionPlaylists_controls___7XSv',
                header: 'CollectionPlaylists_header__EDtBS',
                important: 'CollectionPlaylists_important__oumcA',
                tab: 'CollectionPlaylists_tab__PppbA',
                tabShimmer: 'CollectionPlaylists_tabShimmer__U_ZFn',
                tabCarousel: 'CollectionPlaylists_tabCarousel__hWuL_',
                tabPanel: 'CollectionPlaylists_tabPanel__wSwRR',
                carouselEmpty: 'CollectionPlaylists_carouselEmpty__SVn6E',
                createPlaylistCard: 'CollectionPlaylists_createPlaylistCard__1cMca',
                item: 'CollectionPlaylists_item__YeviY',
            };
        },
        35792: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(96194);
            let s = {
                [a.t.ALBUM_PROMO]: 314,
                [a.t.ARTIST_PICK]: 102,
                [a.t.ARTIST_CONCERTS]: 232,
                [a.t.ARTIST_PLAYLISTS]: 316,
                [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: 340,
                [a.t.ARTIST_POPULAR_TRACKS]: 340,
                [a.t.ARTIST_RELEASE]: 340,
                [a.t.ARTIST_UPCOMING_RELEASE]: 340,
                [a.t.ARTIST_ALBUMS]: 316,
                [a.t.ARTIST_COMPILATIONS]: 316,
                [a.t.ARTIST_CLIPS]: 292,
                [a.t.ARTIST_STUDIO_ALBUMS]: 316,
                [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: 102,
                [a.t.SIMPLE_ALBUM_PROMO]: 140,
                [a.t.CHART_ALBUMS]: 322,
                [a.t.CHART_TRACKS]: 284,
                [a.t.COLLECTION_ALBUMS]: 320,
                [a.t.COLLECTION_ALBUMS_PRESAVES]: 378,
                [a.t.COLLECTION_ARTISTS]: 336,
                [a.t.COLLECTION_ARTISTS_AND_TOP]: 336,
                [a.t.COLLECTION_TOP_ARTISTS]: 336,
                [a.t.COLLECTION_CLIPS]: 292,
                [a.t.COLLECTION_FAVOURITE_PLAYLIST]: 370,
                [a.t.COLLECTION_PLAYLISTS_CREATED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: 378,
                [a.t.COLLECTION_PLAYLIST_WITH_LIKES]: 310,
                [a.t.COLLECTION_KIDS]: 320,
                [a.t.COLLECTION_WAVE_ROOMS]: 320,
                [a.t.CONCERTS_PERSONAL]: 442,
                [a.t.COLLECTION_DOWNLOADED_TRACKS]: 298,
                [a.t.CONCERTS_TOP]: 442,
                [a.t.EDITORIAL_ARTISTS]: 336,
                [a.t.EDITORIAL_CONCERTS]: 442,
                [a.t.VIEWED_CONCERTS]: 442,
                [a.t.EDITORIAL_COMPILATION]: 316,
                [a.t.EDITORIAL_NEW_RELEASES]: 410,
                [a.t.EDITORIAL_PROMOTIONS]: 342,
                [a.t.EDITORIAL_WAVES]: 138,
                [a.t.EDITORIAL_WAVES_AGENT]: 319,
                [a.t.META_TAG_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: 319,
                [a.t.META_TAG_SIMILAR_WAVE_AGENT]: 319,
                [a.t.IN_STYLE]: 370,
                [a.t.ITEM_LIST]: 250,
                [a.t.LIKES_AND_HISTORY]: 106,
                [a.t.META_TAG_ALBUMS]: 316,
                [a.t.META_TAG_ARTISTS]: 336,
                [a.t.META_TAG_NEW_ALBUMS]: 316,
                [a.t.META_TAG_PLAYLISTS]: 316,
                [a.t.META_TAG_POPULAR_ARTISTS]: 336,
                [a.t.META_TAG_POPULAR_PLAYLISTS]: 316,
                [a.t.META_TAG_SIMILAR_WAVE]: 138,
                [a.t.META_TAG_WAVE]: 64,
                [a.t.MICRO_GENRE_ALBUMS]: 316,
                [a.t.MICRO_GENRE_ARTISTS]: 336,
                [a.t.MICRO_GENRE_SIMILAR_WAVE]: 138,
                [a.t.MICRO_GENRE_TOP_ARTISTS]: 336,
                [a.t.MICRO_GENRE_WAVE]: 64,
                [a.t.MIXES]: 260,
                [a.t.MIXES_GRID]: 240,
                [a.t.MIXES_MUSIC]: 264,
                [a.t.NEUROMUSIC]: 138,
                [a.t.NEW_PLAYLISTS]: 316,
                [a.t.ARTIST_SIMILAR_ENTITIES]: 316,
                [a.t.COLLECTION_SIMILAR_ENTITIES]: 316,
                [a.t.NEW_RELEASES]: 410,
                [a.t.NEW_STARS_ARTISTS]: 336,
                [a.t.NON_MUSIC_EDITORIAL_COMPILATION]: 316,
                [a.t.NON_MUSIC_OPEN_PLAYLIST]: 310,
                [a.t.NON_MUSIC_PROMOTIONS]: 342,
                [a.t.OPEN_PLAYLIST]: 310,
                [a.t.OVERVIEW]: 84,
                [a.t.PERSONAL_ARTISTS]: 336,
                [a.t.PERSONAL_PLAYLISTS]: 342,
                [a.t.PROMOTIONS]: 342,
                [a.t.RECENTLY_PLAYED]: 316,
                [a.t.RECOMMENDED_PLAYLISTS]: 316,
                [a.t.REWIND_PLAYLISTS]: 342,
                [a.t.SMART_OPEN_PLAYLIST]: 310,
                [a.t.SPECIAL]: 192,
                [a.t.SIMILAR_ARTISTS]: 336,
                [a.t.TABS]: 60,
                [a.t.WAVES]: 176,
                [a.t.WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES]: 176,
                [a.t.WIZARD]: 328,
                [a.t.DONATIONS]: 216,
                [a.t.CLIPS]: 292,
                [a.t.CONTINUE_LISTEN]: 138,
                [a.t.DISLIKES]: 54,
                [a.t.HISTORY]: 402,
                [a.t.SEARCH_HISTORY]: 402,
                [a.t.FAMILIAR_YOU]: 102,
                [a.t.CONCERT_PLACE]: 324,
                [a.t.COLLECTION_WAVE_AGENT]: 186,
                [a.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: 336,
                [a.t.NON_MUSIC_CATEGORY]: 316,
                [a.t.PODCASTS_CHART_ALBUMS]: 322,
            };
        },
        35793: (e) => {
            e.exports = {
                root: 'Vibes_root__Bk6PF',
                controls: 'Vibes_controls__bUp2H',
                header: 'Vibes_header__RcW5b',
                important: 'Vibes_important__Vew_4',
                tab: 'Vibes_tab__uOfqW',
                tabShimmer: 'Vibes_tabShimmer__hjehH',
                tabCarousel: 'Vibes_tabCarousel__bSvp0',
            };
        },
        36597: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__njUFa' };
        },
        36687: (e) => {
            e.exports = { root: 'EditorialVibes_root__MPgdy', controls: 'EditorialVibes_controls__sKvZK' };
        },
        37184: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { l: () => a }),
                (function (e) {
                    (e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab');
                })(a || (a = {}));
        },
        37340: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var a = i(32290),
                s = i(63618),
                r = i(60900),
                l = i(79856),
                o = i(61420),
                n = i.n(o);
            let c = (e) => {
                let { className: t, isShimmerActive: i } = e,
                    { formatMessage: o } = (0, r.A)();
                return (0, a.jsxs)('div', {
                    'aria-label': o({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, s.$)(n().root, t),
                    children: [
                        (0, a.jsx)(l.W, { className: n().date, radius: 'm', isActive: i }),
                        (0, a.jsxs)('div', {
                            className: n().meta,
                            children: [
                                (0, a.jsx)(l.W, { className: n().title, radius: 's', isActive: i }),
                                (0, a.jsx)(l.W, { className: n().description, radius: 's', isActive: i }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { className: n().action, radius: 'l', isActive: i }),
                    ],
                });
            };
        },
        37997: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => m });
            var a = i(55178),
                s = i(16172),
                r = i(52068),
                l = i(48922),
                o = i(47745),
                n = i(2792),
                c = i(37240),
                d = i(62376);
            let m = (e) => {
                let { artistId: t, viewUuid: i } = e,
                    m = (0, r.st)(),
                    { hash: _ } = (0, r.gf)(),
                    { pageId: u } = (0, c.$)(),
                    { objectsCount: v, objectType: p, objectId: h, objectPosX: C, objectPosY: x, objectPos: b } = (0, n.J)(),
                    A = (0, o.N)(),
                    j = (0, d.U)(),
                    N = (0, a.useCallback)(
                        (e) => {
                            let i = (0, s.Fx)({
                                params: { hash: _, artistId: t, objectsCount: v, objectType: p, objectId: h, objectPosX: C, objectPosY: x, to: e },
                                logger: j,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            m && i && (0, s.U6)(m.evgenInstance, i);
                        },
                        [m, t, _, j, h, C, x, p, v],
                    ),
                    T = (0, a.useCallback)(
                        (e) => {
                            let a = (0, s.Fx)({
                                params: { hash: _, artistId: t, viewUuid: i, objectId: h, objectPos: b, to: e },
                                logger: j,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            m && a && i && (0, s.mh)(m.evgenInstance, a);
                        },
                        [m, t, _, j, h, b, i],
                    );
                return (0, a.useCallback)(
                    (e) => {
                        if (m && u && l.xK.includes(u))
                            switch (u) {
                                case l._Q.ARTIST:
                                    N(e);
                                    break;
                                case l._Q.ARTIST_CONCERTS:
                                    T(e);
                                    break;
                                case l._Q.SEARCH:
                                    A({ to: s.QT.ConcertPurchaseScreen });
                            }
                    },
                    [m, u, A, T, N],
                );
            };
        },
        38714: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        39478: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        39499: (e) => {
            e.exports = {
                root: 'Neuromusic_root__wTkG_',
                controls: 'Neuromusic_controls__8kH7t',
                item: 'Neuromusic_item__Q_JI_',
                important: 'Neuromusic_important__8Ib5E',
            };
        },
        39723: (e) => {
            e.exports = {
                artistLink: 'ArtistPick_artistLink__WYRFP',
                artistsSpoiler: 'ArtistPick_artistsSpoiler__HBKka',
                subTitle: 'ArtistPick_subTitle__5SJFj',
                text: 'ArtistPick_text__sIhNG',
                smallCoverContainer: 'ArtistPick_smallCoverContainer__iBgJu',
                cover: 'ArtistPick_cover__9utVr',
                smallCover: 'ArtistPick_smallCover__6NSnL',
                shimmerCover: 'ArtistPick_shimmerCover__HIauy',
            };
        },
        40053: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var a = i(57594),
                s = i(79406);
            let r = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: i },
                    } = (0, a.g)(),
                    r = e.checkExperiment(s.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(s.z.WebNextQueryToVibe, 'on') && (!r || !!i);
            };
        },
        40126: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => g });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(60900),
                n = i(39407),
                c = i(21732),
                d = i(6752),
                m = i(63423),
                _ = i(14934),
                u = i(82586),
                v = i(86269),
                p = i(71926),
                h = i(73654),
                C = i(41677),
                x = i(23352),
                b = i(83560),
                A = i(57594),
                j = i(11323),
                N = i(13798),
                T = i(92744),
                I = i(38714),
                f = i.n(I);
            let g = (0, r.PA)((e) => {
                let { className: t, children: i, upcomingAlbum: r, contentLinesCount: I } = e,
                    { user: g } = (0, A.g)(),
                    { ref: S, intersectionPropertyId: L } = (0, x.n)(),
                    { formatMessage: k, formatDate: y } = (0, o.A)(),
                    R = (0, h.P)(r),
                    E = r.getKey('PlayButton'),
                    P = r.getKey('LikeButton'),
                    w = (0, l.useMemo)(() => {
                        let e = k({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: r.title }),
                            t = r.isPresave ? k({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [k, r.title, r.isPresave]),
                    O = (0, d.L)(() =>
                        (0, a.jsxs)(v.t, {
                            className: f().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(j.B, { className: f().image, src: r.coverUri, size: 200, fit: 'cover', alt: w, withAvatarReplace: !0 }),
                                (0, a.jsx)(_.hg, {
                                    className: f().controls,
                                    playControl: (0, a.jsx)(
                                        m.$,
                                        {
                                            className: f().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(u.I, { variant: 'lock', size: 'xxs', className: f().lockIcon }),
                                            'aria-label': k({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        E,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        T.c,
                                        {
                                            className: (0, s.$)(f().control, f().presaveButton),
                                            isLiked: r.isPresave,
                                            onClick: R,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !g.isAuthorized,
                                        },
                                        P,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(_.MN, {
                    ref: S,
                    className: (0, s.$)(f().root, t),
                    'aria-label': w,
                    explicitMarkComponent: r.explicitDisclaimer && (0, a.jsx)(N.N, { getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer }),
                    title: (0, a.jsx)(p.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: r.title,
                    }),
                    'data-intersection-property-id': L,
                    contentLinesCount: I,
                    view: O,
                    description: (0, a.jsx)(C.i, { className: f().artists, artists: r.artists, lineClamp: 1, linkClassName: f().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(p.HL, {
                            className: f().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: y(r.releaseDate, (0, b.s)()) } }),
                        }),
                        i,
                    ],
                });
            });
        },
        40342: (e) => {
            e.exports = {
                root: 'TrackCard_root__kIpe1',
                controls: 'TrackCard_controls__E7Y3L',
                cover: 'TrackCard_cover__tkVPB',
                coverBlock: 'TrackCard_coverBlock__WdvvQ',
                coverBlock_withTrackLink: 'TrackCard_coverBlock_withTrackLink__fDe6k',
                image: 'TrackCard_image__KsOFF',
                artists: 'TrackCard_artists__wH48n',
                artistLink: 'TrackCard_artistLink__aqLl7',
                titleContainer: 'TrackCard_titleContainer__YCcZk',
                titleContainer_withVersion: 'TrackCard_titleContainer_withVersion__fTRGu',
                title: 'TrackCard_title__BVLuv',
                titleLink: 'TrackCard_titleLink__NtPhm',
                version: 'TrackCard_version__7iPuj',
                playButton: 'TrackCard_playButton__ukJDd',
                likeButton: 'TrackCard_likeButton__Hejrk',
                menuButton: 'TrackCard_menuButton__XtYLf',
                trailerButton: 'TrackCard_trailerButton__nGqhD',
                control: 'TrackCard_control___huPc',
            };
        },
        40624: (e) => {
            e.exports = { root: 'CollectionArtistsEmpty_root__i2XSM', text: 'CollectionArtistsEmpty_text__E_gjT' };
        },
        40959: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => q });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(21916),
                o = i(55178),
                n = i(21732),
                c = i(91027),
                d = i(42406),
                m = i(15299),
                _ = i(71610),
                u = i(13882),
                v = i(83920),
                p = i(57594),
                h = i(79406),
                C = i(49399),
                x = i(97201),
                b = i(31266),
                A = i(71670),
                j = i(74694),
                N = i(85377),
                T = i(45180),
                I = i(8946),
                f = i(84468),
                g = i(31209),
                S = i(50212),
                L = i(2125),
                k = i(95226),
                y = i(79114);
            let R = (0, r.PA)((e) => {
                    let { block: t, forwardRef: i, onLoad: s, ...r } = e;
                    if (
                        ((0, o.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, g.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let l = y.Y[t.type];
                    return (0, a.jsx)(l, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...r });
                }),
                E = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(k.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(L.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(R, { ...t }),
                    });
                }),
                P = (0, r.PA)((e) => ((0, g.Q)(e.block) ? (0, a.jsx)(E, { ...e }) : (0, a.jsx)(S.Z, { ...e })));
            var w = i(25378),
                O = i.n(w),
                M = i(60754),
                B = i(45477),
                D = i(75582),
                V = i(71730);
            let W = (e) => {
                    let { landing: t, tab: i } = e,
                        { notify: s, dismiss: r } = (0, D.l)(),
                        l = (0, o.useRef)(void 0),
                        n = (0, c.c)(() => {
                            i.blocks.forEach((e) => {
                                e.isRejected && (0, f.v)(e.meta) && t.getBlock(e);
                            }),
                                r({ notificationId: l.current }),
                                i.setShouldReloadNotification(!1);
                        });
                    (0, o.useEffect)(() => {
                        i.hasErrorBlocks &&
                            !i.shouldReloadNotification &&
                            setTimeout(() => {
                                (l.current = s((0, a.jsx)(V.L, { reloadBlocks: n }), { containerId: B.u.ERROR, autoClose: !1 })), i.setShouldReloadNotification(!0);
                            });
                    }, [s, n, i.hasErrorBlocks, i.shouldReloadNotification, i]),
                        (0, o.useEffect)(
                            () => () => {
                                r(), (0, M._n)(i) && i.setShouldReloadNotification(!1);
                            },
                            [r, i],
                        );
                },
                U = (0, r.PA)((e) => {
                    var t;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        l = (0, o.useMemo)(() => s.blocks.map(() => (0, o.createRef)()), [s.blocks]),
                        n = (0, d.BL)(l, { freezeOnceVisible: !0 });
                    return (
                        W({ landing: i, tab: s }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: s.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault: (null == (t = i.meta) ? void 0 : t.selectedTabIndex) === r,
                                children: (0, a.jsx)('div', {
                                    className: O().root,
                                    children: s.blocks.map((e, t) => {
                                        let { isIntersecting: s } = n[e.id] || {};
                                        return (0, a.jsx)(P, { landing: i, block: e, blockIndex: t, isIntersecting: s, forwardRef: l[t] }, e.id);
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var H = i(99424),
                z = i(54862),
                K = i(79248),
                Y = i(35792),
                F = i(36597),
                $ = i.n(F);
            let X = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: i, resizeObserver: s, isScrolling: r, style: l, ...n } = e,
                        [c, m] = (0, z.d)(),
                        [_, u] = (0, z.d)(),
                        { isIntersecting: v } =
                            null != (t = (0, d.BL)([{ current: c }], !c || (null == c ? void 0 : c.dataset.intersectionPropertyId) !== n.block.id)[n.block.id]) ? t : {};
                    return (
                        (0, o.useEffect)(
                            () => (
                                _ && s && s.observe(_),
                                () => {
                                    _ && s && s.unobserve(_);
                                }
                            ),
                            [_, s],
                        ),
                        (0, a.jsx)('div', {
                            'data-index': i.index,
                            className: $().root,
                            ref: u,
                            style: l,
                            children: (0, a.jsx)(P, { ...n, forwardRef: m, isIntersecting: v && !r }),
                        })
                    );
                }),
                G = (0, r.PA)((e) => {
                    var t, i;
                    let { landing: s, tab: r, tabIndex: n } = e,
                        d = (0, l.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, p.g)(),
                        [v, h] = (0, z.d)(),
                        C = (0, o.useRef)(!0),
                        [b, A] = (0, o.useState)(() => Array.from({ length: r.blocks.length }, (e, t) => t)),
                        j = (0, c.c)(() => {
                            let e = [];
                            r.blocks.forEach((t, i) => {
                                var a;
                                (t.isVisible || ((null == (a = t.meta) ? void 0 : a.showPolicy) === H.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(i);
                            }),
                                A(e);
                        }),
                        N = (0, c.c)((e) => {
                            let t = b[e];
                            if (void 0 === t) return 300;
                            let i = r.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? Y.X[i.type] : 0;
                        }),
                        { virtualizer: T, resizeObserver: I } = (0, K.r)({
                            count: null != (i = b.length) ? i : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: N,
                            containerRef: v,
                        });
                    (0, o.useEffect)(() => {
                        var e;
                        if (!C.current) return;
                        let t = d.get(x.K.BLOCK),
                            i = r.blocks.findIndex((e) => e.id === t);
                        if (!b.includes(i)) return;
                        let a = null == (e = T.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        T.scrollToIndex(i, { align: 'center', behavior: 'auto' }), T.scrollOffset && a && 100 > Math.abs(T.scrollOffset - a) && (C.current = !1);
                    }, [b, d, r.blocks, T]);
                    let f = T.getTotalSize(),
                        g = T.getVirtualItems();
                    return (
                        W({ landing: s, tab: r }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: r.meta.id,
                                tabPos: n + 1,
                                isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === n,
                                children: (0, a.jsx)('div', {
                                    className: O().root,
                                    style: { height: ''.concat(f, 'px') },
                                    ref: h,
                                    children: g.map((e) => {
                                        let t = b[e.index],
                                            i = r.blocks[Number(t)];
                                        return i
                                            ? (0, a.jsx)(
                                                  X,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: I,
                                                      landing: s,
                                                      block: i,
                                                      blockIndex: Number(t),
                                                      isScrolling: T.isScrolling,
                                                      onLoad: j,
                                                      style: { transform: 'translate3d(0, '.concat(e.start - T.options.scrollMargin, 'px, 0)') },
                                                  },
                                                  e.key,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        })
                    );
                }),
                Q = (0, r.PA)((e) => {
                    var t, i, r;
                    let {
                            landing: l,
                            upperBlocks: d,
                            headerConcealerComponent: _,
                            tabsState: u,
                            containerClassName: x,
                            containerStyle: b,
                            headerClassName: A,
                            tabWithHeadingTitle: f,
                            tabWithCovers: g,
                            tabWithSubtitle: S,
                            stickyHeaderClassName: L,
                            staticHeaderClassName: k,
                            stickyHeaderTabIndex: y,
                            headerVariant: R = j.V.COMPOSITE,
                        } = e,
                        { tabs: E } = l,
                        P = (0, o.useId)(),
                        { isScrolling: w } = (0, o.useContext)(N.B),
                        { contentScrollRef: M } = (0, v.g)(),
                        {
                            experiments: B,
                            settings: { isMobile: D },
                        } = (0, p.g)(),
                        V = B.checkExperiment(h.z.WebNextVirtualSkeleton, 'on') ? G : U,
                        W = (0, c.c)((e) => {
                            var t;
                            D ? window.scrollTo(0, 0) : M && (M.scrollTop = 0), null == (t = u.onTabChange) || t.call(u, e);
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            d,
                            _,
                            (0, a.jsx)(j.Y, {
                                className: (0, s.$)(O().header, A),
                                variant: R,
                                stickyClassName: L,
                                staticClassName: k,
                                stickyChild: (0, a.jsx)(I.wI, {
                                    isShimmerVisible: E.isLoading || l.isLoading,
                                    className: O().stickyTabs,
                                    shimmer: (0, a.jsx)(I.zr, {}),
                                    elementId: P,
                                    'data-test-id': n.e8.landing.MAIN_TABS,
                                    value: u.value,
                                    onTabChange: W,
                                    children:
                                        null == (t = E.data)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  let { meta: i } = e;
                                                  return (0, a.jsx)(
                                                      T.o,
                                                      {
                                                          className: O().tab,
                                                          value: t,
                                                          'aria-label': i.title,
                                                          title: i.title,
                                                          'aria-hidden': !w && R !== j.V.STICKY,
                                                          tabIndex: null != y ? y : w ? 0 : -1,
                                                      },
                                                      i.id,
                                                  );
                                              }),
                                }),
                                children: (0, a.jsx)(I.wI, {
                                    className: (0, s.$)(O().tabCarousel, O().important),
                                    elementId: P,
                                    'data-test-id': n.e8.landing.MAIN_TABS,
                                    ...u,
                                    children:
                                        null == (i = E.data)
                                            ? void 0
                                            : i.map((e, t) => {
                                                  let { meta: i, data: s } = e;
                                                  return (0, a.jsx)(
                                                      T.o,
                                                      {
                                                          className: O().tab,
                                                          value: t,
                                                          'aria-label': i.title,
                                                          title: i.title,
                                                          subtitle: null == s ? void 0 : s.subtitle,
                                                          covers: null == s ? void 0 : s.covers,
                                                          'aria-hidden': w,
                                                          tabIndex: w ? -1 : 0,
                                                          withCovers: g,
                                                          withSubtitle: S,
                                                          withHeading: f,
                                                          isShimmerVisible: E.loadingState === C.G.PENDING,
                                                      },
                                                      i.id,
                                                  );
                                              }),
                                }),
                            }),
                            (0, a.jsx)('div', {
                                className: x,
                                style: b,
                                children:
                                    null == (r = E.data)
                                        ? void 0
                                        : r.map((e, t) =>
                                              (0, a.jsx)(
                                                  m.Kp,
                                                  {
                                                      className: O().tabPanel,
                                                      name: t,
                                                      value: u.value,
                                                      elementId: P,
                                                      children: (0, a.jsx)(V, { landing: l, tab: e, tabIndex: t }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                q = (0, r.PA)((e) => {
                    var t, i, s, r;
                    let {
                            landing: n,
                            headerConcealerComponent: c,
                            errorComponent: v,
                            containerClassName: C,
                            headerClassName: j,
                            containerStyle: N,
                            tabWithHeadingTitle: T,
                            tabWithCovers: I,
                            tabWithSubtitle: g,
                            staticHeaderClassName: S,
                            stickyHeaderClassName: L,
                            stickyHeaderTabIndex: k,
                            headerVariant: y,
                        } = e,
                        R = (0, l.useSearchParams)(),
                        E = (0, A.X)(),
                        w = ((e) =>
                            (0, o.useCallback)(
                                (t) => {
                                    var i;
                                    let a = null == (i = e.tabs.data) ? void 0 : i[t];
                                    null == a ||
                                        a.blocks.forEach((t) => {
                                            t.isOutdated && (0, f.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(n),
                        { experiments: M } = (0, p.g)(),
                        B = M.checkExperiment(h.z.WebNextVirtualSkeleton, 'on') ? G : U,
                        D = (0, o.useMemo)(() => {
                            var e;
                            if (!n.isLoaded) return null;
                            let t = R.get(x.K.TAB),
                                i = null == (e = n.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof i && i >= 0 ? i : null;
                        }, [n.isLoaded, n.tabs.data, R]),
                        V = (0, m.zb)(null != (r = null != D ? D : null == (t = n.meta) ? void 0 : t.selectedTabIndex) ? r : 0),
                        W = (0, o.useCallback)(
                            (e) => {
                                var t, i, a;
                                let s = null == (i = n.tabs.data) || null == (t = i[e]) ? void 0 : t.meta.id;
                                if ((e !== V.value && w(V.value), null == (a = V.onTabChange) || a.call(V, e), s)) {
                                    let e = (0, b.b)(x.K.TAB, s);
                                    e && E(e);
                                }
                            },
                            [E, n.tabs.data, w, V],
                        ),
                        H = !!(n.tabs.data && n.tabs.data.length > 1),
                        z = null == (i = n.tabs.data) ? void 0 : i[0],
                        K = (0, o.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = n.upperBlocks) ? void 0 : e.map(() => (0, o.createRef)())) ? t : [];
                        }, [n.upperBlocks]),
                        Y = (0, d.BL)(K, { freezeOnceVisible: !0 }),
                        F = (0, o.useMemo)(() => {
                            var e;
                            if (null == (e = n.upperBlocks) ? void 0 : e.length)
                                return (0, a.jsx)(u.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, a.jsx)('div', {
                                        className: O().upperBlocks,
                                        children: n.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = Y[e.id] || {};
                                            return (0, a.jsx)(P, { landing: n, block: e, blockIndex: t, isIntersecting: i, forwardRef: K[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (s = n.upperBlocks) ? void 0 : s.length, n, Y, K]);
                    return H
                        ? (0, a.jsx)(Q, {
                              landing: n,
                              upperBlocks: F,
                              headerConcealerComponent: c,
                              tabsState: { value: V.value, onTabChange: W },
                              containerClassName: C,
                              containerStyle: N,
                              headerClassName: j,
                              tabWithHeadingTitle: T,
                              tabWithCovers: I,
                              tabWithSubtitle: g,
                              staticHeaderClassName: S,
                              stickyHeaderClassName: L,
                              stickyHeaderTabIndex: k,
                              headerVariant: y,
                          })
                        : z
                          ? (0, a.jsxs)('div', { className: C, style: N, children: [F, c, (0, a.jsx)(B, { landing: n, tab: z, tabIndex: 0 })] })
                          : F
                            ? (0, a.jsx)(_.j, { children: (0, a.jsxs)('div', { className: C, style: N, children: [F, c] }) })
                            : n.isLoadedAndEmpty
                              ? (0, a.jsx)('div', { className: C, style: N, children: v })
                              : null;
                });
        },
        41009: (e) => {
            e.exports = {
                root: 'CollectionVibeAgent_root__Ckkcd',
                container: 'CollectionVibeAgent_container__Vnapv',
                text: 'CollectionVibeAgent_text__WYNR_',
                playButton: 'CollectionVibeAgent_playButton__YANpE',
                coverShimmer: 'CollectionVibeAgent_coverShimmer__q32bW',
                shimmerContainer: 'CollectionVibeAgent_shimmerContainer__4wBoC',
                item: 'CollectionVibeAgent_item__X8a1I',
                important: 'CollectionVibeAgent_important__FEcUJ',
            };
        },
        41640: (e) => {
            e.exports = {
                root: 'BaseAlbumPromo_root__wgbC3',
                controls: 'BaseAlbumPromo_controls__NiVRJ',
                item: 'BaseAlbumPromo_item__coi3X',
                important: 'BaseAlbumPromo_important__OiNRT',
            };
        },
        41947: (e) => {
            e.exports = {
                root: 'HorizontalClipCard_root__B_6yA',
                cover: 'HorizontalClipCard_cover__vpEvl',
                unavailable: 'HorizontalClipCard_unavailable__SILaB',
                duration: 'HorizontalClipCard_duration__r1UFp',
            };
        },
        42106: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => o });
            var a = i(32290),
                s = i(63618),
                r = i(39478),
                l = i.n(r);
            let o = (e) => {
                let { align: t, children: i, overlay: r, isDisabled: o = !1, className: n, surfaceClassName: c, overlayClassName: d } = e,
                    m = 'back' === t;
                return (0, a.jsxs)('span', {
                    className: (0, s.$)(l().root, m ? l().root_back : l().root_front, n),
                    children: [
                        (0, a.jsxs)('span', {
                            className: (0, s.$)(l().circle, { [l().circle_back]: m, [l().circle_disabled]: o }),
                            children: [(0, a.jsx)('span', { className: (0, s.$)(l().surface, c), children: i }), d && (0, a.jsx)('span', { className: d })],
                        }),
                        r,
                    ],
                });
            };
        },
        42701: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        44277: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => N });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(21916),
                o = i(55178),
                n = i(60900),
                c = i(39407),
                d = i(21732),
                m = i(2047),
                _ = i(63423),
                u = i(82586),
                v = i(71926),
                p = i(45477),
                h = i(75582),
                C = i(57594),
                x = i(36477),
                b = i(90357),
                A = i(20567),
                j = i.n(A);
            let N = (0, r.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: i } = (0, n.A)(),
                    { createPlaylist: r } = (0, C.g)(),
                    { notify: A } = (0, h.l)(),
                    N = (0, l.useRouter)(),
                    T = (0, o.useRef)(!1),
                    I = (0, o.useCallback)(async () => {
                        if (T.current) return;
                        T.current = !0;
                        let e = await r.create({ title: i({ id: 'entity-names.new-playlist' }), visibility: m.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, x.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            N.push(t);
                        } else A((0, a.jsx)(b.h, { error: i({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: p.u.ERROR }), (T.current = !1);
                    }, [r, i, N, A]);
                return (
                    (0, o.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r],
                    ),
                    (0, a.jsxs)('div', {
                        className: (0, s.$)(j().root, t),
                        'data-test-id': d.OA.playlist.CREATE_PLAYLIST_CARD,
                        children: [
                            (0, a.jsx)(_.$, {
                                className: j().button,
                                icon: (0, a.jsx)(u.I, { className: j().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': i({ id: 'playlist-actions.create-playlist' }),
                                onClick: I,
                                flexIcon: !0,
                                isBlock: !0,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_BUTTON,
                            }),
                            (0, a.jsx)(v.HL, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: j().text,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_TITLE,
                                children: (0, a.jsx)(c.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        44337: (e) => {
            e.exports = {
                root_withNewConcertCards: 'Concerts_root_withNewConcertCards__42M3w',
                item: 'Concerts_item__jetvg',
                important: 'Concerts_important__rvXs6',
                root: 'Concerts_root__12jay',
                controls: 'Concerts_controls__n4qr8',
                shimmer: 'Concerts_shimmer__ujsLv',
            };
        },
        45447: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(72676);
            let s = (e, t) => ({ type: a.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        46997: (e) => {
            e.exports = { item: 'MixesMusic_item__9QVmW', shimmer: 'MixesMusic_shimmer__rJ3xa' };
        },
        47509: (e) => {
            e.exports = {
                root: 'Wizard_root__aW2c2',
                title: 'Wizard_title__L8ktt',
                description: 'Wizard_description__RFf2U',
                button: 'Wizard_button__lr8pa',
                buttonIcon: 'Wizard_buttonIcon__eOX3P',
                imagesWrapper: 'Wizard_imagesWrapper__tyqWr',
                images: 'Wizard_images__5rxec',
                paper: 'Wizard_paper__ijUgq',
                image: 'Wizard_image__k9AXl',
            };
        },
        48293: (e) => {
            e.exports = {
                root: 'NewReleases_root__4ONiw',
                controls: 'NewReleases_controls__zlJZF',
                shimmerImage: 'NewReleases_shimmerImage__8IEd_',
                shimmerCard: 'NewReleases_shimmerCard__S1gfL',
                item: 'NewReleases_item__Gv0iR',
                important: 'NewReleases_important__qkt9x',
            };
        },
        48318: (e) => {
            e.exports = {
                content: 'ContinueListenBaseItem_content__Rdrbh',
                root: 'ContinueListenBaseItem_root__FH7Jk',
                root_bookshelf: 'ContinueListenBaseItem_root_bookshelf__cKQqb',
                root_newEpisodes: 'ContinueListenBaseItem_root_newEpisodes__OTZgU',
                root_withLastPlayed: 'ContinueListenBaseItem_root_withLastPlayed__1Z2P5',
                title: 'ContinueListenBaseItem_title__vvDta',
                root_withCovers: 'ContinueListenBaseItem_root_withCovers__Y4w7V',
                link: 'ContinueListenBaseItem_link__3xuh7',
                textContainer: 'ContinueListenBaseItem_textContainer__1nvoM',
                titleIcon: 'ContinueListenBaseItem_titleIcon__4lGcT',
                subtitle: 'ContinueListenBaseItem_subtitle__jFLLT',
                covers: 'ContinueListenBaseItem_covers__bCLfi',
                coverContainer: 'ContinueListenBaseItem_coverContainer__qdnAa',
                cover: 'ContinueListenBaseItem_cover__gSp5J',
            };
        },
        50212: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => b });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(6752),
                n = i(2125),
                c = i(95481),
                d = i(95226),
                m = i(57594),
                _ = i(79406),
                u = i(31209),
                v = i(84468),
                p = i(7246),
                h = i.n(p),
                C = i(22773);
            let x = (0, r.PA)((e) => {
                    let { landing: t, block: i, isIntersecting: r, forwardRef: n, onLoad: d, className: p, containerClassName: x, ...b } = e,
                        {
                            isNeededToLoad: A,
                            isLoading: j,
                            isLoaded: N,
                            isRejected: T,
                            isShimmerVisible: I,
                            isShimmerActive: f,
                            isVisible: g,
                            id: S,
                            type: L,
                            meta: k,
                            data: y,
                            hasSentAnalyticsOnLoaded: R,
                            setHasSentAnalyticsOnLoaded: E,
                            setOutdated: P,
                            setIsNeededToLoad: w,
                        } = i;
                    if ((0, u.Q)(i)) return null;
                    let O = C.D[i.type],
                        M = (0, c.f)(),
                        { settings: B, experiments: D } = (0, m.g)(),
                        V = !D.checkExperiment(_.z.WebNextVirtualSkeleton, 'on') && B.browserInfo && !B.browserInfo.isSafari;
                    (0, l.useEffect)(() => {
                        (r || !g) && A && (0, v.v)(k) && t.getBlock(i);
                    }, [i, r, A, g, t, k]),
                        (0, l.useEffect)(() => {
                            (N || T) && (null == d || d());
                        }, [N, T, d]),
                        (0, l.useEffect)(() => {
                            !R && N && (M(), E(!0));
                        }, [R, N, M, E]);
                    let W = (0, o.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(n)) {
                            var e;
                            return null == (e = n.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return g
                        ? (0, a.jsx)(
                              O,
                              {
                                  setIsNeededToLoad: w,
                                  setOutdated: P,
                                  isLoaded: N,
                                  isLoading: j,
                                  isShimmerVisible: I,
                                  isShimmerActive: f,
                                  isRejected: T,
                                  tracksContainerClassName: h().tracksContainer,
                                  containerClassName: (0, s.$)(h().container, h().important, x),
                                  className: (0, s.$)({ [h().container_withContentVisibility]: V && W }, p),
                                  headerClassName: h().headerContainer,
                                  meta: k,
                                  data: y,
                                  type: L,
                                  ref: n,
                                  headingVariant: 'h2',
                                  'data-intersection-property-id': i.id,
                                  'data-test-id': i.type,
                                  ...b,
                              },
                              S,
                          )
                        : null;
                }),
                b = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(d.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(n.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(x, { ...t }),
                    });
                });
        },
        50308: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(32290),
                s = i(89020);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: l,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': m,
                    withSubcover: _,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: l, withInfo: o, withSubcover: _, 'aria-label': m, shimmerClassName: c },
                        e,
                    ),
                );
            };
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
        51740: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        52022: (e) => {
            e.exports = {
                root: 'AlbumPromoCard_root__dAUet',
                artistImage: 'AlbumPromoCard_artistImage__fWVxn',
                artistImage_withTopPosition: 'AlbumPromoCard_artistImage_withTopPosition__tRrcO',
                artistCover: 'AlbumPromoCard_artistCover__Gfhab',
                albumCover: 'AlbumPromoCard_albumCover__QYYKH',
                button: 'AlbumPromoCard_button__mpQr6',
                buttonIcon: 'AlbumPromoCard_buttonIcon__WredC',
                buttonText: 'AlbumPromoCard_buttonText__pI3Ot',
                albumImage: 'AlbumPromoCard_albumImage__v8021',
                albumLink: 'AlbumPromoCard_albumLink__dnGvR',
                artistLink: 'AlbumPromoCard_artistLink__AD9__',
                title: 'AlbumPromoCard_title__uzmho',
                titleLink: 'AlbumPromoCard_titleLink__4DLNk',
                titleContainer: 'AlbumPromoCard_titleContainer__f1k8Y',
                artists: 'AlbumPromoCard_artists__UYpyB',
                artistsLink: 'AlbumPromoCard_artistsLink__8gTlH',
            };
        },
        52575: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        53109: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => P });
            var a = i(32290),
                s = i(96103),
                r = i(39407),
                l = i(16172),
                o = i(21732),
                n = i(91027),
                c = i(6752),
                d = i(44989),
                m = i(63423),
                _ = i(74196),
                u = i(71926),
                v = i(47745),
                p = i(23352),
                h = i(84062),
                C = i(57594),
                x = i(79406),
                b = i(86562),
                A = i(36477),
                j = i(19522),
                N = i(12578),
                T = i(98066);
            let I = ' • ',
                f = (e, t) => {
                    let i = [];
                    return e.city && i.push(e.city), e.place && i.push(e.place), i.join(t);
                };
            var g = i(10570),
                S = i.n(g);
            let L = (0, s.PA)((e) => {
                let { concert: t, cashback: i } = e;
                return (0, a.jsxs)('div', {
                    className: S().meta,
                    children: [
                        (0, a.jsx)(u.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: S().title,
                            'data-test-id': o.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, a.jsxs)(u.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: S().info,
                            children: [
                                (0, a.jsx)(u.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: S().location,
                                    'aria-label': f(t, ' '),
                                    'data-test-id': o.OA.concert.CONCERT_CARD_LOCATION,
                                    children: f(t, I),
                                }),
                                (0, a.jsx)(u.HL, { 'aria-hidden': !0, className: S().separator, variant: 'span', type: 'controls', weight: 'medium', children: I }),
                                (0, a.jsx)(u.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: S().rating,
                                    'data-test-id': o.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        i,
                    ],
                });
            });
            var k = i(61744),
                y = i(81697),
                R = i(96871),
                E = i.n(R);
            let P = (0, s.PA)((e) => {
                var t, i, s;
                let { concert: I, withMask: f = !0, withPriceButton: g, withInlineMeta: S = !1 } = e,
                    { state: R, toggleTrue: P, toggleFalse: w } = (0, d.e)(!1),
                    { ref: O, intersectionPropertyId: M } = (0, p.n)(),
                    { experiments: B } = (0, C.g)(),
                    D = B.checkExperiment(x.z.WebNextConcertPage, 'on'),
                    V = (0, v.N)(),
                    W = (0, j.Y)(),
                    { href: U } = (0, A.u)('/concert/:concertId', { params: { concertId: I.id } }),
                    H = (0, h.Z)(U),
                    z = W(I),
                    K = (0, n.c)((e) => {
                        V({ to: l.QT.ConcertPurchaseScreen }), P(), null == e || e.stopPropagation();
                    }),
                    Y = (0, n.c)((e) => {
                        if (!D) return void K(e);
                        V({ to: l.QT.ConcertScreen }), H(e);
                    }),
                    F = (0, n.c)((e) => {
                        (e.code === b.v.SPACE || e.code === b.v.ENTER) && (e.preventDefault(), Y());
                    }),
                    $ = (0, n.c)((e) => {
                        D && (K(e), e.preventDefault());
                    }),
                    X = (0, c.L)(() => {
                        let e = I.isIdentityExperimentEnabled && I.cashbackValuePercent,
                            t = !I.isIdentityExperimentEnabled && I.isCashbackExperimentEnabled && I.cashbackTitle;
                        if (e || t)
                            return (0, a.jsx)(T.m, {
                                className: E().cashback,
                                titleClassName: E().cashbackTitle,
                                title: I.cashbackTitle,
                                valuePercent: I.cashbackValuePercent,
                            });
                    }),
                    G = (0, a.jsx)(k.M, { concert: I, withCashback: !1, withInlineMeta: S, titleSize: 'l' }),
                    Q = (0, a.jsx)(L, { concert: I, cashback: X });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: E().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: Y,
                            onKeyDown: F,
                            ref: O,
                            'data-intersection-property-id': M,
                            'data-test-id': o.OA.concert.CONCERT_CARD,
                            children: [
                                (0, a.jsx)(_.q, { children: (0, a.jsx)(u.HL, { variant: 'div', children: (0, a.jsx)(r.A, { id: 'entity-names.concert' }) }) }),
                                (0, a.jsx)('div', {
                                    className: E().cover,
                                    children: (0, a.jsx)(y.W, {
                                        datetime: I.datetime,
                                        coverColor: null == (t = I.cover) ? void 0 : t.color,
                                        uri: null == (i = I.cover) ? void 0 : i.uri,
                                        withMask: f,
                                        cashbackPercent: I.isIdentityExperimentEnabled ? I.cashbackValuePercent : void 0,
                                    }),
                                }),
                                I.isIdentityExperimentEnabled ? G : Q,
                                !!(null == (s = I.price) ? void 0 : s.value) && (0, a.jsx)(_.q, { children: (0, a.jsx)(u.HL, { variant: 'div', children: z }) }),
                                g &&
                                    (0, a.jsx)(m.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: E().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: $,
                                        'data-test-id': o.OA.concert.CONCERT_CARD_BUTTON,
                                        children: z,
                                    }),
                            ],
                        }),
                        (0, a.jsx)(N.h, { dataSessionId: I.dataSessionId, isOpened: R, onOpen: P, onClose: w }),
                    ],
                });
            });
        },
        53226: (e) => {
            e.exports = { root: 'CollectionAlbumsEmpty_root__xtfuI', text: 'CollectionAlbumsEmpty_text__fRpx_' };
        },
        53535: (e) => {
            e.exports = {
                root: 'VibesAgent_root__vZxtE',
                controls: 'VibesAgent_controls__6jNJF',
                header: 'VibesAgent_header__PrZP3',
                important: 'VibesAgent_important__5yfOt',
                tab: 'VibesAgent_tab__Wwcd_',
                tabShimmer: 'VibesAgent_tabShimmer__TnlQU',
                tabCarousel: 'VibesAgent_tabCarousel__q__hc',
                item: 'VibesAgent_item__UBIWG',
            };
        },
        53937: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            let a = (e) => {
                let { index: t, count: i, itemsCountPerColumn: a = 4, showedItemsCountInBlock: s = 8 } = e;
                return { objectPosX: Math.floor(t / a) + 1, objectPosY: (t % a) + 1, objectsCount: i > s ? s : i };
            };
        },
        54267: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        54997: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPresavesEmpty_root__3w6b7',
                root_oneEmptyTab: 'CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3',
                root_twoEmptyTabs: 'CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l',
            };
        },
        55885: (e) => {
            e.exports = {
                shimmerWithSubcover: 'MixesGridBlock_shimmerWithSubcover__3EtzK',
                header: 'MixesGridBlock_header__wz5KI',
                mixesGrid: 'MixesGridBlock_mixesGrid__LSeyw',
                item: 'MixesGridBlock_item__TVzNE',
                important: 'MixesGridBlock_important__DQE7T',
            };
        },
        56958: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => l });
            var a = i(55178),
                s = i(71483),
                r = i(46673);
            let l = (e) => {
                let { playlistId: t, filter: i } = e;
                return (0, a.useMemo)(() => (t ? (0, r.t)({ contextType: s.K.Playlist, contextId: t, filter: i }) : null), [t, i]);
            };
        },
        57762: (e) => {
            e.exports = {
                root: 'PromotionShimmer_root__Nb8vU',
                cover: 'PromotionShimmer_cover__WYwD7',
                meta: 'PromotionShimmer_meta__9eRwi',
                heading: 'PromotionShimmer_heading__38lLU',
                title: 'PromotionShimmer_title__TLj1g',
                subtitle: 'PromotionShimmer_subtitle__LS5v_',
            };
        },
        58910: (e) => {
            e.exports = {
                root: 'ArtistActionItems_root__r3J3K',
                item: 'ArtistActionItems_item__8DYtg',
                ripple: 'ArtistActionItems_ripple__3t0gz',
                menuItem: 'ArtistActionItems_menuItem__qWymt',
                cover: 'ArtistActionItems_cover__4E3qx',
                text: 'ArtistActionItems_text__RcAY_',
            };
        },
        59245: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        59800: (e) => {
            e.exports = {
                root: 'ContinueListenTrack_root__JFzVe',
                cover: 'ContinueListenTrack_cover__E5zob',
                important: 'ContinueListenTrack_important__4_84V',
                metaTrack: 'ContinueListenTrack_metaTrack__hSIYC',
                content: 'ContinueListenTrack_content__xU2R9',
                textContainer: 'ContinueListenTrack_textContainer__zisLi',
                titleIcon: 'ContinueListenTrack_titleIcon__smcf_',
                title: 'ContinueListenTrack_title__LBdpD',
                explicitMark: 'ContinueListenTrack_explicitMark___eXOa',
                metaContainer: 'ContinueListenTrack_metaContainer__Yoo2N',
                playButton: 'ContinueListenTrack_playButton__5tT4s',
                progress: 'ContinueListenTrack_progress__CfJQP',
                fullCircle: 'ContinueListenTrack_fullCircle__xrROh',
                progressCircle: 'ContinueListenTrack_progressCircle__msDye',
            };
        },
        59888: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => l });
            var a = i(32290),
                s = i(55178),
                r = i(21183);
            let l = (e) => {
                let { sourceContextData: t, children: i } = e,
                    l = (0, s.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, a.jsx)(r.l.Provider, { value: l, children: i });
            };
        },
        61113: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => H });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(60900),
                n = i(71483),
                c = i(91027),
                d = i(6752),
                m = i(14934),
                _ = i(86269),
                u = i(71926),
                v = i(34883),
                p = i(41677),
                h = i(17705),
                C = i(71735),
                x = i(2969),
                b = i(72396),
                A = i(5537),
                j = i(84062),
                N = i(28999),
                T = i(90169),
                I = i(57594),
                f = i(11323),
                g = i(13798),
                S = i(61258),
                L = i(54171),
                k = i(40342),
                y = i.n(k),
                R = i(39407),
                E = i(16172),
                P = i(21732),
                w = i(82586),
                O = i(54391),
                M = i(92744),
                B = i(90326),
                D = i(29268),
                V = i(34925),
                W = i(39400);
            let U = (0, r.PA)((e) => {
                    let { track: t, handleLikeButtonClick: i, handlePlayButtonClick: r, isPlaying: o } = e,
                        { trailer: n, user: _ } = (0, I.g)(),
                        [u, v] = (0, l.useState)(!1),
                        [p, h] = (0, l.useState)(!1),
                        x = (0, C.P)(),
                        b = (0, O.F)(),
                        A = (0, c.c)(() => {
                            v(!u), h(!u);
                        }),
                        j = (0, c.c)((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }),
                        N = (0, c.c)((e) => {
                            if ((e.stopPropagation(), x())) return void e.preventDefault();
                            n.openTrackTrailer(t.id), b(E.ky.Track, t.id);
                        }),
                        T = (0, d.L)(() => {
                            var e;
                            if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                                return (0, a.jsx)(
                                    V.n,
                                    {
                                        children: (0, a.jsx)(D.k, {
                                            className: (0, s.$)(y().trailerButton, y().control),
                                            radius: 'round',
                                            size: 's',
                                            iconSize: 'xxs',
                                            onClick: N,
                                        }),
                                    },
                                    t.getKey('TrackCardTrailerTooltip'),
                                );
                        });
                    return (0, a.jsx)(m.hg, {
                        isVisible: u || p,
                        className: y().controls,
                        labelText: (0, a.jsx)(R.A, { id: 'entity-names.track' }),
                        playControl: (0, a.jsx)(
                            B.D,
                            {
                                className: (0, s.$)(y().playButton, y().control),
                                buttonVariant: 'default',
                                withHover: !1,
                                iconSize: 'xl',
                                variant: 'filled',
                                isPlaying: o,
                                onClick: r,
                            },
                            t.getKey('PlayButton'),
                        ),
                        likeControl: (0, a.jsx)(
                            M.c,
                            {
                                className: (0, s.$)(y().likeButton, y().control),
                                isLiked: t.isLiked,
                                onClick: i,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: !_.isAuthorized,
                            },
                            t.getKey('LikeButton'),
                        ),
                        menuControl: (0, a.jsx)(
                            W._,
                            {
                                placement: 'bottom',
                                track: t,
                                onOpenChange: A,
                                open: u,
                                onClick: j,
                                className: (0, s.$)(y().menuButton, y().control),
                                icon: (0, a.jsx)(w.I, { size: 'xxs', variant: 'more' }),
                                size: 's',
                                'data-test-id': P.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                            },
                            t.getKey('TrackContextMenu'),
                        ),
                        trailerControl: T,
                    });
                }),
                H = (0, r.PA)((e) => {
                    var t, i;
                    let { className: r, children: k, track: R, contentLinesCount: E, overrideContextType: P } = e,
                        { from: w } = (0, b.f)(),
                        {
                            track: O,
                            paywall: { modal: M },
                        } = (0, I.g)(),
                        { formatMessage: B } = (0, o.A)(),
                        [D, V] = (0, l.useState)(!1),
                        [W, H] = (0, l.useState)(!1),
                        { sendLikeSearchFeedback: z, sendPlaySearchFeedback: K, sendNavigateSearchFeedback: Y } = (0, N.z)(),
                        F = (0, h.K)(R),
                        $ = (0, j.Z)(null != (i = null == (t = R.mainAlbum) ? void 0 : t.url) ? i : ''),
                        X = (0, j.Z)(R.url),
                        G = (0, x.b)(),
                        Q = (0, C.P)(),
                        q = (0, d.L)(() => {
                            var e;
                            let t = B({ id: 'entity-names.track-name' }, { trackName: R.title }),
                                i = R.isLiked ? B({ id: 'entity-names.has-your-like' }) : '';
                            return ''
                                .concat(t, ' ')
                                .concat(null != (e = R.version) ? e : '', ' ')
                                .concat(i);
                        }),
                        { isPlaying: Z, togglePlay: J } = (0, T.D)({
                            playContextParams: {
                                contextData: { type: n.K.Various, meta: { id: R.entityId }, from: w, overrideContextType: P },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: R.entityId,
                        }),
                        ee = (0, c.c)(() => {
                            O.open({ trackId: R.id, albumId: R.albumId });
                        }),
                        et = (0, c.c)(() => {
                            D || Z || (V(!0), null == K || K()), J();
                        }),
                        ei = (0, v.c)({ album: R.mainAlbum, callback: $ }),
                        ea = (0, L.w)({ track: R, callback: X }),
                        es = (0, L.w)({ track: R, callback: ee }),
                        er = (0, L.w)({ track: R, callback: et }),
                        el = (0, A.N)(),
                        eo = (0, c.c)(() => {
                            if (!Q()) {
                                if (el) return void M.open();
                                er(), G(!Z);
                            }
                        }),
                        en = (0, c.c)(() => {
                            R.hasTrackLink && es();
                        }),
                        ec = (0, c.c)(() => {
                            W || R.isLiked || (H(!0), null == z || z()), F();
                        }),
                        ed = (0, c.c)((e) => {
                            var t;
                            if (R.hasTrackLink) {
                                null == Y || Y(), ea(e);
                                return;
                            }
                            R.hasAlbumLink && (null == (t = R.mainAlbum) ? void 0 : t.url) && ei(e);
                        }),
                        em = (0, d.L)(() => {
                            var e, t, i;
                            return R.hasTrackLink
                                ? (0, a.jsx)(S.N, {
                                      'aria-label': ''.concat(R.title, ' ').concat(null != (t = R.version) ? t : ''),
                                      className: y().titleLink,
                                      href: R.url,
                                      onClick: ed,
                                      children: R.title,
                                  })
                                : R.hasAlbumLink && (null == (e = R.mainAlbum) ? void 0 : e.url)
                                  ? (0, a.jsx)(S.N, {
                                        'aria-label': ''.concat(R.title, ' ').concat(null != (i = R.version) ? i : ''),
                                        className: y().titleLink,
                                        href: R.mainAlbum.url,
                                        onClick: ed,
                                        children: R.title,
                                    })
                                  : (0, a.jsx)(u.HL, { className: y().title, variant: 'span', children: R.title });
                        }),
                        e_ = (0, d.L)(() => {
                            var e, t;
                            return R.hasAlbumLink && (null == (e = R.mainAlbum) ? void 0 : e.url)
                                ? (0, a.jsx)(S.N, { href: R.mainAlbum.url, onClick: ed, children: ''.concat(R.title, ' ').concat(null != (t = R.version) ? t : '') })
                                : null;
                        }),
                        eu = (0, d.L)(() => {
                            if (R.isAvailable) return (0, a.jsx)(U, { track: R, isPlaying: Z, handleLikeButtonClick: ec, handlePlayButtonClick: eo });
                        });
                    return (0, a.jsx)(m.MN, {
                        className: (0, s.$)(y().root, r),
                        'aria-label': q,
                        explicitMarkComponent: R.explicitDisclaimer && (0, a.jsx)(g.N, { getDescriptionTexts: R.getDescriptionTexts, variant: R.explicitDisclaimer }),
                        title: (0, a.jsxs)(u.HL, {
                            className: (0, s.$)(y().titleContainer, { [y().titleContainer_withVersion]: R.version }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            children: [em, R.version && (0, a.jsx)(u.HL, { className: y().version, variant: 'span', children: ' '.concat(R.version) })],
                        }),
                        srTitle: e_,
                        contentLinesCount: E,
                        view: (0, a.jsx)(_.t, {
                            className: y().cover,
                            radius: 'l',
                            withShadow: !0,
                            children: (0, a.jsxs)('div', {
                                className: (0, s.$)(y().coverBlock, { [y().coverBlock_withTrackLink]: R.hasTrackLink }),
                                onClick: en,
                                children: [
                                    (0, a.jsx)(f.B, {
                                        className: y().image,
                                        src: R.coverUri,
                                        size: 200,
                                        fit: 'cover',
                                        alt: q,
                                        withAvatarReplace: !0,
                                        isAvailable: R.isAvailable,
                                        'aria-hidden': !0,
                                    }),
                                    eu,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            p.i,
                            { className: y().artists, artists: R.artists, lineClamp: 1, linkClassName: y().artistLink, captionSize: 's', withLink: R.isNonUserGenerated },
                            R.getKey('description'),
                        ),
                        children: k,
                    });
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
        61371: (e) => {
            e.exports = {
                root: 'Concert_root__INQJc',
                cover: 'Concert_cover__POyDO',
                index: 'Concert_index__cPRuN',
                meta: 'Concert_meta__s_lsH',
                textContainer: 'Concert_textContainer__50dZP',
                date: 'Concert_date__3xwWB',
                info: 'Concert_info__viObm',
                concertTitle: 'Concert_concertTitle__kngHo',
                description: 'Concert_description__JTZtZ',
                descriptionContainer: 'Concert_descriptionContainer__cPF3d',
                cashback: 'Concert_cashback__b7feO',
                title: 'Concert_title__tX2Mj',
            };
        },
        61420: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        61744: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => u });
            var a = i(32290),
                s = i(96103),
                r = i(55178),
                l = i(39407),
                o = i(21732),
                n = i(6752),
                c = i(71926),
                d = i(98066),
                m = i(10570),
                _ = i.n(m);
            let u = (0, s.PA)((e) => {
                let { id: t, concert: i, withCashback: s = !0, withInlineMeta: m = !1, titleSize: u = 'm' } = e,
                    v = [],
                    p = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                (null == i ? void 0 : i.eventKind) &&
                    v.push(
                        (0, a.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': o.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, a.jsx)(l.A, { id: 'concerts.event-kind', values: { kind: i.eventKind } }),
                        }),
                    ),
                    (null == i ? void 0 : i.contentRating) &&
                        v.push(
                            p,
                            (0, a.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': o.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: i.contentRating,
                            }),
                        );
                let h = (0, n.L)(() =>
                    (null == i ? void 0 : i.city)
                        ? (0, a.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': o.OA.concert.CONCERT_CARD_LOCATION,
                              children: i.city,
                          })
                        : null,
                );
                return (
                    m && h && v.push(p, h),
                    (0, a.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, a.jsx)(c.HL, {
                                variant: 'div',
                                size: u,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': o.OA.concert.CONCERT_CARD_TITLE,
                                children: null == i ? void 0 : i.title,
                            }),
                            (0, a.jsx)('div', { className: _().info, children: v.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            !m && h,
                            s &&
                                (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(d.m, { className: _().cashback, valuePercent: i.cashbackValuePercent }),
                            s &&
                                !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(d.m, { className: _().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        62107: (e) => {
            e.exports = {
                root: 'PlaylistWithTracksEmpty_root__secDB',
                image: 'PlaylistWithTracksEmpty_image__JH2uE',
                header: 'PlaylistWithTracksEmpty_header__pD30X',
                text: 'PlaylistWithTracksEmpty_text__b69Q_',
                myWaveButton: 'PlaylistWithTracksEmpty_myWaveButton__Kswfl',
                myWaveButtonText: 'PlaylistWithTracksEmpty_myWaveButtonText__AfIg9',
            };
        },
        62980: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => m });
            var a = i(32290),
                s = i(63618),
                r = i(60900),
                l = i(21732),
                o = i(71926),
                n = i(83560),
                c = i(19111),
                d = i.n(c);
            let m = (e) => {
                let { datetime: t, className: i, monthClassName: c, dayClassName: m, weekdayClassName: _, withWeekday: u = !0, ...v } = e,
                    { formatDate: p } = (0, r.A)(),
                    h = ((e) => {
                        let { formatMessage: t } = (0, r.A)(),
                            i = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return i[new Date(e).getMonth()];
                    })(t);
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(d().root, i),
                    'aria-label': p(t, (0, n.s)()),
                    ...v,
                    'data-test-id': l.OA.concert.CONCERT_DATE,
                    children: [
                        (0, a.jsx)(o.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, s.$)(d().month, c),
                            'data-test-id': l.OA.concert.CONCERT_DATE_MONTH,
                            children: h,
                        }),
                        (0, a.jsx)(o.HL, {
                            variant: 'div',
                            className: (0, s.$)(d().day, m),
                            'data-test-id': l.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        u &&
                            (0, a.jsx)(o.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, s.$)(d().weekday, _),
                                'data-test-id': l.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        64146: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => j });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(60900),
                n = i(39407),
                c = i(63423),
                d = i(82586),
                m = i(71926),
                _ = i(16172),
                u = i(52068),
                v = i(62376),
                p = i(37240),
                h = i(83920),
                C = i(20472),
                x = i(12894),
                b = i(30310),
                A = i.n(b);
            let j = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    b = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, u.st)(),
                        { hash: i } = (0, u.gf)(),
                        { pageId: a } = (0, p.$)(),
                        s = (0, v.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let r = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, _.z5)(t.evgenInstance, r);
                    }, [t, e, i, a, s]);
                })(b);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, u.st)(),
                            { hash: t } = (0, u.gf)(),
                            { pageId: i } = (0, p.$)(),
                            a = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, _.bv)(e.evgenInstance, s);
                            }, [e, t, i, a]),
                        };
                    })(),
                    N = (0, l.useCallback)(() => {
                        j(), (window.location.href = C.Z.main.href);
                    }, [j]),
                    { contentRef: T } = (0, h.g)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(A().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(x.L, { withBackwardFallback: '/', className: (0, s.$)(A().navigation, { [A().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(m.DZ, { className: (0, s.$)(A().title, A().important), variant: 'h3', size: 'xs', children: b }),
                                (0, a.jsxs)(m.HL, {
                                    className: (0, s.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(n.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: N,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(m.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, a.jsx)(n.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67775: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        67848: (e) => {
            e.exports = {
                root: 'NewRelease_root__W0T4a',
                image: 'NewRelease_image__Vw6_k',
                cover: 'NewRelease_cover__EVFNR',
                coverImage: 'NewRelease_coverImage__9x6Uk',
                card: 'NewRelease_card__yn06x',
                fade: 'NewRelease_fade__rVE0_',
                artists: 'NewRelease_artists__wGTaP',
                artistLink: 'NewRelease_artistLink__CO3Zn',
                artistCaption: 'NewRelease_artistCaption__1F8A9',
                trailerButton: 'NewRelease_trailerButton__OYAW6',
                descriptionContainer: 'NewRelease_descriptionContainer__g56GG',
            };
        },
        69675: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => Q });
            var a = i(32290),
                s = i(63618),
                r = i(62060),
                l = i(96103),
                o = i(55178),
                n = i(60900),
                c = i(80451),
                d = i(21732),
                m = i(71483),
                _ = i(91027),
                u = i(6752),
                v = i(58359),
                p = i(50162),
                h = i(86269),
                C = i(71926),
                x = i(41677),
                b = i(56797),
                A = i(26089),
                j = i(99872),
                N = i(37862),
                T = i(48922),
                I = i(23352),
                f = i(72396),
                g = i(52843),
                S = i(22191),
                L = i(28999),
                k = i(63415),
                y = i(56755),
                R = i(90169),
                E = i(57594),
                P = i(5154),
                w = i(78570),
                O = i(1444),
                M = i(90326),
                B = i(73325),
                D = i(96299),
                V = i.n(D),
                W = i(82586),
                U = i(46789),
                H = i(92744),
                z = i(4008),
                K = i(57223),
                Y = i(17365),
                F = i.n(Y);
            let $ = (0, l.PA)((e) => {
                let { className: t, clip: i, likeIconSize: r = 'xxs' } = e,
                    { user: l } = (0, E.g)(),
                    { sendLikeSearchFeedback: n } = (0, L.z)(),
                    c = (0, U.K)(i),
                    [m, u] = (0, o.useState)(!1),
                    [v, p] = (0, o.useState)(!1),
                    h = (0, _.c)(() => {
                        m || i.isLiked || (u(!0), null == n || n()), c();
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(F().root, F().controls, t, { [F().controls_disabled]: !i.isAvailable }),
                    children:
                        i.isAvailable &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(z.WithOffline, {
                                    fallback: (0, a.jsx)(H.c, {
                                        size: 'xs',
                                        iconSize: r,
                                        className: (0, s.$)(F().item, F().likeIcon),
                                        isLiked: i.isLiked,
                                        onClick: h,
                                        disabled: !l.isAuthorized,
                                    }),
                                }),
                                (0, a.jsx)(K.z, {
                                    placement: 'top-start',
                                    icon: (0, a.jsx)(W.I, { variant: 'more', size: 'xs' }),
                                    size: 'xs',
                                    clip: i,
                                    className: (0, s.$)(F().contextMenu, { [F().contextMenu_visible]: v }),
                                    onOpenChange: p,
                                    open: v,
                                    'data-test-id': d.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                }),
                            ],
                        }),
                });
            });
            var X = i(41947),
                G = i.n(X);
            let Q = (0, l.PA)((e) => {
                var t;
                let { clip: i, className: l, coverClassName: D, playButtonIconSize: W = 'xs', likeIconSize: U, viewUuid: H, shouldShowTimecode: z = !1 } = e,
                    { fullscreenVideoPlayer: K } = (0, E.g)(),
                    { formatMessage: Y } = (0, n.A)(),
                    F = (0, S.P)(null != (t = i.duration) ? t : 0),
                    X = (0, b._)(H),
                    Q = (0, A.M)(H),
                    { ref: q, intersectionPropertyId: Z } = (0, I.n)({ callback: Q }),
                    { from: J } = (0, f.f)({ pageId: T._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: m.K.Various, blockId: N.U.CLIPS }),
                    [ee, et] = (0, o.useState)(!1),
                    { sendNavigateSearchFeedback: ei, sendPlaySearchFeedback: ea } = (0, L.z)(),
                    es = (0, j.C)(),
                    er = (0, o.useRef)(null),
                    el = (0, _.c)(() => {
                        er.current && ((er.current.currentTime = 0), er.current.play());
                    }),
                    eo = (0, o.useMemo)(() => (0, r.A)(el, 500), [el]),
                    en = (0, _.c)(() => {
                        var e;
                        null == (e = er.current) || e.pause();
                    }),
                    ec = (0, o.useMemo)(() => K.ids.indexOf(i.clipId), [K, i.clipId]),
                    { isPlaying: ed } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: k.H.VARIOUS_CLIP_CONTEXT }, from: J },
                            queueParams: { index: ec },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: K.state,
                        playbackId: y.V.CLIP,
                    }),
                    em = (0, _.c)(() => {
                        es([i.clipId]), ee || ed || (et(!0), null == ea || ea()), null == ei || ei(), X();
                    }),
                    e_ = (0, B.X)({ clip: i, callback: em }),
                    eu = (0, _.c)((e) => {
                        (0, v.P)(e, P.$f.ripple), e_(e);
                    }),
                    ev = (0, u.L)(() =>
                        (0, a.jsx)(C.HL, {
                            className: (0, s.$)(P.$f.text, P.$f.titleText),
                            'aria-hidden': !0,
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: i.title,
                        }),
                    ),
                    ep = (0, o.useCallback)(
                        (e, t) => {
                            var s;
                            return (null == (s = i.artists) ? void 0 : s.length)
                                ? (0, a.jsx)(x.i, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1 })
                                : null;
                        },
                        [i.artists],
                    ),
                    eh = Y({ id: 'entity-names.clip-name' }, { clipName: i.title }),
                    eC = (0, u.L)(() =>
                        i.isAvailable
                            ? (0, a.jsxs)(h.t, {
                                  className: (0, s.$)(G().cover, V().cover, V().cover_withoutOffset, D),
                                  radius: 'xs',
                                  onMouseEnter: eo,
                                  onMouseLeave: en,
                                  children: [
                                      i.previewUrl &&
                                          (0, a.jsx)('video', {
                                              className: V().media,
                                              ref: er,
                                              poster: i.thumbnail && (0, c.createAvatarVideoUrl)(i.thumbnail, 80),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              'aria-hidden': !0,
                                              children: (0, a.jsx)('source', { src: i.previewUrl, type: 'video/mp4' }),
                                          }),
                                      i.thumbnail &&
                                          (0, a.jsx)(p._V, {
                                              className: V().image,
                                              src: i.thumbnail,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer: c.createAvatarVideoUrl,
                                              alt: eh,
                                          }),
                                      void 0 !== i.duration &&
                                          z &&
                                          (0, a.jsx)(C.HL, {
                                              variant: 'span',
                                              className: (0, s.$)(V().duration, G().duration),
                                              type: 'entity',
                                              size: 'xs',
                                              weight: 'medium',
                                              role: 'text',
                                              'aria-label': F,
                                              children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, g.E)(i.duration, i.duration) }),
                                          }),
                                      (0, a.jsx)(M.D, { variant: 'filled', className: V().playButton, onClick: e_, iconSize: W }),
                                  ],
                              })
                            : (0, a.jsxs)(h.t, {
                                  className: (0, s.$)(G().cover, G().unavailable, D),
                                  radius: 'xs',
                                  children: [
                                      (0, a.jsx)(p.Ab, {
                                          className: V().image,
                                          iconVariant: 'unavailable',
                                          iconSize: 'xs',
                                          'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE,
                                      }),
                                      (0, a.jsx)(M.D, { variant: 'filled', className: V().playButton, iconSize: W, disabled: !0 }),
                                  ],
                              }),
                    );
                return (0, a.jsxs)(O.C, {
                    ref: q,
                    'data-intersection-property-id': Z,
                    className: (0, s.$)(P.$f.root, { [P.$f.root_disabled]: !i.isAvailable }, G().root, l),
                    onClick: eu,
                    'data-test-id': d.Kq.clip.HORIZONTAL_CLIP_CARD,
                    children: [
                        eC,
                        (0, a.jsx)(w.r, {
                            isDisabled: !i.isAvailable,
                            title: ev,
                            artistsComponent: ep,
                            getDescriptionTexts: i.getDescriptionTexts,
                            explicitMarkVariant: i.explicitDisclaimer,
                            isLiked: i.isLiked,
                        }),
                        (0, a.jsx)($, { className: P.$f.controlsBar, clip: i, likeIconSize: U }),
                    ],
                });
            });
        },
        69748: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71583: (e) => {
            e.exports = {
                root: 'ShimmerMapBlock_root__TAa25',
                heading: 'ShimmerMapBlock_heading__rF7ts',
                mapImage: 'ShimmerMapBlock_mapImage__bQbYD',
                address: 'ShimmerMapBlock_address__GgNdC',
                metroStations: 'ShimmerMapBlock_metroStations__omTcd',
            };
        },
        71670: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(55178);
            let s = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var a = i(32290),
                s = i(63618),
                r = i(55178),
                l = i(60900),
                o = i(39407),
                n = i(63423),
                c = i(82586),
                d = i(71926),
                m = i(58534),
                _ = i(70718),
                u = i.n(_);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: v } = (0, l.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, r.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: u().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: u().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(n.$, {
                                    ref: _,
                                    className: u().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': v({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: u().icon }),
                                }),
                            ],
                        }),
                    [v, t],
                );
                return (0, a.jsx)(m.$, { className: (0, s.$)(u().root, u().important), message: p, closeToast: i });
            };
        },
        73474: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { p: () => a }),
                (function (e) {
                    (e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page');
                })(a || (a = {}));
        },
        73654: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => f });
            var a = i(32290),
                s = i(92708),
                r = i(55178),
                l = i(60900),
                o = i(90346),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                m = i(90357),
                _ = i(63618),
                u = i(39407),
                v = i(21732),
                p = i(74196),
                h = i(71926),
                C = i(29038),
                x = i(11323),
                b = i(61258),
                A = i(58534),
                j = i(80271),
                N = i.n(j);
            let T = (e) => {
                    let { closeToast: t, albumTitle: i, coverUri: s, isPresave: o, entityTitle: n, className: c } = e,
                        { formatMessage: d } = (0, l.A)(),
                        m = (0, r.useMemo)(
                            () => (o ? (0, a.jsx)(u.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(u.A, { id: 'notifications-info.removed-from' })),
                            [o],
                        ),
                        j = (0, r.useMemo)(
                            () => (o ? (0, a.jsx)(u.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(u.A, { id: 'notifications-info.from-collection' })),
                            [o],
                        ),
                        T = (0, r.useMemo)(
                            () =>
                                o
                                    ? d({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : d({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [o, n, d],
                        ),
                        I = (0, r.useMemo)(
                            () =>
                                (0, a.jsxs)(h.HL, {
                                    className: N().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': v.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(u.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, a.jsxs)(h.HL, { className: N().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        m,
                                        '\xa0',
                                        (0, a.jsx)(b.N, {
                                            className: N().link,
                                            href: '/collection/albums?tab='.concat(C.H.UPCOMING_ALBUMS),
                                            title: String(j),
                                            children: (0, a.jsx)(h.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: j }),
                                        }),
                                    ],
                                }),
                            [n, m, j],
                        );
                    return (0, a.jsx)(A.$, {
                        className: (0, _.$)(N().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': T }) }), I] }),
                        cover: (0, a.jsx)(x.B, { className: N().image, src: s, size: 100, fit: 'cover', alt: i, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                I = (e) => {
                    let { upcomingAlbum: t, closeToast: i } = e;
                    return (0, a.jsx)(T, { closeToast: i, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                f = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, u] = (0, r.useState)(!1),
                        { formatMessage: v } = (0, l.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(m.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), isPresave: !e.isPresave };
                        u(!0);
                        let l = await e.toggleLike();
                        u(!1),
                            l === o.J.OK
                                ? i((0, a.jsx)(I, { upcomingAlbum: r }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(m.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t.isAuthorized, _, e, i, v]);
                };
        },
        74381: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var a = i(32290),
                s = i(63618),
                r = i(79856),
                l = i(90011),
                o = i.n(l);
            let n = (e) => {
                    let { isActive: t } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(o().shimmer, o().donation),
                        children: [
                            (0, a.jsx)(r.W, { isActive: t, radius: 'round', className: o().shimmerCover }),
                            (0, a.jsxs)('div', {
                                className: o().shimmerContainer,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: o().shimmerText,
                                        children: [
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: o().shimmerArtist }),
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: o().shimmerGoal }),
                                        ],
                                    }),
                                    (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                c = (e) => Array.from({ length: 10 }, (t, i) => (0, a.jsx)(n, { isActive: e }, i));
        },
        74523: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let a = (e, t) => {
                let [i, a] = e.split('?'),
                    s = new URLSearchParams(a || '');
                for (let [e, i] of new URLSearchParams(t).entries()) s.set(e, i);
                let r = s.toString();
                return ''.concat(i).concat(r ? '?'.concat(r) : '');
            };
        },
        74553: (e) => {
            e.exports = {
                root: 'InStyle_root__ZsdXE',
                controls: 'InStyle_controls__mGqhj',
                header: 'InStyle_header__C2AWP',
                important: 'InStyle_important__msPsl',
                tab: 'InStyle_tab__DeURY',
                tabCarousel: 'InStyle_tabCarousel__SXqBO',
                item: 'InStyle_item__e5_Qz',
            };
        },
        75127: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var a = i(32290),
                s = i(37340);
            let r = (e) => Array.from({ length: e }, (e, t) => (0, a.jsx)(s.W, {}, t));
        },
        75314: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r, o: () => s });
            var a = i(14257);
            let s = { [a.S.Dark]: 'ym-dark-theme', [a.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case a.S.Light:
                        case a.S.Dark:
                            return s[e];
                        default:
                            return '';
                    }
                };
        },
        77279: (e) => {
            e.exports = {
                root: 'CollectionArtistsAndTopWithItems_root__tR4BR',
                controls: 'CollectionArtistsAndTopWithItems_controls__Z_VQb',
                itemContainer: 'CollectionArtistsAndTopWithItems_itemContainer__xF00m',
                actionItem: 'CollectionArtistsAndTopWithItems_actionItem__7xPUf',
                important: 'CollectionArtistsAndTopWithItems_important__TEa6m',
                item: 'CollectionArtistsAndTopWithItems_item__fPqL0',
            };
        },
        78381: (e) => {
            e.exports = { root: 'ItemList_root__0fUbd', shimmer: 'ItemList_shimmer__hIZtA' };
        },
        79114: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => b });
            var a = i(96194),
                s = i(32290),
                r = i(63618),
                l = i(96103),
                o = i(55178),
                n = i(80451),
                c = i(6752),
                d = i(50212),
                m = i(80585),
                _ = i.n(m);
            let u = (0, l.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        l = (0, c.L)(() => {
                            if (null == i ? void 0 : i.release)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.release });
                        }),
                        o = (0, c.L)(() => {
                            if (null == i ? void 0 : i.upcomingRelese)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.upcomingRelese });
                        }),
                        m = (0, c.L)(() => {
                            if (null == i ? void 0 : i.popularTracks)
                                return (0, s.jsx)(d.Z, {
                                    ...a,
                                    className: (0, r.$)(_().popularTracks, { [_().popularTracks_withReleaseBlock]: !!(null != o ? o : l) }),
                                    block: i.popularTracks,
                                });
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: _().root,
                        ...(0, n.getDataAttrFromProps)(a),
                        children: (0, s.jsxs)('div', { className: _().container, children: [m, null != o ? o : l] }),
                    });
                }),
                v = (0, o.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var p = i(92989),
                h = i.n(p);
            let C = (0, l.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        r = (0, c.L)(() => {
                            if (null == i ? void 0 : i.familiarYou) return (0, s.jsx)(d.Z, { ...a, block: i.familiarYou });
                        }),
                        l = (0, c.L)(() => {
                            if (null == i ? void 0 : i.artistPick) return (0, s.jsx)(d.Z, { ...a, block: i.artistPick });
                        });
                    return (0, s.jsxs)('section', { ref: t, className: h().root, ...(0, n.getDataAttrFromProps)(a), children: [l, r] });
                }),
                x = (0, o.forwardRef)((e, t) => (0, s.jsx)(C, { forwardRef: t, ...e })),
                b = { [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: v, [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: x };
        },
        79248: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var a = i(77307),
                s = i(55178),
                r = i(91027),
                l = i(83920),
                o = i(57594);
            let n = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: m = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, o.g)(),
                        { contentScrollRef: u } = (0, l.g)(),
                        v = (0, s.useRef)(new Map()),
                        p = (0, s.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: m,
                            initialRect: n,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let a = t.getBoundingClientRect().top;
                                return e && 1 ? a + window.scrollY : !e && i ? a + i.scrollTop : 0;
                            })(_, d, u),
                        },
                        C = (0, a.XW)(h),
                        x = (0, a.Te)({ ...h, getScrollElement: () => u, initialOffset: null == u ? void 0 : u.scrollTop }),
                        b = _ ? C : x,
                        A = (0, r.c)(() => {
                            b.measure();
                        });
                    return (
                        (0, s.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let a = e.contentRect.height;
                                            a && a !== v.current.get(i) && (v.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && A();
                                }));
                        }, [A]),
                        { virtualizer: b, resizeObserver: p.current }
                    );
                };
        },
        79589: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(16172),
                n = i(21732),
                c = i(91027),
                d = i(44989),
                m = i(58359),
                _ = i(63423),
                u = i(86269),
                v = i(23352),
                p = i(84062),
                h = i(57594),
                C = i(79406),
                x = i(36477),
                b = i(37997),
                A = i(52068),
                j = i(48922),
                N = i(2792),
                T = i(37240),
                I = i(62376),
                f = i(19522),
                g = i(12578),
                S = i(62980),
                L = i(52575),
                k = i.n(L);
            let y = (0, r.PA)((e) => {
                let {
                        artistId: t,
                        concert: i,
                        meta: r,
                        viewUuid: L,
                        radius: y = 'l',
                        className: R,
                        shouldSendAnalyticsOnHide: E,
                        forceAfishaWidget: P,
                        shouldShowMask: w,
                    } = e,
                    { state: O, toggleTrue: M, toggleFalse: B } = (0, d.e)(!1),
                    { experiments: D } = (0, h.g)(),
                    V = !P && D.checkExperiment(C.z.WebNextConcertPage, 'on'),
                    { href: W } = (0, x.u)('/concert/:concertId', { params: { concertId: i.id } }),
                    U = (0, p.Z)(W),
                    H = ((e) => {
                        let { artistId: t, viewUuid: i } = e,
                            a = (0, A.st)(),
                            { hash: s } = (0, A.gf)(),
                            { pageId: r } = (0, T.$)(),
                            { objectsCount: n, objectType: c, objectId: d, objectPosX: m, objectPosY: _, objectPos: u } = (0, N.J)(),
                            v = (0, I.U)(),
                            p = (0, l.useCallback)(() => {
                                let e = (0, o.Fx)({
                                    params: { hash: s, artistId: t, objectsCount: n, objectType: c, objectId: d, objectPosX: m, objectPosY: _ },
                                    logger: v,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && (0, o.HB)(a.evgenInstance, e);
                            }, [a, t, s, v, d, m, _, c, n]),
                            h = (0, l.useCallback)(() => {
                                let e = (0, o.Fx)({
                                    params: { hash: s, artistId: t, viewUuid: i, objectId: d, objectPos: u },
                                    logger: v,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && i && (0, o.Z4)(a.evgenInstance, e);
                            }, [a, t, s, v, d, u, i]);
                        return (0, l.useCallback)(() => {
                            if (a && r && j.xK.includes(r))
                                switch (r) {
                                    case j._Q.ARTIST:
                                    case j._Q.CONCERT:
                                        p();
                                        break;
                                    case j._Q.ARTIST_CONCERTS:
                                        h();
                                }
                        }, [a, r, h, p]);
                    })({ artistId: t, viewUuid: L }),
                    z = (0, b.m)({ artistId: t, viewUuid: L }),
                    { ref: K, intersectionPropertyId: Y } = (0, v.n)({ callback: null !== t ? H : void 0, singleEvent: !E }),
                    F = (0, l.useId)(),
                    $ = (0, l.useId)(),
                    X = (0, f.Y)()(i),
                    G = (0, c.c)((e) => {
                        (0, m.P)(e, k().ripple), V && (U(e), z(o.H2.ConcertScreen));
                    }),
                    Q = (0, c.c)((e) => {
                        M(), z(o.H2.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault();
                    });
                return (0, a.jsxs)(u.t, {
                    radius: y,
                    className: (0, s.$)(k().root, R, { [k().root_withConcertsRedesign]: i.isIdentityExperimentEnabled }),
                    ref: K,
                    'data-intersection-property-id': Y,
                    onClick: G,
                    children: [
                        i.datetime &&
                            (0, a.jsx)(S.d, {
                                datetime: i.datetime,
                                id: F,
                                className: (0, s.$)(k().date, { [k().dateWithMask]: w, [k().important]: w }),
                                dayClassName: k().dateColor,
                                monthClassName: k().dateColor,
                            }),
                        (0, l.cloneElement)(r, { id: $, concert: i }),
                        i.dataSessionId &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(_.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: k().button,
                                        'aria-describedby': ''.concat(F, ' ').concat($),
                                        'aria-label': X,
                                        onClick: Q,
                                        'data-test-id': n.OA.concert.CONCERT_CARD_BUTTON,
                                        children: X,
                                    }),
                                    (0, a.jsx)(g.h, { dataSessionId: i.dataSessionId, isOpened: O, onOpen: M, onClose: B }),
                                ],
                            }),
                    ],
                });
            });
        },
        79897: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => x });
            var a = i(32290),
                s = i(63618),
                r = i(55178),
                l = i(60900),
                o = i(39407),
                n = i(80451),
                c = i(63423),
                d = i(82586),
                m = i(86269),
                _ = i(71926),
                u = i(11323),
                v = i(61258),
                p = i(90011),
                h = i.n(p);
            let C = (e) => {
                    let { artist: t, goal: i, onNavigateToArtist: r, onNavigateToDonation: p, forwardRef: C, ...x } = e,
                        { formatMessage: b } = (0, l.A)();
                    return (0, a.jsxs)('div', {
                        ref: C,
                        className: (0, s.$)(h().root, h().donation),
                        ...(0, n.getDataAttrFromProps)(x),
                        children: [
                            (0, a.jsx)(m.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, a.jsx)(v.N, {
                                    href: t.url,
                                    onClick: r,
                                    'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, a.jsx)(u.B, {
                                        className: h().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: h().text,
                                        children: [
                                            (0, a.jsx)(_.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: h().artist, children: t.name }),
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: i,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: p,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, a.jsx)(d.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, a.jsx)(_.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, a.jsx)(o.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                x = (0, r.forwardRef)((e, t) => (0, a.jsx)(C, { forwardRef: t, ...e }));
        },
        79915: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        80097: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => u });
            var a = i(32290),
                s = i(63618),
                r = i(55178),
                l = i(80451),
                o = i(75245),
                n = i(19620),
                c = i(49522),
                d = i(98307),
                m = i.n(d);
            let _ = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            headerClassName: d,
                            containerClassName: _,
                            headingVariant: u,
                            title: v,
                            viewAllActionLink: p,
                            description: h,
                            children: C,
                            ...x
                        } = e,
                        b = (0, r.useId)(),
                        A = (0, r.useRef)(null);
                    return (0, a.jsxs)('section', {
                        ref: i,
                        className: (0, s.$)(m().root, t),
                        ...(0, l.getDataAttrFromProps)(x),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: d,
                                labeledForId: b,
                                title: v,
                                description: h,
                                viewAllActionLink: p,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: A }),
                                headingVariant: u,
                                withDescription: !!h,
                            }),
                            (0, a.jsx)(o.F, { ref: A, itemClassName: (0, s.$)(m().item, m().important), className: _, 'aria-labelledby': b, children: C }),
                        ],
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        80271: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        80389: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        80585: (e) => {
            e.exports = {
                root: 'ArtistPopularTracksAndReleases_root__rN5Wk',
                container: 'ArtistPopularTracksAndReleases_container__EQIVk',
                popularTracks: 'ArtistPopularTracksAndReleases_popularTracks__HEZ73',
                popularTracks_withReleaseBlock: 'ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr',
                release: 'ArtistPopularTracksAndReleases_release__9NDdR',
                releaseCard: 'ArtistPopularTracksAndReleases_releaseCard__uHtao',
            };
        },
        81497: (e) => {
            e.exports = { item: 'ArtistPopularTracks_item__PsKwP', important: 'ArtistPopularTracks_important__hdfzU' };
        },
        81697: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => g });
            var a,
                s,
                r = i(32290),
                l = i(63618),
                o = i(96103),
                n = i(55178),
                c = i(21732),
                d = i(6752),
                m = i(50162),
                _ = i(57594),
                u = i(79406),
                v = i(80451);
            let p = (e) => (0, v.httpsReplacer)(e.replace('%%', '960x690_noncrop'));
            var h = i(39407),
                C = i(71926);
            function x() {
                return (x = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let b = function (e) {
                return n.createElement(
                    'svg',
                    x({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    a ||
                        (a = n.createElement(
                            'defs',
                            null,
                            n.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                n.createElement('stop', { stopColor: '#FF5C4D' }),
                                n.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                n.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            n.createElement('clipPath', { id: 'plusColorClip' }, n.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    s ||
                        (s = n.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            n.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            n.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var A = i(59245),
                j = i.n(A);
            let N = (e) => {
                let { percent: t, className: i } = e;
                return (0, r.jsxs)('div', {
                    className: (0, l.$)(j().root, i),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, r.jsx)(b, { 'aria-hidden': !0, className: j().icon }),
                        (0, r.jsx)(C.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: j().text,
                            children: (0, r.jsx)(h.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var T = i(62980),
                I = i(54267),
                f = i.n(I);
            let g = (0, o.PA)((e) => {
                let { uri: t, withMask: i, datetime: a, coverColor: s, cashbackPercent: o } = e,
                    { experiments: h } = (0, _.g)(),
                    [C, x] = (0, n.useState)(!1),
                    b = h.checkExperiment(u.z.NewConcertsTicketRedesign, 'on') && i,
                    A = h.checkExperiment(u.z.WebNextConcertsIdentityEventType, 'on'),
                    j = (0, n.useCallback)(() => {
                        x(!0);
                    }, []),
                    I = (0, d.L)(() => {
                        if (s)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: i, l: a } = (0, v.hexToHsl)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(i, '%, ')
                                        .concat(a <= 55 ? a + 20 : a - 20, '%)');
                                })(s),
                            };
                    }),
                    g = (0, d.L)(() =>
                        a
                            ? (0, r.jsxs)('div', {
                                  className: (0, l.$)(f().date, { [f().date_withEventType]: A }),
                                  children: [
                                      (0, r.jsx)(m._V, {
                                          className: f().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: j,
                                      }),
                                      C &&
                                          (0, r.jsx)(T.d, {
                                              className: f().root_withEventType,
                                              dayClassName: f().day_withEventType,
                                              weekdayClassName: f().weekday_withEventType,
                                              monthClassName: f().month_withEventType,
                                              datetime: a,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    S = (0, d.L)(() =>
                        a
                            ? (0, r.jsx)(T.d, {
                                  dayClassName: f().day,
                                  weekdayClassName: (0, l.$)(f().weekday, f().important),
                                  monthClassName: f().month,
                                  className: f().date,
                                  datetime: a,
                              })
                            : null,
                    );
                return (0, r.jsxs)('div', {
                    className: (0, l.$)(f().root, { [f().root_withMask]: b }),
                    style: I,
                    children: [
                        (0, r.jsx)(m._V, {
                            className: f().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: p,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        a && (A ? g : S),
                        A && o && (0, r.jsx)(N, { className: f().cashback, percent: o }),
                    ],
                });
            });
        },
        82219: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            let a = (e, t) => {
                let i = e / 60;
                return i <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : t({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        84468: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            let a = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        85819: (e) => {
            e.exports = { filters: 'PlaylistWithTracksAndFilters_filters__koC2A', shimmer: 'PlaylistWithTracksAndFilters_shimmer__vrNPe' };
        },
        86168: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => a });
            var a = (function (e) {
                return (e.ALL = 'all'), e;
            })({});
        },
        86384: (e) => {
            e.exports = {
                positionIndicator: 'ArtistTopCard_positionIndicator__Bs_Ga',
                crownIcon: 'ArtistTopCard_crownIcon__yxAH3',
                progressIcon: 'ArtistTopCard_progressIcon__gHcbF',
                progressIcon_up: 'ArtistTopCard_progressIcon_up__PeHBx',
                progressIcon_down: 'ArtistTopCard_progressIcon_down__0PKeO',
                progressIcon_same: 'ArtistTopCard_progressIcon_same___SujQ',
                progressIcon_new: 'ArtistTopCard_progressIcon_new__w3wA6',
                listenTime: 'ArtistTopCard_listenTime__P1_jw',
            };
        },
        88404: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => o });
            var a = i(32290),
                s = i(79856),
                r = i(96871),
                l = i.n(r);
            let o = (e) => {
                let { isActive: t, withMeta: i, withPriceButton: r } = e;
                return (0, a.jsxs)('div', {
                    className: l().root,
                    children: [
                        (0, a.jsx)(s.W, { radius: 'm', className: l().shimmerCover, isActive: t }),
                        (0, a.jsxs)('div', {
                            className: l().meta,
                            children: [
                                (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerTitle }),
                                i &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerInfo }),
                                            (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        r && (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerButton }),
                    ],
                });
            };
        },
        88467: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                l = i(21732),
                o = i(4550),
                n = i(50162),
                c = i(86269),
                d = i(71926),
                m = i(61258),
                _ = i(79915),
                u = i.n(_);
            let v = (0, r.PA)((e) => {
                let { className: t, title: i, weblink: r, covers: _ = [], coverSize: v = 100, imagesLayoutType: p, headingVariant: h = 'h3' } = e;
                return (0, a.jsx)(m.N, {
                    href: r,
                    'data-test-id': l.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        className: (0, s.$)(u().root, t),
                        radius: 'l',
                        children: [
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: h,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': l.OA.mix.MIX_CARD_HEADER,
                                    children: i,
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(u().covers, { [u().covers_radial]: p === o.R.RADIAL, [u().covers_stack]: p === o.R.STACK }),
                                'data-test-id': l.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, a.jsx)(n._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: v,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: v,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: v,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        89616: (e) => {
            e.exports = { station: 'MetroStation_station__mCvqj', stationColors: 'MetroStation_stationColors__MgJFV', colorSpan: 'MetroStation_colorSpan__cFHsy' };
        },
        90011: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        90346: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { J: () => a }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(a || (a = {}));
        },
        90625: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => D });
            var a = i(32290),
                s = i(90040),
                r = i(57249),
                l = i(63618),
                o = i(96103),
                n = i(65493),
                c = i(55178),
                d = i(60900),
                m = i(16172),
                _ = i(21732),
                u = i(91027),
                v = i(50162),
                p = i(71926),
                h = i(95481),
                C = i(47745),
                x = i(2969),
                b = i(84782),
                A = i(23352),
                j = i(37240),
                N = i(28999),
                T = i(43564),
                I = i(57594),
                f = i(14257),
                g = i(50),
                S = i(86562),
                L = i(5154),
                k = i(78570),
                y = i(80195);
            let R = async (e, t) => {
                let { loop: i = !1, markerId: a, frameRange: s, mode: r = 'forward' } = t,
                    l = null,
                    o = null;
                if (a) {
                    let t = e.markers().find((e) => e.name === a);
                    if (!t) return;
                    (l = t.time), (o = t.time + t.duration);
                } else if (s) {
                    var n;
                    (l = s.start), (o = null != (n = s.end) ? n : e.totalFrames);
                }
                null !== l &&
                    null !== o &&
                    (await Promise.all([e.setLoop(i), e.setMode(r), e.setSegment(l, o), e.setFrame('reverse' === r ? o : l)]), l !== o && (await e.play()));
            };
            var E = i(1001),
                P = i.n(E),
                w = i(49124);
            let O = { align: [0, 0.5], fit: 'contain' },
                M = { autoResize: !0, freezeOnOffscreen: !1 },
                B = n.default.default(
                    () =>
                        Promise.resolve()
                            .then(i.bind(i, 90040))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = w.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, s.setWasmUrl)(new URL(r, e).href);
            }
            let D = (0, o.PA)((e) => {
                var t, i, s, r, o, n;
                let { animationByTheme: E, animationConfig: w, className: D, lumenImages: V, requestAwakeLumenModal: W, vibe: U } = e,
                    { formatMessage: H } = (0, d.A)(),
                    { pageId: z } = (0, j.$)(),
                    { blockIdForFrom: K } = (0, b.N)(),
                    { sendPlaySearchFeedback: Y } = (0, N.z)(),
                    F = (0, x.b)(),
                    $ = (0, C.N)(),
                    X = (0, h.f)(),
                    { ref: G, intersectionPropertyId: Q } = (0, A.n)(),
                    q = (0, g.W)(),
                    { lumen: Z } = (0, I.g)(),
                    J = null != (i = q.theme) ? i : f.S.Dark,
                    ee = Z.getFallbackImage(),
                    et = (0, c.useRef)(!1),
                    ei = (0, c.useRef)(w[U ? 'idle' : 'loading']),
                    [ea, es] = (0, c.useState)(null),
                    [er, el] = (0, c.useState)(!1),
                    {
                        isPlaying: eo,
                        togglePlay: en,
                        isCurrent: ec,
                    } = (0, T.B)({ blockIdForFrom: K, pageIdForFrom: z, seeds: null != (s = null == U ? void 0 : U.seeds) ? s : [] });
                (0, c.useEffect)(() => X(), [X]),
                    (0, c.useEffect)(() => {
                        if (!ea || et.current) return;
                        let e = () => {
                            (et.current = !0), R(ea, ei.current);
                        };
                        return ea.addEventListener('load', e), () => ea.removeEventListener('load', e);
                    }, [ea]),
                    (0, c.useEffect)(() => {
                        let e = ((e, t, i, a) =>
                            i || e === (null == a ? void 0 : a.loading)
                                ? t
                                    ? null == a
                                        ? void 0
                                        : a.playing
                                    : e === a.playing
                                      ? null == a
                                          ? void 0
                                          : a.paused
                                      : e === a.loading
                                        ? null == a
                                            ? void 0
                                            : a.idle
                                        : null
                                : null == a
                                  ? void 0
                                  : a.loading)(ei.current, eo, !!U, w);
                        e && e !== ei.current && ((ei.current = e), ea && et.current && R(ea, e));
                    }, [w, ea, ec, eo, U]);
                let ed = (0, u.c)(() => {
                        er || eo || (el(!0), null == Y || Y()), en(), F(!0);
                    }),
                    em = (0, u.c)(() => {
                        if (U) {
                            if (eo) {
                                en(), F(!1);
                                return;
                            }
                            if (Z.isEnabled && !Z.isAwakened) {
                                $({ to: m.QT.LumenAwakeningScreen }), null == W || W(ed);
                                return;
                            }
                            ed();
                        }
                    }),
                    e_ = (0, u.c)((e) => {
                        (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), em());
                    }),
                    eu = null != (r = null == U ? void 0 : U.title) ? r : H({ id: 'entity-names.query-to-vibe-loading-title' }),
                    ev = null != (o = null == U ? void 0 : U.description) ? o : H({ id: 'entity-names.query-to-vibe-loading-description' }),
                    ep = !Z.isEnabled || Z.isTriedToLoadData,
                    eh = Z.isEnabled ? (null != (n = null == Z || null == (t = Z.themes) ? void 0 : t[J].uri) ? n : ee[J]) : (null != V ? V : ee)[J],
                    eC = U ? _.OA.vibe.QUERY_TO_VIBE_BLOCK : _.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    ex = U && (!Z.isEnabled || Z.isTriedToLoadData);
                return (0, a.jsxs)('div', {
                    'aria-label': eu,
                    'aria-description': ev,
                    className: (0, l.$)(L.$f.root, P().root, { [P().root_loading]: !U }, D),
                    tabIndex: 0,
                    onClick: em,
                    onKeyDown: e_,
                    'data-test-id': eC,
                    children: [
                        (0, a.jsx)(B, { className: P().comet, layout: O, src: E[null != J ? J : f.S.Dark], renderConfig: M, dotLottieRefCallback: es }),
                        (0, a.jsxs)('div', {
                            className: P().iconContainer,
                            children: [
                                ec && (0, a.jsx)(y.P, { className: P().iconPulse, stopAnimation: !eo }),
                                ep && (0, a.jsx)(v._V, { className: P().icon, src: eh, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, a.jsx)(k.r, {
                            className: P().meta,
                            title: (0, a.jsx)(p.HL, {
                                className: (0, l.$)(L.$f.text, L.$f.titleText, P().caption),
                                size: 'm',
                                variant: 'div',
                                type: 'text',
                                children: eu,
                            }),
                            description: ev,
                            titleLineClamp: 2,
                        }),
                        ex && (0, a.jsx)('div', { ref: G, 'data-intersection-property-id': Q }),
                    ],
                });
            });
        },
        90840: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d });
            var a = i(21916),
                s = i(55178),
                r = i(14257),
                l = i(50),
                o = i(74523),
                n = i(97201);
            let c = { [r.S.Light]: 'yandex_music', [r.S.Dark]: 'yandex_music_dark' },
                d = () => {
                    let e = (0, a.useSearchParams)(),
                        { theme: t } = (0, l.W)();
                    return (0, s.useCallback)(
                        (i) => {
                            if (!t) return i;
                            let a = new URLSearchParams(e);
                            a.set('wl', c[t]);
                            let s = e.get(n.K.UTM_CAMPAIGN);
                            return s && a.set('meta', 'campaignid_'.concat(s)), (0, o.C)(i, a);
                        },
                        [t, e],
                    );
                };
        },
        91037: (e) => {
            e.exports = {
                root: 'LikesAndHistory_root__KCuz_',
                carousel: 'LikesAndHistory_carousel__579RD',
                carouselItem: 'LikesAndHistory_carouselItem__Yq5Xw',
                favoritesCoverContainer: 'LikesAndHistory_favoritesCoverContainer__UUIDf',
                favoritesCover: 'LikesAndHistory_favoritesCover__Nt7Gm',
                historyIcon: 'LikesAndHistory_historyIcon__2FAMu',
                historyIconContainer: 'LikesAndHistory_historyIconContainer__KPPbS',
            };
        },
        91118: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { n: () => a }),
                (function (e) {
                    (e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab');
                })(a || (a = {}));
        },
        91555: (e) => {
            e.exports = {
                root: 'ConcertsBlock_root__d_1G3',
                controls: 'ConcertsBlock_controls__oULxu',
                item: 'ConcertsBlock_item__jMAX9',
                item_singleColumn: 'ConcertsBlock_item_singleColumn__p8ilp',
                preventScroll: 'ConcertsBlock_preventScroll__YeeZH',
                concertsColumn: 'ConcertsBlock_concertsColumn__2M2t_',
            };
        },
        91693: (e) => {
            e.exports = { root: 'Overview_root__2deXs' };
        },
        92989: (e) => {
            e.exports = { root: 'FamiliarYouAndArtistPick_root___Ihxe' };
        },
        96871: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        98066: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => d });
            var a = i(32290),
                s = i(63618),
                r = i(21732),
                l = i(82586),
                o = i(71926),
                n = i(64146),
                c = i.n(n);
            let d = (e) => {
                let { title: t, className: i, titleClassName: n, valuePercent: d } = e;
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(c().root, i),
                    children: [
                        (0, a.jsx)(l.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, a.jsx)(o.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, s.$)(c().title, n),
                            'data-test-id': r.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        98307: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        99424: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { E: () => a }),
                (function (e) {
                    (e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW');
                })(a || (a = {}));
        },
    },
]);
