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
                                        href: 'https://github.com/PulseSync-LLC/PulseSync-client',
                                        children: (0, n.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Репозиторий PulseSync на GitHub',
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
                V = o.n(Y);
            let G = (e) => {
                let { title: t, onChange: o, isChecked: i, description: l, dataTestId: r } = e,
                    s = (0, g.useId)();
                return (0, n.jsxs)('div', {
                    className: V().root,
                    children: [
                        (0, n.jsxs)('div', {
                            className: V().textContainer,
                            children: [
                                (0, n.jsx)(c.Caption, {
                                    className: V().title,
                                    id: s,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                l && (0, n.jsx)(c.Caption, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: V().description, children: l }),
                            ],
                        }),
                        (0, n.jsx)(Z.l, { isChecked: i, 'aria-describedby': s, onChange: o, ...r }),
                    ],
                });
            };
            var Q = o(98190),
                K = o.n(Q);
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
            let ee = (0, i.PA)(() => {
                let e = (0, m.HFS)(),
                    t = (0, m.NFA)().get(m.ooW),
                    {
                        modals: { shortcutsModal: o, aboutAppModal: i, clearMemoryModal: r },
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
                    T = h.isEnabled ? x({ id: 'equalizer.enabled' }) : x({ id: 'equalizer.disabled' }),
                    E = (0, g.useMemo)(() => ''.concat(x({ id: 'desktop.app-version-short' }, { version: e }), ' / Мод ').concat(window.PULSE_VERSION, ' / Хост ').concat(window.HOST_VERSION), [!0, x, e]),
                    [ae, ce] = (0, g.useState)(window.nativeSettings?.get('modSettings.showNonMusicPage') ?? !0),
                    [de, ue] = (0, g.useState)(window.nativeSettings?.get('modSettings.showConcertsTab') ?? !0),
                    [me, pe] = (0, g.useState)(window.nativeSettings?.get('devMode') ?? !1),
                    oe = (0, g.useCallback)(() => {
                        f((0, n.jsx)(w.hT, { error: 'Для применения этой настройки требуется перезапуск приложения' }), { containerId: m.uQT.ERROR });
                    }, [f]),
                    P = (0, g.useCallback)(
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
                            window.nativeSettings?.set('modSettings.showNonMusicPage', e), ce(e), oe();
                        },
                        [oe],
                    ),
                    Qt = (0, g.useCallback)(
                        (e) => {
                            window.nativeSettings?.set('modSettings.showConcertsTab', e), ue(e), oe();
                        },
                        [oe],
                    ),
                    Xt = (0, g.useCallback)(
                        (e) => {
                            window.nativeSettings?.set('devMode', e), pe(e), oe();
                        },
                        [oe],
                    ),
                    Zt = (0, g.useCallback)(() => {
                        window.openConfigFile?.();
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
                );
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
                                children: [(0, n.jsx)(D, { title: x({ id: 'offline.clear-memory' }), onClick: Y }), (0, n.jsx)(I, {})],
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
                                children: (0, n.jsx)(G, { title: x({ id: 'settings.crossfade' }), onChange: te, isChecked: p.isCrossFadeEnabled }),
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
                        (0, n.jsx)(w.aQ, {
                            fallback:
                                !a.checkExperiment(m.zal.WebNextDisableKids, 'on') &&
                                (0, n.jsx)('li', {
                                    className: $().item,
                                    children: (0, n.jsx)(G, {
                                        title: x({ id: 'settings.show-child-section' }),
                                        onChange: P,
                                        isChecked: d.settings.isChildModeEnabled,
                                        dataTestId: (0, s.Am)(s.e8.settings.SETTINGS_KIDS_BUTTON),
                                    }),
                                }),
                        }),
                        (0, n.jsx)('li', {
                            className: $().item,
                                children: (0, n.jsx)(G, {
                                    title: 'Показывать раздел «Подкасты и книги»',
                                    description: 'Управляет экспериментом отключения немusic-разделов',
                                    onChange: Gt,
                                    isChecked: ae,
                                }),
                            }),
                        (0, n.jsx)('li', {
                            className: $().item,
                            children: (0, n.jsx)(G, {
                                title: 'Показывать раздел «Концерты»',
                                description: 'Управляет экспериментом показа вкладки концертов',
                                onChange: Qt,
                                isChecked: de,
                            }),
                        }),
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
                        (0, n.jsxs)('li', {
                            className: $().item,
                            children: [(0, n.jsx)(D, { title: x({ id: 'settings.shortcuts' }), onClick: o.open }), (0, n.jsx)(J, {})],
                        }),
                        S && (0, n.jsx)('li', { className: $().item, children: (0, n.jsx)(k, {}) }),
                        E &&
                            (0, n.jsxs)('li', {
                                className: $().item,
                                children: [(0, n.jsx)(D, { title: x({ id: 'settings.about-app' }), description: E, onClick: i.open }), (0, n.jsx)(A, {})],
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
