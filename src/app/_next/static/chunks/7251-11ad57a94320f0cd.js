(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7251],
    {
        92496: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a, i: () => n });
            var s = i(55178);
            let a = (0, s.createContext)(null);
            function n() {
                return (0, s.useContext)(a);
            }
        },
        1613: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var a = i(6612);
            let n = (e, t, i) =>
                t(
                    e === a.pM.NONE || i
                        ? { id: 'player-actions.repeat' }
                        : e === a.pM.ONE
                          ? { id: 'player-actions.repeat-one' }
                          : { id: 'player-actions.repeat-context' },
                );
        },
        9885: (e) => {
            e.exports = { icon: 'NotificationRepeat_icon__WCf4_', message: 'NotificationRepeat_message__jCngy', icon_unset: 'NotificationRepeat_icon_unset__z2fmU' };
        },
        10910: (e, t, i) => {
            'use strict';
            i.d(t, { GQ: () => O, f8: () => L, p$: () => R });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(39407),
                o = i(60900),
                u = i(21732),
                d = i(76232),
                c = i(44989),
                _ = i(63423),
                p = i(82586),
                m = i(19740),
                C = i(74196),
                E = i(26490),
                A = i(78091),
                y = i(70204),
                g = i(34186),
                B = i(45477),
                h = i(75582),
                b = i(27120),
                x = i(81218),
                N = i(57594),
                D = i(19379),
                v = i(32156),
                F = i(90829),
                T = i(78297),
                S = i(31926),
                I = i(98602),
                f = i.n(I);
            let O = [
                    {
                        type: d.e.HIGH_QUALITY,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: d.e.BALANCED,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: d.e.EFFICIENT,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                L = {
                    [d.e.HIGH_QUALITY]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [d.e.BALANCED]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [d.e.EFFICIENT]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                R = (0, s.PA)((e) => {
                    let { onOpenChange: t, open: i, placement: s, size: d, referenceClassName: I, icon: R, referenceLabel: k, disabled: j } = e;
                    (0, b.N)(i);
                    let M = (0, r.useId)(),
                        { formatMessage: q } = (0, o.A)(),
                        { notify: z } = (0, h.l)(),
                        P = (0, g.N)().get(y.oo),
                        {
                            sonataState: w,
                            user: V,
                            settings: { isMobile: Q },
                            quality: G,
                        } = (0, N.g)(),
                        U = (0, E.S)(),
                        K = (0, x.g)(),
                        H = (0, T.$)(),
                        { state: Y, setState: $ } = (0, c.e)(!1),
                        W = (0, r.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        X = (0, r.useCallback)(
                            (e) => {
                                H(e, w.quality), w.setQuality(e), null == K || K.setQuality(e), P.set(D.c.YmPlayerQuality, e, { expires: 365 });
                            },
                            [K, w, P, H],
                        ),
                        Z = (0, r.useCallback)(
                            (e) => {
                                let t = q({ id: e }).toLowerCase();
                                return {
                                    message: (0, a.jsx)(l.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                    ariaLabel: q({ id: 'notifications-info.quality-changed' }, { quality: t }),
                                };
                            },
                            [q],
                        ),
                        J = (0, r.useCallback)(
                            (e, t) => () => {
                                if (w.quality === e) return;
                                X(e);
                                let { message: i, ariaLabel: n } = Z(t);
                                z((0, a.jsx)(S.J, { onOpenQualitySettingsMenu: W, message: i, ariaLabel: n, isMobile: Q }), { containerId: B.u.INFO });
                            },
                            [Z, W, z, w.quality, X, Q],
                        ),
                        ee = (0, r.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: i, qualityMessageId: s, ariaSelected: r, text: l } = e;
                                return (e) => {
                                    let { isPopoverEnabled: o, popoverText: u } = e;
                                    return (0, a.jsx)(m.Dr, {
                                        isBlock: !0,
                                        disabled: o,
                                        className: (0, n.$)(f().item, f().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: J(i, s),
                                        role: 'option',
                                        'aria-selected': r,
                                        children: (0, a.jsxs)('span', {
                                            className: f().itemWrapper,
                                            children: [
                                                (0, a.jsxs)('span', { className: f().item_option, children: [l, ' ', (0, a.jsx)(C.q, { children: u })] }),
                                                (0, a.jsx)('span', { className: (0, n.$)(f().item_option, f().itemSubTitle), children: L[i] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [J],
                        ),
                        et = !V.hasPlus,
                        ei = (0, r.useMemo)(
                            () =>
                                O.map((e) => {
                                    let { type: t, text: i, qualityMessageId: n } = e,
                                        s = t === w.quality ? (0, a.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null,
                                        r = t === w.quality;
                                    return (0, a.jsx)(
                                        v.S,
                                        {
                                            isNested: !0,
                                            isEnabled: et && !Q,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: ee({ selectedItemIcon: s, type: t, qualityMessageId: n, ariaSelected: r, text: i }),
                                        },
                                        t,
                                    );
                                }),
                            [w.quality, et, Q, ee],
                        ),
                        ea = (0, r.useMemo)(
                            () => ({
                                listClassName: (0, n.$)(f().root, f().root_withNewQuality, { [f().root_withEqualizer]: U.isAvailable }),
                                menuClassName: (0, n.$)({ [f().menuContent]: !Q }),
                            }),
                            [U.isAvailable, Q],
                        ),
                        en = (0, r.useMemo)(() => {
                            if (U.isAvailable && !Q)
                                return (0, a.jsx)(A.r, { isExpanded: U.isEnabled, isDisabled: !1, className: f().equalizer, title: q({ id: 'equalizer.title' }) }, M);
                        }, [U.isEnabled, M, q, U.isAvailable, Q]),
                        es = (0, r.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: r } = e;
                                if (!Q)
                                    return (0, a.jsx)(_.$, {
                                        className: (0, n.$)(I, { [f().button_active]: G.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: d,
                                        icon: R,
                                        variant: 'text',
                                        onClick: G.modal.open,
                                        'aria-label': q({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        'data-test-id': u.e8.player.SOUND_QUALITY_BUTTON,
                                    });
                                let l = r ? $ : t;
                                return (0, a.jsx)(m.W1, {
                                    wrapperClassName: I,
                                    size: d,
                                    icon: R,
                                    placement: s,
                                    open: i,
                                    onOpenChange: l,
                                    ariaLabel: q({ id: 'player-actions.audio-quality' }),
                                    footer: en,
                                    label: k,
                                    variant: 'text',
                                    ...ea,
                                    containerProps: { 'data-test-id': u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU },
                                    isMobile: Q,
                                    lockScroll: !Q,
                                    disabled: j,
                                    'data-test-id': u.e8.player.SOUND_QUALITY_BUTTON,
                                    children: ei,
                                });
                            },
                            [Q, $, t, I, d, R, s, i, q, en, k, ea, ei, G.modal.open, G.modal.isOpened, j],
                        );
                    return (0, a.jsx)(F.Z, {
                        isEnabled: !V.isAuthorized,
                        isOpened: Y,
                        onOpenChange: $,
                        placement: 'top',
                        textVariant: 'changeQuality',
                        renderChildren: es,
                    });
                });
        },
        19267: (e) => {
            e.exports = {
                root: 'QualitySettingsModal_root__f3gE2',
                modalContent: 'QualitySettingsModal_modalContent__R_JNT',
                overlay: 'QualitySettingsModal_overlay__8pjOO',
                button: 'QualitySettingsModal_button__BCHBi',
            };
        },
        30743: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => A });
            var a = i(32290),
                n = i(55178),
                s = i(60900),
                r = i(79490),
                l = i(11051),
                o = i(91027),
                u = i(86806),
                d = i(45477),
                c = i(75582),
                _ = i(44128),
                p = i(57594),
                m = i(90357),
                C = i(75783),
                E = i(17705);
            let A = () => {
                var e, t;
                let { sonataState: i } = (0, p.g)(),
                    A = (0, E.K)(i.entityMeta),
                    y = (0, C.m)(i.entityMeta),
                    {
                        isGenerativeLiked: g,
                        isGenerativeDisliked: B,
                        onGenerativeLikeClick: h,
                        onGenerativeDislikeClick: b,
                    } = (() => {
                        let {
                                sonataState: { entityMeta: e },
                                user: t,
                                fullscreenPlayer: i,
                            } = (0, p.g)(),
                            C = (0, _.e)(),
                            { notify: E } = (0, c.l)(),
                            { formatMessage: A } = (0, s.A)(),
                            [y, g] = (0, n.useState)(!1),
                            { state: B, handleDebouncedToggle: h, reset: b } = (0, u.F)({ delay: 1e4, throttleTimeout: 0 }),
                            { state: x, handleDebouncedToggle: N, reset: D } = (0, u.F)({ delay: 1e4, throttleTimeout: 0 }),
                            v = (0, o.c)(() => {
                                b(), D();
                            });
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.id) && v();
                        }, [null == e ? void 0 : e.id, v]);
                        let F = (0, o.c)(async (n) => {
                            if (y || !e || !C) return;
                            if (!t.isAuthorized) {
                                let e = i.modal.isOpened ? d.u.FULLSCREEN_ERROR : d.u.ERROR;
                                E((0, a.jsx)(m.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e });
                                return;
                            }
                            let s = C.getState(),
                                o = C.playbackController.getPlayback();
                            if (s && o && (0, r.S)(s.currentContext.value)) {
                                g(!0);
                                try {
                                    switch (n) {
                                        case l.Q.TimestampLike:
                                            D(), h();
                                            break;
                                        case l.Q.TimestampDislike:
                                            b(), N();
                                    }
                                    let t = s.currentContext.value.restartsCount;
                                    s.queueState.entityList.value.find((t) => {
                                        var i, a;
                                        let { entity: n } = t;
                                        return (null == (a = n.data) || null == (i = a.meta) ? void 0 : i.id) === e.id;
                                    }) && (await s.currentContext.value.sendFeedback(n, o)),
                                        s.currentContext.value.restartsCount > t && v();
                                } catch (t) {
                                    v();
                                    let e = i.modal.isOpened ? d.u.FULLSCREEN_ERROR : d.u.ERROR;
                                    E((0, a.jsx)(m.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: e });
                                } finally {
                                    g(!1);
                                }
                            }
                        });
                        return {
                            isGenerativeLiked: B,
                            isGenerativeDisliked: x,
                            onGenerativeLikeClick: (0, o.c)(() => F(l.Q.TimestampLike)),
                            onGenerativeDislikeClick: (0, o.c)(() => F(l.Q.TimestampDislike)),
                        };
                    })();
                return i.isGenerativeContext
                    ? { isLiked: g, isDisliked: B, handleLike: h, handleDislike: b }
                    : {
                          isLiked: null == (e = i.entityMeta) ? void 0 : e.isLiked,
                          isDisliked: null == (t = i.entityMeta) ? void 0 : t.isDisliked,
                          handleLike: A,
                          handleDislike: y,
                      };
            };
        },
        31926: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => C });
            var a = i(32290),
                n = i(55178),
                s = i(60900),
                r = i(39407),
                l = i(21732),
                o = i(63423),
                u = i(82586),
                d = i(74196),
                c = i(71926),
                _ = i(58534),
                p = i(95114),
                m = i.n(p);
            let C = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: i, message: p, ariaLabel: C, isMobile: E } = e,
                    { formatMessage: A } = (0, s.A)(),
                    y = (0, n.useCallback)(() => {
                        i(), null == t || t();
                    }, [t, i]),
                    g = (0, n.useMemo)(
                        () =>
                            (0, a.jsxs)('div', {
                                className: m().message,
                                children: [
                                    (0, a.jsx)(d.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': C }) }),
                                    (0, a.jsx)(c.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        'aria-hidden': !0,
                                        'data-test-id': l.e8.player.NOTIFICATION_CHANGE_QUALITY_TEXT,
                                        children: p,
                                    }),
                                    !E &&
                                        (0, a.jsx)(o.$, {
                                            className: m().changeButton,
                                            onClick: y,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': A({ id: 'interface-actions.change' }),
                                            children: (0, a.jsx)(c.HL, { variant: 'div', size: 'm', children: (0, a.jsx)(r.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [C, A, y, p, E],
                    );
                return (0, a.jsx)(_.$, { closeToast: t, cover: (0, a.jsx)(u.I, { className: m().icon, size: 'xs', variant: 'settings' }), message: g, coverRadius: 's' });
            };
        },
        35280: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => d });
            var a = i(55178),
                n = i(71483),
                s = i(72676),
                r = i(7697),
                l = i(44128),
                o = i(57594),
                u = i(79406);
            let d = () => {
                var e, t, i;
                let {
                        sonataState: d,
                        modals: { popoverOverPlayer: c },
                        user: _,
                        experiments: p,
                        settings: m,
                    } = (0, o.g)(),
                    { isPassToProduct: C } = (0, r.X)(),
                    E = (0, l.e)(),
                    A = d.contextType === n.K.Generative,
                    y =
                        !(null == (e = m.browserInfo) ? void 0 : e.isTouch) &&
                        _.isAuthorized &&
                        !_.hasPlus &&
                        (null == (i = p.getExperiment(u.z.WebNextDesktopWebFreemium)) || null == (t = i.value) ? void 0 : t.limitListening) === 'on';
                (0, a.useEffect)(() => {
                    if ((_.isAuthorized && !C && !y) || A) return;
                    let e =
                        null == E
                            ? void 0
                            : E.state.playerState.event.onChange((e) => {
                                  e === s.Iu.PLAYING && c.open();
                              });
                    return () => {
                        null == e || e();
                    };
                }, [E, c, A, C, y, _.isAuthorized]);
            };
        },
        39264: () => {},
        41812: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => E });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(16172),
                u = i(21732),
                d = i(63423),
                c = i(82586),
                _ = i(12350),
                p = i(57594),
                m = i(39264),
                C = i.n(m);
            let E = (0, s.PA)((e) => {
                let { className: t, variant: i = 'text', isDisliked: s = !1, onClick: m, iconClassName: E, iconSize: A, size: y = 's', disabled: g = !1 } = e,
                    { user: B } = (0, p.g)(),
                    { formatMessage: h } = (0, l.A)(),
                    b = (0, _.m)(),
                    x = (0, r.useCallback)(
                        (e) => {
                            null == m || m(e), e.stopPropagation(), b({ actionType: o.X2.Dislike });
                        },
                        [m, b],
                    );
                return (0, a.jsx)(d.$, {
                    className: (0, n.$)(C().root, t),
                    withRipple: !1,
                    variant: i,
                    size: y,
                    radius: 'round',
                    disabled: !B.isAuthorized || g,
                    'aria-label': h({ id: 'interface-actions.do-not-like' }),
                    'aria-pressed': s,
                    onClick: x,
                    icon: (0, a.jsx)(c.I, { size: A, className: E, variant: s ? 'disliked' : 'dislike' }),
                    'data-test-id': u.S7.DISLIKE_BUTTON,
                });
            });
        },
        44782: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var a = i(32290),
                n = i(6612),
                s = i(91027),
                r = i(45477),
                l = i(75582),
                o = i(44128),
                u = i(57594),
                d = i(63618),
                c = i(60900),
                _ = i(82586),
                p = i(74196),
                m = i(71926),
                C = i(58534),
                E = i(9885),
                A = i.n(E);
            let y = (e) => {
                    let t,
                        { repeatMode: i, closeToast: s } = e,
                        { formatMessage: r } = (0, c.A)(),
                        l = i === n.pM.ONE ? 'repeat_one' : 'repeat';
                    switch (i) {
                        case n.pM.CONTEXT:
                            t = r({ id: 'notifications-info.change-repeat-context' });
                            break;
                        case n.pM.ONE:
                            t = r({ id: 'notifications-info.change-repeat-track' });
                            break;
                        case n.pM.NONE:
                        default:
                            t = r({ id: 'notifications-info.change-repeat-none' });
                    }
                    return (0, a.jsx)(C.$, {
                        cover: (0, a.jsx)(_.I, { className: (0, d.$)(A().icon, { [A().icon_unset]: i === n.pM.NONE }), size: 'xs', variant: l }),
                        message: (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                                (0, a.jsx)(m.HL, { className: A().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                            ],
                        }),
                        closeToast: s,
                        coverRadius: 's',
                    });
                },
                g = () => {
                    let { notify: e } = (0, l.l)(),
                        { fullscreenPlayer: t } = (0, u.g)(),
                        i = (0, o.e)();
                    return (0, s.c)((s, l) => {
                        if (null === s.entityMeta || !s.canChangeRepeatMode) return;
                        let o = ((e, t) => (t ? (e === n.pM.NONE ? n.pM.ONE : n.pM.NONE) : e === n.pM.NONE ? n.pM.CONTEXT : e === n.pM.CONTEXT ? n.pM.ONE : n.pM.NONE))(
                            s.repeatMode,
                            s.isVibeContext,
                        );
                        null == i || i.setRepeatMode(o, l), e((0, a.jsx)(y, { repeatMode: o }), { containerId: t.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO });
                    });
                };
        },
        45219: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => k });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(39407),
                u = i(21732),
                d = i(76232),
                c = i(91027),
                _ = i(63423),
                p = i(82586),
                m = i(84638),
                C = i(74196),
                E = i(71926),
                A = i(26490),
                y = i(78091),
                g = i(70204),
                B = i(34186),
                h = i(83920),
                b = i(45477),
                x = i(75582),
                N = i(81218),
                D = i(57594),
                v = i(19379),
                F = i(32156),
                T = i(78297),
                S = i(31926),
                I = i(10910),
                J = i(92496),
                W = i(99311),
                f = i(98602),
                O = i.n(f),
                L = i(19267),
                R = i.n(L);
            let k = (0, s.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: i,
                        quality: s,
                    } = (0, D.g)(),
                    f = (0, A.S)(),
                    { contentRootRef: L } = (0, h.g)(),
                    { formatMessage: k } = (0, l.A)(),
                    j = (0, B.N)(),
                    { notify: M } = (0, x.l)(),
                    q = (0, r.useId)(),
                    z = (0, N.g)(),
                    P = j.get(g.oo),
                    w = (0, T.$)(),
                    pulseSyncR128Audio = (0, J.i)(),
                    [pulseSyncR128Enabled, setPulseSyncR128Enabled] = (0, r.useState)(
                        () => window.nativeSettings.get('modSettings.r128Normalization') ?? !0,
                    ),
                    onPulseSyncR128Toggle = (0, r.useCallback)((e) => {
                        let i = 'boolean' == typeof e ? e : !(window.nativeSettings.get('modSettings.r128Normalization') ?? !0),
                            a = null == t.state || null == t.state.queueState || null == t.state.queueState.currentEntity || null == t.state.queueState.currentEntity.value
                                ? void 0
                                : t.state.queueState.currentEntity.value.entity,
                            r = null == a || null == a.data || null == a.data.meta ? void 0 : a.data.meta.r128;
                        setPulseSyncR128Enabled(i), window.nativeSettings.set('modSettings.r128Normalization', i),
                            null == pulseSyncR128Audio ||
                                null == pulseSyncR128Audio.graphs ||
                                pulseSyncR128Audio.graphs.forEach((e) => {
                                    e.setR128Gain(r, i);
                                });
                    }, [t.state, pulseSyncR128Audio]),
                    [pulseSyncWasapiQuickEnabled, setPulseSyncWasapiQuickEnabled] = (0, r.useState)(() =>
                        Boolean(window.nativeSettings?.get?.('modSettings.nativeAudioOutput.enableWasapiExclusiveOutput')),
                    ),
                    [pulseSyncYaspTapQuickEnabled, setPulseSyncYaspTapQuickEnabled] = (0, r.useState)(() =>
                        Boolean(window.nativeSettings?.get?.('modSettings.nativeAudioOutput.enableYaspChunkTap')),
                    ),
                    [pulseSyncWasapiQuickSupported, setPulseSyncWasapiQuickSupported] = (0, r.useState)(!1),
                    pulseSyncIsWindows = window.PLATFORM === 'win32',
                    onPulseSyncWasapiQuickToggle = (0, r.useCallback)((e) => {
                        setPulseSyncWasapiQuickEnabled(e),
                            Promise.resolve(window.nativeAudioOutput?.setWasapiExclusiveOutputEnabled?.(e)).catch((t) => {
                                setPulseSyncWasapiQuickEnabled(!e), console.error('Failed to change WASAPI Exclusive setting:', t);
                            });
                    }, []),
                    V = (0, r.useCallback)(
                        (e) => {
                            w(e, t.quality), t.setQuality(e), null == z || z.setQuality(e), P.set(v.c.YmPlayerQuality, e, { expires: 365 });
                        },
                        [z, t, P, w],
                    ),
                    Q = (0, r.useCallback)(
                        (e) => {
                            let t = k({ id: e }).toLowerCase();
                            return {
                                message: (0, a.jsx)(o.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: k({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [k],
                    ),
                    G = (0, r.useCallback)(
                        (e, i) => () => {
                            if (t.quality === e) return;
                            s.modal.close(), V(e);
                            let { message: n, ariaLabel: r } = Q(i);
                            M((0, a.jsx)(S.J, { onOpenQualitySettingsMenu: s.modal.open, message: n, ariaLabel: r }), { containerId: b.u.INFO });
                        },
                        [Q, M, t.quality, V, s.modal],
                    ),
                    U = (0, c.c)((e) => {
                        switch (e) {
                            case d.e.HIGH_QUALITY:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case d.e.BALANCED:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    K = (0, r.useCallback)(
                        (e) => {
                            let { selectedItemIcon: t, type: i, qualityMessageId: s, ariaSelected: r, text: l } = e;
                            return (e) => {
                                let { isPopoverEnabled: o, popoverText: u } = e;
                                return (0, a.jsx)(
                                    _.$,
                                    {
                                        isBlock: !0,
                                        disabled: o,
                                        className: (0, n.$)(O().item, R().button, O().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: G(i, s),
                                        role: 'option',
                                        'aria-selected': r,
                                        variant: 'text',
                                        'data-test-id': U(i),
                                        children: (0, a.jsxs)('span', {
                                            className: O().itemWrapper,
                                            children: [
                                                (0, a.jsxs)('span', { className: O().item_option, children: [l, ' ', (0, a.jsx)(C.q, { children: u })] }),
                                                (0, a.jsx)('span', { className: (0, n.$)(O().item_option, O().itemSubTitle), children: I.f8[i] }),
                                            ],
                                        }),
                                    },
                                    i,
                                );
                            };
                        },
                        [G, U],
                    );
                (0, r.useEffect)(
                    () => () => {
                        s.modal.close();
                    },
                    [s.modal],
                );
                (0, r.useEffect)(() => {
                    s.modal.isOpened && setPulseSyncR128Enabled(window.nativeSettings.get('modSettings.r128Normalization') ?? !0);
                }, [s.modal.isOpened]);
                (0, r.useEffect)(() => {
                    if (!s.modal.isOpened || !pulseSyncIsWindows) return;
                    setPulseSyncWasapiQuickEnabled(Boolean(window.nativeSettings?.get?.('modSettings.nativeAudioOutput.enableWasapiExclusiveOutput'))),
                        setPulseSyncYaspTapQuickEnabled(Boolean(window.nativeSettings?.get?.('modSettings.nativeAudioOutput.enableYaspChunkTap')));
                    let e = !1;
                    return (
                        Promise.resolve(window.nativeAudioOutput?.getWasapiExclusiveStatus?.())
                            .then((t) => {
                                e ||
                                    (setPulseSyncWasapiQuickSupported(Boolean(t?.available && t?.supported)),
                                    setPulseSyncWasapiQuickEnabled(Boolean(t?.outputEnabled)),
                                    setPulseSyncYaspTapQuickEnabled(Boolean(t?.yaspTapEnabled)));
                            })
                            .catch(() => {
                                e || setPulseSyncWasapiQuickSupported(!1);
                            }),
                        () => {
                            e = !0;
                        }
                    );
                }, [s.modal.isOpened, pulseSyncIsWindows]);
                let H = !i.hasPlus,
                    Y = (0, r.useMemo)(
                        () =>
                            I.GQ.map((i) => {
                                let { type: n, text: s, qualityMessageId: r } = i,
                                    l = n === t.quality ? (0, a.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null,
                                    o = n === t.quality;
                                return (0, a.jsx)(
                                    F.S,
                                    {
                                        isNested: !0,
                                        isEnabled: H && !e,
                                        placement: 'left',
                                        textVariant: 'highQuality',
                                        renderChildren: K({ selectedItemIcon: l, type: n, qualityMessageId: r, ariaSelected: o, text: s }),
                                    },
                                    n,
                                );
                            }),
                        [t.quality, H, e, K],
                    ),
                    $ = (0, r.useMemo)(() => {
                        if (f.isAvailable && !e)
                            return (0, a.jsx)(
                                y.r,
                                {
                                    isExpanded: f.isEnabled,
                                    isDisabled: !1,
                                    className: (0, n.$)(O().equalizer, O().equalizer_withNewQuality),
                                    title: k({ id: 'equalizer.title' }),
                                },
                                q,
                            );
                    }, [q, k, e, f.isEnabled, f.isAvailable]),
                    pulseSyncR128Toggle = (0, r.useMemo)(() => {
                        if (e || !f.isAvailable) return null;
                        return (0, a.jsxs)('div', {
                            className: O().equalizer,
                            style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' },
                            children: [
                                (0, a.jsx)(E.HL, {
                                    className: O().item_option,
                                    style: { width: 'unset' },
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    children: 'Нормализация громкости',
                                }),
                                (0, a.jsx)(W.l, {
                                    isChecked: pulseSyncR128Enabled,
                                    onChange: onPulseSyncR128Toggle,
                                    'aria-label': 'Нормализация громкости',
                                }),
                            ],
                        });
                    }, [e, f.isAvailable, pulseSyncR128Enabled, onPulseSyncR128Toggle]),
                    pulseSyncWasapiQuickToggle = (0, r.useMemo)(() => {
                        if (e || !pulseSyncIsWindows) return null;
                        let t = !pulseSyncWasapiQuickSupported || !pulseSyncYaspTapQuickEnabled;
                        return (0, a.jsxs)('div', {
                            className: O().equalizer,
                            title: !pulseSyncWasapiQuickSupported
                                ? 'WASAPI Exclusive недоступен'
                                : pulseSyncYaspTapQuickEnabled
                                  ? void 0
                                  : 'Сначала включите YASP Tap в настройках аудио',
                            style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', opacity: t ? 0.45 : 1 },
                            children: [
                                (0, a.jsx)(E.HL, {
                                    className: O().item_option,
                                    style: { width: 'unset' },
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    children: 'WASAPI Exclusive',
                                }),
                                (0, a.jsx)(W.l, {
                                    isChecked: pulseSyncWasapiQuickEnabled,
                                    onChange: onPulseSyncWasapiQuickToggle,
                                    'aria-label': 'WASAPI Exclusive',
                                    disabled: t,
                                }),
                            ],
                        });
                    }, [
                        e,
                        pulseSyncIsWindows,
                        pulseSyncWasapiQuickEnabled,
                        pulseSyncWasapiQuickSupported,
                        pulseSyncYaspTapQuickEnabled,
                        onPulseSyncWasapiQuickToggle,
                    ]);
                return (0, a.jsxs)(m.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: s.modal.isOpened,
                    onOpenChange: s.modal.onOpenChange,
                    onClose: s.modal.close,
                    className: R().root,
                    contentClassName: R().modalContent,
                    portalNode: e ? null : L,
                    showHeader: !1,
                    overlayClassName: R().overlay,
                    containerProps: { 'data-test-id': u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU },
                    children: [
                        !e &&
                            (0, a.jsxs)(E.DZ, {
                                className: (0, n.$)(O().header, O().headerWithCloseButton),
                                variant: 'h4',
                                size: 'xs',
                                weight: 'bold',
                                children: [
                                    (0, a.jsx)(o.A, { id: 'player-actions.audio-quality' }),
                                    (0, a.jsx)(_.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, a.jsx)(p.I, { variant: 'close', size: 'xxs' }),
                                        onClick: s.modal.close,
                                        'aria-label': k({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                            }),
                        Y,
                        pulseSyncR128Toggle,
                        pulseSyncWasapiQuickToggle,
                        $,
                    ],
                });
            });
        },
        45303: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => a });
            var a = (function (e) {
                return (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e;
            })({});
        },
        45495: (e) => {
            e.exports = { icon: 'NotificationShuffle_icon__U_ape', message: 'NotificationShuffle_message__BNxJm', icon_unset: 'NotificationShuffle_icon_unset__y1jg_' };
        },
        53730: (e, t, i) => {
            'use strict';
            i.d(t, { OH: () => l });
            var a = i(80451),
                n = {
                    7858: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let i = t.LIGHTNESS_COLOR_BUCKETS.find((i, a) =>
                                    ((e, i, a) => (a === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? i >= e.start && i <= e.end : i >= e.start && i < e.end))(i, e, a),
                                );
                                return (0, t.findColorBucketByName)(null == i ? void 0 : i.name);
                            });
                    },
                    768: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0);
                        let a = i(2660),
                            n = i(7858);
                        (t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
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
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
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
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
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
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            });
                        let s = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        (t.getVibePaletteByBucketName = (e) => {
                            let i = (0, n.findColorBucketByName)(e);
                            return i ? s(i) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, a.hexToHsl)(e),
                                    i = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === i ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: i };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: i } = (0, t.getVibeColorBucketSelection)(e);
                                return i ? s(i) : t.FALLBACK_PALETTE;
                            });
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                },
                s = {},
                r = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var a = (s[t] = { exports: {} });
                    return n[t](a, a.exports, e), a.exports;
                })(768);
            r.FALLBACK_NAME,
                r.FALLBACK_PALETTE,
                r.PRIMARY_DARK_IDLE_STOPS,
                r.PRIMARY_GRADIENT_STOPS,
                r.SECONDARY_GRADIENT_STOPS,
                r.__esModule,
                r.getVibeColorBucketSelection,
                r.getVibePaletteByBucketName;
            var l = r.getVibePaletteColors;
        },
        58625: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => v });
            var a = i(32290),
                n = i(96103),
                s = i(60900),
                r = i(21732),
                l = i(58723),
                o = i(57594),
                u = i(63618),
                d = i(55178),
                c = i(58359),
                _ = i(63423),
                p = i(50162),
                m = i(71926),
                C = i(2125),
                E = i(48922),
                A = i(43564);
            let y = (e) => {
                var t, i, a;
                let { seed: n, title: r, isStation: l } = e,
                    { vibe: u } = (0, o.g)(),
                    { applySetting: c } = (0, A.B)({
                        seeds: null != (a = null == (t = u.meta) ? void 0 : t.seeds) ? a : [],
                        pageIdForFrom: E._Q.HOME,
                        blockIdForFrom: C.h.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: _ } = (0, s.A)(),
                    p = !!(null == (i = u.meta) ? void 0 : i.seeds.includes(n)),
                    m = u.applyingSetting === n,
                    y = (0, d.useMemo)(
                        () => (p ? ''.concat(_({ id: 'vibe-actions.remove' }), ' ').concat(r) : ''.concat(_({ id: 'vibe-actions.apply' }), ' ').concat(r)),
                        [p, r, _],
                    );
                return {
                    isApplying: m,
                    isSelected: p,
                    ariaLabel: y,
                    ariaPressed: p,
                    onClickHandler: (0, d.useCallback)(async () => {
                        u.setApplyingSetting(n), await c(n, l), u.setApplyingSetting();
                    }, [c, l, n, u]),
                };
            };
            var g = i(86323),
                B = i.n(g);
            let h = (0, n.PA)((e) => {
                let { item: t } = e,
                    { vibe: i } = (0, o.g)(),
                    n = (0, d.useRef)(null),
                    { isApplying: s, isSelected: l, ariaPressed: C, onClickHandler: E } = y({ seed: t.seed, title: t.title, isStation: !0 }),
                    A = (0, d.useCallback)(
                        (e) => {
                            i.isApplying || (n.current && (0, c.P)(e, B().ripple, n.current), E());
                        },
                        [E, i.isApplying],
                    );
                return (0, a.jsxs)(_.$, {
                    radius: 'xxxl',
                    className: (0, u.$)(B().button, B().textButton, { [B().button_selected]: l, [B().button_applying]: s, [B().specialButton]: t.specialContext }),
                    onClick: A,
                    'aria-disabled': i.isApplying,
                    'aria-pressed': C,
                    withRipple: !1,
                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON,
                    children: [
                        t.specialContext && (0, a.jsx)(p._V, { className: B().specialImage, src: t.specialContextImage, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                        (0, a.jsx)(m.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: B().title, children: t.title }),
                        (0, a.jsx)('div', { className: B().rippleContainer, ref: n }),
                    ],
                });
            });
            var b = i(97323);
            let x = (0, n.PA)((e) => {
                let { type: t, restrictionValue: i } = e,
                    { vibe: n } = (0, o.g)(),
                    s = (0, d.useRef)(null),
                    { isApplying: l, isSelected: C, ariaPressed: E, onClickHandler: A } = y({ seed: i.seed, title: i.title }),
                    g = (0, d.useCallback)(
                        (e) => {
                            n.isApplying || (s.current && (0, c.P)(e, B().ripple, s.current), A());
                        },
                        [A, n.isApplying],
                    ),
                    h = (0, d.useMemo)(
                        () => (0, a.jsx)(m.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: B().title, children: i.title }),
                        [i.title],
                    );
                switch (t) {
                    case b.s.DIVERSITY:
                        return (0, a.jsxs)(_.$, {
                            className: (0, u.$)(B().button, B().diversityButton, { [B().button_selected]: C, [B().button_applying]: l }),
                            radius: 'xl',
                            'aria-disabled': n.isApplying,
                            'aria-pressed': E,
                            onClick: g,
                            withRipple: !1,
                            'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON,
                            children: [
                                (0, a.jsx)(p._V, {
                                    'aria-hidden': !0,
                                    src: i.imageUrl,
                                    fit: 'contain',
                                    width: 40,
                                    height: 40,
                                    withAvatarReplace: !0,
                                    className: B().diversityButtonImage,
                                }),
                                h,
                                (0, a.jsx)('div', { className: B().rippleContainer, ref: s }),
                            ],
                        });
                    case b.s.MOOD_ENERGY:
                        return (0, a.jsxs)('div', {
                            className: B().moodEnergy,
                            'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON,
                            children: [
                                (0, a.jsx)(_.$, {
                                    variant: 'text',
                                    className: (0, u.$)(B().button, B().moodEnergyButton, { [B().button_selected]: C, [B().button_applying]: l }),
                                    radius: 'round',
                                    onClick: g,
                                    withRipple: !1,
                                    'aria-disabled': n.isApplying,
                                    'aria-pressed': E,
                                    'aria-label': i.title,
                                    children: (0, a.jsx)(p._V, {
                                        src: i.imageUrl,
                                        fit: 'contain',
                                        width: 52,
                                        height: 52,
                                        'aria-hidden': !0,
                                        withAvatarReplace: !0,
                                        className: B().moodEnergyButtonImage,
                                    }),
                                }),
                                (0, a.jsx)('span', { 'aria-hidden': !0, children: h }),
                            ],
                        });
                    case b.s.LANGUAGE:
                        return (0, a.jsxs)(_.$, {
                            radius: 'xxxl',
                            className: (0, u.$)(B().button, B().textButton, { [B().button_selected]: C, [B().button_applying]: l }),
                            onClick: g,
                            withRipple: !1,
                            'aria-disabled': n.isApplying,
                            'aria-pressed': E,
                            'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON,
                            children: [h, (0, a.jsx)('div', { className: B().rippleContainer, ref: s })],
                        });
                    default:
                        return null;
                }
            });
            var N = i(90875),
                D = i.n(N);
            let v = (0, n.PA)(() => {
                let { vibeSettings: e } = (0, o.g)(),
                    { formatMessage: t } = (0, s.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, a.jsxs)('div', {
                        className: D().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, a.jsx)(l.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: D().contextItems,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK,
                                    children: e.contextItems.map((e) =>
                                        (0, a.jsx)(h, { item: e, 'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON }, e.seed),
                                    ),
                                }),
                            e.diversity &&
                                (0, a.jsx)(l.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: D().diversity,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK,
                                    children: e.diversity.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(x, { type: null == (i = e.diversity) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, a.jsx)(l.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: D().moodEnergy,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                                    children: e.moodEnergy.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(x, { type: null == (i = e.moodEnergy) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, a.jsx)(l.m, {
                                    title: e.language.title,
                                    restrictionsClassName: D().contextItems,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK,
                                    children: e.language.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(x, { type: null == (i = e.language) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                        ],
                    })
                );
            });
        },
        60070: (e) => {
            e.exports = {
                button: 'ChangeVolume_button__4HLEr',
                icon: 'ChangeVolume_icon__5Zv2a',
                sliderContainer: 'ChangeVolume_sliderContainer__pvOZa',
                sliderContainer_focusVisible: 'ChangeVolume_sliderContainer_focusVisible__1JxI9',
                wrapperSlider: 'ChangeVolume_wrapperSlider__9S1Vi',
                root: 'ChangeVolume_root__HDxtA',
                slider: 'ChangeVolume_slider__fCKGZ',
                important: 'ChangeVolume_important__ZIYpu',
            };
        },
        77035: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => g });
            var a = i(32290),
                n = i(91027),
                s = i(45477),
                r = i(75582),
                l = i(44128),
                o = i(57594),
                u = i(63618),
                d = i(55178),
                c = i(60900),
                _ = i(82586),
                p = i(74196),
                m = i(71926),
                C = i(58534),
                E = i(45495),
                A = i.n(E);
            let y = (e) => {
                    let { shuffle: t, closeToast: i } = e,
                        { formatMessage: n } = (0, c.A)(),
                        s = (0, d.useMemo)(() => (t ? n({ id: 'notifications-info.shuffle-enabled' }) : n({ id: 'notifications-info.shuffle-disabled' })), [n, t]),
                        r = (0, d.useMemo)(
                            () =>
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', children: s }) }),
                                        (0, a.jsx)(m.HL, { className: A().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: s }),
                                    ],
                                }),
                            [s],
                        );
                    return (0, a.jsx)(C.$, {
                        cover: (0, a.jsx)(_.I, { className: (0, u.$)(A().icon, { [A().icon_unset]: !t }), size: 'xs', variant: 'shuffle' }),
                        message: r,
                        closeToast: i,
                        coverRadius: 's',
                    });
                },
                g = () => {
                    let { notify: e } = (0, r.l)(),
                        { fullscreenPlayer: t } = (0, o.g)(),
                        i = (0, l.e)();
                    return (0, n.c)((n, r) => {
                        null !== n.entityMeta &&
                            n.canShuffle &&
                            (null == i || i.toggleShuffle(r),
                            e((0, a.jsx)(y, { shuffle: !!(null == i ? void 0 : i.getState(r).queueState.shuffle.value) }), {
                                containerId: t.modal.isOpened ? s.u.FULLSCREEN_INFO : s.u.INFO,
                            }));
                    });
                };
        },
        78297: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => u });
            var a = i(55178),
                n = i(16172),
                s = i(52068),
                r = i(79374),
                l = i(37240),
                o = i(62376);
            let u = () => {
                let e = (0, s.st)(),
                    t = (0, o.U)(),
                    { hash: i } = (0, s.gf)(),
                    { pageId: u } = (0, l.$)();
                return (0, a.useCallback)(
                    (a, s) => {
                        if (!e || !u || !r.W[u] || !i) return;
                        let l = { hash: i, pageId: r.W[u], propertyKey: 'sound_quality', propertyValueNew: a, propertyValueOld: s },
                            o = (0, n.Fx)({ params: l, logger: t, context: 'useSendEventOnQualitySettingsChanged' });
                        o && (0, n.Bl)(e.evgenInstance, o);
                    },
                    [e, i, t, u],
                );
            };
        },
        80346: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => g });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(21732),
                u = i(91027),
                d = i(6752),
                c = i(44989),
                _ = i(63423),
                p = i(82586),
                m = i(378),
                C = i(44128),
                E = i(45303),
                H = i(50),
                V = i(14257),
                A = i(60070),
                y = i.n(A);
            let g = (0, s.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: i,
                        verticalSliderClassName: s,
                        variant: A = E.q.HORIZONTAL,
                        playbackId: g,
                        onVolumeClick: B,
                        onVolumeSet: h,
                        sonataVolume: b,
                        buttonClassName: x,
                    } = e,
                    [N, D] = (0, r.useState)(void 0),
                    { formatMessage: v } = (0, l.A)(),
                    F = (0, C.e)(),
                    { theme: U } = (0, H.W)(),
                    { state: T, toggleTrue: S, toggleFalse: I } = (0, c.e)(!1);
                (0, r.useEffect)(() => {
                    'number' == typeof b && D(b);
                }, [b]);
                let f = Math.round((null != N ? N : 1) * 100) / 100,
                    O = (0, u.c)((e) => {
                        null == F || F.setExponentVolume(e, g);
                    });
                (0, r.useEffect)(() => {
                    let e = () => {
                            I(), document.activeElement instanceof HTMLElement && document.activeElement.blur();
                        },
                        t = () => {
                            document.hidden && e();
                        };
                    return (
                        document.addEventListener('visibilitychange', t),
                        window.addEventListener('blur', e),
                        () => {
                            document.removeEventListener('visibilitychange', t), window.removeEventListener('blur', e);
                        }
                    );
                }, [I]);
                let L = (0, u.c)((e) => {
                        D(e), O(e), null == h || h(e);
                    }),
                    R = (0, u.c)(async (e) => {
                        await B(f, e);
                    }),
                    k = 0 === f ? 'volumeOff' : 'volume',
                    j = 0 === f ? v({ id: 'player-actions.volume-on' }) : v({ id: 'player-actions.volume-off' }),
                    M = (0, u.c)((e) => {
                        L(Math.max(0, Math.min(1, Math.round(100 * (f + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    q = (0, d.L)(() => {
                        if (A === E.q.HORIZONTAL)
                            return (0, a.jsx)(m.A, {
                                onWheel: M,
                                className: i,
                                thumbSize: 's',
                                trackSize: 's',
                                value: f,
                                maxValue: 1,
                                step: 0.01,
                                onChange: L,
                                'aria-label': v({ id: 'player-actions.volume-control' }),
                                'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                            });
                    }),
                    z = (0, d.L)(() => {
                        if (A === E.q.VERTICAL)
                            return (0, a.jsxs)('div', {
                                onWheel: M,
                                className: (0, n.$)(y().sliderContainer, { [y().sliderContainer_focusVisible]: T }),
                                children: [
                                    (0, a.jsx)('span', {
                                        children: ''.concat(Math.round(f.toFixed(2) * 100), '%'),
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            marginInline: 'auto',
                                            width: 'fit-content',
                                            top: '0.7rem',
                                            textShadow:
                                                U === V.S.Dark
                                                    ? '-1px -1px 0 #000,\n1px -1px 0 #000,\n-1px 1px 0 #000,\n1px 1px 0 #000,\n-1px 0px 0 #000,\n0px 0px 0 #000,\n0px -1px 0 #000,\n0px 1px 0 #000'
                                                    : void 0,
                                        },
                                    }),
                                    (0, a.jsx)('div', {
                                        className: (0, n.$)(y().wrapperSlider, s),
                                        children: (0, a.jsx)(m.A, {
                                            onMouseLeave: I,
                                            className: (0, n.$)(y().slider, y().important),
                                            thumbSize: 's',
                                            onFocus: S,
                                            onBlur: I,
                                            trackSize: 's',
                                            value: f,
                                            maxValue: 1,
                                            step: 0.01,
                                            onChange: L,
                                            'aria-label': v({ id: 'player-actions.volume-control' }),
                                            'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                                        }),
                                    }),
                                ],
                            });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(y().root, t),
                    children: [
                        z,
                        (0, a.jsx)(_.$, {
                            onWheel: M,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: R,
                            'aria-label': j,
                            icon: (0, a.jsx)(p.I, { size: 'xs', className: y().icon, variant: k }),
                            className: (0, n.$)(y().button, x),
                            'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_BUTTON,
                        }),
                        q,
                    ],
                });
            });
        },
        86103: (e, t, i) => {
            'use strict';
            i.d(t, { CU: () => l, f_: () => r, pp: () => a });
            let a = [1, 1.25, 1.5, 1.75, 2],
                n = ['speed_1x', 'speed_1_25x', 'speed_1_5x', 'speed_1_75x', 'speed_2x'],
                s = ['speed_1x_centered', 'speed_1_25x_centered', 'speed_1_5x_centered', 'speed_1_75x_centered', 'speed_2x_centered'],
                r = { 1: 0, 1.25: 1, 1.5: 2, 1.75: 3, 2: 4 },
                l = (e, t) => {
                    var i, a, l;
                    let o = null != (i = r[e]) ? i : 0,
                        u = null != (a = n[o]) ? a : 'speed_1x';
                    return t ? (null != (l = s[o]) ? l : 'speed_1x_centered') : u;
                };
        },
        86323: (e) => {
            e.exports = {
                button: 'RestrictionButton_button__eLMkU',
                button_selected: 'RestrictionButton_button_selected__LHD20',
                button_applying: 'RestrictionButton_button_applying___ik5f',
                'applying-setting': 'RestrictionButton_applying-setting__utqyc',
                diversityButton: 'RestrictionButton_diversityButton__uclSi',
                diversityButtonImage: 'RestrictionButton_diversityButtonImage__21oME',
                moodEnergy: 'RestrictionButton_moodEnergy__q_I4y',
                moodEnergyButton: 'RestrictionButton_moodEnergyButton__yKkaS',
                moodEnergyButtonImage: 'RestrictionButton_moodEnergyButtonImage__zxT2C',
                textButton: 'RestrictionButton_textButton__HC_AE',
                title: 'RestrictionButton_title__UZn0O',
                specialButton: 'RestrictionButton_specialButton__Di6B9',
                specialImage: 'RestrictionButton_specialImage__0E3x2',
                rippleContainer: 'RestrictionButton_rippleContainer__xPANO',
                ripple: 'RestrictionButton_ripple__Rsu8b',
            };
        },
        86806: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var a,
                n = i(72812),
                s = i(55178),
                r = {
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(s, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return r[e](i, i.exports, o), i.exports;
            }
            var u = {};
            (() => {
                Object.defineProperty(u, '__esModule', { value: !0 }), (u.useDebouncedToggle = void 0);
                let e = o(352),
                    t = o(810);
                u.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: n, throttleTimeout: s } = i,
                        r = (0, t.useRef)(null),
                        [l, o] = (0, t.useState)(!!n),
                        u = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    o(!n),
                                        r.current && window.clearTimeout(r.current),
                                        (r.current = window.setTimeout(() => {
                                            o(!!n);
                                        }, a));
                                }, s),
                            [a, n, s],
                        ),
                        d = (0, t.useCallback)(() => {
                            o(!!n), r.current && window.clearTimeout(r.current);
                        }, [n]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                r.current && window.clearTimeout(r.current);
                            },
                            [],
                        ),
                        { state: l, handleDebouncedToggle: u, reset: d }
                    );
                };
            })(),
                u.__esModule;
            var d = u.useDebouncedToggle;
        },
        90829: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => c });
            var a = i(32290),
                n = i(55178),
                s = i(60900),
                r = i(21732),
                l = i(71926),
                o = i(48027),
                u = i(32562),
                d = i(94218);
            let c = (e) => {
                let { textVariant: t, vibeTextVariant: i, ...c } = e,
                    _ = (0, n.useId)(),
                    { formatMessage: p } = (0, s.A)(),
                    m = (0, n.useMemo)(() => {
                        switch (i) {
                            case o.I.ALBUM:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case o.I.ARTIST:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case o.I.PLAYLIST:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case o.I.TRACK:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case o.I.GENRE:
                            case o.I.MICRO_GENRE:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case o.I.MOOD:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case o.I.ACTIVITY:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return p({ id: 'onboarding.authorize-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [i, p]),
                    C = (0, n.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return p({ id: 'onboarding.authorize-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'changeQuality':
                                return p({ id: 'onboarding.authorize-to-change-quality' }, { br: '\n', nbsp: ' ' });
                            case 'addToCollection':
                                return p({ id: 'onboarding.authorize-to-add-to-collection' }, { br: '\n', nbsp: ' ' });
                            case 'openQueue':
                                return p({ id: 'onboarding.authorize-to-open-queue' }, { br: '\n', nbsp: ' ' });
                            case 'addToQueue':
                                return p({ id: 'onboarding.authorize-to-add-track-to-queue' }, { br: '\n', nbsp: ' ' });
                            case 'like':
                                return p({ id: 'onboarding.authorize-to-like' }, { br: '\n', nbsp: ' ' });
                            case 'dislike':
                                return p({ id: 'onboarding.authorize-to-dislike' }, { br: '\n', nbsp: ' ' });
                            case 'pin':
                                return p({ id: 'onboarding.authorize-to-pin' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return p({ id: 'onboarding.authorize-to-view-sync-lyrics' }, { br: '\n', nbsp: ' ' });
                            case 'vibe':
                                return m;
                            default:
                                return '';
                        }
                    }, [p, t, m]);
                return (0, a.jsx)(u.z, {
                    contentElement: (0, a.jsx)(l.HL, { variant: 'div', size: 'l', weight: 'bold', children: C }),
                    buttons: [(0, a.jsx)(d.H, { size: 'xxs' }, _)],
                    renderChildrenText: C,
                    contentProps: { 'data-test-id': r.S7.LOGIN_POPOVER },
                    ...c,
                });
            };
        },
        90875: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        95114: (e) => {
            e.exports = {
                message: 'NotificationChangeQuality_message__coCvn',
                changeButton: 'NotificationChangeQuality_changeButton__Hzc3y',
                icon: 'NotificationChangeQuality_icon__bOfQO',
            };
        },
        98602: (e) => {
            e.exports = {
                root: 'QualitySettings_root__bsEFH',
                root_withEqualizer: 'QualitySettings_root_withEqualizer__KF0Ng',
                root_withNewQuality: 'QualitySettings_root_withNewQuality__wP_x5',
                header: 'QualitySettings_header__azQ0H',
                list: 'QualitySettings_list__ggzI6',
                equalizer: 'QualitySettings_equalizer__bt11k',
                headerWithCloseButton: 'QualitySettings_headerWithCloseButton__VHskw',
                itemWrapper: 'QualitySettings_itemWrapper__3KKwt',
                item: 'QualitySettings_item__2SGU_',
                item_option: 'QualitySettings_item_option__KuE4e',
                item_type: 'QualitySettings_item_type___96WF',
                expandedItem: 'QualitySettings_expandedItem__kCxQb',
                itemSubTitle: 'QualitySettings_itemSubTitle__rNJL_',
                menuContent: 'QualitySettings_menuContent__SzqoC',
                button_active: 'QualitySettings_button_active__Nivv_',
            };
        },
    },
]);
