(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
    {
        86: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            let n = (0, r(53548).createContext)({ skeleton: void 0 });
        },
        4292: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        5503: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var n = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        5818: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        6087: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var n = r(76124),
                o = r.n(n);
        },
        7748: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o, g: () => a });
            var n = r(53548);
            let o = (0, n.createContext)(null);
            function a() {
                return (0, n.useContext)(o);
            }
        },
        8840: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => d, Gv: () => l, L5: () => c });
            var n,
                o = r(53548),
                a = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let n = r(810),
                            { innerWidth: o = 0, innerHeight: a = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: n, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= a) || (n >= 0 && n <= a)) && ((i >= 0 && i <= o) || (r >= 0 && r <= o));
                        }
                        function s(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function l(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = s),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: a, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [_, m] = (0, n.useState)({}),
                                    f = (0, n.useRef)(new Set()),
                                    p = (0, n.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : l((e) => {
                                                      let t = s(e.target);
                                                      if (t && p) {
                                                          if (f.current.has(t)) return;
                                                          (m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              a && e.isIntersecting && (f.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = s(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [u, p, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {},
                s = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return (a[t](n, n.exports, e), n.exports);
                })(597);
            s.__esModule;
            var l = s.createIntersectionObserver;
            s.defaultOptions;
            var c = s.getElementNameByDataAttribute;
            s.isInViewportNow;
            var d = s.useIntersectionObserver;
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
        10769: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => d });
            var n = r(88800),
                o = r(65724),
                a = r(35412),
                i = r(73170),
                s = r(29504),
                l = r(53533),
                c = r.n(l);
            let d = (e) => {
                let { title: t, children: r, restrictionsClassName: l, ...d } = e;
                return (0, n.jsxs)('section', {
                    className: c().root,
                    ...(0, a.OZ)(d),
                    children: [
                        t &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(s.HL, { variant: 'span', type: 'text', size: 'm', weight: 'medium', 'aria-hidden': !0, children: t }),
                                    (0, n.jsx)(i.q, { children: (0, n.jsx)(s.DZ, { variant: 'h4', children: t }) }),
                                ],
                            }),
                        (0, n.jsx)('div', { className: (0, o.$)(c().restrictions, l), children: r }),
                    ],
                });
            };
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        12816: (e, t, r) => {
            'use strict';
            r.d(t, { _Q: () => n, fD: () => a, qG: () => i, xK: () => o });
            var n = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let o = [
                    'home',
                    'sidebar',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                a = [
                    'home',
                    'sidebar',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                i = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        13315: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var n = r(30123);
            let o = (e) => e.startsWith(n.nl);
        },
        14518: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var n = r(53548),
                o = r(90334);
            function a() {
                return (0, n.useContext)(o.r);
            }
        },
        15028: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            let n = r(53548).createContext(null);
        },
        16161: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => d });
            var n,
                o = r(68211),
                a = r(53548),
                i = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
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
                    1561: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
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
                                    o = document.createElement('span'),
                                    a = Math.max(n.clientWidth, n.clientHeight),
                                    i = a / 2,
                                    s = n.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                ((o.style.width = ''.concat(a, 'px')),
                                    (o.style.height = ''.concat(a, 'px')),
                                    (o.style.left = 0 === e.clientX ? '0px' : ''.concat(l - i, 'px')),
                                    (o.style.top = ''.concat(c - i, 'px')),
                                    o.classList.add(t));
                                let d = n.getElementsByClassName(t)[0];
                                (d && d.remove(), n.insertBefore(o, n.firstChild));
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
                            o = r(6384);
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
                            let r = (0, o.findColorBucketByName)(e);
                            return r ? a(r) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, n.hexToHsl)(e),
                                    r = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === r ? (0, o.findColorBucketByHue)(t.h) : (0, o.findColorBucketByLightness)(t.l), hsl: t, mode: r };
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
                        var o = r(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return o.getElementFromRefOrElement;
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
                        let o = r(4377),
                            a = r(810),
                            i = r(5881),
                            s = r(6882),
                            l = n(r(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: n = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: f,
                                        role: p,
                                        onClick: E,
                                        radius: h = 'm',
                                        size: C,
                                        type: v = 'button',
                                        variant: A = 'default',
                                        withRipple: x = !0,
                                        withHover: b = !0,
                                        withBorder: g = !1,
                                        disabled: S,
                                        focusableWhenDisabled: y,
                                        'aria-disabled': O,
                                        iconClassName: N,
                                        contentContainerClassName: L,
                                        ...R
                                    } = e,
                                    T = (0, a.useId)(),
                                    D = !a.Children.toArray(c).filter(Boolean).length,
                                    j = 'left' === n,
                                    I = null,
                                    M = (0, a.isValidElement)(f);
                                if (m) {
                                    var B, P;
                                    I = (0, a.cloneElement)(m, {
                                        className: (0, i.clsx)(
                                            l.default.icon,
                                            {
                                                [l.default['icon_position_'.concat(n)]]: n && !D,
                                                [l.default.icon_withButtonSize]: !(null == (B = m.props) ? void 0 : B.size),
                                            },
                                            null == (P = m.props) ? void 0 : P.className,
                                            N,
                                        ),
                                        key: T,
                                    });
                                }
                                let w = (0, a.useMemo)(() => (M ? (0, o.jsx)('div', { className: l.default.spinnerContainer, children: f }) : null), [M, f]),
                                    k = (0, a.useCallback)(
                                        (e) => {
                                            if (S) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            M || (x && (0, s.createRipple)(e, l.default.ripple), null == E || E(e));
                                        },
                                        [S, M, E, x],
                                    );
                                return (0, o.jsx)('button', {
                                    ref: t,
                                    className: (0, i.clsx)(
                                        l.default.root,
                                        l.default['root_'.concat(u, '_').concat(A)],
                                        l.default['root_radius_'.concat(h)],
                                        l.default.root_size,
                                        {
                                            [l.default['root_'.concat(u, '_withHover_').concat(A)]]: b && !S && !M,
                                            [l.default['root_size_'.concat(C)]]: C,
                                            [l.default.root_withoutBorder]: !g,
                                            [l.default.root_withActiveSpinner]: M,
                                            [l.default.block]: r,
                                            [l.default.flexIcon]: _,
                                            [l.default.iconOnly]: D,
                                            [l.default.root_icon_left]: m && !D && j,
                                            [l.default.root_icon_right]: m && !D && !j,
                                        },
                                        d,
                                    ),
                                    type: v,
                                    role: p,
                                    onClick: k,
                                    ...R,
                                    disabled: S && !y,
                                    'aria-disabled': (S && y) || O,
                                    'data-disabled': S || void 0,
                                    'aria-live': M ? 'polite' : 'off',
                                    'aria-busy': M,
                                    children:
                                        m || M
                                            ? (0, o.jsxs)('span', {
                                                  className: (0, i.clsx)(l.default.contentContainer, { [l.default.contentContainer_block]: r }, L),
                                                  children: [m && j && I, !D && c, m && !j && I, w],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, a.forwardRef)((e, t) => (0, o.jsx)(c, { forwardRef: t, ...e }));
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
                    9037: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = r(7493),
                            l = n(r(1561)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, o.jsx)('div', { className: (0, a.clsx)(l.default.icon, { [l.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: r = !1, onChange: n, 'aria-label': d, 'aria-describedby': u, ..._ } = e,
                                [m, f] = (0, i.useState)(r),
                                p = (0, i.useCallback)(() => {
                                    let e = !m;
                                    (f(e), null == n || n(e));
                                }, [m, n]);
                            return (
                                (0, i.useEffect)(() => {
                                    f(r);
                                }, [r]),
                                (0, o.jsx)(s.Button, {
                                    className: (0, a.clsx)(l.default.root, { [l.default.root_checked]: m }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, o.jsx)(c, { isChecked: m }),
                                    withRipple: !1,
                                    onClick: p,
                                    role: 'switch',
                                    'aria-checked': m,
                                    'aria-label': d,
                                    'aria-describedby': u,
                                    ..._,
                                    color: m ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    2660: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.Z = void 0));
                var e = l(9037);
                Object.defineProperty(c, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var d = c.Z;
            c.X;
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        16967: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => _ });
            var n = r(21970),
                o = r(62571),
                a = r(45628);
            function i(e, t) {
                return e
                    .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/^\s*|\s*$/g, '');
            }
            var s = r(53548),
                l = r(62791),
                c = r(51374),
                d = function (e, t) {
                    return (
                        e &&
                        t &&
                        t.split(' ').forEach(function (t) {
                            e.classList
                                ? e.classList.remove(t)
                                : 'string' == typeof e.className
                                  ? (e.className = i(e.className, t))
                                  : e.setAttribute('class', i((e.className && e.className.baseVal) || '', t));
                        })
                    );
                },
                u = (function (e) {
                    function t() {
                        for (var t, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        return (
                            ((t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                            (t.onEnter = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    a = n[1];
                                (t.removeClasses(o, 'exit'), t.addClass(o, a ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, r));
                            }),
                            (t.onEntering = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    a = n[1];
                                (t.addClass(o, a ? 'appear' : 'enter', 'active'), t.props.onEntering && t.props.onEntering(e, r));
                            }),
                            (t.onEntered = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    a = n[1] ? 'appear' : 'enter';
                                (t.removeClasses(o, a), t.addClass(o, a, 'done'), t.props.onEntered && t.props.onEntered(e, r));
                            }),
                            (t.onExit = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.removeClasses(r, 'appear'), t.removeClasses(r, 'enter'), t.addClass(r, 'exit', 'base'), t.props.onExit && t.props.onExit(e));
                            }),
                            (t.onExiting = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.addClass(r, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e));
                            }),
                            (t.onExited = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.removeClasses(r, 'exit'), t.addClass(r, 'exit', 'done'), t.props.onExited && t.props.onExited(e));
                            }),
                            (t.resolveArguments = function (e, r) {
                                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r];
                            }),
                            (t.getClassNames = function (e) {
                                var r = t.props.classNames,
                                    n = 'string' == typeof r,
                                    o = n && r ? r + '-' : '',
                                    a = n ? '' + o + e : r[e],
                                    i = n ? a + '-active' : r[e + 'Active'],
                                    s = n ? a + '-done' : r[e + 'Done'];
                                return { baseClassName: a, activeClassName: i, doneClassName: s };
                            }),
                            t
                        );
                    }
                    (0, a.A)(t, e);
                    var r = t.prototype;
                    return (
                        (r.addClass = function (e, t, r) {
                            var n,
                                o = this.getClassNames(t)[r + 'ClassName'],
                                a = this.getClassNames('enter').doneClassName;
                            ('appear' === t && 'done' === r && a && (o += ' ' + a),
                                'active' === r && e && (0, c.F)(e),
                                o &&
                                    ((this.appliedClasses[t][r] = o),
                                    (n = o),
                                    e &&
                                        n &&
                                        n.split(' ').forEach(function (t) {
                                            e.classList
                                                ? e.classList.add(t)
                                                : (e.classList
                                                      ? t && e.classList.contains(t)
                                                      : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')) ||
                                                  ('string' == typeof e.className
                                                      ? (e.className = e.className + ' ' + t)
                                                      : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t));
                                        })));
                        }),
                        (r.removeClasses = function (e, t) {
                            var r = this.appliedClasses[t],
                                n = r.base,
                                o = r.active,
                                a = r.done;
                            ((this.appliedClasses[t] = {}), n && d(e, n), o && d(e, o), a && d(e, a));
                        }),
                        (r.render = function () {
                            var e = this.props,
                                t = (e.classNames, (0, o.A)(e, ['classNames']));
                            return s.createElement(
                                l.Ay,
                                (0, n.A)({}, t, {
                                    onEnter: this.onEnter,
                                    onEntered: this.onEntered,
                                    onEntering: this.onEntering,
                                    onExit: this.onExit,
                                    onExiting: this.onExiting,
                                    onExited: this.onExited,
                                }),
                            );
                        }),
                        t
                    );
                })(s.Component);
            ((u.defaultProps = { classNames: '' }), (u.propTypes = {}));
            let _ = u;
        },
        17071: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => n });
            var n = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        18052: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i, i: () => a });
            var n = r(53548),
                o = r(39499);
            let a = (0, n.createContext)(null),
                i = () => {
                    let e = (0, n.useContext)(a);
                    if (!e) throw new o.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
                };
        },
        20129: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => q });
            var n = r(88800),
                o = r(65724),
                a = r(84961),
                i = r(53548),
                s = r(2058),
                l = r(88969),
                c = r(17392),
                d = r(50408),
                u = r(96817),
                _ = r(11372),
                m = r(98225),
                f = r(29504),
                p = r(32353),
                E = r(29595),
                h = r(74965),
                C = r(51318),
                v = r(17071),
                A = r(38860),
                x = r(72288),
                b = r(27506),
                g = r(74773),
                S = r(66943),
                y = r(94058),
                O = r(37770),
                N = r(87366),
                L = r(76099),
                R = r(79418),
                T = r(29832),
                D = r(52300),
                j = r(7555),
                I = r(28830),
                M = r(81877),
                B = r(60978),
                P = r(5818),
                w = r.n(P);
            let k = (0, a.PA)((e) => {
                let { className: t, artist: r } = e,
                    { ref: a, intersectionPropertyId: s } = (0, I.n)(),
                    {
                        wizard: { toggleArtistLike: l, isArtistLiked: d },
                    } = (0, x.g)(),
                    { id: _, name: m, coverUri: p } = r,
                    E = (0, i.useCallback)(() => {
                        l(_);
                    }, [l, _]),
                    h = d(_),
                    C = (0, i.useMemo)(
                        () =>
                            (0, n.jsx)(j.t, {
                                className: w().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, n.jsxs)(u.$, {
                                    radius: 'round',
                                    className: w().coverBlock,
                                    variant: 'default',
                                    onClick: E,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': h,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, n.jsx)(M.B, { className: w().image, src: p || B.A.src, fit: 'cover', alt: m, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, n.jsx)('div', {
                                            className: (0, o.$)(w().like),
                                            children: (0, n.jsx)(D.I, { variant: 'likedVariant', size: 's', className: w().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [h, p, m, E],
                    );
                return (0, n.jsx)(T.MN, {
                    ref: a,
                    className: (0, o.$)(w().root, { [w().root_selected]: h }, t),
                    textPosition: 'center',
                    title: (0, n.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: w().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': s,
                    view: C,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var F = r(63442),
                z = r.n(F);
            let U = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                q = (0, a.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: r } = (0, s.A)(),
                        {
                            wizard: a,
                            settings: { isMobile: p, isWindowsApplication: T, isLinuxApplication: D },
                            user: j,
                        } = (0, x.g)(),
                        { notify: I } = (0, h.l)(),
                        M = (0, A.z)(),
                        [B, P] = (0, d.d)(),
                        w = (0, m.zb)(0),
                        F = (0, i.useMemo)(
                            () => (e) => {
                                var t;
                                if (!w.onTabChange || e === w.value) return;
                                w.onTabChange(e);
                                let r = null == (t = a.genres[e]) ? void 0 : t.id;
                                (a.setFilter(r), null == B || B.scrollTo({ top: 0 }));
                            },
                            [a, w, B],
                        ),
                        q = (0, i.useMemo)(() => {
                            switch (a.selectedArtistsQuantity) {
                                case 0:
                                    return r({ id: 'wizard.button-tune' });
                                case 1:
                                    return r({ id: 'wizard.button-little-more' });
                                case 2:
                                    return r({ id: 'wizard.button-one-more' });
                                default:
                                    return r({ id: 'wizard.button-done' });
                            }
                        }, [a.selectedArtistsQuantity, r]),
                        H = (0, i.useMemo)(
                            () =>
                                (0, n.jsx)(L.wI, {
                                    className: z().tabCarousel,
                                    ...w,
                                    onTabChange: F,
                                    isShimmerVisible: a.loadingState === g.G.PENDING,
                                    shimmer: (0, n.jsx)(L.zr, { isActive: !0, className: z().tabCarousel, shimmerClassName: z().tabShimmer, count: p ? 2 : 3 }),
                                    children: a.genres.map((e, t) =>
                                        (0, n.jsx)(
                                            N.o,
                                            {
                                                className: (0, o.$)(z().filter, { [z().filter_selected]: t === w.value }),
                                                titleClassName: z().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [a.genres, w, F, a.loadingState, p],
                        ),
                        G = (0, i.useCallback)(() => {
                            a.loadArtists(60);
                        }, [a]);
                    (0, i.useEffect)(() => {
                        a.filter && G();
                    }, [a.filter, G]);
                    let K = (0, i.useCallback)(async () => {
                        (await a.loadGenres(), G());
                    }, [a, G]);
                    ((0, i.useEffect)(() => {
                        a.modal.isOpened && K();
                    }, [a, a.modal.isOpened, K]),
                        (0, i.useEffect)(() => {
                            a.loadingState === g.G.REJECT &&
                                (a.modal.close(), I((0, n.jsx)(S.h, { error: r({ id: 'error-messages.error-load-wizard' }) }), { containerId: E.u.ERROR }));
                        }, [a, a.loadGenres, a.loadingState, r, I]));
                    let W = (0, i.useMemo)(
                            () =>
                                (0, n.jsx)(f.DZ, {
                                    className: z().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, n.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        V = (0, i.useCallback)(async () => {
                            (a.canFinish ? (await a.finish()) === b.F.OK && (await j.getSettings(), await (null == t ? void 0 : t())) : a.loadArtists(), a.modal.close());
                        }, [t, j, a]);
                    return (
                        (0, i.useEffect)(
                            () => (
                                null == M ||
                                    M.addShortcutsListener(v.M.MAIN, C.l.CLOSE, () => {
                                        a.modal.isOpened && V();
                                    }),
                                () => {
                                    null == M || M.removeShortcutsListener(v.M.MAIN, C.l.CLOSE);
                                }
                            ),
                            [V, a.modal.isOpened, M],
                        ),
                        (0, n.jsxs)(_.a, {
                            className: (0, o.$)(z().root, { [z().root_withCustomControls]: T || D }),
                            headerClassName: z().modalHeader,
                            contentClassName: z().modalContent,
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: V,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: r({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && W,
                            escapeKey: !1,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: z().wrapper,
                                    children: [
                                        !p && W,
                                        (0, n.jsx)(f.HL, {
                                            className: z().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, n.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                            className: z().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: V,
                                            disabled: !a.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, n.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: q }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)('div', {
                                    className: z().mainContainer,
                                    children: [
                                        (0, n.jsx)(y.F, { className: z().carousel, carouselElement: H, scrollPadding: U }),
                                        (0, n.jsx)(R.$, {
                                            withFooter: !1,
                                            className: (0, o.$)(z().scrollContainer, z().important),
                                            itemContentCallback: (e) => {
                                                let t = a.artistsByGenre[e];
                                                if (!t) {
                                                    let e = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) });
                                                    return (0, n.jsx)(O.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, n.jsx)(k, { artist: t }, t.id);
                                            },
                                            data: a.artistsByGenre,
                                            endReached: G,
                                            listClassName: z().content,
                                            itemClassName: z().item,
                                            pageSize: 60,
                                            handleRef: P,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        20603: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, r(94177).createAsyncLocalStorage)();
        },
        21970: (e, t, r) => {
            'use strict';
            function n() {
                return (n = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            r.d(t, { A: () => n });
        },
        24422: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
            };
        },
        26434: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
            };
        },
        27506: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var n = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        28830: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            var n = r(53548),
                o = r(38003),
                a = r(80566);
            let i = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = (0, n.useRef)(null),
                    s = (0, o.D)(),
                    l = (0, n.useId)(),
                    c = (0, n.useContext)(a.B),
                    d = (0, n.useCallback)(
                        (n, o) => {
                            (e ? e(n, r ? o : void 0) : s(n, o), t && c.unobserveElement(l));
                        },
                        [e, c, l, s, t, r],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: i, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, s],
                    ),
                    { ref: i, intersectionPropertyId: l }
                );
            };
        },
        28870: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => o });
            var n = r(5120);
            let o = n.gK.model('CustomPlayerThumb', { href: n.gK.string, width: n.gK.number, height: n.gK.number });
        },
        29832: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var n,
                o = r(53548),
                a = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
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
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(8532),
                            s = n(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: n,
                                    menuControl: l,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: f,
                                } = e,
                                p = d || r,
                                E = l || n;
                            return (0, o.jsxs)('div', {
                                className: (0, a.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: s.default.top, children: c }),
                                    (0, o.jsxs)('div', {
                                        className: (0, a.clsx)(s.default.bottom, m),
                                        children: [
                                            p && (0, o.jsxs)('div', { className: s.default.bottom_left, children: [d, r] }),
                                            E && (0, o.jsxs)('div', { className: s.default.bottom_right, children: [l, n] }),
                                        ],
                                    }),
                                    !!f && (0, o.jsx)(i.Label, { className: s.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = r(4377),
                            a = r(810),
                            i = r(5881),
                            s = r(8903),
                            l = r(6530),
                            c = n(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: n,
                                    textPosition: a = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: f,
                                    children: p,
                                    srTitle: E,
                                    wrapperClassName: h,
                                    ...C
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, i.clsx)(c.default.root, n),
                                    ref: t,
                                    ...C,
                                    children: [
                                        (0, o.jsx)(l.SROnly, { children: null != E ? E : u }),
                                        (0, o.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, i.clsx)(c.default.wrapper, h),
                                            children: [
                                                f,
                                                (0, o.jsxs)('div', {
                                                    className: (0, i.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(a)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(s.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
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
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(8903),
                            s = n(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: n = 's', ...l } = e;
                            return (0, o.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: n,
                                lineClamp: 1,
                                className: (0, a.clsx)(s.default.root, r),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var n = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return n.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, a.clsx)(s.default.root, { [s.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, a.clsx)(c, n.props.className) })
                                : (0, o.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var n = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return n.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = r(5987),
                            l = n(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: n = 'text', size: i = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_'.concat(n, '_').concat(i)], l.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = r(5987),
                            l = n(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: n = 'bold', size: i = 's', className: c, children: d, ...u } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(n)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = n(r(61));
                        function l(e) {
                            let { forwardRef: t, style: r, className: n, children: i, variant: l, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof i ? i : void 0;
                            return (0, o.jsx)(l, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    n,
                                ),
                                ...d,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }))));
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
                        var o = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function s(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
            var c = l.kk,
                d = l.m7;
            l.X$;
        },
        31051: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => R });
            var n = r(88800),
                o = r(65724),
                a = r(84961),
                i = r(53548),
                s = r(2058),
                l = r(16967),
                c = r(17392),
                d = r(16161),
                u = r(29504),
                _ = r(18052),
                m = r(60143),
                f = r.n(m),
                p = r(88969),
                E = r(51814),
                h = r(96817),
                C = r(2288),
                v = r(52300),
                A = r(61432),
                x = r.n(A);
            let b = {
                    [E.f.DEFAULT]: (0, n.jsx)(p.A, { id: 'equalizer.default-preset' }),
                    [E.f.CUSTOM]: (0, n.jsx)(p.A, { id: 'equalizer.custom-preset' }),
                    [E.f.CLASSICAL]: (0, n.jsx)(p.A, { id: 'equalizer.classical-preset' }),
                    [E.f.CLUB]: (0, n.jsx)(p.A, { id: 'equalizer.club-preset' }),
                    [E.f.DANCE]: (0, n.jsx)(p.A, { id: 'equalizer.dance-preset' }),
                    [E.f.BASS_BOOST]: (0, n.jsx)(p.A, { id: 'equalizer.bass-boost-preset' }),
                    [E.f.BASS_AND_TREBLE_BOOST]: (0, n.jsx)(p.A, { id: 'equalizer.bass-and-treble-boost-preset' }),
                    [E.f.TREBLE_BOOST]: (0, n.jsx)(p.A, { id: 'equalizer.treble-boost-preset' }),
                    [E.f.SPEAKERS]: (0, n.jsx)(p.A, { id: 'equalizer.speakers-preset' }),
                    [E.f.LARGE_HALL]: (0, n.jsx)(p.A, { id: 'equalizer.large-hall-preset' }),
                    [E.f.CONCERT]: (0, n.jsx)(p.A, { id: 'equalizer.concert-preset' }),
                    [E.f.PARTY]: (0, n.jsx)(p.A, { id: 'equalizer.party-preset' }),
                    [E.f.POP]: (0, n.jsx)(p.A, { id: 'equalizer.pop-preset' }),
                    [E.f.REGGAE]: (0, n.jsx)(p.A, { id: 'equalizer.reggae-preset' }),
                    [E.f.ROCK]: (0, n.jsx)(p.A, { id: 'equalizer.rock-preset' }),
                    [E.f.SKA]: (0, n.jsx)(p.A, { id: 'equalizer.ska-preset' }),
                    [E.f.SOFT]: (0, n.jsx)(p.A, { id: 'equalizer.soft-preset' }),
                    [E.f.SOFT_ROCK]: (0, n.jsx)(p.A, { id: 'equalizer.soft-rock-preset' }),
                    [E.f.TECHNO]: (0, n.jsx)(p.A, { id: 'equalizer.techno-preset' }),
                },
                g = (0, a.PA)((e) => {
                    let { isDisabled: t } = e,
                        r = (0, _.S)(),
                        a = (0, i.useCallback)(
                            (e) => {
                                r.changeCurrentPreset(e.id);
                            },
                            [r],
                        );
                    return (0, n.jsx)(C.ms, {
                        isDisabled: t,
                        className: x().root,
                        onSelect: a,
                        reference: (0, n.jsxs)(h.$, {
                            radius: 'xxxl',
                            className: (0, o.$)(x().button, { [x().button_disabled]: t }),
                            'data-test-id': c.Kq.equalizer.EQUALIZER_PRESETS_BUTTON,
                            children: [
                                (0, n.jsx)(u.HL, { className: x().buttonText, variant: 'span', size: 's', weight: 'medium', children: b[r.currentPreset.id] }),
                                (0, n.jsx)(v.I, { className: x().buttonIcon, size: 'xxs', variant: 'arrowDown' }),
                            ],
                        }),
                        placement: 'top',
                        offsetOptions: -40,
                        defaultValue: r.currentPreset.id,
                        containerClassName: x().container,
                        'data-test-id': c.Kq.equalizer.EQUALIZER_PRESETS_DROPDOWN,
                        children: Object.values(E.f).map((e) => (0, n.jsx)(C.c$, { id: e, label: b[e] }, e)),
                    });
                });
            var S = r(54112),
                y = r(88610),
                O = r.n(y);
            let N = (e) => {
                    let { minValue: t, maxValue: r, className: a, label: i, isDisabled: s, onChange: l, value: d, ..._ } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(O().root, a),
                        'data-test-id': c.Kq.equalizer.EQUALIZER_SLIDER_CONTAINER,
                        children: [
                            (0, n.jsxs)('div', {
                                className: O().container,
                                children: [
                                    (0, n.jsx)('div', { className: O().serif }),
                                    (0, n.jsx)(S.A, {
                                        disabled: s,
                                        className: (0, o.$)(O().slider, O().important),
                                        thumbSize: 'm',
                                        trackSize: 'xxs',
                                        onChange: l,
                                        value: d,
                                        showThumbVariant: 'always',
                                        step: 0.1,
                                        min: t,
                                        max: r,
                                        ..._,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(u.HL, {
                                'aria-hidden': !0,
                                className: (0, o.$)(O().label, { [O().label_disabled]: s }),
                                variant: 'div',
                                weight: 'normal',
                                size: 'xs',
                                children: i,
                            }),
                        ],
                    });
                },
                L = { enter: f().equalizer_enter, enterActive: f().equalizer_enter_active, exit: f().equalizer_exit, exitActive: f().equalizer_exit_active },
                R = (0, a.PA)((e) => {
                    let { title: t, className: r, isExpanded: a, isDisabled: m } = e,
                        p = (0, i.useRef)(null),
                        { formatMessage: E } = (0, s.A)(),
                        h = (0, _.S)(),
                        C = h.isEnabled ? E({ id: 'equalizer.disable-equalizer' }) : E({ id: 'equalizer.enable-equalizer' }),
                        v = (0, i.useCallback)(
                            (e) => {
                                h.setEnabled(e);
                            },
                            [h],
                        ),
                        A = (0, i.useCallback)(
                            (e) => (t) => {
                                h.changeAmp(e, t);
                            },
                            [h],
                        ),
                        x = (0, i.useCallback)(
                            (e) => {
                                h.changePreamp(e);
                            },
                            [h],
                        );
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(f().root, r),
                        'data-test-id': c.Kq.equalizer.EQUALIZER_CONTAINER,
                        children: [
                            (0, n.jsxs)('div', {
                                className: f().header,
                                children: [
                                    (0, n.jsx)(u.HL, {
                                        className: f().title,
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': c.Kq.equalizer.EQUALIZER_TITLE,
                                        children: t,
                                    }),
                                    (0, n.jsx)(d.l, { 'aria-label': C, isChecked: h.isEnabled, onChange: v, 'data-test-id': c.Kq.equalizer.EQUALIZER_TOGGLE }),
                                ],
                            }),
                            (0, n.jsx)(l.A, {
                                in: a,
                                nodeRef: p,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: L,
                                children: (0, n.jsxs)('div', {
                                    ref: p,
                                    className: (0, o.$)(f().equalizer, { [f().equalizer_disabled]: m }),
                                    'data-test-id': c.Kq.equalizer.EQUALIZER_FREQUENCIES_CONTAINER,
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: f().container,
                                            children: [
                                                (0, n.jsxs)('div', {
                                                    className: f().preamp,
                                                    children: [
                                                        (0, n.jsx)(N, {
                                                            isDisabled: m,
                                                            minValue: 0.5,
                                                            maxValue: 1.5,
                                                            value: h.currentPreset.preamp,
                                                            onChange: x,
                                                            label: E({ id: 'equalizer.preamp-level' }),
                                                            'aria-label': E({ id: 'equalizer.slider-preamp-label' }),
                                                            'data-test-id': c.Kq.equalizer.EQUALIZER_PREAMP_SLIDER,
                                                        }),
                                                        (0, n.jsxs)('div', {
                                                            className: f().labels,
                                                            'aria-hidden': !0,
                                                            children: [
                                                                (0, n.jsx)(u.HL, {
                                                                    className: f().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: E({ id: 'equalizer.amp-label' }, { value: 12 }),
                                                                }),
                                                                (0, n.jsx)(u.HL, {
                                                                    className: f().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: E({ id: 'equalizer.amp-label' }, { value: 0 }),
                                                                }),
                                                                (0, n.jsx)(u.HL, {
                                                                    className: f().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: E({ id: 'equalizer.amp-label' }, { value: -12 }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)('div', {
                                                    className: f().frequencies,
                                                    children: h.currentPreset.frequencies.map((e) => {
                                                        let t = ((e, t) =>
                                                                e < 1e3 ? e.toString() : t({ id: 'equalizer.frequency-label' }, { value: (e / 1e3).toFixed(0) }))(
                                                                e.key,
                                                                E,
                                                            ),
                                                            r = Math.round(10 * e.value) / 10;
                                                        return (0, n.jsx)(
                                                            N,
                                                            {
                                                                isDisabled: m,
                                                                minValue: -12,
                                                                maxValue: 12,
                                                                value: e.value,
                                                                label: t,
                                                                onChange: A(e.key),
                                                                'aria-label': E({ id: 'equalizer.slider-frequency-label' }, { label: t, value: r }),
                                                                'data-test-id': c.Kq.equalizer.EQUALIZER_FREQUENCY_SLIDER,
                                                            },
                                                            t,
                                                        );
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(g, { isDisabled: m }),
                                    ],
                                }),
                            }),
                        ],
                    });
                });
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var n = r(88800),
                o = r(65724),
                a = r(53548),
                i = r(17392),
                s = r(88021),
                l = r(96817),
                c = r(52300),
                d = r(89544),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: f = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: E, swipeForward: h, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: v, shouldHideControls: A } = (0, s.Y)(t),
                    x = (0, a.useCallback)(
                        (e) => {
                            (E(), e.stopPropagation());
                        },
                        [E],
                    ),
                    b = (0, a.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    );
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(u().root, _),
                    'data-test-id': i.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, n.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, r, { [u().control_hidden]: A, [u().control_withSecondaryColor]: m }),
                            onClick: x,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, n.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, d, { [u().control_hidden]: A, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: v,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32353: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, u: () => o });
            var n = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        34500: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            var n = r(53548),
                o = r(43620);
            function a() {
                return (0, n.useContext)(o.p);
            }
        },
        35814: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 55060));
        },
        37531: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(36271));
        },
        37770: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var n = r(88800),
                o = r(65724),
                a = r(17392),
                i = r(19994),
                s = r(9590),
                l = r.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: f,
                    radius: p = 'l',
                } = e;
                return (0, n.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, o.$)(l().root, r),
                    'data-test-id': a.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        f && (0, n.jsx)(i.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, n.jsx)(i.W, { isActive: t, className: (0, o.$)(l().cover, s, { [l().cover_round]: c, [l().cover_withSubcover]: f }), radius: p }),
                        _ &&
                            (0, n.jsx)('div', {
                                className: (0, o.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: u }),
                                children: (0, n.jsx)(i.W, { isActive: t, className: (0, o.$)(l().title, { [l().title_withSubcover]: f }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        38003: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => C });
            var n = r(53548),
                o = r(78793),
                a = r(54577),
                i = r(90780),
                s = r(79070),
                l = r(65523),
                c = r(42139),
                d = r(12816),
                u = r(34500),
                _ = r(57649),
                m = r(60840),
                f = r(46166),
                p = r(14518),
                E = r(73442),
                h = r(91248);
            let C = () => {
                let e = (0, l.U)(),
                    t = (0, i.st)(),
                    { hash: r } = (0, i.gf)(),
                    { pageId: C, displayReasonId: v } = (0, p.$)(),
                    { tabId: A, tabPos: x, isTabSelectedByDefault: b } = (0, h.R)(),
                    { offsetBlockPosY: g } = (0, _.u)(),
                    { blockType: S, blockId: y, blockPosX: O, blockPosY: N, mainObjectId: L, mainObjectType: R, displayReasonId: T } = (0, u.N)(),
                    { filterKey: D, filterValue: j, filterPos: I } = (0, m.G)(),
                    { objectType: M, objectsCount: B, objectId: P, objectPosX: w, objectPosY: k } = (0, f.J)(),
                    { skeleton: F } = (0, E.b)(),
                    z = null != T ? T : v,
                    U = (0, s.L)(() => (void 0 !== g && void 0 !== N ? g + N : N));
                return (0, n.useCallback)(
                    (n, i) => {
                        if (!t || !C || !d.xK.includes(C) || !d.fD.includes(C)) return;
                        let s = c.F[C];
                        if (!s) return;
                        let l = {
                            hash: r,
                            pageId: s,
                            entityType: S,
                            entityId: y,
                            entityPosX: O,
                            entityPosY: U,
                            objectsCount: B,
                            viewUuid: i,
                            objectType: M,
                            objectId: P,
                            objectPosX: w,
                            objectPosY: k,
                        };
                        (void 0 !== D && ((l.filterKey = D), (l.filterValue = j), (l.filterPos = I)),
                            d.qG.includes(C) && ((l.tabId = A), (l.tabPos = x), (l.isTabSelectedByDefault = b)),
                            F && (l.skeletonId = F),
                            'string' == typeof L && 'string' == typeof R && ((l.mainObjectType = R), (l.mainObjectId = L)),
                            z && (l.displayReasonId = z));
                        let u = (0, o.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (n ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, z, y, O, U, S, D, I, j, r, b, e, L, R, P, w, k, M, B, C, F, A, x],
                );
            };
        },
        38860: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => a });
            var n = r(53548),
                o = r(41168);
            let a = () => (0, n.useContext)(o.P);
        },
        41168: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n });
            let n = (0, r(53548).createContext)(null);
        },
        41617: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => n });
            let n = (0, r(53548).createContext)({ offsetBlockPosY: void 0 });
        },
        42139: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => a });
            var n = r(92716),
                o = r(12816);
            let a = {
                [o._Q.HOME]: n.LandingBlockPageID.MainScreen,
                [o._Q.SIDEBAR]: n.LandingBlockPageID.Sidebar,
                [o._Q.NON_MUSIC]: n.LandingBlockPageID.NonmusicLandingScreen,
                [o._Q.OWN_COLLECTION]: n.LandingBlockPageID.CollectionLandingScreen,
                [o._Q.LANDING]: n.LandingBlockPageID.DynamicScreen,
                [o._Q.OWN_ARTISTS]: n.LandingBlockPageID.CollectionArtistsScreen,
                [o._Q.SEARCH]: n.LandingBlockPageID.SearchScreen,
                [o._Q.ARTIST]: n.LandingBlockPageID.ArtistScreen,
                [o._Q.CONCERTS]: n.LandingBlockPageID.ConcertsLandingScreen,
                [o._Q.CONCERT]: n.LandingBlockPageID.ConcertScreen,
                [o._Q.CONCERT_LOCATION_SELECTOR]: n.LandingBlockPageID.ConcertLocationSelector,
                [o._Q.ALBUM]: n.LandingBlockPageID.AlbumScreen,
                [o._Q.PLAYLIST]: n.LandingBlockPageID.PlaylistScreen,
                [o._Q.SLIDES_SCREEN]: n.LandingBlockPageID.SlidesScreen,
                [o._Q.PROMOLANDING_ALBUM]: n.LandingBlockPageID.PromolandingAlbumScreen,
                [o._Q.WAVE_LANDING_SCREEN]: n.LandingBlockPageID.WaveLandingScreen,
                [o._Q.FACT_SCREEN]: n.LandingBlockPageID.FactScreen,
                [o._Q.LUMEN_FACT_SCREEN]: n.LandingBlockPageID.LumenFactScreen,
                [o._Q.COLLECTION_VIBE_ROOMS]: n.LandingBlockPageID.MultivibeScreen,
                [o._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: n.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [o._Q.MULTIVIBE_ACTION_SCREEN]: n.LandingBlockPageID.MultivibeActionScreen,
                [o._Q.MULTIVIBE_LIMIT_SCREEN]: n.LandingBlockPageID.MultivibeLimitScreen,
                [o._Q.MULTIVIBE_UNIFIED_SCREEN]: n.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        43620: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => n });
            let n = (0, r(53548).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        44464: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
        45628: (e, t, r) => {
            'use strict';
            function n(e, t) {
                return (n = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return ((e.__proto__ = t), e);
                      })(e, t);
            }
            function o(e, t) {
                ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), n(e, t));
            }
            r.d(t, { A: () => o });
        },
        46079: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => n });
            let n = (0, r(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46166: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var n = r(53548),
                o = r(90134);
            function a() {
                return (0, n.useContext)(o.l);
            }
        },
        48642: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
            };
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        51318: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            var n = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        51374: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var n = function (e) {
                return e.scrollTop;
            };
        },
        51814: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { f: () => n }),
                (function (e) {
                    ((e.CUSTOM = 'CUSTOM'),
                        (e.DEFAULT = 'DEFAULT'),
                        (e.CLASSICAL = 'CLASSICAL'),
                        (e.CLUB = 'CLUB'),
                        (e.DANCE = 'DANCE'),
                        (e.BASS_BOOST = 'BASS_BOOST'),
                        (e.BASS_AND_TREBLE_BOOST = 'BASS_AND_TREBLE_BOOST'),
                        (e.TREBLE_BOOST = 'TREBLE_BOOST'),
                        (e.SPEAKERS = 'SPEAKERS'),
                        (e.LARGE_HALL = 'LARGE_HALL'),
                        (e.CONCERT = 'CONCERT'),
                        (e.PARTY = 'PARTY'),
                        (e.POP = 'POP'),
                        (e.REGGAE = 'REGGAE'),
                        (e.ROCK = 'ROCK'),
                        (e.SKA = 'SKA'),
                        (e.SOFT = 'SOFT'),
                        (e.SOFT_ROCK = 'SOFT_ROCK'),
                        (e.TECHNO = 'TECHNO'));
                })(n || (n = {})));
        },
        53533: (e) => {
            e.exports = { root: 'RestrictionBlock_root__qzBtp', restrictions: 'RestrictionBlock_restrictions__6V1zc' };
        },
        54112: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => c });
            var n,
                o = r(53548),
                a = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    3801: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3086: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.ThumbVariant = t.DEFAULT_MAX_VALUE = t.SliderMode = void 0),
                            (t.SliderMode = { NORMAL: 'normal', DEFERRED: 'deferred' }),
                            (t.DEFAULT_MAX_VALUE = 100),
                            (t.ThumbVariant = { HOVER: 'hover', NEVER: 'never', ALWAYS: 'always' }));
                    },
                    3042: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Slider = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = r(3086),
                            l = n(r(3801)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        className: r,
                                        value: n,
                                        secondaryValue: c = s.DEFAULT_MAX_VALUE,
                                        maxValue: d = s.DEFAULT_MAX_VALUE,
                                        thumbSize: u = 'l',
                                        trackSize: _ = 's',
                                        mode: m = s.SliderMode.NORMAL,
                                        onChange: f,
                                        showThumbVariant: p = s.ThumbVariant.HOVER,
                                        ...E
                                    } = e,
                                    [h, C] = (0, i.useState)(null != n ? n : 0),
                                    [v, A] = (0, i.useState)(!1),
                                    [x, b] = (0, i.useState)(!1);
                                ((0, i.useEffect)(() => {
                                    v || C(n);
                                }, [n, v]),
                                    (0, i.useEffect)(() => {
                                        !v && x && m === s.SliderMode.DEFERRED && (f(h, !0), b(!1));
                                    }, [m, v, f, h, x]));
                                let g = (0, i.useCallback)(
                                        (e) => {
                                            let t = Number(e.target.value);
                                            (C(t), b(!0), 'normal' === m ? (f(t, !0), b(!1)) : f(t, !1));
                                        },
                                        [C, f, m],
                                    ),
                                    S = (0, i.useCallback)(
                                        (e) => {
                                            let t = !1,
                                                r = !1;
                                            (e.stopPropagation(),
                                                e.nativeEvent instanceof window.MouseEvent
                                                    ? ((t = 0 === e.nativeEvent.button), (r = 'mousedown' === e.nativeEvent.type))
                                                    : ((t = 1 === e.nativeEvent.touches.length || 'touchend' === e.nativeEvent.type),
                                                      (r = 'touchstart' === e.nativeEvent.type)),
                                                t && A(r));
                                        },
                                        [A],
                                    ),
                                    y = (0, i.useCallback)(() => {
                                        A(!1);
                                    }, [A]),
                                    O = (0, i.useMemo)(() => {
                                        let e = (100 * Math.min(h, d)) / d,
                                            t = (100 * Math.min(c, d)) / d;
                                        return {
                                            backgroundSize: ''.concat(e, '% 100%'),
                                            '--seek-before-width': ''.concat(e, '%'),
                                            '--buffered-width': ''.concat(t, '%'),
                                        };
                                    }, [h, c, d]);
                                return (0, o.jsx)('input', {
                                    ref: t,
                                    className: (0, a.clsx)(
                                        l.default.root,
                                        {
                                            [l.default['root_thumbSize_'.concat(u)]]: u,
                                            [l.default['root_trackSize_'.concat(_)]]: _,
                                            [l.default['root_'.concat(p, 'Thumb')]]: p,
                                        },
                                        r,
                                    ),
                                    type: 'range',
                                    max: d,
                                    value: h,
                                    style: O,
                                    onTouchStart: S,
                                    onTouchEnd: S,
                                    onMouseDown: S,
                                    onMouseUp: S,
                                    onMouseOut: y,
                                    onBlur: y,
                                    onChange: g,
                                    ...E,
                                });
                            };
                        t.Slider = (0, i.forwardRef)((e, t) => (0, o.jsx)(c, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function s(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.i = void 0));
                var e = s(3042);
                Object.defineProperty(l, 'i', {
                    enumerable: !0,
                    get: function () {
                        return e.Slider;
                    },
                });
            })();
            var c = l.i;
            l.X;
        },
        55060: (e, t, r) => {
            'use strict';
            r.d(t, { SettingsPage: () => eM });
            var n = r(88800),
                o = r(84961),
                a = r(2058),
                i = r(88969),
                s = r(17392),
                l = r(66719),
                c = r(29504),
                d = r(53548);
            r(30282);
            var u = r(63771),
                _ = r(18052),
                m = r(11372),
                f = r(31051),
                p = r(60143),
                E = r.n(p);
            let h = (0, o.PA)(() => {
                let { formatMessage: e } = (0, a.A)(),
                    t = (0, _.S)();
                return (0, n.jsx)(m.a, {
                    className: E().modal,
                    headerClassName: E().modalHeader,
                    contentClassName: E().modalContent,
                    title: e({ id: 'equalizer.title' }),
                    open: t.modal.isOpened,
                    onOpenChange: t.modal.onOpenChange,
                    onClose: t.modal.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    closeButtonDataTestId: s.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON,
                    'data-test-id': s.Kq.equalizer.EQUALIZER_MODAL,
                    children: (0, n.jsx)(f.r, { title: e({ id: 'equalizer.enable' }), isExpanded: !0, isDisabled: !t.isEnabled }),
                });
            });
            var C = r(4086),
                v = r(41928),
                A = r(29595),
                x = r(74965),
                b = r(83210),
                g = r(7748),
                S = r(72288),
                y = r(27506),
                O = r(97956),
                N = r(5503),
                L = r(15253),
                R = r(66943),
                T = r(64546),
                D = r(62293);
            let j = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, a.A)(),
                    { user: r, experiments: n } = (0, S.g)();
                return (0, D.v)({
                    checkExperiment: (e, t) => n.checkExperiment(e, t),
                    getDisclaimerContent: () => t({ id: 'footer.disclaimer-content' }),
                    getExplicitContent: () => (e ? t({ id: 'footer.explicit-content' }) : t({ id: 'about-app.explicit-content' })),
                    userRegion: r.account.data.userSessionRegionIso,
                });
            };
            var I = r(51611),
                M = r(91292),
                B = r(72432),
                P = r.n(B);
            let w = (0, o.PA)(() => {
                let { formatMessage: e } = (0, a.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: r },
                    } = (0, S.g)(),
                    o = (0, b.B)(),
                    s = (function () {
                        var e;
                        return null == (e = window.musicDesktop) ? void 0 : e.runtime.branch;
                    })(),
                    { language: l } = (0, I.h)(),
                    d = j();
                return (0, n.jsxs)(m.a, {
                    className: P().root,
                    headerClassName: P().modalHeader,
                    contentClassName: P().modalContent,
                    title: e({ id: 'settings.about-app' }),
                    open: r.isOpened,
                    onOpenChange: r.onOpenChange,
                    onClose: r.close,
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
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(l),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-copyright-holders' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(l),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-terms' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-recommendation-rules' }),
                                        }),
                                    }),
                                }),
                                (0, n.jsx)('li', {
                                    className: P().item,
                                    children: (0, n.jsx)(M.N, {
                                        className: P().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(l),
                                        children: (0, n.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(i.A, { id: 'footer.links-help' }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().explicitText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            weight: 'medium',
                            dangerouslySetInnerHTML: { __html: d },
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().companyText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: (0, n.jsx)(i.A, { id: 'about-app.app-name' }),
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-version-short' }, { version: o }),
                        }),
                        (0, n.jsx)(c.HL, {
                            className: P().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-revision' }, { revision: s }),
                        }),
                    ],
                });
            });
            var k = r(96817),
                F = r(90688),
                z = r(71978),
                U = r(59304),
                q = r(4292),
                H = r.n(q);
            let G = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                K = (0, o.PA)(() => {
                    let { formatMessage: e } = (0, a.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, S.g)(),
                        { notify: r } = (0, x.l)(),
                        o = (0, z.j)(),
                        s = (0, d.useCallback)(() => {
                            o.clearAll().then(() => {
                                (t.close(),
                                    r(
                                        (0, n.jsx)(U.$, {
                                            message: (0, n.jsx)(c.HL, {
                                                className: H().message,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, n.jsx)(i.A, { id: 'offline.memory-cleared' }),
                                            }),
                                        }),
                                        { containerId: A.u.INFO },
                                    ));
                            });
                        }, [t, r, o]);
                    return (0, n.jsxs)(m.a, {
                        className: H().root,
                        headerClassName: H().modalHeader,
                        contentClassName: H().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, n.jsx)(F._V, { src: G.src, className: H().image, fit: 'contain', 'aria-hidden': !0 }),
                            (0, n.jsx)(c.HL, {
                                className: H().description,
                                type: 'text',
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                children: (0, n.jsx)(i.A, { id: 'offline.clear-memory-description' }),
                            }),
                            (0, n.jsx)(k.$, {
                                color: 'primary',
                                radius: 'xxxl',
                                size: 'default',
                                onClick: s,
                                children: (0, n.jsx)(i.A, { id: 'interface-actions.clear' }),
                            }),
                        ],
                    });
                });
            var W = r(56425),
                V = r(10769),
                Y = r(71774),
                Q = r(76500),
                X = r.n(Q),
                Z = r(13758),
                J = r(57249),
                $ = r(65724),
                ee = r(6087),
                et = r(29993),
                er = r(13315),
                en = r(49124);
            let eo = ee.default.default(
                () =>
                    Promise.resolve()
                        .then(r.bind(r, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = en.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, Z.setWasmUrl)(new URL(J, e).href);
            }
            let ea = (e) => {
                    let { thumbType: t } = e,
                        [r, o] = (0, d.useState)(null);
                    return ((0, d.useEffect)(() => {
                        let e = W.z[t];
                        e &&
                            e().then((e) => {
                                (0, er.J)(e) ? o(e) : o(''.concat(window.location.origin).concat(e));
                            });
                    }, [t]),
                    r)
                        ? (0, n.jsx)(eo, { src: r })
                        : null;
                },
                ei = (0, o.PA)((e) => {
                    let { thumbId: t, isDefault: r = !1 } = e,
                        { settings: o, user: s, paywall: l } = (0, S.g)(),
                        { formatMessage: u } = (0, a.A)(),
                        [_, m] = (0, d.useState)(!1);
                    (0, d.useEffect)(() => {
                        m(!0);
                    }, []);
                    let f = (0, et.c)((e) => {
                            if ((e.preventDefault(), !s.hasPlus && t !== o.selectedThumbId)) return void l.openModal();
                            o.setCustomPlayerThumb(t);
                        }),
                        p = !!_ && o.selectedThumbId === t;
                    if (r)
                        return (0, n.jsxs)(k.$, {
                            className: (0, $.$)(X().button, { [X().button_selected]: p }),
                            radius: 'xl',
                            onClick: f,
                            withRipple: !1,
                            'aria-pressed': p,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: X().thumbContent,
                                    children: [(0, n.jsx)('div', { className: X().thumbLine }), (0, n.jsx)('div', { className: X().thumbDefault })],
                                }),
                                (0, n.jsx)(c.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    weight: 'medium',
                                    className: X().thumbName,
                                    lineClamp: 1,
                                    children: (0, n.jsx)(i.A, { id: 'branded-player.default' }),
                                }),
                            ],
                        });
                    let E = (0, W.r)(u).get(t);
                    if (!E) return;
                    let h = { '--thumb-height': ''.concat(E.thumb.height, 'px') };
                    return (0, n.jsxs)(k.$, {
                        className: (0, $.$)(X().button, { [X().button_selected]: p }),
                        radius: 'xl',
                        onClick: f,
                        withRipple: !1,
                        'aria-pressed': p,
                        children: [
                            (0, n.jsx)('div', { style: h, className: (0, $.$)(X().thumbContent, X().thumbContent_custom), children: (0, n.jsx)(ea, { thumbType: t }) }),
                            (0, n.jsx)(c.HL, { className: X().thumbName, variant: 'div', size: 'm', weight: 'normal', lineClamp: 1, children: E.name }),
                        ],
                    });
                }),
                es = (0, o.PA)(() => {
                    let { formatMessage: e } = (0, a.A)(),
                        t = Array.from((0, W.r)(e).keys());
                    return (0, n.jsxs)('div', {
                        className: X().root,
                        children: [
                            (0, n.jsx)(c.HL, {
                                className: X().title,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                lineClamp: 1,
                                children: (0, n.jsx)(i.A, { id: 'branded-player.player-type' }),
                            }),
                            (0, n.jsxs)(V.m, {
                                restrictionsClassName: X().thumbsContainer,
                                children: [(0, n.jsx)(ei, { thumbId: Y.T.DEFAULT, isDefault: !0 }), t.map((e) => (0, n.jsx)(ei, { thumbId: e }, e))],
                            }),
                        ],
                    });
                });
            var el = r(52300),
                ec = r(24422),
                ed = r.n(ec);
            let eu = (e) => {
                let { title: t, description: r, onClick: o, descriptionDataTestId: a, ...i } = e;
                return (0, n.jsx)(k.$, {
                    className: (0, $.$)(ed().root, ed().important),
                    contentContainerClassName: ed().contentContainer,
                    icon: (0, n.jsx)(el.I, { className: ed().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    onClick: o,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    color: 'primary',
                    size: 'xs',
                    ...i,
                    children: (0, n.jsxs)('div', {
                        className: ed().content,
                        children: [
                            (0, n.jsx)(c.HL, { className: ed().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: t }),
                            r &&
                                (0, n.jsx)(c.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: ed().description,
                                    'data-test-id': a,
                                    children: r,
                                }),
                        ],
                    }),
                });
            };
            var e_ = r(16161),
                em = r(26434),
                ef = r.n(em);
            let ep = (e) => {
                let { title: t, onChange: r, isChecked: o, description: a, 'data-test-id': i } = e,
                    s = (0, d.useId)();
                return (0, n.jsxs)('div', {
                    className: ef().root,
                    children: [
                        (0, n.jsxs)('div', {
                            className: ef().textContainer,
                            children: [
                                (0, n.jsx)(c.HL, {
                                    className: ef().title,
                                    id: s,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                a && (0, n.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: ef().description, children: a }),
                            ],
                        }),
                        (0, n.jsx)(e_.l, { isChecked: o, 'aria-describedby': s, onChange: r, 'data-test-id': i }),
                    ],
                });
            };
            var eE = r(51318);
            let eh = {
                    [eE.l.TOGGLE_PLAY]: ['K'],
                    [eE.l.TOGGLE_MUTE]: ['M'],
                    [eE.l.INCREASE_VOLUME]: ['↑'],
                    [eE.l.DECREASE_VOLUME]: ['↓'],
                    [eE.l.LIKE]: ['F'],
                    [eE.l.DISLIKE]: ['D'],
                    [eE.l.MOVE_FORWARD]: ['N'],
                    [eE.l.MOVE_BACKWARD]: ['P'],
                    [eE.l.SLIDE_FORWARD]: ['→', 'L'],
                    [eE.l.SLIDE_BACKWARD]: ['←', 'J'],
                    [eE.l.TOGGLE_REPEAT]: ['R'],
                    [eE.l.TOGGLE_SHUFFLE]: ['S'],
                    [eE.l.TOGGLE_FULLSCREEN_PLAYER]: ['W'],
                    [eE.l.CLOSE]: ['Escape'],
                },
                eC = [
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.play-pause' }), shortcutsAction: eE.l.TOGGLE_PLAY },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.mute' }), shortcutsAction: eE.l.TOGGLE_MUTE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.skip-forward' }), shortcutsAction: eE.l.SLIDE_FORWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.rewind' }), shortcutsAction: eE.l.SLIDE_BACKWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.volume-up' }), shortcutsAction: eE.l.INCREASE_VOLUME },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.volume-down' }), shortcutsAction: eE.l.DECREASE_VOLUME },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.like' }), shortcutsAction: eE.l.LIKE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.unlike' }), shortcutsAction: eE.l.DISLIKE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.switch-repeat-mode' }), shortcutsAction: eE.l.TOGGLE_REPEAT },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.switch-shuffle-mode' }), shortcutsAction: eE.l.TOGGLE_SHUFFLE },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.next-track' }), shortcutsAction: eE.l.MOVE_FORWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.previous-track' }), shortcutsAction: eE.l.MOVE_BACKWARD },
                    { formattedMessage: (0, n.jsx)(i.A, { id: 'shortcuts.fullscreen-player' }), shortcutsAction: eE.l.TOGGLE_FULLSCREEN_PLAYER },
                ];
            var ev = r(70922),
                eA = r.n(ev);
            let ex = (0, o.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, S.g)(),
                    { formatMessage: t } = (0, a.A)(),
                    r = (0, d.useMemo)(() => {
                        let e = (0, n.jsx)(
                            c.HL,
                            { className: eA().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: (0, n.jsx)(i.A, { id: 'shortcuts.or' }) },
                            'or',
                        );
                        return eC.map((t) => {
                            let { shortcutsAction: r, formattedMessage: o } = t,
                                a = eh[r].map((e, t) =>
                                    (0, n.jsx)(
                                        'div',
                                        {
                                            className: eA().button,
                                            children: (0, n.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: e }),
                                        },
                                        t,
                                    ),
                                );
                            return (
                                a.length > 1 && a.splice(1, 0, e),
                                (0, n.jsx)(
                                    'li',
                                    {
                                        children: (0, n.jsxs)('div', {
                                            className: eA().content,
                                            children: [
                                                (0, n.jsx)(c.HL, { className: eA().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: o }),
                                                (0, n.jsx)('div', { className: eA().buttons, children: a }),
                                            ],
                                        }),
                                    },
                                    r,
                                )
                            );
                        });
                    }, []);
                return (0, n.jsx)(m.a, {
                    className: eA().root,
                    headerClassName: eA().modalHeader,
                    contentClassName: eA().modalContent,
                    title: t({ id: 'settings.shortcuts' }),
                    open: e.isOpened,
                    onOpenChange: e.onOpenChange,
                    onClose: e.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: t({ id: 'interface-actions.close' }),
                    children: (0, n.jsx)('ul', { className: eA().list, children: r }),
                });
            });
            var eb = r(44464),
                eg = r.n(eb);
            let eS = (0, o.PA)(() => {
                let e = (0, b.B)(),
                    t = (0, v.N)().get(C.oo),
                    {
                        modals: { shortcutsModal: r, aboutAppModal: o, clearMemoryModal: i },
                        experiments: l,
                        wizard: c,
                        user: m,
                        slam: f,
                        settings: p,
                        sonataState: E,
                    } = (0, S.g)(),
                    D = (0, u.j)(),
                    j = (0, _.S)(),
                    { notify: I } = (0, x.l)(),
                    { formatMessage: M } = (0, a.A)(),
                    B = (0, g.g)(),
                    P = j.isAvailable && !p.isMobile,
                    k = l.checkExperiment(O.z.WebNextCrossMediaPlayer, 'on'),
                    F = l.checkExperiment(O.z.WebNextAIContentReductionSetting, 'on'),
                    z = m.hasPlus,
                    U = p.isLiteVersionModeAvailableForToggle && !0,
                    q = !p.isMobile,
                    H = j.isEnabled ? M({ id: 'equalizer.enabled' }) : M({ id: 'equalizer.disabled' }),
                    G = (0, d.useMemo)(() => M({ id: 'desktop.app-version-short' }, { version: e }), [M, e]),
                    W = (0, d.useCallback)(
                        async (e) => {
                            (await m.setSettings({ isChildModeEnabled: e })) === y.F.ERROR &&
                                I((0, n.jsx)(R.h, { error: M({ id: 'settings.failed-to-change-child-mode' }) }), { containerId: A.u.ERROR });
                        },
                        [m, M, I],
                    ),
                    V = (0, d.useCallback)(
                        (e) => {
                            f.setOfflineMode(e);
                        },
                        [f],
                    ),
                    Y = (0, d.useCallback)(() => {
                        i.open();
                    }, [i]),
                    Q = (0, d.useCallback)(
                        (e) => {
                            if (e) return void p.setLiteVersionMode(N.w.ENABLED, !0);
                            p.setLiteVersionMode(N.w.DISABLED, !0);
                        },
                        [p],
                    );
                (0, d.useLayoutEffect)(() => {
                    let e = t.get(L.c.CrossFadeMode);
                    'boolean' == typeof e && E.setCrossFadeMode(e);
                }, [E, t]);
                let X = (0, d.useCallback)(
                        (e) => {
                            (E.setCrossFadeMode(e), B && (B.isCrossfadeEnabled.value = e));
                        },
                        [E, B],
                    ),
                    Z = (0, d.useCallback)(
                        async (e) => {
                            (await m.setSettings({ aiContentReductionEnabled: e })) === y.F.ERROR &&
                                I((0, n.jsx)(R.h, { error: M({ id: 'error-messages.error-during-action' }) }), { containerId: A.u.ERROR });
                        },
                        [m, M, I],
                    );
                return (0, n.jsxs)('ul', {
                    className: eg().root,
                    'data-test-id': s.e8.settings.SETTINGS_LIST,
                    children: [
                        z &&
                            !D.isActive &&
                            (0, n.jsx)('li', {
                                className: eg().item,
                                children: (0, n.jsx)(ep, {
                                    title: M({ id: 'offline.offline-mode' }),
                                    description: M({ id: 'offline.offline-mode-description' }),
                                    onChange: V,
                                    isChecked: !!f.isOfflineModeEnabled,
                                    'data-test-id': s.e8.settings.OFFLINE_MODE_TOGGLE,
                                }),
                            }),
                        z &&
                            (0, n.jsxs)('li', {
                                className: eg().item,
                                children: [(0, n.jsx)(eu, { title: M({ id: 'offline.clear-memory' }), onClick: Y }), (0, n.jsx)(K, {})],
                            }),
                        U &&
                            (0, n.jsx)('li', {
                                className: eg().item,
                                children: (0, n.jsx)(ep, {
                                    title: M({ id: 'lite-version.title' }),
                                    description: M({ id: 'lite-version.description' }),
                                    onChange: Q,
                                    isChecked: p.isLiteVersionModeEnabled,
                                }),
                            }),
                        P &&
                            (0, n.jsxs)('li', {
                                className: eg().item,
                                children: [
                                    (0, n.jsx)(eu, {
                                        title: M({ id: 'equalizer.title' }),
                                        description: H,
                                        onClick: j.modal.open,
                                        descriptionDataTestId: s.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION,
                                        'data-test-id': s.e8.settings.SETTINGS_EQUALIZER_BUTTON,
                                    }),
                                    (0, n.jsx)(h, {}),
                                ],
                            }),
                        k &&
                            (0, n.jsx)('li', {
                                className: eg().item,
                                children: (0, n.jsx)(ep, { title: M({ id: 'settings.crossfade' }), onChange: X, isChecked: E.isCrossFadeEnabled }),
                            }),
                        F &&
                            (0, n.jsx)('li', {
                                className: eg().item,
                                children: (0, n.jsx)(ep, {
                                    title: M({ id: 'settings.ai-content-reduction' }),
                                    description: M({ id: 'settings.ai-content-reduction-description' }),
                                    onChange: Z,
                                    isChecked: m.settings.aiContentReductionEnabled,
                                    'data-test-id': s.e8.settings.SETTINGS_AI_CONTENT_REDUCTION_BUTTON,
                                }),
                            }),
                        (0, n.jsx)(T.WithOffline, {
                            fallback: (0, n.jsx)('li', {
                                className: eg().item,
                                children: (0, n.jsx)(eu, {
                                    title: M({ id: 'settings.preferences' }),
                                    description: M({ id: 'settings.preferences-description' }),
                                    onClick: c.modal.open,
                                    disabled: !c.isAvailable,
                                    'data-test-id': s.e8.settings.SETTINGS_PREFERENCES_BUTTON,
                                }),
                            }),
                        }),
                        (0, n.jsx)(T.WithOffline, {
                            fallback:
                                !l.checkExperiment(O.z.WebNextDisableKids, 'on') &&
                                (0, n.jsx)('li', {
                                    className: eg().item,
                                    children: (0, n.jsx)(ep, {
                                        title: M({ id: 'settings.show-child-section' }),
                                        onChange: W,
                                        isChecked: m.settings.isChildModeEnabled,
                                        'data-test-id': s.e8.settings.SETTINGS_KIDS_BUTTON,
                                    }),
                                }),
                        }),
                        (0, n.jsxs)('li', {
                            className: eg().item,
                            children: [(0, n.jsx)(eu, { title: M({ id: 'settings.shortcuts' }), onClick: r.open }), (0, n.jsx)(ex, {})],
                        }),
                        q && (0, n.jsx)('li', { className: eg().item, children: (0, n.jsx)(es, {}) }),
                        G &&
                            (0, n.jsxs)('li', {
                                className: eg().item,
                                children: [(0, n.jsx)(eu, { title: M({ id: 'settings.about-app' }), description: G, onClick: o.open }), (0, n.jsx)(w, {})],
                            }),
                    ],
                });
            });
            var ey = r(20129),
                eO = r(69630),
                eN = r(46422),
                eL = r(44230),
                eR = r(86790),
                eT = r(60266),
                eD = r(93317),
                ej = r(48642),
                eI = r.n(ej);
            let eM = (0, o.PA)(() => {
                let { formatMessage: e } = (0, a.A)(),
                    { contentScrollRef: t, setContentScrollRef: r } = (0, eL.g)(),
                    o = (0, eN.W)(),
                    { slam: d } = (0, S.g)();
                return (0, n.jsxs)(eO.h, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, n.jsx)(eD.Y, {
                            variant: eD.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: o.canBack && !d.isOfflineModeEnabled,
                            children: (0, n.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: (0, n.jsx)(i.A, { id: 'page.settings' }) }),
                        }),
                        (0, n.jsx)(l.N, {
                            ref: r,
                            className: eI().root,
                            containerClassName: eI().scrollableContainer,
                            'data-test-id': s.Xk.settings.SETTINGS_PAGE,
                            children: (0, n.jsxs)('div', {
                                className: eI().container,
                                children: [
                                    (0, n.jsx)('div', { className: eI().content, children: (0, n.jsx)(eS, {}) }),
                                    (0, n.jsx)(ey.p, {}),
                                    (0, n.jsx)(eT.A, { children: (0, n.jsx)(eR.w, { className: eI().footer }) }),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        56425: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => s, r: () => l });
            var n = r(71774),
                o = r(5120),
                a = r(28870);
            let i = o.gK.model('CustomPlayerThumbItem', { id: o.gK.enumeration(Object.values(n.T)), name: o.gK.string, thumb: a.K }),
                s = {
                    [n.T.DUCK]: () =>
                        r
                            .e(8962)
                            .then(r.t.bind(r, 68962, 17))
                            .then((e) => e.default),
                    [n.T.CAR]: () =>
                        r
                            .e(8765)
                            .then(r.t.bind(r, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [n.T.DUCK, i.create({ id: n.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: n.T.DUCK, width: 50, height: 50 } })],
                        [n.T.CAR, i.create({ id: n.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: n.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        57649: (e, t, r) => {
            'use strict';
            r.d(t, { u: () => a });
            var n = r(53548),
                o = r(41617);
            function a() {
                return (0, n.useContext)(o.E);
            }
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
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var n = r(88800);
            r(30282);
            var o = r(11006),
                a = r.n(o);
            let i = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: a().empty });
            };
        },
        60527: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let n = r(88800),
                o = r(53548),
                a = r(37531);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(68326);
            let s = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        r = (0, o.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function c(e) {
                        let i = l ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(c, { ...(s ? { fallback: i } : {}), children: d });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        60840: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => a });
            var n = r(53548),
                o = r(86726);
            function a() {
                return (0, n.useContext)(o.S);
            }
        },
        60978: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            let n = {
                src: '/_next/static/media/artist.d238337d.webp',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5j9mQEnwGchWUgR7oAz228AAFZQOCA0AAAA0AEAnQEqCAAIAAJAOCWUAAMX+VdAjqAA/ubxr1dKCvvMhnGE/guc0nvMLJJkD5h+3R4AAA==',
                blurWidth: 8,
                blurHeight: 8,
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
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var n = r(97956);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: a } = e;
                return 'ru' === a && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        62571: (e, t, r) => {
            'use strict';
            function n(e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                    }
                return r;
            }
            r.d(t, { A: () => n });
        },
        62791: (e, t, r) => {
            'use strict';
            r.d(t, { _K: () => m, ns: () => _, ze: () => f, Ay: () => h });
            var n = r(62571),
                o = r(45628),
                a = r(53548),
                i = r(53405);
            let s = { disabled: !1 };
            var l = r(15028),
                c = r(51374),
                d = 'unmounted',
                u = 'exited',
                _ = 'entering',
                m = 'entered',
                f = 'exiting',
                p = (function (e) {
                    function t(t, r) {
                        var n,
                            o = e.call(this, t, r) || this,
                            a = r && !r.isMounting ? t.enter : t.appear;
                        return (
                            (o.appearStatus = null),
                            t.in ? (a ? ((n = u), (o.appearStatus = _)) : (n = m)) : (n = t.unmountOnExit || t.mountOnEnter ? d : u),
                            (o.state = { status: n }),
                            (o.nextCallback = null),
                            o
                        );
                    }
                    ((0, o.A)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return e.in && t.status === d ? { status: u } : null;
                        }));
                    var r = t.prototype;
                    return (
                        (r.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (r.componentDidUpdate = function (e) {
                            var t = null;
                            if (e !== this.props) {
                                var r = this.state.status;
                                this.props.in ? r !== _ && r !== m && (t = _) : (r === _ || r === m) && (t = f);
                            }
                            this.updateStatus(!1, t);
                        }),
                        (r.componentWillUnmount = function () {
                            this.cancelNextCallback();
                        }),
                        (r.getTimeouts = function () {
                            var e,
                                t,
                                r,
                                n = this.props.timeout;
                            return (
                                (e = t = r = n),
                                null != n && 'number' != typeof n && ((e = n.exit), (t = n.enter), (r = void 0 !== n.appear ? n.appear : t)),
                                { exit: e, enter: t, appear: r }
                            );
                        }),
                        (r.updateStatus = function (e, t) {
                            if ((void 0 === e && (e = !1), null !== t))
                                if ((this.cancelNextCallback(), t === _)) {
                                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                        var r = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this);
                                        r && (0, c.F)(r);
                                    }
                                    this.performEnter(e);
                                } else this.performExit();
                            else this.props.unmountOnExit && this.state.status === u && this.setState({ status: d });
                        }),
                        (r.performEnter = function (e) {
                            var t = this,
                                r = this.props.enter,
                                n = this.context ? this.context.isMounting : e,
                                o = this.props.nodeRef ? [n] : [i.findDOMNode(this), n],
                                a = o[0],
                                l = o[1],
                                c = this.getTimeouts(),
                                d = n ? c.appear : c.enter;
                            if ((!e && !r) || s.disabled)
                                return void this.safeSetState({ status: m }, function () {
                                    t.props.onEntered(a);
                                });
                            (this.props.onEnter(a, l),
                                this.safeSetState({ status: _ }, function () {
                                    (t.props.onEntering(a, l),
                                        t.onTransitionEnd(d, function () {
                                            t.safeSetState({ status: m }, function () {
                                                t.props.onEntered(a, l);
                                            });
                                        }));
                                }));
                        }),
                        (r.performExit = function () {
                            var e = this,
                                t = this.props.exit,
                                r = this.getTimeouts(),
                                n = this.props.nodeRef ? void 0 : i.findDOMNode(this);
                            if (!t || s.disabled)
                                return void this.safeSetState({ status: u }, function () {
                                    e.props.onExited(n);
                                });
                            (this.props.onExit(n),
                                this.safeSetState({ status: f }, function () {
                                    (e.props.onExiting(n),
                                        e.onTransitionEnd(r.exit, function () {
                                            e.safeSetState({ status: u }, function () {
                                                e.props.onExited(n);
                                            });
                                        }));
                                }));
                        }),
                        (r.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (r.safeSetState = function (e, t) {
                            ((t = this.setNextCallback(t)), this.setState(e, t));
                        }),
                        (r.setNextCallback = function (e) {
                            var t = this,
                                r = !0;
                            return (
                                (this.nextCallback = function (n) {
                                    r && ((r = !1), (t.nextCallback = null), e(n));
                                }),
                                (this.nextCallback.cancel = function () {
                                    r = !1;
                                }),
                                this.nextCallback
                            );
                        }),
                        (r.onTransitionEnd = function (e, t) {
                            this.setNextCallback(t);
                            var r = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this),
                                n = null == e && !this.props.addEndListener;
                            if (!r || n) return void setTimeout(this.nextCallback, 0);
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                                    a = o[0],
                                    s = o[1];
                                this.props.addEndListener(a, s);
                            }
                            null != e && setTimeout(this.nextCallback, e);
                        }),
                        (r.render = function () {
                            var e = this.state.status;
                            if (e === d) return null;
                            var t = this.props,
                                r = t.children,
                                o =
                                    (t.in,
                                    t.mountOnEnter,
                                    t.unmountOnExit,
                                    t.appear,
                                    t.enter,
                                    t.exit,
                                    t.timeout,
                                    t.addEndListener,
                                    t.onEnter,
                                    t.onEntering,
                                    t.onEntered,
                                    t.onExit,
                                    t.onExiting,
                                    t.onExited,
                                    t.nodeRef,
                                    (0, n.A)(t, [
                                        'children',
                                        'in',
                                        'mountOnEnter',
                                        'unmountOnExit',
                                        'appear',
                                        'enter',
                                        'exit',
                                        'timeout',
                                        'addEndListener',
                                        'onEnter',
                                        'onEntering',
                                        'onEntered',
                                        'onExit',
                                        'onExiting',
                                        'onExited',
                                        'nodeRef',
                                    ]));
                            return a.createElement(l.A.Provider, { value: null }, 'function' == typeof r ? r(e, o) : a.cloneElement(a.Children.only(r), o));
                        }),
                        t
                    );
                })(a.Component);
            function E() {}
            ((p.contextType = l.A),
                (p.propTypes = {}),
                (p.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: E,
                    onEntering: E,
                    onEntered: E,
                    onExit: E,
                    onExiting: E,
                    onExited: E,
                }),
                (p.UNMOUNTED = d),
                (p.EXITED = u),
                (p.ENTERING = _),
                (p.ENTERED = m),
                (p.EXITING = f));
            let h = p;
        },
        63442: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        63771: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => a, j: () => i });
            var n = r(53548),
                o = r(39499);
            let a = (0, n.createContext)(null),
                i = () => {
                    let e = (0, n.useContext)(a);
                    if (!e) throw new o.t('Desktop outage cannot be null, please add a context provider', { code: 'E_CONTEXT_DESKTOP_OUTAGE_NULL' });
                    return e;
                };
        },
        64546: (e, t, r) => {
            'use strict';
            r.d(t, { WithOffline: () => l });
            var n = r(84961),
                o = r(4086),
                a = r(41928),
                i = r(70787),
                s = r(72288);
            let l = (0, n.PA)((e) => {
                let { fallback: t, children: r } = e,
                    n = (0, a.N)(),
                    { slam: l } = (0, s.g)(),
                    c = n.get(o.U2);
                return (0, i.g)(c) || l.isOfflineModeEnabled ? r : t;
            });
        },
        65453: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var n,
                o = r(53548),
                a = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let o = r(4377),
                            a = r(810),
                            i = r(5881),
                            s = n(r(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, o.jsx)('a', {}),
                                        block: r,
                                        target: n,
                                        rel: l,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: f,
                                        children: p,
                                        textClassName: E = '',
                                        containerClassName: h,
                                        ...C
                                    } = e,
                                    v = (0, a.useId)(),
                                    A = !a.Children.count(p),
                                    x = 'left' === u,
                                    b = null;
                                if (void 0 !== m) {
                                    var g;
                                    b = (0, a.cloneElement)(m, {
                                        className: (0, i.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !A && u },
                                            null == (g = m.props) ? void 0 : g.className,
                                        ),
                                        key: v,
                                    });
                                }
                                let S = (0, a.useMemo)(
                                    () =>
                                        m
                                            ? (0, o.jsxs)('div', {
                                                  className: (0, i.clsx)(s.default.iconContainer, h),
                                                  children: [x && b, !A && (0, o.jsx)('span', { className: E, children: p }), !x && b],
                                              })
                                            : p,
                                    [p, h, m, x, A, b, E],
                                );
                                return (0, a.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: n,
                                        rel: '_blank' === n && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, i.clsx)(s.default.root, { [s.default.block]: r, [s.default.flexIcon]: m && _, [s.default.iconOnly]: m && A }, f),
                                        ...C,
                                        ...t.props,
                                    },
                                    S,
                                );
                            };
                        t.Link = (0, a.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function s(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = s(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        66943: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => d });
            var n = r(88800),
                o = r(65724),
                a = r(73170),
                i = r(29504),
                s = r(59304),
                l = r(49397),
                c = r.n(l);
            let d = (e) => {
                let { error: t, closeToast: r, className: l } = e;
                return (0, n.jsx)(s.$, {
                    className: (0, o.$)(c().root, l),
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(a.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, n.jsx)(i.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: r,
                });
            };
        },
        67046: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            let n = (0, r(53548).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        68326: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(88800),
                r(53405),
                r(96669),
                r(86900));
        },
        70787: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => o });
            var n = r(15253);
            let o = (e) => {
                let t = e.get(n.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        70922: (e) => {
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
        71774: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var n = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        71978: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            var n = r(4086),
                o = r(41928);
            function a() {
                return (0, o.N)().get(n.y$);
            }
        },
        72432: (e) => {
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
        73170: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                o = r(53548),
                a = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            a = r(5881),
                            i = r(810),
                            s = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, a.clsx)(s.default.root, { [s.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, a.clsx)(c, n.props.className) })
                                : (0, o.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function s(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = s(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        73442: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a });
            var n = r(53548),
                o = r(86);
            function a() {
                return (0, n.useContext)(o.D);
            }
        },
        76124: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let n = r(70405)._(r(60527));
            function o(e, t) {
                var r;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let a = { ...o, ...t };
                return (0, n.default)({ ...a, modules: null == (r = a.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        76500: (e) => {
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
        78793: (e, t, r) => {
            'use strict';
            function n(e) {
                let { params: t, logger: r, context: n } = e,
                    o = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return o.length > 0 ? (r.error('Evgen parameters are not met', { parameters: o.join(', '), incomingParams: t, context: n }), null) : t;
            }
            r.d(t, { F: () => n });
        },
        79070: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var o = n.useReturnValue;
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => E });
            var n = r(88800),
                o = r(65724),
                a = r(61013),
                i = r(53548);
            let s = (e) => {
                    let { style: t, forwardRef: r, context: o, ...a } = e,
                        i = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        s = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': i, style: { ...t }, ref: r, ...a });
                },
                l = (0, i.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: i, withForceScroll: s, ...l } = e;
                    return (0, n.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: r,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
            var m = r(55482),
                f = r(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: a = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, i.useState)(null),
                        E = (0, i.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), l.length > 0 && p(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < n; e++) r(e);
                                    }
                                }, a),
                            [a, o, t, r, l],
                        );
                    (0, i.useEffect)(() => {
                        l.length > 0 && _ && E(_);
                    }, l);
                    let h = (0, i.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, n.jsx)(f.sN, { ref: d, rangeChanged: E, totalCount: s, endReached: h, ...u });
                },
                E = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: E = 700,
                            pageSize: h = 20,
                            totalCount: C,
                            totalRequests: v,
                            debounceDurationInMs: A,
                            initialItemCount: x,
                            minInitialItemCount: b = 20,
                            handleRef: g,
                            alwaysShowScrollbar: S = !1,
                            testId: y,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...L
                        } = e,
                        [R, T] = (0, i.useState)(!1),
                        D = (0, i.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        j = (0, i.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : l,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : l,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, v, O]),
                        I = x ? Math.min(x, b) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': y,
                        children: [
                            O && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(p, {
                                overscan: E,
                                components: j,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: D,
                                itemContent: m,
                                scrollerRef: g,
                                totalCount: C,
                                pageSize: h,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: N,
                                ...L,
                            }),
                            O && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        80566: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            let n = (0, r(53548).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81192: (e) => {
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
        81877: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            var n = r(88800),
                o = r(53548),
                a = r(17392),
                i = r(90688);
            let s = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: o, forwardRef: s, ...l } = e;
                    return t
                        ? (0, n.jsx)(i._V, { ref: s, className: r, fallbackIconSize: o, ...l, 'data-test-id': a.S7.ENTITY_COVER_IMAGE })
                        : (0, n.jsx)(i.Ab, { className: r, iconSize: o, iconVariant: 'unavailable', 'data-test-id': a.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, o.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e }));
        },
        83210: (e, t, r) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            r.d(t, { B: () => n });
        },
        86726: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            let n = (0, r(53548).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => y });
            var n = r(88800),
                o = r(65724),
                a = r(84961),
                i = r(2058),
                s = r(30282),
                l = r(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var _ = r(62293),
                m = r(99839);
            let f = (e) => e(new Date(), (0, m.m)());
            var p = r(51611),
                E = r(72288),
                h = r(11006),
                C = r.n(h),
                v = r(17392),
                A = r(29504),
                x = r(91292);
            let b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(C().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(x.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(A.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(x.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                g = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: C().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, n.jsx)(x.N, { target: '_blank', href: o, className: C().link, 'data-test-id': v.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, o.$)(C().root, C().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, n.jsx)(g, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(b, { data: r.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, E.g)(),
                    { formatDate: o, formatMessage: a } = (0, i.A)(),
                    { language: s } = (0, p.h)(),
                    l = u({ formatMessage: a, language: s, tld: r.tld, year: f(o) });
                return (0, n.jsx)(b, { className: t, data: l });
            });
            let y = (0, a.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: a, location: m, user: h } = (0, E.g)(),
                    { formatDate: v, formatMessage: A } = (0, i.A)(),
                    { isEnabled: x } = null != (t = (0, l.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    g = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: o, tld: a, userRegion: i, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: o, userRegion: a } = e,
                                    i = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, o) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, o) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, o) },
                                    m = [i, l, u];
                                return (r && 'ru' === a && m.push(s), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: n, language: o, tld: a, userRegion: i }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: a, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: A,
                        isWebApplication: s.$3,
                        tld: m.tld,
                        language: b,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: f(v),
                    });
                return (0, n.jsx)(S, { className: (0, o.$)({ [C().root_withOffsetForDeeplink]: x }, r), data: g });
            });
        },
        88021: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var n,
                o = r(14022),
                a = r(53548),
                i = {
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e](r, r.exports, l), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (r) => {
                    let [n, o] = (0, e.useState)(!0),
                        [a, i] = (0, e.useState)(!0),
                        s = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), i(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        s();
                    }, [r, s]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == e || e.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [r, s]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: n,
                        shouldForwardButtonBeDisabled: a,
                        shouldHideControls: n && a,
                    };
                };
            })(),
                c.X);
            var d = c.l;
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
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        90134: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            let n = (0, r(53548).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        90334: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            let n = (0, r(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, t, r) => {
            'use strict';
            r.d(t, { vZ: () => E, st: () => a, gf: () => s });
            var n = r(53548);
            let o = (0, n.createContext)(null);
            function a() {
                return (0, n.useContext)(o);
            }
            let i = (0, n.createContext)({ hash: void 0 });
            function s() {
                return (0, n.useContext)(i);
            }
            var l = r(88800),
                c = r(54020);
            let d = (e) => {
                let { children: t } = e,
                    r = (0, n.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, l.jsx)(i.Provider, { value: r, children: t });
            };
            class u {
                makeParams() {
                    return {};
                }
            }
            class _ {
                makeParams() {
                    return {};
                }
            }
            var m = r(9519);
            class f {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, r) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (n, o) => {
                                let a = { ...o, ...t.getGlobalParams(), ...r.getPlatformParams() };
                                e.trackEvent(n, a);
                            },
                        }));
                }
            }
            let p = null,
                E = (e) => {
                    let { allowAnalyticsLogs: t, children: r, evgenUserParam: a, logger: i, metrika: s } = e,
                        c = (0, n.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, t, r) {
                                let n = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: r, requestsSendingDelay: n } = e,
                                        o = [];
                                    return (
                                        !(function e() {
                                            (o.length > 0 && t(o.splice(0, r)), window.setTimeout(e, n));
                                        })(),
                                        {
                                            add(e) {
                                                o.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, o) {
                                        (r && t.log(e, o), n.add({ [e]: o }));
                                    },
                                };
                            })((e) => s.count(e, a), i, t);
                            return (p = new f(
                                e,
                                (function () {
                                    let e = new u();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new _();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [i, s]);
                    return (0, l.jsx)(o.Provider, { value: c, children: (0, l.jsx)(d, { children: r }) });
                };
        },
        91248: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => a });
            var n = r(53548),
                o = r(67046);
            function a() {
                return (0, n.useContext)(o.F);
            }
        },
        91292: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var n = r(88800),
                o = r(53548),
                a = r(12389),
                i = r.n(a),
                s = r(29993),
                l = r(65453),
                c = r(46079),
                d = r(67174);
            let u = (e) => {
                    let [t, r] = (0, o.useState)(!1),
                        a = (0, s.c)(() => {
                            r(!0);
                        });
                    return (0, n.jsx)(i(), { prefetch: t, ...e, onMouseEnter: a });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: a, ...s } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, o.useContext)(c.j),
                        { href: f, target: p, rel: E } = (0, d.u)(null != r ? r : ''),
                        h = (0, o.isValidElement)(a)
                            ? a
                            : (function (e, t, r) {
                                  return e ? (t ? (0, n.jsx)(i(), { prefetch: !1 }) : r ? (0, n.jsx)(u, { href: e }) : (0, n.jsx)(i(), {})) : (0, n.jsx)('a', {});
                              })(r, _, m);
                    return (0, n.jsx)(l.N, { ref: t, component: h, href: r ? f : void 0, target: p, rel: E, ...s });
                },
                m = (0, o.forwardRef)((e, t) => (0, n.jsx)(_, { ...e, forwardedRef: t }));
        },
        94058: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => b });
            var n = r(88800),
                o = r(65724),
                a = r(14231),
                i = r(84961),
                s = r(53548),
                l = r.t(s, 2),
                c = r(17392),
                d = r(88021),
                u = {
                    810: (e) => {
                        e.exports = l;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = _[t];
                    if (void 0 !== r) return r.exports;
                    var n = (_[t] = { exports: {} });
                    return (u[t](n, n.exports, e), n.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let n = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(n.current) : (t.current = n.current));
                        }, [t]),
                        n
                    );
                };
            })(),
                m.__esModule);
            var f = m.useForwardRef,
                p = r(32353),
                E = r(72288),
                h = r(31764),
                C = r(81192),
                v = r.n(C);
            let A = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                x = (0, i.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: i,
                            scrollPadding: l,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: C,
                            withSecondaryColor: x,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, E.g)(),
                        g = f(i, null),
                        { shouldBackwardButtonBeDisabled: S, shouldForwardButtonBeDisabled: y, shouldHideControls: O } = (0, d.Y)(g),
                        [N, L] = (0, s.useMemo)(() => {
                            let e = (0, a.A)(A, l);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [l, b]),
                        R = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = g.current) ? void 0 : t.children[e],
                                    { current: n } = g;
                                if (!n || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - n.scrollLeft < N) {
                                    n.scrollLeft = r.offsetLeft - N;
                                    return;
                                }
                                let o = n.scrollLeft + n.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < L && (n.scrollLeft -= o - L);
                            },
                            [g, L, N],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                var t, n;
                                (R(e), null == (t = (n = r.props).onTabChange) || t.call(n, e));
                            },
                            [r, R],
                        ),
                        D = (0, s.cloneElement)(r, { forwardRef: g, className: (0, o.$)(v().wrapper, r.props.className, v().carousel, v().important), onTabChange: T });
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(
                            v().root,
                            {
                                [v().root_carouselBetweenArrows]: u,
                                [v().root_arrowLeft_hidden]: S,
                                [v().root_arrowRight_hidden]: y,
                                [v().root_arrow_hidden]: S && y && O,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, n.jsx)('div', { className: v().list, children: D }),
                            !b &&
                                (0, n.jsx)(h.X, {
                                    className: (0, o.$)(v().buttons, _),
                                    carouselRef: g,
                                    backwardControlClassName: v().control,
                                    forwardControlClassName: v().control,
                                    withSecondaryColor: x,
                                    buttonSize: m,
                                    buttonVariant: C,
                                }),
                        ],
                    });
                }),
                b = (0, s.forwardRef)((e, t) => (0, n.jsx)(x, { forwardRef: t, ...e }));
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => a });
            var n = r(53548);
            let o = (0, n.createContext)(null),
                a = () => (0, n.useContext)(o);
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return i;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return s;
                    },
                }));
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let o = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return o ? new o() : new n();
            }
            function i(e) {
                return o ? o.bind(e) : n.bind(e);
            }
            function s() {
                return o
                    ? o.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        96669: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = r(20603);
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                5898, 8752, 7773, 7435, 7963, 3637, 7759, 5083, 7617, 3259, 6706, 4771, 1311, 5201, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 8283, 2824, 5151, 4732,
                1195, 1598, 6281, 1928, 9124, 900, 6387, 4322, 1372, 2288, 763, 2670, 7358,
            ],
            () => e((e.s = 35814)),
        ),
            (_N_E = e.O()));
    },
]);
