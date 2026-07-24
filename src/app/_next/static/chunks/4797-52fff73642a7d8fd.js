(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4797],
    {
        3104: (e) => {
            e.exports = {
                root: 'Tab_root__LUukY',
                image: 'Tab_image__Hen3_',
                tab_size_s: 'Tab_tab_size_s__zXitP',
                tab_size_m: 'Tab_tab_size_m__c7tVg',
                tab_size_l: 'Tab_tab_size_l__goM4A',
                tab_withCovers: 'Tab_tab_withCovers__dJzMH',
                tab_withMissingCovers: 'Tab_tab_withMissingCovers__RzwR0',
                covers: 'Tab_covers__cvYeI',
                description: 'Tab_description__p1fTO',
                title: 'Tab_title__hAYZk',
                subtitle: 'Tab_subtitle__fLp9S',
                shimmerTitle: 'Tab_shimmerTitle__eQFFI',
                shimmerSubtitle: 'Tab_shimmerSubtitle__0Yf3E',
            };
        },
        4340: (e) => {
            e.exports = { root: 'TabCarousel_root__8DoRy' };
        },
        8946: (e, t, r) => {
            'use strict';
            r.d(t, { wI: () => F, zr: () => B, nR: () => E });
            var o = r(32290),
                a = r(63618),
                i = r(55178),
                n = r(21732),
                l = r(15299),
                s = r(79856),
                c = r(86095),
                _ = r(53394),
                u = r.n(_);
            let d = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsxs)('div', {
                        className: (0, a.$)(u().root, u().root_withCovers),
                        children: [
                            (0, o.jsx)(c.E, { width: 36 }),
                            (0, o.jsxs)('div', {
                                className: u().lines,
                                children: [
                                    (0, o.jsx)(s.W, { isActive: t, width: 98, className: u().title }),
                                    (0, o.jsx)(s.W, { isActive: t, width: 85, className: u().subtitle }),
                                ],
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { isActive: t, className: r } = e;
                    return (0, o.jsx)('div', {
                        className: (0, a.$)(u().root, r),
                        children: (0, o.jsx)('div', { className: u().lines, children: (0, o.jsx)(s.W, { isActive: t, width: 78, className: u().title }) }),
                    });
                };
            var m = r(4340),
                A = r.n(m);
            let f = (e) => {
                    let { isShimmerVisible: t, value: r, shimmer: i, children: n, onTabChange: s, className: c, elementId: _, forwardRef: u, ...d } = e;
                    return t && i ? i : (0, o.jsx)(l.tU, { className: (0, a.$)(A().root, c), value: r, elementId: _, onTabChange: s, ref: u, ...d, children: n });
                },
                B = (e) => {
                    let { isActive: t, className: r, shimmerClassName: i, count: n = 2 } = e;
                    return (0, o.jsx)('div', {
                        className: (0, a.$)(A().root, r),
                        children: Array.from({ length: n }, (e, r) => (0, o.jsx)(C, { isActive: t, className: i }, r)),
                    });
                },
                E = (e) => {
                    let { className: t, isActive: r, count: i = 2 } = e;
                    return (0, o.jsx)('div', { className: (0, a.$)(A().root, t), children: Array.from({ length: i }, (e, t) => (0, o.jsx)(d, { isActive: r }, t)) });
                },
                F = (0, i.forwardRef)((e, t) => {
                    let { ...r } = e;
                    return (0, o.jsx)(f, { forwardRef: t, ...r, 'data-test-id': n.S7.TAB_CAROUSEL });
                });
        },
        15299: (e, t, r) => {
            'use strict';
            r.d(t, { Kp: () => u, oz: () => _, tU: () => d, zb: () => C });
            var o,
                a = r(80451),
                i = r(55178),
                n = {
                    5881: (e, t, r) => {
                        function o() {
                            for (var e, t, r = 0, o = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (o = e(t[r])) && (a && (a += ' '), (a += o));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        r.r(t), r.d(t, { clsx: () => o, default: () => a });
                        let a = o;
                    },
                    7122: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
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
                    2801: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = { root: 'd50IqTKJZhJIMd5aTqAn', button: 'Yqh9GVOagMQpvymD877t', button_active: 'cBxrIXbcPeS3kSzdJdhS' };
                    },
                    9076: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = { root: 'oSPcFawW7MIQ9ZTANH9N' };
                    },
                    8910: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = { root: 'TjoCDDIf5PrIGU4w8G6Z' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((o = {}), t)) 'key' !== i && (o[i] = t[i]);
                            else o = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
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
                                let r = t.LIGHTNESS_COLOR_BUCKETS.find((r, o) =>
                                    ((e, r, o) => (o === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? r >= e.start && r <= e.end : r >= e.start && r < e.end))(r, e, o),
                                );
                                return (0, t.findColorBucketByName)(null == r ? void 0 : r.name);
                            });
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, r) {
                                let o = null != r ? r : e.currentTarget,
                                    a = document.createElement('span'),
                                    i = Math.max(o.clientWidth, o.clientHeight),
                                    n = i / 2,
                                    l = o.getBoundingClientRect(),
                                    s = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                                    c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                                (a.style.width = ''.concat(i, 'px')),
                                    (a.style.height = ''.concat(i, 'px')),
                                    (a.style.left = 0 === e.clientX ? '0px' : ''.concat(s - n, 'px')),
                                    (a.style.top = ''.concat(c - n, 'px')),
                                    a.classList.add(t);
                                let _ = o.getElementsByClassName(t)[0];
                                _ && _.remove(), o.insertBefore(a, o.firstChild);
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
                    768: (e, t, r) => {
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
                        let o = r(2660),
                            a = r(7858);
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
                        let i = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        (t.getVibePaletteByBucketName = (e) => {
                            let r = (0, a.findColorBucketByName)(e);
                            return r ? i(r) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, o.hexToHsl)(e),
                                    r = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === r ? (0, a.findColorBucketByHue)(t.h) : (0, a.findColorBucketByLightness)(t.l), hsl: t, mode: r };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: r } = (0, t.getVibeColorBucketSelection)(e);
                                return r ? i(r) : t.FALLBACK_PALETTE;
                            });
                    },
                    8216: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0);
                        var o = r(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return o.createRipple;
                            },
                        });
                        var a = r(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return a.getElementFromRefOrElement;
                            },
                        });
                        var i = r(768);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return i.getVibePaletteColors;
                            },
                        });
                    },
                    8119: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let a = r(4377),
                            i = r(810),
                            n = r(5881),
                            l = r(8216),
                            s = o(r(7122)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: o = 'left',
                                        children: c,
                                        className: _,
                                        color: u = 'secondary',
                                        flexIcon: d,
                                        icon: C,
                                        spinner: m,
                                        role: A,
                                        onClick: f,
                                        radius: B = 'm',
                                        size: E,
                                        type: F = 'button',
                                        variant: D = 'default',
                                        withRipple: p = !0,
                                        withHover: h = !0,
                                        withBorder: b = !1,
                                        disabled: v,
                                        iconClassName: y,
                                        contentContainerClassName: T,
                                        ...x
                                    } = e,
                                    S = (0, i.useId)(),
                                    g = !i.Children.toArray(c).filter(Boolean).length,
                                    R = 'left' === o,
                                    w = null,
                                    j = (0, i.isValidElement)(m);
                                if (C) {
                                    var O, P;
                                    w = (0, i.cloneElement)(C, {
                                        className: (0, n.clsx)(
                                            s.default.icon,
                                            {
                                                [s.default['icon_position_'.concat(o)]]: o && !g,
                                                [s.default.icon_withButtonSize]: !(null == (O = C.props) ? void 0 : O.size),
                                            },
                                            null == (P = C.props) ? void 0 : P.className,
                                            y,
                                        ),
                                        key: S,
                                    });
                                }
                                let M = (0, i.useMemo)(() => (j ? (0, a.jsx)('div', { className: s.default.spinnerContainer, children: m }) : null), [j, m]),
                                    N = (0, i.useCallback)(
                                        (e) => {
                                            j || (p && (0, l.createRipple)(e, s.default.ripple), null == f || f(e));
                                        },
                                        [j, f, p],
                                    );
                                return (0, a.jsx)('button', {
                                    ref: t,
                                    className: (0, n.clsx)(
                                        s.default.root,
                                        s.default['root_'.concat(u, '_').concat(D)],
                                        s.default['root_radius_'.concat(B)],
                                        s.default.root_size,
                                        {
                                            [s.default['root_'.concat(u, '_withHover_').concat(D)]]: h && !v && !j,
                                            [s.default['root_size_'.concat(E)]]: E,
                                            [s.default.root_withoutBorder]: !b,
                                            [s.default.root_withActiveSpinner]: j,
                                            [s.default.block]: r,
                                            [s.default.flexIcon]: d,
                                            [s.default.iconOnly]: g,
                                            [s.default.root_icon_left]: C && !g && R,
                                            [s.default.root_icon_right]: C && !g && !R,
                                        },
                                        _,
                                    ),
                                    type: F,
                                    role: A,
                                    onClick: N,
                                    ...x,
                                    disabled: v,
                                    'aria-live': j ? 'polite' : 'off',
                                    'aria-busy': j,
                                    children:
                                        C || j
                                            ? (0, a.jsxs)('span', {
                                                  className: (0, n.clsx)(s.default.contentContainer, { [s.default.contentContainer_block]: r }, T),
                                                  children: [C && R && w, !g && c, C && !R && w, M],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, i.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var o = r(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return o.Button;
                            },
                        });
                    },
                    848: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tab = void 0);
                        let a = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = r(5928),
                            s = o(r(2801));
                        t.Tab = (e) => {
                            let {
                                    className: t,
                                    onTabChange: r,
                                    active: o,
                                    value: c,
                                    loadingComponent: _,
                                    isLoadingInProgress: u,
                                    children: d,
                                    elementId: C = '',
                                    ...m
                                } = e,
                                A = (0, n.useCallback)(() => {
                                    null == r || r(c);
                                }, [r, c]);
                            return u
                                ? _
                                : (0, a.jsx)('li', {
                                      className: s.default.root,
                                      children: (0, a.jsx)(l.Button, {
                                          className: (0, i.clsx)(s.default.button, { [s.default.button_active]: o }, t),
                                          onClick: A,
                                          role: 'tab',
                                          id: ''.concat(C, '-').concat(c, '-tab'),
                                          'aria-controls': ''.concat(C, '-').concat(c, '-tabpanel'),
                                          'aria-selected': o,
                                          ...m,
                                          children: d,
                                      }),
                                  });
                        };
                    },
                    8778: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.TabPanel = void 0);
                        let a = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = o(r(9076)),
                            s = (e) => {
                                let { className: t, name: r, value: o, children: n, elementId: s = '', forwardRef: c, ..._ } = e;
                                return (0, a.jsx)('div', {
                                    className: (0, i.clsx)(l.default.root, t),
                                    role: 'tabpanel',
                                    hidden: o !== r,
                                    id: ''.concat(s, '-').concat(o, '-tabpanel'),
                                    'aria-labelledby': ''.concat(s, '-').concat(o, '-tab'),
                                    ref: c,
                                    ..._,
                                    children: o === r && n,
                                });
                            };
                        t.TabPanel = (0, n.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
                    },
                    2044: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tabs = t.useTabsState = void 0);
                        let a = r(4377),
                            i = r(5881),
                            n = r(810),
                            l = o(r(8910));
                        t.useTabsState = (e) => {
                            let [t, r] = (0, n.useState)(e);
                            (0, n.useLayoutEffect)(() => {
                                r(e);
                            }, [e]);
                            let o = (0, n.useCallback)((e) => {
                                r(e);
                            }, []);
                            return (0, n.useMemo)(() => ({ value: t, onTabChange: o }), [t, o]);
                        };
                        let s = (e) => {
                            let { className: t, variant: r = 'default', value: o, disabled: s, onTabChange: c, children: _, forwardRef: u, elementId: d = '', ...C } = e;
                            return (0, a.jsx)('ol', {
                                className: (0, i.clsx)(l.default.root, l.default['root_variant_'.concat(r)], t),
                                ref: u,
                                role: 'tablist',
                                ...C,
                                children:
                                    _ && n.Children.map(_, (e) => (0, n.cloneElement)(e, { onTabChange: c, active: e.props.value === o, disabled: s, elementId: d })),
                            });
                        };
                        t.Tabs = (0, n.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(i, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return n[e].call(r.exports, r, r.exports, s), r.exports;
            }
            (s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var c = {};
            (() => {
                Object.defineProperty(c, 'X$', { value: !0 }), (c.x4 = c.OK = c.nT = c.mQ = void 0);
                var e = s(2044);
                Object.defineProperty(c, 'mQ', {
                    enumerable: !0,
                    get: function () {
                        return e.Tabs;
                    },
                }),
                    Object.defineProperty(c, 'nT', {
                        enumerable: !0,
                        get: function () {
                            return e.useTabsState;
                        },
                    });
                var t = s(848);
                Object.defineProperty(c, 'OK', {
                    enumerable: !0,
                    get: function () {
                        return t.Tab;
                    },
                });
                var r = s(8778);
                Object.defineProperty(c, 'x4', {
                    enumerable: !0,
                    get: function () {
                        return r.TabPanel;
                    },
                });
            })();
            var _ = c.OK,
                u = c.x4,
                d = c.mQ;
            c.X$;
            var C = c.nT;
        },
        36989: (e) => {
            e.exports = { root: 'TabCoversShimmers_root__0Uskz', cover: 'TabCoversShimmers_cover__HZu32' };
        },
        45180: (e, t, r) => {
            'use strict';
            r.d(t, { o: () => m });
            var o = r(32290),
                a = r(63618),
                i = r(55178),
                n = r(21732),
                l = r(79856),
                s = r(15299),
                c = r(71926),
                _ = r(11323),
                u = r(86095),
                d = r(3104),
                C = r.n(d);
            let m = (e) => {
                let {
                        className: t,
                        value: r,
                        title: d,
                        subtitle: m,
                        covers: A,
                        titleClassName: f,
                        withCovers: B,
                        withHeading: E,
                        withSubtitle: F,
                        isShimmerVisible: D,
                        ...p
                    } = e,
                    h = (0, i.useMemo)(
                        () =>
                            E
                                ? (0, o.jsx)(c.DZ, { className: (0, a.$)(C().title, f), variant: 'div', size: 'xs', weight: 'bold', lineClamp: 1, children: d })
                                : (0, o.jsx)(c.HL, {
                                      className: (0, a.$)(C().title, f),
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      weight: 'bold',
                                      lineClamp: 1,
                                      children: d,
                                  }),
                        [d, f, E],
                    ),
                    b = (0, i.useMemo)(
                        () =>
                            B && !A && D
                                ? (0, o.jsx)(u.E, { width: 36, count: 1 })
                                : A
                                  ? (0, o.jsx)('span', {
                                        className: C().covers,
                                        children: A.map((e, t) => (0, o.jsx)(_.B, { className: C().image, src: e, fit: 'cover', size: 50, withAvatarReplace: !0 }, t)),
                                    })
                                  : null,
                        [A, D, B],
                    ),
                    v = (0, i.useMemo)(
                        () =>
                            F && !m && D
                                ? (0, o.jsx)(l.W, { isActive: !0, width: 84, className: C().shimmerSubtitle })
                                : m
                                  ? (0, o.jsx)(c.HL, {
                                        className: C().subtitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 's',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: m,
                                    })
                                  : null,
                        [D, m, F],
                    );
                return (0, o.jsxs)(s.oz, {
                    value: r,
                    className: (0, a.$)(
                        C().root,
                        { [C().tab_size_s]: !F && B, [C().tab_size_m]: !F && !B, [C().tab_withCovers]: B, [C().tab_withMissingCovers]: B && !A },
                        t,
                    ),
                    'data-test-id': n.S7.TAB,
                    ...p,
                    children: [b, (0, o.jsxs)('span', { className: C().description, children: [h, v] })],
                });
            };
        },
        53394: (e) => {
            e.exports = {
                root: 'TabShimmer_root__NGwwm',
                root_withCovers: 'TabShimmer_root_withCovers__ZPmX0',
                covers: 'TabShimmer_covers__eLlh6',
                cover: 'TabShimmer_cover__uiC2w',
                lines: 'TabShimmer_lines__fbU4_',
                title: 'TabShimmer_title__qhG5i',
                subtitle: 'TabShimmer_subtitle__JuLWD',
            };
        },
        86095: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => s });
            var o = r(32290),
                a = r(63618),
                i = r(79856),
                n = r(36989),
                l = r.n(n);
            let s = (e) => {
                let { isActive: t, count: r = 2, className: n, width: s } = e;
                return (0, o.jsx)('div', {
                    className: (0, a.$)(l().root, n),
                    children: Array.from({ length: r }, (e, r) => (0, o.jsx)(i.W, { isActive: t, width: s, className: l().cover, radius: 'round' }, r)),
                });
            };
        },
    },
]);
