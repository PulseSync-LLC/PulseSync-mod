(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
    {
        7032: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => d });
            var n = o(54486),
                i = o(50420),
                l = o(15209),
                r = o(39610),
                s = o(97800),
                a = o(18433),
                c = o.n(a);
            let d = (e) => {
                let { title: t, children: o, restrictionsClassName: a, ...d } = e;
                return (0, n.jsxs)('section', {
                    className: c().root,
                    ...(0, l.getDataAttrFromProps)(d),
                    children: [
                        t &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(s.Caption, { variant: 'span', type: 'text', size: 'm', weight: 'medium', 'aria-hidden': !0, children: t }),
                                    (0, n.jsx)(r.q, { children: (0, n.jsx)(s.Heading, { variant: 'h4', children: t }) }),
                                ],
                            }),
                        (0, n.jsx)('div', { className: (0, i.$)(c().restrictions, a), children: o }),
                    ],
                });
            };
        },
        13384: (e) => {
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
        18433: (e) => {
            e.exports = { root: 'RestrictionBlock_root__qzBtp', restrictions: 'RestrictionBlock_restrictions__6V1zc' };
        },
        20426: (e) => {
            e.exports = {
                icon: 'SettingsListLinkItem_icon__p4P_V',
                root: 'SettingsListLinkItem_root__rTPC9',
                container: 'SettingsListLinkItem_container__k7bhS',
                linkText: 'SettingsListLinkItem_linkText__0PHlQ',
                title: 'SettingsListLinkItem_title__duJnL',
                description: 'SettingsListLinkItem_description__xWeAD',
            };
        },
        21390: (e, t, o) => {
            'use strict';
            o.d(t, { L: () => d });
            var n,
                i = o(94377),
                l = o(61910),
                r = {
                    6699: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let n = o(352),
                            i = o(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: o, throttleTimeout: l } = e,
                                r = (0, i.useRef)(null),
                                [s, a] = (0, i.useState)(!!o),
                                c = (0, i.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            a(!o),
                                                r.current && window.clearTimeout(r.current),
                                                (r.current = window.setTimeout(() => {
                                                    a(!!o);
                                                }, t));
                                        }, l),
                                    [t, o, l],
                                ),
                                d = (0, i.useCallback)(() => {
                                    a(!!o), r.current && window.clearTimeout(r.current);
                                }, [o]);
                            return (
                                (0, i.useEffect)(
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
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = n || (n = o.t(l, 2));
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
                    let { onScroll: i, listenIsScrolling: l, elementRef: r } = n,
                        { state: s, handleDebouncedToggle: a } = (0, o.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        c = (0, e.useCallback)(() => {
                            l && a(), null == i || i();
                        }, [l, a, i]);
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
        27540: (e) => {
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
        31622: (e, t, o) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let n = o(54486),
                i = o(61910),
                l = o(91165);
            function r(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            o(98944);
            let s = { loader: () => Promise.resolve(r(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...s, ...e },
                        o = (0, i.lazy)(() => t.loader().then(r)),
                        a = t.loading;
                    function c(e) {
                        let r = a ? (0, n.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? i.Suspense : i.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(o, { ...e })] })
                                : (0, n.jsx)(l.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(o, { ...e }) });
                        return (0, n.jsx)(c, { ...(s ? { fallback: r } : {}), children: d });
                    }
                    return (c.displayName = 'LoadableComponent'), c;
                };
        },
        33276: (e, t, o) => {
            'use strict';
            o.d(t, { hO: () => m, jr: () => _, jp: () => p, QZ: () => i }), o(77607);
            var n = o(61910);
            let i = (e, t, o) => {
                let i = null != o && o;
                return {
                    topColorStyle: (0, n.useMemo)(() => {
                        if (void 0 === t) return;
                        let o = i ? 93 : 17,
                            n = t - o;
                        return { '--average-color-background': e, transform: 'translateY('.concat(t >= o ? 0 : n, 'px)'), opacity: 1 };
                    }, [t, i, e]),
                    headerStyle: (0, n.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var l = o(54486),
                r = o(1365),
                s = o(28303),
                a = o(21390),
                c = o(83252),
                d = o(80585);
            let u = (e) => {
                    let { element: t, scrollTop: o, isMobile: n } = e,
                        i = 0.6 * t.clientHeight;
                    return o + (n ? 60 : 76) >= t.offsetTop + i;
                },
                m = (0, s.PA)((e) => {
                    let { children: t, scrollElement: o, outerTitle: i = '', headerElement: s, headerThreshold: m, shouldHideHeader: _ } = e,
                        [p, h] = (0, n.useState)(i),
                        [f, x] = (0, n.useState)(null),
                        [v, g] = (0, n.useState)(null),
                        [b, j] = (0, n.useState)(null),
                        [C, y] = (0, n.useState)(!1),
                        [N, S] = (0, n.useState)(!1),
                        [k, M] = (0, n.useState)(!1),
                        [w, T] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: E },
                        } = (0, c.Pjs)();
                    (0, n.useLayoutEffect)(() => {
                        h(i);
                    }, [i]);
                    let P = (0, n.useCallback)(() => {
                        let e = null != m ? m : 10,
                            t = s ? Number(s.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let n = (e) => {
                            M(e > t),
                                _ && T(e > 30),
                                (null == f ? void 0 : f.current) && y(u({ element: null == f ? void 0 : f.current, scrollTop: e, isMobile: E })),
                                (null == v ? void 0 : v.current) && S(u({ element: null == v ? void 0 : v.current, scrollTop: e, isMobile: E }));
                        };
                        E ? n(window.scrollY) : o && n(o.scrollTop);
                    }, [m, s, E, _, f, v, o]);
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
                            childElement: v,
                            setChildElement: g,
                            child: b,
                            setChild: j,
                            isScrolledChild: N,
                            isScrolledTitle: C,
                            isScrolling: k,
                            isHeaderHidden: w,
                        }),
                        [p, C, f, o, k, E, b, v, N, w],
                    );
                    return (0, l.jsx)(d.B9.Provider, { value: O, children: t });
                }),
                _ = (e) => {
                    let { children: t, child: o, className: i } = e,
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
                        (0, l.jsx)('div', { ref: a, className: i, children: t })
                    );
                },
                p = (e) => {
                    let { children: t, title: o, className: i } = e,
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
                        (0, l.jsx)('div', { ref: a, className: i, children: t })
                    );
                };
        },
        36246: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
            };
        },
        36446: (e, t, o) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let n = o(45221)._(o(31622));
            function i(e, t) {
                var o;
                let i = {};
                'function' == typeof e && (i.loader = e);
                let l = { ...i, ...t };
                return (0, n.default)({ ...l, modules: null == (o = l.loadableGenerated) ? void 0 : o.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        51734: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
                titleDisabled: 'SettingsListToggleItem_title__Xz8_Q_disabled',
                descriptionDisabled: 'SettingsListToggleItem_description__JBOzV_disabled',
            };
        },
        57249: (e, t, o) => {
            'use strict';
            e.exports = o.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58980: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
        61609: (e, t, o) => {
            'use strict';
            o.d(t, { l: () => c });
            var n,
                i = o(61910),
                l = {
                    5881: (e, t, o) => {
                        function n() {
                            for (var e, t, o = 0, n = ''; o < arguments.length; )
                                (e = arguments[o++]) &&
                                    (t = (function e(t) {
                                        var o,
                                            n,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (o = 0; o < t.length; o++) t[o] && (n = e(t[o])) && (i && (i += ' '), (i += n));
                                            else for (o in t) t[o] && (i && (i += ' '), (i += o));
                                        return i;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        o.r(t), o.d(t, { clsx: () => n, default: () => i });
                        let i = n;
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
                            var i = null;
                            if ((void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var l in ((n = {}), t)) 'key' !== l && (n[l] = t[l]);
                            else n = t;
                            return { $$typeof: o, type: e, key: i, ref: void 0 !== (t = n.ref) ? t : null, props: n };
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
                                    i = document.createElement('span'),
                                    l = Math.max(n.clientWidth, n.clientHeight),
                                    r = l / 2,
                                    s = n.getBoundingClientRect(),
                                    a = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (i.style.width = ''.concat(l, 'px')),
                                    (i.style.height = ''.concat(l, 'px')),
                                    (i.style.left = 0 === e.clientX ? '0px' : ''.concat(a - r, 'px')),
                                    (i.style.top = ''.concat(c - r, 'px')),
                                    i.classList.add(t);
                                let d = n.getElementsByClassName(t)[0];
                                d && d.remove(), n.insertBefore(i, n.firstChild);
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
                        var i = o(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return i.getElementFromRefOrElement;
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
                        let i = o(4377),
                            l = o(810),
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
                                        size: v,
                                        type: g = 'button',
                                        variant: b = 'default',
                                        withRipple: j = !0,
                                        withHover: C = !0,
                                        withBorder: y = !1,
                                        disabled: N,
                                        iconClassName: S,
                                        contentContainerClassName: k,
                                        ...M
                                    } = e,
                                    w = (0, l.useId)(),
                                    T = !l.Children.toArray(c).filter(Boolean).length,
                                    E = 'left' === n,
                                    P = null,
                                    A = (0, l.isValidElement)(p);
                                if (_) {
                                    var O, z;
                                    P = (0, l.cloneElement)(_, {
                                        className: (0, r.clsx)(
                                            a.default.icon,
                                            {
                                                [a.default['icon_position_'.concat(n)]]: n && !T,
                                                [a.default.icon_withButtonSize]: !(null == (O = _.props) ? void 0 : O.size),
                                            },
                                            null == (z = _.props) ? void 0 : z.className,
                                            S,
                                        ),
                                        key: w,
                                    });
                                }
                                let L = (0, l.useMemo)(() => (A ? (0, i.jsx)('div', { className: a.default.spinnerContainer, children: p }) : null), [A, p]),
                                    R = (0, l.useCallback)(
                                        (e) => {
                                            A || (j && (0, s.createRipple)(e, a.default.ripple), null == f || f(e));
                                        },
                                        [A, f, j],
                                    );
                                return (0, i.jsx)('button', {
                                    ref: t,
                                    className: (0, r.clsx)(
                                        a.default.root,
                                        a.default['root_'.concat(u, '_').concat(b)],
                                        a.default['root_radius_'.concat(x)],
                                        a.default.root_size,
                                        {
                                            [a.default['root_'.concat(u, '_withHover_').concat(b)]]: C && !N && !A,
                                            [a.default['root_size_'.concat(v)]]: v,
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
                                    type: g,
                                    role: h,
                                    onClick: R,
                                    ...M,
                                    disabled: N,
                                    'aria-live': A ? 'polite' : 'off',
                                    'aria-busy': A,
                                    children:
                                        _ || A
                                            ? (0, i.jsxs)('span', {
                                                  className: (0, r.clsx)(a.default.contentContainer, { [a.default.contentContainer_block]: o }, k),
                                                  children: [_ && E && P, !T && c, _ && !E && P, L],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
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
                        let i = o(4377),
                            l = o(5881),
                            r = o(810),
                            s = o(5928),
                            a = n(o(5682)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, i.jsx)('div', { className: (0, l.clsx)(a.default.icon, { [a.default.icon_checked]: t }) });
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
                                (0, i.jsx)(s.Button, {
                                    className: (0, l.clsx)(a.default.root, { [a.default.root_checked]: _ }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, i.jsx)(c, { isChecked: _ }),
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
                        e.exports = n || (n = o.t(i, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var o = (r[e] = { exports: {} });
                return l[e].call(o.exports, o, o.exports, s), o.exports;
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
        64984: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        65178: (e) => {
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
        65760: (e, t, o) => {
            'use strict';
            o.d(t, { SettingsPage: () => ei });
            var n = o(54486),
                i = o(28303),
                l = o(43426),
                r = o(47713),
                s = o(31500),
                a = o(56231),
                c = o(97800),
                d = o(59672),
                u = o(7032),
                m = o(83252),
                _ = o(13384),
                p = o.n(_),
                h = o(38974),
                f = o(57249),
                x = o(50420),
                v = o(83645),
                g = o(61910),
                b = o(8817),
                j = o(77881),
                C = o(49124);
            let y = v.default.default(
                () =>
                    Promise.resolve()
                        .then(o.bind(o, 38974))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = C.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, h.setWasmUrl)(new URL(f, e).href);
            }
            let N = (e) => {
                    let { thumbType: t } = e,
                        [o, i] = (0, g.useState)(null);
                    return ((0, g.useEffect)(() => {
                        let e = d.zf[t];
                        e &&
                            e().then((e) => {
                                (0, d.Jy)(e) ? i(e) : i(''.concat(window.location.origin).concat(e));
                            });
                    }, [t]),
                    o)
                        ? (0, n.jsx)(y, { src: o })
                        : null;
                },
                S = (0, i.PA)((e) => {
                    let { thumbId: t, isDefault: o = !1 } = e,
                        { settings: i, user: s, paywall: a } = (0, m.Pjs)(),
                        { formatMessage: u } = (0, l.A)(),
                        [_, h] = (0, g.useState)(!1);
                    (0, g.useEffect)(() => {
                        h(!0);
                    }, []);
                    let f = (0, b.c)((e) => {
                            if ((e.preventDefault(), !s.hasPlus && t !== i.selectedThumbId)) return void a.openModal();
                            i.setCustomPlayerThumb(t);
                        }),
                        v = !!_ && i.selectedThumbId === t;
                    if (o)
                        return (0, n.jsxs)(j.$, {
                            className: (0, x.$)(p().button, { [p().button_selected]: v }),
                            radius: 'xl',
                            onClick: f,
                            withRipple: !1,
                            'aria-pressed': v,
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
                        className: (0, x.$)(p().button, { [p().button_selected]: v }),
                        radius: 'xl',
                        onClick: f,
                        withRipple: !1,
                        'aria-pressed': v,
                        children: [
                            (0, n.jsx)('div', { style: y, className: (0, x.$)(p().thumbContent, p().thumbContent_custom), children: (0, n.jsx)(N, { thumbType: t }) }),
                            (0, n.jsx)(c.Caption, { className: p().thumbName, variant: 'div', size: 'm', weight: 'normal', lineClamp: 1, children: C.name }),
                        ],
                    });
                }),
                k = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
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
            var M = o(40320),
                w = o(80585),
                T = o(32692),
                E = o(27540),
                P = o.n(E);
            let A = (0, i.PA)(() => {
                let { formatMessage: e } = (0, l.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: o },
                    } = (0, m.Pjs)(),
                    i = (0, m.HFS)(),
                    s = (0, m.d79)(),
                    { language: a } = (0, m.h6b)();
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
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://github.com/PulseSync-LLC/PulseSync-mod',
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Репозиторий PulseSync на GitHub',
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://boosty.to/evt',
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Поддержать проект на Boosty',
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(w.N_, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://pulsesync.dev',
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Сайт проекта PulseSync',
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
                            dangerouslySetInnerHTML: { __html: e({ id: 'about-app.explicit-content' }) },
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
                            children: e({ id: 'desktop.app-version-short' }, { version: i }),
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-revision' }, { revision: s }),
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: 'PulseSync ' + window.PULSE_VERSION,
                        }),
                        (0, n.jsx)(c.Caption, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: 'Host ' + window.HOST_VERSION,
                        }),
                    ],
                });
            });
            var O = o(58360),
                z = o(64984),
                L = o.n(z);
            let R = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                I = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        i = (0, m.jRO)(),
                        s = (0, g.useCallback)(() => {
                            i.clearAll().then(() => {
                                t.close(),
                                    o(
                                        (0, n.jsx)(w.$W, {
                                            message: (0, n.jsx)(c.Caption, {
                                                className: L().message,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, n.jsx)(r.A, { id: 'offline.memory-cleared' }),
                                            }),
                                        }),
                                        { containerId: m.uQT.INFO },
                                    );
                            });
                        }, [t, o, i]);
                    return (0, n.jsxs)(T.a, {
                        className: L().root,
                        headerClassName: L().modalHeader,
                        contentClassName: L().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, n.jsx)(O.Image, { src: R.src, className: L().image, fit: 'contain', 'aria-hidden': !0 }),
                            (0, n.jsx)(c.Caption, {
                                className: L().description,
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
            var F = o(5956),
                B = o(65178),
                H = o.n(B);
            let D = (e) => {
                let { title: t, description: o, onClick: i, descriptionProps: l, ...r } = e;
                return (0, n.jsx)(j.$, {
                    className: (0, x.$)(H().root, H().important),
                    contentContainerClassName: H().contentContainer,
                    icon: (0, n.jsx)(F.Icon, { className: H().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    onClick: i,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    size: 'xs',
                    ...r,
                    children: (0, n.jsxs)('div', {
                        className: H().content,
                        children: [
                            (0, n.jsx)(c.Caption, { className: H().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: t }),
                            o && (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: H().description, ...l, children: o }),
                        ],
                    }),
                });
            };
            var W = o(20426),
                U = o.n(W);
            let q = (e) => {
                let { link: t, title: o, description: i, target: l } = e;
                return (0, n.jsxs)(w.N_, {
                    className: U().root,
                    containerClassName: U().container,
                    textClassName: U().linkText,
                    icon: (0, n.jsx)(F.Icon, { className: U().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    href: t,
                    ...(l ? { target: l } : {}),
                    children: [
                        (0, n.jsx)(c.Caption, { className: U().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: o }),
                        i && (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: U().description, children: i }),
                    ],
                });
            };
            var Z = o(61609),
                Y = o(51734),
                V = o.n(Y),
                inputComponent = o(19009),
                sliderComponent = o(28584);
            let G = (e) => {
                let { title: t, onChange: o, isChecked: i, description: l, dataTestId: r, disabled: s = !1 } = e,
                    a = (0, g.useId)();
                return (0, n.jsxs)('div', {
                    className: V().root,
                    children: [
                        (0, n.jsxs)('div', {
                            className: V().textContainer,
                            children: [
                                (0, n.jsx)(c.Caption, {
                                    className: s ? V().titleDisabled : V().title,
                                    id: a,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                l &&
                                    (0, n.jsx)(c.Caption, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'xs',
                                        weight: 'medium',
                                        className: s ? V().descriptionDisabled : V().description,
                                        children: l,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(Z.l, { isChecked: i, 'aria-describedby': a, onChange: o, disabled: s, ...r }),
                    ],
                });
            };
            var Q = o(98190),
                K = o.n(Q),
                te = o(80585);
            let J = (0, i.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, m.Pjs)(),
                    { formatMessage: t } = (0, l.A)(),
                    o = (0, g.useMemo)(() => {
                        let e = (0, n.jsx)(
                            c.Caption,
                            { className: K().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: (0, n.jsx)(r.A, { id: 'shortcuts.or' }) },
                            'or',
                        );
                        return m.bNV.map((t) => {
                            let { shortcutsAction: o, formattedMessage: i } = t,
                                l = m.MHd[o].map((e, t) =>
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
                                l.length > 1 && l.splice(1, 0, e),
                                (0, n.jsx)(
                                    'li',
                                    {
                                        children: (0, n.jsxs)('div', {
                                            className: K().content,
                                            children: [
                                                (0, n.jsx)(c.Caption, { className: K().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: i }),
                                                (0, n.jsx)('div', { className: K().buttons, children: l }),
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
            var X = o(58980),
                $ = o.n(X);
            let labeledBubble = (e) => {
                    let {
                        label: t,
                        color: o = 'var(--ym-controls-color-primary-default-enabled)',
                        tooltip: i = { title: 'Экспериментально', description: 'Может работать некорректно' },
                        disabled: l,
                        ...r
                    } = e;
                    return i
                        ? (0, n.jsx)(te.hj, {
                              title: i.title,
                              description: i.description,
                              children: (0, n.jsxs)('span', {
                                  style: {
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      width: 'fit-content',
                                      'margin-inline': '5px',
                                      'background-color': o,
                                      color: 'black',
                                      'border-radius': '50px',
                                      'padding-inline': '6px',
                                      transition: 'opacity var(--ym-duration-transition)',
                                      ...(l ? { opacity: 0.3 } : {}),
                                  },
                                  children: t,
                              }),
                          })
                        : (0, n.jsxs)('span', {
                              style: {
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  width: 'fit-content',
                                  'margin-inline': '5px',
                                  'background-color': o,
                                  color: 'black',
                                  'border-radius': '50px',
                                  'padding-inline': '6px',
                                  transition: 'opacity var(--ym-duration-transition)',
                                  ...(l ? { opacity: 0.3 } : {}),
                              },
                              children: t,
                          });
                },
                settingBarWithDropdown = (e) => {
                    let { title: t, description: o, onChange: i, value: l, options: r, direction: s = 'bottom', disabled: a = !1 } = e,
                        [d, u] = (0, g.useState)(!1),
                        [_, p] = (0, g.useState)(160),
                        h = (0, g.useRef)(null),
                        f = r.find((e) => e.value === l),
                        x = (0, g.useCallback)(
                            (e) => {
                                (i(e), u(!1));
                            },
                            [i],
                        ),
                        v = (0, g.useCallback)(
                            (e) => {
                                d && e.target !== h.current && (e.stopPropagation(), e.preventDefault(), u(!1));
                            },
                            [d],
                        );
                    return (
                        (0, g.useEffect)(() => {
                            document.addEventListener('click', v);
                            return () => {
                                document.removeEventListener('click', v);
                            };
                        }, [v]),
                        (0, g.useEffect)(() => {
                            let e = h.current;
                            if (!e) return;
                            let t = new ResizeObserver(([e]) => {
                                var t;
                                p(null == (t = e.borderBoxSize[0]) ? void 0 : t.inlineSize);
                            });
                            return (
                                t.observe(e),
                                () => {
                                    t.disconnect();
                                }
                            );
                        }, []),
                        (0, n.jsxs)('div', {
                            className: V().root,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: V().textContainer,
                                    children: [
                                        (0, n.jsx)(c.Caption, {
                                            className: a ? V().titleDisabled : V().title,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'bold',
                                            lineClamp: 1,
                                            'aria-hidden': !0,
                                            children: t,
                                        }),
                                        (f?.description ?? o) &&
                                            (0, n.jsx)(c.Caption, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'xs',
                                                weight: 'medium',
                                                className: a ? V().descriptionDisabled : V().description,
                                                children: f?.description ?? o,
                                            }),
                                    ],
                                }),
                                (0, n.jsxs)('div', {
                                    ref: h,
                                    onClick: () => {
                                        u((e) => (a ? !1 : !e));
                                    },
                                    className: ''.concat(
                                        a ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button',
                                        ' Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx',
                                    ),
                                    children: [
                                        f?.label || 'Select...',
                                        (0, n.jsx)('ul', {
                                            role: 'menu',
                                            className: 'settingBarWithDropdown_menu',
                                            style: {
                                                display: d ? 'flex' : 'none',
                                                flexDirection: 'column',
                                                width: ''.concat(_, 'px'),
                                                maxHeight: '16rem',
                                                overflowY: 'auto',
                                                overflowX: 'hidden',
                                                scrollbarWidth: 'thin',
                                                overscrollBehavior: 'contain',
                                                top: 'bottom' === s ? '120%' : 'unset',
                                                bottom: 'top' === s ? '120%' : 'unset',
                                            },
                                            children: r.map((e) =>
                                                (0, n.jsxs)(
                                                    'li',
                                                    {
                                                        role: 'menuitem',
                                                        className: 'settingBarWithDropdown_menuItem',
                                                        id: e.value,
                                                        'aria-selected': l === e.value,
                                                        onClick: (t) => {
                                                            (t.stopPropagation(), x(e.value));
                                                        },
                                                        children: [
                                                            (0, n.jsx)('span', { children: e.label }),
                                                            l === e.value &&
                                                                (0, n.jsx)('svg', {
                                                                    width: '16',
                                                                    height: '16',
                                                                    fill: 'currentColor',
                                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                                    children: (0, n.jsx)('path', { d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z' }),
                                                                }),
                                                        ],
                                                    },
                                                    e.value,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                keybindDisplayPart = (e) => {
                    switch (e) {
                        case 'Plus':
                            return '+';
                        case 'CommandOrControl':
                        case 'CmdOrCtrl':
                        case 'Control':
                        case 'Ctrl':
                            return 'Ctrl';
                        case 'Command':
                        case 'Cmd':
                            return 'Cmd';
                        case 'Option':
                            return 'Alt';
                        case 'Super':
                            return 'Win';
                        case 'Escape':
                            return 'Esc';
                        default:
                            return e;
                    }
                },
                formatKeybindDisplay = (e) => (e ? e.split('+').map(keybindDisplayPart).join(' + ') : 'Не задано'),
                keybindNamedKeyMap = {
                    ' ': 'Space',
                    Spacebar: 'Space',
                    Tab: 'Tab',
                    Backspace: 'Backspace',
                    Delete: 'Delete',
                    Insert: 'Insert',
                    Enter: 'Enter',
                    Return: 'Return',
                    Escape: 'Esc',
                    Esc: 'Esc',
                    ArrowUp: 'Up',
                    ArrowDown: 'Down',
                    ArrowLeft: 'Left',
                    ArrowRight: 'Right',
                    Home: 'Home',
                    End: 'End',
                    PageUp: 'PageUp',
                    PageDown: 'PageDown',
                    PrintScreen: 'PrintScreen',
                    AudioVolumeUp: 'VolumeUp',
                    AudioVolumeDown: 'VolumeDown',
                    AudioVolumeMute: 'VolumeMute',
                    MediaTrackNext: 'MediaNextTrack',
                    MediaTrackPrevious: 'MediaPreviousTrack',
                    MediaStop: 'MediaStop',
                    MediaPlayPause: 'MediaPlayPause',
                },
                keybindCodeMap = {
                    Backquote: '`',
                    Minus: '-',
                    Equal: '=',
                    BracketLeft: '[',
                    BracketRight: ']',
                    Backslash: '\\',
                    IntlBackslash: '\\',
                    Semicolon: ';',
                    Quote: "'",
                    Comma: ',',
                    Period: '.',
                    Slash: '/',
                },
                getKeybindModifiers = (e) => {
                    let t = [];
                    return (e.ctrlKey && t.push('Ctrl'), e.altKey && t.push('Alt'), e.shiftKey && t.push('Shift'), e.metaKey && t.push('Super'), t);
                },
                getKeybindModifierPreview = (e, t) => {
                    let o = getKeybindModifiers(e);
                    return o.length ? ''.concat(o.join(' + '), ' + ...') : t;
                },
                buildKeybindFromEvent = (e, t) => {
                    let o = getKeybindModifiers(e),
                        i = ['Plus', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', ':', '<', '_', '>', '?', '~', '{', '|', '}', '"'].includes(t);
                    return (i ? o.filter((e) => 'Shift' !== e) : o).concat(t).join('+');
                },
                getKeybindTokenFromEvent = (e) => {
                    if ('+' === e.key || 'NumpadAdd' === e.code) return 'Plus';
                    let t = keybindNamedKeyMap[e.key];
                    if (t) return t;
                    if (1 === e.key?.length) {
                        let t = e.key.toUpperCase();
                        if (/^[0-9A-Z)!@#$%^&*(:<_>?~{|}";=,\-./`\[\\\]']$/.test(t)) return t;
                    }
                    if (/^Key[A-Z]$/.test(e.code)) return e.code.slice(3);
                    if (/^Digit[0-9]$/.test(e.code)) return e.code.slice(5);
                    if (/^F([1-9]|1[0-9]|2[0-4])$/.test(e.code)) return e.code;
                    return keybindCodeMap[e.code] ?? null;
                },
                settingBarWithKeybindRecorder = (e) => {
                    let {
                            title: t,
                            description: o,
                            onChange: i,
                            value: l,
                            onRecordingChange: r1,
                            disabled: r = !1,
                            placeholder: s = 'Не задано',
                            recordingPlaceholder: a = 'Нажмите сочетание...',
                            clearHint: d = 'Esc - отмена, Backspace - сброс',
                        } = e,
                        [u, p] = (0, g.useState)(!1),
                        [h, f] = (0, g.useState)(a),
                        x = (0, g.useRef)(null),
                        v = (0, g.useId)(),
                        _ = (0, g.useCallback)(() => {
                            r ||
                                p((e) => {
                                    let t = !e;
                                    return (f(a), t);
                                });
                        }, [r, a]),
                        b = (0, g.useCallback)(() => {
                            (p(!1), f(a));
                        }, [a]),
                        j = (0, g.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), e.stopPropagation(), e.repeat)) return;
                                if (['Control', 'Shift', 'Alt', 'Meta'].includes(e.key)) return void f(getKeybindModifierPreview(e, a));
                                if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && ('Escape' === e.key || 'Esc' === e.key)) return void b();
                                if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && ('Backspace' === e.key || 'Delete' === e.key)) return (i(''), void b());
                                let t = getKeybindTokenFromEvent(e);
                                if (!t) return void f(getKeybindModifierPreview(e, a));
                                (i(buildKeybindFromEvent(e, t)), b());
                            },
                            [i, b, a],
                        ),
                        C = (0, g.useCallback)(
                            (e) => {
                                f(getKeybindModifierPreview(e, a));
                            },
                            [a],
                        );
                    return (
                        (0, g.useEffect)(() => {
                            if (!u) return;
                            let e = (e) => {
                                    x.current && !x.current.contains(e.target) && b();
                                },
                                t = () => {
                                    b();
                                };
                            return (
                                document.addEventListener('keydown', j, !0),
                                document.addEventListener('keyup', C, !0),
                                document.addEventListener('mousedown', e, !0),
                                window.addEventListener('blur', t),
                                () => {
                                    (document.removeEventListener('keydown', j, !0),
                                        document.removeEventListener('keyup', C, !0),
                                        document.removeEventListener('mousedown', e, !0),
                                        window.removeEventListener('blur', t));
                                }
                            );
                        }, [u, j, C, b]),
                        (0, g.useEffect)(() => {
                            return (
                                r1?.(u),
                                () => {
                                    u && r1?.(!1);
                                }
                            );
                        }, [u, r1]),
                        (0, g.useEffect)(() => {
                            r && u && b();
                        }, [r, u, b]),
                        (0, n.jsxs)('div', {
                            className: V().root,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: V().textContainer,
                                    children: [
                                        (0, n.jsx)(c.Caption, {
                                            className: r ? V().titleDisabled : V().title,
                                            id: v,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'bold',
                                            lineClamp: 1,
                                            'aria-hidden': !0,
                                            children: t,
                                        }),
                                        (u ? d : o) &&
                                            (0, n.jsx)(c.Caption, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'xs',
                                                weight: 'medium',
                                                className: r ? V().descriptionDisabled : V().description,
                                                children: u ? d : o,
                                            }),
                                    ],
                                }),
                                (0, n.jsx)('div', {
                                    ref: x,
                                    role: 'button',
                                    tabIndex: r ? -1 : 0,
                                    'aria-describedby': v,
                                    'aria-pressed': u,
                                    onClick: _,
                                    onKeyDown: (e) => {
                                        r || u || ('Enter' !== e.key && ' ' !== e.key) || (e.preventDefault(), e.stopPropagation(), _());
                                    },
                                    className: ''.concat(
                                        r ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button',
                                        ' Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx',
                                    ),
                                    style: {
                                        minWidth: '12.5rem',
                                        textAlign: 'center',
                                        ...(u
                                            ? {
                                                  borderColor: 'var(--ym-controls-color-secondary-outline-hovered_stroke)',
                                                  boxShadow: 'inset 0 0 0 1px var(--ym-controls-color-secondary-outline-hovered_stroke)',
                                              }
                                            : {}),
                                    },
                                    children: u ? h : l ? formatKeybindDisplay(l) : s,
                                }),
                            ],
                        })
                    );
                },
                settingBarWithInput = (e) => {
                    let {
                            title: t,
                            description: o,
                            onChange: i,
                            value: l,
                            disabled: r = !1,
                            placeholder: s = '',
                            type: a = 'text',
                            min: d,
                            max: u,
                            step: p,
                            inputMode: h,
                        } = e,
                        f = (0, g.useId)();
                    return (0, n.jsxs)('div', {
                        className: V().root,
                        children: [
                            (0, n.jsxs)('div', {
                                className: V().textContainer,
                                children: [
                                    (0, n.jsx)(c.Caption, {
                                        className: r ? V().titleDisabled : V().title,
                                        id: f,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: t,
                                    }),
                                    o &&
                                        (0, n.jsx)(c.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 'xs',
                                            weight: 'medium',
                                            className: r ? V().descriptionDisabled : V().description,
                                            children: o,
                                        }),
                                ],
                            }),
                            (0, n.jsx)('input', {
                                type: a,
                                value: l ?? '',
                                min: d,
                                max: u,
                                step: p,
                                inputMode: h,
                                placeholder: s,
                                disabled: r,
                                'aria-describedby': f,
                                onChange: (e) => {
                                    i(e.target.value);
                                },
                                className: ''.concat(
                                    r ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button',
                                    ' Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx',
                                ),
                                style: {
                                    minWidth: '12.5rem',
                                    textAlign: 'left',
                                    paddingInline: '0.875rem',
                                    height: '2.5rem',
                                    borderRadius: '999px',
                                    border: '1px solid var(--ym-controls-color-secondary-outline-default-stroke)',
                                    background: 'var(--ym-surface-color-primary-enabled-list)',
                                    color: 'inherit',
                                    font: 'inherit',
                                    boxShadow: 'none',
                                    outline: 'none',
                                    appearance: 'none',
                                    WebkitAppearance: 'none',
                                    caretColor: 'currentColor',
                                },
                            }),
                        ],
                    });
                },
                toggleBarWithPathChooser = (e) => {
                    let { title: t, onChange: o, isChecked: i, description: l, placeholder: r, disabled: s, inputValue: a, onClick: d } = e,
                        u = (0, g.useId)();
                    return (0, n.jsxs)('div', {
                        style: {
                            flexDirection: 'column',
                            display: 'flex',
                            gap: '5px',
                        },
                        children: [
                            (0, n.jsxs)('div', {
                                className: V().root,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: V().textContainer,
                                        children: [
                                            (0, n.jsx)(c.Caption, {
                                                className: s ? V().titleDisabled : V().title,
                                                id: u,
                                                variant: 'div',
                                                size: 'l',
                                                weight: 'bold',
                                                lineClamp: 1,
                                                'aria-hidden': !0,
                                                children: t,
                                            }),
                                            l &&
                                                (0, n.jsx)(c.Caption, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'xs',
                                                    weight: 'medium',
                                                    className: s ? V().descriptionDisabled : V().description,
                                                    children: l,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsx)(Z.l, { isChecked: i, 'aria-describedby': u, onChange: o }),
                                ],
                            }),
                            (0, n.jsxs)('div', {
                                className: V().root,
                                style: { justifyContent: 'unset', alignItems: 'unset' },
                                children: [
                                    (0, n.jsx)(inputComponent.p, {
                                        containerClassName: 'ToggleBarWithPathChooser_input',
                                        value: a,
                                        placeholder: r,
                                        disabled: !0,
                                    }),
                                    (0, n.jsx)(j.$, {
                                        radius: 'xxxl',
                                        color: 'secondary',
                                        size: 'm',
                                        onClick: d,
                                        children: 'Обзор',
                                        disabled: s,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                settingBarWithSlider = (e) => {
                    let { title: t, onChange: o, value: i, minValue: l, maxValue: r, step: s, description: a, disabled: d } = e,
                        u = (0, g.useId)();
                    return (0, n.jsxs)('div', {
                        className: V().root,
                        style: {
                            flexDirection: 'column',
                            alignItems: 'start',
                        },
                        children: [
                            (0, n.jsxs)('div', {
                                className: V().textContainer,
                                children: [
                                    (0, n.jsx)(c.Caption, {
                                        className: d ? V().titleDisabled : V().title,
                                        id: u,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: t,
                                    }),
                                    a &&
                                        (0, n.jsx)(c.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 'xs',
                                            weight: 'medium',
                                            className: d ? V().descriptionDisabled : V().description,
                                            children: a,
                                        }),
                                ],
                            }),
                            (0, n.jsxs)('div', {
                                style: {
                                    width: '-webkit-fill-available',
                                },
                                children: [
                                    (0, n.jsx)(c.Caption, {
                                        style: {
                                            textAlign: 'end',
                                        },
                                        variant: 'div',
                                        type: 'text',
                                        size: 'xs',
                                        weight: 'medium',
                                        className: d ? V().descriptionDisabled : V().description,
                                        children: i,
                                    }),
                                    (0, n.jsx)(sliderComponent.A, {
                                        thumbSize: 's',
                                        trackSize: 's',
                                        value: i,
                                        minValue: l ?? 0,
                                        maxValue: r ?? 2,
                                        secondaryValue: r ?? 1,
                                        step: s ?? 0.01,
                                        disabled: d,
                                        onChange: o,
                                        'aria-describedby': u,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                createGlobalShortcutDraftId = (e = 'shortcut') => ''.concat(e, '_', Date.now(), '_', Math.random().toString(36).slice(2, 9)),
                globalShortcutFallbackActions = [
                    'TOGGLE_PLAY',
                    'PLAY',
                    'PAUSE',
                    'MOVE_FORWARD',
                    'MOVE_BACKWARD',
                    'TOGGLE_REPEAT',
                    'REPEAT_NONE',
                    'REPEAT_CONTEXT',
                    'REPEAT_ONE',
                    'TOGGLE_SHUFFLE',
                    'SHUFFLE',
                    'SHUFFLE_NONE',
                    'TOGGLE_LIKE',
                    'LIKE',
                    'LIKE_NONE',
                    'TOGGLE_DISLIKE',
                    'DISLIKE',
                    'DISLIKE_NONE',
                    'SET_VOLUME',
                    'SET_PROGRESS',
                ],
                globalShortcutActionLabels = {
                    PLAY: 'Плей',
                    PAUSE: 'Пауза',
                    TOGGLE_PLAY: 'Плей/Пауза',
                    MOVE_FORWARD: 'Следующий трек',
                    MOVE_BACKWARD: 'Предыдущий трек',
                    TOGGLE_LIKE: 'Переключить Лайк',
                    LIKE: 'Поставить лайк',
                    LIKE_NONE: 'Снять лайк',
                    TOGGLE_DISLIKE: 'Переключить Дизлайк',
                    DISLIKE: 'Поставить дизлайк',
                    DISLIKE_NONE: 'Снять дизлайк',
                    TOGGLE_REPEAT: 'Переключить Повтор',
                    REPEAT_NONE: 'Повтор выкл.',
                    REPEAT_CONTEXT: 'Повтор плейлиста',
                    REPEAT_ONE: 'Повтор трека',
                    TOGGLE_SHUFFLE: 'Переключить Шафл',
                    SHUFFLE: 'Включить шафл',
                    SHUFFLE_NONE: 'Выключить шафл',
                    SET_VOLUME: 'Громкость',
                    SET_PROGRESS: 'Позиция',
                },
                globalShortcutActionDescriptions = {
                    PLAY: 'Запускает воспроизведение.',
                    PAUSE: 'Ставит воспроизведение на паузу.',
                    TOGGLE_PLAY: 'Переключает воспроизведение и паузу.',
                    MOVE_FORWARD: 'Переключает на следующий трек.',
                    MOVE_BACKWARD: 'Переключает на предыдущий трек.',
                    TOGGLE_LIKE: 'Переключает состояние лайка.',
                    LIKE: 'Ставит лайк текущему треку.',
                    LIKE_NONE: 'Снимает лайк с текущего трека.',
                    TOGGLE_DISLIKE: 'Переключает дизлайк.',
                    DISLIKE: 'Ставит дизлайк текущему треку.',
                    DISLIKE_NONE: 'Снимает дизлайк с текущего трека.',
                    TOGGLE_REPEAT: 'Переключает режим повтора.',
                    REPEAT_NONE: 'Выключает повтор.',
                    REPEAT_CONTEXT: 'Включает повтор текущего списка.',
                    REPEAT_ONE: 'Включает повтор текущего трека.',
                    TOGGLE_SHUFFLE: 'Переключает шафл.',
                    SHUFFLE: 'Включает шафл.',
                    SHUFFLE_NONE: 'Выключает шафл.',
                    SET_VOLUME: 'Устанавливает громкость. Ниже задаётся значение от 0 до 100.',
                    SET_PROGRESS: 'Перематывает трек. Ниже задаётся позиция в секундах.',
                },
                globalShortcutActionsWithValue = ['SET_VOLUME', 'SET_PROGRESS'],
                globalShortcutActionDefaultValues = { SET_VOLUME: '50', SET_PROGRESS: '0' },
                globalShortcutActionValueMeta = {
                    SET_VOLUME: {
                        description: 'Процент громкости от 0 до 100.',
                        placeholder: '50',
                        min: 0,
                        max: 100,
                        step: 1,
                        inputMode: 'numeric',
                    },
                    SET_PROGRESS: {
                        description: 'Позиция трека в секундах.',
                        placeholder: '0',
                        min: 0,
                        step: 1,
                        inputMode: 'numeric',
                    },
                },
                globalShortcutActionNeedsValue = (e) => globalShortcutActionsWithValue.includes(e),
                normalizeGlobalShortcutValue = (e, t) => {
                    if (!globalShortcutActionNeedsValue(e)) return ''.concat(null == t ? '' : t);
                    let o = ''
                            .concat(null == t ? '' : t)
                            .replace(',', '.')
                            .replace(/[^0-9.]/g, ''),
                        i = o.split('.'),
                        l = i.shift() ?? '',
                        r = i.length ? ''.concat(l, '.', i.join('')) : l;
                    if (!r) return '';
                    let s = Number(r);
                    return Number.isFinite(s) ? ('SET_VOLUME' === e ? ''.concat(Math.min(Math.max(s, 0), 100)) : ''.concat(Math.max(s, 0))) : r;
                },
                getAvailableGlobalShortcutActions = () => {
                    let e = window.PLAYER_ACTIONS ? Object.values(window.PLAYER_ACTIONS) : globalShortcutFallbackActions;
                    return Array.from(new Set(e.filter((e) => 'string' == typeof e && e)));
                },
                buildGlobalShortcutActionOptions = (e = []) => {
                    let t = Array.from(new Set(getAvailableGlobalShortcutActions().concat(e.filter((e) => 'string' == typeof e && e))));
                    return [{ value: '', label: 'Выберите действие', description: 'Хоткей не сохранится, пока действие не выбрано.' }].concat(
                        t.map((e) => ({
                            value: e,
                            label: globalShortcutActionLabels[e] ?? e,
                            description: globalShortcutActionDescriptions[e],
                        })),
                    );
                },
                createGlobalShortcutCommandDraft = (e = '', t) => ({
                    id: createGlobalShortcutDraftId('action'),
                    action: e,
                    value: void 0 !== t ? t : globalShortcutActionNeedsValue(e) ? (globalShortcutActionDefaultValues[e] ?? '') : '',
                }),
                createEmptyGlobalShortcutDraft = () => ({
                    id: createGlobalShortcutDraftId('shortcut'),
                    accelerator: '',
                    commands: [createGlobalShortcutCommandDraft()],
                }),
                parseGlobalShortcutCommandToken = (e) => {
                    if ('string' != typeof e || !e.trim()) return null;
                    let t = e.indexOf('|'),
                        o = (-1 === t ? e : e.slice(0, t)).trim(),
                        i = (-1 === t ? '' : e.slice(t + 1)).trim();
                    return o ? { id: createGlobalShortcutDraftId('action'), action: o, value: i } : null;
                },
                parseGlobalShortcutsConfig = (e) => {
                    if (!e || 'object' != typeof e) return [];
                    return Object.entries(e).reduce((t, [o, i]) => {
                        if ('enable' === o) return t;
                        let l = 'string' == typeof o ? o.split(' ').map(parseGlobalShortcutCommandToken).filter(Boolean) : [],
                            r = l.length ? l : [createGlobalShortcutCommandDraft()];
                        return (
                            t.push({
                                id: createGlobalShortcutDraftId('shortcut'),
                                accelerator: 'string' == typeof i ? i : '',
                                commands: r,
                            }),
                            t
                        );
                    }, []);
                },
                serializeGlobalShortcutCommand = (e) => {
                    if (!e || 'string' != typeof e.action || !e.action.trim()) return null;
                    let t = e.action.trim();
                    if (!globalShortcutActionNeedsValue(t)) return t;
                    let o = normalizeGlobalShortcutValue(t, e.value);
                    return ''.concat(t, '|', o || globalShortcutActionDefaultValues[t] || '0');
                },
                serializeGlobalShortcutsConfig = (e, t) => {
                    let o = { enable: Boolean(t) };
                    return (
                        e.forEach((e) => {
                            let t = 'string' == typeof e.accelerator ? e.accelerator.trim() : '',
                                i = e.commands.map(serializeGlobalShortcutCommand).filter(Boolean);
                            t && i.length && (o[i.join(' ')] = t);
                        }),
                        o
                    );
                },
                getGlobalShortcutValueMeta = (e) => globalShortcutActionValueMeta[e] ?? { description: 'Дополнительное значение действия.', placeholder: '' },
                globalShortcutsSettings = (0, i.PA)(() => {
                    let { formatMessage: formatMessage } = (0, l.A)(),
                        {
                            modals: { globalShortcutsSettingsModal: modal },
                        } = (0, m.Pjs)(),
                        [isGlobalShortcutsEnabled, setIsGlobalShortcutsEnabled] = (0, g.useState)(
                            Boolean(window.nativeSettings.get('modSettings.globalShortcuts.enable')),
                        ),
                        [shortcutItems, setShortcutItems] = (0, g.useState)(() => parseGlobalShortcutsConfig(window.nativeSettings.get('modSettings.globalShortcuts'))),
                        isGlobalShortcutsEnabledRef = (0, g.useRef)(Boolean(window.nativeSettings.get('modSettings.globalShortcuts.enable'))),
                        recordingIdsRef = (0, g.useRef)(new Set()),
                        isRecordingRef = (0, g.useRef)(!1),
                        extraActions = (0, g.useMemo)(
                            () =>
                                shortcutItems.reduce((e, t) => {
                                    t.commands.forEach((t) => {
                                        t.action && !e.includes(t.action) && e.push(t.action);
                                    });
                                    return e;
                                }, []),
                            [shortcutItems],
                        ),
                        actionOptions = (0, g.useMemo)(() => buildGlobalShortcutActionOptions(extraActions), [extraActions]),
                        syncGlobalShortcutsFromStore = (0, g.useCallback)(() => {
                            let e = window.nativeSettings.get('modSettings.globalShortcuts') ?? {};
                            ((isGlobalShortcutsEnabledRef.current = Boolean(e.enable)),
                                setIsGlobalShortcutsEnabled(Boolean(e.enable)),
                                setShortcutItems(parseGlobalShortcutsConfig(e)));
                        }, []),
                        persistShortcutItems = (0, g.useCallback)((e, t) => {
                            window.nativeSettings.set(
                                'modSettings.globalShortcuts',
                                serializeGlobalShortcutsConfig(e, void 0 === t ? isGlobalShortcutsEnabledRef.current : t),
                            );
                        }, []),
                        updateShortcutItems = (0, g.useCallback)(
                            (e) => {
                                setShortcutItems((t) => {
                                    let o = 'function' == typeof e ? e(t) : e;
                                    return (persistShortcutItems(o), o);
                                });
                            },
                            [persistShortcutItems],
                        ),
                        onGlobalShortcutsEnabledChange = (0, g.useCallback)((e) => {
                            ((isGlobalShortcutsEnabledRef.current = e),
                                setIsGlobalShortcutsEnabled(e),
                                window.nativeSettings.set('modSettings.globalShortcuts.enable', e));
                        }, []),
                        onRecorderStateChange = (0, g.useCallback)((e, t) => {
                            let o = recordingIdsRef.current;
                            t ? o.add(e) : o.delete(e);
                            let i = o.size > 0;
                            i !== isRecordingRef.current && ((isRecordingRef.current = i), window.globalShortcutsControl?.setRecordingState?.(i));
                        }, []),
                        onAcceleratorChange = (0, g.useCallback)(
                            (e, t) => {
                                updateShortcutItems((o) =>
                                    o.map((o) =>
                                        o.id !== e
                                            ? o
                                            : {
                                                  ...o,
                                                  accelerator: t,
                                              },
                                    ),
                                );
                            },
                            [updateShortcutItems],
                        ),
                        onRemoveShortcut = (0, g.useCallback)(
                            (e) => {
                                updateShortcutItems((t) => t.filter((t) => t.id !== e));
                            },
                            [updateShortcutItems],
                        ),
                        onAddActionToShortcut = (0, g.useCallback)(
                            (e) => {
                                updateShortcutItems((t) =>
                                    t.map((t) =>
                                        t.id !== e
                                            ? t
                                            : {
                                                  ...t,
                                                  commands: t.commands.concat(createGlobalShortcutCommandDraft()),
                                              },
                                    ),
                                );
                            },
                            [updateShortcutItems],
                        ),
                        onRemoveActionFromShortcut = (0, g.useCallback)(
                            (e, t) => {
                                updateShortcutItems((o) =>
                                    o.map((o) => {
                                        if (o.id !== e) return o;
                                        let i = o.commands.filter((e) => e.id !== t);
                                        return {
                                            ...o,
                                            commands: i.length ? i : [createGlobalShortcutCommandDraft()],
                                        };
                                    }),
                                );
                            },
                            [updateShortcutItems],
                        ),
                        onActionChange = (0, g.useCallback)(
                            (e, t, o) => {
                                updateShortcutItems((i) =>
                                    i.map((i) => {
                                        if (i.id !== e) return i;
                                        return {
                                            ...i,
                                            commands: i.commands.map((e) => {
                                                if (e.id !== t) return e;
                                                let i = ''.concat(null == e.value ? '' : e.value).trim();
                                                return {
                                                    ...e,
                                                    action: o,
                                                    value: o ? (globalShortcutActionNeedsValue(o) ? i || globalShortcutActionDefaultValues[o] || '' : '') : '',
                                                };
                                            }),
                                        };
                                    }),
                                );
                            },
                            [updateShortcutItems],
                        ),
                        onActionValueChange = (0, g.useCallback)(
                            (e, t, o) => {
                                updateShortcutItems((i) =>
                                    i.map((i) => {
                                        if (i.id !== e) return i;
                                        return {
                                            ...i,
                                            commands: i.commands.map((e) =>
                                                e.id !== t
                                                    ? e
                                                    : {
                                                          ...e,
                                                          value: normalizeGlobalShortcutValue(e.action, o),
                                                      },
                                            ),
                                        };
                                    }),
                                );
                            },
                            [updateShortcutItems],
                        ),
                        onAddShortcut = (0, g.useCallback)(() => {
                            setShortcutItems((e) => e.concat(createEmptyGlobalShortcutDraft()));
                        }, []);
                    return (
                        (0, g.useEffect)(() => {
                            if (modal.isOpened) return void syncGlobalShortcutsFromStore();
                            isRecordingRef.current &&
                                (recordingIdsRef.current.clear(), (isRecordingRef.current = !1), window.globalShortcutsControl?.setRecordingState?.(!1));
                        }, [modal.isOpened, syncGlobalShortcutsFromStore]),
                        (0, g.useEffect)(() => {
                            return () => {
                                isRecordingRef.current &&
                                    (recordingIdsRef.current.clear(), (isRecordingRef.current = !1), window.globalShortcutsControl?.setRecordingState?.(!1));
                            };
                        }, []),
                        (0, n.jsx)(T.a, {
                            className: K().root,
                            headerClassName: K().modalHeader,
                            contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                            title: 'Глобальные горячие клавиши',
                            style: { maxWidth: '38.0rem', width: '38.0rem', height: 'auto' },
                            open: modal.isOpened,
                            onOpenChange: modal.onOpenChange,
                            onClose: modal.close,
                            size: 'fitContent',
                            placement: 'center',
                            overlayColor: 'full',
                            labelClose: formatMessage({ id: 'interface-actions.close' }),
                            children: (0, n.jsxs)('div', {
                                style: {
                                    width: '36.5rem',
                                    maxHeight: '28rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                },
                                children: [
                                    (0, n.jsx)('div', {
                                        style: { paddingRight: '0.75rem' },
                                        children: (0, n.jsx)(G, {
                                            title: 'Включить глобальные горячие клавиши',
                                            description: 'Во время записи регистрация временно отключается, чтобы не было конфликтов с уже назначенными сочетаниями.',
                                            onChange: onGlobalShortcutsEnabledChange,
                                            isChecked: isGlobalShortcutsEnabled,
                                        }),
                                    }),
                                    (0, n.jsx)(c.Caption, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'xs',
                                        weight: 'medium',
                                        className: K().text,
                                        style: { paddingRight: '0.75rem' },
                                        children: 'Один хоткей может запускать несколько действий подряд. Пустые записи не сохраняются в конфиг.',
                                    }),
                                    (0, n.jsxs)('ul', {
                                        className: ''.concat(K().list, ' PulseSync_experimentsListScroll'),
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.75rem',
                                            paddingRight: '0.75rem',
                                        },
                                        children: [
                                            !shortcutItems.length &&
                                                (0, n.jsx)('li', {
                                                    style: {
                                                        listStyle: 'none',
                                                        padding: '0.875rem 1rem',
                                                        borderRadius: '1rem',
                                                        background: 'var(--ym-surface-color-primary-enabled-list)',
                                                    },
                                                    children: (0, n.jsx)(c.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        children: 'Пока нет настроенных хоткеев.',
                                                    }),
                                                }),
                                            ...shortcutItems.map((shortcutItem, shortcutIndex) =>
                                                (0, n.jsx)(
                                                    'li',
                                                    {
                                                        style: {
                                                            listStyle: 'none',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '0.75rem',
                                                            padding: '0.875rem',
                                                            borderRadius: '1rem',
                                                            background: 'var(--ym-surface-color-primary-enabled-list)',
                                                            border: '1px solid var(--ym-controls-color-secondary-outline-default-stroke)',
                                                        },
                                                        children: (0, n.jsxs)('div', {
                                                            style: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
                                                            children: [
                                                                (0, n.jsx)(c.Caption, {
                                                                    variant: 'div',
                                                                    size: 'm',
                                                                    weight: 'bold',
                                                                    children: 'Хоткей '.concat(shortcutIndex + 1),
                                                                }),
                                                                (0, n.jsx)(settingBarWithKeybindRecorder, {
                                                                    title: 'Сочетание',
                                                                    description:
                                                                        'Нажмите справа и введите комбинацию. Esc отменяет запись, Backspace/Delete очищает поле.',
                                                                    value: shortcutItem.accelerator,
                                                                    onChange: (e) => {
                                                                        onAcceleratorChange(shortcutItem.id, e);
                                                                    },
                                                                    onRecordingChange: (e) => {
                                                                        onRecorderStateChange(shortcutItem.id, e);
                                                                    },
                                                                }),
                                                                ...shortcutItem.commands.map((commandItem, commandIndex) => {
                                                                    let valueMeta = getGlobalShortcutValueMeta(commandItem.action);
                                                                    return (0, n.jsxs)(
                                                                        'div',
                                                                        {
                                                                            style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
                                                                            children: [
                                                                                (0, n.jsxs)('div', {
                                                                                    style: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
                                                                                    children: [
                                                                                        (0, n.jsx)('div', {
                                                                                            style: { flex: 1 },
                                                                                            children: (0, n.jsx)(settingBarWithDropdown, {
                                                                                                title: 'Действие '.concat(commandIndex + 1),
                                                                                                description: 'Что должно произойти после нажатия.',
                                                                                                value: commandItem.action,
                                                                                                onChange: (e) => {
                                                                                                    onActionChange(shortcutItem.id, commandItem.id, e);
                                                                                                },
                                                                                                options: actionOptions,
                                                                                                direction: shortcutIndex === shortcutItems.length - 1 ? 'top' : 'bottom',
                                                                                            }),
                                                                                        }),
                                                                                        shortcutItem.commands.length > 1 &&
                                                                                            (0, n.jsx)(j.$, {
                                                                                                radius: 'xxxl',
                                                                                                color: 'secondary',
                                                                                                size: 'm',
                                                                                                icon: (0, n.jsx)('svg', {
                                                                                                    width: '14',
                                                                                                    height: '14',
                                                                                                    viewBox: '0 0 14 14',
                                                                                                    fill: 'none',
                                                                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                                                                    'aria-hidden': 'true',
                                                                                                    children: (0, n.jsx)('path', {
                                                                                                        d: 'M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5',
                                                                                                        stroke: 'currentColor',
                                                                                                        strokeWidth: '1.8',
                                                                                                        strokeLinecap: 'round',
                                                                                                    }),
                                                                                                }),
                                                                                                'aria-label': 'Удалить действие',
                                                                                                title: 'Удалить действие',
                                                                                                onClick: () => {
                                                                                                    onRemoveActionFromShortcut(shortcutItem.id, commandItem.id);
                                                                                                },
                                                                                            }),
                                                                                    ],
                                                                                }),
                                                                                globalShortcutActionNeedsValue(commandItem.action) &&
                                                                                    (0, n.jsx)(settingBarWithInput, {
                                                                                        title: 'Значение',
                                                                                        description: valueMeta.description,
                                                                                        value: commandItem.value,
                                                                                        onChange: (e) => {
                                                                                            onActionValueChange(shortcutItem.id, commandItem.id, e);
                                                                                        },
                                                                                        placeholder: valueMeta.placeholder,
                                                                                        type: 'number',
                                                                                        min: valueMeta.min,
                                                                                        max: valueMeta.max,
                                                                                        step: valueMeta.step,
                                                                                        inputMode: valueMeta.inputMode,
                                                                                    }),
                                                                            ],
                                                                        },
                                                                        commandItem.id,
                                                                    );
                                                                }),
                                                                (0, n.jsxs)('div', {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexWrap: 'wrap',
                                                                        justifyContent: 'flex-end',
                                                                        gap: '0.5rem',
                                                                    },
                                                                    children: [
                                                                        (0, n.jsx)(j.$, {
                                                                            radius: 'xxxl',
                                                                            color: 'secondary',
                                                                            size: 'm',
                                                                            onClick: () => {
                                                                                onAddActionToShortcut(shortcutItem.id);
                                                                            },
                                                                            children: 'Добавить действие',
                                                                        }),
                                                                        (0, n.jsx)(j.$, {
                                                                            radius: 'xxxl',
                                                                            color: 'secondary',
                                                                            size: 'm',
                                                                            onClick: () => {
                                                                                onRemoveShortcut(shortcutItem.id);
                                                                            },
                                                                            children: 'Удалить хоткей',
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    shortcutItem.id,
                                                ),
                                            ),
                                            (0, n.jsx)('li', {
                                                style: { listStyle: 'none', display: 'flex', justifyContent: 'flex-end' },
                                                children: (0, n.jsx)(j.$, {
                                                    radius: 'xxxl',
                                                    color: 'secondary',
                                                    size: 'm',
                                                    onClick: onAddShortcut,
                                                    children: 'Добавить хоткей',
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                }),
                systemSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { systemSettingsModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        [isHardwareAccelerationEnabled, setIsHardwareAccelerationEnabled] = (0, g.useState)(
                            window.nativeSettings.get('modSettings.enableHardwareAcceleration'),
                        ),
                        [angleEngine, setAngleEngine] = (0, g.useState)(window.nativeSettings.get('modSettings.hardwareAcceleration.angleEngine')),
                        onPreventDisplaySleepToggle = (0, g.useCallback)((e) => {
                            console.log('preventDisplaySleep toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.preventDisplaySleep', e);
                        }, []),
                        onSendAnonymizedMetricsToggle = (0, g.useCallback)(
                            (e) => {
                                console.log('sendModAnonymizedMetrics toggled. Value: ', e);
                                window.nativeSettings.set('sendModAnonymizedMetrics', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onAutoStartupToggle = (0, g.useCallback)(async (e) => {
                            console.log('autoStartup toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.autoStartup', e);
                            window.autoStartupStatus?.(e);
                        }, []),
                        onMinimizedStartToggle = (0, g.useCallback)(async (e) => {
                            console.log('minimizedStart toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.minimizedStart', e);
                        }, []),
                        onEnableHardwareAccelerationToggle = (0, g.useCallback)(
                            (e) => {
                                console.log('enableHardwareAcceleration toggled. Value: ', e);
                                setIsHardwareAccelerationEnabled(e);
                                window.nativeSettings.set('modSettings.enableHardwareAcceleration', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onAngleEngineChange = (0, g.useCallback)(
                            (e) => {
                                console.log('angleEngine changed. Value: ', e);
                                setAngleEngine(e);
                                window.nativeSettings.set('modSettings.hardwareAcceleration.angleEngine', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        );
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        title: 'Системные настройки',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '34.125rem', maxHeight: '37.5rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Включить аппаратное ускорение',
                                        description: 'Настоятельно рекомендуется не выключать. Отключайте только если ни одни вариант настроек ниже не помог.',
                                        onChange: onEnableHardwareAccelerationToggle,
                                        isChecked: isHardwareAccelerationEnabled,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(settingBarWithDropdown, {
                                        title: 'API аппаратного ускорения',
                                        description: 'Изменение может помочь в некоторых случаях, пробуйте по убыванию в списке.',
                                        onChange: onAngleEngineChange,
                                        disabled: !isHardwareAccelerationEnabled,
                                        value: angleEngine,
                                        direction: 'bottom',
                                        options: [
                                            { value: 'default', label: 'Авто' },
                                            { value: 'd3d11', label: 'DirectX 11' },
                                            { value: 'd3d11on12', label: 'DirectX 11 on 12' },
                                            { value: 'gl', label: 'OpenGL' },
                                            { value: 'd3d9', label: 'DirectX 9' },
                                        ],
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Предотвращать отключение монитора',
                                        description: 'Если включено и окно ЯМ видно на экране, он не уйдёт в сон от бездействия',
                                        onChange: onPreventDisplaySleepToggle,
                                        isChecked: window.nativeSettings.get('modSettings.window.preventDisplaySleep'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Автозапуск при старте системы',
                                        description: 'Приложение будет запускаться автоматически при включении системы.',
                                        onChange: onAutoStartupToggle,
                                        isChecked: window.nativeSettings.get('modSettings.window.autoStartup'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Автоматический запуск свернутым',
                                        description: 'Если включено, приложение будет запускаться свернутым в трей.',
                                        onChange: onMinimizedStartToggle,
                                        isChecked: window.nativeSettings.get('modSettings.window.minimizedStart'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Отправлять анонимную статистику',
                                        description: 'Отключит отправку стаитстики Мода его разработчику. Не влияет на метрику Яндекса',
                                        onChange: onSendAnonymizedMetricsToggle,
                                        isChecked: window.nativeSettings.get('sendModAnonymizedMetrics'),
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                playerSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { playerSettingsModal: t },
                            sonataState: v,
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        onSwapDislikeToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.playerBarEnhancement.changeDislikeButtonPos toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.playerBarEnhancement.changeDislikeButtonPos', e);
                            setTimeout(() => {
                                window.forcePlayerBarRerender?.();
                            }, 100);
                        }, []),
                        onTimestampsToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('alwaysShowTimestamps toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.playerBarEnhancement.alwaysShowTimestamps', e);
                                setTimeout(() => {
                                    window.forcePlayerBarRerender?.();
                                }, 100);
                            },
                            [v],
                        ),
                        onShowCodecToggle = (0, g.useCallback)(async (e) => {
                            console.log('showCodecInsteadOfQualityMark toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.playerBarEnhancement.showCodecInsteadOfQualityMark', e);
                            setTimeout(() => {
                                window.forcePlayerBarRerender?.();
                            }, 100);
                        }, []),
                        onDisablePerTrackColorsToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.playerBarEnhancement.disablePerTrackColors toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.playerBarEnhancement.disablePerTrackColors', e);
                            setTimeout(() => {
                                window.forcePlayerBarRerender?.();
                            }, 100);
                        }, []),
                        onAlwaysWideBarToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('modSettings.playerBarEnhancement.alwaysWideBar toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.playerBarEnhancement.alwaysWideBar', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        );
                    let playButtonType = (0, g.useState)(window.nativeSettings.get('modSettings.playerBarEnhancement.playButtonType') ?? 'yellow'),
                        i = playButtonType[0],
                        s = playButtonType[1],
                        onPlayButtonTypeChange = (0, g.useCallback)(async (e) => {
                            console.log('playButtonType changed. Value: ', e);
                            window.nativeSettings.set('modSettings.playerBarEnhancement.playButtonType', e);
                            s(e);
                            o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                containerId: m.uQT.ERROR,
                            });
                        }, []);
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        title: 'Панель плеера',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '29.125rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(settingBarWithDropdown, {
                                        title: 'Цвет кнопки воспроизведения',
                                        description: 'Выберите цвет кнопки плеера',
                                        onChange: onPlayButtonTypeChange,
                                        value: i,
                                        direction: 'bottom',
                                        options: [
                                            { value: 'yellow', label: 'Желтая' },
                                            { value: 'white', label: 'Белая' },
                                        ],
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Поменять местами Дизлайк и Лайк',
                                        description: 'Чтобы их положение соответствовало остальным платформам',
                                        onChange: onSwapDislikeToggle,
                                        isChecked: window.nativeSettings.get('modSettings.playerBarEnhancement.changeDislikeButtonPos'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Отображать кодек',
                                        description: 'Отображает кодек вместо качества трека.',
                                        onChange: onShowCodecToggle,
                                        isChecked: window.nativeSettings.get('modSettings.playerBarEnhancement.showCodecInsteadOfQualityMark'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Отображать временные метки',
                                        description: 'Отображать метки независимо от положения курсора.',
                                        onChange: onTimestampsToggle,
                                        isChecked: window.nativeSettings.get('modSettings.playerBarEnhancement.alwaysShowTimestamps'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Отключить цвета треков',
                                        description: 'Панель перестанет перекрашиваться под каждый трек',
                                        onChange: onDisablePerTrackColorsToggle,
                                        isChecked: window.nativeSettings.get('modSettings.playerBarEnhancement.disablePerTrackColors'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Всегда расширенная',
                                        description: 'Панель будет всегда широкой, независимо от размера окна приложения',
                                        onChange: onAlwaysWideBarToggle,
                                        isChecked: window.nativeSettings.get('modSettings.playerBarEnhancement.alwaysWideBar'),
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                audioSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { audioSettingsModal: t },
                            sonataState: v,
                        } = (0, m.Pjs)(),
                        a = (0, m.iIU)(),
                        { notify: o } = (0, m.lkh)(),
                        onSurroundAudioCompatibilityToggle = (0, g.useCallback)(
                            (e) => {
                                console.log('enableSurroundAudioCompatibility toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.enableSurroundAudioCompatibility', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onR128NormalizationToggle = (0, g.useCallback)(
                            async (e) => {
                                var t;
                                console.log('modSettings.r128Normalization toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.r128Normalization', e);
                                let o = null == (t = null == v ? void 0 : v.state) || null == t.queueState ? void 0 : t.queueState.currentEntity.value,
                                    i = null == o ? void 0 : o.entity.data.meta.r128,
                                    r = null == o ? void 0 : o.entity.data.meta,
                                    s =
                                        !i &&
                                        ('UGC' === (null == r ? void 0 : r.trackSource) ||
                                            'OWN_REPLACED_TO_UGC' === (null == r ? void 0 : r.trackSource) ||
                                            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(null == r ? void 0 : r.id)))
                                            ? { i: 0, tp: 0 }
                                            : i;
                                null == a ||
                                    null == a.graphs ||
                                    a.graphs.forEach((t) => {
                                        t.setR128Gain(s, e);
                                    });
                            },
                            [a, v],
                        );
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        style: { maxWidth: '34.375rem', height: 'auto' },
                        title: 'Настройки аудио',
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', maxHeight: '37.5rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: ['Нормализация громкости', (0, n.jsx)(labeledBubble, { label: 'r128', tooltip: null })],
                                        description: 'Приводит громкость треков к единому уровню.',
                                        onChange: onR128NormalizationToggle,
                                        isChecked: window.nativeSettings.get('modSettings.r128Normalization') ?? !0,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: ['Попробовать включить пространственный звук', (0, n.jsx)(labeledBubble, { label: 'ALPHA' })],
                                        description: 'Включает поддержку систем 5.1 / 7.1 (Учтите что звук останется в стерео)',
                                        onChange: onSurroundAudioCompatibilityToggle,
                                        isChecked: window.nativeSettings.get('modSettings.enableSurroundAudioCompatibility') ?? !1,
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                windowSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { windowSettingsModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        onSaveWindowDimensionsToggle = (0, g.useCallback)(async (e) => {
                            console.log('saveWindowDimensionsOnRestart toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.saveWindowDimensionsOnRestart', e);
                        }, []),
                        onSaveWindowPositionToggle = (0, g.useCallback)(async (e) => {
                            console.log('saveWindowPositionOnRestart toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.saveWindowPositionOnRestart', e);
                        }, []),
                        onToTrayToggle = (0, g.useCallback)(async (e) => {
                            console.log('toTray toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.toTray', e);
                        }, []),
                        onTaskBarToggle = (0, g.useCallback)(
                            async (e) => {
                                window.nativeSettings.set('modSettings.taskBarExtensions.enable', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onTaskbarExtensionsCoverAsThumbnailToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('taskBarExtensions.coverAsThumbnail toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.taskBarExtensions.coverAsThumbnail', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onHidePulseSyncVersionInTitleBarToggle = (0, g.useCallback)(async (e) => {
                            console.log('hidePulseSyncVersionInTitleBar toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.window.hidePulseSyncVersionInTitleBar', e);
                            setHidePulseSyncVersionInTitleBar(e);
                        }, []);
                    let hidePulseSyncVersionInTitleBarState = (0, g.useState)(window.nativeSettings.get('modSettings.window.hidePulseSyncVersionInTitleBar') ?? !1),
                        i = hidePulseSyncVersionInTitleBarState[0],
                        setHidePulseSyncVersionInTitleBar = hidePulseSyncVersionInTitleBarState[1],
                        isPremiumState = (0, g.useState)(!1),
                        a = isPremiumState[0],
                        d = isPremiumState[1];
                    (0, g.useEffect)(() => {
                        window.IS_PREMIUM_USER?.().then((e) => d(e));
                    }, []);
                    let startupPageState = (0, g.useState)(window.nativeSettings.get('modSettings.window.startupPage') ?? '/'),
                        u = startupPageState[0],
                        _ = startupPageState[1],
                        onStartupPageChange = (0, g.useCallback)(async (e) => {
                            console.log('startupPage changed. Value: ', e);
                            window.nativeSettings.set('modSettings.window.startupPage', e);
                            _(e);
                        }, []);
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        title: 'Поведение окна',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', maxHeight: '37.5rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(settingBarWithDropdown, {
                                        title: 'Стартовая страница',
                                        description: 'Страница по умолчанию при запуске',
                                        onChange: onStartupPageChange,
                                        value: u,
                                        direction: 'bottom',
                                        options: [
                                            { value: '/', label: 'Главная' },
                                            { value: '/search', label: 'Поиск' },
                                            { value: '/non-music', label: 'Подкасты и книги' },
                                            { value: '/collection', label: 'Коллекция' },
                                        ],
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: [
                                            'Скрывать версию PulseSync в TitleBar',
                                            (0, n.jsx)(labeledBubble, {
                                                label: 'Boosty',
                                                tooltip: {
                                                    title: 'Премиум функция',
                                                    description: a ? 'У вас есть подписка на Boosty' : 'Подпишитесь на Boosty, чтобы разблокировать',
                                                },
                                            }),
                                        ],
                                        description: 'Скрывает подпись PulseSync в верхней панели окна.',
                                        onChange: onHidePulseSyncVersionInTitleBarToggle,
                                        isChecked: i && a,
                                        disabled: !a,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Сохранять размер окна',
                                        description: 'Сохраняет размер окна при перезапуске',
                                        onChange: onSaveWindowDimensionsToggle,
                                        isChecked: window.nativeSettings.get('modSettings.window.saveWindowDimensionsOnRestart'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Сохранять положение окна',
                                        description: 'Сохраняет положение окна при перезапуске',
                                        onChange: onSaveWindowPositionToggle,
                                        isChecked: window.nativeSettings.get('modSettings.window.saveWindowPositionOnRestart'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Минимизировать в трей при закрытии',
                                        description: 'Если включено, приложение свернется в трей при закрытии.',
                                        onChange: onToTrayToggle,
                                        isChecked: window.nativeSettings.get('modSettings.window.toTray'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Кнопки в превью панели задач',
                                        description: 'Добавляет поддержку расширений панели задач.',
                                        onChange: onTaskBarToggle,
                                        isChecked: window.nativeSettings.get('modSettings.taskBarExtensions.enable'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Использовать обложку трека в превью окна',
                                        description: 'Если трек играет, заменяет динамичное превью на картинку обложки трека',
                                        onChange: onTaskbarExtensionsCoverAsThumbnailToggle,
                                        isChecked: window.nativeSettings.get('modSettings.taskBarExtensions.coverAsThumbnail'),
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                miniPlayerSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { miniPlayerSettingsModal: t },
                        } = (0, m.Pjs)(),
                        onSkipTaskbarToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.miniplayer.skipTaskbar toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.miniplayer.skipTaskbar', e);
                        }, []),
                        onSaveDimensionsToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.miniplayer.saveDimensions toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.miniplayer.saveDimensions', e);
                        }, []),
                        onSavePositionToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.miniplayer.savePosition toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.miniplayer.savePosition', e);
                        }, []),
                        onAlwaysShowPlayerTimestampsToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.miniplayer.alwaysShowPlayerTimestamps toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.miniplayer.alwaysShowPlayerTimestamps', e);
                        }, []);
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        title: 'Миниплеер',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', maxHeight: '37.5rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Сохранять размер окна',
                                        description: 'Сохраняет размер окна миниплеера при перезапуске',
                                        onChange: onSaveDimensionsToggle,
                                        isChecked: window.nativeSettings.get('modSettings.miniplayer.saveDimensions'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Сохранять положение окна',
                                        description: 'Сохраняет положение окна миниплеера при перезапуске',
                                        onChange: onSavePositionToggle,
                                        isChecked: window.nativeSettings.get('modSettings.miniplayer.savePosition'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Не отображать окно в таскбаре',
                                        description: 'Работает только если миниплеер закреплён поверх других окон',
                                        onChange: onSkipTaskbarToggle,
                                        isChecked: window.nativeSettings.get('modSettings.miniplayer.skipTaskbar'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Всегда отображать временные метки',
                                        description: 'Отображает временные метки независимо от положения курсора',
                                        onChange: onAlwaysShowPlayerTimestampsToggle,
                                        isChecked: window.nativeSettings.get('modSettings.miniplayer.alwaysShowPlayerTimestamps'),
                                    }),
                                }),
                            ],
                        }),
                    });
                });
            let myVibeSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { myVibeSettingsModal: t },
                        } = (0, m.Pjs)(),
                        [o, i] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.maxFPS')),
                        [r, s] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.disableRendering')),
                        [a, d] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.useDynamicEnergy')),
                        [u, p] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.smoothDynamicEnergy')),
                        [h, f] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.vibeIntensityCoefficient')),
                        [x, v] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient')),
                        [j, C] = (0, g.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.useCustomColors') ?? !0),
                        onDisableVibeRenderingToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.disableRendering toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.disableRendering', e);
                            s(e);
                        }, []),
                        onMaxFPSchange = (0, g.useCallback)(async (e) => {
                            let t = Math.min(Math.max(e, 1), window?.DISPLAY_MAX_FPS);
                            i(t);
                            console.log('modSettings.vibeAnimationEnhancement.maxFPS changed. Value: ', t);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.maxFPS', t);
                        }, []),
                        onIntensityCoefficientChange = (0, g.useCallback)(async (e) => {
                            let t = Math.min(Math.max(e, 0), 2.5);
                            f(t);
                            console.log('modSettings.vibeAnimationEnhancement.vibeIntensityCoefficient changed. Value: ', t);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.vibeIntensityCoefficient', t);
                        }, []),
                        onSmoothDynamicEnergyCoefficientChange = (0, g.useCallback)(async (e) => {
                            let t = Math.min(Math.max(e, 0.01), 1);
                            v(t);
                            console.log('modSettings.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient changed. Value: ', t);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient', t);
                        }, []),
                        onPlayOnAnyEntityToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.playVibeOnAnyEntity. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.playVibeOnAnyEntity', e);
                        }, []),
                        onEnableUseDynamicEnergy = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.useDynamicEnergy toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.useDynamicEnergy', e);
                            d(e);
                        }, []),
                        onEnableSmoothDynamicEnergy = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.smoothDynamicEnergy toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.smoothDynamicEnergy', e);
                            p(e);
                        }, []),
                        onUseCustomColorsToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.useCustomColors toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.useCustomColors', e);
                            C(e);
                        }, []);
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        style: { maxWidth: '34.375rem' },
                        title: 'Анимация Моей Волны',
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', maxHeight: '37.5rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Отключить отрисовку анимации Волны',
                                        description: 'Значительно увеличивает производительность на слабом железе',
                                        onChange: onDisableVibeRenderingToggle,
                                        isChecked: r,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Реакция анимации Волны на любые треки',
                                        description: 'Анимация будет реагировать на треки запущенные не через Мою Волну',
                                        onChange: onPlayOnAnyEntityToggle,
                                        isChecked: window.nativeSettings.get('modSettings.vibeAnimationEnhancement.playVibeOnAnyEntity'),
                                        disabled: !!r,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Использовать новый способ передачи цветов',
                                        description: 'Переключает обычную анимацию между новым и старым способом передачи цветов.',
                                        onChange: onUseCustomColorsToggle,
                                        isChecked: j,
                                        disabled: !!r,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(settingBarWithSlider, {
                                        title: 'Ограничение FPS',
                                        description: 'Верхняя граница FPS. Чем больше, тем плавнее анимация',
                                        onChange: onMaxFPSchange,
                                        value: o,
                                        maxValue: Math.max(window?.DISPLAY_MAX_FPS ?? 60, o),
                                        minValue: 1,
                                        step: 1,
                                        disabled: !!r,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(settingBarWithSlider, {
                                        title: 'Интенсивность реакции на трек',
                                        description: 'Чем больше, тем сильнее анимация ускоряется под трек',
                                        onChange: onIntensityCoefficientChange,
                                        value: h,
                                        maxValue: 2.5,
                                        minValue: 0,
                                        step: 0.1,
                                        disabled: !!r,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Подстраивать скорость анимации под Энергию трека',
                                        description: 'Анимация будет подстраивать скорость под Энергию трека в реальном времени',
                                        onChange: onEnableUseDynamicEnergy,
                                        isChecked: a,
                                        disabled: !!r,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Смягчать динамическую энергию',
                                        description: 'Изменения скорости трека будут более плавными',
                                        onChange: onEnableSmoothDynamicEnergy,
                                        isChecked: u,
                                        disabled: !(!r && a),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(settingBarWithSlider, {
                                        title: 'Коэффициент смягчения энергии',
                                        description: 'Чем меньше, тем сильнее сглаживаются изменения скорости анимации',
                                        onChange: onSmoothDynamicEnergyCoefficientChange,
                                        value: x,
                                        maxValue: 1,
                                        minValue: 0.01,
                                        step: 0.01,
                                        disabled: !(!r && a && u),
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                myVibeParamsSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { myVibeParamsSettingsModal: t },
                        } = (0, m.Pjs)(),
                        onAutoLaunchOnAppStartup = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.autoLaunchOnAppStartup toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.autoLaunchOnAppStartup', e);
                        }, []),
                        onEnableEndlessMusicToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.vibeAnimationEnhancement.enableEndlessMusic toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.vibeAnimationEnhancement.enableEndlessMusic', e);
                        }, []);
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        style: { maxWidth: '34.375rem', height: 'auto' },
                        title: 'Поведение Моей Волны',
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', maxHeight: '37.5rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Запускать воспроизведение трека при старте приложения',
                                        description: 'Запустит последний играющий трек сразу после старта приложения',
                                        onChange: onAutoLaunchOnAppStartup,
                                        isChecked: window.nativeSettings.get('modSettings.vibeAnimationEnhancement.autoLaunchOnAppStartup'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Музыка без остановки',
                                        description: 'После окончания воспроизведения очереди, запустится волна',
                                        onChange: onEnableEndlessMusicToggle,
                                        isChecked: window.nativeSettings.get('modSettings.vibeAnimationEnhancement.enableEndlessMusic'),
                                    }),
                                }),
                            ],
                        }),
                    });
                });
            let discordRpcSettings = (0, i.PA)(() => {
                let statusDisplayTypeState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.statusDisplayType') ?? 0),
                    statusDisplayType = statusDisplayTypeState[0],
                    setStatusDisplayType = statusDisplayTypeState[1],
                    applicationIDForRPCState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.applicationIDForRPC') ?? '1124055337234858005'),
                    applicationIDForRPC = applicationIDForRPCState[0],
                    setApplicationIDForRPC = applicationIDForRPCState[1],
                    hideBrandingState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.hideBranding') ?? !1),
                    hideBranding = hideBrandingState[0],
                    setHideBranding = hideBrandingState[1];
                let { formatMessage: e } = (0, l.A)(),
                    {
                        modals: { discordRpcSettingsModal: t },
                    } = (0, m.Pjs)(),
                    { notify: o } = (0, m.lkh)(),
                    afkTimeoutState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.afkTimeout')),
                    afkTimeout = afkTimeoutState[0],
                    setAfkTimeout = afkTimeoutState[1],
                    reconnectIntervalState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.reconnectInterval')),
                    reconnectInterval = reconnectIntervalState[0],
                    setReconnectInterval = reconnectIntervalState[1],
                    isExperimentOverridenState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.overrideDeepLinksExperiment')),
                    isExperimentOverriden = isExperimentOverridenState[0],
                    setIsExperimentOverriden = isExperimentOverridenState[1],
                    showButtonsState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.showButtons')),
                    showButtons = showButtonsState[0],
                    setShowButtons = showButtonsState[1],
                    isDiscordStatusEnabledState = (0, g.useState)(window.nativeSettings.get('modSettings.discordRPC.enable')),
                    isDiscordStatusEnabled = isDiscordStatusEnabledState[0],
                    setIsDiscordStatusEnabled = isDiscordStatusEnabledState[1],
                    isPremiumState = (0, g.useState)(!1),
                    isPremium = isPremiumState[0],
                    setIsPremium = isPremiumState[1];
                (0, g.useEffect)(() => {
                    window.IS_PREMIUM_USER().then((e) => setIsPremium(e));
                });
                let onAfkTimeoutChange = (0, g.useCallback)(async (e) => {
                        let t = Math.min(Math.max(e, 0), 30);
                        setAfkTimeout(t);
                        console.log('modSettings.discordRPC.afkTimeout changed. Value: ', t);
                        window.nativeSettings.set('modSettings.discordRPC.afkTimeout', t);
                    }, []),
                    onReconnectIntervalChange = (0, g.useCallback)(async (e) => {
                        let t = Math.min(Math.max(e, 0), 300);
                        setReconnectInterval(t);
                        console.log('modSettings.discordRPC.reconnectInterval changed. Value: ', t);
                        window.nativeSettings.set('modSettings.discordRPC.reconnectInterval', t);
                    }, []),
                    onDiscordStatusToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.enable toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.enable', e);
                        setIsDiscordStatusEnabled(e);
                    }, []),
                    onDiscordFromYnisonToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.fromYnison toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.fromYnison', e);
                    }, []),
                    onDiscordShowButtonsToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.showButtons toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.showButtons', e);
                        setShowButtons(e);
                    }, []),
                    onDiscordOverrideDeepLinksExperimentToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.overrideDeepLinksExperiment toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.overrideDeepLinksExperiment', e);
                        setIsExperimentOverriden(e);
                    }, []),
                    onDiscordShowGitHubButtonToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.showGitHubButton toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.showGitHubButton', e);
                    }, []),
                    onDiscordShowSmallIconToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.showSmallIcon toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.showSmallIcon', e);
                    }, []),
                    onDiscordShowAlbumToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.showAlbum toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.showAlbum', e);
                    }, []),
                    onDiscordShowVersionToggle = (0, g.useCallback)(async (e) => {
                        console.log('modSettings.discordRPC.showVersion toggled. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.showVersion', e);
                    }, []),
                    onStatusDisplayTypeChange = (0, g.useCallback)(async (e) => {
                        console.log('statusDisplayType changed. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.statusDisplayType', e);
                        setStatusDisplayType(e);
                    }, []),
                    onHideBrandingChange = (0, g.useCallback)(async (e) => {
                        console.log('hideBranding changed. Value: ', e);
                        window.nativeSettings.set('modSettings.discordRPC.hideBranding', e);
                        setHideBranding(e);
                    }, []),
                    onApplicationIDForRPCChange = (0, g.useCallback)(
                        async (e) => {
                            console.log('applicationIDForRPC changed. Value: ', e);
                            window.nativeSettings.set('modSettings.discordRPC.applicationIDForRPC', e);
                            setApplicationIDForRPC(e);
                            o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                containerId: m.uQT.ERROR,
                            });
                        },
                        [o],
                    );
                return (0, n.jsx)(T.a, {
                    className: K().list,
                    style: { 'max-width': '31.25rem' },
                    title: 'Discord RPC',
                    headerClassName: K().modalHeader,
                    contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, n.jsxs)('ul', {
                        className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                        style: { width: '29.125rem', maxHeight: '37.5rem', gap: 0 },
                        children: [
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, { title: 'Включить интеграцию с Discord', onChange: onDiscordStatusToggle, isChecked: isDiscordStatusEnabled }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: [
                                        'Скрыть брендинг PulseSync в статусе',
                                        (0, n.jsx)(labeledBubble, {
                                            label: 'Boosty',
                                            tooltip: {
                                                title: 'Премиум функция',
                                                description: isPremium ? 'У вас есть подписка на Boosty' : 'Подпишитесь на Boosty, чтобы разблокировать',
                                            },
                                        }),
                                    ],
                                    onChange: onHideBrandingChange,
                                    isChecked: hideBranding && isPremium,
                                    disabled: !isDiscordStatusEnabled || !isPremium,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: ['Использовать Ynison', (0, n.jsx)(labeledBubble, { label: 'BETA', disabled: !isDiscordStatusEnabled })],
                                    description: 'Использует данные о воспроизведении с других устройств',
                                    onChange: onDiscordFromYnisonToggle,
                                    isChecked: window.nativeSettings.get('modSettings.discordRPC.fromYnison'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(settingBarWithDropdown, {
                                    title: 'Тип отображения статуса',
                                    description: 'Что будет отображаться в коротком статусе',
                                    onChange: onStatusDisplayTypeChange,
                                    value: statusDisplayType,
                                    direction: 'bottom',
                                    options: [
                                        { value: 0, label: 'Платформа' },
                                        { value: 1, label: 'Артист' },
                                        { value: 2, label: 'Трек' },
                                    ],
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(settingBarWithDropdown, {
                                    title: 'Локализация платформы в статусе',
                                    description: '1290778445370097674' === applicationIDForRPC ? 'Слушает Яндекс Музыку' : 'Listening to Yandex Music',
                                    onChange: onApplicationIDForRPCChange,
                                    value: applicationIDForRPC,
                                    direction: 'bottom',
                                    options: [
                                        { value: '1124055337234858005', label: 'Английский' },
                                        { value: '1290778445370097674', label: 'Русский' },
                                    ],
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Отображать Альбом',
                                    description: 'Отображать ли название альбома в статусе',
                                    onChange: onDiscordShowAlbumToggle,
                                    isChecked: window.nativeSettings.get('modSettings.discordRPC.showAlbum'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Отображать Версию трека',
                                    description: 'Отображать ли версию трека в статусе',
                                    onChange: onDiscordShowVersionToggle,
                                    isChecked: window.nativeSettings.get('modSettings.discordRPC.showVersion'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Отображать маленькую иконку',
                                    description: 'Отображать ли иконку статуса воспроизведения (Playing, Paused)',
                                    onChange: onDiscordShowSmallIconToggle,
                                    isChecked: window.nativeSettings.get('modSettings.discordRPC.showSmallIcon'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Отображать кнопки',
                                    description: 'Отображает кнопки-ссылки в статусе',
                                    onChange: onDiscordShowButtonsToggle,
                                    isChecked: showButtons,
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Объединить веб и апп ссылки в одну',
                                    description: 'Уберёт ссылку открывающую приложение т.к. это сделает ссылка на сайт',
                                    onChange: onDiscordOverrideDeepLinksExperimentToggle,
                                    isChecked: isExperimentOverriden,
                                    disabled: !(isDiscordStatusEnabled && showButtons),
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Отображать кнопку на сайт PulseSync',
                                    description: 'Отображает кнопку установки мода',
                                    onChange: onDiscordShowGitHubButtonToggle,
                                    isChecked: window.nativeSettings.get('modSettings.discordRPC.showGitHubButton'),
                                    disabled: !(isDiscordStatusEnabled && showButtons && isExperimentOverriden),
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(settingBarWithSlider, {
                                    title: 'Таймер бездействия',
                                    description: 'Через сколько в минутах активность автоматически отчистится',
                                    onChange: onAfkTimeoutChange,
                                    value: afkTimeout,
                                    maxValue: 30,
                                    minValue: 0,
                                    step: 1,
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(settingBarWithSlider, {
                                    title: 'Повторное подключение к Discord',
                                    description: 'Интервал повторных попыток подключения к Discord при потере соединения (в секундах, 0 — отключает)',
                                    onChange: onReconnectIntervalChange,
                                    value: reconnectInterval,
                                    maxValue: 300,
                                    minValue: 0,
                                    step: 5,
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                        ],
                    }),
                });
            });
            let lrclibSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { lrclibSettingsModal: t },
                        } = (0, m.Pjs)(),
                        useLrclibTextState = (0, g.useState)(window.nativeSettings.get('modSettings.lrclib.useText') ?? !0),
                        useLrclibText = useLrclibTextState[0],
                        setUseLrclibText = useLrclibTextState[1],
                        syncLyricsTextFallbackState = (0, g.useState)(window.nativeSettings.get('modSettings.lrclib.syncLyricsTextFallback') ?? !1),
                        syncLyricsTextFallback = syncLyricsTextFallbackState[0],
                        setSyncLyricsTextFallback = syncLyricsTextFallbackState[1],
                        useTitleOnlyFallbackState = (0, g.useState)(window.nativeSettings.get('modSettings.lrclib.useTitleOnlyFallback') ?? !0),
                        useTitleOnlyFallback = useTitleOnlyFallbackState[0],
                        setUseTitleOnlyFallback = useTitleOnlyFallbackState[1],
                        onUseLrclibTextToggle = (0, g.useCallback)((e) => {
                            window.nativeSettings.set('modSettings.lrclib.useText', e);
                            setUseLrclibText(e);
                        }, []),
                        onSyncLyricsTextFallbackToggle = (0, g.useCallback)((e) => {
                            window.nativeSettings.set('modSettings.lrclib.syncLyricsTextFallback', e);
                            setSyncLyricsTextFallback(e);
                        }, []),
                        onUseTitleOnlyFallbackToggle = (0, g.useCallback)((e) => {
                            window.nativeSettings.set('modSettings.lrclib.useTitleOnlyFallback', e);
                            setUseTitleOnlyFallback(e);
                        }, []);
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        style: { 'max-width': '34.375rem', height: 'auto' },
                        title: 'Настройки LRCLib',
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: ['Использовать LRCLib для текста', (0, n.jsx)(labeledBubble, { label: 'ALPHA' })],
                                        description: useLrclibText ? 'Если в Яндекс Музыке текста нет, то ищем в LRCLib' : 'Берём текст только из Яндекс Музыки',
                                        onChange: onUseLrclibTextToggle,
                                        isChecked: useLrclibText,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Показывать текст вместо синхронизированной лирики',
                                        description: 'Эта опция временно недоступна',
                                        onChange: onSyncLyricsTextFallbackToggle,
                                        isChecked: syncLyricsTextFallback,
                                        disabled: !0,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Повторный поиск только по названию',
                                        description: useTitleOnlyFallback
                                            ? 'Если по названию и автору не нашли, то попробуем только по названию'
                                            : 'Ищем по названию и автору',
                                        onChange: onUseTitleOnlyFallbackToggle,
                                        isChecked: useTitleOnlyFallback,
                                        disabled: !useLrclibText,
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                downloaderSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { downloaderSettingsModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        useMP3State = (0, g.useState)(window.nativeSettings?.get('modSettings.downloader.useMP3') ?? !1),
                        useMP3 = useMP3State[0],
                        setUseMP3 = useMP3State[1],
                        useCustomPathForSessionStorageState = (0, g.useState)(window.nativeSettings?.get('modSettings.downloader.useCustomPathForSessionStorage') ?? !1),
                        useCustomPathForSessionStorage = useCustomPathForSessionStorageState[0],
                        setUseCustomPathForSessionStorage = useCustomPathForSessionStorageState[1],
                        useDefaultPathState = (0, g.useState)(window.nativeSettings?.get('modSettings.downloader.useDefaultPath') ?? !1),
                        useDefaultPath = useDefaultPathState[0],
                        setUseDefaultPath = useDefaultPathState[1],
                        customPathForSessionStorageState = (0, g.useState)(window.nativeSettings?.get('modSettings.downloader.customPathForSessionStorage') ?? ''),
                        customPathForSessionStorage = customPathForSessionStorageState[0],
                        setCustomPathForSessionStorage = customPathForSessionStorageState[1],
                        defaultPathState = (0, g.useState)(window.nativeSettings?.get('modSettings.downloader.defaultPath') ?? ''),
                        defaultPath = defaultPathState[0],
                        setDefaultPath = defaultPathState[1],
                        onUseDefaultPathToggle = (0, g.useCallback)(async (e) => {
                            console.log('useDefaultPath toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.downloader.useDefaultPath', e);
                            setUseDefaultPath(e);
                        }, []),
                        onDefaultPathExploreClick = (0, g.useCallback)(async () => {
                            window.nativeSettings?.setPathWithNativeDialog('modSettings.downloader.defaultPath', void 0, ['openDirectory', 'showHiddenFiles']);
                        }, []),
                        onUseMP3Toggle = (0, g.useCallback)(async (e) => {
                            console.log('useMP3 toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.downloader.useMP3', e);
                            setUseMP3(e);
                        }, []),
                        onUseSyncLyricsToggle = (0, g.useCallback)(async (e) => {
                            console.log('useSyncLyrics toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.downloader.useSyncLyrics', e);
                        }, []),
                        onUseCustomPathForSessionStorageToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('useCustomPathForSessionStorage toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.downloader.useCustomPathForSessionStorage', e);
                                setUseCustomPathForSessionStorage(e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onCustomPathForSessionStorageExploreClick = (0, g.useCallback)(async () => {
                            window.nativeSettings?.setPathWithNativeDialog('modSettings.downloader.customPathForSessionStorage', void 0, [
                                'openDirectory',
                                'showHiddenFiles',
                            ]);
                        }, []);
                    return (
                        (0, g.useEffect)(() => {
                            window.desktopEvents?.on('NATIVE_STORE_UPDATE', (event, e, t) => {
                                'modSettings.downloader.defaultPath' === e
                                    ? setDefaultPath(t)
                                    : 'modSettings.downloader.customPathForSessionStorage' === e &&
                                      (setCustomPathForSessionStorage(t),
                                      o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                          containerId: m.uQT.ERROR,
                                      }));
                            });
                        }, [o]),
                        (0, n.jsx)(T.a, {
                            className: K().root,
                            style: { 'max-width': '34.375rem', height: 'auto' },
                            title: 'Скачивание треков',
                            headerClassName: K().modalHeader,
                            contentClassName: K().modalContent,
                            open: t.isOpened,
                            onOpenChange: t.onOpenChange,
                            onClose: t.close,
                            size: 'fitContent',
                            placement: 'center',
                            overlayColor: 'full',
                            labelClose: e({ id: 'interface-actions.close' }),
                            children: (0, n.jsxs)('ul', {
                                className: $().root,
                                style: { width: '32.125rem', 'max-height': '37.5rem', gap: 0 },
                                children: [
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(toggleBarWithPathChooser, {
                                            title: 'Путь для кеша',
                                            description: useCustomPathForSessionStorage
                                                ? 'Использовать путь ниже для кеша (в т.ч. ванильного скачивания треков)'
                                                : 'Использовать путь по умолчанию для кеша (в т.ч. ванильного скачивания треков)',
                                            onChange: onUseCustomPathForSessionStorageToggle,
                                            isChecked: useCustomPathForSessionStorage,
                                            placeholder: 'Укажите путь кнопкой справа',
                                            inputValue: customPathForSessionStorage,
                                            onClick: onCustomPathForSessionStorageExploreClick,
                                        }),
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(G, {
                                            title: 'Скачивать в MP3',
                                            description: useMP3 ? 'Треки скачиваются в MP3' : 'Треки скачиваются в оригинальном формате',
                                            onChange: onUseMP3Toggle,
                                            isChecked: useMP3,
                                        }),
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(G, {
                                            title: 'Скачивать текстомузыку',
                                            description: 'Если возможно, записывать синхронный текст трека в метаданные файла',
                                            onChange: onUseSyncLyricsToggle,
                                            isChecked: window.nativeSettings.get('modSettings.downloader.useSyncLyrics'),
                                        }),
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(toggleBarWithPathChooser, {
                                            title: 'Путь для файлов по умолчанию',
                                            description: useDefaultPath
                                                ? 'Использовать путь по умолчанию для скачивания треков в файл'
                                                : 'Спрашивать путь при каждом скачивании трека',
                                            onChange: onUseDefaultPathToggle,
                                            isChecked: useDefaultPath,
                                            placeholder: 'Укажите путь кнопкой справа',
                                            inputValue: defaultPath,
                                            onClick: onDefaultPathExploreClick,
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                }),
                appUpdatesSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { appUpdatesSettingsModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        onAppAutoUpdateByProbabilityToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('enableAppAutoUpdateByProbability toggled. Value: ', !e);
                                window.nativeSettings.set('modSettings.appAutoUpdates.enableAppAutoUpdateByProbability', !e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onAppAutoUpdateToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('enableAppAutoUpdate toggled. Value: ', e);
                                window.nativeSettings.set('modSettings.appAutoUpdates.enableAppAutoUpdate', e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        );
                    return (0, n.jsx)(T.a, {
                        className: K().root,
                        style: { maxWidth: '34.375rem', height: 'auto' },
                        title: 'Настройки обновлений',
                        headerClassName: K().modalHeader,
                        contentClassName: K().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: $().root,
                            style: { width: '32.125rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Автообновлять приложение',
                                        description: 'Обновлять ли приложение автоматически',
                                        onChange: onAppAutoUpdateToggle,
                                        isChecked: window.nativeSettings.get('modSettings.appAutoUpdates.enableAppAutoUpdate'),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: 'Получать обновления приложения сразу же',
                                        description: 'Выключает участие в получении обновлений волнами',
                                        onChange: onAppAutoUpdateByProbabilityToggle,
                                        isChecked: !window.nativeSettings.get('modSettings.appAutoUpdates.enableAppAutoUpdateByProbability'),
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                ynisonSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { ynisonSettingsModal: t },
                        } = (0, m.Pjs)(),
                        { notify: o } = (0, m.lkh)(),
                        [i, r] = (0, g.useState)(window.ENABLE_YNISON_REMOTE_CONTROL ?? !0),
                        [s, a] = (0, g.useState)(window.YNISON_INTERCEPT_PLAYBACK ?? !0),
                        onEnableYnisonRemoteControlToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('Ynison Remote Control toggled. Value: ', e);
                                window.nativeSettings.set('enableYnisonPlayerRemoteControl', e);
                                r(e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        ),
                        onYnisonInterceptPlaybackToggle = (0, g.useCallback)(
                            async (e) => {
                                console.log('Ynison intercept toggled. Value: ', e);
                                window.nativeSettings.set('ynisonInterceptPlayback', e);
                                a(e);
                                o((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), {
                                    containerId: m.uQT.ERROR,
                                });
                            },
                            [o],
                        );
                    return (0, n.jsx)(T.a, {
                        className: K().list,
                        title: 'Ynison Remote',
                        headerClassName: K().modalHeader,
                        contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        style: { maxWidth: '34.375rem', height: 'auto' },
                        overlayColor: 'full',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, n.jsxs)('ul', {
                            className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                            style: { width: '32.125rem', gap: 0 },
                            children: [
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: ['Удалённое управление', (0, n.jsx)(labeledBubble, { label: 'BETA' })],
                                        description: 'Даст возможность управлять этим плеером с других устройств',
                                        onChange: onEnableYnisonRemoteControlToggle,
                                        isChecked: i,
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: ['Перехват Ynison', (0, n.jsx)(labeledBubble, { label: 'BETA', disabled: !i })],
                                        description: 'Воспроизведение с других плееров будет автоматически переходить на этот плеер',
                                        onChange: onYnisonInterceptPlaybackToggle,
                                        isChecked: s,
                                        disabled: !i,
                                    }),
                                }),
                            ],
                        }),
                    });
                }),
                scrobblersSettings = (0, i.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        {
                            modals: { scrobblersSettingsModal: t },
                        } = (0, m.Pjs)(),
                        userInfoState = (0, g.useState)(null),
                        userInfo = userInfoState[0],
                        setUserInfo = userInfoState[1],
                        unauthorizedProbeState = (0, g.useState)(!1),
                        unauthorizedProbe = unauthorizedProbeState[0],
                        setUnauthorizedProbe = unauthorizedProbeState[1],
                        isLastFmEnabledState = (0, g.useState)(window.nativeSettings.get('modSettings.scrobblers.lastfm.enable')),
                        isLastFmEnabled = isLastFmEnabledState[0],
                        separatorTypeState = (0, g.useState)(window.nativeSettings.get('modSettings.scrobblers.lastfm.separatorType')),
                        separatorType = separatorTypeState[0],
                        setSeparatorType = separatorTypeState[1],
                        onLastFMLoginClick = (0, g.useCallback)(async () => {
                            console.log('scrobble-lastfm-login triggered.');
                            await window.scrobble.lastfmLogin();
                        }, []),
                        onLastFMLogoutClick = (0, g.useCallback)(async () => {
                            console.log('scrobble-lastfm-logout triggered.');
                            await window.scrobble.lastfmLogout();
                        }, []),
                        onLastFmScrobblingToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.scrobblers.lastfm.enable toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.scrobblers.lastfm.enable', e);
                        }, []),
                        onSeparatorTypeChange = (0, g.useCallback)(async (e) => {
                            console.log('separatorType changed. Value: ', e);
                            window.nativeSettings.set('modSettings.scrobblers.lastfm.separatorType', e);
                            setSeparatorType(e);
                        }, []),
                        onLastFmAutoLikesToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.scrobblers.lastfm.autoLike toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.scrobblers.lastfm.autoLike', e);
                        }, []),
                        onLastFmFromYnisonToggle = (0, g.useCallback)(async (e) => {
                            console.log('modSettings.scrobblers.lastfm.fromYnison toggled. Value: ', e);
                            window.nativeSettings.set('modSettings.scrobblers.lastfm.fromYnison', e);
                        }, []);
                    return (
                        (0, g.useEffect)(() => {
                            window.scrobble?.lastfmGetUser().then((e) => {
                                setUserInfo(e);
                            });
                            fetch('https://api.music.yandex.net/tracks/138005337:36143630').then((e) => {
                                setUnauthorizedProbe(e.ok);
                            });
                        }, [t.isOpened]),
                        (0, g.useEffect)(() => {
                            window.desktopEvents?.on('LASTFM_USERINFO_UPDATE', (event, e) => {
                                setUserInfo(e);
                            });
                        }, []),
                        (0, n.jsx)(T.a, {
                            className: K().list,
                            title: 'Скробблинг',
                            headerClassName: K().modalHeader,
                            contentClassName: ''.concat(K().modalContent, ' Modal_content_no_right_padding'),
                            open: t.isOpened,
                            onOpenChange: t.onOpenChange,
                            onClose: t.close,
                            size: 'fitContent',
                            placement: 'center',
                            overlayColor: 'full',
                            style: { height: 'auto', minWidth: '430px' },
                            labelClose: e({ id: 'interface-actions.close' }),
                            children: (0, n.jsxs)('ul', {
                                className: ''.concat($().root, ' ').concat(K().list, ' PulseSync_experimentsListScroll'),
                                style: { width: '-webkit-fill-available', gap: 0 },
                                children: [
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        ...(userInfo?.user?.image ? { style: { display: 'flex', alignItems: 'center', gap: '16px' } } : {}),
                                        children: [
                                            (0, n.jsx)('div', {
                                                children: userInfo?.user?.image?.[0]?.['#text']
                                                    ? (0, n.jsx)('img', {
                                                          src: (
                                                              userInfo.user.image?.find((e) => 'medium' === e.size)?.['#text'] || userInfo.user.image?.[0]?.['#text']
                                                          ).replace('64s', 'avatar'),
                                                          alt: 'Аватар',
                                                          style: {
                                                              width: 46,
                                                              height: 46,
                                                              borderRadius: '50%',
                                                          },
                                                      })
                                                    : null,
                                            }),
                                            (0, n.jsx)(D, {
                                                title: userInfo
                                                    ? ''.concat(userInfo.user.name, ' (').concat(Number(userInfo.user.playcount).toLocaleString().replace(' ', ','), ')')
                                                    : 'LastFM',
                                                description: userInfo ? 'Выйти из LastFM' : 'Авторизоваться в LastFM',
                                                onClick: userInfo ? onLastFMLogoutClick : onLastFMLoginClick,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(G, {
                                            title: 'Скробблинг в LastFM',
                                            disabled: !userInfo,
                                            onChange: onLastFmScrobblingToggle,
                                            isChecked: isLastFmEnabled,
                                        }),
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(settingBarWithDropdown, {
                                            title: 'Разделитель',
                                            description: 'Разделитель между артистами при скробблинге треков с несколькими артистами',
                                            onChange: onSeparatorTypeChange,
                                            value: separatorType,
                                            direction: 'bottom',
                                            options: [
                                                { value: 0, label: 'Нет', description: 'Только первый артист' },
                                                { value: 1, label: '" & "', description: 'Артист & артист' },
                                                { value: 2, label: '" | "', description: 'Артист | артист' },
                                                { value: 3, label: '", "', description: 'Артист, артист' },
                                            ],
                                            disabled: !isLastFmEnabled,
                                        }),
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(G, {
                                            title: 'Синхронизировать лайки',
                                            description: 'Автоматически лайкает/анлайкает треки в LastFM',
                                            disabled: !(userInfo && isLastFmEnabled),
                                            onChange: onLastFmAutoLikesToggle,
                                            isChecked: window.nativeSettings.get('modSettings.scrobblers.lastfm.autoLike'),
                                        }),
                                    }),
                                    (0, n.jsx)('li', {
                                        className: $().item,
                                        children: (0, n.jsx)(G, {
                                            title: [
                                                'Использовать Ynison',
                                                (0, n.jsx)(labeledBubble, { label: 'BETA', disabled: !(userInfo && isLastFmEnabled && unauthorizedProbe) }),
                                            ],
                                            description: unauthorizedProbe
                                                ? 'Скробблить проигрывания даже с других устройств'
                                                : 'Недоступно в вашем регионе или включён VPN',
                                            disabled: !(userInfo && isLastFmEnabled && unauthorizedProbe),
                                            onChange: onLastFmFromYnisonToggle,
                                            isChecked: window.nativeSettings.get('modSettings.scrobblers.lastfm.fromYnison'),
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                });
            let ee = (0, i.PA)(() => {
                let e = (0, m.HFS)(),
                    t = (0, m.NFA)().get(m.ooW),
                    {
                        modals: {
                            shortcutsModal: o,
                            aboutAppModal: i,
                            clearMemoryModal: r,
                            windowSettingsModal: se,
                            playerSettingsModal: aeModal,
                            audioSettingsModal: audioSettingsModal,
                            myVibeSettingsModal: myVibeSettingsModal,
                            appUpdatesSettingsModal: appUpdatesSettingsModal,
                            systemSettingsModal: deModal,
                            globalShortcutsSettingsModal: globalShortcutsSettingsModal,
                            myVibeParamsSettingsModal: myVibeParamsSettingsModal,
                            miniPlayerSettingsModal: ueModal,
                            ynisonSettingsModal: ynisonSettingsModal,
                            scrobblersSettingsModal: scrobblersSettingsModal,
                            downloaderSettingsModal: downloaderSettingsModal,
                            lrclibSettingsModal: lrclibSettingsModal,
                            discordRpcSettingsModal: discordRpcSettingsModal,
                        },
                        experiments: a,
                        wizard: c,
                        user: d,
                        slam: u,
                        settings: _,
                        sonataState: p,
                    } = (0, m.Pjs)(),
                    h = (0, M.Sq)(),
                    { notify: f } = (0, m.lkh)(),
                    { formatMessage: x } = (0, l.A)(),
                    v = (() => {
                        let e = (0, m.NFA)().get(m.twC),
                            t = (0, m._lF)(e.oldWebHost),
                            { language: o } = (0, m.h6b)();
                        return 'https://'.concat(t, '/newimport?lang=').concat(o);
                    })(),
                    b = (0, m.gQL)(),
                    j = h.isAvailable && !_.isMobile,
                    C = a.checkExperiment(m.zal.WebNextCrossMediaPlayer, 'on'),
                    y = d.hasPlus,
                    N = a.checkExperiment(m.zal.WebNextLiteVersion, 'on') && _.isLiteVersionModeAvailableForToggle && !0,
                    S = a.checkExperiment(m.zal.WebNextCustomThumb, 'on') && !_.isMobile,
                    equalizerStatusLabel = h.isEnabled ? x({ id: 'equalizer.enabled' }) : x({ id: 'equalizer.disabled' }),
                    E = (0, g.useMemo)(
                        () =>
                            ''
                                .concat(x({ id: 'desktop.app-version-short' }, { version: e }), ' / Мод ')
                                .concat(window.PULSE_VERSION, ' / Хост ')
                                .concat(window.HOST_VERSION),
                        [!0, x, e],
                    ),
                    [ae, ce] = (0, g.useState)(window.nativeSettings?.get('modSettings.showNonMusicPage') ?? !0),
                    [de, ue] = (0, g.useState)(window.nativeSettings?.get('modSettings.showConcertsTab') ?? !0),
                    [appendPlaylistTracksToEnd, setAppendPlaylistTracksToEnd] = (0, g.useState)(
                        window.nativeSettings?.get('modSettings.playlist.addTracksToEndFromContextMenu') ?? !1,
                    ),
                    [me, pe] = (0, g.useState)(window.nativeSettings?.get('devMode') ?? !1),
                    [downloadedTracksInfo, setDownloadedTracksInfo] = (0, g.useState)({
                        tracksCount: void 0,
                        tracksSize: void 0,
                    }),
                    oe = (0, g.useCallback)(() => {
                        f((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), { containerId: m.uQT.ERROR });
                    }, [f]),
                    childModeToggle = (0, g.useCallback)(
                        async (e) => {
                            (await d.setSettings({ isChildModeEnabled: e })) === m.FlZ.ERROR &&
                                f((0, n.jsx)(w.hT, { error: x({ id: 'settings.failed-to-change-child-mode' }) }), { containerId: m.uQT.ERROR });
                        },
                        [d, x, f],
                    ),
                    O = (0, g.useCallback)(
                        (e) => {
                            u.setOfflineMode(e);
                        },
                        [u],
                    ),
                    Y = (0, g.useCallback)(() => {
                        r.open();
                    }, [r]),
                    V = (0, g.useCallback)(
                        (e) => {
                            if (e) return void _.setLiteVersionMode(m.wv5.ENABLED, !0);
                            _.setLiteVersionMode(m.wv5.DISABLED, !0);
                        },
                        [_],
                    ),
                    Gt = (0, g.useCallback)(
                        (e) => {
                            (window.nativeSettings?.set('modSettings.showNonMusicPage', e), ce(e), oe());
                        },
                        [oe],
                    ),
                    Qt = (0, g.useCallback)(
                        (e) => {
                            (window.nativeSettings?.set('modSettings.showConcertsTab', e), ue(e), oe());
                        },
                        [oe],
                    ),
                    togglePlaylistAddTrackToEnd = (0, g.useCallback)((e) => {
                        (window.nativeSettings?.set('modSettings.playlist.addTracksToEndFromContextMenu', e), setAppendPlaylistTracksToEnd(e));
                    }, []),
                    Xt = (0, g.useCallback)(
                        (e) => {
                            (window.nativeSettings?.set('devMode', e), pe(e), oe());
                        },
                        [oe],
                    ),
                    Zt = (0, g.useCallback)(() => {
                        window.openConfigFile?.();
                    }, []);
                (0, g.useEffect)(() => {
                    let e = async () => {
                        let o = async (e) => {
                                let t = 0;
                                for await (let n of e.values())
                                    if ('directory' === n.kind) t += await o(n);
                                    else if ('file' === n.kind)
                                        try {
                                            let e = await n.getFile();
                                            t += e.size;
                                        } catch (e) {
                                            console.warn('Track file is in use. Skipping...', e);
                                        }
                                return t;
                            },
                            t = async (e) => {
                                let o = 0;
                                for await (let n of e.values())
                                    'directory' === n.kind && 'tracks' === n.name ? (o = await t(n)) : 'file' === n.kind && !n.name.endsWith('.crswap') && (o += 1);
                                return o;
                            };
                        if (!window.navigator?.storage?.getDirectory) return;
                        let n = await window.navigator.storage.getDirectory();
                        setDownloadedTracksInfo({ tracksCount: await t(n), tracksSize: await o(n) });
                    };
                    return (
                        (window.onDownloadedTracksDeleted = () => {
                            setDownloadedTracksInfo({ tracksCount: 0, tracksSize: 0 });
                        }),
                        e(),
                        () => {
                            window.onDownloadedTracksDeleted = null;
                        }
                    );
                }, []);
                (0, g.useLayoutEffect)(() => {
                    let e = t.get(m.cYZ.CrossFadeMode);
                    'boolean' == typeof e && p.setCrossFadeMode(e);
                }, [p, t]);
                let te = (0, g.useCallback)(
                        (e) => {
                            p.setCrossFadeMode(e), b && (b.isCrossfadeEnabled.value = e);
                        },
                        [p, b],
                    ),
                    formatBytes = (e) => {
                        if ('number' != typeof e || e < 0) return '0 B';
                        let t = ['B', 'KB', 'MB', 'GB'],
                            o = 0;
                        for (; e >= 1024 && o < t.length - 1; ) (e /= 1024), o++;
                        return ''.concat(e.toFixed(2), ' ').concat(t[o]);
                    },
                    getTrackWordForm = (e) => {
                        if ('number' != typeof e || e < 0 || !Number.isInteger(e)) return 'треков';
                        let t = e % 10,
                            o = e % 100;
                        return o >= 11 && o <= 19 ? 'треков' : 1 === t ? 'трек' : t >= 2 && t <= 4 ? 'трека' : 'треков';
                    };
                return (0, n.jsxs)('ul', {
                    className: $().root,
                    ...(0, s.Am)(s.e8.settings.SETTINGS_LIST),
                    children: [
                        y &&
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: x({ id: 'offline.offline-mode' }),
                                    description: x({ id: 'offline.offline-mode-description' }),
                                    onChange: O,
                                    isChecked: u.isOfflineModeEnabled,
                                }),
                            }),
                        y &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: (() => {
                                    let e = downloadedTracksInfo.tracksCount ?? 0;
                                    return [
                                        (0, n.jsx)(D, {
                                            title: x({ id: 'offline.clear-memory' }),
                                            description: 'Скачан'
                                                .concat(e % 10 === 1 && e % 100 !== 11 ? '' : 'о', ' ')
                                                .concat(e, ' ')
                                                .concat(getTrackWordForm(e), ' (')
                                                .concat(formatBytes(downloadedTracksInfo.tracksSize), ')'),
                                            onClick: Y,
                                        }),
                                        (0, n.jsx)(I, {}),
                                    ];
                                })(),
                            }),
                        N &&
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: x({ id: 'lite-version.title' }),
                                    description: x({ id: 'lite-version.description' }),
                                    onChange: V,
                                    isChecked: _.isLiteVersionModeEnabled,
                                }),
                            }),
                        j &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: [
                                    (0, n.jsx)(D, {
                                        title: x({ id: 'equalizer.title' }),
                                        description: equalizerStatusLabel,
                                        onClick: h.modal.open,
                                        descriptionProps: (0, s.Am)(s.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION),
                                        ...(0, s.Am)(s.e8.settings.SETTINGS_EQUALIZER_BUTTON),
                                    }),
                                    (0, n.jsx)(M.MZ, {}),
                                ],
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
                                    link: v,
                                }),
                            }),
                        }),
                        C &&
                            (0, n.jsx)('li', {
                                className: $().item,
                                children: (0, n.jsx)(G, { title: x({ id: 'settings.crossfade' }), onChange: te, isChecked: p.isCrossFadeEnabled }),
                            }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(G, {
                                title: 'Добавлять треки в конец плейлиста',
                                description: 'При добавлении из контекстного меню трек будет вставляться в конец, а не в начало',
                                onChange: togglePlaylistAddTrackToEnd,
                                isChecked: appendPlaylistTracksToEnd,
                            }),
                        }),
                        (0, n.jsx)(w.aQ, {
                            fallback:
                                !a.checkExperiment(m.zal.WebNextDisableKids, 'on') &&
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: x({ id: 'settings.show-child-section' }),
                                        onChange: childModeToggle,
                                        isChecked: d.settings.isChildModeEnabled,
                                        dataTestId: (0, s.Am)(s.e8.settings.SETTINGS_KIDS_BUTTON),
                                    }),
                                }),
                        }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(G, {
                                title: 'Показывать раздел «Подкасты и книги»',
                                onChange: Gt,
                                isChecked: ae,
                            }),
                        }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(G, {
                                title: 'Показывать раздел «Концерты»',
                                onChange: Qt,
                                isChecked: de,
                            }),
                        }),
                        (0, n.jsxs)('li', {
                            className: $().item,
                            children: [(0, n.jsx)(D, { title: x({ id: 'settings.shortcuts' }), onClick: o.open }), (0, n.jsx)(J, {})],
                        }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Глобальные горячие клавиши',
                                description: 'Действия, кейбинды и группы действий',
                                onClick: globalShortcutsSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(globalShortcutsSettings, {}),
                        S && (0, n.jsx)('li', { className: $().item, children: (0, n.jsx)(k, {}) }),
                        E &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: [(0, n.jsx)(D, { title: x({ id: 'settings.about-app' }), description: E, onClick: i.open }), (0, n.jsx)(A, {})],
                            }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Discord RPC',
                                description: 'Интеграция с Discord',
                                onClick: discordRpcSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(discordRpcSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Системные настройки',
                                description: 'Автозапуск, аппаратное ускорение и т.п.',
                                onClick: deModal.open,
                            }),
                        }),
                        (0, n.jsx)(systemSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Анимация Моей Волны',
                                description: 'Настройка анимации Моей Волны',
                                onClick: myVibeSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(myVibeSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Поведение Моей Волны',
                                description: 'Настройка поведения Моей Волны',
                                onClick: myVibeParamsSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(myVibeParamsSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Панель плеера',
                                description: 'Настройки элементов на панели плеера',
                                onClick: aeModal.open,
                            }),
                        }),
                        (0, n.jsx)(playerSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: ['Настройки LRCLib', (0, n.jsx)(labeledBubble, { label: 'ALPHA' })],
                                description: 'Поиск текста песен в LRCLib и режимы отображения',
                                onClick: lrclibSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(lrclibSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Настройки аудио',
                                description: 'Нормализация громкости и пространственный звук',
                                onClick: audioSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(audioSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Поведение окна',
                                description: 'Настройки поведения окна приложения',
                                onClick: se.open,
                            }),
                        }),
                        (0, n.jsx)(windowSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Миниплеер',
                                description: 'Настройки поведения миниплеера',
                                onClick: ueModal.open,
                            }),
                        }),
                        (0, n.jsx)(miniPlayerSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Скробблинг',
                                description: 'Авторизация в Last.fm и другие настройки',
                                onClick: scrobblersSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(scrobblersSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Скачивание треков',
                                description: 'Настройки оффлайн прослушивания, а также скачивания в файл',
                                onClick: downloaderSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(downloaderSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Обновления',
                                description: 'Настройки обновлений программы',
                                onClick: appUpdatesSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(appUpdatesSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: ['Ynison Remote', (0, n.jsx)(labeledBubble, { label: 'BETA' })],
                                description: 'Настройки кроссплеерного управления',
                                onClick: ynisonSettingsModal.open,
                            }),
                        }),
                        (0, n.jsx)(ynisonSettings, {}),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(G, {
                                title: 'Режим разработчика',
                                description: 'Разблокирует Chromium DevTools и dev-панель мода',
                                onChange: Xt,
                                isChecked: me,
                            }),
                        }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(D, {
                                title: 'Прочие настройки мода',
                                description: 'Открывает config.json Яндекс Музыки',
                                onClick: Zt,
                            }),
                        }),
                    ],
                });
            });
            var et = o(33276),
                eo = o(36246),
                en = o.n(eo);
            let ei = (0, i.PA)(() => {
                let { formatMessage: e } = (0, l.A)(),
                    { contentScrollRef: t, setContentScrollRef: o } = (0, m.gKY)(),
                    i = (0, m.W6M)();
                return (0, n.jsxs)(et.hO, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, n.jsx)(w.Y9, {
                            variant: w.Vw.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: i.canBack,
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
        66549: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 65760));
        },
        83645: (e, t, o) => {
            'use strict';
            o.d(t, { default: () => i.a });
            var n = o(36446),
                i = o.n(n);
        },
        91165: (e, t, o) => {
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
                o(39201);
        },
        98190: (e) => {
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
        98944: (e, t, o) => {
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
                o(54486),
                o(92803),
                o(14367),
                o(32038);
        },
    },
    (e) => {
        e.O(0, [6041, 9834, 5355, 1023, 1579, 1311, 7764, 6706, 5201, 5148, 3005, 3252, 585, 6433, 6231, 1656, 3143, 5843, 3290, 7358], () => e((e.s = 66549))),
            (_N_E = e.O());
    },
]);
