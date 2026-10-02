(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9318],
    {
        589: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        929: (e) => {
            e.exports = {
                menuContent: 'ContextMenuAddTracksToPlaylistItem_menuContent__xq7AW',
                playlistList: 'ContextMenuAddTracksToPlaylistItem_playlistList__B4kxD',
                virtualPlaylistList: 'ContextMenuAddTracksToPlaylistItem_virtualPlaylistList__iC936',
                virtualPlaylistItem: 'ContextMenuAddTracksToPlaylistItem_virtualPlaylistItem__c7vyn',
                searchSection: 'ContextMenuAddTracksToPlaylistItem_searchSection__XKQcm',
                searchField: 'ContextMenuAddTracksToPlaylistItem_searchField__02VVy',
                playlistItemIcon: 'ContextMenuAddTracksToPlaylistItem_playlistItemIcon__76dbD',
                playlistItemShimmer: 'ContextMenuAddTracksToPlaylistItem_playlistItemShimmer__2WkFc',
                playlistItem: 'ContextMenuAddTracksToPlaylistItem_playlistItem___kFlm',
                emptyState: 'ContextMenuAddTracksToPlaylistItem_emptyState__vrM8b',
                createPlaylistButton: 'ContextMenuAddTracksToPlaylistItem_createPlaylistButton__IlAeY',
                menuDivider: 'ContextMenuAddTracksToPlaylistItem_menuDivider__oZg1N',
            };
        },
        1230: (e) => {
            e.exports = { root: 'PageHeaderPlaylistBrandingLink_root__7dQVL' };
        },
        6519: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylist_root__yJBii',
                trailerControl: 'PageHeaderPlaylist_trailerControl__grrD9',
                pinControl: 'PageHeaderPlaylist_pinControl__hJOde',
                downloadControl: 'PageHeaderPlaylist_downloadControl__ijcAx',
                menuControl: 'PageHeaderPlaylist_menuControl__RGH0G',
                likeControl: 'PageHeaderPlaylist_likeControl__bCypn',
                controls: 'PageHeaderPlaylist_controls__uSwwK',
                mainControls: 'PageHeaderPlaylist_mainControls__k_S_i',
                ugcControls: 'PageHeaderPlaylist_ugcControls__9q8Ne',
            };
        },
        7134: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        9552: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        10499: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => r, gj: () => i }), a(12797));
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: i } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (i.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (i.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                r = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        10944: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(25839),
                r = a(82298),
                l = a(88204),
                n = a(74631),
                s = a(23976),
                o = a(27954),
                d = a(56918),
                c = a.n(d);
            let u = (0, l.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: l } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, o.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, i.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, i.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(s.W, { className: c().desktopPlayButton, isActive: l }),
                                          (0, i.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, i.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, i.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  }),
                        [l, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(c().root, t),
                    children: [
                        (0, i.jsx)(s.W, { className: c().cover, radius: a, isActive: l }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(s.W, { className: c().entityName, radius: 's', isActive: l }),
                                        (0, i.jsx)(s.W, { className: c().title, radius: 'xl', isActive: l }),
                                        (0, i.jsx)(s.W, { className: c().meta, radius: 's', isActive: l }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        11560: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => l });
            var i = a(25839),
                r = a(89288);
            let l = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, r.Gr)(a) } });
            };
        },
        16503: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => c });
            var i,
                r = a(95759),
                l = a(74631),
                n = {
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
                    2850: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
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
                    1561: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
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
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    r = document.createElement('span'),
                                    l = Math.max(i.clientWidth, i.clientHeight),
                                    n = l / 2,
                                    s = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    d = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                ((r.style.width = ''.concat(l, 'px')),
                                    (r.style.height = ''.concat(l, 'px')),
                                    (r.style.left = 0 === e.clientX ? '0px' : ''.concat(o - n, 'px')),
                                    (r.style.top = ''.concat(d - n, 'px')),
                                    r.classList.add(t));
                                let c = i.getElementsByClassName(t)[0];
                                (c && c.remove(), i.insertBefore(r, i.firstChild));
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
                        let l = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, r.findColorBucketByName)(e);
                            return a ? l(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, r.findColorBucketByHue)(t.h) : (0, r.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? l(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var r = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return r.getElementFromRefOrElement;
                            },
                        });
                        var l = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return l.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let r = a(4377),
                            l = a(810),
                            n = a(5881),
                            s = a(6882),
                            o = i(a(2850)),
                            d = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: i = 'left',
                                        children: d,
                                        className: c,
                                        color: u = 'secondary',
                                        flexIcon: p,
                                        icon: m,
                                        spinner: _,
                                        role: y,
                                        onClick: g,
                                        radius: v = 'm',
                                        size: A,
                                        type: h = 'button',
                                        variant: f = 'default',
                                        withRipple: C = !0,
                                        withHover: x = !0,
                                        withBorder: P = !1,
                                        disabled: E,
                                        focusableWhenDisabled: T,
                                        'aria-disabled': b,
                                        iconClassName: S,
                                        contentContainerClassName: k,
                                        ...L
                                    } = e,
                                    D = (0, l.useId)(),
                                    I = !l.Children.toArray(d).filter(Boolean).length,
                                    j = 'left' === i,
                                    N = null,
                                    B = (0, l.isValidElement)(_);
                                if (m) {
                                    var R, O;
                                    N = (0, l.cloneElement)(m, {
                                        className: (0, n.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(i)]]: i && !I,
                                                [o.default.icon_withButtonSize]: !(null == (R = m.props) ? void 0 : R.size),
                                            },
                                            null == (O = m.props) ? void 0 : O.className,
                                            S,
                                        ),
                                        key: D,
                                    });
                                }
                                let F = (0, l.useMemo)(() => (B ? (0, r.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [B, _]),
                                    w = (0, l.useCallback)(
                                        (e) => {
                                            if (E) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            B || (C && (0, s.createRipple)(e, o.default.ripple), null == g || g(e));
                                        },
                                        [E, B, g, C],
                                    );
                                return (0, r.jsx)('button', {
                                    ref: t,
                                    className: (0, n.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(f)],
                                        o.default['root_radius_'.concat(v)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(f)]]: x && !E && !B,
                                            [o.default['root_size_'.concat(A)]]: A,
                                            [o.default.root_withoutBorder]: !P,
                                            [o.default.root_withActiveSpinner]: B,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: p,
                                            [o.default.iconOnly]: I,
                                            [o.default.root_icon_left]: m && !I && j,
                                            [o.default.root_icon_right]: m && !I && !j,
                                        },
                                        c,
                                    ),
                                    type: h,
                                    role: y,
                                    onClick: w,
                                    ...L,
                                    disabled: E && !T,
                                    'aria-disabled': (E && T) || b,
                                    'data-disabled': E || void 0,
                                    'aria-live': B ? 'polite' : 'off',
                                    'aria-busy': B,
                                    children:
                                        m || B
                                            ? (0, r.jsxs)('span', {
                                                  className: (0, n.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, k),
                                                  children: [m && j && N, !I && d, m && !j && N, F],
                                              })
                                            : d,
                                });
                            };
                        t.Button = (0, l.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
                    },
                    7493: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        var i = a(7291);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return i.Button;
                            },
                        });
                    },
                    9037: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0));
                        let r = a(4377),
                            l = a(5881),
                            n = a(810),
                            s = a(7493),
                            o = i(a(1561)),
                            d = (e) => {
                                let { isChecked: t } = e;
                                return (0, r.jsx)('div', { className: (0, l.clsx)(o.default.icon, { [o.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: a = !1, onChange: i, 'aria-label': c, 'aria-describedby': u, ...p } = e,
                                [m, _] = (0, n.useState)(a),
                                y = (0, n.useCallback)(() => {
                                    let e = !m;
                                    (_(e), null == i || i(e));
                                }, [m, i]);
                            return (
                                (0, n.useEffect)(() => {
                                    _(a);
                                }, [a]),
                                (0, r.jsx)(s.Button, {
                                    className: (0, l.clsx)(o.default.root, { [o.default.root_checked]: m }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, r.jsx)(d, { isChecked: m }),
                                    withRipple: !1,
                                    onClick: y,
                                    role: 'switch',
                                    'aria-checked': m,
                                    'aria-label': c,
                                    'aria-describedby': u,
                                    ...p,
                                    color: m ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    2660: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X', { value: !0 }), (d.Z = void 0));
                var e = o(9037);
                Object.defineProperty(d, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var c = d.Z;
            d.X;
        },
        16978: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var i = a(25839),
                r = a(84059),
                l = a(8487),
                n = a(61493),
                s = a(71035),
                o = a(4071),
                d = a(4254),
                c = a(57024),
                u = a(36484),
                p = a(62562);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: y, isBlock: g, key: v, className: A } = e,
                    h = (0, r.useRouter)(),
                    f = (0, p.N)().get(u.QG),
                    C = (0, s.c)(() => {
                        f.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(f.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: C,
                        className: A,
                        isBlock: g,
                        color: m,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: y || (0, i.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        17226: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        18382: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => im });
            var i = a(25839),
                r = a(82298),
                l = a(88204),
                n = a(84059),
                s = a(74631),
                o = a(39004),
                d = a(36619),
                c = a(61493),
                u = a(72115),
                p = a(78299),
                m = a(89725),
                _ = a(27669),
                y = a(92511),
                g = a(25469),
                v = a(59911),
                A = a(1407),
                h = a(20258),
                f = a(22293),
                C = a(83243),
                x = a(95858),
                P = a(10322),
                E = a(39058),
                T = a(58509),
                b = a(89192),
                S = a(30716),
                k = a(27954),
                L = a(10603),
                D = a(6968),
                I = a(61732),
                j = a(47127),
                N = a(11871),
                B = a(12234),
                R = a(89221),
                O = a(27935),
                F = a(41016),
                w = a(80461),
                U = a(22403),
                M = a(95445);
            async function H(e, t) {
                var a, i, r, l, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, R.W)(t.locale),
                    o = null != (i = e.ogTitle) ? i : (0, U.Y)(e.title, 48, !1),
                    d = s({ id: 'metadata.playlist-title' }, { playlistTitle: e.title });
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: d,
                          description: d,
                          openGraph: (0, O.i)({
                              ogTitle: o,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: i } = e,
                                      r = '';
                                  return (
                                      a.ogDescription ? (r = a.ogDescription) : a.description && (r = a.description.replace(/\[(.*?)\]\(.*?\)/gi, '$1')),
                                      [
                                          (r = (0, U.Y)(r, 96, !1)),
                                          i({ id: 'metadata.playlist' }),
                                          (null != (t = a.likesCount) ? t : 0) > 0 && i({ id: 'metadata.likes-counter' }, { counter: a.likesCount }),
                                      ]
                                          .filter(Boolean)
                                          .join(' • ')
                                  );
                              })({ playlistMeta: e, messageFormatter: s }),
                              fullUrl: null != (r = t.fullUrl) ? r : '',
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: s({ id: 'metadata.yandex-music' }),
                              ogType: 'music.playlist',
                          }),
                          twitter: (0, F.H)({ cardType: w.W.APP, title: o, url: t.url, appName: s({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, B.X)({
                              additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                              appName: s({ id: 'metadata.yandex-music' }),
                          }),
                          alternates: (0, M.S)('/playlists/:playlistUuid', t.tld, { params: { playlistUuid: e.playlistUuid } }),
                      }
                    : { robots: { index: !1, follow: !1 } };
            }
            var Y = a(78143),
                W = a(21213),
                z = a(49337),
                K = a(96618),
                G = a(43354),
                V = a(25895),
                q = a(7134),
                X = a.n(q),
                $ = a(74268),
                Q = a(37588),
                Z = a.n(Q);
            let J = (0, l.PA)(
                (0, s.forwardRef)((e, t) => {
                    var a;
                    let { children: l, 'data-index': n, ...o } = e,
                        { playlist: d } = (0, k.g)(),
                        {
                            isDragging: c,
                            listeners: u,
                            setNodeRef: p,
                            transform: m,
                            transition: _,
                            attributes: y,
                        } = (0, $.gl)({ id: String(null == (a = d.items[n]) ? void 0 : a.key) }),
                        g = (0, s.useCallback)(
                            (e) => {
                                (p(e), 'function' == typeof t && t(e));
                            },
                            [t, p],
                        ),
                        v = { transition: _, '--translate-y': m ? ''.concat(Math.round(m.y), 'px') : void 0 };
                    return (0, i.jsx)('div', {
                        ref: g,
                        'data-index': n,
                        style: v,
                        ...o,
                        className: Z().root,
                        children: (0, i.jsx)('div', { className: (0, r.$)(Z().inner, { [Z().dragging]: c }), ...u, ...y, children: l }),
                    });
                }),
            );
            var ee = a(98797),
                et = a(10499),
                ea = a(71910),
                ei = a(24252);
            let er = (e, t) => {
                var a;
                let i = t - 1;
                if (!e.items.length || i < 0 || i > e.items.length) return '';
                let r = e.items[i];
                return (null == r || null == (a = r.data) ? void 0 : a.title) || '';
            };
            var el = a(86064),
                en = a(27264),
                es = a(45146),
                eo = a(91149),
                ed = a(92942),
                ec = a(57549),
                eu = a(22939),
                ep = a(84117),
                em = a(40110),
                e_ = a(57138),
                ey = a(95314),
                eg = a(30290),
                ev = a(3718),
                eA = a(97805),
                eh = a(80278),
                ef = a.n(eh),
                eC = a(88033),
                ex = a(51549),
                eP = a(4254),
                eE = a(44806),
                eT = a(81798),
                eb = a.n(eT);
            let eS = (0, l.PA)((e) => {
                    var t, a, r, l, n;
                    let { item: o } = e,
                        { playlist: d, experiments: c } = (0, k.g)(),
                        { shouldShowMajor: u, shouldShowGenre: p, shouldShowDuplicate: m } = d.editorFeature,
                        _ = c.checkExperiment(eE.z.WebEditorsFeatures, 'on'),
                        y = m && d.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!_ || !o || (!p && !u && !y)) return null;
                    let g = [],
                        v = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        A = null == (n = o.data) || null == (l = n.albums) || null == (r = l[0]) ? void 0 : r.genre;
                    if ((y && g.push('№'.concat(y)), u && v)) {
                        let e = d.editorFeature.getColorForMajor(v),
                            t = (0, i.jsx)('span', { className: eb().major, style: { '--major-color': e }, children: v });
                        g.push(t);
                    }
                    if ((p && A && g.push(A), !g.length)) return null;
                    let h = g.map((e, t, a) => (0, i.jsxs)(s.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, i.jsxs)(eP.HL, { className: eb().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', h, '] \xa0'] });
                }),
                ek = (0, l.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: r, isDragging: l, draggingClassName: n, from: s, utmLink: d, index: c, className: u } = e,
                        { playlist: p } = (0, k.g)(),
                        { formatMessage: m } = (0, o.A)(),
                        { removeTrackFromPlaylist: _, canRemoveTrackFromPlaylist: y } = (0, eC.s)();
                    return (0, i.jsx)(ex.K, {
                        beforeTitle: (0, i.jsx)(eS, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: r,
                        isDragging: l,
                        track: a,
                        handleRemove: y ? _ : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: { type: eu.K.Playlist, meta: p.contextMeta, from: s, utmLink: d },
                            entitiesData: p.playbackEntitiesData,
                            queueParams: { index: c },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: m({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                });
            var eL = a(82967);
            let eD = (0, l.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: l, isDragging: n, draggingClassName: s, from: d, utmLink: c, index: u, className: p } = e,
                        { playlist: m } = (0, k.g)(),
                        { formatMessage: _ } = (0, o.A)(),
                        { removeTrackFromPlaylist: y, canRemoveTrackFromPlaylist: g } = (0, eC.s)();
                    return (0, i.jsx)(eL.K, {
                        beforeTitle: (0, i.jsx)(eS, { item: t }),
                        withDNDBlock: l,
                        isDragging: n,
                        track: a,
                        handleRemove: g ? y : void 0,
                        draggingClassName: s,
                        playContextParams: {
                            contextData: {
                                type: eu.K.Playlist,
                                meta: m.contextMeta,
                                from: d,
                                utmLink: c,
                                filter: m.filters.activeFilter,
                                filterName: m.filters.activeFilterName,
                                enableVariousAutoFlow: m.enableVariousAutoFlow,
                            },
                            entitiesData: m.playbackEntitiesData,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: _({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, r.$)(p, { [ef().isDuplicate]: m.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                eI = (0, l.PA)((e) => {
                    var t, a, l, n, s;
                    let o,
                        { index: c, className: u, isDragging: p, draggingClassName: m } = e,
                        { playlist: _ } = (0, k.g)(),
                        y = (null == (t = _.meta) ? void 0 : t.uuid) || _.uuid,
                        { from: g, utmLink: v } = (0, eg.f)({ pageId: h._Q.PLAYLIST, blockId: em.U.PLAYLIST, pageEntityId: y, contextType: eu.K.Playlist, contextId: y }),
                        A = _.isDragAndDropEnabled,
                        f = null == (a = _.items) ? void 0 : a[c];
                    return (
                        (o =
                            f && f.data && _.meta
                                ? f.data.isTrackNonMusic || (null == (l = f.data.mainAlbum) ? void 0 : l.isNonMusic)
                                    ? (0, i.jsx)(ek, {
                                          item: f,
                                          withDNDBlock: A,
                                          isDragging: p,
                                          from: g,
                                          index: c,
                                          track: f.data,
                                          utmLink: v,
                                          draggingClassName: m,
                                          className: u,
                                      })
                                    : (0, i.jsx)(eD, {
                                          item: f,
                                          from: g,
                                          index: c,
                                          track: f.data,
                                          withDNDBlock: A,
                                          isDragging: p,
                                          draggingClassName: m,
                                          className: (0, r.$)(u, { [ef().isDuplicate]: _.editorFeature.shouldHighlightDublicatedTrack(f) }),
                                      })
                                : (0, i.jsx)(eA.D, { isActive: !0, className: ef().shimmerItem, variant: ev.X.PLAYLIST })),
                        (0, i.jsx)(ep.x.Provider, {
                            value: { playlist: _.meta, trackIndex: c },
                            children: (0, i.jsx)(e_.F, {
                                blockType: d.EntityTypes.Tracks,
                                blockId: d.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectId: String(null == _ || null == (n = _.meta) ? void 0 : n.uuid),
                                mainObjectType: d.DomainObjectType.Playlist,
                                children: (0, i.jsx)(ey.B, {
                                    objectType: d.DomainObjectType.Track,
                                    objectId: String(null == f || null == (s = f.data) ? void 0 : s.id),
                                    objectPosX: 1,
                                    objectPosY: c + 1,
                                    objectsCount: _.items.length,
                                    children: o,
                                }),
                            }),
                        })
                    );
                });
            var ej = a(89056),
                eN = a.n(ej);
            let eB = (0, l.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: r, screenReaderInstructions: l } = ((e) => {
                        let { formatMessage: t } = (0, o.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: i } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: er(e, Number(i.id)), index: i.id });
                                },
                                onDragOver(a) {
                                    let { active: i, over: r } = a,
                                        l = er(e, Number(i.id));
                                    return r
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: l, index: r.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: l });
                                },
                                onDragEnd(a) {
                                    let { active: i, over: r } = a,
                                        l = er(e, Number(i.id));
                                    return r
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: l, index: r.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: l });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    n = ((e) => {
                        let { notify: t } = (0, ed.l)(),
                            { formatMessage: a } = (0, o.A)();
                        return (0, s.useCallback)(
                            async (r) => {
                                var l, n, s, o;
                                let { from: d, to: c } = r;
                                if (d < 0 || c < 0 || d >= e.items.length || c >= e.items.length) return;
                                let u = String(null == (l = e.items[d]) ? void 0 : l.id);
                                if (!u) return;
                                let p = (null == (n = e.items[d]) ? void 0 : n.albumId) ? Number(null == (s = e.items[d]) ? void 0 : s.albumId) : void 0;
                                e.moveTrack(d, c);
                                let m = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist((0, en.M)({ operation: es.y.MOVE, startPosition: d, endPosition: c, tracks: [{ id: u, albumId: p }] })));
                                (m && m === el.Y.OK) ||
                                    (m === el.Y.RELOAD ? e.refresh() : e.moveTrack(c, d),
                                    t((0, i.jsx)(ec.h, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: eo.u.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: d, handleDragStart: c, handleDragCancel: u, sensors: p } = (0, ei.Y)(),
                    m = (0, s.useCallback)(
                        (e) => {
                            let { active: t, over: i } = e;
                            if (!t.id || !(null == i ? void 0 : i.id)) return;
                            let r = a.itemsKeys.indexOf(String(t.id)),
                                l = a.itemsKeys.indexOf(String(i.id));
                            Number.isInteger(r) && Number.isInteger(l) && n({ from: r, to: l });
                        },
                        [n, a.itemsKeys],
                    ),
                    _ = (0, s.useMemo)(() => a.itemsKeys.indexOf(String(d)), [d, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, i.jsxs)(ee.Mp, {
                          sensors: p,
                          collisionDetection: ee.fp,
                          onDragStart: c,
                          onDragEnd: m,
                          onDragCancel: u,
                          modifiers: [et.FN, et.gj],
                          accessibility: { announcements: r, screenReaderInstructions: l },
                          children: [
                              (0, i.jsx)('div', { className: eN().root, children: (0, i.jsx)($.gB, { items: a.itemsKeys, strategy: $._G, children: t }) }),
                              (0, ea.createPortal)(
                                  (0, i.jsx)(ee.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: d
                                          ? (0, i.jsx)('div', {
                                                className: eN().draggableItemWrapper,
                                                children: (0, i.jsx)(eI, { index: _, className: eN().noHoverItem, isDragging: !0, draggingClassName: eN().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var eR = a(49656),
                eO = a(49807),
                eF = a(91797),
                ew = a(42853),
                eU = a(99401),
                eM = a(26076),
                eH = a(48830),
                eY = a.n(eH);
            let eW = (0, l.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, o.A)(),
                    l = (0, eR.L)(() => {
                        var e, l, n;
                        let s = [],
                            o = 3;
                        return (
                            t.hasSimilarEntities &&
                                (s.push(
                                    (0, i.jsx)(
                                        e_.F,
                                        {
                                            blockType: d.EntityTypes.SimilarEntities,
                                            blockId: d.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            objectsCount: null == (e = t.similarEntities.data) ? void 0 : e.items.length,
                                            mainObjectId: String(null == (l = t.meta) ? void 0 : l.uuid),
                                            mainObjectType: d.DomainObjectType.Playlist,
                                            children: (0, i.jsx)(eO.Q, {
                                                ...t.similarEntities,
                                                meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: 'h2',
                                                className: eY().carouselContainer,
                                                headerClassName: (0, r.$)(eY().carouselBlock, eY().carouselBlockHeader),
                                                containerClassName: eY().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                isLoaded: t.similarEntities.isLoaded,
                                                setHasSentAnalyticsOnLoaded: t.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        d.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                o++),
                            t.hasSimilarPlaylists &&
                                (s.push(
                                    (0, i.jsx)(
                                        e_.F,
                                        {
                                            blockId: d.EntityTypes.SimilarPlaylists,
                                            blockType: d.EntityTypes.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            blockIdForFrom: ew.h.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            mainObjectId: String(null == (n = t.meta) ? void 0 : n.uuid),
                                            mainObjectType: d.DomainObjectType.Playlist,
                                            children: (0, i.jsx)(eF.E, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: eY().carouselContainer,
                                                headerClassName: (0, r.$)(eY().carouselBlockHeader, eY().carouselBlock),
                                                containerClassName: eY().carouselBlock,
                                                title: a({ id: 'entity-names.similar-playlists' }),
                                                playlists: t.similarPlaylists,
                                                shouldSendAnalyticsOnLoaded: !0,
                                            }),
                                        },
                                        d.EntityTypes.SimilarPlaylists,
                                    ),
                                ),
                                o++),
                            s
                        );
                    });
                return (0, i.jsxs)('div', {
                    className: eY().root,
                    children: [(0, i.jsx)('div', { children: l }), (0, i.jsx)(eM.A, { children: (0, i.jsx)(eU.w, { className: eY().footer }) })],
                });
            });
            var ez = a(10944),
                eK = a(86401),
                eG = a(8487),
                eV = a(71035),
                eq = a(66738),
                eX = a(99725),
                e$ = a(62948),
                eQ = a(1134),
                eZ = a(79367),
                eJ = a(61777),
                e0 = a(34159),
                e1 = a(29872),
                e2 = a(61561),
                e4 = a(81022),
                e9 = a(50209),
                e3 = a(31488),
                e8 = a(6969),
                e6 = a(64720),
                e5 = a(41580),
                e7 = a(49438),
                te = a(71996),
                tt = a(95924),
                ta = a(49999),
                ti = a(92543),
                tr = a(58091),
                tl = a.n(tr),
                tn = a(4071),
                ts = a(10820),
                to = a(14743),
                td = a(79307),
                tc = a(36484),
                tu = a(62562),
                tp = a(81119),
                tm = a(82684),
                t_ = a(48288),
                ty = a.n(t_);
            let tg = (0, l.PA)((e) => {
                let { trackIds: t, className: a, onRemove: l } = e,
                    { slam: n } = (0, k.g)(),
                    d = (0, tp.A)(),
                    { formatMessage: u } = (0, o.A)(),
                    p = (0, tu.N)(),
                    [m, _] = (0, s.useState)(!1),
                    y = p.get(tc.vg),
                    g = n.isPlaylistDownloaded(t),
                    v = n.isPlaylistDownloading(t),
                    A = n.getPlaylistDownloadingProgress(t),
                    h = (0, eV.c)(() => {
                        if (v) {
                            null == d || d.stopDownload(t);
                            return;
                        }
                        if (g) return void _(!0);
                        (null == d || d.download(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DOWNLOAD, td.l));
                    }),
                    f = (0, eV.c)(() => {
                        (null == d || d.delete(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DELETE, td.l), null == l || l());
                    }),
                    C = (0, s.useMemo)(
                        () =>
                            g
                                ? (0, i.jsx)(eq.I, { variant: 'check', size: 'xxs', className: ty().downloadedIcon })
                                : v
                                  ? (0, i.jsx)(tm.A, {
                                        value: null != A ? A : 0,
                                        size: 26,
                                        withCancelIcon: !0,
                                        className: ty().downloadingProgress,
                                        progressBarClassName: ty().progress,
                                        cancelIconClassName: ty().cancelIcon,
                                    })
                                  : (0, i.jsx)(eq.I, { variant: 'download', size: 'xxs' }),
                        [g, v, A],
                    ),
                    x = (0, s.useMemo)(() => (v ? u({ id: 'offline.stop-downloading' }) : u({ id: 'offline.download' })), [u, v]);
                return g
                    ? (0, i.jsx)(ts.W1, {
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: C,
                          offsetOptions: 10,
                          open: m,
                          onOpenChange: _,
                          wrapperClassName: a,
                          ariaLabel: u({ id: 'offline.delete-from-device' }),
                          'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOADED_BUTTON,
                          children: (0, i.jsx)(ts.Dr, {
                              icon: (0, i.jsx)(eq.I, { variant: 'upload', size: 'xxs' }),
                              onClick: f,
                              children: (0, i.jsx)(eG.A, { id: 'offline.delete-from-device' }),
                          }),
                      })
                    : (0, i.jsx)(tn.$, {
                          className: (0, r.$)(ty().root, { [ty().root_downloading]: v }, a),
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: C,
                          'aria-label': x,
                          onClick: h,
                          'data-test-id': v ? c.e8.pageHeader.PLAYLIST_HEADER_STOP_DOWNLOAD_BUTTON : c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_BUTTON,
                          children:
                              v &&
                              (0, i.jsx)(eP.HL, {
                                  variant: 'div',
                                  className: ty().progressText,
                                  'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_PROGRESS_TEXT,
                                  children: (0, i.jsx)(eG.A, { id: 'offline.downloading-progress', values: { value: A } }),
                              }),
                      });
            });
            var tv = a(6519),
                tA = a.n(tv),
                th = a(9079),
                tf = a(67379),
                tC = a(76945),
                tx = a(59450),
                tP = a(84e3),
                tE = a(79670),
                tT = a(1230),
                tb = a.n(tT);
            let tS = (0, l.PA)((e) => {
                var t, a, r;
                let { playlistUuid: l } = e,
                    n = (0, y.Q)(),
                    o = ((e) => {
                        let t = (0, tx.st)(),
                            a = (0, tP.U)(),
                            { hash: i } = (0, tx.gf)();
                        return (0, s.useCallback)(() => {
                            if (!t || !e.link) return;
                            let r = {
                                    hash: i,
                                    pageId: tE.W[h._Q.PLAYLIST],
                                    mainObjectType: d.DomainObjectType.Playlist,
                                    mainObjectId: e.objectId,
                                    entityId: 'playlist_branded_action_button',
                                    pageStyle: d.PageStyles.Fullscreen,
                                    pagePlacement: d.PagePlacements.Fullscreen,
                                    from: tE.W[h._Q.PLAYLIST],
                                    to: d.AppScreen.Link,
                                    deepLink: e.link,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                l = (0, tf.F)({ params: r, logger: a, context: 'useSendEventOnPlaylistBrandingLinkNavigated' });
                            l && (0, tC.Mu)(t.evgenInstance, l);
                        }, [t, i, a, e]);
                    })({ objectId: l, link: null == (a = n.data) || null == (t = a.button) ? void 0 : t.href });
                return n.isEnabled && (null == (r = n.data) ? void 0 : r.button)
                    ? (0, i.jsx)(th.N, {
                          className: tb().root,
                          href: n.data.button.href,
                          target: '_blank',
                          onClick: o,
                          children: (0, i.jsx)(eP.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: n.data.button.text }),
                      })
                    : null;
            });
            var tk = a(89288),
                tL = a(86869),
                tD = a(52527),
                tI = a(6323);
            let tj = ['image/png', 'image/jpeg', 'image/jpg'];
            var tN = a(40422),
                tB = a.n(tN);
            let tR = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    {
                        settings: { isMobile: l },
                        playlist: { isRewind2024Playlist: n },
                        modals: { imageSliderModal: d },
                    } = (0, k.g)(),
                    u = a.coverUri,
                    p = a.canUserChange && !l,
                    { notify: m } = (0, ed.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    y = (0, s.useRef)(null),
                    [g, v] = (0, s.useState)(u || ''),
                    [A, h] = (0, s.useState)(p),
                    [f, C] = (0, s.useState)(new FormData()),
                    x = (0, tk.lU)(u || '', 600, !1),
                    P = (0, tk.lU)(u || '', 300, !1),
                    [E, T] = (0, s.useState)(x),
                    [b, S] = (0, s.useState)(!1),
                    L = !!u,
                    D = (0, s.useMemo)(() => {
                        if (n && a.personalColor) return (0, tD.m)(a.personalColor);
                    }, [n, a.personalColor]);
                (0, s.useEffect)(() => {
                    A !== p && h(p);
                }, [p, A]);
                let I = (0, s.useCallback)(
                        () => m((0, i.jsx)(ec.h, { error: _({ id: 'playlist-errors.failed-to-change-poster' }) }), { containerId: eo.u.ERROR }),
                        [m, _],
                    ),
                    j = (0, eV.c)(() => {
                        u && !b && d.openImages({ images: [u] });
                    }),
                    N = (0, eV.c)((e) => {
                        var t;
                        (null == e || e.stopPropagation(), null == y || null == (t = y.current) || t.click());
                    }),
                    B = (0, eV.c)((e) => {
                        (e.stopPropagation(), 'Enter' === e.key && N());
                    }),
                    R = (0, eV.c)((e) => {
                        e.stopPropagation();
                    }),
                    O = (0, eV.c)((e) => {
                        let t,
                            a = e.target,
                            i = (a.files || [])[0] || null;
                        if (((a.value = ''), !i || ((t = i.type), !tj.includes(t)) || !((e) => e > 0 && e <= 2e7)(i.size))) return void I();
                        (g && T(g), h(!1), v(URL.createObjectURL(i)));
                        let r = new FormData();
                        (r.append('image', i), C(r));
                    }),
                    F = (0, s.useCallback)(
                        async (e) => {
                            let t = e.target,
                                i = () => {
                                    (v(E), I(), h(!0));
                                };
                            if ((u && (t.currentSrc === x || t.currentSrc === P)) || !p || E === t.currentSrc) return;
                            if (
                                !((e) => {
                                    if (!e) return;
                                    let t = 2 * e.naturalHeight || e.height,
                                        a = 2 * e.naturalWidth || e.width;
                                    return t < 5e3 && a < 5e3;
                                })(t)
                            )
                                return void i();
                            S(!0);
                            let r = await a.changePlaylistCover(f);
                            (S(!1), r === e3.F.ERROR ? i() : h(!0));
                        },
                        [I, E, a, f, u, p, x, P],
                    ),
                    w = (0, s.useMemo)(() => (g ? _({ id: 'playlist-actions.change-poster' }) : _({ id: 'playlist-actions.add-poster' })), [g, _]);
                return (0, i.jsxs)(tL.t, {
                    radius: 'm',
                    className: (0, r.$)(tB().root, t, { [tB().root_hoverable]: L }),
                    children: [
                        (0, i.jsx)('div', {
                            className: tB().backCoverColor,
                            style: D,
                            children: (0, i.jsx)(tn.$, {
                                onClick: j,
                                'aria-label': _({ id: 'slider.view-cover' }),
                                tabIndex: L ? 0 : -1,
                                disabled: !L,
                                className: tB().coverButton,
                                children: (0, i.jsx)(tI.B, { fit: 'cover', src: g, size: 300, className: tB().coverImage, withAvatarReplace: !0, onLoad: F }),
                            }),
                        }),
                        A &&
                            (0, i.jsx)('div', {
                                className: (0, r.$)(tB().buttonContainer, { [tB().buttonContainer_withCursorPointer]: g }),
                                onClick: L ? j : void 0,
                                children: (0, i.jsxs)('div', {
                                    className: (0, r.$)(tB().fileUploadContainer, { [tB().fileUploadContainer_hovered]: g }),
                                    children: [
                                        (0, i.jsx)(tn.$, {
                                            className: tB().button,
                                            radius: 'xxxl',
                                            size: 'xxs',
                                            color: 'secondary',
                                            withRipple: !1,
                                            onClick: N,
                                            onKeyUp: B,
                                            'aria-label': _({ id: 'playlist-actions.add-poster' }),
                                            'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_ADD_COVER_BUTTON,
                                            children: w,
                                        }),
                                        (0, i.jsx)('form', {
                                            className: tB().formFile,
                                            encType: 'multipart/form-data',
                                            children: (0, i.jsx)('input', {
                                                ref: y,
                                                type: 'file',
                                                name: 'file',
                                                accept: 'image/jpeg, image/png, image/jpg',
                                                onChange: O,
                                                onClick: R,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                });
            });
            var tO = a(14693),
                tF = a(589),
                tw = a(47062),
                tU = a(97522),
                tM = a(72720),
                tH = a(48022),
                tY = a.n(tH),
                tW = a(99720),
                tz = a(79276);
            let tK = (0, l.PA)((e) => {
                    let { playlist: t, className: a } = e,
                        { formatMessage: r } = (0, o.A)(),
                        l = (0, s.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.playlistReceiver))
                                    switch (e) {
                                        case tz.r.TODAY:
                                            return r({ id: 'interface-actions.playlist-made-today' }, t);
                                        case tz.r.YESTERDAY:
                                            return r({ id: 'interface-actions.playlist-made-yesterday' }, t);
                                        case tz.r.DATE_WITH_YEAR:
                                            return r({ id: 'interface-actions.playlist-made-date-with-year' }, t);
                                        default:
                                            return r({ id: 'interface-actions.playlist-made-date' }, t);
                                    }
                                switch (e) {
                                    case tz.r.TODAY:
                                        return r({ id: 'interface-actions.playlist-made-for-today' }, t);
                                    case tz.r.YESTERDAY:
                                        return r({ id: 'interface-actions.playlist-made-for-yesterday' }, t);
                                    case tz.r.DATE_WITH_YEAR:
                                        return r({ id: 'interface-actions.playlist-made-for-date-with-year' }, t);
                                    default:
                                        return r({ id: 'interface-actions.playlist-made-for-date' }, t);
                                }
                            },
                            [r],
                        ),
                        n = (0, s.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.ownerName))
                                    switch (e) {
                                        case tz.r.TODAY:
                                            return r({ id: 'interface-actions.updated-anonymously-playlist-today' }, t);
                                        case tz.r.YESTERDAY:
                                            return r({ id: 'interface-actions.updated-anonymously-playlist-yesterday' }, t);
                                        case tz.r.DATE_WITH_YEAR:
                                            return r({ id: 'interface-actions.updated-anonymously-playlist-date-with-year' }, t);
                                        default:
                                            return r({ id: 'interface-actions.updated-anonymously-playlist-date' }, t);
                                    }
                                switch (e) {
                                    case tz.r.TODAY:
                                        return r({ id: 'interface-actions.updated-playlist-today' }, t);
                                    case tz.r.YESTERDAY:
                                        return r({ id: 'interface-actions.updated-playlist-yesterday' }, t);
                                    case tz.r.DATE_WITH_YEAR:
                                        return r({ id: 'interface-actions.updated-playlist-date-with-year' }, t);
                                    default:
                                        return r({ id: 'interface-actions.updated-playlist-date' }, t);
                                }
                            },
                            [r],
                        ),
                        d = (0, s.useMemo)(() => {
                            var e, a, i, r, s;
                            let o = new Date(t.modified),
                                d = (0, tz.L)(o);
                            return t.madeForUser
                                ? l(d, {
                                      playlistReceiver: (null == t || null == (r = t.madeForUser) || null == (i = r.caseForms) ? void 0 : i.genitive) || '',
                                      updateDate: o,
                                  })
                                : t.isFavouritePlaylist
                                  ? (null == (s = t.owner) ? void 0 : s.name) || ''
                                  : n(d, {
                                        updateDate: new Date(t.modified),
                                        ownerName: (null == (e = t.owner) ? void 0 : e.name) || '',
                                        gender: (null == (a = t.owner) ? void 0 : a.sex) === tW.U.FEMALE ? 'female' : 'male',
                                    });
                        }, [t, l, n]);
                    return (0, i.jsx)(eP.HL, {
                        variant: 'span',
                        className: a,
                        type: 'text',
                        size: 'm',
                        weight: 'medium',
                        lineClamp: 1,
                        'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT,
                        children: d,
                    });
                }),
                tG = (0, l.PA)((e) => {
                    let { playlist: t } = e,
                        { formatMessage: a } = (0, o.A)(),
                        {
                            settings: { isMobile: l },
                        } = (0, k.g)(),
                        { notify: n } = (0, ed.l)(),
                        d = t.canUserChange && !l,
                        u = !!t.description,
                        { state: p, toggleTrue: m, toggleFalse: _ } = (0, tO.e)(!1),
                        [y, g] = (0, s.useState)(t.description || ''),
                        v = (0, s.useCallback)(async () => {
                            (_(),
                                (await t.changeDescription(y)) === e3.F.ERROR &&
                                    n((0, i.jsx)(ec.h, { error: a({ id: 'playlist-errors.failed-to-change-description' }) }), { containerId: eo.u.ERROR }));
                        }, [a, y, n, t, _]),
                        A = (0, s.useCallback)((e) => {
                            g(e);
                        }, []),
                        h = (0, s.useMemo)(() => (0, tw.r)(t.description, tU.N, { className: tY().descriptionLink }), [t.description]),
                        f = (0, s.useMemo)(
                            () =>
                                t.tagsString
                                    ? (0, i.jsx)(eP.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, i.jsx)(eG.A, { id: 'entity-names.tags', values: { tags: t.tagsString } }),
                                      })
                                    : null,
                            [t.tagsString],
                        );
                    return (0, i.jsxs)('div', {
                        className: tY().root,
                        children: [
                            u &&
                                !p &&
                                (0, i.jsxs)(eP.HL, {
                                    variant: 'span',
                                    className: tY().description,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    children: [
                                        h,
                                        d &&
                                            (0, i.jsx)(tn.$, {
                                                variant: 'text',
                                                withRipple: !1,
                                                onClick: m,
                                                className: (0, r.$)(tY().descriptionActionLink, tY().addDescription),
                                                'aria-label': a({ id: 'playlist-actions.change-description' }),
                                                color: 'primary',
                                                'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                                                children: (0, i.jsx)(eP.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    type: 'text',
                                                    className: tY().button,
                                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.change-description-abbr' }),
                                                }),
                                            }),
                                    ],
                                }),
                            !u &&
                                d &&
                                !p &&
                                (0, i.jsx)(tn.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    onClick: m,
                                    className: tY().descriptionActionLink,
                                    'aria-label': a({ id: 'playlist-actions.add-description' }),
                                    color: 'primary',
                                    'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                                    children: (0, i.jsxs)(eP.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: tY().button,
                                        children: [(0, i.jsx)(eG.A, { id: 'playlist-actions.add-description' }), '...'],
                                    }),
                                }),
                            d &&
                                p &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(tM.A, {
                                            text: t.description,
                                            className: tY().textField,
                                            placeholder: ''.concat(a({ id: 'playlist-actions.add-description' }), '...'),
                                            maxTextLength: tF.i,
                                            onChangeFinish: A,
                                            variant: 'textarea',
                                            withOutline: !0,
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: tY().actionButtons,
                                            children: [
                                                (0, i.jsx)(tn.$, {
                                                    className: tY().saveButton,
                                                    color: 'secondary',
                                                    radius: 'xxxl',
                                                    size: 's',
                                                    'aria-label': a({ id: 'interface-actions.save' }),
                                                    onClick: v,
                                                    withHover: !0,
                                                    children: (0, i.jsx)(eG.A, { id: 'interface-actions.save' }),
                                                }),
                                                (0, i.jsx)(tn.$, {
                                                    variant: 'text',
                                                    withRipple: !1,
                                                    onClick: _,
                                                    className: tY().cancelButton,
                                                    'aria-label': a({ id: 'interface-actions.cancel' }),
                                                    color: 'primary',
                                                    children: (0, i.jsx)(eP.HL, {
                                                        variant: 'span',
                                                        size: 'm',
                                                        type: 'text',
                                                        className: tY().button,
                                                        children: (0, i.jsx)(eG.A, { id: 'interface-actions.cancel' }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(tK, { className: tY().updatedText, playlist: t }),
                            f,
                        ],
                    });
                });
            var tV = a(49890),
                tq = a.n(tV);
            let tX = (0, l.PA)((e) => {
                let { playlist: t } = e,
                    a = (0, s.useRef)(null),
                    { ugcUploadCenter: r } = (0, k.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    n = (0, s.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.click();
                    }, [a]),
                    d = (0, s.useCallback)(
                        (e) => {
                            let a = e.target.files;
                            (a && a.length > 0 && r.appendFiles([...a], t), (e.target.value = ''));
                        },
                        [t, r],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tn.$, {
                            size: 's',
                            radius: 'xxxl',
                            'aria-label': l({ id: 'ugc.upload-track' }),
                            className: tq().button,
                            onClick: n,
                            'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_UPLOAD_UGC_BUTTON,
                            children: l({ id: 'ugc.upload-track' }),
                        }),
                        (0, i.jsx)('form', {
                            className: tq().form,
                            encType: 'multipart/form-data',
                            children: (0, i.jsx)('input', { ref: a, type: 'file', accept: 'audio/*', onChange: d, multiple: !0 }),
                        }),
                    ],
                });
            });
            var t$ = a(450),
                tQ = a(93596),
                tZ = a(3210),
                tJ = a(11609),
                t0 = a(929),
                t1 = a.n(t0),
                t2 = a(52970),
                t4 = a(56659),
                t9 = a(84361),
                t3 = a(23976),
                t8 = a(51790),
                t6 = a(16963),
                t5 = a.n(t6);
            let t7 = () =>
                (0, i.jsx)(t8.$, {
                    message: (0, i.jsx)(eP.HL, {
                        className: t5().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, i.jsx)(eG.A, { id: 'playlist-errors.failed-add-tracks-to-playlist' }),
                    }),
                });
            var ae = a(33901),
                at = a.n(ae);
            let aa = (0, l.PA)((e) => {
                    let { playlistTitle: t = '', playlistUrl: a, closeToast: r } = e,
                        { fullscreenPlayer: l } = (0, k.g)(),
                        n = (0, eV.c)(() => {
                            l.modal.isOpened && l.modal.close();
                        }),
                        o = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)(eP.HL, {
                                    className: at().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(eG.A, {
                                        id: 'notifications-info.added-tracks-to-playlist',
                                        values: {
                                            playlistName: (0, i.jsx)(tU.N, {
                                                className: at().link,
                                                href: a,
                                                onClick: n,
                                                children: (0, i.jsxs)(eP.HL, {
                                                    className: at().playlistTitle,
                                                    variant: 'div',
                                                    type: 'controls',
                                                    size: 'm',
                                                    lineClamp: 1,
                                                    children: ['\xa0', t, '\xa0'],
                                                }),
                                            }),
                                        },
                                    }),
                                }),
                            [n, t, a],
                        );
                    return (0, i.jsx)(t8.$, { closeToast: r, message: o });
                }),
                ai = () =>
                    (0, i.jsx)(t8.$, {
                        message: (0, i.jsx)(eP.HL, {
                            className: at().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, i.jsx)(eG.A, { id: 'notifications-info.already-added-tracks' }),
                        }),
                    }),
                ar = (0, l.PA)((e) => {
                    let { playlistItem: t } = e,
                        {
                            contextMenuAddTracksToPlaylist: { fetchPlaylistTrackIds: a, isTracksLoading: r },
                            fullscreenPlayer: l,
                            playlist: { itemsForCopy: n },
                        } = (0, k.g)(),
                        { notify: s } = (0, ed.l)(),
                        o = (0, eV.c)(async () => {
                            if (0 === n.length || r) return;
                            let e = { containerId: l.modal.isOpened ? eo.u.FULLSCREEN_INFO : eo.u.INFO },
                                o = await a(t.kind);
                            if (null === o) return void s((0, i.jsx)(t7, {}), e);
                            let d = new Set(o),
                                c = n.filter((e) => !d.has(e.id));
                            return c.length
                                ? (await t.changePlaylist((0, en.M)({ operation: es.y.INSERT, position: 0, tracks: c }))) === el.Y.OK
                                    ? void s((0, i.jsx)(aa, { playlistTitle: t.title, playlistUrl: t.url }), e)
                                    : void s((0, i.jsx)(t7, {}), e)
                                : void s((0, i.jsx)(ai, {}), e);
                        });
                    return (0, i.jsx)(ts.Dr, {
                        isBlock: !0,
                        onClick: o,
                        icon: (0, i.jsx)(eq.I, { variant: 'add', size: 'xxs', className: t1().playlistItemIcon }),
                        className: t1().playlistItem,
                        'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_ITEM,
                        children: (0, i.jsx)(eP.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                    });
                }),
                al = (0, l.PA)((e) => {
                    let { searchQuery: t, sourcePlaylistUuid: a } = e,
                        {
                            contextMenuAddTracksToPlaylist: { isPlaylistsLoading: r, getFilteredPlaylists: l },
                        } = (0, k.g)(),
                        n = (0, s.useRef)(null),
                        o = l(t, a),
                        d = (0, t9.Te)({
                            count: o.length,
                            getScrollElement: () => n.current,
                            estimateSize: () => 36,
                            getItemKey: (e) => {
                                var t, a;
                                return null != (a = null == (t = o[e]) ? void 0 : t.uuid) ? a : e;
                            },
                            overscan: 2,
                        }),
                        u = d.getVirtualItems().flatMap((e) => {
                            let t = o[e.index];
                            return t ? [{ virtualItem: e, playlist: t }] : [];
                        });
                    return ((0, s.useEffect)(() => {
                        d.scrollToOffset(0);
                    }, [t, d]),
                    r)
                        ? (0, i.jsx)('div', {
                              className: t1().playlistList,
                              'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                              children: Array.from({ length: 10 }, (e, t) =>
                                  (0, i.jsx)(ts.Dr, { children: (0, i.jsx)(t3.W, { isActive: !0, className: t1().playlistItemShimmer }) }, t),
                              ),
                          })
                        : o.length
                          ? (0, i.jsx)('div', {
                                ref: n,
                                className: t1().playlistList,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                                children: (0, i.jsx)('div', {
                                    className: t1().virtualPlaylistList,
                                    style: { height: d.getTotalSize() },
                                    children: u.map((e) => {
                                        let { virtualItem: t, playlist: a } = e;
                                        return (0, i.jsx)(
                                            'div',
                                            {
                                                ref: d.measureElement,
                                                className: t1().virtualPlaylistItem,
                                                'data-index': t.index,
                                                style: { transform: 'translate3d(0, '.concat(t.start, 'px, 0)') },
                                                children: (0, i.jsx)(ar, { playlistItem: a }),
                                            },
                                            t.key,
                                        );
                                    }),
                                }),
                            })
                          : (0, i.jsx)('div', {
                                className: t1().emptyState,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_EMPTY_STATE,
                                children: (0, i.jsx)(eG.A, { id: 'search-results.not-found-title' }),
                            });
                }),
                an = (0, l.PA)((e) => {
                    let { sourcePlaylistUuid: t } = e,
                        {
                            playlist: { itemsForCopy: a },
                        } = (0, k.g)(),
                        { formatMessage: r } = (0, o.A)(),
                        [l, d] = (0, s.useState)(''),
                        u = ((e) => {
                            let { createPlaylist: t, fullscreenPlayer: a } = (0, k.g)(),
                                { notify: r } = (0, ed.l)(),
                                l = (0, n.useRouter)(),
                                { formatMessage: s } = (0, o.A)();
                            return (0, eV.c)(async () => {
                                if (!(null == e ? void 0 : e.length)) return;
                                let n = { containerId: a.modal.isOpened ? eo.u.FULLSCREEN_INFO : eo.u.INFO };
                                await t.create({ title: s({ id: 'entity-names.new-playlist' }), visibility: N.L.PUBLIC });
                                let o = t.meta;
                                if (!(null == o ? void 0 : o.uuid)) {
                                    (r((0, i.jsx)(t7, {}), n), t.reset());
                                    return;
                                }
                                if ((await o.changePlaylist((0, en.M)({ operation: es.y.INSERT, position: 0, tracks: e }))) === el.Y.OK) {
                                    let { href: e } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: o.uuid } });
                                    (t.reset(), a.modal.isOpened && a.modal.close(), l.push(e));
                                    return;
                                }
                                (t.reset(), r((0, i.jsx)(t7, {}), n));
                            });
                        })(a),
                        p = (0, eV.c)((e) => {
                            d(e);
                        }),
                        m = (0, eV.c)(() => {
                            d('');
                        }),
                        _ = (0, eV.c)((e) => {
                            (e.stopPropagation(), e.nativeEvent.stopImmediatePropagation());
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: t1().searchSection,
                                children: (0, i.jsx)(t4.D, {
                                    className: t1().searchField,
                                    initialValue: l,
                                    correctedValue: null,
                                    placeholder: r({ id: 'search.playlist-placeholder' }),
                                    onChange: p,
                                    resetButtonAriaLabel: r({ id: 'interface-actions.reset-search-input' }),
                                    onResetClick: m,
                                    shouldPreventAutoFocusScroll: !0,
                                    innerInputProps: { onKeyDown: _, 'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_SEARCH_INPUT },
                                }),
                            }),
                            (0, i.jsx)(ts.Dr, {
                                onClick: u,
                                icon: (0, i.jsx)(eq.I, { variant: 'add', size: 'xxs' }),
                                className: t1().createPlaylistButton,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_CREATE_BUTTON,
                                children: (0, i.jsx)(eP.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.create-playlist' }),
                                }),
                            }),
                            (0, i.jsx)(t2.c, { className: t1().menuDivider }),
                            (0, i.jsx)(al, { searchQuery: l, sourcePlaylistUuid: t }),
                        ],
                    });
                }),
                as = (0, l.PA)((e) => {
                    let { disabled: t, className: a, sourcePlaylistUuid: r } = e,
                        {
                            contextMenuAddTracksToPlaylist: { loadPlaylistsWithoutTracks: l },
                            settings: { isMobile: n },
                            user: s,
                            playlist: { items: d },
                        } = (0, k.g)(),
                        { formatMessage: u } = (0, o.A)(),
                        p = t || !s.isAuthorized || !d.length,
                        m = (0, eV.c)(() => {
                            l();
                        });
                    return (0, i.jsx)(ts.W1, {
                        offsetOptions: 3,
                        isMobile: n,
                        className: a,
                        listClassName: t1().menuContent,
                        label: u({ id: 'interface-actions.add-tracks-to-playlist' }),
                        icon: (0, i.jsx)(eq.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        disabled: p,
                        onShow: m,
                        containerDataTestId: c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST,
                        'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: (0, i.jsx)(an, { sourcePlaylistUuid: r }),
                    });
                });
            var ao = a(16503),
                ad = a(29093),
                ac = a.n(ad);
            let au = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    { notify: l } = (0, ed.l)(),
                    { formatMessage: n } = (0, o.A)(),
                    d = (0, s.useCallback)(async () => {
                        (await a.toggleVisibility()) === e3.F.ERROR &&
                            l((0, i.jsx)(ec.h, { error: n({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: eo.u.ERROR });
                    }, [n, l, a]);
                return (0, i.jsxs)(ts.Dr, {
                    className: (0, r.$)(ac().root, t),
                    onClick: d,
                    icon: (0, i.jsx)(eq.I, { variant: 'eye_crossed', size: 'xxs' }),
                    'data-test-id': c.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON,
                    role: 'menuitemcheckbox',
                    'aria-checked': !a.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, i.jsx)('span', { className: ac().caption, children: (0, i.jsx)(eG.A, { id: 'playlist-actions.privacy' }) }),
                        (0, i.jsx)(ao.l, { isChecked: !a.isPublic, ariaLabel: n({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
            var ap = a(24816),
                am = a(53712),
                a_ = a(56120),
                ay = a(87201),
                ag = a(30296),
                av = a(43478),
                aA = a(83014),
                ah = a(55491),
                af = a(44851),
                aC = a(14240),
                ax = a(35015),
                aP = a(16386),
                aE = a(67303),
                aT = a(74682),
                ab = a(59043),
                aS = a(2144);
            let ak = (0, l.PA)((e) => {
                    var t, a, r, l;
                    let { playlist: u, onOpenChange: p, open: m, wrapperClassName: _, ...y } = e,
                        { shouldShowBuySubscriptionModal: g, showBuySubscriptionModal: v } = (0, e1.q)(),
                        {
                            settings: { isMobile: A },
                            trailer: f,
                            playlist: {
                                filters: { activeFilter: C, analyticsParamsActiveFilterIndex: x },
                                items: P,
                            },
                            user: E,
                            experiments: T,
                            sonataState: { entityMeta: b },
                        } = (0, k.g)(),
                        S = (0, ag.e)(),
                        L = (0, e$.K)(u),
                        D = T.checkExperiment(eE.z.WebEditorsFeatures, 'on'),
                        I = (0, eQ.A)(u),
                        j = (0, e0.F)(),
                        N = ''.concat(em.U.PLAYLIST, '-').concat(u.uid, '_').concat(u.kind),
                        B = u.canUserChange,
                        { utmLink: R } = (0, eg.f)({
                            pageId: h._Q.PLAYLIST,
                            blockId: em.U.PLAYLIST,
                            contextType: eu.K.Playlist,
                            contextId: u.uuid,
                            pageEntityId: u.uuid,
                        }),
                        O = (0, eZ.P)(),
                        F = u.isOwnFavouritePlaylist && T.checkExperiment(eE.z.WebNextToggleFavouritePlaylistVisibility, 'on'),
                        w = (0, t$.S)(null == S ? void 0 : S.state.currentContext.value),
                        U = b && !w,
                        M = (0, av.i)({ playlistId: u.id, filter: C }),
                        H = (0, eV.c)((e) =>
                            e.data
                                ? !e.data.isRemoved && e.data.isAvailable
                                    ? e.data.entityId
                                    : void 0
                                : null !== e.albumId
                                  ? ''.concat(e.id, ':').concat(e.albumId)
                                  : String(e.id),
                        ),
                        Y = (0, tQ.m)(P, ap.N.NEXT, M, { entityVariant: ax.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, H),
                        W = (0, tQ.m)(P, ap.N.LAST, M, { entityVariant: ax.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, H),
                        { notify: z } = (0, ed.l)(),
                        { formatMessage: K } = (0, o.A)(),
                        G = (0, n.useRouter)(),
                        V = ((e) => {
                            let t = (0, tx.st)(),
                                a = (0, tP.U)(),
                                { hash: i } = (0, tx.gf)();
                            return (0, s.useCallback)(() => {
                                if (!t || !e.objectId) return;
                                let r = {
                                        hash: i,
                                        pageId: tE.W[h._Q.PLAYLIST],
                                        mainObjectType: d.DomainObjectType.Wave,
                                        mainObjectId: e.objectId,
                                        tabId: e.tabId || '',
                                        tabPos: e.tabPos || 1,
                                    },
                                    l = (0, tf.F)({ params: r, logger: a, context: 'useSendEventOnPlaylistWaveStarted' });
                                l && (0, tC.e7)(t.evgenInstance, l);
                            }, [t, i, a, e]);
                        })((0, s.useMemo)(() => ({ objectId: u.seeds[0], tabId: C, tabPos: x }), [u.seeds, C, x])),
                        { shareLink: q, pathname: X } = (0, aC.b)('/playlists/:playlistUuid', { params: { playlistUuid: u.uuid } }),
                        $ = (0, tZ.A)({ entityVariant: aA.D.PLAYLIST, urlParams: { id: u.uid, kind: u.kind } }),
                        { isPlaying: Q, togglePlay: Z } = (0, ay.B)({
                            seeds: null != (l = u.seeds) ? l : [],
                            pageIdForFrom: h._Q.RADIO,
                            blockIdForFrom: N,
                            parentContextId: u.uuid,
                        }),
                        J = (0, eV.c)(() => {
                            if (g && E.isAuthorized) return void v();
                            !O() && (Q || (Z(), V()));
                        }),
                        ee = (0, eV.c)(() => {
                            if (g) return void v();
                            O() || (f.setUtmLink(R), f.openPlaylistTrailer(u.id), j(d.DomainObjectType.Playlist, u.id));
                        }),
                        et = (0, eV.c)(async () => {
                            if ((await u.deletePlaylist()) === e3.F.ERROR)
                                return void z((0, i.jsx)(ec.h, { error: K({ id: 'playlist-errors.failed-to-remove-playlist' }) }), { containerId: eo.u.ERROR });
                            G.push(am.Z.collection.href);
                        });
                    (0, a_.N)(m);
                    let ea = (u.isPublic || u.isFavouritePlaylist) && u.isAvailable,
                        ei = {
                            variant: ah.Y.PLAYLIST,
                            id: u.kind,
                            title: u.title,
                            path: X,
                            playlistOwnerName: null == (t = u.owner) ? void 0 : t.name,
                            playlistOwnerLogin: null == (a = u.owner) ? void 0 : a.login,
                        };
                    return (0, i.jsxs)(ts.W1, {
                        isMobile: A,
                        offsetOptions: 10,
                        open: m,
                        onOpenChange: p,
                        ariaLabel: K({ id: 'interface-actions.context-menu' }),
                        wrapperClassName: _,
                        ...y,
                        containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                        children: [
                            D && (0, i.jsx)(tJ.d, { entityVariant: aA.D.PLAYLIST, adminUrl: u.isFavouritePlaylist ? void 0 : $, withPlaylistPageFeatures: !0 }),
                            (0, i.jsx)(as, { sourcePlaylistUuid: u.uuid }),
                            !A && (0, i.jsx)(aE.L, { onClick: I, isPinned: u.isPinned }),
                            !u.isFavouritePlaylist && (0, i.jsx)(aP.T, { onClick: L, isLiked: u.isLiked, disabled: !E.isAuthorized }),
                            (null == (r = u.trailer) ? void 0 : r.isAvailable) && (0, i.jsx)(ab.N, { onClick: ee }),
                            (0, i.jsx)(aS.C, { disabled: !u.isAvailable, onClick: J, variant: af.I.PLAYLIST }),
                            U &&
                                (0, i.jsx)(ts.Dr, {
                                    onClick: Y,
                                    icon: (0, i.jsx)(eq.I, { variant: 'playNext', size: 'xxs' }),
                                    disabled: !E.isAuthorized,
                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                    children: (0, i.jsx)(eG.A, { id: 'play-queue.play-next' }),
                                }),
                            U &&
                                (0, i.jsx)(ts.Dr, {
                                    onClick: W,
                                    icon: (0, i.jsx)(eq.I, { variant: 'playLast', size: 'xxs' }),
                                    disabled: !E.isAuthorized,
                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                    children: (0, i.jsx)(eG.A, { id: 'play-queue.play-last' }),
                                }),
                            (0, i.jsx)(aT.H, { disabled: !ea, shareLink: q, entityMeta: ei }),
                            B &&
                                (0, i.jsx)(ts.Dr, {
                                    icon: (0, i.jsx)(eq.I, { variant: 'bucket', size: 'xxs' }),
                                    onClick: et,
                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.remove-playlist' }),
                                }),
                            (B || F) && (0, i.jsx)(au, { playlist: u }),
                        ],
                    });
                }),
                aL = (0, l.PA)((e) => {
                    var t, a;
                    let { playlist: l, isDisabled: u, className: p, forwardRef: m } = e,
                        { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: y } = (0, e1.q)(),
                        { from: g, utmLink: v } = (0, eg.f)({
                            pageId: h._Q.PLAYLIST,
                            blockId: em.U.PLAYLIST,
                            contextType: eu.K.Playlist,
                            contextId: l.uuid,
                            pageEntityId: l.uuid,
                        }),
                        {
                            settings: { isMobile: A },
                            sonataState: f,
                            trailer: C,
                            playlist: {
                                filters: { activeFilter: x, activeFilterName: P },
                                enableVariousAutoFlow: E,
                                trackIds: T,
                                isRewind2024Playlist: b,
                                setShouldShowTrailerOnboarding: S,
                            },
                            user: L,
                            paywall: { modal: D },
                        } = (0, k.g)(),
                        I = A && !L.isAuthorized,
                        j = A && !L.hasPlus && L.isAuthorized,
                        N = I || j,
                        B = (0, e2.N)(),
                        { formatMessage: R, formatNumber: O } = (0, o.A)(),
                        [F, w] = (0, s.useState)(!1),
                        U = (0, e$.K)(l),
                        M = (0, eQ.A)(l),
                        H = (0, e0.F)(),
                        Y = !A,
                        W = (0, s.useRef)(null),
                        z = (0, eJ.f)(),
                        K = (0, eZ.P)(),
                        { controlSize: G, iconSize: V } = (0, ta.q)(A),
                        { notify: q } = (0, ed.l)(),
                        X = l.canUserChange && !A,
                        $ = (0, n.useSearchParams)(),
                        Q = (0, s.useMemo)(() => {
                            if (b && l.personalColor) return (0, e4.R)(l.personalColor);
                        }, [b, l.personalColor]),
                        Z = (0, eV.c)(() => {
                            var e;
                            null == (e = W.current) || e.focus();
                        });
                    (0, s.useEffect)(() => {
                        z();
                    }, [z]);
                    let J = (0, eV.c)(async (e) => {
                            (await l.changeTitle(e)) === e3.F.ERROR &&
                                q((0, i.jsx)(ec.h, { error: R({ id: 'playlist-errors.failed-to-change-title' }) }), { containerId: eo.u.ERROR });
                        }),
                        { isPlaying: ee, togglePlay: et } = (0, e9.D)({
                            playContextParams: {
                                contextData: {
                                    type: eu.K.Playlist,
                                    meta: { id: l.id, uuid: l.uuid },
                                    filter: x,
                                    filterName: P,
                                    enableVariousAutoFlow: E,
                                    from: g,
                                    utmLink: v,
                                },
                                loadContextMeta: !0,
                                entitiesData: f.unloadedEntitiesDataFromModels,
                            },
                        }),
                        [ea, ei] = (0, s.useState)(ee),
                        er = (0, eV.c)(() => {
                            if (!K()) {
                                if (_) return void y();
                                if (B) return void D.open();
                                (et(), f.setPlaylistFilter(x));
                            }
                        });
                    (0, s.useEffect)(() => {
                        ee && (f.playlistFilter === x || ((0, eK.A)(f.playlistFilter) && (0, eK.A)(x))) ? ei(!0) : ei(!1);
                    }, [ee, f.playlistFilter, x]);
                    let el = (0, s.useMemo)(() => {
                            if (l.actualLikesCount && l.actualLikesCount > 0)
                                return (0, i.jsx)(eP.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 's',
                                    weight: 'medium',
                                    children: l.actualLikesCount && O(l.actualLikesCount),
                                });
                        }, [l.actualLikesCount, O]),
                        en = (0, s.useMemo)(
                            () =>
                                A
                                    ? (0, i.jsx)(e7.D, {
                                          ref: W,
                                          className: (0, r.$)(tl().playControl, { [tl().playControl_withLogin]: N }),
                                          color: N ? 'secondary' : 'primary',
                                          buttonVariant: 'default',
                                          iconSize: N ? V : 'xxl',
                                          size: N ? G : void 0,
                                          isPlaying: ea,
                                          variant: N ? 'default' : 'filled',
                                          onClick: er,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                      })
                                    : (0, i.jsx)(e7.D, {
                                          ref: W,
                                          className: tl().playControl,
                                          withRipple: !0,
                                          buttonVariant: 'default',
                                          radius: 'xxxl',
                                          size: 's',
                                          color: 'primary',
                                          iconSize: 'xxs',
                                          isPlaying: ea,
                                          onClick: er,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                          children: (0, i.jsx)(eG.A, { id: 'player-actions.listen' }),
                                      }),
                            [u, A, er, ea, N, V, G],
                        ),
                        es = (0, eV.c)(() => {
                            K() || (C.setUtmLink(v), C.openPlaylistTrailer(l.id), H(d.DomainObjectType.Playlist, l.id));
                        }),
                        ep = (0, eV.c)(() => {
                            if (_) return void y();
                            es();
                        });
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = l.trailer) ? void 0 : e.isAvailable) && 'true' === $.get(e8.K.OPEN_TRAILER) && es();
                    }, [b, l.personalColor, es, $, S, null == (t = l.trailer) ? void 0 : t.isAvailable]);
                    let e_ = (0, s.useMemo)(() => {
                            var e;
                            return (null == (e = l.trailer) ? void 0 : e.isAvailable) && !A
                                ? (0, i.jsx)(tt.L, {
                                      children: (0, i.jsx)(te.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: tA().trailerControl,
                                          onClick: ep,
                                          disabled: !l.isAvailable,
                                          style: Q,
                                          children: (0, i.jsx)(eG.A, { id: 'entity-names.trailer' }),
                                      }),
                                  })
                                : null;
                        }, [ep, A, null == (a = l.trailer) ? void 0 : a.isAvailable, l.isAvailable, Q]),
                        ev = (0, s.useMemo)(() => {
                            if (l.canUserChange) return (0, i.jsx)('div', { className: tA().ugcControls, children: (0, i.jsx)(tX, { playlist: l }) });
                        }, [l]),
                        eA = (0, s.useMemo)(() => R({ id: 'entity-names.likes-count-description' }, { count: l.actualLikesCount }), [R, l.actualLikesCount]),
                        eh = (0, eR.L)(() => {
                            if (!l.isFavouritePlaylist)
                                return A
                                    ? (0, i.jsx)(e6.c, {
                                          className: tA().likeControl,
                                          isLiked: l.isLiked,
                                          onClick: U,
                                          variant: 'default',
                                          size: G,
                                          iconSize: V,
                                          iconClassName: tA().likeIcon,
                                          disabled: !L.isAuthorized,
                                      })
                                    : (0, i.jsx)(e6.c, {
                                          className: tA().likeControl,
                                          isLiked: l.isLiked,
                                          onClick: U,
                                          withRipple: !0,
                                          iconSize: V,
                                          size: G,
                                          variant: 'default',
                                          'aria-label': eA,
                                          iconClassName: tA().likeIcon,
                                          disabled: !L.isAuthorized,
                                          children: el,
                                      });
                        }),
                        ef = L.hasPlus && !A && l.isFavouritePlaylist && l.isOwnPlaylist,
                        eC = (0, s.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: tA().controls,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: tA().mainControls,
                                            children: [
                                                (0, i.jsx)(ey.B, {
                                                    objectType: d.DomainObjectType.Playlist,
                                                    objectId: String(l.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: en,
                                                }),
                                                (0, i.jsx)(tS, { playlistUuid: l.uuid }),
                                                e_,
                                                (0, i.jsx)(ey.B, {
                                                    objectType: d.DomainObjectType.Playlist,
                                                    objectId: String(l.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: eh,
                                                }),
                                                Y && (0, i.jsx)(e5.O, { onClick: M, isPinned: l.isPinned, className: tA().pinControl }),
                                                (0, i.jsx)(ak, {
                                                    playlist: l,
                                                    open: F,
                                                    onOpenChange: w,
                                                    wrapperClassName: tA().menuControl,
                                                    size: G,
                                                    icon: (0, i.jsx)(eq.I, { size: V, variant: 'more' }),
                                                    'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                                                }),
                                                ef && (0, i.jsx)(tg, { trackIds: T, className: tA().downloadControl, onRemove: Z }),
                                            ],
                                        }),
                                        ev,
                                    ],
                                }),
                            [en, e_, eh, M, l, ef, T, F, G, V, ev, Y, Z],
                        );
                    return (0, i.jsx)('div', {
                        className: tA().root,
                        children: (0, i.jsx)(ti.k, {
                            headingVariant: 'h1',
                            ref: m,
                            className: p,
                            controls: eC,
                            meta: (0, i.jsx)(tG, { playlist: l }),
                            entityName: R({ id: 'entity-names.playlist' }),
                            title: l.title,
                            canChangeTitle: X,
                            maxTitleLength: eX.k,
                            onTitleChange: J,
                            cover: (0, i.jsx)(tR, { playlist: l }),
                            showMobileLoginButton: I,
                            showMobileSubscriptionButton: j,
                        }),
                    });
                }),
                aD = (0, s.forwardRef)((e, t) => (0, i.jsx)(aL, { forwardRef: t, ...e }));
            var aI = a(10508),
                aj = a(90947),
                aN = a.n(aj);
            let aB = (e) => {
                let { className: t, isEmptySearch: a } = e,
                    l = (0, s.useMemo)(
                        () =>
                            a ? (0, i.jsx)(eG.A, { id: 'search-results.not-found-title' }) : (0, i.jsx)(eG.A, { id: 'error-messages.empty-collection-playlist-title' }),
                        [a],
                    ),
                    n = (0, s.useMemo)(
                        () =>
                            a
                                ? (0, i.jsx)(eG.A, { id: 'search-results.not-found-description' })
                                : (0, i.jsx)(eG.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [a],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(aN().root, t),
                    'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK,
                    children: [
                        (0, i.jsx)('div', {
                            className: aN().iconBackground,
                            children: (0, i.jsx)(eq.I, { variant: 'search', size: 'l', className: aN().icon, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON }),
                        }),
                        (0, i.jsx)(eP.DZ, { variant: 'h3', size: 'xs', className: aN().title, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE, children: l }),
                        (0, i.jsx)(eP.HL, { variant: 'span', size: 'l', className: aN().subtitle, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT, children: n }),
                    ],
                });
            };
            var aR = a(53264),
                aO = a(6349),
                aF = a(41544),
                aw = a(39099),
                aU = a(98865),
                aM = a.n(aU);
            let aH = (0, l.PA)((e) => {
                let { className: t, track: a, playContextParams: r, onClick: l } = e,
                    { formatMessage: n } = (0, o.A)(),
                    {
                        settings: { isMobile: d },
                    } = (0, k.g)(),
                    u = (0, e9.D)({ playContextParams: r, entityId: a.entityId }),
                    p = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(aO.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: aM().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    ),
                    m = (0, s.useCallback)(
                        (e) => {
                            (e.stopPropagation(), null == l || l(a));
                        },
                        [a, l],
                    ),
                    _ = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)('div', {
                                className: aM().controls,
                                children: (0, i.jsx)(tn.$, {
                                    className: aM().button,
                                    variant: 'text',
                                    size: 'xs',
                                    radius: 'xxxl',
                                    'aria-label': n({ id: 'interface-actions.add-track-to-playlist' }),
                                    onClick: m,
                                    icon: (0, i.jsx)(eq.I, { size: 'xxs', variant: 'add' }),
                                }),
                            }),
                        [n, m],
                    );
                return (0, i.jsx)(aw.C, {
                    className: t,
                    track: a,
                    meta: (0, i.jsx)(aF.j, { withArtistLink: !d, track: a }),
                    playButtonCellRender: p,
                    controls: _,
                    ...u,
                    'data-test-id': c.Kq.track.TRACK_PLAYLIST_ADDITION,
                });
            });
            var aY = a(32110);
            let aW = (e) => {
                let { item: t, from: a, tracks: i } = e,
                    r = i
                        .map((e) => {
                            if (e) return (0, aY.$)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: eu.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: r,
                };
            };
            var az = a(76035),
                aK = a.n(az);
            let aG = (0, l.PA)((e) => {
                var t, a, l, n, u, p, m, _, y;
                let { autoFocus: g, className: v } = e,
                    { formatMessage: A } = (0, o.A)(),
                    { playlist: f } = (0, k.g)(),
                    { search: C } = f,
                    x = (0, aR.R)(),
                    P = (0, s.useRef)(0),
                    E = (null == (t = f.meta) ? void 0 : t.isOwnPlaylist) ? h._Q.OWN_PLAYLISTS : h._Q.PLAYLIST,
                    { from: T } = (0, eg.f)({ pageId: E, blockId: em.U.FILTERED }),
                    { from: b } = (0, eg.f)({ pageId: E, blockId: em.U.SUGGESTED }),
                    [S, L] = (0, s.useState)(!1);
                (0, s.useEffect)(
                    () => () => {
                        window.clearTimeout(P.current);
                    },
                    [],
                );
                let D = (0, s.useMemo)(
                        () =>
                            (0, aI.A)((e) => {
                                let t = e.trim();
                                (C.setText(t),
                                    t && (null == f ? void 0 : f.meta) && (C.reset(), C.getTracks({ uid: f.meta.uid, kind: f.meta.kind })),
                                    (t && 0 !== t.length) || (S && (L(!1), f.refreshTracks()), C.setIdleState()));
                            }, 100),
                        [C, f, S],
                    ),
                    I = (0, s.useCallback)(
                        async (e) => {
                            if (f.meta) {
                                C.setAdditionTrackAnimation(e.id);
                                let t = x({ track: e, playlist: f.meta, withSuccessNotification: !1, withPageRefresh: !1 }),
                                    a = new Promise((e) => {
                                        P.current = window.setTimeout(e, 300);
                                    }),
                                    [i] = await Promise.all([t, a]);
                                i === el.Y.OK ? (C.replaceAdditionTrackInProggress(), L(!0)) : C.resetAdditionTrackAnimation();
                            }
                        },
                        [x, f.meta, C],
                    ),
                    j = (0, s.useMemo)(() => {
                        var e;
                        return C.isLoading
                            ? (0, i.jsx)(eA.D, { isActive: !0, className: aK().shimmerItem, variant: ev.X.PLAYLIST })
                            : null == (e = C.playlistTracks)
                              ? void 0
                              : e.map((e, t) => {
                                    var a, l;
                                    return e
                                        ? e.isTrackNonMusic
                                            ? (0, i.jsx)(
                                                  ey.B,
                                                  {
                                                      objectType: d.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (l = C.playlistTracks) ? void 0 : l.length,
                                                      children: (0, i.jsx)(ex.K, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: T, tracks: C.playlistTracks }),
                                                          className: (0, r.$)(aK().track, { [aK().appearingTrack]: e.id === C.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, i.jsx)(
                                                  ey.B,
                                                  {
                                                      objectType: d.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (a = C.playlistTracks) ? void 0 : a.length,
                                                      children: (0, i.jsx)(eL.K, {
                                                          className: (0, r.$)(aK().track, { [aK().appearingTrack]: e.id === C.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: T, tracks: C.playlistTracks }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null;
                                });
                    }, [C.isLoading, C.playlistTracks, C.additionTrackInProggress, T]),
                    N = (0, s.useMemo)(() => {
                        var e, t;
                        if (null == (e = f.meta) ? void 0 : e.canUserChange)
                            return C.isLoading
                                ? (0, i.jsx)(eA.D, { isActive: !0, className: aK().shimmerItem, variant: ev.X.PLAYLIST })
                                : null == (t = C.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, i.jsx)(
                                                  aH,
                                                  {
                                                      track: e,
                                                      className: (0, r.$)({ [aK().disappearingTrack]: e.id === C.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: eu.K.Various, meta: { id: e.entityId }, from: t },
                                                          queueParams: { index: 0, entityId: e.entityId },
                                                          loadContextMeta: !0,
                                                      }))(e, b),
                                                      onClick: I,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [null == (a = f.meta) ? void 0 : a.canUserChange, C.isLoading, C.suggestedTracks, C.additionTrackInProggress, b, I]),
                    B = (0, s.useMemo)(() => {
                        var e, t, a;
                        let r = !(null == (e = C.suggestedTracks) ? void 0 : e.length) || !(null == (t = f.meta) ? void 0 : t.canUserChange);
                        return (null == (a = C.playlistTrackIds) ? void 0 : a.length) || !r || C.isLoading
                            ? null
                            : (0, i.jsx)(aB, { className: aK().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (l = C.suggestedTracks) ? void 0 : l.length,
                        null == (n = C.playlistTrackIds) ? void 0 : n.length,
                        C.isLoading,
                        null == (u = f.meta) ? void 0 : u.canUserChange,
                    ]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t4.D, {
                            className: (0, r.$)(aK().root, v),
                            autoFocus: g,
                            initialValue: C.text,
                            correctedValue: null,
                            placeholder: A({ id: 'search.track-placeholder' }),
                            onChange: D,
                            resetButtonAriaLabel: A({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: C.reset,
                            innerInputProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT },
                            resetButtonProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON },
                            searchIconProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON },
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        C.text &&
                            (0, i.jsxs)('div', {
                                className: aK().content,
                                children: [
                                    B,
                                    (0, i.jsx)(e_.F, {
                                        blockType: d.EntityTypes.Tracks,
                                        blockId: d.EntityTypes.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        mainObjectId: String(null == f || null == (p = f.meta) ? void 0 : p.uuid),
                                        mainObjectType: d.DomainObjectType.Playlist,
                                        children: j,
                                    }),
                                    Number(null == (m = C.suggestedTracks) ? void 0 : m.length) > 0 &&
                                        (null == (_ = f.meta) ? void 0 : _.canUserChange) &&
                                        (0, i.jsx)(
                                            eP.DZ,
                                            {
                                                variant: 'h3',
                                                className: (0, r.$)(aK().catalog, { [aK().catalog_withTracks]: null == (y = C.playlistTrackIds) ? void 0 : y.length }),
                                                children: (0, i.jsx)(eG.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    N,
                                ],
                            }),
                    ],
                });
            });
            var aV = a(97109),
                aq = a(5867),
                aX = a(27625);
            let a$ = (e) => {
                let { children: t, child: a, className: r } = e,
                    { setChildElement: l, setChild: n } = (0, s.useContext)(aX.B),
                    o = (0, s.useRef)(null);
                return (
                    (0, s.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && l(o), a && n(a));
                    }, [o, a, l, n]),
                    (0, s.useEffect)(
                        () => () => {
                            n(null);
                        },
                        [n],
                    ),
                    (0, i.jsx)('div', { ref: o, className: r, children: t })
                );
            };
            var aQ = a(84715),
                aZ = a(69675),
                aJ = a(37760),
                a0 = a.n(aJ);
            let a1 = (0, l.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: r, setPlaylistStaticFiltersRef: l } = (0, b.g)(),
                    n = (0, aq.zb)(a.filters.activeFilterIndex),
                    o = (0, s.useRef)(null),
                    d = (0, aZ.$)();
                (0, s.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let c = (0, eV.c)((e) => {
                        var t;
                        if (!n.onTabChange || e === n.value) return;
                        (setTimeout(() => {
                            var t, a, i;
                            null == (i = o.current) || null == (a = i.children[e]) || null == (t = a.focus) || t.call(a);
                        }),
                            n.onTabChange(e));
                        let i = null == (t = a.filters.items) ? void 0 : t[e];
                        i && (a.filters.handleFilterClick(i), d({ tabId: i.id, tabPos: e + 1 }));
                    }),
                    u = null == (t = a.filters.items) ? void 0 : t.map((e) => ({ id: e.id, name: e.name }));
                return (0, i.jsx)(a$, {
                    child: (0, i.jsx)(aQ.A, { className: a0().stickyFilters, tabsState: n, handleFilterClick: c, ref: r, isSticky: !0, items: u }),
                    children: (0, i.jsx)(aQ.A, {
                        className: a0().staticFilters,
                        tabsState: n,
                        handleFilterClick: c,
                        ref: l,
                        carouselClassName: a0().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var a2 = a(98948),
                a4 = a(66784);
            let a9 = (0, l.PA)((e) => {
                let { className: t, creativeClassName: a, gradientClassName: r } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: l },
                        },
                    } = (0, k.g)(),
                    { formatMessage: n } = (0, o.A)(),
                    d = (0, eV.c)(() => {
                        l.setType(aV.h.BRANDING);
                    });
                return (
                    (0, s.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l],
                    ),
                    (0, i.jsxs)('div', {
                        className: t,
                        'aria-label': n({ id: 'advert.banner' }),
                        role: 'banner',
                        children: [
                            (0, i.jsx)(a4.N, {
                                className: r,
                                ownerId: a2.P,
                                containerId: m.LB,
                                params: m.w_,
                                onLoad: d,
                                onError: l.toggleHasErrorTrue,
                                onNoAds: l.toggleNoAdsTrue,
                            }),
                            (0, i.jsx)(a4.N, {
                                className: a,
                                ownerId: a2.P,
                                containerId: m.KZ,
                                params: m.RA,
                                onLoad: d,
                                onError: l.toggleHasErrorTrue,
                                onNoAds: l.toggleNoAdsTrue,
                            }),
                        ],
                    })
                );
            });
            var a3 = a(84146),
                a8 = a(9552),
                a6 = a.n(a8);
            let a5 = (0, l.PA)(() => {
                var e;
                let {
                        advert: t,
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a },
                        },
                    } = (0, k.g)(),
                    l = (0, y.Q)(),
                    n = a.isVisible && l.isEnabled;
                return t.isAdvertDisabled(a3.f.PLAYLIST_BRANDING)
                    ? null
                    : (0, i.jsx)('div', {
                          className: (0, r.$)({ [a6().brandedPlaylistBannerWrapper]: n }),
                          style: null == (e = l.data) ? void 0 : e.style,
                          children: (0, i.jsx)(a9, { creativeClassName: a6().creative }),
                      });
            });
            var a7 = a(71630),
                ie = a(18284),
                it = a(69873),
                ia = a.n(it);
            let ii = (0, l.PA)((e) => {
                    var t;
                    let { className: a, track: l } = e,
                        { formatMessage: n } = (0, o.A)(),
                        d = null == (t = l.file) ? void 0 : t.name,
                        u = (0, s.useCallback)(() => {
                            l.abortUpload();
                        }, [l]),
                        p = (0, s.useCallback)(() => {
                            l.retryUpload();
                        }, [l]),
                        m = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)(tn.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': n({ id: 'ugc.cancel-upload' }),
                                    color: 'primary',
                                    onClick: u,
                                    'data-test-id': c.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON,
                                    children: (0, i.jsx)(eP.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: ia().button,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.cancel-upload' }),
                                    }),
                                }),
                            [u, n],
                        ),
                        _ = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)(tn.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': n({ id: 'ugc.repeat-upload' }),
                                    color: 'primary',
                                    onClick: p,
                                    'data-test-id': c.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON,
                                    children: (0, i.jsx)(eP.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: ia().button,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.repeat-upload' }),
                                    }),
                                }),
                            [n, p],
                        ),
                        y = (0, s.useMemo)(() => {
                            switch (l.loadingState) {
                                case a7.p.IDLE:
                                case a7.p.PREPARE:
                                case a7.p.UPLOADING:
                                    return m;
                                case a7.p.REJECT:
                                    return _;
                                default:
                                    return null;
                            }
                        }, [m, _, l.loadingState]),
                        g = (0, s.useMemo)(() => {
                            switch (l.loadingState) {
                                case a7.p.IDLE:
                                case a7.p.PREPARE:
                                case a7.p.UPLOADING:
                                    return (0, i.jsx)(eP.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        'data-test-id': c.Kq.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-pending-status' }),
                                    });
                                case a7.p.PROCESSING:
                                case a7.p.RESOLVE:
                                    return (0, i.jsx)(eP.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-processing-status' }),
                                    });
                                case a7.p.REJECT:
                                    return (0, i.jsx)(eP.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        'data-test-id': c.Kq.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-error-status' }),
                                    });
                                default:
                                    return null;
                            }
                        }, [l.loadingState]);
                    return (0, i.jsxs)(ie.C, {
                        'aria-label': d,
                        className: (0, r.$)(ia().root, ia().card, ia().important, a),
                        'data-test-id': c.Kq.track.UGC_TRACK,
                        children: [
                            (0, i.jsx)(aO.q, { title: d, radius: 'xs', className: ia().playButton }),
                            (0, i.jsxs)('div', {
                                className: ia().meta,
                                children: [
                                    (0, i.jsx)(eP.HL, { variant: 'div', size: 'm', className: ia().title, 'data-test-id': c.Kq.track.UGC_TRACK_TITLE, children: d }),
                                    g,
                                ],
                            }),
                            (0, i.jsx)('div', { className: ia().controls, children: y }),
                        ],
                    });
                }),
                ir = (0, l.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: r, playlist: l } = (0, k.g)();
                    if (!(null == (t = l.meta) ? void 0 : t.kind) || !l.search.isNeededToLoad) return;
                    let n = r.getUploadingTracksByPlaylistKind(l.meta.kind);
                    if (0 !== n.length) return (0, i.jsx)('div', { className: a, children: n.map((e, t) => (0, i.jsx)(ii, { track: e }, t)) });
                });
            var il = a(22518),
                is = a.n(il);
            let io = (0, l.PA)((e) => {
                var t;
                let { playlistHeaderRef: a } = e,
                    {
                        playlist: l,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: n },
                        },
                    } = (0, k.g)(),
                    o = (0, y.Q)();
                return ((0, s.useEffect)(() => {
                    l.search.isFocused && l.search.removeFocus();
                }, [l.search.isFocused, l.search]),
                l.isLoading || !l.meta || l.isRejected)
                    ? (0, i.jsx)(ez.c, { className: is().header })
                    : (0, i.jsxs)(e_.F, {
                          blockType: d.EntityTypes.Header,
                          blockId: d.EntityTypes.Header,
                          blockPosX: 1,
                          blockPosY: 1,
                          mainObjectId: String(null == (t = l.meta) ? void 0 : t.uuid),
                          mainObjectType: d.DomainObjectType.Playlist,
                          objectsCount: 1,
                          children: [
                              (0, i.jsx)(a5, {}),
                              (0, i.jsx)(aD, {
                                  className: (0, r.$)(is().header, {
                                      [is().header_branded]: o.isEnabled,
                                      [is().header_brandedAxe]: n.isVisible && n.type === aV.h.BRANDING,
                                  }),
                                  playlist: l.meta,
                                  isDisabled: l.isDisabled,
                                  ref: a,
                              }),
                              (0, i.jsx)(aG, { autoFocus: !!(!l.items.length || l.search.isFocused) }),
                              l.isFiltersAvailable && (0, i.jsx)(a1, { playlist: l }),
                              (0, i.jsx)(ir, { className: is().content }),
                              l.shouldShowEmptyBlock && (0, i.jsx)(aB, { className: is().emptyPlaylist }),
                          ],
                      });
            });
            var id = a(83065),
                ic = a(11560);
            let iu = (0, l.PA)((e) => {
                    var t;
                    let { user: a, playlist: r } = e,
                        { formatMessage: l } = (0, o.A)(),
                        n = (0, tu.N)().get(tc.V4),
                        d = (0, id._)(n.webHost),
                        c = (0, s.useMemo)(() => {
                            let e =
                                    r.actualLikesCount > 0
                                        ? l({ id: 'entity-names.likes-counter' }, { counter: r.actualLikesCount })
                                        : l({ id: 'entity-names.likes-counter-empty' }),
                                t = ''.concat(l({ id: 'entity-names.playlist' }), ' • ').concat(e);
                            return r.description ? ''.concat(r.description, ' • ').concat(t) : t;
                        }, [l, r.actualLikesCount, r.description]);
                    if (a.isAuthorized) return null;
                    let { href: u } = (0, tk.no)('/playlists/:playlistUuid', { params: { playlistUuid: r.uuid }, options: { host: 'https://'.concat(d) } }),
                        p = {
                            '@type': 'MusicPlaylist',
                            name: r.title,
                            url: u,
                            description: c,
                            ...(r.modified && { datePublished: r.modified }),
                            ...(r.tracksCount && { numTracks: r.tracksCount }),
                            ...((null == (t = r.owner) ? void 0 : t.name) && { author: { '@type': 'Person', name: r.owner.name } }),
                        };
                    return (0, i.jsx)(ic.S, { value: p });
                }),
                ip = (0, l.PA)((e) => {
                    var t, a, l, m, _;
                    let { userId: g, kind: h, playlistUuid: x, preloadedPlaylistByUuid: P } = e,
                        {
                            user: B,
                            playlist: R,
                            settings: { isMobile: O },
                        } = (0, k.g)(),
                        { formatMessage: F } = (0, o.A)(),
                        { contentScrollRef: w, setContentScrollRef: U } = (0, b.g)(),
                        { forceUpdateRefCallback: M, offsetY: q } = (0, u.G)(w),
                        $ = (0, C.l)({ mainObjectType: d.DomainObjectType.Playlist }),
                        Q = (0, T.y)(null == R || null == (t = R.meta) ? void 0 : t.averageColor),
                        Z = (0, s.useMemo)(() => {
                            var e;
                            return R.isRewind2024Playlist && (null == (e = R.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, K.W)(),
                                          a = t === z.S.Light ? 0.7 : 0.36;
                                      return (0, W.e)(e, 0.6, a);
                                  })(R.meta.personalColor)
                                : Q;
                        }, [R.isRewind2024Playlist, null == (a = R.meta) ? void 0 : a.personalColor, Q]),
                        { topColorStyle: ee, headerStyle: et } = (0, v.Q)(Z, q);
                    (((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, G.P)()) ? t : {};
                        (0, s.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(x),
                        (0, S.J)(R.isResolved),
                        ((e) => {
                            (0, s.useEffect)(() => {
                                (null == e ? void 0 : e.meta) &&
                                    !e.isLoading &&
                                    H(
                                        ((e) => {
                                            var t, a, i, r, l, n, s, o, d, c, u, p, m;
                                            let _ = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                            return {
                                                owner: null == (t = e.meta) ? void 0 : t.owner,
                                                uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                                kind: (null == (i = e.meta) ? void 0 : i.kind) || 0,
                                                title: (null == (r = e.meta) ? void 0 : r.title) || '',
                                                description: null == (l = e.meta) ? void 0 : l.description,
                                                revision: (null == (n = e.meta) ? void 0 : n.revision) || 0,
                                                snapshot: 0,
                                                trackCount: _.length,
                                                cover: { uri: (null == (s = e.meta) ? void 0 : s.coverUri) || '', prefix: '', type: j.Q.FROM_ALBUM_COVER, custom: !1 },
                                                playlistUuid: (null == (o = e.meta) ? void 0 : o.uuid) || '',
                                                available: (null == (d = e.meta) ? void 0 : d.isAvailable) || !0,
                                                visibility: (null == (c = e.meta) ? void 0 : c.visibility) || N.L.PUBLIC,
                                                likesCount: null == (u = e.meta) ? void 0 : u.likesCount,
                                                modified: (null == (p = e.meta) ? void 0 : p.modified) || '',
                                                created: '',
                                                isBanner: !1,
                                                isPremiere: !1,
                                                durationMs: 0,
                                                collective: !1,
                                                ogImage: (null == (m = e.meta) ? void 0 : m.coverUri) || '',
                                                tags: [],
                                                tracks: _,
                                            };
                                        })(e),
                                        { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                    ).then((e) => {
                                        (0, I.j)(e);
                                    });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, e]);
                        })(R),
                        (0, f.A)(),
                        ((e) => {
                            let t = (0, Y.n)(),
                                { paywall: a } = (0, k.g)(),
                                i = t && e;
                            (0, s.useEffect)(
                                () => (
                                    i && a.openFreemiumCollectionPaywall(),
                                    () => {
                                        a.clearFreemiumCollectionBarrier();
                                    }
                                ),
                                [i, a],
                            );
                        })(R.isFavouritePlaylist),
                        (0, s.useEffect)(
                            () => (
                                $(!0),
                                () => {
                                    $(!1);
                                }
                            ),
                            [$],
                        ),
                        (0, s.useEffect)(
                            () => () => {
                                R.reset();
                            },
                            [R, x, g, h],
                        ));
                    let ea = (0, s.useMemo)(
                            () => ({
                                Header: () => (0, i.jsx)(io, { playlistHeaderRef: M }),
                                Item: R.isDragAndDropEnabled ? J : void 0,
                                Footer: () => (0, i.jsx)(eW, { playlist: R }),
                            }),
                            [M, R, R.isDragAndDropEnabled],
                        ),
                        ei = (0, s.useCallback)(
                            (e) => {
                                R.getTracksByRange(e);
                            },
                            [R],
                        ),
                        er = (0, s.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = R.items[e]) ? void 0 : t.key;
                            },
                            [R.items],
                        ),
                        el = (0, s.useCallback)((e) => e, []),
                        en = (0, y.Q)();
                    if (
                        (R.isNeededToLoad &&
                            ('string' == typeof x
                                ? (0, s.use)(R.getPlaylistByUuid({ playlistUuid: x, resumeStream: !1, preloadedPlaylist: P }))
                                : 'string' == typeof g &&
                                  'string' == typeof h &&
                                  (0, s.use)(R.getPlaylistByUserIdAndKind({ userId: g, playlistKind: Number(h), resumeStream: !1 }))),
                        R.uuid &&
                            R.isResolved &&
                            R.similarEntities.isNeededToLoad &&
                            R.isSimilarEntitiesEnabled &&
                            (0, s.use)(R.getSimilarEntities({ playlistUuid: R.uuid })),
                        R.isNotFound && (0, n.notFound)(),
                        R.isRejected)
                    )
                        return (0, i.jsx)(p.SomethingWentWrong, {});
                    let es = en.isEnabled ? L.V.BRANDED_PLAYLIST : L.V.INNER;
                    return (0, i.jsxs)(E.h, {
                        tabId: R.filters.activeFilter || '',
                        tabPos: R.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(A.h, {
                                scrollElement: w,
                                children: (0, i.jsxs)('div', {
                                    className: X().wrapper,
                                    style: null == (l = en.data) ? void 0 : l.style,
                                    children: [
                                        (0, i.jsx)(L.Y, { variant: es, style: et }),
                                        !en.isEnabled && (0, i.jsx)('div', { className: X().averageColorBackground, style: ee }),
                                        (0, i.jsx)(eB, {
                                            playlist: R,
                                            children: (0, i.jsx)(D.$, {
                                                context: {
                                                    listAriaLabel: F(
                                                        { id: 'entity-names.playlist-tracks-list' },
                                                        { playlistName: (null == (m = R.meta) ? void 0 : m.title) || '' },
                                                    ),
                                                },
                                                className: (0, r.$)(X().root, X().important),
                                                listClassName: X().content,
                                                customComponents: ea,
                                                computeItemKey: R.isDragAndDropEnabled ? er : el,
                                                totalCount: R.virtualListItemsCount,
                                                itemContentCallback: (e) => (0, i.jsx)(eI, { index: e }),
                                                onGetDataByRange: ei,
                                                debounceDurationInMs: 300,
                                                initialItemCount: null == (_ = R.items) ? void 0 : _.length,
                                                handleRef: U,
                                                shouldTriggerRangeChangedOn: [R.filters.activeFilter, R.virtualListItemsCount],
                                                testId: c.Xk.playlist.PLAYLIST_PAGE,
                                                isMobileLayout: O,
                                                useWindowScroll: O,
                                                withFooter: !0,
                                                withForceScroll: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            R.meta && (0, i.jsx)(iu, { user: B, playlist: R.meta }),
                        ],
                    });
                }),
                im = (0, l.PA)((e) =>
                    (0, i.jsx)(g.A, {
                        containerId: m.LB,
                        expectedType: _.k.PLAYLIST_GRADIENT,
                        children: (0, i.jsx)(P.n, {
                            pageId: h._Q.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, i.jsx)(x.j, { children: (0, i.jsx)(ip, { ...e }) }),
                        }),
                    }),
                );
        },
        21213: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => r });
            var i = a(36095);
            let r = (e, t, a) => {
                let r = null != t ? t : i.wT,
                    l = null != a ? a : i.by,
                    n = (0, i.de)((0, i.aq)(e), r, l),
                    s = Math.round(255 * n[0]),
                    o = Math.round(255 * n[1]),
                    d = Math.round(255 * n[2]);
                return 'rgb('.concat(s, ', ').concat(o, ', ').concat(d, ')');
            };
        },
        22034: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        22293: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => p });
            var i = a(74631),
                r = a(67379),
                l = a(36619),
                n = a(76945),
                s = a(59450),
                o = a(71035),
                d = a(84e3),
                c = a(79670),
                u = a(97952);
            let p = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, s.st)(),
                    p = (0, d.U)(),
                    { hash: m } = (0, s.gf)(),
                    { pageId: _ } = (0, u.$)(),
                    y = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !_ ||
                            !m ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[_];
                        if (!t) return;
                        let i = {
                                hash: m,
                                pageId: l.AppScreen.Link,
                                entityType: l.EntityTypes.Deeplink,
                                entityId: l.EntityTypes.Deeplink,
                                from: l.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            s = (0, r.F)({ params: i, logger: p, context: 'useSendDeeplinkNavigationEvent' });
                        s && (0, n.ID)(a.evgenInstance, s);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && y();
                    }, [t, y]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || y({ deepLink: e });
                    })
                );
            };
        },
        22518: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                header_brandedAxe: 'PlaylistPageHeader_header_brandedAxe__RDLB2',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        24252: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i = a(98797),
                r = a(74268),
                l = a(74631),
                n = a(17226),
                s = a(58025);
            class o extends i.uN {}
            (0, s._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === n.v.ENTER;
                    },
                },
            ]);
            let d = () => {
                let [e, t] = (0, l.useState)(null),
                    a = (0, l.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, l.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: r.JR, keyboardCodes: { start: [n.v.ENTER], cancel: [n.v.ESCAPE], end: [n.v.ENTER] } }),
                    ),
                };
            };
        },
        25469: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => A });
            var i = a(25839),
                r = a(88204),
                l = a(74631),
                n = a(71035),
                s = a(26417),
                o = a(97109),
                d = a(27954),
                c = a(96618),
                u = a(33971),
                p = a(49337);
            let m = (e, t) => (t === p.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                _ = (e) => e.toString(16).padStart(2, '0');
            var y = a(78978),
                g = a(27669);
            let v = (e) =>
                    (0, y.m)(e) &&
                    (e.type === g.k.PLAYLIST_GRADIENT || e.type === g.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                A = (0, r.PA)((e) => {
                    let { children: t, containerId: a, expectedType: r } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: p, brandedEntityAxeBanner: y },
                            },
                        } = (0, d.g)(),
                        { theme: A } = (0, c.W)(),
                        h = (0, l.useContext)(u.G),
                        [f, C] = (0, l.useState)(null),
                        x = (0, n.c)((e) => {
                            (0, s.f)(e, a, v) && e.data.type === r && C(e.data);
                        });
                    (0, l.useEffect)(
                        () => (
                            window.addEventListener('message', x),
                            () => {
                                window.removeEventListener('message', x);
                            }
                        ),
                        [x],
                    );
                    let P = r === g.k.PLAYLIST_GRADIENT && p.isVisible && p.type !== o.h.EMPTY,
                        E = r === g.k.AXE_GRADIENT && y.isVisible && y.type !== o.h.EMPTY,
                        T = P || E,
                        b = (0, l.useMemo)(() => {
                            if ((null == f ? void 0 : f.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    y.isVisible && y.type !== o.h.EMPTY && A
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  r = parseInt(a.substring(2, 4), 16),
                                                  l = parseInt(a.substring(4, 6), 16),
                                                  n = m(i, t),
                                                  s = m(r, t),
                                                  o = m(l, t);
                                              return '#'.concat(_(n)).concat(_(s)).concat(_(o));
                                          })(f.payload.color, A)
                                        : f.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === f.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': f.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': f.payload.button.textColor,
                                  };
                        }, [null == f ? void 0 : f.payload.color, null == f ? void 0 : f.payload.button, A, y.isVisible, y.type]),
                        S = (0, l.useMemo)(() => (T && null !== f ? { data: { type: f.type, style: b, button: f.payload.button }, isEnabled: T } : h), [f, b, T, h]);
                    return (0, i.jsx)(u.G.Provider, { value: S, children: t });
                });
        },
        26417: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, r, l;
                let n = null != (l = null == (r = document.getElementById(t)) || null == (i = r.querySelector('iframe')) ? void 0 : i.contentWindow) ? l : null;
                return null !== n && e.source === n && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        27669: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        27954: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => l, g: () => n });
            var i = a(74631),
                r = a(36432);
            let l = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(l);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        29093: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        29504: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        32110: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(16886);
            let r = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        33971: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(74631).createContext)({ data: null, isEnabled: !1 });
        },
        37588: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        37760: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        40422: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistCover_root__Vdn75',
                coverButton: 'PageHeaderPlaylistCover_coverButton__dw0rj',
                root_hoverable: 'PageHeaderPlaylistCover_root_hoverable__ZeqpX',
                coverImage: 'PageHeaderPlaylistCover_coverImage__OC58K',
                backCoverColor: 'PageHeaderPlaylistCover_backCoverColor__7z3dk',
                button: 'PageHeaderPlaylistCover_button__vCYgD',
                fileUploadContainer: 'PageHeaderPlaylistCover_fileUploadContainer___JnqP',
                fileUploadContainer_hovered: 'PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X',
                buttonContainer: 'PageHeaderPlaylistCover_buttonContainer__OkEaT',
                buttonContainer_withCursorPointer: 'PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha',
                formFile: 'PageHeaderPlaylistCover_formFile__1xnry',
            };
        },
        42853: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var i = a(40110),
                r = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        43478: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(74631),
                r = a(22939),
                l = a(70825);
            let n = (e) => {
                let { playlistId: t, filter: a } = e;
                return (0, i.useMemo)(() => (t ? (0, l.t)({ contextType: r.K.Playlist, contextId: t, filter: a }) : null), [t, a]);
            };
        },
        47062: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => s });
            var i = a(25839),
                r = a(89288);
            let l = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                n = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                s = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let s = (0, r.ky)(e).toString(),
                        o = [...s.matchAll(l)];
                    return s.split(n).reduce((e, r, l) => {
                        e.push(r);
                        let { 1: n, 2: s } = o[l] || [];
                        return (n && s && e.push((0, i.jsx)(t, { href: s, ...a, children: n })), e);
                    }, []);
                };
        },
        47127: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        48022: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistMeta_root__9SHZ0',
                description: 'PageHeaderPlaylistMeta_description__edoVx',
                descriptionButton: 'PageHeaderPlaylistMeta_descriptionButton__Jkbg9',
                descriptionLink: 'PageHeaderPlaylistMeta_descriptionLink__OcY5m',
                updatedText: 'PageHeaderPlaylistMeta_updatedText__FSo_0',
                descriptionActionLink: 'PageHeaderPlaylistMeta_descriptionActionLink__aGgtK',
                addDescription: 'PageHeaderPlaylistMeta_addDescription__bFw2Y',
                textField: 'PageHeaderPlaylistMeta_textField__J5QMd',
                actionButtons: 'PageHeaderPlaylistMeta_actionButtons__EYX8Z',
                saveButton: 'PageHeaderPlaylistMeta_saveButton__rZbPS',
                cancelButton: 'PageHeaderPlaylistMeta_cancelButton__Qc5lG',
            };
        },
        48288: (e) => {
            e.exports = {
                cancelIcon: 'DownloadButton_cancelIcon__MR36M',
                root_downloading: 'DownloadButton_root_downloading__H8Eh7',
                root: 'DownloadButton_root__AU5eq',
                downloadingProgress: 'DownloadButton_downloadingProgress__eenjt',
                progress: 'DownloadButton_progress__MM72T',
                progressText: 'DownloadButton_progressText__aQ12B',
                downloadedIcon: 'DownloadButton_downloadedIcon__tETl2',
            };
        },
        48830: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
        49890: (e) => {
            e.exports = { button: 'PageHeaderPlaylistUgcUploadButton_button__mWtCr', form: 'PageHeaderPlaylistUgcUploadButton_form__V64Yu' };
        },
        51859: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, u: () => r });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                r = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        52527: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => n });
            var i = a(49337),
                r = a(96618),
                l = a(21213);
            let n = (e) => {
                let { theme: t } = (0, r.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, l.e)(e, 0.8, a) };
            };
        },
        52970: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => s });
            var i = {
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
                    6927: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    9791: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0));
                        let r = a(4377),
                            l = a(5881),
                            n = i(a(6927));
                        t.Divider = (e) => {
                            let { className: t, orientation: a = 'horizontal', children: i, ...s } = e,
                                o = i && (0, r.jsx)('span', { children: i });
                            return (0, r.jsx)('div', {
                                className: (0, l.clsx)(n.default.root, { [n.default[a]]: a, [n.default.hasLabel]: o }, t),
                                ...s,
                                role: 'separator',
                                'aria-orientation': a,
                                children: o,
                            });
                        };
                    },
                },
                r = {};
            function l(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.Divider = void 0));
                var e = l(9791);
                Object.defineProperty(n, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var s = n.Divider;
            n.__esModule;
        },
        56918: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        57024: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => l, UC: () => n, dM: () => s, uV: () => o });
            var i = a(93690),
                r = a(58848);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57469: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        58091: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        58509: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var i = a(89288),
                r = a(49337),
                l = a(96618);
            let n = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r: a, g: l, b: n } = (0, i.E2)(e),
                        s = t === r.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(l, ', ').concat(n, ', ').concat(s, ')');
                }
            };
        },
        58848: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59911: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(74631);
            let r = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        66784: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(25839),
                r = a(88204),
                l = a(84059),
                n = a(74631),
                s = a(97109),
                o = a(74068),
                d = a(84e3),
                c = a(27954),
                u = a(49337),
                p = a(96618);
            let m = (0, r.PA)((e) => {
                let { className: t, ownerId: a, containerId: r, params: m, onLoad: _, onRender: y, onNoAds: g, onError: v } = e,
                    { user: A } = (0, c.g)(),
                    h = (0, l.usePathname)(),
                    f = (0, l.useSearchParams)(),
                    { create: C, destroy: x, initialize: P } = (0, o.s)(),
                    { theme: E } = (0, p.W)(),
                    T = (0, d.U)(),
                    b = (0, n.useRef)(!0),
                    S = { ...m };
                return (
                    (S.puid1 = A.advertRole),
                    (0, n.useEffect)(() => {
                        C({
                            ownerId: a,
                            containerId: r,
                            params: S,
                            insertionCodeParams: { darkTheme: E === u.S.Dark, additionalClasses: E ? [E] : [] },
                            onClose: () => {
                                T.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((T.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == _ || _(s.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == _ || _(s.h.DIRECT);
                                    return;
                                }
                                null == _ || _(s.h.CREATIVE);
                            },
                            onRender: () => {
                                (T.log('[AdvertBanner] Render'), null == y || y());
                            },
                            onStub: () => {
                                (T.log('[AdvertBanner] Stub'), null == g || g());
                            },
                            onError: (e) => {
                                (T.log('[AdvertBanner] Error', { error: e }), null == v || v());
                            },
                        });
                    }, []),
                    (0, n.useEffect)(() => {
                        if (b.current) {
                            b.current = !1;
                            return;
                        }
                        (T.log('[AdvertBanner] Destroy'), x(r), T.log('[AdvertBanner] Initialize'), P(r));
                    }, [h, f, r, x, P, T]),
                    (0, i.jsx)('div', { id: r, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        68854: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        69041: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => x });
            var i = a(25839),
                r = a(82298),
                l = a(46189),
                n = a(88204),
                s = a(74631),
                o = a.t(s, 2),
                d = a(61493),
                c = a(9911),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                p = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = p[t];
                    if (void 0 !== a) return a.exports;
                    var i = (p[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                m.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                m.__esModule);
            var _ = m.useForwardRef,
                y = a(51859),
                g = a(27954),
                v = a(80986),
                A = a(22034),
                h = a.n(A);
            let f = { [y.u.Desktop]: { start: 40, end: 20 }, [y.u.Mobile]: { start: 40, end: 40 } },
                C = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: n,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: p,
                            buttonSize: m,
                            buttonVariant: A,
                            withSecondaryColor: C,
                        } = e,
                        {
                            settings: { isMobile: x },
                        } = (0, g.g)(),
                        P = _(n, null),
                        { shouldBackwardButtonBeDisabled: E, shouldForwardButtonBeDisabled: T, shouldHideControls: b } = (0, c.Y)(P),
                        [S, k] = (0, s.useMemo)(() => {
                            let e = (0, l.A)(f, o);
                            return [x ? e[y.u.Mobile].start : e[y.u.Desktop].start, x ? e[y.u.Mobile].end : e[y.u.Desktop].end];
                        }, [o, x]),
                        L = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = P.current) ? void 0 : t.children[e],
                                    { current: i } = P;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < S) {
                                    i.scrollLeft = a.offsetLeft - S;
                                    return;
                                }
                                let r = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                r < k && (i.scrollLeft -= r - k);
                            },
                            [P, k, S],
                        ),
                        D = (0, s.useCallback)(
                            (e) => {
                                var t, i;
                                (L(e), null == (t = (i = a.props).onTabChange) || t.call(i, e));
                            },
                            [a, L],
                        ),
                        I = (0, s.cloneElement)(a, { forwardRef: P, className: (0, r.$)(h().wrapper, a.props.className, h().carousel, h().important), onTabChange: D });
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(
                            h().root,
                            {
                                [h().root_carouselBetweenArrows]: u,
                                [h().root_arrowLeft_hidden]: E,
                                [h().root_arrowRight_hidden]: T,
                                [h().root_arrow_hidden]: E && T && b,
                            },
                            t,
                        ),
                        'data-test-id': d.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: h().list, children: I }),
                            !x &&
                                (0, i.jsx)(v.X, {
                                    className: (0, r.$)(h().buttons, p),
                                    carouselRef: P,
                                    backwardControlClassName: h().control,
                                    forwardControlClassName: h().control,
                                    withSecondaryColor: C,
                                    buttonSize: m,
                                    buttonVariant: A,
                                }),
                        ],
                    });
                }),
                x = (0, s.forwardRef)((e, t) => (0, i.jsx)(C, { forwardRef: t, ...e }));
        },
        69675: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => p });
            var i = a(74631),
                r = a(67379),
                l = a(60296),
                n = a(59450),
                s = a(84e3),
                o = a(79670),
                d = a(26742),
                c = a(97952),
                u = a(10764);
            let p = () => {
                let e = (0, n.st)(),
                    t = (0, s.U)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: p } = (0, c.$)(),
                    { mainObjectType: m, mainObjectId: _ } = (0, d.N)(),
                    { skeleton: y } = (0, u.b)();
                return (0, i.useCallback)(
                    (i) => {
                        let { tabId: n = '', tabPos: s = 1, isTabSelectedByDefault: d = !1 } = i;
                        if (!e || !p) return;
                        let c = { hash: a, pageId: o.W[p], tabId: n, tabPos: s, isTabSelectedByDefault: d };
                        (y && (c.skeletonId = y), _ && m && ((c.mainObjectType = m), (c.mainObjectId = _)));
                        let u = (0, r.F)({ params: c, logger: t, context: 'useSendEventOnTabOpened' });
                        u && (0, l.TV)(e.evgenInstance, u);
                    },
                    [e, p, a, y, _, m, t],
                );
            };
        },
        69873: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                card: 'TrackUgcUpload_card__bidIG',
                important: 'TrackUgcUpload_important__RQkp0',
                playButton: 'TrackUgcUpload_playButton__3l2I7',
                meta: 'TrackUgcUpload_meta__aHQv9',
                title: 'TrackUgcUpload_title__Xq3UP',
                status: 'TrackUgcUpload_status__aFGvl',
                controls: 'TrackUgcUpload_controls__Ie2Ox',
            };
        },
        71630: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var i = (function (e) {
                return (
                    (e.IDLE = 'IDLE'),
                    (e.PREPARE = 'PREPARE'),
                    (e.UPLOADING = 'UPLOADING'),
                    (e.PROCESSING = 'PROCESSING'),
                    (e.RESOLVE = 'RESOLVE'),
                    (e.REJECT = 'REJECT'),
                    (e.CANCELLED = 'CANCELLED'),
                    e
                );
            })({});
        },
        72115: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => c });
            var i,
                r = a(6274),
                l = a(74631),
                n = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            r = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: l } = e,
                                n = (0, r.useRef)(null),
                                [s, o] = (0, r.useState)(!!a),
                                d = (0, r.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (o(!a),
                                                n.current && window.clearTimeout(n.current),
                                                (n.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, t)));
                                        }, l),
                                    [t, a, l],
                                ),
                                c = (0, r.useCallback)(() => {
                                    (o(!!a), n.current && window.clearTimeout(n.current));
                                }, [a]);
                            return (
                                (0, r.useEffect)(
                                    () => () => {
                                        n.current && window.clearTimeout(n.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let i = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, i.useState)(null);
                            return [
                                e,
                                (0, i.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let i = a(810),
                            r = a(1848),
                            l = a(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: n } = e,
                                { state: s, handleDebouncedToggle: o } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, i.useCallback)(() => {
                                    (a && o(), null == t || t());
                                }, [a, o, t]);
                            return (
                                (0, i.useEffect)(() => {
                                    let e = (0, r.getElementFromRefOrElement)(n);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, a), () => t.removeEventListener('scroll', d, a));
                                }, [n, d]),
                                s
                            );
                        };
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
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e](a, a.exports, o), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = o(810),
                    t = o(3830),
                    a = o(3940);
                d.useElementOffsetY = (i) => {
                    let [r, l] = (0, a.useForceUpdateRef)(),
                        [n, s] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e = null == r ? void 0 : r.getBoundingClientRect();
                            e && s(e.y);
                        }, [r]);
                    return ((0, e.useLayoutEffect)(o), (0, t.useScroll)({ onScroll: o, elementRef: i }), { forceUpdateRefCallback: l, offsetY: n });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        74068: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => p });
            var i = a(74631),
                r = a(71035);
            let l = null,
                n = [],
                s = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    l.context.AdvManager.render(...t);
                },
                o = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [r, ...s] = a;
                    if (null === l)
                        return void n.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == l ? void 0 : l.cspNonce) ? t : void 0, ...r }, ...s);
                        });
                    l.code.create({ cspNonce: null != (e = l.cspNonce) ? e : void 0, ...r }, ...s);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.reload(...t);
                        });
                    l.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.destroy(...t);
                        });
                    l.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.initialize(...t);
                        });
                    l.code.initialize(...t);
                },
                p = () => {
                    let [e, t] = (0, i.useState)(null !== l),
                        a = (0, r.c)((a) => {
                            var i, r, s;
                            let { cspNonce: o } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (r = window) ? void 0 : r.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (l = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: o }),
                                t(!0),
                                (s = l),
                                n.forEach((e) => {
                                    e(s);
                                }),
                                (n = []));
                        });
                    return { isLoaded: e, init: a, render: s, create: o, reload: d, destroy: c, initialize: u };
                };
        },
        74803: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        76035: (e) => {
            e.exports = {
                root: 'SearchPlaylistInput_root__o14iM',
                content: 'SearchPlaylistInput_content__iDyfU',
                catalog: 'SearchPlaylistInput_catalog__5r6Xm',
                catalog_withTracks: 'SearchPlaylistInput_catalog_withTracks__B2ZYF',
                track: 'SearchPlaylistInput_track__2TGLS',
                shimmerItem: 'SearchPlaylistInput_shimmerItem__V0cOt',
                emptyBlockContainer: 'SearchPlaylistInput_emptyBlockContainer__NSQKG',
                disappearingTrack: 'SearchPlaylistInput_disappearingTrack__D6ja5',
                disappearing: 'SearchPlaylistInput_disappearing__w48Cd',
                appearingTrack: 'SearchPlaylistInput_appearingTrack__CYHzN',
                appearing: 'SearchPlaylistInput_appearing__SafaE',
            };
        },
        78143: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => l });
            var i = a(27954),
                r = a(44806);
            let l = () => {
                var e, t, a;
                let { user: l, experiments: n, settings: s } = (0, i.g)();
                return (
                    !n.checkExperiment(r.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = s.browserInfo) ? void 0 : e.isTouch) &&
                    l.isAuthorized &&
                    !l.hasPlus &&
                    (null == (a = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        78299: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => P });
            var i = a(25839),
                r = a(82298),
                l = a(88204),
                n = a(74631),
                s = a(39004),
                o = a(8487);
            a(93588);
            var d = a(4071),
                c = a(66738),
                u = a(4254),
                p = a(67379),
                m = a(36619),
                _ = a(76945),
                y = a(59450),
                g = a(84e3),
                v = a(97952),
                A = a(89192),
                h = a(53712),
                f = a(15270),
                C = a(68854),
                x = a.n(C);
            let P = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: l } = (0, s.A)(),
                    C = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, y.st)(),
                        { hash: a } = (0, y.gf)(),
                        { pageId: i } = (0, v.$)(),
                        r = (0, g.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let l = (0, p.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, _.z5)(t.evgenInstance, l);
                    }, [t, e, a, i, r]);
                })(C);
                let { sendRefreshEvent: P } = (function () {
                        let e = (0, y.st)(),
                            { hash: t } = (0, y.gf)(),
                            { pageId: a } = (0, v.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, p.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    E = (0, n.useCallback)(() => {
                        (P(), (window.location.href = h.Z.main.href));
                    }, [P]),
                    { contentRef: T } = (0, A.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(x().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(f.L, { withBackwardFallback: '/', className: (0, r.$)(x().navigation, { [x().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(x().content, { [x().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(c.I, { className: x().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(x().title, x().important), variant: 'h3', size: 'xs', children: C }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(x().text, x().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: E,
                                    className: x().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        78978: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        80278: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        81022: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => n });
            var i = a(49337),
                r = a(96618),
                l = a(21213);
            let n = (e) => {
                let { theme: t } = (0, r.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, l.e)(e, 0.8, a) };
            };
        },
        81119: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l, m: () => r });
            var i = a(74631);
            let r = (0, i.createContext)(null);
            function l() {
                return (0, i.useContext)(r);
            }
        },
        81798: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        82967: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => A });
            var i = a(25839),
                r = a(82298),
                l = a(88204),
                n = a(74631),
                s = a(61493),
                o = a(54880),
                d = a(50209),
                c = a(27954),
                u = a(6349),
                p = a(62661),
                m = a(74756),
                _ = a(41544),
                y = a(39099),
                g = a(7929),
                v = a.n(g);
            let A = (0, l.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: l,
                        className: g,
                        withDNDBlock: A,
                        isDragging: h,
                        draggingClassName: f,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: x,
                        handleRemove: P,
                        withDislike: E,
                        withTrailer: T = !0,
                        beforeTitle: b,
                        removeButtonAriaLabel: S,
                        hideControls: k,
                    } = e,
                    L = (0, d.D)({ playContextParams: l, entityId: a.entityId }),
                    {
                        settings: { isMobile: D },
                    } = (0, c.g)(),
                    I = (0, o.X)(a.trackSource, { isMobile: D }),
                    j = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(y.C, {
                    className: (0, r.$)(g, { [v().trackWithDots]: A, [v().important]: A }),
                    track: a,
                    beforeBlock: A ? (0, i.jsx)(p.O, { className: (0, r.$)(v().dots, f), isDragging: h }) : void 0,
                    meta: (0, i.jsx)(_.j, { withArtistLink: I, beforeTitle: b, track: a, ignoreDislikedStyles: C, withSecondaryColor: x }),
                    playButtonCellRender: j,
                    controls: (0, i.jsx)(m.Q, {
                        track: a,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = l.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: x,
                        handleRemove: P,
                        withDislike: E,
                        withTrailer: T,
                        removeButtonAriaLabel: S,
                        hideControls: k,
                    }),
                    ...L,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        84e3: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => l });
            var i = a(36484),
                r = a(62562);
            let l = () => (0, r.N)().get(i.Zf);
        },
        84146: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        84715: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => B });
            var i = a(25839),
                r = a(82298),
                l = a(88204),
                n = a(74631),
                s = a(49656),
                o = a(51859),
                d = a(89192),
                c = a(27954),
                u = a(69041),
                p = a(9931),
                m = a(29504),
                _ = a(67379),
                y = a(60296),
                g = a(59450),
                v = a(84e3),
                A = a(79670),
                h = a(26742),
                f = a(97952),
                C = a(10764),
                x = a(79396),
                P = a(57469),
                E = a.n(P);
            let T = (e) => {
                let { filter: t, tabsState: a, value: l, isSticky: s, ...o } = e,
                    d = (() => {
                        let e = (0, n.useRef)(!1),
                            t = (0, g.st)(),
                            a = (0, v.U)(),
                            { hash: i } = (0, g.gf)(),
                            { pageId: r } = (0, f.$)(),
                            { mainObjectType: l, mainObjectId: s } = (0, h.N)(),
                            { skeleton: o } = (0, C.b)();
                        return (0, n.useCallback)(
                            (n) => {
                                let { tabId: d = '', tabPos: c = 1, isTabSelectedByDefault: u = !1 } = n;
                                if (!t || !r || e.current) return;
                                let p = { hash: i, pageId: A.W[r], tabId: d, tabPos: c, isTabSelectedByDefault: u };
                                (o && (p.skeletonId = o), s && l && ((p.mainObjectType = l), (p.mainObjectId = s)));
                                let m = (0, _.F)({ params: p, logger: a, context: 'useSendEventOnTabLoaded' });
                                m && ((0, y.hc)(t.evgenInstance, m), (e.current = !0));
                            },
                            [t, r, i, o, s, l, a],
                        );
                    })();
                return (
                    (0, n.useEffect)(() => {
                        d({ tabId: t.id, tabPos: l + 1, isTabSelectedByDefault: t.id === m.Q.ALL });
                    }, [t.id, l, d]),
                    (0, i.jsx)(x.o, { tabIndex: s ? -1 : 0, className: (0, r.$)(E().root, { [E().root_selected]: l === a.value }), title: t.name, value: l, ...o })
                );
            };
            var b = a(99221),
                S = a.n(b);
            let k = (0, l.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: l } = e;
                return (0, i.jsx)(p.wI, {
                    className: (0, r.$)(S().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, i.jsx)(p.zr, { className: (0, r.$)(S().root, l), shimmerClassName: S().shimmer, count: 3, isActive: a }),
                });
            });
            var L = a(74803),
                D = a.n(L);
            let I = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 40, end: 40 } },
                j = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 20, end: 50 } },
                N = (0, l.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: l,
                            forwardRef: o,
                            carouselClassName: m,
                            shimmerClassName: _,
                            isSticky: y,
                            items: g,
                            isShimmerVisible: v,
                            isShimmerActive: A,
                            skipSearchCheck: h = !1,
                        } = e,
                        {
                            playlist: f,
                            settings: { isMobile: C },
                        } = (0, c.g)(),
                        { playlistStickyFiltersRef: x, playlistStaticFiltersRef: P, contentScrollRef: E } = (0, d.g)(),
                        b = null != g ? g : f.filters.items,
                        S = (0, s.L)(() =>
                            (0, i.jsx)(p.wI, {
                                ref: o,
                                className: (0, r.$)(D().carousel, m),
                                ...t,
                                onTabChange: a,
                                children: null == b ? void 0 : b.map((e, a) => (0, i.jsx)(T, { filter: e, tabsState: t, value: a, isSticky: y }, e.id)),
                            }),
                        ),
                        L = (0, n.useCallback)(() => {
                            P && x && (P.scrollLeft = x.scrollLeft);
                        }, [P, x]),
                        N = (0, n.useCallback)(() => {
                            P && x && (x.classList.add(D().carousel_noSmooth), (x.scrollLeft = P.scrollLeft), x.classList.remove(D().carousel_noSmooth));
                        }, [P, x]),
                        [B, R] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        B && N();
                    }, [B, N]);
                    let O = (0, n.useCallback)(() => {
                        R((null == x ? void 0 : x.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [x]);
                    return (
                        (0, n.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                y
                                    ? (null == x || x.addEventListener('scroll', L, t), null == x || x.addEventListener('resize', L, t))
                                    : C
                                      ? (window.addEventListener('scroll', O, t), window.addEventListener('resize', O, t))
                                      : (null == E || E.addEventListener('scroll', O, t), null == E || E.addEventListener('resize', O, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [y, E, x, O, L, C]),
                        (null != v ? v : f.filters.isShimmerVisible)
                            ? (0, i.jsx)(k, { isActive: null == A || A, shimmerClassName: _ })
                            : b && 0 !== b.length && (h || f.search.isNeededToLoad)
                              ? (0, i.jsx)(u.F, { className: l, carouselElement: S, ref: o, scrollPadding: y ? j : I })
                              : void 0
                    );
                }),
                B = (0, n.forwardRef)((e, t) => (0, i.jsx)(N, { forwardRef: t, ...e }));
        },
        86166: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        89056: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        89725: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => n, E9: () => d, KZ: () => o, LB: () => s, RA: () => r, kz: () => l, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                r = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                l = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                n = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                s = 'adfox_173998931315812570',
                o = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        90947: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        91797: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var i = a(25839),
                r = a(74631),
                l = a(36619),
                n = a(61777),
                s = a(95314),
                o = a(66284),
                d = a(41707);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: p,
                            playlists: m,
                            containerClassName: _,
                            className: y,
                            headerClassName: g,
                            viewAllActionLink: v,
                            headingVariant: A,
                            shouldSendAnalyticsOnLoaded: h,
                            ...f
                        } = e,
                        C = (0, n.f)();
                    return (
                        (0, r.useEffect)(() => {
                            h && !a && C();
                        }, [a, C, h]),
                        (0, i.jsx)(o.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: y,
                            headerClassName: g,
                            containerClassName: _,
                            ref: t,
                            title: u,
                            description: p,
                            viewAllActionLink: v,
                            headingVariant: A,
                            ...f,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, i.jsx)(
                                              s.B,
                                              {
                                                  objectType: l.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, i.jsx)(d.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        92511: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(74631),
                r = a(33971);
            let l = () => (0, i.useContext)(r.G);
        },
        93596: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => m });
            var i = a(25839),
                r = a(71035),
                l = a(16886),
                n = a(24816),
                s = a(25982),
                o = a(91149),
                d = a(92942),
                c = a(30296),
                u = a(27954);
            let p = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function m(e, t, a, m) {
                let _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p,
                    { notify: y } = (0, d.l)(),
                    { fullscreenPlayer: g } = (0, u.g)(),
                    v = (0, c.e)();
                return (0, r.c)(() => {
                    let r = e.reduce((e, t) => {
                        let a = _(t);
                        return (a && e.push({ type: l.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!r.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == v || v.injectLast({ entitiesData: r, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == v || v.injectNext({ entitiesData: r, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = g.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO;
                    y((0, i.jsx)(s.l, { entityVariant: m.entityVariant, variant: t, entityTitle: m.entityTitle, coverUri: m.coverUri }), { containerId: d });
                });
            }
        },
        97109: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        98865: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylistAddition_playButtonCell__Ocnhq',
                controls: 'TrackPlaylistAddition_controls__S346Y',
                button: 'TrackPlaylistAddition_button__fsY9k',
            };
        },
        98948: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r, l: () => i });
            let i = 'yandex_rtb',
                r = 256152;
        },
        99221: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        99720: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { U: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(i || (i = {})));
        },
        99725: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = 100;
        },
    },
]);
