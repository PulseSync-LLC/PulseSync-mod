(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2088],
    {
        4795: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var i = n(72288),
                o = n(97956);
            let a = () => {
                var e, t;
                let {
                    user: n,
                    settings: { browserInfo: a },
                    experiments: r,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    n.isAuthorized &&
                    !n.hasPlus &&
                    (null == (t = r.getExperiment(o.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        9590: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        27262: (e) => {
            e.exports = {
                animation_scaled: 'PinButton_animation_scaled__Aj6LA',
                scale: 'PinButton_scale__nyvJS',
                animation_unscaled: 'PinButton_animation_unscaled__QM3sC',
                unscale: 'PinButton_unscale__a8LwS',
            };
        },
        27817: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => u });
            var i = n(88800),
                o = n(84961),
                a = n(53548),
                r = n(88969),
                s = n(17392),
                l = n(52300),
                d = n(19934),
                c = n(72288);
            let u = (0, o.PA)((e) => {
                let { isPinned: t, onClick: n, disabled: o, className: u, iconClassName: _ } = e,
                    { user: f } = (0, c.g)(),
                    m = t ? 'unpin' : 'pin',
                    p = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    v = (0, a.useMemo)(() => (t ? (0, i.jsx)(r.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(r.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: n,
                    icon: (0, i.jsx)(l.I, { className: _, variant: m, size: 'xxs' }),
                    'data-test-id': p,
                    disabled: o || !f.isAuthorized,
                    children: v,
                });
            });
        },
        29832: (e, t, n) => {
            'use strict';
            n.d(t, { MN: () => c, hg: () => d });
            var i,
                o = n(53548),
                a = {
                    5881: (e, t, n) => {
                        function i() {
                            for (var e, t, n = 0, i = ''; n < arguments.length;)
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
                        (n.r(t), n.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    8765: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
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
                    3550: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
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
                    4353: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
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
                    2445: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
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
                    61: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => i }));
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
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    7742: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = n(4377),
                            a = n(5881),
                            r = n(8532),
                            s = i(n(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: n,
                                    likeControl: i,
                                    menuControl: l,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: f,
                                    labelText: m,
                                } = e,
                                p = c || n,
                                v = l || i;
                            return (0, o.jsxs)('div', {
                                className: (0, a.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: s.default.top, children: d }),
                                    (0, o.jsxs)('div', {
                                        className: (0, a.clsx)(s.default.bottom, f),
                                        children: [
                                            p && (0, o.jsxs)('div', { className: s.default.bottom_left, children: [c, n] }),
                                            v && (0, o.jsxs)('div', { className: s.default.bottom_right, children: [l, i] }),
                                        ],
                                    }),
                                    !!m && (0, o.jsx)(r.Label, { className: s.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = n(4377),
                            a = n(810),
                            r = n(5881),
                            s = n(8903),
                            l = n(6530),
                            d = i(n(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: n,
                                    className: i,
                                    textPosition: a = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: f,
                                    chart: m,
                                    children: p,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...y
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, r.clsx)(d.default.root, i),
                                    ref: t,
                                    ...y,
                                    children: [
                                        (0, o.jsx)(l.SROnly, { children: null != v ? v : u }),
                                        (0, o.jsx)('div', { className: d.default.viewContainer, children: n }),
                                        (0, o.jsxs)('div', {
                                            className: (0, r.clsx)(d.default.wrapper, x),
                                            children: [
                                                m,
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
                                                                    (0, o.jsx)(s.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    f,
                                                                ],
                                                            }),
                                                        _,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, o.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = n(4377),
                            a = n(5881),
                            r = n(8903),
                            s = i(n(4353));
                        t.Label = (e) => {
                            let { children: t, className: n, size: i = 's', ...l } = e;
                            return (0, o.jsx)(r.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, a.clsx)(s.default.root, n),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = n(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            s = i(n(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: n, children: i, ...l } = e,
                                d = (0, a.clsx)(s.default.root, { [s.default.focusable]: n }, t);
                            return (0, r.isValidElement)(i)
                                ? (0, r.cloneElement)(i, { ...l, className: (0, a.clsx)(d, i.props.className) })
                                : (0, o.jsx)('span', { className: d, ...l, children: i });
                        };
                    },
                    6530: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = n(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            s = n(5987),
                            l = i(n(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: n, type: i = 'text', size: r = 's', className: d, children: c, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: n,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_'.concat(i, '_').concat(r)], l.default['root_weight_'.concat(u)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, r.forwardRef)((e, n) => (0, o.jsx)(t.CaptionComponent, { forwardRef: n, ...e }))));
                    },
                    1641: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            s = n(5987),
                            l = i(n(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: n, weight: i = 'bold', size: r = 's', className: d, children: c, ...u } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: n,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_size_'.concat(r)], l.default['root_weight_'.concat(i)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, r.forwardRef)((e, n) => (0, o.jsx)(t.HeadingComponent, { forwardRef: n, ...e }))));
                    },
                    5987: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = n(4377),
                            a = n(5881),
                            r = n(810),
                            s = i(n(61));
                        function l(e) {
                            let { forwardRef: t, style: n, className: i, children: r, variant: l, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof r ? r : void 0;
                            return (0, o.jsx)(l, {
                                style: { ...n, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: r,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, r.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = n(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var o = n(1641);
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
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var n = (r[e] = { exports: {} });
                return (a[e].call(n.exports, n, n.exports, s), n.exports);
            }
            ((s.d = (e, t) => {
                for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = l.kk,
                c = l.m7;
            l.X$;
        },
        33719: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => h });
            var i = n(88800),
                o = n(65724),
                a = n(53548),
                r = n(17392),
                s = n(90688),
                l = n(73170),
                d = n(29504),
                c = n(2058),
                u = n(88969),
                _ = n(29993),
                f = n(15077),
                m = n(72288),
                p = n(97956),
                v = n(91292),
                x = n(59304),
                y = n(95641),
                b = n.n(y);
            let h = (e) => {
                let {
                        closeToast: t,
                        className: n,
                        coverUri: y,
                        entityTitle: h,
                        entityDescription: j,
                        entityVariant: C,
                        entityUrl: N,
                        customCover: g,
                        radius: A,
                        isPinned: w,
                    } = e,
                    S = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, m.g)();
                        return (0, _.c)((n) => {
                            let { entityVariant: o, values: a, entityTitle: r, entityDescription: s } = n;
                            switch (o) {
                                case f.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: r }),
                                    };
                                case f.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: r }),
                                    };
                                case f.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: r }),
                                    };
                                case f.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: r }),
                                    };
                                case f.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: r }),
                                    };
                                case f.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: r }),
                                    };
                                case f.c.VIBE:
                                    if (!t.checkExperiment(p.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    O = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, m.g)();
                        return (0, _.c)((n) => {
                            let { entityVariant: o, values: a, entityTitle: r, entityDescription: s } = n;
                            switch (o) {
                                case f.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: r }),
                                    };
                                case f.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: r }),
                                    };
                                case f.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: r }),
                                    };
                                case f.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: r }),
                                    };
                                case f.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case f.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case f.c.VIBE:
                                    if (!t.checkExperiment(p.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    L = (0, a.useMemo)(
                        () =>
                            N
                                ? (0, i.jsx)(v.N, {
                                      className: b().link,
                                      href: N,
                                      title: h,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: b().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', h, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: b().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: h,
                                      children: ['\xa0', h, '\xa0'],
                                  }),
                        [h, N],
                    ),
                    P = (0, a.useMemo)(
                        () => g || (0, i.jsx)(s._V, { className: b().image, src: y, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [y, g],
                    ),
                    E = (0, a.useMemo)(() => {
                        let e = { entity: L, description: j };
                        return w
                            ? S({ entityVariant: C, values: e, entityTitle: h, entityDescription: j })
                            : O({ entityVariant: C, values: e, entityTitle: h, entityDescription: j });
                    }, [L, j, w, O, C, h, S]);
                return (0, i.jsx)(x.$, {
                    className: (0, o.$)(b().root, { [b().root_withLongText]: C === f.c.AUDIOBOOK }, n),
                    closeToast: t,
                    cover: P,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': E.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: b().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': r.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: E.caption,
                            }),
                        ],
                    }),
                    coverRadius: A,
                });
            };
        },
        36207: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            var i = n(88800),
                o = n(2058),
                a = n(17610);
            let r = (e) => {
                let { children: t } = e,
                    { formatMessage: n } = (0, o.A)();
                return (0, i.jsx)(a.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: n({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        37670: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var i = n(53548);
            n(30282);
            var o = n(58390);
            let a = (e) => {
                let t = (0, o.usePathname)(),
                    [n, a] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !n && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, n, t]));
            };
        },
        37770: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => d });
            var i = n(88800),
                o = n(65724),
                a = n(17392),
                r = n(19994),
                s = n(9590),
                l = n.n(s);
            let d = (e) => {
                let {
                    isActive: t,
                    className: n,
                    shimmerClassName: s,
                    round: d,
                    'aria-label': c,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: f = 3,
                    withSubcover: m,
                    radius: p = 'l',
                } = e;
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, o.$)(l().root, n),
                    'data-test-id': a.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        m && (0, i.jsx)(r.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, i.jsx)(r.W, { isActive: t, className: (0, o.$)(l().cover, s, { [l().cover_round]: d, [l().cover_withSubcover]: m }), radius: p }),
                        _ &&
                            (0, i.jsx)('div', {
                                className: (0, o.$)(l().infoContainer, l()['content_linesCount_'.concat(f)], { [l().infoContainer_centered]: u }),
                                children: (0, i.jsx)(r.W, { isActive: t, className: (0, o.$)(l().title, { [l().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        56446: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => u });
            var i = n(88800),
                o = n(53548),
                a = n(2058),
                r = n(17392),
                s = n(96817),
                l = n(52300),
                d = n(39318);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: n,
                            size: o,
                            radius: c,
                            iconSize: u,
                            disabled: _,
                            onClick: f,
                            iconClassName: m,
                            className: p,
                            forwardRef: v,
                            style: x,
                            children: y,
                        } = e,
                        { formatMessage: b } = (0, a.A)(),
                        h = b({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: c,
                        size: o,
                        variant: t,
                        withRipple: n,
                        flexIcon: !0,
                        'aria-label': h,
                        onClick: f,
                        ref: v,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: u, className: m }),
                        disabled: _,
                        'data-intersection-property-id': d.N,
                        style: x,
                        'data-test-id': r.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        56862: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => p });
            var i = n(88800),
                o = n(65724),
                a = n(84961),
                r = n(53548),
                s = n(2058),
                l = n(17392),
                d = n(81883),
                c = n(96817),
                u = n(52300),
                _ = n(72288),
                f = n(27262),
                m = n.n(f);
            let p = (0, a.PA)((e) => {
                let { isPinned: t, onClick: n, className: a, size: f = 's', iconSize: p = 'xxs', withScaleAnimation: v = !0, withRipple: x, isDisabled: y } = e,
                    { user: b } = (0, _.g)(),
                    { formatMessage: h } = (0, s.A)(),
                    { scaleAnimation: j, unscaleAnimation: C, handleAnimationEnd: N, handleClick: g } = (0, d.C)({ shouldStartFromUnscale: t, onClick: n, isEnabled: v }),
                    A = t ? 'pin_filled' : 'pin',
                    w = (0, r.useMemo)(() => (t ? h({ id: 'interface-actions.unpin' }) : h({ id: 'interface-actions.pin' })), [h, t]);
                return (0, i.jsx)(c.$, {
                    className: (0, o.$)(m().root, { [m().animation_scaled]: j, [m().animation_unscaled]: C }, a),
                    onAnimationEnd: N,
                    variant: 'default',
                    color: 'secondary',
                    onClick: g,
                    'aria-label': w,
                    'aria-pressed': t,
                    size: f,
                    withRipple: x,
                    radius: 'round',
                    disabled: y || !b.isAuthorized,
                    icon: (0, i.jsx)(u.I, { className: m().icon, variant: A, size: p }),
                    'data-test-id': l.S7.PIN_BUTTON,
                });
            });
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
    },
]);
