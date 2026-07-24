(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8816],
    {
        3796: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var i = n(21916),
                o = n(55178);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [n, a] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, o.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !n && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, n, t]);
            };
        },
        8097: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => h });
            var i = n(32290),
                o = n(63618),
                a = n(55178),
                r = n(21732),
                l = n(50162),
                s = n(74196),
                d = n(71926),
                c = n(60900),
                u = n(39407),
                f = n(91027),
                _ = n(97647),
                p = n(57594),
                m = n(79406),
                x = n(61258),
                v = n(58534),
                b = n(70627),
                y = n.n(b);
            let h = (e) => {
                let {
                        closeToast: t,
                        className: n,
                        coverUri: b,
                        entityTitle: h,
                        entityDescription: j,
                        entityVariant: g,
                        entityUrl: N,
                        customCover: C,
                        radius: P,
                        isPinned: O,
                    } = e,
                    A = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, f.c)((n) => {
                            let { entityVariant: o, values: a, entityTitle: r, entityDescription: l } = n;
                            switch (o) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: r }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: r }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: r }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: r }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: r }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: r }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(m.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: r, description: l }),
                                    };
                            }
                        });
                    })(),
                    L = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, f.c)((n) => {
                            let { entityVariant: o, values: a, entityTitle: r, entityDescription: l } = n;
                            switch (o) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: r }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: r }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: r }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: r }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(m.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: r, description: l }),
                                    };
                            }
                        });
                    })(),
                    w = (0, a.useMemo)(
                        () =>
                            N
                                ? (0, i.jsx)(x.N, {
                                      className: y().link,
                                      href: N,
                                      title: h,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: y().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', h, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: y().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: h,
                                      children: ['\xa0', h, '\xa0'],
                                  }),
                        [h, N],
                    ),
                    k = (0, a.useMemo)(
                        () => C || (0, i.jsx)(l._V, { className: y().image, src: b, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [b, C],
                    ),
                    R = (0, a.useMemo)(() => {
                        let e = { entity: w, description: j };
                        return O
                            ? A({ entityVariant: g, values: e, entityTitle: h, entityDescription: j })
                            : L({ entityVariant: g, values: e, entityTitle: h, entityDescription: j });
                    }, [w, j, O, L, g, h, A]);
                return (0, i.jsx)(v.$, {
                    className: (0, o.$)(y().root, { [y().root_withLongText]: g === _.c.AUDIOBOOK }, n),
                    closeToast: t,
                    cover: k,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': R.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: y().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': r.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: R.caption,
                            }),
                        ],
                    }),
                    coverRadius: P,
                });
            };
        },
        10180: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => m });
            var i = n(32290),
                o = n(63618),
                a = n(96103),
                r = n(55178),
                l = n(60900),
                s = n(21732),
                d = n(85433),
                c = n(63423),
                u = n(82586),
                f = n(57594),
                _ = n(22496),
                p = n.n(_);
            let m = (0, a.PA)((e) => {
                let { isPinned: t, onClick: n, className: a, size: _ = 's', iconSize: m = 'xxs', withScaleAnimation: x = !0, withRipple: v, isDisabled: b } = e,
                    { user: y } = (0, f.g)(),
                    { formatMessage: h } = (0, l.A)(),
                    { scaleAnimation: j, unscaleAnimation: g, handleAnimationEnd: N, handleClick: C } = (0, d.C)({ shouldStartFromUnscale: t, onClick: n, isEnabled: x }),
                    P = t ? 'pin_filled' : 'pin',
                    O = (0, r.useMemo)(() => (t ? h({ id: 'interface-actions.unpin' }) : h({ id: 'interface-actions.pin' })), [h, t]);
                return (0, i.jsx)(c.$, {
                    className: (0, o.$)(p().root, { [p().animation_scaled]: j, [p().animation_unscaled]: g }, a),
                    onAnimationEnd: N,
                    variant: 'default',
                    color: 'secondary',
                    onClick: C,
                    'aria-label': O,
                    'aria-pressed': t,
                    size: _,
                    withRipple: v,
                    radius: 'round',
                    disabled: b || !y.isAuthorized,
                    icon: (0, i.jsx)(u.I, { className: p().icon, variant: P, size: m }),
                    'data-test-id': s.S7.PIN_BUTTON,
                });
            });
        },
        12989: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => v });
            var i = n(55178),
                o = n(16172),
                a = n(52068),
                r = n(6752),
                l = n(62376),
                s = n(1677),
                d = n(48922),
                c = n(84782),
                u = n(30915),
                f = n(18746),
                _ = n(2792),
                p = n(37240),
                m = n(51012),
                x = n(47498);
            let v = () => {
                let e = (0, l.U)(),
                    t = (0, a.st)(),
                    { hash: n } = (0, a.gf)(),
                    { pageId: v, displayReasonId: b } = (0, p.$)(),
                    { tabId: y, tabPos: h, isTabSelectedByDefault: j } = (0, x.R)(),
                    { offsetBlockPosY: g } = (0, u.u)(),
                    { blockType: N, blockId: C, blockPosX: P, blockPosY: O, mainObjectId: A, mainObjectType: L, displayReasonId: w } = (0, c.N)(),
                    { filterKey: k, filterValue: R, filterPos: M } = (0, f.G)(),
                    { objectType: S, objectsCount: T, objectId: I, objectPosX: E, objectPosY: B } = (0, _.J)(),
                    { skeleton: D } = (0, m.b)(),
                    z = null != w ? w : b,
                    U = (0, r.L)(() => (void 0 !== g && void 0 !== O ? g + O : O));
                return (0, i.useCallback)(
                    (i, a) => {
                        if (!t || !v || !d.xK.includes(v) || !d.fD.includes(v)) return;
                        let r = s.F[v];
                        if (!r) return;
                        let l = {
                            hash: n,
                            pageId: r,
                            entityType: N,
                            entityId: C,
                            entityPosX: P,
                            entityPosY: U,
                            objectsCount: T,
                            viewUuid: a,
                            objectType: S,
                            objectId: I,
                            objectPosX: E,
                            objectPosY: B,
                        };
                        void 0 !== k && ((l.filterKey = k), (l.filterValue = R), (l.filterPos = M)),
                            d.qG.includes(v) && ((l.tabId = y), (l.tabPos = h), (l.isTabSelectedByDefault = j)),
                            D && (l.skeletonId = D),
                            'string' == typeof A && 'string' == typeof L && ((l.mainObjectType = L), (l.mainObjectId = A)),
                            z && (l.displayReasonId = z);
                        let c = (0, o.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        c && (i ? (0, o.Pf)(t.evgenInstance, c) : (0, o.nv)(t.evgenInstance, c));
                    },
                    [t, z, C, P, U, N, k, M, R, n, j, e, A, L, I, E, B, S, T, v, D, y, h],
                );
            };
        },
        14934: (e, t, n) => {
            'use strict';
            n.d(t, { MN: () => c, hg: () => d });
            var i,
                o = n(55178),
                a = {
                    5881: (e, t, n) => {
                        function i() {
                            for (var e, t, n = 0, i = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (i = e(t[n])) && (o && (o += ' '), (o += i));
                                            else for (n in t) t[n] && (o && (o += ' '), (o += n));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        n.r(t), n.d(t, { clsx: () => i, default: () => o });
                        let o = i;
                    },
                    4831: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    8346: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    6132: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    4517: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    6951: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2223: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    5882: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var a in ((i = {}), t)) 'key' !== a && (i[a] = t[a]);
                            else i = t;
                            return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    5817: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0);
                        let o = n(4377),
                            a = n(5881),
                            r = n(9e3),
                            l = i(n(4831));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: n,
                                    likeControl: i,
                                    menuControl: s,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: f = 'default',
                                    bottomContainerClassName: _,
                                    labelText: p,
                                } = e,
                                m = c || n,
                                x = s || i;
                            return (0, o.jsxs)('div', {
                                className: (0, a.clsx)(
                                    l.default.root,
                                    l.default.controls,
                                    { [l.default.controls_visible]: u },
                                    l.default['controls_radius_'.concat(f)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: l.default.top, children: d }),
                                    (0, o.jsxs)('div', {
                                        className: (0, a.clsx)(l.default.bottom, _),
                                        children: [
                                            m && (0, o.jsxs)('div', { className: l.default.bottom_left, children: [c, n] }),
                                            x && (0, o.jsxs)('div', { className: l.default.bottom_right, children: [s, i] }),
                                        ],
                                    }),
                                    !!p && (0, o.jsx)(r.Label, { className: l.default.label, children: p }),
                                ],
                            });
                        };
                    },
                    440: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0);
                        let o = n(4377),
                            a = n(810),
                            r = n(5881),
                            l = n(2582),
                            s = n(3758),
                            d = i(n(8346)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: n,
                                    className: i,
                                    textPosition: a = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: f,
                                    explicitMarkComponent: _,
                                    chart: p,
                                    children: m,
                                    srTitle: x,
                                    wrapperClassName: v,
                                    ...b
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, r.clsx)(d.default.root, i),
                                    ref: t,
                                    ...b,
                                    children: [
                                        (0, o.jsx)(s.SROnly, { tabIndex: -1, children: null != x ? x : u }),
                                        (0, o.jsx)('div', { className: d.default.viewContainer, children: n }),
                                        (0, o.jsxs)('div', {
                                            className: (0, r.clsx)(d.default.wrapper, v),
                                            children: [
                                                p,
                                                (0, o.jsxs)('div', {
                                                    className: (0, r.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(l.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        f,
                                                        m,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, o.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let o = n(4377),
                            a = n(5881),
                            r = n(2582),
                            l = i(n(6132));
                        t.Label = (e) => {
                            let { children: t, className: n, size: i = 's', ...s } = e;
                            return (0, o.jsx)(r.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, a.clsx)(l.default.root, n),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    9e3: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        var i = n(2);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    2865: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            l = i(n(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: n, children: i, ...s } = e,
                                d = (0, a.clsx)(l.default.root, { [l.default.focusable]: n }, t);
                            return (0, r.isValidElement)(i)
                                ? (0, r.cloneElement)(i, { ...s, className: (0, a.clsx)(d, i.props.className) })
                                : (0, o.jsx)('span', { className: d, ...s, children: i });
                        };
                    },
                    3758: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        var i = n(2865);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    7743: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            l = n(4721),
                            s = i(n(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: n, type: i = 'text', size: r = 's', className: d, children: c, weight: u = 'medium', ...f } = e;
                            return (0, o.jsx)(l.Typography, {
                                variant: n,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(r)], s.default['root_weight_'.concat(u)], d),
                                ...f,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, r.forwardRef)((e, n) => (0, o.jsx)(t.CaptionComponent, { forwardRef: n, ...e })));
                    },
                    404: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            l = n(4721),
                            s = i(n(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: n, weight: i = 'bold', size: r = 's', className: d, children: c, ...u } = e;
                            return (0, o.jsx)(l.Typography, {
                                variant: n,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_size_'.concat(r)], s.default['root_weight_'.concat(i)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, r.forwardRef)((e, n) => (0, o.jsx)(t.HeadingComponent, { forwardRef: n, ...e })));
                    },
                    4721: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            l = i(n(5882));
                        function s(e) {
                            let { forwardRef: t, style: n, className: i, children: r, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof r ? r : void 0;
                            return (0, o.jsx)(s, {
                                style: { ...n, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: d && d > 0, [l.default.root_clamp_oneline]: d && 1 === d, [l.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: r,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, r.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var i = n(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var o = n(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = n.t(o, 2));
                    },
                },
                r = {};
            function l(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var n = (r[e] = { exports: {} });
                return a[e].call(n.exports, n, n.exports, l), n.exports;
            }
            (l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'X$', { value: !0 }), (s.kk = s.m7 = void 0);
                var e = l(440);
                Object.defineProperty(s, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = l(5817);
                Object.defineProperty(s, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = s.kk,
                c = s.m7;
            s.X$;
        },
        22496: (e) => {
            e.exports = {
                animation_scaled: 'PinButton_animation_scaled__Aj6LA',
                scale: 'PinButton_scale__nyvJS',
                animation_unscaled: 'PinButton_animation_unscaled__QM3sC',
                unscale: 'PinButton_unscale__a8LwS',
            };
        },
        22714: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            var i = n(32290),
                o = n(55178),
                a = n(1176);
            let r = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: r, pageStyle: l, pagePlacement: s, children: d } = e,
                    c = (0, o.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: r, pageStyle: l, pagePlacement: s }), [t, n, r, l, s]);
                return (0, i.jsx)(a.r.Provider, { value: c, children: d });
            };
        },
        23352: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            var i = n(55178),
                o = n(12989),
                a = n(80536);
            let r = function () {
                let { callback: e, singleEvent: t, withViewUuid: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = (0, i.useRef)(null),
                    l = (0, o.D)(),
                    s = (0, i.useId)(),
                    d = (0, i.useContext)(a.B),
                    c = (0, i.useCallback)(
                        (i, o) => {
                            e ? e(i, n ? o : void 0) : l(i, o), t && d.unobserveElement(s);
                        },
                        [e, d, s, l, t, n],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            d.observeElement({ elementRef: r, elementId: s, callback: c }),
                            () => {
                                d.unobserveElement(s);
                            }
                        ),
                        [e, d, c, s, l],
                    ),
                    { ref: r, intersectionPropertyId: s }
                );
            };
        },
        56367: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => u });
            var i = n(32290),
                o = n(96103),
                a = n(55178),
                r = n(39407),
                l = n(21732),
                s = n(82586),
                d = n(19740),
                c = n(57594);
            let u = (0, o.PA)((e) => {
                let { isPinned: t, onClick: n, disabled: o, className: u } = e,
                    { user: f } = (0, c.g)(),
                    _ = t ? 'unpin' : 'pin',
                    p = t ? l.S7.CONTEXT_MENU_UNPIN_BUTTON : l.S7.CONTEXT_MENU_PIN_BUTTON,
                    m = (0, a.useMemo)(() => (t ? (0, i.jsx)(r.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(r.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: n,
                    icon: (0, i.jsx)(s.I, { variant: _, size: 'xxs' }),
                    'data-test-id': p,
                    disabled: o || !f.isAuthorized,
                    children: m,
                });
            });
        },
        70627: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        80536: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => i });
            let i = (0, n(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
    },
]);
