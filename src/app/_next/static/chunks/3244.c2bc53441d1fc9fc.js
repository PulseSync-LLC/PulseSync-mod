(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3244, 7533],
    {
        7533: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeFallbackAnimation: () => m, VibeFallbackAnimationComponent: () => v });
            var i = n(54486),
                r = n(50420),
                l = n(28303),
                a = n(61910),
                o = n(31500),
                s = n(83252),
                u = n(49124);
            let c = (e, t) => {
                let n = u.env.ASSET_PREFIX || '';
                return ''.concat(n, '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(t);
            };
            var d = n(68290),
                f = n.n(d);
            let v = (0, l.PA)((e) => {
                    var t, n;
                    let { forwardRef: l, className: u } = e,
                        d = (0, a.useRef)(null),
                        { theme: v } = (0, s.DPo)(),
                        { sonataState: m } = (0, s.Pjs)(),
                        _ = m.isPlaying && m.isVibeContext;
                    (0, a.useEffect)(() => {
                        var e, t, n;
                        let i = null != (n = null == (t = m.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.energy) ? n : 1;
                        d.current && (d.current.playbackRate = _ ? Math.max(1.5 * i, 1) : 0.8);
                    }, [_, null == (n = m.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.energy]);
                    let p = (0, a.useMemo)(
                        () =>
                            ((e) => {
                                if (e) return { posterSrc: c(e, 'jpeg'), videoSrc: c(e, 'mp4') };
                            })(v),
                        [v],
                    );
                    return (0, i.jsxs)('div', {
                        ref: l,
                        className: (0, r.$)(f().root, f().root_visible, u),
                        ...(0, o.Am)(o.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: [
                            (0, i.jsx)('video', {
                                ref: d,
                                preload: 'metadata',
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                width: 1e3,
                                height: 1e3,
                                src: null == p ? void 0 : p.videoSrc,
                                poster: null == p ? void 0 : p.posterSrc,
                            }),
                            (0, i.jsx)('div', {}),
                        ],
                    });
                }),
                m = (0, a.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        43580: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => h });
            var i = n(54486),
                r = n(61910),
                l = n(8817),
                a = n(29444),
                o = n(83252),
                s = n(28303),
                u = n(47713),
                c = n(5956),
                d = n(97800),
                f = n(80585),
                v = n(63050),
                m = n.n(v);
            let _ = (0, s.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: n } = (0, o.Pjs)(),
                        l = (0, r.useCallback)(() => {
                            n.modal.isOpened && n.modal.close();
                        }, [n]),
                        a = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, i.jsx)(d.Caption, {
                                            className: m().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, i.jsx)(u.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, i.jsx)(f.N_, {
                                            className: m().link,
                                            href: o.Zyd.settings.href,
                                            onClick: l,
                                            children: (0, i.jsx)(d.Caption, {
                                                className: m().linkText,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, i.jsx)(u.A, { id: 'lite-version.go-to-settings' }),
                                            }),
                                        }),
                                    ],
                                }),
                            [l],
                        );
                    return (0, i.jsx)(f.$W, {
                        cover: (0, i.jsx)(c.Icon, { className: m().icon, size: 'xs', variant: 'liteVersion' }),
                        message: a,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                p = 'vibeAnimationDegradationLevel',
                b = null,
                h = (e) => {
                    let { isEnabled: t } = e,
                        n = (0, r.useRef)(0),
                        s = (0, o.NFA)(),
                        { notify: u } = (0, o.lkh)(),
                        { settings: c } = (0, o.Pjs)(),
                        [d, f] = (0, r.useState)(!1),
                        [v, m] = (0, r.useState)(a.IU.DEFAULT),
                        h = s.get(o.vgk),
                        g = (0, r.useMemo)(() => (b || (b = new a.Qq()), b), []),
                        E = (0, l.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                n.current = 0;
                                return;
                            }
                            if ((n.current++, !(n.current < 3))) {
                                if (((n.current = 0), v !== a.IU.LITE)) {
                                    m(a.IU.LITE), h.count('liteAnimation', p);
                                    return;
                                }
                                d ||
                                    (f(!0),
                                    h.count('fallback', p),
                                    c.setLiteVersionMode(o.wv5.ENABLED, !0),
                                    u((0, i.jsx)(_, {}), { containerId: o.uQT.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                c.isLiteVersionModeAvailableForToggle || !t || d ? (g.stopMeasuring(), (n.current = 0)) : g.startMeasuring(E),
                                () => {
                                    g.stopMeasuring();
                                }
                            ),
                            [g, E, t, d, c.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: d, vibeAnimationState: v }
                    );
                };
        },
        49802: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => a });
            var i = n(61910),
                r = n(63585),
                l = n(83252);
            let a = (e) => {
                var t, n;
                let [a, o] = (0, i.useState)({}),
                    { sonataState: s } = (0, l.Pjs)();
                (0, i.useEffect)(() => {
                    if (s.contextType === r.K.Vibe) {
                        var t, n, i, l;
                        a.id === (null == (t = s.entityMeta) ? void 0 : t.id) && !a.isLiked && (null == (l = s.entityMeta) ? void 0 : l.isLiked) && e(),
                            o({ id: null == (n = s.entityMeta) ? void 0 : n.id, isLiked: null == (i = s.entityMeta) ? void 0 : i.isLiked });
                    }
                }, [s.contextType, null == (t = s.entityMeta) ? void 0 : t.id, null == (n = s.entityMeta) ? void 0 : n.isLiked, a.id, a.isLiked, e]);
            };
        },
        63050: (e) => {
            e.exports = {
                message: 'NotificationLiteVersion_message__IT6FA',
                icon: 'NotificationLiteVersion_icon__T4E8d',
                title: 'NotificationLiteVersion_title__UPCcu',
                linkText: 'NotificationLiteVersion_linkText__L6r3P',
                link: 'NotificationLiteVersion_link__cQUUY',
            };
        },
        68290: (e) => {
            e.exports = {
                root: 'VibeAnimation_root__UKMJy',
                root_visible: 'VibeAnimation_root_visible__S7kXl',
                enter: 'VibeAnimation_enter__c6tvj',
                enter_active: 'VibeAnimation_enter_active__j0jOl',
                enter_done: 'VibeAnimation_enter_done__Oi2Kz',
                exit: 'VibeAnimation_exit__ioGXk',
                exit_active: 'VibeAnimation_exit_active__D94vP',
                exit_done: 'VibeAnimation_exit_done__LDXSJ',
            };
        },
        73244: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeAnimation: () => j });
            var i = n(54486),
                r = n(28303),
                l = n(61910),
                a = n(84974),
                o = n(63664),
                s = n(8817),
                u = n(27510),
                c = n(83252),
                d = n(43580),
                f = n(96638),
                v = n(68290),
                m = n.n(v),
                _ = n(7533),
                p = n(50420),
                b = n(31500),
                h = n(67648),
                g = n(29444),
                E = n(49802),
                x = n(77881),
                y = n(19009),
                A = n(80246),
                k = n.n(A);
            let M = (0, r.PA)((e) => {
                    var t, n, r, a, o, u, d, f;
                    let { vibeAnimationState: v, isIntersecting: x, forwardRef: y, className: A } = e,
                        [k, M] = (0, h.d)(),
                        [P, V] = (0, h.d)(),
                        [j, L] = (0, h.d)(),
                        [N, S] = (0, l.useState)(!1),
                        [B, W] = (0, l.useState)(null),
                        { user: R, sonataState: I, settings: T } = (0, c.Pjs)(),
                        w = (0, c.UlF)(),
                        { theme: C } = (0, c.DPo)(),
                        F = (0, c.iIU)(),
                        D = (0, s.c)((e) => {
                            e.data.type === g.iR.ERROR
                                ? (S(!0), w.error(e.data.payload))
                                : e.data.type === g.iR.LOG &&
                                  console.debug(
                                      '[WORKER]',
                                      e.data.payload
                                          .map((e, t) => (null !== e && void 0 !== e ? `[${t}]: ${e}` : null))
                                          .filter(Boolean)
                                          .join(', '),
                                  );
                        }),
                        U = (0, s.c)(() => {
                            S(!0);
                        }),
                        K = (I.isPlaying && I.isVibeContext) || window.VIBE_ANIMATION_PLAY_ON_ANY_ENTITY(),
                        O = (0, s.c)(() => {
                            null == k || k.likeAnimation();
                        });
                    (0, E.d)(O);
                    let H = (0, s.c)(() => {
                        if (!(null == F ? void 0 : F.analyser)) return;
                        let [e, t, n] = F.analyser.getAverageFrequencies([
                            { low: 0, high: 450 },
                            { low: 400, high: 5e3 },
                            { low: 5e3, high: 2e4 },
                        ]);
                        let r = F.analyser.getRMS(),
                            a = F.analyser.getRMSAlt(),
                            o = ((r + a) / 2) * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT?.() ?? 1) + 0.3,
                            s = window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.() ? o : (I?.entityMeta?.trackParameters?.energy ?? 1);
                        null == k || k.updateEnergy(s),
                            null == k || k.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != n ? n : 0 });
                        try {
                            window.dispatchEvent(
                                new CustomEvent('vibe:energy', {
                                    detail: {
                                        energy: s,
                                        rms: r,
                                        bands: { low: e ?? 0, middle: t ?? 0, high: n ?? 0 },
                                        dynamic: !!window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.(),
                                        ts: Date.now(),
                                    },
                                }),
                            );
                        } catch {}
                    });
                    (0, l.useEffect)(() => {
                        var e, t;
                        if (!P || k) return;
                        if (!P.transferControlToOffscreen) return void U();
                        let n = P.transferControlToOffscreen(),
                            i = new g.a6({
                                offscreenCanvas: n,
                                state: v,
                                collectionHue: R.collectionHue,
                                fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25,
                                shaderOptions: void 0,
                                onMessage: D,
                                onError: U,
                            });
                        M(i), L(new g.Rv(g.p4, H));
                        let r = null == (t = I.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            l = R.collectionHue;
                        i.applySettings({ hue: r, collectionHue: l });
                    }, [j, P, U, D, L, M, null == (n = I.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.hue, H, R.collectionHue, v, k]);
                    let z = (0, s.c)(() => {
                        null == k || k.destroy(), M(null), null == j || j.stop(), L(null);
                    });
                    return ((0, l.useEffect)(
                        () => () => {
                            z();
                        },
                        [z],
                    ),
                    (0, l.useEffect)(() => {
                        x && K ? null == j || j.start() : null == j || j.stop();
                    }, [j, x, K, k]),
                    (0, l.useEffect)(() => {
                        if (k) {
                            let e = C === c.Sxu.Dark ? 0.0705 : 0.9607;
                            null == k || k.applySettings({ backgroundColor: e });
                        }
                    }, [C, k]),
                    (0, l.useEffect)(() => {
                        let e = I && I.entityMeta,
                            t = e && e.trackParameters,
                            n = t && t.hue,
                            i =
                                'number' == typeof n
                                    ? ((e) => {
                                          let t = e % 360;
                                          return t < 0 && (t += 360), Math.round(t);
                                      })(n)
                                    : null,
                            r = (e && e.averageColor) || (e && e.derivedColors && 'string' == typeof e.derivedColors.average ? e.derivedColors.average : null),
                            l = (e && (e.id || e.trackId)) || (I && I.id) || '',
                            a = (e) => {
                                let t = 2166136261;
                                for (let n = 0; n < e.length; n++) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619));
                                return (t >>>= 0), t % 360;
                            },
                            o = (e) => {
                                if (!e || 'string' != typeof e) return null;
                                let t = e.trim();
                                if ('#' === t[0]) {
                                    let e = t.slice(1);
                                    return (
                                        3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                                        8 === e.length && (e = e.slice(0, 6)),
                                        6 !== e.length ? null : { r: parseInt(e.slice(0, 2), 16), g: parseInt(e.slice(2, 4), 16), b: parseInt(e.slice(4, 6), 16) }
                                    );
                                }
                                if (t.startsWith('rgb')) {
                                    let e = t.match(/rgba?\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
                                    if (!e) return null;
                                    return { r: +e[1], g: +e[2], b: +e[3] };
                                }
                                return null;
                            },
                            s = (e, t, n) => {
                                let i = e / 255,
                                    r = t / 255,
                                    l = n / 255,
                                    a = Math.max(i, r, l),
                                    o = Math.min(i, r, l),
                                    s = a - o;
                                if (0 === s) return 0;
                                let c;
                                switch (a) {
                                    case i:
                                        c = ((r - l) / s) % 6;
                                        break;
                                    case r:
                                        c = (l - i) / s + 2;
                                        break;
                                    default:
                                        c = (i - r) / s + 4;
                                }
                                let u = 60 * c;
                                return u < 0 && (u += 360), Math.round(u);
                            },
                            c = (() => {
                                if (null !== i && !Number.isNaN(i)) return i;
                                let e = o(r);
                                if (e) {
                                    let { r: t, g: n, b: i } = e,
                                        c = Math.abs(t - n) < 10 && Math.abs(t - i) < 10 && Math.abs(n - i) < 10;
                                    if (!c) return s(t, n, i);
                                    let u = (t + n + i) / 3,
                                        d = a(String(l)),
                                        f = d % 20;
                                    return u < 128 ? (220 + f) % 360 : f % 360;
                                }
                                return a(String(l));
                            })();
                        B !== c && W(c);
                    }, [
                        I && I.entityMeta && I.entityMeta.trackParameters && I.entityMeta.trackParameters.hue,
                        I && I.entityMeta && I.entityMeta.derivedColors && I.entityMeta.derivedColors.average,
                        I && I.entityMeta && I.entityMeta.averageColor,
                        I && I.entityMeta && I.entityMeta.id,
                        I && I.entityMeta && I.entityMeta.trackId,
                        I && I.id,
                        B,
                    ]),
                    (0, l.useEffect)(() => {
                        var e, t, n;
                        let i = I && I.entityMeta,
                            r = i && i.trackParameters,
                            l = r && r.energy,
                            a = (r && r.userCollectionHue) || (R && R.collectionHue);
                        a && R.setUserCollectionHue(a),
                            K ? null == k || k.playAnimation({ hue: null != B ? B : 0, energy: l, collectionHue: a }) : null == k || k.idleAnimation();
                    }, [
                        K,
                        null == (e = I.entityMeta) || null == (t = e.trackParameters) ? void 0 : t.energy,
                        null == (n = I.entityMeta) || null == (r = n.trackParameters) ? void 0 : r.userCollectionHue,
                        B,
                        R,
                        k,
                    ]),
                    (0, l.useEffect)(() => {
                        x ? null == k || k.enable() : null == k || k.disable();
                    }, [x, k]),
                    (0, l.useEffect)(() => {
                        null == k || k.updateLayout(T.isMobile);
                    }, [T.isMobile, k]),
                    (0, l.useEffect)(() => {
                        v === g.IU.LITE && (null == k || k.enableLiteAnimation());
                    }, [v, k]),
                    N)
                        ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: y, className: A })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      ref: y,
                                      className: (0, p.$)(m().root, A),
                                      ...(0, b.Am)(b.Kq.vibeAnimation.VIBE_ANIMATION),
                                      children: (0, i.jsx)('canvas', { ref: V }),
                                  }),
                                  !1,
                              ],
                          });
                }),
                P = (0, l.forwardRef)((e, t) => (0, i.jsx)(M, { forwardRef: t, ...e })),
                V = { enter: m().enter, enterActive: m().enter_active, enterDone: m().enter_done, exit: m().exit, exitActive: m().exit_active, exitDone: m().exit_done },
                j = (0, r.PA)((e) => {
                    let { isIntersecting: t = !0, className: n } = e,
                        r = (0, l.useRef)(null),
                        v = (0, l.useRef)(null),
                        [m, p] = (0, l.useState)(!1),
                        { experiments: b, settings: h } = (0, c.Pjs)();
                    (0, f.f)();
                    let g = (0, s.c)(() => {
                        p('visible' === document.visibilityState);
                    });
                    (0, l.useEffect)(
                        () => (
                            g(),
                            document.addEventListener('visibilitychange', g),
                            () => {
                                document.removeEventListener('visibilitychange', g);
                            }
                        ),
                        [g],
                    );
                    let E = b.checkExperiment(c.zal.WebNextLiteVersion, 'on'),
                        x = h.isLiteVersionModeEnabled,
                        { isFallback: y, vibeAnimationState: A } = (0, d.I)({ isEnabled: E && m && t }),
                        k = y || (E && x) || 'undefined' == typeof Worker,
                        M = (0, u.L)(() =>
                            k
                                ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: v, className: n })
                                : (0, i.jsx)(P, { ref: r, vibeAnimationState: A, isIntersecting: m && t, className: n }),
                        );
                    return (0, i.jsx)(a.A, {
                        mode: 'out-in',
                        children: (0, i.jsx)(o.A, { nodeRef: k ? v : r, timeout: 1e3, appear: !0, classNames: V, children: M }, k ? 'fallback' : 'shader'),
                    });
                });
        },
        80246: (e) => {
            e.exports = { root: 'VibeDebugPanel_root__97HZQ', forceTop: 'VibeDebugPanel_forceTop__VY0oQ' };
        },
        84974: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => m });
            var i,
                r,
                l = n(8197),
                a = n(61910),
                o = n(68173),
                s = n(35948),
                u = { out: 'out-in', in: 'in-out' },
                c = function (e, t, n) {
                    return function () {
                        var i;
                        e.props[t] && (i = e.props)[t].apply(i, arguments), n();
                    };
                },
                d =
                    (((i = {})[u.out] = function (e) {
                        var t = e.current,
                            n = e.changeState;
                        return a.cloneElement(t, {
                            in: !1,
                            onExited: c(t, 'onExited', function () {
                                n(o.ns, null);
                            }),
                        });
                    }),
                    (i[u.in] = function (e) {
                        var t = e.current,
                            n = e.changeState,
                            i = e.children;
                        return [
                            t,
                            a.cloneElement(i, {
                                in: !0,
                                onEntered: c(i, 'onEntered', function () {
                                    n(o.ns);
                                }),
                            }),
                        ];
                    }),
                    i),
                f =
                    (((r = {})[u.out] = function (e) {
                        var t = e.children,
                            n = e.changeState;
                        return a.cloneElement(t, {
                            in: !0,
                            onEntered: c(t, 'onEntered', function () {
                                n(o._K, a.cloneElement(t, { in: !0 }));
                            }),
                        });
                    }),
                    (r[u.in] = function (e) {
                        var t = e.current,
                            n = e.children,
                            i = e.changeState;
                        return [
                            a.cloneElement(t, {
                                in: !1,
                                onExited: c(t, 'onExited', function () {
                                    i(o._K, a.cloneElement(n, { in: !0 }));
                                }),
                            }),
                            a.cloneElement(n, { in: !0 }),
                        ];
                    }),
                    r),
                v = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (
                            ((t = e.call.apply(e, [this].concat(i)) || this).state = { status: o._K, current: null }),
                            (t.appeared = !1),
                            (t.changeState = function (e, n) {
                                void 0 === n && (n = t.state.current), t.setState({ status: e, current: n });
                            }),
                            t
                        );
                    }
                    (0, l.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.appeared = !0;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n, i;
                            return null == e.children
                                ? { current: null }
                                : t.status === o.ns && e.mode === u.in
                                  ? { status: o.ns }
                                  : t.current &&
                                      !((n = t.current) === (i = e.children) || (a.isValidElement(n) && a.isValidElement(i) && null != n.key && n.key === i.key)) &&
                                      1
                                    ? { status: o.ze }
                                    : { current: a.cloneElement(e.children, { in: !0 }) };
                        }),
                        (n.render = function () {
                            var e,
                                t = this.props,
                                n = t.children,
                                i = t.mode,
                                r = this.state,
                                l = r.status,
                                u = r.current,
                                c = { children: n, current: u, changeState: this.changeState, status: l };
                            switch (l) {
                                case o.ns:
                                    e = f[i](c);
                                    break;
                                case o.ze:
                                    e = d[i](c);
                                    break;
                                case o._K:
                                    e = u;
                            }
                            return a.createElement(s.A.Provider, { value: { isMounting: !this.appeared } }, e);
                        }),
                        t
                    );
                })(a.Component);
            (v.propTypes = {}), (v.defaultProps = { mode: u.out });
            let m = v;
        },
        96638: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => l });
            var i = n(61910),
                r = n(83252);
            let l = () => {
                let e = (0, r.NFA)().get(r.vgk),
                    t = (0, i.useRef)(!0);
                (0, i.useEffect)(() => {
                    if (!t.current) return;
                    let n = document.createElement('canvas');
                    try {
                        let i = n.getContext('webgl2') || n.getContext('webgl');
                        if (!i) return;
                        let r = i.getExtension('WEBGL_debug_renderer_info');
                        if (!r) return;
                        let l = i.getParameter(r.UNMASKED_RENDERER_WEBGL);
                        l && (e.count(l, 'gpuRenderer'), (t.current = !1));
                    } catch (e) {}
                    n.remove();
                }, [e]);
            };
        },
    },
]);
