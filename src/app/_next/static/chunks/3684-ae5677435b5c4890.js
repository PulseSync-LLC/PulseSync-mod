(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3684],
    {
        761: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => l });
            var a = i(53548),
                n = i(29993),
                s = i(50408),
                r = i(52455);
            let l = () => {
                let [e, t] = (0, s.d)(),
                    [i, l] = (0, a.useState)(0),
                    o = (0, n.c)(() => {
                        var t;
                        l(null != (t = null == e ? void 0 : e.offsetWidth) ? t : 0);
                    });
                return ((0, r.s)(o, e), { ref: t, width: i });
            };
        },
        5915: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => y });
            var a = i(88800),
                n = i(53548),
                s = i(2058),
                r = i(40700),
                l = i(72193),
                o = i(29993),
                d = i(52456),
                u = i(29595),
                c = i(74965),
                _ = i(9630),
                p = i(72288),
                m = i(66943),
                C = i(99698),
                E = i(42174);
            let y = () => {
                var e, t;
                let { sonataState: i } = (0, p.g)(),
                    y = (0, E.K)(i.entityMeta),
                    A = (0, C.m)(i.entityMeta),
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
                            { formatMessage: y } = (0, s.A)(),
                            [A, g] = (0, n.useState)(!1),
                            { state: B, handleDebouncedToggle: h, reset: b } = (0, d.F)({ delay: 1e4, throttleTimeout: 0 }),
                            { state: x, handleDebouncedToggle: N, reset: v } = (0, d.F)({ delay: 1e4, throttleTimeout: 0 }),
                            D = (0, o.c)(() => {
                                (b(), v());
                            });
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.id) && D();
                        }, [null == e ? void 0 : e.id, D]);
                        let T = (0, o.c)(async (n) => {
                            if (A || !e || !C) return;
                            if (!t.isAuthorized) {
                                let e = i.modal.isOpened ? u.u.FULLSCREEN_ERROR : u.u.ERROR;
                                E((0, a.jsx)(m.h, { error: y({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e });
                                return;
                            }
                            let s = C.getState(),
                                o = C.playbackController.getPlayback();
                            if (s && o && (0, r.S)(s.currentContext.value)) {
                                g(!0);
                                try {
                                    switch (n) {
                                        case l.Q.TimestampLike:
                                            (v(), h());
                                            break;
                                        case l.Q.TimestampDislike:
                                            (b(), N());
                                    }
                                    let t = s.currentContext.value.restartsCount;
                                    (s.queueState.entityList.value.find((t) => {
                                        var i, a;
                                        let { entity: n } = t;
                                        return (null == (a = n.data) || null == (i = a.meta) ? void 0 : i.id) === e.id;
                                    }) && (await s.currentContext.value.sendFeedback(n, o)),
                                        s.currentContext.value.restartsCount > t && D());
                                } catch (t) {
                                    D();
                                    let e = i.modal.isOpened ? u.u.FULLSCREEN_ERROR : u.u.ERROR;
                                    E((0, a.jsx)(m.h, { error: y({ id: 'error-messages.error-during-action' }) }), { containerId: e });
                                } finally {
                                    g(!1);
                                }
                            }
                        });
                        return {
                            isGenerativeLiked: B,
                            isGenerativeDisliked: x,
                            onGenerativeLikeClick: (0, o.c)(() => T(l.Q.TimestampLike)),
                            onGenerativeDislikeClick: (0, o.c)(() => T(l.Q.TimestampDislike)),
                        };
                    })();
                return i.isGenerativeContext
                    ? { isLiked: g, isDisliked: B, handleLike: h, handleDislike: b }
                    : {
                          isLiked: null == (e = i.entityMeta) ? void 0 : e.isLiked,
                          isDisliked: null == (t = i.entityMeta) ? void 0 : t.isDisliked,
                          handleLike: y,
                          handleDislike: A,
                      };
            };
        },
        7023: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var a = i(28692);
            let n = (e, t, i) =>
                t(
                    e === a.pM.NONE || i
                        ? { id: 'player-actions.repeat' }
                        : e === a.pM.ONE
                          ? { id: 'player-actions.repeat-one' }
                          : { id: 'player-actions.repeat-context' },
                );
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => p });
            var a = i(88800),
                n = i(88969),
                s = i(58390),
                r = i(17392),
                l = i(29993),
                o = i(96817),
                d = i(29504),
                u = i(99890),
                c = i(4086),
                _ = i(41928);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: m = !0, buttonText: C, isBlock: E, key: y, className: A } = e,
                    g = (0, s.useRouter)(),
                    B = (0, _.N)().get(c.QG),
                    h = (0, l.c)(() => {
                        B.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(B.authorizationUrl));
                    });
                return (0, a.jsx)(
                    o.$,
                    {
                        onClick: h,
                        className: A,
                        isBlock: E,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: C || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
                );
            };
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
        16462: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => D });
            var a = i(88800),
                n = i(84961),
                s = i(2058),
                r = i(17392),
                l = i(10769),
                o = i(72288),
                d = i(65724),
                u = i(53548),
                c = i(52073),
                _ = i(96817),
                p = i(90688),
                m = i(29504),
                C = i(86535),
                E = i(98427),
                y = i(47964);
            let A = (e) => {
                var t, i, a;
                let { seed: n, title: r, isStation: l } = e,
                    { vibe: d } = (0, o.g)(),
                    { applySetting: c } = (0, y.B)({
                        seeds: null != (a = null == (t = d.meta) ? void 0 : t.seeds) ? a : [],
                        pageIdForFrom: E.b.HOME,
                        blockIdForFrom: C.h.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: _ } = (0, s.A)(),
                    p = !!(null == (i = d.meta) ? void 0 : i.seeds.includes(n)),
                    m = d.applyingSetting === n,
                    A = (0, u.useMemo)(
                        () => (p ? ''.concat(_({ id: 'vibe-actions.remove' }), ' ').concat(r) : ''.concat(_({ id: 'vibe-actions.apply' }), ' ').concat(r)),
                        [p, r, _],
                    );
                return {
                    isApplying: m,
                    isSelected: p,
                    ariaLabel: A,
                    ariaPressed: p,
                    onClickHandler: (0, u.useCallback)(async () => {
                        (d.setApplyingSetting(n), await c(n, l), d.setApplyingSetting());
                    }, [c, l, n, d]),
                };
            };
            var g = i(95049),
                B = i.n(g);
            let h = (0, n.PA)((e) => {
                let { item: t } = e,
                    { vibe: i } = (0, o.g)(),
                    n = (0, u.useRef)(null),
                    { isApplying: s, isSelected: l, ariaPressed: C, onClickHandler: E } = A({ seed: t.seed, title: t.title, isStation: !0 }),
                    y = (0, u.useCallback)(
                        (e) => {
                            i.isApplying || (n.current && (0, c.P)(e, B().ripple, n.current), E());
                        },
                        [E, i.isApplying],
                    );
                return (0, a.jsxs)(_.$, {
                    radius: 'xxxl',
                    className: (0, d.$)(B().button, B().textButton, { [B().button_selected]: l, [B().button_applying]: s, [B().specialButton]: t.specialContext }),
                    onClick: y,
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
            var b = i(80693);
            let x = (0, n.PA)((e) => {
                let { type: t, restrictionValue: i } = e,
                    { vibe: n } = (0, o.g)(),
                    s = (0, u.useRef)(null),
                    { isApplying: l, isSelected: C, ariaPressed: E, onClickHandler: y } = A({ seed: i.seed, title: i.title }),
                    g = (0, u.useCallback)(
                        (e) => {
                            n.isApplying || (s.current && (0, c.P)(e, B().ripple, s.current), y());
                        },
                        [y, n.isApplying],
                    ),
                    h = (0, u.useMemo)(
                        () => (0, a.jsx)(m.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: B().title, children: i.title }),
                        [i.title],
                    );
                switch (t) {
                    case b.s.DIVERSITY:
                        return (0, a.jsxs)(_.$, {
                            className: (0, d.$)(B().button, B().diversityButton, { [B().button_selected]: C, [B().button_applying]: l }),
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
                                    className: (0, d.$)(B().button, B().moodEnergyButton, { [B().button_selected]: C, [B().button_applying]: l }),
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
                            className: (0, d.$)(B().button, B().textButton, { [B().button_selected]: C, [B().button_applying]: l }),
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
            var N = i(35073),
                v = i.n(N);
            let D = (0, n.PA)(() => {
                let { vibeSettings: e } = (0, o.g)(),
                    { formatMessage: t } = (0, s.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, a.jsxs)('div', {
                        className: v().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, a.jsx)(l.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: v().contextItems,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK,
                                    children: e.contextItems.map((e) =>
                                        (0, a.jsx)(h, { item: e, 'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON }, e.seed),
                                    ),
                                }),
                            e.diversity &&
                                (0, a.jsx)(l.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: v().diversity,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK,
                                    children: e.diversity.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(x, { type: null == (i = e.diversity) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, a.jsx)(l.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: v().moodEnergy,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                                    children: e.moodEnergy.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(x, { type: null == (i = e.moodEnergy) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, a.jsx)(l.m, {
                                    title: e.language.title,
                                    restrictionsClassName: v().contextItems,
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
        19376: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var a = i(53548),
                n = i(7123),
                s = i(37173),
                r = i(9630),
                l = i(72288);
            let o = () => {
                let { freePlayerAccess: e } = (0, l.g)(),
                    t = (0, r.e)();
                (0, a.useEffect)(() => {
                    let i =
                        null == t
                            ? void 0
                            : t.state.playerState.event.onChange((t) => {
                                  t === n.Iu.PLAYING && e.showRestrictionModal(s.W.Playing);
                              });
                    return () => {
                        null == i || i();
                    };
                }, [t, e]);
            };
        },
        19859: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => d });
            var a = i(17520),
                n = i(84423),
                s = i(89846),
                r = i(64543),
                l = i(63582),
                o = i(29993);
            let d = (0, l.n)({ event: 'AppSettings.Changed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = null == (e = (0, n.s)()) ? void 0 : e.evgenInstance,
                    { hash: i } = (0, s.g)(),
                    { screen: l } = (0, r.j)(),
                    d = null == l ? void 0 : l.pageId;
                return (0, o.c)((e, n) => {
                    t &&
                        d &&
                        i &&
                        void 0 !== e &&
                        void 0 !== n &&
                        (0, a.Bl)(t, { hash: i, pageId: d, propertyKey: 'sound_quality', propertyValueNew: e, propertyValueOld: n });
                });
            });
        },
        24437: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => M });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(88969),
                d = i(17392),
                u = i(16473),
                c = i(29993),
                _ = i(96817),
                p = i(52300),
                m = i(11372),
                C = i(73170),
                E = i(29504),
                y = i(18052),
                A = i(31051),
                g = i(4086),
                B = i(41928),
                h = i(44230),
                b = i(92867),
                x = i(29595),
                N = i(74965),
                v = i(7748),
                D = i(72288),
                T = i(15253),
                F = i(52726),
                S = i(19859),
                I = i(58084),
                f = i(58292),
                O = i(8812),
                L = i.n(O),
                R = i(26713),
                j = i.n(R);
            let M = (0, s.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: i,
                        quality: s,
                    } = (0, D.g)(),
                    O = (0, y.S)(),
                    { contentRootRef: R } = (0, h.g)(),
                    { formatMessage: M } = (0, l.A)(),
                    k = (0, B.N)(),
                    { notify: q } = (0, N.l)(),
                    z = (0, r.useId)(),
                    P = (0, v.g)(),
                    V = (0, b.U)(j().narrowViewportQuery),
                    w = k.get(g.oo),
                    Q = (0, S.$)(),
                    U = (0, r.useCallback)(
                        (e) => {
                            (Q(e, t.quality), t.setQuality(e), null == P || P.setQuality(e), w.set(T.c.YmPlayerQuality, e, { expires: 365 }));
                        },
                        [P, t, w, Q],
                    ),
                    G = (0, r.useCallback)(
                        (e) => {
                            let t = M({ id: e }).toLowerCase();
                            return {
                                message: (0, a.jsx)(o.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: M({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [M],
                    ),
                    K = (0, r.useCallback)(
                        (e, i) => () => {
                            if (t.quality === e) return;
                            (s.modal.close(), U(e));
                            let { message: n, ariaLabel: r } = G(i);
                            q((0, a.jsx)(I.J, { onOpenQualitySettingsMenu: s.modal.open, message: n, ariaLabel: r }), { containerId: x.u.INFO });
                        },
                        [G, q, t.quality, U, s.modal],
                    ),
                    H = (0, c.c)((e) => {
                        switch (e) {
                            case u.e.HIGH_QUALITY:
                                return d.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case u.e.BALANCED:
                                return d.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return d.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    Y = (0, r.useCallback)(
                        (e) => {
                            let { selectedItemIcon: i, type: s, qualityMessageId: r, text: l } = e;
                            return (e) => {
                                let { isPopoverEnabled: o, popoverText: d } = e;
                                return (0, a.jsx)(
                                    _.$,
                                    {
                                        isBlock: !0,
                                        className: (0, n.$)(L().item, j().button, L().expandedItem),
                                        iconPosition: 'right',
                                        icon: i,
                                        onClick: o ? void 0 : K(s, r),
                                        'aria-pressed': s === t.quality,
                                        variant: 'text',
                                        'data-test-id': H(s),
                                        children: (0, a.jsxs)('span', {
                                            className: L().itemWrapper,
                                            children: [
                                                (0, a.jsxs)('span', { className: L().item_option, children: [l, ' ', (0, a.jsx)(C.q, { children: d })] }),
                                                (0, a.jsx)('span', { className: (0, n.$)(L().item_option, L().itemSubTitle), children: f.f8[s] }),
                                            ],
                                        }),
                                    },
                                    s,
                                );
                            };
                        },
                        [K, H, t.quality],
                    );
                (0, r.useEffect)(
                    () => () => {
                        s.modal.close();
                    },
                    [s.modal],
                );
                let $ = !i.hasPlus,
                    W = (0, r.useMemo)(
                        () =>
                            f.GQ.map((i) => {
                                let { type: n, text: s, qualityMessageId: r } = i,
                                    l = n === t.quality ? (0, a.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null;
                                return (0, a.jsx)(
                                    F.S,
                                    {
                                        isNested: !V,
                                        popoverContentClassName: j().subscriptionPopover,
                                        isEnabled: $ && !e,
                                        placement: V ? 'top' : 'left',
                                        transform: !1,
                                        offsetOptions: { mainAxis: 9 },
                                        textVariant: 'highQuality',
                                        renderChildren: Y({ selectedItemIcon: l, type: n, qualityMessageId: r, text: s }),
                                    },
                                    n,
                                );
                            }),
                        [t.quality, $, e, Y, V],
                    ),
                    Z = (0, r.useMemo)(() => {
                        if (O.isAvailable && !e)
                            return (0, a.jsx)(
                                A.r,
                                {
                                    isExpanded: O.isEnabled,
                                    isDisabled: !1,
                                    className: (0, n.$)(L().equalizer, L().equalizer_withNewQuality),
                                    title: M({ id: 'equalizer.title' }),
                                },
                                z,
                            );
                    }, [z, M, e, O.isEnabled, O.isAvailable]);
                return (0, a.jsxs)(m.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: s.modal.isOpened,
                    onOpenChange: s.modal.onOpenChange,
                    onClose: s.modal.close,
                    className: j().root,
                    contentClassName: j().modalContent,
                    portalNode: e ? null : R,
                    showHeader: !1,
                    overlayClassName: j().overlay,
                    'data-test-id': d.e8.player.QUALITY_SETTINGS_CONTEXT_MENU,
                    children: [
                        !e &&
                            (0, a.jsxs)('div', {
                                className: L().headerWithCloseButton,
                                children: [
                                    (0, a.jsx)(E.DZ, { variant: 'h4', size: 'xs', weight: 'bold', children: (0, a.jsx)(o.A, { id: 'player-actions.audio-quality' }) }),
                                    (0, a.jsx)(_.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, a.jsx)(p.I, { variant: 'close', size: 'xxs' }),
                                        onClick: s.modal.close,
                                        'aria-label': M({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                            }),
                        W,
                        Z,
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
        27397: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var a = i(88800),
                n = i(28692),
                s = i(29993),
                r = i(29595),
                l = i(74965),
                o = i(9630),
                d = i(72288),
                u = i(65724),
                c = i(2058),
                _ = i(52300),
                p = i(73170),
                m = i(29504),
                C = i(59304),
                E = i(98291),
                y = i.n(E);
            let A = (e) => {
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
                        cover: (0, a.jsx)(_.I, { className: (0, u.$)(y().icon, { [y().icon_unset]: i === n.pM.NONE }), size: 'xs', variant: l }),
                        message: (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                                (0, a.jsx)(m.HL, { className: y().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                            ],
                        }),
                        closeToast: s,
                        coverRadius: 's',
                    });
                },
                g = () => {
                    let { notify: e } = (0, l.l)(),
                        { fullscreenPlayer: t } = (0, d.g)(),
                        i = (0, o.e)();
                    return (0, s.c)((s, l) => {
                        if (null === s.entityMeta || !s.canChangeRepeatMode) return;
                        let o = ((e, t) => (t ? (e === n.pM.NONE ? n.pM.ONE : n.pM.NONE) : e === n.pM.NONE ? n.pM.CONTEXT : e === n.pM.CONTEXT ? n.pM.ONE : n.pM.NONE))(
                            s.repeatMode,
                            s.isVibeContext,
                        );
                        (null == i || i.setRepeatMode(o, l), e((0, a.jsx)(A, { repeatMode: o }), { containerId: t.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO }));
                    });
                };
        },
        27723: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => _ });
            var a = i(88800),
                n = i(65724),
                s = i(17392),
                r = i(29504),
                l = i(54965),
                o = i(97361),
                d = i(761),
                u = i(79128),
                c = i.n(u);
            let _ = (e) => {
                let { progress: t, position: i, duration: u, className: _, progressElementWidth: p, offset: m = 0, 'data-test-id': C } = e,
                    E = (0, o.P)(i),
                    y = (0, o.P)(u),
                    {
                        timecodeRef: A,
                        timecodeWidth: g,
                        timecodePosition: B,
                    } = ((e) => {
                        let { progress: t, progressElementWidth: i } = e,
                            { ref: a, width: n } = (0, d.i)(),
                            s = Math.min(Math.max(Math.round((t / 100) * i) - n / 2, 0), Math.max(i - n, 0));
                        return { timecodeRef: a, timecodeWidth: n, timecodePosition: s };
                    })({ progress: t, progressElementWidth: p }),
                    h = (0, l.E)(Math.round(i), Math.round(u)),
                    b = (0, l.E)(Math.round(u), Math.round(u));
                return (0, a.jsx)(r.HL, {
                    role: 'text',
                    'aria-label': ''.concat(E, ' / ').concat(y),
                    style: { '--timecode-offset': ''.concat(m, 'px'), '--timecode-position': ''.concat(B, 'px') },
                    ref: A,
                    variant: 'span',
                    size: 's',
                    type: 'entity',
                    weight: 'medium',
                    className: (0, n.$)(c().timecode, _, { [c().timecode_measured]: g > 0 }),
                    tabIndex: 0,
                    'data-test-id': C,
                    children: (0, a.jsxs)('span', {
                        'aria-hidden': !0,
                        children: [
                            (0, a.jsx)('span', { 'data-test-id': s.Kq.changeTimecode.TIMECODE_TIME_START, children: h }),
                            ' / ',
                            (0, a.jsx)('span', { 'data-test-id': s.Kq.changeTimecode.TIMECODE_TIME_END, children: b }),
                        ],
                    }),
                });
            };
        },
        35073: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        35262: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => E });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(87999),
                d = i(70621),
                u = i(17392),
                c = i(96817),
                _ = i(52300),
                p = i(72288),
                m = i(24926),
                C = i.n(m);
            let E = (0, s.PA)((e) => {
                let { className: t, variant: i = 'text', isDisliked: s = !1, onClick: m, iconClassName: E, iconSize: y, size: A = 's', disabled: g = !1 } = e,
                    { user: B } = (0, p.g)(),
                    { formatMessage: h } = (0, l.A)(),
                    b = (0, d.D)(),
                    x = (0, r.useCallback)(
                        (e) => {
                            (null == m || m(e), e.stopPropagation(), b({ actionType: o.ActionType.Dislike, userInteractionType: o.UserInteractionType.Tap }));
                        },
                        [m, b],
                    );
                return (0, a.jsx)(c.$, {
                    className: (0, n.$)(C().root, t),
                    withRipple: !1,
                    variant: i,
                    size: A,
                    radius: 'round',
                    disabled: !B.isAuthorized || g,
                    'aria-label': h({ id: 'interface-actions.do-not-like' }),
                    'aria-pressed': s,
                    onClick: x,
                    icon: (0, a.jsx)(_.I, { size: y, className: E, variant: s ? 'disliked' : 'dislike' }),
                    'data-test-id': u.S7.DISLIKE_BUTTON,
                });
            });
        },
        36361: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => g });
            var a = i(88800),
                n = i(29993),
                s = i(29595),
                r = i(74965),
                l = i(9630),
                o = i(72288),
                d = i(65724),
                u = i(53548),
                c = i(2058),
                _ = i(52300),
                p = i(73170),
                m = i(29504),
                C = i(59304),
                E = i(56597),
                y = i.n(E);
            let A = (e) => {
                    let { shuffle: t, closeToast: i } = e,
                        { formatMessage: n } = (0, c.A)(),
                        s = (0, u.useMemo)(() => (t ? n({ id: 'notifications-info.shuffle-enabled' }) : n({ id: 'notifications-info.shuffle-disabled' })), [n, t]),
                        r = (0, u.useMemo)(
                            () =>
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', children: s }) }),
                                        (0, a.jsx)(m.HL, { className: y().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: s }),
                                    ],
                                }),
                            [s],
                        );
                    return (0, a.jsx)(C.$, {
                        cover: (0, a.jsx)(_.I, { className: (0, d.$)(y().icon, { [y().icon_unset]: !t }), size: 'xs', variant: 'shuffle' }),
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
                            e((0, a.jsx)(A, { shuffle: !!(null == i ? void 0 : i.getState(r).queueState.shuffle.value) }), {
                                containerId: t.modal.isOpened ? s.u.FULLSCREEN_INFO : s.u.INFO,
                            }));
                    });
                };
        },
        39185: (e, t, i) => {
            'use strict';
            i.d(t, { CU: () => l, f_: () => r, pp: () => a });
            let a = [1, 1.25, 1.5, 1.75, 2],
                n = ['speed_1x', 'speed_1_25x', 'speed_1_5x', 'speed_1_75x', 'speed_2x'],
                s = ['speed_1x_centered', 'speed_1_25x_centered', 'speed_1_5x_centered', 'speed_1_75x_centered', 'speed_2x_centered'],
                r = { 1: 0, 1.25: 1, 1.5: 2, 1.75: 3, 2: 4 },
                l = (e, t) => {
                    var i, a, l;
                    let o = null != (i = r[e]) ? i : 0,
                        d = null != (a = n[o]) ? a : 'speed_1x';
                    return t ? (null != (l = s[o]) ? l : 'speed_1x_centered') : d;
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
        56597: (e) => {
            e.exports = { icon: 'NotificationShuffle_icon__U_ape', message: 'NotificationShuffle_message__BNxJm', icon_unset: 'NotificationShuffle_icon_unset__y1jg_' };
        },
        57496: (e, t, i) => {
            'use strict';
            i.d(t, { OH: () => l });
            var a = i(68211),
                n = {
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
                                let i = t.LIGHTNESS_COLOR_BUCKETS.find((i, a) =>
                                    ((e, i, a) => (a === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? i >= e.start && i <= e.end : i >= e.start && i < e.end))(i, e, a),
                                );
                                return (0, t.findColorBucketByName)(null == i ? void 0 : i.name);
                            }));
                    },
                    1888: (e, t, i) => {
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
                        let a = i(2660),
                            n = i(6384);
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
                            }));
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
                    return (n[t](a, a.exports, e), a.exports);
                })(1888);
            (r.FALLBACK_NAME,
                r.FALLBACK_PALETTE,
                r.PRIMARY_DARK_IDLE_STOPS,
                r.PRIMARY_GRADIENT_STOPS,
                r.SECONDARY_GRADIENT_STOPS,
                r.__esModule,
                r.getVibeColorBucketSelection,
                r.getVibePaletteByBucketName);
            var l = r.getVibePaletteColors;
        },
        58084: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => C });
            var a = i(88800),
                n = i(53548),
                s = i(2058),
                r = i(88969),
                l = i(17392),
                o = i(96817),
                d = i(52300),
                u = i(73170),
                c = i(29504),
                _ = i(59304),
                p = i(45732),
                m = i.n(p);
            let C = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: i, message: p, ariaLabel: C, isMobile: E } = e,
                    { formatMessage: y } = (0, s.A)(),
                    A = (0, n.useCallback)(() => {
                        (i(), null == t || t());
                    }, [t, i]),
                    g = (0, n.useMemo)(
                        () =>
                            (0, a.jsxs)('div', {
                                className: m().message,
                                children: [
                                    (0, a.jsx)(u.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': C }) }),
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
                                            onClick: A,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': y({ id: 'interface-actions.change' }),
                                            children: (0, a.jsx)(c.HL, { variant: 'div', size: 'm', children: (0, a.jsx)(r.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [C, y, A, p, E],
                    );
                return (0, a.jsx)(_.$, { closeToast: t, cover: (0, a.jsx)(d.I, { className: m().icon, size: 'xs', variant: 'settings' }), message: g, coverRadius: 's' });
            };
        },
        58292: (e, t, i) => {
            'use strict';
            i.d(t, { GQ: () => O, f8: () => L, p$: () => R });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(88969),
                o = i(2058),
                d = i(17392),
                u = i(16473),
                c = i(78275),
                _ = i(96817),
                p = i(52300),
                m = i(19934),
                C = i(73170),
                E = i(18052),
                y = i(31051),
                A = i(4086),
                g = i(41928),
                B = i(29595),
                h = i(74965),
                b = i(95210),
                x = i(7748),
                N = i(72288),
                v = i(15253),
                D = i(52726),
                T = i(63955),
                F = i(19859),
                S = i(58084),
                I = i(8812),
                f = i.n(I);
            let O = [
                    {
                        type: u.e.HIGH_QUALITY,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: u.e.BALANCED,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: u.e.EFFICIENT,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                L = {
                    [u.e.HIGH_QUALITY]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [u.e.BALANCED]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [u.e.EFFICIENT]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                R = (0, s.PA)((e) => {
                    let { onOpenChange: t, open: i, placement: s, size: u, referenceClassName: I, icon: R, referenceLabel: j, disabled: M } = e;
                    (0, b.N)(i);
                    let k = (0, r.useId)(),
                        { formatMessage: q } = (0, o.A)(),
                        { notify: z } = (0, h.l)(),
                        P = (0, g.N)().get(A.oo),
                        {
                            sonataState: V,
                            user: w,
                            settings: { isMobile: Q },
                            quality: U,
                        } = (0, N.g)(),
                        G = (0, E.S)(),
                        K = (0, x.g)(),
                        H = (0, F.$)(),
                        { state: Y, setState: $ } = (0, c.e)(!1),
                        W = (0, r.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        Z = (0, r.useCallback)(
                            (e) => {
                                (H(e, V.quality), V.setQuality(e), null == K || K.setQuality(e), P.set(v.c.YmPlayerQuality, e, { expires: 365 }));
                            },
                            [K, V, P, H],
                        ),
                        X = (0, r.useCallback)(
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
                                if (V.quality === e) return;
                                Z(e);
                                let { message: i, ariaLabel: n } = X(t);
                                z((0, a.jsx)(S.J, { onOpenQualitySettingsMenu: W, message: i, ariaLabel: n, isMobile: Q }), { containerId: B.u.INFO });
                            },
                            [X, W, z, V.quality, Z, Q],
                        ),
                        ee = (0, r.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: i, qualityMessageId: s, text: r } = e;
                                return (e) => {
                                    let { isPopoverEnabled: l, popoverText: o } = e;
                                    return (0, a.jsx)(m.Dr, {
                                        isBlock: !0,
                                        disabled: l,
                                        className: (0, n.$)(f().item, f().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: J(i, s),
                                        role: 'option',
                                        'aria-selected': i === V.quality,
                                        children: (0, a.jsxs)('span', {
                                            className: f().itemWrapper,
                                            children: [
                                                (0, a.jsxs)('span', { className: f().item_option, children: [r, ' ', (0, a.jsx)(C.q, { children: o })] }),
                                                (0, a.jsx)('span', { className: (0, n.$)(f().item_option, f().itemSubTitle), children: L[i] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [J, V.quality],
                        ),
                        et = !w.hasPlus,
                        ei = !w.isAuthorized && Q,
                        ea = (0, r.useMemo)(
                            () =>
                                O.map((e) => {
                                    let { type: t, text: i, qualityMessageId: n } = e,
                                        s = t === V.quality ? (0, a.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null;
                                    return (0, a.jsx)(
                                        D.S,
                                        {
                                            isNested: !0,
                                            isEnabled: et && !Q,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: ee({ selectedItemIcon: s, type: t, qualityMessageId: n, text: i }),
                                        },
                                        t,
                                    );
                                }),
                            [V.quality, et, Q, ee],
                        ),
                        en = (0, r.useMemo)(
                            () => ({
                                listClassName: (0, n.$)(f().root, f().root_withNewQuality, { [f().root_withEqualizer]: G.isAvailable }),
                                menuClassName: (0, n.$)({ [f().menuContent]: !Q }),
                            }),
                            [G.isAvailable, Q],
                        ),
                        es = (0, r.useMemo)(() => {
                            if (G.isAvailable && !Q)
                                return (0, a.jsx)(y.r, { isExpanded: G.isEnabled, isDisabled: !1, className: f().equalizer, title: q({ id: 'equalizer.title' }) }, k);
                        }, [G.isEnabled, k, q, G.isAvailable, Q]),
                        er = (0, r.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: r } = e;
                                if (!Q)
                                    return (0, a.jsx)(_.$, {
                                        className: (0, n.$)(I, { [f().button_active]: U.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: u,
                                        icon: R,
                                        variant: 'text',
                                        onClick: U.modal.open,
                                        'aria-label': q({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        'data-test-id': d.e8.player.SOUND_QUALITY_BUTTON,
                                    });
                                let l = r ? $ : t;
                                return (0, a.jsx)(m.W1, {
                                    wrapperClassName: I,
                                    size: u,
                                    icon: R,
                                    placement: s,
                                    open: i,
                                    onOpenChange: l,
                                    ariaLabel: q({ id: 'player-actions.audio-quality' }),
                                    footer: es,
                                    label: j,
                                    variant: 'text',
                                    ...en,
                                    containerDataTestId: d.e8.player.QUALITY_SETTINGS_CONTEXT_MENU,
                                    isMobile: Q,
                                    lockScroll: !Q,
                                    disabled: M,
                                    'data-test-id': d.e8.player.SOUND_QUALITY_BUTTON,
                                    children: ea,
                                });
                            },
                            [Q, $, t, I, u, R, s, i, q, es, j, en, ea, U.modal.open, U.modal.isOpened, M],
                        );
                    return (0, a.jsx)(T.Z, { isEnabled: ei, isOpened: Y, onOpenChange: $, placement: 'top', textVariant: 'changeQuality', renderChildren: er });
                });
        },
        59717: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => a });
            var a = (function (e) {
                return ((e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e);
            })({});
        },
        63955: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => c });
            var a = i(88800),
                n = i(53548),
                s = i(2058),
                r = i(17392),
                l = i(29504),
                o = i(32721),
                d = i(12876),
                u = i(7628);
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
                return (0, a.jsx)(d.z, {
                    contentElement: (0, a.jsx)(l.HL, { variant: 'div', size: 'l', weight: 'bold', children: C }),
                    buttons: [(0, a.jsx)(u.H, { size: 'xxs' }, _)],
                    renderChildrenText: C,
                    contentDataTestId: r.S7.LOGIN_POPOVER,
                    ...c,
                });
            };
        },
        79128: (e) => {
            e.exports = { timecode: 'TimecodeTooltip_timecode__8PzjZ', timecode_measured: 'TimecodeTooltip_timecode_measured__Cb75_' };
        },
        86200: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => g });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(29993),
                u = i(79070),
                c = i(78275),
                _ = i(96817),
                p = i(52300),
                m = i(54112),
                C = i(9630),
                E = i(59717),
                y = i(41160),
                A = i.n(y);
            let g = (0, s.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: i,
                        verticalSliderClassName: s,
                        variant: y = E.q.HORIZONTAL,
                        playbackId: g,
                        onVolumeClick: B,
                        onVolumeSet: h,
                        sonataVolume: b,
                        buttonClassName: x,
                    } = e,
                    N = (0, r.useRef)(null),
                    [v, D] = (0, r.useState)(void 0),
                    { formatMessage: T } = (0, l.A)(),
                    F = (0, C.e)(),
                    { state: S, toggleTrue: I, toggleFalse: f } = (0, c.e)(!1);
                (0, r.useEffect)(() => {
                    'number' == typeof b && D(b);
                }, [b]);
                let O = Math.round((null != v ? v : 1) * 100) / 100,
                    L = (0, d.c)((e) => {
                        null == F || F.setExponentVolume(e, g);
                    });
                (0, r.useEffect)(() => {
                    let e = () => {
                            var e;
                            f();
                            let t = document.activeElement;
                            t instanceof HTMLElement && (null == (e = N.current) ? void 0 : e.contains(t)) && t.blur();
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
                }, [f]);
                let R = (0, d.c)((e) => {
                        (D(e), L(e), null == h || h(e));
                    }),
                    j = (0, d.c)(async (e) => {
                        await B(O, e);
                    }),
                    M = 0 === O ? 'volumeOff' : 'volume',
                    k = 0 === O ? T({ id: 'player-actions.volume-on' }) : T({ id: 'player-actions.volume-off' }),
                    q = (0, d.c)((e) => {
                        R(Math.max(0, Math.min(1, Math.round(100 * (O + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    z = (0, u.L)(() => {
                        if (y === E.q.HORIZONTAL)
                            return (0, a.jsx)(m.A, {
                                onWheel: q,
                                className: i,
                                thumbSize: 's',
                                trackSize: 's',
                                value: O,
                                maxValue: 1,
                                step: 0.01,
                                onChange: R,
                                'aria-label': T({ id: 'player-actions.volume-control' }),
                                'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                            });
                    }),
                    P = (0, u.L)(() => {
                        if (y === E.q.VERTICAL)
                            return (0, a.jsx)('div', {
                                onWheel: q,
                                className: (0, n.$)(A().sliderContainer, { [A().sliderContainer_focusVisible]: S }),
                                children: (0, a.jsx)('div', {
                                    className: (0, n.$)(A().wrapperSlider, s),
                                    children: (0, a.jsx)(m.A, {
                                        onMouseLeave: f,
                                        className: (0, n.$)(A().slider, A().important),
                                        thumbSize: 's',
                                        onFocus: I,
                                        onBlur: f,
                                        trackSize: 's',
                                        value: O,
                                        maxValue: 1,
                                        step: 0.01,
                                        onChange: R,
                                        'aria-label': T({ id: 'player-actions.volume-control' }),
                                        'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                                    }),
                                }),
                            });
                    });
                return (0, a.jsxs)('div', {
                    ref: N,
                    className: (0, n.$)(A().root, t),
                    children: [
                        P,
                        (0, a.jsx)(_.$, {
                            onWheel: q,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: j,
                            'aria-label': k,
                            icon: (0, a.jsx)(p.I, { size: 'xs', className: A().icon, variant: M }),
                            className: (0, n.$)(A().button, x),
                            'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_BUTTON,
                        }),
                        z,
                    ],
                });
            });
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
