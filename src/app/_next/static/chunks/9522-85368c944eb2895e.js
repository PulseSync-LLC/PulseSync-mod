(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9202, 9522],
    {
        408: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => c });
            var r = a(45144),
                i = a(47618),
                l = a(53548),
                n = a(49176),
                s = a(9519);
            class o extends r.uN {}
            (0, s._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === n.v.ENTER;
                    },
                },
            ]);
            let c = () => {
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
                    sensors: (0, r.FR)(
                        (0, r.MS)(r.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, r.MS)(r.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, r.MS)(o, { coordinateGetter: i.JR, keyboardCodes: { start: [n.v.ENTER], cancel: [n.v.ESCAPE], end: [n.v.ENTER] } }),
                    ),
                };
            };
        },
        631: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            let r = (e, t, a) => {
                var r, i, l;
                let n = null != (l = null == (i = document.getElementById(t)) || null == (r = i.querySelector('iframe')) ? void 0 : r.contentWindow) ? l : null;
                return null !== n && e.source === n && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        1220: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { $: () => r }),
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
                })(r || (r = {})));
        },
        1606: (e) => {
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
        2520: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(53548),
                i = a(18593),
                l = a(93039);
            let n = (e) => {
                let { playlistId: t, filter: a } = e;
                return (0, r.useMemo)(() => (t ? (0, l.t)({ contextType: i.K.Playlist, contextId: t, filter: a }) : null), [t, a]);
            };
        },
        3685: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var r = a(53548);
            let i = (e, t) => ({
                topColorStyle: (0, r.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, r.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        5295: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => i });
            var r = a(54683);
            let i = (e, t, a) => {
                let i = null != t ? t : r.wT,
                    l = null != a ? a : r.by,
                    n = (0, r.de)((0, r.aq)(e), i, l),
                    s = Math.round(255 * n[0]),
                    o = Math.round(255 * n[1]),
                    c = Math.round(255 * n[2]);
                return 'rgb('.concat(s, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        5739: (e) => {
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
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => p });
            var r = a(88800),
                i = a(88969),
                l = a(58390),
                n = a(17392),
                s = a(29993),
                o = a(96817),
                c = a(29504),
                d = a(99890),
                u = a(4086),
                m = a(41928);
            let p = (e) => {
                let { size: t = 'm', variant: a = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: y, isBlock: g, key: v, className: h } = e,
                    f = (0, l.useRouter)(),
                    A = (0, m.N)().get(u.QG),
                    C = (0, s.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(A.authorizationUrl));
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: C,
                        className: h,
                        isBlock: g,
                        color: p,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: y || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        8357: (e) => {
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
        8523: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => u });
            var r = a(88800),
                i = a(84961),
                l = a(53548),
                n = a(49784),
                s = a(82212),
                o = a(72714),
                c = a(4465);
            let d = { [s.t.ARTIST_RECOMMENDATIONS_PROMO]: o.v, [s.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: c.i },
                u = (0, i.PA)((e) => {
                    let {
                            block: t,
                            title: a,
                            impId: i,
                            getArtistRecommendationsPromo: s,
                            className: o,
                            containerClassName: c,
                            headerClassName: u,
                            headingVariant: m = 'h2',
                        } = e,
                        { type: p, meta: _, isLoaded: y, isNeededToLoad: g, isVisible: v, setOutdated: h } = t;
                    if (((0, n.W)({ enabled: v && y }), void 0 !== i && g && (0, l.use)(s({ impId: i, deduplicateNewReleases: !0 })), !v)) return null;
                    let f = d[p];
                    return (0, r.jsx)(f, {
                        ...t,
                        meta: { ..._, title: a },
                        isLoaded: y,
                        setOutdated: h,
                        className: o,
                        containerClassName: c,
                        headerClassName: u,
                        headingVariant: m,
                    });
                });
        },
        9184: (e) => {
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
        10561: (e) => {
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
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => h });
            var r = a(88800),
                i = a(65724),
                l = a(84961),
                n = a(53548),
                s = a(17392),
                o = a(34126),
                c = a(39079),
                d = a(72288),
                u = a(39267),
                m = a(13619),
                p = a(73805),
                _ = a(15232),
                y = a(56712),
                g = a(26243),
                v = a.n(g);
            let h = (0, l.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: l,
                        className: g,
                        withDNDBlock: h,
                        isDragging: f,
                        draggingClassName: A,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: x,
                        handleRemove: P,
                        withDislike: b,
                        withTrailer: E = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: S,
                        hideControls: k,
                    } = e,
                    I = (0, c.D)({ playContextParams: l, entityId: a.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, d.g)(),
                    N = (0, o.X)(a.trackSource, { isMobile: L }),
                    D = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.q, {
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
                return (0, r.jsx)(y.C, {
                    className: (0, i.$)(g, { [v().trackWithDots]: h, [v().important]: h }),
                    track: a,
                    beforeBlock: h ? (0, r.jsx)(m.O, { className: (0, i.$)(v().dots, A), isDragging: f }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: N, beforeTitle: T, track: a, ignoreDislikedStyles: C, withSecondaryColor: x }),
                    playButtonCellRender: D,
                    controls: (0, r.jsx)(p.Q, {
                        track: a,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = l.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: x,
                        handleRemove: P,
                        withDislike: b,
                        withTrailer: E,
                        removeButtonAriaLabel: S,
                        hideControls: k,
                    }),
                    ...I,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        11940: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => s });
            var r = a(88800),
                i = a(35412);
            let l = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                n = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                s = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let s = (0, i.ky)(e).toString(),
                        o = [...s.matchAll(l)];
                    return s.split(n).reduce((e, i, l) => {
                        e.push(i);
                        let { 1: n, 2: s } = o[l] || [];
                        return (n && s && e.push((0, r.jsx)(t, { href: s, ...a, children: n })), e);
                    }, []);
                };
        },
        12364: (e) => {
            e.exports = { root: 'PageHeaderPlaylistBrandingLink_root__7dQVL' };
        },
        12844: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
        14533: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        16161: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => d });
            var r,
                i = a(68211),
                l = a(53548),
                n = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => i }));
                        let i = r;
                    },
                    2850: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
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
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var l in ((r = {}), t)) 'key' !== l && (r[l] = t[l]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
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
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, r) =>
                                    ((e, a, r) => (r === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, r),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let r = null != a ? a : e.currentTarget,
                                    i = document.createElement('span'),
                                    l = Math.max(r.clientWidth, r.clientHeight),
                                    n = l / 2,
                                    s = r.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                ((i.style.width = ''.concat(l, 'px')),
                                    (i.style.height = ''.concat(l, 'px')),
                                    (i.style.left = 0 === e.clientX ? '0px' : ''.concat(o - n, 'px')),
                                    (i.style.top = ''.concat(c - n, 'px')),
                                    i.classList.add(t));
                                let d = r.getElementsByClassName(t)[0];
                                (d && d.remove(), r.insertBefore(i, r.firstChild));
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
                        let r = a(2660),
                            i = a(6384);
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
                            let a = (0, i.findColorBucketByName)(e);
                            return a ? l(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, r.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, i.findColorBucketByHue)(t.h) : (0, i.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? l(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var r = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return r.createRipple;
                            },
                        });
                        var i = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return i.getElementFromRefOrElement;
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
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let i = a(4377),
                            l = a(810),
                            n = a(5881),
                            s = a(6882),
                            o = r(a(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: r = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: m,
                                        icon: p,
                                        spinner: _,
                                        role: y,
                                        onClick: g,
                                        radius: v = 'm',
                                        size: h,
                                        type: f = 'button',
                                        variant: A = 'default',
                                        withRipple: C = !0,
                                        withHover: x = !0,
                                        withBorder: P = !1,
                                        disabled: b,
                                        focusableWhenDisabled: E,
                                        'aria-disabled': T,
                                        iconClassName: S,
                                        contentContainerClassName: k,
                                        ...I
                                    } = e,
                                    L = (0, l.useId)(),
                                    N = !l.Children.toArray(c).filter(Boolean).length,
                                    D = 'left' === r,
                                    j = null,
                                    R = (0, l.isValidElement)(_);
                                if (p) {
                                    var B, F;
                                    j = (0, l.cloneElement)(p, {
                                        className: (0, n.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(r)]]: r && !N,
                                                [o.default.icon_withButtonSize]: !(null == (B = p.props) ? void 0 : B.size),
                                            },
                                            null == (F = p.props) ? void 0 : F.className,
                                            S,
                                        ),
                                        key: L,
                                    });
                                }
                                let w = (0, l.useMemo)(() => (R ? (0, i.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [R, _]),
                                    O = (0, l.useCallback)(
                                        (e) => {
                                            if (b) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            R || (C && (0, s.createRipple)(e, o.default.ripple), null == g || g(e));
                                        },
                                        [b, R, g, C],
                                    );
                                return (0, i.jsx)('button', {
                                    ref: t,
                                    className: (0, n.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(A)],
                                        o.default['root_radius_'.concat(v)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(A)]]: x && !b && !R,
                                            [o.default['root_size_'.concat(h)]]: h,
                                            [o.default.root_withoutBorder]: !P,
                                            [o.default.root_withActiveSpinner]: R,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: m,
                                            [o.default.iconOnly]: N,
                                            [o.default.root_icon_left]: p && !N && D,
                                            [o.default.root_icon_right]: p && !N && !D,
                                        },
                                        d,
                                    ),
                                    type: f,
                                    role: y,
                                    onClick: O,
                                    ...I,
                                    disabled: b && !E,
                                    'aria-disabled': (b && E) || T,
                                    'data-disabled': b || void 0,
                                    'aria-live': R ? 'polite' : 'off',
                                    'aria-busy': R,
                                    children:
                                        p || R
                                            ? (0, i.jsxs)('span', {
                                                  className: (0, n.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, k),
                                                  children: [p && D && j, !N && c, p && !D && j, w],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7493: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        var r = a(7291);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return r.Button;
                            },
                        });
                    },
                    9037: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0));
                        let i = a(4377),
                            l = a(5881),
                            n = a(810),
                            s = a(7493),
                            o = r(a(1561)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, i.jsx)('div', { className: (0, l.clsx)(o.default.icon, { [o.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: a = !1, onChange: r, 'aria-label': d, 'aria-describedby': u, ...m } = e,
                                [p, _] = (0, n.useState)(a),
                                y = (0, n.useCallback)(() => {
                                    let e = !p;
                                    (_(e), null == r || r(e));
                                }, [p, r]);
                            return (
                                (0, n.useEffect)(() => {
                                    _(a);
                                }, [a]),
                                (0, i.jsx)(s.Button, {
                                    className: (0, l.clsx)(o.default.root, { [o.default.root_checked]: p }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, i.jsx)(c, { isChecked: p }),
                                    withRipple: !1,
                                    onClick: y,
                                    role: 'switch',
                                    'aria-checked': p,
                                    'aria-label': d,
                                    'aria-describedby': u,
                                    ...m,
                                    color: p ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    2660: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(l, 2));
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
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.Z = void 0));
                var e = o(9037);
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
        16472: (e) => {
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
        16948: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                header_brandedAxe: 'PlaylistPageHeader_header_brandedAxe__RDLB2',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        20924: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => n });
            var r = a(8655),
                i = a(69704),
                l = a(5295);
            let n = (e) => {
                let { theme: t } = (0, i.W)(),
                    a = t === r.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, l.e)(e, 0.8, a) };
            };
        },
        23577: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => i, gj: () => r }), a(13687));
            let r = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: r } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let r = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (r.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (r.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (r.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (r.x = a.left + a.width - t.right),
                                  r
                              );
                          })(r, a, t)
                        : r;
                },
                i = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        23598: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        24586: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => l });
            var r = a(88800),
                i = a(35412);
            let l = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, r.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, i.Gr)(a) } });
            };
        },
        24609: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l, m: () => i });
            var r = a(53548);
            let i = (0, r.createContext)(null);
            function l() {
                return (0, r.useContext)(i);
            }
        },
        25300: (e) => {
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
        26208: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            var r = (function (e) {
                return (
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
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        27054: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => u });
            var r = a(53548),
                i = a(87999),
                l = a(47149),
                n = a(84423),
                s = a(89846),
                o = a(64543),
                c = a(63582),
                d = a(29993);
            let u = (0, c.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: a = !0 } = t,
                    c = null == (e = (0, n.s)()) ? void 0 : e.evgenInstance,
                    { hash: u } = (0, s.g)(),
                    { screen: m } = (0, o.j)(),
                    p = null == m ? void 0 : m.pageId,
                    _ = (0, d.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !c ||
                            !p ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = {
                            hash: u,
                            pageId: i.AppScreen.Link,
                            entityType: i.EntityTypes.Deeplink,
                            entityId: i.EntityTypes.Deeplink,
                            from: i.AppScreen.Link,
                            to: p,
                            deepLink: null != e ? e : window.location.href,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, l.ID)(c, t);
                    });
                return (
                    (0, r.useEffect)(() => {
                        a && _();
                    }, [a, _]),
                    (0, d.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        a || _({ deepLink: e });
                    })
                );
            });
        },
        27169: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { Q: () => r }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(r || (r = {})));
        },
        27794: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => f });
            var r,
                i,
                l = a(88092),
                n = a(68436);
            function s(e, t) {
                var a = t && t.cache ? t.cache : m,
                    r = t && t.serializer ? t.serializer : d;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var a,
                                  r,
                                  i = 1 === e.length ? o : c;
                              return ((a = t.cache.create()), (r = t.serializer), i.bind(this, e, a, r));
                          }
                )(e, { cache: a, serializer: r });
            }
            function o(e, t, a, r) {
                var i = null == r || 'number' == typeof r || 'boolean' == typeof r ? r : a(r),
                    l = t.get(i);
                return (void 0 === l && ((l = e.call(this, r)), t.set(i, l)), l);
            }
            function c(e, t, a) {
                var r = Array.prototype.slice.call(arguments, 3),
                    i = a(r),
                    l = t.get(i);
                return (void 0 === l && ((l = e.apply(this, r)), t.set(i, l)), l);
            }
            var d = function () {
                return JSON.stringify(arguments);
            };
            function u() {
                this.cache = Object.create(null);
            }
            ((u.prototype.get = function (e) {
                return this.cache[e];
            }),
                (u.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var m = {
                    create: function () {
                        return new u();
                    },
                },
                p = {
                    variadic: function (e, t) {
                        var a, r;
                        return ((a = t.cache.create()), (r = t.serializer), c.bind(this, e, a, r));
                    },
                    monadic: function (e, t) {
                        var a, r;
                        return ((a = t.cache.create()), (r = t.serializer), o.bind(this, e, a, r));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(r || (r = {}));
            var _ = (function (e) {
                    function t(t, a, r) {
                        var i = e.call(this, t) || this;
                        return ((i.code = a), (i.originalMessage = r), i);
                    }
                    return (
                        (0, l.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                y = (function (e) {
                    function t(t, a, i, l) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(a, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                r.INVALID_VALUE,
                                l,
                            ) || this
                        );
                    }
                    return ((0, l.__extends)(t, e), t);
                })(_),
                g = (function (e) {
                    function t(t, a, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(a), r.INVALID_VALUE, i) || this;
                    }
                    return ((0, l.__extends)(t, e), t);
                })(_),
                v = (function (e) {
                    function t(t, a) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(a, '"'), r.MISSING_VALUE, a) || this
                        );
                    }
                    return ((0, l.__extends)(t, e), t);
                })(_);
            function h(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, a) {
                                e[t] = a;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(i || (i = {}));
            var f = (function () {
                function e(t, a, o, c) {
                    var d,
                        u,
                        m = this;
                    if (
                        (void 0 === a && (a = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var a = t.reduce(function (e, t) {
                                return (e.length && t.type === i.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return a.length <= 1 ? a[0] || '' : a;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, a, l, s, o, c, d) {
                                if (1 === t.length && (0, n.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var u = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, n.isLiteralElement)(p)) {
                                        u.push({ type: i.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, n.isPoundElement)(p)) {
                                        'number' == typeof c && u.push({ type: i.literal, value: l.getNumberFormat(a).format(c) });
                                        continue;
                                    }
                                    var h = p.value;
                                    if (!(o && h in o)) throw new v(h, d);
                                    var f = o[h];
                                    if ((0, n.isArgumentElement)(p)) {
                                        ((f && 'string' != typeof f && 'number' != typeof f) || (f = 'string' == typeof f || 'number' == typeof f ? String(f) : ''),
                                            u.push({ type: 'string' == typeof f ? i.literal : i.object, value: f }));
                                        continue;
                                    }
                                    if ((0, n.isDateElement)(p)) {
                                        var A = 'string' == typeof p.style ? s.date[p.style] : (0, n.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        u.push({ type: i.literal, value: l.getDateTimeFormat(a, A).format(f) });
                                        continue;
                                    }
                                    if ((0, n.isTimeElement)(p)) {
                                        var A = 'string' == typeof p.style ? s.time[p.style] : (0, n.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : s.time.medium;
                                        u.push({ type: i.literal, value: l.getDateTimeFormat(a, A).format(f) });
                                        continue;
                                    }
                                    if ((0, n.isNumberElement)(p)) {
                                        var A = 'string' == typeof p.style ? s.number[p.style] : (0, n.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (A && A.scale && (f *= A.scale || 1), u.push({ type: i.literal, value: l.getNumberFormat(a, A).format(f) }));
                                        continue;
                                    }
                                    if ((0, n.isTagElement)(p)) {
                                        var C = p.children,
                                            x = p.value,
                                            P = o[x];
                                        if ('function' != typeof P) throw new g(x, 'function', d);
                                        var b = P(
                                            e(C, a, l, s, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(b) || (b = [b]),
                                            u.push.apply(
                                                u,
                                                b.map(function (e) {
                                                    return { type: 'string' == typeof e ? i.literal : i.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, n.isSelectElement)(p)) {
                                        var E = p.options[f] || p.options.other;
                                        if (!E) throw new y(p.value, f, Object.keys(p.options), d);
                                        u.push.apply(u, e(E.value, a, l, s, o));
                                        continue;
                                    }
                                    if ((0, n.isPluralElement)(p)) {
                                        var E = p.options['='.concat(f)];
                                        if (!E) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    r.MISSING_INTL_API,
                                                    d,
                                                );
                                            var T = l.getPluralRules(a, { type: p.pluralType }).select(f - (p.offset || 0));
                                            E = p.options[T] || p.options.other;
                                        }
                                        if (!E) throw new y(p.value, f, Object.keys(p.options), d);
                                        u.push.apply(u, e(E.value, a, l, s, o, f - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return u.length < 2
                                    ? u
                                    : u.reduce(function (e, t) {
                                          var a = e[e.length - 1];
                                          return (a && a.type === i.literal && t.type === i.literal ? (a.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = a),
                        (this.resolvedLocale = e.resolveLocale(a)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var f = c || {},
                            A = (f.formatters, (0, l.__rest)(f, ['formatters']));
                        this.ast = e.__parse(t, (0, l.__assign)((0, l.__assign)({}, A), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((d = e.formats),
                        o
                            ? Object.keys(d).reduce(
                                  function (e, t) {
                                      var a, r;
                                      return (
                                          (e[t] =
                                              ((a = d[t]),
                                              (r = o[t])
                                                  ? (0, l.__assign)(
                                                        (0, l.__assign)((0, l.__assign)({}, a || {}), r || {}),
                                                        Object.keys(a).reduce(function (e, t) {
                                                            return ((e[t] = (0, l.__assign)((0, l.__assign)({}, a[t]), r[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : a)),
                                          e
                                      );
                                  },
                                  (0, l.__assign)({}, d),
                              )
                            : d)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (u = this.formatterCache) && (u = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: h(u.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: h(u.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: h(u.pluralRules), strategy: p.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = n.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        29343: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        31059: (e) => {
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
        32353: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r, u: () => i });
            var r = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                i = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => j });
            var r = a(88800),
                i = a(65724),
                l = a(84961),
                n = a(53548),
                s = a(2058),
                o = a(88969);
            a(30282);
            var c = a(96817),
                d = a(52300),
                u = a(29504),
                m = a(87999),
                p = a(47149),
                _ = a(84423),
                y = a(89846),
                g = a(64543),
                v = a(63582);
            let h = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, y.g)(),
                        { screen: r } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !a || !(null == r ? void 0 : r.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: a,
                                pageId: r.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, a, null == r ? void 0 : r.pageId]),
                    };
                }),
                f = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, y.g)(),
                        { screen: i } = (0, g.j)();
                    (0, n.useEffect)(() => {
                        if (!a || !r || !(null == i ? void 0 : i.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: r,
                            pageId: i.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(a, t);
                    }, [a, e, r, null == i ? void 0 : i.pageId]);
                });
            var A = a(44230),
                C = a(4370),
                x = a(72288),
                P = a(97956),
                b = a(56248),
                E = a(90688),
                T = a(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = a(96856),
                I = a.n(k);
            let L = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: l } = e,
                    { slam: n } = (0, x.g)(),
                    { contentRef: s } = (0, A.g)(),
                    d = (0, T.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(I().root, t),
                    children: [
                        a &&
                            (0, r.jsx)(b.L, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(I().navigation, { [I().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: l,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(I().content, { [I().content_shrink]: !a }),
                            children: [
                                (0, r.jsx)(E._V, { className: I().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: I().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var N = a(9184),
                D = a.n(N);
            let j = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: l } = e,
                    { formatMessage: m } = (0, s.A)(),
                    p = (0, n.useContext)(x.P),
                    _ = null == p ? void 0 : p.experiments.checkExperiment(P.z.WebNextUnstableMusicScreen, 'on'),
                    y = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(y);
                let { sendRefreshEvent: g } = h(),
                    v = (0, n.useCallback)(() => {
                        (g(), (window.location.href = C.Z.main.href));
                    }, [g]),
                    { contentRef: E } = (0, A.g)();
                return _
                    ? (0, r.jsx)(L, { className: t, withBackwardControl: a, onBack: l })
                    : (0, r.jsxs)('div', {
                          className: (0, i.$)(D().root, t),
                          children: [
                              a &&
                                  (0, r.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(D().navigation, { [D().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: l,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, i.$)(D().content, { [D().content_shrink]: !a }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: D().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, i.$)(D().title, D().important), variant: 'h3', size: 'xs', children: y }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, i.$)(D().text, D().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: v,
                                          className: D().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        32932: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            var r = (function (e) {
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
        34407: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = 100;
        },
        37821: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => n });
            var r = a(8655),
                i = a(69704),
                l = a(5295);
            let n = (e) => {
                let { theme: t } = (0, i.W)(),
                    a = t === r.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, l.e)(e, 0.8, a) };
            };
        },
        37862: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var r = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        38147: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        39942: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        40512: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => i });
            var r = a(7123);
            let i = (e) => ({ type: r.z4.Unloaded, meta: { id: e.entityId } });
        },
        43856: (e) => {
            e.exports = { button: 'PageHeaderPlaylistUgcUploadButton_button__mWtCr', form: 'PageHeaderPlaylistUgcUploadButton_form__V64Yu' };
        },
        45700: (e, t) => {
            'use strict';
            var a, r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(a || (t.TYPE = a = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(r || (t.SKELETON_TYPE = r = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === a.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === a.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === a.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === a.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === a.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === a.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === a.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === a.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === a.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: a.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: a.number, value: e, style: t };
                }));
        },
        46900: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        46911: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        49176: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var r = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        49518: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => m });
            var r = a(53548),
                i = a(29993);
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
                    for (var e, t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                    let [i, ...s] = a;
                    if (null === l)
                        return void n.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == l ? void 0 : l.cspNonce) ? t : void 0, ...i }, ...s);
                        });
                    l.code.create({ cspNonce: null != (e = l.cspNonce) ? e : void 0, ...i }, ...s);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.reload(...t);
                        });
                    l.code.reload(...t);
                },
                d = function () {
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
                m = () => {
                    let [e, t] = (0, r.useState)(null !== l),
                        a = (0, i.c)((a) => {
                            var r, i, s;
                            let { cspNonce: o } = a;
                            void 0 === (null == (r = window) ? void 0 : r.Ya.Context) ||
                                void 0 === (null == (i = window) ? void 0 : i.Ya.adfoxCode) ||
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
                    return { isLoaded: e, init: a, render: s, create: o, reload: c, destroy: d, initialize: u };
                };
        },
        50327: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var r = a(35412),
                i = a(8655),
                l = a(69704);
            let n = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r: a, g: l, b: n } = (0, r.E2)(e),
                        s = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(l, ', ').concat(n, ', ').concat(s, ')');
                }
            };
        },
        53158: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var r = a(88800),
                i = a(84961),
                l = a(53548),
                n = a(29993),
                s = a(631),
                o = a(38147),
                c = a(72288),
                d = a(69704),
                u = a(78101),
                m = a(8655);
            let p = (e, t) => (t === m.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                _ = (e) => e.toString(16).padStart(2, '0');
            var y = a(82712),
                g = a(92847);
            let v = (e) =>
                    (0, y.m)(e) &&
                    (e.type === g.k.PLAYLIST_GRADIENT || e.type === g.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                h = (0, i.PA)((e) => {
                    let { children: t, containerId: a, expectedType: i } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: m, brandedEntityAxeBanner: y },
                            },
                        } = (0, c.g)(),
                        { theme: h } = (0, d.W)(),
                        f = (0, l.useContext)(u.G),
                        [A, C] = (0, l.useState)(null),
                        x = (0, n.c)((e) => {
                            (0, s.f)(e, a, v) && e.data.type === i && C(e.data);
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
                    let P = i === g.k.PLAYLIST_GRADIENT && m.isVisible && m.type !== o.h.EMPTY,
                        b = i === g.k.AXE_GRADIENT && y.isVisible && y.type !== o.h.EMPTY,
                        E = P || b,
                        T = (0, l.useMemo)(() => {
                            if ((null == A ? void 0 : A.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    y.isVisible && y.type !== o.h.EMPTY && h
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
                                              let r = parseInt(a.substring(0, 2), 16),
                                                  i = parseInt(a.substring(2, 4), 16),
                                                  l = parseInt(a.substring(4, 6), 16),
                                                  n = p(r, t),
                                                  s = p(i, t),
                                                  o = p(l, t);
                                              return '#'.concat(_(n)).concat(_(s)).concat(_(o));
                                          })(A.payload.color, h)
                                        : A.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === A.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': A.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': A.payload.button.textColor,
                                  };
                        }, [null == A ? void 0 : A.payload.color, null == A ? void 0 : A.payload.button, h, y.isVisible, y.type]),
                        S = (0, l.useMemo)(() => (E && null !== A ? { data: { type: A.type, style: T, button: A.payload.button }, isEnabled: E } : f), [A, T, E, f]);
                    return (0, r.jsx)(u.G.Provider, { value: S, children: t });
                });
        },
        55196: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        58105: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => d });
            var r,
                i = a(14022),
                l = a(53548),
                n = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let r = a(352),
                            i = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: l } = e,
                                n = (0, i.useRef)(null),
                                [s, o] = (0, i.useState)(!!a),
                                c = (0, i.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            (o(!a),
                                                n.current && window.clearTimeout(n.current),
                                                (n.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, t)));
                                        }, l),
                                    [t, a, l],
                                ),
                                d = (0, i.useCallback)(() => {
                                    (o(!!a), n.current && window.clearTimeout(n.current));
                                }, [a]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        n.current && window.clearTimeout(n.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: c, reset: d }
                            );
                        };
                    },
                    3940: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let r = a(810),
                            i = a(1848),
                            l = a(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: n } = e,
                                { state: s, handleDebouncedToggle: o } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, r.useCallback)(() => {
                                    (a && o(), null == t || t());
                                }, [a, o, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, i.getElementFromRefOrElement)(n);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', c, a), () => t.removeEventListener('scroll', c, a));
                                }, [n, c]),
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
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(l, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useElementOffsetY = void 0));
                let e = o(810),
                    t = o(3830),
                    a = o(3940);
                c.useElementOffsetY = (r) => {
                    let [i, l] = (0, a.useForceUpdateRef)(),
                        [n, s] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e = null == i ? void 0 : i.getBoundingClientRect();
                            e && s(e.y);
                        }, [i]);
                    return ((0, e.useLayoutEffect)(o), (0, t.useScroll)({ onScroll: o, elementRef: r }), { forceUpdateRefCallback: l, offsetY: n });
                };
            })(),
                c.__esModule);
            var d = c.useElementOffsetY;
        },
        61166: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, l: () => r });
            let r = 'yandex_rtb',
                i = 256152;
        },
        62115: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => r });
            let r = 1e3;
        },
        63449: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => l });
            var r = a(72288),
                i = a(97956);
            let l = () => {
                var e, t, a;
                let { user: l, experiments: n, settings: s } = (0, r.g)();
                return (
                    !n.checkExperiment(i.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = s.browserInfo) ? void 0 : e.isTouch) &&
                    l.isAuthorized &&
                    !l.hasPlus &&
                    (null == (a = n.getExperiment(i.z.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68436: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var r = a(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                r.__exportStar(a(45700), t),
                (t._Parser = void 0));
        },
        68567: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        69117: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => B });
            var r = a(88800),
                i = a(65724),
                l = a(84961),
                n = a(53548),
                s = a(79070),
                o = a(32353),
                c = a(44230),
                d = a(72288),
                u = a(94058),
                m = a(76099),
                p = a(86540),
                _ = a(63582),
                y = a(7695),
                g = a(59791),
                v = a(53534),
                h = a(89846),
                f = a(64543),
                A = a(56374);
            let C = (0, _.n)({ event: 'Tab.Loaded', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, n.useContext)(g.I),
                    { hash: t } = (0, h.g)(),
                    { screen: a, tab: r } = (0, f.j)(),
                    i = (0, n.useContext)(v.k)?.session;
                return (0, A.c)(({ tabId: l = r?.tabId ?? y.w, tabPos: n = r?.tabPos ?? y.Vn, isTabSelectedByDefault: s = r?.isTabSelectedByDefault ?? y.p6 } = {}) => {
                    e &&
                        a?.pageId &&
                        i &&
                        void 0 !== t &&
                        i.loadTab(l, () =>
                            (0, p.hc)(e, {
                                hash: t,
                                pageId: a.pageId,
                                skeletonId: a.skeletonId,
                                mainObjectId: a.mainObjectId,
                                mainObjectType: a.mainObjectType,
                                tabId: l,
                                tabPos: n,
                                isTabSelectedByDefault: s,
                            }),
                        );
                });
            });
            var x = a(37862),
                P = a(87366),
                b = a(29343),
                E = a.n(b);
            let T = (e) => {
                let { filter: t, tabsState: a, value: l, isSticky: s, ...o } = e,
                    c = C();
                return (
                    (0, n.useEffect)(() => {
                        c({ tabId: t.id, tabPos: l + 1, isTabSelectedByDefault: t.id === x.Q.ALL });
                    }, [t.id, l, c]),
                    (0, r.jsx)(P.o, { tabIndex: s ? -1 : 0, className: (0, i.$)(E().root, { [E().root_selected]: l === a.value }), title: t.name, value: l, ...o })
                );
            };
            var S = a(46911),
                k = a.n(S);
            let I = (0, l.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: l } = e;
                return (0, r.jsx)(m.wI, {
                    className: (0, i.$)(k().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, r.jsx)(m.zr, { className: (0, i.$)(k().root, l), shimmerClassName: k().shimmer, count: 3, isActive: a }),
                });
            });
            var L = a(89021),
                N = a.n(L);
            let D = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 40, end: 40 } },
                j = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 20, end: 50 } },
                R = (0, l.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: l,
                            forwardRef: o,
                            carouselClassName: p,
                            shimmerClassName: _,
                            isSticky: y,
                            items: g,
                            isShimmerVisible: v,
                            isShimmerActive: h,
                            skipSearchCheck: f = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: C },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: x, playlistStaticFiltersRef: P, contentScrollRef: b } = (0, c.g)(),
                        E = null != g ? g : A.filters.items,
                        S = (0, s.L)(() =>
                            (0, r.jsx)(m.wI, {
                                ref: o,
                                className: (0, i.$)(N().carousel, p),
                                ...t,
                                onTabChange: a,
                                children: null == E ? void 0 : E.map((e, a) => (0, r.jsx)(T, { filter: e, tabsState: t, value: a, isSticky: y }, e.id)),
                            }),
                        ),
                        k = (0, n.useCallback)(() => {
                            P && x && (P.scrollLeft = x.scrollLeft);
                        }, [P, x]),
                        L = (0, n.useCallback)(() => {
                            P && x && (x.classList.add(N().carousel_noSmooth), (x.scrollLeft = P.scrollLeft), x.classList.remove(N().carousel_noSmooth));
                        }, [P, x]),
                        [R, B] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        R && L();
                    }, [R, L]);
                    let F = (0, n.useCallback)(() => {
                        B((null == x ? void 0 : x.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [x]);
                    return (
                        (0, n.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                y
                                    ? (null == x || x.addEventListener('scroll', k, t), null == x || x.addEventListener('resize', k, t))
                                    : C
                                      ? (window.addEventListener('scroll', F, t), window.addEventListener('resize', F, t))
                                      : (null == b || b.addEventListener('scroll', F, t), null == b || b.addEventListener('resize', F, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [y, b, x, F, k, C]),
                        (null != v ? v : A.filters.isShimmerVisible)
                            ? (0, r.jsx)(I, { isActive: null == h || h, shimmerClassName: _ })
                            : E && 0 !== E.length && (f || A.search.isNeededToLoad)
                              ? (0, r.jsx)(u.F, { className: l, carouselElement: S, ref: o, scrollPadding: y ? j : D })
                              : void 0
                    );
                }),
                B = (0, n.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
        },
        74973: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var r = a(53548),
                i = a(78101);
            let l = () => (0, r.useContext)(i.G);
        },
        75470: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        77309: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => u });
            var r = a(53548),
                i = a(86540),
                l = a(63582),
                n = a(7695),
                s = a(59791),
                o = a(89846),
                c = a(64543),
                d = a(56374);
            let u = (0, l.n)({ event: 'Tab.Opened', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, r.useContext)(s.I),
                    { hash: t } = (0, o.g)(),
                    { screen: a, tab: l } = (0, c.j)();
                return (0, d.c)(({ tabId: r = l?.tabId ?? n.w, tabPos: s = l?.tabPos ?? n.Vn, isTabSelectedByDefault: o = l?.isTabSelectedByDefault ?? n.p6 } = {}) => {
                    e &&
                        a?.pageId &&
                        void 0 !== t &&
                        (0, i.TV)(e, {
                            hash: t,
                            pageId: a.pageId,
                            skeletonId: a.skeletonId,
                            mainObjectId: a.mainObjectId,
                            mainObjectType: a.mainObjectType,
                            tabId: r,
                            tabPos: s,
                            isTabSelectedByDefault: o,
                        });
                });
            });
        },
        77887: (e, t, a) => {
            'use strict';

            a.d(t, { S: () => rp });
            // for PulseSync WebHost: BEGIN imports for native addon playlist header and context menu items
            var pulseSyncHeaderReact = a(53548),
                pulseSyncHeaderJsx = a(88800),
                pulseSyncHeaderText = a(29504),
                pulseSyncHeaderIcon = a(52300);

            var pulseSyncMenuJsx = a(88800),
                pulseSyncMenuItems = a(19934),
                pulseSyncMenuIcons = a(52300);
            // for PulseSync WebHost: END imports for native addon playlist header and context menu items
            var r = a(88800),
                i = a(65724),
                l = a(84961),
                n = a(53548),
                s = a(2058),
                o = a(58390),
                c = a(87999),
                d = a(54721),
                u = a(89009),
                m = a(76903),
                p = a(17392),
                _ = a(58105),
                y = a(32596),
                g = a(80527),
                v = a(92847),
                h = a(74973),
                f = a(53158),
                A = a(3685),
                C = a(69630),
                x = a(98427),
                P = a(27054),
                b = a(50327),
                E = a(44230),
                T = a(37670),
                S = a(72288),
                k = a(93317),
                I = a(79418),
                L = a(30144),
                N = a(27169),
                D = a(60385),
                j = a(324),
                R = a(46511),
                B = a(57297),
                F = a(2218),
                w = a(77863),
                O = a(19049),
                M = a(45383);
            async function U(e, t) {
                var a, r, i, l, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, R.W)(t.locale),
                    o = null != (r = e.ogTitle) ? r : (0, O.Y)(e.title, 48, !1),
                    c = s({ id: 'metadata.playlist-title' }, { playlistTitle: e.title });
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: c,
                          description: c,
                          openGraph: (0, B.i)({
                              ogTitle: o,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: r } = e,
                                      i = '';
                                  return (
                                      a.ogDescription ? (i = a.ogDescription) : a.description && (i = a.description.replace(/\[(.*?)\]\(.*?\)/gi, '$1')),
                                      [
                                          (i = (0, O.Y)(i, 96, !1)),
                                          r({ id: 'metadata.playlist' }),
                                          (null != (t = a.likesCount) ? t : 0) > 0 && r({ id: 'metadata.likes-counter' }, { counter: a.likesCount }),
                                      ]
                                          .filter(Boolean)
                                          .join(' • ')
                                  );
                              })({ playlistMeta: e, messageFormatter: s }),
                              fullUrl: null != (i = t.fullUrl) ? i : '',
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: s({ id: 'metadata.yandex-music' }),
                              ogType: 'music.playlist',
                          }),
                          twitter: (0, F.H)({ cardType: w.W.APP, title: o, url: t.url, appName: s({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, j.X)({
                              additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                              appName: s({ id: 'metadata.yandex-music' }),
                          }),
                          alternates: (0, M.S)('/playlists/:playlistUuid', t.tld, { params: { playlistUuid: e.playlistUuid } }),
                      }
                    : { title: c, robots: { index: !1, follow: !1 } };
            }
            var H = a(63449),
                Y = a(5295),
                z = a(8655),
                W = a(69704),
                K = a(94144),
                V = a(67174),
                G = a(89068),
                q = a.n(G),
                X = a(47618),
                $ = a(91370),
                Z = a.n($);
            let Q = (0, l.PA)(
                (0, n.forwardRef)((e, t) => {
                    var a;
                    let { children: l, 'data-index': s, ...o } = e,
                        { playlist: c } = (0, S.g)(),
                        {
                            isDragging: d,
                            listeners: u,
                            setNodeRef: m,
                            transform: p,
                            transition: _,
                            attributes: y,
                        } = (0, X.gl)({ id: String(null == (a = c.items[s]) ? void 0 : a.key) }),
                        g = (0, n.useCallback)(
                            (e) => {
                                (m(e), 'function' == typeof t && t(e));
                            },
                            [t, m],
                        ),
                        v = { transition: _, '--translate-y': p ? ''.concat(Math.round(p.y), 'px') : void 0 };
                    return (0, r.jsx)('div', {
                        ref: g,
                        'data-index': s,
                        style: v,
                        ...o,
                        className: Z().root,
                        children: (0, r.jsx)('div', { className: (0, i.$)(Z().inner, { [Z().dragging]: d }), ...u, ...y, children: l }),
                    });
                }),
            );
            var J = a(45144),
                ee = a(23577),
                et = a(53405),
                ea = a(408);
            let er = (e, t) => {
                var a;
                let r = t - 1;
                if (!e.items.length || r < 0 || r > e.items.length) return '';
                let i = e.items[r];
                return (null == i || null == (a = i.data) ? void 0 : a.title) || '';
            };
            var ei = a(67318),
                el = a(62518),
                en = a(63476),
                es = a(29595),
                eo = a(74965),
                ec = a(66943),
                ed = a(37523),
                eu = a(7833),
                em = a(18593),
                ep = a(54915),
                e_ = a(64284),
                ey = a(84384),
                eg = a(98644),
                ev = a(93015),
                eh = a(46900),
                ef = a.n(eh),
                eA = a(12079),
                eC = a(76843),
                ex = a(29504),
                eP = a(97956),
                eb = a(55196),
                eE = a.n(eb);
            let eT = (0, l.PA)((e) => {
                    var t, a, i, l, s;
                    let { item: o } = e,
                        { playlist: c, experiments: d } = (0, S.g)(),
                        { shouldShowMajor: u, shouldShowGenre: m, shouldShowDuplicate: p } = c.editorFeature,
                        _ = d.checkExperiment(eP.z.WebEditorsFeatures, 'on'),
                        y = p && c.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!_ || !o || (!m && !u && !y)) return null;
                    let g = [],
                        v = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        h = null == (s = o.data) || null == (l = s.albums) || null == (i = l[0]) ? void 0 : i.genre;
                    if ((y && g.push('№'.concat(y)), u && v)) {
                        let e = c.editorFeature.getColorForMajor(v),
                            t = (0, r.jsx)('span', { className: eE().major, style: { '--major-color': e }, children: v });
                        g.push(t);
                    }
                    if ((m && h && g.push(h), !g.length)) return null;
                    let f = g.map((e, t, a) => (0, r.jsxs)(n.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, r.jsxs)(ex.HL, { className: eE().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', f, '] \xa0'] });
                }),
                eS = (0, l.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: i, isDragging: l, draggingClassName: n, from: o, utmLink: c, index: d, className: u } = e,
                        { playlist: m } = (0, S.g)(),
                        { formatMessage: p } = (0, s.A)(),
                        { removeTrackFromPlaylist: _, canRemoveTrackFromPlaylist: y } = (0, eA.s)();
                    return (0, r.jsx)(eC.K, {
                        beforeTitle: (0, r.jsx)(eT, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: i,
                        isDragging: l,
                        track: a,
                        handleRemove: y ? _ : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: { type: em.K.Playlist, meta: m.contextMeta, from: o, utmLink: c },
                            entitiesData: m.playbackEntitiesData,
                            queueParams: { index: d },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: p({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                });
            var ek = a(10829);
            let eI = (0, l.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: l, isDragging: n, draggingClassName: o, from: c, utmLink: d, index: u, className: m } = e,
                        { playlist: p } = (0, S.g)(),
                        { formatMessage: _ } = (0, s.A)(),
                        { removeTrackFromPlaylist: y, canRemoveTrackFromPlaylist: g } = (0, eA.s)();
                    return (0, r.jsx)(ek.K, {
                        beforeTitle: (0, r.jsx)(eT, { item: t }),
                        withDNDBlock: l,
                        isDragging: n,
                        track: a,
                        handleRemove: g ? y : void 0,
                        draggingClassName: o,
                        playContextParams: {
                            contextData: {
                                type: em.K.Playlist,
                                meta: p.contextMeta,
                                from: c,
                                utmLink: d,
                                filter: p.filters.activeFilter,
                                filterName: p.filters.activeFilterName,
                                enableVariousAutoFlow: p.enableVariousAutoFlow,
                            },
                            entitiesData: p.playbackEntitiesData,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: _({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, i.$)(m, { [ef().isDuplicate]: p.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                eL = (0, l.PA)((e) => {
                    var t, a, l, n;
                    let s,
                        { index: o, className: d, isDragging: u, draggingClassName: m } = e,
                        { playlist: p } = (0, S.g)(),
                        _ = (null == (t = p.meta) ? void 0 : t.uuid) || p.uuid,
                        { from: y, utmLink: g } = (0, ey.f)({ pageId: x.b.PLAYLIST, blockId: e_.U.PLAYLIST, pageEntityId: _, contextType: em.K.Playlist, contextId: _ }),
                        v = p.isDragAndDropEnabled,
                        h = null == (a = p.items) ? void 0 : a[o];
                    return (
                        (s =
                            h && h.data && p.meta
                                ? h.data.isTrackNonMusic || (null == (l = h.data.mainAlbum) ? void 0 : l.isNonMusic)
                                    ? (0, r.jsx)(eS, {
                                          item: h,
                                          withDNDBlock: v,
                                          isDragging: u,
                                          from: y,
                                          index: o,
                                          track: h.data,
                                          utmLink: g,
                                          draggingClassName: m,
                                          className: d,
                                      })
                                    : (0, r.jsx)(eI, {
                                          item: h,
                                          from: y,
                                          index: o,
                                          track: h.data,
                                          withDNDBlock: v,
                                          isDragging: u,
                                          draggingClassName: m,
                                          className: (0, i.$)(d, { [ef().isDuplicate]: p.editorFeature.shouldHighlightDublicatedTrack(h) }),
                                      })
                                : (0, r.jsx)(ev.D, { isActive: !0, className: ef().shimmerItem, variant: eg.X.PLAYLIST })),
                        (0, r.jsx)(ep.x.Provider, {
                            value: { playlist: p.meta, trackIndex: o },
                            children: (0, r.jsx)(ed.F, {
                                blockType: c.EntityTypes.Tracks,
                                blockId: c.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: p.items.length,
                                children: (0, r.jsx)(eu.B, {
                                    objectType: c.DomainObjectType.Track,
                                    objectId: String(null == h || null == (n = h.data) ? void 0 : n.id),
                                    objectPosX: 1,
                                    objectPosY: o + 1,
                                    children: s,
                                }),
                            }),
                        })
                    );
                });
            var eN = a(75470),
                eD = a.n(eN);
            let ej = (0, l.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: i, screenReaderInstructions: l } = ((e) => {
                        let { formatMessage: t } = (0, s.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: r } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: er(e, Number(r.id)), index: r.id });
                                },
                                onDragOver(a) {
                                    let { active: r, over: i } = a,
                                        l = er(e, Number(r.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: l, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: l });
                                },
                                onDragEnd(a) {
                                    let { active: r, over: i } = a,
                                        l = er(e, Number(r.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: l, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: l });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    o = ((e) => {
                        let { notify: t } = (0, eo.l)(),
                            { formatMessage: a } = (0, s.A)();
                        return (0, n.useCallback)(
                            async (i) => {
                                var l, n, s, o;
                                let { from: c, to: d } = i;
                                if (c < 0 || d < 0 || c >= e.items.length || d >= e.items.length) return;
                                let u = String(null == (l = e.items[c]) ? void 0 : l.id);
                                if (!u) return;
                                let m = (null == (n = e.items[c]) ? void 0 : n.albumId) ? Number(null == (s = e.items[c]) ? void 0 : s.albumId) : void 0;
                                e.moveTrack(c, d);
                                let p = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist((0, el.M)({ operation: en.y.MOVE, startPosition: c, endPosition: d, tracks: [{ id: u, albumId: m }] })));
                                (p && p === ei.Y.OK) ||
                                    (p === ei.Y.RELOAD ? e.refresh() : e.moveTrack(d, c),
                                    t((0, r.jsx)(ec.h, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: es.u.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: c, handleDragStart: d, handleDragCancel: u, sensors: m } = (0, ea.Y)(),
                    p = (0, n.useCallback)(
                        (e) => {
                            let { active: t, over: r } = e;
                            if (!t.id || !(null == r ? void 0 : r.id)) return;
                            let i = a.itemsKeys.indexOf(String(t.id)),
                                l = a.itemsKeys.indexOf(String(r.id));
                            Number.isInteger(i) && Number.isInteger(l) && o({ from: i, to: l });
                        },
                        [o, a.itemsKeys],
                    ),
                    _ = (0, n.useMemo)(() => a.itemsKeys.indexOf(String(c)), [c, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, r.jsxs)(J.Mp, {
                          sensors: m,
                          collisionDetection: J.fp,
                          onDragStart: d,
                          onDragEnd: p,
                          onDragCancel: u,
                          modifiers: [ee.FN, ee.gj],
                          accessibility: { announcements: i, screenReaderInstructions: l },
                          children: [
                              (0, r.jsx)('div', { className: eD().root, children: (0, r.jsx)(X.gB, { items: a.itemsKeys, strategy: X._G, children: t }) }),
                              (0, et.createPortal)(
                                  (0, r.jsx)(J.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: c
                                          ? (0, r.jsx)('div', {
                                                className: eD().draggableItemWrapper,
                                                children: (0, r.jsx)(eL, { index: _, className: eD().noHoverItem, isDragging: !0, draggingClassName: eD().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var eR = a(79070),
                eB = a(8523),
                eF = a(50493),
                ew = a(80715),
                eO = a(86535),
                eM = a(86790),
                eU = a(60266),
                eH = a(12844),
                eY = a.n(eH);
            let ez = (0, l.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, s.A)(),
                    l = (0, eR.L)(() => {
                        let e = [],
                            l = 3;
                        if (t.hasSimilarEntities) {
                            var n, s;
                            (e.push(
                                (0, r.jsx)(
                                    ed.F,
                                    {
                                        blockType: c.EntityTypes.SimilarEntities,
                                        blockId: c.EntityTypes.SimilarEntities,
                                        blockPosX: 1,
                                        blockPosY: l,
                                        objectsCount: null != (s = null == (n = t.similarEntities.data) ? void 0 : n.items.length) ? s : 0,
                                        children: (0, r.jsx)(eF.Q, {
                                            ...t.similarEntities,
                                            meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                            headingVariant: 'h2',
                                            className: eY().carouselContainer,
                                            headerClassName: (0, i.$)(eY().carouselBlock, eY().carouselBlockHeader),
                                            containerClassName: eY().carouselBlock,
                                            shouldSendAnalyticsOnLoaded: !0,
                                            isLoaded: t.similarEntities.isLoaded,
                                            setHasSentAnalyticsOnLoaded: t.similarEntities.setHasSentAnalyticsOnLoaded,
                                        }),
                                    },
                                    c.EntityTypes.SimilarEntities,
                                ),
                            ),
                                l++);
                        }
                        return (
                            t.hasSimilarPlaylists &&
                                (e.push(
                                    (0, r.jsx)(
                                        ed.F,
                                        {
                                            blockId: c.EntityTypes.SimilarPlaylists,
                                            blockType: c.EntityTypes.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: l,
                                            blockIdForFrom: eO.h.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            children: (0, r.jsx)(ew.E, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: eY().carouselContainer,
                                                headerClassName: (0, i.$)(eY().carouselBlockHeader, eY().carouselBlock),
                                                containerClassName: eY().carouselBlock,
                                                title: a({ id: 'entity-names.similar-playlists' }),
                                                playlists: t.similarPlaylists,
                                                shouldSendAnalyticsOnLoaded: !0,
                                            }),
                                        },
                                        c.EntityTypes.SimilarPlaylists,
                                    ),
                                ),
                                l++),
                            t.isArtistRecommendationsPromoAllowed &&
                                t.artistRecommendationsPromo &&
                                e.push(
                                    (0, r.jsx)(
                                        ed.F,
                                        {
                                            blockId: t.artistRecommendationsPromo.id,
                                            blockType: t.artistRecommendationsPromo.type,
                                            blockPosX: 1,
                                            blockPosY: l,
                                            objectsCount: t.artistRecommendationsPromo.objectsCount,
                                            children: (0, r.jsx)(eB.x, {
                                                block: t.artistRecommendationsPromo,
                                                title: a({ id: 'page.artist-recommendations-promo-title' }),
                                                impId: t.artistRecommendationsPromoImpId,
                                                getArtistRecommendationsPromo: t.getArtistRecommendationsPromo,
                                                headingVariant: 'h2',
                                                className: eY().carouselContainer,
                                                headerClassName: (0, i.$)(eY().carouselBlock, eY().carouselBlockHeader),
                                                containerClassName: eY().carouselBlock,
                                            }),
                                        },
                                        t.artistRecommendationsPromo.id,
                                    ),
                                ),
                            e
                        );
                    });
                return (0, r.jsxs)('div', {
                    className: eY().root,
                    children: [(0, r.jsx)('div', { children: l }), (0, r.jsx)(eU.A, { children: (0, r.jsx)(eM.w, { className: eY().footer }) })],
                });
            });
            var eW = a(88894),
                eK = a(32739),
                eV = a(88969),
                eG = a(49784),
                eq = a(29993),
                eX = a(52300),
                e$ = a(34407),
                eZ = a(85902),
                eQ = a(24460),
                eJ = a(5407),
                e0 = a(57934),
                e1 = a(9618),
                e2 = a(4795),
                e4 = a(20924),
                e8 = a(39079),
                e3 = a(27506),
                e5 = a(34303),
                e9 = a(49738),
                e6 = a(56862),
                e7 = a(16704),
                te = a(56446),
                tt = a(19038),
                ta = a(99409),
                tr = a(61097),
                ti = a(14533),
                tl = a.n(ti),
                tn = a(96817),
                ts = a(19934),
                to = a(99305),
                tc = a(58977),
                td = a(4086),
                tu = a(41928),
                tm = a(24609),
                tp = a(79262),
                t_ = a(1606),
                ty = a.n(t_);
            let tg = (0, l.PA)((e) => {
                let { trackIds: t, className: a, onRemove: l } = e,
                    { slam: o } = (0, S.g)(),
                    c = (0, tm.A)(),
                    { formatMessage: d } = (0, s.A)(),
                    u = (0, tu.N)(),
                    [m, _] = (0, n.useState)(!1),
                    y = u.get(td.vg),
                    g = o.isPlaylistDownloaded(t),
                    v = o.isPlaylistDownloading(t),
                    h = o.getPlaylistDownloadingProgress(t),
                    f = (0, eq.c)(() => {
                        if (v) {
                            null == c || c.stopDownload(t);
                            return;
                        }
                        if (g) return void _(!0);
                        (null == c || c.download(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DOWNLOAD, tc.l));
                    }),
                    A = (0, eq.c)(() => {
                        (null == c || c.delete(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DELETE, tc.l), null == l || l());
                    }),
                    C = (0, n.useMemo)(
                        () =>
                            g
                                ? (0, r.jsx)(eX.I, { variant: 'check', size: 'xxs', className: ty().downloadedIcon })
                                : v
                                  ? (0, r.jsx)(tp.A, {
                                        value: null != h ? h : 0,
                                        size: 26,
                                        withCancelIcon: !0,
                                        className: ty().downloadingProgress,
                                        progressBarClassName: ty().progress,
                                        cancelIconClassName: ty().cancelIcon,
                                    })
                                  : (0, r.jsx)(eX.I, { variant: 'download', size: 'xxs' }),
                        [g, v, h],
                    ),
                    x = (0, n.useMemo)(() => (v ? d({ id: 'offline.stop-downloading' }) : d({ id: 'offline.download' })), [d, v]);
                return g
                    ? (0, r.jsx)(ts.W1, {
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: C,
                          offsetOptions: 10,
                          open: m,
                          onOpenChange: _,
                          wrapperClassName: a,
                          ariaLabel: d({ id: 'offline.delete-from-device' }),
                          'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_DOWNLOADED_BUTTON,
                          children: (0, r.jsx)(ts.Dr, {
                              icon: (0, r.jsx)(eX.I, { variant: 'upload', size: 'xxs' }),
                              onClick: A,
                              children: (0, r.jsx)(eV.A, { id: 'offline.delete-from-device' }),
                          }),
                      })
                    : (0, r.jsx)(tn.$, {
                          className: (0, i.$)(ty().root, { [ty().root_downloading]: v }, a),
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: C,
                          'aria-label': x,
                          onClick: f,
                          'data-test-id': v ? p.e8.pageHeader.PLAYLIST_HEADER_STOP_DOWNLOAD_BUTTON : p.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_BUTTON,
                          children:
                              v &&
                              (0, r.jsx)(ex.HL, {
                                  variant: 'div',
                                  className: ty().progressText,
                                  'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_PROGRESS_TEXT,
                                  children: (0, r.jsx)(eV.A, { id: 'offline.downloading-progress', values: { value: h } }),
                              }),
                      });
            });
            var tv = a(10561),
                th = a.n(tv),
                tf = a(65453),
                tA = a(47149),
                tC = a(84423),
                tx = a(89846),
                tP = a(63582);
            let tb = (0, tP.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, (e) => {
                var t;
                let a = null == (t = (0, tC.s)()) ? void 0 : t.evgenInstance,
                    { hash: r } = (0, tx.g)();
                return (0, n.useCallback)(() => {
                    if (!a || void 0 === r || !e.link) return;
                    let t = {
                        hash: r,
                        pageId: c.AppScreen.PlaylistScreen,
                        mainObjectType: c.DomainObjectType.Playlist,
                        mainObjectId: e.objectId,
                        entityId: 'playlist_branded_action_button',
                        pageStyle: c.PageStyles.Fullscreen,
                        pagePlacement: c.PagePlacements.Fullscreen,
                        from: c.AppScreen.PlaylistScreen,
                        to: c.AppScreen.Link,
                        deepLink: e.link,
                        tabId: '',
                        tabPos: 0,
                    };
                    Object.values(t).some((e) => void 0 === e) || (0, tA.Mu)(a, t);
                }, [a, r, e]);
            });
            var tE = a(12364),
                tT = a.n(tE);
            let tS = (0, l.PA)((e) => {
                var t, a, i;
                let { playlistUuid: l } = e,
                    n = (0, h.Q)(),
                    s = tb({ objectId: l, link: null == (a = n.data) || null == (t = a.button) ? void 0 : t.href });
                return n.isEnabled && (null == (i = n.data) ? void 0 : i.button)
                    ? (0, r.jsx)(tf.N, {
                          className: tT().root,
                          href: n.data.button.href,
                          target: '_blank',
                          onClick: s,
                          children: (0, r.jsx)(ex.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: n.data.button.text }),
                      })
                    : null;
            });
            var tk = a(35412),
                tI = a(7555),
                tL = a(37821),
                tN = a(81877);
            let tD = ['image/png', 'image/jpeg', 'image/jpg'];
            var tj = a(91908),
                tR = a.n(tj);
            let tB = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    {
                        settings: { isMobile: l },
                        playlist: { isRewind2024Playlist: o },
                        modals: { imageSliderModal: c },
                    } = (0, S.g)(),
                    d = a.coverUri,
                    u = a.canUserChange && !l,
                    { notify: m } = (0, eo.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    y = (0, n.useRef)(null),
                    [g, v] = (0, n.useState)(d || ''),
                    [h, f] = (0, n.useState)(u),
                    [A, C] = (0, n.useState)(new FormData()),
                    x = (0, tk.lU)(d || '', 600, !1),
                    P = (0, tk.lU)(d || '', 300, !1),
                    [b, E] = (0, n.useState)(x),
                    [T, k] = (0, n.useState)(!1),
                    I = !!d,
                    L = (0, n.useMemo)(() => {
                        if (o && a.personalColor) return (0, tL.m)(a.personalColor);
                    }, [o, a.personalColor]);
                (0, n.useEffect)(() => {
                    h !== u && f(u);
                }, [u, h]);
                let N = (0, n.useCallback)(
                        () => m((0, r.jsx)(ec.h, { error: _({ id: 'playlist-errors.failed-to-change-poster' }) }), { containerId: es.u.ERROR }),
                        [m, _],
                    ),
                    D = (0, eq.c)(() => {
                        d && !T && c.openImages({ images: [d] });
                    }),
                    j = (0, eq.c)((e) => {
                        var t;
                        (null == e || e.stopPropagation(), null == y || null == (t = y.current) || t.click());
                    }),
                    R = (0, eq.c)((e) => {
                        (e.stopPropagation(), 'Enter' === e.key && j());
                    }),
                    B = (0, eq.c)((e) => {
                        e.stopPropagation();
                    }),
                    F = (0, eq.c)((e) => {
                        let t,
                            a = e.target,
                            r = (a.files || [])[0] || null;
                        if (((a.value = ''), !r || ((t = r.type), !tD.includes(t)) || !((e) => e > 0 && e <= 2e7)(r.size))) return void N();
                        (g && E(g), f(!1), v(URL.createObjectURL(r)));
                        let i = new FormData();
                        (i.append('image', r), C(i));
                    }),
                    w = (0, n.useCallback)(
                        async (e) => {
                            let t = e.target,
                                r = () => {
                                    (v(b), N(), f(!0));
                                };
                            if ((d && (t.currentSrc === x || t.currentSrc === P)) || !u || b === t.currentSrc) return;
                            if (
                                !((e) => {
                                    if (!e) return;
                                    let t = 2 * e.naturalHeight || e.height,
                                        a = 2 * e.naturalWidth || e.width;
                                    return t < 5e3 && a < 5e3;
                                })(t)
                            )
                                return void r();
                            k(!0);
                            let i = await a.changePlaylistCover(A);
                            (k(!1), i === e3.F.ERROR ? r() : f(!0));
                        },
                        [N, b, a, A, d, u, x, P],
                    ),
                    O = (0, n.useMemo)(() => (g ? _({ id: 'playlist-actions.change-poster' }) : _({ id: 'playlist-actions.add-poster' })), [g, _]);
                return (0, r.jsxs)(tI.t, {
                    radius: 'm',
                    className: (0, i.$)(tR().root, t, { [tR().root_hoverable]: I }),
                    children: [
                        (0, r.jsx)('div', {
                            className: tR().backCoverColor,
                            style: L,
                            children: (0, r.jsx)(tn.$, {
                                onClick: D,
                                'aria-label': _({ id: 'slider.view-cover' }),
                                tabIndex: I ? 0 : -1,
                                disabled: !I,
                                className: tR().coverButton,
                                children: (0, r.jsx)(tN.B, { fit: 'cover', src: g, size: 300, className: tR().coverImage, withAvatarReplace: !0, onLoad: w }),
                            }),
                        }),
                        h &&
                            (0, r.jsx)('div', {
                                className: (0, i.$)(tR().buttonContainer, { [tR().buttonContainer_withCursorPointer]: g }),
                                onClick: I ? D : void 0,
                                children: (0, r.jsxs)('div', {
                                    className: (0, i.$)(tR().fileUploadContainer, { [tR().fileUploadContainer_hovered]: g }),
                                    children: [
                                        (0, r.jsx)(tn.$, {
                                            className: tR().button,
                                            radius: 'xxxl',
                                            size: 'xxs',
                                            color: 'secondary',
                                            withRipple: !1,
                                            onClick: j,
                                            onKeyUp: R,
                                            'aria-label': _({ id: 'playlist-actions.add-poster' }),
                                            'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_ADD_COVER_BUTTON,
                                            children: O,
                                        }),
                                        (0, r.jsx)('form', {
                                            className: tR().formFile,
                                            encType: 'multipart/form-data',
                                            children: (0, r.jsx)('input', {
                                                ref: y,
                                                type: 'file',
                                                name: 'file',
                                                accept: 'image/jpeg, image/png, image/jpg',
                                                onChange: F,
                                                onClick: B,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                });
            });
            var tF = a(78275),
                tw = a(62115),
                tO = a(11940),
                tM = a(91292),
                tU = a(59378),
                tH = a(25300),
                tY = a.n(tH),
                tz = a(79993),
                tW = a(32947);
            let tK = (0, l.PA)((e) => {
                    // for PulseSync WebHost: BEGIN refresh header metadata when native addon slots change
                    let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                    (0, pulseSyncHeaderReact.useEffect)(() => {
                        const onNativeSlotChange = (e) => {
                            if (e.detail === 'headerInfoItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                        };
                        document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                        return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    }, []);

                    // for PulseSync WebHost: END refresh header metadata when native addon slots change
                    let { playlist: t, className: a } = e,
                        { formatMessage: i } = (0, s.A)(),
                        l = (0, n.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.playlistReceiver))
                                    switch (e) {
                                        case tW.r.TODAY:
                                            return i({ id: 'interface-actions.playlist-made-today' }, t);
                                        case tW.r.YESTERDAY:
                                            return i({ id: 'interface-actions.playlist-made-yesterday' }, t);
                                        case tW.r.DATE_WITH_YEAR:
                                            return i({ id: 'interface-actions.playlist-made-date-with-year' }, t);
                                        default:
                                            return i({ id: 'interface-actions.playlist-made-date' }, t);
                                    }
                                switch (e) {
                                    case tW.r.TODAY:
                                        return i({ id: 'interface-actions.playlist-made-for-today' }, t);
                                    case tW.r.YESTERDAY:
                                        return i({ id: 'interface-actions.playlist-made-for-yesterday' }, t);
                                    case tW.r.DATE_WITH_YEAR:
                                        return i({ id: 'interface-actions.playlist-made-for-date-with-year' }, t);
                                    default:
                                        return i({ id: 'interface-actions.playlist-made-for-date' }, t);
                                }
                            },
                            [i],
                        ),
                        o = (0, n.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.ownerName))
                                    switch (e) {
                                        case tW.r.TODAY:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-today' }, t);
                                        case tW.r.YESTERDAY:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-yesterday' }, t);
                                        case tW.r.DATE_WITH_YEAR:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-date-with-year' }, t);
                                        default:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-date' }, t);
                                    }
                                switch (e) {
                                    case tW.r.TODAY:
                                        return i({ id: 'interface-actions.updated-playlist-today' }, t);
                                    case tW.r.YESTERDAY:
                                        return i({ id: 'interface-actions.updated-playlist-yesterday' }, t);
                                    case tW.r.DATE_WITH_YEAR:
                                        return i({ id: 'interface-actions.updated-playlist-date-with-year' }, t);
                                    default:
                                        return i({ id: 'interface-actions.updated-playlist-date' }, t);
                                }
                            },
                            [i],
                        ),
                        c = (0, n.useMemo)(() => {
                            var e, a, r, i, n;
                            let s = new Date(t.modified),
                                c = (0, tW.L)(s);
                            return t.madeForUser
                                ? l(c, {
                                      playlistReceiver: (null == t || null == (i = t.madeForUser) || null == (r = i.caseForms) ? void 0 : r.genitive) || '',
                                      updateDate: s,
                                  })
                                : t.isFavouritePlaylist
                                  ? (null == (n = t.owner) ? void 0 : n.name) || ''
                                  : o(c, {
                                        updateDate: new Date(t.modified),
                                        ownerName: (null == (e = t.owner) ? void 0 : e.name) || '',
                                        gender: (null == (a = t.owner) ? void 0 : a.sex) === tz.U.FEMALE ? 'female' : 'male',
                                    });
                        }, [t, l, o]);
                    // for PulseSync WebHost: BEGIN render native addon items in playlist header metadata
                    const pulseSyncInjectHeaderPlaylistItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('headerInfoItems', items, {
                            eventDetail: null,
                            renderItem: ({ key, payload, position, positionIndex }) => {
                                const text = String(payload?.text ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim(),
                                    label = String(payload?.label ?? text).trim();
                                if (!text && !icon) return null;
                                return (0, pulseSyncHeaderJsx.jsxs)(
                                    pulseSyncHeaderText.HL,
                                    {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        ...(label
                                            ? {
                                                  'aria-label': label,
                                              }
                                            : {}),
                                        'data-pulsesync-addon-header-item': 'meta',
                                        children: [
                                            (position > 0 || positionIndex > 0) && '\u00a0•\u00a0',
                                            icon &&
                                                (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                    variant: icon,
                                                    size: 'xxxs',
                                                }),
                                            text,
                                        ],
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END render native addon items in playlist header metadata
                    return (0, r.jsx)(ex.HL, {
                        variant: 'span',
                        className: a,
                        type: 'text',
                        size: 'm',
                        weight: 'medium',
                        lineClamp: 1,
                        'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT,
                        // for PulseSync WebHost: BEGIN inject native addon items into playlist header metadata
                        children: pulseSyncInjectHeaderPlaylistItems([c]),
                        // for PulseSync WebHost: END inject native addon items into playlist header metadata
                    });
                }),
                tV = (0, l.PA)((e) => {
                    let { playlist: t } = e,
                        { formatMessage: a } = (0, s.A)(),
                        {
                            settings: { isMobile: l },
                        } = (0, S.g)(),
                        { notify: o } = (0, eo.l)(),
                        c = t.canUserChange && !l,
                        d = !!t.description,
                        { state: u, toggleTrue: m, toggleFalse: _ } = (0, tF.e)(!1),
                        [y, g] = (0, n.useState)(t.description || ''),
                        v = (0, n.useCallback)(async () => {
                            (_(),
                                (await t.changeDescription(y)) === e3.F.ERROR &&
                                    o((0, r.jsx)(ec.h, { error: a({ id: 'playlist-errors.failed-to-change-description' }) }), { containerId: es.u.ERROR }));
                        }, [a, y, o, t, _]),
                        h = (0, n.useCallback)((e) => {
                            g(e);
                        }, []),
                        f = (0, n.useMemo)(() => (0, tO.r)(t.description, tM.N, { className: tY().descriptionLink }), [t.description]),
                        A = (0, n.useMemo)(
                            () =>
                                t.tagsString
                                    ? (0, r.jsx)(ex.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, r.jsx)(eV.A, { id: 'entity-names.tags', values: { tags: t.tagsString } }),
                                      })
                                    : null,
                            [t.tagsString],
                        );
                    return (0, r.jsxs)('div', {
                        className: tY().root,
                        children: [
                            d &&
                                !u &&
                                (0, r.jsxs)(ex.HL, {
                                    variant: 'span',
                                    className: tY().description,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    children: [
                                        f,
                                        c &&
                                            (0, r.jsx)(tn.$, {
                                                variant: 'text',
                                                withRipple: !1,
                                                onClick: m,
                                                className: (0, i.$)(tY().descriptionActionLink, tY().addDescription),
                                                'aria-label': a({ id: 'playlist-actions.change-description' }),
                                                color: 'primary',
                                                'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                                                children: (0, r.jsx)(ex.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    type: 'text',
                                                    className: tY().button,
                                                    children: (0, r.jsx)(eV.A, { id: 'playlist-actions.change-description-abbr' }),
                                                }),
                                            }),
                                    ],
                                }),
                            !d &&
                                c &&
                                !u &&
                                (0, r.jsx)(tn.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    onClick: m,
                                    className: tY().descriptionActionLink,
                                    'aria-label': a({ id: 'playlist-actions.add-description' }),
                                    color: 'primary',
                                    'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                                    children: (0, r.jsxs)(ex.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: tY().button,
                                        children: [(0, r.jsx)(eV.A, { id: 'playlist-actions.add-description' }), '...'],
                                    }),
                                }),
                            c &&
                                u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(tU.A, {
                                            text: t.description,
                                            className: tY().textField,
                                            placeholder: ''.concat(a({ id: 'playlist-actions.add-description' }), '...'),
                                            maxTextLength: tw.i,
                                            onChangeFinish: h,
                                            variant: 'textarea',
                                            withOutline: !0,
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: tY().actionButtons,
                                            children: [
                                                (0, r.jsx)(tn.$, {
                                                    className: tY().saveButton,
                                                    color: 'secondary',
                                                    radius: 'xxxl',
                                                    size: 's',
                                                    'aria-label': a({ id: 'interface-actions.save' }),
                                                    onClick: v,
                                                    withHover: !0,
                                                    children: (0, r.jsx)(eV.A, { id: 'interface-actions.save' }),
                                                }),
                                                (0, r.jsx)(tn.$, {
                                                    variant: 'text',
                                                    withRipple: !1,
                                                    onClick: _,
                                                    className: tY().cancelButton,
                                                    'aria-label': a({ id: 'interface-actions.cancel' }),
                                                    color: 'primary',
                                                    children: (0, r.jsx)(ex.HL, {
                                                        variant: 'span',
                                                        size: 'm',
                                                        type: 'text',
                                                        className: tY().button,
                                                        children: (0, r.jsx)(eV.A, { id: 'interface-actions.cancel' }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(tK, { className: tY().updatedText, playlist: t }),
                            A,
                        ],
                    });
                });
            var tG = a(43856),
                tq = a.n(tG);
            // for PulseSync: BEGIN imports and native modal styles for playlist link import
            var pulseSyncImportObserver = a(84961);
            var pulseSyncImportReact = a(53548);
            var pulseSyncImportStore = a(72288);
            var pulseSyncImportNotifications = a(74965);
            var pulseSyncImportIntl = a(2058);
            var pulseSyncImportCallback = a(29993);
            var pulseSyncImportJsx = a(88800);
            var pulseSyncImportError = a(66943);
            var pulseSyncImportContainers = a(29595);
            var pulseSyncImportButton = a(96817);
            var pulseSyncImportTestIds = a(17392);
            var pulseSyncImportText = a(29504);
            var pulseSyncImportIcon = a(52300);
            var pulseSyncImportMessage = a(88969);
            const pulseSyncImportModalStyles = {
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
            // for PulseSync: END imports and native modal styles for playlist link import
            // for PulseSync: BEGIN playlist link import component with upload state, subscriptions and native dialog
            let tX = (0, pulseSyncImportObserver.PA)((e) => {
                let { playlist: t } = e,
                    // for PulseSync: BEGIN playlist link validation and import state
                    a = (0, pulseSyncImportReact.useRef)(null),
                    {
                        ugcUploadCenter: i,
                        playlist: pulseSyncImportPlaylist,
                        fullscreenPlayer: o,
                        settings: { isMobile: c },
                    } = (0, pulseSyncImportStore.g)(),
                    { notify: u } = (0, pulseSyncImportNotifications.l)(),
                    { formatMessage: l } = (0, pulseSyncImportIntl.A)(),
                    [m, p] = (0, pulseSyncImportReact.useState)(!1),
                    [_, y] = (0, pulseSyncImportReact.useState)(''),
                    [g, v] = (0, pulseSyncImportReact.useState)({
                        status: 'idle',
                        trackCount: 0,
                        message: '',
                    }),
                    [f, h] = (0, pulseSyncImportReact.useState)(!1),
                    A = (0, pulseSyncImportReact.useRef)(0),
                    C = (0, pulseSyncImportReact.useRef)(null),
                    P = _.trim(),
                    E =
                        !!P &&
                        !((e) => {
                            try {
                                let t = new URL(e);
                                return 'http:' === t.protocol || 'https:' === t.protocol;
                            } catch (e) {
                                return !1;
                            }
                        })(P),
                    b =
                        !E &&
                        !!P &&
                        ((e) => {
                            try {
                                let t = new URL(e),
                                    a = t.hostname.toLowerCase();
                                return 'youtu.be' === a || 'youtube.com' === a || 'music.youtube.com' === a || a.endsWith('.youtube.com');
                            } catch (e) {
                                return !1;
                            }
                        })(P),
                    L = !E && 'ready' === g.status && g.url === P,
                    S = (0, pulseSyncImportReact.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.click();
                    }, [a]),
                    // for PulseSync: END playlist link validation and import state
                    // for PulseSync: BEGIN open and reset the playlist link import dialog
                    k = (0, pulseSyncImportCallback.c)(() => {
                        p(!0);
                    }),
                    I = (0, pulseSyncImportReact.useCallback)(() => {
                        ((A.current += 1),
                            C.current && clearTimeout(C.current),
                            (C.current = null),
                            p(!1),
                            y(''),
                            v({
                                status: 'idle',
                                trackCount: 0,
                                message: '',
                            }));
                    }, []),
                    // for PulseSync: END open and reset the playlist link import dialog
                    // for PulseSync: BEGIN upload selected files and start playlist link import with error reporting
                    D = (0, pulseSyncImportReact.useCallback)(
                        (e) => {
                            let a = e.target.files;
                            (a && a.length > 0 && (i.appendFiles([...a], t), I()), (e.target.value = ''));
                        },
                        [t, i, I],
                    ),
                    N = (0, pulseSyncImportReact.useCallback)((e) => {
                        y(e.target.value);
                    }, []),
                    // for PulseSync: BEGIN observe main-process uploads and refresh the target playlist
                    j = (0, pulseSyncImportCallback.c)(async () => {
                        let e = P;
                        if (!e || E || !L || f) return;
                        let importID = `playlist-link-import|${Date.now()}|${Math.random().toString(36).slice(2)}`,
                            playlistKind = t.kind,
                            playlistUid = String(t.uid),
                            unsubscribeProgress;
                        const refreshImportedPlaylist = () => {
                            if (pulseSyncImportPlaylist.meta?.kind === playlistKind && String(pulseSyncImportPlaylist.meta?.uid) === playlistUid)
                                pulseSyncImportPlaylist.refreshTracks();
                        };
                        h(!0);
                        try {
                            if (!window.playlistLinkImporter?.onProgress) throw new Error('Импорт по ссылке недоступен');
                            unsubscribeProgress = window.playlistLinkImporter.onProgress((e) => {
                                if (!e || e.importID !== importID) return;
                                if (e.status === 'ready') {
                                    if (pulseSyncImportPlaylist.meta?.kind === playlistKind && String(pulseSyncImportPlaylist.meta?.uid) === playlistUid)
                                        pulseSyncImportPlaylist.refreshImportedTrack(e.trackId, e.uploadTrackId);
                                } else if (['processing', 'unconfirmed'].includes(e.status)) refreshImportedPlaylist();
                            });
                            let importResult = await window.playlistLinkImporter.importTrack(e, importID, playlistKind, playlistUid),
                                s = Math.max(0, Number(null == importResult ? void 0 : importResult.importedCount) || 0),
                                pulseSyncMigration_o_1 = Math.max(0, Number(null == importResult ? void 0 : importResult.failedCount) || 0),
                                unconfirmedCount = Math.max(0, Number(importResult?.unconfirmedCount) || 0);
                            refreshImportedPlaylist();
                            if (pulseSyncMigration_o_1 > 0 || unconfirmedCount > 0) {
                                let e = Array.isArray(null == importResult ? void 0 : importResult.errors) ? importResult.errors.filter(Boolean) : [],
                                    t = e
                                        .slice(0, 3)
                                        .map((e, t) => `${t + 1}. ${e}`)
                                        .join('\n'),
                                    a = pulseSyncMigration_o_1 > e.length ? `${t ? `${t}\n` : ''}Еще пропущено: ${pulseSyncMigration_o_1 - e.length}` : t,
                                    i = [
                                        pulseSyncMigration_o_1 > 0 ? `Не удалось импортировать ${pulseSyncMigration_o_1} трек(ов)${a ? `\n${a}` : ''}` : '',
                                        unconfirmedCount > 0
                                            ? `Не удалось подтвердить загрузку ${unconfirmedCount} трек(ов). Проверьте плейлист: повторная отправка не выполнялась, чтобы не создавать дубликаты.`
                                            : '',
                                    ].filter(Boolean).join('\n');
                                u(
                                    (0, pulseSyncImportJsx.jsx)(pulseSyncImportError.h, {
                                        error: i,
                                    }),
                                    {
                                        containerId: o.modal.isOpened ? pulseSyncImportContainers.u.FULLSCREEN_ERROR : pulseSyncImportContainers.u.ERROR,
                                    },
                                );
                            }
                            (s > 0 || unconfirmedCount > 0) && I();
                        } catch (e) {
                            let t = e instanceof Error ? e.message : 'Не удалось импортировать треки по ссылке';
                            u(
                                (0, pulseSyncImportJsx.jsx)(pulseSyncImportError.h, {
                                    error: t,
                                }),
                                {
                                    containerId: o.modal.isOpened ? pulseSyncImportContainers.u.FULLSCREEN_ERROR : pulseSyncImportContainers.u.ERROR,
                                },
                            );
                        } finally {
                            unsubscribeProgress?.();
                            h(!1);
                        }
                    });
                    // for PulseSync: END observe main-process uploads and refresh the target playlist
                    // for PulseSync: END upload selected files and start playlist link import with error reporting
                // for PulseSync: BEGIN prefetch playlist link metadata
                (0, pulseSyncImportReact.useEffect)(() => {
                    const previewRevision = ++A.current;
                    if ((C.current && (clearTimeout(C.current), (C.current = null)), !m)) return;
                    if (!P) {
                        v({
                            status: 'idle',
                            trackCount: 0,
                            message: '',
                        });
                        return;
                    }
                    if (E) {
                        v({
                            status: 'invalid',
                            trackCount: 0,
                            message: 'Введите корректную http(s) ссылку',
                        });
                        return;
                    }
                    if (!(null == window ? void 0 : window.playlistLinkImporter) || !window.playlistLinkImporter.prefetchTrack) {
                        v({
                            status: 'error',
                            trackCount: 0,
                            message: 'Проверка ссылки недоступна',
                        });
                        return;
                    }
                    let e = previewRevision;
                    (v({
                        status: 'loading',
                        trackCount: 0,
                        message: 'Проверка ссылки...',
                    }),
                        (C.current = setTimeout(async () => {
                            try {
                                let t = await window.playlistLinkImporter.prefetchTrack(P);
                                if (A.current !== e) return;
                                if (null == t ? void 0 : t.isAvailable) {
                                    let e = Math.max(1, Number(t.trackCount) || 1),
                                        a = 'string' == typeof (null == t ? void 0 : t.artist) ? t.artist.trim() : '',
                                        r = 'string' == typeof (null == t ? void 0 : t.title) ? t.title.trim() : '',
                                        s = a && r ? `Будет загружен трек ${a} - ${r}` : '',
                                        o = t?.isPlaylist ? (s ? `${e} треков | ${s}` : `Будет загружено треков: ${e}`) : s || 'Будет загружен 1 трек';
                                    v({
                                        status: 'ready',
                                        url: P,
                                        trackCount: e,
                                        message: o,
                                    });
                                } else
                                    v({
                                        status: 'error',
                                        trackCount: 0,
                                        message: t?.message || 'Загрузка по этой ссылке недоступна',
                                    });
                            } catch (t) {
                                if (A.current !== e) return;
                                let a = t instanceof Error ? t.message : 'Не удалось проверить ссылку';
                                v({
                                    status: 'error',
                                    trackCount: 0,
                                    message: a,
                                });
                            } finally {
                                A.current === e && (C.current = null);
                            }
                        }, 400)));
                    return () => {
                        ((A.current += 1), C.current && clearTimeout(C.current), (C.current = null));
                    };
                }, [m, P, E]);
                // for PulseSync: END prefetch playlist link metadata
                return (0, pulseSyncImportJsx.jsxs)(pulseSyncImportJsx.Fragment, {
                    children: [
                        // for PulseSync: BEGIN render the playlist link import dialog trigger
                        (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                            size: 's',
                            radius: 'xxxl',
                            'aria-label': l({
                                id: 'ugc.upload-track',
                            }),
                            className: tq().button,
                            // for PulseSync: BEGIN open the import dialog from the playlist upload button
                            onClick: k,
                            'data-test-id': pulseSyncImportTestIds.e8.pageHeader.PLAYLIST_HEADER_UPLOAD_UGC_BUTTON,
                            children: l({
                                id: 'ugc.upload-track',
                            }),
                            // for PulseSync: END open the import dialog from the playlist upload button
                        }),
                        // for PulseSync: END render the playlist link import dialog trigger
                        // for PulseSync: BEGIN file-upload form inside the playlist link import dialog
                        (0, pulseSyncImportJsx.jsx)('form', {
                            className: tq().form,
                            encType: 'multipart/form-data',
                            children: (0, pulseSyncImportJsx.jsx)('input', {
                                ref: a,
                                type: 'file',
                                accept: 'audio/*',
                                onChange: D,
                                multiple: !0,
                            }),
                        }),
                        // for PulseSync: END file-upload form inside the playlist link import dialog
                        // for PulseSync: BEGIN native playlist link import dialog, fields and status display
                        m
                            ? (0, pulseSyncImportJsx.jsx)('div', {
                                  role: 'presentation',
                                  style: {
                                      position: 'fixed',
                                      inset: 0,
                                      zIndex: 1e3,
                                      display: 'flex',
                                      alignItems: c ? 'flex-end' : 'center',
                                      justifyContent: 'center',
                                      padding: c ? 0 : 'var(--ym-spacer-size-l)',
                                      background: 'rgba(0, 0, 0, 0.72)',
                                  },
                                  children: (0, pulseSyncImportJsx.jsxs)('div', {
                                      role: 'dialog',
                                      'aria-modal': !0,
                                      'data-test-id': pulseSyncImportTestIds.e8.ugc.UGC_EDIT_MODAL,
                                      className: pulseSyncImportModalStyles.root,
                                      style: {
                                          position: 'relative',
                                          inset: 'auto',
                                          width: '100%',
                                          maxWidth: c ? '100%' : '26.875rem',
                                          maxHeight: c ? '100%' : 'calc(100% - var(--ym-spacer-size-l) * 2)',
                                          overflowY: 'auto',
                                          borderRadius: c ? 'var(--ym-radius-size-l) var(--ym-radius-size-l) 0 0' : 'var(--ym-radius-size-l)',
                                          boxShadow: '0 1rem 4rem rgba(0, 0, 0, 0.45)',
                                      },
                                      children: [
                                          (0, pulseSyncImportJsx.jsxs)('div', {
                                              className: pulseSyncImportModalStyles.header,
                                              children: [
                                                  (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.DZ, {
                                                      variant: 'h4',
                                                      size: 'm',
                                                      weight: 'bold',
                                                      className: pulseSyncImportModalStyles.title,
                                                      children: 'Импорт треков',
                                                  }),
                                                  (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                      radius: 'round',
                                                      color: 'secondary',
                                                      size: 'xxs',
                                                      icon: (0, pulseSyncImportJsx.jsx)(pulseSyncImportIcon.I, {
                                                          variant: 'close',
                                                          size: 'xxs',
                                                      }),
                                                      onClick: I,
                                                      disabled: f,
                                                      'aria-label': l({
                                                          id: 'ugc.close-edit-popup',
                                                      }),
                                                      'data-test-id': pulseSyncImportTestIds.e8.ugc.UGC_EDIT_MODAL_CLOSE_BUTTON,
                                                  }),
                                              ],
                                          }),
                                          (0, pulseSyncImportJsx.jsxs)('div', {
                                              className: pulseSyncImportModalStyles.content,
                                              children: [
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.field,
                                                      style: {
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          justifyContent: 'space-between',
                                                          gap: 'var(--ym-spacer-size-m)',
                                                          flexWrap: 'wrap',
                                                      },
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                              variant: 'div',
                                                              size: 'm',
                                                              className: pulseSyncImportModalStyles.label,
                                                              style: {
                                                                  marginBlockEnd: 0,
                                                              },
                                                              children: 'Локальные треки',
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                              radius: 'xxxl',
                                                              color: 'secondary',
                                                              size: c ? 'l' : 'm',
                                                              className: pulseSyncImportModalStyles.button,
                                                              onClick: S,
                                                              disabled: f,
                                                              children: 'Выбрать файлы',
                                                          }),
                                                      ],
                                                  }),
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.field,
                                                      style: {
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          gap: 'var(--ym-spacer-size-s)',
                                                      },
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)('div', {
                                                              style: {
                                                                  flex: 1,
                                                                  height: '1px',
                                                                  background: 'var(--ym-controls-color-secondary-default-enabled)',
                                                              },
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                              variant: 'div',
                                                              size: 's',
                                                              style: {
                                                                  color: 'var(--ym-controls-color-secondary-text-enabled)',
                                                                  whiteSpace: 'nowrap',
                                                              },
                                                              children: 'или',
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)('div', {
                                                              style: {
                                                                  flex: 1,
                                                                  height: '1px',
                                                                  background: 'var(--ym-controls-color-secondary-default-enabled)',
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.field,
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                              variant: 'div',
                                                              size: 'm',
                                                              className: pulseSyncImportModalStyles.label,
                                                              children: 'Ссылка',
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)('input', {
                                                              value: _,
                                                              type: 'url',
                                                              inputMode: 'url',
                                                              autoCapitalize: 'none',
                                                              autoCorrect: 'off',
                                                              spellCheck: !1,
                                                              disabled: f,
                                                              'aria-invalid': E || 'error' === g.status || 'invalid' === g.status,
                                                              className:
                                                                  E || 'error' === g.status || 'invalid' === g.status
                                                                      ? ''.concat(pulseSyncImportModalStyles.input, ' ').concat(pulseSyncImportModalStyles.input_error)
                                                                      : pulseSyncImportModalStyles.input,
                                                              style: {
                                                                  boxSizing: 'border-box',
                                                                  width: '100%',
                                                                  minHeight: '2.75rem',
                                                                  padding: '0 var(--ym-spacer-size-m)',
                                                                  border: 0,
                                                                  outline: 0,
                                                                  color: 'var(--ym-controls-color-primary-text-enabled)',
                                                                  font: 'inherit',
                                                              },
                                                              placeholder: 'https://...',
                                                              onChange: N,
                                                              minLength: 1,
                                                              maxLength: 2048,
                                                          }),
                                                          P &&
                                                              (E || 'idle' !== g.status) &&
                                                              (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                                  variant: 'div',
                                                                  size: 's',
                                                                  style: {
                                                                      color:
                                                                          E || 'error' === g.status || 'invalid' === g.status
                                                                              ? 'var(--ym-message-color-error-text-enabled)'
                                                                              : 'var(--ym-controls-color-primary-text-enabled)',
                                                                      marginBlockStart: 'var(--ym-spacer-size-xs)',
                                                                  },
                                                                  children: E ? 'Введите корректную http(s) ссылку' : g.message,
                                                              }),
                                                      ],
                                                  }),
                                                  // for PulseSync: BEGIN YouTube import hint and playlist link import dialog actions
                                                  b &&
                                                      (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                          variant: 'div',
                                                          size: 's',
                                                          style: {
                                                              color: 'var(--ym-controls-color-secondary-text-enabled)',
                                                              marginBlockStart: 'calc(var(--ym-spacer-size-s) * -1)',
                                                              marginBlockEnd: 'var(--ym-spacer-size-m)',
                                                          },
                                                          children: 'Не забудьте добавить в proxy/VPN процесс yt-dlp.exe',
                                                      }),
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.buttons,
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                              radius: 'xxxl',
                                                              color: 'secondary',
                                                              size: c ? 'l' : 'm',
                                                              className: pulseSyncImportModalStyles.button,
                                                              onClick: I,
                                                              disabled: f,
                                                              children: (0, pulseSyncImportJsx.jsx)(pulseSyncImportMessage.A, {
                                                                  id: 'interface-actions.cancel',
                                                              }),
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                              radius: 'xxxl',
                                                              color: 'primary',
                                                              size: c ? 'l' : 'm',
                                                              className: pulseSyncImportModalStyles.button,
                                                              onClick: j,
                                                              disabled: !L || f,
                                                              children: f ? 'Импортируем...' : 'Импортировать по ссылке',
                                                          }),
                                                      ],
                                                  }),
                                                  // for PulseSync: END YouTube import hint and playlist link import dialog actions
                                              ],
                                          }),
                                      ],
                                  }),
                              })
                            : null,
                        // for PulseSync: END native playlist link import dialog, fields and status display
                    ],
                });
            });
            // for PulseSync: END playlist link import component with upload state, subscriptions and native dialog
            var t$ = a(40700),
                tZ = a(98158),
                tQ = a(48749),
                tJ = a(22505),
                t0 = a(31059),
                t1 = a.n(t0),
                t2 = a(98148),
                t4 = a(23237),
                t8 = a(56949),
                t3 = a(19994),
                t5 = a(59304),
                t9 = a(81261),
                t6 = a.n(t9);
            let t7 = () =>
                (0, r.jsx)(t5.$, {
                    message: (0, r.jsx)(ex.HL, {
                        className: t6().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, r.jsx)(eV.A, { id: 'playlist-errors.failed-add-tracks-to-playlist' }),
                    }),
                });
            var ae = a(3895),
                at = a.n(ae);
            let aa = (0, l.PA)((e) => {
                    let { playlistTitle: t = '', playlistUrl: a, closeToast: i } = e,
                        { fullscreenPlayer: l } = (0, S.g)(),
                        s = (0, eq.c)(() => {
                            l.modal.isOpened && l.modal.close();
                        }),
                        o = (0, n.useMemo)(
                            () =>
                                (0, r.jsx)(ex.HL, {
                                    className: at().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(eV.A, {
                                        id: 'notifications-info.added-tracks-to-playlist',
                                        values: {
                                            playlistName: (0, r.jsx)(tM.N, {
                                                className: at().link,
                                                href: a,
                                                onClick: s,
                                                children: (0, r.jsxs)(ex.HL, {
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
                            [s, t, a],
                        );
                    return (0, r.jsx)(t5.$, { closeToast: i, message: o });
                }),
                ar = () =>
                    (0, r.jsx)(t5.$, {
                        message: (0, r.jsx)(ex.HL, {
                            className: at().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, r.jsx)(eV.A, { id: 'notifications-info.already-added-tracks' }),
                        }),
                    }),
                ai = (0, l.PA)((e) => {
                    let { playlistItem: t } = e,
                        {
                            contextMenuAddTracksToPlaylist: { fetchPlaylistTrackIds: a, isTracksLoading: i },
                            fullscreenPlayer: l,
                            playlist: { itemsForCopy: n },
                        } = (0, S.g)(),
                        { notify: s } = (0, eo.l)(),
                        o = (0, eq.c)(async () => {
                            if (0 === n.length || i) return;
                            let e = { containerId: l.modal.isOpened ? es.u.FULLSCREEN_INFO : es.u.INFO },
                                o = await a(t.kind);
                            if (null === o) return void s((0, r.jsx)(t7, {}), e);
                            let c = new Set(o),
                                d = n.filter((e) => !c.has(e.id));
                            return d.length
                                ? (await t.changePlaylist((0, el.M)({ operation: en.y.INSERT, position: 0, tracks: d }))) === ei.Y.OK
                                    ? void s((0, r.jsx)(aa, { playlistTitle: t.title, playlistUrl: t.url }), e)
                                    : void s((0, r.jsx)(t7, {}), e)
                                : void s((0, r.jsx)(ar, {}), e);
                        });
                    return (0, r.jsx)(ts.Dr, {
                        isBlock: !0,
                        onClick: o,
                        icon: (0, r.jsx)(eX.I, { variant: 'add', size: 'xxs', className: t1().playlistItemIcon }),
                        className: t1().playlistItem,
                        'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_ITEM,
                        children: (0, r.jsx)(ex.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                    });
                }),
                al = (0, l.PA)((e) => {
                    let { searchQuery: t, sourcePlaylistUuid: a } = e,
                        {
                            contextMenuAddTracksToPlaylist: { isPlaylistsLoading: i, getFilteredPlaylists: l },
                        } = (0, S.g)(),
                        s = (0, n.useRef)(null),
                        o = l(t, a),
                        c = (0, t8.Te)({
                            count: o.length,
                            getScrollElement: () => s.current,
                            estimateSize: () => 36,
                            getItemKey: (e) => {
                                var t, a;
                                return null != (a = null == (t = o[e]) ? void 0 : t.uuid) ? a : e;
                            },
                            overscan: 2,
                        }),
                        d = c.getVirtualItems().flatMap((e) => {
                            let t = o[e.index];
                            return t ? [{ virtualItem: e, playlist: t }] : [];
                        });
                    return ((0, n.useEffect)(() => {
                        c.scrollToOffset(0);
                    }, [t, c]),
                    i)
                        ? (0, r.jsx)('div', {
                              className: t1().playlistList,
                              'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                              children: Array.from({ length: 10 }, (e, t) =>
                                  (0, r.jsx)(ts.Dr, { children: (0, r.jsx)(t3.W, { isActive: !0, className: t1().playlistItemShimmer }) }, t),
                              ),
                          })
                        : o.length
                          ? (0, r.jsx)('div', {
                                ref: s,
                                className: t1().playlistList,
                                'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                                children: (0, r.jsx)('div', {
                                    className: t1().virtualPlaylistList,
                                    style: { height: c.getTotalSize() },
                                    children: d.map((e) => {
                                        let { virtualItem: t, playlist: a } = e;
                                        return (0, r.jsx)(
                                            'div',
                                            {
                                                ref: c.measureElement,
                                                className: t1().virtualPlaylistItem,
                                                'data-index': t.index,
                                                style: { transform: 'translate3d(0, '.concat(t.start, 'px, 0)') },
                                                children: (0, r.jsx)(ai, { playlistItem: a }),
                                            },
                                            t.key,
                                        );
                                    }),
                                }),
                            })
                          : (0, r.jsx)('div', {
                                className: t1().emptyState,
                                'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_EMPTY_STATE,
                                children: (0, r.jsx)(eV.A, { id: 'search-results.not-found-title' }),
                            });
                }),
                an = (0, l.PA)((e) => {
                    let { sourcePlaylistUuid: t } = e,
                        {
                            playlist: { itemsForCopy: a },
                        } = (0, S.g)(),
                        { formatMessage: i } = (0, s.A)(),
                        [l, c] = (0, n.useState)(''),
                        d = ((e) => {
                            let { createPlaylist: t, fullscreenPlayer: a } = (0, S.g)(),
                                { notify: i } = (0, eo.l)(),
                                l = (0, o.useRouter)(),
                                { formatMessage: n } = (0, s.A)();
                            return (0, eq.c)(async () => {
                                if (!(null == e ? void 0 : e.length)) return;
                                let s = { containerId: a.modal.isOpened ? es.u.FULLSCREEN_INFO : es.u.INFO };
                                await t.create({ title: n({ id: 'entity-names.new-playlist' }), visibility: D.L.PUBLIC });
                                let o = t.meta;
                                if (!(null == o ? void 0 : o.uuid)) {
                                    (i((0, r.jsx)(t7, {}), s), t.reset());
                                    return;
                                }
                                if ((await o.changePlaylist((0, el.M)({ operation: en.y.INSERT, position: 0, tracks: e }))) === ei.Y.OK) {
                                    let { href: e } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: o.uuid } });
                                    (t.reset(), a.modal.isOpened && a.modal.close(), l.push(e));
                                    return;
                                }
                                (t.reset(), i((0, r.jsx)(t7, {}), s));
                            });
                        })(a),
                        u = (0, eq.c)((e) => {
                            c(e);
                        }),
                        m = (0, eq.c)(() => {
                            c('');
                        }),
                        _ = (0, eq.c)((e) => {
                            (e.stopPropagation(), e.nativeEvent.stopImmediatePropagation());
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', {
                                className: t1().searchSection,
                                children: (0, r.jsx)(t4.D, {
                                    className: t1().searchField,
                                    initialValue: l,
                                    correctedValue: null,
                                    placeholder: i({ id: 'search.playlist-placeholder' }),
                                    onChange: u,
                                    resetButtonAriaLabel: i({ id: 'interface-actions.reset-search-input' }),
                                    onResetClick: m,
                                    shouldPreventAutoFocusScroll: !0,
                                    innerInputProps: { onKeyDown: _, 'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_SEARCH_INPUT },
                                }),
                            }),
                            (0, r.jsx)(ts.Dr, {
                                onClick: d,
                                icon: (0, r.jsx)(eX.I, { variant: 'add', size: 'xxs' }),
                                className: t1().createPlaylistButton,
                                'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_CREATE_BUTTON,
                                children: (0, r.jsx)(ex.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(eV.A, { id: 'playlist-actions.create-playlist' }),
                                }),
                            }),
                            (0, r.jsx)(t2.c, { className: t1().menuDivider }),
                            (0, r.jsx)(al, { searchQuery: l, sourcePlaylistUuid: t }),
                        ],
                    });
                }),
                as = (0, l.PA)((e) => {
                    let { disabled: t, className: a, sourcePlaylistUuid: i } = e,
                        {
                            contextMenuAddTracksToPlaylist: { loadPlaylistsWithoutTracks: l },
                            settings: { isMobile: n },
                            user: o,
                            playlist: { items: c },
                        } = (0, S.g)(),
                        { formatMessage: d } = (0, s.A)(),
                        u = t || !o.isAuthorized || !c.length,
                        m = (0, eq.c)(() => {
                            l();
                        });
                    return (0, r.jsx)(ts.W1, {
                        offsetOptions: 3,
                        isMobile: n,
                        className: a,
                        listClassName: t1().menuContent,
                        label: d({ id: 'interface-actions.add-tracks-to-playlist' }),
                        icon: (0, r.jsx)(eX.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        disabled: u,
                        onShow: m,
                        containerDataTestId: p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST,
                        'data-test-id': p.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: (0, r.jsx)(an, { sourcePlaylistUuid: i }),
                    });
                });
            var ao = a(16161),
                ac = a(68567),
                ad = a.n(ac);
            let au = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    { notify: l } = (0, eo.l)(),
                    { formatMessage: o } = (0, s.A)(),
                    c = (0, n.useCallback)(async () => {
                        (await a.toggleVisibility()) === e3.F.ERROR &&
                            l((0, r.jsx)(ec.h, { error: o({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: es.u.ERROR });
                    }, [o, l, a]);
                return (0, r.jsxs)(ts.Dr, {
                    className: (0, i.$)(ad().root, t),
                    onClick: c,
                    icon: (0, r.jsx)(eX.I, { variant: 'eye_crossed', size: 'xxs' }),
                    'data-test-id': p.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON,
                    role: 'menuitemcheckbox',
                    'aria-checked': !a.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, r.jsx)('span', { className: ad().caption, children: (0, r.jsx)(eV.A, { id: 'playlist-actions.privacy' }) }),
                        (0, r.jsx)(ao.l, { isChecked: !a.isPublic, ariaLabel: o({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
            var am = a(79546);
            let ap = (0, tP.n)({ event: 'Screen.Started', kind: 'hook', requiredScopes: [] }, (e) => {
                var t;
                let a = null == (t = (0, tC.s)()) ? void 0 : t.evgenInstance,
                    { hash: r } = (0, tx.g)();
                return (0, n.useCallback)(() => {
                    if (!a || void 0 === r || !e.objectId) return;
                    let t = {
                        hash: r,
                        pageId: c.AppScreen.PlaylistScreen,
                        mainObjectType: c.DomainObjectType.Wave,
                        mainObjectId: e.objectId,
                        tabId: e.tabId || '',
                        tabPos: e.tabPos || 1,
                    };
                    Object.values(t).some((e) => void 0 === e) || (0, tA.e7)(a, t);
                }, [a, r, e]);
            });
            var a_ = a(4370),
                ay = a(95210),
                ag = a(47964),
                av = a(9630),
                ah = a(2520),
                af = a(46936),
                aA = a(98953),
                aC = a(32721),
                ax = a(18130),
                aP = a(15077),
                ab = a(93091),
                aE = a(27817),
                aT = a(74064),
                aS = a(15425),
                ak = a(81066);
            let aI = (0, l.PA)((e) => {
                    var t, a, i, l;
                    let { playlist: d, onOpenChange: u, open: m, wrapperClassName: _, ...y } = e,
                        { shouldShowBuySubscriptionModal: g, showBuySubscriptionModal: v } = (0, e1.q)(),
                        {
                            settings: { isMobile: h },
                            trailer: f,
                            playlist: {
                                filters: { activeFilter: A, analyticsParamsActiveFilterIndex: C },
                                items: P,
                                // for PulseSync: BEGIN access playlist track IDs for download-to-file actions
                                trackIds: playlistTrackIds,
                                // for PulseSync: END access playlist track IDs for download-to-file actions
                            },
                            user: b,
                            experiments: E,
                            sonataState: { entityMeta: T },
                        } = (0, S.g)(),
                        k = (0, av.e)(),
                        I = (0, eZ.K)(d),
                        L = E.checkExperiment(eP.z.WebEditorsFeatures, 'on'),
                        N = (0, eQ.A)(d),
                        D = (0, e0.F)(),
                        j = ''.concat(e_.U.PLAYLIST, '-').concat(d.uid, '_').concat(d.kind),
                        R = d.canUserChange,
                        { utmLink: B } = (0, ey.f)({ pageId: x.b.PLAYLIST, blockId: e_.U.PLAYLIST, contextType: em.K.Playlist, contextId: d.uuid, pageEntityId: d.uuid }),
                        F = (0, eJ.P)(),
                        w = d.isOwnFavouritePlaylist && E.checkExperiment(eP.z.WebNextToggleFavouritePlaylistVisibility, 'on'),
                        O = (0, t$.S)(null == k ? void 0 : k.state.currentContext.value),
                        M = T && !O,
                        U = !E.checkExperiment(eP.z.WebNextProductWithoutRecommendation, 'on'),
                        H = (0, ah.i)({ playlistId: d.id, filter: A }),
                        Y = (0, eq.c)((e) =>
                            e.data
                                ? !e.data.isRemoved && e.data.isAvailable
                                    ? e.data.entityId
                                    : void 0
                                : null !== e.albumId
                                  ? ''.concat(e.id, ':').concat(e.albumId)
                                  : String(e.id),
                        ),
                        z = (0, tZ.m)(P, am.N.NEXT, H, { entityVariant: aP.c.PLAYLIST, entityTitle: d.title, coverUri: d.coverUri }, Y),
                        W = (0, tZ.m)(P, am.N.LAST, H, { entityVariant: aP.c.PLAYLIST, entityTitle: d.title, coverUri: d.coverUri }, Y),
                        { notify: K } = (0, eo.l)(),
                        { formatMessage: V } = (0, s.A)(),
                        G = (0, o.useRouter)(),
                        q = ap((0, n.useMemo)(() => ({ objectId: d.seeds[0], tabId: A, tabPos: C }), [d.seeds, A, C])),
                        { shareLink: X, pathname: $ } = (0, ax.b)('/playlists/:playlistUuid', { params: { playlistUuid: d.uuid } }),
                        Z = (0, tQ.A)({ entityVariant: af.D.PLAYLIST, urlParams: { id: d.uid, kind: d.kind } }),
                        { isPlaying: Q, togglePlay: J } = (0, ag.B)({
                            seeds: null != (l = d.seeds) ? l : [],
                            pageIdForFrom: x.b.RADIO,
                            blockIdForFrom: j,
                            parentContextId: d.uuid,
                        }),
                        ee = (0, eq.c)(() => {
                            if (g && b.isAuthorized) return void v();
                            !F() && (Q || (J(), q()));
                        }),
                        et = (0, eq.c)(() => {
                            if (g) return void v();
                            F() || (f.setUtmLink(B), f.openPlaylistTrailer(d.id), D(c.DomainObjectType.Playlist, d.id));
                        }),
                        ea = (0, eq.c)(async () => {
                            if ((await d.deletePlaylist()) === e3.F.ERROR)
                                return void K((0, r.jsx)(ec.h, { error: V({ id: 'playlist-errors.failed-to-remove-playlist' }) }), { containerId: es.u.ERROR });
                            G.push(a_.Z.collection.href);
                        });
                    (0, ay.N)(m);
                    let er = (d.isPublic || d.isFavouritePlaylist) && d.isAvailable,
                        ei = {
                            variant: aA.Y.PLAYLIST,
                            id: d.kind,
                            title: d.title,
                            path: $,
                            playlistOwnerName: null == (t = d.owner) ? void 0 : t.name,
                            playlistOwnerLogin: null == (a = d.owner) ? void 0 : a.login,
                        };
                    // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                    let pulseSyncInjectPlaylistMenuItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                            eventDetail: {
                                id: String(d.kind ?? d.id),
                                uuid: String(d.uuid ?? ''),
                                url: $,
                                ...(d.title
                                    ? {
                                          title: String(d.title),
                                      }
                                    : {}),
                            },
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, pulseSyncMenuJsx.jsx)(
                                    pulseSyncMenuItems.Dr,
                                    {
                                        icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                            variant: icon,
                                            size: 'xxs',
                                        }),
                                        onClick: () => {
                                            (activate(), u(!1));
                                        },
                                        children: label,
                                        'data-pulsesync-addon-menu-item': '',
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END playlist context and native addon menu item rendering
                    return (0, r.jsxs)(ts.W1, {
                        isMobile: h,
                        offsetOptions: 10,
                        open: m,
                        onOpenChange: u,
                        ariaLabel: V({ id: 'interface-actions.context-menu' }),
                        wrapperClassName: _,
                        ...y,
                        containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                        // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                        children: pulseSyncInjectPlaylistMenuItems([
                            L && (0, r.jsx)(tJ.d, { entityVariant: af.D.PLAYLIST, adminUrl: d.isFavouritePlaylist ? void 0 : Z, withPlaylistPageFeatures: !0 }),
                            (0, r.jsx)(as, { sourcePlaylistUuid: d.uuid }),
                            !h && (0, r.jsx)(aE.L, { onClick: N, isPinned: d.isPinned }),
                            !d.isFavouritePlaylist && (0, r.jsx)(ab.T, { onClick: I, isLiked: d.isLiked, disabled: !b.isAuthorized }),
                            // for PulseSync: BEGIN download-to-file action in the playlist page menu
                            playlistTrackIds.length > 0 &&
                                (0, r.jsx)(ts.Dr, {
                                    onClick: () => window.musicDesktop?.pulsesync.downloads.tracks?.(playlistTrackIds, 'playlist', d.title || ''),
                                    icon: (0, r.jsx)(eX.I, { variant: 'download', size: 'xxs' }),
                                    children: 'Скачать в файл',
                                }),
                            // for PulseSync: END download-to-file action in the playlist page menu
                            (null == (i = d.trailer) ? void 0 : i.isAvailable) && (0, r.jsx)(aS.N, { onClick: et }),
                            U && (0, r.jsx)(ak.C, { disabled: !d.isAvailable, onClick: ee, variant: aC.I.PLAYLIST }),
                            M &&
                                (0, r.jsx)(ts.Dr, {
                                    onClick: z,
                                    icon: (0, r.jsx)(eX.I, { variant: 'playNext', size: 'xxs' }),
                                    disabled: !b.isAuthorized,
                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                    children: (0, r.jsx)(eV.A, { id: 'play-queue.play-next' }),
                                }),
                            M &&
                                (0, r.jsx)(ts.Dr, {
                                    onClick: W,
                                    icon: (0, r.jsx)(eX.I, { variant: 'playLast', size: 'xxs' }),
                                    disabled: !b.isAuthorized,
                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                    children: (0, r.jsx)(eV.A, { id: 'play-queue.play-last' }),
                                }),
                            (0, r.jsx)(aT.H, { disabled: !er, shareLink: X, entityMeta: ei }),
                            R &&
                                (0, r.jsx)(ts.Dr, {
                                    icon: (0, r.jsx)(eX.I, { variant: 'bucket', size: 'xxs' }),
                                    onClick: ea,
                                    children: (0, r.jsx)(eV.A, { id: 'playlist-actions.remove-playlist' }),
                                }),
                            (R || w) && (0, r.jsx)(au, { playlist: d }),
                        ]),
                        // for PulseSync WebHost: END inject native addon items into the playlist context menu
                    });
                }),
                aL = (0, l.PA)((e) => {
                    var t, a;
                    let { playlist: l, isDisabled: d, className: u, forwardRef: m } = e,
                        { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: y } = (0, e1.q)(),
                        { from: g, utmLink: v } = (0, ey.f)({
                            pageId: x.b.PLAYLIST,
                            blockId: e_.U.PLAYLIST,
                            contextType: em.K.Playlist,
                            contextId: l.uuid,
                            pageEntityId: l.uuid,
                        }),
                        {
                            settings: { isMobile: h },
                            sonataState: f,
                            trailer: A,
                            playlist: {
                                filters: { activeFilter: C, activeFilterName: P },
                                enableVariousAutoFlow: b,
                                trackIds: E,
                                isRewind2024Playlist: T,
                                setShouldShowTrailerOnboarding: k,
                            },
                            user: I,
                            ugcUploadCenter: L,
                            paywall: { modal: N },
                        } = (0, S.g)(),
                        D = h && !I.isAuthorized,
                        j = h && !I.hasPlus && I.isAuthorized,
                        R = D || j,
                        B = (0, e2.N)(),
                        { formatMessage: F, formatNumber: w } = (0, s.A)(),
                        [O, M] = (0, n.useState)(!1),
                        U = (0, eZ.K)(l),
                        H = (0, eQ.A)(l),
                        Y = (0, e0.F)(),
                        z = !h,
                        W = (0, n.useRef)(null);
                    (0, eG.W)();
                    let K = (0, eJ.P)(),
                        { controlSize: V, iconSize: G } = (0, ta.q)(h),
                        { notify: q } = (0, eo.l)(),
                        X = l.canUserChange && !h,
                        $ = (0, o.useSearchParams)(),
                        Z = (0, n.useMemo)(() => {
                            if (T && l.personalColor) return (0, e4.R)(l.personalColor);
                        }, [T, l.personalColor]),
                        Q = (0, eq.c)(() => {
                            var e;
                            null == (e = W.current) || e.focus();
                        }),
                        J = (0, eq.c)(async (e) => {
                            (await l.changeTitle(e)) === e3.F.ERROR &&
                                q((0, r.jsx)(ec.h, { error: F({ id: 'playlist-errors.failed-to-change-title' }) }), { containerId: es.u.ERROR });
                        }),
                        { isPlaying: ee, togglePlay: et } = (0, e8.D)({
                            playContextParams: {
                                contextData: {
                                    type: em.K.Playlist,
                                    meta: { id: l.id, uuid: l.uuid },
                                    filter: C,
                                    filterName: P,
                                    enableVariousAutoFlow: b,
                                    from: g,
                                    utmLink: v,
                                },
                                loadContextMeta: !0,
                                entitiesData: f.unloadedEntitiesDataFromModels,
                            },
                        }),
                        [ea, er] = (0, n.useState)(ee),
                        ei = (0, eq.c)(() => {
                            if (!K()) {
                                if (_) return void y();
                                if (B) return void N.open();
                                (et(), f.setPlaylistFilter(C));
                            }
                        });
                    (0, n.useEffect)(() => {
                        ee && (f.playlistFilter === C || ((0, eK.A)(f.playlistFilter) && (0, eK.A)(C))) ? er(!0) : er(!1);
                    }, [ee, f.playlistFilter, C]);
                    let el = (0, n.useMemo)(() => {
                            if (l.actualLikesCount && l.actualLikesCount > 0)
                                return (0, r.jsx)(ex.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 's',
                                    weight: 'medium',
                                    children: l.actualLikesCount && w(l.actualLikesCount),
                                });
                        }, [l.actualLikesCount, w]),
                        en = (0, n.useMemo)(
                            () =>
                                h
                                    ? (0, r.jsx)(e7.D, {
                                          ref: W,
                                          className: (0, i.$)(tl().playControl, { [tl().playControl_withLogin]: R }),
                                          color: R ? 'secondary' : 'primary',
                                          buttonVariant: 'default',
                                          iconSize: R ? G : 'xxl',
                                          size: R ? V : void 0,
                                          isPlaying: ea,
                                          variant: R ? 'default' : 'filled',
                                          onClick: ei,
                                          disabled: d,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                      })
                                    : (0, r.jsx)(e7.D, {
                                          ref: W,
                                          className: tl().playControl,
                                          withRipple: !0,
                                          buttonVariant: 'default',
                                          radius: 'xxxl',
                                          size: 's',
                                          color: 'primary',
                                          iconSize: 'xxs',
                                          isPlaying: ea,
                                          onClick: ei,
                                          disabled: d,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                          children: (0, r.jsx)(eV.A, { id: 'player-actions.listen' }),
                                      }),
                            [d, h, ei, ea, R, G, V],
                        ),
                        ed = (0, eq.c)(() => {
                            K() || (A.setUtmLink(v), A.openPlaylistTrailer(l.id), Y(c.DomainObjectType.Playlist, l.id));
                        }),
                        ep = (0, eq.c)(() => {
                            if (_) return void y();
                            ed();
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        (null == (e = l.trailer) ? void 0 : e.isAvailable) && 'true' === $.get(e5.K.OPEN_TRAILER) && ed();
                    }, [T, l.personalColor, ed, $, k, null == (t = l.trailer) ? void 0 : t.isAvailable]);
                    let eg = (0, n.useMemo)(() => {
                            var e;
                            return (null == (e = l.trailer) ? void 0 : e.isAvailable) && !h
                                ? (0, r.jsx)(tt.L, {
                                      children: (0, r.jsx)(te.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: th().trailerControl,
                                          onClick: ep,
                                          disabled: !l.isAvailable,
                                          style: Z,
                                          children: (0, r.jsx)(eV.A, { id: 'entity-names.trailer' }),
                                      }),
                                  })
                                : null;
                        }, [ep, h, null == (a = l.trailer) ? void 0 : a.isAvailable, l.isAvailable, Z]),
                        ev = l.canUserChange && L.isAvailable,
                        eh = (0, n.useMemo)(() => {
                            if (ev) return (0, r.jsx)('div', { className: th().ugcControls, children: (0, r.jsx)(tX, { playlist: l }) });
                        }, [l, ev]),
                        ef = (0, n.useMemo)(() => F({ id: 'entity-names.likes-count-description' }, { count: l.actualLikesCount }), [F, l.actualLikesCount]),
                        eA = (0, eR.L)(() => {
                            if (!l.isFavouritePlaylist)
                                return h
                                    ? (0, r.jsx)(e9.c, {
                                          className: th().likeControl,
                                          isLiked: l.isLiked,
                                          onClick: U,
                                          variant: 'default',
                                          size: V,
                                          iconSize: G,
                                          iconClassName: th().likeIcon,
                                          disabled: !I.isAuthorized,
                                      })
                                    : (0, r.jsx)(e9.c, {
                                          className: th().likeControl,
                                          isLiked: l.isLiked,
                                          onClick: U,
                                          withRipple: !0,
                                          iconSize: G,
                                          size: V,
                                          variant: 'default',
                                          'aria-label': ef,
                                          iconClassName: th().likeIcon,
                                          disabled: !I.isAuthorized,
                                          children: el,
                                      });
                        }),
                        // for PulseSync: BEGIN allow track downloads outside owned or favorite playlists
                        eC = I.hasPlus && !h, // && l.isFavouritePlaylist && l.isOwnPlaylist,
                        // for PulseSync: END allow track downloads outside owned or favorite playlists
                        eP = (0, n.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: th().controls,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: th().mainControls,
                                            children: [
                                                (0, r.jsx)(eu.B, {
                                                    objectType: c.DomainObjectType.Playlist,
                                                    objectId: String(l.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    children: en,
                                                }),
                                                (0, r.jsx)(tS, { playlistUuid: l.uuid }),
                                                eg,
                                                (0, r.jsx)(eu.B, {
                                                    objectType: c.DomainObjectType.Playlist,
                                                    objectId: String(l.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    children: eA,
                                                }),
                                                z && (0, r.jsx)(e6.O, { onClick: H, isPinned: l.isPinned, className: th().pinControl }),
                                                (0, r.jsx)(aI, {
                                                    playlist: l,
                                                    open: O,
                                                    onOpenChange: M,
                                                    wrapperClassName: th().menuControl,
                                                    size: V,
                                                    icon: (0, r.jsx)(eX.I, { size: G, variant: 'more' }),
                                                    'data-test-id': p.e8.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                                                }),
                                                eC && (0, r.jsx)(tg, { trackIds: E, className: th().downloadControl, onRemove: Q }),
                                            ],
                                        }),
                                        eh,
                                    ],
                                }),
                            [en, eg, eA, H, l, eC, E, O, V, G, eh, z, Q],
                        );
                    return (0, r.jsx)('div', {
                        className: th().root,
                        children: (0, r.jsx)(tr.k, {
                            headingVariant: 'h1',
                            ref: m,
                            className: u,
                            controls: eP,
                            meta: (0, r.jsx)(tV, { playlist: l }),
                            entityName: F({ id: 'entity-names.playlist' }),
                            title: l.title,
                            canChangeTitle: X,
                            maxTitleLength: e$.k,
                            onTitleChange: J,
                            cover: (0, r.jsx)(tB, { playlist: l }),
                            showMobileLoginButton: D,
                            showMobileSubscriptionButton: j,
                        }),
                    });
                }),
                aN = (0, n.forwardRef)((e, t) => (0, r.jsx)(aL, { forwardRef: t, ...e }));
            var aD = a(55482),
                aj = a(80921),
                aR = a.n(aj);
            let aB = (e) => {
                let { className: t, isEmptySearch: a } = e,
                    l = (0, n.useMemo)(
                        () =>
                            a ? (0, r.jsx)(eV.A, { id: 'search-results.not-found-title' }) : (0, r.jsx)(eV.A, { id: 'error-messages.empty-collection-playlist-title' }),
                        [a],
                    ),
                    s = (0, n.useMemo)(
                        () =>
                            a
                                ? (0, r.jsx)(eV.A, { id: 'search-results.not-found-description' })
                                : (0, r.jsx)(eV.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [a],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(aR().root, t),
                    'data-test-id': p.Kq.playlist.PLAYLIST_EMPTY_BLOCK,
                    children: [
                        (0, r.jsx)('div', {
                            className: aR().iconBackground,
                            children: (0, r.jsx)(eX.I, { variant: 'search', size: 'l', className: aR().icon, 'data-test-id': p.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON }),
                        }),
                        (0, r.jsx)(ex.DZ, { variant: 'h3', size: 'xs', className: aR().title, 'data-test-id': p.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE, children: l }),
                        (0, r.jsx)(ex.HL, { variant: 'span', size: 'l', className: aR().subtitle, 'data-test-id': p.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT, children: s }),
                    ],
                });
            };
            var aF = a(5279),
                aw = a(39267),
                aO = a(15232),
                aM = a(56712),
                aU = a(96827),
                aH = a.n(aU);
            let aY = (0, l.PA)((e) => {
                let { className: t, track: a, playContextParams: i, onClick: l } = e,
                    { formatMessage: o } = (0, s.A)(),
                    {
                        settings: { isMobile: c },
                    } = (0, S.g)(),
                    d = (0, e8.D)({ playContextParams: i, entityId: a.entityId }),
                    u = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(aw.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: aH().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    ),
                    m = (0, n.useCallback)(
                        (e) => {
                            (e.stopPropagation(), null == l || l(a));
                        },
                        [a, l],
                    ),
                    _ = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)('div', {
                                className: aH().controls,
                                children: (0, r.jsx)(tn.$, {
                                    className: aH().button,
                                    variant: 'text',
                                    size: 'xs',
                                    radius: 'xxxl',
                                    'aria-label': o({ id: 'interface-actions.add-track-to-playlist' }),
                                    onClick: m,
                                    icon: (0, r.jsx)(eX.I, { size: 'xxs', variant: 'add' }),
                                }),
                            }),
                        [o, m],
                    );
                return (0, r.jsx)(aM.C, {
                    className: t,
                    track: a,
                    meta: (0, r.jsx)(aO.j, { withArtistLink: !c, track: a }),
                    playButtonCellRender: u,
                    controls: _,
                    ...d,
                    'data-test-id': p.Kq.track.TRACK_PLAYLIST_ADDITION,
                });
            });
            var az = a(40512);
            let aW = (e) => {
                let { item: t, from: a, tracks: r } = e,
                    i = r
                        .map((e) => {
                            if (e) return (0, az.$)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: em.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: i,
                };
            };
            var aK = a(8357),
                aV = a.n(aK);
            let aG = (0, l.PA)((e) => {
                var t, a, l, o, d, u, m, _;
                let { autoFocus: y, className: g } = e,
                    { formatMessage: v } = (0, s.A)(),
                    { playlist: h } = (0, S.g)(),
                    { search: f } = h,
                    A = (0, aF.R)(),
                    C = (0, n.useRef)(0),
                    P = (null == (t = h.meta) ? void 0 : t.isOwnPlaylist) ? x.b.OWN_PLAYLISTS : x.b.PLAYLIST,
                    { from: b } = (0, ey.f)({ pageId: P, blockId: e_.U.FILTERED }),
                    { from: E } = (0, ey.f)({ pageId: P, blockId: e_.U.SUGGESTED }),
                    [T, k] = (0, n.useState)(!1);
                (0, n.useEffect)(
                    () => () => {
                        window.clearTimeout(C.current);
                    },
                    [],
                );
                let I = (0, n.useMemo)(
                        () =>
                            (0, aD.A)((e) => {
                                let t = e.trim();
                                (f.setText(t),
                                    t && (null == h ? void 0 : h.meta) && (f.reset(), f.getTracks({ uid: h.meta.uid, kind: h.meta.kind })),
                                    (t && 0 !== t.length) || (T && (k(!1), h.refreshTracks()), f.setIdleState()));
                            }, 100),
                        [f, h, T],
                    ),
                    L = (0, n.useCallback)(
                        async (e) => {
                            if (h.meta) {
                                f.setAdditionTrackAnimation(e.id);
                                let t = A({ track: e, playlist: h.meta, withSuccessNotification: !1, withPageRefresh: !1 }),
                                    a = new Promise((e) => {
                                        C.current = window.setTimeout(e, 300);
                                    }),
                                    [r] = await Promise.all([t, a]);
                                r === ei.Y.OK ? (f.replaceAdditionTrackInProggress(), k(!0)) : f.resetAdditionTrackAnimation();
                            }
                        },
                        [A, h.meta, f],
                    ),
                    N = (0, n.useMemo)(() => {
                        var e;
                        return f.isLoading
                            ? (0, r.jsx)(ev.D, { isActive: !0, className: aV().shimmerItem, variant: eg.X.PLAYLIST })
                            : null == (e = f.playlistTracks)
                              ? void 0
                              : e.map((e, t) =>
                                    e
                                        ? e.isTrackNonMusic
                                            ? (0, r.jsx)(
                                                  eu.B,
                                                  {
                                                      objectType: c.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      children: (0, r.jsx)(eC.K, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: b, tracks: f.playlistTracks }),
                                                          className: (0, i.$)(aV().track, { [aV().appearingTrack]: e.id === f.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, r.jsx)(
                                                  eu.B,
                                                  {
                                                      objectType: c.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      children: (0, r.jsx)(ek.K, {
                                                          className: (0, i.$)(aV().track, { [aV().appearingTrack]: e.id === f.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: b, tracks: f.playlistTracks }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null,
                                );
                    }, [f.isLoading, f.playlistTracks, f.additionTrackInProggress, b]),
                    D = (0, n.useMemo)(() => {
                        var e, t;
                        if (null == (e = h.meta) ? void 0 : e.canUserChange)
                            return f.isLoading
                                ? (0, r.jsx)(ev.D, { isActive: !0, className: aV().shimmerItem, variant: eg.X.PLAYLIST })
                                : null == (t = f.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, r.jsx)(
                                                  aY,
                                                  {
                                                      track: e,
                                                      className: (0, i.$)({ [aV().disappearingTrack]: e.id === f.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: em.K.Various, meta: { id: e.entityId }, from: t },
                                                          queueParams: { index: 0, entityId: e.entityId },
                                                          loadContextMeta: !0,
                                                      }))(e, E),
                                                      onClick: L,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [null == (a = h.meta) ? void 0 : a.canUserChange, f.isLoading, f.suggestedTracks, f.additionTrackInProggress, E, L]),
                    j = (0, n.useMemo)(() => {
                        var e, t, a;
                        let i = !(null == (e = f.suggestedTracks) ? void 0 : e.length) || !(null == (t = h.meta) ? void 0 : t.canUserChange);
                        return (null == (a = f.playlistTrackIds) ? void 0 : a.length) || !i || f.isLoading
                            ? null
                            : (0, r.jsx)(aB, { className: aV().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (l = f.suggestedTracks) ? void 0 : l.length,
                        null == (o = f.playlistTrackIds) ? void 0 : o.length,
                        f.isLoading,
                        null == (d = h.meta) ? void 0 : d.canUserChange,
                    ]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(t4.D, {
                            className: (0, i.$)(aV().root, g),
                            autoFocus: y,
                            initialValue: f.text,
                            correctedValue: null,
                            placeholder: v({ id: 'search.track-placeholder' }),
                            onChange: I,
                            resetButtonAriaLabel: v({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: f.reset,
                            innerInputProps: { 'data-test-id': p.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT },
                            resetButtonProps: { 'data-test-id': p.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON },
                            searchIconProps: { 'data-test-id': p.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON },
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        f.text &&
                            (0, r.jsxs)('div', {
                                className: aV().content,
                                children: [
                                    j,
                                    (0, r.jsx)(ed.F, {
                                        blockType: c.EntityTypes.Tracks,
                                        blockId: c.EntityTypes.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        objectsCount: f.playlistTracks.length,
                                        children: N,
                                    }),
                                    Number(null == (u = f.suggestedTracks) ? void 0 : u.length) > 0 &&
                                        (null == (m = h.meta) ? void 0 : m.canUserChange) &&
                                        (0, r.jsx)(
                                            ex.DZ,
                                            {
                                                variant: 'h3',
                                                className: (0, i.$)(aV().catalog, { [aV().catalog_withTracks]: null == (_ = f.playlistTrackIds) ? void 0 : _.length }),
                                                children: (0, r.jsx)(eV.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    D,
                                ],
                            }),
                    ],
                });
            });
            var aq = a(38147),
                aX = a(77309),
                a$ = a(98225),
                aZ = a(63807);
            let aQ = (e) => {
                let { children: t, child: a, className: i } = e,
                    { setChildElement: l, setChild: s } = (0, n.useContext)(aZ.B),
                    o = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && l(o), a && s(a));
                    }, [o, a, l, s]),
                    (0, n.useEffect)(
                        () => () => {
                            s(null);
                        },
                        [s],
                    ),
                    (0, r.jsx)('div', { ref: o, className: i, children: t })
                );
            };
            var aJ = a(69117),
                a0 = a(39942),
                a1 = a.n(a0);
            let a2 = (0, l.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: i, setPlaylistStaticFiltersRef: l } = (0, E.g)(),
                    s = (0, a$.zb)(a.filters.activeFilterIndex),
                    o = (0, n.useRef)(null),
                    c = (0, aX.M)();
                (0, n.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let d = (0, eq.c)((e) => {
                        var t;
                        if (!s.onTabChange || e === s.value) return;
                        (setTimeout(() => {
                            var t, a, r;
                            null == (r = o.current) || null == (a = r.children[e]) || null == (t = a.focus) || t.call(a);
                        }),
                            s.onTabChange(e));
                        let r = null == (t = a.filters.items) ? void 0 : t[e];
                        r && (a.filters.handleFilterClick(r), c({ tabId: r.id, tabPos: e + 1 }));
                    }),
                    u = null == (t = a.filters.items) ? void 0 : t.map((e) => ({ id: e.id, name: e.name }));
                return (0, r.jsx)(aQ, {
                    child: (0, r.jsx)(aJ.A, { className: a1().stickyFilters, tabsState: s, handleFilterClick: d, ref: i, isSticky: !0, items: u }),
                    children: (0, r.jsx)(aJ.A, {
                        className: a1().staticFilters,
                        tabsState: s,
                        handleFilterClick: d,
                        ref: l,
                        carouselClassName: a1().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var a4 = a(61166),
                a8 = a(95850);
            let a3 = (0, l.PA)((e) => {
                let { className: t, creativeClassName: a, gradientClassName: i } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: l },
                        },
                    } = (0, S.g)(),
                    { formatMessage: o } = (0, s.A)(),
                    c = (0, eq.c)(() => {
                        l.setType(aq.h.BRANDING);
                    });
                return (
                    (0, n.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l],
                    ),
                    (0, r.jsxs)('div', {
                        className: t,
                        'aria-label': o({ id: 'advert.banner' }),
                        role: 'banner',
                        children: [
                            (0, r.jsx)(a8.N, {
                                className: i,
                                ownerId: a4.P,
                                containerId: g.LB,
                                params: g.w_,
                                onLoad: c,
                                onError: l.toggleHasErrorTrue,
                                onNoAds: l.toggleNoAdsTrue,
                            }),
                            (0, r.jsx)(a8.N, {
                                className: a,
                                ownerId: a4.P,
                                containerId: g.KZ,
                                params: g.RA,
                                onLoad: c,
                                onError: l.toggleHasErrorTrue,
                                onNoAds: l.toggleNoAdsTrue,
                            }),
                        ],
                    })
                );
            });
            var a5 = a(26208),
                a9 = a(23598),
                a6 = a.n(a9);
            let a7 = (0, l.PA)(() => {
                var e;
                let {
                        advert: t,
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a },
                        },
                    } = (0, S.g)(),
                    l = (0, h.Q)(),
                    n = a.isVisible && l.isEnabled;
                return t.isAdvertDisabled(a5.f.PLAYLIST_BRANDING)
                    ? null
                    : (0, r.jsx)('div', {
                          className: (0, i.$)({ [a6().brandedPlaylistBannerWrapper]: n }),
                          style: null == (e = l.data) ? void 0 : e.style,
                          children: (0, r.jsx)(a3, { creativeClassName: a6().creative }),
                      });
            });
            var re = a(32932),
                rt = a(8990),
                ra = a(5739),
                rr = a.n(ra);
            let ri = (0, l.PA)((e) => {
                    var t;
                    let { className: a, track: l } = e,
                        { formatMessage: o } = (0, s.A)(),
                        c = null == (t = l.file) ? void 0 : t.name,
                        d = (0, n.useCallback)(() => {
                            l.abortUpload();
                        }, [l]),
                        u = (0, n.useCallback)(() => {
                            l.retryUpload();
                        }, [l]),
                        m = (0, n.useMemo)(
                            () =>
                                (0, r.jsx)(tn.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': o({ id: 'ugc.cancel-upload' }),
                                    color: 'primary',
                                    onClick: d,
                                    'data-test-id': p.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON,
                                    children: (0, r.jsx)(ex.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: rr().button,
                                        children: (0, r.jsx)(eV.A, { id: 'ugc.cancel-upload' }),
                                    }),
                                }),
                            [d, o],
                        ),
                        _ = (0, n.useMemo)(
                            () =>
                                (0, r.jsx)(tn.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': o({ id: 'ugc.repeat-upload' }),
                                    color: 'primary',
                                    onClick: u,
                                    'data-test-id': p.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON,
                                    children: (0, r.jsx)(ex.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: rr().button,
                                        children: (0, r.jsx)(eV.A, { id: 'ugc.repeat-upload' }),
                                    }),
                                }),
                            [o, u],
                        ),
                        y = (0, n.useMemo)(() => {
                            switch (l.loadingState) {
                                case re.p.IDLE:
                                case re.p.PREPARE:
                                case re.p.UPLOADING:
                                    return m;
                                case re.p.REJECT:
                                    return _;
                                default:
                                    return null;
                            }
                        }, [m, _, l.loadingState]),
                        g = (0, n.useMemo)(() => {
                            switch (l.loadingState) {
                                case re.p.IDLE:
                                case re.p.PREPARE:
                                case re.p.UPLOADING:
                                    return (0, r.jsx)(ex.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: rr().status,
                                        'data-test-id': p.Kq.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                                        children: (0, r.jsx)(eV.A, { id: 'ugc.track-uploading-pending-status' }),
                                    });
                                case re.p.PROCESSING:
                                case re.p.RESOLVE:
                                    return (0, r.jsx)(ex.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: rr().status,
                                        children: (0, r.jsx)(eV.A, { id: 'ugc.track-uploading-processing-status' }),
                                    });
                                case re.p.REJECT:
                                    return (0, r.jsx)(ex.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: rr().status,
                                        'data-test-id': p.Kq.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                                        children: (0, r.jsx)(eV.A, { id: 'ugc.track-uploading-error-status' }),
                                    });
                                default:
                                    return null;
                            }
                        }, [l.loadingState]);
                    return (0, r.jsxs)(rt.C, {
                        'aria-label': c,
                        className: (0, i.$)(rr().root, rr().card, rr().important, a),
                        'data-test-id': p.Kq.track.UGC_TRACK,
                        children: [
                            (0, r.jsx)(aw.q, { title: c, radius: 'xs', className: rr().playButton }),
                            (0, r.jsxs)('div', {
                                className: rr().meta,
                                children: [
                                    (0, r.jsx)(ex.HL, { variant: 'div', size: 'm', className: rr().title, 'data-test-id': p.Kq.track.UGC_TRACK_TITLE, children: c }),
                                    g,
                                ],
                            }),
                            (0, r.jsx)('div', { className: rr().controls, children: y }),
                        ],
                    });
                }),
                rl = (0, l.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: i, playlist: l } = (0, S.g)();
                    if (!(null == (t = l.meta) ? void 0 : t.kind) || !l.search.isNeededToLoad) return;
                    let n = i.getUploadingTracksByPlaylistKind(l.meta.kind);
                    if (0 !== n.length) return (0, r.jsx)('div', { className: a, children: n.map((e, t) => (0, r.jsx)(ri, { track: e }, t)) });
                });
            var rn = a(16948),
                rs = a.n(rn);
            let ro = (0, l.PA)((e) => {
                let { playlistHeaderRef: t } = e,
                    {
                        playlist: a,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: l },
                        },
                    } = (0, S.g)(),
                    s = (0, h.Q)();
                return ((0, n.useEffect)(() => {
                    a.search.isFocused && a.search.removeFocus();
                }, [a.search.isFocused, a.search]),
                a.isLoading || !a.meta || a.isRejected)
                    ? (0, r.jsx)(eW.c, { className: rs().header })
                    : (0, r.jsxs)(ed.F, {
                          blockType: c.EntityTypes.Header,
                          blockId: c.EntityTypes.Header,
                          blockPosX: 1,
                          blockPosY: 1,
                          objectsCount: 1,
                          children: [
                              (0, r.jsx)(a7, {}),
                              (0, r.jsx)(aN, {
                                  className: (0, i.$)(rs().header, {
                                      [rs().header_branded]: s.isEnabled,
                                      [rs().header_brandedAxe]: l.isVisible && l.type === aq.h.BRANDING,
                                  }),
                                  playlist: a.meta,
                                  isDisabled: a.isDisabled,
                                  ref: t,
                              }),
                              (0, r.jsx)(aG, { autoFocus: !!(!a.items.length || a.search.isFocused) }),
                              a.isFiltersAvailable && (0, r.jsx)(a2, { playlist: a }),
                              (0, r.jsx)(rl, { className: rs().content }),
                              a.shouldShowEmptyBlock && (0, r.jsx)(aB, { className: rs().emptyPlaylist }),
                          ],
                      });
            });
            var rc = a(72131),
                rd = a(24586);
            let ru = (0, l.PA)((e) => {
                    var t;
                    let { user: a, playlist: i } = e,
                        { formatMessage: l } = (0, s.A)(),
                        o = (0, tu.N)().get(td.V4),
                        c = (0, rc._)(o.webHost),
                        d = (0, n.useMemo)(() => {
                            let e =
                                    i.actualLikesCount > 0
                                        ? l({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount })
                                        : l({ id: 'entity-names.likes-counter-empty' }),
                                t = ''.concat(l({ id: 'entity-names.playlist' }), ' • ').concat(e);
                            return i.description ? ''.concat(i.description, ' • ').concat(t) : t;
                        }, [l, i.actualLikesCount, i.description]);
                    if (a.isAuthorized) return null;
                    let { href: u } = (0, tk.no)('/playlists/:playlistUuid', { params: { playlistUuid: i.uuid }, options: { host: 'https://'.concat(c) } }),
                        m = {
                            '@type': 'MusicPlaylist',
                            name: i.title,
                            url: u,
                            description: d,
                            ...(i.modified && { datePublished: i.modified }),
                            ...(i.tracksCount && { numTracks: i.tracksCount }),
                            ...((null == (t = i.owner) ? void 0 : t.name) && { author: { '@type': 'Person', name: i.owner.name } }),
                        };
                    return (0, r.jsx)(rd.S, { value: m });
                }),
                rm = (0, l.PA)((e) => {
                    var t, a, l, c, m;
                    let { userId: g, kind: v, playlistUuid: f, preloadedPlaylistByUuid: x } = e,
                        {
                            user: j,
                            playlist: R,
                            settings: { isMobile: B },
                        } = (0, S.g)(),
                        { formatMessage: F } = (0, s.A)(),
                        { contentScrollRef: w, setContentScrollRef: O } = (0, E.g)(),
                        { forceUpdateRefCallback: M, offsetY: G } = (0, _.G)(w);
                    (0, d.u)();
                    let X = (0, b.y)(null == R || null == (t = R.meta) ? void 0 : t.averageColor),
                        $ = (0, n.useMemo)(() => {
                            var e;
                            return R.isRewind2024Playlist && (null == (e = R.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, W.W)(),
                                          a = t === z.S.Light ? 0.7 : 0.36;
                                      return (0, Y.e)(e, 0.6, a);
                                  })(R.meta.personalColor)
                                : X;
                        }, [R.isRewind2024Playlist, null == (a = R.meta) ? void 0 : a.personalColor, X]),
                        { topColorStyle: Z, headerStyle: J } = (0, A.Q)($, G);
                    (((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, K.P)()) ? t : {};
                        (0, n.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(f),
                        (0, T.J)(R.isResolved),
                        ((e) => {
                            let { fullscreenVideoPlayer: t } = (0, S.g)(),
                                a = null == e ? void 0 : e.meta,
                                r = null == e ? void 0 : e.isLoading,
                                i = null == e ? void 0 : e.isRejected,
                                l = (0, n.useCallback)(
                                    (t) =>
                                        i
                                            ? {}
                                            : e && a && !r
                                              ? U(
                                                    ((e) => {
                                                        var t, a, r, i, l, n, s, o, c, d, u, m, p;
                                                        let _ = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                                        return {
                                                            owner: null == (t = e.meta) ? void 0 : t.owner,
                                                            uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                                            kind: (null == (r = e.meta) ? void 0 : r.kind) || 0,
                                                            title: (null == (i = e.meta) ? void 0 : i.title) || '',
                                                            description: null == (l = e.meta) ? void 0 : l.description,
                                                            revision: (null == (n = e.meta) ? void 0 : n.revision) || 0,
                                                            snapshot: 0,
                                                            trackCount: _.length,
                                                            cover: {
                                                                uri: (null == (s = e.meta) ? void 0 : s.coverUri) || '',
                                                                prefix: '',
                                                                type: N.Q.FROM_ALBUM_COVER,
                                                                custom: !1,
                                                            },
                                                            playlistUuid: (null == (o = e.meta) ? void 0 : o.uuid) || '',
                                                            available: (null == (c = e.meta) ? void 0 : c.isAvailable) || !0,
                                                            visibility: (null == (d = e.meta) ? void 0 : d.visibility) || D.L.PUBLIC,
                                                            likesCount: null == (u = e.meta) ? void 0 : u.likesCount,
                                                            modified: (null == (m = e.meta) ? void 0 : m.modified) || '',
                                                            created: '',
                                                            isBanner: !1,
                                                            isPremiere: !1,
                                                            durationMs: 0,
                                                            collective: !1,
                                                            ogImage: (null == (p = e.meta) ? void 0 : p.coverUri) || '',
                                                            tags: [],
                                                            tracks: _,
                                                        };
                                                    })(e),
                                                    t,
                                                )
                                              : void 0,
                                    [e, a, r, i],
                                );
                            (0, L.C)(t.modal.isOpened ? null : l);
                        })(R),
                        (0, P.A)(),
                        ((e) => {
                            let t = (0, H.n)(),
                                { paywall: a } = (0, S.g)(),
                                r = t && e;
                            (0, n.useEffect)(
                                () => (
                                    r && a.openFreemiumCollectionPaywall(),
                                    () => {
                                        a.clearFreemiumCollectionBarrier();
                                    }
                                ),
                                [r, a],
                            );
                        })(R.isFavouritePlaylist),
                        (0, n.useEffect)(
                            () => () => {
                                R.reset();
                            },
                            [R, f, g, v],
                        ));
                    let ee = (0, n.useMemo)(
                            () => ({
                                Header: () => (0, r.jsx)(ro, { playlistHeaderRef: M }),
                                Item: R.isDragAndDropEnabled ? Q : void 0,
                                Footer: () => (0, r.jsx)(ez, { playlist: R }),
                            }),
                            [M, R, R.isDragAndDropEnabled],
                        ),
                        et = (0, n.useCallback)(
                            (e) => {
                                R.getTracksByRange(e);
                            },
                            [R],
                        ),
                        ea = (0, n.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = R.items[e]) ? void 0 : t.key;
                            },
                            [R.items],
                        ),
                        er = (0, n.useCallback)((e) => e, []),
                        ei = (0, h.Q)();
                    if (
                        (R.isNeededToLoad &&
                            ('string' == typeof f
                                ? (0, n.use)(R.getPlaylistByUuid({ playlistUuid: f, resumeStream: !1, preloadedPlaylist: x }))
                                : 'string' == typeof g &&
                                  'string' == typeof v &&
                                  (0, n.use)(R.getPlaylistByUserIdAndKind({ userId: g, playlistKind: Number(v), resumeStream: !1 }))),
                        R.uuid &&
                            R.isResolved &&
                            R.similarEntities.isNeededToLoad &&
                            R.isSimilarEntitiesEnabled &&
                            (0, n.use)(R.getSimilarEntities({ playlistUuid: R.uuid })),
                        R.isNotFound && (0, o.notFound)(),
                        R.isRejected)
                    )
                        return (0, r.jsx)(y.SomethingWentWrong, {});
                    let el = ei.isEnabled ? k.V.BRANDED_PLAYLIST : k.V.INNER;
                    return (0, r.jsxs)(u.h, {
                        tabId: R.filters.activeFilter || '',
                        tabPos: R.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, r.jsx)(C.h, {
                                scrollElement: w,
                                children: (0, r.jsxs)('div', {
                                    className: q().wrapper,
                                    style: null == (l = ei.data) ? void 0 : l.style,
                                    children: [
                                        (0, r.jsx)(k.Y, { variant: el, style: J }),
                                        !ei.isEnabled && (0, r.jsx)('div', { className: q().averageColorBackground, style: Z }),
                                        (0, r.jsx)(ej, {
                                            playlist: R,
                                            children: (0, r.jsx)(I.$, {
                                                context: {
                                                    listAriaLabel: F(
                                                        { id: 'entity-names.playlist-tracks-list' },
                                                        { playlistName: (null == (c = R.meta) ? void 0 : c.title) || '' },
                                                    ),
                                                },
                                                className: (0, i.$)(q().root, q().important),
                                                listClassName: q().content,
                                                customComponents: ee,
                                                computeItemKey: R.isDragAndDropEnabled ? ea : er,
                                                totalCount: R.virtualListItemsCount,
                                                itemContentCallback: (e) => (0, r.jsx)(eL, { index: e }),
                                                onGetDataByRange: et,
                                                debounceDurationInMs: 300,
                                                initialItemCount: null == (m = R.items) ? void 0 : m.length,
                                                handleRef: O,
                                                shouldTriggerRangeChangedOn: [R.filters.activeFilter, R.virtualListItemsCount],
                                                testId: p.Xk.playlist.PLAYLIST_PAGE,
                                                isMobileLayout: B,
                                                useWindowScroll: B,
                                                withFooter: !0,
                                                withForceScroll: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            R.meta && (0, r.jsx)(ru, { user: j, playlist: R.meta }),
                        ],
                    });
                }),
                rp = (0, l.PA)((e) =>
                    (0, r.jsx)(f.A, {
                        containerId: g.LB,
                        expectedType: v.k.PLAYLIST_GRADIENT,
                        children: (0, r.jsx)(m.a, {
                            pageId: c.AppScreen.PlaylistScreen,
                            pageIdForFrom: x.b.PLAYLIST,
                            mainObjectId: null == e ? void 0 : e.playlistUuid,
                            mainObjectType: c.DomainObjectType.Playlist,
                            children: (0, r.jsx)(rm, { ...e }),
                        }),
                    }),
                );
        },
        78101: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => r });
            let r = (0, a(53548).createContext)({ data: null, isEnabled: !1 });
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => g });
            var r = a(88800),
                i = a(65724),
                l = a(61013),
                n = a(53548);
            let s = (e) => {
                    let { style: t, forwardRef: a, context: i, ...l } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        s = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: a, ...l });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = a(16434),
                d = a.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: a, withFooter: l, withHeader: n, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: a,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var p = a(55482),
                _ = a(75151);
            let y = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: i,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, y] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && y(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < r; e++) a(e);
                                    }
                                }, l),
                            [l, i, t, a, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(_.sN, { ref: d, rangeChanged: g, totalCount: s, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: h,
                            totalRequests: f,
                            debounceDurationInMs: A,
                            initialItemCount: C,
                            minInitialItemCount: x = 20,
                            handleRef: P,
                            alwaysShowScrollbar: b = !1,
                            testId: E,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...k
                        } = e,
                        [I, L] = (0, n.useState)(!1),
                        N = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        D = (0, n.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : o,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : o,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, f, T]),
                        j = C ? Math.min(C, x) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: I || b, [d().root_notScrolling]: !I && !b }, t),
                        'data-test-id': E,
                        children: [
                            T && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(y, {
                                overscan: g,
                                components: D,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: N,
                                itemContent: p,
                                scrollerRef: P,
                                totalCount: h,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: S,
                                ...k,
                            }),
                            T && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
        79993: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { U: () => r }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(r || (r = {})));
        },
        80527: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => n, E9: () => c, KZ: () => o, LB: () => s, RA: () => i, kz: () => l, r_: () => d, w_: () => r });
            let r = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                i = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                l = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                n = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                s = 'adfox_173998931315812570',
                o = 'adfox_174043316511852570',
                c = 'adfox_176504636866914259',
                d = 'adfox_176053846725924259';
        },
        80715: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var r = a(88800),
                i = a(53548),
                l = a(87999),
                n = a(49784),
                s = a(7833),
                o = a(47934),
                c = a(41911);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        title: d,
                        description: u,
                        playlists: m,
                        containerClassName: p,
                        className: _,
                        headerClassName: y,
                        viewAllActionLink: g,
                        headingVariant: v,
                        shouldSendAnalyticsOnLoaded: h,
                        ...f
                    } = e;
                    return (
                        (0, n.W)({ enabled: !!h && !a }),
                        (0, r.jsx)(o.O, {
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            className: _,
                            headerClassName: y,
                            containerClassName: p,
                            ref: t,
                            title: d,
                            description: u,
                            viewAllActionLink: g,
                            headingVariant: v,
                            ...f,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, r.jsx)(
                                              s.B,
                                              {
                                                  objectType: l.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, r.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, i.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        80921: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
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
        82712: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            let r = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        86535: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var r = a(64284),
                i = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(r.U.RUP, '_').concat(r.U.MAIN, '-').concat(r.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(r.U.DISCOGRAPHY, '_').concat(r.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(r.U.ALBUMS, '_').concat(r.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(r.U.COMPILATIONS, '_').concat(r.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(r.U.ARTISTS, '_').concat(r.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(r.U.CLIPS, '_').concat(r.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(r.U.DISCOVERY, '_').concat(r.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(r.U.SEARCH, '_').concat(r.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR, '_').concat(r.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86540: (e, t, a) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: a = '', mainObjectType: l = i.DomainObjectType.NonApplicable, mainObjectId: n = '' } = t,
                    s = (0, r.makeMetaParams)(1),
                    o = { ...t, skeletonId: a, mainObjectType: l, mainObjectId: n, _meta: s };
                e.trackEvent('Tab.Opened', o);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: l = i.DomainObjectType.NonApplicable, mainObjectId: n = '' } = t,
                        s = (0, r.makeMetaParams)(1),
                        o = { ...t, skeletonId: a, mainObjectType: l, mainObjectId: n, _meta: s };
                    e.trackEvent('Tab.Loaded', o);
                }));
            let r = a(59203),
                i = a(87999);
        },
        88349: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            let r = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        88894: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var r = a(88800),
                i = a(65724),
                l = a(84961),
                n = a(53548),
                s = a(19994),
                o = a(72288),
                c = a(16472),
                d = a.n(c);
            let u = (0, l.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: l } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, o.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            c
                                ? (0, r.jsxs)('div', {
                                      className: d().controls,
                                      children: [
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                      ],
                                  })
                                : (0, r.jsxs)('div', {
                                      className: d().controls,
                                      children: [
                                          (0, r.jsx)(s.W, { className: d().desktopPlayButton, isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                      ],
                                  }),
                        [l, c],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(d().root, t),
                    children: [
                        (0, r.jsx)(s.W, { className: d().cover, radius: a, isActive: l }),
                        (0, r.jsxs)('div', {
                            className: d().content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: d().info,
                                    children: [
                                        (0, r.jsx)(s.W, { className: d().entityName, radius: 's', isActive: l }),
                                        (0, r.jsx)(s.W, { className: d().title, radius: 'xl', isActive: l }),
                                        (0, r.jsx)(s.W, { className: d().meta, radius: 's', isActive: l }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        89021: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        89068: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        91370: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        91908: (e) => {
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
        92847: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            var r = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        94058: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => x });
            var r = a(88800),
                i = a(65724),
                l = a(14231),
                n = a(84961),
                s = a(53548),
                o = a.t(s, 2),
                c = a(17392),
                d = a(88021),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {},
                p = {};
            ((() => {
                (Object.defineProperty(p, '__esModule', { value: !0 }), (p.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = m[t];
                    if (void 0 !== a) return a.exports;
                    var r = (m[t] = { exports: {} });
                    return (u[t](r, r.exports, e), r.exports);
                })(810);
                p.useForwardRef = function (t, a) {
                    let r = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(r.current) : (t.current = r.current));
                        }, [t]),
                        r
                    );
                };
            })(),
                p.__esModule);
            var _ = p.useForwardRef,
                y = a(32353),
                g = a(72288),
                v = a(31764),
                h = a(81192),
                f = a.n(h);
            let A = { [y.u.Desktop]: { start: 40, end: 20 }, [y.u.Mobile]: { start: 40, end: 40 } },
                C = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: n,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: p,
                            buttonVariant: h,
                            withSecondaryColor: C,
                        } = e,
                        {
                            settings: { isMobile: x },
                        } = (0, g.g)(),
                        P = _(n, null),
                        { shouldBackwardButtonBeDisabled: b, shouldForwardButtonBeDisabled: E, shouldHideControls: T } = (0, d.Y)(P),
                        [S, k] = (0, s.useMemo)(() => {
                            let e = (0, l.A)(A, o);
                            return [x ? e[y.u.Mobile].start : e[y.u.Desktop].start, x ? e[y.u.Mobile].end : e[y.u.Desktop].end];
                        }, [o, x]),
                        I = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = P.current) ? void 0 : t.children[e],
                                    { current: r } = P;
                                if (!r || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - r.scrollLeft < S) {
                                    r.scrollLeft = a.offsetLeft - S;
                                    return;
                                }
                                let i = r.scrollLeft + r.clientWidth - a.offsetLeft - a.offsetWidth;
                                i < k && (r.scrollLeft -= i - k);
                            },
                            [P, k, S],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                var t, r;
                                (I(e), null == (t = (r = a.props).onTabChange) || t.call(r, e));
                            },
                            [a, I],
                        ),
                        N = (0, s.cloneElement)(a, { forwardRef: P, className: (0, i.$)(f().wrapper, a.props.className, f().carousel, f().important), onTabChange: L });
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(
                            f().root,
                            {
                                [f().root_carouselBetweenArrows]: u,
                                [f().root_arrowLeft_hidden]: b,
                                [f().root_arrowRight_hidden]: E,
                                [f().root_arrow_hidden]: b && E && T,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, r.jsx)('div', { className: f().list, children: N }),
                            !x &&
                                (0, r.jsx)(v.X, {
                                    className: (0, i.$)(f().buttons, m),
                                    carouselRef: P,
                                    backwardControlClassName: f().control,
                                    forwardControlClassName: f().control,
                                    withSecondaryColor: C,
                                    buttonSize: p,
                                    buttonVariant: h,
                                }),
                        ],
                    });
                }),
                x = (0, s.forwardRef)((e, t) => (0, r.jsx)(C, { forwardRef: t, ...e }));
        },
        95850: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => p });
            var r = a(88800),
                i = a(84961),
                l = a(53548),
                n = a(58390),
                s = a(38147),
                o = a(49518),
                c = a(65523),
                d = a(72288),
                u = a(8655),
                m = a(69704);
            let p = (0, i.PA)((e) => {
                let { className: t, ownerId: a, containerId: i, params: p, onLoad: _, onRender: y, onNoAds: g, onError: v } = e,
                    { user: h } = (0, d.g)(),
                    f = (0, n.usePathname)(),
                    A = (0, n.useSearchParams)(),
                    { create: C, destroy: x, initialize: P } = (0, o.s)(),
                    { theme: b } = (0, m.W)(),
                    E = (0, c.U)(),
                    T = (0, l.useRef)(!0),
                    S = { ...p };
                return (
                    (S.puid1 = h.advertRole),
                    (0, l.useEffect)(() => {
                        C({
                            ownerId: a,
                            containerId: i,
                            params: S,
                            insertionCodeParams: { darkTheme: b === u.S.Dark, additionalClasses: b ? [b] : [] },
                            onClose: () => {
                                E.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((E.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
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
                                (E.log('[AdvertBanner] Render'), null == y || y());
                            },
                            onStub: () => {
                                (E.log('[AdvertBanner] Stub'), null == g || g());
                            },
                            onError: (e) => {
                                (E.log('[AdvertBanner] Error', { error: e }), null == v || v());
                            },
                        });
                    }, []),
                    (0, l.useEffect)(() => {
                        if (T.current) {
                            T.current = !1;
                            return;
                        }
                        (E.log('[AdvertBanner] Destroy'), x(i), E.log('[AdvertBanner] Initialize'), P(i));
                    }, [f, A, i, x, P, E]),
                    (0, r.jsx)('div', { id: i, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        96827: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylistAddition_playButtonCell__Ocnhq',
                controls: 'TrackPlaylistAddition_controls__S346Y',
                button: 'TrackPlaylistAddition_button__fsY9k',
            };
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        98158: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => p });
            var r = a(88800),
                i = a(29993),
                l = a(7123),
                n = a(79546),
                s = a(87528),
                o = a(29595),
                c = a(74965),
                d = a(9630),
                u = a(72288);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function p(e, t, a, p) {
                let _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: y } = (0, c.l)(),
                    { fullscreenPlayer: g } = (0, u.g)(),
                    v = (0, d.e)();
                return (0, i.c)(() => {
                    let i = e.reduce((e, t) => {
                        let a = _(t);
                        return (a && e.push({ type: l.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!i.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == v || v.injectLast({ entitiesData: i, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == v || v.injectNext({ entitiesData: i, sourceContextData: null != a ? a : void 0 });
                    }
                    let c = g.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO;
                    y((0, r.jsx)(s.l, { entityVariant: p.entityVariant, variant: t, entityTitle: p.entityTitle, coverUri: p.coverUri }), { containerId: c });
                });
            }
        },
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => l, UC: () => n, dM: () => s, uV: () => o });
            var r = a(89916),
                i = a(67990);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof r.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
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
    },
]);
