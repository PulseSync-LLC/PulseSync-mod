(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
    {
        7876: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
            };
        },
        10076: (e, t, o) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let n = o(36283)._(o(23772));
            function l(e, t) {
                var o;
                let l = {};
                'function' == typeof e && (l.loader = e);
                let i = { ...l, ...t };
                return (0, n.default)({ ...i, modules: null == (o = i.loadableGenerated) ? void 0 : o.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        12863: (e, t, o) => {
            'use strict';
            o.d(t, { SettingsPage: () => el });
            var n = o(62936),
                l = o(19718),
                i = o(47480),
                r = o(26731),
                s = o(8669),
                a = o(14501),
                c = o(20418),
                d = o(92022),
                u = o(18534),
                m = o(42561),
                _ = o(60326),
                p = o.n(_),
                h = o(31124),
                f = o(57249),
                x = o(79950),
                b = o(49351),
                v = o(44020),
                g = o(59935),
                j = o(5099),
                C = o(49124);
            let y = b.default.default(
                () =>
                    Promise.resolve()
                        .then(o.bind(o, 31124))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = C.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, h.setWasmUrl)(new URL(f, e).href);
            }
            let N = (e) => {
                    let { thumbType: t } = e,
                        [o, l] = (0, v.useState)(null);
                    return ((0, v.useEffect)(() => {
                        let e = d.zf[t];
                        e &&
                            e().then((e) => {
                                (0, d.Jy)(e) ? l(e) : l(''.concat(window.location.origin).concat(e));
                            });
                    }, [t]),
                    o)
                        ? (0, n.jsx)(y, { src: o })
                        : null;
                },
                S = (0, l.PA)((e) => {
                    let { thumbId: t, isDefault: o = !1 } = e,
                        { settings: l, user: s, paywall: a } = (0, m.Pjs)(),
                        { formatMessage: u } = (0, i.A)(),
                        [_, h] = (0, v.useState)(!1);
                    (0, v.useEffect)(() => {
                        h(!0);
                    }, []);
                    let f = (0, g.c)((e) => {
                            if ((e.preventDefault(), !s.hasPlus && t !== l.selectedThumbId)) return void a.openModal();
                            l.setCustomPlayerThumb(t);
                        }),
                        b = !!_ && l.selectedThumbId === t;
                    if (o)
                        return (0, n.jsxs)(j.$, {
                            className: (0, x.$)(p().button, { [p().button_selected]: b }),
                            radius: 'xl',
                            onClick: f,
                            withRipple: !1,
                            'aria-pressed': b,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: p().thumbContent,
                                    children: [(0, n.jsx)('div', { className: p().thumbLine }), (0, n.jsx)('div', { className: p().thumbDefault })],
                                }),
                                (0, n.jsx)(c.Caption, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    weight: 'medium',
                                    className: p().thumbName,
                                    lineClamp: 1,
                                    children: (0, n.jsx)(r.A, { id: 'branded-player.default' }),
                                }),
                            ],
                        });
                    let C = (0, d.rI)(u).get(t);
                    if (!C) return;
                    let y = { '--thumb-height': ''.concat(C.thumb.height, 'px') };
                    return (0, n.jsxs)(j.$, {
                        className: (0, x.$)(p().button, { [p().button_selected]: b }),
                        radius: 'xl',
                        onClick: f,
                        withRipple: !1,
                        'aria-pressed': b,
                        children: [
                            (0, n.jsx)('div', { style: y, className: (0, x.$)(p().thumbContent, p().thumbContent_custom), children: (0, n.jsx)(N, { thumbType: t }) }),
                            (0, n.jsx)(c.Caption, { className: p().thumbName, variant: 'div', size: 'm', weight: 'normal', lineClamp: 1, children: C.name }),
                        ],
                    });
                }),
                k = (0, l.PA)(() => {
                    let { formatMessage: e } = (0, i.A)(),
                        t = Array.from((0, d.rI)(e).keys());
                    return (0, n.jsxs)('div', {
                        className: p().root,
                        children: [
                            (0, n.jsx)(c.Caption, {
                                className: p().title,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                lineClamp: 1,
                                children: (0, n.jsx)(r.A, { id: 'branded-player.player-type' }),
                            }),
                            (0, n.jsxs)(u.m, {
                                restrictionsClassName: p().thumbsContainer,
                                children: [(0, n.jsx)(S, { thumbId: m.TZj.DEFAULT, isDefault: !0 }), t.map((e) => (0, n.jsx)(S, { thumbId: e }, e))],
                            }),
                        ],
                    });
                });
            var M = o(64647),
                w = o(85906),
                T = o(4714),
                E = o(24418),
                P = o.n(E);
            let A = (0, l.PA)(() => {
                let { formatMessage: e } = (0, i.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: o },
                    } = (0, m.Pjs)(),
                    l = (0, m.HFS)(),
                    s = (0, m.d79)(),
                    { language: a } = (0, m.h6b)(),
                    d = (0, m.weu)();
                return (0, n.jsxs)(T.a, {
                    className: P().root,
                    headerClassName: P().modalHeader,
                    contentClassName: P().modalContent,
                    title: e({ id: 'settings.about-app' }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: o.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: [
                        (0, n.jsxs)('ul', {
                            className: P().list,
                            children: [
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(a),
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(r.A, { id: 'footer.links-copyright-holders' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(a),
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(r.A, { id: 'footer.links-terms' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(r.A, { id: 'footer.links-recommendation-rules' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(a),
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(r.A, { id: 'footer.links-help' }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().explicitText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            weight: 'medium',
                            dangerouslySetInnerHTML: { __html: d },
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().companyText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: (0, n.jsx)(r.A, { id: 'about-app.app-name' }),
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-version-short' }, { version: l }),
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-revision' }, { revision: s }),
                        }),
                    ],
                });
            });
            var O = o(13030),
                L = o(59470),
                z = o.n(L);
            let R = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                I = (0, l.PA)(() => {
                    let { formatMessage: e } = (0, i.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        l = (0, m.jRO)(),
                        s = (0, v.useCallback)(() => {
                            l.clearAll().then(() => {
                                t.close(),
                                    o(
                                        (0, n.jsx)(w.$W, {
                                            message: (0, n.jsx)(c.Caption, {
                                                className: z().message,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, n.jsx)(r.A, { id: 'offline.memory-cleared' }),
                                            }),
                                        }),
                                        { containerId: m.uQT.INFO },
                                    );
                            });
                        }, [t, o, l]);
                    return (0, n.jsxs)(T.a, {
                        className: z().root,
                        headerClassName: z().modalHeader,
                        contentClassName: z().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, n.jsx)(O.Image, { src: R.src, className: z().image, fit: 'contain', 'aria-hidden': !0 }),
                            (0, n.jsx)(c.Caption, {
                                className: z().description,
                                type: 'text',
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                children: (0, n.jsx)(r.A, { id: 'offline.clear-memory-description' }),
                            }),
                            (0, n.jsx)(j.$, {
                                color: 'primary',
                                radius: 'xxxl',
                                size: 'default',
                                onClick: s,
                                children: (0, n.jsx)(r.A, { id: 'interface-actions.clear' }),
                            }),
                        ],
                    });
                });
            var F = o(85742),
                H = o(43160),
                B = o.n(H);
            let D = (e) => {
                let { title: t, description: o, onClick: l, descriptionProps: i, ...r } = e;
                return (0, n.jsx)(j.$, {
                    className: (0, x.$)(B().root, B().important),
                    contentContainerClassName: B().contentContainer,
                    icon: (0, n.jsx)(F.Icon, { className: B().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    onClick: l,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    size: 'xs',
                    ...r,
                    children: (0, n.jsxs)('div', {
                        className: B().content,
                        children: [
                            (0, n.jsx)(c.Caption, { className: B().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: t }),
                            o && (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: B().description, ...i, children: o }),
                        ],
                    }),
                });
            };
            var W = o(51656),
                U = o.n(W);
            let q = (e) => {
                let { link: t, title: o, description: l, target: i } = e;
                return (0, n.jsxs)(w.N_, {
                    className: U().root,
                    containerClassName: U().container,
                    textClassName: U().linkText,
                    icon: (0, n.jsx)(F.Icon, { className: U().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    href: t,
                    ...(i ? { target: i } : {}),
                    children: [
                        (0, n.jsx)(c.Caption, { className: U().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: o }),
                        l && (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: U().description, children: l }),
                    ],
                });
            };
            var Z = o(18099),
                Y = o(7876),
                G = o.n(Y);
            let Q = (e) => {
                let { title: t, onChange: o, isChecked: l, description: i, dataTestId: r } = e,
                    s = (0, v.useId)();
                return (0, n.jsxs)('div', {
                    className: G().root,
                    children: [
                        (0, n.jsxs)('div', {
                            className: G().textContainer,
                            children: [
                                (0, n.jsx)(c.Caption, {
                                    className: G().title,
                                    id: s,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                i && (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: G().description, children: i }),
                            ],
                        }),
                        (0, n.jsx)(Z.l, { isChecked: l, 'aria-describedby': s, onChange: o, ...r }),
                    ],
                });
            };
            var V = o(91044),
                K = o.n(V);
            let J = (0, l.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, m.Pjs)(),
                    { formatMessage: t } = (0, i.A)(),
                    o = (0, v.useMemo)(() => {
                        let e = (0, n.jsx)(
                            c.Caption,
                            { className: K().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: (0, n.jsx)(r.A, { id: 'shortcuts.or' }) },
                            'or',
                        );
                        return m.bNV.map((t) => {
                            let { shortcutsAction: o, formattedMessage: l } = t,
                                i = m.MHd[o].map((e, t) =>
                                    (0, n.jsx)(
                                        'div',
                                        {
                                            className: K().button,
                                            children: (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: e }),
                                        },
                                        t,
                                    ),
                                );
                            return (
                                i.length > 1 && i.splice(1, 0, e),
                                (0, n.jsx)(
                                    'li',
                                    {
                                        children: (0, n.jsxs)('div', {
                                            className: K().content,
                                            children: [
                                                (0, n.jsx)(c.Caption, { className: K().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: l }),
                                                (0, n.jsx)('div', { className: K().buttons, children: i }),
                                            ],
                                        }),
                                    },
                                    o,
                                )
                            );
                        });
                    }, []);
                return (0, n.jsx)(T.a, {
                    className: K().root,
                    headerClassName: K().modalHeader,
                    contentClassName: K().modalContent,
                    title: t({ id: 'settings.shortcuts' }),
                    open: e.isOpened,
                    onOpenChange: e.onOpenChange,
                    onClose: e.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: t({ id: 'interface-actions.close' }),
                    children: (0, n.jsx)('ul', { className: K().list, children: o }),
                });
            });
            var X = o(95722),
                $ = o.n(X);
            let ee = (0, l.PA)(() => {
                let e = (0, m.HFS)(),
                    t = (0, m.NFA)().get(m.ooW),
                    {
                        modals: { shortcutsModal: o, aboutAppModal: l, clearMemoryModal: r },
                        experiments: a,
                        wizard: c,
                        user: d,
                        slam: u,
                        settings: _,
                        sonataState: p,
                    } = (0, m.Pjs)(),
                    h = (0, M.Sq)(),
                    { notify: f } = (0, m.lkh)(),
                    { formatMessage: x } = (0, i.A)(),
                    b = (() => {
                        let e = (0, m.NFA)().get(m.twC),
                            t = (0, m._lF)(e.oldWebHost),
                            { language: o } = (0, m.h6b)();
                        return 'https://'.concat(t, '/newimport?lang=').concat(o);
                    })(),
                    g = (0, m.gQL)(),
                    j = h.isAvailable && !_.isMobile,
                    C = a.checkExperiment(m.zal.WebNextCrossMediaPlayer, 'on'),
                    y = d.hasPlus,
                    N = a.checkExperiment(m.zal.WebNextLiteVersion, 'on') && _.isLiteVersionModeAvailableForToggle && !0,
                    S = a.checkExperiment(m.zal.WebNextCustomThumb, 'on') && !_.isMobile,
                    T = h.isEnabled ? x({ id: 'equalizer.enabled' }) : x({ id: 'equalizer.disabled' }),
                    E = (0, v.useMemo)(() => x({ id: 'desktop.app-version-short' }, { version: e }), [!0, x, e]),
                    P = (0, v.useCallback)(
                        async (e) => {
                            (await d.setSettings({ isChildModeEnabled: e })) === m.FlZ.ERROR &&
                                f((0, n.jsx)(w.hT, { error: x({ id: 'settings.failed-to-change-child-mode' }) }), { containerId: m.uQT.ERROR });
                        },
                        [d, x, f],
                    ),
                    O = (0, v.useCallback)(
                        (e) => {
                            u.setOfflineMode(e);
                        },
                        [u],
                    ),
                    L = (0, v.useCallback)(() => {
                        r.open();
                    }, [r]),
                    z = (0, v.useCallback)(
                        (e) => {
                            if (e) return void _.setLiteVersionMode(m.wv5.ENABLED, !0);
                            _.setLiteVersionMode(m.wv5.DISABLED, !0);
                        },
                        [_],
                    );
                (0, v.useLayoutEffect)(() => {
                    let e = t.get(m.cYZ.CrossFadeMode);
                    'boolean' == typeof e && p.setCrossFadeMode(e);
                }, [p, t]);
                let R = (0, v.useCallback)(
                    (e) => {
                        p.setCrossFadeMode(e), g && (g.isCrossfadeEnabled.value = e);
                    },
                    [p, g],
                );
                return (0, n.jsxs)('ul', {
                    className: $().root,
                    ...(0, s.Am)(s.e8.settings.SETTINGS_LIST),
                    children: [
                        y &&
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(Q, {
                                    title: x({ id: 'offline.offline-mode' }),
                                    description: x({ id: 'offline.offline-mode-description' }),
                                    onChange: O,
                                    isChecked: u.isOfflineModeEnabled,
                                }),
                            }),
                        y &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: [(0, n.jsx)(D, { title: x({ id: 'offline.clear-memory' }), onClick: L }), (0, n.jsx)(I, {})],
                            }),
                        N &&
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(Q, {
                                    title: x({ id: 'lite-version.title' }),
                                    description: x({ id: 'lite-version.description' }),
                                    onChange: z,
                                    isChecked: _.isLiteVersionModeEnabled,
                                }),
                            }),
                        j &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: [
                                    (0, n.jsx)(D, {
                                        title: x({ id: 'equalizer.title' }),
                                        description: T,
                                        onClick: h.modal.open,
                                        descriptionProps: (0, s.Am)(s.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION),
                                        ...(0, s.Am)(s.e8.settings.SETTINGS_EQUALIZER_BUTTON),
                                    }),
                                    (0, n.jsx)(M.MZ, {}),
                                ],
                            }),
                        C &&
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(Q, { title: x({ id: 'settings.crossfade' }), onChange: R, isChecked: p.isCrossFadeEnabled }),
                            }),
                        (0, n.jsx)(w.aQ, {
                            fallback: (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(D, {
                                    title: x({ id: 'settings.preferences' }),
                                    description: x({ id: 'settings.preferences-description' }),
                                    onClick: c.modal.open,
                                }),
                            }),
                        }),
                        (0, n.jsx)(w.aQ, {
                            fallback: (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(q, {
                                    title: x({ id: 'settings.import-media' }),
                                    description: x({ id: 'settings.import-media-description' }),
                                    link: b,
                                }),
                            }),
                        }),
                        (0, n.jsx)(w.aQ, {
                            fallback:
                                !a.checkExperiment(m.zal.WebNextDisableKids, 'on') &&
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(Q, {
                                        title: x({ id: 'settings.show-child-section' }),
                                        onChange: P,
                                        isChecked: d.settings.isChildModeEnabled,
                                        dataTestId: (0, s.Am)(s.e8.settings.SETTINGS_KIDS_BUTTON),
                                    }),
                                }),
                        }),
                        (0, n.jsxs)('li', {
                            className: $().item,
                            children: [(0, n.jsx)(D, { title: x({ id: 'settings.shortcuts' }), onClick: o.open }), (0, n.jsx)(J, {})],
                        }),
                        S && (0, n.jsx)('li', { className: $().item, children: (0, n.jsx)(k, {}) }),
                        E &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: [(0, n.jsx)(D, { title: x({ id: 'settings.about-app' }), description: E, onClick: l.open }), (0, n.jsx)(A, {})],
                            }),
                    ],
                });
            });
            var et = o(92229),
                eo = o(78852),
                en = o.n(eo);
            let el = (0, l.PA)(() => {
                let { formatMessage: e } = (0, i.A)(),
                    { contentScrollRef: t, setContentScrollRef: o } = (0, m.gKY)(),
                    l = (0, m.W6M)();
                return (0, n.jsxs)(et.hO, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, n.jsx)(w.Y9, {
                            variant: w.Vw.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: l.canBack,
                            children: (0, n.jsx)(c.Heading, {
                                variant: 'h2',
                                weight: 'bold',
                                size: 'xl',
                                lineClamp: 1,
                                children: (0, n.jsx)(r.A, { id: 'page.settings' }),
                            }),
                        }),
                        (0, n.jsx)(a.N, {
                            ref: o,
                            className: en().root,
                            containerClassName: en().scrollableContainer,
                            ...(0, s.Am)(s.Xk.settings.SETTINGS_PAGE),
                            children: (0, n.jsxs)('div', {
                                className: en().container,
                                children: [
                                    (0, n.jsx)('div', { className: en().content, children: (0, n.jsx)(ee, {}) }),
                                    (0, n.jsx)(w.A, { children: (0, n.jsx)(w.wi, { className: en().footer }) }),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        18099: (e, t, o) => {
            'use strict';
            o.d(t, { l: () => c });
            var n,
                l = o(44020),
                i = {
                    5881: (e, t, o) => {
                        function n() {
                            for (var e, t, o = 0, n = ''; o < arguments.length; )
                                (e = arguments[o++]) &&
                                    (t = (function e(t) {
                                        var o,
                                            n,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (o = 0; o < t.length; o++) t[o] && (n = e(t[o])) && (l && (l += ' '), (l += n));
                                            else for (o in t) t[o] && (l && (l += ' '), (l += o));
                                        return l;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        o.r(t), o.d(t, { clsx: () => n, default: () => l });
                        let l = n;
                    },
                    1920: (e, t, o) => {
                        o.r(t), o.d(t, { default: () => n });
                        let n = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    5682: (e, t, o) => {
                        o.r(t), o.d(t, { default: () => n });
                        let n = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var o = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var l = null;
                            if ((void 0 !== n && (l = '' + n), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: o, type: e, key: l, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n);
                    },
                    4377: (e, t, o) => {
                        e.exports = o(9097);
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, o) {
                                let n = null != o ? o : e.currentTarget,
                                    l = document.createElement('span'),
                                    i = Math.max(n.clientWidth, n.clientHeight),
                                    r = i / 2,
                                    s = n.getBoundingClientRect(),
                                    a = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (l.style.width = ''.concat(i, 'px')),
                                    (l.style.height = ''.concat(i, 'px')),
                                    (l.style.left = 0 === e.clientX ? '0px' : ''.concat(a - r, 'px')),
                                    (l.style.top = ''.concat(c - r, 'px')),
                                    l.classList.add(t);
                                let d = n.getElementsByClassName(t)[0];
                                d && d.remove(), n.insertBefore(l, n.firstChild);
                            });
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    8216: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var n = o(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return n.createRipple;
                            },
                        });
                        var l = o(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return l.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (e, t, o) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let l = o(4377),
                            i = o(810),
                            r = o(5881),
                            s = o(8216),
                            a = n(o(1920)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: o,
                                        iconPosition: n = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: m,
                                        icon: _,
                                        spinner: p,
                                        role: h,
                                        onClick: f,
                                        radius: x = 'm',
                                        size: b,
                                        type: v = 'button',
                                        variant: g = 'default',
                                        withRipple: j = !0,
                                        withHover: C = !0,
                                        withBorder: y = !1,
                                        disabled: N,
                                        iconClassName: S,
                                        contentContainerClassName: k,
                                        ...M
                                    } = e,
                                    w = (0, i.useId)(),
                                    T = !i.Children.toArray(c).filter(Boolean).length,
                                    E = 'left' === n,
                                    P = null,
                                    A = (0, i.isValidElement)(p);
                                if (_) {
                                    var O, L;
                                    P = (0, i.cloneElement)(_, {
                                        className: (0, r.clsx)(
                                            a.default.icon,
                                            {
                                                [a.default['icon_position_'.concat(n)]]: n && !T,
                                                [a.default.icon_withButtonSize]: !(null == (O = _.props) ? void 0 : O.size),
                                            },
                                            null == (L = _.props) ? void 0 : L.className,
                                            S,
                                        ),
                                        key: w,
                                    });
                                }
                                let z = (0, i.useMemo)(() => (A ? (0, l.jsx)('div', { className: a.default.spinnerContainer, children: p }) : null), [A, p]),
                                    R = (0, i.useCallback)(
                                        (e) => {
                                            A || (j && (0, s.createRipple)(e, a.default.ripple), null == f || f(e));
                                        },
                                        [A, f, j],
                                    );
                                return (0, l.jsx)('button', {
                                    ref: t,
                                    className: (0, r.clsx)(
                                        a.default.root,
                                        a.default['root_'.concat(u, '_').concat(g)],
                                        a.default['root_radius_'.concat(x)],
                                        a.default.root_size,
                                        {
                                            [a.default['root_'.concat(u, '_withHover_').concat(g)]]: C && !N && !A,
                                            [a.default['root_size_'.concat(b)]]: b,
                                            [a.default.root_withoutBorder]: !y,
                                            [a.default.root_withActiveSpinner]: A,
                                            [a.default.block]: o,
                                            [a.default.flexIcon]: m,
                                            [a.default.iconOnly]: T,
                                            [a.default.root_icon_left]: _ && !T && E,
                                            [a.default.root_icon_right]: _ && !T && !E,
                                        },
                                        d,
                                    ),
                                    type: v,
                                    role: h,
                                    onClick: R,
                                    ...M,
                                    disabled: N,
                                    'aria-live': A ? 'polite' : 'off',
                                    'aria-busy': A,
                                    children:
                                        _ || A
                                            ? (0, l.jsxs)('span', {
                                                  className: (0, r.clsx)(a.default.contentContainer, { [a.default.contentContainer_block]: o }, k),
                                                  children: [_ && E && P, !T && c, _ && !E && P, z],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, i.forwardRef)((e, t) => (0, l.jsx)(c, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var n = o(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return n.Button;
                            },
                        });
                    },
                    7459: function (e, t, o) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0);
                        let l = o(4377),
                            i = o(5881),
                            r = o(810),
                            s = o(5928),
                            a = n(o(5682)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, l.jsx)('div', { className: (0, i.clsx)(a.default.icon, { [a.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: o = !1, onChange: n, 'aria-label': d, 'aria-describedby': u, ...m } = e,
                                [_, p] = (0, r.useState)(o),
                                h = (0, r.useCallback)(() => {
                                    let e = !_;
                                    p(e), null == n || n(e);
                                }, [_, n]);
                            return (
                                (0, r.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, l.jsx)(s.Button, {
                                    className: (0, i.clsx)(a.default.root, { [a.default.root_checked]: _ }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, l.jsx)(c, { isChecked: _ }),
                                    withRipple: !1,
                                    onClick: h,
                                    role: 'switch',
                                    'aria-checked': _,
                                    'aria-label': d,
                                    'aria-describedby': u,
                                    ...m,
                                    color: _ ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = o.t(l, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var o = (r[e] = { exports: {} });
                return i[e].call(o.exports, o, o.exports, s), o.exports;
            }
            (s.d = (e, t) => {
                for (var o in t) s.o(t, o) && !s.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var a = {};
            (() => {
                Object.defineProperty(a, 'X', { value: !0 }), (a.Z = void 0);
                var e = s(7459);
                Object.defineProperty(a, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var c = a.Z;
            a.X;
        },
        23772: (e, t, o) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let n = o(62936),
                l = o(44020),
                i = o(24571);
            function r(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            o(46950);
            let s = { loader: () => Promise.resolve(r(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...s, ...e },
                        o = (0, l.lazy)(() => t.loader().then(r)),
                        a = t.loading;
                    function c(e) {
                        let r = a ? (0, n.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? l.Suspense : l.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(o, { ...e })] })
                                : (0, n.jsx)(i.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(o, { ...e }) });
                        return (0, n.jsx)(c, { ...(s ? { fallback: r } : {}), children: d });
                    }
                    return (c.displayName = 'LoadableComponent'), c;
                };
        },
        24418: (e) => {
            e.exports = {
                root: 'AboutAppModal_root__yBvgU',
                modalHeader: 'AboutAppModal_modalHeader__q1NPj',
                modalContent: 'AboutAppModal_modalContent__SHO_X',
                list: 'AboutAppModal_list__HfB82',
                link: 'AboutAppModal_link__i3P3P',
                explicitText: 'AboutAppModal_explicitText__29HUD',
                companyText: 'AboutAppModal_companyText__yroW0',
                versionText: 'AboutAppModal_versionText__iFb8L',
            };
        },
        24571: (e, t, o) => {
            'use strict';
            function n(e) {
                let { reason: t, children: o } = e;
                return o;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                o(71279);
        },
        37440: (e, t, o) => {
            'use strict';
            o.d(t, { L: () => d });
            var n,
                l = o(49327),
                i = o(44020),
                r = {
                    6699: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let n = o(352),
                            l = o(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: o, throttleTimeout: i } = e,
                                r = (0, l.useRef)(null),
                                [s, a] = (0, l.useState)(!!o),
                                c = (0, l.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            a(!o),
                                                r.current && window.clearTimeout(r.current),
                                                (r.current = window.setTimeout(() => {
                                                    a(!!o);
                                                }, t));
                                        }, i),
                                    [t, o, i],
                                ),
                                d = (0, l.useCallback)(() => {
                                    a(!!o), r.current && window.clearTimeout(r.current);
                                }, [o]);
                            return (
                                (0, l.useEffect)(
                                    () => () => {
                                        r.current && window.clearTimeout(r.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: c, reset: d }
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = n || (n = o.t(i, 2));
                    },
                },
                s = {};
            function a(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var o = (s[e] = { exports: {} });
                return r[e](o, o.exports, a), o.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useScroll = void 0);
                let e = a(810),
                    t = a(361),
                    o = a(6699);
                c.useScroll = (n) => {
                    let { onScroll: l, listenIsScrolling: i, elementRef: r } = n,
                        { state: s, handleDebouncedToggle: a } = (0, o.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        c = (0, e.useCallback)(() => {
                            i && a(), null == l || l();
                        }, [i, a, l]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(r);
                            if (null === e) return;
                            let o = null != e ? e : window,
                                n = { capture: !0, passive: !0 };
                            return o.addEventListener('scroll', c, n), () => o.removeEventListener('scroll', c, n);
                        }, [r, c]),
                        s
                    );
                };
            })(),
                c.__esModule;
            var d = c.useScroll;
        },
        43160: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
            };
        },
        43604: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 12863));
        },
        46950: (e, t, o) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                o(62936),
                o(2933),
                o(34397),
                o(5300);
        },
        49351: (e, t, o) => {
            'use strict';
            o.d(t, { default: () => l.a });
            var n = o(10076),
                l = o.n(n);
        },
        51656: (e) => {
            e.exports = {
                icon: 'SettingsListLinkItem_icon__p4P_V',
                root: 'SettingsListLinkItem_root__rTPC9',
                container: 'SettingsListLinkItem_container__k7bhS',
                linkText: 'SettingsListLinkItem_linkText__0PHlQ',
                title: 'SettingsListLinkItem_title__duJnL',
                description: 'SettingsListLinkItem_description__xWeAD',
            };
        },
        57249: (e, t, o) => {
            'use strict';
            e.exports = o.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        59470: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        60326: (e) => {
            e.exports = {
                root: 'CustomPlayerThumbSelector_root__DQT1f',
                title: 'CustomPlayerThumbSelector_title__9Eai2',
                thumbsContainer: 'CustomPlayerThumbSelector_thumbsContainer__ywFZ1',
                button: 'CustomPlayerThumbSelector_button__JXiFX',
                button_selected: 'CustomPlayerThumbSelector_button_selected__5_mwm',
                thumbContent: 'CustomPlayerThumbSelector_thumbContent__lAM5O',
                thumbContent_custom: 'CustomPlayerThumbSelector_thumbContent_custom__ZcoKb',
                thumbLine: 'CustomPlayerThumbSelector_thumbLine__Iv4PY',
                thumbDefault: 'CustomPlayerThumbSelector_thumbDefault__3RlO1',
                thumbName: 'CustomPlayerThumbSelector_thumbName__SCX2s',
            };
        },
        78852: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
            };
        },
        91044: (e) => {
            e.exports = {
                root: 'ShortcutsModal_root__ro7m4',
                modalHeader: 'ShortcutsModal_modalHeader__IYJ9m',
                modalContent: 'ShortcutsModal_modalContent__SCpYX',
                list: 'ShortcutsModal_list__eS4ox',
                text: 'ShortcutsModal_text__5JJ0j',
                content: 'ShortcutsModal_content__Li9Ip',
                buttons: 'ShortcutsModal_buttons__o_xlC',
                button: 'ShortcutsModal_button__cTIee',
            };
        },
        92229: (e, t, o) => {
            'use strict';
            o.d(t, { hO: () => m, jr: () => _, jp: () => p, QZ: () => l }), o(21485);
            var n = o(44020);
            let l = (e, t, o) => {
                let l = null != o && o;
                return {
                    topColorStyle: (0, n.useMemo)(() => {
                        if (void 0 === t) return;
                        let o = l ? 93 : 17,
                            n = t - o;
                        return { '--average-color-background': e, transform: 'translateY('.concat(t >= o ? 0 : n, 'px)'), opacity: 1 };
                    }, [t, l, e]),
                    headerStyle: (0, n.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var i = o(62936),
                r = o(30643),
                s = o(19718),
                a = o(37440),
                c = o(42561),
                d = o(85906);
            let u = (e) => {
                    let { element: t, scrollTop: o, isMobile: n } = e,
                        l = 0.6 * t.clientHeight;
                    return o + (n ? 60 : 76) >= t.offsetTop + l;
                },
                m = (0, s.PA)((e) => {
                    let { children: t, scrollElement: o, outerTitle: l = '', headerElement: s, headerThreshold: m, shouldHideHeader: _ } = e,
                        [p, h] = (0, n.useState)(l),
                        [f, x] = (0, n.useState)(null),
                        [b, v] = (0, n.useState)(null),
                        [g, j] = (0, n.useState)(null),
                        [C, y] = (0, n.useState)(!1),
                        [N, S] = (0, n.useState)(!1),
                        [k, M] = (0, n.useState)(!1),
                        [w, T] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: E },
                        } = (0, c.Pjs)();
                    (0, n.useLayoutEffect)(() => {
                        h(l);
                    }, [l]);
                    let P = (0, n.useCallback)(() => {
                        let e = null != m ? m : 10,
                            t = s ? Number(s.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let n = (e) => {
                            M(e > t),
                                _ && T(e > 30),
                                (null == f ? void 0 : f.current) && y(u({ element: null == f ? void 0 : f.current, scrollTop: e, isMobile: E })),
                                (null == b ? void 0 : b.current) && S(u({ element: null == b ? void 0 : b.current, scrollTop: e, isMobile: E }));
                        };
                        E ? n(window.scrollY) : o && n(o.scrollTop);
                    }, [m, s, E, _, f, b, o]);
                    (0, n.useEffect)(() => {
                        E ? 0 === window.scrollY && M(!1) : (o && 0 !== o.scrollTop) || M(!1);
                    }, [o, null == o ? void 0 : o.scrollTop, E]);
                    let A = (0, n.useMemo)(() => (E ? { onScroll: (0, r.A)(P, 200) } : { onScroll: (0, r.A)(P, 200), elementRef: o }), [P, o, E]);
                    (0, a.L)(A);
                    let O = (0, n.useMemo)(
                        () => ({
                            title: p,
                            setTitle: h,
                            titleElement: f,
                            scrollElement: E ? null : o,
                            setTitleElement: x,
                            childElement: b,
                            setChildElement: v,
                            child: g,
                            setChild: j,
                            isScrolledChild: N,
                            isScrolledTitle: C,
                            isScrolling: k,
                            isHeaderHidden: w,
                        }),
                        [p, C, f, o, k, E, g, b, N, w],
                    );
                    return (0, i.jsx)(d.B9.Provider, { value: O, children: t });
                }),
                _ = (e) => {
                    let { children: t, child: o, className: l } = e,
                        { setChildElement: r, setChild: s } = (0, n.useContext)(d.B9),
                        a = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            (null == a ? void 0 : a.current) && r(a), o && s(o);
                        }, [a, o, r, s]),
                        (0, n.useEffect)(
                            () => () => {
                                s(null);
                            },
                            [s],
                        ),
                        (0, i.jsx)('div', { ref: a, className: l, children: t })
                    );
                },
                p = (e) => {
                    let { children: t, title: o, className: l } = e,
                        { setTitleElement: r, setTitle: s } = (0, n.useContext)(d.B9),
                        a = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            (null == a ? void 0 : a.current) && r(a), o && s(o);
                        }, [a, o, r, s]),
                        (0, n.useEffect)(
                            () => () => {
                                s('');
                            },
                            [s],
                        ),
                        (0, i.jsx)('div', { ref: a, className: l, children: t })
                    );
                };
        },
        95722: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
    },
    (e) => {
        e.O(0, [85, 260, 3196, 403, 2259, 1311, 7764, 6706, 5201, 2899, 5419, 2561, 5906, 4690, 4501, 1002, 3889, 1009, 4670, 7358], () => e((e.s = 43604))),
            (_N_E = e.O());
    },
]);
