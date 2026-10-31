(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7760],
    {
        5915: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => A });
            var i = a(88800),
                r = a(53548),
                s = a(2058),
                n = a(40700),
                l = a(72193),
                o = a(29993),
                u = a(52456),
                d = a(29595),
                c = a(74965),
                _ = a(9630),
                p = a(72288),
                m = a(66943),
                E = a(99698),
                C = a(42174);
            let A = () => {
                var e, t;
                let { sonataState: a } = (0, p.g)(),
                    A = (0, C.K)(a.entityMeta),
                    y = (0, E.m)(a.entityMeta),
                    {
                        isGenerativeLiked: b,
                        isGenerativeDisliked: h,
                        onGenerativeLikeClick: x,
                        onGenerativeDislikeClick: g,
                    } = (() => {
                        let {
                                sonataState: { entityMeta: e },
                                user: t,
                                fullscreenPlayer: a,
                            } = (0, p.g)(),
                            E = (0, _.e)(),
                            { notify: C } = (0, c.l)(),
                            { formatMessage: A } = (0, s.A)(),
                            [y, b] = (0, r.useState)(!1),
                            { state: h, handleDebouncedToggle: x, reset: g } = (0, u.F)({ delay: 1e4, throttleTimeout: 0 }),
                            { state: v, handleDebouncedToggle: B, reset: N } = (0, u.F)({ delay: 1e4, throttleTimeout: 0 }),
                            f = (0, o.c)(() => {
                                (g(), N());
                            });
                        (0, r.useEffect)(() => {
                            (null == e ? void 0 : e.id) && f();
                        }, [null == e ? void 0 : e.id, f]);
                        let S = (0, o.c)(async (r) => {
                            if (y || !e || !E) return;
                            if (!t.isAuthorized) {
                                let e = a.modal.isOpened ? d.u.FULLSCREEN_ERROR : d.u.ERROR;
                                C((0, i.jsx)(m.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e });
                                return;
                            }
                            let s = E.getState(),
                                o = E.playbackController.getPlayback();
                            if (s && o && (0, n.S)(s.currentContext.value)) {
                                b(!0);
                                try {
                                    switch (r) {
                                        case l.Q.TimestampLike:
                                            (N(), x());
                                            break;
                                        case l.Q.TimestampDislike:
                                            (g(), B());
                                    }
                                    let t = s.currentContext.value.restartsCount;
                                    (s.queueState.entityList.value.find((t) => {
                                        var a, i;
                                        let { entity: r } = t;
                                        return (null == (i = r.data) || null == (a = i.meta) ? void 0 : a.id) === e.id;
                                    }) && (await s.currentContext.value.sendFeedback(r, o)),
                                        s.currentContext.value.restartsCount > t && f());
                                } catch (t) {
                                    f();
                                    let e = a.modal.isOpened ? d.u.FULLSCREEN_ERROR : d.u.ERROR;
                                    C((0, i.jsx)(m.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: e });
                                } finally {
                                    b(!1);
                                }
                            }
                        });
                        return {
                            isGenerativeLiked: h,
                            isGenerativeDisliked: v,
                            onGenerativeLikeClick: (0, o.c)(() => S(l.Q.TimestampLike)),
                            onGenerativeDislikeClick: (0, o.c)(() => S(l.Q.TimestampDislike)),
                        };
                    })();
                return a.isGenerativeContext
                    ? { isLiked: b, isDisliked: h, handleLike: x, handleDislike: g }
                    : {
                          isLiked: null == (e = a.entityMeta) ? void 0 : e.isLiked,
                          isDisliked: null == (t = a.entityMeta) ? void 0 : t.isDisliked,
                          handleLike: A,
                          handleDislike: y,
                      };
            };
        },
        7023: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => r });
            var i = a(28692);
            let r = (e, t, a) =>
                t(
                    e === i.pM.NONE || a
                        ? { id: 'player-actions.repeat' }
                        : e === i.pM.ONE
                          ? { id: 'player-actions.repeat-one' }
                          : { id: 'player-actions.repeat-context' },
                );
        },
        8812: (e) => {
            e.exports = {
                root: 'QualitySettings_root__bsEFH',
                root_withEqualizer: 'QualitySettings_root_withEqualizer__KF0Ng',
                root_withNewQuality: 'QualitySettings_root_withNewQuality__wP_x5',
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
        10769: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var i = a(88800),
                r = a(65724),
                s = a(35412),
                n = a(73170),
                l = a(29504),
                o = a(53533),
                u = a.n(o);
            let d = (e) => {
                let { title: t, children: a, restrictionsClassName: o, ...d } = e;
                return (0, i.jsxs)('section', {
                    className: u().root,
                    ...(0, s.OZ)(d),
                    children: [
                        t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(l.HL, { variant: 'span', type: 'text', size: 'm', weight: 'medium', 'aria-hidden': !0, children: t }),
                                    (0, i.jsx)(n.q, { children: (0, i.jsx)(l.DZ, { variant: 'h4', children: t }) }),
                                ],
                            }),
                        (0, i.jsx)('div', { className: (0, r.$)(u().restrictions, o), children: a }),
                    ],
                });
            };
        },
        16462: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => f });
            var i = a(88800),
                r = a(84961),
                s = a(2058),
                n = a(17392),
                l = a(10769),
                o = a(72288),
                u = a(65724),
                d = a(53548),
                c = a(52073),
                _ = a(96817),
                p = a(90688),
                m = a(29504),
                E = a(86535),
                C = a(12816),
                A = a(47964);
            let y = (e) => {
                var t, a, i;
                let { seed: r, title: n, isStation: l } = e,
                    { vibe: u } = (0, o.g)(),
                    { applySetting: c } = (0, A.B)({
                        seeds: null != (i = null == (t = u.meta) ? void 0 : t.seeds) ? i : [],
                        pageIdForFrom: C._Q.HOME,
                        blockIdForFrom: E.h.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: _ } = (0, s.A)(),
                    p = !!(null == (a = u.meta) ? void 0 : a.seeds.includes(r)),
                    m = u.applyingSetting === r,
                    y = (0, d.useMemo)(
                        () => (p ? ''.concat(_({ id: 'vibe-actions.remove' }), ' ').concat(n) : ''.concat(_({ id: 'vibe-actions.apply' }), ' ').concat(n)),
                        [p, n, _],
                    );
                return {
                    isApplying: m,
                    isSelected: p,
                    ariaLabel: y,
                    ariaPressed: p,
                    onClickHandler: (0, d.useCallback)(async () => {
                        (u.setApplyingSetting(r), await c(r, l), u.setApplyingSetting());
                    }, [c, l, r, u]),
                };
            };
            var b = a(95049),
                h = a.n(b);
            let x = (0, r.PA)((e) => {
                let { item: t } = e,
                    { vibe: a } = (0, o.g)(),
                    r = (0, d.useRef)(null),
                    { isApplying: s, isSelected: l, ariaPressed: E, onClickHandler: C } = y({ seed: t.seed, title: t.title, isStation: !0 }),
                    A = (0, d.useCallback)(
                        (e) => {
                            a.isApplying || (r.current && (0, c.P)(e, h().ripple, r.current), C());
                        },
                        [C, a.isApplying],
                    );
                return (0, i.jsxs)(_.$, {
                    radius: 'xxxl',
                    className: (0, u.$)(h().button, h().textButton, { [h().button_selected]: l, [h().button_applying]: s, [h().specialButton]: t.specialContext }),
                    onClick: A,
                    'aria-disabled': a.isApplying,
                    'aria-pressed': E,
                    withRipple: !1,
                    'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON,
                    children: [
                        t.specialContext && (0, i.jsx)(p._V, { className: h().specialImage, src: t.specialContextImage, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                        (0, i.jsx)(m.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: h().title, children: t.title }),
                        (0, i.jsx)('div', { className: h().rippleContainer, ref: r }),
                    ],
                });
            });
            var g = a(80693);
            let v = (0, r.PA)((e) => {
                let { type: t, restrictionValue: a } = e,
                    { vibe: r } = (0, o.g)(),
                    s = (0, d.useRef)(null),
                    { isApplying: l, isSelected: E, ariaPressed: C, onClickHandler: A } = y({ seed: a.seed, title: a.title }),
                    b = (0, d.useCallback)(
                        (e) => {
                            r.isApplying || (s.current && (0, c.P)(e, h().ripple, s.current), A());
                        },
                        [A, r.isApplying],
                    ),
                    x = (0, d.useMemo)(
                        () => (0, i.jsx)(m.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: h().title, children: a.title }),
                        [a.title],
                    );
                switch (t) {
                    case g.s.DIVERSITY:
                        return (0, i.jsxs)(_.$, {
                            className: (0, u.$)(h().button, h().diversityButton, { [h().button_selected]: E, [h().button_applying]: l }),
                            radius: 'xl',
                            'aria-disabled': r.isApplying,
                            'aria-pressed': C,
                            onClick: b,
                            withRipple: !1,
                            'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON,
                            children: [
                                (0, i.jsx)(p._V, {
                                    'aria-hidden': !0,
                                    src: a.imageUrl,
                                    fit: 'contain',
                                    width: 40,
                                    height: 40,
                                    withAvatarReplace: !0,
                                    className: h().diversityButtonImage,
                                }),
                                x,
                                (0, i.jsx)('div', { className: h().rippleContainer, ref: s }),
                            ],
                        });
                    case g.s.MOOD_ENERGY:
                        return (0, i.jsxs)('div', {
                            className: h().moodEnergy,
                            'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON,
                            children: [
                                (0, i.jsx)(_.$, {
                                    variant: 'text',
                                    className: (0, u.$)(h().button, h().moodEnergyButton, { [h().button_selected]: E, [h().button_applying]: l }),
                                    radius: 'round',
                                    onClick: b,
                                    withRipple: !1,
                                    'aria-disabled': r.isApplying,
                                    'aria-pressed': C,
                                    'aria-label': a.title,
                                    children: (0, i.jsx)(p._V, {
                                        src: a.imageUrl,
                                        fit: 'contain',
                                        width: 52,
                                        height: 52,
                                        'aria-hidden': !0,
                                        withAvatarReplace: !0,
                                        className: h().moodEnergyButtonImage,
                                    }),
                                }),
                                (0, i.jsx)('span', { 'aria-hidden': !0, children: x }),
                            ],
                        });
                    case g.s.LANGUAGE:
                        return (0, i.jsxs)(_.$, {
                            radius: 'xxxl',
                            className: (0, u.$)(h().button, h().textButton, { [h().button_selected]: E, [h().button_applying]: l }),
                            onClick: b,
                            withRipple: !1,
                            'aria-disabled': r.isApplying,
                            'aria-pressed': C,
                            'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON,
                            children: [x, (0, i.jsx)('div', { className: h().rippleContainer, ref: s })],
                        });
                    default:
                        return null;
                }
            });
            var B = a(35073),
                N = a.n(B);
            let f = (0, r.PA)(() => {
                let { vibeSettings: e } = (0, o.g)(),
                    { formatMessage: t } = (0, s.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, i.jsxs)('div', {
                        className: N().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, i.jsx)(l.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: N().contextItems,
                                    'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK,
                                    children: e.contextItems.map((e) =>
                                        (0, i.jsx)(x, { item: e, 'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON }, e.seed),
                                    ),
                                }),
                            e.diversity &&
                                (0, i.jsx)(l.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: N().diversity,
                                    'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK,
                                    children: e.diversity.values.map((t) => {
                                        var a;
                                        return (0, i.jsx)(v, { type: null == (a = e.diversity) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, i.jsx)(l.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: N().moodEnergy,
                                    'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                                    children: e.moodEnergy.values.map((t) => {
                                        var a;
                                        return (0, i.jsx)(v, { type: null == (a = e.moodEnergy) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, i.jsx)(l.m, {
                                    title: e.language.title,
                                    restrictionsClassName: N().contextItems,
                                    'data-test-id': n.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK,
                                    children: e.language.values.map((t) => {
                                        var a;
                                        return (0, i.jsx)(v, { type: null == (a = e.language) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                        ],
                    })
                );
            });
        },
        19376: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var i = a(53548),
                r = a(7123),
                s = a(37173),
                n = a(9630),
                l = a(72288);
            let o = () => {
                let { freePlayerAccess: e } = (0, l.g)(),
                    t = (0, n.e)();
                (0, i.useEffect)(() => {
                    let a =
                        null == t
                            ? void 0
                            : t.state.playerState.event.onChange((t) => {
                                  t === r.Iu.PLAYING && e.showRestrictionModal(s.W.Playing);
                              });
                    return () => {
                        null == a || a();
                    };
                }, [t, e]);
            };
        },
        19859: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => d });
            var i = a(53548),
                r = a(78793),
                s = a(4805),
                n = a(90780),
                l = a(37436),
                o = a(14518),
                u = a(65523);
            let d = () => {
                let e = (0, n.st)(),
                    t = (0, u.U)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: d } = (0, o.$)();
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!e || !d || !l.W[d] || !a) return;
                        let o = { hash: a, pageId: l.W[d], propertyKey: 'sound_quality', propertyValueNew: i, propertyValueOld: n },
                            u = (0, r.F)({ params: o, logger: t, context: 'useSendEventOnQualitySettingsChanged' });
                        u && (0, s.Bl)(e.evgenInstance, u);
                    },
                    [e, a, t, d],
                );
            };
        },
        24437: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => L });
            var i = a(88800),
                r = a(65724),
                s = a(84961),
                n = a(53548),
                l = a(2058),
                o = a(88969),
                u = a(17392),
                d = a(16473),
                c = a(29993),
                _ = a(96817),
                p = a(52300),
                m = a(11372),
                E = a(73170),
                C = a(29504),
                A = a(18052),
                y = a(31051),
                b = a(4086),
                h = a(41928),
                x = a(44230),
                g = a(92867),
                v = a(29595),
                B = a(74965),
                N = a(7748),
                f = a(72288),
                S = a(15253),
                D = a(52726),
                T = a(19859),
                F = a(58084),
                I = a(58292),
                q = a(8812),
                z = a.n(q),
                O = a(26713),
                R = a.n(O);
            let L = (0, s.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: a,
                        quality: s,
                    } = (0, f.g)(),
                    q = (0, A.S)(),
                    { contentRootRef: O } = (0, x.g)(),
                    { formatMessage: L } = (0, l.A)(),
                    j = (0, h.N)(),
                    { notify: k } = (0, B.l)(),
                    M = (0, n.useId)(),
                    P = (0, N.g)(),
                    w = (0, g.U)(R().narrowViewportQuery),
                    V = j.get(b.oo),
                    U = (0, T.$)(),
                    Q = (0, n.useCallback)(
                        (e) => {
                            (U(e, t.quality), t.setQuality(e), null == P || P.setQuality(e), V.set(S.c.YmPlayerQuality, e, { expires: 365 }));
                        },
                        [P, t, V, U],
                    ),
                    K = (0, n.useCallback)(
                        (e) => {
                            let t = L({ id: e }).toLowerCase();
                            return {
                                message: (0, i.jsx)(o.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: L({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [L],
                    ),
                    G = (0, n.useCallback)(
                        (e, a) => () => {
                            if (t.quality === e) return;
                            (s.modal.close(), Q(e));
                            let { message: r, ariaLabel: n } = K(a);
                            k((0, i.jsx)(F.J, { onOpenQualitySettingsMenu: s.modal.open, message: r, ariaLabel: n }), { containerId: v.u.INFO });
                        },
                        [K, k, t.quality, Q, s.modal],
                    ),
                    H = (0, c.c)((e) => {
                        switch (e) {
                            case d.e.HIGH_QUALITY:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case d.e.BALANCED:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    Y = (0, n.useCallback)(
                        (e) => {
                            let { selectedItemIcon: a, type: s, qualityMessageId: n, text: l } = e;
                            return (e) => {
                                let { isPopoverEnabled: o, popoverText: u } = e;
                                return (0, i.jsx)(
                                    _.$,
                                    {
                                        isBlock: !0,
                                        className: (0, r.$)(z().item, R().button, z().expandedItem),
                                        iconPosition: 'right',
                                        icon: a,
                                        onClick: o ? void 0 : G(s, n),
                                        'aria-pressed': s === t.quality,
                                        variant: 'text',
                                        'data-test-id': H(s),
                                        children: (0, i.jsxs)('span', {
                                            className: z().itemWrapper,
                                            children: [
                                                (0, i.jsxs)('span', { className: z().item_option, children: [l, ' ', (0, i.jsx)(E.q, { children: u })] }),
                                                (0, i.jsx)('span', { className: (0, r.$)(z().item_option, z().itemSubTitle), children: I.f8[s] }),
                                            ],
                                        }),
                                    },
                                    s,
                                );
                            };
                        },
                        [G, H, t.quality],
                    );
                (0, n.useEffect)(
                    () => () => {
                        s.modal.close();
                    },
                    [s.modal],
                );
                let $ = !a.hasPlus,
                    Z = (0, n.useMemo)(
                        () =>
                            I.GQ.map((a) => {
                                let { type: r, text: s, qualityMessageId: n } = a,
                                    l = r === t.quality ? (0, i.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null;
                                return (0, i.jsx)(
                                    D.S,
                                    {
                                        isNested: !w,
                                        popoverContentClassName: R().subscriptionPopover,
                                        isEnabled: $ && !e,
                                        placement: w ? 'top' : 'left',
                                        transform: !1,
                                        offsetOptions: { mainAxis: 9 },
                                        textVariant: 'highQuality',
                                        renderChildren: Y({ selectedItemIcon: l, type: r, qualityMessageId: n, text: s }),
                                    },
                                    r,
                                );
                            }),
                        [t.quality, $, e, Y, w],
                    ),
                    X = (0, n.useMemo)(() => {
                        if (q.isAvailable && !e)
                            return (0, i.jsx)(
                                y.r,
                                {
                                    isExpanded: q.isEnabled,
                                    isDisabled: !1,
                                    className: (0, r.$)(z().equalizer, z().equalizer_withNewQuality),
                                    title: L({ id: 'equalizer.title' }),
                                },
                                M,
                            );
                    }, [M, L, e, q.isEnabled, q.isAvailable]);
                return (0, i.jsxs)(m.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: s.modal.isOpened,
                    onOpenChange: s.modal.onOpenChange,
                    onClose: s.modal.close,
                    className: R().root,
                    contentClassName: R().modalContent,
                    portalNode: e ? null : O,
                    showHeader: !1,
                    overlayClassName: R().overlay,
                    'data-test-id': u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU,
                    children: [
                        !e &&
                            (0, i.jsxs)('div', {
                                className: z().headerWithCloseButton,
                                children: [
                                    (0, i.jsx)(C.DZ, { variant: 'h4', size: 'xs', weight: 'bold', children: (0, i.jsx)(o.A, { id: 'player-actions.audio-quality' }) }),
                                    (0, i.jsx)(_.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, i.jsx)(p.I, { variant: 'close', size: 'xxs' }),
                                        onClick: s.modal.close,
                                        'aria-label': L({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                            }),
                        Z,
                        X,
                    ],
                });
            });
        },
        24926: () => {},
        26713: (e) => {
            e.exports = {
                narrowViewportQuery: '(max-width:59.99875rem)',
                root: 'QualitySettingsModal_root__f3gE2',
                modalContent: 'QualitySettingsModal_modalContent__R_JNT',
                overlay: 'QualitySettingsModal_overlay__8pjOO',
                subscriptionPopover: 'QualitySettingsModal_subscriptionPopover__rzHbz',
                button: 'QualitySettingsModal_button__BCHBi',
            };
        },
        27397: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => b });
            var i = a(88800),
                r = a(28692),
                s = a(29993),
                n = a(29595),
                l = a(74965),
                o = a(9630),
                u = a(72288),
                d = a(65724),
                c = a(2058),
                _ = a(52300),
                p = a(73170),
                m = a(29504),
                E = a(59304),
                C = a(98291),
                A = a.n(C);
            let y = (e) => {
                    let t,
                        { repeatMode: a, closeToast: s } = e,
                        { formatMessage: n } = (0, c.A)(),
                        l = a === r.pM.ONE ? 'repeat_one' : 'repeat';
                    switch (a) {
                        case r.pM.CONTEXT:
                            t = n({ id: 'notifications-info.change-repeat-context' });
                            break;
                        case r.pM.ONE:
                            t = n({ id: 'notifications-info.change-repeat-track' });
                            break;
                        case r.pM.NONE:
                        default:
                            t = n({ id: 'notifications-info.change-repeat-none' });
                    }
                    return (0, i.jsx)(E.$, {
                        cover: (0, i.jsx)(_.I, { className: (0, d.$)(A().icon, { [A().icon_unset]: a === r.pM.NONE }), size: 'xs', variant: l }),
                        message: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                                (0, i.jsx)(m.HL, { className: A().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                            ],
                        }),
                        closeToast: s,
                        coverRadius: 's',
                    });
                },
                b = () => {
                    let { notify: e } = (0, l.l)(),
                        { fullscreenPlayer: t } = (0, u.g)(),
                        a = (0, o.e)();
                    return (0, s.c)((s, l) => {
                        if (null === s.entityMeta || !s.canChangeRepeatMode) return;
                        let o = ((e, t) => (t ? (e === r.pM.NONE ? r.pM.ONE : r.pM.NONE) : e === r.pM.NONE ? r.pM.CONTEXT : e === r.pM.CONTEXT ? r.pM.ONE : r.pM.NONE))(
                            s.repeatMode,
                            s.isVibeContext,
                        );
                        (null == a || a.setRepeatMode(o, l), e((0, i.jsx)(y, { repeatMode: o }), { containerId: t.modal.isOpened ? n.u.FULLSCREEN_INFO : n.u.INFO }));
                    });
                };
        },
        31051: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => T });
            var i = a(88800),
                r = a(65724),
                s = a(84961),
                n = a(53548),
                l = a(2058),
                o = a(16967),
                u = a(17392),
                d = a(16161),
                c = a(29504),
                _ = a(18052),
                p = a(60143),
                m = a.n(p),
                E = a(88969),
                C = a(51814),
                A = a(96817),
                y = a(2288),
                b = a(52300),
                h = a(61432),
                x = a.n(h);
            let g = {
                    [C.f.DEFAULT]: (0, i.jsx)(E.A, { id: 'equalizer.default-preset' }),
                    [C.f.CUSTOM]: (0, i.jsx)(E.A, { id: 'equalizer.custom-preset' }),
                    [C.f.CLASSICAL]: (0, i.jsx)(E.A, { id: 'equalizer.classical-preset' }),
                    [C.f.CLUB]: (0, i.jsx)(E.A, { id: 'equalizer.club-preset' }),
                    [C.f.DANCE]: (0, i.jsx)(E.A, { id: 'equalizer.dance-preset' }),
                    [C.f.BASS_BOOST]: (0, i.jsx)(E.A, { id: 'equalizer.bass-boost-preset' }),
                    [C.f.BASS_AND_TREBLE_BOOST]: (0, i.jsx)(E.A, { id: 'equalizer.bass-and-treble-boost-preset' }),
                    [C.f.TREBLE_BOOST]: (0, i.jsx)(E.A, { id: 'equalizer.treble-boost-preset' }),
                    [C.f.SPEAKERS]: (0, i.jsx)(E.A, { id: 'equalizer.speakers-preset' }),
                    [C.f.LARGE_HALL]: (0, i.jsx)(E.A, { id: 'equalizer.large-hall-preset' }),
                    [C.f.CONCERT]: (0, i.jsx)(E.A, { id: 'equalizer.concert-preset' }),
                    [C.f.PARTY]: (0, i.jsx)(E.A, { id: 'equalizer.party-preset' }),
                    [C.f.POP]: (0, i.jsx)(E.A, { id: 'equalizer.pop-preset' }),
                    [C.f.REGGAE]: (0, i.jsx)(E.A, { id: 'equalizer.reggae-preset' }),
                    [C.f.ROCK]: (0, i.jsx)(E.A, { id: 'equalizer.rock-preset' }),
                    [C.f.SKA]: (0, i.jsx)(E.A, { id: 'equalizer.ska-preset' }),
                    [C.f.SOFT]: (0, i.jsx)(E.A, { id: 'equalizer.soft-preset' }),
                    [C.f.SOFT_ROCK]: (0, i.jsx)(E.A, { id: 'equalizer.soft-rock-preset' }),
                    [C.f.TECHNO]: (0, i.jsx)(E.A, { id: 'equalizer.techno-preset' }),
                },
                v = (0, s.PA)((e) => {
                    let { isDisabled: t } = e,
                        a = (0, _.S)(),
                        s = (0, n.useCallback)(
                            (e) => {
                                a.changeCurrentPreset(e.id);
                            },
                            [a],
                        );
                    return (0, i.jsx)(y.ms, {
                        isDisabled: t,
                        className: x().root,
                        onSelect: s,
                        reference: (0, i.jsxs)(A.$, {
                            radius: 'xxxl',
                            className: (0, r.$)(x().button, { [x().button_disabled]: t }),
                            'data-test-id': u.Kq.equalizer.EQUALIZER_PRESETS_BUTTON,
                            children: [
                                (0, i.jsx)(c.HL, { className: x().buttonText, variant: 'span', size: 's', weight: 'medium', children: g[a.currentPreset.id] }),
                                (0, i.jsx)(b.I, { className: x().buttonIcon, size: 'xxs', variant: 'arrowDown' }),
                            ],
                        }),
                        placement: 'top',
                        offsetOptions: -40,
                        defaultValue: a.currentPreset.id,
                        containerClassName: x().container,
                        'data-test-id': u.Kq.equalizer.EQUALIZER_PRESETS_DROPDOWN,
                        children: Object.values(C.f).map((e) => (0, i.jsx)(y.c$, { id: e, label: g[e] }, e)),
                    });
                });
            var B = a(54112),
                N = a(88610),
                f = a.n(N);
            let S = (e) => {
                    let { minValue: t, maxValue: a, className: s, label: n, isDisabled: l, onChange: o, value: d, ..._ } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(f().root, s),
                        'data-test-id': u.Kq.equalizer.EQUALIZER_SLIDER_CONTAINER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: f().container,
                                children: [
                                    (0, i.jsx)('div', { className: f().serif }),
                                    (0, i.jsx)(B.A, {
                                        disabled: l,
                                        className: (0, r.$)(f().slider, f().important),
                                        thumbSize: 'm',
                                        trackSize: 'xxs',
                                        onChange: o,
                                        value: d,
                                        showThumbVariant: 'always',
                                        step: 0.1,
                                        min: t,
                                        max: a,
                                        ..._,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.HL, {
                                'aria-hidden': !0,
                                className: (0, r.$)(f().label, { [f().label_disabled]: l }),
                                variant: 'div',
                                weight: 'normal',
                                size: 'xs',
                                children: n,
                            }),
                        ],
                    });
                },
                D = { enter: m().equalizer_enter, enterActive: m().equalizer_enter_active, exit: m().equalizer_exit, exitActive: m().equalizer_exit_active },
                T = (0, s.PA)((e) => {
                    let { title: t, className: a, isExpanded: s, isDisabled: p } = e,
                        E = (0, n.useRef)(null),
                        { formatMessage: C } = (0, l.A)(),
                        A = (0, _.S)(),
                        y = A.isEnabled ? C({ id: 'equalizer.disable-equalizer' }) : C({ id: 'equalizer.enable-equalizer' }),
                        b = (0, n.useCallback)(
                            (e) => {
                                A.setEnabled(e);
                            },
                            [A],
                        ),
                        h = (0, n.useCallback)(
                            (e) => (t) => {
                                A.changeAmp(e, t);
                            },
                            [A],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                A.changePreamp(e);
                            },
                            [A],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(m().root, a),
                        'data-test-id': u.Kq.equalizer.EQUALIZER_CONTAINER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: m().header,
                                children: [
                                    (0, i.jsx)(c.HL, {
                                        className: m().title,
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': u.Kq.equalizer.EQUALIZER_TITLE,
                                        children: t,
                                    }),
                                    (0, i.jsx)(d.l, { 'aria-label': y, isChecked: A.isEnabled, onChange: b, 'data-test-id': u.Kq.equalizer.EQUALIZER_TOGGLE }),
                                ],
                            }),
                            (0, i.jsx)(o.A, {
                                in: s,
                                nodeRef: E,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: D,
                                children: (0, i.jsxs)('div', {
                                    ref: E,
                                    className: (0, r.$)(m().equalizer, { [m().equalizer_disabled]: p }),
                                    'data-test-id': u.Kq.equalizer.EQUALIZER_FREQUENCIES_CONTAINER,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: m().container,
                                            children: [
                                                (0, i.jsxs)('div', {
                                                    className: m().preamp,
                                                    children: [
                                                        (0, i.jsx)(S, {
                                                            isDisabled: p,
                                                            minValue: 0.5,
                                                            maxValue: 1.5,
                                                            value: A.currentPreset.preamp,
                                                            onChange: x,
                                                            label: C({ id: 'equalizer.preamp-level' }),
                                                            'aria-label': C({ id: 'equalizer.slider-preamp-label' }),
                                                            'data-test-id': u.Kq.equalizer.EQUALIZER_PREAMP_SLIDER,
                                                        }),
                                                        (0, i.jsxs)('div', {
                                                            className: m().labels,
                                                            'aria-hidden': !0,
                                                            children: [
                                                                (0, i.jsx)(c.HL, {
                                                                    className: m().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: C({ id: 'equalizer.amp-label' }, { value: 12 }),
                                                                }),
                                                                (0, i.jsx)(c.HL, {
                                                                    className: m().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: C({ id: 'equalizer.amp-label' }, { value: 0 }),
                                                                }),
                                                                (0, i.jsx)(c.HL, {
                                                                    className: m().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: C({ id: 'equalizer.amp-label' }, { value: -12 }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: m().frequencies,
                                                    children: A.currentPreset.frequencies.map((e) => {
                                                        let t = ((e, t) =>
                                                                e < 1e3 ? e.toString() : t({ id: 'equalizer.frequency-label' }, { value: (e / 1e3).toFixed(0) }))(
                                                                e.key,
                                                                C,
                                                            ),
                                                            a = Math.round(10 * e.value) / 10;
                                                        return (0, i.jsx)(
                                                            S,
                                                            {
                                                                isDisabled: p,
                                                                minValue: -12,
                                                                maxValue: 12,
                                                                value: e.value,
                                                                label: t,
                                                                onChange: h(e.key),
                                                                'aria-label': C({ id: 'equalizer.slider-frequency-label' }, { label: t, value: a }),
                                                                'data-test-id': u.Kq.equalizer.EQUALIZER_FREQUENCY_SLIDER,
                                                            },
                                                            t,
                                                        );
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(v, { isDisabled: p }),
                                    ],
                                }),
                            }),
                        ],
                    });
                });
        },
        35073: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        35262: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => C });
            var i = a(88800),
                r = a(65724),
                s = a(84961),
                n = a(53548),
                l = a(2058),
                o = a(92716),
                u = a(17392),
                d = a(96817),
                c = a(52300),
                _ = a(18684),
                p = a(72288),
                m = a(24926),
                E = a.n(m);
            let C = (0, s.PA)((e) => {
                let { className: t, variant: a = 'text', isDisliked: s = !1, onClick: m, iconClassName: C, iconSize: A, size: y = 's', disabled: b = !1 } = e,
                    { user: h } = (0, p.g)(),
                    { formatMessage: x } = (0, l.A)(),
                    g = (0, _.m)(),
                    v = (0, n.useCallback)(
                        (e) => {
                            (null == m || m(e), e.stopPropagation(), g({ actionType: o.ActionType.Dislike }));
                        },
                        [m, g],
                    );
                return (0, i.jsx)(d.$, {
                    className: (0, r.$)(E().root, t),
                    withRipple: !1,
                    variant: a,
                    size: y,
                    radius: 'round',
                    disabled: !h.isAuthorized || b,
                    'aria-label': x({ id: 'interface-actions.do-not-like' }),
                    'aria-pressed': s,
                    onClick: v,
                    icon: (0, i.jsx)(c.I, { size: A, className: C, variant: s ? 'disliked' : 'dislike' }),
                    'data-test-id': u.S7.DISLIKE_BUTTON,
                });
            });
        },
        36361: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => b });
            var i = a(88800),
                r = a(29993),
                s = a(29595),
                n = a(74965),
                l = a(9630),
                o = a(72288),
                u = a(65724),
                d = a(53548),
                c = a(2058),
                _ = a(52300),
                p = a(73170),
                m = a(29504),
                E = a(59304),
                C = a(56597),
                A = a.n(C);
            let y = (e) => {
                    let { shuffle: t, closeToast: a } = e,
                        { formatMessage: r } = (0, c.A)(),
                        s = (0, d.useMemo)(() => (t ? r({ id: 'notifications-info.shuffle-enabled' }) : r({ id: 'notifications-info.shuffle-disabled' })), [r, t]),
                        n = (0, d.useMemo)(
                            () =>
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(p.q, { children: (0, i.jsx)('p', { role: 'alert', children: s }) }),
                                        (0, i.jsx)(m.HL, { className: A().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: s }),
                                    ],
                                }),
                            [s],
                        );
                    return (0, i.jsx)(E.$, {
                        cover: (0, i.jsx)(_.I, { className: (0, u.$)(A().icon, { [A().icon_unset]: !t }), size: 'xs', variant: 'shuffle' }),
                        message: n,
                        closeToast: a,
                        coverRadius: 's',
                    });
                },
                b = () => {
                    let { notify: e } = (0, n.l)(),
                        { fullscreenPlayer: t } = (0, o.g)(),
                        a = (0, l.e)();
                    return (0, r.c)((r, n) => {
                        null !== r.entityMeta &&
                            r.canShuffle &&
                            (null == a || a.toggleShuffle(n),
                            e((0, i.jsx)(y, { shuffle: !!(null == a ? void 0 : a.getState(n).queueState.shuffle.value) }), {
                                containerId: t.modal.isOpened ? s.u.FULLSCREEN_INFO : s.u.INFO,
                            }));
                    });
                };
        },
        39185: (e, t, a) => {
            'use strict';
            a.d(t, { CU: () => l, f_: () => n, pp: () => i });
            let i = [1, 1.25, 1.5, 1.75, 2],
                r = ['speed_1x', 'speed_1_25x', 'speed_1_5x', 'speed_1_75x', 'speed_2x'],
                s = ['speed_1x_centered', 'speed_1_25x_centered', 'speed_1_5x_centered', 'speed_1_75x_centered', 'speed_2x_centered'],
                n = { 1: 0, 1.25: 1, 1.5: 2, 1.75: 3, 2: 4 },
                l = (e, t) => {
                    var a, i, l;
                    let o = null != (a = n[e]) ? a : 0,
                        u = null != (i = r[o]) ? i : 'speed_1x';
                    return t ? (null != (l = s[o]) ? l : 'speed_1x_centered') : u;
                };
        },
        41160: (e) => {
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
        45732: (e) => {
            e.exports = {
                message: 'NotificationChangeQuality_message__coCvn',
                changeButton: 'NotificationChangeQuality_changeButton__Hzc3y',
                icon: 'NotificationChangeQuality_icon__bOfQO',
            };
        },
        53533: (e) => {
            e.exports = { root: 'RestrictionBlock_root__qzBtp', restrictions: 'RestrictionBlock_restrictions__6V1zc' };
        },
        54112: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => u });
            var i,
                r = a(53548),
                s = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (r && (r += ' '), (r += i));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => r }));
                        let r = i;
                    },
                    3801: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'JkKcxRVvjK7lcakkEliC',
                            root_alwaysThumb: 'cOKDtLfDZAuPXftfS2WM',
                            root_trackSize_xxs: 'd6VuG0HnwpGO47uPjPeb',
                            root_trackSize_xs: 'IB_XOYAyYPK4aszY9R1F',
                            root_trackSize_s: 'SHvrm0VRiLVwGqJJjNO8',
                            root_thumbSize_xs: 'BlvJwKLYTicnbJ3Qyuou',
                            root_neverThumb: 'dDJBVBTkzY5zY7vtSbyr',
                            root_thumbSize_s: 'qpvIbN4_hF6CqK0bjCq7',
                            root_thumbSize_m: 'P8_ABi1YnAOS8p8EY87f',
                            root_thumbSize_l: 'D21lBltSEiwHAaG39z6x',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    3086: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.ThumbVariant = t.DEFAULT_MAX_VALUE = t.SliderMode = void 0),
                            (t.SliderMode = { NORMAL: 'normal', DEFERRED: 'deferred' }),
                            (t.DEFAULT_MAX_VALUE = 100),
                            (t.ThumbVariant = { HOVER: 'hover', NEVER: 'never', ALWAYS: 'always' }));
                    },
                    3042: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Slider = void 0));
                        let r = a(4377),
                            s = a(5881),
                            n = a(810),
                            l = a(3086),
                            o = i(a(3801)),
                            u = (e) => {
                                let {
                                        forwardRef: t,
                                        className: a,
                                        value: i,
                                        secondaryValue: u = l.DEFAULT_MAX_VALUE,
                                        maxValue: d = l.DEFAULT_MAX_VALUE,
                                        thumbSize: c = 'l',
                                        trackSize: _ = 's',
                                        mode: p = l.SliderMode.NORMAL,
                                        onChange: m,
                                        showThumbVariant: E = l.ThumbVariant.HOVER,
                                        ...C
                                    } = e,
                                    [A, y] = (0, n.useState)(null != i ? i : 0),
                                    [b, h] = (0, n.useState)(!1),
                                    [x, g] = (0, n.useState)(!1);
                                ((0, n.useEffect)(() => {
                                    b || y(i);
                                }, [i, b]),
                                    (0, n.useEffect)(() => {
                                        !b && x && p === l.SliderMode.DEFERRED && (m(A, !0), g(!1));
                                    }, [p, b, m, A, x]));
                                let v = (0, n.useCallback)(
                                        (e) => {
                                            let t = Number(e.target.value);
                                            (y(t), g(!0), 'normal' === p ? (m(t, !0), g(!1)) : m(t, !1));
                                        },
                                        [y, m, p],
                                    ),
                                    B = (0, n.useCallback)(
                                        (e) => {
                                            let t = !1,
                                                a = !1;
                                            (e.stopPropagation(),
                                                e.nativeEvent instanceof window.MouseEvent
                                                    ? ((t = 0 === e.nativeEvent.button), (a = 'mousedown' === e.nativeEvent.type))
                                                    : ((t = 1 === e.nativeEvent.touches.length || 'touchend' === e.nativeEvent.type),
                                                      (a = 'touchstart' === e.nativeEvent.type)),
                                                t && h(a));
                                        },
                                        [h],
                                    ),
                                    N = (0, n.useCallback)(() => {
                                        h(!1);
                                    }, [h]),
                                    f = (0, n.useMemo)(() => {
                                        let e = (100 * Math.min(A, d)) / d,
                                            t = (100 * Math.min(u, d)) / d;
                                        return {
                                            backgroundSize: ''.concat(e, '% 100%'),
                                            '--seek-before-width': ''.concat(e, '%'),
                                            '--buffered-width': ''.concat(t, '%'),
                                        };
                                    }, [A, u, d]);
                                return (0, r.jsx)('input', {
                                    ref: t,
                                    className: (0, s.clsx)(
                                        o.default.root,
                                        {
                                            [o.default['root_thumbSize_'.concat(c)]]: c,
                                            [o.default['root_trackSize_'.concat(_)]]: _,
                                            [o.default['root_'.concat(E, 'Thumb')]]: E,
                                        },
                                        a,
                                    ),
                                    type: 'range',
                                    max: d,
                                    value: A,
                                    style: f,
                                    onTouchStart: B,
                                    onTouchEnd: B,
                                    onMouseDown: B,
                                    onMouseUp: B,
                                    onMouseOut: N,
                                    onBlur: N,
                                    onChange: v,
                                    ...C,
                                });
                            };
                        t.Slider = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return (s[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.i = void 0));
                var e = l(3042);
                Object.defineProperty(o, 'i', {
                    enumerable: !0,
                    get: function () {
                        return e.Slider;
                    },
                });
            })();
            var u = o.i;
            o.X;
        },
        56597: (e) => {
            e.exports = { icon: 'NotificationShuffle_icon__U_ape', message: 'NotificationShuffle_message__BNxJm', icon_unset: 'NotificationShuffle_icon_unset__y1jg_' };
        },
        57496: (e, t, a) => {
            'use strict';
            a.d(t, { OH: () => l });
            var i = a(68211),
                r = {
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
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
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            r = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
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
                            }));
                        let s = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, r.findColorBucketByName)(e);
                            return a ? s(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, r.findColorBucketByHue)(t.h) : (0, r.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? s(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    2660: (e) => {
                        e.exports = i;
                    },
                },
                s = {},
                n = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var i = (s[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(1888);
            (n.FALLBACK_NAME,
                n.FALLBACK_PALETTE,
                n.PRIMARY_DARK_IDLE_STOPS,
                n.PRIMARY_GRADIENT_STOPS,
                n.SECONDARY_GRADIENT_STOPS,
                n.__esModule,
                n.getVibeColorBucketSelection,
                n.getVibePaletteByBucketName);
            var l = n.getVibePaletteColors;
        },
        58084: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => E });
            var i = a(88800),
                r = a(53548),
                s = a(2058),
                n = a(88969),
                l = a(17392),
                o = a(96817),
                u = a(52300),
                d = a(73170),
                c = a(29504),
                _ = a(59304),
                p = a(45732),
                m = a.n(p);
            let E = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: a, message: p, ariaLabel: E, isMobile: C } = e,
                    { formatMessage: A } = (0, s.A)(),
                    y = (0, r.useCallback)(() => {
                        (a(), null == t || t());
                    }, [t, a]),
                    b = (0, r.useMemo)(
                        () =>
                            (0, i.jsxs)('div', {
                                className: m().message,
                                children: [
                                    (0, i.jsx)(d.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': E }) }),
                                    (0, i.jsx)(c.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        'aria-hidden': !0,
                                        'data-test-id': l.e8.player.NOTIFICATION_CHANGE_QUALITY_TEXT,
                                        children: p,
                                    }),
                                    !C &&
                                        (0, i.jsx)(o.$, {
                                            className: m().changeButton,
                                            onClick: y,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': A({ id: 'interface-actions.change' }),
                                            children: (0, i.jsx)(c.HL, { variant: 'div', size: 'm', children: (0, i.jsx)(n.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [E, A, y, p, C],
                    );
                return (0, i.jsx)(_.$, { closeToast: t, cover: (0, i.jsx)(u.I, { className: m().icon, size: 'xs', variant: 'settings' }), message: b, coverRadius: 's' });
            };
        },
        58292: (e, t, a) => {
            'use strict';
            a.d(t, { GQ: () => q, f8: () => z, p$: () => O });
            var i = a(88800),
                r = a(65724),
                s = a(84961),
                n = a(53548),
                l = a(88969),
                o = a(2058),
                u = a(17392),
                d = a(16473),
                c = a(78275),
                _ = a(96817),
                p = a(52300),
                m = a(19934),
                E = a(73170),
                C = a(18052),
                A = a(31051),
                y = a(4086),
                b = a(41928),
                h = a(29595),
                x = a(74965),
                g = a(95210),
                v = a(7748),
                B = a(72288),
                N = a(15253),
                f = a(52726),
                S = a(63955),
                D = a(19859),
                T = a(58084),
                F = a(8812),
                I = a.n(F);
            let q = [
                    {
                        type: d.e.HIGH_QUALITY,
                        text: (0, i.jsx)(l.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: d.e.BALANCED,
                        text: (0, i.jsx)(l.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: d.e.EFFICIENT,
                        text: (0, i.jsx)(l.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                z = {
                    [d.e.HIGH_QUALITY]: (0, i.jsx)(l.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [d.e.BALANCED]: (0, i.jsx)(l.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [d.e.EFFICIENT]: (0, i.jsx)(l.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                O = (0, s.PA)((e) => {
                    let { onOpenChange: t, open: a, placement: s, size: d, referenceClassName: F, icon: O, referenceLabel: R, disabled: L } = e;
                    (0, g.N)(a);
                    let j = (0, n.useId)(),
                        { formatMessage: k } = (0, o.A)(),
                        { notify: M } = (0, x.l)(),
                        P = (0, b.N)().get(y.oo),
                        {
                            sonataState: w,
                            user: V,
                            settings: { isMobile: U },
                            quality: Q,
                        } = (0, B.g)(),
                        K = (0, C.S)(),
                        G = (0, v.g)(),
                        H = (0, D.$)(),
                        { state: Y, setState: $ } = (0, c.e)(!1),
                        Z = (0, n.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        X = (0, n.useCallback)(
                            (e) => {
                                (H(e, w.quality), w.setQuality(e), null == G || G.setQuality(e), P.set(N.c.YmPlayerQuality, e, { expires: 365 }));
                            },
                            [G, w, P, H],
                        ),
                        W = (0, n.useCallback)(
                            (e) => {
                                let t = k({ id: e }).toLowerCase();
                                return {
                                    message: (0, i.jsx)(l.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                    ariaLabel: k({ id: 'notifications-info.quality-changed' }, { quality: t }),
                                };
                            },
                            [k],
                        ),
                        J = (0, n.useCallback)(
                            (e, t) => () => {
                                if (w.quality === e) return;
                                X(e);
                                let { message: a, ariaLabel: r } = W(t);
                                M((0, i.jsx)(T.J, { onOpenQualitySettingsMenu: Z, message: a, ariaLabel: r, isMobile: U }), { containerId: h.u.INFO });
                            },
                            [W, Z, M, w.quality, X, U],
                        ),
                        ee = (0, n.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: a, qualityMessageId: s, text: n } = e;
                                return (e) => {
                                    let { isPopoverEnabled: l, popoverText: o } = e;
                                    return (0, i.jsx)(m.Dr, {
                                        isBlock: !0,
                                        disabled: l,
                                        className: (0, r.$)(I().item, I().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: J(a, s),
                                        role: 'option',
                                        'aria-selected': a === w.quality,
                                        children: (0, i.jsxs)('span', {
                                            className: I().itemWrapper,
                                            children: [
                                                (0, i.jsxs)('span', { className: I().item_option, children: [n, ' ', (0, i.jsx)(E.q, { children: o })] }),
                                                (0, i.jsx)('span', { className: (0, r.$)(I().item_option, I().itemSubTitle), children: z[a] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [J, w.quality],
                        ),
                        et = !V.hasPlus,
                        ea = !V.isAuthorized && U,
                        ei = (0, n.useMemo)(
                            () =>
                                q.map((e) => {
                                    let { type: t, text: a, qualityMessageId: r } = e,
                                        s = t === w.quality ? (0, i.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null;
                                    return (0, i.jsx)(
                                        f.S,
                                        {
                                            isNested: !0,
                                            isEnabled: et && !U,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: ee({ selectedItemIcon: s, type: t, qualityMessageId: r, text: a }),
                                        },
                                        t,
                                    );
                                }),
                            [w.quality, et, U, ee],
                        ),
                        er = (0, n.useMemo)(
                            () => ({
                                listClassName: (0, r.$)(I().root, I().root_withNewQuality, { [I().root_withEqualizer]: K.isAvailable }),
                                menuClassName: (0, r.$)({ [I().menuContent]: !U }),
                            }),
                            [K.isAvailable, U],
                        ),
                        es = (0, n.useMemo)(() => {
                            if (K.isAvailable && !U)
                                return (0, i.jsx)(A.r, { isExpanded: K.isEnabled, isDisabled: !1, className: I().equalizer, title: k({ id: 'equalizer.title' }) }, j);
                        }, [K.isEnabled, j, k, K.isAvailable, U]),
                        en = (0, n.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: n } = e;
                                if (!U)
                                    return (0, i.jsx)(_.$, {
                                        className: (0, r.$)(F, { [I().button_active]: Q.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: d,
                                        icon: O,
                                        variant: 'text',
                                        onClick: Q.modal.open,
                                        'aria-label': k({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        'data-test-id': u.e8.player.SOUND_QUALITY_BUTTON,
                                    });
                                let l = n ? $ : t;
                                return (0, i.jsx)(m.W1, {
                                    wrapperClassName: F,
                                    size: d,
                                    icon: O,
                                    placement: s,
                                    open: a,
                                    onOpenChange: l,
                                    ariaLabel: k({ id: 'player-actions.audio-quality' }),
                                    footer: es,
                                    label: R,
                                    variant: 'text',
                                    ...er,
                                    containerDataTestId: u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU,
                                    isMobile: U,
                                    lockScroll: !U,
                                    disabled: L,
                                    'data-test-id': u.e8.player.SOUND_QUALITY_BUTTON,
                                    children: ei,
                                });
                            },
                            [U, $, t, F, d, O, s, a, k, es, R, er, ei, Q.modal.open, Q.modal.isOpened, L],
                        );
                    return (0, i.jsx)(S.Z, { isEnabled: ea, isOpened: Y, onOpenChange: $, placement: 'top', textVariant: 'changeQuality', renderChildren: en });
                });
        },
        59717: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            var i = (function (e) {
                return ((e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e);
            })({});
        },
        60143: (e) => {
            e.exports = {
                header: 'Equalizer_header__oL2Ii',
                modal: 'Equalizer_modal__yW0lz',
                modalHeader: 'Equalizer_modalHeader__BaeWi',
                modalContent: 'Equalizer_modalContent__xbClm',
                title: 'Equalizer_title__oP3e2',
                frequencies: 'Equalizer_frequencies__M9bt3',
                label: 'Equalizer_label__cAYfh',
                equalizer: 'Equalizer_equalizer__M9Utp',
                equalizer_disabled: 'Equalizer_equalizer_disabled__NciRX',
                equalizer_enter: 'Equalizer_equalizer_enter___0_xp',
                equalizer_enter_active: 'Equalizer_equalizer_enter_active__hRAgb',
                'enter-collapse': 'Equalizer_enter-collapse__Ypuhz',
                equalizer_exit: 'Equalizer_equalizer_exit__wroQI',
                equalizer_exit_active: 'Equalizer_equalizer_exit_active__68Faq',
                'exit-collapse': 'Equalizer_exit-collapse____a2I',
                preamp: 'Equalizer_preamp__hfuqj',
                container: 'Equalizer_container__wK7dV',
                labels: 'Equalizer_labels__rE8Hc',
            };
        },
        61432: (e) => {
            e.exports = {
                root: 'EqualizerPresets_root__b2gp7',
                buttonIcon: 'EqualizerPresets_buttonIcon__DgPG8',
                buttonText: 'EqualizerPresets_buttonText__cy2_S',
                button: 'EqualizerPresets_button__D8s_l',
                button_disabled: 'EqualizerPresets_button_disabled__BcN1s',
                container: 'EqualizerPresets_container__ABVY8',
            };
        },
        63955: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => c });
            var i = a(88800),
                r = a(53548),
                s = a(2058),
                n = a(17392),
                l = a(29504),
                o = a(32721),
                u = a(12876),
                d = a(7628);
            let c = (e) => {
                let { textVariant: t, vibeTextVariant: a, ...c } = e,
                    _ = (0, r.useId)(),
                    { formatMessage: p } = (0, s.A)(),
                    m = (0, r.useMemo)(() => {
                        switch (a) {
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
                    }, [a, p]),
                    E = (0, r.useMemo)(() => {
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
                return (0, i.jsx)(u.z, {
                    contentElement: (0, i.jsx)(l.HL, { variant: 'div', size: 'l', weight: 'bold', children: E }),
                    buttons: [(0, i.jsx)(d.H, { size: 'xxs' }, _)],
                    renderChildrenText: E,
                    contentDataTestId: n.S7.LOGIN_POPOVER,
                    ...c,
                });
            };
        },
        86200: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => b });
            var i = a(88800),
                r = a(65724),
                s = a(84961),
                n = a(53548),
                l = a(2058),
                o = a(17392),
                u = a(29993),
                d = a(79070),
                c = a(78275),
                _ = a(96817),
                p = a(52300),
                m = a(54112),
                E = a(9630),
                C = a(59717),
                A = a(41160),
                y = a.n(A);
            let b = (0, s.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: a,
                        verticalSliderClassName: s,
                        variant: A = C.q.HORIZONTAL,
                        playbackId: b,
                        onVolumeClick: h,
                        onVolumeSet: x,
                        sonataVolume: g,
                        buttonClassName: v,
                    } = e,
                    B = (0, n.useRef)(null),
                    [N, f] = (0, n.useState)(void 0),
                    { formatMessage: S } = (0, l.A)(),
                    D = (0, E.e)(),
                    { state: T, toggleTrue: F, toggleFalse: I } = (0, c.e)(!1);
                (0, n.useEffect)(() => {
                    'number' == typeof g && f(g);
                }, [g]);
                let q = Math.round((null != N ? N : 1) * 100) / 100,
                    z = (0, u.c)((e) => {
                        null == D || D.setExponentVolume(e, b);
                    });
                (0, n.useEffect)(() => {
                    let e = () => {
                            var e;
                            I();
                            let t = document.activeElement;
                            t instanceof HTMLElement && (null == (e = B.current) ? void 0 : e.contains(t)) && t.blur();
                        },
                        t = () => {
                            document.hidden && e();
                        };
                    return (
                        document.addEventListener('visibilitychange', t),
                        window.addEventListener('blur', e),
                        () => {
                            (document.removeEventListener('visibilitychange', t), window.removeEventListener('blur', e));
                        }
                    );
                }, [I]);
                let O = (0, u.c)((e) => {
                        (f(e), z(e), null == x || x(e));
                    }),
                    R = (0, u.c)(async (e) => {
                        await h(q, e);
                    }),
                    L = 0 === q ? 'volumeOff' : 'volume',
                    j = 0 === q ? S({ id: 'player-actions.volume-on' }) : S({ id: 'player-actions.volume-off' }),
                    k = (0, u.c)((e) => {
                        O(Math.max(0, Math.min(1, Math.round(100 * (q + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    M = (0, d.L)(() => {
                        if (A === C.q.HORIZONTAL)
                            return (0, i.jsx)(m.A, {
                                onWheel: k,
                                className: a,
                                thumbSize: 's',
                                trackSize: 's',
                                value: q,
                                maxValue: 1,
                                step: 0.01,
                                onChange: O,
                                'aria-label': S({ id: 'player-actions.volume-control' }),
                                'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                            });
                    }),
                    P = (0, d.L)(() => {
                        if (A === C.q.VERTICAL)
                            return (0, i.jsx)('div', {
                                onWheel: k,
                                className: (0, r.$)(y().sliderContainer, { [y().sliderContainer_focusVisible]: T }),
                                children: (0, i.jsx)('div', {
                                    className: (0, r.$)(y().wrapperSlider, s),
                                    children: (0, i.jsx)(m.A, {
                                        onMouseLeave: I,
                                        className: (0, r.$)(y().slider, y().important),
                                        thumbSize: 's',
                                        onFocus: F,
                                        onBlur: I,
                                        trackSize: 's',
                                        value: q,
                                        maxValue: 1,
                                        step: 0.01,
                                        onChange: O,
                                        'aria-label': S({ id: 'player-actions.volume-control' }),
                                        'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                                    }),
                                }),
                            });
                    });
                return (0, i.jsxs)('div', {
                    ref: B,
                    className: (0, r.$)(y().root, t),
                    children: [
                        P,
                        (0, i.jsx)(_.$, {
                            onWheel: k,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: R,
                            'aria-label': j,
                            icon: (0, i.jsx)(p.I, { size: 'xs', className: y().icon, variant: L }),
                            className: (0, r.$)(y().button, v),
                            'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_BUTTON,
                        }),
                        M,
                    ],
                });
            });
        },
        88610: (e) => {
            e.exports = {
                root: 'EqualizerSlider_root__oyr_3',
                container: 'EqualizerSlider_container__J9Te7',
                slider: 'EqualizerSlider_slider__YC0_X',
                important: 'EqualizerSlider_important____ilL',
                serif: 'EqualizerSlider_serif__CJgYC',
                label: 'EqualizerSlider_label__4wtBj',
                label_disabled: 'EqualizerSlider_label_disabled___26v5',
            };
        },
        95049: (e) => {
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
        98291: (e) => {
            e.exports = { icon: 'NotificationRepeat_icon__WCf4_', message: 'NotificationRepeat_message__jCngy', icon_unset: 'NotificationRepeat_icon_unset__z2fmU' };
        },
    },
]);
