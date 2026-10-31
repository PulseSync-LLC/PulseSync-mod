(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5425],
    {
        202: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => r });
            var n = i(39499),
                a = i(29993);
            let r = (e) => {
                let { format: t, onSuccess: i, onError: r } = e;
                return {
                    startClipboardWrite: (0, a.c)(() => {
                        let e = () => void 0,
                            a = () => void 0,
                            s = !1,
                            o = new Promise((t, i) => {
                                ((e = t), (a = i));
                            }),
                            l = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == i || i());
                                } catch (e) {
                                    s || null == r || r(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await o], { type: 'text/plain' }))() }));
                        return {
                            copy: (i) => (e(t(i)), l),
                            cancel: () => {
                                ((s = !0), a(new n.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            let n = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        1401: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => c });
            var n = i(88800),
                a = i(52300),
                r = i(15077),
                s = i(42729),
                o = i(14307),
                l = i.n(o);
            let c = (e) => {
                let { vibe: t, closeToast: i } = e;
                return (0, n.jsx)(s.O, {
                    className: l().root,
                    closeToast: i,
                    entityVariant: r.c.VIBE,
                    customCover: (0, n.jsx)(a.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        4161: (e, t, i) => {
            'use strict';
            let n, a;
            i.d(t, { MR: () => _, P2: () => m });
            let r = (e, t) => t.some((t) => e instanceof t),
                s = new WeakMap(),
                o = new WeakMap(),
                l = new WeakMap(),
                c = {
                    get(e, t, i) {
                        if (e instanceof IDBTransaction) {
                            if ('done' === t) return s.get(e);
                            if ('store' === t) return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0]);
                        }
                        return d(e[t]);
                    },
                    set: (e, t, i) => ((e[t] = i), !0),
                    has: (e, t) => (e instanceof IDBTransaction && ('done' === t || 'store' === t)) || t in e,
                };
            function d(e) {
                if (e instanceof IDBRequest) {
                    let t = new Promise((t, i) => {
                        let n = () => {
                                (e.removeEventListener('success', a), e.removeEventListener('error', r));
                            },
                            a = () => {
                                (t(d(e.result)), n());
                            },
                            r = () => {
                                (i(e.error), n());
                            };
                        (e.addEventListener('success', a), e.addEventListener('error', r));
                    });
                    return (l.set(t, e), t);
                }
                if (o.has(e)) return o.get(e);
                let t = (function (e) {
                    if ('function' == typeof e)
                        return (a || (a = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
                            ? function (...t) {
                                  return (e.apply(u(this), t), d(this.request));
                              }
                            : function (...t) {
                                  return d(e.apply(u(this), t));
                              };
                    return (e instanceof IDBTransaction &&
                        (function (e) {
                            if (s.has(e)) return;
                            let t = new Promise((t, i) => {
                                let n = () => {
                                        (e.removeEventListener('complete', a), e.removeEventListener('error', r), e.removeEventListener('abort', r));
                                    },
                                    a = () => {
                                        (t(), n());
                                    },
                                    r = () => {
                                        (i(e.error || new DOMException('AbortError', 'AbortError')), n());
                                    };
                                (e.addEventListener('complete', a), e.addEventListener('error', r), e.addEventListener('abort', r));
                            });
                            s.set(e, t);
                        })(e),
                    r(e, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])))
                        ? new Proxy(e, c)
                        : e;
                })(e);
                return (t !== e && (o.set(e, t), l.set(t, e)), t);
            }
            let u = (e) => l.get(e);
            function m(e, t, { blocked: i, upgrade: n, blocking: a, terminated: r } = {}) {
                let s = indexedDB.open(e, t),
                    o = d(s);
                return (
                    n &&
                        s.addEventListener('upgradeneeded', (e) => {
                            n(d(s.result), e.oldVersion, e.newVersion, d(s.transaction), e);
                        }),
                    i && s.addEventListener('blocked', (e) => i(e.oldVersion, e.newVersion, e)),
                    o
                        .then((e) => {
                            (r && e.addEventListener('close', () => r()), a && e.addEventListener('versionchange', (e) => a(e.oldVersion, e.newVersion, e)));
                        })
                        .catch(() => {}),
                    o
                );
            }
            function _(e, { blocked: t } = {}) {
                let i = indexedDB.deleteDatabase(e);
                return (t && i.addEventListener('blocked', (e) => t(e.oldVersion, e)), d(i).then(() => void 0));
            }
            let b = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
                v = ['put', 'add', 'delete', 'clear'],
                p = new Map();
            function h(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && 'string' == typeof t)) return;
                if (p.get(t)) return p.get(t);
                let i = t.replace(/FromIndex$/, ''),
                    n = t !== i,
                    a = v.includes(i);
                if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || !(a || b.includes(i))) return;
                let r = async function (e, ...t) {
                    let r = this.transaction(e, a ? 'readwrite' : 'readonly'),
                        s = r.store;
                    return (n && (s = s.index(t.shift())), (await Promise.all([s[i](...t), a && r.done]))[0]);
                };
                return (p.set(t, r), r);
            }
            c = ((e) => ({ ...e, get: (t, i, n) => h(t, i) || e.get(t, i, n), has: (t, i) => !!h(t, i) || e.has(t, i) }))(c);
            let g = ['continue', 'continuePrimaryKey', 'advance'],
                x = {},
                f = new WeakMap(),
                y = new WeakMap(),
                A = {
                    get(e, t) {
                        if (!g.includes(t)) return e[t];
                        let i = x[t];
                        return (
                            i ||
                                (i = x[t] =
                                    function (...e) {
                                        f.set(this, y.get(this)[t](...e));
                                    }),
                            i
                        );
                    },
                };
            async function* C(...e) {
                let t = this;
                if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return;
                let i = new Proxy(t, A);
                for (y.set(i, t), l.set(i, u(t)); t;) (yield i, (t = await (f.get(i) || t.continue())), f.delete(i));
            }
            function j(e, t) {
                return (t === Symbol.asyncIterator && r(e, [IDBIndex, IDBObjectStore, IDBCursor])) || ('iterate' === t && r(e, [IDBIndex, IDBObjectStore]));
            }
            c = ((e) => ({ ...e, get: (t, i, n) => (j(t, i) ? C : e.get(t, i, n)), has: (t, i) => j(t, i) || e.has(t, i) }))(c);
        },
        6215: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => a });
            var n = i(42078);
            let a = (e) => ''.concat(n._.ARTIST_ITEM).concat(e);
        },
        7147: (e) => {
            e.exports = {
                root: 'VibePlayerbarMeta_root___dH5G',
                timecodeOverlay: 'VibePlayerbarMeta_timecodeOverlay__JhnCy',
                trackName: 'VibePlayerbarMeta_trackName__eyhTE',
                'fade-in': 'VibePlayerbarMeta_fade-in__rycjr',
                center: 'VibePlayerbarMeta_center__6kbMi',
                center_active: 'VibePlayerbarMeta_center_active__a1rFN',
                center_withTimecode: 'VibePlayerbarMeta_center_withTimecode__hoQVg',
                center_withExplicitMark: 'VibePlayerbarMeta_center_withExplicitMark__emag_',
                center_withoutExplicitMark: 'VibePlayerbarMeta_center_withoutExplicitMark__OrzGP',
                center_spacious: 'VibePlayerbarMeta_center_spacious__sky32',
                center_playing: 'VibePlayerbarMeta_center_playing__5Fqqg',
                explicitMarkContainer: 'VibePlayerbarMeta_explicitMarkContainer__d0pfO',
                artists: 'VibePlayerbarMeta_artists__2laQI',
                artists_hidden: 'VibePlayerbarMeta_artists_hidden__cvI_7',
                generativeTitle: 'VibePlayerbarMeta_generativeTitle__ksCD6',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                slider_active: 'VibePlayerbarMeta_slider_active__H1uGz',
                explicitMark: 'VibePlayerbarMeta_explicitMark__G8dYl',
                artists_visibleOnCompact: 'VibePlayerbarMeta_artists_visibleOnCompact__KXJ2j',
                generativeIcon: 'VibePlayerbarMeta_generativeIcon__Taac7',
            };
        },
        8413: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => a });
            var n = i(61691);
            let a = (e) => e === n._.PODCAST || e === n._.AUDIOBOOK || e === n._.FAIRY_TALE;
        },
        12799: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceItem_withoutIcon: 'WordsCardPopoverDesktop_sourceItem_withoutIcon__earG1',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        14307: (e) => {
            e.exports = { root: 'NotificationLike_root__DM13k' };
        },
        15461: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                root_withFeedbackForm: 'VibeResetButton_root_withFeedbackForm__s6ltp',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        17114: (e) => {
            e.exports = { root: 'WordsBigCardPanelTextShimmer_root__2ZH7z', item: 'WordsBigCardPanelTextShimmer_item__rrFNo' };
        },
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var n = i(42078);
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(n._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        22136: (e) => {
            e.exports = { root: 'WordsBigCardPanelLumen_root__xuEFd', image: 'WordsBigCardPanelLumen_image__j1sDJ' };
        },
        24190: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        24337: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        25425: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => rd });
            var n,
                a,
                r,
                s,
                o,
                l,
                c = i(88800),
                d = i(65724),
                u = i(84961),
                m = i(53548),
                _ = i.t(m, 2),
                b = i(2058),
                v = i(88969),
                p = i(30282),
                h = i(58390),
                g = i(17392),
                x = i(46312),
                f = i(29993),
                y = i(50408),
                A = i(79070),
                C = i(96817),
                j = i(90688),
                k = i(66719),
                N = i(17610),
                T = i(29504),
                P = i(25772),
                I = i(32596),
                S = i(8840),
                E = i(6087);
            let w = (0, m.lazy)(async () =>
                    Promise.all([i.e(385), i.e(9171)])
                        .then(i.bind(i, 89171))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                B = (0, m.lazy)(async () =>
                    Promise.all([i.e(385), i.e(9380), i.e(4683), i.e(617), i.e(4449), i.e(7404)])
                        .then(i.bind(i, 47404))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                O = E.default.default(
                    () =>
                        Promise.all([i.e(385), i.e(9562)])
                            .then(i.bind(i, 69562))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                M = E.default.default(
                    () =>
                        Promise.all([i.e(385), i.e(9380), i.e(4683), i.e(4449), i.e(2179)])
                            .then(i.bind(i, 2179))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
            var R = i(34500),
                L = i(14518),
                V = i(86462),
                D = i(4086),
                W = i(41928),
                F = i(47964),
                U = i(72288),
                z = i(97956),
                H = i(74773),
                K = i(91051),
                X = i(7628),
                Y = i(52300),
                q = i(60208),
                G = i(46422),
                $ = i(53961),
                Z = i.n($);
            let J = !0,
                Q = (0, u.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: n, className: a } = e,
                        { vibe: r } = (0, U.g)(),
                        { formatMessage: s } = (0, b.A)(),
                        o = (0, G.W)(),
                        l = (0, q.D)(),
                        u = t ? 'pauseVibe' : 'playVibe',
                        _ = t ? g.e8.vibe.MY_VIBE_PAUSE_BUTTON : g.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        p = (0, m.useMemo)(() => (t ? s({ id: 'vibe-actions.aria-label-pause' }) : s({ id: 'vibe-actions.aria-label-play' })), [s, t]),
                        h = (0, m.useCallback)(
                            (e) => {
                                (r.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault());
                            },
                            [i, r.isApplying],
                        );
                    return (
                        (0, m.useEffect)(() => {
                            if ('production' === l && 1 === o.length && J) {
                                var e, t;
                                let i = Math.round(performance.now());
                                (null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (J = !1));
                            }
                        }, []),
                        (0, c.jsx)(C.$, {
                            className: (0, d.$)(Z().root, { [Z().root_isVibeLoading]: r.isApplying }, a),
                            withRipple: !1,
                            withHover: !1,
                            onClick: h,
                            variant: 'text',
                            'aria-disabled': r.isApplying || n,
                            'aria-label': p,
                            icon: (0, c.jsx)(Y.I, { size: 's', className: Z().icon, variant: u }),
                            'data-test-id': _,
                            children: (0, c.jsx)(v.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            Q.displayName = 'PlayButton';
            var ee = i(78429),
                et = i.n(ee),
                ei = {
                    4490: (e, t, i) => {
                        (i.r(t), i.d(t, { DOWN: () => o, LEFT: () => a, RIGHT: () => r, UP: () => s, useSwipeable: () => _ }));
                        var n = i(810);
                        let a = 'Left',
                            r = 'Right',
                            s = 'Up',
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
                            d = 'mousemove',
                            u = 'mouseup';
                        function m(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function _(e) {
                            var t, i, _;
                            let b,
                                { trackMouse: v } = e,
                                p = n.useRef(Object.assign({}, c)),
                                h = n.useRef(Object.assign({}, l)),
                                g = n.useRef(Object.assign({}, h.current));
                            for (b in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[b] && (h.current[b] = l[b]);
                            let [x, f] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, a) => {
                                                        a.trackMouse && !i && (document.addEventListener(d, n), document.addEventListener(u, b));
                                                        let { clientX: r, clientY: s } = i ? t.touches[0] : t,
                                                            o = m([r, s], a.rotationAngle);
                                                        return (
                                                            a.onTouchStartOrOnMouseDown && a.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, i) => {
                                                    var n, c, d, u;
                                                    let _ = 'touches' in t;
                                                    if (_ && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: b, clientY: v } = _ ? t.touches[0] : t,
                                                        [p, h] = m([b, v], i.rotationAngle),
                                                        g = p - e.xy[0],
                                                        x = h - e.xy[1],
                                                        f = Math.abs(g),
                                                        y = Math.abs(x),
                                                        A = (t.timeStamp || 0) - e.start,
                                                        C = Math.sqrt(f * f + y * y) / (A || 1),
                                                        j = [g / (A || 1), x / (A || 1)],
                                                        k = ((n = f), (c = y), (d = g), (u = x), n > c ? (d > 0 ? r : a) : u > 0 ? o : s),
                                                        N = 'number' == typeof i.delta ? i.delta : i.delta[k.toLowerCase()] || l.delta;
                                                    if (f < N && y < N && !e.swiping) return e;
                                                    let T = {
                                                        absX: f,
                                                        absY: y,
                                                        deltaX: g,
                                                        deltaY: x,
                                                        dir: k,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: C,
                                                        vxvy: j,
                                                    };
                                                    (T.first && i.onSwipeStart && i.onSwipeStart(T), i.onSwiping && i.onSwiping(T));
                                                    let P = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(k)]) && (P = !0),
                                                        P && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: T, swiping: !0 })
                                                    );
                                                });
                                            },
                                            _ = (t) => {
                                                e((e, i) => {
                                                    let n;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            ((n = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(n));
                                                            let a = i['onSwiped'.concat(n.dir)];
                                                            a && a(n);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: n })
                                                    );
                                                });
                                            },
                                            b = (e) => {
                                                (document.removeEventListener(d, n), document.removeEventListener(u, b), _(e));
                                            },
                                            v = (e, t) => {
                                                let a = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        s = [
                                                            ['touchstart', i, r],
                                                            ['touchmove', n, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', _, r],
                                                        ];
                                                    (s.forEach((t) => {
                                                        let [i, n, a] = t;
                                                        return e.addEventListener(i, n, a);
                                                    }),
                                                        (a = () =>
                                                            s.forEach((t) => {
                                                                let [i, n] = t;
                                                                return e.removeEventListener(i, n);
                                                            })));
                                                }
                                                return a;
                                            },
                                            p = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t) return e;
                                                            let n = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                                                i.trackTouch && t && (n.cleanUpTouch = v(t, i)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), n)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (p.onMouseDown = i), [p, v]);
                                    })((e) => (p.current = e(p.current, h.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = p.current),
                                (i = h.current),
                                (_ = g.current),
                                (p.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== _.preventScrollOnSwipe || i.touchEventOptions.passive !== _.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: f(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: f(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let n = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, n.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                                    return t.current.callback(...i);
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
                    2458: (e, t, i) => {
                        var n;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let a = i(4490),
                            r = i(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(n || (t.SwipeablePlacement = n = {}));
                        let s = (e) => {
                                let { ref: t, deltaY: i, deltaX: a, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === n.TOP || r === n.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(a || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: l, disableSwipe: c, placement: d, threshold: u } = e,
                                m = (0, r.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                _ = (0, r.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: a, placement: r } = e;
                                            switch (r) {
                                                case n.TOP:
                                                    i <= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                case n.RIGHT:
                                                    a >= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                case n.LEFT:
                                                    a <= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                default:
                                                    i >= 0 && s({ ref: t, deltaY: i, deltaX: a, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                b = (0, r.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: a, placement: r, threshold: s = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (s / 100) * (r === n.TOP || r === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case n.TOP:
                                                    return i < 0 && Math.abs(i) >= o;
                                                case n.RIGHT:
                                                    return a > 0 && a >= o;
                                                case n.LEFT:
                                                    return a < 0 && Math.abs(a) >= o;
                                                default:
                                                    return i > 0 && i >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, a.useSwipeable)({ onSwiped: b, onSwiping: _, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: m };
                        };
                    },
                    810: (e) => {
                        e.exports = _;
                    },
                },
                en = {};
            function ea(e) {
                var t = en[e];
                if (void 0 !== t) return t.exports;
                var i = (en[e] = { exports: {} });
                return (ei[e](i, i.exports, ea), i.exports);
            }
            ((ea.d = (e, t) => {
                for (var i in t) ea.o(t, i) && !ea.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (ea.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (ea.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var er = {};
            ((() => {
                (Object.defineProperty(er, '__esModule', { value: !0 }), (er.usePopoverSwipeable = void 0));
                let e = ea(810),
                    t = ea(2458);
                er.usePopoverSwipeable = (i) => {
                    let { ref: n, swipeableProps: a = {}, onClose: r, disableSwipe: s, placement: o, threshold: l } = i,
                        c = (0, e.useMemo)(() => {
                            switch (o) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [o]);
                    return (0, t.useComponentSwipeable)({ ref: n, swipeableProps: a, onClose: r, disableSwipe: s, placement: c, threshold: l });
                };
            })(),
                er.__esModule);
            var es = er.usePopoverSwipeable,
                eo = i(78275),
                el = i(52073),
                ec = i(34712),
                ed = i(44230),
                eu = i(90420);
            let em = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, m.useState)(e),
                    { contentRef: n } = (0, ed.g)();
                return (
                    (0, m.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [n] = e || [];
                            n && n.contentRect.height !== t && i(n.contentRect.height);
                        });
                        return (
                            n && e.observe(n),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, n]),
                    { contentHeight: t }
                );
            };
            var e_ = i(16462),
                eb = i(24337),
                ev = i.n(eb);
            let ep = (0, u.PA)(() => {
                var e, t, i, n;
                let { formatMessage: a } = (0, b.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: s },
                        vibeSettings: o,
                    } = (0, U.g)(),
                    { pageId: l } = (0, L.$)(),
                    { blockIdForFrom: d } = (0, R.N)(),
                    u = (0, m.useRef)(null),
                    _ = (0, m.useRef)(null),
                    p = (0, m.useRef)(null),
                    { resetContext: h } = (0, F.B)({ seeds: null != (n = null == (e = r.meta) ? void 0 : e.seeds) ? n : [], pageIdForFrom: l, blockIdForFrom: d }),
                    { contentRef: x } = (0, ed.g)(),
                    { contentHeight: y } = em(0),
                    { state: A, setState: j, toggleFalse: k } = (0, eo.e)(!1);
                (0, m.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let P = (0, m.useMemo)(
                        () => (s ? { height: '88vh', transitionProperty: 'opacity' } : x ? { insetInlineEnd: 7, insetBlockStart: x.offsetTop + 7, height: y - 16 } : {}),
                        [y, x, s],
                    ),
                    I = !!(r.isApplying || r.isMyVibe),
                    S = (0, f.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            (u.current && (0, el.P)(e, ev().ripple, u.current), h(), null == (t = _.current) || t.focus());
                        }
                    }),
                    E = (0, m.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === eu.M1 || (t && eu.UM.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, c.jsx)(C.$, {
                                      className: ev().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, c.jsx)(Y.I, { variant: 'filter', size: 'xs' }),
                                      'aria-label': a({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                  })
                                : (0, c.jsx)(C.$, {
                                      className: ev().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, c.jsx)(Y.I, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': a({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                      children: (0, c.jsx)(T.HL, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, c.jsx)(v.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [a, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: w } = es({ ref: p, onClose: k, placement: 'bottom', disableSwipe: !s, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, c.jsxs)(ec.AM, {
                    placement: s ? 'bottom' : 'right',
                    isMobile: s,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: x,
                    positionElement: x,
                    disableFloatingStyles: !s,
                    open: A,
                    onOpenChange: j,
                    style: P,
                    overlayClassName: ev().overlay,
                    popoverContentRef: p,
                    children: [
                        E,
                        (0, c.jsx)(ec.hl, {
                            className: ev().popover,
                            ref: p,
                            'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                            children: (0, c.jsxs)('div', {
                                className: ev().root,
                                children: [
                                    s && (0, c.jsx)('div', { ref: w.ref, onMouseDown: w.onMouseDown, className: ev().swipeableArea }),
                                    (0, c.jsxs)('div', {
                                        className: ev().header,
                                        children: [
                                            (0, c.jsx)(T.DZ, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                                children: (0, c.jsx)(v.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: ev().actions,
                                                children: [
                                                    (0, c.jsx)(N.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, c.jsx)(C.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, c.jsx)(Y.I, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: S,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': I,
                                                            'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                        }),
                                                    }),
                                                    (0, c.jsx)(C.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, c.jsx)(Y.I, { variant: 'close', size: 'xxs' }),
                                                        onClick: k,
                                                        'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: _,
                                                        'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)(e_.C, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var eh = i(16112),
                eg = i(56862),
                ex = i(51363),
                ef = i.n(ex);
            let ey = (0, u.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: n, className: a } = e,
                        {
                            vibe: r,
                            settings: { isMobile: s },
                            experiments: o,
                        } = (0, U.g)(),
                        { formatMessage: l } = (0, b.A)(),
                        u = (0, eh.A)(r.meta),
                        m = i && !s,
                        _ = (0, A.L)(() => {
                            var e;
                            return o.checkExperiment(z.z.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: i })
                                : i;
                        });
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(ef().root, a),
                        children: [
                            m &&
                                (0, c.jsx)(eg.O, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: ef().pinButton,
                                }),
                            (0, c.jsx)(ep, {}),
                            i &&
                                (0, c.jsxs)('div', {
                                    className: (0, d.$)(ef().context),
                                    'data-test-id': g.e8.vibe.VIBE_CONTEXT,
                                    children: [
                                        (0, c.jsx)(T.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: _ }),
                                        (0, c.jsx)(C.$, {
                                            className: ef().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, c.jsx)(Y.I, { variant: 'close', size: 'xxs' }),
                                            onClick: n,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(_),
                                            'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                eA = 'vibe-block',
                eC = 'vibe-block-controls',
                ej = (0, u.PA)((e) => {
                    var t, i, n, a;
                    let { className: r } = e,
                        s = (0, h.useRouter)(),
                        { vibe: o, experiments: l, user: u, freeAccess: _ } = (0, U.g)(),
                        b = (0, m.useRef)(null),
                        [p, x] = (0, y.d)(),
                        { pageId: f } = (0, L.$)(),
                        { blockIdForFrom: A } = (0, R.N)(),
                        {
                            openPaymentWidgetModal: C,
                            isShimmerActive: j,
                            isShimmerVisible: k,
                            mainText: N,
                            mainTextA11y: P,
                            additionText: I,
                        } = (0, V.D)({ storeName: 'music', isEnabled: _.isVibeStartRestricted, offerElement: { element: p, intersectionPropertyId: eC } }),
                        { isIntersecting: E } = null != (n = (0, S.BL)([b], { preflightCheck: !1 }, !b.current)[eA]) ? n : {},
                        O = (0, W.N)().get(D.QG),
                        {
                            isVibeContext: M,
                            isPlaying: Y,
                            togglePlay: q,
                            resetContext: G,
                            // for PulseSync: BEGIN access native wave playback by seed
                            playSeeds: pulseSyncPlaySeeds,
                            // for PulseSync: END access native wave playback by seed
                        } = (0, F.B)({ seeds: null != (a = null == (t = o.meta) ? void 0 : t.seeds) ? a : [], pageIdForFrom: f, blockIdForFrom: A }),
                        $ = l.checkExperiment(z.z.WebNextDisableVibeSettings, 'on') || _.isVibeStartRestricted || !u.isAuthorized,
                        Z = (0, m.useCallback)(() => {
                            M ? G() : o.vibeResetLoadingState !== H.G.PENDING && o.vibeReset();
                        }, [M, o, G]),
                        J = (0, m.useCallback)(() => {
                            if (!u.isAuthorized) {
                                if (!O.authorizationUrl) return;
                                s.push(O.authorizationUrl);
                                return;
                            }
                            _.isVibeStartRestricted && C();
                        }, [u.isAuthorized, O.authorizationUrl, s, _.isVibeStartRestricted, C]),
                        ee = (0, m.useCallback)(
                            (e) => {
                                (e.stopPropagation(), e.preventDefault(), J());
                            },
                            [J],
                        ),
                        ei = (0, m.useCallback)(() => {
                            if (_.isVibeStartRestricted || !u.isAuthorized) return void J();
                            q();
                        }, [_.isVibeStartRestricted, u.isAuthorized, q, J]),
                        en = (0, m.useMemo)(
                            () =>
                                l.checkExperiment(z.z.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, c.jsx)(w, { className: et().vibeAnimation })
                                    : (0, c.jsx)(B, { isIntersecting: E, className: et().vibeAnimation }),
                            [l, E],
                        ),
                        ea = (0, m.useMemo)(() => (0, c.jsx)(X.H, { size: 'l', className: et().button }), []);
                    return (
                        // for PulseSync WebHost: BEGIN expose native wave playback by seed to the addon API
                        (0, m.useEffect)(() => {
                            if (!window.pulsesyncApi) return;
                            let e = function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = Array.isArray(null == e ? void 0 : e.seeds) ? e.seeds : 'string' == typeof (null == e ? void 0 : e.seed) ? [e.seed] : [],
                                    i = t.filter((e) => 'string' == typeof e && e.length > 0);
                                if (i.length > 0) {
                                    if (_.isVibeStartRestricted || !u.isAuthorized) return void J();
                                    pulseSyncPlaySeeds(i);
                                    return;
                                }
                                ei();
                            };
                            return (
                                (window.pulsesyncApi.playVibeNative = e),
                                () => {
                                    window.pulsesyncApi && window.pulsesyncApi.playVibeNative === e && delete window.pulsesyncApi.playVibeNative;
                                }
                            );
                        }, [_.isVibeStartRestricted, u.isAuthorized, ei, J, pulseSyncPlaySeeds]),
                        // for PulseSync WebHost: END expose native wave playback by seed to the addon API
                        (0, m.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        u.isAuthorized && o.isNeededToLoad && (0, m.use)(o.getLastVibe()),
                        (0, c.jsxs)('div', {
                            className: (0, d.$)(et().root, { [et().root_freemium]: _.isVibeStartRestricted || !u.isAuthorized }, r),
                            ref: b,
                            'data-intersection-property-id': eA,
                            'data-test-id': g.e8.vibe.VIBE_BLOCK,
                            children: [
                                en,
                                (0, c.jsxs)('div', {
                                    className: et().controls,
                                    onClick: ee,
                                    ref: x,
                                    'data-intersection-property-id': eC,
                                    children: [
                                        (0, c.jsx)(Q, {
                                            className: et().playButton,
                                            isPlaying: Y,
                                            ariaDisabled: _.isVibeStartRestricted || !u.isAuthorized,
                                            onClick: ei,
                                        }),
                                        !$ && (0, c.jsx)(ey, { className: et().settingsButton, context: null == (i = o.meta) ? void 0 : i.context, onResetClick: Z }),
                                        (_.isVibeStartRestricted || !u.isAuthorized) &&
                                            (0, c.jsx)(T.HL, {
                                                className: et().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                'data-test-id': g.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT,
                                                children: (0, c.jsx)(v.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, c.jsx)('br', {}) } }),
                                            }),
                                        !u.isAuthorized && ea,
                                        u.isAuthorized &&
                                            _.isVibeStartRestricted &&
                                            (0, c.jsx)(K.b, {
                                                isShimmerActive: j,
                                                isShimmerVisible: k,
                                                onClick: C,
                                                mainText: N,
                                                ariaLabel: P,
                                                additionText: I,
                                                className: et().button,
                                                'data-test-id': g.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON,
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            ej.displayName = 'VibeBlock';
            var ek = i(20129),
                eN = i(53301),
                eT = i(67858),
                eP = i(69630),
                eI = i(44318),
                eS = i(38501),
                eE = i(2946),
                ew = i(44450),
                eB = i(26e3),
                eO = i(40210),
                eM = i(64284),
                eR = i(86535),
                eL = i(12816),
                eV = i(82204),
                eD = i(4476),
                eW = i(59844),
                eF = i(37670),
                eU = i(83210),
                ez = i(78940),
                eH = i(8655),
                eK = i(69704),
                eX = i(34303),
                eY = i(67174),
                eq = i(43522),
                eG = i(86790),
                e$ = i(60266),
                eZ = i(66522),
                eJ = i.n(eZ),
                eQ = i(65453),
                e0 = i(93135),
                e1 = i.n(e0);
            let e2 = (e) => {
                let { href: t, imageSrc: i, children: n, className: a } = e,
                    r = (0, ez.Z)(t);
                return (0, c.jsxs)(eQ.N, {
                    onClick: r,
                    className: (0, d.$)(e1().root, a),
                    children: [
                        (0, c.jsx)(T.HL, { className: e1().caption, lineClamp: 3, size: 'm', variant: 'span', weight: 'bold', children: n }),
                        (0, c.jsx)('div', {
                            className: e1().imageContainer,
                            children: (0, c.jsx)(j._V, { className: e1().image, fit: 'cover', src: i, withAvatarReplace: !0 }),
                        }),
                    ],
                });
            };
            var e5 = i(92716),
                e8 = i(57496),
                e4 = i(59717),
                e9 = i(86200),
                e6 = i(8641),
                e7 = i(37173),
                e3 = i(5407),
                te = i(91467),
                tt = i(18684),
                ti = i(76675),
                tn = i(51318),
                ta = i(17071),
                tr = i(38860),
                ts = i(9630),
                to = i(33355),
                tl = i(52726),
                tc = i(35262),
                td = i(49738),
                tu = i(63955),
                tm = i(16704),
                t_ = i(5915),
                tb = i(24437),
                tv = i(29008),
                tp = i(96527),
                th = i(91292),
                tg = i(92633),
                tx = i.n(tg);
            let tf = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                ty = (0, u.PA)((e) => {
                    let { album: t, className: i, playButton: n } = e,
                        {
                            sonataState: a,
                            fullscreenPlayer: r,
                            settings: { isMobile: s },
                        } = (0, U.g)(),
                        { formatMessage: o } = (0, b.A)(),
                        l = (0, ts.e)(),
                        u = (0, tt.m)(),
                        m = (0, tp.N)(),
                        _ = (0, tv.r)(null == t ? void 0 : t.type),
                        v = (null == t ? void 0 : t.title) ? ''.concat(_, ' ').concat(t.title) : _,
                        p = a.entityMeta,
                        h = (0, f.c)((e) => {
                            (e.stopPropagation(), (0, el.P)(e, tx().ripple), null == l || l.moveForward(), u({ actionType: e5.ActionType.Skip }));
                        }),
                        x = (0, f.c)((e) => {
                            (e.stopPropagation(), (0, el.P)(e, tx().ripple), null == l || l.moveBackward(), u({ actionType: e5.ActionType.Backskip }));
                        }),
                        y = (0, f.c)(() => {
                            a.isGenerativeContext || (r.showFullscreenPlayerModal(), m({ to: e5.AppScreen.PlayerScreen }));
                        }),
                        k = (0, A.L)(() => {
                            if (p) return a.isGenerativeContext ? p.coverUri || tf : (null == t ? void 0 : t.coverUri) || tf;
                        }),
                        N = (0, f.c)(() => {
                            m({ to: e5.AppScreen.AlbumScreen });
                        }),
                        T = (0, A.L)(() => {
                            var e, i, r, o;
                            return k
                                ? !s && (null == t ? void 0 : t.url)
                                    ? (0, c.jsx)(th.N, {
                                          className: tx().link,
                                          href: t.url,
                                          'aria-label': v,
                                          onClick: N,
                                          children: (0, c.jsx)(
                                              j._V,
                                              {
                                                  src: k,
                                                  className: (0, d.$)(tx().cover, {
                                                      [tx().cover_hiddenOnCompactPause]: !!n,
                                                      [tx().cover_generative]: a.isGenerativeContext,
                                                  }),
                                                  fit: 'cover',
                                                  size: 400,
                                                  withAvatarReplace: !0,
                                                  alt: v,
                                                  'aria-hidden': !0,
                                              },
                                              null != (o = null == (e = a.entityMeta) ? void 0 : e.idWithContext) ? o : 'default',
                                          ),
                                      })
                                    : (0, c.jsx)(
                                          j._V,
                                          {
                                              src: k,
                                              className: (0, d.$)(tx().cover, { [tx().cover_hiddenOnCompactPause]: !!n, [tx().cover_generative]: a.isGenerativeContext }),
                                              onClick: y,
                                              fit: 'cover',
                                              size: 400,
                                              withAvatarReplace: !0,
                                              alt: v,
                                              'aria-hidden': !0,
                                          },
                                          null != (r = null == (i = a.entityMeta) ? void 0 : i.idWithContext) ? r : 'default',
                                      )
                                : null;
                        });
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(tx().root, i),
                        'aria-label': a.isGenerativeContext ? void 0 : v,
                        children: [
                            !a.isGenerativeContext &&
                                s &&
                                (0, c.jsx)(C.$, {
                                    className: (0, d.$)(tx().button, tx().button_backward),
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': o({ id: 'player-actions.previous-track' }),
                                    icon: (0, c.jsx)(Y.I, { variant: 'previous', size: 'xs' }),
                                    onClick: x,
                                    'data-test-id': g.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            (0, c.jsxs)('div', {
                                className: tx().coverContainer,
                                'data-test-id': g.e8.player.VIBE_ALBUM_COVER,
                                children: [T, n && (0, c.jsx)('div', { className: tx().playButtonContainer, children: n })],
                            }),
                            !a.isGenerativeContext &&
                                s &&
                                (0, c.jsx)(C.$, {
                                    className: (0, d.$)(tx().button, tx().button_forward),
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': o({ id: 'player-actions.next-track' }),
                                    icon: (0, c.jsx)(Y.I, { variant: 'next', size: 'xs' }),
                                    onClick: h,
                                    'data-test-id': g.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                        ],
                    });
                });
            var tA = i(28692),
                tC = i(19934),
                tj = i(7023),
                tk = i(27397),
                tN = i(36361),
                tT = i(33139),
                tP = i(84779),
                tI = i(9618),
                tS = i(98953),
                tE = i(32721),
                tw = i(18130),
                tB = i(34979);
            let tO = (0, u.PA)((e) => {
                let { className: t, trackId: i, albumId: n } = e,
                    { track: a } = (0, U.g)(),
                    r = (0, f.c)(() => {
                        a.open({ trackId: i, albumId: n });
                    });
                return (0, c.jsx)(tC.Dr, {
                    className: t,
                    onClick: r,
                    icon: (0, c.jsx)(Y.I, { variant: 'note', size: 'xxs' }),
                    'data-test-id': g.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_TRACK,
                    children: (0, c.jsx)(v.A, { id: 'interface-actions.navigate-to-track' }),
                });
            });
            var tM = i(74064),
                tR = i(81066),
                tL = i(39185),
                tV = i(96046),
                tD = i.n(tV);
            let tW = (0, u.PA)((e) => {
                var t, i, n;
                let { className: a } = e,
                    r = (0, ts.e)(),
                    { formatMessage: s } = (0, b.A)(),
                    o = null != (t = null == r ? void 0 : r.state.playerState.speed.value) ? t : 1,
                    l = null != (i = tL.f_[o]) ? i : 0,
                    [u, _] = (0, m.useState)(l),
                    p = null != (n = tL.pp[u]) ? n : 1,
                    h = (0, f.c)(() => {
                        var e;
                        let t = (u + 1) % tL.pp.length;
                        (_(t), null == r || r.setSpeed(Number(null != (e = tL.pp[t]) ? e : 1)));
                    });
                return (
                    (0, m.useEffect)(() => {
                        let e =
                            null == r
                                ? void 0
                                : r.state.playerState.speed.onChange(() => {
                                      var e;
                                      let t = r.state.playerState.speed.value;
                                      _(null != (e = tL.f_[t]) ? e : 0);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [r]),
                    (0, c.jsxs)(tC.Dr, {
                        className: (0, d.$)(tD().root, a),
                        onClick: h,
                        'aria-label': s({ id: 'interface-actions.speed' }, { speed: p }),
                        isSubMenu: !0,
                        'data-test-id': g.S7.CONTEXT_MENU_SPEED_BUTTON,
                        children: [
                            (0, c.jsx)(v.A, { id: 'player-actions.video-speed' }),
                            (0, c.jsx)(Y.I, { variant: (0, tL.CU)(p, !1), size: 'l', className: tD().icon }),
                        ],
                    })
                );
            });
            var tF = i(60492),
                tU = i.n(tF);
            let tz = (0, u.PA)((e) => {
                let { onCloseMenu: t } = e,
                    { user: i, sonataState: n, fullscreenPlayer: a } = (0, U.g)(),
                    { formatMessage: r } = (0, b.A)(),
                    s = (0, tp.N)(),
                    o = null !== n.entityMeta,
                    l = !i.isAuthorized,
                    d = (0, f.c)(() => {
                        (a.showPlayQueue(), s({ to: e5.AppScreen.PlayerScreen }), t());
                    }),
                    u = (0, m.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e;
                            return (0, c.jsx)(tC.Dr, {
                                'aria-label': r({ id: 'interface-actions.open-play-queue' }),
                                onClick: d,
                                disabled: !o || t,
                                icon: (0, c.jsx)(Y.I, { variant: 'playQueue', size: 'xxs' }),
                                'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM,
                                children: (0, c.jsx)(v.A, { id: 'interface-actions.open-play-queue' }),
                            });
                        },
                        [r, o, d],
                    );
                return (0, c.jsx)(tu.Z, { isNested: !0, isEnabled: l, placement: 'right', textVariant: 'openQueue', renderChildren: u });
            });
            var tH = i(51147),
                tK = i.n(tH);
            let tX = (0, u.PA)((e) => {
                var t, i, n, a, r, s, o, l;
                let { buttonClassName: u } = e,
                    { sonataState: m, advert: _, fullscreenPlayer: p, quality: h, vibe: x, user: y, experiments: j } = (0, U.g)(),
                    { formatMessage: k } = (0, b.A)(),
                    N = (0, tN.e)(),
                    T = (0, tk.A)(),
                    P = (0, eh.A)(x.meta),
                    { state: I, setState: S, toggleFalse: E } = (0, eo.e)(!1),
                    w = (0, tp.N)(),
                    B = (0, tt.m)(),
                    O = m.entityMeta,
                    M = (0, f.c)((e) => {
                        S(e);
                    }),
                    R = (0, f.c)(() => {
                        (h.modal.open(), E());
                    }),
                    L = (0, f.c)(() => {
                        (p.showSyncLyrics(), w({ to: e5.AppScreen.PlayerScreen }), E());
                    }),
                    V = (0, f.c)(() => {
                        (N(m), B({ actionType: e5.ActionType.ChangeShuffle }));
                    }),
                    D = (0, f.c)(() => {
                        (T(m), B({ actionType: e5.ActionType.ChangeRepeatSettings }));
                    }),
                    W = (0, f.c)(() => {
                        (P(), E());
                    }),
                    H = (0, f.c)((e) => {
                        ((0, el.P)(e, tU().ripple), R());
                    }),
                    K = (0, e3.P)(),
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: q } = (0, tI.q)(),
                    { isPlaying: G, togglePlay: $ } = (0, F.B)({
                        seeds: null != (s = null == O ? void 0 : O.seeds) ? s : [],
                        pageIdForFrom: eL._Q.RADIO,
                        blockIdForFrom: ''.concat(eM.U.TRACK, '-').concat(null == O ? void 0 : O.id),
                        parentContextId: (null == O || null == (t = O.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == O ? void 0 : O.mainAlbum.id, ':').concat(null == O ? void 0 : O.id)
                            : null == O
                              ? void 0
                              : O.entityId,
                    }),
                    Z = (0, f.c)(() => {
                        if (X && y.isAuthorized) return void q();
                        !K() && (G || $());
                    }),
                    J = m.repeatMode === tA.pM.ONE ? 'repeat_one' : 'repeat',
                    Q = m.repeatMode !== tA.pM.NONE,
                    ee = m.shuffle,
                    et = p.isSyncLyricsMode,
                    ei = !!(null == (i = x.meta) ? void 0 : i.isPinned),
                    en = j.checkExperiment(z.z.WebNextWaveLikesAndShares, 'on') && (null == (n = x.meta) ? void 0 : n.isLikeEnabled),
                    ea = !!(x.isMyVibe || x.isShuffleVibe || en),
                    er = j.checkExperiment(z.z.WebNextProductWithoutRecommendation, 'on'),
                    es = !er && !!x.meta && m.isVibeContext && !ea,
                    ec = m.canSpeed && ((null == O ? void 0 : O.isNonMusic) || (null == O || null == (a = O.mainAlbum) ? void 0 : a.isNonMusic)),
                    ed = !er && (null == O ? void 0 : O.isNonUserGenerated) && !(null == (r = O.mainAlbum) ? void 0 : r.isNonMusic),
                    eu = (null == O ? void 0 : O.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: em, pathname: e_ } = (0, tw.b)(eu, {
                        params: { albumId: null != (o = null == O ? void 0 : O.albumId) ? o : '', trackId: null != (l = null == O ? void 0 : O.id) ? l : '' },
                    }),
                    eb = (0, A.L)(() => {
                        var e, t;
                        if (O)
                            return {
                                variant: tS.Y.TRACK,
                                id: O.id,
                                title: O.title,
                                path: e_,
                                trackArtistName: null == (e = O.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = O.mainArtist) ? void 0 : t.id,
                                trackAlbumId: O.albumId,
                            };
                    }),
                    // for PulseSync: BEGIN track download filename and desktop download action
                    pulseSyncTrackDownloadName = (0, A.L)(() => {
                        let e = (O?.artists || [])
                            .map((e) => e.name)
                            .filter(Boolean)
                            .join(', ');
                        return [e, O?.title].filter(Boolean).join(' — ');
                    }),
                    pulseSyncDownloadTrackToFile = (0, f.c)(() => {
                        (O?.id && window.musicDesktop?.pulsesync.downloads.track?.(O.id, pulseSyncTrackDownloadName), E());
                    }),
                    // for PulseSync: END track download filename and desktop download action
                    ev = ''.concat(k({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(k({ id: 'warning-messages.can-break-accessibility' })),
                    ep = (0, A.L)(() => {
                        let e = [];
                        return (ec && e.push((0, c.jsx)(tW, {}, 'speed')), e.length > 0 && e.push((0, c.jsx)('div', { className: tK().divider }, 'speed-divider')), e);
                    }),
                    eg = (0, A.L)(() => {
                        let e = [];
                        return (
                            es &&
                                e.push(
                                    (0, c.jsx)(
                                        tC.Dr,
                                        {
                                            onClick: W,
                                            icon: (0, c.jsx)(Y.I, { variant: ei ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM,
                                            children: ei
                                                ? (0, c.jsx)(v.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, c.jsx)(v.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            ed && e.push((0, c.jsx)(tR.C, { variant: tE.I.TRACK, onClick: Z, disabled: !y.isAuthorized, onOpenMenuChange: M }, 'vibe')),
                            e.length > 0 && e.push((0, c.jsx)('div', { className: tK().divider }, 'top-divider')),
                            e
                        );
                    }),
                    ex = (0, A.L)(() => {
                        let e = [];
                        if (O) {
                            var t, i, n, a, r;
                            // for PulseSync: BEGIN download-to-file action in the wave track menu
                            (e.push(
                                (0, c.jsx)(
                                    tC.Dr,
                                    {
                                        onClick: pulseSyncDownloadTrackToFile,
                                        disabled: !O.id,
                                        icon: (0, c.jsx)(Y.I, { variant: 'download', size: 'xxs' }),
                                        children: 'Скачать в файл',
                                    },
                                    'download-to-file',
                                ),
                            ),
                                e.push((0, c.jsx)(tP.$, { track: O }, 'add-to-playlist')),
                                eb && O.isNonUserGenerated && e.push((0, c.jsx)(tM.H, { shareLink: em, entityMeta: eb }, 'share')),
                                O.isNonUserGenerated &&
                                    O.isTrackMusic &&
                                    (null == (t = O.mainAlbum) ? void 0 : t.id) &&
                                    e.push((0, c.jsx)(tO, { trackId: O.id, albumId: O.mainAlbum.id }, 'navigate-to-track')),
                                O.isNonUserGenerated &&
                                    (O.albums.length || O.mainAlbum) &&
                                    (null == (i = O.mainAlbum) ? void 0 : i.url) &&
                                    e.push((0, c.jsx)(tB.f, { albumUrl: O.mainAlbum.url, albumType: O.mainAlbum.type, trackType: O.type }, 'navigate-to-album')),
                                O.isNonUserGenerated &&
                                    (null == (n = O.artists) ? void 0 : n.length) &&
                                    ((null == (a = O.mainAlbum) ? void 0 : a.isAudiobook) ||
                                        (null == (r = O.mainAlbum) ? void 0 : r.isAlbum) ||
                                        O.isTrackAudiobook ||
                                        O.isTrackMusic) &&
                                    e.push((0, c.jsx)(tT.o, { artists: O.artists }, 'navigate-to-artist')));
                            // for PulseSync: END download-to-file action in the wave track menu
                        }
                        return (e.length > 0 && e.unshift((0, c.jsx)('div', { className: tK().divider }, 'bottom-divider')), e);
                    });
                return m.isGenerativeContext
                    ? (0, c.jsx)(C.$, {
                          className: u,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: H,
                          'aria-label': k({ id: 'player-actions.audio-quality' }),
                          icon: (0, c.jsx)(Y.I, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, c.jsxs)(tC.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: I,
                          onOpenChange: M,
                          variant: 'text',
                          icon: (0, c.jsx)(Y.I, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: u,
                          ariaLabel: k({ id: 'interface-actions.context-menu' }),
                          containerDataTestId: g.e8.player.VIBE_CONTEXT_MENU,
                          'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                          children: [
                              eg,
                              ep,
                              m.canShuffle &&
                                  (0, c.jsx)(tC.Dr, {
                                      'aria-label': k({ id: 'player-actions.shuffle' }),
                                      onClick: V,
                                      icon: (0, c.jsx)(Y.I, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, d.$)({ [tK().item_active]: ee }),
                                      isSubMenu: !0,
                                      'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM,
                                      children: (0, c.jsx)(v.A, { id: 'player-actions.mix' }),
                                  }),
                              m.canChangeRepeatMode &&
                                  (0, c.jsx)(tC.Dr, {
                                      'aria-label': (0, tj.z)(m.repeatMode, k),
                                      onClick: D,
                                      icon: (0, c.jsx)(Y.I, { variant: J, size: 'xxs' }),
                                      className: (0, d.$)({ [tK().item_active]: Q }),
                                      isSubMenu: !0,
                                      'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM,
                                      children: (0, c.jsx)(v.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !m.isGenerativeContext &&
                                  !_.isAdvertShown &&
                                  // for PulseSync: BEGIN include fallback results in wave synchronized lyrics availability
                                  ((null == O ? void 0 : O.isSyncLyricsAvailable) ||
                                      (null == O ? void 0 : O.isSyncLyricsAvailableWithOfflineFeature) ||
                                      (null == O ? void 0 : O.hasSyncLyrics) ||
                                      ((null == O ? void 0 : O.id) && p.syncLyrics.hasLyricsForTrack(O.id))) &&
                                  // for PulseSync: END include fallback results in wave synchronized lyrics availability
                                  (0, c.jsx)(tC.Dr, {
                                      'aria-label': ev,
                                      onClick: L,
                                      icon: (0, c.jsx)(Y.I, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, d.$)({ [tK().item_active]: et }),
                                      'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM,
                                      children: (0, c.jsx)(v.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !m.isGenerativeContext && !_.isAdvertShown && (0, c.jsx)(tz, { onCloseMenu: E }),
                              (0, c.jsx)(tC.Dr, {
                                  onClick: R,
                                  icon: (0, c.jsx)(Y.I, { variant: 'settings', size: 'xxs' }),
                                  'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM,
                                  children: (0, c.jsx)(v.A, { id: 'player-actions.audio-quality' }),
                              }),
                              ex,
                          ],
                      });
            });
            var tY = i(55482),
                tq = i(54112),
                tG = i(54152),
                t$ = i(54965),
                tZ = i(97361),
                tJ = i(90224),
                tQ = i(7147),
                t0 = i.n(tQ),
                t1 = i(73171),
                t2 = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (a && (a += ' '), (a += n));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    973: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var n = i(810),
                            a = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(n);
                        (!(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            (t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t));
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = n.forwardRef(function (e, t) {
                                let {
                                        style: i = {},
                                        className: r = '',
                                        autoFill: s = !1,
                                        play: o = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: c = !1,
                                        direction: d = 'left',
                                        speed: u = 50,
                                        delay: m = 0,
                                        loop: _ = 0,
                                        gradient: b = !1,
                                        gradientColor: v = 'white',
                                        gradientWidth: p = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: x,
                                        children: f,
                                    } = e,
                                    [y, A] = n.useState(0),
                                    [C, j] = n.useState(0),
                                    [k, N] = n.useState(1),
                                    [T, P] = n.useState(!1),
                                    I = n.useRef(null),
                                    S = t || I,
                                    E = n.useRef(null),
                                    w = n.useCallback(() => {
                                        if (E.current && S.current) {
                                            let e = S.current.getBoundingClientRect(),
                                                t = E.current.getBoundingClientRect(),
                                                i = e.width,
                                                n = t.width;
                                            (('up' === d || 'down' === d) && ((i = e.height), (n = t.height)),
                                                s && i && n ? N(n < i ? Math.ceil(i / n) : 1) : N(1),
                                                A(i),
                                                j(n));
                                        }
                                    }, [s, S, d]);
                                (n.useEffect(() => {
                                    if (T && (w(), E.current && S.current)) {
                                        let e = new ResizeObserver(() => w());
                                        return (
                                            e.observe(S.current),
                                            e.observe(E.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [w, S, T]),
                                    n.useEffect(() => {
                                        w();
                                    }, [w, f]),
                                    n.useEffect(() => {
                                        P(!0);
                                    }, []),
                                    n.useEffect(() => {
                                        'function' == typeof x && x();
                                    }, []));
                                let B = n.useMemo(() => (s ? (C * k) / u : C < y ? y / u : C / u), [s, y, C, k, u]),
                                    O = n.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, i), {
                                                '--pause-on-hover': !o || l ? 'paused' : 'running',
                                                '--pause-on-click': !o || (l && !c) || c ? 'paused' : 'running',
                                                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                                                '--transform': 'up' === d ? 'rotate(-90deg)' : 'down' === d ? 'rotate(90deg)' : 'none',
                                            }),
                                        [i, o, l, c, d],
                                    ),
                                    M = n.useMemo(() => ({ '--gradient-color': v, '--gradient-width': 'number' == typeof p ? ''.concat(p, 'px') : p }), [v, p]),
                                    R = n.useMemo(
                                        () => ({
                                            '--play': o ? 'running' : 'paused',
                                            '--direction': 'left' === d ? 'normal' : 'reverse',
                                            '--duration': ''.concat(B, 's'),
                                            '--delay': ''.concat(m, 's'),
                                            '--iteration-count': _ ? ''.concat(_) : 'infinite',
                                            '--min-width': s ? 'auto' : '100%',
                                        }),
                                        [o, d, B, m, _, s],
                                    ),
                                    L = n.useMemo(() => ({ '--transform': 'up' === d ? 'rotate(90deg)' : 'down' === d ? 'rotate(-90deg)' : 'none' }), [d]),
                                    V = n.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                a.default.createElement(
                                                    n.Fragment,
                                                    { key: t },
                                                    n.Children.map(f, (e) => a.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [L, f],
                                    );
                                return T
                                    ? a.default.createElement(
                                          'div',
                                          { ref: S, style: O, className: 'rfm-marquee-container ' + r },
                                          b && a.default.createElement('div', { style: M, className: 'rfm-overlay' }),
                                          a.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: R, onAnimationIteration: g, onAnimationEnd: h },
                                              a.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: E },
                                                  n.Children.map(f, (e) => a.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                              ),
                                              V(k - 1),
                                          ),
                                          a.default.createElement('div', { className: 'rfm-marquee', style: R }, V(k)),
                                      )
                                    : null;
                            })));
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var r in ((n = {}), t)) 'key' !== r && (n[r] = t[r]);
                            else n = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    7956: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0));
                        let a = i(4377),
                            r = i(5881),
                            s = i(810),
                            o = n(i(1269)),
                            l = i(7497),
                            c = n(i(973));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: i,
                                    contentClassName: n,
                                    scrollingClassName: d,
                                    speed: u = 50,
                                    delay: m = 0,
                                    pauseOnHover: _ = !0,
                                    pauseOnClick: b = !1,
                                    loop: v = 0,
                                    direction: p = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: x,
                                    gradientWidth: f,
                                    gap: y = 12,
                                    ...A
                                } = e,
                                C = (0, s.useRef)(null),
                                j = (0, s.useRef)(null),
                                [k, N] = (0, s.useState)(!1),
                                [T, P] = (0, s.useState)(!1);
                            ((0, s.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        P(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, s.useEffect)(() => {
                                    let e = C.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let i = () => {
                                        let i = e.clientWidth,
                                            n = t.scrollWidth;
                                        if (0 === i || 0 === n) return void N(!1);
                                        N(n > i);
                                    };
                                    if ((i(), 'undefined' == typeof ResizeObserver)) return;
                                    let n = new ResizeObserver(i);
                                    return (
                                        n.observe(e),
                                        n.observe(t),
                                        () => {
                                            n.disconnect();
                                        }
                                    );
                                }, []));
                            let I = k && !T,
                                S = I && void 0 !== y ? { marginInlineEnd: ''.concat(y, 'px') } : void 0,
                                E = (0, l.useReturnValue)(() =>
                                    I
                                        ? (0, a.jsx)(o.default, {
                                              className: c.default.marquee,
                                              play: I,
                                              speed: u,
                                              delay: m / 1e3,
                                              loop: v,
                                              direction: p,
                                              autoFill: h,
                                              pauseOnHover: _,
                                              pauseOnClick: b,
                                              gradient: g,
                                              gradientColor: x,
                                              gradientWidth: f,
                                              children: (0, a.jsx)('div', { className: (0, r.clsx)(c.default.content, n), style: S, children: t }),
                                          })
                                        : (0, a.jsx)('div', { className: (0, r.clsx)(c.default.content, c.default.content_static, n), style: S, children: t }),
                                );
                            return (0, a.jsxs)('div', {
                                ref: C,
                                className: (0, r.clsx)(c.default.root, i, I && d),
                                ...A,
                                children: [
                                    (0, a.jsx)('div', { ref: j, className: (0, r.clsx)(c.default.measure, c.default.content, n), 'aria-hidden': !0, children: t }),
                                    E,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = _;
                    },
                },
                t5 = {};
            function t8(e) {
                var t = t5[e];
                if (void 0 !== t) return t.exports;
                var i = (t5[e] = { exports: {} });
                return (t2[e].call(i.exports, i, i.exports, t8), i.exports);
            }
            ((t8.d = (e, t) => {
                for (var i in t) t8.o(t, i) && !t8.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (t8.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (t8.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var t4 = {};
            (() => {
                (Object.defineProperty(t4, 'X', { value: !0 }), (t4.W = void 0));
                var e = t8(7956);
                Object.defineProperty(t4, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var t9 = t4.W;
            t4.X;
            var t6 = i(50681),
                t7 = i.n(t6);
            let t3 = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    maxLines: 3,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 15, lineHeight: 16 / 15 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                },
                ie = (0, u.PA)((e) => {
                    let { children: t, className: i } = e,
                        { experiments: n } = (0, U.g)(),
                        [a, r] = (0, y.d)(),
                        s = n.checkExperiment(z.z.WebNextMainPlayerTitle, 'on');
                    return ((0, t1.mf)(a, t3), s)
                        ? (0, c.jsx)('div', {
                              ref: r,
                              className: i,
                              'data-test-id': g.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                              children: (0, c.jsx)(T.HL, {
                                  variant: 'span',
                                  className: (0, d.$)(t7().trackNameText, t7().trackNameText_multiline),
                                  lineClamp: 3,
                                  children: t,
                              }),
                          })
                        : (0, c.jsx)(t9, {
                              className: i,
                              scrollingClassName: t7().scrollingTrackName,
                              contentClassName: t7().trackNameText,
                              pauseOnHover: !1,
                              speed: 35,
                              gap: 32,
                              'data-test-id': g.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                              children: t,
                          });
                }),
                it = (0, u.PA)((e) => {
                    var t, i, n, a, r;
                    let { shouldShowArtists: s, shouldShowArtistsWithTrackTitle: o, shouldKeepMobileSpacingOnPause: l } = e,
                        {
                            experiments: u,
                            sonataState: _,
                            advert: v,
                            settings: { isMobile: p },
                        } = (0, U.g)(),
                        { formatMessage: h } = (0, b.A)(),
                        x = (0, ts.e)(),
                        y = _.entityMeta,
                        C = null != (n = _.position) ? n : 0,
                        j = null != (a = _.duration) ? a : 0,
                        [k, N] = (0, m.useState)(null),
                        T = (0, m.useRef)(!1),
                        { state: P, toggleTrue: I, toggleFalse: S } = (0, eo.e)(!1),
                        E = !!j && !_.isGenerativeContext && P,
                        w = T.current && null != k ? k : C,
                        B = j > 0 ? (Math.min(w, j) / j) * 100 : 0,
                        O = (0, t$.E)(Math.round(w), Math.round(j)),
                        M = (0, t$.E)(Math.round(j), Math.round(j)),
                        R = (0, tZ.P)(w),
                        L = (0, tZ.P)(j),
                        V = {
                            '--track-progress': ''.concat(B, '%'),
                            '--progress-transition-duration': ((e) => {
                                if ('default' !== e && void 0 !== e) return 'on1' === e ? '150ms' : '0ms';
                            })(null == (t = u.getExperiment(z.z.WebNextMainPlayerAnimation)) ? void 0 : t.group),
                            '--progress-transition': T.current ? 'none' : void 0,
                        },
                        D = (0, m.useMemo)(
                            () =>
                                (0, tY.A)(() => {
                                    S();
                                }, 1e3),
                            [S],
                        ),
                        W = (0, f.c)((e, t) => {
                            v.isAdvertShown || ((T.current = !t), p && (I(), D.cancel(), D()), t ? null == x || x.setProgress(e) : N(e));
                        }),
                        F = (0, A.L)(() => {
                            if (_.isGenerativeContext)
                                return (null == y ? void 0 : y.title)
                                    ? (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)('span', {
                                                  className: t0().generativeIcon,
                                                  children: (0, c.jsx)(Y.I, {
                                                      size: 'xs',
                                                      variant: 'infinity',
                                                      'data-test-id': g.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON,
                                                  }),
                                              }),
                                              (0, c.jsx)('span', { className: t0().generativeTitle, children: y.title }),
                                          ],
                                      })
                                    : (0, c.jsx)(Y.I, { size: 'xs', variant: 'infinity', 'data-test-id': g.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON });
                            let e = [],
                                t = [];
                            return (
                                y && (e.push((0, tG.X)(y.artists)), e.push('—')),
                                (null == y ? void 0 : y.title) && t.push(y.title),
                                !(null == y ? void 0 : y.isRemoved) && (null == y ? void 0 : y.version) && t.push('('.concat(y.version, ')')),
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        e.length > 0 &&
                                            (s || o) &&
                                            (0, c.jsx)('span', {
                                                className: (0, d.$)(t0().artists, { [t0().artists_hidden]: !s, [t0().artists_visibleOnCompact]: o }),
                                                children: e.join(' '),
                                            }),
                                        t.join(' '),
                                    ],
                                })
                            );
                        });
                    return (0, c.jsx)('div', {
                        className: t0().root,
                        style: V,
                        children: (0, c.jsxs)('div', {
                            className: (0, d.$)(t0().center, {
                                [t0().center_withExplicitMark]: null == y ? void 0 : y.explicitDisclaimer,
                                [t0().center_withoutExplicitMark]: !(null == y ? void 0 : y.explicitDisclaimer),
                                [t0().center_spacious]: !l,
                                [t0().center_playing]: _.isPlaying,
                                [t0().center_withTimecode]: E,
                                [t0().center_active]: !_.isGenerativeContext,
                            }),
                            onMouseEnter: I,
                            onMouseLeave: S,
                            'data-test-id': g.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER,
                            children: [
                                (0, c.jsx)(
                                    ie,
                                    { className: t0().trackName, children: F },
                                    ''.concat(null != (r = null == (i = _.entityMeta) ? void 0 : i.idWithContext) ? r : 'default', '-').concat(s),
                                ),
                                (null == y ? void 0 : y.explicitDisclaimer) &&
                                    (0, c.jsx)(tJ.N, {
                                        containerClassName: t0().explicitMarkContainer,
                                        getDescriptionTexts: y.getDescriptionTexts,
                                        size: 'xxxs',
                                        variant: y.explicitDisclaimer,
                                        className: t0().explicitMark,
                                        trackId: y.id,
                                    }),
                                !_.isGenerativeContext &&
                                    (0, c.jsx)('span', {
                                        className: t0().timecodeOverlay,
                                        'aria-hidden': !0,
                                        'data-test-id': g.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                        children: ''.concat(O, ' / ').concat(M),
                                    }),
                                !_.isGenerativeContext &&
                                    (0, c.jsx)(tq.A, {
                                        className: (0, d.$)(t0().slider, { [t0().slider_active]: !_.isGenerativeContext }),
                                        'aria-label': h({ id: 'player-actions.timecode-control' }),
                                        'aria-valuetext': ''.concat(R, ' / ').concat(L),
                                        disabled: !y || v.isAdvertShown,
                                        onChange: W,
                                        onFocus: I,
                                        onBlur: S,
                                        maxValue: Math.round(j),
                                        mode: 'deferred',
                                        value: Math.round(w),
                                        showThumbVariant: 'never',
                                        trackSize: 's',
                                        thumbSize: 's',
                                    }),
                            ],
                        }),
                    });
                });
            var ii = i(19376),
                ia = i(12670),
                ir = i(95147),
                is = i.n(ir);
            // for PulseSync: BEGIN Yandex Station device picker and live wave-setting subscription
            const pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return (
                            i && a.add(i),
                            {
                                accountSpeaker: e,
                                localSpeaker: i ?? void 0,
                                canUseLocal: !!i,
                            }
                        );
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, c.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, c.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, c.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.musicDesktop?.pulsesync.station.selectSpeaker?.(e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = {
                                ok: !1,
                                error: e,
                            };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return (
                        t ?? {
                            ok: !1,
                        }
                    );
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([
                        {
                            isThisDevice: !0,
                        },
                        ...pulseSyncBuildCastDeviceRows(a, i),
                    ]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncWaveCastControl = (0, u.PA)((e) => {
                    let { buttonClassName: castButtonClassName, disabled: castDisabled } = e,
                        { formatMessage: castFormatMessage } = (0, b.A)(),
                        [castPopoverOpen, setCastPopoverOpen] = (0, m.useState)(!1),
                        [castPopoverMounted, setCastPopoverMounted] = (0, m.useState)(!1),
                        [castPopoverShift, setCastPopoverShift] = (0, m.useState)(0),
                        [castDeviceRows, setCastDeviceRows] = (0, m.useState)([]),
                        [castActiveSpeakerId, setCastActiveSpeakerId] = (0, m.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [castConnectingSpeakerId, setCastConnectingSpeakerId] = (0, m.useState)(null),
                        [castConnectionErrorSpeakerId, setCastConnectionErrorSpeakerId] = (0, m.useState)(null),
                        [castDevicesLoading, setCastDevicesLoading] = (0, m.useState)(!1),
                        [castDevicesLoaded, setCastDevicesLoaded] = (0, m.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, m.useState)(null),
                        [castEnabled, setCastEnabled] = (0, m.useState)(pulseSyncIsYandexStationCastEnabled()),
                        castRootRef = (0, m.useRef)(null),
                        castCloseTimerRef = (0, m.useRef)(null),
                        loadCastDevices = (0, m.useCallback)(async () => {
                            if (!castEnabled) {
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                                return;
                            }
                            try {
                                setCastDevicesLoading(!0);
                                const castState = await (window.musicDesktop?.pulsesync.station.getState?.() ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(castState, {
                                    setActiveSpeakerId: setCastActiveSpeakerId,
                                    setDeviceRows: setCastDeviceRows,
                                    setDevicesLoaded: setCastDevicesLoaded,
                                    setDevicesLoading: setCastDevicesLoading,
                                });
                            } catch (castError) {
                                console.warn('Failed to load Yandex Station cast devices', castError);
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                            }
                        }, [castEnabled]),
                        closeCastPopover = (0, m.useCallback)(() => {
                            setCastPopoverOpen(!1);
                            clearTimeout(castCloseTimerRef.current);
                            castCloseTimerRef.current = setTimeout(() => {
                                setCastPopoverMounted(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        recalcCastPopoverShift = (0, m.useCallback)(() => {
                            setCastPopoverShift(pulseSyncGetCastPopoverShift(castRootRef.current));
                        }, []),
                        openCastPopover = (0, m.useCallback)(() => {
                            clearTimeout(castCloseTimerRef.current);
                            setCastPopoverMounted(!0);
                            requestAnimationFrame(() => {
                                recalcCastPopoverShift();
                                setCastPopoverOpen(!0);
                            });
                        }, [recalcCastPopoverShift]),
                        toggleCastPopover = (0, m.useCallback)(() => {
                            castPopoverOpen ? closeCastPopover() : openCastPopover();
                        }, [castPopoverOpen, closeCastPopover, openCastPopover]);
                    (0, m.useEffect)(() => {
                        void loadCastDevices();
                    }, [loadCastDevices]);
                    (0, m.useEffect)(() => {
                        const castStateHandler = (castState) => {
                            pulseSyncApplyYandexStationState(castState, {
                                setActiveSpeakerId: setCastActiveSpeakerId,
                                setDeviceRows: setCastDeviceRows,
                                setDevicesLoaded: setCastDevicesLoaded,
                                setDevicesLoading: setCastDevicesLoading,
                            });
                        };
                        const unsubscribeCastState = window.musicDesktop?.pulsesync.station.onState?.(castStateHandler);
                        return () => {
                            'function' == typeof unsubscribeCastState && unsubscribeCastState();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const castChangeHandler = (event) => {
                            setCastActiveSpeakerId(event.detail?.activeSpeakerId ?? null);
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const castSettingHandler = (event) => {
                            const nextCastEnabled = event.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setCastEnabled(nextCastEnabled);
                            nextCastEnabled
                                ? (setCastDevicesLoaded(!1), void loadCastDevices())
                                : (closeCastPopover(), setCastDeviceRows([]), setCastActiveSpeakerId(null), setCastDevicesLoaded(!1), setCastDevicesLoading(!1));
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        };
                    }, [closeCastPopover, loadCastDevices]);
                    (0, m.useEffect)(() => () => clearTimeout(castCloseTimerRef.current), []);
                    (0, m.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const outsidePointerHandler = (event) => {
                            castRootRef.current?.contains?.(event.target) || closeCastPopover();
                        };
                        document.addEventListener('pointerdown', outsidePointerHandler, !0);
                        return () => {
                            document.removeEventListener('pointerdown', outsidePointerHandler, !0);
                        };
                    }, [castPopoverMounted, closeCastPopover]);
                    (0, m.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const resizeCastHandler = () => recalcCastPopoverShift();
                        recalcCastPopoverShift();
                        window.addEventListener('resize', resizeCastHandler);
                        return () => {
                            window.removeEventListener('resize', resizeCastHandler);
                        };
                    }, [castPopoverMounted, recalcCastPopoverShift]);
                    return castDisabled || !castEnabled
                        ? null
                        : (0, c.jsxs)('div', {
                              ref: castRootRef,
                              style: {
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                              },
                              children: [
                                  (0, c.jsx)(C.$, {
                                      className: castButtonClassName,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': castFormatMessage({
                                          id: 'player-actions.cast',
                                      }),
                                      icon: castActiveSpeakerId
                                          ? pulseSyncRenderCastDeviceIcon(
                                                pulseSyncGetActiveCastDeviceRow(castDeviceRows, castActiveSpeakerId),
                                                'PulseSync_castPlayerButtonIcon',
                                            )
                                          : (0, c.jsx)(Y.I, {
                                                variant: 'cast',
                                                size: 'xs',
                                            }),
                                      onClick: toggleCastPopover,
                                      style: castActiveSpeakerId
                                          ? {
                                                color: 'var(--ym-controls-color-primary-text-hovered)',
                                            }
                                          : void 0,
                                  }),
                                  castPopoverMounted &&
                                      (0, c.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: castPopoverOpen ? 1 : 0,
                                              transform: 'translateX('.concat(castPopoverShift, 'px) ').concat(castPopoverOpen ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: castPopoverOpen ? 'auto' : 'none',
                                          },
                                          children: !castDevicesLoaded
                                              ? (0, c.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, c.jsxs)('div', {
                                                    className: 'PulseSync_castPopoverContent',
                                                    children: [
                                                        (0, c.jsx)(
                                                            'div',
                                                            {
                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                    castDevicesLoading ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                ),
                                                                children: 'Обновляем список устройств...',
                                                            },
                                                            'cast-refreshing',
                                                        ),
                                                        castDeviceRows.length
                                                            ? castDeviceRows.map((castRow) => {
                                                                  const isUnavailable = !castRow.isThisDevice && !castRow.canUseLocal,
                                                                      castRoomName = castRow.isThisDevice
                                                                          ? void 0
                                                                          : (castRow.accountSpeaker?.roomName ?? castRow.accountSpeaker?.householdName),
                                                                      castSpeakerId = castRow.accountSpeaker?.id,
                                                                      isConnecting =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectingSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      hasConnectionError =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectionErrorSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      isDisabled = isUnavailable || !!castConnectingSpeakerId,
                                                                      isConnected =
                                                                          (castRow.isThisDevice && !castActiveSpeakerId) ||
                                                                          (!castRow.isThisDevice && castActiveSpeakerId === castSpeakerId),
                                                                      castStatusText = castRow.isThisDevice
                                                                          ? castActiveSpeakerId
                                                                              ? 'Отключить колонку'
                                                                              : 'Сейчас выбрано'
                                                                          : isConnecting
                                                                            ? 'Подключение...'
                                                                            : hasConnectionError
                                                                              ? 'Ошибка подключения'
                                                                              : castActiveSpeakerId === castSpeakerId
                                                                                ? 'Подключено'
                                                                                : castRow.canUseLocal
                                                                                  ? 'В сети'
                                                                                  : 'Вне локальной сети',
                                                                      castRowKey = castRow.isThisDevice
                                                                          ? 'pulse-sync-this-device'
                                                                          : (castRow.accountSpeaker?.id ??
                                                                            castRow.accountSpeaker?.name ??
                                                                            castRow.localSpeaker?.deviceId);
                                                                  return (0, c.jsxs)(
                                                                      'button',
                                                                      {
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === castRowKey)
                                                                                  ? ' PulseSync_castPopoverItem_active'
                                                                                  : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (castRow.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.musicDesktop?.pulsesync.station.clearSpeaker?.();
                                                                                        setCastActiveSpeakerId(null);
                                                                                        setCastConnectingSpeakerId(null);
                                                                                        setCastConnectionErrorSpeakerId(null);
                                                                                        closeCastPopover();
                                                                                        return;
                                                                                    }
                                                                                    const targetSpeakerId = castRow.accountSpeaker?.id;
                                                                                    if (!targetSpeakerId) return;
                                                                                    setCastConnectingSpeakerId(targetSpeakerId);
                                                                                    setCastConnectionErrorSpeakerId(null);
                                                                                    try {
                                                                                        const selectResult = await pulseSyncSelectYandexStationSpeaker(targetSpeakerId);
                                                                                        selectResult?.ok
                                                                                            ? (setCastActiveSpeakerId(targetSpeakerId),
                                                                                              setCastConnectionErrorSpeakerId(null),
                                                                                              closeCastPopover())
                                                                                            : (setCastConnectionErrorSpeakerId(targetSpeakerId),
                                                                                              console.warn('Failed to select Yandex Station cast device', selectResult));
                                                                                    } catch (selectError) {
                                                                                        setCastConnectionErrorSpeakerId(targetSpeakerId);
                                                                                        console.warn('Failed to select Yandex Station cast device', selectError);
                                                                                    } finally {
                                                                                        setCastConnectingSpeakerId(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(castRowKey),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(castRow),
                                                                              (0, c.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, c.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, c.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: castRow.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (castRow.accountSpeaker?.name ??
                                                                                                        castRow.accountSpeaker?.id ??
                                                                                                        'Yandex Station'),
                                                                                              }),
                                                                                              castRoomName &&
                                                                                                  (0, c.jsx)('span', {
                                                                                                      className:
                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, c.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: castRoomName,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, c.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: castStatusText,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected &&
                                                                                  (0, c.jsx)('span', {
                                                                                      children: '✓',
                                                                                  }),
                                                                          ],
                                                                      },
                                                                      castRowKey,
                                                                  );
                                                              })
                                                            : (0, c.jsx)('div', {
                                                                  className: 'PulseSync_castPopoverStatus',
                                                                  children: 'Устройства не найдены',
                                                              }),
                                                    ],
                                                }),
                                      }),
                              ],
                          });
                });
            const pulseSyncWaveButton = C, pulseSyncWaveIcon = Y;
            function usePulseSyncWaveSetting(key, defaultValue) {
                const [value, setValue] = (0, m.useState)(() => {
                    try {
                        return (
                            (key === 'modSettings.vibeAnimationEnhancement.improvedWaveLayout' ? window.IMPROVED_WAVE_LAYOUT?.() : undefined) ??
                            window.nativeSettings?.get?.(key) ??
                            defaultValue
                        );
                    } catch {
                        return defaultValue;
                    }
                });
                (0, m.useEffect)(() => {
                    const unsubscribe = window.musicDesktop?.pulsesync.settings.onChange?.((settingKey, settingValue) => {
                        if (settingKey === key) setValue(defaultValue ? settingValue !== false : !!settingValue);
                    });
                    return () => {
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [key, defaultValue]);
                return value;
            }
            // for PulseSync: END Yandex Station device picker and live wave-setting subscription
            let io = (0, u.PA)(() => {
                    var e, t;
                    // for PulseSync: BEGIN access experiments for the yellow wave play button preference
                    let { vibe: i, sonataState: n, advert: a, freePlayerAccess: r, freeAccess: s, experiments: pulseSyncExperiments } = (0, U.g)(),
                    // for PulseSync: END access experiments for the yellow wave play button preference
                        { openIntroModalFromPlay: o } = (0, to.e)(),
                        { formatMessage: l } = (0, b.A)(),
                        u = (0, ts.e)(),
                        _ = (0, e3.P)(),
                        v = (0, ti.b)(),
                        p = (0, te.r)(),
                        h = (0, tt.m)(),
                        // for PulseSync: BEGIN repeat and shuffle hooks plus the improved wave-layout preference
                        { pageId: x } = (0, L.$)(),
                        shuffleSetter = (0, tN.e)(),
                        repeatSetter = (0, tk.A)(),
                        pulseSyncImprovedWaveLayoutEnabled = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.improvedWaveLayout', true);
                        // for PulseSync: END repeat and shuffle hooks plus the improved wave-layout preference
                    (0, ii.e)();
                    let { togglePlay: y } = (0, F.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: x,
                            blockIdForFrom: ''.concat(e5.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => r.showRestrictionModal(e7.W.Interrupted),
                        }),
                        j = n.entityMeta,
                        // for PulseSync: BEGIN wave shuffle and repeat actions with player telemetry
                        pulseSyncShuffleClick = (0, f.c)((event) => {
                            event.stopPropagation();
                            shuffleSetter(n);
                            h({ actionType: e5.ActionType.ChangeShuffle });
                        }),
                        pulseSyncRepeatClick = (0, f.c)((event) => {
                            event.stopPropagation();
                            repeatSetter(n);
                            h({ actionType: e5.ActionType.ChangeRepeatSettings });
                        }),
                        // for PulseSync: END wave shuffle and repeat actions with player telemetry
                        k = (0, f.c)((e) => {
                            (e.stopPropagation(), null == u || u.moveForward(), h({ actionType: e5.ActionType.Skip }));
                        }),
                        N = (0, f.c)((e) => {
                            (e.stopPropagation(), null == u || u.moveBackward(), h({ actionType: e5.ActionType.Backskip }));
                        }),
                        T = (0, f.c)(() => {
                            if (a.isAdvertShown) {
                                var e;
                                null == p || null == (e = p.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!o())
                                if (j) (null == u || u.togglePause(), h({ actionType: n.isPlaying ? e5.ActionType.Pause : e5.ActionType.Play }));
                                else {
                                    if (s.isVibeStartRestricted) return void r.showRestrictionModal(e7.W.Interrupted);
                                    (y(), v(!n.isPlaying));
                                }
                        }),
                        P = (0, f.c)(() => {
                            _() || T();
                        }),
                        I = (0, f.c)((e) => {
                            e || r.hideRestrictionModal();
                        }),
                        // for PulseSync: BEGIN read the yellow wave play button experiment override
                        pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(z.z.WebNextPlayerBarYellowButton, 'on'),
                        // for PulseSync: END read the yellow wave play button experiment override
                        S = (0, m.useCallback)(
                            () =>
                                (0, c.jsx)(tm.D, {
                                    // for PulseSync: BEGIN apply the yellow wave play button class
                                    className: (0, d.$)(is().playButton, {
                                        [is().playButton_playing]: n.isPlaying,
                                        [is().playButton_withYellowPlayButton]: pulseSyncYellowButtonEnabled,
                                    }),
                                    // for PulseSync: END apply the yellow wave play button class
                                    isPlaying: n.isPlaying,
                                    iconClassName: is().playButtonIcon,
                                    color: 'secondary',
                                    onClick: P,
                                }),
                            // for PulseSync: BEGIN refresh the wave play button when its color preference changes
                            [P, n.isPlaying, pulseSyncYellowButtonEnabled],
                            // for PulseSync: END refresh the wave play button when its color preference changes
                        ),
                        E = (0, A.L)(() => {
                            let e = j ? 'fullTracks' : 'vibe';
                            return r.shownRestrictionModal === ia.h.PlayerAuthorization
                                ? (0, c.jsx)(tu.Z, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: I, renderChildren: S })
                                : r.shownRestrictionModal === ia.h.PlayerSubscription
                                  ? (0, c.jsx)(tl.S, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: I, renderChildren: S })
                                  : S();
                        });
                    return (0, c.jsxs)('div', {
                        className: is().root,
                        children: [
                            // for PulseSync: BEGIN shuffle button in the improved wave layout
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !n.isGenerativeContext &&
                                (n.canShuffle || n.canChangeRepeatMode) &&
                                (0, c.jsx)(C.$, {
                                    className: is().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canShuffle,
                                    'aria-hidden': !n.canShuffle,
                                    withRipple: false,
                                    'aria-label': l({ id: 'player-actions.shuffle' }),
                                    icon: (0, c.jsx)(Y.I, { variant: 'shuffle', size: 'xs' }),
                                    onClick: pulseSyncShuffleClick,
                                    style: n.shuffle ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : undefined,
                                }),
                            // for PulseSync: END shuffle button in the improved wave layout
                            !n.isGenerativeContext &&
                                (0, c.jsx)(C.$, {
                                    className: is().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.previous-track' }),
                                    icon: (0, c.jsx)(Y.I, { variant: 'previous', size: 'xs' }),
                                    onClick: N,
                                    'data-test-id': g.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            E,
                            !n.isGenerativeContext &&
                                (0, c.jsx)(C.$, {
                                    className: is().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.next-track' }),
                                    icon: (0, c.jsx)(Y.I, { variant: 'next', size: 'xs' }),
                                    onClick: k,
                                    'data-test-id': g.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            // for PulseSync: BEGIN repeat button in the improved wave layout
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !n.isGenerativeContext &&
                                (n.canShuffle || n.canChangeRepeatMode) &&
                                (0, c.jsx)(C.$, {
                                    className: is().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canChangeRepeatMode,
                                    'aria-hidden': !n.canChangeRepeatMode,
                                    withRipple: false,
                                    'aria-label': (0, tj.z)(n.repeatMode, l),
                                    icon: (0, c.jsx)(Y.I, { variant: n.repeatMode === tA.pM.ONE ? 'repeat_one' : 'repeat', size: 'xs' }),
                                    onClick: pulseSyncRepeatClick,
                                    style: n.repeatMode !== tA.pM.NONE ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : undefined,
                                }),
                            // for PulseSync: END repeat button in the improved wave layout
                        ],
                    });
                }),
                il = (0, u.PA)((e) => {
                    var t, i;
                    const [, refreshCastControl] = (0, m.useReducer)((revision) => revision + 1, 0);
                    (0, m.useEffect)(() => {
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', refreshCastControl);
                        return () => window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', refreshCastControl);
                    }, [refreshCastControl]);
                    let { albumCoverClassName: n, className: a, presentation: r } = e,
                        {
                            vibe: s,
                            sonataState: o,
                            advert: l,
                            fullscreenPlayer: u,
                            settings: { isMobile: _ },
                            freePlayerAccess: v,
                            freeAccess: p,
                            user: h,
                        } = (0, U.g)(),
                        { openIntroModalFromPlay: x } = (0, to.e)(),
                        { formatMessage: y } = (0, b.A)(),
                        C = (0, tr.z)(),
                        j = (0, e6.d)(),
                        { isLiked: k, handleLike: N, isDisliked: T, handleDislike: P } = (0, t_.f)(),
                        I = (0, ts.e)(),
                        // for PulseSync: BEGIN read the improved wave-layout preference
                        pulseSyncImprovedWaveLayoutEnabled = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.improvedWaveLayout', true),
                        // for PulseSync: END read the improved wave-layout preference
                        S = (0, e3.P)(),
                        E = (0, ti.b)(),
                        w = (0, te.r)(),
                        B = (0, tt.m)(),
                        { pageId: O } = (0, L.$)(),
                        { togglePlay: M } = (0, F.B)({
                            seeds: null != (i = null == (t = s.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: O,
                            blockIdForFrom: ''.concat(e5.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => v.showRestrictionModal(e7.W.Interrupted),
                        }),
                        R = o.entityMeta,
                        V = null == R ? void 0 : R.mainAlbum,
                        { playButtonVariant: D, shouldKeepMobileSpacingOnPause: W } = r,
                        z = 'inline' !== D,
                        H = !o.isPlaying && !R,
                        K = (0, f.c)(() => {
                            if (o.entityMeta) {
                                if (u.modal.isOpened) return void u.modal.close();
                                u.modal.open();
                            }
                        });
                    // for PulseSync: BEGIN open and restore fallback synchronized lyrics from wave controls
                    const screenNavigation = (0, tp.N)(),
                        pulseSyncWaveSyncLyricsAvailable =
                            !!(null == R ? void 0 : R.isSyncLyricsAvailable) ||
                            !!(null == R ? void 0 : R.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == R ? void 0 : R.hasSyncLyrics) ||
                            (!!(null == R ? void 0 : R.id) &&
                                'function' == typeof (null == u.syncLyrics ? void 0 : u.syncLyrics.hasLyricsForTrack) &&
                                u.syncLyrics.hasLyricsForTrack(R.id)),
                        pulseSyncOpenWaveSyncLyrics = (0, f.c)(() => {
                            (u.showSyncLyrics(),
                                screenNavigation({
                                    to: e5.AppScreen.PlayerScreen,
                                }));
                        }),
                        pulseSyncWaveSyncLyricsLabel = ''
                            .concat(
                                y({
                                    id: 'interface-actions.open-sync-lyrics',
                                }),
                                ' ',
                            )
                            .concat(
                                y({
                                    id: 'warning-messages.can-break-accessibility',
                                }),
                            );
                    (0, m.useEffect)(() => {
                        const trackId = null == R ? void 0 : R.id;
                        const nativeAvailable =
                            (null == R ? void 0 : R.isSyncLyricsAvailable) ||
                            (null == R ? void 0 : R.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == R ? void 0 : R.hasSyncLyrics);
                        let lrclibEnabled = !0;
                        try {
                            lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                        } catch (_error) {}
                        if (
                            trackId &&
                            !(null == R ? void 0 : R.isNonMusic) &&
                            u.syncLyrics.currentTrackId !== trackId &&
                            (nativeAvailable || lrclibEnabled || R.trackSource === 'UGC')
                        ) {
                            u.syncLyrics.getData(trackId);
                        }
                        u.syncLyrics.prefetchNextTrack(I);
                    }, [
                        null == R ? void 0 : R.id,
                        null == R ? void 0 : R.isSyncLyricsAvailable,
                        null == R ? void 0 : R.isSyncLyricsAvailableWithOfflineFeature,
                        null == R ? void 0 : R.hasSyncLyrics,
                        null == R ? void 0 : R.isNonMusic,
                        null == R ? void 0 : R.trackSource,
                        u.syncLyrics.currentTrackId,
                        u.syncLyrics,
                        I,
                    ]);
                    (0, m.useEffect)(() => {
                        const trackId = null == R ? void 0 : R.id;
                        if (!trackId || String(u.syncLyrics.currentTrackId) !== String(trackId) || u.syncLyrics.isLoadingForTrack(trackId)) return;
                        if (u.syncLyrics.isRejected || u.syncLyrics.hasInvalidLyrics) {
                            u.autoHideSyncLyrics(trackId);
                            return;
                        }
                        if (trackId && u.syncLyrics.hasLyricsForTrack(trackId)) u.restoreSyncLyricsForTrack(trackId);
                    }, [
                        null == R ? void 0 : R.id,
                        u.syncLyrics.currentTrackId,
                        u.syncLyrics.lines,
                        u.syncLyrics.isLoading,
                        u.syncLyrics.isRejected,
                        u.syncLyrics.hasInvalidLyrics,
                        u.syncLyrics.isResolved,
                        u.syncLyrics,
                        u.autoHideSyncLyrics,
                        u.restoreSyncLyricsForTrack,
                    ]);
                    // for PulseSync: END open and restore fallback synchronized lyrics from wave controls
                    (0, m.useEffect)(() => {
                        if (!o.isGenerativeContext)
                            return (
                                null == C || C.addShortcutsListener(ta.M.MAIN, tn.l.TOGGLE_FULLSCREEN_PLAYER, K),
                                null == C || C.addShortcutsListener(ta.M.MAIN, tn.l.LIKE, N),
                                null == C || C.addShortcutsListener(ta.M.MAIN, tn.l.DISLIKE, P),
                                () => {
                                    (null == C || C.removeShortcutsListener(ta.M.MAIN, tn.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == C || C.removeShortcutsListener(ta.M.MAIN, tn.l.LIKE),
                                        null == C || C.removeShortcutsListener(ta.M.MAIN, tn.l.DISLIKE));
                                }
                            );
                    }, [P, N, C, o.isGenerativeContext, o.entityMeta, K]);
                    let X = (0, f.c)(async (e, t) => {
                            (t && (0, el.P)(t, tU().ripple), await j(o, e));
                        }),
                        pulseSyncMigration_W_24 = (0, f.c)((e) => {
                            ((0, el.P)(e, tU().ripple), P());
                        }),
                        q = (0, f.c)((e) => {
                            (e && !_ && (0, el.P)(e, tU().ripple), N());
                        }),
                        G = (0, f.c)(() => {
                            if (l.isAdvertShown) {
                                var e;
                                null == w || null == (e = w.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!x())
                                if (R) (null == I || I.togglePause(), B({ actionType: o.isPlaying ? e5.ActionType.Pause : e5.ActionType.Play }));
                                else {
                                    if (p.isVibeStartRestricted) return;
                                    (M(), E(!o.isPlaying));
                                }
                        }),
                        $ = (0, f.c)((e) => {
                            ('cover' !== D && (0, el.P)(e, tU().ripple), S() || G());
                        });
                    (0, m.useEffect)(
                        () => (
                            null == C || C.addShortcutsListener(ta.M.MAIN, tn.l.TOGGLE_PLAY, G),
                            () => {
                                null == C || C.removeShortcutsListener(ta.M.MAIN, tn.l.TOGGLE_PLAY);
                            }
                        ),
                        [G, C],
                    );
                    let Z = (0, m.useCallback)(
                            () =>
                                (0, c.jsx)(tm.D, {
                                    className: (0, d.$)({
                                        [tU().button]: 'cover' !== D,
                                        [tU().button_play]: 'cover' !== D && !o.isPlaying,
                                        [tU().button_standalone]: 'standalone' === D,
                                        [tU().playButton]: 'cover' === D,
                                    }),
                                    isPlaying: o.isPlaying,
                                    iconSize: !z && W ? 'xs' : void 0,
                                    iconClassName: (0, d.$)({ [tU().standalonePlayButtonIcon]: z, [tU().playButtonIcon]: 'cover' === D }),
                                    color: 'secondary',
                                    onClick: $,
                                }),
                            [$, o.isPlaying, D, z, W],
                        ),
                        J = (0, A.L)(() => {
                            let e = !R && !h.hasPlus && p.isFreePlaybackDisabled;
                            return e
                                ? h.isAuthorized
                                    ? (0, c.jsx)(tl.S, { isEnabled: p.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: Z })
                                    : (0, c.jsx)(tu.Z, { isEnabled: e, placement: 'top', textVariant: 'vibe', renderChildren: Z })
                                : Z();
                        }),
                        Q = (0, A.L)(() =>
                            _
                                ? null
                                : (0, c.jsx)(e9.r, {
                                      className: tU().changeVolume,
                                      buttonClassName: tU().button,
                                      verticalSliderClassName: tU().verticalSlider,
                                      variant: e4.q.VERTICAL,
                                      sonataVolume: o.volume,
                                      onVolumeClick: X,
                                  }),
                        );
                    return (0, c.jsxs)('section', {
                        role: 'region',
                        'aria-label': y({ id: 'a11y-regions.player' }),
                        className: (0, d.$)(tU().root, a),
                        'data-test-id': g.e8.player.VIBE_PLAYERBAR,
                        children: [
                            (0, c.jsx)(ty, { album: V, className: n, playButton: z ? J : void 0 }),
                            (0, c.jsxs)('div', {
                                // for PulseSync: BEGIN apply the custom wave grid only when layout improvements are enabled
                                className: (0, d.$)(tU().progress, {
                                    [tU().progress_visible]: !H,
                                    PulseSync_waveProgress_improved: pulseSyncImprovedWaveLayoutEnabled,
                                }),
                                // for PulseSync: END apply the custom wave grid only when layout improvements are enabled
                                children: [
                                    // for PulseSync: BEGIN left control group and fullscreen button beside centered wave progress
                                    (0, c.jsxs)('div', {
                                        className: 'PulseSync_waveSideControls PulseSync_waveSideControls_left',
                                        children: [
                                            pulseSyncImprovedWaveLayoutEnabled &&
                                                (0, c.jsx)(pulseSyncWaveButton.$, {
                                                    className: tU().button,
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    variant: 'text',
                                                    disabled: !R || o.isGenerativeContext || l.isAdvertShown,
                                                    withRipple: false,
                                                    'aria-label': y({
                                                        id: 'player-actions.fullscreen-button',
                                                    }),
                                                    icon: (0, c.jsx)(pulseSyncWaveIcon.I, {
                                                        variant: 'fullscreen',
                                                        size: 'xs',
                                                    }),
                                                    onClick: K,
                                                }),
                                            Q,
                                            _ && !z && J,
                                            !_ && (0, c.jsx)(tc._, { className: tU().button, disabled: !R || l.isAdvertShown, isDisliked: T, onClick: pulseSyncMigration_W_24, iconSize: 'xs' }),
                                        ],
                                    }),
                                    // for PulseSync: END left control group and fullscreen button beside centered wave progress
                                    r.shouldShowTrackInfo && (0, c.jsx)(it, { shouldShowArtists: r.shouldShowArtists, shouldShowArtistsWithTrackTitle: r.shouldShowArtistsWithTrackTitle, shouldKeepMobileSpacingOnPause: W }),
                                    // for PulseSync: BEGIN right control group beside centered wave progress
                                    (0, c.jsxs)('div', {
                                        className: 'PulseSync_waveSideControls PulseSync_waveSideControls_right',
                                        children: [
                                            r.shouldShowTrackInfo && (0, c.jsx)(td.c, {
                                                className: (0, d.$)(tU().button, {
                                                    [tU().likeButton_mobilePaused]: 'cover' === D,
                                                }),
                                                disabled: !R || l.isAdvertShown,
                                                isLiked: k,
                                                onClick: q,
                                                iconSize: 'xs',
                                            }),
                                            // for PulseSync: BEGIN Yandex Station cast and synchronized lyrics buttons in wave controls
                                            (0, c.jsx)(pulseSyncWaveCastControl, {
                                                buttonClassName: tU().button,
                                                disabled: l.isAdvertShown,
                                            }),
                                            pulseSyncImprovedWaveLayoutEnabled &&
                                                !pulseSyncIsYandexStationCastEnabled() &&
                                                !(null == R ? void 0 : R.isNonMusic) &&
                                                !l.isAdvertShown &&
                                                (0, c.jsx)(pulseSyncWaveButton.$, {
                                                    className: tU().button,
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    variant: 'text',
                                                    disabled: !pulseSyncWaveSyncLyricsAvailable || o.isGenerativeContext,
                                                    'aria-hidden': !pulseSyncWaveSyncLyricsAvailable,
                                                    withRipple: !1,
                                                    'aria-label': pulseSyncWaveSyncLyricsLabel,
                                                    icon: (0, c.jsx)(pulseSyncWaveIcon.I, {
                                                        variant: 'syncLyrics',
                                                        size: 'xs',
                                                    }),
                                                    onClick: pulseSyncOpenWaveSyncLyrics,
                                                }),
                                            // for PulseSync: END Yandex Station cast and synchronized lyrics buttons in wave controls
                                            !_ &&
                                                // for PulseSync: BEGIN place the wave context menu in the right control group
                                                (0, c.jsx)(tX, {
                                                    buttonClassName: (0, d.$)(tU().button, tU().important),
                                                    'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                                                }),
                                                // for PulseSync: END place the wave context menu in the right control group
                                        ],
                                    }),
                                    // for PulseSync: END right control group beside centered wave progress
                                    (0, c.jsx)(tb.e, {}),
                                ],
                            }),
                            !_ && (0, c.jsx)(io, {}),
                        ],
                    });
                }),
                ic = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                id = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                iu = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                im = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                };
            var i_ = i(98017),
                ib = i.n(i_);
            let iv = (0, u.PA)((e) => {
                var t;
                let { artist: i, withLink: n, onClick: a, featCoverUri: r } = e,
                    { formatMessage: s } = (0, b.A)(),
                    o = (0, tp.N)(),
                    l = null != r ? r : null == (t = i.cutoutCover) ? void 0 : t.uri,
                    d = s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    u = (0, f.c)(() => {
                        o({ to: e5.AppScreen.ArtistScreen });
                    }),
                    m = (0, c.jsx)(j._V, {
                        className: ib().cover,
                        fit: 'contain',
                        src: l,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: d,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return n
                    ? (0, c.jsx)(th.N, { className: ib().root, href: i.url, onClick: u, 'aria-hidden': !0, 'data-test-id': g.e8.vibe.VIBE_ARTIST_COVER, children: m })
                    : (0, c.jsx)('div', { className: ib().root, onClick: a, 'aria-hidden': !0, 'data-test-id': g.e8.vibe.VIBE_ARTIST_COVER, children: m });
            });
            var ip = i(98148),
                ih = i(21416),
                ig = i(56475),
                ix = i(31792),
                iy = i(89718),
                iA = i(29595),
                iC = i(74965),
                ij = i(4370),
                ik = i(66943),
                iN = i(59378),
                iT = i(91494),
                iP = i.n(iT);
            let iI = (0, u.PA)((e) => {
                var t;
                let { wave: i, context: n, className: a, renderContextButton: r } = e,
                    {
                        collection: { vibeRooms: s },
                        settings: { isMobile: o },
                        user: l,
                    } = (0, U.g)(),
                    { formatMessage: d } = (0, b.A)(),
                    { notify: u } = (0, iC.l)(),
                    m = (0, ez.Z)(ij.Z.collectionVibeRooms.href),
                    { state: _, toggleTrue: p, toggleFalse: h } = (0, eo.e)(!1),
                    x = s.items.find((e) => {
                        var t;
                        return (null == e || null == (t = e.wave) ? void 0 : t.pinId) === i.pinId;
                    }),
                    y = s.loadingState === H.G.PENDING,
                    { editVibeRoom: C, isPending: j } = (0, ig.h)(x),
                    k = (0, f.c)(() => {
                        x && s.deleteRoomFromItems(x.id);
                    }),
                    { handlePinClick: N, handleExitClick: P, isExitPending: I } = (0, ix.O)({ room: x, onRoomSuccessExit: k }),
                    S = (0, f.c)(async (e) => {
                        e &&
                            l.isAuthorized &&
                            !j &&
                            !I &&
                            (await s.getData(),
                            s.isRejected && u((0, c.jsx)(ik.h, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: iA.u.ERROR }));
                    }),
                    E = (0, f.c)(async (e) => {
                        j || (await C(e), h());
                    }),
                    w = (0, A.L)(() =>
                        _ && x && !o
                            ? (0, c.jsx)(iN.A, {
                                  text: x.name,
                                  className: iP().renameInput,
                                  onChangeFinish: E,
                                  readOnly: j,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: d({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': d({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': g.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    B = (0, A.L)(() =>
                        y
                            ? (0, c.jsx)('div', {
                                  className: iP().loader,
                                  'data-test-id': g.Kq.multivibe.MULTIVIBE_CONTEXT_MENU_LOADER,
                                  children: (0, c.jsx)(ih.y, { size: 'xs' }),
                              })
                            : x
                              ? (0, c.jsx)(iy.J, { room: x, className: a, onRenameClick: p, onPinClick: N, onExitClick: P, isExitPending: I, isRenamePending: j })
                              : null,
                    ),
                    O = (0, c.jsxs)(c.Fragment, {
                        children: [
                            B,
                            x && !y && (0, c.jsx)(ip.c, { className: iP().divider }),
                            (0, c.jsx)(tC.Dr, {
                                className: a,
                                icon: (0, c.jsx)(Y.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: m,
                                'data-test-id': g.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, c.jsxs)('span', {
                                    className: iP().collection,
                                    children: [
                                        (0, c.jsx)(v.A, { id: 'interface-actions.show-all' }),
                                        (0, c.jsx)(T.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: iP().description,
                                            children: (0, c.jsx)(v.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                return r({ context: null != (t = null == x ? void 0 : x.name) ? t : n, contextControl: w, onOpenChange: S, children: O });
            });
            var iS = i(58495),
                iE = i(20584),
                iw = i(18593),
                iB = i(76794),
                iO = i(51724),
                iM = i(15461),
                iR = i.n(iM),
                iL = i(53845),
                iV = i.n(iL);
            let iD = (0, u.PA)((e) => {
                let { context: t, isResetAvailable: i, isHidden: n, onReset: a, children: r, contextControl: s, onOpenChange: o, className: l } = e,
                    {
                        vibe: u,
                        sonataState: _,
                        settings: { isMobile: v },
                        experiments: p,
                    } = (0, U.g)(),
                    { formatMessage: h } = (0, b.A)(),
                    x = (0, tr.z)(),
                    [j, k] = (0, m.useState)(!1),
                    [N, P] = (0, y.d)(),
                    I = !!t && !n,
                    S = j && I && !s && !!r,
                    E = S || !!s,
                    w = u.isMyVibe && _.isVibeContext,
                    B = p.checkExperiment(z.z.WebNextNewWaveTabFeedbackForm, 'on');
                ((0, t1.mf)(s ? null : N, im),
                    (0, m.useEffect)(() => {
                        I || k(!1);
                    }, [I]),
                    (0, m.useEffect)(() => {
                        if (E) return (null == x || x.disable(), () => (null == x ? void 0 : x.enable()));
                    }, [E, x]));
                let O = (0, f.c)(() => {
                        (k(!1), a());
                    }),
                    M = (0, f.c)((e) => {
                        (k(e), null == o || o(e));
                    }),
                    R = (0, A.L)(() =>
                        t
                            ? r
                                ? (0, c.jsx)(tC.W1, {
                                      label: (0, c.jsxs)('span', {
                                          className: iV().label,
                                          children: [
                                              (0, c.jsx)(T.HL, { variant: 'span', className: iR().context, lineClamp: 2, children: t }),
                                              (0, c.jsx)(Y.I, {
                                                  variant: 'arrowDown',
                                                  size: 'xxs',
                                                  className: (0, d.$)(iV().arrow, { [iV().arrow_open]: S }),
                                                  'aria-hidden': !0,
                                              }),
                                          ],
                                      }),
                                      className: iV().trigger,
                                      wrapperClassName: (0, d.$)(iV().triggerContainer, { [iV().triggerContainer_hidden]: !!s }),
                                      menuClassName: (0, d.$)(iV().menu, { [iV().menu_touch]: v }),
                                      radius: 'xxxl',
                                      icon: null,
                                      open: S,
                                      onOpenChange: M,
                                      isMobile: !1,
                                      returnFocus: !s,
                                      offsetOptions: 4,
                                      ariaLabel: ''.concat(t, ': ').concat(h({ id: 'interface-actions.context-menu' })),
                                      tabIndex: n ? -1 : void 0,
                                      containerDataTestId: g.e8.vibe.VIBE_PAGE_CONTEXT_MENU,
                                      'data-test-id': g.e8.vibe.VIBE_PAGE_CONTEXT_MENU_BUTTON,
                                      children: !s && r,
                                  })
                                : (0, c.jsx)('div', {
                                      className: w ? iR().container : iV().staticContext,
                                      children: (0, c.jsx)(T.HL, {
                                          variant: 'span',
                                          className: iR().context,
                                          lineClamp: 2,
                                          'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                          children: t,
                                      }),
                                  })
                            : null,
                    );
                return (0, c.jsxs)('div', {
                    ref: P,
                    className: (0, d.$)(iR().root, iV().root, l, { [iR().root_visible]: I, [iR().root_withFeedbackForm]: B }),
                    'aria-hidden': !I,
                    inert: !I,
                    'data-test-id': g.e8.vibe.VIBE_PAGE_CONTEXT_BLOCK,
                    children: [
                        t && s && (0, c.jsx)('div', { className: (0, d.$)(iV().staticContext, iR().context), children: s }),
                        R,
                        t &&
                            i &&
                            (0, c.jsx)(C.$, {
                                className: (0, d.$)(iR().button, iV().resetButton),
                                radius: 'round',
                                onClick: O,
                                'aria-label': h({ id: 'interface-actions.reset-context' }, { context: t }),
                                tabIndex: n ? -1 : void 0,
                                'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                children: (0, c.jsx)(Y.I, { variant: 'close', size: 'xs', 'aria-hidden': !0, 'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON }),
                            }),
                    ],
                });
            });
            var iW = i(35412),
                iF = i(39499),
                iU = i(65523),
                iz = i(57448),
                iH = i(72131),
                iK = i(202),
                iX = i(59304),
                iY = i(74025),
                iq = i.n(iY);
            let iG = (e) => {
                    let { closeToast: t } = e;
                    return (0, c.jsx)(iX.$, {
                        closeToast: t,
                        cover: (0, c.jsx)(Y.I, { className: iq().icon, size: 'xs', variant: 'chain' }),
                        coverRadius: 's',
                        message: (0, c.jsx)(T.HL, {
                            className: iq().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, c.jsx)(v.A, { id: 'shared-vibe.link-successfully-copied', values: { b: (e) => (0, c.jsx)('b', { children: e }) } }),
                        }),
                    });
                },
                i$ = (0, u.PA)((e) => {
                    let { vibe: t, className: i, iconClassName: n } = e,
                        { shareVibe: a } = ((e) => {
                            let { vibe: t } = e,
                                { user: i, paywall: n, slam: a } = (0, U.g)(),
                                { waveResource: r } = (0, iz.f)(),
                                { notify: s } = (0, iC.l)(),
                                { formatMessage: o } = (0, b.A)(),
                                l = (0, iU.U)(),
                                d = (0, W.N)().get(D.V4),
                                u = (0, iH._)(d.webHost),
                                _ = (0, m.useRef)(!1),
                                v = (0, f.c)((e) => {
                                    (e && l.error(new iF.t('Failed to share a vibe', { cause: e })),
                                        s((0, c.jsx)(ik.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: iA.u.ERROR }));
                                }),
                                { startClipboardWrite: p } = (0, iK.$)({
                                    format: (e) => (0, iW.no)('/myvibe/:shareId', { params: { shareId: e }, options: { host: 'https://'.concat(u) } }).href,
                                    onSuccess: () => {
                                        s((0, c.jsx)(iG, {}), { containerId: iA.u.INFO });
                                    },
                                    onError: v,
                                });
                            return {
                                shareVibe: (0, f.c)(async () => {
                                    let e;
                                    if (!_.current) {
                                        if (!i.isAuthorized)
                                            return void s((0, c.jsx)(ik.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), {
                                                containerId: iA.u.ERROR,
                                            });
                                        if (!i.hasPlus) return void n.openModal();
                                        if (a.networkStatus.isOffline || a.isOfflineModeEnabled) return void v();
                                        _.current = !0;
                                        try {
                                            e = p();
                                            let { shareId: i } = await r.createShare({ seeds: [...t.seeds] });
                                            await e.copy(i);
                                        } catch (t) {
                                            (null == e || e.cancel(), v(t));
                                        } finally {
                                            _.current = !1;
                                        }
                                    }
                                }),
                            };
                        })({ vibe: t });
                    return t.isShareEnabled
                        ? (0, c.jsx)(tC.Dr, {
                              className: i,
                              icon: (0, c.jsx)(Y.I, { className: n, variant: 'share', size: 'xxs' }),
                              onClick: a,
                              'data-test-id': g.S7.CONTEXT_MENU_SHARE_BUTTON,
                              children: (0, c.jsx)(v.A, { id: 'interface-actions.share' }),
                          })
                        : null;
                });
            var iZ = i(79390),
                iJ = i(25555),
                iQ = i(87762),
                i0 = i(93091),
                i1 = i(27817),
                i2 = i(44988),
                i5 = i(88943),
                i8 = i(8413),
                i4 = i(96295),
                i9 = i(25883);
            let i6 = (0, u.PA)((e) => {
                let { album: t, className: i, iconClassName: n, likeActiveClassName: a, shareMenuClassName: r, artistName: s, artistId: o } = e,
                    {
                        user: l,
                        library: u,
                        pinsCollection: m,
                        paywall: _,
                        settings: { isMobile: b },
                        albumCPA: { isPlusCPAEnabled: v },
                    } = (0, U.g)(),
                    { pageAlbumId: p } = (0, iQ.T)(),
                    h = (0, i8.a)(t.type),
                    { shareLink: g, pathname: x } = (0, tw.b)('/album/:albumId', { params: { albumId: t.id } }),
                    y = v({ pageAlbumId: p, albumId: t.id, isNonMusic: h }),
                    C = u.isAlbumLiked(t.id),
                    j = (0, iJ.I)({
                        action: async () => (await u.toggleAlbumLike({ entityId: t.id, userId: l.account.data.uid })) === iZ.f.OK,
                        notification: (0, c.jsx)(i4.T, { album: { ...t, url: x, isLiked: !C } }),
                    }),
                    k = (0, f.c)(() => (y ? void _.openModal() : j())),
                    N = (0, i5.i)(t.id),
                    T = m.isPinned(N),
                    P = (0, iJ.I)({
                        action: async () => !!(await m.toggleAlbumPin({ id: t.id }, N)),
                        notification: (0, c.jsx)(i9.l, { album: { ...t, url: x, isPinned: !T } }),
                    }),
                    I = (0, A.L)(() =>
                        h
                            ? (0, c.jsx)(i2.U, { className: (0, d.$)(i, C && a), iconClassName: n, onClick: k, isLiked: C, albumType: t.type })
                            : (0, c.jsx)(i0.T, { className: (0, d.$)(i, C && a), iconClassName: n, onClick: k, isLiked: C, disabled: !y && !l.isAuthorized }),
                    );
                return (0, c.jsxs)(c.Fragment, {
                    children: [
                        !b && (0, c.jsx)(i1.L, { className: i, iconClassName: n, onClick: P, isPinned: T }),
                        I,
                        (0, c.jsx)(tM.H, {
                            withNotification: !b,
                            withSubmenu: !b,
                            className: i,
                            iconClassName: n,
                            shareLink: g,
                            menuClassName: r,
                            entityMeta: { variant: tS.Y.ALBUM, albumArtistName: s, albumArtistId: o, id: t.id, title: t.title, path: x },
                        }),
                    ],
                });
            });
            var i7 = i(64546),
                i3 = i(6215),
                ne = i(54243),
                nt = i(64247);
            let ni = (0, u.PA)((e) => {
                let { artist: t, className: i, iconClassName: n, likeActiveClassName: a } = e,
                    {
                        user: r,
                        library: s,
                        pinsCollection: o,
                        settings: { isMobile: l },
                    } = (0, U.g)(),
                    { shareLink: u, pathname: m } = (0, tw.b)('/artist/:artistId', { params: { artistId: t.id } }),
                    _ = s.isArtistLiked(t.id),
                    b = (0, iJ.I)({
                        action: async () => (await s.toggleArtistLike({ entityId: t.id, userId: r.account.data.uid })) === iZ.f.OK,
                        notification: (0, c.jsx)(ne.T, { artist: { ...t, url: m, isLiked: !_ } }),
                    }),
                    v = (0, i3.E)(t.id),
                    p = o.isPinned(v),
                    h = (0, iJ.I)({
                        action: async () => !!(await o.toggleArtistPin({ id: t.id }, v)),
                        notification: (0, c.jsx)(nt.l, { artist: { ...t, url: m, isPinned: !p } }),
                    });
                return (0, c.jsxs)(c.Fragment, {
                    children: [
                        !l && (0, c.jsx)(i7.WithOffline, { fallback: (0, c.jsx)(i1.L, { className: i, iconClassName: n, onClick: h, isPinned: p }) }),
                        (0, c.jsx)(i7.WithOffline, {
                            fallback: (0, c.jsx)(i0.T, {
                                className: (0, d.$)(i, _ && a),
                                iconClassName: n,
                                onClick: b,
                                isLiked: _,
                                disabled: !r.isAuthorized || !t.isAvailable,
                            }),
                        }),
                        (0, c.jsx)(tM.H, {
                            withNotification: !l,
                            className: i,
                            iconClassName: n,
                            shareLink: u,
                            entityMeta: { variant: tS.Y.ARTIST, id: t.id, title: t.name, path: m },
                            withSubmenu: !1,
                        }),
                    ],
                });
            });
            var nn = i(60385),
                na = i(554),
                nr = i(18243),
                ns = i(99007),
                no = i(30832),
                nl = i(6322);
            let nc = (0, u.PA)((e) => {
                var t;
                let { playlist: i, className: n, iconClassName: a, likeActiveClassName: r, shareMenuClassName: s, ownerName: o, ownerLogin: l } = e,
                    {
                        user: u,
                        library: m,
                        pinsCollection: _,
                        settings: { isMobile: b },
                    } = (0, U.g)(),
                    v = i.uuid ? '/playlists/:playlistUuid' : '/users/:userId/playlists/:kind',
                    p = { playlistUuid: null != (t = i.uuid) ? t : '', userId: i.uid, kind: i.kind },
                    { shareLink: h, pathname: g } = (0, tw.b)(v, { params: p }),
                    { href: x } = (0, eY.u)(v, { params: p }),
                    f = i.kind === ns.j.LIKE,
                    y = u.isAuthorized && i.uid === u.account.data.uid,
                    A = (i.visibility === nn.L.PUBLIC || f) && i.isAvailable,
                    C = m.isPlaylistLiked((0, na.m)(i)),
                    j = (0, iJ.I)({
                        action: async () =>
                            (await m.togglePlaylistLike({ entityId: (0, na.m)(i), userId: u.account.data.uid, ownerId: i.uid, kindId: i.kind })) === iZ.f.OK,
                        notification: (0, c.jsx)(no.T, { playlist: { ...i, url: x, isLiked: !C } }),
                    }),
                    k = (0, nr.f)(i),
                    N = _.isPinned(k),
                    T = (0, iJ.I)({
                        action: async () => !!(await _.togglePlaylistPin({ uid: i.uid, kind: i.kind }, k)),
                        notification: (0, c.jsx)(nl.l, { playlist: { ...i, url: x, isPinned: !N } }),
                    });
                return (0, c.jsxs)(c.Fragment, {
                    children: [
                        !b && (0, c.jsx)(i1.L, { className: n, iconClassName: a, onClick: T, isPinned: N }),
                        !y && !f && (0, c.jsx)(i0.T, { className: (0, d.$)(n, C && r), iconClassName: a, onClick: j, isLiked: C, disabled: !u.isAuthorized }),
                        (0, c.jsx)(tM.H, {
                            withNotification: !b,
                            withSubmenu: !b,
                            className: n,
                            iconClassName: a,
                            shareLink: h,
                            menuClassName: s,
                            disabled: !A,
                            entityMeta: { variant: tS.Y.PLAYLIST, playlistOwnerName: o, playlistOwnerLogin: l, id: i.kind, title: i.title, path: g },
                        }),
                    ],
                });
            });
            var nd = i(65654);
            let nu = (0, u.PA)((e) => {
                var t;
                let { track: i, className: n, iconClassName: a, likeActiveClassName: r, shareMenuClassName: s, artistName: o, artistId: l } = e,
                    {
                        user: u,
                        library: m,
                        settings: { isMobile: _ },
                    } = (0, U.g)(),
                    b = i.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: v, pathname: p } = (0, tw.b)(b, { params: { albumId: null != (t = i.albumId) ? t : '', trackId: i.id } }),
                    h = m.isTrackLiked(i.id),
                    g = (0, iJ.I)({
                        action: async () => (await m.toggleTrackLike({ entityId: i.id, userId: u.account.data.uid, albumId: i.albumId })) === iZ.f.OK,
                        notification: (0, c.jsx)(nd.T, { track: { ...i, isLiked: !h } }),
                    });
                return (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(i7.WithOffline, {
                            fallback: (0, c.jsx)(i0.T, { className: (0, d.$)(n, h && r), iconClassName: a, onClick: g, isLiked: h, disabled: !u.isAuthorized }),
                        }),
                        i.isNonUserGenerated &&
                            (0, c.jsx)(tM.H, {
                                withNotification: !_,
                                withSubmenu: !_,
                                className: n,
                                iconClassName: a,
                                shareLink: v,
                                menuClassName: s,
                                entityMeta: { variant: tS.Y.TRACK, trackArtistName: o, trackArtistId: l, id: i.id, title: i.title, path: p, trackAlbumId: i.albumId },
                            }),
                    ],
                });
            });
            var nm = i(1401);
            let n_ = (0, u.PA)((e) => {
                    let { vibe: t, className: i, iconClassName: n, likeActiveClassName: a } = e,
                        {
                            user: r,
                            settings: { isMobile: s },
                        } = (0, U.g)(),
                        o = (0, eh.A)(t),
                        l = (0, iJ.I)({ action: async () => (await t.toggleLike()) === iZ.f.OK, notification: (0, c.jsx)(nm.T, { vibe: { isLiked: !t.isLiked } }) });
                    return (0, c.jsxs)(c.Fragment, {
                        children: [
                            !s && (0, c.jsx)(i1.L, { className: i, iconClassName: n, onClick: o, isPinned: t.isPinned }),
                            (0, c.jsx)(i0.T, { className: (0, d.$)(i, t.isLiked && a), iconClassName: n, onClick: l, isLiked: t.isLiked, disabled: !r.isAuthorized }),
                        ],
                    });
                }),
                nb = (e) => {
                    let { target: t, vibe: i } = e;
                    if (i)
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(n_, { vibe: i, className: iV().menuItem, likeActiveClassName: iV().menuItem_active, iconClassName: iV().menuItemIcon }),
                                (0, c.jsx)(i$, { vibe: i, className: iV().menuItem, iconClassName: iV().menuItemIcon }),
                            ],
                        });
                    switch (t.type) {
                        case iw.K.Album:
                            return (0, c.jsx)(i6, {
                                className: iV().menuItem,
                                likeActiveClassName: iV().menuItem_active,
                                iconClassName: iV().menuItemIcon,
                                shareMenuClassName: iV().shareMenu,
                                album: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                        case iw.K.Artist:
                            return (0, c.jsx)(ni, {
                                className: iV().menuItem,
                                likeActiveClassName: iV().menuItem_active,
                                iconClassName: iV().menuItemIcon,
                                artist: t.data,
                            });
                        case iw.K.Playlist:
                            return (0, c.jsx)(nc, {
                                className: iV().menuItem,
                                likeActiveClassName: iV().menuItem_active,
                                iconClassName: iV().menuItemIcon,
                                shareMenuClassName: iV().shareMenu,
                                playlist: t.data,
                                ownerName: t.data.ownerName,
                                ownerLogin: t.data.ownerLogin,
                            });
                        case iw.K.Various:
                            return (0, c.jsx)(nu, {
                                className: iV().menuItem,
                                likeActiveClassName: iV().menuItem_active,
                                iconClassName: iV().menuItemIcon,
                                shareMenuClassName: iV().shareMenu,
                                track: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                    }
                },
                nv = (0, u.PA)((e) => {
                    var t, i, n, a, r;
                    let { onClick: s, ...o } = e,
                        l = (0, ts.e)(),
                        {
                            vibe: d,
                            sonataState: { contextType: u, contextId: _, entityMeta: b, isVibeContext: v },
                        } = (0, U.g)(),
                        p = (0, iS.D)(u, _),
                        h = ((e, t) => {
                            var i, n, a, r, s, o, l, c, d, u, m, _, b, v, p, h, g, x, f, y, A, C;
                            switch (null != t ? t : null == e ? void 0 : e.sourceContextType) {
                                case iE.h.SEARCH:
                                case iE.h.MUSIC_HISTORY:
                                case iE.h.MUSIC_HISTORY_SEARCH:
                                case iE.h.DOWNLOADED_TRACKS:
                                case iE.h.USER_TRACKS:
                                case iE.h.ARTIST_FAMILIAR_FROM_WAVE:
                                case iE.h.ARTIST_MY_COLLECTION:
                                    return;
                            }
                            switch (null == e ? void 0 : e.type) {
                                case iw.K.Album: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: Number(t.id),
                                            title: null != (r = t.title) ? r : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            artistName: null == (n = t.artists) || null == (i = n[0]) ? void 0 : i.name,
                                            artistId: (null == (a = t.artists) ? void 0 : a[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iw.K.Artist: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            name: null == (s = t.artist) ? void 0 : s.name,
                                            coverUri: null == (l = t.artist) || null == (o = l.cover) ? void 0 : o.uri,
                                            isAvailable: !t.artist || (0, iO.f)(t.artist).available,
                                        },
                                    };
                                }
                                case iw.K.Various: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            albumId: null == (d = t.albums) || null == (c = d[0]) ? void 0 : c.id,
                                            title: null != (b = t.title) ? b : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            isNonUserGenerated: t.trackSource !== iB.J.UGC && t.trackSource !== iB.J.OWN_REPLACED_TO_UGC,
                                            artistName: null == (m = t.artists) || null == (u = m[0]) ? void 0 : u.name,
                                            artistId: (null == (_ = t.artists) ? void 0 : _[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iw.K.Playlist: {
                                    let { meta: t } = e,
                                        [i, n] = String(t.id).split(':'),
                                        a = null != (f = t.uid) ? f : Number(i),
                                        r = null != (y = t.kind) ? y : Number(n);
                                    if (!Number.isFinite(a) || !Number.isFinite(r)) return;
                                    return {
                                        type: e.type,
                                        data: {
                                            uid: a,
                                            kind: r,
                                            uuid: null != (A = t.playlistUuid) ? A : t.uuid,
                                            title: t.title,
                                            coverUri: (null == (v = t.cover) ? void 0 : v.uri) || (null == (h = t.cover) || null == (p = h.itemsUri) ? void 0 : p[0]),
                                            visibility: t.visibility,
                                            isAvailable: null == (C = t.available) || C,
                                            ownerName: null == (g = t.owner) ? void 0 : g.name,
                                            ownerLogin: null == (x = t.owner) ? void 0 : x.login,
                                        },
                                    };
                                }
                                default:
                                    return;
                            }
                        })(
                            u ? (null == l || null == (t = l.state.currentContext.value) ? void 0 : t.data) : void 0,
                            b
                                ? null == l || null == (n = l.state.queueState.currentEntity.value) || null == (i = n.sourceContext)
                                    ? void 0
                                    : i.data.sourceContextType
                                : void 0,
                        ),
                        g = (0, m.useCallback)((e) => (0, c.jsx)(iD, { ...o, ...e, onReset: s }), [s, o]);
                    return v && (null == (a = d.meta) ? void 0 : a.stationType) === eu.q7
                        ? (0, c.jsx)(iI, { wave: d.meta, context: o.context, className: iV().menuItem, renderContextButton: g }, p)
                        : v && (null == (r = d.meta) ? void 0 : r.isLikeEnabled)
                          ? (0, m.createElement)(iD, { ...o, key: p, onReset: s }, (0, c.jsx)(nb, { vibe: d.meta }))
                          : (0, m.createElement)(iD, { ...o, key: p, onReset: s }, h && (0, c.jsx)(nb, { target: h }));
                }),
                np = (e) => {
                    var t;
                    return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
                };
            var nh = i(76533),
                ng = i.n(nh);
            let nx = (e) => {
                    let { textOptions: t, children: i } = e,
                        { setContainerRef: n, lineClamp: a } = ((e) => {
                            let [t, i] = (0, y.d)(),
                                [n, a] = (0, m.useState)(() => np(e));
                            return (
                                (0, m.useEffect)(() => {
                                    a(np(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                (0, t1.mf)(t, e, a),
                                { setContainerRef: i, lineClamp: n }
                            );
                        })(t);
                    return (0, c.jsx)('div', {
                        ref: n,
                        className: ng().root,
                        'data-test-id': g.e8.vibe.VIBE_DYNAMIC_ARTISTS,
                        children: (0, m.cloneElement)(i, { lineClamp: a }),
                    });
                },
                nf = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                ny = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                nA = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                nC = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                nj = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                nk = {
                    src: '/_next/static/media/q2v-glow-w320.6a3648a7.png',
                    height: 256,
                    width: 800,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXAVtzfRsj2TcbFTtj+W8itbuvtQMWsa+uxWOTYQ83r0pUkAAAACnRSTlM6OjG2DjOtobi1kYtftgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGVgYGBkZGJhYOdgZuZkY2NigIkAAAPUAEdB7RkuAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                nN = {
                    src: '/_next/static/media/q2v-glow-w360.fc3c68a3.png',
                    height: 256,
                    width: 880,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXkQ8uxYOfFUtv/UsWsg/ZbnY/NAAAABXRSTlNxcHMfH3sDujAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicBcEBAQAAAIIgs/5vDlgiUBYVegD3ABpDksaVAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                nT = {
                    src: '/_next/static/media/q2v-glow-w400.265dfc0a.png',
                    height: 256,
                    width: 960,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXjQ8u+VOCtZ+v3UsOsf/DSwDGDAAAABXRSTlNsbWoiImB3+hEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAATSURBVHicY2BhYmRkYGBgZoAxAADtABejooRHAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                nP = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t }),
                nI = (0, u.PA)((e) => {
                    var t;
                    let { context: i, isResetAvailable: n, isHidden: a, onClick: r, className: s } = e,
                        { vibe: o, sonataState: l, experiments: u } = (0, U.g)(),
                        { formatMessage: _ } = (0, b.A)(),
                        [v, p] = (0, y.d)(),
                        [h, x] = (0, y.d)(),
                        [j, k] = (0, m.useState)(null);
                    (0, t1.mf)(v, im);
                    let N = (0, ti.b)(),
                        P = _({ id: 'interface-actions.reset-context' }, { context: i }),
                        I = (0, f.c)(() => {
                            (r(), N(!0));
                        }),
                        S = u.checkExperiment(z.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        E = !!(null == (t = o.meta) ? void 0 : t.isQ2V) && l.isVibeContext;
                    (0, m.useLayoutEffect)(() => {
                        if (!E || !n || null === h) return void k(null);
                        let e = () => {
                            let { width: e } = h.getBoundingClientRect();
                            e > 0 && k(e);
                        };
                        e();
                        let t = new ResizeObserver(e);
                        return (
                            t.observe(h),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [h, i, E, n]);
                    let w = (0, A.L)(() => {
                            if (j)
                                return ((e) =>
                                    e < 120
                                        ? nP(nf, '200 / 128')
                                        : e < 160
                                          ? nP(ny, '240 / 128')
                                          : e < 200
                                            ? nP(nA, '280 / 128')
                                            : e < 240
                                              ? nP(nC, '320 / 128')
                                              : e < 280
                                                ? nP(nj, '360 / 128')
                                                : e < 320
                                                  ? nP(nk, '400 / 128')
                                                  : e < 360
                                                    ? nP(nN, '440 / 128')
                                                    : nP(nT, '480 / 128'))(j);
                        }),
                        B = (0, A.L)(() =>
                            i
                                ? n
                                    ? (0, c.jsxs)(C.$, {
                                          ref: x,
                                          className: (0, d.$)(iR().button, { [iR().button_q2v]: E }),
                                          radius: 'xxxl',
                                          withHover: !0,
                                          withRipple: !E,
                                          onClick: I,
                                          'aria-label': P,
                                          'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                          children: [
                                              (0, c.jsx)(T.HL, {
                                                  variant: 'span',
                                                  className: (0, d.$)(iR().context, { [iR().context_q2v]: E }),
                                                  lineClamp: 2,
                                                  children: i,
                                              }),
                                              (0, c.jsx)(Y.I, {
                                                  variant: 'close_filled',
                                                  size: 'xs',
                                                  className: iR().icon,
                                                  'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)('div', {
                                          className: iR().container,
                                          children: (0, c.jsx)(T.HL, {
                                              variant: 'span',
                                              className: iR().context,
                                              lineClamp: 2,
                                              'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                              children: i,
                                          }),
                                      })
                                : null,
                        );
                    return (0, c.jsx)('div', {
                        className: (0, d.$)(iR().root, s, { [iR().root_visible]: !a, [iR().root_q2v]: E && null !== j, [iR().root_withFeedbackForm]: S }),
                        style: w,
                        ref: p,
                        'aria-hidden': !!a,
                        inert: !!a,
                        children: B,
                    });
                }),
                nS = E.default.default(() =>
                    Promise.all([i.e(8150), i.e(8872), i.e(1625), i.e(6236)])
                        .then(i.bind(i, 49226))
                        .then((e) => ({ default: e.Wheel })),
                );
            var nE = i(11372),
                nw = i(6900),
                nB = i(59064),
                nO = i.n(nB);
            let nM = (0, u.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, U.g)(),
                    { formatMessage: i } = (0, b.A)(),
                    n = (0, f.c)(() => {
                        (e.introModal.close(), e.modal.open());
                    });
                return (0, c.jsxs)(nE.a, {
                    className: (0, d.$)((0, nw.J)(eH.S.Dark), nO().root, { [nO().root_mobile]: t }),
                    headerClassName: nO().header,
                    contentClassName: nO().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    restoreFocus: !1,
                    labelClose: i({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    children: [
                        (0, c.jsx)(j._V, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: nO().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, c.jsxs)('div', {
                            className: nO().text,
                            children: [
                                (0, c.jsx)(T.DZ, { variant: 'h2', size: 'xl', className: nO().title, children: i({ id: 'wizard.title' }) }),
                                (0, c.jsx)(T.HL, { variant: 'span', size: 'm', className: nO().description, children: i({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, c.jsx)(C.$, { className: nO().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: n, children: i({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var nR = i(87819),
                nL = i(49176),
                nV = i(77948),
                nD = (function (e) {
                    return ((e.SleepingAlice = 'sleeping_alice'), (e.SleepTech = 'sleep_tech'), e);
                })({}),
                nW = i(7123);
            let nF = (e) => {
                    let { queueState: t, direction: i, batchSize: n } = e,
                        { trackIds: a, currentIndex: r } = t,
                        s = [],
                        o = 0,
                        l = 0;
                    'forward' === i ? ((o = r + 1), (l = Math.min(a.length - 1, o + n - 1))) : (o = Math.max(0, (l = r - 1) - n + 1));
                    for (let e = o; e <= l; e++) {
                        let t = a[e];
                        t && s.push(t);
                    }
                    return s;
                },
                nU = (e) => {
                    let { queueState: t, backwardSize: i, forwardSize: n } = e,
                        a = Math.max(0, t.currentIndex - i),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + n),
                        s = [];
                    for (let e = a; e <= r; e++) {
                        let i = t.trackIds[e];
                        i && s.push(i);
                    }
                    return s;
                },
                nz = (e) => {
                    let { queueState: t, direction: i, isRequested: n } = e,
                        a = 'forward' === i ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + a; e >= 0 && e < t.trackIds.length; e += a) {
                        let i = t.trackIds[e];
                        if (i && n(i)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var nH = i(9519),
                nK = i(93609),
                nX = i(74567);
            let nY = 'viewedCards',
                nq = 'viewedBigCards';
            class nG extends nX.F {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([nY], 'readwrite').objectStore(nY);
                        return Promise.all(e.map((e) => i.put({ uid: this.uid, cardId: e }))).then(() => i.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedCardsOverLimit() : Promise.resolve()))
                        .catch(nK.A);
                }
                async addViewedBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([nq], 'readwrite').objectStore(nq);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => ({ uid: this.uid, cardId: e.cardId, bigCardId: t }))).map((e) => i.put(e))).then(() =>
                            i.index('uid').count(this.uid),
                        );
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedBigCardsOverLimit() : Promise.resolve()))
                        .catch(nK.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(nY, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async getViewedBigCards() {
                    return this.executeTransaction(
                        (e) =>
                            e.getAllFromIndex(nq, 'uid', this.uid).then((e) => {
                                let t = new Map();
                                return (
                                    e.forEach((e) => {
                                        var i;
                                        let n = null != (i = t.get(e.cardId)) ? i : [];
                                        (n.push(e.bigCardId), t.set(e.cardId, n));
                                    }),
                                    Array.from(t.entries()).map((e) => {
                                        let [t, i] = e;
                                        return { cardId: t, bigCardIds: i };
                                    })
                                );
                            }),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([nY], 'readwrite').objectStore(nY);
                        return Promise.all(e.map((e) => i.delete([this.uid, e]))).then(nK.A);
                    }).catch(nK.A);
                }
                async clearSentBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([nq], 'readwrite').objectStore(nq);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => [this.uid, e.cardId, t])).map((e) => i.delete(e))).then(nK.A);
                    }).catch(nK.A);
                }
                async evictViewedCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([nY], 'readwrite').objectStore(nY).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                n = 0,
                                a = (e) =>
                                    !e || n >= i
                                        ? Promise.resolve()
                                        : (n++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(a));
                            return t.openCursor(this.uid).then(a);
                        });
                    }).catch(nK.A);
                }
                async evictViewedBigCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([nq], 'readwrite').objectStore(nq).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                n = 0,
                                a = (e) =>
                                    !e || n >= i
                                        ? Promise.resolve()
                                        : (n++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(a));
                            return t.openCursor(this.uid).then(a);
                        });
                    }).catch(nK.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_words',
                        dbVersion: 2,
                        onUpgrade: (e) => {
                            (e.objectStoreNames.contains(nY) || e.createObjectStore(nY, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 }),
                                e.objectStoreNames.contains(nq) ||
                                    e.createObjectStore(nq, { keyPath: ['uid', 'cardId', 'bigCardId'] }).createIndex('uid', 'uid', { unique: !1 }));
                        },
                    }),
                        (0, nH._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var n$ = i(38003),
                nZ = i(81438),
                nJ = i(48404);
            let nQ = (e) => {
                let { card: t, onClose: i } = e,
                    { notify: n } = (0, iC.l)(),
                    [a, r] = (0, m.useState)(null),
                    { formatMessage: s } = (0, b.A)(),
                    o = (0, f.c)((e) => {
                        (r(e), setTimeout(() => r(null), 3e3));
                    }),
                    l = (0, f.c)(async (e, a) => {
                        if (t && !t.isFeedbackPending)
                            try {
                                (await t.sendFeedback(e), i(), a && o(a));
                            } catch (e) {
                                n((0, c.jsx)(ik.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: iA.u.ERROR });
                            }
                    });
                return {
                    handleLike: (0, f.c)(async () => {
                        (null == t ? void 0 : t.isLiked) ? await l(nJ.a.NEUTRAL) : await l(nJ.a.LIKE, s({ id: 'words.like-feedback' }));
                    }),
                    handleDislike: (0, f.c)(async () => {
                        await l(nJ.a.DISLIKE, s({ id: 'words.dislike-feedback' }));
                    }),
                    feedbackMessage: a,
                };
            };
            var n0 = i(69850),
                n1 = i.n(n0);
            function n2() {
                return (n2 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let n5 = function (e) {
                return m.createElement(
                    'svg',
                    n2({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    n ||
                        (n = m.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function n8() {
                return (n8 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let n4 = function (e) {
                return m.createElement(
                    'svg',
                    n8({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    a ||
                        (a = m.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    r ||
                        (r = m.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function n9() {
                return (n9 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let n6 = function (e) {
                return m.createElement(
                    'svg',
                    n9({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    s || (s = m.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function n7() {
                return (n7 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let n3 = function (e) {
                    return m.createElement(
                        'svg',
                        n7({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        o ||
                            (o = m.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        l ||
                            (l = m.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                ae = (0, u.PA)((e) => {
                    let { className: t, dimmed: i, isFact: n } = e,
                        { experiments: a } = (0, U.g)(),
                        r = a.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        s = a.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on'),
                        o = r && i,
                        l = (0, A.L)(() =>
                            r
                                ? (0, c.jsx)(n5, { className: (0, d.$)(n1().icon, n1().icon_okniks) })
                                : s
                                  ? n && !i
                                      ? (0, c.jsx)(n4, { className: (0, d.$)(n1().icon, n1().icon_sparkles) })
                                      : (0, c.jsx)(n3, { className: (0, d.$)(n1().icon, n1().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(n1().root, { [n1().root_dimmed]: i }, t),
                        'aria-hidden': !0,
                        'data-test-id': g.Kq.words.WORDS_AI_BADGE,
                        children: [
                            (0, c.jsx)(j._V, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: n1().glow,
                            }),
                            l,
                            o &&
                                (0, c.jsxs)('div', {
                                    className: n1().sparkles,
                                    children: [
                                        (0, c.jsx)(n6, { className: n1().sparkle }),
                                        (0, c.jsx)(n6, { className: n1().sparkle }),
                                        (0, c.jsx)(n6, { className: n1().sparkle }),
                                        (0, c.jsx)(n6, { className: n1().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var at = i(24190),
                ai = i.n(at);
            let an = (e) => {
                let { children: t } = e;
                return (0, c.jsx)('div', {
                    className: ai().root,
                    children: (0, c.jsx)(T.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: ai().text, children: t }),
                });
            };
            var aa = i(67758),
                ar = i.n(aa),
                as = i(2345);
            let ao = (e) => {
                    let { url: t, title: i, prevTitle: n, className: a, analyticObjectId: r } = e,
                        s = (0, n$.D)(),
                        o = (0, tp.N)();
                    (0, m.useEffect)(() => {
                        n.current !== i && ((n.current = i), s(!0, ''));
                    }, [n, s, i]);
                    let l = (0, f.c)((e) => {
                        (e.stopPropagation(), o({ to: e5.AppScreen.Link, deepLink: t, objectId: r }));
                    });
                    return (0, c.jsx)(th.N, {
                        href: t,
                        className: a,
                        onClick: l,
                        onKeyDown: l,
                        'data-test-id': g.Kq.words.WORDS_CARD_ACTION,
                        children: (0, c.jsx)(T.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: i }),
                    });
                },
                al = (e) => {
                    let { actionType: t, onClick: i, children: n, ...a } = e,
                        r = (0, tt.m)(),
                        s = (0, f.c)((e) => {
                            (r({ actionType: t }), null == i || i(e));
                        });
                    return (0, c.jsx)(C.$, { onClick: s, ...a, children: n });
                },
                ac = (e) => {
                    let { url: t, className: i, children: n } = e,
                        a = (0, tp.N)(),
                        r = (0, f.c)(() => {
                            a({ to: e5.AppScreen.Link, deepLink: t });
                        });
                    return (0, c.jsx)(th.N, { href: t, className: i, onClick: r, 'data-test-id': g.Kq.words.WORDS_CARD_LINK, children: n });
                };
            var ad = i(25871),
                au = i.n(ad);
            let am = (e) => {
                let { className: t } = e;
                return (0, c.jsx)('div', {
                    className: (0, d.$)(au().root, t),
                    'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER,
                    children: (0, c.jsx)(T.HL, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: au().description,
                        'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT,
                        children: (0, c.jsx)(v.A, { id: 'words.ai-description' }),
                    }),
                });
            };
            var a_ = i(64310),
                ab = i(81933),
                av = i.n(ab);
            let ap = (e) => {
                    let { isActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: av().root,
                        'aria-busy': t,
                        'aria-live': t ? 'polite' : 'off',
                        children: [
                            (0, c.jsxs)('div', {
                                className: av().topGroup,
                                children: [
                                    (0, c.jsx)(a_.n, { isActive: t, className: av().line, textClassName: av().topLinePrimary }),
                                    (0, c.jsx)(a_.n, { isActive: t, className: av().line, textClassName: av().topLineSecondary }),
                                ],
                            }),
                            (0, c.jsx)(a_.n, { isActive: t, className: av().main, textClassName: av().mainLine }),
                            (0, c.jsx)(a_.n, { isActive: t, className: av().bottom, textClassName: av().bottomLine }),
                        ],
                    });
                },
                ah = (e) => {
                    let { text: t, forwardRef: i } = e,
                        n = (0, n$.D)();
                    return (
                        (0, m.useEffect)(() => {
                            n(!0, '');
                        }, []),
                        (0, c.jsx)(T.HL, { ref: i, variant: 'div', className: ar().message, 'data-test-id': g.Kq.words.WORDS_CARD_FULLSCREEN_MESSAGE, children: t })
                    );
                },
                ag = (0, m.forwardRef)((e, t) => (0, c.jsx)(ah, { forwardRef: t, ...e })),
                ax = (0, u.PA)((e) => {
                    var t, i;
                    let { card: n, feedbackMessage: a, onLike: r, onDislike: s, onClose: o, onScreenClosed: l } = e,
                        { words: u } = (0, U.g)(),
                        { formatMessage: _ } = (0, b.A)(),
                        p = (0, m.useRef)(null),
                        h = null != a ? a : null == (t = u.activeBigCard) ? void 0 : t.text,
                        x = null != (i = u.activeBigCardId) ? i : '',
                        y = (0, m.useRef)(null),
                        k = (0, m.useRef)(null),
                        [N, P] = (0, m.useState)(!1),
                        { pageEntityId: I } = (0, L.$)(),
                        S = (0, as.l)({ mainObjectType: e5.DomainObjectType.Fact }),
                        E = (0, A.L)(() => {
                            var e, t, i;
                            return (null == (t = u.activeBigCard) || null == (e = t.actions) ? void 0 : e.length)
                                ? u.activeBigCard.actions
                                : null != (i = null == n ? void 0 : n.actions)
                                  ? i
                                  : [];
                        });
                    (0, m.useEffect)(
                        () => (
                            u.bigCardFullscreen.isOpened && I && S(!0),
                            () => {
                                (S(!1), l());
                            }
                        ),
                        [l, I, S, u.bigCardFullscreen.isOpened],
                    );
                    let w = (0, f.c)(() => {
                            o();
                        }),
                        B = (0, f.c)((e) => {
                            e.stopPropagation();
                        }),
                        O = (0, f.c)(() => {
                            let e = y.current;
                            if (!e) return void P(!1);
                            P(e.scrollHeight > e.clientHeight);
                        }),
                        M = (0, f.c)((e) => {
                            var t;
                            if (((y.current = e), null == (t = k.current) || t.disconnect(), (k.current = null), !e)) return void P(!1);
                            O();
                            let i = new ResizeObserver(O);
                            (i.observe(e), (k.current = i));
                        }),
                        R = (0, A.L)(() =>
                            u.isShimmerVisible
                                ? (0, c.jsx)('div', { className: ar().content, onClick: B, children: (0, c.jsx)(ap, { isActive: u.isShimmerActive }) })
                                : (0, c.jsxs)('div', {
                                      className: ar().content,
                                      onClick: B,
                                      children: [
                                          (0, c.jsx)('div', {
                                              className: (0, d.$)(ar().messageScroll, { [ar().messageScroll_scrollable]: N }),
                                              children: (0, c.jsx)(nV.B, {
                                                  objectType: e5.DomainObjectType.BigFact,
                                                  objectId: x,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 1,
                                                  children: (0, c.jsx)(ag, { ref: M, text: h }),
                                              }),
                                          }),
                                          (0, c.jsxs)('div', {
                                              className: ar().actions,
                                              children: [
                                                  (null == n ? void 0 : n.action) &&
                                                      n.action.url &&
                                                      (0, c.jsx)(nV.B, {
                                                          objectType: e5.DomainObjectType.BigFact,
                                                          objectId: x,
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          objectsCount: 1,
                                                          children: (0, c.jsx)(ao, {
                                                              url: n.action.url,
                                                              title: n.action.title,
                                                              prevTitle: p,
                                                              className: ar().primaryAction,
                                                              analyticObjectId: x,
                                                          }),
                                                      }),
                                                  E.length > 0 &&
                                                      E.map((e, t) =>
                                                          (0, c.jsx)(
                                                              nV.B,
                                                              {
                                                                  objectType: e5.DomainObjectType.Link,
                                                                  objectId: x,
                                                                  objectPosX: t + 1,
                                                                  objectPosY: 1,
                                                                  objectsCount: E.length,
                                                                  children: (0, c.jsxs)(ac, {
                                                                      url: e.url,
                                                                      className: (0, d.$)(ar().sourceItem, { [ar().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                      children: [
                                                                          e.faviconUrl &&
                                                                              (0, c.jsx)(j._V, {
                                                                                  src: e.faviconUrl,
                                                                                  fit: 'cover',
                                                                                  'aria-hidden': !0,
                                                                                  className: ar().sourceIcon,
                                                                                  'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                              }),
                                                                          (0, c.jsx)(T.HL, {
                                                                              variant: 'span',
                                                                              type: 'text',
                                                                              size: 'l',
                                                                              weight: 'medium',
                                                                              lineClamp: 1,
                                                                              className: ar().actionText,
                                                                              'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                              children: e.title,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              },
                                                              e.url,
                                                          ),
                                                      ),
                                              ],
                                          }),
                                          n &&
                                              (0, c.jsx)(nV.B, {
                                                  objectType: e5.DomainObjectType.BigFact,
                                                  objectId: x,
                                                  objectsCount: 2,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  children: (0, c.jsxs)('div', {
                                                      className: ar().feedback,
                                                      children: [
                                                          (0, c.jsxs)(al, {
                                                              actionType: n.isLiked ? e5.ActionType.Unlike : e5.ActionType.Like,
                                                              variant: 'text',
                                                              withRipple: !1,
                                                              className: (0, d.$)(ar().feedbackButton, { [ar().feedbackButton_active]: n.isLiked }),
                                                              onClick: r,
                                                              'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                              children: [
                                                                  (0, c.jsx)(Y.I, {
                                                                      variant: 'thumbUp',
                                                                      size: 'xxs',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                  }),
                                                                  (0, c.jsx)(T.HL, {
                                                                      variant: 'span',
                                                                      type: 'text',
                                                                      size: 'l',
                                                                      weight: 'medium',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                                      children: (0, c.jsx)(v.A, { id: 'words.like' }),
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, c.jsx)('div', { className: ar().feedbackDivider }),
                                                          (0, c.jsxs)(al, {
                                                              actionType: e5.ActionType.Dislike,
                                                              variant: 'text',
                                                              withRipple: !1,
                                                              className: (0, d.$)(ar().feedbackButton, { [ar().feedbackButton_active]: n.isDisliked }),
                                                              onClick: s,
                                                              'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                              children: [
                                                                  (0, c.jsx)(Y.I, {
                                                                      variant: 'thumbDown',
                                                                      size: 'xxs',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                  }),
                                                                  (0, c.jsx)(T.HL, {
                                                                      variant: 'span',
                                                                      type: 'text',
                                                                      size: 'l',
                                                                      weight: 'medium',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                                      children: (0, c.jsx)(v.A, { id: 'words.dislike' }),
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                      ],
                                  }),
                        );
                    return (
                        (0, m.useEffect)(() => {
                            O();
                        }, [h, O]),
                        (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)('div', {
                                    className: ar().closeButtonWrapper,
                                    children: (0, c.jsx)(C.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'm',
                                        icon: (0, c.jsx)(Y.I, { variant: 'close', size: 'xs' }),
                                        onClick: o,
                                        'aria-label': _({ id: 'interface-actions.close' }),
                                        'data-test-id': g.Kq.words.WORDS_CARD_FULLSCREEN_CLOSE_BUTTON,
                                    }),
                                }),
                                (0, c.jsxs)('div', {
                                    className: ar().layout,
                                    children: [
                                        (0, c.jsx)('div', {
                                            className: (0, d.$)(ar().contentArea, { [ar().contentArea_withMessageScroll]: N }),
                                            onClick: w,
                                            children: R,
                                        }),
                                        (null == n ? void 0 : n.isFact) && (0, c.jsx)(am, { className: ar().disclaimer }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                af = (0, u.PA)((e) => {
                    let { card: t, feedbackMessage: i, onLike: n, onDislike: a, onClose: r, onScreenClosed: s } = e,
                        {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, U.g)(),
                        d = (0, f.c)((e) => {
                            (o.bigCardFullscreen.onOpenChange(e), e || r());
                        });
                    return (0, c.jsx)(nE.a, {
                        className: ar().root,
                        open: o.bigCardFullscreen.isOpened,
                        onOpenChange: d,
                        onClose: r,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        contentClassName: ar().modalContent,
                        'data-test-id': g.Kq.words.WORDS_CARD_FULLSCREEN_MODAL,
                        children: (0, c.jsx)(eV.F, {
                            blockId: e5.EntityTypes.WordsInWave,
                            blockType: e5.EntityTypes.WordsInWave,
                            blockPosX: 1,
                            blockPosY: 1,
                            mainObjectType: e5.DomainObjectType.Fact,
                            mainObjectId: null == t ? void 0 : t.id,
                            children: (0, c.jsx)(ax, { card: t, feedbackMessage: i, onLike: n, onDislike: a, onClose: r, onScreenClosed: s }),
                        }),
                    });
                });
            var ay = i(12799),
                aA = i.n(ay);
            let aC = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: n } = e,
                    a = (0, as.l)({ mainObjectType: e5.DomainObjectType.Fact });
                return (
                    (0, m.useEffect)(
                        () => (
                            a(!0),
                            () => {
                                a(!1);
                            }
                        ),
                        [a],
                    ),
                    (0, c.jsxs)('div', {
                        className: aA().root,
                        'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_DESKTOP,
                        children: [
                            t.actions &&
                                t.actions.length > 0 &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        t.actions.map((e, i) => {
                                            var n, a;
                                            return (0, c.jsx)(
                                                eV.F,
                                                {
                                                    blockId: e5.EntityTypes.WordsInWave,
                                                    blockType: e5.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    mainObjectType: e5.DomainObjectType.Fact,
                                                    mainObjectId: t.id,
                                                    children: (0, c.jsx)(nV.B, {
                                                        objectType: e5.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: i + 1,
                                                        objectPosY: 1,
                                                        objectsCount: null != (a = null == (n = t.actions) ? void 0 : n.length) ? a : 0,
                                                        children: (0, c.jsxs)(ac, {
                                                            url: e.url,
                                                            className: (0, d.$)(aA().item, aA().actionItem, aA().sourceItem, {
                                                                [aA().sourceItem_withoutIcon]: !e.faviconUrl,
                                                            }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, c.jsx)(j._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: aA().sourceIcon,
                                                                        'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, c.jsx)(T.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            );
                                        }),
                                        (0, c.jsx)('div', { className: aA().divider }),
                                    ],
                                }),
                            (0, c.jsxs)(eV.F, {
                                blockId: e5.EntityTypes.WordsInWave,
                                blockType: e5.EntityTypes.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectType: e5.DomainObjectType.Fact,
                                mainObjectId: t.id,
                                children: [
                                    (0, c.jsx)(nV.B, {
                                        objectType: e5.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, c.jsxs)(al, {
                                            actionType: t.isLiked ? e5.ActionType.Unlike : e5.ActionType.Like,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, d.$)(aA().item, aA().actionItem, { [aA().actionItem_active]: t.isLiked }),
                                            onClick: i,
                                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                            children: [
                                                (0, c.jsx)(Y.I, { variant: 'thumbUp', size: 'xs', 'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON }),
                                                (0, c.jsx)(T.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                    children: (0, c.jsx)(v.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, c.jsx)(nV.B, {
                                        objectType: e5.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, c.jsxs)(al, {
                                            actionType: e5.ActionType.Dislike,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, d.$)(aA().item, aA().actionItem, { [aA().actionItem_active]: t.isDisliked }),
                                            onClick: n,
                                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                            children: [
                                                (0, c.jsx)(Y.I, {
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                }),
                                                (0, c.jsx)(T.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                    children: (0, c.jsx)(v.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)('div', { className: aA().divider }), (0, c.jsx)(am, {})] }),
                        ],
                    })
                );
            });
            var aj = i(90437),
                ak = i.n(aj);
            let aN = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: n } = e,
                    { formatMessage: a } = (0, b.A)(),
                    r = (0, as.l)({ mainObjectType: e5.DomainObjectType.Fact }),
                    s = a({ id: 'words.like' }),
                    o = a({ id: 'words.dislike' });
                return (
                    (0, m.useEffect)(
                        () => (
                            r(!0),
                            () => {
                                r(!1);
                            }
                        ),
                        [r],
                    ),
                    (0, c.jsxs)('div', {
                        className: ak().root,
                        'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_MOBILE,
                        children: [
                            (0, c.jsxs)('div', {
                                className: ak().container,
                                children: [
                                    (0, c.jsx)(T.DZ, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: ak().text, children: t.text }),
                                    t.action &&
                                        t.action.url &&
                                        (0, c.jsx)(eV.F, {
                                            blockId: e5.EntityTypes.WordsInWave,
                                            blockType: e5.EntityTypes.WordsInWave,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            mainObjectType: e5.DomainObjectType.Fact,
                                            mainObjectId: t.id,
                                            children: (0, c.jsx)(nV.B, {
                                                objectType: e5.DomainObjectType.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, c.jsx)(ac, {
                                                    url: t.action.url,
                                                    className: ak().action,
                                                    children: (0, c.jsx)(T.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        children: t.action.title,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    t.actions &&
                                        t.actions.length > 0 &&
                                        (0, c.jsx)('div', {
                                            className: ak().sources,
                                            children: t.actions.map((e, i) => {
                                                var n, a;
                                                return (0, c.jsx)(
                                                    eV.F,
                                                    {
                                                        blockId: e5.EntityTypes.WordsInWave,
                                                        blockType: e5.EntityTypes.WordsInWave,
                                                        blockPosX: 1,
                                                        blockPosY: 2,
                                                        mainObjectType: e5.DomainObjectType.Fact,
                                                        mainObjectId: t.id,
                                                        children: (0, c.jsx)(nV.B, {
                                                            objectType: e5.DomainObjectType.Link,
                                                            objectId: e.url,
                                                            objectPosX: i + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null != (a = null == (n = t.actions) ? void 0 : n.length) ? a : 0,
                                                            children: (0, c.jsxs)(ac, {
                                                                url: e.url,
                                                                className: (0, d.$)(ak().sourceItem, { [ak().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                children: [
                                                                    e.faviconUrl &&
                                                                        (0, c.jsx)(j._V, {
                                                                            src: e.faviconUrl,
                                                                            fit: 'cover',
                                                                            'aria-hidden': !0,
                                                                            className: ak().sourceIcon,
                                                                            'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                        }),
                                                                    (0, c.jsx)(T.HL, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 'm',
                                                                        weight: 'medium',
                                                                        lineClamp: 1,
                                                                        'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                        children: e.title,
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    },
                                                    e.url,
                                                );
                                            }),
                                        }),
                                ],
                            }),
                            (0, c.jsxs)('div', {
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: ak().feedbackSection,
                                        children: [
                                            (0, c.jsx)(T.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                className: ak().feedbackQuestion,
                                                children: (0, c.jsx)(v.A, { id: 'words.show-more' }),
                                            }),
                                            (0, c.jsx)('div', {
                                                className: ak().feedbackButtons,
                                                children: (0, c.jsxs)(eV.F, {
                                                    blockId: e5.EntityTypes.WordsInWave,
                                                    blockType: e5.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 3,
                                                    mainObjectType: e5.DomainObjectType.Fact,
                                                    mainObjectId: t.id,
                                                    children: [
                                                        (0, c.jsx)(nV.B, {
                                                            objectType: e5.DomainObjectType.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, c.jsx)(al, {
                                                                actionType: t.isLiked ? e5.ActionType.Unlike : e5.ActionType.Like,
                                                                variant: 'text',
                                                                color: 'secondary',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, d.$)(ak().feedbackButton, { [ak().feedbackButton_active]: t.isLiked }),
                                                                'aria-label': s,
                                                                onClick: i,
                                                                'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                children: (0, c.jsx)(Y.I, {
                                                                    variant: 'thumbUp',
                                                                    size: 'xs',
                                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                        (0, c.jsx)(nV.B, {
                                                            objectType: e5.DomainObjectType.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 2,
                                                            children: (0, c.jsx)(al, {
                                                                actionType: e5.ActionType.Dislike,
                                                                variant: 'text',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, d.$)(ak().feedbackButton, { [ak().feedbackButton_active]: t.isDisliked }),
                                                                'aria-label': o,
                                                                onClick: n,
                                                                'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                children: (0, c.jsx)(Y.I, {
                                                                    variant: 'thumbDown',
                                                                    size: 'xs',
                                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.isFact && (0, c.jsx)(am, {}),
                                ],
                            }),
                        ],
                    })
                );
            });
            var aT = i(75042),
                aP = i.n(aT);
            let aI = (e) => {
                    let { text: t, prevText: i, faceCover: n, className: a } = e,
                        r = (0, n$.D)();
                    return (
                        (0, m.useEffect)(() => {
                            i.current !== t && ((i.current = t), r(!0, ''));
                        }, [i, r, t]),
                        (0, c.jsxs)(T.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 3,
                            className: a,
                            'data-test-id': g.Kq.words.WORDS_CARD_TEXT,
                            children: [
                                n &&
                                    (0, c.jsx)(j._V, {
                                        src: n,
                                        size: 'orig',
                                        fit: 'contain',
                                        withAvatarReplace: !0,
                                        withFallback: !1,
                                        withLoadingIndicator: !1,
                                        className: aP().lumenAvatar,
                                        'aria-hidden': !0,
                                    }),
                                t,
                            ],
                        })
                    );
                },
                aS = (0, u.PA)((e) => {
                    var t, i, n, a, r;
                    let { card: s, trackId: o, isLoading: l, className: u } = e,
                        {
                            words: _,
                            settings: { isMobile: v },
                        } = (0, U.g)(),
                        { faceCover: p } = (0, nZ.x)(),
                        h = (0, tp.N)(),
                        x = (0, n$.D)(),
                        y = (() => {
                            var e;
                            let { words: t } = (0, U.g)(),
                                i = (0, tp.N)(),
                                [n, a] = (0, m.useState)(),
                                [r, s] = (0, m.useState)(),
                                o = null == (e = t.activeBigCard) ? void 0 : e.id,
                                l = (0, f.c)(() => {
                                    t.bigCardFullscreen.close();
                                }),
                                c = (0, f.c)(() => {
                                    t.bigCardFullscreen.isOpened || (a(void 0), s(void 0));
                                }),
                                d = (0, f.c)((e, n) => {
                                    var r;
                                    let o = Array.from(null != (r = e.bigCardIds) ? r : [])[0];
                                    o && (s(o), a(e), i({ to: e5.AppScreen.FactScreen }), t.bigCardFullscreen.open(), t.loadBigCard(o, n, e.id));
                                });
                            ((0, m.useEffect)(() => {
                                t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isRejected && l();
                            }, [l, t.bigCardLoadingState.isRejected, t.bigCardFullscreen.isOpened]),
                                (0, m.useEffect)(() => {
                                    t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isResolved && n && r && o === r && t.markBigCardViewed(n.id, r);
                                }, [o, r, n, t, t.bigCardLoadingState.isResolved, t.bigCardFullscreen.isOpened]));
                            let u = nQ({ card: n, onClose: l });
                            return { openedCard: n, open: d, close: l, onScreenClosed: c, feedback: u };
                        })(),
                        C = (0, m.useRef)(null),
                        j = (0, m.useRef)(null),
                        [k, N] = (0, m.useState)(!1),
                        [P, I] = (0, m.useState)(void 0),
                        S = (0, m.useRef)(null),
                        E = ((e) => {
                            let { formatMessage: t } = (0, b.A)(),
                                i = (0, m.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                n = (0, m.useRef)(0),
                                [a, r] = (0, m.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let a = Math.floor(Math.random() * i.length);
                                    return ((n.current = a), null != (t = i[a]) ? t : null);
                                }),
                                s = (0, m.useRef)(e),
                                o = (0, m.useRef)(null),
                                l = (0, m.useRef)(e);
                            if (((s.current = e), e && !l.current)) {
                                var c;
                                let e = Math.floor(Math.random() * i.length);
                                ((n.current = e), r(null != (c = i[e]) ? c : null));
                            }
                            return (
                                (l.current = e),
                                (0, m.useEffect)(() => {
                                    if (null !== a && !o.current)
                                        return (
                                            (o.current = setTimeout(() => {
                                                if (((o.current = null), s.current)) {
                                                    var e;
                                                    ((n.current = (n.current + 1) % i.length), r(null != (e = i[n.current]) ? e : i[0]));
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                o.current && (clearTimeout(o.current), (o.current = null));
                                            }
                                        );
                                }, [i, a]),
                                a
                            );
                        })(!!l),
                        w = null !== E,
                        B = !!((null == s ? void 0 : s.isBigCardFullscreenEnabled) || (null == (t = y.openedCard) ? void 0 : t.isBigCardFullscreenEnabled)),
                        O =
                            (null == s ? void 0 : s.withBigCardPanel) ||
                            (null == s ? void 0 : s.isBigCardFullscreenEnabled) ||
                            (null == s ? void 0 : s.withDirectLinkNavigation),
                        {
                            handleLike: M,
                            handleDislike: R,
                            feedbackMessage: L,
                        } = nQ({
                            card: s,
                            onClose: (0, f.c)(() => {
                                N(!1);
                            }),
                        }),
                        { feedbackMessage: V } = y.feedback,
                        D = !!(L || V),
                        W = !(s && (!(null == s ? void 0 : s.isDisliked) || D)) && !w,
                        F = !s || (null == s ? void 0 : s.isDisliked) || D || w,
                        z = !l && !w && (!s || s.isDisliked),
                        H = _.isBigCardPanelEnabled ? z : !(null == s ? void 0 : s.withBigCardPanel),
                        K = (null == s ? void 0 : s.isLumenFaceAvatarEnabled) && !!p,
                        X = w ? 'loading' : 'content-'.concat(null == s ? void 0 : s.id),
                        Y = (null == s ? void 0 : s.isPersonal) ? e5.DomainObjectType.PersonalFact : e5.DomainObjectType.Fact;
                    (0, m.useEffect)(() => {
                        _.isBigCardPanelEnabled || s || l || x(!0, '');
                    }, [s, _.isBigCardPanelEnabled, l, x]);
                    let q = (0, f.c)((e) => {
                            (!e || !F) &&
                                ((e && null != s && s.withDirectLinkNavigation) ||
                                    (e && v && S.current && I(window.innerHeight - S.current.getBoundingClientRect().top + 12),
                                    e && h({ to: e5.AppScreen.FactScreen }),
                                    N(e)));
                        }),
                        G = (0, ez.Z)(null != (n = null == s || null == (i = s.action) ? void 0 : i.url) ? n : ''),
                        $ = (0, f.c)(() => {
                            var e;
                            (null == s || null == (e = s.action) ? void 0 : e.url) && (h({ to: e5.AppScreen.Link, deepLink: s.action.url }), G());
                        }),
                        Z = (0, f.c)(() => {
                            if (!F && s) {
                                if (s.isInformer && !s.withBigCardPanel) return void $();
                                !_.bigCardPanel.card &&
                                    !_.bigCardFullscreen.isOpened &&
                                    (s.withBigCardPanel
                                        ? (_.bigCardPanel.open(o), _.bigCardPanel.isOpened && _.bigCardPanel.trackId === o && h({ to: e5.AppScreen.LumenFactScreen }))
                                        : (null == s ? void 0 : s.isBigCardFullscreenEnabled) && y.open(s, o));
                            }
                        }),
                        J = (0, f.c)((e) => {
                            e.target === e.currentTarget && (e.code === nL.v.SPACE || e.code === nL.v.ENTER) && (e.preventDefault(), Z());
                        }),
                        Q = (0, A.L)(() => {
                            var e, t, i, n;
                            return w
                                ? (0, c.jsx)(an, { children: E })
                                : D
                                  ? (0, c.jsx)(T.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'medium',
                                        lineClamp: 3,
                                        className: aP().text,
                                        'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE,
                                        children: L || V,
                                    })
                                  : null != s && s.isDisliked
                                    ? void 0
                                    : (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (null == s ? void 0 : s.text) &&
                                                  (0, c.jsx)(
                                                      nV.B,
                                                      {
                                                          objectType: null != (e = s.domainObjectType) ? e : Y,
                                                          objectId: null != (t = null == s ? void 0 : s.analyticObjectId) ? t : '',
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          objectsCount: (null == s ? void 0 : s.action) ? 2 : 1,
                                                          children: (0, c.jsx)(aI, { text: s.text, prevText: C, faceCover: K ? p : void 0, className: aP().text }, X),
                                                      },
                                                      null == s ? void 0 : s.id,
                                                  ),
                                              (null == s ? void 0 : s.action) &&
                                                  s.action.url &&
                                                  (0, c.jsx)(
                                                      nV.B,
                                                      {
                                                          objectType: null != (i = null == s ? void 0 : s.domainObjectType) ? i : e5.DomainObjectType.Link,
                                                          objectId: s.action.url,
                                                          objectPosX: 1,
                                                          objectPosY: 2,
                                                          objectsCount: (null == s ? void 0 : s.action) ? 2 : 1,
                                                          children: (0, c.jsx)(
                                                              ao,
                                                              {
                                                                  url: s.action.url,
                                                                  title: s.action.title,
                                                                  prevTitle: j,
                                                                  className: aP().action,
                                                                  analyticObjectId: null != (n = null == s ? void 0 : s.analyticObjectId) ? n : '',
                                                              },
                                                              ''.concat(X, '-action'),
                                                          ),
                                                      },
                                                      s.action.url,
                                                  ),
                                          ],
                                      });
                        }),
                        ee = (0, A.L)(() => {
                            if (v && P) return { '--words-popover-height': ''.concat(P, 'px') };
                        }),
                        et = v ? aN : aC,
                        ei = (0, c.jsxs)('div', {
                            className: (0, d.$)(aP().root, { [aP().root_disabled]: F }, u),
                            role: 'button',
                            tabIndex: 0,
                            onClick: O ? Z : void 0,
                            onKeyDown: O ? J : void 0,
                            'data-test-id': g.Kq.words.WORDS_CARD,
                            children: [
                                H &&
                                    (0, c.jsx)(ae, {
                                        className: (0, d.$)(aP().badge, {
                                            [aP().badge_centered]: W,
                                            [aP().badge_centeredSparkles]: W && _.withSparkles,
                                            [aP().badge_loading]: w,
                                        }),
                                        dimmed: W,
                                        isFact: (null == s ? void 0 : s.isFact) && !F,
                                    }),
                                (0, c.jsx)('div', { className: (0, d.$)(aP().content, { [aP().content_hidden]: W }), ref: S, children: Q }),
                            ],
                        });
                    return B
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  ei,
                                  (0, c.jsx)(eW.n, {
                                      pageId: eL._Q.FACT_SCREEN,
                                      pageEntityId: null != (r = null == (a = y.openedCard) ? void 0 : a.id) ? r : '',
                                      pageStyle: e5.PageStyles.Fullscreen,
                                      pagePlacement: e5.PagePlacements.Fullscreen,
                                      children: (0, c.jsx)(af, {
                                          card: y.openedCard,
                                          feedbackMessage: V,
                                          onLike: y.feedback.handleLike,
                                          onDislike: y.feedback.handleDislike,
                                          onClose: y.close,
                                          onScreenClosed: y.onScreenClosed,
                                      }),
                                  }),
                              ],
                          })
                        : (null == s ? void 0 : s.withBigCardPanel)
                          ? ei
                          : (0, c.jsxs)(ec.AM, {
                                isMobile: v,
                                placement: v ? 'bottom' : 'top',
                                open: k,
                                onOpenChange: q,
                                positionElement: v ? void 0 : S.current,
                                offsetOptions: v ? void 0 : 12,
                                style: ee,
                                children: [
                                    ei,
                                    (0, c.jsx)(ec.hl, {
                                        className: aP().popoverContent,
                                        children: (0, c.jsx)(eW.n, {
                                            pageId: eL._Q.FACT_SCREEN,
                                            pageEntityId: null == s ? void 0 : s.id,
                                            pageStyle: v ? e5.PageStyles.Sheet : e5.PageStyles.Popup,
                                            pagePlacement: v ? e5.PagePlacements.Bottom : e5.PagePlacements.Floating,
                                            children: s && (0, c.jsx)(et, { card: s, onLike: M, onDislike: R }),
                                        }),
                                    }),
                                ],
                            });
                }),
                aE = (0, u.PA)((e) => {
                    var t, i, n, a;
                    let { className: r, trackId: s } = e,
                        { words: o } = (0, U.g)(),
                        l = (() => {
                            let e = (0, W.N)();
                            return (0, m.useMemo)(() => {
                                let t = e.get(D.WA),
                                    i = null == t ? void 0 : t.getPassportUid();
                                if (!i) return;
                                let n = new nG(String(i));
                                return (n.openDatabase(), n);
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, ts.e)(),
                            { words: t, sonataState: i } = (0, U.g)();
                        (0, m.useEffect)(() => {
                            if (!e) return;
                            let n = e.state.queueState,
                                a = () => {
                                    let e = n.entityList.value,
                                        t = n.order.value,
                                        i = n.index.value;
                                    return e && null != i
                                        ? ((e, t, i) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (i, n) => {
                                                  var a, r, s, o, l;
                                                  let c =
                                                      null == (o = e[t.length > 0 && null != (l = t[n]) ? l : n]) ||
                                                      null == (s = o.entity) ||
                                                      null == (r = s.data) ||
                                                      null == (a = r.meta)
                                                          ? void 0
                                                          : a.id;
                                                  return void 0 !== c ? String(c) : void 0;
                                              }),
                                              currentIndex: i,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                r = n.currentEntity.onChange((e) => {
                                    ((e) => {
                                        if (i.isGenerativeContext) return;
                                        let n = a();
                                        if (!n) return;
                                        let r = nU({ queueState: n, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(r));
                                        let s =
                                                e === nW.So.MOVE_FORWARD ||
                                                e === nW.So.DISLIKE_MOVE_FORWARD ||
                                                e === nW.So.AUTO_MOVE_FORWARD ||
                                                e === nW.So.ERROR_MOVE_FORWARD,
                                            o = e === nW.So.MOVE_BACKWARD,
                                            l = [];
                                        (s && nz({ queueState: n, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (l = nF({ queueState: n, direction: 'forward', batchSize: 17 }))
                                            : o && nz({ queueState: n, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (l = nF({ queueState: n, direction: 'backward', batchSize: 3 }))
                                              : s || o || (l = r),
                                            l.length > 0 && t.loadCards(l));
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                s = n.entityList.onChange(() => {
                                    (() => {
                                        if (i.isGenerativeContext) return;
                                        let e = a();
                                        if (!e) return;
                                        let n = nU({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        n.length > 0 && t.loadCards(n);
                                    })();
                                });
                            return () => {
                                (null == r || r(), null == s || s());
                            };
                        }, [e, i, t]);
                    })();
                    let d = o.getCardForTrack(s);
                    if (
                        ((0, m.useEffect)(() => {
                            o.setWordsViewedStore(l);
                        }, [o, l]),
                        (0, m.useEffect)(() => {
                            d && o.markCardViewed(d.id);
                        }, [d, o]),
                        !s)
                    )
                        return null;
                    let u = String(s),
                        _ = !d && o.isLoading(u),
                        b = o.isTrackResolvedWithoutCard(u) ? nD.SleepingAlice : nD.SleepTech,
                        v = !o.isBigCardPanelEnabled,
                        p = v && !d && !_,
                        h = v ? e5.DomainObjectType.SleepingAlice : void 0,
                        g = (null == d ? void 0 : d.isPersonal) ? e5.DomainObjectType.PersonalFact : void 0,
                        x = null != (t = null != g ? g : h) ? t : e5.DomainObjectType.Fact,
                        f = null != (i = null == d ? void 0 : d.domainObjectType) ? i : x,
                        y = null != (a = null != (n = null == d ? void 0 : d.analyticObjectId) ? n : h) ? a : '';
                    return (0, c.jsx)(eV.F, {
                        blockId: e5.EntityTypes.WordsInWave,
                        blockType: e5.EntityTypes.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        mainObjectType: e5.DomainObjectType.Track,
                        mainObjectId: null != s ? s : void 0,
                        displayReasonId: p ? b : void 0,
                        children: (0, c.jsx)(nV.B, {
                            objectType: f,
                            objectId: y,
                            objectPosX: 1,
                            objectPosY: (null == d ? void 0 : d.action) && d.action.url ? 2 : 1,
                            objectsCount: (null == d ? void 0 : d.action) ? 2 : 1,
                            children: (0, c.jsx)(aS, { card: d, trackId: u, isLoading: _, className: r }),
                        }),
                    });
                });
            var aw = i(16967),
                aB = i(92867),
                aO = i(56194),
                aM = i.n(aO),
                aR = i(73170),
                aL = i(5120),
                aV = i(99954),
                aD = i.n(aV);
            let aW = (0, u.PA)((e) => {
                let { className: t } = e,
                    {
                        words: { bigCardPanel: i },
                    } = (0, U.g)(),
                    { formatMessage: n } = (0, b.A)(),
                    { handleLike: a, handleDislike: r } = (() => {
                        let {
                                words: { bigCardPanel: e },
                            } = (0, U.g)(),
                            { notify: t } = (0, iC.l)(),
                            { formatMessage: i } = (0, b.A)(),
                            n = (0, f.c)(async (n) => {
                                let a = e.card;
                                if (!(!a || !e.isOpened || e.isFeedbackMessageVisible || a.isFeedbackPending))
                                    try {
                                        (n !== nJ.a.NEUTRAL && e.showFeedbackMessage(n), await a.sendFeedback(n, !0));
                                    } catch (n) {
                                        if (!(0, aL._n)(e) || !e.isOpened || e.card !== a) return;
                                        (e.hideFeedbackMessage(),
                                            t((0, c.jsx)(ik.h, { error: i({ id: 'error-messages.error-during-action' }) }), { containerId: iA.u.ERROR }));
                                    }
                            });
                        return {
                            handleLike: (0, f.c)(() => {
                                var t;
                                return n((null == (t = e.card) ? void 0 : t.isLiked) ? nJ.a.NEUTRAL : nJ.a.LIKE);
                            }),
                            handleDislike: (0, f.c)(() => n(nJ.a.DISLIKE)),
                        };
                    })(),
                    { card: s, isFeedbackDisabled: o } = i;
                return (0, c.jsxs)('div', {
                    className: (0, d.$)(aD().root, t),
                    children: [
                        (0, c.jsx)(al, {
                            actionType: (null == s ? void 0 : s.isLiked) ? e5.ActionType.Unlike : e5.ActionType.Like,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': n({ id: 'words.like' }),
                            'aria-pressed': null == s ? void 0 : s.isLiked,
                            className: (0, d.$)(aD().button, { [aD().button_active]: null == s ? void 0 : s.isLiked }),
                            onClick: a,
                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                            children: (0, c.jsx)(Y.I, { variant: 'thumbUp', size: 'xxs' }),
                        }),
                        (0, c.jsx)('div', { className: aD().divider, 'aria-hidden': !0 }),
                        (0, c.jsx)(al, {
                            actionType: e5.ActionType.Dislike,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': n({ id: 'words.dislike' }),
                            'aria-pressed': null == s ? void 0 : s.isDisliked,
                            className: (0, d.$)(aD().button, { [aD().button_active]: null == s ? void 0 : s.isDisliked }),
                            onClick: r,
                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                            children: (0, c.jsx)(Y.I, { variant: 'thumbDown', size: 'xxs' }),
                        }),
                    ],
                });
            });
            var aF = i(19994),
                aU = i(22136),
                az = i.n(aU);
            let aH = (0, u.PA)((e) => {
                let { className: t } = e,
                    { lumen: i } = (0, U.g)(),
                    { fullCover: n } = (0, nZ.x)(),
                    a = i.isNeededToLoad || i.isLoading,
                    r = (0, A.L)(() =>
                        a
                            ? (0, c.jsx)(aF.W, { className: az().image, radius: 'l', isActive: !0 })
                            : (0, c.jsx)(j._V, { src: n, fit: 'contain', size: 'orig', withAvatarReplace: !0, withLoadingIndicator: !0, className: az().image }),
                    );
                return (0, c.jsx)('div', { className: (0, d.$)(az().root, t), 'aria-hidden': !0, children: r });
            });
            var aK = i(71066),
                aX = i.n(aK);
            let aY = (0, u.PA)((e) => {
                let { className: t, objectPosY: i } = e,
                    { words: n } = (0, U.g)(),
                    { sourceItems: a, bigCard: r } = n.bigCardPanel;
                return (0, c.jsx)(c.Fragment, {
                    children: a.map((e, n) => {
                        var s;
                        return (0, c.jsx)(
                            nV.B,
                            {
                                objectType: e5.DomainObjectType.Link,
                                objectId: null != (s = null == r ? void 0 : r.id) ? s : '',
                                objectPosX: n + 1,
                                objectPosY: i,
                                objectsCount: a.length,
                                children: (0, c.jsxs)(ac, {
                                    url: e.url,
                                    className: (0, d.$)(aX().root, t),
                                    children: [
                                        e.faviconUrl && (0, c.jsx)(j._V, { src: e.faviconUrl, fit: 'cover', className: aX().icon, 'aria-hidden': !0 }),
                                        (0, c.jsx)(T.HL, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            className: aX().title,
                                            children: e.title,
                                        }),
                                    ],
                                }),
                            },
                            e.url,
                        );
                    }),
                });
            });
            var aq = i(69515),
                aG = i.n(aq);
            let a$ = (e) => {
                let { text: t, isContentVisible: i } = e,
                    {
                        textRef: n,
                        withTopFade: a,
                        withBottomFade: r,
                        updateScrollEdges: s,
                    } = ((e) => {
                        let { text: t, isContentVisible: i } = e,
                            n = (0, m.useRef)(null),
                            [a, r] = (0, m.useState)(!1),
                            [s, o] = (0, m.useState)(!1),
                            l = (0, f.c)(() => {
                                let e = n.current;
                                if (!e) return;
                                let { scrollTop: t, scrollHeight: i, clientHeight: a } = e,
                                    s = a > 0 && i > a + 1;
                                (r(s && t > 1), o(s && t + a < i - 1));
                            });
                        return (
                            (0, m.useLayoutEffect)(() => {
                                l();
                            }, [i, t, l]),
                            (0, m.useEffect)(() => {
                                let e = n.current;
                                if (!e) return;
                                let t = new ResizeObserver(l);
                                return (
                                    t.observe(e),
                                    document.fonts.addEventListener('loadingdone', l),
                                    () => {
                                        (t.disconnect(), document.fonts.removeEventListener('loadingdone', l));
                                    }
                                );
                            }, [l]),
                            { textRef: n, withTopFade: a, withBottomFade: s, updateScrollEdges: l }
                        );
                    })({ text: t, isContentVisible: i }),
                    o = (0, m.useRef)(!1),
                    l = (0, n$.D)();
                return (
                    (0, m.useEffect)(() => {
                        i && !o.current && (l(!0, ''), (o.current = !0));
                    }, [i, l]),
                    (0, c.jsx)(T.HL, {
                        ref: n,
                        variant: 'div',
                        size: 'l',
                        weight: 'bold',
                        className: (0, d.$)(aG().root, { [aG().root_withTopFade]: a, [aG().root_withBottomFade]: r }),
                        tabIndex: 0,
                        onScroll: s,
                        children: t,
                    })
                );
            };
            var aZ = i(17114),
                aJ = i.n(aZ);
            let aQ = (e) => {
                let { className: t, isActive: i, motionClassName: n } = e;
                return (0, c.jsx)('div', {
                    className: t,
                    'aria-hidden': !0,
                    children: (0, c.jsxs)('div', {
                        className: (0, d.$)(aJ().root, n),
                        children: [
                            (0, c.jsx)(aF.W, { className: aJ().item, radius: 'l', isActive: i }),
                            (0, c.jsx)(aF.W, { className: aJ().item, radius: 'l', isActive: i }),
                            (0, c.jsx)(aF.W, { className: aJ().item, radius: 'l', isActive: i }),
                            (0, c.jsx)(aF.W, { className: aJ().item, radius: 'l', isActive: i }),
                        ],
                    }),
                });
            };
            var a0 = i(37880),
                a1 = i.n(a0);
            let a2 = (0, u.PA)(() => {
                    var e, t, i, n, a, r, s;
                    let {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, U.g)(),
                        { formatMessage: u } = (0, b.A)(),
                        _ = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, U.g)(),
                                { card: t, isOpened: i, submittedFeedback: n, isFeedbackMessageVisible: a } = e;
                            return (
                                (0, m.useEffect)(() => {
                                    if (!i || !a) return;
                                    let r = setTimeout(() => {
                                        e.isOpened && e.isFeedbackMessageVisible && e.card === t && (n === nJ.a.DISLIKE ? e.close() : e.hideFeedbackMessage());
                                    }, 3e3);
                                    return () => clearTimeout(r);
                                }, [e, t, a, i, n]),
                                (0, A.L)(() => (n === nJ.a.DISLIKE ? (0, c.jsx)(v.A, { id: 'words.dislike-feedback' }) : (0, c.jsx)(v.A, { id: 'words.like-feedback' })))
                            );
                        })(),
                        p = (0, m.useRef)(null),
                        { card: h, bigCard: g, objectType: x, mainObjectType: f, isContentReady: y, isFeedbackMessageVisible: j, isOpened: k, text: N } = o.bigCardPanel,
                        [P, I] = (0, m.useState)(() => y),
                        S = !P && (o.isShimmerVisible || y),
                        E = P && y && void 0 !== h,
                        w = P && !j,
                        B = E && k && void 0 !== g && o.bigCardLoadingState.isResolved,
                        {
                            contentAreaRef: O,
                            lumenRef: M,
                            cardContentRef: R,
                            isFeedbackLayout: L,
                        } = ((e) => {
                            let { isFeedbackMessageVisible: t, isPanelOpened: i } = e,
                                n = (0, m.useRef)(null),
                                a = (0, m.useRef)(null),
                                r = (0, m.useRef)(null),
                                s = (0, m.useRef)(null),
                                o = (0, m.useRef)(null),
                                [l, c] = (0, m.useState)(t),
                                d = (0, aB.U)('(prefers-reduced-motion: reduce)');
                            return (
                                (0, m.useLayoutEffect)(() => {
                                    var e, u;
                                    let m = n.current,
                                        _ = a.current;
                                    if (!m || !_) return;
                                    if (l !== t) {
                                        let e = r.current;
                                        if (!e || !i) return;
                                        o.current = _.getBoundingClientRect().top;
                                        let n = _.offsetHeight;
                                        if (t) {
                                            let t = e.offsetTop,
                                                i = e.offsetHeight;
                                            (m.style.setProperty('--card-content-top', ''.concat(t, 'px')),
                                                m.style.setProperty('--card-content-height', ''.concat(i, 'px')));
                                        }
                                        (m.style.setProperty('--lumen-height', ''.concat(n, 'px')), c(t));
                                        return;
                                    }
                                    let b = o.current;
                                    if (((o.current = null), d)) {
                                        null == (u = s.current) || u.cancel();
                                        return;
                                    }
                                    if (null === b) return;
                                    null == (e = s.current) || e.cancel();
                                    let v = m.getBoundingClientRect().height / m.offsetHeight,
                                        p = (b - _.getBoundingClientRect().top) / v;
                                    if (!Number.isFinite(p) || !p) return;
                                    let h = Number.parseFloat(getComputedStyle(m).getPropertyValue('--words-big-card-panel-motion-duration'));
                                    s.current = _.animate([{ transform: 'translateY('.concat(p, 'px)') }, { transform: 'translateY(0)' }], {
                                        duration: h,
                                        easing: 'ease-out',
                                    });
                                }, [l, t, i, d]),
                                (0, m.useEffect)(
                                    () => () => {
                                        var e;
                                        return null == (e = s.current) ? void 0 : e.cancel();
                                    },
                                    [],
                                ),
                                { contentAreaRef: n, lumenRef: a, cardContentRef: r, isFeedbackLayout: l }
                            );
                        })({ isFeedbackMessageVisible: j, isPanelOpened: k }),
                        V = (0, as.l)({ mainObjectType: f });
                    return (
                        (0, m.useEffect)(() => {
                            if (k) return (V(!0), () => V(!1));
                        }, [k, V]),
                        (0, m.useEffect)(() => {
                            k && y && I(!0);
                        }, [y, k]),
                        (0, m.useEffect)(() => {
                            B && o.markBigCardViewed(h.id, g.id);
                        }, [g, h, B, o]),
                        (0, c.jsxs)('div', {
                            className: a1().root,
                            'data-words-panel-dismiss': !0,
                            children: [
                                (0, c.jsx)(aR.q, { children: (0, c.jsx)('div', { role: 'status', 'aria-atomic': 'true', children: j && _ }) }),
                                (0, c.jsxs)('div', {
                                    ref: O,
                                    className: (0, d.$)(a1().contentArea, { [a1().contentArea_mobile]: l, [a1().contentArea_feedback]: L }),
                                    'data-words-panel-dismiss': !0,
                                    children: [
                                        (0, c.jsx)('div', {
                                            ref: M,
                                            className: (0, d.$)(a1().lumen, { [a1().lumen_mobile]: l }),
                                            'aria-hidden': !0,
                                            children: (0, c.jsx)(aH, { className: a1().contentMotion }),
                                        }),
                                        (0, c.jsxs)('div', {
                                            className: (0, d.$)(a1().contentStack, { [a1().contentStack_mobile]: l }),
                                            'aria-busy': S,
                                            'data-words-panel-dismiss': !0,
                                            children: [
                                                (0, c.jsx)(aQ, {
                                                    className: (0, d.$)(a1().contentLayer, a1().shimmer, { [a1().contentLayer_visible]: S }),
                                                    motionClassName: a1().contentMotion,
                                                    isActive: S,
                                                }),
                                                (0, c.jsxs)('div', {
                                                    ref: R,
                                                    className: (0, d.$)(a1().contentLayer, a1().content, a1().cardContent, { [a1().contentLayer_visible]: P }),
                                                    'aria-hidden': !w,
                                                    inert: !w,
                                                    'data-words-panel-dismiss': !0,
                                                    children: [
                                                        (0, c.jsxs)('div', {
                                                            className: (0, d.$)(a1().textContainer, a1().contentMotion, { [a1().textContainer_hidden]: !w }),
                                                            'data-words-panel-dismiss': !0,
                                                            children: [
                                                                E &&
                                                                    N &&
                                                                    (0, c.jsx)(nV.B, {
                                                                        objectType: x,
                                                                        objectId: null != (i = null != (t = null == g ? void 0 : g.id) ? t : h.analyticObjectId) ? i : '',
                                                                        objectPosX: 1,
                                                                        objectPosY: 1,
                                                                        objectsCount: 1,
                                                                        children: (0, c.jsx)(
                                                                            a$,
                                                                            { text: N, isContentVisible: k && w },
                                                                            null != (n = null == g ? void 0 : g.id) ? n : h.id,
                                                                        ),
                                                                    }),
                                                                E &&
                                                                    (null == (e = h.action) ? void 0 : e.url) &&
                                                                    (0, c.jsx)(nV.B, {
                                                                        objectType: null != (a = h.domainObjectType) ? a : e5.DomainObjectType.Link,
                                                                        objectId: h.action.url,
                                                                        objectPosX: 1,
                                                                        objectPosY: 2,
                                                                        objectsCount: 1,
                                                                        children: (0, c.jsx)(ao, {
                                                                            url: h.action.url,
                                                                            title: h.action.title,
                                                                            prevTitle: p,
                                                                            className: a1().action,
                                                                            analyticObjectId: null != (r = h.analyticObjectId) ? r : '',
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, c.jsx)('div', {
                                                            className: (0, d.$)(a1().feedbackButtons, a1().contentLayer, { [a1().contentLayer_visible]: w }),
                                                            'data-words-panel-dismiss': !0,
                                                            children:
                                                                E &&
                                                                (0, c.jsx)(nV.B, {
                                                                    objectType: g ? x : f,
                                                                    objectId: null != (s = null == g ? void 0 : g.id) ? s : h.id,
                                                                    objectPosX: 1,
                                                                    objectPosY: 3,
                                                                    objectsCount: 1,
                                                                    children: (0, c.jsx)(aW, { className: a1().contentMotion }),
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                                (0, c.jsx)('div', {
                                                    className: (0, d.$)(a1().contentLayer, a1().content, a1().feedback, { [a1().contentLayer_visible]: j }),
                                                    'aria-hidden': !0,
                                                    'data-words-panel-dismiss': !0,
                                                    children: (0, c.jsx)(T.DZ, {
                                                        variant: 'div',
                                                        size: 'm',
                                                        weight: 'bold',
                                                        className: (0, d.$)(a1().feedbackMessage, a1().contentMotion),
                                                        children: _,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)('div', {
                                            className: (0, d.$)(a1().contentLayer, a1().sources, { [a1().contentLayer_visible]: P, [a1().sources_hidden]: !w }),
                                            'aria-hidden': !w,
                                            inert: !w,
                                            'data-words-panel-dismiss': !0,
                                            children: E && (0, c.jsx)(aY, { objectPosY: 4 }),
                                        }),
                                    ],
                                }),
                                (0, c.jsx)(C.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    variant: l ? 'text' : 'default',
                                    size: 'm',
                                    icon: (0, c.jsx)(Y.I, { variant: 'arrowDown', size: 'xs', className: (0, d.$)(a1().closeIcon, { [a1().closeIcon_mobile]: l }) }),
                                    onClick: o.bigCardPanel.close,
                                    disabled: !k,
                                    'aria-label': u({ id: 'interface-actions.close' }),
                                    className: (0, d.$)(a1().closeButton, a1().controlsMotion, { [a1().closeButton_mobile]: l }),
                                }),
                                (null == h ? void 0 : h.isFact) &&
                                    (0, c.jsx)(T.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        role: 'note',
                                        tabIndex: 0,
                                        className: (0, d.$)(a1().disclaimer, a1().controlsMotion, { [a1().disclaimer_mobile]: l }),
                                        children: (0, c.jsx)(v.A, { id: 'words.lumen-description' }),
                                    }),
                            ],
                        })
                    );
                }),
                a5 = { appear: 500, enter: 500, exit: 300 },
                a8 = {
                    appear: aM().enter,
                    appearActive: aM().enter_active,
                    enter: aM().enter,
                    enterActive: aM().enter_active,
                    exit: aM().exit,
                    exitActive: aM().exit_active,
                },
                a4 = (0, u.PA)((e) => {
                    let { onRestoreFocus: t } = e,
                        {
                            words: { bigCardPanel: i },
                            settings: { isMobile: n },
                        } = (0, U.g)(),
                        { formatMessage: a } = (0, b.A)(),
                        {
                            ref: r,
                            focusPanel: s,
                            restoreFocus: o,
                            handleFocusCapture: l,
                        } = ((e) => {
                            let { onRestoreFocus: t } = e,
                                {
                                    words: { bigCardPanel: i },
                                } = (0, U.g)(),
                                n = (0, m.useRef)(null),
                                a = (0, m.useRef)(null),
                                { isOpened: r, isFeedbackMessageVisible: s, isFeedbackDisabled: o } = i,
                                l = (0, f.c)(() => {
                                    var e;
                                    null == (e = n.current) || e.focus({ preventScroll: !0 });
                                }),
                                c = (0, f.c)((e) => {
                                    a.current = e.target;
                                }),
                                d = (0, f.c)(() => {
                                    var e;
                                    (document.activeElement === document.body || (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) && t();
                                });
                            return (
                                (0, m.useEffect)(() => {
                                    let e = a.current;
                                    r &&
                                        (s || o) &&
                                        (null == e ? void 0 : e.closest('[inert], :disabled')) &&
                                        (document.activeElement === document.body || document.activeElement === e) &&
                                        l();
                                }, [l, o, s, r]),
                                { ref: n, focusPanel: l, restoreFocus: d, handleFocusCapture: c }
                            );
                        })({ onRestoreFocus: t }),
                        u = (0, aB.U)('(prefers-reduced-motion: reduce)'),
                        _ = (0, f.c)(() => {
                            !i.isOpened && i.trackId && (o(), i.reset());
                        });
                    return (
                        (0, m.useEffect)(() => () => i.reset(), [i]),
                        (0, c.jsx)(aw.A, {
                            in: i.isOpened,
                            nodeRef: r,
                            timeout: u ? 0 : a5,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            appear: !0,
                            classNames: a8,
                            onEnter: s,
                            onExited: _,
                            children: (0, c.jsx)('div', {
                                ref: r,
                                className: (0, d.$)(aM().root, { [aM().root_mobile]: n }),
                                role: 'region',
                                'aria-label': a({ id: 'a11y-regions.words' }),
                                tabIndex: -1,
                                inert: !i.isOpened,
                                onFocusCapture: l,
                                'data-words-panel-dismiss': !0,
                                children: (0, c.jsx)(eW.n, {
                                    pageId: eL._Q.LUMEN_FACT_SCREEN,
                                    pageEntityId: i.cardId,
                                    pageStyle: n ? e5.PageStyles.Fullscreen : e5.PageStyles.Sheet,
                                    pagePlacement: n ? e5.PagePlacements.Fullscreen : e5.PagePlacements.Right,
                                    children: (0, c.jsx)(eV.F, {
                                        blockId: e5.EntityTypes.WordsInWave,
                                        blockType: e5.EntityTypes.WordsInWave,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        mainObjectType: i.mainObjectType,
                                        mainObjectId: i.cardId,
                                        children: (0, c.jsx)(a2, {}),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var a9 = i(59927),
                a6 = i(40634),
                a7 = i(82194),
                a3 = i.n(a7);
            let re = (0, u.PA)((e) => {
                let { artists: t, open: i, positionElement: n, onOpenChange: a } = e,
                    { formatMessage: r } = (0, b.A)(),
                    {
                        settings: { isMobile: s },
                    } = (0, U.g)();
                return (0, c.jsxs)(ec.AM, {
                    isMobile: s,
                    placement: s ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: a,
                    positionElement: s ? void 0 : n,
                    transform: s,
                    customRoleProps: { role: 'menu' },
                    children: [
                        null,
                        (0, c.jsx)(ec.hl, {
                            className: a3().root,
                            'aria-label': r({ id: 'interface-actions.context-menu-artists' }),
                            'data-test-id': g.OA.artists.ARTISTS_MENU,
                            children: (0, c.jsx)('div', {
                                className: a3().menuList,
                                children: t.map((e) => (0, c.jsx)(a6.V, { artist: e, className: a3().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
            var rt = i(34375),
                ri = i.n(rt),
                rn = i(13946);
            let ra = (0, u.PA)((e) => {
                let {
                        lineClamp: t,
                        shouldShowMyVibeTitle: i,
                        isNonMusic: n,
                        isGenerative: a,
                        withLink: r,
                        hasMultipleArtists: s,
                        mainAlbum: o,
                        entityTitle: l,
                        artists: u,
                        artistsRef: m,
                        isArtistsMenuOpen: _,
                        onArtistsMenuClick: v,
                    } = e,
                    { formatMessage: p } = (0, b.A)();
                if (i)
                    return (0, c.jsx)(T.HL, {
                        variant: 'span',
                        className: (0, d.$)(ri().text, ri().important),
                        lineClamp: 1,
                        'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE,
                        children: p({ id: 'entity-names.my-vibe' }),
                    });
                if (n && o)
                    return (0, c.jsx)(th.N, {
                        href: o.url,
                        className: (0, d.$)(ri().text, ri().important),
                        'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE,
                        children: (0, c.jsx)(T.HL, { variant: 'span', className: (0, d.$)(ri().text, ri().important), lineClamp: t, children: o.title }),
                    });
                if (a && l)
                    return (0, c.jsx)(T.HL, {
                        variant: 'span',
                        className: (0, d.$)(ri().text, ri().important),
                        lineClamp: t,
                        'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE,
                        children: l,
                    });
                if (u) {
                    let e = (0, c.jsx)(rn.i, {
                        artists: u,
                        captionClassName: (0, d.$)(ri().text, ri().important),
                        linkClassName: (0, d.$)(ri().text, ri().important),
                        className: (0, d.$)(ri().text, ri().important),
                        lineClamp: t,
                        withLink: r,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return s
                        ? (0, c.jsx)(C.$, {
                              className: ri().button,
                              variant: 'text',
                              'aria-label': p({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': _,
                              withRipple: !1,
                              onClick: v,
                              ref: m,
                              'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_MULTIPLE_ARTISTS_BUTTON,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var rr = i(94345),
                rs = i.n(rr);
            let ro = 'vibe-freemium-block',
                rl = (0, u.PA)((e) => {
                    let { className: t } = e,
                        { user: i } = (0, U.g)(),
                        [n, a] = (0, y.d)(),
                        {
                            openPaymentWidgetModal: r,
                            isShimmerActive: s,
                            isShimmerVisible: o,
                            mainText: l,
                            mainTextA11y: u,
                            additionText: m,
                        } = (0, V.D)({ storeName: 'music', isEnabled: i.isAuthorized && !i.hasPlus, offerElement: { element: n, intersectionPropertyId: ro } }),
                        _ = (0, A.L)(() =>
                            i.isAuthorized
                                ? (0, c.jsx)(K.b, {
                                      ref: a,
                                      'data-intersection-property-id': ro,
                                      mainText: l,
                                      ariaLabel: u,
                                      additionText: m,
                                      isShimmerActive: s,
                                      isShimmerVisible: o,
                                      onClick: r,
                                      className: rs().button,
                                      mainTextClassName: rs().buttonMainText,
                                      additionTextClassName: rs().buttonAdditionText,
                                      'data-test-id': g.Xk.vibe.VIBE_FREEMIUM_BUTTON,
                                  })
                                : (0, c.jsx)(X.H, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, c.jsx)(T.HL, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, c.jsx)(v.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: rs().button,
                                  }),
                        );
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(rs().root, t),
                        'data-test-id': g.Xk.vibe.VIBE_FREEMIUM_BLOCK,
                        children: [
                            _,
                            (0, c.jsx)(T.HL, {
                                variant: 'span',
                                size: 'l',
                                className: rs().description,
                                'data-test-id': g.Xk.vibe.VIBE_FREEMIUM_BLOCK_DESCRIPTION,
                                children: (0, c.jsx)(v.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                rc = (0, u.PA)(() => {
                    var e, t, i, n, a, r, s, o, l, u, _, v, h, x, y, C, j;
                    let { formatMessage: k } = (0, b.A)(),
                        N = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, U.g)(),
                                t = (0, m.useRef)(null),
                                i = (0, m.useRef)(!1),
                                n = (0, m.useRef)(null),
                                { isOpened: a } = e,
                                r = (0, f.c)((t) => {
                                    t || ((i.current = !0), e.close());
                                }),
                                { context: s, refs: o } = (0, nR.useFloating)({ open: a, onOpenChange: r }),
                                l = (0, nR.useDismiss)(s, { escapeKey: !1, outsidePressEvent: 'click' }),
                                { getFloatingProps: c } = (0, nR.useInteractions)([l]),
                                d = (0, f.c)((e) => {
                                    n.current = e.target;
                                }),
                                u = (0, f.c)((t) => {
                                    var i;
                                    let a = n.current;
                                    ((n.current = null),
                                        e.isOpened &&
                                            !t.defaultPrevented &&
                                            0 !== t.detail &&
                                            t.target === a &&
                                            t.target instanceof HTMLElement &&
                                            t.currentTarget.contains(t.target) &&
                                            t.target.hasAttribute('data-words-panel-dismiss') &&
                                            (null == (i = window.getSelection()) ? void 0 : i.isCollapsed) !== !1 &&
                                            e.close());
                                }),
                                _ = (0, f.c)((t) => {
                                    t.code === nL.v.ESCAPE &&
                                        !t.defaultPrevented &&
                                        e.isOpened &&
                                        t.currentTarget.contains(document.activeElement) &&
                                        (t.preventDefault(), t.stopPropagation(), e.close());
                                }),
                                b = (0, f.c)((i) => {
                                    e.isOpened || (t.current = i.target);
                                }),
                                v = (0, f.c)(() => {
                                    var e;
                                    if (i.current) return;
                                    let n = t.current;
                                    (null == n ||
                                        !n.isConnected ||
                                        n.closest('[inert], [aria-hidden="true"]') ||
                                        (n.focus({ preventScroll: !0 }), document.activeElement !== n)) &&
                                        (null == (e = o.floating.current) || e.focus({ preventScroll: !0 }));
                                });
                            return (
                                (0, m.useEffect)(() => {
                                    a && (i.current = !1);
                                }, [a]),
                                {
                                    regionRef: o.setFloating,
                                    regionProps: c({ onKeyDown: _, onPointerDownCapture: d, onClick: u }),
                                    handleFocusCapture: b,
                                    restoreFocus: v,
                                }
                            );
                        })(),
                        {
                            sonataState: T,
                            experiments: P,
                            words: I,
                            lumen: S,
                            settings: { isMobile: E },
                            user: w,
                            paywall: { modal: B },
                            vibe: R,
                        } = (0, U.g)(),
                        // for PulseSync: BEGIN read wave animation ordering and artist-cover visibility preferences
                        swapVibeAnimationAndWheel = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel', false),
                        hideArtistCoverOnNewWave = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.hideArtistCoverOnNewWave', false),
                        // for PulseSync: END read wave animation ordering and artist-cover visibility preferences
                        { pageId: V, pageEntityId: H } = (0, L.$)(),
                        K = (0, as.l)({ mainObjectType: e5.DomainObjectType.Track }),
                        { resetContext: X } = (0, F.B)({ seeds: [eu.M1], pageIdForFrom: V, blockIdForFrom: ''.concat(e5.EntityTypes.MyWave, '-').concat(eM.U.RADIO) }),
                        { isEnabled: Y } = (0, to.e)(),
                        q = P.checkExperiment(z.z.WebNextWaveLikesAndShares, 'on') ? nv : nI,
                        G = R.isShuffleVibe && T.isVibeContext,
                        $ = (0, e8.OH)(G || null == (e = T.entityMeta) ? void 0 : e.averageColor),
                        {
                            context: Z,
                            isContextResetAvailable: J,
                            shouldShowMyVibeTitle: Q,
                            shouldHideResetButton: ee,
                            player: et,
                            isTrackColors: ei,
                            fallbackAppearance: en,
                        } = ((e) => {
                            let {
                                    experiments: t,
                                    sonataState: i,
                                    user: n,
                                    vibe: a,
                                    settings: { isMobile: r },
                                } = (0, U.g)(),
                                { formatMessage: s } = (0, b.A)(),
                                { isMyVibeContext: o, isInitialState: l } = (() => {
                                    var e, t;
                                    let i = (0, ts.e)(),
                                        { sonataState: n } = (0, U.g)(),
                                        a = (0, m.useCallback)(
                                            (e) => {
                                                var t;
                                                return null != (t = null == i ? void 0 : i.state.currentContext.onChange(e)) ? t : () => void 0;
                                            },
                                            [i],
                                        ),
                                        r = (0, m.useSyncExternalStore)(
                                            a,
                                            () => (null == i ? void 0 : i.state.currentContext.value),
                                            () => void 0,
                                        ),
                                        s =
                                            (null == r ? void 0 : r.data.type) === iw.K.Vibe
                                                ? null == (t = r.data.meta.session) || null == (e = t.wave)
                                                    ? void 0
                                                    : e.seeds
                                                : void 0,
                                        o = (null == s ? void 0 : s.length) === 1 ? s[0] : void 0,
                                        l = o === eu.M1 || !!(null == o ? void 0 : o.includes(eu.yx)),
                                        c = null == i ? void 0 : i.state.queueState.currentEntity.value;
                                    return { isMyVibeContext: l, isInitialState: !r && !c && !n.entityMeta };
                                })(),
                                c = (() => {
                                    var e, t, i, n, a, r;
                                    let { sonataState: s } = (0, U.g)(),
                                        o = (0, ts.e)(),
                                        { formatMessage: l } = (0, b.A)(),
                                        c = null == o ? void 0 : o.state.currentContext.value,
                                        d = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                        u = null == d ? void 0 : d.sourceContext;
                                    if (!(null == c ? void 0 : c.data.type)) return;
                                    let m = (function (e, t) {
                                        switch (t) {
                                            case iE.h.SEARCH:
                                                return e({ id: 'entity-names.search' });
                                            case iE.h.MUSIC_HISTORY:
                                            case iE.h.MUSIC_HISTORY_SEARCH:
                                                return e({ id: 'entity-names.music-history' });
                                            case iE.h.DOWNLOADED_TRACKS:
                                            case iE.h.USER_TRACKS:
                                                return e({ id: 'entity-names.collection' });
                                            case iE.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                return e({ id: 'page.familiar-vibe' });
                                            case iE.h.ARTIST_MY_COLLECTION:
                                                return e({ id: 'page.familiar-collection' });
                                            default:
                                                return;
                                        }
                                    })(l, null == u ? void 0 : u.data.sourceContextType);
                                    if (m) return m;
                                    switch (c.data.type) {
                                        case iw.K.Album:
                                            if (null == (e = s.entityMeta) ? void 0 : e.isPodcast) return l({ id: 'entity-names.podcast' });
                                            if (null == (t = s.entityMeta) ? void 0 : t.isAudiobook) return l({ id: 'entity-names.book' });
                                            if (null == (i = s.entityMeta) ? void 0 : i.isFairyTale) return l({ id: 'entity-names.fairytale' });
                                            return c.data.meta.title;
                                        case iw.K.Playlist:
                                            return c.data.meta.title;
                                        case iw.K.Vibe: {
                                            let e = null == (n = c.data.meta.session) ? void 0 : n.wave;
                                            if (!e) return;
                                            if (1 === e.seeds.length && e.seeds[0] === eu.M1) return l({ id: 'entity-names.my-vibe' });
                                            return l({ id: 'vibe-actions.vibe-context' }, { type: e.type, name: e.name });
                                        }
                                        case iw.K.Artist:
                                            return l({ id: 'entity-names.artist-popular-tracks' });
                                        case iw.K.Various:
                                            return null == (r = s.entityMeta) || null == (a = r.mainAlbum) ? void 0 : a.title;
                                        case iw.K.Generative:
                                            return l({ id: 'entity-names.generative' });
                                        default:
                                            return;
                                    }
                                })(),
                                { isPlaying: d, isVibeContext: u, entityMeta: _ } = i,
                                v = !!(a.isShuffleVibe && u),
                                p = !o,
                                h = s({ id: 'entity-names.my-vibe' }),
                                g = !d && (o || l),
                                x = {
                                    context: o ? h : c,
                                    isContextResetAvailable: p,
                                    shouldShowMyVibeTitle: g,
                                    shouldHideResetButton: g,
                                    player: {
                                        playButtonVariant: r && !_ ? 'standalone' : 'inline',
                                        shouldShowTrackInfo: !r || !!_,
                                        shouldShowArtists: g,
                                        shouldShowArtistsWithTrackTitle: !0,
                                        shouldKeepMobileSpacingOnPause: !0,
                                    },
                                    isTrackColors: n.isAuthorized,
                                    fallbackAppearance: { image: n.isAuthorized && v ? 'reshuffle' : 'default', color: n.isAuthorized && !v ? e : void 0 },
                                };
                            return t.checkExperiment(z.z.WebNextWavePauseState, 'on')
                                ? x
                                : {
                                      context: c && v ? h : c,
                                      isContextResetAvailable: p,
                                      shouldShowMyVibeTitle: !d && (u || !_),
                                      shouldHideResetButton: !d && !p,
                                      player: {
                                          playButtonVariant: r && !d ? 'cover' : 'inline',
                                          shouldShowTrackInfo: !0,
                                          shouldShowArtists: !d && u,
                                          shouldShowArtistsWithTrackTitle: !1,
                                          shouldKeepMobileSpacingOnPause: !1,
                                      },
                                      isTrackColors: d || v,
                                      fallbackAppearance: { image: v ? 'reshuffle' : 'default', blendMode: d && !v ? 'luminosity' : void 0 },
                                  };
                        })($.primary),
                        ea = null == (t = T.entityMeta) ? void 0 : t.mainArtist,
                        er = null == (i = T.entityMeta) ? void 0 : i.mainAlbum,
                        es = null == (n = T.entityMeta) ? void 0 : n.artists,
                        eo = !!(null == (a = T.entityMeta) ? void 0 : a.isNonUserGenerated),
                        el = !!(null == (r = T.entityMeta) ? void 0 : r.isNonMusic),
                        ec = T.isGenerativeContext,
                        ed = P.checkExperiment(z.z.WebNextNewWaveTabFeatCover, 'on')
                            ? null == (o = T.entityMeta) || null == (s = o.cutoutCover)
                                ? void 0
                                : s.uri
                            : void 0,
                        em = ((e) => {
                            let { artistCutoutCoverUri: t, hasMainArtist: i, releaseCutoutCoverUri: n } = e;
                            return i && (null != n ? n : t) ? (void 0 === n ? 'cutout_artist' : 'cutout_release') : 'text';
                        })({ artistCutoutCoverUri: null == ea || null == (l = ea.cutoutCover) ? void 0 : l.uri, hasMainArtist: !!ea, releaseCutoutCoverUri: ed }),
                        // for PulseSync: BEGIN hide the wave artist cover when requested
                        e_ = !hideArtistCoverOnNewWave && !!(null != ed ? ed : null == ea || null == (u = ea.cutoutCover) ? void 0 : u.uri) && !Q,
                        // for PulseSync: END hide the wave artist cover when requested
                        eb = e_ && ea,
                        ev = (0, a9.A)(null != es ? es : []) > 1,
                        ep = eo && !ev,
                        eh = (0, m.useRef)(null),
                        {
                            isArtistsMenuOpen: eg,
                            artistsMenuPosition: ex,
                            handleArtistsMenuClick: ef,
                            handleArtistsMenuOpenChange: ey,
                        } = ((e) => {
                            let { ref: t } = e,
                                [i, n] = (0, m.useState)(!1),
                                [a, r] = (0, m.useState)(null);
                            return {
                                isArtistsMenuOpen: i,
                                artistsMenuPosition: a,
                                handleArtistsMenuClick: (0, f.c)((e) => {
                                    if (e.detail > 0) {
                                        let { clientX: t, clientY: i } = e;
                                        r({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                                    } else r(t.current);
                                    n(!0);
                                }),
                                handleArtistsMenuOpenChange: (0, f.c)((e) => {
                                    (n(e), e || r(null));
                                }),
                            };
                        })({ ref: eh });
                    ((e) => {
                        let { albumId: t, displayType: i, trackId: n } = e,
                            a = (0, W.N)(),
                            r = a.get(D.Zf),
                            s = a.get(D.UB),
                            o = (0, m.useRef)(void 0);
                        (0, m.useEffect)(() => {
                            if (!n) {
                                o.current = void 0;
                                return;
                            }
                            let e = ''.concat(n, ':').concat(i);
                            s &&
                                o.current !== e &&
                                ((o.current = e),
                                s
                                    .send(
                                        { name: 'TECH_EVENT_CUTOUT_PHOTO_SHOWN', data: { ...(void 0 === t ? {} : { albumId: String(t) }), displayType: i, trackId: n } },
                                        { topLevelParameter: 'tech-metrics' },
                                    )
                                    .catch((e) => {
                                        r.error(e instanceof Error ? e : String(e));
                                    }));
                        }, [t, i, r, n, s]);
                    })({ albumId: null == (_ = T.entityMeta) ? void 0 : _.albumId, displayType: em, trackId: null == (v = T.entityMeta) ? void 0 : v.id });
                    let eA = !w.hasPlus || !w.isAuthorized,
                        eC = (0, A.L)(() => (Q ? iu : e_ ? ic : id)),
                        ej = (0, A.L)(() => (eA ? { ...eC, maxFontSize: Math.min(eC.maxFontSize, 72), fallbackMaxLines: 2 } : eC)),
                        ek =
                            w.hasPlus &&
                            (P.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on') || P.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        eN = I.isBigCardPanelEnabled && S.isNeededToLoad,
                        eT = I.bigCardPanel.isOpened,
                        eP = eT && E,
                        { solidColor: eI } = (0, nZ.x)(),
                        eS = { '--track-color': $.primary, '--lumen-color': null != eI ? eI : 'transparent' };
                    ((0, m.useEffect)(() => {
                        eN && S.getData();
                    }, [S, eN]),
                        (0, m.useEffect)(() => {
                            ev || ey(!1);
                        }, [ey, ev]),
                        (0, m.useEffect)(() => {
                            H && K(!0);
                        }, [K, H]),
                        (0, m.useEffect)(
                            () => () => {
                                K(!1);
                            },
                            [K],
                        ));
                    let eE = (0, A.L)(() =>
                            P.checkExperiment(z.z.WebNextShaderFallbackEnabled, 'on')
                                ? (0, c.jsx)(O, { className: ri().vibeAnimation, appearance: en })
                                : (0, c.jsx)(M, { className: ri().vibeAnimation, averageColor: $.primary, isTrackColors: ei, fallbackAppearance: en }),
                        ),
                        eR = (0, f.c)(() => {
                            (w.hasPlus || p.$3, X());
                        }),
                        eL = (0, A.L)(() => {
                            let e = T.entityMeta,
                                t = (0, c.jsx)('div', {
                                    className: (0, d.$)(ri().textContainer, { [ri().textContainer_withCover]: e_ && e, [ri().textContainer_playing]: !Q }),
                                    children: (0, c.jsx)(nx, {
                                        textOptions: ej,
                                        children: (0, c.jsx)(ra, {
                                            shouldShowMyVibeTitle: Q,
                                            isNonMusic: el,
                                            isGenerative: ec,
                                            withLink: ep,
                                            hasMultipleArtists: ev,
                                            mainAlbum: er,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: es,
                                            artistsRef: eh,
                                            isArtistsMenuOpen: eg,
                                            onArtistsMenuClick: ef,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, c.jsx)(eV.F, {
                                      blockId: e5.EntityTypes.MyWave,
                                      blockType: e5.EntityTypes.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      mainObjectType: e5.DomainObjectType.Track,
                                      mainObjectId: e.id,
                                      children: (0, c.jsxs)(nV.B, {
                                          objectType: e5.DomainObjectType.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          objectsCount: 1,
                                          children: [
                                              t,
                                              eb &&
                                                  (0, c.jsx)('div', {
                                                      className: ri().artistCover,
                                                      children: (0, c.jsx)(iv, { artist: ea, withLink: ep, onClick: ef, featCoverUri: ed }),
                                                  }),
                                              es && ev && (0, c.jsx)(re, { artists: es, open: eg, onOpenChange: ey, positionElement: ex }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, c.jsxs)(ew.r, {
                        page: eB.l.HOME_SCREEN,
                        places: [eO.R.MY_WAVE],
                        children: [
                            Y && (0, c.jsx)(nM, {}),
                            (0, c.jsxs)('div', {
                                className: (0, d.$)(ri().root, ri().bigCardPanel, {
                                    [ri().root_reshuffle]: G,
                                    [ri().root_withoutPlus]: !w.hasPlus,
                                    [ri().bigCardPanel_opened]: eT,
                                }),
                                onFocusCapture: N.handleFocusCapture,
                                // for PulseSync: BEGIN reverse the wave animation and wheel order when requested
                                style: { flexDirection: swapVibeAnimationAndWheel ? 'row-reverse' : 'row' },
                                // for PulseSync: END reverse the wave animation and wheel order when requested
                                children: [
                                    (0, c.jsx)(nS, { inert: eP, className: (0, d.$)(ri().wheel, { [ri().wheel_hidden]: eP }) }),
                                    (0, c.jsxs)('div', {
                                        ...N.regionProps,
                                        ref: N.regionRef,
                                        className: (0, d.$)(ri().meta, { [ri().meta_noPlus]: !w.hasPlus }),
                                        tabIndex: -1,
                                        role: 'region',
                                        'aria-label': k({ id: 'entity-names.my-vibe' }),
                                        'data-test-id': g.Xk.vibe.VIBE_META,
                                        'data-words-panel-dismiss': !0,
                                        children: [
                                            (0, c.jsx)('div', {
                                                className: (0, d.$)(ri().bigCardPanelBackground, { [ri().bigCardPanelBackground_visible]: eT }),
                                                style: eS,
                                                'aria-hidden': !0,
                                            }),
                                            (0, c.jsx)(eV.F, {
                                                blockId: e5.EntityTypes.Toolbar,
                                                blockType: e5.EntityTypes.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, c.jsx)(nV.B, {
                                                    objectType: e5.DomainObjectType.Wave,
                                                    objectId: eu.M1,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: (0, c.jsx)(q, {
                                                        className: (0, d.$)(ri().context, { [ri().context_hidden]: eT, [ri().context_mobile]: E }),
                                                        context: Z,
                                                        isResetAvailable: J,
                                                        isHidden: ee || eT,
                                                        onClick: eR,
                                                    }),
                                                }),
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: ri().entityMeta,
                                                'aria-hidden': eT,
                                                inert: eT,
                                                children: [
                                                    eE,
                                                    (0, c.jsx)(
                                                        'div',
                                                        {
                                                            className: (0, d.$)(ri().entityMetaBody, {
                                                                [ri().entityMetaBody_hidden]: eT,
                                                                [ri().entityMetaBody_mobile]: E,
                                                            }),
                                                            children: eL,
                                                        },
                                                        ''.concat(null != (j = null == (h = T.entityMeta) ? void 0 : h.idWithContext) ? j : 'default', '-').concat(Q),
                                                    ),
                                                ],
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: (0, d.$)(ri().playerBlock, {
                                                    [ri().playerBlock_withFreemium]: !w.hasPlus,
                                                    [ri().playerBlock_shifted]: eT && !E,
                                                }),
                                                inert: eP,
                                                'data-words-panel-dismiss': !0,
                                                children: [
                                                    (0, c.jsx)(eV.F, {
                                                        blockId: e5.EntityTypes.MyWave,
                                                        blockType: e5.EntityTypes.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: e5.DomainObjectType.Track,
                                                        mainObjectId: null == (x = T.entityMeta) ? void 0 : x.id,
                                                        children: (0, c.jsx)(nV.B, {
                                                            objectType: e5.DomainObjectType.Track,
                                                            objectId: null == (y = T.entityMeta) ? void 0 : y.id,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            objectsCount: 1,
                                                            children: (0, c.jsx)(il, {
                                                                presentation: et,
                                                                className: (0, d.$)(ri().player, { [ri().player_hidden]: eP }),
                                                                albumCoverClassName: (0, d.$)(ri().albumCover, { [ri().albumCover_hidden]: eT }),
                                                            }),
                                                        }),
                                                    }),
                                                    ek &&
                                                        (0, c.jsx)('div', {
                                                            className: (0, d.$)(ri().words, { [ri().words_hidden]: eT, [ri().words_mobile]: E }),
                                                            'aria-hidden': eT,
                                                            inert: eT,
                                                            children: (0, c.jsx)(aE, { trackId: null == (C = T.entityMeta) ? void 0 : C.id }),
                                                        }),
                                                    !w.hasPlus && (0, c.jsx)(rl, { className: ri().freemiumBlock }),
                                                ],
                                            }),
                                            (0, c.jsx)(a4, { onRestoreFocus: N.restoreFocus }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                rd = (0, u.PA)((e) => {
                    var t, i;
                    let { withVideoModal: n } = e,
                        {
                            main: a,
                            user: r,
                            words: s,
                            experiments: o,
                            releaseNotes: l,
                            // for PulseSync: BEGIN access track quality in the wave header
                            quality: pulseSyncQuality,
                            // for PulseSync: END access track quality in the wave header
                            fullscreenVideoPlayer: u,
                            sonataState: { entityMeta: _ },
                            settings: { isMobile: S },
                        } = (0, U.g)(),
                        { formatMessage: E } = (0, b.A)(),
                        w = (0, eU.B)(),
                        { contentScrollRef: B, setContentScrollRef: O } = (0, ed.g)(),
                        [M, R] = (0, y.d)(),
                        L = (0, eS.d)(),
                        V = (0, eI.C)(),
                        { theme: D } = (0, eK.W)(),
                        // for PulseSync: BEGIN enable the new wave page variant without server experiment gating
                        W = true,
                        // for PulseSync: END enable the new wave page variant without server experiment gating
                        F = (0, ez.Z)(null != (i = null == (t = a.specialHeader) ? void 0 : t.url) ? i : ''),
                        H = o.checkExperiment(z.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        { href: K } = (0, eY.u)('/slides/special/:campaignId', { params: { campaignId: 'summer_2026' } });
                    // for PulseSync: BEGIN wave badges for remote playback, WASAPI output and track quality
                    let pulseSyncQualityPlayer = (0, ts.e)(),
                        pulseSyncShowAudioQualityOnNewWaveSettingKey = 'modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave',
                        [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, m.useState)(window.isRemoteDeviceConnected ?? !1),
                        [remoteDevice, setRemoteDevice] = (0, m.useState)(window.remoteDevice ?? null),
                        [pulseSyncTrackQualityInfo, setPulseSyncTrackQualityInfo] = (0, m.useState)(window?.PulseSyncTrackQuality?.getLastInfo?.() ?? null),
                        [pulseSyncWasapiExclusiveOutputState, setPulseSyncWasapiExclusiveOutputState] = (0, m.useState)(null),
                        [pulseSyncShowAudioQualityOnNewWave, setPulseSyncShowAudioQualityOnNewWave] = (0, m.useState)(
                            () => window.nativeSettings?.get?.(pulseSyncShowAudioQualityOnNewWaveSettingKey) !== !1,
                        );
                    (0, m.useEffect)(() => {
                        let disposed = !1,
                            formatRevision = 0,
                            currentFormat = null;
                        const currentEntity = pulseSyncQualityPlayer?.state?.queueState?.currentEntity,
                            readDownloadInfo = () => currentEntity?.value?.entity?.mediaSourceData?.data;
                        const updatePulseSyncTrackQualityInfo = (format) => {
                            currentFormat = format;
                            setPulseSyncTrackQualityInfo(window?.PulseSyncTrackQuality?.updateFromFormat?.(format, readDownloadInfo()) ?? null);
                        };
                        const refreshTrackQuality = () => {
                            formatRevision++;
                            updatePulseSyncTrackQualityInfo(null);
                        };
                        const unsubscribeTrack = currentEntity?.onChange?.(refreshTrackQuality);
                        const unsubscribePlayback = pulseSyncQualityPlayer?.state?.playerState?.status?.onChange?.(() => {
                            updatePulseSyncTrackQualityInfo(currentFormat);
                        });
                        refreshTrackQuality();
                        const initialFormatRevision = formatRevision;
                        window?.nativeAudioOutput
                            ?.getYaspAudioFormat?.()
                            ?.then?.((format) => {
                                if (!disposed && formatRevision === initialFormatRevision) updatePulseSyncTrackQualityInfo(format);
                            })
                            ?.catch?.(() => {});
                        const unsubscribe = window.musicDesktop?.pulsesync.audio.onFormatChanged?.((format) => {
                            formatRevision++;
                            updatePulseSyncTrackQualityInfo(format);
                        });
                        return () => {
                            disposed = !0;
                            if (typeof unsubscribeTrack === 'function') unsubscribeTrack();
                            if (typeof unsubscribePlayback === 'function') unsubscribePlayback();
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, [pulseSyncQualityPlayer]);
                    (0, m.useEffect)(() => {
                        const updatePulseSyncWasapiExclusiveOutputState = (state) => {
                            setPulseSyncWasapiExclusiveOutputState(state ?? null);
                        };
                        window?.nativeAudioOutput
                            ?.getWasapiExclusiveStatus?.()
                            ?.then?.((status) => {
                                updatePulseSyncWasapiExclusiveOutputState(status?.outputState ?? null);
                            })
                            ?.catch?.(() => {});
                        const unsubscribe = window.musicDesktop?.pulsesync.audio.onWasapiStateChanged?.((state) => {
                            updatePulseSyncWasapiExclusiveOutputState(state);
                        });
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const updatePulseSyncShowAudioQualityOnNewWave = (key, value) => {
                            if (key === pulseSyncShowAudioQualityOnNewWaveSettingKey) {
                                setPulseSyncShowAudioQualityOnNewWave(value !== !1);
                            }
                        };
                        const unsubscribe = window.musicDesktop?.pulsesync.settings.onChange?.(updatePulseSyncShowAudioQualityOnNewWave);
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        let e = (device_info) => {
                                (setIsRemoteDeviceConnected(!0),
                                    setRemoteDevice(device_info),
                                    (window.isRemoteDeviceConnected = !0),
                                    (window.remoteDevice = device_info));
                            },
                            t = () => {
                                (setIsRemoteDeviceConnected(!1), setRemoteDevice(null), (window.isRemoteDeviceConnected = !1), (window.remoteDevice = null));
                            };
                        return (
                            (window.onRemoteDeviceConnected || (window.onRemoteDeviceConnected = [])).push(e),
                            (window.onRemoteDeviceDisconnected || (window.onRemoteDeviceDisconnected = [])).push(t),
                            () => {
                                ((window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((t) => t !== e)),
                                    (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((e) => e !== t)));
                            }
                        );
                    }, []);
                    const deviceTypeMap = {
                            UNSPECIFIED: 'Неизвестного устройства',
                            WEB: 'Сайта',
                            ANDROID: 'Android приложения',
                            IOS: 'IOS приложения',
                            SMART_SPEAKER: 'Умной колонки',
                            WEB_TV: 'ТВ',
                            ANDROID_TV: 'Android ТВ',
                            APPLE_TV: 'Apple ТВ',
                            ANDROID_WEAR: 'Android часов',
                            WEB_DESKTOP: 'ПК приложения',
                        },
                        pulseSyncWasapiIsActive =
                            (null == pulseSyncWasapiExclusiveOutputState ? void 0 : pulseSyncWasapiExclusiveOutputState.active) === !0 ||
                            (null == pulseSyncWasapiExclusiveOutputState || null == pulseSyncWasapiExclusiveOutputState.session
                                ? void 0
                                : pulseSyncWasapiExclusiveOutputState.session.state) === 'running',
                        pulseSyncYnisonBubble = (0, m.useMemo)(() => {
                            if (!isRemoteDeviceConnected) return null;
                            const remoteControlText = `Управление с ${deviceTypeMap?.[remoteDevice?.info?.type] ?? ''}: ${remoteDevice?.info?.title ?? ''}`;
                            return (0, c.jsx)(C.$, {
                                color: 'secondary',
                                radius: 'xl',
                                'aria-label': remoteControlText,
                                className: eJ().beta,
                                style: {
                                    marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                    color: 'white',
                                },
                                withHover: !1,
                                children: (0, c.jsx)(T.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: remoteControlText,
                                }),
                            });
                        }, [isRemoteDeviceConnected, remoteDevice?.info?.type, remoteDevice?.info?.title, deviceTypeMap]),
                        pulseSyncAudioQualityBubble = (0, m.useMemo)(() => {
                            return (null == pulseSyncTrackQualityInfo ? void 0 : pulseSyncTrackQualityInfo.label) &&
                                (pulseSyncShowAudioQualityOnNewWave || pulseSyncWasapiIsActive)
                                ? (0, c.jsx)(C.$, {
                                      color: 'secondary',
                                      radius: 'xl',
                                      type: 'button',
                                      'aria-label': 'Качество трека: '.concat(pulseSyncTrackQualityInfo.label),
                                      'aria-haspopup': 'dialog',
                                      title: E({
                                          id: 'player-actions.audio-quality',
                                      }),
                                      onClick: pulseSyncQuality.modal.open,
                                      className: eJ().beta,
                                      style: {
                                          marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                          color: 'white',
                                          cursor: 'pointer',
                                      },
                                      withHover: !1,
                                      children: (0, c.jsx)(T.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: pulseSyncTrackQualityInfo.label,
                                      }),
                                  })
                                : null;
                        }, [pulseSyncTrackQualityInfo, pulseSyncShowAudioQualityOnNewWave, pulseSyncWasapiIsActive, pulseSyncQuality.modal.open, E]),
                        pulseSyncWasapiStateBubble = (0, m.useMemo)(
                            () =>
                                pulseSyncWasapiIsActive
                                    ? (0, c.jsx)(C.$, {
                                          color: 'secondary',
                                          radius: 'xl',
                                          'aria-label': 'WASAPI Exclusive активен',
                                          className: eJ().beta,
                                          style: {
                                              marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                              color: 'white',
                                          },
                                          withHover: !1,
                                          children: (0, c.jsx)(T.HL, {
                                              variant: 'div',
                                              type: 'text',
                                              size: 's',
                                              weight: 'medium',
                                              children: 'WASAPI Exclusive',
                                          }),
                                      })
                                    : null,
                            [pulseSyncWasapiIsActive],
                        ),
                        pulseSyncWasapiDeviceBubble = (0, m.useMemo)(() => {
                            let e =
                                (null == pulseSyncWasapiExclusiveOutputState ||
                                null == pulseSyncWasapiExclusiveOutputState.session ||
                                null == pulseSyncWasapiExclusiveOutputState.session.rendererState
                                    ? void 0
                                    : pulseSyncWasapiExclusiveOutputState.session.rendererState.deviceName) ??
                                (null == pulseSyncWasapiExclusiveOutputState ||
                                null == pulseSyncWasapiExclusiveOutputState.session ||
                                null == pulseSyncWasapiExclusiveOutputState.session.lastRendererServiceState
                                    ? void 0
                                    : pulseSyncWasapiExclusiveOutputState.session.lastRendererServiceState.deviceName) ??
                                null;
                            return pulseSyncWasapiIsActive && e
                                ? (0, c.jsx)(C.$, {
                                      color: 'secondary',
                                      radius: 'xl',
                                      'aria-label': 'Устройство WASAPI Exclusive: '.concat(e),
                                      title: e,
                                      className: eJ().beta,
                                      style: {
                                          marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                          color: 'white',
                                          maxWidth: '15rem',
                                          overflow: 'hidden',
                                      },
                                      withHover: !1,
                                      children: (0, c.jsx)(T.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          style: {
                                              maxWidth: '100%',
                                              overflow: 'hidden',
                                              textOverflow: 'ellipsis',
                                              whiteSpace: 'nowrap',
                                          },
                                          children: e,
                                      }),
                                  })
                                : null;
                        }, [pulseSyncWasapiExclusiveOutputState, pulseSyncWasapiIsActive]);
                    // for PulseSync: END wave badges for remote playback, WASAPI output and track quality
                    ((0, m.useEffect)(() => {
                        var e, t;
                        if (!n || !L) return;
                        let i = (0, eq.j)(),
                            pulseSyncMigration_n_26 = null != (e = null == i ? void 0 : i.get(eX.K.IDS)) ? e : null,
                            r = null != (t = null == i ? void 0 : i.get(eX.K.ACTIVE_INDEX)) ? t : null,
                            { clipIds: s, activeClipIndex: o } = (0, eN.V)(pulseSyncMigration_n_26, r);
                        (V(s, o), u.setOpenedFromMain());
                    }, [n, L, u, V]),
                        (0, m.useEffect)(
                            () => () => {
                                (a.reset(), W || a.landing.reset());
                            },
                            [a, a.landing, W],
                        ),
                        (0, eF.J)(a.landing.isResolved));
                    let X = o.checkExperiment(z.z.WebNextDisableVibe, 'on'),
                        Y = (0, f.c)(() => {
                            l.isReady && l.modal.open();
                        }),
                        q = (0, m.useMemo)(() => (X ? { 'margin-block-start': '1vh' } : {}), [X]),
                        G = (0, m.useMemo)(() => {
                            if (o.checkExperiment(z.z.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = o.checkExperiment(z.z.WebNextBetaLabel, 'version'),
                                    t = E({ id: 'desktop.app-version' }, { version: w }),
                                    i = e ? w : 'Beta';
                                return (0, c.jsxs)(N.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, c.jsx)(C.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, d.$)(eJ().beta, { [eJ().beta_withReleaseNotes]: l.isReady }),
                                            onClick: Y,
                                            'data-test-id': g.Xk.main.RELEASE_NOTES_BUTTON,
                                            children: (0, c.jsx)(T.HL, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                        }),
                                        (0, c.jsx)(N.ZI, { children: w }),
                                    ],
                                });
                            }
                        }, [o, E, Y, l.isReady, w]),
                        $ = (0, m.useMemo)(
                            () =>
                                H
                                    ? (0, c.jsx)(e2, {
                                          href: K,
                                          imageSrc: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a7d54bea0c2131932ceea77/orig',
                                          children: (0, c.jsx)(v.A, { id: 'page.summer_2026_title' }),
                                      })
                                    : null,
                            [H, K],
                        ),
                        Z = (0, d.$)(eJ().betaSlot, { [eJ().betaSlot_newVibe]: W }),
                        J = (0, m.useMemo)(() => {
                            if (!a.specialHeader) return {};
                            let e = D === eH.S.Light ? a.specialHeader.lightTheme : a.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [a.specialHeader, D]),
                        Q = (0, A.L)(() => {
                            let e = o.checkExperiment(z.z.WebNextRewind2024, 'on');
                            return a.specialHeader
                                ? (0, c.jsxs)('div', {
                                      className: eJ().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, c.jsx)(j._V, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: eJ().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, c.jsx)(C.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: eJ().specialHeader,
                                              withHover: !1,
                                              style: J,
                                              onClick: F,
                                              children: a.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        ee = (0, A.L)(() =>
                            W
                                ? null
                                : o.checkExperiment(z.z.WebNextFooterDisclaimer, 'on')
                                  ? (0, c.jsx)(eG.w, { className: eJ().footer })
                                  : (0, c.jsx)(e$.A, { children: (0, c.jsx)(eG.w, { className: eJ().footer }) }),
                        ),
                        et = (0, f.c)(() => {
                            if (!a.landing.isLoaded) return;
                            let e = r.isAuthorized ? x.p.MAIN : x.p.MAIN_NOLOGIN;
                            return a.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        }),
                        ei = (0, f.c)(() => {
                            if (a.landing.isLoaded) return a.landing.getSkeleton({ id: x.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, eT.y)(ei), a.landing.isNeededToLoad && !W)) {
                        let e = r.isAuthorized ? x.p.MAIN : x.p.MAIN_NOLOGIN,
                            t = [a.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }), a.getSpecialHeader()];
                        (0, m.use)(Promise.allSettled(t));
                    }
                    n && !L && (0, h.notFound)();
                    let en = (0, A.L)(() =>
                        W
                            ? (0, c.jsx)(eW.n, {
                                  pageId: eL._Q.WAVE_LANDING_SCREEN,
                                  pageEntityId: null == _ ? void 0 : _.id,
                                  children: (0, c.jsx)(eD.j, {
                                      children: (0, c.jsxs)('div', {
                                          className: eJ().vibeWidgetContainer,
                                          'data-test-id': g.Xk.main.MAIN_PAGE,
                                          children: [
                                              (0, c.jsxs)('div', {
                                                  className: (0, d.$)(eJ().actionsBar, {
                                                      [eJ().actionsBar_desktop]: p.NN,
                                                      [eJ().actionsBar_hidden]: s.bigCardPanel.isOpened,
                                                  }),
                                                  'aria-hidden': s.bigCardPanel.isOpened,
                                                  children: [S && (0, c.jsx)(eE.F, { withMeta: !1, variant: 'mobile', className: eJ().userProfile }), $],
                                              }),
                                              (0, c.jsx)(rc, {}),
                                              // for PulseSync: BEGIN render remote playback, WASAPI and track quality wave badges
                                              (0, c.jsxs)('div', {
                                                  className: Z,
                                                  children: [
                                                      pulseSyncYnisonBubble,
                                                      pulseSyncWasapiStateBubble,
                                                      pulseSyncWasapiDeviceBubble,
                                                      pulseSyncAudioQualityBubble,
                                                      G,
                                                  ],
                                              }),
                                              // for PulseSync: END render remote playback, WASAPI and track quality wave badges
                                          ],
                                      }),
                                  }),
                              })
                            : (0, c.jsx)(eW.n, {
                                  pageId: eL._Q.HOME,
                                  children: (0, c.jsx)(eP.h, {
                                      scrollElement: B,
                                      headerElement: M,
                                      children: (0, c.jsxs)(k.N, {
                                          className: eJ().root,
                                          containerClassName: eJ().content,
                                          ref: O,
                                          'data-test-id': g.Xk.main.MAIN_PAGE,
                                          children: [
                                              Q,
                                              // for PulseSync: BEGIN render WASAPI and track quality wave badges
                                              (0, c.jsxs)('div', {
                                                  className: Z,
                                                  children: [pulseSyncWasapiStateBubble, pulseSyncWasapiDeviceBubble, pulseSyncAudioQualityBubble, G],
                                              }),
                                              // for PulseSync: END render WASAPI and track quality wave badges
                                              !X &&
                                                  (0, c.jsx)(eV.F, {
                                                      blockIdForFrom: eR.h.RUP_MAIN_RADIO,
                                                      blockId: eM.U.RUP,
                                                      blockType: eM.U.RUP,
                                                      blockPosX: 0,
                                                      blockPosY: 0,
                                                      objectsCount: 0,
                                                      children: (0, c.jsx)(ej, { className: eJ().vibe }),
                                                  }),
                                              (0, c.jsx)(P.E, {
                                                  landing: a.landing,
                                                  headerConcealerComponent: (0, c.jsx)('div', { ref: R }),
                                                  errorComponent: (0, c.jsx)(I.SomethingWentWrong, { className: eJ().error, withBackwardControl: !1 }),
                                                  containerClassName: eJ().landing,
                                                  containerStyle: q,
                                                  tabWithHeadingTitle: !0,
                                                  tabWithCovers: !0,
                                                  tabWithSubtitle: !0,
                                              }),
                                              ee,
                                          ],
                                      }),
                                  }),
                              }),
                    );
                    return (0, c.jsxs)(ew.r, { page: eB.l.HOME_SCREEN, places: [eO.R.MY_WAVE], children: [en, (0, c.jsx)(ek.p, { onFinishSuccess: et })] });
                });
        },
        25555: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => u });
            var n = i(88800),
                a = i(53548),
                r = i(2058),
                s = i(29993),
                o = i(66943),
                l = i(29595),
                c = i(74965),
                d = i(72288);
            let u = (e) => {
                let { action: t, notification: i } = e,
                    {
                        user: u,
                        settings: { isMobile: m },
                    } = (0, d.g)(),
                    { formatMessage: _ } = (0, r.A)(),
                    { notify: b } = (0, c.l)(),
                    v = (0, a.useRef)(!1);
                return (0, s.c)(async () => {
                    if (!u.isAuthorized) return void b((0, n.jsx)(o.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (!v.current) {
                        v.current = !0;
                        try {
                            (await t())
                                ? m || b(i, { containerId: l.u.INFO })
                                : b((0, n.jsx)(o.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                        } finally {
                            v.current = !1;
                        }
                    }
                });
            };
        },
        25871: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        33355: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var n = i(29993),
                a = i(72288),
                r = i(97956);
            let s = () => {
                let { experiments: e, user: t, wizard: i, sonataState: s } = (0, a.g)(),
                    o = i.isAvailable && e.checkExperiment(r.z.WebNextNewWaveWizard, 'on'),
                    l = o && t.hasPlus && t.settings.showWizard && !s.entityMeta,
                    c = (0, n.c)(() => !!l && (i.introModal.open(), !0)),
                    d = (0, n.c)(() => {
                        o && i.introModal.open();
                    });
                return { isEnabled: o, shouldOpenIntroFromPlay: l, openIntroModalFromPlay: c, openWizard: d };
            };
        },
        34375: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                bigCardPanel: 'VibePage_bigCardPanel__RwmQ5',
                meta: 'VibePage_meta__kWwRE',
                context: 'VibePage_context__CoYut',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                bigCardPanelBackground: 'VibePage_bigCardPanelBackground__fr_gE',
                bigCardPanelBackground_visible: 'VibePage_bigCardPanelBackground_visible__QbEy5',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                entityMetaBody_mobile: 'VibePage_entityMetaBody_mobile__xT3M1',
                entityMetaBody_hidden: 'VibePage_entityMetaBody_hidden__4_ZfY',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                bigCardPanel_opened: 'VibePage_bigCardPanel_opened__zs_Tl',
                textContainer: 'VibePage_textContainer__odK0M',
                context_mobile: 'VibePage_context_mobile__w0tfB',
                context_hidden: 'VibePage_context_hidden__8NtHL',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                player_hidden: 'VibePage_player_hidden__pPWGJ',
                player: 'VibePage_player__i4MeM',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                playerBlock_shifted: 'VibePage_playerBlock_shifted__afwnY',
                albumCover: 'VibePage_albumCover__dHtVi',
                albumCover_hidden: 'VibePage_albumCover_hidden__qcSqu',
                words: 'VibePage_words__39Mii',
                words_mobile: 'VibePage_words_mobile__fxtu0',
                words_hidden: 'VibePage_words_hidden__4_uEt',
                wheel: 'VibePage_wheel__E_p8_',
                wheel_hidden: 'VibePage_wheel_hidden__Yd8xW',
                textContainer_playing: 'VibePage_textContainer_playing__xJphv',
            };
        },
        37880: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelContent_root__X1SOG',
                lumen: 'WordsBigCardPanelContent_lumen__BjuEA',
                lumen_mobile: 'WordsBigCardPanelContent_lumen_mobile__AUxXt',
                contentStack: 'WordsBigCardPanelContent_contentStack__ntqdP',
                contentStack_mobile: 'WordsBigCardPanelContent_contentStack_mobile__UYLbo',
                contentLayer: 'WordsBigCardPanelContent_contentLayer__cdB9J',
                contentLayer_visible: 'WordsBigCardPanelContent_contentLayer_visible__yppQy',
                content: 'WordsBigCardPanelContent_content__GIIoE',
                textContainer: 'WordsBigCardPanelContent_textContainer__R5onX',
                textContainer_hidden: 'WordsBigCardPanelContent_textContainer_hidden__Bz79u',
                contentMotion: 'WordsBigCardPanelContent_contentMotion__ltpFF',
                action: 'WordsBigCardPanelContent_action__qwVs5',
                feedbackButtons: 'WordsBigCardPanelContent_feedbackButtons__kzT5Y',
                feedback: 'WordsBigCardPanelContent_feedback__bAIGa',
                feedbackMessage: 'WordsBigCardPanelContent_feedbackMessage__s2APT',
                controlsMotion: 'WordsBigCardPanelContent_controlsMotion__t1B1D',
                closeIcon: 'WordsBigCardPanelContent_closeIcon__u7C2z',
                closeIcon_mobile: 'WordsBigCardPanelContent_closeIcon_mobile__DcdRR',
                closeButton: 'WordsBigCardPanelContent_closeButton__qgbyc',
                closeButton_mobile: 'WordsBigCardPanelContent_closeButton_mobile__kI2FS',
                sources: 'WordsBigCardPanelContent_sources__rrt5c',
                sources_hidden: 'WordsBigCardPanelContent_sources_hidden__cFbrG',
                contentArea: 'WordsBigCardPanelContent_contentArea__nzOu_',
                contentArea_mobile: 'WordsBigCardPanelContent_contentArea_mobile__hFChP',
                contentArea_feedback: 'WordsBigCardPanelContent_contentArea_feedback__QBVpK',
                cardContent: 'WordsBigCardPanelContent_cardContent__1R3U_',
                shimmer: 'WordsBigCardPanelContent_shimmer__jPakx',
                disclaimer: 'WordsBigCardPanelContent_disclaimer__bWpjy',
                disclaimer_mobile: 'WordsBigCardPanelContent_disclaimer_mobile__zIUTh',
            };
        },
        42205: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            let n = (e, t) => {
                let i = Number(t);
                return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
            };
        },
        48404: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { a: () => n }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(n || (n = {})));
        },
        50681: (e) => {
            e.exports = {
                scrollingTrackName: 'VibePlayerbarTrackName_scrollingTrackName__CU2P_',
                trackNameText_multiline: 'VibePlayerbarTrackName_trackNameText_multiline__6zrzu',
                trackNameText: 'VibePlayerbarTrackName_trackNameText__lWQBn',
            };
        },
        51147: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        51363: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            let n = (e) => {
                var t, i, n, a, r, s;
                let o = null == (t = e.available) || t,
                    l = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((o = null == (r = null == (n = e.contentRestrictions) ? void 0 : n.available) || r),
                        (l = null != (s = null == (a = e.contentRestrictions) ? void 0 : a.disclaimers) ? s : [])),
                    { available: o, disclaimers: l }
                );
            };
        },
        53301: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var n = i(42205);
            let a = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let i = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    a = (0, n.z)(i, t);
                return { clipIds: i, activeClipIndex: a };
            };
        },
        53845: (e) => {
            e.exports = {
                root: 'VibeContextButton_root__v5s9n',
                staticContext: 'VibeContextButton_staticContext__0CMKs',
                triggerContainer: 'VibeContextButton_triggerContainer__WpSRT',
                triggerContainer_hidden: 'VibeContextButton_triggerContainer_hidden___Ul2b',
                trigger: 'VibeContextButton_trigger___2s5g',
                label: 'VibeContextButton_label__4XZl3',
                arrow: 'VibeContextButton_arrow__p7g4L',
                arrow_open: 'VibeContextButton_arrow_open__hatJQ',
                resetButton: 'VibeContextButton_resetButton___AVuW',
                menu: 'VibeContextButton_menu__LBKK7',
                shareMenu: 'VibeContextButton_shareMenu__cSmec',
                menuItem: 'VibeContextButton_menuItem__ZdYMs',
                menuItem_active: 'VibeContextButton_menuItem_active__eVy8T',
                menu_touch: 'VibeContextButton_menu_touch__Z_sBE',
                menuItemIcon: 'VibeContextButton_menuItemIcon__6KW3o',
            };
        },
        53961: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        54152: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            let n = function (e) {
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
        },
        56194: (e) => {
            e.exports = {
                root: 'WordsBigCardPanel_root__sOTFq',
                root_mobile: 'WordsBigCardPanel_root_mobile__G4xsF',
                enter: 'WordsBigCardPanel_enter__etXny',
                enter_active: 'WordsBigCardPanel_enter_active__03VXN',
                exit: 'WordsBigCardPanel_exit__UGMAh',
                exit_active: 'WordsBigCardPanel_exit_active__3eAPR',
            };
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var n = i(4086),
                a = i(41928);
            let r = () => {
                let e = (0, a.N)(),
                    t = e.get(n.$I),
                    i = e.get(n.EN),
                    r = e.get(n.N1),
                    s = e.get(n._1),
                    o = e.get(n.V3),
                    l = e.get(n.Lb),
                    c = e.get(n.wK),
                    d = e.get(n.tz),
                    u = e.get(n.$8),
                    m = e.get(n.Oo),
                    _ = e.get(n.X4),
                    b = e.get(n.O9),
                    v = e.get(n.E),
                    p = e.get(n.wH),
                    h = e.get(n.ok),
                    g = e.get(n.X8),
                    x = e.get(n.yq),
                    f = e.get(n.NN),
                    y = e.get(n.qN),
                    A = e.get(n.ro),
                    C = e.get(n.nM),
                    j = e.get(n.Ut),
                    k = e.get(n.K1),
                    N = e.get(n.eu),
                    T = e.get(n.SD),
                    P = e.get(n.aE),
                    I = e.get(n.ki),
                    S = e.get(n.c9),
                    E = e.get(n.en),
                    w = e.get(n.jQ),
                    B = e.get(n.cZ),
                    O = e.get(n.Zl),
                    M = e.get(n.CN),
                    R = e.get(n.P1),
                    L = e.get(n.zj),
                    V = e.get(n.re),
                    D = e.get(n.JM),
                    W = e.get(n.Lk),
                    F = e.get(n.$$),
                    U = e.get(n.sv),
                    z = e.get(n.gd),
                    H = e.get(n.Ez),
                    K = e.get(n.u2),
                    X = e.get(n.TD),
                    Y = e.get(n.dh),
                    q = e.get(n.LC),
                    G = e.get(n.PL),
                    $ = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: r,
                    usersResource: s,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: m,
                    topResource: _,
                    artistsResource: b,
                    slidesResource: v,
                    redAlertResource: p,
                    rotorResource: h,
                    waveResource: g,
                    searchResource: x,
                    searchPlaylistResource: f,
                    playlistResource: y,
                    playlistsResource: A,
                    pinResource: C,
                    metatagsResource: j,
                    tagResource: k,
                    feedResource: N,
                    wizard3Resource: T,
                    pinsResource: P,
                    musicHistoryResource: I,
                    dynamicPagesResource: S,
                    chartResource: E,
                    clipsResource: w,
                    lyricViewsResource: B,
                    nonMusicResource: O,
                    donationResource: M,
                    loaderResource: R,
                    lumenResource: L,
                    prefixlessResource: V,
                    streamsResource: D,
                    filtersResource: W,
                    ugcResource: F,
                    collectionResource: U,
                    adsResource: z,
                    personalResource: H,
                    familyResource: K,
                    childrenLandingResource: X,
                    promoResource: Y,
                    telemetryResource: q,
                    labelsResource: G,
                    concertsResource: $,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        58495: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            let n = (e, t) => ''.concat(e, ':').concat(t);
        },
        59064: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        60492: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                button_play: 'VibePlayerBar_button_play__vx8Ni',
                button_standalone: 'VibePlayerBar_button_standalone__xaTBg',
                standalonePlayButtonIcon: 'VibePlayerBar_standalonePlayButtonIcon__kvJ9z',
                playButtonIcon: 'VibePlayerBar_playButtonIcon__ShYm1',
                playButton: 'VibePlayerBar_playButton__rzsIr',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        66522: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                actionsBar: 'MainPage_actionsBar__agoxp',
                actionsBar_desktop: 'MainPage_actionsBar_desktop__zctj6',
                actionsBar_hidden: 'MainPage_actionsBar_hidden__6ik4S',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        67758: (e) => {
            e.exports = {
                root: 'WordsCardFullscreen_root__CiG4W',
                modalContent: 'WordsCardFullscreen_modalContent__1SYUO',
                closeButtonWrapper: 'WordsCardFullscreen_closeButtonWrapper__iH_IT',
                layout: 'WordsCardFullscreen_layout__KJMiD',
                contentArea: 'WordsCardFullscreen_contentArea__CKea4',
                contentArea_withMessageScroll: 'WordsCardFullscreen_contentArea_withMessageScroll__td5cI',
                content: 'WordsCardFullscreen_content__JA2fN',
                messageScroll: 'WordsCardFullscreen_messageScroll__uUYjh',
                message: 'WordsCardFullscreen_message__UmEx9',
                messageScroll_scrollable: 'WordsCardFullscreen_messageScroll_scrollable__CfU_t',
                primaryAction: 'WordsCardFullscreen_primaryAction__HxPI9',
                actions: 'WordsCardFullscreen_actions__cT5Cp',
                sourceItem: 'WordsCardFullscreen_sourceItem__WL48h',
                sourceItem_withoutIcon: 'WordsCardFullscreen_sourceItem_withoutIcon__os6rv',
                sourceIcon: 'WordsCardFullscreen_sourceIcon__IDX9f',
                actionText: 'WordsCardFullscreen_actionText__09dJk',
                feedback: 'WordsCardFullscreen_feedback__E7bsR',
                feedbackButton: 'WordsCardFullscreen_feedbackButton__HwM10',
                feedbackButton_active: 'WordsCardFullscreen_feedbackButton_active__fE5dO',
                feedbackDivider: 'WordsCardFullscreen_feedbackDivider__xBnSf',
                disclaimer: 'WordsCardFullscreen_disclaimer__NTfeR',
            };
        },
        69515: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelText_root__TU85D',
                root_withTopFade: 'WordsBigCardPanelText_root_withTopFade__2ngjw',
                root_withBottomFade: 'WordsBigCardPanelText_root_withBottomFade__OFuZ7',
            };
        },
        69850: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        71066: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelSourceButtons_root__RmVWO',
                icon: 'WordsBigCardPanelSourceButtons_icon__kUrTX',
                title: 'WordsBigCardPanelSourceButtons_title__OAZar',
            };
        },
        73171: (e, t, i) => {
            'use strict';
            i.d(t, { mf: () => l });
            var n,
                a = i(53548),
                r = {
                    810: (e) => {
                        e.exports = n || (n = i.t(a, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useDynamicText = o.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var i = s[t];
                        if (void 0 !== i) return i.exports;
                        var n = (s[t] = { exports: {} });
                        return (r[t](n, n.exports, e), n.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    i = (e, t, i, n, a, r) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(n, 'px')), e.style.setProperty('--dynamic-line-height', String(a)));
                        let s = 'number' == typeof r ? e.scrollHeight <= Math.min(r * n * a, i) + 1 : e.scrollHeight <= i + 1,
                            o = e.scrollWidth <= t + 1;
                        return s && o;
                    },
                    n = (e) => {
                        let { container: n, containerWidth: a, containerHeight: r, minFontSize: s, maxFontSize: o, lineHeight: l, maxLines: c, styleVariants: d } = e,
                            u = ((e, i, n) => {
                                let a = e.cloneNode(!0);
                                return (
                                    (a.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            i,
                                            'px !important;\n    ',
                                        )),
                                    t(a),
                                    a.style.setProperty('--dynamic-line-height', String(n)),
                                    document.body.appendChild(a),
                                    a
                                );
                            })(n, a, l);
                        try {
                            if (null == d ? void 0 : d.length) {
                                var m;
                                let e = [...d].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (m = e[e.length - 1]) ? m : { fontSize: s, lineHeight: l };
                                for (let t of e) if (i(u, a, r, t.fontSize, t.lineHeight, c)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = s,
                                t = o,
                                n = null;
                            for (; e <= t;) {
                                let s = Math.floor((e + t) / 2);
                                i(u, a, r, s, l, c) ? ((n = s), (e = s + 1)) : (t = s - 1);
                            }
                            if (null === n) return { fontSize: s, lineHeight: l, fits: !1 };
                            return { fontSize: Math.max(s, n - 1), lineHeight: l, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((o.findOptimalFontSize = (e) => n(e).fontSize),
                    (o.useDynamicText = (t, i, a) => {
                        let { minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l, fallbackMaxLines: c, styleVariants: d } = i;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(o));
                            let e = () => {
                                    let e = t.clientWidth,
                                        i = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === i || !u) return;
                                    let {
                                        maxLines: m,
                                        fontSize: _,
                                        lineHeight: b,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: i } = e,
                                            a = n({ ...e, maxLines: i });
                                        if (void 0 === t || a.fits) return { maxLines: i, fontSize: a.fontSize, lineHeight: a.lineHeight };
                                        let r = n({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: i,
                                        minFontSize: r,
                                        maxFontSize: s,
                                        lineHeight: o,
                                        maxLines: l,
                                        fallbackMaxLines: c,
                                        styleVariants: d,
                                    });
                                    (null == a || a(m),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(_, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(b)));
                                },
                                i = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                i.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (i.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, a, c, o, s, l, r, d]);
                    }));
            })(),
                o.__esModule,
                o.findOptimalFontSize);
            var l = o.useDynamicText;
        },
        74025: (e) => {
            e.exports = { message: 'ShareVibeSuccessNotification_message__JVKmQ', icon: 'ShareVibeSuccessNotification_icon__2J1RT' };
        },
        74567: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var n = i(9519),
                a = i(93609),
                r = i(81969);
            class s {
                async openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                async deleteDatabase() {
                    let { dbName: e } = this.config;
                    return window.indexedDB
                        .databases()
                        .then((t) => (t.find((t) => e === t.name) ? new r.h(e).deleteDB({ onBlocked: a.A }) : Promise.resolve()))
                        .catch(a.A);
                }
                async executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((i) => (i ? e(i) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                async openIdb(e) {
                    let { dbName: t, dbVersion: i, onUpgrade: n } = this.config;
                    try {
                        let a = await new r.h(t).openDB(i, {
                            onBlocked: (t, i, n) => {
                                var a;
                                null == e || null == (a = e.onBlocked) || a.call(e, t, i, n);
                            },
                            onTerminated: () => {
                                var t;
                                null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                n(e);
                            },
                        });
                        return ((this.idbIsAvailable = !0), a);
                    } catch (e) {
                        this.idbIsAvailable = !1;
                    }
                }
                async closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch(a.A)
                        : Promise.resolve();
                }
                constructor(e) {
                    ((0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'idb', void 0),
                        (0, n._)(this, 'idbIsAvailable', void 0),
                        (this.config = e),
                        (this.idbIsAvailable = !1));
                }
            }
        },
        75042: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                lumenAvatar: 'WordsCard_lumenAvatar__ifelA',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        76533: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        78429: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        81933: (e) => {
            e.exports = {
                root: 'WordsCardFullscreenShimmer_root__QYKVQ',
                topGroup: 'WordsCardFullscreenShimmer_topGroup__wA7gB',
                line: 'WordsCardFullscreenShimmer_line__5pJmz',
                topLinePrimary: 'WordsCardFullscreenShimmer_topLinePrimary__EZtz5',
                topLineSecondary: 'WordsCardFullscreenShimmer_topLineSecondary___ov_Y',
                main: 'WordsCardFullscreenShimmer_main__QGRY4',
                mainLine: 'WordsCardFullscreenShimmer_mainLine__alNOP',
                bottom: 'WordsCardFullscreenShimmer_bottom__1YoRA',
                bottomLine: 'WordsCardFullscreenShimmer_bottomLine__jTQt4',
            };
        },
        81969: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => b });
            var n = i(4161);
            class a {
                get delete() {
                    var e;
                    return null == (e = this.cursor.delete) ? void 0 : e.bind(this.cursor);
                }
                get update() {
                    var e;
                    return null == (e = this.cursor.update) ? void 0 : e.bind(this.cursor);
                }
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'key', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'direction', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'primaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'advance', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continuePrimaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.direction = e.direction),
                        (this.request = e.request),
                        (this.primaryKey = e.primaryKey),
                        (this.key = e.key),
                        (this.advance = e.advance.bind(e)),
                        (this.continue = e.continue.bind(e)),
                        (this.continuePrimaryKey = e.continuePrimaryKey.bind(e)));
                }
            }
            class r extends a {
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (super(e),
                        Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.value = e.value));
                }
            }
            var s = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class o {
                get(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.get(e);
                    });
                }
                getAll(e, t) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getKey(e);
                    });
                }
                count(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.count(e);
                    });
                }
                openCursor(e, t) {
                    return s(this, void 0, void 0, function* () {
                        let i = yield this.index.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                openKeyCursor(e, t) {
                    return s(this, void 0, void 0, function* () {
                        let i = yield this.index.openKeyCursor(e, t);
                        return i && new a(i);
                    });
                }
                [Symbol.asyncIterator]() {
                    return this.index[Symbol.asyncIterator]();
                }
                iterate(e, t) {
                    return this.index.iterate(e, t);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'index', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'multiEntry', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'unique', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.keyPath = e.keyPath),
                        (this.multiEntry = e.multiEntry),
                        (this.name = e.name),
                        (this.unique = e.unique));
                }
            }
            var l = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class c {
                get indexNames() {
                    return this.objectStore.indexNames;
                }
                get put() {
                    var e;
                    return null == (e = this.objectStore.put) ? void 0 : e.bind(this.objectStore);
                }
                get add() {
                    var e;
                    return null == (e = this.objectStore.add) ? void 0 : e.bind(this.objectStore);
                }
                get clear() {
                    var e;
                    return null == (e = this.objectStore.clear) ? void 0 : e.bind(this.objectStore);
                }
                get delete() {
                    var e;
                    return null == (e = this.objectStore.delete) ? void 0 : e.bind(this.objectStore);
                }
                createIndex(e, t, i) {
                    return this.objectStore.createIndex ? new o(this.objectStore.createIndex(e, t, i)) : null;
                }
                deleteIndex(e) {
                    return this.objectStore.deleteIndex(e);
                }
                count(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.count(e);
                    });
                }
                get(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.get(e);
                    });
                }
                getAll(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getKey(e);
                    });
                }
                index(e) {
                    return new o(this.objectStore.index(e));
                }
                openKeyCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openKeyCursor(e, t);
                        return i && new a(i);
                    });
                }
                openCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                iterate(e, t) {
                    return this.objectStore.iterate(e, t);
                }
                [Symbol.asyncIterator]() {
                    return this.objectStore[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (Object.defineProperty(this, 'objectStore', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'autoIncrement', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.autoIncrement = e.autoIncrement),
                        (this.keyPath = e.keyPath),
                        (this.name = e.name));
                }
            }
            class d {
                get error() {
                    return this.transaction.error;
                }
                get done() {
                    return this.transaction.done;
                }
                abort() {
                    return this.transaction.abort();
                }
                commit() {
                    return this.transaction.commit();
                }
                objectStore(e) {
                    return new c(this.transaction.objectStore(e));
                }
                addEventListener(e, t, i) {
                    return this.transaction.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    return this.transaction.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.transaction.onabort = e;
                }
                set onerror(e) {
                    this.transaction.onerror = e;
                }
                set oncomplete(e) {
                    this.transaction.oncomplete = e;
                }
                dispatchEvent(e) {
                    return this.transaction.dispatchEvent(e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'transaction', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'durability', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'mode', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'objectStoreNames', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.durability = e.durability),
                        (this.mode = e.mode),
                        (this.objectStoreNames = e.objectStoreNames));
                }
            }
            var u = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class m {
                get objectStoreNames() {
                    return this.database.objectStoreNames;
                }
                transaction(e, t, i) {
                    return new d(this.database.transaction(e, t, i));
                }
                createObjectStore(e, t) {
                    return new c(this.database.createObjectStore(e, t));
                }
                deleteObjectStore(e) {
                    return this.database.deleteObjectStore(e);
                }
                get(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.get(e, t);
                    });
                }
                getAll(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAll(e, t, i);
                    });
                }
                add(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.add(e, t, i);
                    });
                }
                put(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.put(e, t, i);
                    });
                }
                delete(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.delete(e, t);
                    });
                }
                clear(e) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.clear(e);
                    });
                }
                count(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.count(e, t);
                    });
                }
                getKey(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKey(e, t);
                    });
                }
                getAllKeys(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeys(e, t, i);
                    });
                }
                countFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.countFromIndex(e, t, i);
                    });
                }
                getFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getFromIndex(e, t, i);
                    });
                }
                getAllFromIndex(e, t, i, n) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllFromIndex(e, t, i, n);
                    });
                }
                getAllKeysFromIndex(e, t, i, n) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeysFromIndex(e, t, i, n);
                    });
                }
                getKeyFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKeyFromIndex(e, t, i);
                    });
                }
                addEventListener(e, t, i) {
                    this.database.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    this.database.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.database.onabort = e;
                }
                set onclose(e) {
                    this.database.onclose = e;
                }
                set onerror(e) {
                    this.database.onerror = e;
                }
                set onversionchange(e) {
                    this.database.onversionchange = e;
                }
                close() {
                    return this.database.close();
                }
                dispatchEvent(e) {
                    return this.database.dispatchEvent(e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'database', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.version = e.version),
                        (this.name = e.name));
                }
            }
            var _ = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class b {
                openDB(e) {
                    let { onBlocked: t, onBlocking: i, onTerminated: a, onUpgrade: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return _(this, void 0, void 0, function* () {
                        let s = yield (0, n.P2)(this.name, e, {
                            blocked: t,
                            blocking: i,
                            terminated: a,
                            upgrade: (e, t, i, n, a) => {
                                let s = new m(e);
                                null == r || r(s, t, i, new d(n), a);
                            },
                        });
                        return new m(s);
                    });
                }
                deleteDB(e) {
                    let { onBlocked: t } = e;
                    return _(this, void 0, void 0, function* () {
                        yield (0, n.MR)(this.name, { blocked: t });
                    });
                }
                constructor(e) {
                    Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: e });
                }
            }
        },
        82194: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        83210: (e, t, i) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            i.d(t, { B: () => n });
        },
        88943: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => a });
            var n = i(42078);
            let a = (e) => ''.concat(n._.ALBUM_ITEM).concat(e);
        },
        90437: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                sourceItem_withoutIcon: 'WordsCardPopoverMobile_sourceItem_withoutIcon__QM7Ht',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        91494: (e) => {
            e.exports = {
                collection: 'MultivibeContextMenu_collection__nO8Y5',
                description: 'MultivibeContextMenu_description__LGIHH',
                divider: 'MultivibeContextMenu_divider__NtH8V',
                loader: 'MultivibeContextMenu_loader__wfHPN',
                renameInput: 'MultivibeContextMenu_renameInput__yPN5R',
            };
        },
        92633: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                link: 'AlbumCover_link__5qqFN',
                cover: 'AlbumCover_cover__bif8b',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                cover_hiddenOnCompactPause: 'AlbumCover_cover_hiddenOnCompactPause__2BQxY',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
            };
        },
        93135: (e) => {
            e.exports = {
                root: 'PromoButton_root__kDDyz',
                caption: 'PromoButton_caption__p6nwX',
                imageContainer: 'PromoButton_imageContainer__XIwZc',
                image: 'PromoButton_image__S8uoV',
            };
        },
        94345: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        95147: (e) => {
            e.exports = {
                root: 'VibePlayerControls_root__qr97B',
                skipButton: 'VibePlayerControls_skipButton__z57B_',
                playButtonIcon: 'VibePlayerControls_playButtonIcon__OXCWN',
                playButton: 'VibePlayerControls_playButton__vnoer',
                // for PulseSync: BEGIN yellow wave play button CSS class binding
                playButton_withYellowPlayButton: 'VibePlayerControls_withYellowPlayButton__vnoer',
                // for PulseSync: END yellow wave play button CSS class binding
                playButton_playing: 'VibePlayerControls_playButton_playing__qPeBv',
            };
        },
        96046: (e) => {
            e.exports = { root: 'SpeedMenuItem_root__7j8VN', icon: 'SpeedMenuItem_icon__EyXPA' };
        },
        98017: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        99954: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelFeedbackButtons_root__cwi4d',
                button: 'WordsBigCardPanelFeedbackButtons_button___NrVf',
                button_active: 'WordsBigCardPanelFeedbackButtons_button_active__F5x_N',
                divider: 'WordsBigCardPanelFeedbackButtons_divider__qFjeT',
            };
        },
    },
]);
