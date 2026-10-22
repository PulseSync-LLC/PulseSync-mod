(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9754],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        2241: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        3940: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => h });
            var o = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(39004),
                s = i(8487),
                l = i(44031),
                c = i(61493),
                d = i(71035),
                u = i(4071),
                _ = i(66738),
                m = i(4254),
                b = i(29481),
                v = i(27954),
                p = i(87490),
                g = i(96876),
                y = i.n(g);
            let h = (0, r.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: r,
                    } = (0, v.g)(),
                    { formatMessage: g } = (0, n.A)(),
                    h = (0, b.N)(),
                    x = t && i,
                    f = (0, d.c)(() => {
                        (h({ to: l.AppScreen.MultivibeSendingInvitationScreen, objectType: l.DomainObjectType.Shortcut }), r.promoModal.open());
                    });
                return (0, o.jsxs)('div', {
                    className: (0, a.$)(y().root, { [y().root_mobile]: x }),
                    'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, o.jsxs)(u.$, {
                            className: (0, a.$)(y().button, { [y().button_mobile]: x }),
                            'aria-label': g({ id: 'interface-actions.create' }),
                            onClick: f,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, o.jsx)(p.b, { align: 'back', surfaceClassName: y().surface }),
                                (0, o.jsx)(p.b, {
                                    align: 'front',
                                    surfaceClassName: y().surface,
                                    children: (0, o.jsx)(_.I, { variant: 'add', size: x ? 'xxxs' : 'l', className: y().icon }),
                                }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: y().titleWrapper,
                            children: (0, o.jsx)(m.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, a.$)(y().title, { [y().title_mobile]: x }),
                                children: (0, o.jsx)(s.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        4550: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => s });
            var o = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (a && (a += ' '), (a += o));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => a }));
                        let a = o;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = {
                            root: 'i0E_2NX4cuGTUSRVsza3',
                            rotate: 'SMKp_W9v6gety5k24_TU',
                            root_size_xxxs: 'OSqyMcSTAjYqzIL992Yw',
                            root_size_xxs: 'wc4asYHkCHxWpvH_vfHV',
                            root_size_xs: '_EehQphkMVEVJTlcOqgz',
                            root_size_s: 'R_2xF0Onip_K0GrDRV97',
                            root_size_m: 'tQV7pWeuTErBtRna7Fxx',
                            root_size_l: 'OJsrGLXpsIsmbj65C9AC',
                            root_size_xl: 'Vo4fBR82NKcVtfQCh508',
                            root_size_xxl: 'F45u5jR26w00BDX1OFHX',
                            gradient: 'xNNiKSvH1JTxlAkvyDlr',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var r in ((o = {}), t)) 'key' !== r && (o[r] = t[r]);
                            else o = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let a = i(4377),
                            r = i(5881),
                            n = o(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: o = 0.08, size: s, ...l } = e,
                                c = 100 * i,
                                d = 50 - c / 2 - 100 * o,
                                u = ((3 * Math.PI) / 2) * d;
                            return (0, a.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, r.clsx)(n.default.root, n.default['root_size_'.concat(s)], t),
                                'aria-hidden': !0,
                                ...l,
                                children: [
                                    (0, a.jsx)('defs', {
                                        children: (0, a.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, a.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: d,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: u,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, a.jsx)('div', { className: n.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                a = {};
            function r(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var i = (a[e] = { exports: {} });
                return (o[e].call(i.exports, i, i.exports, r), i.exports);
            }
            ((r.d = (e, t) => {
                for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.$ = void 0));
                var e = r(7279);
                Object.defineProperty(n, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var s = n.$;
            n.X;
        },
        6137: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 90290)), Promise.resolve().then(i.bind(i, 35656)));
        },
        6313: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => X });
            var o = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(8487),
                c = i(44031),
                d = i(61493),
                u = i(71035),
                _ = i(49656),
                m = i(14693),
                b = i(51246),
                v = i(4254),
                p = i(79367),
                g = i(20258),
                y = i(42966),
                h = i(29481),
                x = i(47009),
                f = i(52512),
                C = i(10322),
                I = i(97952),
                A = i(85743),
                T = i(87201),
                S = i(27954),
                j = i(17226),
                N = i(41580),
                R = i(49438),
                E = i(74987),
                P = i(72720),
                O = i(78453),
                M = i(75159),
                k = i(66738),
                w = i(10820),
                L = i(83243),
                V = i(56120),
                B = i(95213),
                D = i(73723),
                W = i.n(D),
                U = i(46616);
            let z = (0, r.PA)((e) => {
                let { room: t, onOpenChange: i, onRenameClick: r, isRenamePending: l, onRoomSuccessExit: u, open: _, className: m, ...b } = e,
                    {
                        settings: { isMobile: v },
                    } = (0, S.g)(),
                    { formatMessage: p } = (0, s.A)(),
                    { handlePinClick: g, handleExitClick: y, isExitPending: h } = (0, B.O)({ room: t, onRoomSuccessExit: u }),
                    x = (0, L.l)({ mainObjectType: c.DomainObjectType.NonApplicable });
                return (
                    (0, V.N)(_),
                    (0, n.useEffect)(() => {
                        if (_)
                            return (
                                x(!0),
                                () => {
                                    x(!1);
                                }
                            );
                    }, [_, x]),
                    (0, o.jsx)(w.W1, {
                        ...b,
                        isMobile: v,
                        offsetOptions: 10,
                        open: _,
                        onOpenChange: i,
                        ariaLabel: p({ id: 'interface-actions.context-menu' }),
                        containerDataTestId: d.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                        size: 's',
                        icon: (0, o.jsx)(k.I, { size: 'xxs', variant: 'more' }),
                        color: 'secondary',
                        variant: 'default',
                        className: m,
                        menuClassName: (0, a.$)(W().root, { [W().root_mobile]: v }),
                        children: (0, o.jsx)(U.J, { room: t, onRenameClick: r, isRenamePending: l, onPinClick: g, onExitClick: y, isExitPending: h }),
                    })
                );
            });
            var F = i(6323),
                $ = i(87490),
                K = i(2241),
                G = i.n(K);
            let H = (e) => {
                let { align: t, controls: i, src: a, isDisabled: r = !1, isMobileLayout: n = !1 } = e;
                return (0, o.jsx)($.b, {
                    align: t,
                    isDisabled: r,
                    overlay: i,
                    surfaceClassName: G().surface,
                    overlayClassName: G().overlay,
                    children: (0, o.jsx)(F.B, {
                        size: 200,
                        fit: 'cover',
                        className: G().image,
                        src: a,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: n ? 'xxxs' : 'l',
                    }),
                });
            };
            var Y = i(41359),
                Q = i.n(Y);
            let X = (0, r.PA)((e) => {
                var t, i, r, k;
                let { room: w, contentLinesCount: L = 3, className: V, withMobileLayout: B = !1, onRoomSuccessExit: D } = e,
                    { pageId: W } = (0, I.$)(),
                    { ref: U, intersectionPropertyId: F } = (0, f.n)(),
                    {
                        settings: { isMobile: $ },
                        multivibe: K,
                        user: G,
                        freeAccess: Y,
                    } = (0, S.g)(),
                    X = (0, p.P)(),
                    { sendPlaySearchFeedback: q } = (0, A.z)(),
                    [Z, J] = (0, n.useState)(!1),
                    ee = (0, M.A)(w.wave),
                    et = (0, x.b)(),
                    ei = (0, y.m)(),
                    eo = (0, h.N)(),
                    { state: ea, setState: er } = (0, m.e)(!1),
                    { state: en, setState: es } = (0, m.e)(!1),
                    { state: el, toggleTrue: ec, toggleFalse: ed } = (0, m.e)(!1),
                    { formatMessage: eu } = (0, s.A)(),
                    { editVibeRoom: e_, isPending: em } = (0, O.h)(w),
                    eb = B && $,
                    ev = (el || ea || en) && !$,
                    {
                        isPlaying: ep,
                        isPaused: eg,
                        togglePlay: ey,
                    } = (0, T.B)({ seeds: null != (k = null == (t = w.wave) ? void 0 : t.seeds) ? k : [], pageIdForFrom: W, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eh = eb && !w.isDisabled && (ep || eg),
                    ex = (0, u.c)(() => {
                        !(w.isDisabled || X()) &&
                            (Y.isVibeStartRestricted ||
                                (Z || ep || (J(!0), null == q || q()),
                                ey(),
                                et(!ep),
                                ei({
                                    actionType: ep ? c.ActionType.Pause : c.ActionType.Play,
                                    userInteractionType: c.UserInteractionType.Tap,
                                    objectType: c.DomainObjectType.Wave,
                                })));
                    }),
                    ef = (0, u.c)(async () => {
                        (ei({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await ee());
                    }),
                    eC = (0, u.c)(() => {
                        if (w.isDisabled) {
                            (K.setDisabledRoomId(w.id),
                                K.disabledRoomInfoModal.open(),
                                eo({ to: c.AppScreen.MultivibeUnifiedScreen, objectType: c.DomainObjectType.Link }));
                            return;
                        }
                        $ && ex();
                    }),
                    eI = (0, u.c)((e) => {
                        (e && eo({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), er(e), es(e));
                    }),
                    eA = (0, u.c)((e) => {
                        e.target === e.currentTarget && (e.code === j.v.SPACE || e.code === j.v.ENTER) && (e.preventDefault(), eC());
                    }),
                    [eT, eS] = (0, n.useState)(!1),
                    ej = (0, n.useCallback)(
                        (e) => {
                            (eS(!1), e_(e), ei({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }));
                        },
                        [e_, ei, eS],
                    ),
                    eN = (0, n.useCallback)(() => {
                        (eS(!0), eo({ to: c.AppScreen.MultivibeRenameScreen, objectType: c.DomainObjectType.Link }));
                    }, [eo, eS]),
                    eR = (0, _.L)(() =>
                        (0, o.jsx)(C.n, {
                            pageId: g._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.PageStyles.Sheet,
                            pagePlacement: c.PagePlacements.Bottom,
                            pageEntityId: '',
                            children: (0, o.jsx)(
                                z,
                                {
                                    room: w,
                                    onOpenChange: eI,
                                    open: ea,
                                    isRenamePending: em,
                                    onRenameClick: eN,
                                    returnFocus: !eT,
                                    className: (0, a.$)(Q().menuControl, Q().control, { [Q().menuControl_mobile]: eb }),
                                    onRoomSuccessExit: D,
                                    'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                w.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    eE = (0, _.L)(() => {
                        if (!w.isDisabled)
                            return (0, o.jsx)(
                                R.D,
                                {
                                    isPlaying: ep,
                                    onClick: ex,
                                    className: (0, a.$)(Q().playControl, Q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                w.getKey('PlayButton'),
                            );
                    }),
                    eP = (0, _.L)(() => {
                        var e;
                        if (!w.isDisabled)
                            return (0, o.jsx)(
                                N.O,
                                {
                                    isPinned: null == (e = w.wave) ? void 0 : e.isPinned,
                                    onClick: ef,
                                    className: (0, a.$)(Q().pinControl, Q().control, { [Q().pinControl_mobile]: eb }),
                                    withRipple: !1,
                                },
                                w.getKey('PinButton'),
                            );
                    }),
                    eO = w.isDisabled ? eu({ id: 'multivibe.room-status-disabled' }) : eu({ id: 'multivibe.room-status-enabled' }),
                    eM = eu({ id: 'entity-names.vibe-room-name' }, { name: w.name, status: eO }),
                    ek = w.owner.cover.uri,
                    ew = null == (i = w.members[0]) ? void 0 : i.cover.uri,
                    eL = (null == (r = w.owner) ? void 0 : r.uid) && w.owner.uid === G.puid,
                    eV = eL ? ek : ew,
                    eB = eL ? ew : ek,
                    eD = (0, _.L)(() =>
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(Q().avatarsWrapper, {
                                [Q().avatarsWrapper_mobile]: eb,
                                [Q().avatarsWrapper_disabled]: w.isDisabled,
                                [Q().avatarsWrapper_visible]: ev,
                            }),
                            children: [
                                (0, o.jsx)(H, {
                                    align: 'back',
                                    isDisabled: w.isDisabled,
                                    isMobileLayout: eb,
                                    src: eV,
                                    controls: (0, o.jsx)(b.hg, { isVisible: ev, className: Q().cardControls, radius: 'round', pinControl: eP }),
                                }),
                                (0, o.jsx)(H, {
                                    align: 'front',
                                    isDisabled: w.isDisabled,
                                    isMobileLayout: eb,
                                    src: eB,
                                    controls: (0, o.jsx)(b.hg, { isVisible: ev, className: Q().cardControls, radius: 'round', playControl: eE, menuControl: eR }),
                                }),
                                eh && (0, o.jsx)(E.P, { stopAnimation: eg, className: Q().playingAnimation }),
                            ],
                        }),
                    ),
                    eW = (0, _.L)(() =>
                        w.isDisabled
                            ? (0, o.jsxs)('span', {
                                  className: Q().unavailableStatus,
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, o.jsx)('span', { className: Q().unavailableStatusDot }),
                                      (0, o.jsx)(v.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, o.jsx)(l.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eU = (0, _.L)(() =>
                        eT
                            ? (0, o.jsx)('div', {
                                  className: Q().textFieldContainer,
                                  children: (0, o.jsx)(P.A, {
                                      text: w.name,
                                      className: Q().textField,
                                      onChangeFinish: ej,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: eu({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': d.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, o.jsx)(v.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: w.isDisabled ? 1 : 2,
                                  className: (0, a.$)(Q().roomName, { [Q().roomName_disabled]: w.isDisabled, [Q().roomName_mobile]: eb }),
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_NAME,
                                  children: w.name,
                              }),
                    );
                return (0, o.jsxs)(b.MN, {
                    ref: U,
                    className: (0, a.$)(Q().root, { [Q().root_mobile]: eb }, V),
                    contentLinesCount: eb ? 2 : L,
                    textPosition: eb ? 'left' : 'center',
                    'data-intersection-property-id': F,
                    wrapperClassName: (0, a.$)(Q().cardWrapper, { [Q().cardWrapper_mobile]: eb }),
                    view: eD,
                    'aria-label': eM,
                    tabIndex: 0,
                    onClick: eC,
                    onKeyDown: eA,
                    onFocus: ec,
                    onMouseEnter: ec,
                    onMouseLeave: ed,
                    onBlur: ed,
                    'data-test-id': d.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, o.jsxs)('div', { className: (0, a.$)(Q().roomInfo, { [Q().roomInfo_mobile]: eb }), 'aria-hidden': !0, children: [eU, eW] }), eb && eR],
                });
            });
        },
        6323: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var o = i(25839),
                a = i(74631),
                r = i(61493),
                n = i(23818);
            let s = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: a, forwardRef: s, ...l } = e;
                    return t
                        ? (0, o.jsx)(n._V, { ref: s, className: i, fallbackIconSize: a, ...l, 'data-test-id': r.S7.ENTITY_COVER_IMAGE })
                        : (0, o.jsx)(n.Ab, { className: i, iconSize: a, iconVariant: 'unavailable', 'data-test-id': r.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, a.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
        },
        6349: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => y });
            var o = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(61493),
                c = i(86869),
                d = i(4550),
                u = i(27954),
                _ = i(6323),
                m = i(49438),
                b = i(74987),
                v = i(37819),
                p = i.n(v);
            let g = (0, r.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: r,
                            coverUri: n,
                            title: v,
                            onPlayButtonClick: g,
                            isPlaying: y,
                            isCurrent: h,
                            radius: x,
                            isPlayButtonLoading: f,
                            isLoading: C,
                            shouldShowControl: I = !0,
                            ariaDescribedBy: A,
                            ignoreDislikedStyles: T,
                            entityCoverStyle: S,
                            forwardRef: j,
                            playButtonIconSize: N = 'xs',
                            alt: R,
                            withLoadingIndicator: E,
                            coverClassName: P,
                            entityCoverClassName: O,
                            controlClassName: M,
                            fallbackIconSize: k = 'xs',
                        } = e,
                        { formatMessage: w } = (0, s.A)(),
                        {
                            settings: { isMobile: L },
                        } = (0, u.g)();
                    return (0, o.jsx)('div', {
                        className: (0, a.$)(p().root, t, { [p().root_disabled]: !i, [p().root_current]: h, [p().root_disliked]: r && !T, [p().root_playing]: y }),
                        'data-test-id': l.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, o.jsxs)(c.t, {
                            className: (0, a.$)(p().cover, P),
                            radius: x,
                            children: [
                                (0, o.jsx)(_.B, {
                                    className: (0, a.$)(p().coverImage, O),
                                    src: n,
                                    size: 100,
                                    alt: null != R ? R : w({ id: 'entity-names.track-name' }, { trackName: v }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: k,
                                    style: S,
                                    withLoadingIndicator: E,
                                }),
                                I &&
                                    (0, o.jsxs)('div', {
                                        className: (0, a.$)(p().control, M),
                                        children: [
                                            !C && (0, o.jsx)(b.P, { stopAnimation: !y, className: p().playingAnimation }),
                                            C && L && (0, o.jsx)(d.y, { size: 'xs', className: p().spinner }),
                                            !L &&
                                                (0, o.jsx)(m.D, {
                                                    ref: j,
                                                    variant: 'filled',
                                                    className: (0, a.$)(p().playButton, { [p().playButton_loading]: f }),
                                                    iconClassName: p().playButtonIcon,
                                                    isPlaying: y,
                                                    onClick: g,
                                                    iconSize: N,
                                                    ariaDescribedBy: A,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                y = (0, n.forwardRef)((e, t) => (0, o.jsx)(g, { forwardRef: t, ...e }));
        },
        10126: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        12913: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var o,
                a = i(74631),
                r = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let o = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, o.useState)(e);
                            (0, o.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let a = (0, o.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                r = (0, o.useCallback)(() => {
                                    i(!0);
                                }, []),
                                n = (0, o.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: a, setState: i, toggleTrue: r, toggleFalse: n };
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (r[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                let e = s(810),
                    t = s(1676);
                l.l = (i) => {
                    let { isEnabled: o = !0, onClick: a, shouldStartFromUnscale: r } = i,
                        { state: n, toggleFalse: s, toggleTrue: l } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, t.useToggle)(!1),
                        _ = (0, e.useCallback)(
                            (e) => {
                                (null == a || a(e), o && (r ? u() : l()), e.stopPropagation(), e.preventDefault());
                            },
                            [o, a, r, l, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (s(), d());
                        }, [s, d]),
                        handleClick: _,
                        scaleAnimation: n,
                        unscaleAnimation: c,
                    };
                };
            })(),
                l.X);
            var c = l.l;
        },
        14693: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var o,
                a = i(74631),
                r = {
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                n = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var o = (n[t] = { exports: {} });
                    return (r[t](o, o.exports, e), o.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, o] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        o(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            o((e) => !e);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            o(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            o(!1);
                        }, []);
                    return { state: i, toggle: a, setState: o, toggleTrue: r, toggleFalse: n };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        15993: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var o = i(74631),
                a = i(84059),
                r = i(53712),
                n = i(27954);
            let s = () => {
                let e = (0, a.useRouter)(),
                    { user: t, paywall: i, multivibe: s } = (0, n.g)(),
                    [l, c] = (0, o.useState)(!1),
                    d = !s.isEnabled,
                    u = t.hasPlus,
                    _ = i.modal.isOpened,
                    m = !u && l && !_,
                    b = l && _;
                return (
                    (0, o.useEffect)(() => {
                        if (d || m) return void e.replace(r.Z.main.href);
                        l || u || _ || (i.openModal(), c(!0));
                    }, [u, d, _, l, i, e, m]),
                    { hasPlus: u, isPaywallBlocking: b }
                );
            };
        },
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var o = i(25839),
                a = i(8487),
                r = i(84059),
                n = i(61493),
                s = i(71035),
                l = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                _ = i(62562);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: b = !0, buttonText: v, isBlock: p, key: g, className: y } = e,
                    h = (0, r.useRouter)(),
                    x = (0, _.N)().get(u.QG),
                    f = (0, s.c)(() => {
                        x.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(x.authorizationUrl));
                    });
                return (0, o.jsx)(
                    l.$,
                    {
                        onClick: f,
                        className: y,
                        isBlock: p,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: b,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, o.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, o.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        19966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var o = i(79497);
            let a = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, o.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        20006: (e) => {
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
        20790: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var o = i(74631),
                a = i(73810);
            let r = () => (0, o.useContext)(a.P);
        },
        23775: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        24591: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => o });
            let o = (e) => String([...e].sort());
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
        30290: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => _ });
            var o = i(74631);
            i(93588);
            var a = i(26742),
                r = i(97952),
                n = i(84059),
                s = i(40110),
                l = i(22939),
                c = i(20258),
                d = i(98074);
            let u = [s.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: s, pageEntityId: l } = (0, r.$)(),
                                { blockId: c } = (0, a.N)();
                            return (0, o.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != i ? i : c, pageEntityId: null != n ? n : l }), [i, c, t, n, s, l]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, o.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        s = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: a, contextType: r, contextId: s, utmForPageIds: _ } = e,
                                m = (0, n.useSearchParams)();
                            return (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: o, utmForPageIds: a, contextId: r, contextType: n, blockId: s } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return l.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return l.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return l.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(i);
                                        return !m || !_ || !o || u.includes(s)
                                            ? null
                                            : (Array.isArray(a) ? a.map((e) => String(e)).includes(String(o)) : !!r && m === n && String(r) === String(o)) && _
                                              ? (0, d.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: a, utmForPageIds: _, contextId: s, contextType: r, blockId: i }),
                                [m, t, a, s, r, i, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, o.useMemo)(() => ({ from: i, utmLink: s || void 0 }), [i, s]);
                };
        },
        30296: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => a, e: () => r });
            var o = i(74631);
            let a = (0, o.createContext)(null);
            function r() {
                return (0, o.useContext)(a);
            }
        },
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var o = i(25839),
                a = i(88204),
                r = i(84059),
                n = i(82298),
                s = i(8487),
                l = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let _ = (0, a.PA)(() =>
                (0, o.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, o.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, o.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, o.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, o.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, o.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(53712),
                b = i(27954);
            let v = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, b.g)();
                return a.isAuthorized ? t : (i && (0, r.redirect)(m.Z.main.href), (0, o.jsx)(_, {}));
            });
        },
        31488: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => o });
            var o = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        32190: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var o = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                s = i(32942),
                l = i.n(s);
            let c = (0, r.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: r, columnClassName: s, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, n.useRef)(null),
                    m = t[i.index],
                    b = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, n.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, o.jsx)('div', {
                        'data-index': i.index,
                        ref: _,
                        style: b,
                        className: (0, a.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, o.jsx)('div', { className: s, children: r(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        32953: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = (0, i(74631).createContext)(null);
        },
        35015: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o });
            var o = (function (e) {
                return (
                    (e.ARTIST = 'artist'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.VIBE = 'vibe'),
                    (e.PODCAST = 'podcast'),
                    (e.PODCAST_EPISODE = 'podcast-episode'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.AUDIOBOOK_EPISODE = 'audiobook-episode'),
                    (e.FAIRY_TALE = 'fairy-tale'),
                    (e.CLIP = 'clip'),
                    e
                );
            })({});
        },
        35656: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionVibeRoomsPage: () => F });
            var o = i(25839),
                a = i(88204),
                r = i(74631),
                n = i(8487),
                s = i(44031),
                l = i(61493),
                c = i(4254),
                d = i(64715),
                u = i(1407),
                _ = i(15993),
                m = i(70154),
                b = i(20258),
                v = i(95858),
                p = i(10322),
                g = i(21784),
                y = i(89192),
                h = i(30716),
                x = i(27954),
                f = i(10603),
                C = i(39004),
                I = i(71035),
                A = i(49656),
                T = i(23818),
                S = i(13833),
                j = i(50176),
                N = i(59877),
                R = i(58222),
                E = i(3940),
                P = i(96382),
                O = i(83243),
                M = i(57138),
                k = i(95314),
                w = i(25895),
                L = i(97522),
                V = i(51868),
                B = i(6313);
            let D = (0, a.PA)((e) => {
                let { room: t } = e,
                    {
                        collection: { vibeRooms: i },
                    } = (0, x.g)(),
                    a = (0, I.c)(() => {
                        i.deleteRoomFromItems(t.id);
                    });
                return (0, o.jsx)(B.E, { room: t, contentLinesCount: 3, withMobileLayout: !0, onRoomSuccessExit: a });
            });
            var W = i(81176),
                U = i.n(W);
            let z = (0, a.PA)((e) => {
                    let { setContentScrollRef: t } = e,
                        {
                            collection: { vibeRooms: i },
                            settings: { isMobile: a },
                            multivibe: d,
                        } = (0, x.g)(),
                        { formatMessage: u } = (0, C.A)(),
                        _ = u({ id: 'loading-messages.entity-is-loading' }, { entityName: u({ id: 'page.vibe-rooms' }) }),
                        m = (0, I.c)(() => 315),
                        b = d.isOnboardingEnabled,
                        { href: v } = (0, w.u)('/slides/special/:campaignId', { params: { campaignId: 'wave_for_two' } }),
                        p = (0, O.l)({ mainObjectType: s.DomainObjectType.NonApplicable });
                    (0, r.useEffect)(
                        () => (
                            p(!0),
                            () => {
                                p(!1);
                            }
                        ),
                        [p],
                    );
                    let g = (0, I.c)(() => void 0),
                        y = (0, I.c)(() => (i.isResolved ? i.items.length + 1 : 4)),
                        h = i.items.length,
                        f = (0, I.c)((e) => {
                            var t, a;
                            if (!i.isResolved) return (0, o.jsx)(V.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 });
                            if (0 === e)
                                return (0, o.jsx)(M.F, {
                                    blockId: '',
                                    blockType: '',
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    children: (0, o.jsx)(k.B, {
                                        objectType: s.DomainObjectType.Shortcut,
                                        objectId: '',
                                        objectPosX: 0,
                                        objectPosY: 1,
                                        objectsCount: h,
                                        children: (0, o.jsx)(E.f, { withMobileLayout: !0 }),
                                    }),
                                });
                            let r = e - 1,
                                n = i.items[r];
                            return n
                                ? (0, o.jsx)(M.F, {
                                      blockId: '',
                                      blockType: '',
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      children: (0, o.jsx)(k.B, {
                                          objectType: s.DomainObjectType.Wave,
                                          objectId: null != (a = null == (t = n.wave) ? void 0 : t.seedsId) ? a : '',
                                          objectPosX: e,
                                          objectPosY: 1,
                                          objectsCount: h,
                                          children: (0, o.jsx)(D, { room: n }, n.id),
                                      }),
                                  })
                                : (0, o.jsx)(V.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 });
                        }),
                        B = (0, A.L)(() =>
                            (0, o.jsxs)('div', {
                                className: U().emptyContent,
                                'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY,
                                children: [
                                    (0, o.jsx)(R.t, { className: U().multivibeImage }),
                                    (0, o.jsx)(c.HL, {
                                        className: U().emptyContentTitle,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY_TITLE,
                                        children: (0, o.jsx)(n.A, { id: 'error-messages.empty-collection-vibe-rooms-title' }),
                                    }),
                                    (0, o.jsx)(j.M, { title: u({ id: 'interface-actions.copy-link' }) }),
                                ],
                            }),
                        ),
                        W = (0, A.L)(() =>
                            (0, o.jsx)('div', {
                                className: U().shimmerGrid,
                                children: Array.from({ length: 4 }, (e, t) => (0, o.jsx)(V.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 }, t)),
                            }),
                        ),
                        z = (0, A.L)(() =>
                            i.isLoading
                                ? W
                                : (0, o.jsx)(P.Q, {
                                      minColumnCount: a ? 1 : 2,
                                      maxColumnCount: a ? 1 : 7,
                                      count: y(),
                                      rowGap: 16,
                                      columnGap: 16,
                                      getEstimateRowSize: m,
                                      minColumnWidth: 170,
                                      maxColumnWidth: 270,
                                      onChangeRange: g,
                                      renderItemByIndex: f,
                                  }),
                        ),
                        F = (0, A.L)(() => (i.isResolved && i.isEmptyItems ? B : (0, o.jsx)('div', { className: U().gridContent, children: z }))),
                        $ = (0, A.L)(() =>
                            b
                                ? (0, o.jsxs)(L.N, {
                                      className: U().footer,
                                      href: v,
                                      'aria-label': u({ id: 'page.vibe-rooms-onboarding' }),
                                      children: [
                                          (0, o.jsx)(T._V, {
                                              className: U().onboardingImage,
                                              src: 'avatars.mds.yandex.net/get-music-misc/28592/img.6ac5050b5a32a672b2cdb08e/%%',
                                              size: 28,
                                              alt: '',
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              withAspectRatio: !0,
                                              withFallback: !1,
                                          }),
                                          (0, o.jsx)(N.j, { className: U().multivibeCoBrand }),
                                      ],
                                  })
                                : (0, o.jsx)('div', { className: U().footer, children: (0, o.jsx)(N.j, { className: U().multivibeCoBrand }) }),
                        );
                    return (0, o.jsxs)(S.N, {
                        ref: t,
                        className: U().root,
                        containerClassName: U().container,
                        'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_CONTENT,
                        children: [F, $],
                    });
                }),
                F = (0, a.PA)(() => {
                    let {
                            collection: { vibeRooms: e },
                            multivibe: t,
                        } = (0, x.g)(),
                        { contentScrollRef: i, setContentScrollRef: a } = (0, y.g)(),
                        C = (0, g.W)(),
                        { hasPlus: I, isPaywallBlocking: A } = (0, _.S)();
                    return ((0, r.useEffect)(() => {
                        if (I)
                            return (
                                e.isNeededToLoad && e.getData(),
                                () => {
                                    e.reset();
                                }
                            );
                    }, [I, e]),
                    (0, h.J)(e.isResolved),
                    A)
                        ? null
                        : e.isRejected
                          ? (0, o.jsx)(d.SomethingWentWrong, {})
                          : (0, o.jsx)(p.n, {
                                pageId: b._Q.COLLECTION_VIBE_ROOMS,
                                pageStyle: s.PageStyles.Fullscreen,
                                pagePlacement: s.PagePlacements.Fullscreen,
                                pageEntityId: '',
                                children: (0, o.jsx)(v.j, {
                                    children: (0, o.jsx)(u.h, {
                                        scrollElement: i,
                                        children: (0, o.jsxs)('div', {
                                            className: U().root,
                                            'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE,
                                            children: [
                                                (0, o.jsxs)(f.Y, {
                                                    variant: f.V.TEXT,
                                                    withForwardControl: !1,
                                                    withBackwardControl: C.canBack,
                                                    children: [
                                                        (0, o.jsx)(c.DZ, {
                                                            variant: 'h2',
                                                            weight: 'bold',
                                                            size: 'xl',
                                                            lineClamp: 1,
                                                            children: (0, o.jsx)(n.A, { id: 'page.vibe-rooms' }),
                                                        }),
                                                        t.isNDAEnabled && (0, o.jsx)(m.b, {}),
                                                    ],
                                                }),
                                                (0, o.jsx)(z, { setContentScrollRef: a }),
                                            ],
                                        }),
                                    }),
                                }),
                            });
                });
        },
        37052: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => r });
            var o = i(67541),
                a = i(24591);
            let r = (e, t) => (0, o.A)((0, a.f)(e), (0, a.f)(t));
        },
        37819: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithCover_root__s6Orw',
                coverImage: 'PlayButtonWithCover_coverImage__DhS1R',
                cover: 'PlayButtonWithCover_cover__5__Ms',
                playingAnimation: 'PlayButtonWithCover_playingAnimation__HWuOW',
                control: 'PlayButtonWithCover_control__iZy3t',
                playButton: 'PlayButtonWithCover_playButton__rV9pQ',
                playButton_loading: 'PlayButtonWithCover_playButton_loading__bqydK',
                'applying-setting': 'PlayButtonWithCover_applying-setting__ZvViA',
                root_current: 'PlayButtonWithCover_root_current__2QYEm',
                root_playing: 'PlayButtonWithCover_root_playing__tAgph',
                root_disabled: 'PlayButtonWithCover_root_disabled__EHoIx',
                root_disliked: 'PlayButtonWithCover_root_disliked__FoWzV',
                spinner: 'PlayButtonWithCover_spinner__ryn04',
                playButtonIcon: 'PlayButtonWithCover_playButtonIcon__DRjkN',
            };
        },
        40110: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var o = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        40489: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var o = i(26508),
                a = i(49656),
                r = i(28631),
                n = i(74631);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: o, totalCount: a, columnGap: r, minColumnCount: n, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((o + r) / (t + r))),
                    c = Math.max(n, Math.floor((o + r) / ((i + t) * 0.5 + r)));
                for (let e = n; e <= l; e++) {
                    let a = (o - (e - 1) * r) / e;
                    if (a >= t && a <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = s ? Math.min(c, s) : c)), columnCount: c };
            };
            var l = i(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: b,
                        containerRef: v,
                    } = e,
                    { rowCount: p, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: o, minColumnWidth: a, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, n.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, n.useRef)(null),
                            b = (0, n.useMemo)(
                                () =>
                                    (0, r.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: o,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, o, i, a, l],
                            );
                        return (
                            (0, n.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(b);
                                    })),
                                    t &&
                                        (_(
                                            s({
                                                minColumnWidth: a,
                                                maxColumnWidth: o,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, b, d, o, i, a, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: b, containerRef: v }),
                    { virtualizer: y, resizeObserver: h } = (0, l.r)({ count: p, getEstimateSize: i, gap: c, containerRef: v }),
                    x = (0, o.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    f = (0, a.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let i = null == (e = x[y.range.startIndex]) ? void 0 : e.at(0),
                            o = null == (t = x[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== o ? { startIndex: i, endIndex: o } : null;
                    });
                return { virtualizer: y, rowResizeObserver: h, indices: x, columnCount: g, visibleRange: f };
            };
        },
        41359: (e) => {
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
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        42966: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => y });
            var o = i(74631),
                a = i(67379),
                r = i(44031),
                n = i(20934),
                s = i(59450),
                l = i(49656),
                c = i(84e3),
                d = i(58069),
                u = i(20258),
                _ = i(26742),
                m = i(25195),
                b = i(25488),
                v = i(97952),
                p = i(10764),
                g = i(72594);
            let y = () => {
                let e = (0, s.st)(),
                    t = (0, c.U)(),
                    { hash: i } = (0, s.gf)(),
                    { pageId: y, pageStyle: h, pagePlacement: x } = (0, v.$)(),
                    { tabId: f, tabPos: C, isTabSelectedByDefault: I } = (0, g.R)(),
                    { offsetBlockPosY: A } = (0, m.u)(),
                    { blockId: T, blockType: S, blockPosX: j, blockPosY: N, mainObjectId: R, mainObjectType: E } = (0, _.N)(),
                    { objectId: P, objectPosX: O, objectPosY: M, objectType: k, objectsCount: w } = (0, b.J)(),
                    { skeleton: L } = (0, p.b)(),
                    V = (0, l.L)(() => (void 0 !== A && void 0 !== N ? A + N : N));
                return (0, o.useCallback)(
                    (o) => {
                        let { objectId: s, objectType: l, actionType: c, userInteractionType: _, objectPosX: m, objectPosY: b, objectCount: v } = o;
                        if (!e || !y || !u.xK.includes(y) || !u.fD.includes(y)) return;
                        let p = d.F[y];
                        if (!p) return;
                        let g = {
                            hash: i,
                            pageId: p,
                            pageStyle: h || r.PageStyles.Fullscreen,
                            pagePlacement: x || r.PagePlacements.Fullscreen,
                            entityType: S,
                            entityId: T,
                            entityPosX: j,
                            entityPosY: V,
                            objectId: null != s ? s : P,
                            objectType: null != l ? l : k,
                            objectPosX: null != m ? m : O,
                            objectPosY: null != b ? b : M,
                            objectsCount: null != v ? v : w,
                            actionType: c,
                            userInteractionType: null != _ ? _ : r.UserInteractionType.Tap,
                        };
                        (u.qG.includes(y) && ((g.tabId = f), (g.tabPos = C), (g.isTabSelectedByDefault = I)),
                            L && (g.skeletonId = L),
                            R && E && ((g.mainObjectType = E), (g.mainObjectId = R)));
                        let A = (0, a.F)({ params: g, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        A && (0, n.h_)(e.evgenInstance, A);
                    },
                    [P, k, O, M, w, e, y, i, h, x, S, T, j, V, L, R, E, t, f, C, I],
                );
            };
        },
        46616: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => _ });
            var o = i(25839),
                a = i(88204),
                r = i(8487),
                n = i(61493),
                s = i(66738),
                l = i(10820),
                c = i(4550),
                d = i(27954),
                u = i(67303);
            let _ = (0, a.PA)((e) => {
                var t;
                let { room: i, onRenameClick: a, isRenamePending: _, onPinClick: m, onExitClick: b, isExitPending: v, className: p } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, d.g)(),
                    y = !(null == i ? void 0 : i.isDisabled) && !g,
                    h = !(null == i ? void 0 : i.isDisabled) && !g;
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        y && (0, o.jsx)(u.L, { className: p, onClick: m, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        h &&
                            (0, o.jsx)(l.Dr, {
                                className: p,
                                icon: (0, o.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: a,
                                disabled: _,
                                spinner: _ ? (0, o.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': n.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, o.jsx)(r.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, o.jsx)(l.Dr, {
                            className: p,
                            icon: (0, o.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: b,
                            disabled: v,
                            spinner: v ? (0, o.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': n.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, o.jsx)(r.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        47009: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => y });
            var o = i(74631),
                a = i(67379),
                r = i(20934),
                n = i(59450),
                s = i(49656),
                l = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                _ = i(25195),
                m = i(25488),
                b = i(97952),
                v = i(10764),
                p = i(72594);
            let g = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.CONCERTS,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                    d._Q.COLLECTION_VIBE_ROOMS,
                    d._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    d._Q.MULTIVIBE_ACTION_SCREEN,
                    d._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                y = () => {
                    let e = (0, n.st)(),
                        t = (0, l.U)(),
                        { hash: i } = (0, n.gf)(),
                        { pageId: y } = (0, b.$)(),
                        { tabId: h, tabPos: x, isTabSelectedByDefault: f } = (0, p.R)(),
                        { offsetBlockPosY: C } = (0, _.u)(),
                        { blockId: I, blockType: A, blockPosX: T, blockPosY: S, mainObjectId: j, mainObjectType: N } = (0, u.N)(),
                        { objectId: R, objectPosX: E, objectPosY: P, objectType: O, objectsCount: M } = (0, m.J)(),
                        { skeleton: k } = (0, v.b)(),
                        w = (0, s.L)(() => (void 0 !== C && void 0 !== S ? C + S : S));
                    return (0, o.useCallback)(
                        (o, n) => {
                            if (!e || !y || !d.xK.includes(y) || !o || !g.includes(y)) return;
                            let s = c.F[y];
                            if (!s) return;
                            let l = {
                                hash: i,
                                pageId: s,
                                entityType: A,
                                entityId: I,
                                entityPosX: T,
                                entityPosY: w,
                                objectId: null != n ? n : R,
                                objectType: O,
                                objectPosX: E,
                                objectPosY: P,
                                objectsCount: M,
                            };
                            (d.qG.includes(y) && ((l.tabId = h), (l.tabPos = x), (l.isTabSelectedByDefault = f)),
                                k && (l.skeletonId = k),
                                j && N && ((l.mainObjectType = N), (l.mainObjectId = j)));
                            let u = (0, a.F)({ params: l, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, r.er)(e.evgenInstance, u);
                        },
                        [e, y, i, A, I, T, w, R, O, E, P, M, k, j, N, t, h, x, f],
                    );
                };
        },
        47538: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => a });
            var o = i(22939);
            function a(e) {
                return (null == e ? void 0 : e.data.type) === o.K.Vibe;
            }
        },
        49438: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var o = i(25839),
                a = i(88204),
                r = i(74631),
                n = i(39004),
                s = i(61493),
                l = i(71035),
                c = i(4071),
                d = i(66738),
                u = i(47009);
            let _ = (0, a.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: a,
                            variant: r = 'default',
                            isPlaying: _ = !1,
                            onClick: m,
                            iconClassName: b,
                            disabled: v,
                            color: p,
                            buttonVariant: g = 'text',
                            children: y,
                            radius: h = 'round',
                            withHover: x,
                            withRipple: f = !1,
                            ariaDescribedBy: C,
                            forwardRef: I,
                            tabIndex: A,
                            ariaHidden: T,
                            shouldSendAnalyticsOnPlayClick: S,
                        } = e,
                        j = (0, u.b)(),
                        { formatMessage: N } = (0, n.A)(),
                        R = ''.concat(_ ? 'pause' : 'play').concat('filled' === r ? '_filled' : ''),
                        E = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        P = N(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        O = (0, l.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == m || m(e), S && j(!_));
                        });
                    return (0, o.jsx)(c.$, {
                        className: i,
                        variant: g,
                        color: p,
                        radius: h,
                        size: a,
                        flexIcon: !0,
                        withRipple: f,
                        'aria-label': P,
                        onClick: O,
                        icon: (0, o.jsx)(d.I, { variant: R, size: t, className: b }),
                        disabled: v,
                        withHover: x,
                        'aria-describedby': C,
                        ref: I,
                        tabIndex: A,
                        'aria-hidden': T,
                        'data-test-id': E,
                        children: y,
                    });
                }),
                m = (0, r.forwardRef)((e, t) => (0, o.jsx)(_, { forwardRef: t, ...e }));
        },
        50314: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { h: () => o }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(o || (o = {})));
        },
        50390: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51124: (e) => {
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
        51514: (e, t, i) => {
            'use strict';
            i.d(t, { M1: () => o, UM: () => a, q7: () => n, yx: () => r });
            let o = 'user:onyourwave',
                a = ['activity'],
                r = 'diversity:reshuffle',
                n = 'multivibe';
        },
        51868: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => d });
            var o = i(25839),
                a = i(82298),
                r = i(23976),
                n = i(27954),
                s = i(87490),
                l = i(51124),
                c = i.n(l);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': l, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: u },
                    } = (0, n.g)(),
                    _ = d && u;
                return (0, o.jsxs)('div', {
                    'aria-label': l,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, o.jsx)(s.b, { align: 'back', children: (0, o.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, o.jsx)(s.b, { align: 'front', children: (0, o.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: (0, a.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, o.jsx)(r.W, { isActive: t, className: (0, a.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        52312: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var o = i(84361),
                a = i(74631),
                r = i(71035),
                n = i(89192),
                s = i(27954);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: m } = (0, n.g)(),
                        b = (0, a.useRef)(new Map()),
                        v = (0, a.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = b.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let o = t.getBoundingClientRect().top;
                                return e && 1 ? o + window.scrollY : !e && i ? o + i.scrollTop : 0;
                            })(_, d, m),
                        },
                        g = (0, o.XW)(p),
                        y = (0, o.Te)({ ...p, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        h = _ ? g : y,
                        x = (0, r.c)(() => {
                            h.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let o = e.contentRect.height;
                                            o && o !== b.current.get(i) && (b.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && x());
                                }));
                        }, [x]),
                        { virtualizer: h, resizeObserver: v.current }
                    );
                };
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var o = i(25895);
            let a = {
                main: (0, o.u)('/'),
                chart: (0, o.u)('/chart'),
                chartPodcasts: (0, o.u)('/chart/podcasts'),
                collection: (0, o.u)('/collection'),
                collectionAlbums: (0, o.u)('/collection/albums'),
                collectionArtists: (0, o.u)('/collection/artists'),
                collectionClips: (0, o.u)('/collection/clips'),
                collectionDislikes: (0, o.u)('/collection/dislikes'),
                collectionKids: (0, o.u)('/collection/kids'),
                collectionKidsAlbums: (0, o.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, o.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, o.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, o.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, o.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, o.u)('/collection/multivibes'),
                collectionPlaylists: (0, o.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, o.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, o.u)('/collection/playlists/liked'),
                collectionShelf: (0, o.u)('/collection/shelf'),
                collectionShelfLiked: (0, o.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, o.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, o.u)('/collection/shelf/recently-played'),
                concerts: (0, o.u)('/concerts'),
                kids: (0, o.u)('/kids'),
                mixes: (0, o.u)('/mixes'),
                musicHistory: (0, o.u)('/music-history'),
                muzmarket: (0, o.u)('/muzmarket'),
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                multivibe: (0, o.u)('/multivibe'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
            };
        },
        56120: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var o = i(74631),
                a = i(20790);
            let r = (e) => {
                let t = (0, o.useRef)(!1),
                    i = (0, a.z)();
                (0, o.useEffect)(() => {
                    (e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1)));
                }, [e, i]);
            };
        },
        57138: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => n });
            var o = i(25839),
                a = i(74631),
                r = i(14482);
            let n = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: n,
                        blockPosX: s,
                        blockPosY: l,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    b = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: n,
                            blockPosX: s,
                            blockPosY: l,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, n, s, l, c, d, u, m],
                    );
                return (0, o.jsx)(r.p.Provider, { value: b, children: _ });
            };
        },
        57549: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => d });
            var o = i(25839),
                a = i(82298),
                r = i(69084),
                n = i(4254),
                s = i(51790),
                l = i(23775),
                c = i.n(l);
            let d = (e) => {
                let { error: t, closeToast: i, className: l } = e;
                return (0, o.jsx)(s.$, {
                    className: (0, a.$)(c().root, l),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(r.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, o.jsx)(n.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => P });
            var o = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                _ = i(67379),
                m = i(44031),
                b = i(87277),
                v = i(59450),
                p = i(84e3),
                g = i(97952),
                y = i(89192),
                h = i(53712),
                x = i(27954),
                f = i(44806),
                C = i(15270),
                I = i(23818),
                A = i(85686);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = i(27990),
                j = i.n(S);
            let N = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: r } = (0, x.g)(),
                    { contentRef: n } = (0, y.g)(),
                    s = (0, A.Z)(h.Z.mymusicDownloadsTracks.href);
                return (0, o.jsxs)('div', {
                    className: (0, a.$)(j().root, t),
                    children: [
                        i &&
                            (0, o.jsx)(C.L, { withBackwardFallback: '/', className: (0, a.$)(j().navigation, { [j().navigation_desktop]: !n }), withForwardControl: !1 }),
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(j().content, { [j().content_shrink]: !i }),
                            children: [
                                (0, o.jsx)(I._V, { className: j().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, o.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, o.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, o.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, o.jsx)(c.$, {
                                        className: j().button,
                                        onClick: s,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var R = i(68854),
                E = i.n(R);
            let P = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, s.A)(),
                    I = (0, n.useContext)(x.P),
                    A = null == I ? void 0 : I.experiments.checkExperiment(f.z.WebNextUnstableMusicScreen, 'on'),
                    T = r(A ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: i } = (0, v.gf)(),
                        { pageId: o } = (0, g.$)(),
                        a = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !o) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: o,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, b.z5)(t.evgenInstance, r);
                    }, [t, e, i, o, a]);
                })(T);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: i } = (0, g.$)(),
                            o = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, b.bv)(e.evgenInstance, a);
                            }, [e, t, i, o]),
                        };
                    })(),
                    j = (0, n.useCallback)(() => {
                        (S(), (window.location.href = h.Z.main.href));
                    }, [S]),
                    { contentRef: R } = (0, y.g)();
                return A
                    ? (0, o.jsx)(N, { className: t, withBackwardControl: i })
                    : (0, o.jsxs)('div', {
                          className: (0, a.$)(E().root, t),
                          children: [
                              i &&
                                  (0, o.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(E().navigation, { [E().navigation_desktop]: !R }),
                                      withForwardControl: !1,
                                  }),
                              (0, o.jsxs)('div', {
                                  className: (0, a.$)(E().content, { [E().content_shrink]: !i }),
                                  children: [
                                      (0, o.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                      (0, o.jsx)(u.DZ, { className: (0, a.$)(E().title, E().important), variant: 'h3', size: 'xs', children: T }),
                                      (0, o.jsxs)(u.HL, {
                                          className: (0, a.$)(E().text, E().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, o.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, o.jsx)(c.$, {
                                          onClick: j,
                                          className: E().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, o.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, o.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
        69084: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var o,
                a = i(74631),
                r = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (a && (a += ' '), (a += o));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => a }));
                        let a = o;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var r in ((o = {}), t)) 'key' !== r && (o[r] = t[r]);
                            else o = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = i(4377),
                            r = i(5881),
                            n = i(810),
                            s = o(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: o, ...l } = e,
                                c = (0, r.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, n.isValidElement)(o)
                                ? (0, n.cloneElement)(o, { ...l, className: (0, r.clsx)(c, o.props.className) })
                                : (0, a.jsx)('span', { className: c, ...l, children: o });
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (r[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = s(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            let o = (e) => ({ uri: e.uri, color: e.color });
        },
        73723: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        73810: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            let o = (0, i(74631).createContext)(null);
        },
        74987: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var o = i(25839),
                a = i(82298),
                r = i(61493),
                n = i(97825),
                s = i.n(n);
            let l = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, o.jsx)('div', { className: (0, a.$)(s().root, { [s().root_stopAnimation]: i }, t), 'data-test-id': r.S7.PLAYING_ANIMATION });
            };
        },
        75159: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => S });
            var o = i(25839),
                a = i(33660),
                r = i(74631),
                n = i(39004),
                s = i(98436),
                l = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(82298),
                m = i(88204),
                b = i(61493),
                v = i(49656),
                p = i(23818),
                g = i(44806),
                y = i(51514),
                h = i(35015),
                x = i(10546),
                f = i(86209),
                C = i(97779),
                I = i.n(C);
            let A = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: a } = (0, d.g)(),
                    r = a.checkExperiment(g.z.WebNextWaveAgentExperiment, 'on'),
                    n = t.type === y.q7,
                    s = (0, v.L)(() => {
                        var e;
                        return r && t.agent
                            ? (0, o.jsx)(f.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(I().view, { [I().multivibeContainer]: n }),
                                  coverClassName: (0, _.$)({ [I().multivibeCover]: n }),
                                  entityCoverClassName: (0, _.$)({ [I().multivibeAvatar]: n }),
                                  controlClassName: (0, _.$)({ [I().multivibeControl]: n }),
                              })
                            : (0, o.jsx)(p._V, {
                                  className: I().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': b.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = r && t.agent ? void 0 : 'round';
                return (0, o.jsx)(x.k, {
                    closeToast: i,
                    entityVariant: h.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: I().root,
                });
            });
            var T = i(19966);
            let S = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [b, v] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, o.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (b) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        n = (0, a.HO)(i.get(e.pinId));
                    v(!0);
                    let c = await e.togglePin();
                    (v(!1),
                        n &&
                            n.type === s._.WAVE_ITEM &&
                            n.data.backgroundImageUrl &&
                            ((r.backgroundImageUrl = n.data.backgroundImageUrl), (r.colors = n.data.colors), (r.agent = n.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (r.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (r.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (r.agent = (0, T.K)(c.data.agent))),
                        c
                            ? _((0, o.jsx)(A, { vibe: r }), { containerId: l.u.INFO })
                            : _((0, o.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, b, i, t.isAuthorized, e]);
            };
        },
        78453: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var o = i(25839),
                a = i(74631),
                r = i(39004),
                n = i(71035),
                s = i(91149),
                l = i(92942),
                c = i(31488),
                d = i(57549);
            let u = (e) => {
                let [t, i] = (0, a.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    _ = (0, a.useRef)(!1),
                    { formatMessage: m } = (0, r.A)();
                return {
                    editVibeRoom: (0, n.c)(async (t) => {
                        e &&
                            !_.current &&
                            (i(!0),
                            (_.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                u((0, o.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (_.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        79367: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => b });
            var o = i(25839),
                a = i(71035),
                r = i(8487),
                n = i(4254),
                s = i(51790),
                l = i(50390),
                c = i.n(l);
            let d = () =>
                (0, o.jsx)(s.$, {
                    message: (0, o.jsx)(n.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, o.jsx)(r.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = i(91149),
                _ = i(92942),
                m = i(27954);
            let b = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, a.c)(() => (t.isAdvertShown && e((0, o.jsx)(d, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        79497: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => r });
            var o = i(28410),
                a = i(73544);
            let r = (e) => {
                let t = (0, a.e)(e);
                return (0, o.wg)(t);
            };
        },
        81176: (e) => {
            e.exports = {
                root: 'CollectionVibeRoomsPage_root__rXIRS',
                container: 'CollectionVibeRoomsPage_container__EjxoE',
                shimmerGrid: 'CollectionVibeRoomsPage_shimmerGrid__vgYVO',
                gridContent: 'CollectionVibeRoomsPage_gridContent__Og3pw',
                emptyContent: 'CollectionVibeRoomsPage_emptyContent___1jjx',
                footer: 'CollectionVibeRoomsPage_footer__LaC0Q',
                multivibeCoBrand: 'CollectionVibeRoomsPage_multivibeCoBrand__qm6aU',
                onboardingImage: 'CollectionVibeRoomsPage_onboardingImage__lde_N',
                multivibeImage: 'CollectionVibeRoomsPage_multivibeImage__NFs_8',
                emptyContentTitle: 'CollectionVibeRoomsPage_emptyContentTitle__Hv_Vp',
            };
        },
        83065: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var o = i(90887),
                a = i(52830),
                r = i(27954);
            let n = (e) => {
                let { location: t } = (0, r.g)();
                return (0, o.r)(e, t.tld, a.B);
            };
        },
        85743: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var o = i(74631),
                a = i(91879),
                r = i(32953);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: n, position: s } = (0, o.useContext)(r.N) || {};
                if (void 0 === t || void 0 === i || void 0 === n || void 0 === s) return {};
                let l = null == e ? void 0 : e.bind(null, { feedbackType: a.n.LIKE, id: t, type: i, blockPosition: n, position: s });
                return {
                    sendLikeSearchFeedback: l,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.NAVIGATE, id: t, type: i, blockPosition: n, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.PLAY, id: t, type: i, blockPosition: n, position: s }),
                };
            };
        },
        86209: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var o = i(25839),
                a = i(82298),
                r = i(50314),
                n = i(49656),
                s = i(6349),
                l = i(4111),
                c = i.n(l);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: b,
                        coverClassName: v,
                        entityCoverClassName: p,
                        controlClassName: g,
                        fallbackIconSize: y,
                    } = e,
                    h = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === r.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, o.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(c().root, c()['root_radius_'.concat(h)], { [c().root_withShadow]: !!t.entityType }, b),
                    radius: h,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: y,
                    coverClassName: v,
                    entityCoverClassName: p,
                    controlClassName: g,
                });
            };
        },
        87201: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => x });
            var o = i(25839),
                a = i(74631),
                r = i(39004),
                n = i(47538),
                s = i(22939),
                l = i(24591),
                c = i(71035),
                d = i(16886),
                u = i(57549),
                _ = i(30290),
                m = i(91149),
                b = i(92942),
                v = i(27954),
                p = i(51514);
            let g = 'radio';
            var y = i(37052),
                h = i(30296);
            let x = (e) => {
                var t, i;
                let { seeds: x = [p.M1], pageIdForFrom: f, blockIdForFrom: C, onPlayInterrupted: I, parentContextId: A } = e,
                    { from: T } = (0, _.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(g)) || t.includes(g)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(g) })(f, C),
                    ),
                    { formatMessage: S } = (0, r.A)(),
                    j = (0, h.e)(),
                    { notify: N } = (0, b.l)(),
                    { sonataState: R, vibe: E, fullscreenPlayer: P, user: O, freeAccess: M } = (0, v.g)(),
                    [k, w] = (0, a.useState)(null),
                    L = (0, c.c)(() => (P.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR));
                ((0, a.useEffect)(() => {
                    let e =
                        null == j
                            ? void 0
                            : j.state.currentContext.onChange(() => {
                                  (0, n.i)(j.state.currentContext.value) ? w(j.state.currentContext.value) : w(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [j]),
                    (0, a.useEffect)(() => {
                        let e =
                            null == k
                                ? void 0
                                : k.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == k || null == (e = k.observableActiveSession.value) ? void 0 : e.wave) &&
                                          E.setVibe(null == k || null == (t = k.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [k, E]));
                let V = (0, c.c)(async (e) => {
                        try {
                            await (null == j
                                ? void 0
                                : j.playContext({
                                      contextData: {
                                          type: s.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: T,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: A,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            N((0, o.jsx)(u.h, { error: S({ id: 'vibe-errors.start-vibe' }) }), { containerId: L() });
                        }
                    }),
                    B = (0, c.c)(async (e) => {
                        if (j && k)
                            try {
                                await k.setSettings({ seeds: e, queueState: j.state.queueState, interactive: !0, from: T });
                            } catch (e) {
                                N((0, o.jsx)(u.h, { error: S({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: L() });
                            }
                    }),
                    D = (0, c.c)(async (e) => {
                        if (j)
                            try {
                                await j.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                N((0, o.jsx)(u.h, { error: S({ id: 'error-messages.something-went-wrong' }) }), { containerId: L() });
                            }
                    }),
                    W = !!k,
                    U = W && (0, y._)(null != (i = null == (t = E.meta) ? void 0 : t.seeds) ? i : [], x),
                    z = U && R.status === d.MT.PLAYING,
                    F = U && R.status === d.MT.PAUSED;
                (0, a.useEffect)(() => {
                    z && E.setIsApplying(!1);
                }, [z, E]);
                let $ = (0, c.c)(async () => {
                        if (!z && (M.isFreeWebUser || !O.isAuthorized)) {
                            null == I || I();
                            return;
                        }
                        (E.setIsApplying(!0), await V(x), E.setIsApplying(!1));
                    }),
                    K = (0, c.c)(async (e, t) => {
                        var i;
                        E.setIsApplying(!0);
                        let o = [];
                        if (E.meta && Array.isArray(null == (i = E.meta) ? void 0 : i.seeds))
                            if (E.meta.seeds.includes(e)) o = E.meta.seeds.filter((t) => t !== e);
                            else if (t) o = [e, ...E.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                o = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...E.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...E.meta.seeds, e]
                                    : [...E.meta.seeds];
                            }
                        else o = [e];
                        (k ? (await B(o), await D(!0)) : await V(o), E.setIsApplying(!1));
                    });
                return {
                    isVibeContext: W,
                    isPlaying: z,
                    isPaused: F,
                    isCurrent: U,
                    togglePlay: $,
                    resetContext: (0, c.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [p.M1];
                        (E.setIsApplying(!0), k ? (await B(e), await D(!0)) : await V(e), E.setIsApplying(!1));
                    }),
                    applySetting: K,
                };
            };
        },
        87490: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var o = i(25839),
                a = i(82298),
                r = i(20006),
                n = i.n(r);
            let s = (e) => {
                let { align: t, children: i, overlay: r, isDisabled: s = !1, className: l, surfaceClassName: c, overlayClassName: d } = e,
                    u = 'back' === t;
                return (0, o.jsxs)('span', {
                    className: (0, a.$)(n().root, u ? n().root_back : n().root_front, l),
                    children: [
                        (0, o.jsxs)('span', {
                            className: (0, a.$)(n().circle, { [n().circle_back]: u, [n().circle_disabled]: s }),
                            children: [(0, o.jsx)('span', { className: (0, a.$)(n().surface, c), children: i }), d && (0, o.jsx)('span', { className: d })],
                        }),
                        r,
                    ],
                });
            };
        },
        90290: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => s });
            var o = i(88204),
                a = i(84059),
                r = i(53712),
                n = i(27954);
            let s = (0, o.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, n.g)();
                return (i.isEnabled || (0, a.redirect)(r.Z.main.href), t);
            });
        },
        91879: (e, t, i) => {
            'use strict';
            var o, a;
            (i.d(t, { n: () => a, o: () => o }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(o || (o = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(a || (a = {})));
        },
        95213: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => b });
            var o = i(44031),
                a = i(71035),
                r = i(42966),
                n = i(25839),
                s = i(74631),
                l = i(39004),
                c = i(91149),
                d = i(92942),
                u = i(31488),
                _ = i(57549),
                m = i(75159);
            let b = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    b = (0, m.A)(null == t ? void 0 : t.wave),
                    { exitVibeRoom: v, isPending: p } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [o, r] = (0, s.useState)(!1),
                            { notify: m } = (0, d.l)(),
                            b = (0, s.useRef)(!1),
                            { formatMessage: v } = (0, l.A)();
                        return {
                            exitVibeRoom: (0, a.c)(async () => {
                                t &&
                                    !b.current &&
                                    (r(!0),
                                    (b.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === u.F.ERROR
                                        ? m((0, n.jsx)(_.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR })
                                        : i(),
                                    r(!1),
                                    (b.current = !1));
                            }),
                            isPending: o,
                        };
                    })({ room: t, onRoomSuccessExit: i }),
                    g = (0, r.m)();
                return {
                    handleExitClick: (0, a.c)(async () => {
                        (g({ actionType: o.ActionType.Remove, userInteractionType: o.UserInteractionType.Tap, objectType: o.DomainObjectType.Wave }), await v());
                    }),
                    handlePinClick: (0, a.c)(async () => {
                        (g({ actionType: o.ActionType.Pin, userInteractionType: o.UserInteractionType.Tap, objectType: o.DomainObjectType.Wave }), await b());
                    }),
                    isExitPending: p,
                };
            };
        },
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => n });
            var o = i(25839),
                a = i(74631),
                r = i(66192);
            let n = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, n, s, l, c, d, u],
                    );
                return (0, o.jsx)(r.l.Provider, { value: m, children: _ });
            };
        },
        95858: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var o = i(25839),
                a = i(74631),
                r = i(59342),
                n = i(91886),
                s = i(13232);
            let l = (e) => {
                let { children: t } = e,
                    i = (0, a.useRef)({}),
                    l = (0, a.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    o = i.current[t];
                                if (o) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, r.A)());
                                            (o.callback(!0, e), (o.showed = !0), (o.viewUuid = e));
                                        }, 1e3);
                                        o.timerId = e;
                                    }
                                    (!e.isIntersecting && o.showed && (o.callback(!1, o.viewUuid), (o.showed = !1), (o.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(o.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, a.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, a.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, a.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, a.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, o.jsx)(s.B.Provider, { value: u, children: t });
            };
        },
        96382: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var o = i(25839),
                a = i(88204),
                r = i(74631),
                n = i(68934),
                s = i(40489),
                l = i(32190),
                c = i(10126),
                d = i.n(c);
            let u = (0, a.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: b,
                        renderItemByIndex: v,
                        onChangeRange: p,
                    } = e,
                    [g, y] = (0, n.d)(),
                    {
                        virtualizer: h,
                        rowResizeObserver: x,
                        columnCount: f,
                        indices: C,
                    } = (0, s.L)({
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: b,
                        containerRef: g,
                    });
                (0, r.useEffect)(() => {
                    !h.isScrolling && h.range && (null == p || p(h.range, f));
                }, [p, h.isScrolling, h.range, f]);
                let I = { '--virtual-grid-height': ''.concat(h.getTotalSize(), 'px'), '--virtual-grid-column-count': f };
                return (0, o.jsx)('div', {
                    ref: y,
                    style: I,
                    className: d().root,
                    children: h
                        .getVirtualItems()
                        .map((e) =>
                            (0, o.jsx)(
                                l.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: x,
                                    indices: C,
                                    renderItemByIndex: v,
                                    scrollMargin: h.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        96876: (e) => {
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
        97779: (e) => {
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
        97825: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        98074: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            let o = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                a = (e) =>
                    o.reduce((t, i) => {
                        let { queryKey: o, resultKey: a } = i;
                        return ('string' == typeof e[o] && (t[a] = e[o]), t);
                    }, {});
        },
        98436: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { _: () => o }),
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
                })(o || (o = {})));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8803, 3349, 6287, 6749, 7170, 8899, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 4361, 1186, 2038, 4163, 3246, 7848, 3482, 6680,
                2247, 4345, 8836, 820, 4434, 8372, 3674, 8374, 4475, 5056, 7358,
            ],
            () => e((e.s = 6137)),
        ),
            (_N_E = e.O()));
    },
]);
