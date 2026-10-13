'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5622],
    {
        35622: (e, t, r) => {
            r.d(t, { a: () => u });
            var n,
                s = r(89761),
                a = r(95759),
                i = r(74631),
                o = {
                    5728: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => o }));
                        var n,
                            s,
                            a = r(810);
                        function i() {
                            return (i = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = arguments[t];
                                          for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let o = (0, a.forwardRef)(function (e, t) {
                            return a.createElement(
                                'svg',
                                i({ fill: 'none', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', ref: t }, e),
                                n ||
                                    (n = a.createElement(
                                        'g',
                                        { clipPath: 'url(#plusBadge_svg__a)' },
                                        a.createElement('path', { fill: 'url(#plusBadge_svg__b)', d: 'M0 0h24v24H0z' }),
                                        a.createElement('path', {
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                            d: 'm12.636 16.794 1.559-4.797h5.797a7.996 7.996 0 1 1-5.525-7.606l-1.822 5.607H7.324l-.65 1.999h5.322l-1.56 4.797h2.2Zm2.208-6.796 1.526-4.694a8.004 8.004 0 0 1 3.37 4.694h-4.896Z',
                                            fill: '#fff',
                                        }),
                                    )),
                                s ||
                                    (s = a.createElement(
                                        'defs',
                                        null,
                                        a.createElement(
                                            'linearGradient',
                                            { id: 'plusBadge_svg__b', x1: 0, y1: 10.4, x2: 24, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            a.createElement('stop', { stopColor: '#FF5C4D' }),
                                            a.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            a.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        a.createElement('clipPath', { id: 'plusBadge_svg__a' }, a.createElement('rect', { width: 24, height: 24, rx: 6, fill: '#fff' })),
                                    )),
                            );
                        });
                    },
                    9877: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => o }));
                        var n,
                            s,
                            a = r(810);
                        function i() {
                            return (i = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = arguments[t];
                                          for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let o = (0, a.forwardRef)(function (e, t) {
                            return a.createElement(
                                'svg',
                                i({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', ref: t }, e),
                                n ||
                                    (n = a.createElement(
                                        'g',
                                        { clipPath: 'url(#plusColor_svg__a)' },
                                        a.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                                        a.createElement('path', {
                                            fill: 'url(#plusColor_svg__b)',
                                            fillRule: 'evenodd',
                                            d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                            clipRule: 'evenodd',
                                        }),
                                    )),
                                s ||
                                    (s = a.createElement(
                                        'defs',
                                        null,
                                        a.createElement(
                                            'linearGradient',
                                            { id: 'plusColor_svg__b', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            a.createElement('stop', { stopColor: '#FF5C4D' }),
                                            a.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            a.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        a.createElement('clipPath', { id: 'plusColor_svg__a' }, a.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                                    )),
                            );
                        });
                    },
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (s && (s += ' '), (s += n));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => s }));
                        let s = n;
                    },
                    2850: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
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
                    4257: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root_size_xxxs: 'Rkdd2vKC_3xa1eUdRdHP',
                            root_size_xxs: 'l3tE1hAMmBj2aoPPwU08',
                            root_size_xs: 'UwnL5AJBMMAp6NwMDdZk',
                            root_size_s: 'DzJFnuf7XgdkFh28JAsM',
                            root_size_m: 'o_v2ds2BaqtzAsRuCVjw',
                            root_size_l: 'YjRa1ZjM_lXFlrfS7jcu',
                            root_size_xl: 'Seq0GowcqQmiA9LdLP_g',
                            root_size_xxl: 'mfy69_BvBIamD0e22rCQ',
                            root_size_xxxl: 'JY1OniQewgW9iHgfllZS',
                        };
                    },
                    5521: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'ifxS_8bgSnwBoCsyow0E',
                            root_withBlackShadow: 'mjhMCLd6OX1d1_cJo5Cm',
                            root_placement_default: 'dZRym9qfncGclvrSfIP7',
                            root_placement_center: 'GKgBufCxWa9erUCTU3Fp',
                            root_placement_right: 'ptxrCeHwJ9gOgMXsd0w6',
                            root_size_default: 'hOyjx9DIyxwQAtbHFUtN',
                            root_size_fitContent: 't7tk8IYH3tGrhDZJpi3Z',
                            root_size_fullscreen: 'xZzTMqgg0qtV5vqUIrkK',
                            overlay: 'l66GiFKS1Ux_BNd603Cu',
                            overlay_transparent: 'Gr0NtROEpipzr518Mwr6',
                            overlay_full: 'NaZE1NCUxSM1MvpZuLJV',
                            header: 'wEOFUiLOfluq86BrDUfg',
                            title: 'xuw9gha2dQiGgdRcHNgU',
                            closeButton: 'YUY9QjXr1E4DQfQdMjGt',
                            content: 'fp0QgCrX1y48p3elvLVi',
                            content_withHeader: 'ni3sfTj4hRfj63FbfQTG',
                        };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    6544: (e, t, r) => {
                        (r.r(t), r.d(t, { RemoveScroll: () => K }));
                        var n,
                            s,
                            a = function () {
                                return (a =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, r = 1, n = arguments.length; r < n; r++)
                                            for (var s in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                        return e;
                                    }).apply(this, arguments);
                            };
                        function i(e, t) {
                            var r = {};
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                                for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                                    0 > t.indexOf(n[s]) && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
                            return r;
                        }
                        Object.create;
                        Object.create;
                        var o = ('function' == typeof SuppressedError && SuppressedError, r(810)),
                            l = 'right-scroll-bar-position',
                            c = 'width-before-scroll-bar';
                        function f(e, t) {
                            return ('function' == typeof e ? e(t) : e && (e.current = t), e);
                        }
                        var u = o.useLayoutEffect,
                            x = new WeakMap();
                        function d(e) {
                            return e;
                        }
                        var _ = (function (e) {
                                void 0 === e && (e = {});
                                var t,
                                    r,
                                    n,
                                    s =
                                        (void 0 === t && (t = d),
                                        (r = []),
                                        (n = !1),
                                        {
                                            read: function () {
                                                if (n) throw Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
                                                return r.length ? r[r.length - 1] : null;
                                            },
                                            useMedium: function (e) {
                                                var s = t(e, n);
                                                return (
                                                    r.push(s),
                                                    function () {
                                                        r = r.filter(function (e) {
                                                            return e !== s;
                                                        });
                                                    }
                                                );
                                            },
                                            assignSyncMedium: function (e) {
                                                for (n = !0; r.length;) {
                                                    var t = r;
                                                    ((r = []), t.forEach(e));
                                                }
                                                r = {
                                                    push: function (t) {
                                                        return e(t);
                                                    },
                                                    filter: function () {
                                                        return r;
                                                    },
                                                };
                                            },
                                            assignMedium: function (e) {
                                                n = !0;
                                                var t = [];
                                                if (r.length) {
                                                    var s = r;
                                                    ((r = []), s.forEach(e), (t = r));
                                                }
                                                var a = function () {
                                                        var r = t;
                                                        ((t = []), r.forEach(e));
                                                    },
                                                    i = function () {
                                                        return Promise.resolve().then(a);
                                                    };
                                                (i(),
                                                    (r = {
                                                        push: function (e) {
                                                            (t.push(e), i());
                                                        },
                                                        filter: function (e) {
                                                            return ((t = t.filter(e)), r);
                                                        },
                                                    }));
                                            },
                                        });
                                return ((s.options = a({ async: !0, ssr: !1 }, e)), s);
                            })(),
                            p = function () {},
                            g = o.forwardRef(function (e, t) {
                                var r,
                                    n,
                                    s,
                                    l,
                                    c = o.useRef(null),
                                    d = o.useState({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: p }),
                                    g = d[0],
                                    v = d[1],
                                    m = e.forwardProps,
                                    E = e.children,
                                    k = e.className,
                                    y = e.removeScrollBar,
                                    w = e.enabled,
                                    b = e.shards,
                                    h = e.sideCar,
                                    O = e.noIsolation,
                                    R = e.inert,
                                    j = e.allowPinchZoom,
                                    C = e.as,
                                    H = e.gapMode,
                                    B = i(e, [
                                        'forwardProps',
                                        'children',
                                        'className',
                                        'removeScrollBar',
                                        'enabled',
                                        'shards',
                                        'sideCar',
                                        'noIsolation',
                                        'inert',
                                        'allowPinchZoom',
                                        'as',
                                        'gapMode',
                                    ]),
                                    D =
                                        ((r = [c, t]),
                                        (n = function (e) {
                                            return r.forEach(function (t) {
                                                return f(t, e);
                                            });
                                        }),
                                        ((s = (0, o.useState)(function () {
                                            return {
                                                value: null,
                                                callback: n,
                                                facade: {
                                                    get current() {
                                                        return s.value;
                                                    },
                                                    set current(value) {
                                                        var e = s.value;
                                                        e !== value && ((s.value = value), s.callback(value, e));
                                                    },
                                                },
                                            };
                                        })[0]).callback = n),
                                        (l = s.facade),
                                        u(
                                            function () {
                                                var e = x.get(l);
                                                if (e) {
                                                    var t = new Set(e),
                                                        n = new Set(r),
                                                        s = l.current;
                                                    (t.forEach(function (e) {
                                                        n.has(e) || f(e, null);
                                                    }),
                                                        n.forEach(function (e) {
                                                            t.has(e) || f(e, s);
                                                        }));
                                                }
                                                x.set(l, r);
                                            },
                                            [r],
                                        ),
                                        l),
                                    A = a(a({}, B), g);
                                return o.createElement(
                                    o.Fragment,
                                    null,
                                    w &&
                                        o.createElement(h, {
                                            sideCar: _,
                                            removeScrollBar: y,
                                            shards: b,
                                            noIsolation: O,
                                            inert: R,
                                            setCallbacks: v,
                                            allowPinchZoom: !!j,
                                            lockRef: c,
                                            gapMode: H,
                                        }),
                                    m
                                        ? o.cloneElement(o.Children.only(E), a(a({}, A), { ref: D }))
                                        : o.createElement(void 0 === C ? 'div' : C, a({}, A, { className: k, ref: D }), E),
                                );
                            });
                        ((g.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (g.classNames = { fullWidth: c, zeroRight: l }));
                        var v = function (e) {
                            var t = e.sideCar,
                                r = i(e, ['sideCar']);
                            if (!t) throw Error('Sidecar: please provide `sideCar` property to import the right car');
                            var n = t.read();
                            if (!n) throw Error('Sidecar medium not found');
                            return o.createElement(n, a({}, r));
                        };
                        v.isSideCarExport = !0;
                        var m = function () {
                                var e = 0,
                                    t = null;
                                return {
                                    add: function (n) {
                                        if (
                                            0 == e &&
                                            (t = (function () {
                                                if (!document) return null;
                                                var e = document.createElement('style');
                                                e.type = 'text/css';
                                                var t = s || r.nc;
                                                return (t && e.setAttribute('nonce', t), e);
                                            })())
                                        ) {
                                            var a, i;
                                            ((a = t).styleSheet ? (a.styleSheet.cssText = n) : a.appendChild(document.createTextNode(n)),
                                                (i = t),
                                                (document.head || document.getElementsByTagName('head')[0]).appendChild(i));
                                        }
                                        e++;
                                    },
                                    remove: function () {
                                        --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
                                    },
                                };
                            },
                            E = function () {
                                var e = m();
                                return function (t, r) {
                                    o.useEffect(
                                        function () {
                                            return (
                                                e.add(t),
                                                function () {
                                                    e.remove();
                                                }
                                            );
                                        },
                                        [t && r],
                                    );
                                };
                            },
                            k = function () {
                                var e = E();
                                return function (t) {
                                    return (e(t.styles, t.dynamic), null);
                                };
                            },
                            y = function (e) {
                                return parseInt(e || '', 10) || 0;
                            },
                            w = function (e) {
                                var t = window.getComputedStyle(document.body),
                                    r = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
                                    n = t['padding' === e ? 'paddingTop' : 'marginTop'],
                                    s = t['padding' === e ? 'paddingRight' : 'marginRight'];
                                return [y(r), y(n), y(s)];
                            },
                            b = function (e) {
                                void 0 === e && (e = 'margin');
                                var t = w(e),
                                    r = document.documentElement.clientWidth,
                                    n = window.innerWidth;
                                return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) };
                            },
                            h = k(),
                            O = 'data-scroll-locked',
                            R = function (e, t, r, n) {
                                var s = e.left,
                                    a = e.top,
                                    i = e.right,
                                    o = e.gap;
                                return (
                                    void 0 === r && (r = 'margin'),
                                    '\n  .'
                                        .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                                        .concat(n, ';\n   padding-right: ')
                                        .concat(o, 'px ')
                                        .concat(n, ';\n  }\n  body[')
                                        .concat(O, '] {\n    overflow: hidden ')
                                        .concat(n, ';\n    overscroll-behavior: contain;\n    ')
                                        .concat(
                                            [
                                                t && 'position: relative '.concat(n, ';'),
                                                'margin' === r &&
                                                    '\n    padding-left: '
                                                        .concat(s, 'px;\n    padding-top: ')
                                                        .concat(a, 'px;\n    padding-right: ')
                                                        .concat(i, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                                                        .concat(o, 'px ')
                                                        .concat(n, ';\n    '),
                                                'padding' === r && 'padding-right: '.concat(o, 'px ').concat(n, ';'),
                                            ]
                                                .filter(Boolean)
                                                .join(''),
                                            '\n  }\n  \n  .',
                                        )
                                        .concat(l, ' {\n    right: ')
                                        .concat(o, 'px ')
                                        .concat(n, ';\n  }\n  \n  .')
                                        .concat(c, ' {\n    margin-right: ')
                                        .concat(o, 'px ')
                                        .concat(n, ';\n  }\n  \n  .')
                                        .concat(l, ' .')
                                        .concat(l, ' {\n    right: 0 ')
                                        .concat(n, ';\n  }\n  \n  .')
                                        .concat(c, ' .')
                                        .concat(c, ' {\n    margin-right: 0 ')
                                        .concat(n, ';\n  }\n  \n  body[')
                                        .concat(O, '] {\n    ')
                                        .concat('--removed-body-scroll-bar-size', ': ')
                                        .concat(o, 'px;\n  }\n')
                                );
                            },
                            j = function () {
                                var e = parseInt(document.body.getAttribute(O) || '0', 10);
                                return isFinite(e) ? e : 0;
                            },
                            C = function () {
                                o.useEffect(function () {
                                    return (
                                        document.body.setAttribute(O, (j() + 1).toString()),
                                        function () {
                                            var e = j() - 1;
                                            e <= 0 ? document.body.removeAttribute(O) : document.body.setAttribute(O, e.toString());
                                        }
                                    );
                                }, []);
                            },
                            H = function (e) {
                                var t = e.noRelative,
                                    r = e.noImportant,
                                    n = e.gapMode,
                                    s = void 0 === n ? 'margin' : n;
                                C();
                                var a = o.useMemo(
                                    function () {
                                        return b(s);
                                    },
                                    [s],
                                );
                                return o.createElement(h, { styles: R(a, !t, s, r ? '' : '!important') });
                            },
                            B = !1;
                        try {
                            var D = Object.defineProperty({}, 'passive', {
                                get: function () {
                                    return ((B = !0), !0);
                                },
                            });
                            (window.addEventListener('test', D, D), window.removeEventListener('test', D, D));
                        } catch (e) {
                            B = !1;
                        }
                        var A = !!B && { passive: !1 },
                            F = function (e, t) {
                                if (!(e instanceof Element)) return !1;
                                var r = window.getComputedStyle(e);
                                return 'hidden' !== r[t] && (r.overflowY !== r.overflowX || 'TEXTAREA' === e.tagName || 'visible' !== r[t]);
                            },
                            S = function (e, t) {
                                var r = t.ownerDocument,
                                    n = t;
                                do {
                                    if (('undefined' != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), M(e, n))) {
                                        var s = L(e, n);
                                        if (s[1] > s[2]) return !0;
                                    }
                                    n = n.parentNode;
                                } while (n && n !== r.body);
                                return !1;
                            },
                            M = function (e, t) {
                                return 'v' === e ? F(t, 'overflowY') : F(t, 'overflowX');
                            },
                            L = function (e, t) {
                                return 'v' === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                            },
                            P = function (e, t, r, n, s) {
                                var a,
                                    i = ((a = window.getComputedStyle(t).direction), 'h' === e && 'rtl' === a ? -1 : 1),
                                    o = i * n,
                                    l = r.target,
                                    c = t.contains(l),
                                    f = !1,
                                    u = o > 0,
                                    x = 0,
                                    d = 0;
                                do {
                                    var _ = L(e, l),
                                        p = _[0],
                                        g = _[1] - _[2] - i * p;
                                    ((p || g) && M(e, l) && ((x += g), (d += p)), (l = l instanceof ShadowRoot ? l.host : l.parentNode));
                                } while ((!c && l !== document.body) || (c && (t.contains(l) || t === l)));
                                return (u && ((s && 1 > Math.abs(x)) || (!s && o > x)) ? (f = !0) : !u && ((s && 1 > Math.abs(d)) || (!s && -o > d)) && (f = !0), f);
                            },
                            T = function (e) {
                                return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                            },
                            N = function (e) {
                                return [e.deltaX, e.deltaY];
                            },
                            U = function (e) {
                                return e && 'current' in e ? e.current : e;
                            },
                            z = 0,
                            I = [];
                        let V =
                            ((n = function (e) {
                                var t = o.useRef([]),
                                    r = o.useRef([0, 0]),
                                    n = o.useRef(),
                                    s = o.useState(z++)[0],
                                    a = o.useState(k)[0],
                                    i = o.useRef(e);
                                (o.useEffect(
                                    function () {
                                        i.current = e;
                                    },
                                    [e],
                                ),
                                    o.useEffect(
                                        function () {
                                            if (e.inert) {
                                                document.body.classList.add('block-interactivity-'.concat(s));
                                                var t = (function (e, t, r) {
                                                    if (r || 2 == arguments.length)
                                                        for (var n, s = 0, a = t.length; s < a; s++)
                                                            (!n && s in t) || (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
                                                    return e.concat(n || Array.prototype.slice.call(t));
                                                })([e.lockRef.current], (e.shards || []).map(U), !0).filter(Boolean);
                                                return (
                                                    t.forEach(function (e) {
                                                        return e.classList.add('allow-interactivity-'.concat(s));
                                                    }),
                                                    function () {
                                                        (document.body.classList.remove('block-interactivity-'.concat(s)),
                                                            t.forEach(function (e) {
                                                                return e.classList.remove('allow-interactivity-'.concat(s));
                                                            }));
                                                    }
                                                );
                                            }
                                        },
                                        [e.inert, e.lockRef.current, e.shards],
                                    ));
                                var l = o.useCallback(function (e, t) {
                                        if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey)) return !i.current.allowPinchZoom;
                                        var s,
                                            a = T(e),
                                            o = r.current,
                                            l = 'deltaX' in e ? e.deltaX : o[0] - a[0],
                                            c = 'deltaY' in e ? e.deltaY : o[1] - a[1],
                                            f = e.target,
                                            u = Math.abs(l) > Math.abs(c) ? 'h' : 'v';
                                        if ('touches' in e && 'h' === u && 'range' === f.type) return !1;
                                        var x = S(u, f);
                                        if (!x) return !0;
                                        if ((x ? (s = u) : ((s = 'v' === u ? 'h' : 'v'), (x = S(u, f))), !x)) return !1;
                                        if ((!n.current && 'changedTouches' in e && (l || c) && (n.current = s), !s)) return !0;
                                        var d = n.current || s;
                                        return P(d, t, e, 'h' === d ? l : c, !0);
                                    }, []),
                                    c = o.useCallback(function (e) {
                                        if (I.length && I[I.length - 1] === a) {
                                            var r = 'deltaY' in e ? N(e) : T(e),
                                                n = t.current.filter(function (t) {
                                                    var n;
                                                    return (
                                                        t.name === e.type &&
                                                        (t.target === e.target || e.target === t.shadowParent) &&
                                                        ((n = t.delta), n[0] === r[0] && n[1] === r[1])
                                                    );
                                                })[0];
                                            if (n && n.should) {
                                                e.cancelable && e.preventDefault();
                                                return;
                                            }
                                            if (!n) {
                                                var s = (i.current.shards || [])
                                                    .map(U)
                                                    .filter(Boolean)
                                                    .filter(function (t) {
                                                        return t.contains(e.target);
                                                    });
                                                (s.length > 0 ? l(e, s[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault();
                                            }
                                        }
                                    }, []),
                                    f = o.useCallback(function (e, r, n, s) {
                                        var a = {
                                            name: e,
                                            delta: r,
                                            target: n,
                                            should: s,
                                            shadowParent: (function (e) {
                                                for (var t = null; null !== e;) (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
                                                return t;
                                            })(n),
                                        };
                                        (t.current.push(a),
                                            setTimeout(function () {
                                                t.current = t.current.filter(function (e) {
                                                    return e !== a;
                                                });
                                            }, 1));
                                    }, []),
                                    u = o.useCallback(function (e) {
                                        ((r.current = T(e)), (n.current = void 0));
                                    }, []),
                                    x = o.useCallback(function (t) {
                                        f(t.type, N(t), t.target, l(t, e.lockRef.current));
                                    }, []),
                                    d = o.useCallback(function (t) {
                                        f(t.type, T(t), t.target, l(t, e.lockRef.current));
                                    }, []);
                                o.useEffect(function () {
                                    return (
                                        I.push(a),
                                        e.setCallbacks({ onScrollCapture: x, onWheelCapture: x, onTouchMoveCapture: d }),
                                        document.addEventListener('wheel', c, A),
                                        document.addEventListener('touchmove', c, A),
                                        document.addEventListener('touchstart', u, A),
                                        function () {
                                            ((I = I.filter(function (e) {
                                                return e !== a;
                                            })),
                                                document.removeEventListener('wheel', c, A),
                                                document.removeEventListener('touchmove', c, A),
                                                document.removeEventListener('touchstart', u, A));
                                        }
                                    );
                                }, []);
                                var _ = e.removeScrollBar,
                                    p = e.inert;
                                return o.createElement(
                                    o.Fragment,
                                    null,
                                    p
                                        ? o.createElement(a, {
                                              styles: '\n  .block-interactivity-'
                                                  .concat(s, ' {pointer-events: none;}\n  .allow-interactivity-')
                                                  .concat(s, ' {pointer-events: all;}\n'),
                                          })
                                        : null,
                                    _ ? o.createElement(H, { gapMode: e.gapMode }) : null,
                                );
                            }),
                            _.useMedium(n),
                            v);
                        var Y = o.forwardRef(function (e, t) {
                            return o.createElement(g, a({}, e, { ref: t, sideCar: V }));
                        });
                        Y.classNames = g.classNames;
                        let K = Y;
                    },
                    4490: (e, t, r) => {
                        (r.r(t), r.d(t, { DOWN: () => o, LEFT: () => s, RIGHT: () => a, UP: () => i, useSwipeable: () => d }));
                        var n = r(810);
                        let s = 'Left',
                            a = 'Right',
                            i = 'Up',
                            o = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            f = 'mousemove',
                            u = 'mouseup';
                        function x(e, t) {
                            if (0 === t) return e;
                            let r = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(r) + e[1] * Math.sin(r), e[1] * Math.cos(r) - e[0] * Math.sin(r)];
                        }
                        function d(e) {
                            var t, r, d;
                            let _,
                                { trackMouse: p } = e,
                                g = n.useRef(Object.assign({}, c)),
                                v = n.useRef(Object.assign({}, l)),
                                m = n.useRef(Object.assign({}, v.current));
                            for (_ in ((m.current = Object.assign({}, v.current)), (v.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === v.current[_] && (v.current[_] = l[_]);
                            let [E, k] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = 'touches' in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, s) => {
                                                        s.trackMouse && !r && (document.addEventListener(f, n), document.addEventListener(u, _));
                                                        let { clientX: a, clientY: i } = r ? t.touches[0] : t,
                                                            o = x([a, i], s.rotationAngle);
                                                        return (
                                                            s.onTouchStartOrOnMouseDown && s.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, r) => {
                                                    var n, c, f, u;
                                                    let d = 'touches' in t;
                                                    if (d && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > r.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: _, clientY: p } = d ? t.touches[0] : t,
                                                        [g, v] = x([_, p], r.rotationAngle),
                                                        m = g - e.xy[0],
                                                        E = v - e.xy[1],
                                                        k = Math.abs(m),
                                                        y = Math.abs(E),
                                                        w = (t.timeStamp || 0) - e.start,
                                                        b = Math.sqrt(k * k + y * y) / (w || 1),
                                                        h = [m / (w || 1), E / (w || 1)],
                                                        O = ((n = k), (c = y), (f = m), (u = E), n > c ? (f > 0 ? a : s) : u > 0 ? o : i),
                                                        R = 'number' == typeof r.delta ? r.delta : r.delta[O.toLowerCase()] || l.delta;
                                                    if (k < R && y < R && !e.swiping) return e;
                                                    let j = {
                                                        absX: k,
                                                        absY: y,
                                                        deltaX: m,
                                                        deltaY: E,
                                                        dir: O,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: b,
                                                        vxvy: h,
                                                    };
                                                    (j.first && r.onSwipeStart && r.onSwipeStart(j), r.onSwiping && r.onSwiping(j));
                                                    let C = !1;
                                                    return (
                                                        (r.onSwiping || r.onSwiped || r['onSwiped'.concat(O)]) && (C = !0),
                                                        C && r.preventScrollOnSwipe && r.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: j, swiping: !0 })
                                                    );
                                                });
                                            },
                                            d = (t) => {
                                                e((e, r) => {
                                                    let n;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < r.swipeDuration) {
                                                            ((n = Object.assign(Object.assign({}, e.eventData), { event: t })), r.onSwiped && r.onSwiped(n));
                                                            let s = r['onSwiped'.concat(n.dir)];
                                                            s && s(n);
                                                        }
                                                    } else r.onTap && r.onTap({ event: t });
                                                    return (
                                                        r.onTouchEndOrOnMouseUp && r.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: n })
                                                    );
                                                });
                                            },
                                            _ = (e) => {
                                                (document.removeEventListener(f, n), document.removeEventListener(u, _), d(e));
                                            },
                                            p = (e, t) => {
                                                let s = () => {};
                                                if (e && e.addEventListener) {
                                                    let a = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        i = [
                                                            ['touchstart', r, a],
                                                            ['touchmove', n, Object.assign(Object.assign({}, a), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', d, a],
                                                        ];
                                                    (i.forEach((t) => {
                                                        let [r, n, s] = t;
                                                        return e.addEventListener(r, n, s);
                                                    }),
                                                        (s = () =>
                                                            i.forEach((t) => {
                                                                let [r, n] = t;
                                                                return e.removeEventListener(r, n);
                                                            })));
                                                }
                                                return s;
                                            },
                                            g = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, r) => {
                                                            if (e.el === t) return e;
                                                            let n = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                                                r.trackTouch && t && (n.cleanUpTouch = p(t, r)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), n)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (g.onMouseDown = r), [g, p]);
                                    })((e) => (g.current = e(g.current, v.current)), { trackMouse: p }),
                                [p],
                            );
                            return (
                                (t = g.current),
                                (r = v.current),
                                (d = m.current),
                                (g.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !== d.preventScrollOnSwipe || r.touchEventOptions.passive !== d.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: k(t.el, r) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: k(t.el, r) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                E
                            );
                        }
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var s = null;
                            if ((void 0 !== n && (s = '' + n), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5282: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'addToPlaylist_xxs', xlinkHref: '/icons/sprite.svg#addToPlaylist_xxs' }),
                            ]);
                        });
                    },
                    6150: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'add_l', xlinkHref: '/icons/sprite.svg#add_l' }),
                            ]);
                        });
                    },
                    3735: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'add_xxs', xlinkHref: '/icons/sprite.svg#add_xxs' }),
                            ]);
                        });
                    },
                    7177: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'add_xxxs', xlinkHref: '/icons/sprite.svg#add_xxxs' }),
                            ]);
                        });
                    },
                    6970: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_s', xlinkHref: '/icons/sprite.svg#adult_s' }),
                            ]);
                        });
                    },
                    4121: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_xs', xlinkHref: '/icons/sprite.svg#adult_xs' }),
                            ]);
                        });
                    },
                    4920: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_xxs', xlinkHref: '/icons/sprite.svg#adult_xxs' }),
                            ]);
                        });
                    },
                    8897: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_xxxs', xlinkHref: '/icons/sprite.svg#adult_xxxs' }),
                            ]);
                        });
                    },
                    3848: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_l', xlinkHref: '/icons/sprite.svg#album_l' }),
                            ]);
                        });
                    },
                    7397: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_s', xlinkHref: '/icons/sprite.svg#album_s' }),
                            ]);
                        });
                    },
                    4348: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_xl', xlinkHref: '/icons/sprite.svg#album_xl' }),
                            ]);
                        });
                    },
                    4227: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_xs', xlinkHref: '/icons/sprite.svg#album_xs' }),
                            ]);
                        });
                    },
                    3512: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_xxs', xlinkHref: '/icons/sprite.svg#album_xxs' }),
                            ]);
                        });
                    },
                    7581: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowDown_xs', xlinkHref: '/icons/sprite.svg#arrowDown_xs' }),
                            ]);
                        });
                    },
                    205: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowDown_xxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxs' }),
                            ]);
                        });
                    },
                    3691: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowDown_xxxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxxs' }),
                            ]);
                        });
                    },
                    8705: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowLeft_xs', xlinkHref: '/icons/sprite.svg#arrowLeft_xs' }),
                            ]);
                        });
                    },
                    9400: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowLeft_xxs', xlinkHref: '/icons/sprite.svg#arrowLeft_xxs' }),
                            ]);
                        });
                    },
                    5993: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowRight_xs', xlinkHref: '/icons/sprite.svg#arrowRight_xs' }),
                            ]);
                        });
                    },
                    7423: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowRight_xxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxs' }),
                            ]);
                        });
                    },
                    2402: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowRight_xxxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxxs' }),
                            ]);
                        });
                    },
                    249: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'artist_xxs', xlinkHref: '/icons/sprite.svg#artist_xxs' }),
                            ]);
                        });
                    },
                    5543: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'attention_xxl', xlinkHref: '/icons/sprite.svg#attention_xxl' }),
                            ]);
                        });
                    },
                    3057: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'attention_xxxl', xlinkHref: '/icons/sprite.svg#attention_xxxl' }),
                            ]);
                        });
                    },
                    3715: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'bandlink', xlinkHref: '/icons/sprite.svg#bandlink' }),
                            ]);
                        });
                    },
                    7457: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'bucket_xxs', xlinkHref: '/icons/sprite.svg#bucket_xxs' }),
                            ]);
                        });
                    },
                    3902: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'cast_xs', xlinkHref: '/icons/sprite.svg#cast_xs' }),
                            ]);
                        });
                    },
                    9608: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chain_xs', xlinkHref: '/icons/sprite.svg#chain_xs' }),
                            ]);
                        });
                    },
                    2540: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chain_xxs', xlinkHref: '/icons/sprite.svg#chain_xxs' }),
                            ]);
                        });
                    },
                    5093: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartDown_xxs', xlinkHref: '/icons/sprite.svg#chartDown_xxs' }),
                            ]);
                        });
                    },
                    5791: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartNew_xxs', xlinkHref: '/icons/sprite.svg#chartNew_xxs' }),
                            ]);
                        });
                    },
                    1027: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartSame_xxs', xlinkHref: '/icons/sprite.svg#chartSame_xxs' }),
                            ]);
                        });
                    },
                    6276: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartUp_xxs', xlinkHref: '/icons/sprite.svg#chartUp_xxs' }),
                            ]);
                        });
                    },
                    6311: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xs', xlinkHref: '/icons/sprite.svg#check_xs' }),
                            ]);
                        });
                    },
                    272: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xxl', xlinkHref: '/icons/sprite.svg#check_xxl' }),
                            ]);
                        });
                    },
                    154: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xxs', xlinkHref: '/icons/sprite.svg#check_xxs' }),
                            ]);
                        });
                    },
                    1557: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xxxs', xlinkHref: '/icons/sprite.svg#check_xxxs' }),
                            ]);
                        });
                    },
                    8836: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'clip_xl', xlinkHref: '/icons/sprite.svg#clip_xl' }),
                            ]);
                        });
                    },
                    2866: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'clip_xxs', xlinkHref: '/icons/sprite.svg#clip_xxs' }),
                            ]);
                        });
                    },
                    1595: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_filled_xs', xlinkHref: '/icons/sprite.svg#close_filled_xs' }),
                            ]);
                        });
                    },
                    6547: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_xs', xlinkHref: '/icons/sprite.svg#close_xs' }),
                            ]);
                        });
                    },
                    4777: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_xxs', xlinkHref: '/icons/sprite.svg#close_xxs' }),
                            ]);
                        });
                    },
                    9271: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_xxxs', xlinkHref: '/icons/sprite.svg#close_xxxs' }),
                            ]);
                        });
                    },
                    2390: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'code_xxs', xlinkHref: '/icons/sprite.svg#code_xxs' }),
                            ]);
                        });
                    },
                    4717: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'collections_m', xlinkHref: '/icons/sprite.svg#collections_m' }),
                            ]);
                        });
                    },
                    5561: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'collections_selected_m', xlinkHref: '/icons/sprite.svg#collections_selected_m' }),
                            ]);
                        });
                    },
                    7656: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_l', xlinkHref: '/icons/sprite.svg#complain_l' }),
                            ]);
                        });
                    },
                    2777: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_m', xlinkHref: '/icons/sprite.svg#complain_m' }),
                            ]);
                        });
                    },
                    2364: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_s', xlinkHref: '/icons/sprite.svg#complain_s' }),
                            ]);
                        });
                    },
                    6823: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xl', xlinkHref: '/icons/sprite.svg#complain_xl' }),
                            ]);
                        });
                    },
                    4955: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xs', xlinkHref: '/icons/sprite.svg#complain_xs' }),
                            ]);
                        });
                    },
                    5842: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxl', xlinkHref: '/icons/sprite.svg#complain_xxl' }),
                            ]);
                        });
                    },
                    7067: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxs', xlinkHref: '/icons/sprite.svg#complain_xxs' }),
                            ]);
                        });
                    },
                    4247: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxxl', xlinkHref: '/icons/sprite.svg#complain_xxxl' }),
                            ]);
                        });
                    },
                    4941: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxxs', xlinkHref: '/icons/sprite.svg#complain_xxxs' }),
                            ]);
                        });
                    },
                    3790: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'crown_xxs', xlinkHref: '/icons/sprite.svg#crown_xxs' }),
                            ]);
                        });
                    },
                    8202: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dislike_s', xlinkHref: '/icons/sprite.svg#dislike_s' }),
                            ]);
                        });
                    },
                    2528: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dislike_xs', xlinkHref: '/icons/sprite.svg#dislike_xs' }),
                            ]);
                        });
                    },
                    2901: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dislike_xxs', xlinkHref: '/icons/sprite.svg#dislike_xxs' }),
                            ]);
                        });
                    },
                    1552: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'disliked_s', xlinkHref: '/icons/sprite.svg#disliked_s' }),
                            ]);
                        });
                    },
                    8499: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'disliked_xs', xlinkHref: '/icons/sprite.svg#disliked_xs' }),
                            ]);
                        });
                    },
                    6682: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'disliked_xxs', xlinkHref: '/icons/sprite.svg#disliked_xxs' }),
                            ]);
                        });
                    },
                    20: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'donation_xxxs', xlinkHref: '/icons/sprite.svg#donation_xxxs' }),
                            ]);
                        });
                    },
                    1605: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'download_l', xlinkHref: '/icons/sprite.svg#download_l' }),
                            ]);
                        });
                    },
                    9299: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'download_xxs', xlinkHref: '/icons/sprite.svg#download_xxs' }),
                            ]);
                        });
                    },
                    1126: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'downloaded_xxs', xlinkHref: '/icons/sprite.svg#downloaded_xxs' }),
                            ]);
                        });
                    },
                    5294: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dragDots_xxs', xlinkHref: '/icons/sprite.svg#dragDots_xxs' }),
                            ]);
                        });
                    },
                    9551: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'edit_xxs', xlinkHref: '/icons/sprite.svg#edit_xxs' }),
                            ]);
                        });
                    },
                    6070: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_s', xlinkHref: '/icons/sprite.svg#exclamation_s' }),
                            ]);
                        });
                    },
                    837: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_xs', xlinkHref: '/icons/sprite.svg#exclamation_xs' }),
                            ]);
                        });
                    },
                    1578: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_xxs', xlinkHref: '/icons/sprite.svg#exclamation_xxs' }),
                            ]);
                        });
                    },
                    8871: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_xxxs', xlinkHref: '/icons/sprite.svg#exclamation_xxxs' }),
                            ]);
                        });
                    },
                    2098: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_s', xlinkHref: '/icons/sprite.svg#explicit_s' }),
                            ]);
                        });
                    },
                    4623: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_xs', xlinkHref: '/icons/sprite.svg#explicit_xs' }),
                            ]);
                        });
                    },
                    1654: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_xxs', xlinkHref: '/icons/sprite.svg#explicit_xxs' }),
                            ]);
                        });
                    },
                    6639: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_xxxs', xlinkHref: '/icons/sprite.svg#explicit_xxxs' }),
                            ]);
                        });
                    },
                    7162: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'eye_crossed_xxs', xlinkHref: '/icons/sprite.svg#eye_crossed_xxs' }),
                            ]);
                        });
                    },
                    2756: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'filter_xs', xlinkHref: '/icons/sprite.svg#filter_xs' }),
                            ]);
                        });
                    },
                    9807: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'filter_xxs', xlinkHref: '/icons/sprite.svg#filter_xxs' }),
                            ]);
                        });
                    },
                    8473: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'fullscreen_xs', xlinkHref: '/icons/sprite.svg#fullscreen_xs' }),
                            ]);
                        });
                    },
                    9833: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'gift_xxs', xlinkHref: '/icons/sprite.svg#gift_xxs' }),
                            ]);
                        });
                    },
                    3286: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'googlePlay', xlinkHref: '/icons/sprite.svg#googlePlay' }),
                            ]);
                        });
                    },
                    3003: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'history_m', xlinkHref: '/icons/sprite.svg#history_m' }),
                            ]);
                        });
                    },
                    4561: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'home_m', xlinkHref: '/icons/sprite.svg#home_m' }),
                            ]);
                        });
                    },
                    4355: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'home_selected_m', xlinkHref: '/icons/sprite.svg#home_selected_m' }),
                            ]);
                        });
                    },
                    3331: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'huaweiAppGallery', xlinkHref: '/icons/sprite.svg#huaweiAppGallery' }),
                            ]);
                        });
                    },
                    7662: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'infinity_xs', xlinkHref: '/icons/sprite.svg#infinity_xs' }),
                            ]);
                        });
                    },
                    4959: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'info_xxs', xlinkHref: '/icons/sprite.svg#info_xxs' }),
                            ]);
                        });
                    },
                    9642: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kids_m', xlinkHref: '/icons/sprite.svg#kids_m' }),
                            ]);
                        });
                    },
                    2244: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kids_selected_m', xlinkHref: '/icons/sprite.svg#kids_selected_m' }),
                            ]);
                        });
                    },
                    7722: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kinopoiskEn', xlinkHref: '/icons/sprite.svg#kinopoiskEn' }),
                            ]);
                        });
                    },
                    362: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kinopoiskRu', xlinkHref: '/icons/sprite.svg#kinopoiskRu' }),
                            ]);
                        });
                    },
                    2086: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lightning_xxs', xlinkHref: '/icons/sprite.svg#lightning_xxs' }),
                            ]);
                        });
                    },
                    5035: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'likeVariant_xxs', xlinkHref: '/icons/sprite.svg#likeVariant_xxs' }),
                            ]);
                        });
                    },
                    1423: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_l', xlinkHref: '/icons/sprite.svg#like_l' }),
                            ]);
                        });
                    },
                    2845: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_m', xlinkHref: '/icons/sprite.svg#like_m' }),
                            ]);
                        });
                    },
                    4933: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_xs', xlinkHref: '/icons/sprite.svg#like_xs' }),
                            ]);
                        });
                    },
                    835: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_xxs', xlinkHref: '/icons/sprite.svg#like_xxs' }),
                            ]);
                        });
                    },
                    6707: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'likedVariant_s', xlinkHref: '/icons/sprite.svg#likedVariant_s' }),
                            ]);
                        });
                    },
                    6036: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'likedVariant_xxs', xlinkHref: '/icons/sprite.svg#likedVariant_xxs' }),
                            ]);
                        });
                    },
                    9503: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liked_m', xlinkHref: '/icons/sprite.svg#liked_m' }),
                            ]);
                        });
                    },
                    2138: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liked_xs', xlinkHref: '/icons/sprite.svg#liked_xs' }),
                            ]);
                        });
                    },
                    7526: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liked_xxs', xlinkHref: '/icons/sprite.svg#liked_xxs' }),
                            ]);
                        });
                    },
                    9130: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'link_rounded_xxs', xlinkHref: '/icons/sprite.svg#link_rounded_xxs' }),
                            ]);
                        });
                    },
                    9825: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'link_xxs', xlinkHref: '/icons/sprite.svg#link_xxs' }),
                            ]);
                        });
                    },
                    8426: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'listen_xxxs', xlinkHref: '/icons/sprite.svg#listen_xxxs' }),
                            ]);
                        });
                    },
                    3791: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liteVersion_xs', xlinkHref: '/icons/sprite.svg#liteVersion_xs' }),
                            ]);
                        });
                    },
                    7419: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lock_m', xlinkHref: '/icons/sprite.svg#lock_m' }),
                            ]);
                        });
                    },
                    9376: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lock_xs', xlinkHref: '/icons/sprite.svg#lock_xs' }),
                            ]);
                        });
                    },
                    2506: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lock_xxs', xlinkHref: '/icons/sprite.svg#lock_xxs' }),
                            ]);
                        });
                    },
                    3708: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lyrics_xxs', xlinkHref: '/icons/sprite.svg#lyrics_xxs' }),
                            ]);
                        });
                    },
                    6407: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'macos', xlinkHref: '/icons/sprite.svg#macos' }),
                            ]);
                        });
                    },
                    5200: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'macos_xxs', xlinkHref: '/icons/sprite.svg#macos_xxs' }),
                            ]);
                        });
                    },
                    513: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'menuArrow_xxs', xlinkHref: '/icons/sprite.svg#menuArrow_xxs' }),
                            ]);
                        });
                    },
                    4374: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'moreOutlined_xxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxs' }),
                            ]);
                        });
                    },
                    6393: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'moreOutlined_xxxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxxs' }),
                            ]);
                        });
                    },
                    2570: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'more_m', xlinkHref: '/icons/sprite.svg#more_m' }),
                            ]);
                        });
                    },
                    6465: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'more_xs', xlinkHref: '/icons/sprite.svg#more_xs' }),
                            ]);
                        });
                    },
                    6760: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'more_xxs', xlinkHref: '/icons/sprite.svg#more_xxs' }),
                            ]);
                        });
                    },
                    740: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogo', xlinkHref: '/icons/sprite.svg#musicLogo' }),
                            ]);
                        });
                    },
                    2747: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoCenterEn', xlinkHref: '/icons/sprite.svg#musicLogoCenterEn' }),
                            ]);
                        });
                    },
                    3590: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoCenterRu', xlinkHref: '/icons/sprite.svg#musicLogoCenterRu' }),
                            ]);
                        });
                    },
                    5656: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoLeftEn', xlinkHref: '/icons/sprite.svg#musicLogoLeftEn' }),
                            ]);
                        });
                    },
                    9723: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoLeftRu', xlinkHref: '/icons/sprite.svg#musicLogoLeftRu' }),
                            ]);
                        });
                    },
                    3725: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationCollection_selected_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_selected_xs' }),
                            ]);
                        });
                    },
                    3982: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
                            ]);
                        });
                    },
                    2410: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationConcerts_selected_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_selected_xs' }),
                            ]);
                        });
                    },
                    7516: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationConcerts_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_xs' }),
                            ]);
                        });
                    },
                    3270: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', {
                                    key: 'navigationForYouAndTrends_selected_xs',
                                    xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_selected_xs',
                                }),
                            ]);
                        });
                    },
                    1581: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
                            ]);
                        });
                    },
                    6586: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationKids_selected_xs', xlinkHref: '/icons/sprite.svg#navigationKids_selected_xs' }),
                            ]);
                        });
                    },
                    473: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationKids_xs', xlinkHref: '/icons/sprite.svg#navigationKids_xs' }),
                            ]);
                        });
                    },
                    7145: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMuzmarket_m', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_m' }),
                            ]);
                        });
                    },
                    553: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMuzmarket_xs', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_xs' }),
                            ]);
                        });
                    },
                    9697: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMyVibeNDA_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibeNDA_xs' }),
                            ]);
                        });
                    },
                    49: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMyVibe_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibe_xs' }),
                            ]);
                        });
                    },
                    4085: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationNonMusic_selected_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_selected_xs' }),
                            ]);
                        });
                    },
                    9954: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationNonMusic_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_xs' }),
                            ]);
                        });
                    },
                    4281: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationPlus_xs', xlinkHref: '/icons/sprite.svg#navigationPlus_xs' }),
                            ]);
                        });
                    },
                    1568: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationSearch_xs', xlinkHref: '/icons/sprite.svg#navigationSearch_xs' }),
                            ]);
                        });
                    },
                    2554: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'next_xs', xlinkHref: '/icons/sprite.svg#next_xs' }),
                            ]);
                        });
                    },
                    4400: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'next_xxl', xlinkHref: '/icons/sprite.svg#next_xxl' }),
                            ]);
                        });
                    },
                    8803: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'next_xxs', xlinkHref: '/icons/sprite.svg#next_xxs' }),
                            ]);
                        });
                    },
                    2060: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'non_music_m', xlinkHref: '/icons/sprite.svg#non_music_m' }),
                            ]);
                        });
                    },
                    5407: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'non_music_selected_m', xlinkHref: '/icons/sprite.svg#non_music_selected_m' }),
                            ]);
                        });
                    },
                    4526: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_l', xlinkHref: '/icons/sprite.svg#note_l' }),
                            ]);
                        });
                    },
                    6187: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_m', xlinkHref: '/icons/sprite.svg#note_m' }),
                            ]);
                        });
                    },
                    2020: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_s', xlinkHref: '/icons/sprite.svg#note_s' }),
                            ]);
                        });
                    },
                    1235: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xl', xlinkHref: '/icons/sprite.svg#note_xl' }),
                            ]);
                        });
                    },
                    5108: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xs', xlinkHref: '/icons/sprite.svg#note_xs' }),
                            ]);
                        });
                    },
                    9119: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xxs', xlinkHref: '/icons/sprite.svg#note_xxs' }),
                            ]);
                        });
                    },
                    3581: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xxxs', xlinkHref: '/icons/sprite.svg#note_xxxs' }),
                            ]);
                        });
                    },
                    9189: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'offline_xxl', xlinkHref: '/icons/sprite.svg#offline_xxl' }),
                            ]);
                        });
                    },
                    7488: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause', xlinkHref: '/icons/sprite.svg#pause' }),
                            ]);
                        });
                    },
                    5879: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pauseVibe_s', xlinkHref: '/icons/sprite.svg#pauseVibe_s' }),
                            ]);
                        });
                    },
                    3908: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_l', xlinkHref: '/icons/sprite.svg#pause_filled_l' }),
                            ]);
                        });
                    },
                    3728: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_m', xlinkHref: '/icons/sprite.svg#pause_filled_m' }),
                            ]);
                        });
                    },
                    1540: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_xl', xlinkHref: '/icons/sprite.svg#pause_filled_xl' }),
                            ]);
                        });
                    },
                    8972: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_xs', xlinkHref: '/icons/sprite.svg#pause_filled_xs' }),
                            ]);
                        });
                    },
                    9051: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_xxl', xlinkHref: '/icons/sprite.svg#pause_filled_xxl' }),
                            ]);
                        });
                    },
                    8831: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_m', xlinkHref: '/icons/sprite.svg#pause_m' }),
                            ]);
                        });
                    },
                    3874: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_xs', xlinkHref: '/icons/sprite.svg#pause_xs' }),
                            ]);
                        });
                    },
                    8406: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_xxs', xlinkHref: '/icons/sprite.svg#pause_xxs' }),
                            ]);
                        });
                    },
                    7525: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pencil_xxs', xlinkHref: '/icons/sprite.svg#pencil_xxs' }),
                            ]);
                        });
                    },
                    2629: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'picture_s', xlinkHref: '/icons/sprite.svg#picture_s' }),
                            ]);
                        });
                    },
                    7514: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'picture_xl', xlinkHref: '/icons/sprite.svg#picture_xl' }),
                            ]);
                        });
                    },
                    4338: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'picture_xs', xlinkHref: '/icons/sprite.svg#picture_xs' }),
                            ]);
                        });
                    },
                    3310: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_filled_xs', xlinkHref: '/icons/sprite.svg#pin_filled_xs' }),
                            ]);
                        });
                    },
                    9180: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_filled_xxs', xlinkHref: '/icons/sprite.svg#pin_filled_xxs' }),
                            ]);
                        });
                    },
                    6179: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_xs', xlinkHref: '/icons/sprite.svg#pin_xs' }),
                            ]);
                        });
                    },
                    6286: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_xxs', xlinkHref: '/icons/sprite.svg#pin_xxs' }),
                            ]);
                        });
                    },
                    7288: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play', xlinkHref: '/icons/sprite.svg#play' }),
                            ]);
                        });
                    },
                    85: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playLast_xxs', xlinkHref: '/icons/sprite.svg#playLast_xxs' }),
                            ]);
                        });
                    },
                    3686: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playNext_xxs', xlinkHref: '/icons/sprite.svg#playNext_xxs' }),
                            ]);
                        });
                    },
                    7833: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playQueue_m', xlinkHref: '/icons/sprite.svg#playQueue_m' }),
                            ]);
                        });
                    },
                    2023: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playQueue_xs', xlinkHref: '/icons/sprite.svg#playQueue_xs' }),
                            ]);
                        });
                    },
                    6758: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playQueue_xxs', xlinkHref: '/icons/sprite.svg#playQueue_xxs' }),
                            ]);
                        });
                    },
                    7863: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playVibe_s', xlinkHref: '/icons/sprite.svg#playVibe_s' }),
                            ]);
                        });
                    },
                    759: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_l', xlinkHref: '/icons/sprite.svg#play_filled_l' }),
                            ]);
                        });
                    },
                    5310: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_m', xlinkHref: '/icons/sprite.svg#play_filled_m' }),
                            ]);
                        });
                    },
                    221: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_xl', xlinkHref: '/icons/sprite.svg#play_filled_xl' }),
                            ]);
                        });
                    },
                    2855: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_xs', xlinkHref: '/icons/sprite.svg#play_filled_xs' }),
                            ]);
                        });
                    },
                    2551: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_xxl', xlinkHref: '/icons/sprite.svg#play_filled_xxl' }),
                            ]);
                        });
                    },
                    727: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_m', xlinkHref: '/icons/sprite.svg#play_m' }),
                            ]);
                        });
                    },
                    1516: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_xs', xlinkHref: '/icons/sprite.svg#play_xs' }),
                            ]);
                        });
                    },
                    9095: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_xxs', xlinkHref: '/icons/sprite.svg#play_xxs' }),
                            ]);
                        });
                    },
                    9556: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_xxxs', xlinkHref: '/icons/sprite.svg#play_xxxs' }),
                            ]);
                        });
                    },
                    206: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playlist_s', xlinkHref: '/icons/sprite.svg#playlist_s' }),
                            ]);
                        });
                    },
                    9139: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playlist_xl', xlinkHref: '/icons/sprite.svg#playlist_xl' }),
                            ]);
                        });
                    },
                    8642: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playlist_xs', xlinkHref: '/icons/sprite.svg#playlist_xs' }),
                            ]);
                        });
                    },
                    6623: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'plus', xlinkHref: '/icons/sprite.svg#plus' }),
                            ]);
                        });
                    },
                    839: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'plusOutlined', xlinkHref: '/icons/sprite.svg#plusOutlined' }),
                            ]);
                        });
                    },
                    3739: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'plusOutlined_m', xlinkHref: '/icons/sprite.svg#plusOutlined_m' }),
                            ]);
                        });
                    },
                    4544: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'podcasts_xxs', xlinkHref: '/icons/sprite.svg#podcasts_xxs' }),
                            ]);
                        });
                    },
                    5079: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'previous_xs', xlinkHref: '/icons/sprite.svg#previous_xs' }),
                            ]);
                        });
                    },
                    2913: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'previous_xxl', xlinkHref: '/icons/sprite.svg#previous_xxl' }),
                            ]);
                        });
                    },
                    8454: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'previous_xxs', xlinkHref: '/icons/sprite.svg#previous_xxs' }),
                            ]);
                        });
                    },
                    139: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_one_xs', xlinkHref: '/icons/sprite.svg#repeat_one_xs' }),
                            ]);
                        });
                    },
                    2744: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_one_xxs', xlinkHref: '/icons/sprite.svg#repeat_one_xxs' }),
                            ]);
                        });
                    },
                    7719: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_xs', xlinkHref: '/icons/sprite.svg#repeat_xs' }),
                            ]);
                        });
                    },
                    9498: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_xxs', xlinkHref: '/icons/sprite.svg#repeat_xxs' }),
                            ]);
                        });
                    },
                    825: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'reset_xxs', xlinkHref: '/icons/sprite.svg#reset_xxs' }),
                            ]);
                        });
                    },
                    3893: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'reset_xxxs', xlinkHref: '/icons/sprite.svg#reset_xxxs' }),
                            ]);
                        });
                    },
                    8959: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindBackwards_xs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xs' }),
                            ]);
                        });
                    },
                    1686: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindBackwards_xxs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xxs' }),
                            ]);
                        });
                    },
                    852: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindForward_xs', xlinkHref: '/icons/sprite.svg#rewindForward_xs' }),
                            ]);
                        });
                    },
                    9322: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindForward_xxs', xlinkHref: '/icons/sprite.svg#rewindForward_xxs' }),
                            ]);
                        });
                    },
                    1798: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ruble_m', xlinkHref: '/icons/sprite.svg#ruble_m' }),
                            ]);
                        });
                    },
                    2187: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ruble_xxs', xlinkHref: '/icons/sprite.svg#ruble_xxs' }),
                            ]);
                        });
                    },
                    1764: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ruble_xxxs', xlinkHref: '/icons/sprite.svg#ruble_xxxs' }),
                            ]);
                        });
                    },
                    3753: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_l', xlinkHref: '/icons/sprite.svg#search_l' }),
                            ]);
                        });
                    },
                    3222: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_m', xlinkHref: '/icons/sprite.svg#search_m' }),
                            ]);
                        });
                    },
                    6230: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_selected_m', xlinkHref: '/icons/sprite.svg#search_selected_m' }),
                            ]);
                        });
                    },
                    4380: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_xs', xlinkHref: '/icons/sprite.svg#search_xs' }),
                            ]);
                        });
                    },
                    8002: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_xxl', xlinkHref: '/icons/sprite.svg#search_xxl' }),
                            ]);
                        });
                    },
                    4553: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'settings_xs', xlinkHref: '/icons/sprite.svg#settings_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: BEGIN settings gear SVG component
                    9901: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'settingsGear_xs', xlinkHref: '/icons/sprite.svg#settingsGear_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: END settings gear SVG component
                    7241: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'settings_xxs', xlinkHref: '/icons/sprite.svg#settings_xxs' }),
                            ]);
                        });
                    },
                    9620: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'share_m', xlinkHref: '/icons/sprite.svg#share_m' }),
                            ]);
                        });
                    },
                    1655: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'share_xxs', xlinkHref: '/icons/sprite.svg#share_xxs' }),
                            ]);
                        });
                    },
                    7873: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'shuffle_xs', xlinkHref: '/icons/sprite.svg#shuffle_xs' }),
                            ]);
                        });
                    },
                    1506: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'shuffle_xxs', xlinkHref: '/icons/sprite.svg#shuffle_xxs' }),
                            ]);
                        });
                    },
                    6898: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'site_xs', xlinkHref: '/icons/sprite.svg#site_xs' }),
                            ]);
                        });
                    },
                    9879: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_25x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_m' }),
                            ]);
                        });
                    },
                    3278: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_25x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_xs' }),
                            ]);
                        });
                    },
                    2705: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_25x_l', xlinkHref: '/icons/sprite.svg#speed_1_25x_l' }),
                            ]);
                        });
                    },
                    4484: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_5x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_m' }),
                            ]);
                        });
                    },
                    1468: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_5x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_xs' }),
                            ]);
                        });
                    },
                    8671: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_5x_l', xlinkHref: '/icons/sprite.svg#speed_1_5x_l' }),
                            ]);
                        });
                    },
                    2922: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_75x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_m' }),
                            ]);
                        });
                    },
                    8279: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_75x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_xs' }),
                            ]);
                        });
                    },
                    6413: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_75x_l', xlinkHref: '/icons/sprite.svg#speed_1_75x_l' }),
                            ]);
                        });
                    },
                    2434: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1x_centered_m' }),
                            ]);
                        });
                    },
                    9074: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1x_centered_xs' }),
                            ]);
                        });
                    },
                    8254: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1x_l', xlinkHref: '/icons/sprite.svg#speed_1x_l' }),
                            ]);
                        });
                    },
                    9173: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_2x_centered_m', xlinkHref: '/icons/sprite.svg#speed_2x_centered_m' }),
                            ]);
                        });
                    },
                    182: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_2x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_2x_centered_xs' }),
                            ]);
                        });
                    },
                    8297: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_2x_l', xlinkHref: '/icons/sprite.svg#speed_2x_l' }),
                            ]);
                        });
                    },
                    9711: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'syncLyrics_m', xlinkHref: '/icons/sprite.svg#syncLyrics_m' }),
                            ]);
                        });
                    },
                    8056: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'syncLyrics_xs', xlinkHref: '/icons/sprite.svg#syncLyrics_xs' }),
                            ]);
                        });
                    },
                    2764: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'syncLyrics_xxs', xlinkHref: '/icons/sprite.svg#syncLyrics_xxs' }),
                            ]);
                        });
                    },
                    8353: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbDown_xs', xlinkHref: '/icons/sprite.svg#thumbDown_xs' }),
                            ]);
                        });
                    },
                    7193: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbDown_xxs', xlinkHref: '/icons/sprite.svg#thumbDown_xxs' }),
                            ]);
                        });
                    },
                    3293: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbUp_xs', xlinkHref: '/icons/sprite.svg#thumbUp_xs' }),
                            ]);
                        });
                    },
                    9748: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbUp_xxs', xlinkHref: '/icons/sprite.svg#thumbUp_xxs' }),
                            ]);
                        });
                    },
                    6374: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ticket_m', xlinkHref: '/icons/sprite.svg#ticket_m' }),
                            ]);
                        });
                    },
                    1116: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ticket_selected_m', xlinkHref: '/icons/sprite.svg#ticket_selected_m' }),
                            ]);
                        });
                    },
                    2378: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'trailer_xs', xlinkHref: '/icons/sprite.svg#trailer_xs' }),
                            ]);
                        });
                    },
                    7377: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'trailer_xxs', xlinkHref: '/icons/sprite.svg#trailer_xxs' }),
                            ]);
                        });
                    },
                    9938: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'unavailable_xl', xlinkHref: '/icons/sprite.svg#unavailable_xl' }),
                            ]);
                        });
                    },
                    9261: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'unavailable_xs', xlinkHref: '/icons/sprite.svg#unavailable_xs' }),
                            ]);
                        });
                    },
                    701: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'unpin_xxs', xlinkHref: '/icons/sprite.svg#unpin_xxs' }),
                            ]);
                        });
                    },
                    1484: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'upload_xxs', xlinkHref: '/icons/sprite.svg#upload_xxs' }),
                            ]);
                        });
                    },
                    8382: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'users_xxxs', xlinkHref: '/icons/sprite.svg#users_xxxs' }),
                            ]);
                        });
                    },
                    582: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'vibe_xxs', xlinkHref: '/icons/sprite.svg#vibe_xxs' }),
                            ]);
                        });
                    },
                    1786: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'volumeOff_xs', xlinkHref: '/icons/sprite.svg#volumeOff_xs' }),
                            ]);
                        });
                    },
                    4527: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'volume_xs', xlinkHref: '/icons/sprite.svg#volume_xs' }),
                            ]);
                        });
                    },
                    4298: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'windows', xlinkHref: '/icons/sprite.svg#windows' }),
                            ]);
                        });
                    },
                    4419: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'windows_xs', xlinkHref: '/icons/sprite.svg#windows_xs' }),
                            ]);
                        });
                    },
                    790: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexBooksEn', xlinkHref: '/icons/sprite.svg#yandexBooksEn' }),
                            ]);
                        });
                    },
                    9342: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexBooksRu', xlinkHref: '/icons/sprite.svg#yandexBooksRu' }),
                            ]);
                        });
                    },
                    4403: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPayEn', xlinkHref: '/icons/sprite.svg#yandexPayEn' }),
                            ]);
                        });
                    },
                    4960: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPayRu', xlinkHref: '/icons/sprite.svg#yandexPayRu' }),
                            ]);
                        });
                    },
                    1601: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPlusEn', xlinkHref: '/icons/sprite.svg#yandexPlusEn' }),
                            ]);
                        });
                    },
                    8163: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPlusRu', xlinkHref: '/icons/sprite.svg#yandexPlusRu' }),
                            ]);
                        });
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let n = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, n.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, n.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, r) => {
                        var n;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let s = r(4490),
                            a = r(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(n || (t.SwipeablePlacement = n = {}));
                        let i = (e) => {
                                let { ref: t, deltaY: r, deltaX: s, placement: a } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            a === n.TOP || a === n.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(s || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: l, disableSwipe: c, placement: f, threshold: u } = e,
                                x = (0, a.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                d = (0, a.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: s, placement: a } = e;
                                            switch (a) {
                                                case n.TOP:
                                                    r <= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                                    break;
                                                case n.RIGHT:
                                                    s >= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                                    break;
                                                case n.LEFT:
                                                    s <= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                                    break;
                                                default:
                                                    r >= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: f });
                                }),
                                _ = (0, a.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: s, placement: a, threshold: i = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (i / 100) * (a === n.TOP || a === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (a) {
                                                case n.TOP:
                                                    return r < 0 && Math.abs(r) >= o;
                                                case n.RIGHT:
                                                    return s > 0 && s >= o;
                                                case n.LEFT:
                                                    return s < 0 && Math.abs(s) >= o;
                                                default:
                                                    return r > 0 && r >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: f, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, s.useSwipeable)({ onSwiped: _, onSwiping: d, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: x };
                        };
                    },
                    5451: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useModalSwipeable = void 0));
                        let n = r(810),
                            s = r(2458);
                        t.useModalSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: a, disableSwipe: i, placement: o, threshold: l } = e,
                                c = (0, n.useMemo)(() => {
                                    switch (o) {
                                        case 'default':
                                        default:
                                            return s.SwipeablePlacement.BOTTOM;
                                        case 'right':
                                            return s.SwipeablePlacement.RIGHT;
                                    }
                                }, [o]);
                            return (0, s.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: a, disableSwipe: i, placement: c, threshold: l });
                        };
                    },
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
                                let r = t.LIGHTNESS_COLOR_BUCKETS.find((r, n) =>
                                    ((e, r, n) => (n === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? r >= e.start && r <= e.end : r >= e.start && r < e.end))(r, e, n),
                                );
                                return (0, t.findColorBucketByName)(null == r ? void 0 : r.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, r) {
                                let n = null != r ? r : e.currentTarget,
                                    s = document.createElement('span'),
                                    a = Math.max(n.clientWidth, n.clientHeight),
                                    i = a / 2,
                                    o = n.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                                    c = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                                ((s.style.width = ''.concat(a, 'px')),
                                    (s.style.height = ''.concat(a, 'px')),
                                    (s.style.left = 0 === e.clientX ? '0px' : ''.concat(l - i, 'px')),
                                    (s.style.top = ''.concat(c - i, 'px')),
                                    s.classList.add(t));
                                let f = n.getElementsByClassName(t)[0];
                                (f && f.remove(), n.insertBefore(s, n.firstChild));
                            }));
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    1888: (e, t, r) => {
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
                        let n = r(2660),
                            s = r(6384);
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
                        let a = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let r = (0, s.findColorBucketByName)(e);
                            return r ? a(r) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, n.hexToHsl)(e),
                                    r = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === r ? (0, s.findColorBucketByHue)(t.h) : (0, s.findColorBucketByLightness)(t.l), hsl: t, mode: r };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: r } = (0, t.getVibeColorBucketSelection)(e);
                                return r ? a(r) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var n = r(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return n.createRipple;
                            },
                        });
                        var s = r(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return s.getElementFromRefOrElement;
                            },
                        });
                        var a = r(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return a.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let s = r(4377),
                            a = r(810),
                            i = r(5881),
                            o = r(6882),
                            l = n(r(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: n = 'left',
                                        children: c,
                                        className: f,
                                        color: u = 'secondary',
                                        flexIcon: x,
                                        icon: d,
                                        spinner: _,
                                        role: p,
                                        onClick: g,
                                        radius: v = 'm',
                                        size: m,
                                        type: E = 'button',
                                        variant: k = 'default',
                                        withRipple: y = !0,
                                        withHover: w = !0,
                                        withBorder: b = !1,
                                        disabled: h,
                                        focusableWhenDisabled: O,
                                        'aria-disabled': R,
                                        iconClassName: j,
                                        contentContainerClassName: C,
                                        ...H
                                    } = e,
                                    B = (0, a.useId)(),
                                    D = !a.Children.toArray(c).filter(Boolean).length,
                                    A = 'left' === n,
                                    F = null,
                                    S = (0, a.isValidElement)(_);
                                if (d) {
                                    var M, L;
                                    F = (0, a.cloneElement)(d, {
                                        className: (0, i.clsx)(
                                            l.default.icon,
                                            {
                                                [l.default['icon_position_'.concat(n)]]: n && !D,
                                                [l.default.icon_withButtonSize]: !(null == (M = d.props) ? void 0 : M.size),
                                            },
                                            null == (L = d.props) ? void 0 : L.className,
                                            j,
                                        ),
                                        key: B,
                                    });
                                }
                                let P = (0, a.useMemo)(() => (S ? (0, s.jsx)('div', { className: l.default.spinnerContainer, children: _ }) : null), [S, _]),
                                    T = (0, a.useCallback)(
                                        (e) => {
                                            if (h) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            S || (y && (0, o.createRipple)(e, l.default.ripple), null == g || g(e));
                                        },
                                        [h, S, g, y],
                                    );
                                return (0, s.jsx)('button', {
                                    ref: t,
                                    className: (0, i.clsx)(
                                        l.default.root,
                                        l.default['root_'.concat(u, '_').concat(k)],
                                        l.default['root_radius_'.concat(v)],
                                        l.default.root_size,
                                        {
                                            [l.default['root_'.concat(u, '_withHover_').concat(k)]]: w && !h && !S,
                                            [l.default['root_size_'.concat(m)]]: m,
                                            [l.default.root_withoutBorder]: !b,
                                            [l.default.root_withActiveSpinner]: S,
                                            [l.default.block]: r,
                                            [l.default.flexIcon]: x,
                                            [l.default.iconOnly]: D,
                                            [l.default.root_icon_left]: d && !D && A,
                                            [l.default.root_icon_right]: d && !D && !A,
                                        },
                                        f,
                                    ),
                                    type: E,
                                    role: p,
                                    onClick: T,
                                    ...H,
                                    disabled: h && !O,
                                    'aria-disabled': (h && O) || R,
                                    'data-disabled': h || void 0,
                                    'aria-live': S ? 'polite' : 'off',
                                    'aria-busy': S,
                                    children:
                                        d || S
                                            ? (0, s.jsxs)('span', {
                                                  className: (0, i.clsx)(l.default.contentContainer, { [l.default.contentContainer_block]: r }, C),
                                                  children: [d && A && F, !D && c, d && !A && F, P],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, a.forwardRef)((e, t) => (0, s.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7493: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        var n = r(7291);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return n.Button;
                            },
                        });
                    },
                    1064: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = t.IconComponent = void 0));
                        let s = r(4377),
                            a = r(810),
                            i = r(5881),
                            o = r(7638),
                            l = n(r(4257));
                        ((t.IconComponent = (e) => {
                            let { 'aria-label': t, className: r, focusable: n = !1, variant: a, size: c, forwardRef: f, ...u } = e,
                                x = c ? ''.concat(a, '_').concat(c) : a,
                                d = o.iconsCollection[x];
                            return d
                                ? (0, s.jsx)(d, {
                                      className: (0, i.clsx)(l.default.root, r, l.default['root_size_'.concat(c)]),
                                      focusable: n,
                                      'aria-label': t,
                                      ...u,
                                      'aria-hidden': !t,
                                      ref: f,
                                  })
                                : null;
                        }),
                            (t.Icon = (0, a.forwardRef)((e, r) => (0, s.jsx)(t.IconComponent, { forwardRef: r, ...e }))));
                    },
                    7638: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.iconsCollection = t.iconsCollectionBySize = void 0));
                        let s = n(r(7177)),
                            a = n(r(8897)),
                            i = n(r(3691)),
                            o = n(r(2402)),
                            l = n(r(1557)),
                            c = n(r(9271)),
                            f = n(r(4941)),
                            u = n(r(20)),
                            x = n(r(8871)),
                            d = n(r(6639)),
                            _ = n(r(8426)),
                            p = n(r(6393)),
                            g = n(r(3581)),
                            v = n(r(9556)),
                            m = n(r(3893)),
                            E = n(r(1764)),
                            k = n(r(8382)),
                            y = n(r(3735)),
                            w = n(r(5282)),
                            b = n(r(4920)),
                            h = n(r(3512)),
                            O = n(r(205)),
                            R = n(r(9400)),
                            j = n(r(7423)),
                            C = n(r(249)),
                            H = n(r(7457)),
                            B = n(r(2540)),
                            D = n(r(5093)),
                            A = n(r(5791)),
                            F = n(r(1027)),
                            S = n(r(6276)),
                            M = n(r(154)),
                            L = n(r(2866)),
                            P = n(r(4777)),
                            T = n(r(2390)),
                            N = n(r(7067)),
                            U = n(r(3790)),
                            z = n(r(2901)),
                            I = n(r(6682)),
                            V = n(r(9299)),
                            Y = n(r(1126)),
                            K = n(r(5294)),
                            W = n(r(9551)),
                            q = n(r(1578)),
                            G = n(r(1654)),
                            Z = n(r(7162)),
                            Q = n(r(9807)),
                            X = n(r(9833)),
                            J = n(r(4959)),
                            $ = n(r(2086)),
                            ee = n(r(835)),
                            et = n(r(5035)),
                            er = n(r(7526)),
                            en = n(r(6036)),
                            es = n(r(9825)),
                            ea = n(r(9130)),
                            ei = n(r(2506)),
                            eo = n(r(3708)),
                            el = n(r(5200)),
                            ec = n(r(513)),
                            ef = n(r(6760)),
                            eu = n(r(4374)),
                            ex = n(r(8803)),
                            ed = n(r(9119)),
                            e_ = n(r(8406)),
                            ep = n(r(7525)),
                            eg = n(r(6286)),
                            ev = n(r(9180)),
                            em = n(r(9095)),
                            eE = n(r(85)),
                            ek = n(r(3686)),
                            ey = n(r(6758)),
                            ew = n(r(4544)),
                            eb = n(r(8454)),
                            eh = n(r(9498)),
                            eO = n(r(2744)),
                            eR = n(r(825)),
                            ej = n(r(1686)),
                            eC = n(r(9322)),
                            eH = n(r(2187)),
                            eB = n(r(7241)),
                            eD = n(r(1655)),
                            eA = n(r(1506)),
                            eF = n(r(2764)),
                            eS = n(r(7193)),
                            eM = n(r(9748)),
                            eL = n(r(7377)),
                            eP = n(r(701)),
                            eT = n(r(1484)),
                            eN = n(r(582)),
                            eU = n(r(4121)),
                            ez = n(r(4227)),
                            eI = n(r(7581)),
                            eV = n(r(8705)),
                            eY = n(r(5993)),
                            eK = n(r(3902)),
                            eW = n(r(9608)),
                            eq = n(r(6311)),
                            eG = n(r(6547)),
                            eZ = n(r(1595)),
                            eQ = n(r(4955)),
                            eX = n(r(2528)),
                            eJ = n(r(8499)),
                            e$ = n(r(837)),
                            e0 = n(r(4623)),
                            e1 = n(r(2756)),
                            e8 = n(r(8473)),
                            e2 = n(r(7662)),
                            e5 = n(r(4933)),
                            e4 = n(r(2138)),
                            e3 = n(r(3791)),
                            e7 = n(r(9376)),
                            e6 = n(r(6465)),
                            e9 = n(r(3982)),
                            te = n(r(3725)),
                            tt = n(r(7516)),
                            tr = n(r(2410)),
                            tn = n(r(1581)),
                            ts = n(r(3270)),
                            ta = n(r(473)),
                            ti = n(r(6586)),
                            to = n(r(553)),
                            tl = n(r(49)),
                            tc = n(r(9697)),
                            tf = n(r(9954)),
                            tu = n(r(4085)),
                            tx = n(r(4281)),
                            td = n(r(1568)),
                            t_ = n(r(2554)),
                            tp = n(r(5108)),
                            tg = n(r(3874)),
                            tv = n(r(8972)),
                            tm = n(r(4338)),
                            tE = n(r(6179)),
                            tk = n(r(3310)),
                            ty = n(r(1516)),
                            tw = n(r(2023)),
                            tb = n(r(2855)),
                            th = n(r(8642)),
                            tO = n(r(5079)),
                            tR = n(r(7719)),
                            tj = n(r(139)),
                            tC = n(r(8959)),
                            tH = n(r(852)),
                            tB = n(r(4380)),
                            tD = n(r(4553)),
                            // for PulseSync: BEGIN import the settings gear SVG component
                            tSettingsGear = n(r(9901)),
                            // for PulseSync: END import the settings gear SVG component
                            tA = n(r(7873)),
                            tF = n(r(6898)),
                            tS = n(r(3278)),
                            tM = n(r(1468)),
                            tL = n(r(8279)),
                            tP = n(r(9074)),
                            tT = n(r(182)),
                            tN = n(r(8056)),
                            tU = n(r(8353)),
                            tz = n(r(3293)),
                            tI = n(r(2378)),
                            tV = n(r(9261)),
                            tY = n(r(4527)),
                            tK = n(r(1786)),
                            tW = n(r(4419)),
                            tq = n(r(6970)),
                            tG = n(r(7397)),
                            tZ = n(r(2364)),
                            tQ = n(r(8202)),
                            tX = n(r(1552)),
                            tJ = n(r(6070)),
                            t$ = n(r(2098)),
                            t0 = n(r(6707)),
                            t1 = n(r(2020)),
                            t8 = n(r(5879)),
                            t2 = n(r(2629)),
                            t5 = n(r(7863)),
                            t4 = n(r(206)),
                            t3 = n(r(4717)),
                            t7 = n(r(5561)),
                            t6 = n(r(2777)),
                            t9 = n(r(3003)),
                            re = n(r(4561)),
                            rt = n(r(4355)),
                            rr = n(r(9642)),
                            rn = n(r(2244)),
                            rs = n(r(2845)),
                            ra = n(r(9503)),
                            ri = n(r(7419)),
                            ro = n(r(2570)),
                            rl = n(r(7145)),
                            rc = n(r(2060)),
                            rf = n(r(5407)),
                            ru = n(r(6187)),
                            rx = n(r(8831)),
                            rd = n(r(3728)),
                            r_ = n(r(727)),
                            rp = n(r(7833)),
                            rg = n(r(5310)),
                            rv = n(r(3739)),
                            rm = n(r(1798)),
                            rE = n(r(3222)),
                            rk = n(r(6230)),
                            ry = n(r(9620)),
                            rw = n(r(9879)),
                            rb = n(r(4484)),
                            rh = n(r(2922)),
                            rO = n(r(2434)),
                            rR = n(r(9173)),
                            rj = n(r(9711)),
                            rC = n(r(6374)),
                            rH = n(r(1116)),
                            rB = n(r(6150)),
                            rD = n(r(3848)),
                            rA = n(r(7656)),
                            rF = n(r(1605)),
                            rS = n(r(1423)),
                            rM = n(r(4526)),
                            rL = n(r(3908)),
                            rP = n(r(759)),
                            rT = n(r(3753)),
                            rN = n(r(2705)),
                            rU = n(r(8671)),
                            rz = n(r(6413)),
                            rI = n(r(8254)),
                            rV = n(r(8297)),
                            rY = n(r(4348)),
                            rK = n(r(8836)),
                            rW = n(r(6823)),
                            rq = n(r(1235)),
                            rG = n(r(1540)),
                            rZ = n(r(7514)),
                            rQ = n(r(221)),
                            rX = n(r(9139)),
                            rJ = n(r(9938)),
                            r$ = n(r(5543)),
                            r0 = n(r(272)),
                            r1 = n(r(5842)),
                            r8 = n(r(4400)),
                            r2 = n(r(9189)),
                            r5 = n(r(9051)),
                            r4 = n(r(2551)),
                            r3 = n(r(2913)),
                            r7 = n(r(8002)),
                            r6 = n(r(3057)),
                            r9 = n(r(4247)),
                            ne = n(r(3715)),
                            nt = n(r(3286)),
                            nr = n(r(3331)),
                            nn = n(r(7722)),
                            ns = n(r(362)),
                            na = n(r(6407)),
                            ni = n(r(740)),
                            no = n(r(2747)),
                            nl = n(r(3590)),
                            nc = n(r(5656)),
                            nf = n(r(9723)),
                            nu = n(r(7488)),
                            nx = n(r(7288)),
                            nd = n(r(6623)),
                            n_ = n(r(5728)),
                            np = n(r(9877)),
                            ng = n(r(839)),
                            nv = n(r(4298)),
                            nm = n(r(790)),
                            nE = n(r(9342)),
                            nk = n(r(4403)),
                            ny = n(r(4960)),
                            nw = n(r(1601)),
                            nb = n(r(8163));
                        ((t.iconsCollectionBySize = {
                            xxxs: [
                                'add',
                                'adult',
                                'arrowDown',
                                'arrowRight',
                                'check',
                                'close',
                                'complain',
                                'donation',
                                'exclamation',
                                'explicit',
                                'listen',
                                'moreOutlined',
                                'note',
                                'play',
                                'reset',
                                'ruble',
                                'users',
                            ],
                            xxs: [
                                'add',
                                'addToPlaylist',
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'artist',
                                'bucket',
                                'chain',
                                'chartDown',
                                'chartNew',
                                'chartSame',
                                'chartUp',
                                'check',
                                'clip',
                                'close',
                                'code',
                                'complain',
                                'crown',
                                'dislike',
                                'disliked',
                                'download',
                                'downloaded',
                                'dragDots',
                                'edit',
                                'exclamation',
                                'explicit',
                                'eye_crossed',
                                'filter',
                                'gift',
                                'info',
                                'lightning',
                                'like',
                                'likeVariant',
                                'liked',
                                'likedVariant',
                                'link',
                                'link_rounded',
                                'lock',
                                'lyrics',
                                'macos',
                                'menuArrow',
                                'more',
                                'moreOutlined',
                                'next',
                                'note',
                                'pause',
                                'pencil',
                                'pin',
                                'pin_filled',
                                'play',
                                'playLast',
                                'playNext',
                                'playQueue',
                                'podcasts',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'reset',
                                'rewindBackwards',
                                'rewindForward',
                                'ruble',
                                'settings',
                                'share',
                                'shuffle',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unpin',
                                'upload',
                                'vibe',
                            ],
                            xs: [
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'cast',
                                'chain',
                                'check',
                                'close',
                                'close_filled',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'filter',
                                'fullscreen',
                                'infinity',
                                'like',
                                'liked',
                                'liteVersion',
                                'lock',
                                'more',
                                'navigationCollection',
                                'navigationCollection_selected',
                                'navigationConcerts',
                                'navigationConcerts_selected',
                                'navigationForYouAndTrends',
                                'navigationForYouAndTrends_selected',
                                'navigationKids',
                                'navigationKids_selected',
                                'navigationMuzmarket',
                                'navigationMyVibe',
                                'navigationMyVibeNDA',
                                'navigationNonMusic',
                                'navigationNonMusic_selected',
                                'navigationPlus',
                                'navigationSearch',
                                'next',
                                'note',
                                'pause',
                                'pause_filled',
                                'picture',
                                'pin',
                                'pin_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'playlist',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'rewindBackwards',
                                'rewindForward',
                                'search',
                                'settings',
                                // for PulseSync: BEGIN register the settings gear icon name
                                'settingsGear',
                                // for PulseSync: END register the settings gear icon name
                                'shuffle',
                                'site',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unavailable',
                                'volume',
                                'volumeOff',
                                'windows',
                            ],
                            s: [
                                'adult',
                                'album',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'likedVariant',
                                'note',
                                'pauseVibe',
                                'picture',
                                'playVibe',
                                'playlist',
                            ],
                            m: [
                                'collections',
                                'collections_selected',
                                'complain',
                                'history',
                                'home',
                                'home_selected',
                                'kids',
                                'kids_selected',
                                'like',
                                'liked',
                                'lock',
                                'more',
                                'navigationMuzmarket',
                                'non_music',
                                'non_music_selected',
                                'note',
                                'pause',
                                'pause_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'plusOutlined',
                                'ruble',
                                'search',
                                'search_selected',
                                'share',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'ticket',
                                'ticket_selected',
                            ],
                            l: [
                                'add',
                                'album',
                                'complain',
                                'download',
                                'like',
                                'note',
                                'pause_filled',
                                'play_filled',
                                'search',
                                'speed_1_25x',
                                'speed_1_5x',
                                'speed_1_75x',
                                'speed_1x',
                                'speed_2x',
                            ],
                            xl: ['album', 'clip', 'complain', 'note', 'pause_filled', 'picture', 'play_filled', 'playlist', 'unavailable'],
                            xxl: ['attention', 'check', 'complain', 'next', 'offline', 'pause_filled', 'play_filled', 'previous', 'search'],
                            xxxl: ['attention', 'complain'],
                            '': [
                                'bandlink',
                                'googlePlay',
                                'huaweiAppGallery',
                                'kinopoiskEn',
                                'kinopoiskRu',
                                'macos',
                                'musicLogo',
                                'musicLogoCenterEn',
                                'musicLogoCenterRu',
                                'musicLogoLeftEn',
                                'musicLogoLeftRu',
                                'pause',
                                'play',
                                'plus',
                                'plusBadge',
                                'plusColor',
                                'plusOutlined',
                                'windows',
                                'yandexBooksEn',
                                'yandexBooksRu',
                                'yandexPayEn',
                                'yandexPayRu',
                                'yandexPlusEn',
                                'yandexPlusRu',
                            ],
                        }),
                            (t.iconsCollection = {
                                add_xxxs: s.default,
                                adult_xxxs: a.default,
                                arrowDown_xxxs: i.default,
                                arrowRight_xxxs: o.default,
                                check_xxxs: l.default,
                                close_xxxs: c.default,
                                complain_xxxs: f.default,
                                donation_xxxs: u.default,
                                exclamation_xxxs: x.default,
                                explicit_xxxs: d.default,
                                listen_xxxs: _.default,
                                moreOutlined_xxxs: p.default,
                                note_xxxs: g.default,
                                play_xxxs: v.default,
                                reset_xxxs: m.default,
                                ruble_xxxs: E.default,
                                users_xxxs: k.default,
                                add_xxs: y.default,
                                addToPlaylist_xxs: w.default,
                                adult_xxs: b.default,
                                album_xxs: h.default,
                                arrowDown_xxs: O.default,
                                arrowLeft_xxs: R.default,
                                arrowRight_xxs: j.default,
                                artist_xxs: C.default,
                                bucket_xxs: H.default,
                                chain_xxs: B.default,
                                chartDown_xxs: D.default,
                                chartNew_xxs: A.default,
                                chartSame_xxs: F.default,
                                chartUp_xxs: S.default,
                                check_xxs: M.default,
                                clip_xxs: L.default,
                                close_xxs: P.default,
                                code_xxs: T.default,
                                complain_xxs: N.default,
                                crown_xxs: U.default,
                                dislike_xxs: z.default,
                                disliked_xxs: I.default,
                                download_xxs: V.default,
                                downloaded_xxs: Y.default,
                                dragDots_xxs: K.default,
                                edit_xxs: W.default,
                                exclamation_xxs: q.default,
                                explicit_xxs: G.default,
                                eye_crossed_xxs: Z.default,
                                filter_xxs: Q.default,
                                gift_xxs: X.default,
                                info_xxs: J.default,
                                lightning_xxs: $.default,
                                like_xxs: ee.default,
                                likeVariant_xxs: et.default,
                                liked_xxs: er.default,
                                likedVariant_xxs: en.default,
                                link_xxs: es.default,
                                link_rounded_xxs: ea.default,
                                lock_xxs: ei.default,
                                lyrics_xxs: eo.default,
                                macos_xxs: el.default,
                                menuArrow_xxs: ec.default,
                                more_xxs: ef.default,
                                moreOutlined_xxs: eu.default,
                                next_xxs: ex.default,
                                note_xxs: ed.default,
                                pause_xxs: e_.default,
                                pencil_xxs: ep.default,
                                pin_xxs: eg.default,
                                pin_filled_xxs: ev.default,
                                play_xxs: em.default,
                                playLast_xxs: eE.default,
                                playNext_xxs: ek.default,
                                playQueue_xxs: ey.default,
                                podcasts_xxs: ew.default,
                                previous_xxs: eb.default,
                                repeat_xxs: eh.default,
                                repeat_one_xxs: eO.default,
                                reset_xxs: eR.default,
                                rewindBackwards_xxs: ej.default,
                                rewindForward_xxs: eC.default,
                                ruble_xxs: eH.default,
                                settings_xxs: eB.default,
                                share_xxs: eD.default,
                                shuffle_xxs: eA.default,
                                syncLyrics_xxs: eF.default,
                                thumbDown_xxs: eS.default,
                                thumbUp_xxs: eM.default,
                                trailer_xxs: eL.default,
                                unpin_xxs: eP.default,
                                upload_xxs: eT.default,
                                vibe_xxs: eN.default,
                                adult_xs: eU.default,
                                album_xs: ez.default,
                                arrowDown_xs: eI.default,
                                arrowLeft_xs: eV.default,
                                arrowRight_xs: eY.default,
                                cast_xs: eK.default,
                                chain_xs: eW.default,
                                check_xs: eq.default,
                                close_xs: eG.default,
                                close_filled_xs: eZ.default,
                                complain_xs: eQ.default,
                                dislike_xs: eX.default,
                                disliked_xs: eJ.default,
                                exclamation_xs: e$.default,
                                explicit_xs: e0.default,
                                filter_xs: e1.default,
                                fullscreen_xs: e8.default,
                                infinity_xs: e2.default,
                                like_xs: e5.default,
                                liked_xs: e4.default,
                                liteVersion_xs: e3.default,
                                lock_xs: e7.default,
                                more_xs: e6.default,
                                navigationCollection_xs: e9.default,
                                navigationCollection_selected_xs: te.default,
                                navigationConcerts_xs: tt.default,
                                navigationConcerts_selected_xs: tr.default,
                                navigationForYouAndTrends_xs: tn.default,
                                navigationForYouAndTrends_selected_xs: ts.default,
                                navigationKids_xs: ta.default,
                                navigationKids_selected_xs: ti.default,
                                navigationMuzmarket_xs: to.default,
                                navigationMyVibe_xs: tl.default,
                                navigationMyVibeNDA_xs: tc.default,
                                navigationNonMusic_xs: tf.default,
                                navigationNonMusic_selected_xs: tu.default,
                                navigationPlus_xs: tx.default,
                                navigationSearch_xs: td.default,
                                next_xs: t_.default,
                                note_xs: tp.default,
                                pause_xs: tg.default,
                                pause_filled_xs: tv.default,
                                picture_xs: tm.default,
                                pin_xs: tE.default,
                                pin_filled_xs: tk.default,
                                play_xs: ty.default,
                                playQueue_xs: tw.default,
                                play_filled_xs: tb.default,
                                playlist_xs: th.default,
                                previous_xs: tO.default,
                                repeat_xs: tR.default,
                                repeat_one_xs: tj.default,
                                rewindBackwards_xs: tC.default,
                                rewindForward_xs: tH.default,
                                search_xs: tB.default,
                                settings_xs: tD.default,
                                // for PulseSync: BEGIN register the settings gear icon component
                                settingsGear_xs: tSettingsGear.default,
                                // for PulseSync: END register the settings gear icon component
                                shuffle_xs: tA.default,
                                site_xs: tF.default,
                                speed_1_25x_centered_xs: tS.default,
                                speed_1_5x_centered_xs: tM.default,
                                speed_1_75x_centered_xs: tL.default,
                                speed_1x_centered_xs: tP.default,
                                speed_2x_centered_xs: tT.default,
                                syncLyrics_xs: tN.default,
                                thumbDown_xs: tU.default,
                                thumbUp_xs: tz.default,
                                trailer_xs: tI.default,
                                unavailable_xs: tV.default,
                                volume_xs: tY.default,
                                volumeOff_xs: tK.default,
                                windows_xs: tW.default,
                                adult_s: tq.default,
                                album_s: tG.default,
                                complain_s: tZ.default,
                                dislike_s: tQ.default,
                                disliked_s: tX.default,
                                exclamation_s: tJ.default,
                                explicit_s: t$.default,
                                likedVariant_s: t0.default,
                                note_s: t1.default,
                                pauseVibe_s: t8.default,
                                picture_s: t2.default,
                                playVibe_s: t5.default,
                                playlist_s: t4.default,
                                collections_m: t3.default,
                                collections_selected_m: t7.default,
                                complain_m: t6.default,
                                history_m: t9.default,
                                home_m: re.default,
                                home_selected_m: rt.default,
                                kids_m: rr.default,
                                kids_selected_m: rn.default,
                                like_m: rs.default,
                                liked_m: ra.default,
                                lock_m: ri.default,
                                more_m: ro.default,
                                navigationMuzmarket_m: rl.default,
                                non_music_m: rc.default,
                                non_music_selected_m: rf.default,
                                note_m: ru.default,
                                pause_m: rx.default,
                                pause_filled_m: rd.default,
                                play_m: r_.default,
                                playQueue_m: rp.default,
                                play_filled_m: rg.default,
                                plusOutlined_m: rv.default,
                                ruble_m: rm.default,
                                search_m: rE.default,
                                search_selected_m: rk.default,
                                share_m: ry.default,
                                speed_1_25x_centered_m: rw.default,
                                speed_1_5x_centered_m: rb.default,
                                speed_1_75x_centered_m: rh.default,
                                speed_1x_centered_m: rO.default,
                                speed_2x_centered_m: rR.default,
                                syncLyrics_m: rj.default,
                                ticket_m: rC.default,
                                ticket_selected_m: rH.default,
                                add_l: rB.default,
                                album_l: rD.default,
                                complain_l: rA.default,
                                download_l: rF.default,
                                like_l: rS.default,
                                note_l: rM.default,
                                pause_filled_l: rL.default,
                                play_filled_l: rP.default,
                                search_l: rT.default,
                                speed_1_25x_l: rN.default,
                                speed_1_5x_l: rU.default,
                                speed_1_75x_l: rz.default,
                                speed_1x_l: rI.default,
                                speed_2x_l: rV.default,
                                album_xl: rY.default,
                                clip_xl: rK.default,
                                complain_xl: rW.default,
                                note_xl: rq.default,
                                pause_filled_xl: rG.default,
                                picture_xl: rZ.default,
                                play_filled_xl: rQ.default,
                                playlist_xl: rX.default,
                                unavailable_xl: rJ.default,
                                attention_xxl: r$.default,
                                check_xxl: r0.default,
                                complain_xxl: r1.default,
                                next_xxl: r8.default,
                                offline_xxl: r2.default,
                                pause_filled_xxl: r5.default,
                                play_filled_xxl: r4.default,
                                previous_xxl: r3.default,
                                search_xxl: r7.default,
                                attention_xxxl: r6.default,
                                complain_xxxl: r9.default,
                                bandlink: ne.default,
                                googlePlay: nt.default,
                                huaweiAppGallery: nr.default,
                                kinopoiskEn: nn.default,
                                kinopoiskRu: ns.default,
                                macos: na.default,
                                musicLogo: ni.default,
                                musicLogoCenterEn: no.default,
                                musicLogoCenterRu: nl.default,
                                musicLogoLeftEn: nc.default,
                                musicLogoLeftRu: nf.default,
                                pause: nu.default,
                                play: nx.default,
                                plus: nd.default,
                                plusBadge: n_.default,
                                plusColor: np.default,
                                plusOutlined: ng.default,
                                windows: nv.default,
                                yandexBooksEn: nm.default,
                                yandexBooksRu: nE.default,
                                yandexPayEn: nk.default,
                                yandexPayRu: ny.default,
                                yandexPlusEn: nw.default,
                                yandexPlusRu: nb.default,
                            }));
                    },
                    5404: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0));
                        var n = r(1064);
                        Object.defineProperty(t, 'Icon', {
                            enumerable: !0,
                            get: function () {
                                return n.Icon;
                            },
                        });
                    },
                    7628: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Modal = void 0));
                        let s = r(4377),
                            a = r(5881),
                            i = r(810),
                            o = r(1964),
                            l = r(6544),
                            c = r(7493),
                            f = r(5404),
                            u = r(8903),
                            x = r(5451),
                            d = n(r(5521));
                        t.Modal = (e) => {
                            let {
                                    initialOpen: t = !1,
                                    open: r,
                                    onOpenChange: n,
                                    children: _,
                                    className: p,
                                    labelClose: g,
                                    onClose: v,
                                    placement: m = 'default',
                                    size: E = 'default',
                                    title: k,
                                    header: y,
                                    showHeader: w = !0,
                                    headerClassName: b,
                                    style: h,
                                    contentClassName: O,
                                    overlayClassName: R,
                                    portalNode: j,
                                    closeOnOutsidePress: C = !0,
                                    withOverlay: H = !0,
                                    withAnimation: B = !0,
                                    closeButtonProps: D,
                                    closeButtonDataTestId: A,
                                    containerProps: F,
                                    titleDataTestId: S,
                                    escapeKey: M = !0,
                                    lockScroll: L = !0,
                                    overlayColor: P = 'transparent',
                                    isMobile: T,
                                    disableFocusTrap: N = !1,
                                    disableGuards: U = !1,
                                    restoreFocus: z = !0,
                                    enableSwipe: I = !1,
                                    swipableProps: V = {},
                                    transitionDuration: Y = 300,
                                    customCloseButton: K,
                                    ...W
                                } = e,
                                [q, G] = (0, i.useState)(t),
                                Z = (0, i.useRef)(null),
                                Q = null != r ? r : q,
                                { context: X, refs: J } = (0, o.useFloating)({ open: Q, onOpenChange: null != n ? n : G }),
                                { handlers: $ } = (0, x.useModalSwipeable)({
                                    ref: J.floating,
                                    onClose: v,
                                    placement: m,
                                    disableSwipe: !I || !T || 'center' === m,
                                    swipeableProps: { ...V, preventScrollOnSwipe: I },
                                }),
                                ee = (0, o.useMergeRefs)([J.setFloating, null == $ ? void 0 : $.ref]),
                                et = (0, o.useRole)(X),
                                er = (0, o.useDismiss)(X, { outsidePressEvent: 'mousedown', outsidePress: C, escapeKey: M }),
                                en = (0, o.useClick)(X),
                                { getFloatingProps: es } = (0, o.useInteractions)([et, er, en]),
                                { status: ea } = (0, o.useTransitionStatus)(X),
                                [ei, eo] = (() => {
                                    switch (m) {
                                        case 'default':
                                            return ['translate(-50%, 10%)', 'translate(-50%, 0)'];
                                        case 'center':
                                            return ['translate(-50%, -40%)', 'translate(-50%, -50%)'];
                                        case 'right':
                                            if ('undefined' != typeof document && 'rtl' === document.dir) return ['translateX(-5%)', 'translateX(0)'];
                                            return ['translateX(5%)', 'translateX(0)'];
                                    }
                                })(),
                                { isMounted: el, styles: ec } = (0, o.useTransitionStyles)(X, {
                                    initial: { opacity: 0, transform: ei },
                                    open: { opacity: 1, transform: eo },
                                    duration: Y,
                                }),
                                ef = (0, i.useMemo)(() => {
                                    var e;
                                    return {
                                        ...h,
                                        '--header-height': Z.current ? ''.concat(null == (e = Z.current) ? void 0 : e.clientHeight, 'px') : 0,
                                        ...(B ? ec : {}),
                                        ...(T && (Q || 'close' === ea) && 'center' !== m ? { insetInline: 0, insetBlockEnd: 0, transform: 'none' } : {}),
                                        onMouseDown: null == $ ? void 0 : $.onMouseDown,
                                    };
                                }, [h, B, ec, Q, null == $ ? void 0 : $.onMouseDown, T, ea, m]),
                                eu = (0, i.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []);
                            return el
                                ? (0, s.jsxs)(o.FloatingPortal, {
                                      root: j,
                                      children: [
                                          H &&
                                              (0, s.jsx)(o.FloatingOverlay, {
                                                  className: (0, a.clsx)(d.default.overlay, R, d.default['overlay_'.concat(P)]),
                                                  onClick: eu,
                                              }),
                                          (0, s.jsx)(o.FloatingFocusManager, {
                                              context: X,
                                              guards: !U,
                                              modal: !N,
                                              returnFocus: z,
                                              children: (0, s.jsx)(l.RemoveScroll, {
                                                  enabled: L && Q,
                                                  children: (0, s.jsxs)('div', {
                                                      ...W,
                                                      ref: ee,
                                                      ...es(),
                                                      style: ef,
                                                      className: (0, a.clsx)(
                                                          d.default.root,
                                                          d.default['root_size_'.concat(E)],
                                                          d.default['root_placement_'.concat(m)],
                                                          { [d.default.root_withBlackShadow]: H && 'full' === P },
                                                          p,
                                                      ),
                                                      ...F,
                                                      children: [
                                                          w &&
                                                              (0, s.jsxs)('header', {
                                                                  className: (0, a.clsx)(d.default.header, b),
                                                                  ref: Z,
                                                                  children: [
                                                                      k &&
                                                                          (0, s.jsx)(u.Heading, {
                                                                              className: d.default.title,
                                                                              variant: 'h3',
                                                                              'data-test-id': S,
                                                                              children: k,
                                                                          }),
                                                                      y,
                                                                      null != K
                                                                          ? K
                                                                          : (0, s.jsx)(c.Button, {
                                                                                radius: 'round',
                                                                                size: 'xxs',
                                                                                icon: (0, s.jsx)(f.Icon, { variant: 'close', size: 'xxs' }),
                                                                                onClick: v,
                                                                                'aria-label': g,
                                                                                className: d.default.closeButton,
                                                                                'data-test-id': A,
                                                                                ...D,
                                                                                color: 'secondary',
                                                                            }),
                                                                  ],
                                                              }),
                                                          (0, s.jsx)('div', {
                                                              className: (0, a.clsx)(d.default.content, { [d.default.content_withHeader]: w }, O),
                                                              children: _,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : null;
                        };
                    },
                    3412: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let s = r(4377),
                            a = r(5881),
                            i = r(810),
                            o = r(5987),
                            l = n(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: n = 'text', size: i = 's', className: c, children: f, weight: u = 'medium', ...x } = e;
                            return (0, s.jsx)(o.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_'.concat(n, '_').concat(i)], l.default['root_weight_'.concat(u)], c),
                                ...x,
                                children: f,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, s.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let s = r(4377),
                            a = r(5881),
                            i = r(810),
                            o = r(5987),
                            l = n(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: n = 'bold', size: i = 's', className: c, children: f, ...u } = e;
                            return (0, s.jsx)(o.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(n)], c),
                                ...u,
                                children: f,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, s.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let s = r(4377),
                            a = r(5881),
                            i = r(810),
                            o = n(r(61));
                        function l(e) {
                            let { forwardRef: t, style: r, className: n, children: i, variant: l, lineClamp: c, ...f } = e,
                                u = c && 'string' == typeof i ? i : void 0;
                            return (0, s.jsx)(l, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    o.default.root,
                                    { [o.default.root_clamp]: c && c > 0, [o.default.root_clamp_oneline]: c && 1 === c, [o.default.root_clamp_multiline]: c && c > 1 },
                                    n,
                                ),
                                ...f,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var n = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return n.Caption;
                            },
                        });
                        var s = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return s.Heading;
                            },
                        });
                    },
                    1964: (e) => {
                        e.exports = s;
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                l = {};
            function c(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, c), r.exports);
            }
            ((c.d = (e, t) => {
                for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }),
                (c.nc = void 0));
            var f = {};
            (() => {
                (Object.defineProperty(f, 'X', { value: !0 }), (f.u = void 0));
                var e = c(7628);
                Object.defineProperty(f, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Modal;
                    },
                });
            })();
            var u = f.u;
            f.X;
            // for PulseSync WebHost: BEGIN native addon modal host and form fields
            r.d(t, { AddonModalHost: () => AddonModalHost, NativeField: () => NativeField });
            const pulseSyncNativeModalStyles = {
                root: 'EditContentModal_root__spGT4',
                modalContent: 'EditContentModal_modalContent__uk5Di',
                header: 'EditContentModal_header__F6BJQ',
                title: 'EditContentModal_title__OFu19',
                content: 'EditContentModal_content__6yEGM',
                field: 'EditContentModal_field__rexIL',
                label: 'EditContentModal_label__Cf3Kp',
                input: 'EditContentModal_input__8O8GH',
                input_error: 'EditContentModal_input_error__fxTOr',
                buttons: 'EditContentModal_buttons__bHzfS',
                button: 'EditContentModal_button__usS1Z',
            };
            function NativeField({ field, value, onChange, id, error }) {
                const css = pulseSyncNativeModalStyles,
                    Caption = r(4254).HL;
                const common = {
                    id,
                    disabled: field.disabled,
                    'aria-labelledby': `${id}-label`,
                    'aria-describedby': error ? `${id}-error` : undefined,
                    'aria-invalid': Boolean(error),
                    'aria-required': field.required,
                };
                let control;
                if (field.type === 'text') {
                    control = i.createElement(r(5531).p, {
                        ...common,
                        type: 'text',
                        name: field.name,
                        value,
                        placeholder: field.placeholder,
                        required: field.required,
                        minLength: field.minLength,
                        maxLength: field.maxLength,
                        containerClassName: [css.input, error && css.input_error].filter(Boolean).join(' '),
                        onChange: (event) => onChange(event.target.value),
                    });
                } else if (field.type === 'switch') {
                    control = i.createElement(r(16503).l, {
                        ...common,
                        type: 'button',
                        isChecked: value,
                        onChange,
                    });
                } else if (field.type === 'slider') {
                    const min = field.min ?? 0,
                        max = field.max ?? 100;
                    control = i.createElement(r(9794).A, {
                        ...common,
                        name: field.name,
                        min: 0,
                        maxValue: max - min,
                        step: field.step ?? 1,
                        value: value - min,
                        secondaryValue: max - min,
                        showThumbVariant: 'always',
                        thumbSize: 'm',
                        'aria-valuemin': min,
                        'aria-valuemax': max,
                        'aria-valuenow': value,
                        'aria-valuetext': String(value),
                        onChange: (next) => onChange(Math.min(max, Math.max(min, next + min))),
                    });
                } else if (field.type === 'select') {
                    const dropdown = r(32750),
                        selected = field.options.findIndex((option) => option.value === value);
                    control = i.createElement(dropdown.ms, {
                        isDisabled: field.disabled,
                        defaultValue: selected < 0 ? undefined : `${id}-option-${selected}`,
                        onSelect: (option) => onChange(option.value),
                        reference: i.createElement(
                            r(4071).$,
                            {
                                ...common,
                                type: 'button',
                                size: 'm',
                                radius: 'm',
                            },
                            selected < 0 ? 'Выбрать' : field.options[selected].label,
                        ),
                        children: field.options.map((option, index) =>
                            i.createElement(dropdown.c$, {
                                key: option.value,
                                id: `${id}-option-${index}`,
                                value: option.value,
                                label: option.label,
                                type: 'button',
                            }),
                        ),
                    });
                }
                const isSwitch = field.type === 'switch',
                    isSlider = field.type === 'slider';
                const label = i.createElement(
                    Caption,
                    {
                        id: `${id}-label`,
                        variant: isSwitch ? 'div' : 'label',
                        htmlFor: isSwitch ? undefined : id,
                        size: 'm',
                        className: css.label,
                        style:
                            isSwitch || isSlider
                                ? {
                                      marginBlockEnd: 0,
                                      overflowWrap: 'anywhere',
                                      minWidth: 0,
                                  }
                                : undefined,
                    },
                    field.label,
                );
                const heading = isSlider
                    ? i.createElement(
                          'div',
                          {
                              style: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  gap: 'var(--ym-spacer-size-m)',
                              },
                          },
                          label,
                          i.createElement(
                              Caption,
                              {
                                  variant: 'span',
                                  size: 'm',
                                  className: css.title,
                                  style: {
                                      flexShrink: 0,
                                      fontVariantNumeric: 'tabular-nums',
                                  },
                              },
                              Number(value.toPrecision(12)),
                          ),
                      )
                    : label;
                return i.createElement(
                    'div',
                    {
                        className: css.field,
                        style: isSwitch
                            ? {
                                  display: 'grid',
                                  gridTemplateColumns: 'minmax(0, 1fr) auto',
                                  alignItems: 'center',
                                  columnGap: 'var(--ym-spacer-size-m)',
                                  rowGap: 'var(--ym-spacer-size-xs)',
                              }
                            : isSlider
                              ? {
                                    display: 'grid',
                                    gap: 'var(--ym-spacer-size-m)',
                                }
                              : undefined,
                    },
                    heading,
                    control,
                    error &&
                        i.createElement(
                            Caption,
                            {
                                id: `${id}-error`,
                                variant: 'div',
                                size: 's',
                                role: 'alert',
                                style: isSwitch
                                    ? {
                                          gridColumn: '1 / -1',
                                      }
                                    : undefined,
                            },
                            error,
                        ),
                );
            }
            function AddonModalHost({ modal }) {
                const previous = i.useRef();
                if (modal) previous.current = modal;
                const item = modal ?? previous.current;
                if (!item) return null;
                const css = pulseSyncNativeModalStyles,
                    Button = r(4071).$,
                    Caption = r(4254).HL;
                const close = () => item.respond(false);
                return i.createElement(u, {
                    open: Boolean(modal),
                    onOpenChange: (open) => {
                        if (!open) close();
                    },
                    onClose: close,
                    title: item.title,
                    titleProps: {
                        id: `${item.id}-title`,
                        size: 'm',
                        style: {
                            overflowWrap: 'anywhere',
                        },
                    },
                    labelClose: 'Закрыть',
                    className: css.root,
                    headerClassName: css.header,
                    contentClassName: css.modalContent,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    containerProps: {
                        'aria-labelledby': `${item.id}-title`,
                        'aria-describedby': `${item.id}-message`,
                        'data-pulsesync-addon-modal': '',
                    },
                    children: i.createElement(
                        item.kind === 'form' ? 'form' : 'div',
                        {
                            className: css.content,
                            ...(item.kind === 'form'
                                ? {
                                      noValidate: true,
                                      onSubmit: (event) => {
                                          event.preventDefault();
                                          item.respond(true);
                                      },
                                  }
                                : {}),
                        },
                        i.createElement(
                            Caption,
                            {
                                id: `${item.id}-message`,
                                className: css.field,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                style: {
                                    whiteSpace: 'pre-wrap',
                                    overflowWrap: 'anywhere',
                                },
                            },
                            item.message,
                        ),
                        item.fields?.map((field) =>
                            i.createElement(NativeField, {
                                key: field.name,
                                field,
                                id: `${item.id}-${field.name}`,
                                value: item.values[field.name],
                                error: item.errors?.[field.name],
                                onChange: (value) => item.change(field.name, value),
                            }),
                        ),
                        i.createElement(
                            'div',
                            {
                                className: css.buttons,
                            },
                            item.kind !== 'alert' &&
                                i.createElement(
                                    Button,
                                    {
                                        type: 'button',
                                        radius: 'xxxl',
                                        color: 'secondary',
                                        size: 'm',
                                        className: css.button,
                                        onClick: close,
                                    },
                                    item.cancelLabel,
                                ),
                            i.createElement(
                                Button,
                                {
                                    type: item.kind === 'form' ? 'submit' : 'button',
                                    radius: 'xxxl',
                                    color: 'primary',
                                    size: 'm',
                                    className: css.button,
                                    onClick: item.kind === 'form' ? undefined : () => item.respond(true),
                                },
                                item.confirmLabel,
                            ),
                        ),
                    ),
                });
            }
            // for PulseSync WebHost: END native addon modal host and form fields
        },
    },
]);
