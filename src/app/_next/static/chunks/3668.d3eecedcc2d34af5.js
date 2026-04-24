(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3668, 9815],
    {
        16412: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => m });
            var i,
                r,
                l = n(91559),
                a = n(44020),
                o = n(78388),
                s = n(75358),
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
        19815: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeFallbackAnimation: () => m, VibeFallbackAnimationComponent: () => v });
            var i = n(62936),
                r = n(79950),
                l = n(19718),
                a = n(44020),
                o = n(8669),
                s = n(42561),
                u = n(49124);
            let c = (e, t) => {
                let n = u.env.ASSET_PREFIX || '';
                return ''.concat(n, '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(t);
            };
            var d = n(94992),
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
        23668: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeAnimation: () => j });
            var i = n(62936),
                r = n(19718),
                l = n(44020),
                a = n(16412),
                o = n(53058),
                s = n(59935),
                u = n(60188),
                c = n(42561),
                d = n(34208),
                f = n(56428),
                v = n(94992),
                m = n.n(v),
                _ = n(19815),
                p = n(79950),
                b = n(8669),
                h = n(56874),
                g = n(63553),
                E = n(81256),
                x = n(5099),
                y = n(69671),
                k = n(29164),
                A = n.n(k);
            let M = (0, r.PA)((e) => {
                    var t, n, r, a, o, u, d, f;
                    let { vibeAnimationState: v, isIntersecting: x, forwardRef: y, className: k } = e,
                        [A, M] = (0, h.d)(),
                        [P, V] = (0, h.d)(),
                        [j, L] = (0, h.d)(),
                        [N, S] = (0, l.useState)(!1),
                        { user: R, sonataState: I, settings: T } = (0, c.Pjs)(),
                        w = (0, c.UlF)(),
                        { theme: C } = (0, c.DPo)(),
                        F = (0, c.iIU)(),
                        D = (0, s.c)((e) => {
                            e.data.type === g.iR.ERROR && (S(!0), w.error(e.data.payload));
                        }),
                        U = (0, s.c)(() => {
                            S(!0);
                        }),
                        K = I.isPlaying && I.isVibeContext,
                        O = (0, s.c)(() => {
                            null == A || A.likeAnimation();
                        });
                    (0, E.d)({ handleTrackLike: O, shouldCheckVibeContext: !0 });
                    let H = (0, s.c)(() => {
                        if (!(null == F ? void 0 : F.analyser)) return;
                        let [e, t, n] = F.analyser.getAverageFrequencies([
                            { low: 0, high: 450 },
                            { low: 400, high: 5e3 },
                            { low: 5e3, high: 2e4 },
                        ]);
                        null == A || A.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != n ? n : 0 });
                    });
                    (0, l.useEffect)(() => {
                        var e, t;
                        if (!P || A) return;
                        if (!P.transferControlToOffscreen) return void U();
                        let n = P.transferControlToOffscreen(),
                            i = new g.a6({ offscreenCanvas: n, state: v, collectionHue: R.collectionHue, shaderOptions: void 0, fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25, onMessage: D, onError: U });
                        M(i), L(new g.Rv(g.p4, H));
                        let r = null == (t = I.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            l = R.collectionHue;
                        i.applySettings({ hue: r, collectionHue: l });
                    }, [j, P, U, D, L, M, null == (n = I.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.hue, H, R.collectionHue, v, A]);
                    let z = (0, s.c)(() => {
                        null == A || A.destroy(), M(null), null == j || j.stop(), L(null);
                    });
                    return ((0, l.useEffect)(
                        () => () => {
                            z();
                        },
                        [z],
                    ),
                    (0, l.useEffect)(() => {
                        x && K ? null == j || j.start() : null == j || j.stop();
                    }, [j, x, K, A]),
                    (0, l.useEffect)(() => {
                        if (A) {
                            let e = C === c.Sxu.Dark ? 0.0705 : 0.9607;
                            null == A || A.applySettings({ backgroundColor: e });
                        }
                    }, [C, A]),
                    (0, l.useEffect)(() => {
                        var e, t, n, i, r, l;
                        let a = null == (t = I.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            o = null == (i = I.entityMeta) || null == (n = i.trackParameters) ? void 0 : n.energy,
                            s = null == (l = I.entityMeta) || null == (r = l.trackParameters) ? void 0 : r.userCollectionHue;
                        s && R.setUserCollectionHue(s), K ? null == A || A.playAnimation({ hue: a, energy: o, collectionHue: s }) : null == A || A.idleAnimation();
                    }, [
                        K,
                        null == (a = I.entityMeta) || null == (r = a.trackParameters) ? void 0 : r.energy,
                        null == (u = I.entityMeta) || null == (o = u.trackParameters) ? void 0 : o.hue,
                        null == (f = I.entityMeta) || null == (d = f.trackParameters) ? void 0 : d.userCollectionHue,
                        R,
                        A,
                    ]),
                    (0, l.useEffect)(() => {
                        x ? null == A || A.enable() : null == A || A.disable();
                    }, [x, A]),
                    (0, l.useEffect)(() => {
                        null == A || A.updateLayout(T.isMobile);
                    }, [T.isMobile, A]),
                    (0, l.useEffect)(() => {
                        v === g.IU.LITE && (null == A || A.enableLiteAnimation());
                    }, [v, A]),
                    N)
                        ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: y, className: k })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      ref: y,
                                      className: (0, p.$)(m().root, k),
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
                        { isFallback: y, vibeAnimationState: k } = (0, d.I)({ isEnabled: E && m && t }),
                        A = y || (E && x) || 'undefined' == typeof Worker,
                        M = (0, u.L)(() =>
                            A
                                ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: v, className: n })
                                : (0, i.jsx)(P, { ref: r, vibeAnimationState: k, isIntersecting: m && t, className: n }),
                        );
                    return (0, i.jsx)(a.A, {
                        mode: 'out-in',
                        children: (0, i.jsx)(o.A, { nodeRef: A ? v : r, timeout: 1e3, appear: !0, classNames: V, children: M }, A ? 'fallback' : 'shader'),
                    });
                });
        },
        29164: (e) => {
            e.exports = { root: 'VibeDebugPanel_root__97HZQ', forceTop: 'VibeDebugPanel_forceTop__VY0oQ' };
        },
        34208: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => h });
            var i = n(62936),
                r = n(44020),
                l = n(59935),
                a = n(63553),
                o = n(42561),
                s = n(19718),
                u = n(26731),
                c = n(85742),
                d = n(20418),
                f = n(85906),
                v = n(34824),
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
        34824: (e) => {
            e.exports = {
                message: 'NotificationLiteVersion_message__IT6FA',
                icon: 'NotificationLiteVersion_icon__T4E8d',
                title: 'NotificationLiteVersion_title__UPCcu',
                linkText: 'NotificationLiteVersion_linkText__L6r3P',
                link: 'NotificationLiteVersion_link__cQUUY',
            };
        },
        56428: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => l });
            var i = n(44020),
                r = n(42561);
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
        81256: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => a });
            var i = n(44020),
                r = n(81959),
                l = n(42561);
            let a = (e) => {
                var t, n;
                let { handleTrackLike: a, shouldCheckVibeContext: o } = e,
                    [s, u] = (0, i.useState)({}),
                    { sonataState: c } = (0, l.Pjs)();
                (0, i.useEffect)(() => {
                    let e = () => {
                        var e, t, n, i;
                        s.id === (null == (e = c.entityMeta) ? void 0 : e.id) && !s.isLiked && (null == (i = c.entityMeta) ? void 0 : i.isLiked) && a(),
                            u({ id: null == (t = c.entityMeta) ? void 0 : t.id, isLiked: null == (n = c.entityMeta) ? void 0 : n.isLiked });
                    };
                    o ? c.contextType === r.K.Vibe && e() : e();
                }, [a, o, c.contextType, null == (t = c.entityMeta) ? void 0 : t.id, null == (n = c.entityMeta) ? void 0 : n.isLiked, s.id, s.isLiked]);
            };
        },
        94992: (e) => {
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
    },
]);
