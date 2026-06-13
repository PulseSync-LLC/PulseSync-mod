(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4089],
    {
        61: (e) => {
            e.exports = {
                message: 'PlaylistNotification_message__nEykK',
                text: 'PlaylistNotification_text__kTfi1',
                title: 'PlaylistNotification_title__Q5IKF',
                link: 'PlaylistNotification_link__HezVx',
                playlistTitle: 'PlaylistNotification_playlistTitle__HweEg',
                image: 'PlaylistNotification_image__QvYVD',
            };
        },
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        421: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { o: () => s }),
                (function (e) {
                    (e.ARTIST = 'artist'), (e.COMPOSER = 'composer');
                })(s || (s = {}));
        },
        2047: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { L: () => s }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(s || (s = {}));
        },
        2355: (e, t, r) => {
            'use strict';
            r.d(t, { useOnModifyPlayQueue: () => u });
            var s = r(32290),
                n = r(91027),
                i = r(72676),
                a = r(49574),
                l = r(60214),
                o = r(9480),
                c = r(54950);
            function u(e, t, r) {
                let { notify: u } = (0, a.lkh)(),
                    { fullscreenPlayer: d } = (0, a.Pjs)(),
                    f = (0, a.eGp)(),
                    x = (0, c.b)(e);
                return (0, n.c)(() => {
                    if (!e) return;
                    let n = t === o.N.LAST || t === o.N.NEXT,
                        c = n ? r : void 0,
                        _ = n ? void 0 : r;
                    switch (t) {
                        case o.N.LAST:
                            null == f || f.injectLast({ entitiesData: [{ type: i.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: c });
                            break;
                        case o.N.NEXT:
                            null == f || f.injectNext({ entitiesData: [{ type: i.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: c });
                            break;
                        case o.N.REMOVE:
                            _ && (null == f || f.removeAndLoadEntities({ positions: _ }));
                            break;
                        case o.N.HIDE:
                            (null == _ ? void 0 : _.length) && (null == f || f.hide({ positions: _ }));
                    }
                    let p = d.modal.isOpened ? a.uQT.FULLSCREEN_INFO : a.uQT.INFO;
                    u((0, s.jsx)(l.NotificationPlayQueue, { entityVariant: x, variant: t, entityTitle: e.title, coverUri: e.coverUri }), { containerId: p });
                });
            }
        },
        3623: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { R: () => s }),
                (function (e) {
                    (e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio');
                })(s || (s = {}));
        },
        5771: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => u });
            var s,
                n = r(97020),
                i = r(55178),
                a = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        r.r(t), r.d(t, { clsx: () => s, default: () => n });
                        let n = s;
                    },
                    7122: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    123: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    4481: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
                            root: 'kAYDswAvA1AJoAzRV4rY',
                            root_disabled: 'vkAwJpSGxne16yE82eHh',
                            root_size_xxxs: 'i690pcQGptnPbYcI77fh',
                            root_size_xxs: 'K2cOFeQVOaRzGAOv6gWL',
                            input: 'GRggPQ1rZgvcyCxPPgvw',
                            root_variant_secondary: 'o9HhnHzukPG4e94AXBNT',
                            textShadowing: 'ceR_9q_roxCLdCPR87Qw',
                            actions: 'XsBFSZAjR3ZRN8oqetex',
                        };
                    },
                    2094: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
                            searchIcon: 'LoJPNHBhYAkQh7hBQYIP',
                            searchIcon_disabled: 'U1fHaoo5ZnRY0W6P1cXz',
                            searchContainer: 'YBgyycmmzZchX_EgLcrA',
                            searchInput: 'QYgjNkDJ7XdqE28ipieh',
                            reset: 'sGZaYJkCxVIV1wkix81s',
                            reset_show: 'A0wDRuyRnXuI3ja3zx0E',
                        };
                    },
                    4490: (e, t, r) => {
                        r.r(t), r.d(t, { DOWN: () => l, LEFT: () => n, RIGHT: () => i, UP: () => a, useSwipeable: () => x });
                        var s = r(810);
                        let n = 'Left',
                            i = 'Right',
                            a = 'Up',
                            l = 'Down',
                            o = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            u = 'mousemove',
                            d = 'mouseup';
                        function f(e, t) {
                            if (0 === t) return e;
                            let r = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(r) + e[1] * Math.sin(r), e[1] * Math.cos(r) - e[0] * Math.sin(r)];
                        }
                        function x(e) {
                            var t, r, x;
                            let _,
                                { trackMouse: p } = e,
                                m = s.useRef(Object.assign({}, c)),
                                v = s.useRef(Object.assign({}, o)),
                                g = s.useRef(Object.assign({}, v.current));
                            for (_ in ((g.current = Object.assign({}, v.current)), (v.current = Object.assign(Object.assign({}, o), e)), o))
                                void 0 === v.current[_] && (v.current[_] = o[_]);
                            let [y, k] = s.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = 'touches' in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !r && (document.addEventListener(u, s), document.addEventListener(d, _));
                                                        let { clientX: i, clientY: a } = r ? t.touches[0] : t,
                                                            l = f([i, a], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            s = (t) => {
                                                e((e, r) => {
                                                    var s, c, u, d;
                                                    let x = 'touches' in t;
                                                    if (x && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > r.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: _, clientY: p } = x ? t.touches[0] : t,
                                                        [m, v] = f([_, p], r.rotationAngle),
                                                        g = m - e.xy[0],
                                                        y = v - e.xy[1],
                                                        k = Math.abs(g),
                                                        b = Math.abs(y),
                                                        E = (t.timeStamp || 0) - e.start,
                                                        h = Math.sqrt(k * k + b * b) / (E || 1),
                                                        O = [g / (E || 1), y / (E || 1)],
                                                        w = ((s = k), (c = b), (u = g), (d = y), s > c ? (u > 0 ? i : n) : d > 0 ? l : a),
                                                        R = 'number' == typeof r.delta ? r.delta : r.delta[w.toLowerCase()] || o.delta;
                                                    if (k < R && b < R && !e.swiping) return e;
                                                    let j = {
                                                        absX: k,
                                                        absY: b,
                                                        deltaX: g,
                                                        deltaY: y,
                                                        dir: w,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: h,
                                                        vxvy: O,
                                                    };
                                                    j.first && r.onSwipeStart && r.onSwipeStart(j), r.onSwiping && r.onSwiping(j);
                                                    let A = !1;
                                                    return (
                                                        (r.onSwiping || r.onSwiped || r['onSwiped'.concat(w)]) && (A = !0),
                                                        A && r.preventScrollOnSwipe && r.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: j, swiping: !0 })
                                                    );
                                                });
                                            },
                                            x = (t) => {
                                                e((e, r) => {
                                                    let s;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < r.swipeDuration) {
                                                            (s = Object.assign(Object.assign({}, e.eventData), { event: t })), r.onSwiped && r.onSwiped(s);
                                                            let n = r['onSwiped'.concat(s.dir)];
                                                            n && n(s);
                                                        }
                                                    } else r.onTap && r.onTap({ event: t });
                                                    return (
                                                        r.onTouchEndOrOnMouseUp && r.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: s })
                                                    );
                                                });
                                            },
                                            _ = (e) => {
                                                document.removeEventListener(u, s), document.removeEventListener(d, _), x(e);
                                            },
                                            p = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, o.touchEventOptions), t.touchEventOptions),
                                                        a = [
                                                            ['touchstart', r, i],
                                                            ['touchmove', s, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', x, i],
                                                        ];
                                                    a.forEach((t) => {
                                                        let [r, s, n] = t;
                                                        return e.addEventListener(r, s, n);
                                                    }),
                                                        (n = () =>
                                                            a.forEach((t) => {
                                                                let [r, s] = t;
                                                                return e.removeEventListener(r, s);
                                                            }));
                                                }
                                                return n;
                                            },
                                            m = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, r) => {
                                                            if (e.el === t) return e;
                                                            let s = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (s.cleanUpTouch = void 0)),
                                                                r.trackTouch && t && (s.cleanUpTouch = p(t, r)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), s)
                                                            );
                                                        });
                                                },
                                            };
                                        return t.trackMouse && (m.onMouseDown = r), [m, p];
                                    })((e) => (m.current = e(m.current, v.current)), { trackMouse: p }),
                                [p],
                            );
                            return (
                                (t = m.current),
                                (r = v.current),
                                (x = g.current),
                                (m.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !== x.preventScrollOnSwipe || r.touchEventOptions.passive !== x.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: k(t.el, r) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: k(t.el, r) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                y
                            );
                        }
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    8442: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'addToPlaylist_xxs', xlinkHref: '/icons/sprite.svg#addToPlaylist_xxs' }),
                            ]);
                        });
                    },
                    6644: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_l', xlinkHref: '/icons/sprite.svg#add_l' }),
                            ]);
                        });
                    },
                    7319: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_xxs', xlinkHref: '/icons/sprite.svg#add_xxs' }),
                            ]);
                        });
                    },
                    9351: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_s', xlinkHref: '/icons/sprite.svg#adult_s' }),
                            ]);
                        });
                    },
                    7171: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xs', xlinkHref: '/icons/sprite.svg#adult_xs' }),
                            ]);
                        });
                    },
                    2586: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xxs', xlinkHref: '/icons/sprite.svg#adult_xxs' }),
                            ]);
                        });
                    },
                    4656: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xxxs', xlinkHref: '/icons/sprite.svg#adult_xxxs' }),
                            ]);
                        });
                    },
                    996: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_l', xlinkHref: '/icons/sprite.svg#album_l' }),
                            ]);
                        });
                    },
                    2092: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_s', xlinkHref: '/icons/sprite.svg#album_s' }),
                            ]);
                        });
                    },
                    6304: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xl', xlinkHref: '/icons/sprite.svg#album_xl' }),
                            ]);
                        });
                    },
                    9030: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xs', xlinkHref: '/icons/sprite.svg#album_xs' }),
                            ]);
                        });
                    },
                    5822: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xxs', xlinkHref: '/icons/sprite.svg#album_xxs' }),
                            ]);
                        });
                    },
                    9422: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xs', xlinkHref: '/icons/sprite.svg#arrowDown_xs' }),
                            ]);
                        });
                    },
                    5272: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxs' }),
                            ]);
                        });
                    },
                    1954: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xxxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxxs' }),
                            ]);
                        });
                    },
                    1491: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowLeft_xs', xlinkHref: '/icons/sprite.svg#arrowLeft_xs' }),
                            ]);
                        });
                    },
                    4860: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowLeft_xxs', xlinkHref: '/icons/sprite.svg#arrowLeft_xxs' }),
                            ]);
                        });
                    },
                    2337: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xs', xlinkHref: '/icons/sprite.svg#arrowRight_xs' }),
                            ]);
                        });
                    },
                    8711: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxs' }),
                            ]);
                        });
                    },
                    8170: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xxxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxxs' }),
                            ]);
                        });
                    },
                    8109: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'artist_xxs', xlinkHref: '/icons/sprite.svg#artist_xxs' }),
                            ]);
                        });
                    },
                    7341: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'attention_xxl', xlinkHref: '/icons/sprite.svg#attention_xxl' }),
                            ]);
                        });
                    },
                    2435: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'attention_xxxl', xlinkHref: '/icons/sprite.svg#attention_xxxl' }),
                            ]);
                        });
                    },
                    3918: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'bandlink', xlinkHref: '/icons/sprite.svg#bandlink' }),
                            ]);
                        });
                    },
                    4904: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'bucket_xxs', xlinkHref: '/icons/sprite.svg#bucket_xxs' }),
                            ]);
                        });
                    },
                    9202: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'cast_xs', xlinkHref: '/icons/sprite.svg#cast_xs' }),
                            ]);
                        });
                    },
                    130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chain_xs', xlinkHref: '/icons/sprite.svg#chain_xs' }),
                            ]);
                        });
                    },
                    5971: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chain_xxs', xlinkHref: '/icons/sprite.svg#chain_xxs' }),
                            ]);
                        });
                    },
                    3331: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartDown_xxs', xlinkHref: '/icons/sprite.svg#chartDown_xxs' }),
                            ]);
                        });
                    },
                    9783: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartNew_xxs', xlinkHref: '/icons/sprite.svg#chartNew_xxs' }),
                            ]);
                        });
                    },
                    8184: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartSame_xxs', xlinkHref: '/icons/sprite.svg#chartSame_xxs' }),
                            ]);
                        });
                    },
                    4926: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartUp_xxs', xlinkHref: '/icons/sprite.svg#chartUp_xxs' }),
                            ]);
                        });
                    },
                    5861: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xs', xlinkHref: '/icons/sprite.svg#check_xs' }),
                            ]);
                        });
                    },
                    9505: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxl', xlinkHref: '/icons/sprite.svg#check_xxl' }),
                            ]);
                        });
                    },
                    3176: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxs', xlinkHref: '/icons/sprite.svg#check_xxs' }),
                            ]);
                        });
                    },
                    5565: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxxs', xlinkHref: '/icons/sprite.svg#check_xxxs' }),
                            ]);
                        });
                    },
                    9040: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'clip_xl', xlinkHref: '/icons/sprite.svg#clip_xl' }),
                            ]);
                        });
                    },
                    4789: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'clip_xxs', xlinkHref: '/icons/sprite.svg#clip_xxs' }),
                            ]);
                        });
                    },
                    4170: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_filled_xs', xlinkHref: '/icons/sprite.svg#close_filled_xs' }),
                            ]);
                        });
                    },
                    7923: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xs', xlinkHref: '/icons/sprite.svg#close_xs' }),
                            ]);
                        });
                    },
                    8151: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xxs', xlinkHref: '/icons/sprite.svg#close_xxs' }),
                            ]);
                        });
                    },
                    8127: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xxxs', xlinkHref: '/icons/sprite.svg#close_xxxs' }),
                            ]);
                        });
                    },
                    8690: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'code_xxs', xlinkHref: '/icons/sprite.svg#code_xxs' }),
                            ]);
                        });
                    },
                    3076: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'collections_m', xlinkHref: '/icons/sprite.svg#collections_m' }),
                            ]);
                        });
                    },
                    2495: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'collections_selected_m', xlinkHref: '/icons/sprite.svg#collections_selected_m' }),
                            ]);
                        });
                    },
                    1524: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'crown_xxs', xlinkHref: '/icons/sprite.svg#crown_xxs' }),
                            ]);
                        });
                    },
                    1162: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_s', xlinkHref: '/icons/sprite.svg#dislike_s' }),
                            ]);
                        });
                    },
                    3654: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_xs', xlinkHref: '/icons/sprite.svg#dislike_xs' }),
                            ]);
                        });
                    },
                    2361: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_xxs', xlinkHref: '/icons/sprite.svg#dislike_xxs' }),
                            ]);
                        });
                    },
                    6837: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_s', xlinkHref: '/icons/sprite.svg#disliked_s' }),
                            ]);
                        });
                    },
                    6507: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_xs', xlinkHref: '/icons/sprite.svg#disliked_xs' }),
                            ]);
                        });
                    },
                    3972: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_xxs', xlinkHref: '/icons/sprite.svg#disliked_xxs' }),
                            ]);
                        });
                    },
                    8993: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'donation_xxxs', xlinkHref: '/icons/sprite.svg#donation_xxxs' }),
                            ]);
                        });
                    },
                    7031: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'download_l', xlinkHref: '/icons/sprite.svg#download_l' }),
                            ]);
                        });
                    },
                    9330: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'download_xxs', xlinkHref: '/icons/sprite.svg#download_xxs' }),
                            ]);
                        });
                    },
                    7346: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'downloaded_xxs', xlinkHref: '/icons/sprite.svg#downloaded_xxs' }),
                            ]);
                        });
                    },
                    2604: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dragDots_xxs', xlinkHref: '/icons/sprite.svg#dragDots_xxs' }),
                            ]);
                        });
                    },
                    6894: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'edit_xxs', xlinkHref: '/icons/sprite.svg#edit_xxs' }),
                            ]);
                        });
                    },
                    2024: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_s', xlinkHref: '/icons/sprite.svg#exclamation_s' }),
                            ]);
                        });
                    },
                    3193: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xs', xlinkHref: '/icons/sprite.svg#exclamation_xs' }),
                            ]);
                        });
                    },
                    6391: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xxs', xlinkHref: '/icons/sprite.svg#exclamation_xxs' }),
                            ]);
                        });
                    },
                    2933: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xxxs', xlinkHref: '/icons/sprite.svg#exclamation_xxxs' }),
                            ]);
                        });
                    },
                    776: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_s', xlinkHref: '/icons/sprite.svg#explicit_s' }),
                            ]);
                        });
                    },
                    30: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xs', xlinkHref: '/icons/sprite.svg#explicit_xs' }),
                            ]);
                        });
                    },
                    9369: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xxs', xlinkHref: '/icons/sprite.svg#explicit_xxs' }),
                            ]);
                        });
                    },
                    1334: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xxxs', xlinkHref: '/icons/sprite.svg#explicit_xxxs' }),
                            ]);
                        });
                    },
                    226: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'eye_crossed_xxs', xlinkHref: '/icons/sprite.svg#eye_crossed_xxs' }),
                            ]);
                        });
                    },
                    7802: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'filter_xs', xlinkHref: '/icons/sprite.svg#filter_xs' }),
                            ]);
                        });
                    },
                    8130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'filter_xxs', xlinkHref: '/icons/sprite.svg#filter_xxs' }),
                            ]);
                        });
                    },
                    3738: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'fullscreen_xs', xlinkHref: '/icons/sprite.svg#fullscreen_xs' }),
                            ]);
                        });
                    },
                    1922: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'gift_xxs', xlinkHref: '/icons/sprite.svg#gift_xxs' }),
                            ]);
                        });
                    },
                    2161: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'googlePlay', xlinkHref: '/icons/sprite.svg#googlePlay' }),
                            ]);
                        });
                    },
                    9509: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'history_m', xlinkHref: '/icons/sprite.svg#history_m' }),
                            ]);
                        });
                    },
                    8987: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'home_m', xlinkHref: '/icons/sprite.svg#home_m' }),
                            ]);
                        });
                    },
                    190: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'home_selected_m', xlinkHref: '/icons/sprite.svg#home_selected_m' }),
                            ]);
                        });
                    },
                    5304: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'huaweiAppGallery', xlinkHref: '/icons/sprite.svg#huaweiAppGallery' }),
                            ]);
                        });
                    },
                    8196: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'infinity_xs', xlinkHref: '/icons/sprite.svg#infinity_xs' }),
                            ]);
                        });
                    },
                    5270: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'info_xxs', xlinkHref: '/icons/sprite.svg#info_xxs' }),
                            ]);
                        });
                    },
                    843: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kids_m', xlinkHref: '/icons/sprite.svg#kids_m' }),
                            ]);
                        });
                    },
                    5122: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kids_selected_m', xlinkHref: '/icons/sprite.svg#kids_selected_m' }),
                            ]);
                        });
                    },
                    2646: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kinopoiskEn', xlinkHref: '/icons/sprite.svg#kinopoiskEn' }),
                            ]);
                        });
                    },
                    7500: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kinopoiskRu', xlinkHref: '/icons/sprite.svg#kinopoiskRu' }),
                            ]);
                        });
                    },
                    3560: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lightning_xxs', xlinkHref: '/icons/sprite.svg#lightning_xxs' }),
                            ]);
                        });
                    },
                    9838: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likeVariant_xxs', xlinkHref: '/icons/sprite.svg#likeVariant_xxs' }),
                            ]);
                        });
                    },
                    4793: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_l', xlinkHref: '/icons/sprite.svg#like_l' }),
                            ]);
                        });
                    },
                    7405: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_m', xlinkHref: '/icons/sprite.svg#like_m' }),
                            ]);
                        });
                    },
                    2340: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_xs', xlinkHref: '/icons/sprite.svg#like_xs' }),
                            ]);
                        });
                    },
                    7513: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_xxs', xlinkHref: '/icons/sprite.svg#like_xxs' }),
                            ]);
                        });
                    },
                    5720: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likedVariant_s', xlinkHref: '/icons/sprite.svg#likedVariant_s' }),
                            ]);
                        });
                    },
                    7399: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likedVariant_xxs', xlinkHref: '/icons/sprite.svg#likedVariant_xxs' }),
                            ]);
                        });
                    },
                    820: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_m', xlinkHref: '/icons/sprite.svg#liked_m' }),
                            ]);
                        });
                    },
                    2125: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_xs', xlinkHref: '/icons/sprite.svg#liked_xs' }),
                            ]);
                        });
                    },
                    9104: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_xxs', xlinkHref: '/icons/sprite.svg#liked_xxs' }),
                            ]);
                        });
                    },
                    9056: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'link_rounded_xxs', xlinkHref: '/icons/sprite.svg#link_rounded_xxs' }),
                            ]);
                        });
                    },
                    5849: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'link_xxs', xlinkHref: '/icons/sprite.svg#link_xxs' }),
                            ]);
                        });
                    },
                    1426: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'listen_xxxs', xlinkHref: '/icons/sprite.svg#listen_xxxs' }),
                            ]);
                        });
                    },
                    4014: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liteVersion_xs', xlinkHref: '/icons/sprite.svg#liteVersion_xs' }),
                            ]);
                        });
                    },
                    5443: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_m', xlinkHref: '/icons/sprite.svg#lock_m' }),
                            ]);
                        });
                    },
                    896: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_xs', xlinkHref: '/icons/sprite.svg#lock_xs' }),
                            ]);
                        });
                    },
                    3613: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_xxs', xlinkHref: '/icons/sprite.svg#lock_xxs' }),
                            ]);
                        });
                    },
                    9372: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lyrics_xxs', xlinkHref: '/icons/sprite.svg#lyrics_xxs' }),
                            ]);
                        });
                    },
                    6104: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'macos', xlinkHref: '/icons/sprite.svg#macos' }),
                            ]);
                        });
                    },
                    3709: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'macos_xxs', xlinkHref: '/icons/sprite.svg#macos_xxs' }),
                            ]);
                        });
                    },
                    3685: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'menuArrow_xxs', xlinkHref: '/icons/sprite.svg#menuArrow_xxs' }),
                            ]);
                        });
                    },
                    8782: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_m', xlinkHref: '/icons/sprite.svg#more_m' }),
                            ]);
                        });
                    },
                    1829: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_xs', xlinkHref: '/icons/sprite.svg#more_xs' }),
                            ]);
                        });
                    },
                    3302: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_xxs', xlinkHref: '/icons/sprite.svg#more_xxs' }),
                            ]);
                        });
                    },
                    2502: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogo', xlinkHref: '/icons/sprite.svg#musicLogo' }),
                            ]);
                        });
                    },
                    1754: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoCenterEn', xlinkHref: '/icons/sprite.svg#musicLogoCenterEn' }),
                            ]);
                        });
                    },
                    6615: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoCenterRu', xlinkHref: '/icons/sprite.svg#musicLogoCenterRu' }),
                            ]);
                        });
                    },
                    7942: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoLeftEn', xlinkHref: '/icons/sprite.svg#musicLogoLeftEn' }),
                            ]);
                        });
                    },
                    1498: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoLeftRu', xlinkHref: '/icons/sprite.svg#musicLogoLeftRu' }),
                            ]);
                        });
                    },
                    7124: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_selected_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_selected_xs' }),
                            ]);
                        });
                    },
                    1893: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
                            ]);
                        });
                    },
                    205: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationConcerts_selected_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_selected_xs' }),
                            ]);
                        });
                    },
                    1563: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationConcerts_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_xs' }),
                            ]);
                        });
                    },
                    5659: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', {
                                    key: 'navigationForYouAndTrends_selected_xs',
                                    xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_selected_xs',
                                }),
                            ]);
                        });
                    },
                    1578: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
                            ]);
                        });
                    },
                    6087: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationKids_selected_xs', xlinkHref: '/icons/sprite.svg#navigationKids_selected_xs' }),
                            ]);
                        });
                    },
                    9348: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationKids_xs', xlinkHref: '/icons/sprite.svg#navigationKids_xs' }),
                            ]);
                        });
                    },
                    8438: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMyVibeNDA_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibeNDA_xs' }),
                            ]);
                        });
                    },
                    965: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMyVibe_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibe_xs' }),
                            ]);
                        });
                    },
                    7438: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationNonMusic_selected_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_selected_xs' }),
                            ]);
                        });
                    },
                    3877: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationNonMusic_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_xs' }),
                            ]);
                        });
                    },
                    9968: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationPlus_xs', xlinkHref: '/icons/sprite.svg#navigationPlus_xs' }),
                            ]);
                        });
                    },
                    3778: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationSearch_xs', xlinkHref: '/icons/sprite.svg#navigationSearch_xs' }),
                            ]);
                        });
                    },
                    1084: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xs', xlinkHref: '/icons/sprite.svg#next_xs' }),
                            ]);
                        });
                    },
                    4483: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xxl', xlinkHref: '/icons/sprite.svg#next_xxl' }),
                            ]);
                        });
                    },
                    811: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xxs', xlinkHref: '/icons/sprite.svg#next_xxs' }),
                            ]);
                        });
                    },
                    7252: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'non_music_m', xlinkHref: '/icons/sprite.svg#non_music_m' }),
                            ]);
                        });
                    },
                    3013: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'non_music_selected_m', xlinkHref: '/icons/sprite.svg#non_music_selected_m' }),
                            ]);
                        });
                    },
                    7869: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_l', xlinkHref: '/icons/sprite.svg#note_l' }),
                            ]);
                        });
                    },
                    5919: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_m', xlinkHref: '/icons/sprite.svg#note_m' }),
                            ]);
                        });
                    },
                    2774: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_s', xlinkHref: '/icons/sprite.svg#note_s' }),
                            ]);
                        });
                    },
                    4298: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xl', xlinkHref: '/icons/sprite.svg#note_xl' }),
                            ]);
                        });
                    },
                    4254: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xs', xlinkHref: '/icons/sprite.svg#note_xs' }),
                            ]);
                        });
                    },
                    8499: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'offline_xxl', xlinkHref: '/icons/sprite.svg#offline_xxl' }),
                            ]);
                        });
                    },
                    4947: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause', xlinkHref: '/icons/sprite.svg#pause' }),
                            ]);
                        });
                    },
                    4997: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pauseVibe_s', xlinkHref: '/icons/sprite.svg#pauseVibe_s' }),
                            ]);
                        });
                    },
                    7076: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_l', xlinkHref: '/icons/sprite.svg#pause_filled_l' }),
                            ]);
                        });
                    },
                    3792: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_m', xlinkHref: '/icons/sprite.svg#pause_filled_m' }),
                            ]);
                        });
                    },
                    5132: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xl', xlinkHref: '/icons/sprite.svg#pause_filled_xl' }),
                            ]);
                        });
                    },
                    8131: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xs', xlinkHref: '/icons/sprite.svg#pause_filled_xs' }),
                            ]);
                        });
                    },
                    705: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xxl', xlinkHref: '/icons/sprite.svg#pause_filled_xxl' }),
                            ]);
                        });
                    },
                    5346: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_m', xlinkHref: '/icons/sprite.svg#pause_m' }),
                            ]);
                        });
                    },
                    792: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_xs', xlinkHref: '/icons/sprite.svg#pause_xs' }),
                            ]);
                        });
                    },
                    6122: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_xxs', xlinkHref: '/icons/sprite.svg#pause_xxs' }),
                            ]);
                        });
                    },
                    5386: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pencil_xxs', xlinkHref: '/icons/sprite.svg#pencil_xxs' }),
                            ]);
                        });
                    },
                    3146: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_s', xlinkHref: '/icons/sprite.svg#picture_s' }),
                            ]);
                        });
                    },
                    8868: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_xl', xlinkHref: '/icons/sprite.svg#picture_xl' }),
                            ]);
                        });
                    },
                    1125: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_xs', xlinkHref: '/icons/sprite.svg#picture_xs' }),
                            ]);
                        });
                    },
                    976: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_filled_xs', xlinkHref: '/icons/sprite.svg#pin_filled_xs' }),
                            ]);
                        });
                    },
                    9434: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_filled_xxs', xlinkHref: '/icons/sprite.svg#pin_filled_xxs' }),
                            ]);
                        });
                    },
                    9288: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_xs', xlinkHref: '/icons/sprite.svg#pin_xs' }),
                            ]);
                        });
                    },
                    3201: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_xxs', xlinkHref: '/icons/sprite.svg#pin_xxs' }),
                            ]);
                        });
                    },
                    7471: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play', xlinkHref: '/icons/sprite.svg#play' }),
                            ]);
                        });
                    },
                    8112: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playLast_xxs', xlinkHref: '/icons/sprite.svg#playLast_xxs' }),
                            ]);
                        });
                    },
                    8044: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playNext_xxs', xlinkHref: '/icons/sprite.svg#playNext_xxs' }),
                            ]);
                        });
                    },
                    8303: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_m', xlinkHref: '/icons/sprite.svg#playQueue_m' }),
                            ]);
                        });
                    },
                    9863: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_xs', xlinkHref: '/icons/sprite.svg#playQueue_xs' }),
                            ]);
                        });
                    },
                    1249: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_xxs', xlinkHref: '/icons/sprite.svg#playQueue_xxs' }),
                            ]);
                        });
                    },
                    2084: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playVibe_s', xlinkHref: '/icons/sprite.svg#playVibe_s' }),
                            ]);
                        });
                    },
                    8582: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_l', xlinkHref: '/icons/sprite.svg#play_filled_l' }),
                            ]);
                        });
                    },
                    4777: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_m', xlinkHref: '/icons/sprite.svg#play_filled_m' }),
                            ]);
                        });
                    },
                    8779: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xl', xlinkHref: '/icons/sprite.svg#play_filled_xl' }),
                            ]);
                        });
                    },
                    1945: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xs', xlinkHref: '/icons/sprite.svg#play_filled_xs' }),
                            ]);
                        });
                    },
                    7402: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xxl', xlinkHref: '/icons/sprite.svg#play_filled_xxl' }),
                            ]);
                        });
                    },
                    1351: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_m', xlinkHref: '/icons/sprite.svg#play_m' }),
                            ]);
                        });
                    },
                    1874: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xs', xlinkHref: '/icons/sprite.svg#play_xs' }),
                            ]);
                        });
                    },
                    2026: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xxs', xlinkHref: '/icons/sprite.svg#play_xxs' }),
                            ]);
                        });
                    },
                    5378: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xxxs', xlinkHref: '/icons/sprite.svg#play_xxxs' }),
                            ]);
                        });
                    },
                    3751: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_s', xlinkHref: '/icons/sprite.svg#playlist_s' }),
                            ]);
                        });
                    },
                    8503: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_xl', xlinkHref: '/icons/sprite.svg#playlist_xl' }),
                            ]);
                        });
                    },
                    1580: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_xs', xlinkHref: '/icons/sprite.svg#playlist_xs' }),
                            ]);
                        });
                    },
                    8861: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plus', xlinkHref: '/icons/sprite.svg#plus' }),
                            ]);
                        });
                    },
                    6809: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusBadge', xlinkHref: '/icons/sprite.svg#plusBadge' }),
                            ]);
                        });
                    },
                    5266: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusColor', xlinkHref: '/icons/sprite.svg#plusColor' }),
                            ]);
                        });
                    },
                    1179: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusOutlined', xlinkHref: '/icons/sprite.svg#plusOutlined' }),
                            ]);
                        });
                    },
                    735: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusOutlined_m', xlinkHref: '/icons/sprite.svg#plusOutlined_m' }),
                            ]);
                        });
                    },
                    2754: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'podcasts_xxs', xlinkHref: '/icons/sprite.svg#podcasts_xxs' }),
                            ]);
                        });
                    },
                    4091: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xs', xlinkHref: '/icons/sprite.svg#previous_xs' }),
                            ]);
                        });
                    },
                    1427: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xxl', xlinkHref: '/icons/sprite.svg#previous_xxl' }),
                            ]);
                        });
                    },
                    5251: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xxs', xlinkHref: '/icons/sprite.svg#previous_xxs' }),
                            ]);
                        });
                    },
                    895: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_one_xs', xlinkHref: '/icons/sprite.svg#repeat_one_xs' }),
                            ]);
                        });
                    },
                    5632: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_one_xxs', xlinkHref: '/icons/sprite.svg#repeat_one_xxs' }),
                            ]);
                        });
                    },
                    8090: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_xs', xlinkHref: '/icons/sprite.svg#repeat_xs' }),
                            ]);
                        });
                    },
                    9370: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_xxs', xlinkHref: '/icons/sprite.svg#repeat_xxs' }),
                            ]);
                        });
                    },
                    1001: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'reset_xxs', xlinkHref: '/icons/sprite.svg#reset_xxs' }),
                            ]);
                        });
                    },
                    6579: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'reset_xxxs', xlinkHref: '/icons/sprite.svg#reset_xxxs' }),
                            ]);
                        });
                    },
                    5910: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindBackwards_xs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xs' }),
                            ]);
                        });
                    },
                    893: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindBackwards_xxs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xxs' }),
                            ]);
                        });
                    },
                    4892: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindForward_xs', xlinkHref: '/icons/sprite.svg#rewindForward_xs' }),
                            ]);
                        });
                    },
                    6331: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindForward_xxs', xlinkHref: '/icons/sprite.svg#rewindForward_xxs' }),
                            ]);
                        });
                    },
                    2176: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_m', xlinkHref: '/icons/sprite.svg#ruble_m' }),
                            ]);
                        });
                    },
                    9876: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_xxs', xlinkHref: '/icons/sprite.svg#ruble_xxs' }),
                            ]);
                        });
                    },
                    3935: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_xxxs', xlinkHref: '/icons/sprite.svg#ruble_xxxs' }),
                            ]);
                        });
                    },
                    7643: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_l', xlinkHref: '/icons/sprite.svg#search_l' }),
                            ]);
                        });
                    },
                    8235: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_m', xlinkHref: '/icons/sprite.svg#search_m' }),
                            ]);
                        });
                    },
                    8915: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_selected_m', xlinkHref: '/icons/sprite.svg#search_selected_m' }),
                            ]);
                        });
                    },
                    3366: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_xs', xlinkHref: '/icons/sprite.svg#search_xs' }),
                            ]);
                        });
                    },
                    7934: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_xxl', xlinkHref: '/icons/sprite.svg#search_xxl' }),
                            ]);
                        });
                    },
                    5034: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settings_xs', xlinkHref: '/icons/sprite.svg#settings_xs' }),
                            ]);
                        });
                    },
                    1758: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settings_xxs', xlinkHref: '/icons/sprite.svg#settings_xxs' }),
                            ]);
                        });
                    },
                    5271: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'share_m', xlinkHref: '/icons/sprite.svg#share_m' }),
                            ]);
                        });
                    },
                    7196: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'share_xxs', xlinkHref: '/icons/sprite.svg#share_xxs' }),
                            ]);
                        });
                    },
                    5792: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'shuffle_xs', xlinkHref: '/icons/sprite.svg#shuffle_xs' }),
                            ]);
                        });
                    },
                    7951: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'shuffle_xxs', xlinkHref: '/icons/sprite.svg#shuffle_xxs' }),
                            ]);
                        });
                    },
                    9545: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'site_xs', xlinkHref: '/icons/sprite.svg#site_xs' }),
                            ]);
                        });
                    },
                    2037: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_m' }),
                            ]);
                        });
                    },
                    3362: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_xs' }),
                            ]);
                        });
                    },
                    9846: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_l', xlinkHref: '/icons/sprite.svg#speed_1_25x_l' }),
                            ]);
                        });
                    },
                    5197: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_m' }),
                            ]);
                        });
                    },
                    1079: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_xs' }),
                            ]);
                        });
                    },
                    6275: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_l', xlinkHref: '/icons/sprite.svg#speed_1_5x_l' }),
                            ]);
                        });
                    },
                    7026: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_m' }),
                            ]);
                        });
                    },
                    8994: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_xs' }),
                            ]);
                        });
                    },
                    3702: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_l', xlinkHref: '/icons/sprite.svg#speed_1_75x_l' }),
                            ]);
                        });
                    },
                    8664: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1x_centered_m' }),
                            ]);
                        });
                    },
                    51: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1x_centered_xs' }),
                            ]);
                        });
                    },
                    8550: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_l', xlinkHref: '/icons/sprite.svg#speed_1x_l' }),
                            ]);
                        });
                    },
                    8619: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_centered_m', xlinkHref: '/icons/sprite.svg#speed_2x_centered_m' }),
                            ]);
                        });
                    },
                    5218: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_2x_centered_xs' }),
                            ]);
                        });
                    },
                    857: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_l', xlinkHref: '/icons/sprite.svg#speed_2x_l' }),
                            ]);
                        });
                    },
                    6130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_m', xlinkHref: '/icons/sprite.svg#syncLyrics_m' }),
                            ]);
                        });
                    },
                    3049: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_xs', xlinkHref: '/icons/sprite.svg#syncLyrics_xs' }),
                            ]);
                        });
                    },
                    126: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_xxs', xlinkHref: '/icons/sprite.svg#syncLyrics_xxs' }),
                            ]);
                        });
                    },
                    619: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbDown_xs', xlinkHref: '/icons/sprite.svg#thumbDown_xs' }),
                            ]);
                        });
                    },
                    2505: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbUp_xs', xlinkHref: '/icons/sprite.svg#thumbUp_xs' }),
                            ]);
                        });
                    },
                    6210: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ticket_m', xlinkHref: '/icons/sprite.svg#ticket_m' }),
                            ]);
                        });
                    },
                    5596: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ticket_selected_m', xlinkHref: '/icons/sprite.svg#ticket_selected_m' }),
                            ]);
                        });
                    },
                    380: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'trailer_xs', xlinkHref: '/icons/sprite.svg#trailer_xs' }),
                            ]);
                        });
                    },
                    3112: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'trailer_xxs', xlinkHref: '/icons/sprite.svg#trailer_xxs' }),
                            ]);
                        });
                    },
                    1045: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unavailable_xl', xlinkHref: '/icons/sprite.svg#unavailable_xl' }),
                            ]);
                        });
                    },
                    2834: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unavailable_xs', xlinkHref: '/icons/sprite.svg#unavailable_xs' }),
                            ]);
                        });
                    },
                    8819: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unpin_xxs', xlinkHref: '/icons/sprite.svg#unpin_xxs' }),
                            ]);
                        });
                    },
                    8772: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'upload_xxs', xlinkHref: '/icons/sprite.svg#upload_xxs' }),
                            ]);
                        });
                    },
                    3522: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'users_xxxs', xlinkHref: '/icons/sprite.svg#users_xxxs' }),
                            ]);
                        });
                    },
                    5695: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'vibe_xxs', xlinkHref: '/icons/sprite.svg#vibe_xxs' }),
                            ]);
                        });
                    },
                    6174: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'volumeOff_xs', xlinkHref: '/icons/sprite.svg#volumeOff_xs' }),
                            ]);
                        });
                    },
                    540: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'volume_xs', xlinkHref: '/icons/sprite.svg#volume_xs' }),
                            ]);
                        });
                    },
                    6206: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'windows', xlinkHref: '/icons/sprite.svg#windows' }),
                            ]);
                        });
                    },
                    7185: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'windows_xs', xlinkHref: '/icons/sprite.svg#windows_xs' }),
                            ]);
                        });
                    },
                    9481: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexBooksEn', xlinkHref: '/icons/sprite.svg#yandexBooksEn' }),
                            ]);
                        });
                    },
                    7364: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexBooksRu', xlinkHref: '/icons/sprite.svg#yandexBooksRu' }),
                            ]);
                        });
                    },
                    8577: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPayEn', xlinkHref: '/icons/sprite.svg#yandexPayEn' }),
                            ]);
                        });
                    },
                    5760: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPayRu', xlinkHref: '/icons/sprite.svg#yandexPayRu' }),
                            ]);
                        });
                    },
                    5667: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPlusEn', xlinkHref: '/icons/sprite.svg#yandexPlusEn' }),
                            ]);
                        });
                    },
                    2639: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPlusRu', xlinkHref: '/icons/sprite.svg#yandexPlusRu' }),
                            ]);
                        });
                    },
                    9110: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useDynamicText =
                                t.usePopoverSwipeable =
                                t.useReturnValue =
                                t.useCallbackRef =
                                t.useDebouncedToggle =
                                t.useResize =
                                t.useIsomorphicEffect =
                                t.useForceUpdateRef =
                                t.useElementOffsetY =
                                t.getElementNameByDataAttribute =
                                t.createIntersectionObserver =
                                t.useIntersectionObserver =
                                t.useKeyboardNavigation =
                                t.useScroll =
                                t.useForwardRef =
                                    void 0);
                        var s = r(245);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return s.useForwardRef;
                            },
                        });
                        var n = r(2067);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return n.useScroll;
                            },
                        });
                        var i = r(5188);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var a = r(5663);
                        Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return a.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return a.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return a.getElementNameByDataAttribute;
                                },
                            });
                        var l = r(2101);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
                            },
                        });
                        var o = r(2767);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return o.useForceUpdateRef;
                            },
                        });
                        var c = r(9019);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return c.useIsomorphicEffect;
                            },
                        });
                        var u = r(2947);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return u.useResize;
                            },
                        });
                        var d = r(6699);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return d.useDebouncedToggle;
                            },
                        });
                        var f = r(8691);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return f.useCallbackRef;
                            },
                        });
                        var x = r(998);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return x.useReturnValue;
                            },
                        });
                        var _ = r(4395);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return _.usePopoverSwipeable;
                            },
                        });
                        var p = r(5969);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return p.useDynamicText;
                            },
                        });
                    },
                    8691: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
                        let s = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, s.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), s = 0; s < e; s++) r[s] = arguments[s];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, s.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    1381: (e, t, r) => {
                        var s;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let n = r(4490),
                            i = r(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(s || (t.SwipeablePlacement = s = {}));
                        let a = (e) => {
                                let { ref: t, deltaY: r, deltaX: n, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === s.TOP || i === s.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: o, disableSwipe: c, placement: u, threshold: d } = e,
                                f = (0, i.useCallbackRef)(() => {
                                    o && (l(t), o());
                                }),
                                x = (0, i.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: n, placement: i } = e;
                                            switch (i) {
                                                case s.TOP:
                                                    r <= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                                    break;
                                                case s.RIGHT:
                                                    n >= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                                    break;
                                                case s.LEFT:
                                                    n <= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                                    break;
                                                default:
                                                    r >= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: u });
                                }),
                                _ = (0, i.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: n, placement: i, threshold: a = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (a / 100) * (i === s.TOP || i === s.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case s.TOP:
                                                    return r < 0 && Math.abs(r) >= l;
                                                case s.RIGHT:
                                                    return n > 0 && n >= l;
                                                case s.LEFT:
                                                    return n < 0 && Math.abs(n) >= l;
                                                default:
                                                    return r > 0 && r >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: u, threshold: d })
                                            ? o && (l(t), o())
                                            : l(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: _, onSwiping: x, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: f };
                        };
                    },
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let s = r(352),
                            n = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: i } = e,
                                a = (0, n.useRef)(null),
                                [l, o] = (0, n.useState)(!!r),
                                c = (0, n.useMemo)(
                                    () =>
                                        (0, s.throttle)(() => {
                                            o(!r),
                                                a.current && window.clearTimeout(a.current),
                                                (a.current = window.setTimeout(() => {
                                                    o(!!r);
                                                }, t));
                                        }, i),
                                    [t, r, i],
                                ),
                                u = (0, n.useCallback)(() => {
                                    o(!!r), a.current && window.clearTimeout(a.current);
                                }, [r]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        a.current && window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: c, reset: u }
                            );
                        };
                    },
                    5969: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let s = r(810),
                            n = (e) => {
                                (e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && n(e);
                                    });
                            };
                        (t.findOptimalFontSize = (e) => {
                            let { container: t, containerWidth: r, containerHeight: s, minFontSize: i, maxFontSize: a, lineHeight: l, maxLines: o } = e,
                                c = ((e, t, r) => {
                                    let s = e.cloneNode(!0);
                                    return (
                                        (s.style.cssText =
                                            '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                t,
                                                'px !important;\n    ',
                                            )),
                                        n(s),
                                        s.style.setProperty('--dynamic-line-height', String(r)),
                                        document.body.appendChild(s),
                                        s
                                    );
                                })(t, r, l);
                            try {
                                let e = i,
                                    t = a,
                                    n = i;
                                for (; e <= t; ) {
                                    let i = Math.floor((e + t) / 2);
                                    c.style.setProperty('--dynamic-font-size', ''.concat(i, 'px'));
                                    let a = 'number' == typeof o ? c.scrollHeight <= Math.min(o * i * l, s) : c.scrollHeight <= s,
                                        u = c.scrollWidth <= r + 1;
                                    a && u ? ((n = i), (e = i + 1)) : (t = i - 1);
                                }
                                return n - 1;
                            } finally {
                                c.remove();
                            }
                        }),
                            (t.useDynamicText = (e, r, n) => {
                                let { minFontSize: i, maxFontSize: a, lineHeight: l, maxLines: o, fallbackMaxLines: c } = r;
                                (0, s.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(l));
                                    let r = () => {
                                            let { width: r, height: s } = e.getBoundingClientRect(),
                                                u = e.childNodes.length > 0;
                                            if (0 === r || 0 === s || !u) return;
                                            let { maxLines: d, fontSize: f } = ((e) => {
                                                let { fallbackMaxLines: r, maxLines: s, minFontSize: n } = e,
                                                    i = (0, t.findOptimalFontSize)({ ...e, maxLines: s });
                                                return void 0 === r || i >= n
                                                    ? { maxLines: s, fontSize: i }
                                                    : { maxLines: r, fontSize: (0, t.findOptimalFontSize)({ ...e, maxLines: r }) };
                                            })({
                                                container: e,
                                                containerWidth: r,
                                                containerHeight: s,
                                                minFontSize: i,
                                                maxFontSize: a,
                                                lineHeight: l,
                                                maxLines: o,
                                                fallbackMaxLines: c,
                                            });
                                            null == n || n(d), e.style.setProperty('--dynamic-font-size', ''.concat(f, 'px'));
                                        },
                                        s = new ResizeObserver(r),
                                        u = new MutationObserver(r);
                                    return (
                                        s.observe(e),
                                        u.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(r),
                                        r(),
                                        () => {
                                            s.disconnect(), u.disconnect();
                                        }
                                    );
                                }, [e, n, c, l, a, o, i]);
                            });
                    },
                    2101: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0);
                        let s = r(810),
                            n = r(2067),
                            i = r(2767);
                        t.useElementOffsetY = (e) => {
                            let [t, r] = (0, i.useForceUpdateRef)(),
                                [a, l] = (0, s.useState)(),
                                o = (0, s.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return (0, s.useLayoutEffect)(o), (0, n.useScroll)({ onScroll: o, elementRef: e }), { forceUpdateRefCallback: r, offsetY: a };
                        };
                    },
                    2767: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let s = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, s.useState)(null);
                            return [
                                e,
                                (0, s.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    245: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0);
                        let s = r(810);
                        t.useForwardRef = function (e, t) {
                            let r = (0, s.useRef)(t);
                            return (
                                (0, s.useEffect)(() => {
                                    e && ('function' == typeof e ? e(r.current) : (e.current = r.current));
                                }, [e]),
                                r
                            );
                        };
                    },
                    5663: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let s = r(810),
                            { innerWidth: n = 0, innerHeight: i = 0 } = window;
                        function a(e) {
                            let { top: t, right: r, bottom: s, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (s >= 0 && s <= i)) && ((a >= 0 && a <= n) || (r >= 0 && r <= n));
                        }
                        function l(e) {
                            var t, r;
                            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, s)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, n) {
                                let [{ freezeOnceVisible: i, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, n],
                                    [f, x] = (0, s.useState)({}),
                                    _ = (0, s.useRef)(new Set()),
                                    p = (0, s.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && p) {
                                                          if (_.current.has(t)) return;
                                                          x((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (_.current.add(t), p.unobserve(e.target));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, s.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = a(e.current))) {
                                                            let t = l(e.current);
                                                            x((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [d, p, e.length],
                                    ),
                                    f
                                );
                            });
                    },
                    9019: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0);
                        let s = r(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
                    },
                    5188: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0);
                        let s = r(810);
                        function n(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: r, activeAttributeName: i = 'aria-selected' } = t,
                                a = (0, s.useCallback)(
                                    (t) => {
                                        let s = n(e, r);
                                        if (!s.length) return;
                                        let i = t.target,
                                            a = s.indexOf(i);
                                        if (-1 === a) return;
                                        let [l] = s,
                                            o = s.at(-1),
                                            c = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                c = s[a - 1] || o;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                c = s[a + 1] || l;
                                                break;
                                            case 'Home':
                                                c = l;
                                                break;
                                            case 'End':
                                                c = o;
                                        }
                                        null !== c && (c.focus(), t.preventDefault());
                                    },
                                    [r, e],
                                );
                            (0, s.useEffect)(() => {
                                let t = e.current;
                                return null == t || t.addEventListener('keydown', a), () => (null == t ? void 0 : t.removeEventListener('keydown', a));
                            }, [e, a]),
                                (0, s.useEffect)(() => {
                                    n(e, r).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                });
                        };
                    },
                    4395: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0);
                        let s = r(810),
                            n = r(1381);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: i, disableSwipe: a, placement: l, threshold: o } = e,
                                c = (0, s.useMemo)(() => {
                                    switch (l) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return n.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return n.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return n.SwipeablePlacement.LEFT;
                                        default:
                                            return n.SwipeablePlacement.BOTTOM;
                                    }
                                }, [l]);
                            return (0, n.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: i, disableSwipe: a, placement: c, threshold: o });
                        };
                    },
                    2947: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0);
                        let s = r(810),
                            n = r(361);
                        t.useResize = (e, t) => {
                            (0, s.useEffect)(() => {
                                let r = (0, n.getElementFromRefOrElement)(t);
                                if (null === r) return;
                                let s = null != r ? r : document.documentElement,
                                    i = new ResizeObserver(e);
                                return i.observe(s), () => i.disconnect();
                            }, [t, e]);
                        };
                    },
                    998: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e());
                    },
                    2067: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let s = r(810),
                            n = r(361),
                            i = r(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: a } = e,
                                { state: l, handleDebouncedToggle: o } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, s.useCallback)(() => {
                                    r && o(), null == t || t();
                                }, [r, o, t]);
                            return (
                                (0, s.useEffect)(() => {
                                    let e = (0, n.getElementFromRefOrElement)(a);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', c, r), () => t.removeEventListener('scroll', c, r);
                                }, [a, c]),
                                l
                            );
                        };
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, r) {
                                let s = null != r ? r : e.currentTarget,
                                    n = document.createElement('span'),
                                    i = Math.max(s.clientWidth, s.clientHeight),
                                    a = i / 2,
                                    l = s.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                                    c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                                (n.style.width = ''.concat(i, 'px')),
                                    (n.style.height = ''.concat(i, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - a, 'px')),
                                    (n.style.top = ''.concat(c - a, 'px')),
                                    n.classList.add(t);
                                let u = s.getElementsByClassName(t)[0];
                                u && u.remove(), s.insertBefore(n, s.firstChild);
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
                    8216: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var s = r(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return s.createRipple;
                            },
                        });
                        var n = r(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = r(8216),
                            o = s(r(7122)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: s = 'left',
                                        children: c,
                                        className: u,
                                        color: d = 'secondary',
                                        flexIcon: f,
                                        icon: x,
                                        spinner: _,
                                        role: p,
                                        onClick: m,
                                        radius: v = 'm',
                                        size: g,
                                        type: y = 'button',
                                        variant: k = 'default',
                                        withRipple: b = !0,
                                        withHover: E = !0,
                                        withBorder: h = !1,
                                        disabled: O,
                                        iconClassName: w,
                                        contentContainerClassName: R,
                                        ...j
                                    } = e,
                                    A = (0, i.useId)(),
                                    T = !i.Children.toArray(c).filter(Boolean).length,
                                    P = 'left' === s,
                                    C = null,
                                    I = (0, i.isValidElement)(_);
                                if (x) {
                                    var S, L;
                                    C = (0, i.cloneElement)(x, {
                                        className: (0, a.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(s)]]: s && !T,
                                                [o.default.icon_withButtonSize]: !(null == (S = x.props) ? void 0 : S.size),
                                            },
                                            null == (L = x.props) ? void 0 : L.className,
                                            w,
                                        ),
                                        key: A,
                                    });
                                }
                                let N = (0, i.useMemo)(() => (I ? (0, n.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [I, _]),
                                    M = (0, i.useCallback)(
                                        (e) => {
                                            I || (b && (0, l.createRipple)(e, o.default.ripple), null == m || m(e));
                                        },
                                        [I, m, b],
                                    );
                                return (0, n.jsx)('button', {
                                    ref: t,
                                    className: (0, a.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(d, '_').concat(k)],
                                        o.default['root_radius_'.concat(v)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(d, '_withHover_').concat(k)]]: E && !O && !I,
                                            [o.default['root_size_'.concat(g)]]: g,
                                            [o.default.root_withoutBorder]: !h,
                                            [o.default.root_withActiveSpinner]: I,
                                            [o.default.block]: r,
                                            [o.default.flexIcon]: f,
                                            [o.default.iconOnly]: T,
                                            [o.default.root_icon_left]: x && !T && P,
                                            [o.default.root_icon_right]: x && !T && !P,
                                        },
                                        u,
                                    ),
                                    type: y,
                                    role: p,
                                    onClick: M,
                                    ...j,
                                    disabled: O,
                                    'aria-live': I ? 'polite' : 'off',
                                    'aria-busy': I,
                                    children:
                                        x || I
                                            ? (0, n.jsxs)('span', {
                                                  className: (0, a.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: r }, R),
                                                  children: [x && P && C, !T && c, x && !P && C, N],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, i.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var s = r(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return s.Button;
                            },
                        });
                    },
                    5189: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = t.IconComponent = void 0);
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = r(5151),
                            o = s(r(123));
                        (t.IconComponent = (e) => {
                            let { 'aria-label': t, className: r, focusable: s = !1, variant: i, size: c, forwardRef: u, ...d } = e,
                                f = c ? ''.concat(i, '_').concat(c) : i,
                                x = l.iconsCollection[f];
                            return x
                                ? (0, n.jsx)(x, {
                                      className: (0, a.clsx)(o.default.root, r, o.default['root_size_'.concat(c)]),
                                      focusable: s,
                                      'aria-label': t,
                                      ...d,
                                      'aria-hidden': !t,
                                      ref: u,
                                  })
                                : null;
                        }),
                            (t.Icon = (0, i.forwardRef)((e, r) => (0, n.jsx)(t.IconComponent, { forwardRef: r, ...e })));
                    },
                    5151: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.iconsCollection = t.iconsCollectionBySize = void 0);
                        let n = s(r(4656)),
                            i = s(r(1954)),
                            a = s(r(8170)),
                            l = s(r(5565)),
                            o = s(r(8127)),
                            c = s(r(8993)),
                            u = s(r(2933)),
                            d = s(r(1334)),
                            f = s(r(1426)),
                            x = s(r(5378)),
                            _ = s(r(6579)),
                            p = s(r(3935)),
                            m = s(r(3522)),
                            v = s(r(7319)),
                            g = s(r(8442)),
                            y = s(r(2586)),
                            k = s(r(5822)),
                            b = s(r(5272)),
                            E = s(r(4860)),
                            h = s(r(8711)),
                            O = s(r(8109)),
                            w = s(r(4904)),
                            R = s(r(5971)),
                            j = s(r(3331)),
                            A = s(r(9783)),
                            T = s(r(8184)),
                            P = s(r(4926)),
                            C = s(r(3176)),
                            I = s(r(4789)),
                            S = s(r(8151)),
                            L = s(r(8690)),
                            N = s(r(1524)),
                            M = s(r(2361)),
                            H = s(r(3972)),
                            D = s(r(9330)),
                            K = s(r(7346)),
                            U = s(r(2604)),
                            F = s(r(6894)),
                            z = s(r(6391)),
                            B = s(r(9369)),
                            Y = s(r(226)),
                            W = s(r(8130)),
                            Q = s(r(1922)),
                            Z = s(r(5270)),
                            V = s(r(3560)),
                            J = s(r(7513)),
                            G = s(r(9838)),
                            q = s(r(9104)),
                            X = s(r(7399)),
                            $ = s(r(5849)),
                            ee = s(r(9056)),
                            et = s(r(3613)),
                            er = s(r(9372)),
                            es = s(r(3709)),
                            en = s(r(3685)),
                            ei = s(r(3302)),
                            ea = s(r(811)),
                            el = s(r(6122)),
                            eo = s(r(5386)),
                            ec = s(r(3201)),
                            eu = s(r(9434)),
                            ed = s(r(2026)),
                            ef = s(r(8112)),
                            ex = s(r(8044)),
                            e_ = s(r(1249)),
                            ep = s(r(2754)),
                            em = s(r(5251)),
                            ev = s(r(9370)),
                            eg = s(r(5632)),
                            ey = s(r(1001)),
                            ek = s(r(893)),
                            eb = s(r(6331)),
                            eE = s(r(9876)),
                            eh = s(r(1758)),
                            eO = s(r(7196)),
                            ew = s(r(7951)),
                            eR = s(r(126)),
                            ej = s(r(3112)),
                            eA = s(r(8819)),
                            eT = s(r(8772)),
                            eP = s(r(5695)),
                            eC = s(r(7171)),
                            eI = s(r(9030)),
                            eS = s(r(9422)),
                            eL = s(r(1491)),
                            eN = s(r(2337)),
                            eM = s(r(9202)),
                            eH = s(r(130)),
                            eD = s(r(5861)),
                            eK = s(r(7923)),
                            eU = s(r(4170)),
                            eF = s(r(3654)),
                            ez = s(r(6507)),
                            eB = s(r(3193)),
                            eY = s(r(30)),
                            eW = s(r(7802)),
                            eQ = s(r(3738)),
                            eZ = s(r(8196)),
                            eV = s(r(2340)),
                            eJ = s(r(2125)),
                            eG = s(r(4014)),
                            eq = s(r(896)),
                            eX = s(r(1829)),
                            e$ = s(r(1893)),
                            e0 = s(r(7124)),
                            e1 = s(r(1563)),
                            e8 = s(r(205)),
                            e9 = s(r(1578)),
                            e2 = s(r(5659)),
                            e7 = s(r(9348)),
                            e4 = s(r(6087)),
                            e5 = s(r(965)),
                            e3 = s(r(8438)),
                            e6 = s(r(3877)),
                            te = s(r(7438)),
                            tt = s(r(9968)),
                            tr = s(r(3778)),
                            ts = s(r(1084)),
                            tn = s(r(4254)),
                            ti = s(r(792)),
                            ta = s(r(8131)),
                            tl = s(r(1125)),
                            to = s(r(9288)),
                            tc = s(r(976)),
                            tu = s(r(1874)),
                            td = s(r(9863)),
                            tf = s(r(1945)),
                            tx = s(r(1580)),
                            t_ = s(r(4091)),
                            tp = s(r(8090)),
                            tm = s(r(895)),
                            tv = s(r(5910)),
                            tg = s(r(4892)),
                            ty = s(r(3366)),
                            tk = s(r(5034)),
                            tb = s(r(5792)),
                            tE = s(r(9545)),
                            th = s(r(3362)),
                            tO = s(r(1079)),
                            tw = s(r(8994)),
                            tR = s(r(51)),
                            tj = s(r(5218)),
                            tA = s(r(3049)),
                            tT = s(r(619)),
                            tP = s(r(2505)),
                            tC = s(r(380)),
                            tI = s(r(2834)),
                            tS = s(r(540)),
                            tL = s(r(6174)),
                            tN = s(r(7185)),
                            tM = s(r(9351)),
                            tH = s(r(2092)),
                            tD = s(r(1162)),
                            tK = s(r(6837)),
                            tU = s(r(2024)),
                            tF = s(r(776)),
                            tz = s(r(5720)),
                            tB = s(r(2774)),
                            tY = s(r(4997)),
                            tW = s(r(3146)),
                            tQ = s(r(2084)),
                            tZ = s(r(3751)),
                            tV = s(r(3076)),
                            tJ = s(r(2495)),
                            tG = s(r(9509)),
                            tq = s(r(8987)),
                            tX = s(r(190)),
                            t$ = s(r(843)),
                            t0 = s(r(5122)),
                            t1 = s(r(7405)),
                            t8 = s(r(820)),
                            t9 = s(r(5443)),
                            t2 = s(r(8782)),
                            t7 = s(r(7252)),
                            t4 = s(r(3013)),
                            t5 = s(r(5919)),
                            t3 = s(r(5346)),
                            t6 = s(r(3792)),
                            re = s(r(1351)),
                            rt = s(r(8303)),
                            rr = s(r(4777)),
                            rs = s(r(735)),
                            rn = s(r(2176)),
                            ri = s(r(8235)),
                            ra = s(r(8915)),
                            rl = s(r(5271)),
                            ro = s(r(2037)),
                            rc = s(r(5197)),
                            ru = s(r(7026)),
                            rd = s(r(8664)),
                            rf = s(r(8619)),
                            rx = s(r(6130)),
                            r_ = s(r(6210)),
                            rp = s(r(5596)),
                            rm = s(r(6644)),
                            rv = s(r(996)),
                            rg = s(r(7031)),
                            ry = s(r(4793)),
                            rk = s(r(7869)),
                            rb = s(r(7076)),
                            rE = s(r(8582)),
                            rh = s(r(7643)),
                            rO = s(r(9846)),
                            rw = s(r(6275)),
                            rR = s(r(3702)),
                            rj = s(r(8550)),
                            rA = s(r(857)),
                            rT = s(r(6304)),
                            rP = s(r(9040)),
                            rC = s(r(4298)),
                            rI = s(r(5132)),
                            rS = s(r(8868)),
                            rL = s(r(8779)),
                            rN = s(r(8503)),
                            rM = s(r(1045)),
                            rH = s(r(7341)),
                            rD = s(r(9505)),
                            rK = s(r(4483)),
                            rU = s(r(8499)),
                            rF = s(r(705)),
                            rz = s(r(7402)),
                            rB = s(r(1427)),
                            rY = s(r(7934)),
                            rW = s(r(2435)),
                            rQ = s(r(3918)),
                            rZ = s(r(2161)),
                            rV = s(r(5304)),
                            rJ = s(r(2646)),
                            rG = s(r(7500)),
                            rq = s(r(6104)),
                            rX = s(r(2502)),
                            r$ = s(r(1754)),
                            r0 = s(r(6615)),
                            r1 = s(r(7942)),
                            r8 = s(r(1498)),
                            r9 = s(r(4947)),
                            r2 = s(r(7471)),
                            r7 = s(r(8861)),
                            r4 = s(r(6809)),
                            r5 = s(r(5266)),
                            r3 = s(r(1179)),
                            r6 = s(r(6206)),
                            se = s(r(9481)),
                            st = s(r(7364)),
                            sr = s(r(8577)),
                            ss = s(r(5760)),
                            sn = s(r(5667)),
                            si = s(r(2639));
                        (t.iconsCollectionBySize = {
                            xxxs: [
                                'adult',
                                'arrowDown',
                                'arrowRight',
                                'check',
                                'close',
                                'donation',
                                'exclamation',
                                'explicit',
                                'listen',
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
                                'next',
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
                                'history',
                                'home',
                                'home_selected',
                                'kids',
                                'kids_selected',
                                'like',
                                'liked',
                                'lock',
                                'more',
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
                            xl: ['album', 'clip', 'note', 'pause_filled', 'picture', 'play_filled', 'playlist', 'unavailable'],
                            xxl: ['attention', 'check', 'next', 'offline', 'pause_filled', 'play_filled', 'previous', 'search'],
                            xxxl: ['attention'],
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
                                adult_xxxs: n.default,
                                arrowDown_xxxs: i.default,
                                arrowRight_xxxs: a.default,
                                check_xxxs: l.default,
                                close_xxxs: o.default,
                                donation_xxxs: c.default,
                                exclamation_xxxs: u.default,
                                explicit_xxxs: d.default,
                                listen_xxxs: f.default,
                                play_xxxs: x.default,
                                reset_xxxs: _.default,
                                ruble_xxxs: p.default,
                                users_xxxs: m.default,
                                add_xxs: v.default,
                                addToPlaylist_xxs: g.default,
                                adult_xxs: y.default,
                                album_xxs: k.default,
                                arrowDown_xxs: b.default,
                                arrowLeft_xxs: E.default,
                                arrowRight_xxs: h.default,
                                artist_xxs: O.default,
                                bucket_xxs: w.default,
                                chain_xxs: R.default,
                                chartDown_xxs: j.default,
                                chartNew_xxs: A.default,
                                chartSame_xxs: T.default,
                                chartUp_xxs: P.default,
                                check_xxs: C.default,
                                clip_xxs: I.default,
                                close_xxs: S.default,
                                code_xxs: L.default,
                                crown_xxs: N.default,
                                dislike_xxs: M.default,
                                disliked_xxs: H.default,
                                download_xxs: D.default,
                                downloaded_xxs: K.default,
                                dragDots_xxs: U.default,
                                edit_xxs: F.default,
                                exclamation_xxs: z.default,
                                explicit_xxs: B.default,
                                eye_crossed_xxs: Y.default,
                                filter_xxs: W.default,
                                gift_xxs: Q.default,
                                info_xxs: Z.default,
                                lightning_xxs: V.default,
                                like_xxs: J.default,
                                likeVariant_xxs: G.default,
                                liked_xxs: q.default,
                                likedVariant_xxs: X.default,
                                link_xxs: $.default,
                                link_rounded_xxs: ee.default,
                                lock_xxs: et.default,
                                lyrics_xxs: er.default,
                                macos_xxs: es.default,
                                menuArrow_xxs: en.default,
                                more_xxs: ei.default,
                                next_xxs: ea.default,
                                pause_xxs: el.default,
                                pencil_xxs: eo.default,
                                pin_xxs: ec.default,
                                pin_filled_xxs: eu.default,
                                play_xxs: ed.default,
                                playLast_xxs: ef.default,
                                playNext_xxs: ex.default,
                                playQueue_xxs: e_.default,
                                podcasts_xxs: ep.default,
                                previous_xxs: em.default,
                                repeat_xxs: ev.default,
                                repeat_one_xxs: eg.default,
                                reset_xxs: ey.default,
                                rewindBackwards_xxs: ek.default,
                                rewindForward_xxs: eb.default,
                                ruble_xxs: eE.default,
                                settings_xxs: eh.default,
                                share_xxs: eO.default,
                                shuffle_xxs: ew.default,
                                syncLyrics_xxs: eR.default,
                                trailer_xxs: ej.default,
                                unpin_xxs: eA.default,
                                upload_xxs: eT.default,
                                vibe_xxs: eP.default,
                                adult_xs: eC.default,
                                album_xs: eI.default,
                                arrowDown_xs: eS.default,
                                arrowLeft_xs: eL.default,
                                arrowRight_xs: eN.default,
                                cast_xs: eM.default,
                                chain_xs: eH.default,
                                check_xs: eD.default,
                                close_xs: eK.default,
                                close_filled_xs: eU.default,
                                dislike_xs: eF.default,
                                disliked_xs: ez.default,
                                exclamation_xs: eB.default,
                                explicit_xs: eY.default,
                                filter_xs: eW.default,
                                fullscreen_xs: eQ.default,
                                infinity_xs: eZ.default,
                                like_xs: eV.default,
                                liked_xs: eJ.default,
                                liteVersion_xs: eG.default,
                                lock_xs: eq.default,
                                more_xs: eX.default,
                                navigationCollection_xs: e$.default,
                                navigationCollection_selected_xs: e0.default,
                                navigationConcerts_xs: e1.default,
                                navigationConcerts_selected_xs: e8.default,
                                navigationForYouAndTrends_xs: e9.default,
                                navigationForYouAndTrends_selected_xs: e2.default,
                                navigationKids_xs: e7.default,
                                navigationKids_selected_xs: e4.default,
                                navigationMyVibe_xs: e5.default,
                                navigationMyVibeNDA_xs: e3.default,
                                navigationNonMusic_xs: e6.default,
                                navigationNonMusic_selected_xs: te.default,
                                navigationPlus_xs: tt.default,
                                navigationSearch_xs: tr.default,
                                next_xs: ts.default,
                                note_xs: tn.default,
                                pause_xs: ti.default,
                                pause_filled_xs: ta.default,
                                picture_xs: tl.default,
                                pin_xs: to.default,
                                pin_filled_xs: tc.default,
                                play_xs: tu.default,
                                playQueue_xs: td.default,
                                play_filled_xs: tf.default,
                                playlist_xs: tx.default,
                                previous_xs: t_.default,
                                repeat_xs: tp.default,
                                repeat_one_xs: tm.default,
                                rewindBackwards_xs: tv.default,
                                rewindForward_xs: tg.default,
                                search_xs: ty.default,
                                settings_xs: tk.default,
                                shuffle_xs: tb.default,
                                site_xs: tE.default,
                                speed_1_25x_centered_xs: th.default,
                                speed_1_5x_centered_xs: tO.default,
                                speed_1_75x_centered_xs: tw.default,
                                speed_1x_centered_xs: tR.default,
                                speed_2x_centered_xs: tj.default,
                                syncLyrics_xs: tA.default,
                                thumbDown_xs: tT.default,
                                thumbUp_xs: tP.default,
                                trailer_xs: tC.default,
                                unavailable_xs: tI.default,
                                volume_xs: tS.default,
                                volumeOff_xs: tL.default,
                                windows_xs: tN.default,
                                adult_s: tM.default,
                                album_s: tH.default,
                                dislike_s: tD.default,
                                disliked_s: tK.default,
                                exclamation_s: tU.default,
                                explicit_s: tF.default,
                                likedVariant_s: tz.default,
                                note_s: tB.default,
                                pauseVibe_s: tY.default,
                                picture_s: tW.default,
                                playVibe_s: tQ.default,
                                playlist_s: tZ.default,
                                collections_m: tV.default,
                                collections_selected_m: tJ.default,
                                history_m: tG.default,
                                home_m: tq.default,
                                home_selected_m: tX.default,
                                kids_m: t$.default,
                                kids_selected_m: t0.default,
                                like_m: t1.default,
                                liked_m: t8.default,
                                lock_m: t9.default,
                                more_m: t2.default,
                                non_music_m: t7.default,
                                non_music_selected_m: t4.default,
                                note_m: t5.default,
                                pause_m: t3.default,
                                pause_filled_m: t6.default,
                                play_m: re.default,
                                playQueue_m: rt.default,
                                play_filled_m: rr.default,
                                plusOutlined_m: rs.default,
                                ruble_m: rn.default,
                                search_m: ri.default,
                                search_selected_m: ra.default,
                                share_m: rl.default,
                                speed_1_25x_centered_m: ro.default,
                                speed_1_5x_centered_m: rc.default,
                                speed_1_75x_centered_m: ru.default,
                                speed_1x_centered_m: rd.default,
                                speed_2x_centered_m: rf.default,
                                syncLyrics_m: rx.default,
                                ticket_m: r_.default,
                                ticket_selected_m: rp.default,
                                add_l: rm.default,
                                album_l: rv.default,
                                download_l: rg.default,
                                like_l: ry.default,
                                note_l: rk.default,
                                pause_filled_l: rb.default,
                                play_filled_l: rE.default,
                                search_l: rh.default,
                                speed_1_25x_l: rO.default,
                                speed_1_5x_l: rw.default,
                                speed_1_75x_l: rR.default,
                                speed_1x_l: rj.default,
                                speed_2x_l: rA.default,
                                album_xl: rT.default,
                                clip_xl: rP.default,
                                note_xl: rC.default,
                                pause_filled_xl: rI.default,
                                picture_xl: rS.default,
                                play_filled_xl: rL.default,
                                playlist_xl: rN.default,
                                unavailable_xl: rM.default,
                                attention_xxl: rH.default,
                                check_xxl: rD.default,
                                next_xxl: rK.default,
                                offline_xxl: rU.default,
                                pause_filled_xxl: rF.default,
                                play_filled_xxl: rz.default,
                                previous_xxl: rB.default,
                                search_xxl: rY.default,
                                attention_xxxl: rW.default,
                                bandlink: rQ.default,
                                googlePlay: rZ.default,
                                huaweiAppGallery: rV.default,
                                kinopoiskEn: rJ.default,
                                kinopoiskRu: rG.default,
                                macos: rq.default,
                                musicLogo: rX.default,
                                musicLogoCenterEn: r$.default,
                                musicLogoCenterRu: r0.default,
                                musicLogoLeftEn: r1.default,
                                musicLogoLeftRu: r8.default,
                                pause: r9.default,
                                play: r2.default,
                                plus: r7.default,
                                plusBadge: r4.default,
                                plusColor: r5.default,
                                plusOutlined: r3.default,
                                windows: r6.default,
                                yandexBooksEn: se.default,
                                yandexBooksRu: st.default,
                                yandexPayEn: sr.default,
                                yandexPayRu: ss.default,
                                yandexPlusEn: sn.default,
                                yandexPlusRu: si.default,
                            });
                    },
                    7066: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0);
                        var s = r(5189);
                        Object.defineProperty(t, 'Icon', {
                            enumerable: !0,
                            get: function () {
                                return s.Icon;
                            },
                        });
                    },
                    3642: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Input = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(9110),
                            o = s(r(4481)),
                            c = (e) => {
                                let {
                                        containerClassName: t,
                                        inputClassName: r,
                                        actionsClassName: s,
                                        icon: c = null,
                                        actions: u = null,
                                        disabled: d,
                                        forwardRef: f,
                                        value: x,
                                        size: _ = 'xxxs',
                                        variant: p = 'primary',
                                        ...m
                                    } = e,
                                    v = (0, l.useForwardRef)(f, null),
                                    g = (0, a.useCallback)(() => {
                                        var e;
                                        null == (e = v.current) || e.focus();
                                    }, [v]);
                                return (0, n.jsxs)('div', {
                                    className: (0, i.clsx)(
                                        o.default.root,
                                        { [o.default.root_disabled]: d, [o.default['root_size_'.concat(_)]]: _, [o.default['root_variant_'.concat(p)]]: p },
                                        t,
                                    ),
                                    onClick: g,
                                    children: [
                                        c,
                                        (0, n.jsx)('input', {
                                            className: (0, i.clsx)(o.default.input, r, { [o.default.textShadowing]: m.readOnly }),
                                            ref: v,
                                            value: x,
                                            disabled: d,
                                            ...m,
                                        }),
                                        (0, n.jsx)('div', { className: (0, i.clsx)(o.default.actions, s), children: u }),
                                    ],
                                });
                            };
                        t.Input = (0, a.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    3126: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Input = void 0);
                        var s = r(3642);
                        Object.defineProperty(t, 'Input', {
                            enumerable: !0,
                            get: function () {
                                return s.Input;
                            },
                        });
                    },
                    3906: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SearchInput = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(352),
                            o = r(3126),
                            c = r(7066),
                            u = r(5928),
                            d = s(r(2094));
                        t.SearchInput = (e) => {
                            let {
                                    onChange: t,
                                    placeholder: r,
                                    initialValue: s = '',
                                    correctedValue: f,
                                    size: x = 'xxxs',
                                    resetButtonAriaLabel: _ = '',
                                    disabled: p,
                                    autoFocus: m,
                                    shouldPreventAutoFocusScroll: v,
                                    withResetButton: g = !0,
                                    onResetClick: y,
                                    className: k,
                                    innerInputProps: b,
                                    searchIconProps: E,
                                    resetButtonProps: h,
                                } = e,
                                [O, w] = (0, a.useState)(s),
                                [R, j] = (0, a.useState)(!!s),
                                A = (0, a.useRef)(null),
                                T = (0, a.useMemo)(() => (0, l.debounce)(t, 500), [t]);
                            (0, a.useEffect)(() => {
                                if (m) {
                                    var e;
                                    null == (e = A.current) || e.focus({ preventScroll: v });
                                }
                            }, [m, v]);
                            let P = (0, a.useCallback)(
                                    (e) => {
                                        let r = e.length > 0;
                                        w(e), T(e), r ? (T(e), j(!0)) : (t(e), j(!1));
                                    },
                                    [T, t],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        P(e.target.value);
                                    },
                                    [P],
                                );
                            (0, a.useEffect)(() => {
                                if (f) {
                                    var e;
                                    P(f), null == (e = A.current) || e.focus();
                                }
                            }, [P, f]);
                            let I = (0, a.useCallback)(() => {
                                    var e;
                                    w(''), t(''), j(!1), null == y || y(), null == (e = A.current) || e.focus();
                                }, [t, y]),
                                S = (0, a.useMemo)(
                                    () =>
                                        (0, n.jsx)(c.Icon, {
                                            variant: 'search',
                                            size: 'xs',
                                            className: (0, i.clsx)(d.default.searchIcon, { [d.default.searchIcon_disabled]: p }),
                                            ...E,
                                        }),
                                    [p, E],
                                ),
                                L = (0, a.useMemo)(
                                    () =>
                                        (0, n.jsx)(u.Button, {
                                            radius: 'round',
                                            className: (0, i.clsx)(d.default.reset, { [d.default.reset_show]: R }),
                                            'aria-label': _,
                                            size: x,
                                            disabled: p,
                                            onClick: I,
                                            icon: (0, n.jsx)(c.Icon, { size: 'xxs', variant: 'close', color: 'gray' }),
                                            ...h,
                                        }),
                                    [R, _, x, p, I, h],
                                );
                            return (0, n.jsx)(o.Input, {
                                ref: A,
                                type: 'search',
                                containerClassName: (0, i.clsx)(d.default.searchContainer, k),
                                inputClassName: d.default.searchInput,
                                icon: S,
                                actions: g ? L : void 0,
                                onChange: C,
                                value: O,
                                size: x,
                                disabled: p,
                                placeholder: r,
                                ...b,
                            });
                        };
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = s || (s = r.t(i, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return a[e].call(r.exports, r, r.exports, o), r.exports;
            }
            (o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.M = void 0);
                var e = o(3906);
                Object.defineProperty(c, 'M', {
                    enumerable: !0,
                    get: function () {
                        return e.SearchInput;
                    },
                });
            })();
            var u = c.M;
            c.X;
        },
        5942: (e, t, r) => {
            'use strict';
            r.d(t, { useOnLikeClick: () => d });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(63380),
                o = r(49574),
                c = r(44574);
            let u = (e) => {
                    let { artist: t, closeToast: r } = e;
                    return (0, s.jsx)(c.OM, {
                        closeToast: r,
                        entityVariant: c.cp.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: o.Zyd.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                d = (e) => {
                    let { user: t } = (0, o.Pjs)(),
                        { notify: r } = (0, o.lkh)(),
                        [d, f] = (0, i.useState)(!1),
                        { formatMessage: x } = (0, a.A)();
                    return (0, i.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void r((0, s.jsx)(c.hT, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                        if (d) return;
                        let i = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                        f(!0);
                        let a = await e.toggleLike();
                        f(!1),
                            a === l.f.OK
                                ? r((0, s.jsx)(u, { artist: i }), { containerId: o.uQT.INFO })
                                : r((0, s.jsx)(c.hT, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                    }, [e, t.isAuthorized, d, x, r]);
                };
        },
        8032: (e, t, r) => {
            'use strict';
            r.d(t, { useMarkListenedClick: () => u });
            var s = r(32290),
                n = r(60900),
                i = r(75369),
                a = r(92013),
                l = r(91027),
                o = r(49574),
                c = r(44574);
            let u = (e) => {
                let {
                        user: t,
                        fullscreenPlayer: r,
                        sonataState: { entityMeta: u },
                        album: d,
                    } = (0, o.Pjs)(),
                    { notify: f } = (0, o.lkh)(),
                    { formatMessage: x } = (0, n.A)(),
                    _ = (0, o.eGp)();
                return (0, l.c)(async () => {
                    if (!e) return;
                    let n = r.modal.isOpened ? o.uQT.FULLSCREEN_ERROR : o.uQT.ERROR;
                    if (!t.isAuthorized) return void f((0, s.jsx)(c.hT, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n });
                    let l = e.streamProgress,
                        p = (null == u ? void 0 : u.id) === e.id && (null == u ? void 0 : u.albumId) === e.albumId;
                    if ((await e.setListeningFinishedStatus()) !== a.T.OK)
                        f((0, s.jsx)(c.hT, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: n });
                    else {
                        var m, v;
                        let t = !(null == l ? void 0 : l.hasEverFinished),
                            r = null == _ ? void 0 : _.state.queueState.entityList.value,
                            s =
                                null == r
                                    ? void 0
                                    : r.find((t) => {
                                          let { entity: r } = t;
                                          if ((0, i.b)(r)) {
                                              var s, n;
                                              let t = r.data.meta;
                                              return t.realId === e.id && (null == (n = t.albums) || null == (s = n[0]) ? void 0 : s.id) === e.albumId;
                                          }
                                          return !1;
                                      });
                        s && (s.entity.everFinished = !!t),
                            p &&
                                (null == u ? void 0 : u.streamProgress) &&
                                (null == (m = u.streamProgress) ? void 0 : m.hasEverFinished) !== t &&
                                (u.streamProgress.updateEverFinished(t), t && u.streamProgress.updateEndPositionSec(0)),
                            (null == (v = d.meta) ? void 0 : v.listeningFinished) &&
                                !t &&
                                (d.markTracksFinished({ withoutTracks: [e.id] }), d.setAlbumUnfinished(), d.setAllTracksUnfinished(!1)),
                            null == l || l.updateEverFinished(t),
                            d.meta && t && d.checkAllAlbumTrackFinished();
                    }
                });
            };
        },
        9480: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            var s = (function (e) {
                return (e.NEXT = 'NEXT'), (e.LAST = 'LAST'), (e.REMOVE = 'REMOVE'), (e.HIDE = 'HIDE'), e;
            })({});
        },
        10431: (e, t, r) => {
            'use strict';
            r.d(t, { useOnPromoLandingLikeClick: () => o });
            var s = r(21916),
                n = r(94154),
                i = r(91027),
                a = r(49574),
                l = r(85940);
            let o = (e) => {
                let {
                        user: t,
                        modals: { promoLandingBuySubscriptionModal: r, crackdownModal: o },
                        settings: { isMobile: c },
                        promolanding: u,
                    } = (0, a.Pjs)(),
                    { isFreemium: d } = (0, a.XCI)(),
                    f = (0, l.f)(),
                    x = (0, s.useSearchParams)();
                return (0, i.c)(async () => {
                    if ((!d || (null == e ? void 0 : e.isLiked) || (c ? r.open() : o.open()), t.isAuthorized) && e) {
                        if (!e.isLiked) {
                            var s, i;
                            u.sendLikeFeedback({
                                reaction: n.g.LIKE,
                                yclid: null != (s = x.get(a.K3F.YCLID)) ? s : '',
                                campaignId: null != (i = x.get(a.K3F.UTM_CAMPAIGN)) ? i : '',
                                trackId: e.id,
                            });
                        }
                        return f({
                            track: e,
                            errorContainerId: a.uQT.ERROR,
                            infoContainerId: a.uQT.INFO,
                            withLink: !1,
                            withNotification: t.hasPlus,
                            playbackId: a.V_r.PROMO_LANDING,
                        });
                    }
                });
            };
        },
        10466: (e, t, r) => {
            'use strict';
            r.d(t, { ArtistStats: () => d });
            var s = r(32290),
                n = r(63618),
                i = r(55178),
                a = r(39407),
                l = r(59824),
                o = r(71926),
                c = r(98924),
                u = r.n(c);
            let d = (e) => {
                let { lastMonthListeners: t, lastMonthListenersDelta: r } = e,
                    c = (0, i.useMemo)(() => {
                        let e = (0, s.jsx)('br', {});
                        if (0 === r) return (0, s.jsx)(a.A, { id: 'artist.stats-same-listeners-per-month', values: { br: e } });
                        let t = (0, s.jsx)(o.Caption, {
                            variant: 'span',
                            className: (0, n.$)({ [u().statsNumber_positive]: r > 0, [u().statsNumber_negative]: r < 0 }),
                            size: 'l',
                            weight: 'medium',
                            children: Math.abs(r).toLocaleString('ru'),
                        });
                        return r > 0
                            ? (0, s.jsx)(a.A, { id: 'artist.stats-more-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } })
                            : (0, s.jsx)(a.A, { id: 'artist.stats-less-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } });
                    }, [r]);
                return (0, s.jsxs)('div', {
                    ...(0, l.Am)(l.e8.content.ARTIST_ABOUT_STATS),
                    children: [
                        (0, s.jsx)(o.Caption, {
                            variant: 'div',
                            className: u().title,
                            size: 'l',
                            weight: 'medium',
                            ...(0, l.Am)(l.e8.content.ARTIST_ABOUT_STATS_TITLE),
                            children: (0, s.jsx)(a.A, { id: 'artist.stats-listeners-per-month' }),
                        }),
                        (0, s.jsx)(o.Heading, {
                            size: 'xxl',
                            variant: 'div',
                            className: u().count,
                            ...(0, l.Am)(l.e8.content.ARTIST_ABOUT_STATS_COUNT),
                            children: t.toLocaleString('ru'),
                        }),
                        (0, s.jsx)(o.Caption, {
                            variant: 'div',
                            className: u().stats,
                            size: 'l',
                            weight: 'medium',
                            ...(0, l.Am)(l.e8.content.ARTIST_ABOUT_STATS_DYNAMIC),
                            children: c,
                        }),
                    ],
                });
            };
        },
        10511: (e, t, r) => {
            'use strict';
            r.d(t, { ContextMenuPlaylistPrivacyItem: () => v });
            var s = r(32290),
                n = r(63618),
                i = r(96103),
                a = r(55178),
                l = r(60900),
                o = r(39407),
                c = r(59824),
                u = r(82586),
                d = r(19740),
                f = r(99311),
                x = r(49574),
                _ = r(44574),
                p = r(45333),
                m = r.n(p);
            let v = (0, i.PA)((e) => {
                let { className: t, playlist: r } = e,
                    { notify: i } = (0, x.lkh)(),
                    { formatMessage: p } = (0, l.A)(),
                    v = (0, a.useCallback)(async () => {
                        (await r.toggleVisibility()) === x.FlZ.ERROR &&
                            i((0, s.jsx)(_.hT, { error: p({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: x.uQT.ERROR });
                    }, [p, i, r]);
                return (0, s.jsxs)(d.Dr, {
                    className: (0, n.$)(m().root, t),
                    onClick: v,
                    icon: (0, s.jsx)(u.Icon, { variant: 'eye_crossed', size: 'xxs' }),
                    ...(0, c.Am)(c.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON),
                    role: 'menuitemcheckbox',
                    'aria-checked': !r.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, s.jsx)('span', { className: m().caption, children: (0, s.jsx)(o.A, { id: 'playlist-actions.privacy' }) }),
                        (0, s.jsx)(f.l, { isChecked: !r.isPublic, ariaLabel: p({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
        },
        11067: (e, t, r) => {
            'use strict';
            r.d(t, { useOnDislikeClick: () => v });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(63380),
                o = r(91027),
                c = r(49574),
                u = r(44574),
                d = r(86269),
                f = r(74196),
                x = r(71926),
                _ = r(356),
                p = r.n(_);
            let m = (e) => {
                    let { coverUri: t, title: r, isDisliked: n, closeToast: i } = e,
                        { formatMessage: l } = (0, a.A)(),
                        o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                    return (0, s.jsx)(u.$W, {
                        closeToast: i,
                        message: (0, s.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, s.jsx)(f.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                                (0, s.jsx)(d.Paper, {
                                    className: p().cover,
                                    radius: 'round',
                                    children: (0, s.jsx)(u.BW, { className: p().image, src: t, alt: r, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                                }),
                                (0, s.jsx)(x.Caption, { className: p().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                            ],
                        }),
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.Pjs)(),
                        { notify: r } = (0, c.lkh)(),
                        [d, f] = (0, i.useState)(!1),
                        { formatMessage: x } = (0, a.A)();
                    return (0, o.c)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void r((0, s.jsx)(u.hT, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: c.uQT.ERROR });
                        if (d) return;
                        let i = { ...(0, n.HO)(e), isDisliked: !e.isDisliked };
                        f(!0);
                        let a = await e.toggleDislike();
                        f(!1),
                            a === l.f.OK
                                ? r((0, s.jsx)(m, { coverUri: i.coverUri, title: i.name, isDisliked: i.isDisliked }), { containerId: c.uQT.INFO })
                                : r((0, s.jsx)(u.hT, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: c.uQT.ERROR });
                    });
                };
        },
        11674: (e, t, r) => {
            'use strict';
            r.d(t, { ContextMenuAddTracksToPlaylistItem: () => I });
            var s = r(32290),
                n = r(96103),
                i = r(55178),
                a = r(60900),
                l = r(39407),
                o = r(91027),
                c = r(54578),
                u = r(82586),
                d = r(19740),
                f = r(5771),
                x = r(71926),
                _ = r(49574),
                p = r(48753),
                m = r.n(p),
                v = r(20168),
                g = r(66920),
                y = r(14482),
                k = r(44574),
                b = r(78099),
                E = r.n(b);
            let h = () =>
                (0, s.jsx)(k.$W, {
                    message: (0, s.jsx)(x.Caption, {
                        className: E().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, s.jsx)(l.A, { id: 'playlist-errors.failed-add-tracks-to-playlist' }),
                    }),
                });
            var O = r(12779),
                w = r(61),
                R = r.n(w);
            let j = () =>
                    (0, s.jsx)(k.$W, {
                        message: (0, s.jsx)(x.Caption, {
                            className: R().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, s.jsx)(l.A, { id: 'notifications-info.already-added-tracks' }),
                        }),
                    }),
                A = (0, n.PA)((e) => {
                    let { playlistItem: t } = e,
                        {
                            fullscreenPlayer: r,
                            playlist: { itemsForCopy: n },
                        } = (0, _.Pjs)(),
                        { notify: i } = (0, _.lkh)(),
                        a = (0, o.c)(async () => {
                            var e, a;
                            if (0 === n.length) return;
                            let l = { containerId: r.modal.isOpened ? _.uQT.FULLSCREEN_INFO : _.uQT.INFO },
                                o = new Set(null != (a = null == t || null == (e = t.tracks) ? void 0 : e.map((e) => e.id.toString())) ? a : []),
                                c = n.filter((e) => !o.has(e.id));
                            return c.length
                                ? (await t.changePlaylist((0, g.M)({ operation: y.y.INSERT, position: 0, tracks: c }))) === v.Y.OK
                                    ? void i((0, s.jsx)(O.NotificationAddTracksToPlaylist, { playlistTitle: t.title, playlistUrl: t.url }), l)
                                    : void i((0, s.jsx)(h, {}), l)
                                : void i((0, s.jsx)(j, {}), l);
                        });
                    return (0, s.jsx)(d.Dr, {
                        onClick: a,
                        icon: (0, s.jsx)(u.Icon, { variant: 'add', size: 'xxs', className: m().playlistItemIcon }),
                        className: m().playlistItem,
                        children: (0, s.jsx)(x.Caption, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                    });
                }),
                T = (0, n.PA)((e) => {
                    let { searchQuery: t, sourcePlaylistUuid: r } = e,
                        { contextMenuPlaylists: n } = (0, _.Pjs)(),
                        a = (0, i.useMemo)(() => {
                            let e = [];
                            return (
                                n.items.forEach((t) => {
                                    null !== t && t.uuid !== r && e.push(t);
                                }),
                                e
                            );
                        }, [n.items, r]),
                        o = (0, i.useMemo)(() => {
                            if (!t) return a;
                            let e = t.trim().toLowerCase();
                            return e
                                ? a.filter((t) => {
                                      var r;
                                      return (null != (r = t.title) ? r : '').toLowerCase().includes(e);
                                  })
                                : a;
                        }, [a, t]);
                    return o.length
                        ? (0, s.jsx)('div', { className: m().playlistList, children: o.map((e) => (0, s.jsx)(A, { playlistItem: e }, e.uuid)) })
                        : (0, s.jsx)('div', { className: m().emptyState, children: (0, s.jsx)(l.A, { id: 'search-results.not-found-title' }) });
                });
            var P = r(21916),
                C = r(2047);
            let I = (0, n.PA)((e) => {
                let { disabled: t, className: r, sourcePlaylistUuid: n } = e,
                    {
                        settings: { isMobile: p },
                        user: k,
                        contextMenuPlaylists: b,
                        playlist: { items: E, itemsForCopy: O },
                    } = (0, _.Pjs)(),
                    { formatMessage: w } = (0, a.A)(),
                    [R, j] = (0, i.useState)(''),
                    A = t || !k.isAuthorized || !E.length;
                (0, i.useEffect)(
                    () => () => {
                        b.reset();
                    },
                    [b],
                );
                let I = ((e) => {
                        let { createPlaylist: t, fullscreenPlayer: r } = (0, _.Pjs)(),
                            { notify: n } = (0, _.lkh)(),
                            i = (0, P.useRouter)(),
                            { formatMessage: l } = (0, a.A)();
                        return (0, o.c)(async () => {
                            if (!(null == e ? void 0 : e.length)) return;
                            let a = { containerId: r.modal.isOpened ? _.uQT.FULLSCREEN_INFO : _.uQT.INFO };
                            await t.create({ title: l({ id: 'entity-names.new-playlist' }), visibility: C.L.PUBLIC });
                            let o = t.meta;
                            if (!(null == o ? void 0 : o.uuid)) {
                                n((0, s.jsx)(h, {}), a), t.reset();
                                return;
                            }
                            if ((await o.changePlaylist((0, g.M)({ operation: y.y.INSERT, position: 0, tracks: e }))) === v.Y.OK) {
                                let { href: e } = (0, _.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: o.uuid } });
                                t.reset(), r.modal.isOpened && r.modal.close(), i.push(e);
                                return;
                            }
                            t.reset(), n((0, s.jsx)(h, {}), a);
                        });
                    })(O),
                    S = (0, o.c)((e) => {
                        j(e);
                    }),
                    L = (0, o.c)(() => {
                        j('');
                    }),
                    N = (0, o.c)((e) => {
                        e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
                    }),
                    M = (0, o.c)(async () => {
                        let e = k.account.data.uid;
                        e && (await b.getData({ userId: e, page: 0, pageSize: 20 }));
                    });
                return (0, s.jsxs)(d.W1, {
                    offsetOptions: 3,
                    isMobile: p,
                    className: r,
                    label: w({ id: 'interface-actions.add-tracks-to-playlist' }),
                    icon: (0, s.jsx)(u.Icon, { variant: 'addToPlaylist', size: 'xxs' }),
                    disabled: A,
                    listClassName: m().menuContent,
                    onShow: M,
                    children: [
                        (0, s.jsx)('div', {
                            className: m().searchSection,
                            children: (0, s.jsx)(f.D, {
                                className: m().searchField,
                                initialValue: R,
                                correctedValue: null,
                                placeholder: w({ id: 'search.playlist-placeholder' }),
                                onChange: S,
                                resetButtonAriaLabel: w({ id: 'interface-actions.reset-search-input' }),
                                onResetClick: L,
                                shouldPreventAutoFocusScroll: !0,
                                innerInputProps: { onKeyDown: N },
                            }),
                        }),
                        (0, s.jsx)(d.Dr, {
                            onClick: I,
                            icon: (0, s.jsx)(u.Icon, { variant: 'add', size: 'xxs' }),
                            className: m().createPlaylistButton,
                            children: (0, s.jsx)(x.Caption, {
                                variant: 'div',
                                size: 'm',
                                lineClamp: 1,
                                children: (0, s.jsx)(l.A, { id: 'playlist-actions.create-playlist' }),
                            }),
                        }),
                        (0, s.jsx)(c.c, { className: m().menuDivider }),
                        (0, s.jsx)(T, { searchQuery: R, sourcePlaylistUuid: n }),
                    ],
                });
            });
        },
        12779: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationAddTracksToPlaylist: () => x });
            var s = r(32290),
                n = r(96103),
                i = r(55178),
                a = r(39407),
                l = r(91027),
                o = r(71926),
                c = r(49574),
                u = r(44574),
                d = r(61),
                f = r.n(d);
            let x = (0, n.PA)((e) => {
                let { playlistTitle: t = '', playlistUrl: r, closeToast: n } = e,
                    { fullscreenPlayer: d } = (0, c.Pjs)(),
                    x = (0, l.c)(() => {
                        d.modal.isOpened && d.modal.close();
                    }),
                    _ = (0, i.useMemo)(
                        () =>
                            (0, s.jsx)(o.Caption, {
                                className: f().message,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                lineClamp: 1,
                                children: (0, s.jsx)(a.A, {
                                    id: 'notifications-info.added-tracks-to-playlist',
                                    values: {
                                        playlistName: (0, s.jsx)(u.N_, {
                                            className: f().link,
                                            href: r,
                                            onClick: x,
                                            children: (0, s.jsxs)(o.Caption, {
                                                className: f().playlistTitle,
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
                        [x, t, r],
                    );
                return (0, s.jsx)(u.$W, { closeToast: n, message: _ });
            });
        },
        12906: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__R2jfZ',
                text: 'NotificationDislike_text__xmrnn',
                cover: 'NotificationDislike_cover__bvqFM',
                image: 'NotificationDislike_image__h0_EO',
            };
        },
        14482: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => s });
            var s = (function (e) {
                return (e.INSERT = 'insert'), (e.DELETE = 'delete'), (e.MOVE = 'move'), e;
            })({});
        },
        14934: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => u, hg: () => c });
            var s,
                n = r(55178),
                i = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        r.r(t), r.d(t, { clsx: () => s, default: () => n });
                        let n = s;
                    },
                    4831: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    8346: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    6132: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    4517: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    6951: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    2223: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    5882: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5817: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(9e3),
                            l = s(r(4831));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: s,
                                    menuControl: o,
                                    pinControl: c,
                                    trailerControl: u,
                                    isVisible: d,
                                    radius: f = 'default',
                                    bottomContainerClassName: x,
                                    labelText: _,
                                } = e,
                                p = u || r,
                                m = o || s;
                            return (0, n.jsxs)('div', {
                                className: (0, i.clsx)(
                                    l.default.root,
                                    l.default.controls,
                                    { [l.default.controls_visible]: d },
                                    l.default['controls_radius_'.concat(f)],
                                    t,
                                ),
                                children: [
                                    (0, n.jsx)('div', { className: l.default.top, children: c }),
                                    (0, n.jsxs)('div', {
                                        className: (0, i.clsx)(l.default.bottom, x),
                                        children: [
                                            p && (0, n.jsxs)('div', { className: l.default.bottom_left, children: [u, r] }),
                                            m && (0, n.jsxs)('div', { className: l.default.bottom_right, children: [o, s] }),
                                        ],
                                    }),
                                    !!_ && (0, n.jsx)(a.Label, { className: l.default.label, children: _ }),
                                ],
                            });
                        };
                    },
                    440: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0);
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = r(2582),
                            o = r(3758),
                            c = s(r(8346)),
                            u = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: s,
                                    textPosition: i = 'left',
                                    contentLinesCount: u = 2,
                                    title: d,
                                    description: f,
                                    explicitMarkComponent: x,
                                    chart: _,
                                    children: p,
                                    srTitle: m,
                                    wrapperClassName: v,
                                    ...g
                                } = e;
                                return (0, n.jsxs)('div', {
                                    className: (0, a.clsx)(c.default.root, s),
                                    ref: t,
                                    ...g,
                                    children: [
                                        (0, n.jsx)(o.SROnly, { tabIndex: -1, children: null != m ? m : d }),
                                        (0, n.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, n.jsxs)('div', {
                                            className: (0, a.clsx)(c.default.wrapper, v),
                                            children: [
                                                _,
                                                (0, n.jsxs)('div', {
                                                    className: (0, a.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(i)],
                                                        c.default['content_linesCount_'.concat(u)],
                                                    ),
                                                    children: [
                                                        (0, n.jsxs)('div', {
                                                            className: c.default.titleContainer,
                                                            children: [
                                                                (0, n.jsx)(l.Caption, {
                                                                    className: c.default.title,
                                                                    variant: 'div',
                                                                    type: 'entity',
                                                                    size: 's',
                                                                    weight: 'medium',
                                                                    lineClamp: 2,
                                                                    children: d,
                                                                }),
                                                                x,
                                                            ],
                                                        }),
                                                        f,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
                    },
                    2: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(2582),
                            l = s(r(6132));
                        t.Label = (e) => {
                            let { children: t, className: r, size: s = 's', ...o } = e;
                            return (0, n.jsx)(a.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: s,
                                lineClamp: 1,
                                className: (0, i.clsx)(l.default.root, r),
                                ...o,
                                children: t,
                            });
                        };
                    },
                    9e3: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        var s = r(2);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return s.Label;
                            },
                        });
                    },
                    2865: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = s(r(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: s, ...o } = e,
                                c = (0, i.clsx)(l.default.root, { [l.default.focusable]: r }, t);
                            return (0, a.isValidElement)(s)
                                ? (0, a.cloneElement)(s, { ...o, className: (0, i.clsx)(c, s.props.className) })
                                : (0, n.jsx)('span', { className: c, ...o, children: s });
                        };
                    },
                    3758: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        var s = r(2865);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return s.SROnly;
                            },
                        });
                    },
                    7743: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(4721),
                            o = s(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: s = 'text', size: a = 's', className: c, children: u, weight: d = 'medium', ...f } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, i.clsx)(o.default.root, o.default['root_'.concat(s, '_').concat(a)], o.default['root_weight_'.concat(d)], c),
                                ...f,
                                children: u,
                            });
                        }),
                            (t.Caption = (0, a.forwardRef)((e, r) => (0, n.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    404: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(4721),
                            o = s(r(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: s = 'bold', size: a = 's', className: c, children: u, ...d } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, i.clsx)(o.default.root, o.default['root_size_'.concat(a)], o.default['root_weight_'.concat(s)], c),
                                ...d,
                                children: u,
                            });
                        }),
                            (t.Heading = (0, a.forwardRef)((e, r) => (0, n.jsx)(t.HeadingComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = s(r(5882));
                        function o(e) {
                            let { forwardRef: t, style: r, className: s, children: a, variant: o, lineClamp: c, ...u } = e,
                                d = c && 'string' == typeof a ? a : void 0;
                            return (0, n.jsx)(o, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: d,
                                className: (0, i.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: c && c > 0, [l.default.root_clamp_oneline]: c && 1 === c, [l.default.root_clamp_multiline]: c && c > 1 },
                                    s,
                                ),
                                ...u,
                                children: a,
                            });
                        }
                        (t.TypographyComponent = o), (t.Typography = (0, a.forwardRef)((e, t) => (0, n.jsx)(o, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var s = r(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return s.Caption;
                            },
                        });
                        var n = r(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return n.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = s || (s = r.t(n, 2));
                    },
                },
                a = {};
            function l(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return i[e].call(r.exports, r, r.exports, l), r.exports;
            }
            (l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X$', { value: !0 }), (o.kk = o.m7 = void 0);
                var e = l(440);
                Object.defineProperty(o, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = l(5817);
                Object.defineProperty(o, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = o.kk,
                u = o.m7;
            o.X$;
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20168: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => s });
            var s = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
        },
        20567: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
        22370: (e, t, r) => {
            'use strict';
            r.d(t, { ArtistSocialLinks: () => _ });
            var s = r(32290),
                n = r(60900),
                i = r(16172),
                a = r(59824),
                l = r(91027),
                o = r(50162),
                c = r(49574),
                u = r(44574),
                d = r(87356),
                f = r.n(d);
            let x = (e) => {
                    var t;
                    let { link: r, artistName: a, shouldSendAnalyticsOnNavigate: d } = e,
                        { formatMessage: x } = (0, n.A)(),
                        _ = (0, c.NKK)(),
                        { ref: p, intersectionPropertyId: m } = (0, c.nMI)(),
                        v = (0, l.c)(() => {
                            var e;
                            d && _({ to: i.QT.Link, deepLink: null != (e = r.url) ? e : void 0 });
                        });
                    return (0, s.jsx)('div', {
                        ref: p,
                        'data-intersection-property-id': m,
                        children: (0, s.jsx)(u.N_, {
                            href: r.url,
                            className: f().link,
                            target: '_blank',
                            'aria-label': x({ id: 'artist.artist-links-label' }, { artistName: a, linkName: r.title }),
                            onClick: v,
                            children: (0, s.jsx)(o.Image, {
                                fit: 'contain',
                                className: f().icon,
                                size: 100,
                                src: null != (t = r.imgUrl) ? t : void 0,
                                fallbackIconVariant: 'site',
                                fallbackIconSize: 'xs',
                                withAvatarReplace: !0,
                            }),
                        }),
                    });
                },
                _ = (e) => {
                    let { links: t, artistName: r, shouldSendAnalyticsOnNavigate: n, albumId: l } = e;
                    return (0, s.jsx)('div', {
                        className: f().root,
                        ...(0, a.Am)(a.e8.content.ARTIST_ABOUT_SOCIAL_LINKS),
                        children: t.map((e, a) =>
                            (0, s.jsx)(
                                c.Bki,
                                {
                                    objectType: i.ky.Link,
                                    objectId: String(e.url),
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: t.length,
                                    mainObjectType: i.ky.Link,
                                    mainObjectId: l,
                                    children: (0, s.jsx)(x, { link: e, artistName: r, shouldSendAnalyticsOnNavigate: n }, e.url),
                                },
                                e.url,
                            ),
                        ),
                    });
                };
        },
        23030: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationDislike: () => f });
            var s = r(32290),
                n = r(63618),
                i = r(60900),
                a = r(86269),
                l = r(74196),
                o = r(71926),
                c = r(44574),
                u = r(12906),
                d = r.n(u);
            let f = (e) => {
                let t,
                    { coverUri: r, title: u, isDisliked: f, closeToast: x, className: _, entityVariant: p } = e,
                    { formatMessage: m } = (0, i.A)();
                if (f)
                    switch (p) {
                        case c.cp.PODCAST_EPISODE:
                            t = m({ id: 'notifications-info.podcast-episode-unavailable-in-recommendations' });
                            break;
                        case c.cp.AUDIOBOOK_EPISODE:
                            t = m({ id: 'notifications-info.audiobook-episode-unavailable-in-recommendations' });
                            break;
                        default:
                            t = m({ id: 'notifications-info.track-unavailable-in-recommendations' });
                    }
                else
                    switch (p) {
                        case c.cp.PODCAST_EPISODE:
                            t = m({ id: 'notifications-info.podcast-episode-available-in-recommendations' });
                            break;
                        case c.cp.AUDIOBOOK_EPISODE:
                            t = m({ id: 'notifications-info.audiobook-episode-available-in-recommendations' });
                            break;
                        default:
                            t = m({ id: 'notifications-info.track-available-in-recommendations' });
                    }
                return (0, s.jsx)(c.$W, {
                    className: (0, n.$)(d().root, _),
                    closeToast: x,
                    message: (0, s.jsxs)('div', {
                        className: d().message,
                        children: [
                            (0, s.jsx)(l.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, s.jsx)(a.Paper, {
                                className: d().cover,
                                radius: 's',
                                children: (0, s.jsx)(c.BW, { className: d().image, src: r, alt: u, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(o.Caption, { className: d().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                });
            };
        },
        33797: (e, t, r) => {
            'use strict';
            r.d(t, {
                lW: () => T.ArtistBandlinkScanner,
                V8: () => P.ArtistItem,
                dP: () => b,
                PK: () => A,
                KH: () => I.ArtistSocialLinks,
                FO: () => S.ArtistStats,
                MJ: () => C.ArtistsMenu,
                iQ: () => L.SeparatedArtists,
                DZ: () => s,
                Em: () => i,
                NE: () => l,
                dM: () => u,
                FA: () => c,
                as: () => d,
                Uw: () => f,
                AX: () => x,
                XV: () => _,
                SA: () => p.useArtistDisclaimer,
                Bn: () => m.useArtistsMenu,
                eI: () => v.useGetArtistTypeName,
                mW: () => g.useOnDislikeClick,
                KX: () => y.useOnLikeClick,
                A7: () => k.useOnPinClick,
            });
            let s = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url });
            var n = r(49574);
            let i = (e) => {
                var t, r;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, n.HgD)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (r = e.isAvailable) || r, disclaimers: (0, n.HgD)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
            var a = r(96151);
            let l = (e) => {
                var t, r, s, i, l;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, n.HgD)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, n.HgD)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (r = e.counts) ? void 0 : r.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (i = e.counts) ? void 0 : i.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (l = e.trailer) ? void 0 : l.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
            var o = r(60754);
            let c = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = [];
                    return (
                        e.forEach((r, s) => {
                            let n = e[s + 1];
                            if ('string' == typeof r && 'object' == typeof n) {
                                var i, a;
                                t.push(
                                    (0, o.wg)({
                                        id: String(n.id),
                                        name: n.name,
                                        various: n.various,
                                        isComposer: n.composer,
                                        separator: r,
                                        isAvailable: null == (a = n.available) || a,
                                        disclaimers: n.disclaimers,
                                        coverUri: null == (i = n.cover) ? void 0 : i.uri,
                                    }),
                                );
                            }
                        }),
                        t.length > 0 ? t : void 0
                    );
                },
                u = (e) => {
                    var t, r, s;
                    let i = c(e.decomposed),
                        a = (null == e ? void 0 : e.counts) ? ((e) => ({ albums: e.directAlbums, compilations: e.alsoAlbums, tracks: e.tracks }))(e.counts) : void 0,
                        l = (0, n.mxW)(e.trailer),
                        u = e.cutoutCover ? (0, n.pX4)(e.cutoutCover) : void 0;
                    return (0, o.wg)({
                        id: String(e.id),
                        name: e.name,
                        isComposer: e.composer,
                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                        coverType: null == (r = e.cover) ? void 0 : r.type,
                        various: e.various,
                        averageColor: (0, n.QBb)(null == e ? void 0 : e.derivedColors),
                        decomposed: i,
                        counts: a,
                        isAvailable: null == (s = null == e ? void 0 : e.available) || s,
                        disclaimers: e.disclaimers,
                        trailer: l,
                        cutoutCover: u,
                    });
                },
                d = (e) => {
                    var t, r;
                    let { artist: s, trailer: i, isComposer: a, likesCount: l } = e,
                        u = c(s.decomposed),
                        { available: d, disclaimers: f } = (0, n.fyr)(s);
                    return (0, o.wg)({
                        id: String(s.id),
                        name: s.name,
                        coverUri: null == (t = s.cover) ? void 0 : t.uri,
                        various: s.various,
                        decomposed: u,
                        isAvailable: d,
                        disclaimers: f,
                        isComposer: a,
                        averageColor: null == (r = s.cover) ? void 0 : r.color,
                        trailer: (0, n.mxW)(i),
                        likesCount: l,
                    });
                },
                f = (e, t) => {
                    let r = e / 60;
                    return r <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(r) }) : t({ id: 'time.hours' }, { hours: Math.round((r / 60) * 2) / 2 });
                },
                x = (e) =>
                    e.reduce(
                        (e, t) =>
                            e +
                            1 +
                            ((e) => {
                                var t;
                                return null != (t = null == e ? void 0 : e.length) ? t : 0;
                            })(t.decomposed),
                        0,
                    ),
                _ = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                    return e
                        .map((e) =>
                            e.decomposed
                                ? e.name +
                                  e.decomposed
                                      .map((e) => {
                                          var t;
                                          return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                      })
                                      .join('')
                                : e.name,
                        )
                        .join(t);
                };
            var p = r(91853),
                m = r(96036),
                v = r(86955),
                g = r(11067),
                y = r(5942),
                k = r(70390);
            let b = o.gK.model('ArtistLink', { imgUrl: o.gK.maybeNull(o.gK.string), title: o.gK.maybeNull(o.gK.string), url: o.gK.maybeNull(o.gK.string) });
            var E = r(90404),
                h = r(63380),
                O = r(95428);
            let w = o.gK
                    .compose(
                        o.gK.model('BaseArtist', {
                            id: o.gK.string,
                            name: o.gK.string,
                            various: o.gK.maybe(o.gK.boolean),
                            isComposer: o.gK.maybe(o.gK.boolean),
                            isAvailable: o.gK.boolean,
                            trailer: o.gK.maybe(O.aQ),
                            coverUri: o.gK.maybe(o.gK.string),
                            coverType: o.gK.maybe(o.gK.string),
                            cutoutCover: o.gK.maybe(O.$B),
                        }),
                        O.tP,
                        O.Ec,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.id, '_').concat(e.name);
                        },
                        get url() {
                            let { href: t } = (0, n.uvd)('/artist/:artistId', { params: { artistId: e.id } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, o._n)(e)) return !1;
                            let { library: t } = (0, o.Zn)(e);
                            return t.isArtistLiked(e.id);
                        },
                        get isDisliked() {
                            if (!(0, o._n)(e)) return !1;
                            let { library: t } = (0, o.Zn)(e);
                            return t.isArtistDisliked(e.id);
                        },
                        get pinId() {
                            return ''.concat(E._.ARTIST_ITEM).concat(e.id);
                        },
                        get seeds() {
                            return ['artist:'.concat(e.id)];
                        },
                        get isPinned() {
                            if (!(0, o._n)(e)) return !1;
                            let { pinsCollection: t } = (0, o.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        get isCoverFromAlbum() {
                            if (!(0, o._n)(e)) return !1;
                            return e.coverType === a.Q.FROM_ALBUM_COVER;
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : n.nPY.ARTIST, entityId: e.id }),
                    }))
                    .actions((e) => ({
                        toggleLike: (0, o.L3)(function* () {
                            if (!(0, o._n)(e)) return;
                            let { library: t, user: r } = (0, o.Zn)(e);
                            if (r.isAuthorized) {
                                let s = yield t.toggleArtistLike({ entityId: e.id, userId: r.account.data.uid });
                                return (0, o._n)(e) && s === h.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), s;
                            }
                        }),
                        toggleDislike() {
                            if (!(0, o._n)(e)) return;
                            let { library: t, user: r } = (0, o.Zn)(e);
                            return t.toggleArtistDislike({ entityId: e.id, userId: r.account.data.uid });
                        },
                        togglePin: (0, o.L3)(function* () {
                            if (!(0, o._n)(e)) return;
                            let { pinsCollection: t, user: r } = (0, o.Zn)(e);
                            if (r.isAuthorized) return yield t.toggleArtistPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                R = o.gK.model('Counts', { albums: o.gK.number, compilations: o.gK.number, tracks: o.gK.number }),
                j = w.props({ separator: o.gK.maybe(o.gK.string) }),
                A = w.props({ decomposed: o.gK.maybe(o.gK.array(j)), averageColor: o.gK.maybe(o.gK.string), counts: o.gK.maybe(R) }).views((e) => ({
                    get isAvailableForPlaying() {
                        if (void 0 === e.counts) return !0;
                        return e.counts.tracks > 0;
                    },
                }));
            var T = r(43742),
                P = r(78176),
                C = r(45754),
                I = r(22370),
                S = r(10466),
                L = r(41677);
        },
        38533: (e) => {
            e.exports = {
                message: 'EditorsFeaturesNotification_message__Q__9v',
                text: 'EditorsFeaturesNotification_text__b79yA',
                title: 'EditorsFeaturesNotification_title__BuJZ_',
                link: 'EditorsFeaturesNotification_link__deYjx',
                playlistTitle: 'EditorsFeaturesNotification_playlistTitle__Hv7bZ',
                image: 'EditorsFeaturesNotification_image__AidPK',
            };
        },
        39055: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationAddToPlaylist: () => x });
            var s = r(32290),
                n = r(96103),
                i = r(55178),
                a = r(39407),
                l = r(91027),
                o = r(71926),
                c = r(49574),
                u = r(44574),
                d = r(61),
                f = r.n(d);
            let x = (0, n.PA)((e) => {
                let { entityTitle: t, entityVariant: r, entityCoverUri: n, playlist: d, closeToast: x } = e,
                    { fullscreenPlayer: _ } = (0, c.Pjs)(),
                    p = (0, l.c)(() => {
                        _.modal.isOpened && _.modal.close();
                    }),
                    m = (0, i.useMemo)(() => {
                        let e,
                            n = {
                                trackName: (0, s.jsxs)(o.Caption, {
                                    className: f().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, s.jsx)(u.N_, {
                                    className: f().link,
                                    href: d.url,
                                    onClick: p,
                                    children: (0, s.jsxs)(o.Caption, {
                                        className: f().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', d.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (r) {
                            case u.cp.PODCAST_EPISODE:
                                e = (0, s.jsx)(a.A, { id: 'notifications-info.added-podcast-episode-to-playlist', values: n });
                                break;
                            case u.cp.AUDIOBOOK_EPISODE:
                                e = (0, s.jsx)(a.A, { id: 'notifications-info.added-audiobook-episode-to-playlist', values: n });
                                break;
                            default:
                                e = (0, s.jsx)(a.A, { id: 'notifications-info.added-track-to-playlist', values: n });
                        }
                        return (0, s.jsx)(o.Caption, { className: f().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, r, p, d.title, d.url]);
                return (0, s.jsx)(u.$W, {
                    closeToast: x,
                    message: m,
                    cover: (0, s.jsx)(u.BW, { className: f().image, src: n, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { SeparatedArtists: () => N });
            var s = r(32290),
                n = r(63618),
                i = r(96103),
                a = r(55178),
                l = r(70280),
                o = r(49574),
                c = r(40484),
                u = r.n(c),
                d = r(60900),
                f = r(16172),
                x = r(59824),
                _ = r(91027),
                p = r(71926),
                m = r(44574);
            let v = (0, i.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: n,
                            captionClassName: i,
                            captionSize: a = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: u,
                            hoverSettings: v,
                        } = e,
                        { formatMessage: g } = (0, d.A)(),
                        {
                            track: y,
                            settings: { isMobile: k },
                        } = (0, o.Pjs)(),
                        b = (0, o.ZpR)(t.url),
                        { sendNavigateSearchFeedback: E } = (0, o.zEv)(),
                        h = (0, o.NKK)(),
                        O = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: s, fullscreenPlayer: n, fullscreenVideoPlayer: i } = (0, o.Pjs)(),
                                { modal: a } = s;
                            return (0, o.lVe)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), a.isOpened && (s.reset(), a.close()), n.modal.isOpened && n.modal.close();
                                },
                                onAfterHandled: () => {
                                    i.modal.isOpened && (i.modal.close(), i.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, _.c)((e) => {
                                k && y.isOpened && y.close(), b(e);
                            }),
                        }),
                        w = (0, _.c)((e) => {
                            h({ to: f.QT.ArtistScreen }), null == E || E(), O(e);
                        });
                    return r && !t.various
                        ? (0, s.jsx)(m.N_, {
                              'aria-label': g({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: n,
                              href: t.url,
                              onClick: w,
                              title: u ? void 0 : c || t.name,
                              ...(0, x.Am)(x.OA.artists.SEPARATED_ARTIST_TITLE),
                              children: (0, s.jsx)(l.m_, {
                                  enabled: !c && u,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: v,
                                  children: (0, s.jsx)(p.Caption, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: i, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(l.m_, {
                              enabled: !c && u,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: v,
                              children: (0, s.jsx)(p.Caption, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: i,
                                  title: u ? void 0 : c || t.name,
                                  ...(0, x.Am)(x.OA.artists.SEPARATED_ARTIST_TITLE),
                                  children: t.name,
                              }),
                          });
                }),
                g = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: n,
                            captionClassName: i,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: u,
                            shouldUseSeparator: d = !0,
                        } = e,
                        f = (0, a.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              d ? t.separator : '',
                                              (0, s.jsx)(
                                                  v,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: n,
                                                      captionClassName: i,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: u,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, d, r, n, i, l, o, c, u]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(v, {
                                artist: t,
                                withLink: r,
                                linkClassName: n,
                                captionClassName: i,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: u,
                            }),
                            f,
                        ],
                    });
                };
            var y = r(39407),
                k = r(63887);
            let b = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: i } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(u().spoiler, r),
                            onClick: i,
                            rel: 'nofollow',
                            ...(0, x.Am)(x.OA.artists.SEPARATED_ARTISTS_SPOILER),
                            children: (0, s.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = r(8055),
                h = r(6752),
                O = r(36526),
                w = r(78176),
                R = r(83598),
                j = r.n(R);
            let A = (0, i.PA)((e) => {
                    let { label: t, artists: r, forwardRef: n } = e;
                    return (0, s.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: n, children: t }),
                            (0, s.jsx)(l.ZI, {
                                className: j().tooltipContent,
                                children: r.map((e) => (0, s.jsx)(w.ArtistItem, { artist: e, className: j().artistItem }, e.id)),
                            }),
                        ],
                    });
                }),
                T = (0, a.forwardRef)((e, t) => (0, s.jsx)(A, { forwardRef: t, ...e }));
            var P = r(19740),
                C = r(52598),
                I = r.n(C);
            let S = (0, i.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: i } = (0, d.A)();
                    return (0, s.jsx)(P.W1, {
                        isMobile: !0,
                        className: (0, n.$)(I().root, I().important),
                        label: t,
                        ariaLabel: i({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, s.jsx)(w.ArtistItem, { artist: e }, e.id)),
                    });
                }),
                L = (0, i.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: n } = e,
                        [i, l] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.Pjs)(),
                        u = (0, _.c)(() => {
                            let e = n.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        d = (0, h.L)(() =>
                            (0, E.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', d),
                                u(),
                                () => {
                                    window.removeEventListener('resize', d);
                                }
                            ),
                            [d, u],
                        ),
                        (0, a.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (i || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(S, { artists: t, label: r }) : (0, s.jsx)(T, { artists: t, label: r })) : r;
                }),
                N = (0, i.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: i = ', ',
                            lineClamp: c,
                            visibleArtistsCount: d,
                            withLink: f = !0,
                            spoilerClassName: x,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: m,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: k = !0,
                            spoilerComponent: E,
                            withCustomTooltip: h = !0,
                            artistIdWithoutLink: O,
                            withContextMenu: w,
                        } = e,
                        R = (0, a.useRef)(null),
                        [j, A] = (0, a.useState)(!1),
                        T = y
                            ? r
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let r = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...r]) : [t.name, ...r];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(i)
                            : '',
                        {
                            settings: { isMobile: P },
                        } = (0, o.Pjs)(),
                        C = 1 === r.length,
                        I = (0, a.useCallback)((e) => {
                            A(!0), e.preventDefault();
                        }, []),
                        S = (0, a.useMemo)(() => {
                            let e = r;
                            return (
                                d && !j && (e = r.slice(0, d)),
                                e.reduce((e, t) => {
                                    if (!k && t.isComposer) return e.length ? e : [];
                                    let r = (0, s.jsx)(
                                        g,
                                        {
                                            artist: t,
                                            linkClassName: _,
                                            captionClassName: p,
                                            withLink: f && t.id !== O && (((!P || C) && w) || !w),
                                            captionSize: m,
                                            allArtistsTitle: T,
                                            withCustomTooltip: h,
                                            hoverSettings: o.VP$,
                                            shouldUseSeparator: !!i,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([i, r]) : [r];
                                }, [])
                            );
                        }, [r, d, j, k, P, C, w, _, p, f, O, m, T, h, i]),
                        N = (0, a.useMemo)(() => {
                            if (!j && d && d < r.length) {
                                let e = r.length - d;
                                return (0, a.isValidElement)(E) ? E : (0, s.jsx)(b, { spoilerClassName: x, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [r.length, I, j, x, E, d]),
                        M = (0, a.useMemo)(() => {
                            if (c) return { WebkitLineClamp: c };
                        }, [c]),
                        H = (0, s.jsx)(l.m_, {
                            referenceRef: R,
                            enabled: !!(y && T) && h && !w && !P,
                            offsetOptions: 4,
                            placement: 'top',
                            text: T,
                            hoverSettings: o.VP$,
                            children: (0, s.jsxs)('div', {
                                style: M,
                                className: (0, n.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: c && c > 0 }, { [u().ellipsis]: !c }, t),
                                title: y && T && !h && !w ? T : void 0,
                                children: [S, N],
                            }),
                        });
                    return w ? (0, s.jsx)(L, { labelRef: R, artists: r, label: H }) : H;
                });
        },
        43742: (e, t, r) => {
            'use strict';
            r.d(t, { ArtistBandlinkScanner: () => f });
            var s = r(32290),
                n = r(63618),
                i = r(39407),
                a = r(59824),
                l = r(82586),
                o = r(71926),
                c = r(44574),
                u = r(91448),
                d = r.n(u);
            let f = (e) => {
                let { className: t, artistId: r, artistName: u } = e;
                return (0, s.jsxs)(c.N_, {
                    href: 'https://band.link/scanner?search='.concat(r, '&type=artist_id&service=yandex_music'),
                    className: (0, n.$)(d().root, t),
                    ...(0, a.Am)(a.e8.content.ARTIST_ABOUT_BANDLINK_SCANNER),
                    children: [
                        (0, s.jsx)(l.Icon, { className: d().icon, variant: 'bandlink' }),
                        (0, s.jsxs)('div', {
                            className: d().description,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: d().descriptionTitle,
                                    children: [
                                        (0, s.jsx)(o.Caption, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'medium',
                                            className: d().descriptionTitleText,
                                            children: (0, s.jsx)(i.A, { id: 'artist.artist-in-playlists' }),
                                        }),
                                        (0, s.jsx)(l.Icon, { variant: 'link', size: 'xxs', className: d().descriptionTitleButton }),
                                    ],
                                }),
                                (0, s.jsx)(o.Caption, { variant: 'div', size: 'l', weight: 'medium', className: d().descriptionArtist, children: null != u ? u : '' }),
                            ],
                        }),
                    ],
                });
            };
        },
        44277: (e, t, r) => {
            'use strict';
            r.d(t, { CreatePlaylistCard: () => y });
            var s = r(32290),
                n = r(63618),
                i = r(96103),
                a = r(21916),
                l = r(55178),
                o = r(60900),
                c = r(39407),
                u = r(59824),
                d = r(2047),
                f = r(63423),
                x = r(82586),
                _ = r(71926),
                p = r(49574),
                m = r(44574),
                v = r(20567),
                g = r.n(v);
            let y = (0, i.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: r } = (0, o.A)(),
                    { createPlaylist: i } = (0, p.Pjs)(),
                    { notify: v } = (0, p.lkh)(),
                    y = (0, a.useRouter)(),
                    k = (0, l.useRef)(!1),
                    b = (0, l.useCallback)(async () => {
                        if (k.current) return;
                        k.current = !0;
                        let e = await i.create({ title: r({ id: 'entity-names.new-playlist' }), visibility: d.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, p.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            y.push(t);
                        } else v((0, s.jsx)(m.hT, { error: r({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: p.uQT.ERROR }), (k.current = !1);
                    }, [i, r, y, v]);
                return (
                    (0, l.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    (0, s.jsxs)('div', {
                        className: (0, n.$)(g().root, t),
                        ...(0, u.Am)(u.OA.playlist.CREATE_PLAYLIST_CARD),
                        children: [
                            (0, s.jsx)(f.$, {
                                className: g().button,
                                icon: (0, s.jsx)(x.Icon, { className: g().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': r({ id: 'playlist-actions.create-playlist' }),
                                onClick: b,
                                flexIcon: !0,
                                isBlock: !0,
                                ...(0, u.Am)(u.OA.playlist.CREATE_PLAYLIST_BUTTON),
                            }),
                            (0, s.jsx)(_.Caption, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: g().text,
                                ...(0, u.Am)(u.OA.playlist.CREATE_PLAYLIST_TITLE),
                                children: (0, s.jsx)(c.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        45333: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        45754: (e, t, r) => {
            'use strict';
            r.d(t, { ArtistsMenu: () => f });
            var s = r(32290),
                n = r(96103),
                i = r(60900),
                a = r(59824),
                l = r(48454),
                o = r(49574),
                c = r(78176),
                u = r(49492),
                d = r.n(u);
            let f = (0, n.PA)((e) => {
                let { artists: t, open: r, positionElement: n, onOpenChange: u } = e,
                    { formatMessage: f } = (0, i.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, o.Pjs)();
                return (0, s.jsxs)(l.AM, {
                    isMobile: x,
                    placement: x ? 'bottom' : 'top',
                    open: r,
                    onOpenChange: u,
                    positionElement: x ? void 0 : n,
                    transform: x,
                    children: [
                        null,
                        (0, s.jsx)(l.hl, {
                            className: d().root,
                            'aria-label': f({ id: 'interface-actions.context-menu-artists' }),
                            ...(0, a.Am)(a.OA.artists.ARTISTS_MENU),
                            children: (0, s.jsx)('div', {
                                className: d().menuList,
                                children: t.map((e) => (0, s.jsx)(c.ArtistItem, { artist: e, className: d().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
        },
        47989: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationFailedAddToPlaylist: () => c });
            var s = r(32290),
                n = r(39407),
                i = r(71926),
                a = r(44574),
                l = r(78099),
                o = r.n(l);
            let c = () =>
                (0, s.jsx)(a.$W, {
                    message: (0, s.jsx)(i.Caption, {
                        className: o().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, s.jsx)(n.A, { id: 'playlist-errors.failed-add-track-to-playlist' }),
                    }),
                });
        },
        48753: (e) => {
            e.exports = {
                menuContent: 'ContextMenuAddTracksToPlaylistItem_menuContent__xq7AW',
                playlistList: 'ContextMenuAddTracksToPlaylistItem_playlistList__B4kxD',
                searchSection: 'ContextMenuAddTracksToPlaylistItem_searchSection__XKQcm',
                searchField: 'ContextMenuAddTracksToPlaylistItem_searchField__02VVy',
                playlistItemIcon: 'ContextMenuAddTracksToPlaylistItem_playlistItemIcon__76dbD',
                playlistItem: 'ContextMenuAddTracksToPlaylistItem_playlistItem___kFlm',
                emptyState: 'ContextMenuAddTracksToPlaylistItem_emptyState__vrM8b',
                createPlaylistButton: 'ContextMenuAddTracksToPlaylistItem_createPlaylistButton__IlAeY',
                menuDivider: 'ContextMenuAddTracksToPlaylistItem_menuDivider__oZg1N',
            };
        },
        49492: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        52981: (e, t, r) => {
            'use strict';
            r.d(t, { useOnLikeClick: () => c });
            var s = r(32290),
                n = r(60900),
                i = r(91027),
                a = r(49574),
                l = r(44574),
                o = r(85940);
            let c = (e) => {
                let { user: t, fullscreenPlayer: r } = (0, a.Pjs)(),
                    { notify: c } = (0, a.lkh)(),
                    { formatMessage: u } = (0, n.A)(),
                    d = (0, o.f)();
                return (0, i.c)(async () => {
                    if (!e) return;
                    let n = r.modal.isOpened ? a.uQT.FULLSCREEN_INFO : a.uQT.INFO,
                        i = r.modal.isOpened ? a.uQT.FULLSCREEN_ERROR : a.uQT.ERROR;
                    return t.isAuthorized
                        ? d({ track: e, errorContainerId: i, infoContainerId: n })
                        : void c((0, s.jsx)(l.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: i });
                });
            };
        },
        54203: (e, t, r) => {
            'use strict';
            r.d(t, { useTrackSourceContext: () => o });
            var s = r(55178),
                n = r(71483),
                i = r(49574),
                a = r(83778);
            let l = { [i._Q$.SEARCH]: a.h.SEARCH, [i._Q$.DOWNLOADS_TRACKS]: a.h.DOWNLOADED_TRACKS, [i._Q$.HISTORY]: a.h.MUSIC_HISTORY };
            function o(e) {
                var t, r;
                let { album: o, playlist: c, artist: u, track: d } = (0, i.Pjs)(),
                    { sourceContextData: f } = (0, i.SsQ)(),
                    { pageId: x } = (0, i.$au)();
                return (0, s.useMemo)(() => {
                    var t, r, s, _;
                    let p = null == f ? void 0 : f.sourceContextType,
                        m = null != p ? p : x && l[x] ? l[x] : a.h.BASED_ON_ENTITY_BY_DEFAULT,
                        v = !!(null == f || null == (t = f.meta) ? void 0 : t.id);
                    if (f && (f.type !== n.K.Various || v)) return f;
                    let g = d.isOpened ? d.albumId : null;
                    return g
                        ? (0, i.tW0)({ contextType: n.K.Album, contextId: g, entityContextType: m })
                        : (null == (r = c.meta) ? void 0 : r.uid) && (null == (s = c.meta) ? void 0 : s.kind)
                          ? (0, i.tW0)({
                                contextType: n.K.Playlist,
                                contextId: ''.concat(c.meta.uid, ':').concat(c.meta.kind),
                                playlistUid: c.meta.uid,
                                playlistKind: c.meta.kind,
                                filter: c.filters.activeFilter,
                                entityContextType: m,
                            })
                          : o.id
                            ? (0, i.tW0)({ contextType: n.K.Album, contextId: o.id, entityContextType: m })
                            : u.id
                              ? (0, i.tW0)({ contextType: n.K.Artist, contextId: u.id, entityContextType: m })
                              : (null == e ? void 0 : e.albumId)
                                ? (0, i.tW0)({ contextType: n.K.Album, contextId: e.albumId, entityContextType: m })
                                : (0, i.tW0)({ contextType: n.K.Various, contextId: null != (_ = null == e ? void 0 : e.id) ? _ : '', entityContextType: m });
                }, [
                    f,
                    x,
                    d.isOpened,
                    d.albumId,
                    o.id,
                    null == (t = c.meta) ? void 0 : t.uid,
                    null == (r = c.meta) ? void 0 : r.kind,
                    c.filters.activeFilter,
                    u.id,
                    null == e ? void 0 : e.albumId,
                    null == e ? void 0 : e.id,
                ]);
            }
        },
        54578: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => l });
            var s = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        r.r(t), r.d(t, { clsx: () => s, default: () => n });
                        let n = s;
                    },
                    9201: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5455: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = s(r(9201));
                        t.Divider = (e) => {
                            let { className: t, orientation: r = 'horizontal', children: s, ...l } = e,
                                o = s && (0, n.jsx)('span', { children: s });
                            return (0, n.jsx)('div', {
                                className: (0, i.clsx)(a.default.root, { [a.default[r]]: r, [a.default.hasLabel]: o }, t),
                                ...l,
                                role: 'separator',
                                'aria-orientation': r,
                                children: o,
                            });
                        };
                    },
                },
                n = {};
            function i(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return s[e].call(r.exports, r, r.exports, i), r.exports;
            }
            (i.d = (e, t) => {
                for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (i.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var a = {};
            (() => {
                Object.defineProperty(a, '__esModule', { value: !0 }), (a.Divider = void 0);
                var e = i(5455);
                Object.defineProperty(a, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var l = a.Divider;
            a.__esModule;
        },
        54869: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationFailedRemoveFromPlaylist: () => c });
            var s = r(32290),
                n = r(39407),
                i = r(71926),
                a = r(44574),
                l = r(78099),
                o = r.n(l);
            let c = () =>
                (0, s.jsx)(a.$W, {
                    message: (0, s.jsx)(i.Caption, {
                        className: o().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, s.jsx)(n.A, { id: 'playlist-errors.failed-to-remove-track' }),
                    }),
                });
        },
        54950: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a, e: () => i });
            var s = r(96333),
                n = r(44574);
            let i = (e) => {
                    if (!e) return n.cp.TRACK;
                    switch (e.type) {
                        case s.S.PODCAST:
                            return n.cp.PODCAST_EPISODE;
                        case s.S.AUDIOBOOK:
                            return n.cp.AUDIOBOOK_EPISODE;
                        default:
                            return n.cp.TRACK;
                    }
                },
                a = (e) => i(e);
        },
        55550: (e, t, r) => {
            'use strict';
            r.d(t, {
                $o: () => h,
                Y9: () => o.Y,
                Qo: () => R.ContextMenuAddTracksToPlaylistItem,
                uY: () => j.ContextMenuPlaylistPrivacyItem,
                Bw: () => A.CreatePlaylistCard,
                Co: () => O,
                iz: () => c,
                kc: () => u,
                mZ: () => C.NotificationAddToPlaylist,
                pw: () => T.NotificationFailedAddToPlaylist,
                HB: () => P.NotificationFailedRemoveFromPlaylist,
                mM: () => I.NotificationRemoveFromPlaylist,
                Q1: () => f,
                yC: () => _.y,
                ji: () => p,
                Zq: () => w,
                xG: () => x.TrackPlaylistContext,
                Ji: () => n,
                jX: () => l,
                Mp: () => d.M,
                KX: () => m.useOnLikeClick,
                A7: () => v.useOnPinClick,
            });
            var s = r(96151);
            let n = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: s.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: s.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
            var i = r(60754),
                a = r(49574);
            let l = (e) => {
                var t, r, s, n, l;
                e = e || {};
                let o = (0, a.mxW)(e.trailer);
                return (0, i.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (l = e.playlistUuid) ? l : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (s = e.cover) || null == (r = s.itemsUri) ? void 0 : r[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, a.QBb)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: o,
                });
            };
            var o = r(20168);
            let c = 1e3,
                u = 100;
            var d = r(66920),
                f = (function (e) {
                    return (e.ALL = 'all'), e;
                })({}),
                x = r(83917),
                _ = r(14482),
                p = (function (e) {
                    return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
                })({}),
                m = r(73141),
                v = r(73192),
                g = r(87953),
                y = r(2047),
                k = r(90404),
                b = r(63380),
                E = r(95428);
            let h = i.gK
                    .compose(
                        i.gK.model({
                            uuid: i.gK.string,
                            isAvailable: i.gK.boolean,
                            revision: i.gK.maybe(i.gK.number),
                            uid: i.gK.number,
                            kind: i.gK.number,
                            title: i.gK.maybe(i.gK.string),
                            coverUri: i.gK.maybe(i.gK.string),
                            tracksCount: i.gK.maybe(i.gK.number),
                            averageColor: i.gK.maybe(i.gK.string),
                            generatedPlaylistType: i.gK.maybe(i.gK.string),
                            personalColor: i.gK.maybeNull(i.gK.number),
                            visibility: i.gK.maybe(i.gK.string),
                            trailer: i.gK.maybe(E.aQ),
                        }),
                        E.tP,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                        },
                        get url() {
                            let { href: t } = (0, a.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                            return t;
                        },
                        get isLikesCountHidden() {
                            return e.kind === p.LIKE || e.kind === p.CHART || e.generatedPlaylistType;
                        },
                        get isFavouritePlaylist() {
                            return e.kind === p.LIKE;
                        },
                        get isPublic() {
                            return e.visibility === y.L.PUBLIC;
                        },
                        get isLiked() {
                            if (!(0, i._n)(e)) return !1;
                            let { library: t } = (0, i.Zn)(e);
                            return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                        },
                        get pinId() {
                            return ''.concat(k._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                        },
                        get id() {
                            return ''.concat(e.uid, ':').concat(e.kind);
                        },
                        get isPinned() {
                            if (!(0, i._n)(e)) return !1;
                            let { pinsCollection: t } = (0, i.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isOwnPlaylist() {
                            let { user: t } = (0, i.Zn)(e);
                            return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                        },
                        get canUserChange() {
                            if (!(0, i._n)(e)) return !1;
                            return this.isOwnPlaylist && !this.isFavouritePlaylist;
                        },
                        get isOwnFavouritePlaylist() {
                            if (!(0, i._n)(e)) return !1;
                            return this.isFavouritePlaylist && this.isOwnPlaylist;
                        },
                    }))
                    .actions((e) => ({
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, i.Zn)(e);
                            if (r.isAuthorized) {
                                let s = yield t.togglePlaylistLike({ userId: r.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                                return (0, i._n)(e) && s === b.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), s;
                            }
                        }),
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: t, user: r } = (0, i.Zn)(e);
                            if (r.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                        }),
                        changePlaylist: (0, i.L3)(function* (t) {
                            if (!(0, i._n)(e)) return o.Y.ERROR;
                            let { usersResource: r, modelActionsLogger: s } = (0, i._$)(e);
                            try {
                                var n, a;
                                let s = yield r.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (n = e.revision) ? n : 0, playlistKind: e.kind });
                                return (e.revision = s.revision), (e.isAvailable = null == (a = s.available) || a), o.Y.OK;
                            } catch (e) {
                                if ((s.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === g.X1.PRECONDITION_FAILED)) return o.Y.RELOAD;
                                return o.Y.ERROR;
                            }
                        }),
                        changeTitle: (0, i.L3)(function* (t) {
                            if (!(0, i._n)(e)) return a.FlZ.ERROR;
                            if (e.title === t) return a.FlZ.OK;
                            let { usersResource: r, modelActionsLogger: s } = (0, i._$)(e);
                            if (e.canUserChange) {
                                if (t.length < 1 || t.length > u) return a.FlZ.ERROR;
                                let n = e.title;
                                e.title = t;
                                try {
                                    let s = yield r.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                    if (!(null == s ? void 0 : s.title)) return (e.title = n), a.FlZ.ERROR;
                                    return (e.title = s.title), a.FlZ.OK;
                                } catch (t) {
                                    (e.title = n), s.error(t);
                                }
                            }
                            return a.FlZ.ERROR;
                        }),
                        deletePlaylist: (0, i.L3)(function* () {
                            if (!(0, i._n)(e) || !e.canUserChange) return a.FlZ.ERROR;
                            let { pinsCollection: t } = (0, i.Zn)(e),
                                { usersResource: r, modelActionsLogger: s } = (0, i._$)(e);
                            try {
                                return yield r.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), a.FlZ.OK;
                            } catch (e) {
                                s.error(e);
                            }
                            return a.FlZ.ERROR;
                        }),
                        toggleVisibility: (0, i.L3)(function* (t) {
                            if (!(0, i._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return a.FlZ.ERROR;
                            let { usersResource: r, modelActionsLogger: s } = (0, i._$)(e),
                                { user: n } = (0, i.Zn)(e),
                                l = e.visibility,
                                o = e.isPublic ? y.L.PRIVATE : y.L.PUBLIC;
                            t && (o = t);
                            try {
                                return (
                                    (e.visibility = o),
                                    e.isOwnFavouritePlaylist
                                        ? yield n.setSettings({ userMusicVisibility: o })
                                        : yield r.togglePlaylistVisibility({ visibility: o, userId: e.uid, playlistKind: e.kind }),
                                    a.FlZ.OK
                                );
                            } catch (e) {
                                s.error(e);
                            }
                            return (e.visibility = l), a.FlZ.ERROR;
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                O = i.gK.model('CreatePlaylist', { meta: i.gK.maybeNull(h) }).actions((e) => ({
                    create: (0, i.L3)(function* (t) {
                        if (!(0, i._n)(e)) return null;
                        let { usersResource: r, modelActionsLogger: s } = (0, i._$)(e),
                            { user: n } = (0, i.Zn)(e);
                        if (!n.isAuthorized) return null;
                        let a = n.account.data.uid;
                        try {
                            let s = yield r.createPlaylist({ userId: String(a), ...t });
                            return (e.meta = l(s)), e.meta.uuid;
                        } catch (e) {
                            return s.error(e), null;
                        }
                    }),
                    reset() {
                        e.meta = null;
                    },
                })),
                w = h.props({ tracks: i.gK.maybe(i.gK.array(E.eD)) }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
            var R = r(11674),
                j = r(10511),
                A = r(44277),
                T = r(47989),
                P = r(54869),
                C = r(39055);
            r(12779);
            var I = r(96919);
        },
        58270: (e) => {
            e.exports = { message: 'EditorsFeaturesFailedNotification_message__EIgMe' };
        },
        58294: (e, t, r) => {
            'use strict';
            r.d(t, { ListeningProgress: () => g });
            var s = r(32290),
                n = r(63618),
                i = r(96103),
                a = r(55178),
                l = r(39407),
                o = r(59824),
                c = r(74924),
                u = r(82586),
                d = r(71926),
                f = r(72676),
                x = r(49574),
                _ = r(83557),
                p = r(66436),
                m = r(95082),
                v = r.n(m);
            let g = (0, i.PA)((e) => {
                var t, r, i, m, g, y, k, b, E;
                let { className: h, id: O, albumId: w, streamProgress: R, durationMs: j, playContextParams: A, withTimeLeftText: T = !0, isFinishedLabelHidden: P } = e,
                    C = (0, x.eGp)(),
                    { sonataState: I, album: S } = (0, x.Pjs)(),
                    L = Math.floor(j / 1e3),
                    [N, M] = (0, a.useState)(!1),
                    H = (0, p.useTimeLeftText)(),
                    { isPlaying: D, isCurrent: K } = (0, x.Dx4)({ playContextParams: A, entityId: w ? ''.concat(O, ':').concat(w) : O });
                (0, a.useEffect)(() => {
                    if (!K) return void M(!1);
                    let e =
                        null == C
                            ? void 0
                            : C.state.playerState.status.onChange(() => {
                                  (null == C ? void 0 : C.state.playerState.status.value) === f.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [C, R, K, D]),
                    (0, a.useEffect)(() => {
                        var e;
                        (null == S || null == (e = S.meta) ? void 0 : e.listeningFinished)
                            ? (R.updateEndPositionSec(0), R.updateEverFinished(!0))
                            : (null == S ? void 0 : S.allTracksUnfinished) && R.updateEverFinished(!1);
                    }, [R, null == S ? void 0 : S.allTracksUnfinished, null == S || null == (t = S.meta) ? void 0 : t.listeningFinished]),
                    (0, a.useEffect)(() => {
                        var e, t;
                        K &&
                            (null == I || null == (e = I.entityMeta) ? void 0 : e.streamProgress) &&
                            R &&
                            I.entityMeta.streamProgress.hasEverFinished !== R.hasEverFinished &&
                            R.updateEverFinished(!!I.entityMeta.streamProgress.hasEverFinished),
                            L - ((null == R ? void 0 : R.endPositionSec) || 0) < 1 &&
                                ((null == I || null == (t = I.entityMeta) ? void 0 : t.streamProgress) &&
                                    K &&
                                    (I.entityMeta.streamProgress.updateEverFinished(!0), I.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == R || R.updateEverFinished(!0));
                    }, [
                        K,
                        null == I || null == (r = I.entityMeta) ? void 0 : r.streamProgress,
                        null == I || null == (m = I.entityMeta) || null == (i = m.streamProgress) ? void 0 : i.hasEverFinished,
                        R,
                        R.hasEverFinished,
                        R.endPositionSec,
                        L,
                    ]),
                    (0, a.useEffect)(() => {
                        if (!K) return;
                        let e =
                            null == C
                                ? void 0
                                : C.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = C.state.playerState.progress.value,
                                          r = null == I || null == (e = I.entityMeta) ? void 0 : e.streamProgress;
                                      0 !== t.position && N && R.updateEndPositionSec(t.position),
                                          K &&
                                              parseInt(''.concat(null == r ? void 0 : r.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == r || r.updateEndPositionSec(t.position));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [C, R, K, D, N, O, null == I ? void 0 : I.entityMeta]);
                let U = (K && (null == I || null == (y = I.entityMeta) || null == (g = y.streamProgress) ? void 0 : g.endPositionSec)) || R.endPositionSec,
                    F = (0, _.useProgressTimeNonMusic)(null != U ? U : 0, L),
                    z = (0, a.useMemo)(() => {
                        var e, t, r;
                        if (
                            ((K && (null == I || null == (t = I.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == R ? void 0 : R.hasEverFinished) ||
                                (null == S || null == (r = S.meta) ? void 0 : r.listeningFinished)) &&
                            !P
                        )
                            return (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(d.Caption, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(v().text, { [v().text_withoutTimeLeft]: !T }),
                                        ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_FINISHED_TEXT),
                                        children: (0, s.jsx)(l.A, { id: 'time.finished' }),
                                    }),
                                    (0, s.jsx)(u.Icon, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: v().checkIcon,
                                        ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_FINISHED_ICON),
                                    }),
                                ],
                            });
                        if (!U || 0 === U) return;
                        let i = L - U,
                            a = H(i);
                        return (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(d.Caption, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(v().text, { [v().text_withoutTimeLeft]: !T }),
                                    ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT),
                                    children: a,
                                }),
                                i > 1 || P
                                    ? (0, s.jsx)(c.q, {
                                          'aria-valuetext': F,
                                          'aria-busy': K && D,
                                          value: U,
                                          max: L,
                                          ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS),
                                      })
                                    : (0, s.jsx)(u.Icon, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: v().checkIcon,
                                          ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_TIMINGS_ICON),
                                      }),
                            ],
                        });
                    }, [
                        L,
                        null == R ? void 0 : R.hasEverFinished,
                        T,
                        H,
                        K,
                        D,
                        null == I || null == (b = I.entityMeta) || null == (k = b.streamProgress) ? void 0 : k.hasEverFinished,
                        null == S || null == (E = S.meta) ? void 0 : E.listeningFinished,
                        P,
                        U,
                        F,
                    ]);
                return (0, s.jsx)('div', { className: (0, n.$)(v().root, h), ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS), children: z });
            });
        },
        58359: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n });
            var s = {};
            Object.defineProperty(s, '__esModule', { value: !0 }),
                (s.createRipple = void 0),
                (s.createRipple = function (e, t, r) {
                    let s = null != r ? r : e.currentTarget,
                        n = document.createElement('span'),
                        i = Math.max(s.clientWidth, s.clientHeight),
                        a = i / 2,
                        l = s.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                        c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                    (n.style.width = ''.concat(i, 'px')),
                        (n.style.height = ''.concat(i, 'px')),
                        (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - a, 'px')),
                        (n.style.top = ''.concat(c - a, 'px')),
                        n.classList.add(t);
                    let u = s.getElementsByClassName(t)[0];
                    u && u.remove(), s.insertBefore(n, s.firstChild);
                }),
                s.__esModule;
            var n = s.createRipple;
        },
        60214: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationPlayQueue: () => f });
            var s = r(32290),
                n = r(55178),
                i = r(39407),
                a = r(59824),
                l = r(71926),
                o = r(44574),
                c = r(9480),
                u = r(92002),
                d = r.n(u);
            let f = (e) => {
                let { closeToast: t, entityVariant: r, entityTitle: u, coverUri: f, variant: x } = e,
                    _ = (0, n.useMemo)(
                        () =>
                            (0, s.jsxs)(l.Caption, {
                                className: d().entityTitle,
                                variant: 'span',
                                type: 'controls',
                                size: 'm',
                                lineClamp: 1,
                                children: ['\xa0', u, '\xa0'],
                            }),
                        [u],
                    ),
                    p = (0, n.useMemo)(() => {
                        switch (x) {
                            case c.N.NEXT:
                                return ((e, t) => {
                                    switch (e) {
                                        case o.cp.TRACK:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.track-will-be-played-next', values: { title: t } });
                                        case o.cp.PODCAST_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.podcast-episode-will-be-played-next', values: { title: t } });
                                        case o.cp.AUDIOBOOK_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.audiobook-episode-will-be-played-next', values: { title: t } });
                                        case o.cp.ALBUM:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.album-will-be-played-next', values: { title: t } });
                                        case o.cp.PLAYLIST:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.playlist-will-be-played-next', values: { title: t } });
                                    }
                                })(r, _);
                            case c.N.LAST:
                                return ((e, t) => {
                                    switch (e) {
                                        case o.cp.TRACK:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.track-will-be-played-last', values: { title: t } });
                                        case o.cp.PODCAST_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.podcast-episode-will-be-played-last', values: { title: t } });
                                        case o.cp.AUDIOBOOK_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.audiobook-episode-will-be-played-last', values: { title: t } });
                                        case o.cp.ALBUM:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.album-will-be-played-last', values: { title: t } });
                                        case o.cp.PLAYLIST:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.playlist-will-be-played-last', values: { title: t } });
                                    }
                                })(r, _);
                            case c.N.HIDE:
                            case c.N.REMOVE:
                                return ((e, t) => {
                                    switch (e) {
                                        case o.cp.TRACK:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.track-will-be-removed', values: { title: t } });
                                        case o.cp.PODCAST_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.podcast-episode-will-be-removed', values: { title: t } });
                                        case o.cp.AUDIOBOOK_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.audiobook-episode-will-be-removed', values: { title: t } });
                                        case o.cp.ALBUM:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.album-will-be-removed', values: { title: t } });
                                        case o.cp.PLAYLIST:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.playlist-will-be-removed', values: { title: t } });
                                    }
                                })(r, _);
                        }
                    }, [x, r, _]);
                return (0, s.jsx)(o.$W, {
                    message: (0, s.jsx)(l.Caption, {
                        className: d().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        ...(0, a.Am)(a.OA.track.PLAY_QUEUE_NOTIFICATION_TEXT),
                        children: p,
                    }),
                    cover: (0, s.jsx)(o.BW, { className: d().image, src: f, size: 100, fit: 'cover', alt: u, withAvatarReplace: !0 }),
                    closeToast: t,
                    coverRadius: 's',
                });
            };
        },
        65163: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { O: () => s }),
                (function (e) {
                    (e.RADIO_STARTED = 'radioStarted'),
                        (e.TRACK_STARTED = 'trackStarted'),
                        (e.TRACK_FINISHED = 'trackFinished'),
                        (e.SKIP = 'skip'),
                        (e.SKIP_FAILED = 'skipFailed'),
                        (e.LIKE = 'like'),
                        (e.DISLIKE = 'dislike'),
                        (e.AD = 'ad'),
                        (e.JINGLE = 'jingle'),
                        (e.UNLIKE = 'unlike'),
                        (e.UNDISLIKE = 'undislike'),
                        (e.COMBINED_QUEUE_STARTED = 'combinedQueueStarted'),
                        (e.PLAYABLE_ITEM_STARTED = 'playableItemStarted'),
                        (e.PLAYABLE_ITEM_FINISHED = 'playableItemFinished'),
                        (e.PLAYABLE_ITEM_SKIP = 'playableItemSkip'),
                        (e.PLAYABLE_ITEM_LIKE = 'playableItemLike'),
                        (e.PLAYABLE_ITEM_DISLIKE = 'playableItemDislike'),
                        (e.PLAYABLE_ITEM_UNLIKE = 'playableItemUnlike'),
                        (e.PLAYABLE_ITEM_UNDISLIKE = 'playableItemUndislike');
                })(s || (s = {}));
        },
        66349: (e, t, r) => {
            'use strict';
            r.d(t, { RemoveButton: () => c });
            var s = r(32290),
                n = r(55178),
                i = r(60900),
                a = r(59824),
                l = r(63423),
                o = r(82586);
            let c = (e) => {
                let { className: t, variant: r = 'text', onClick: c, iconClassName: u, iconSize: d, size: f = 's', ariaLabel: x } = e,
                    { formatMessage: _ } = (0, i.A)(),
                    p = null != x ? x : _({ id: 'play-queue.delete-from-queue' }),
                    m = (0, n.useCallback)(
                        (e) => {
                            null == c || c(), e.stopPropagation();
                        },
                        [c],
                    );
                return (0, s.jsx)(l.$, {
                    className: t,
                    withRipple: !1,
                    variant: r,
                    size: f,
                    radius: 'round',
                    'aria-label': p,
                    onClick: m,
                    icon: (0, s.jsx)(o.Icon, { size: d, className: u, variant: 'bucket' }),
                    ...(0, a.Am)(a.OA.track.REMOVE_BUTTON),
                });
            };
        },
        66436: (e, t, r) => {
            'use strict';
            r.d(t, { useTimeLeftText: () => i });
            var s = r(55178),
                n = r(60900);
            let i = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, s.useCallback)(
                    function (t) {
                        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            s = Math.floor(t / 60),
                            n = function (t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    s = e({ id: 'time.minutes-left' }, { minutes: t });
                                return r ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(s) : s;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    s = e({ id: 'time.seconds-left' }, { seconds: t });
                                return r ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(s) : s;
                            })(Math.floor(t), r);
                        if (s < 60) return n(s, r);
                        let i = Math.floor(s / 60),
                            a = s % 60,
                            l = (function (t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return r ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(i, r);
                        return a > 0 ? ''.concat(l, ' ').concat(n(a)) : l;
                    },
                    [e],
                );
            };
        },
        66920: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => n });
            var s = r(82736);
            let n = (e) => {
                let { operation: t, position: r, startPosition: n, endPosition: i, tracks: a } = e,
                    l = ((e) =>
                        Object.keys(e)
                            .filter((t) => void 0 !== e[t])
                            .reduce((t, r) => ((t[r] = e[r]), t), {}))({ op: t, at: r, from: n, to: i, tracks: a });
                return (0, s.stringifyJSONSafely)([l]);
            };
        },
        68100: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { J: () => s }),
                (function (e) {
                    (e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL');
                })(s || (s = {}));
        },
        70390: (e, t, r) => {
            'use strict';
            r.d(t, { useOnPinClick: () => u });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(49574),
                o = r(44574);
            let c = (e) => {
                    let { artist: t, closeToast: r } = e;
                    return (0, s.jsx)(o.k4, {
                        closeToast: r,
                        entityVariant: o.cp.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                u = (e) => {
                    let { user: t } = (0, l.Pjs)(),
                        { notify: r } = (0, l.lkh)(),
                        { formatMessage: u } = (0, a.A)(),
                        [d, f] = (0, i.useState)(!1);
                    return (0, i.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void r((0, s.jsx)(o.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.uQT.ERROR });
                        if (d) return;
                        let i = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                        f(!0);
                        let a = await e.togglePin();
                        f(!1),
                            a
                                ? r((0, s.jsx)(c, { artist: i }), { containerId: l.uQT.INFO })
                                : r((0, s.jsx)(o.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.uQT.ERROR });
                    }, [e, t.isAuthorized, d, u, r]);
                };
        },
        73141: (e, t, r) => {
            'use strict';
            r.d(t, { useOnLikeClick: () => d });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(63380),
                o = r(49574),
                c = r(44574);
            let u = (e) => {
                    let { playlist: t, closeToast: r } = e;
                    return (0, s.jsx)(c.OM, {
                        entityVariant: c.cp.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: r,
                        coverUri: t.coverUri,
                    });
                },
                d = (e) => {
                    let { user: t } = (0, o.Pjs)(),
                        { notify: r } = (0, o.lkh)(),
                        [d, f] = (0, i.useState)(!1),
                        { formatMessage: x } = (0, a.A)();
                    return (0, i.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void r((0, s.jsx)(c.hT, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                        if (d) return;
                        let i = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                        f(!0);
                        let a = await e.toggleLike();
                        f(!1),
                            a === l.f.OK
                                ? r((0, s.jsx)(u, { playlist: i }), { containerId: o.uQT.INFO })
                                : r((0, s.jsx)(c.hT, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                    }, [t.isAuthorized, d, e, x, r]);
                };
        },
        73192: (e, t, r) => {
            'use strict';
            r.d(t, { useOnPinClick: () => u });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(49574),
                o = r(44574);
            let c = (e) => {
                    let { playlist: t, closeToast: r } = e;
                    return (0, s.jsx)(o.k4, {
                        closeToast: r,
                        entityVariant: o.cp.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                u = (e) => {
                    let { user: t } = (0, l.Pjs)(),
                        { notify: r } = (0, l.lkh)(),
                        { formatMessage: u } = (0, a.A)(),
                        [d, f] = (0, i.useState)(!1);
                    return (0, i.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void r((0, s.jsx)(o.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.uQT.ERROR });
                        if (d) return;
                        let i = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        f(!0);
                        let a = await e.togglePin();
                        f(!1),
                            a
                                ? r((0, s.jsx)(c, { playlist: i }), { containerId: l.uQT.INFO })
                                : r((0, s.jsx)(o.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.uQT.ERROR });
                    }, [t.isAuthorized, d, e, r, u]);
                };
        },
        74804: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationLike: () => c });
            var s = r(32290),
                n = r(96103),
                i = r(44574),
                a = r(54950),
                l = r(96333),
                o = r(49574);
            let c = (0, n.PA)((e) => {
                let { track: t, closeToast: r, withLink: n } = e,
                    c = ((e) => {
                        switch (e.type) {
                            case l.S.PODCAST:
                            case l.S.AUDIOBOOK:
                                return o.Zyd.collectionShelfLiked.href;
                            default:
                                return o.Zyd.collection.href;
                        }
                    })(t),
                    u = (0, a.b)(t);
                return (0, s.jsx)(i.OM, {
                    closeToast: r,
                    entityVariant: u,
                    entityTitle: t.title,
                    collectionUrl: c,
                    coverUri: t.coverUri,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        75369: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            var s = r(3623);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === s.R.Music;
            }
        },
        78099: (e) => {
            e.exports = { message: 'FailedPlaylistNotification_message__wxrzi' };
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { ArtistItem: () => v });
            var s = r(32290),
                n = r(63618),
                i = r(96103),
                a = r(55178),
                l = r(16172),
                o = r(59824),
                c = r(91027),
                u = r(50162),
                d = r(19740),
                f = r(86269),
                x = r(71926),
                _ = r(49574),
                p = r(16510),
                m = r.n(p);
            let v = (0, i.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: i } = (0, _.Pjs)(),
                    p = (0, _.ZpR)(t.url),
                    g = (0, _.NKK)(),
                    y = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(v, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    k = (0, c.c)((e) => {
                        i.modal.isOpened && i.modal.close(), g({ to: l.QT.ArtistScreen }), p(e);
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(d.Dr, {
                            className: (0, n.$)(m().root, r),
                            onClick: k,
                            ...(0, o.Am)(o.OA.artists.ARTIST_ITEM),
                            children: [
                                (0, s.jsx)(f.Paper, {
                                    radius: 'round',
                                    className: m().cover,
                                    children: (0, s.jsx)(u.Image, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: m().image }),
                                }),
                                (0, s.jsx)(x.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        78822: (e, t, r) => {
            'use strict';
            r.d(t, { dx: () => T, A_: () => n });
            var s = r(49574);
            let n = (e) => {
                let t,
                    { entityVariant: r, urlParams: n } = e,
                    i = (0, s.D60)();
                if (
                    !n.id ||
                    !(t =
                        'production' === i
                            ? ((e) => {
                                  switch (e) {
                                      case s.DwC.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case s.DwC.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case s.DwC.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case s.DwC.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case s.DwC.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(r)
                            : ((e) => {
                                  switch (e) {
                                      case s.DwC.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case s.DwC.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case s.DwC.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case s.DwC.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case s.DwC.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(r))
                )
                    return;
                let a = atob(
                    t.replace(/[A-Za-z]/g, function (e) {
                        return String.fromCharCode(e.charCodeAt(0) + ('M' >= e.toUpperCase() ? 13 : -13));
                    }),
                );
                return (0, s.BcX)(a, n);
            };
            var i = r(32290),
                a = r(96103),
                l = r(60900),
                o = r(59824),
                c = r(19740),
                u = r(55178),
                d = r(39407),
                f = r(71926),
                x = r(44574),
                _ = r(58270),
                p = r.n(_);
            let m = (e) => {
                    let { closeToast: t } = e;
                    return (0, i.jsx)(x.$W, {
                        message: (0, i.jsx)(f.Caption, {
                            className: p().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, i.jsx)(d.A, { id: 'playlist-errors.failed-part-tracks-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                },
                v = (e) => {
                    let { closeToast: t } = e;
                    return (0, i.jsx)(x.$W, {
                        message: (0, i.jsx)(f.Caption, {
                            className: p().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, i.jsx)(d.A, { id: 'playlist-errors.failed-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                };
            var g = r(38533),
                y = r.n(g);
            let k = (e) => {
                    let { closeToast: t } = e;
                    return (0, i.jsx)(x.$W, {
                        message: (0, i.jsx)(f.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: y().text,
                            children: (0, i.jsx)(d.A, { id: 'notifications-info.xlsx-success' }),
                        }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                b = () =>
                    (0, i.jsx)(x.$W, {
                        message: (0, i.jsx)(f.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: y().text,
                            children: (0, i.jsx)(d.A, { id: 'notifications-info.xlsx-loading' }),
                        }),
                        coverRadius: 's',
                    }),
                E = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40,
                        { fullscreenPlayer: t, playlist: r } = (0, s.Pjs)(),
                        { notify: n, dismiss: a } = (0, s.lkh)(),
                        l = (0, u.useRef)(null),
                        o = t.modal.isOpened ? s.uQT.FULLSCREEN_INFO : s.uQT.INFO;
                    return (0, u.useCallback)(async () => {
                        (l.current = n((0, i.jsx)(b, {}), { containerId: o, autoClose: !1 })),
                            await r.editorFeature.getAllPlaylistItems({ batchSize: e }),
                            (await r.editorFeature.exportToExcel()) === s.FlZ.OK
                                ? r.areAllTracksUploaded
                                    ? n((0, i.jsx)(k, {}), { containerId: o })
                                    : n((0, i.jsx)(m, {}), { containerId: t.modal.isOpened ? s.uQT.FULLSCREEN_ERROR : s.uQT.ERROR, autoClose: !1 })
                                : n((0, i.jsx)(v, {}), { containerId: t.modal.isOpened ? s.uQT.FULLSCREEN_ERROR : s.uQT.ERROR, autoClose: !1 }),
                            a({ notificationId: l.current, forceClose: !0 });
                    }, [e, a, t.modal.isOpened, o, n, r.areAllTracksUploaded, r.editorFeature]);
                },
                h = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, s.Pjs)(),
                        { toggleShouldShowDuplicate: t, shouldShowDuplicate: r } = e,
                        { formatMessage: n } = (0, l.A)();
                    return (0, i.jsx)(x.Kb, {
                        'aria-label': n({ id: 'entity-names.editor-feature-is-show' }),
                        text: n({ id: 'interface-actions.show-duplicates' }),
                        onClick: t,
                        isActive: r,
                    });
                }),
                O = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, s.Pjs)(),
                        { toggleShouldShowGenre: t, shouldShowGenre: r } = e,
                        { formatMessage: n } = (0, l.A)();
                    return (0, i.jsx)(x.Kb, {
                        'aria-label': n({ id: 'entity-names.editor-feature-is-show' }),
                        text: n({ id: 'interface-actions.show-genres' }),
                        onClick: t,
                        isActive: r,
                    });
                }),
                w = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, s.Pjs)(),
                        { toggleShouldShowMajor: t, shouldShowMajor: r } = e,
                        { formatMessage: n } = (0, l.A)();
                    return (0, i.jsx)(x.Kb, {
                        'aria-label': n({ id: 'entity-names.editor-feature-is-show' }),
                        text: n({ id: 'interface-actions.show-majors' }),
                        onClick: t,
                        isActive: r,
                    });
                });
            var R = r(21916),
                j = r(91027);
            let A = (0, a.PA)((e) => {
                    let { adminUrl: t } = e;
                    (0, R.useRouter)();
                    let r = (0, j.c)(() => {
                        window.open(t, '_blank');
                    });
                    return (0, i.jsx)(c.Dr, {
                        onClick: r,
                        isSubMenu: !0,
                        children: (0, i.jsx)(f.Caption, {
                            variant: 'div',
                            size: 'm',
                            lineClamp: 1,
                            children: (0, i.jsx)(d.A, { id: 'interface-actions.navigate-to-admin' }),
                        }),
                    });
                }),
                T = (0, a.PA)((e) => {
                    let { entityVariant: t, adminUrl: r, withPlaylistPageFeatures: n, className: a, isDisabled: u } = e,
                        {
                            settings: { isMobile: d },
                        } = (0, s.Pjs)(),
                        { formatMessage: f } = (0, l.A)();
                    E();
                    let x = t === s.DwC.PLAYLIST && n,
                        _ = t === s.DwC.PLAYLIST && n,
                        p = t === s.DwC.PLAYLIST && n,
                        m = t === s.DwC.PLAYLIST && n;
                    return (0, i.jsxs)(c.W1, {
                        label: f({ id: 'interface-actions.editorial-tools' }),
                        menuClassName: a,
                        offsetOptions: 3,
                        isMobile: d,
                        disabled: u,
                        ...(0, o.Am)(o.OA.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON),
                        children: [r && (0, i.jsx)(A, { adminUrl: r }), x && (0, i.jsx)(w, {}), _ && (0, i.jsx)(O, {}), p && (0, i.jsx)(h, {}), m && !1],
                    });
                });
        },
        83557: (e, t, r) => {
            'use strict';
            r.d(t, { useProgressTimeNonMusic: () => i });
            var s = r(60900),
                n = r(49574);
            let i = (e, t) => {
                let { formatMessage: r } = (0, s.A)(),
                    { hours: i, minutes: a, seconds: l } = (0, n.e6v)(e),
                    { hours: o, minutes: c, seconds: u } = (0, n.e6v)(t);
                return r(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: i, beginMinutes: a, beginSeconds: l, endHours: o, endMinutes: c, endSeconds: u },
                );
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83917: (e, t, r) => {
            'use strict';
            r.d(t, { TrackPlaylistContext: () => s });
            let s = (0, r(55178).createContext)(null);
        },
        85697: (e, t, r) => {
            'use strict';
            r.d(t, { useOnDislikeClick: () => p });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(62386),
                o = r(63380),
                c = r(65163),
                u = r(91027),
                d = r(49574),
                f = r(44574),
                x = r(23030),
                _ = r(54950);
            let p = (e) => {
                let { user: t, fullscreenPlayer: r } = (0, d.Pjs)(),
                    p = (0, d.eGp)(),
                    { notify: m } = (0, d.lkh)(),
                    [v, g] = (0, i.useState)(!1),
                    { formatMessage: y } = (0, a.A)(),
                    k = (0, _.b)(e);
                return (0, u.c)(async () => {
                    if (e) {
                        let a = r.modal.isOpened ? d.uQT.FULLSCREEN_INFO : d.uQT.INFO,
                            u = r.modal.isOpened ? d.uQT.FULLSCREEN_ERROR : d.uQT.ERROR;
                        if (!t.isAuthorized) return void m((0, s.jsx)(f.hT, { error: y({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: u });
                        if (v) return;
                        let _ = { ...(0, n.HO)(e), isDisliked: !e.isDisliked };
                        g(!0);
                        let b = await e.toggleDislike();
                        if ((g(!1), b === o.f.OK)) {
                            var i;
                            m((0, s.jsx)(x.NotificationDislike, { coverUri: _.coverUri, isDisliked: _.isDisliked, title: _.title, entityVariant: k }), {
                                containerId: a,
                            });
                            let e = _.isDisliked ? c.O.DISLIKE : c.O.UNDISLIKE;
                            if (p && (0, l.i)(p.state.currentContext.value)) {
                                let t = p.state.queueState.entityList.value.find((e) => {
                                    let { entity: t } = e;
                                    return t.data.meta.id === _.id;
                                });
                                t && (await p.state.currentContext.value.sendFeedback({ type: e, entity: t.entity }));
                            }
                            _.isDisliked &&
                                _.id === (null == p || null == (i = p.state.queueState.currentEntity.value) ? void 0 : i.entity.data.meta.id) &&
                                (null == p || p.moveForward());
                        } else m((0, s.jsx)(f.hT, { error: y({ id: 'error-messages.error-during-action' }) }), { containerId: u });
                    }
                });
            };
        },
        85940: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => _ });
            var s = r(32290),
                n = r(92708),
                i = r(55178),
                a = r(60900),
                l = r(62386),
                o = r(63380),
                c = r(65163),
                u = r(91027),
                d = r(49574),
                f = r(44574),
                x = r(74804);
            let _ = () => {
                let { notify: e } = (0, d.lkh)(),
                    [t, r] = (0, i.useState)(!1),
                    { formatMessage: _ } = (0, a.A)(),
                    p = (0, d.eGp)();
                return (0, u.c)(async (i) => {
                    let { track: a, withLink: u = !0, infoContainerId: d, errorContainerId: m, withNotification: v = !0, playbackId: g } = i;
                    if (t) return;
                    let y = { ...(0, n.HO)(a), isLiked: !a.isLiked };
                    r(!0);
                    let k = await a.toggleLike();
                    if ((r(!1), k === o.f.OK)) {
                        let e = y.isLiked ? c.O.LIKE : c.O.UNLIKE,
                            t = null == p ? void 0 : p.getState(g);
                        if (t && (0, l.i)(null == t ? void 0 : t.currentContext.value)) {
                            let r = t.queueState.entityList.value.find((e) => {
                                let { entity: t } = e;
                                return t.data.meta.id === y.id;
                            });
                            r && t.currentContext.value.sendFeedback({ type: e, entity: r.entity });
                        }
                    }
                    v &&
                        (k === o.f.OK
                            ? e((0, s.jsx)(x.NotificationLike, { withLink: u, track: y }), { containerId: d })
                            : e((0, s.jsx)(f.hT, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: m }));
                });
            };
        },
        86955: (e, t, r) => {
            'use strict';
            r.d(t, { useGetArtistTypeName: () => i });
            var s = r(60900),
                n = r(421);
            let i = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return t(e === n.o.COMPOSER ? { id: 'entity-names.composer' } : { id: 'entity-names.singer' });
            };
        },
        87356: (e) => {
            e.exports = { root: 'ArtistSocialLinks_root__9wQxA', link: 'ArtistSocialLinks_link__UFvCL', icon: 'ArtistSocialLinks_icon__Y9VLu' };
        },
        90404: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { _: () => s }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(s || (s = {}));
        },
        91448: (e) => {
            e.exports = {
                root: 'ArtistBandlinkScanner_root__D3cAC',
                descriptionTitleButton: 'ArtistBandlinkScanner_descriptionTitleButton__0M8Ag',
                icon: 'ArtistBandlinkScanner_icon__n5ntO',
                description: 'ArtistBandlinkScanner_description__n8ypX',
                descriptionTitle: 'ArtistBandlinkScanner_descriptionTitle__9Z1MT',
                descriptionTitleText: 'ArtistBandlinkScanner_descriptionTitleText__xWvIS',
                descriptionArtist: 'ArtistBandlinkScanner_descriptionArtist__7ZvJo',
            };
        },
        91853: (e, t, r) => {
            'use strict';
            r.d(t, { useArtistDisclaimer: () => n });
            var s = r(49574);
            let n = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: n } = e;
                return (0, s.lVe)({ entity: t, callback: r, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92002: (e) => {
            e.exports = {
                entityTitle: 'NotificationPlayQueue_entityTitle__XCIsa',
                entityLink: 'NotificationPlayQueue_entityLink__O7tHL',
                text: 'NotificationPlayQueue_text___1DWX',
                image: 'NotificationPlayQueue_image__SLXsp',
            };
        },
        92013: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { T: () => s }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(s || (s = {}));
        },
        93510: (e, t, r) => {
            'use strict';
            r.d(t, {
                OQ: () => C,
                Bg: () => N.ListeningProgress,
                t$: () => I,
                l3: () => M.NotificationPlayQueue,
                NM: () => x.N,
                d0: () => H.RemoveButton,
                B9: () => j,
                oQ: () => d,
                pK: () => f,
                vz: () => S,
                jU: () => L,
                gK: () => l,
                eK: () => p.e,
                $O: () => o,
                LT: () => c,
                Rw: () => u,
                TH: () => _.useMarkListenedClick,
                mW: () => m.useOnDislikeClick,
                KX: () => v.useOnLikeClick,
                iQ: () => g.useOnModifyPlayQueue,
                c5: () => y.useOnPromoLandingLikeClick,
                mw: () => k.useProgressTimeNonMusic,
                $4: () => b.useTimeLeftText,
                Dv: () => E.useTrackSourceContext,
            });
            var s,
                n,
                i = r(60754);
            (s || (s = {})).SMART_PREVIEW = 'smart_preview';
            var a = r(49574);
            let l = (e, t) => {
                    var r, n, l, o, c, u, d, f, x, _;
                    e = e || {};
                    let { isSmartPreview: p, hasEverFinished: m } = t || {},
                        v = (0, a.QBb)(null == e ? void 0 : (e?.substituted?.derivedColors ?? e.derivedColors)),
                        g = p ? (null == (r = e.smartPreviewParams) ? void 0 : r.durationMs) : null == e ? void 0 : e.durationMs,
                        y = (0, i.wg)({ available: !!(null == (n = e.specialAudioResources) ? void 0 : n.includes(s.SMART_PREVIEW)) });
                    return (0, i.wg)({
                        id: (e.id || 0).toString(),
                        isAvailable: !!(null == e ? void 0 : e.available),
                        isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                        title: e?.substituted?.title ?? e?.title ?? '',
                        version: e?.substituted?.version ?? e?.version,
                        isSubstituted: !!e?.substituted,
                        durationMs: g,
                        coverUri:
                            e?.substituted?.coverUri ??
                            e?.substituted?.ogImage ??
                            e?.substituted?.albums?.[0]?.coverUri ??
                            e?.coverUri ??
                            e?.ogImage ??
                            e?.albums?.[0]?.coverUri,
                        averageColor: v,
                        trackParameters: ((e) =>
                            (0, i.wg)({
                                bpm: null == e ? void 0 : e.bpm,
                                energy: null == e ? void 0 : e.energy,
                                hue: null == e ? void 0 : e.hue,
                                userCollectionHue: null == e ? void 0 : e.userCollectionHue,
                            }))(null == e ? void 0 : e.trackParameters),
                        trackSource: null == e ? void 0 : e.trackSource,
                        albumId: null == (o = e.albums) || null == (l = o[0]) ? void 0 : l.id,
                        disclaimers: e.disclaimers,
                        type: e.type,
                        pubDate: e.pubDate,
                        hasLyrics: null == (c = e.lyricsInfo) ? void 0 : c.hasAvailableTextLyrics,
                        hasSyncLyrics: null == (u = e.lyricsInfo) ? void 0 : u.hasAvailableSyncLyrics,
                        shouldRememberPosition: e.rememberPosition,
                        streamProgress: ((e, t) =>
                            (0, i.wg)({
                                endPositionSec: null == e ? void 0 : e.endPositionSec,
                                hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                            }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: m }),
                        shortDescription: null != (_ = e.shortDescription) ? _ : '',
                        trailer: y,
                        clipIds: e?.substituted?.clipIds ?? e.clipIds,
                        major: e.major,
                        genre: null == (f = e.albums) || null == (d = f[0]) ? void 0 : d.genre,
                        realId: e.realId,
                    });
                },
                o = (e, t) => {
                    if (!t) {
                        let { href: t } = (0, a.uvd)('/track/:trackId', { params: { trackId: e } });
                        return t;
                    }
                    let { href: r } = (0, a.uvd)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: e } });
                    return r;
                },
                c = (e) => (0, i.wg)({ id: e.id, name: e.name, prettyName: e.prettyName }),
                u = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp });
            var d = (function (e) {
                    return (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), e;
                })({}),
                f = (function (e) {
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
                })({}),
                x = r(9480),
                _ = r(8032),
                p = r(54950),
                m = r(85697),
                v = r(52981),
                g = r(2355),
                y = r(10431),
                k = r(83557),
                b = r(66436),
                E = r(54203),
                h = r(96333),
                O = r(68100),
                w = r(95428),
                R = r(92013);
            let j = i.gK.model('StreamProgress', { endPositionSec: i.gK.maybe(i.gK.number), hasEverFinished: i.gK.maybe(i.gK.boolean) }).actions((e) => ({
                    updateEndPositionSec: (t) => {
                        e.endPositionSec = t;
                    },
                    updateEverFinished: (t) => {
                        e.hasEverFinished = t;
                    },
                    markListened: (0, i.L3)(function* (t) {
                        let { streamsResource: r, modelActionsLogger: s } = (0, i._$)(e);
                        try {
                            return yield r.markFinished(t);
                        } catch (e) {
                            return s.error(e), R.T.ERROR;
                        }
                    }),
                    markUnlistened: (0, i.L3)(function* (t) {
                        let { streamsResource: r, modelActionsLogger: s } = (0, i._$)(e);
                        try {
                            return yield r.markUnfinished(t);
                        } catch (e) {
                            return s.error(e), R.T.ERROR;
                        }
                    }),
                })),
                A = i.gK.model('TrackMajor', { id: i.gK.maybeNull(i.gK.number), name: i.gK.maybeNull(i.gK.string) }),
                T = i.gK.model('TrackParameters', {
                    bpm: i.gK.maybe(i.gK.number),
                    energy: i.gK.maybe(i.gK.number),
                    hue: i.gK.maybe(i.gK.number),
                    userCollectionHue: i.gK.maybe(i.gK.number),
                }),
                P = [h.S.MUSIC, h.S.TRACK, h.S.NOISE, h.S.ASMR],
                C = i.gK
                    .compose(
                        i.gK.model('BaseTrack', {
                            id: i.gK.string,
                            isAvailable: i.gK.boolean,
                            isRemoved: i.gK.boolean,
                            title: i.gK.string,
                            trackSource: i.gK.maybe(i.gK.enumeration(Object.values(O.J))),
                            version: i.gK.maybe(i.gK.string),
                            isSubstituted: i.gK.maybe(i.gK.boolean),
                            durationMs: i.gK.maybe(i.gK.number),
                            coverUri: i.gK.maybe(i.gK.string),
                            averageColor: i.gK.maybe(i.gK.string),
                            trackParameters: i.gK.maybe(T),
                            albumId: i.gK.maybe(i.gK.number),
                            disclaimers: i.gK.maybe(i.gK.array(i.gK.string)),
                            type: i.gK.maybe(i.gK.enumeration(Object.values(h.S))),
                            pubDate: i.gK.maybe(i.gK.string),
                            hasLyrics: i.gK.maybe(i.gK.boolean),
                            hasSyncLyrics: i.gK.maybe(i.gK.boolean),
                            trailer: i.gK.maybe(w.aQ),
                            shouldRememberPosition: i.gK.maybe(i.gK.boolean),
                            streamProgress: i.gK.maybe(j),
                            shortDescription: i.gK.maybe(i.gK.string),
                            major: i.gK.maybeNull(A),
                            clipIds: i.gK.maybeNull(i.gK.array(i.gK.number)),
                            genre: i.gK.maybeNull(i.gK.string),
                            realId: i.gK.maybe(i.gK.string),
                        }),
                        w.Ec,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, i._n)(e)) {
                                    let { library: t } = (0, i.Zn)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, i.Zn)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, i.Zn)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, i._n)(e)) return 0;
                                let { slam: t } = (0, i.Zn)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, i._n)(e)) return !1;
                                return (e.type && P.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let r = e.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                                    s = e.albumId ? { albumId: e.albumId, trackId: e.id } : { trackId: e.id },
                                    { href: n } = (0, a.uvd)(r, { params: s, query: t });
                                return n;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, i._n)(e)) {
                                    let { library: t } = (0, i.Zn)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, i._n)(e)) return e.type === h.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, i._n)(e)) return !1;
                                let { user: t } = (0, i.Zn)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, i.Zn)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t, user: r } = (0, i.Zn)(e);
                                if (!r.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, i._n)(e)) return e.type === h.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, i._n)(e)) return e.type === h.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, i._n)(e)) return e.type === h.S.TRACK || e.type === h.S.MUSIC;
                                return !1;
                            },
                            get isUGC() {
                                if ((0, i._n)(e)) return e.trackSource === O.J.UGC;
                                return;
                            },
                            get isOwn() {
                                if ((0, i._n)(e)) return e.trackSource === O.J.OWN;
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, i._n)(e)) return e.trackSource === O.J.OWN_REPLACED_TO_UGC;
                                return;
                            },
                            get seeds() {
                                return ['track:'.concat(e.id)];
                            },
                            get isLegalRejected() {
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get entityId() {
                                if (e.albumId) return ''.concat(e.id, ':').concat(e.albumId);
                                return e.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, i._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, i._n)(e)) return !1;
                                let {
                                    settings: { isMobile: t },
                                    slam: r,
                                } = (0, i.Zn)(e);
                                return e.isAvailable && !this.isUGC && !this.isOwnReplacedToUGC && !t && !r.isOfflineModeEnabled;
                            },
                            get isNonUserGenerated() {
                                if (!(0, i._n)(e)) return !1;
                                return !t.isUGC && !t.isOwnReplacedToUGC;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (r) =>
                                r
                                    ? { entityType: r, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: a.nPY.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: a.nPY.AUDIOBOOK, entityId: e.id }
                                        : { entityType: a.nPY.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, i.Zn)(e);
                            if (r.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        toggleDislike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, i.Zn)(e);
                            if (r.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, i.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t ? void 0 : t.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == t ? void 0 : t.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                I = i.gK.model('MajorModel', { id: i.gK.number, name: i.gK.string, prettyName: i.gK.maybeNull(i.gK.string) });
            (n || (n = {})).TOO_MANY_FILES = 'TOO_MANY_FILES';
            let S = i.gK
                    .model('TrackUgcUploadModel', {
                        loadingState: i.gK.enumeration(Object.values(f)),
                        errorReason: i.gK.maybeNull(i.gK.enumeration(Object.values(d))),
                        playlistKind: i.gK.number,
                        trackId: i.gK.maybeNull(i.gK.string),
                        uploadUrl: i.gK.maybeNull(i.gK.string),
                    })
                    .volatile(() => ({ file: null, abortController: null }))
                    .actions((e) => {
                        let t = {
                            setFile(t) {
                                e.file = t;
                            },
                            getUploadUrl: (0, i.L3)(function* () {
                                if (!(0, i._n)(e)) return;
                                let { loaderResource: t, modelActionsLogger: r } = (0, i._$)(e),
                                    { user: s } = (0, i.Zn)(e);
                                if (![f.IDLE, f.REJECT].includes(e.loadingState)) return;
                                e.loadingState = f.PREPARE;
                                let a = s.account.data.uid;
                                if (a)
                                    try {
                                        var l;
                                        let r = null == (l = e.file) ? void 0 : l.name,
                                            s = yield t.getUploadUrl({ playlistId: ''.concat(a, ':').concat(e.playlistKind), uid: a, path: r });
                                        if (s && 'result' in s && s.result === n.TOO_MANY_FILES) {
                                            (e.loadingState = f.REJECT), (e.errorReason = d.TOO_MANY_FILES);
                                            return;
                                        }
                                        if (s && 'post-target' in s && 'ugc-track-id' in s) {
                                            (e.uploadUrl = s['post-target']), (e.trackId = s['ugc-track-id']);
                                            return;
                                        }
                                        (e.errorReason = d.UNKNOWN_ERROR), (e.loadingState = f.REJECT);
                                        return;
                                    } catch (t) {
                                        (e.loadingState = f.REJECT), r.error(t);
                                        return;
                                    }
                            }),
                            uploadFile: (0, i.L3)(function* () {
                                if (!(0, i._n)(e)) return;
                                let { prefixlessResource: t, modelActionsLogger: r } = (0, i._$)(e);
                                if (e.loadingState === f.PREPARE && e.uploadUrl && e.file) {
                                    e.loadingState = f.UPLOADING;
                                    try {
                                        let r = new FormData();
                                        r.append('file', e.file);
                                        let s = new AbortController(),
                                            n = s.signal;
                                        (e.abortController = s), yield t.uploadFile({ url: e.uploadUrl, formData: r }, { signal: n }), (e.loadingState = f.PROCESSING);
                                        return;
                                    } catch (t) {
                                        (e.loadingState = f.REJECT), r.error(t);
                                        return;
                                    }
                                }
                            }),
                            runUpload: (0, i.L3)(function* () {
                                (0, i._n)(e) && (yield t.getUploadUrl(), e.loadingState !== f.REJECT && (yield t.uploadFile()));
                            }),
                            retryUpload() {
                                if ((this.reset(), !(0, i._n)(e))) return;
                                let { ugcUploadCenter: t } = (0, i.Zn)(e);
                                t.runUploadTracksQueue();
                            },
                            abortUpload() {
                                var t;
                                if (((e.loadingState = f.CANCELLED), null == (t = e.abortController) || t.abort(), !(0, i._n)(e))) return;
                                let { ugcUploadCenter: r } = (0, i.Zn)(e);
                                r.clearCancelledUploads();
                            },
                            reset() {
                                (e.loadingState = f.IDLE), (e.trackId = null), (e.uploadUrl = null), (e.abortController = null);
                            },
                        };
                        return t;
                    }),
                L = i.gK.model('Ugc');
            var N = r(58294);
            r(23030), r(74804);
            var M = r(60214),
                H = r(66349);
        },
        94154: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { g: () => s }),
                (function (e) {
                    (e.LIKE = 'like'), (e.DISLIKE = 'dislike');
                })(s || (s = {}));
        },
        95082: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        96036: (e, t, r) => {
            'use strict';
            r.d(t, { useArtistsMenu: () => i });
            var s = r(55178),
                n = r(91027);
            let i = (e) => {
                let { ref: t } = e,
                    [r, i] = (0, s.useState)(!1),
                    [a, l] = (0, s.useState)(null);
                return {
                    isArtistsMenuOpen: r,
                    artistsMenuPosition: a,
                    handleArtistsMenuClick: (0, n.c)((e) => {
                        if (e.detail > 0) {
                            let { clientX: t, clientY: r } = e;
                            l({ getBoundingClientRect: () => new DOMRect(t, r, 0, 0) });
                        } else l(t.current);
                        i(!0);
                    }),
                    handleArtistsMenuOpenChange: (0, n.c)((e) => {
                        i(e), e || l(null);
                    }),
                };
            };
        },
        96151: (e, t, r) => {
            'use strict';
            var s;
            r.d(t, { Q: () => s }),
                (function (e) {
                    (e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic');
                })(s || (s = {}));
        },
        96919: (e, t, r) => {
            'use strict';
            r.d(t, { NotificationRemoveFromPlaylist: () => x });
            var s = r(32290),
                n = r(96103),
                i = r(55178),
                a = r(39407),
                l = r(91027),
                o = r(71926),
                c = r(49574),
                u = r(44574),
                d = r(61),
                f = r.n(d);
            let x = (0, n.PA)((e) => {
                let { entityTitle: t, entityVariant: r, entityCoverUri: n, playlist: d, closeToast: x } = e,
                    { fullscreenPlayer: _ } = (0, c.Pjs)(),
                    p = (0, l.c)(() => {
                        _.modal.isOpened && _.modal.close();
                    }),
                    m = (0, i.useMemo)(() => {
                        let e,
                            n = {
                                trackName: (0, s.jsxs)(o.Caption, {
                                    className: f().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, s.jsx)(u.N_, {
                                    className: f().link,
                                    href: d.url,
                                    onClick: p,
                                    children: (0, s.jsxs)(o.Caption, {
                                        className: f().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', d.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (r) {
                            case u.cp.PODCAST_EPISODE:
                                e = (0, s.jsx)(a.A, { id: 'notifications-info.removed-podcast-episode-from-playlist', values: n });
                                break;
                            case u.cp.AUDIOBOOK_EPISODE:
                                e = (0, s.jsx)(a.A, { id: 'notifications-info.removed-audiobook-episode-from-playlist', values: n });
                                break;
                            default:
                                e = (0, s.jsx)(a.A, { id: 'notifications-info.removed-track-from-playlist', values: n });
                        }
                        return (0, s.jsx)(o.Caption, { className: f().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, r, p, d.title, d.url]);
                return (0, s.jsx)(u.$W, {
                    closeToast: x,
                    message: m,
                    cover: (0, s.jsx)(u.BW, { className: f().image, src: n, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
        },
        98924: (e) => {
            e.exports = {
                title: 'ArtistStats_title__Yxyh1',
                count: 'ArtistStats_count__8h5zM',
                stats: 'ArtistStats_stats__Hammf',
                statsNumber_positive: 'ArtistStats_statsNumber_positive__GlukF',
                statsNumber_negative: 'ArtistStats_statsNumber_negative__C0bH5',
            };
        },
        99311: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => c });
            var s,
                n = r(55178),
                i = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        r.r(t), r.d(t, { clsx: () => s, default: () => n });
                        let n = s;
                    },
                    7122: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    9775: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, r) {
                                let s = null != r ? r : e.currentTarget,
                                    n = document.createElement('span'),
                                    i = Math.max(s.clientWidth, s.clientHeight),
                                    a = i / 2,
                                    l = s.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                                    c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                                (n.style.width = ''.concat(i, 'px')),
                                    (n.style.height = ''.concat(i, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - a, 'px')),
                                    (n.style.top = ''.concat(c - a, 'px')),
                                    n.classList.add(t);
                                let u = s.getElementsByClassName(t)[0];
                                u && u.remove(), s.insertBefore(n, s.firstChild);
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
                    8216: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var s = r(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return s.createRipple;
                            },
                        });
                        var n = r(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = r(8216),
                            o = s(r(7122)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: s = 'left',
                                        children: c,
                                        className: u,
                                        color: d = 'secondary',
                                        flexIcon: f,
                                        icon: x,
                                        spinner: _,
                                        role: p,
                                        onClick: m,
                                        radius: v = 'm',
                                        size: g,
                                        type: y = 'button',
                                        variant: k = 'default',
                                        withRipple: b = !0,
                                        withHover: E = !0,
                                        withBorder: h = !1,
                                        disabled: O,
                                        iconClassName: w,
                                        contentContainerClassName: R,
                                        ...j
                                    } = e,
                                    A = (0, i.useId)(),
                                    T = !i.Children.toArray(c).filter(Boolean).length,
                                    P = 'left' === s,
                                    C = null,
                                    I = (0, i.isValidElement)(_);
                                if (x) {
                                    var S, L;
                                    C = (0, i.cloneElement)(x, {
                                        className: (0, a.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(s)]]: s && !T,
                                                [o.default.icon_withButtonSize]: !(null == (S = x.props) ? void 0 : S.size),
                                            },
                                            null == (L = x.props) ? void 0 : L.className,
                                            w,
                                        ),
                                        key: A,
                                    });
                                }
                                let N = (0, i.useMemo)(() => (I ? (0, n.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [I, _]),
                                    M = (0, i.useCallback)(
                                        (e) => {
                                            I || (b && (0, l.createRipple)(e, o.default.ripple), null == m || m(e));
                                        },
                                        [I, m, b],
                                    );
                                return (0, n.jsx)('button', {
                                    ref: t,
                                    className: (0, a.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(d, '_').concat(k)],
                                        o.default['root_radius_'.concat(v)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(d, '_withHover_').concat(k)]]: E && !O && !I,
                                            [o.default['root_size_'.concat(g)]]: g,
                                            [o.default.root_withoutBorder]: !h,
                                            [o.default.root_withActiveSpinner]: I,
                                            [o.default.block]: r,
                                            [o.default.flexIcon]: f,
                                            [o.default.iconOnly]: T,
                                            [o.default.root_icon_left]: x && !T && P,
                                            [o.default.root_icon_right]: x && !T && !P,
                                        },
                                        u,
                                    ),
                                    type: y,
                                    role: p,
                                    onClick: M,
                                    ...j,
                                    disabled: O,
                                    'aria-live': I ? 'polite' : 'off',
                                    'aria-busy': I,
                                    children:
                                        x || I
                                            ? (0, n.jsxs)('span', {
                                                  className: (0, a.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: r }, R),
                                                  children: [x && P && C, !T && c, x && !P && C, N],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, i.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var s = r(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return s.Button;
                            },
                        });
                    },
                    7459: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0);
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(5928),
                            o = s(r(9775)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, n.jsx)('div', { className: (0, i.clsx)(o.default.icon, { [o.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: r = !1, onChange: s, 'aria-label': u, 'aria-describedby': d, ...f } = e,
                                [x, _] = (0, a.useState)(r),
                                p = (0, a.useCallback)(() => {
                                    let e = !x;
                                    _(e), null == s || s(e);
                                }, [x, s]);
                            return (
                                (0, a.useEffect)(() => {
                                    _(r);
                                }, [r]),
                                (0, n.jsx)(l.Button, {
                                    className: (0, i.clsx)(o.default.root, { [o.default.root_checked]: x }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, n.jsx)(c, { isChecked: x }),
                                    withRipple: !1,
                                    onClick: p,
                                    role: 'switch',
                                    'aria-checked': x,
                                    'aria-label': u,
                                    'aria-describedby': d,
                                    ...f,
                                    color: x ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    810: (e) => {
                        e.exports = s || (s = r.t(n, 2));
                    },
                },
                a = {};
            function l(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return i[e].call(r.exports, r, r.exports, l), r.exports;
            }
            (l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X', { value: !0 }), (o.Z = void 0);
                var e = l(7459);
                Object.defineProperty(o, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var c = o.Z;
            o.X;
        },
    },
]);
