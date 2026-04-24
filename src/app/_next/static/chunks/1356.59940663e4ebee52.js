(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1276, 1356],
    {
        11276: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { VibeWidgetFallbackAnimation: () => m });
            var n = i(62936),
                r = i(79950),
                a = i(19718),
                l = i(44020),
                o = i(8669),
                s = i(13030),
                c = i(42561),
                u = i(54260),
                d = i.n(u);
            let f = (0, a.PA)((e) => {
                    let { forwardRef: t, className: i } = e,
                        { sonataState: a } = (0, c.Pjs)();
                    return (0, n.jsx)('div', {
                        ref: t,
                        className: (0, r.$)(d().root, d().root_visible, { [d().fallback]: a.isPlaying }, i),
                        ...(0, o.Am)(o.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: (0, n.jsx)(s.Image, {
                            src: 'avatars.mds.yandex.net/get-music-misc/2419084/img.69c4e2a11982013a65e2121b/%%',
                            className: d().image,
                            size: 400,
                            withAvatarReplace: !0,
                            withLoadingIndicator: !1,
                            fit: 'cover',
                        }),
                    });
                }),
                m = (0, l.forwardRef)((e, t) => (0, n.jsx)(f, { forwardRef: t, ...e }));
        },
        16412: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var n,
                r,
                a = i(91559),
                l = i(44020),
                o = i(78388),
                s = i(75358),
                c = { out: 'out-in', in: 'in-out' },
                u = function (e, t, i) {
                    return function () {
                        var n;
                        e.props[t] && (n = e.props)[t].apply(n, arguments), i();
                    };
                },
                d =
                    (((n = {})[c.out] = function (e) {
                        var t = e.current,
                            i = e.changeState;
                        return l.cloneElement(t, {
                            in: !1,
                            onExited: u(t, 'onExited', function () {
                                i(o.ns, null);
                            }),
                        });
                    }),
                    (n[c.in] = function (e) {
                        var t = e.current,
                            i = e.changeState,
                            n = e.children;
                        return [
                            t,
                            l.cloneElement(n, {
                                in: !0,
                                onEntered: u(n, 'onEntered', function () {
                                    i(o.ns);
                                }),
                            }),
                        ];
                    }),
                    n),
                f =
                    (((r = {})[c.out] = function (e) {
                        var t = e.children,
                            i = e.changeState;
                        return l.cloneElement(t, {
                            in: !0,
                            onEntered: u(t, 'onEntered', function () {
                                i(o._K, l.cloneElement(t, { in: !0 }));
                            }),
                        });
                    }),
                    (r[c.in] = function (e) {
                        var t = e.current,
                            i = e.children,
                            n = e.changeState;
                        return [
                            l.cloneElement(t, {
                                in: !1,
                                onExited: u(t, 'onExited', function () {
                                    n(o._K, l.cloneElement(i, { in: !0 }));
                                }),
                            }),
                            l.cloneElement(i, { in: !0 }),
                        ];
                    }),
                    r),
                m = (function (e) {
                    function t() {
                        for (var t, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                        return (
                            ((t = e.call.apply(e, [this].concat(n)) || this).state = { status: o._K, current: null }),
                            (t.appeared = !1),
                            (t.changeState = function (e, i) {
                                void 0 === i && (i = t.state.current), t.setState({ status: e, current: i });
                            }),
                            t
                        );
                    }
                    (0, a.A)(t, e);
                    var i = t.prototype;
                    return (
                        (i.componentDidMount = function () {
                            this.appeared = !0;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var i, n;
                            return null == e.children
                                ? { current: null }
                                : t.status === o.ns && e.mode === c.in
                                  ? { status: o.ns }
                                  : t.current &&
                                      !((i = t.current) === (n = e.children) || (l.isValidElement(i) && l.isValidElement(n) && null != i.key && i.key === n.key)) &&
                                      1
                                    ? { status: o.ze }
                                    : { current: l.cloneElement(e.children, { in: !0 }) };
                        }),
                        (i.render = function () {
                            var e,
                                t = this.props,
                                i = t.children,
                                n = t.mode,
                                r = this.state,
                                a = r.status,
                                c = r.current,
                                u = { children: i, current: c, changeState: this.changeState, status: a };
                            switch (a) {
                                case o.ns:
                                    e = f[n](u);
                                    break;
                                case o.ze:
                                    e = d[n](u);
                                    break;
                                case o._K:
                                    e = c;
                            }
                            return l.createElement(s.A.Provider, { value: { isMounting: !this.appeared } }, e);
                        }),
                        t
                    );
                })(l.Component);
            (m.propTypes = {}), (m.defaultProps = { mode: c.out });
            let v = m;
        },
        34208: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => b });
            var n = i(62936),
                r = i(44020),
                a = i(59935),
                l = i(63553),
                o = i(42561),
                s = i(19718),
                c = i(26731),
                u = i(85742),
                d = i(20418),
                f = i(85906),
                m = i(34824),
                v = i.n(m);
            let g = (0, s.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: i } = (0, o.Pjs)(),
                        a = (0, r.useCallback)(() => {
                            i.modal.isOpened && i.modal.close();
                        }, [i]),
                        l = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: v().message,
                                    children: [
                                        (0, n.jsx)(d.Caption, {
                                            className: v().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, n.jsx)(c.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, n.jsx)(f.N_, {
                                            className: v().link,
                                            href: o.Zyd.settings.href,
                                            onClick: a,
                                            children: (0, n.jsx)(d.Caption, {
                                                className: v().linkText,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, n.jsx)(c.A, { id: 'lite-version.go-to-settings' }),
                                            }),
                                        }),
                                    ],
                                }),
                            [a],
                        );
                    return (0, n.jsx)(f.$W, {
                        cover: (0, n.jsx)(u.Icon, { className: v().icon, size: 'xs', variant: 'liteVersion' }),
                        message: l,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                _ = 'vibeAnimationDegradationLevel',
                p = null,
                b = (e) => {
                    let { isEnabled: t } = e,
                        i = (0, r.useRef)(0),
                        s = (0, o.NFA)(),
                        { notify: c } = (0, o.lkh)(),
                        { settings: u } = (0, o.Pjs)(),
                        [d, f] = (0, r.useState)(!1),
                        [m, v] = (0, r.useState)(l.IU.DEFAULT),
                        b = s.get(o.vgk),
                        A = (0, r.useMemo)(() => (p || (p = new l.Qq()), p), []),
                        h = (0, a.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                i.current = 0;
                                return;
                            }
                            if ((i.current++, !(i.current < 3))) {
                                if (((i.current = 0), m !== l.IU.LITE)) {
                                    v(l.IU.LITE), b.count('liteAnimation', _);
                                    return;
                                }
                                d ||
                                    (f(!0),
                                    b.count('fallback', _),
                                    u.setLiteVersionMode(o.wv5.ENABLED, !0),
                                    c((0, n.jsx)(g, {}), { containerId: o.uQT.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                u.isLiteVersionModeAvailableForToggle || !t || d ? (A.stopMeasuring(), (i.current = 0)) : A.startMeasuring(h),
                                () => {
                                    A.stopMeasuring();
                                }
                            ),
                            [A, h, t, d, u.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: d, vibeAnimationState: m }
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
        51356: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { VibeWidgetAnimation: () => N });
            var n = i(62936),
                r = i(19718),
                a = i(44020),
                l = i(16412),
                o = i(53058),
                s = i(59935),
                c = i(60188),
                u = i(42561),
                d = i(34208),
                f = i(56428),
                m = i(54260),
                v = i.n(m),
                g = i(11276),
                _ = i(79950),
                p = i(8669),
                b = i(56874),
                A = i(63553);
            let h = (e, t, i) => ({ h: e, s: t / 100, l: i / 100 }),
                E = (e) => {
                    let { averageColor: t, isPlaying: i } = e,
                        { h: n, s: r, l: a } = (0, u.g8k)(t);
                    return i
                        ? { top: h(n, r + 15, a + 10), middle: h(n, r + 15, a + 5), bottom: h(n, r, a) }
                        : { top: h(50, 100, 50), middle: h(330, 100, 50), bottom: h(300, 100, 50) };
                };
            var x = i(81256);
            let y = { transparent: !0 },
                k = (0, r.PA)((e) => {
                    let { vibeAnimationState: t, isVibeAnimationVisible: i, averageColor: r, forwardRef: l, className: o } = e,
                        [c, d] = (0, b.d)(),
                        [f, m] = (0, b.d)(),
                        [h, k] = (0, b.d)(),
                        [V, L] = (0, a.useState)(!1),
                        { sonataState: N, settings: P } = (0, u.Pjs)(),
                        j = (0, u.UlF)(),
                        w = (0, u.iIU)(),
                        M = (0, s.c)((e) => {
                            e.data.type === A.iR.ERROR && (L(!0), j.error(e.data.payload));
                        }),
                        R = (0, s.c)(() => {
                            L(!0);
                        }),
                        I = (0, s.c)(() => {
                            null == c || c.likeAnimation();
                        });
                    (0, x.d)({ handleTrackLike: I, shouldCheckVibeContext: !1 });
                    let T = (0, s.c)(() => {
                        if (!(null == w ? void 0 : w.analyser)) return;
                        let [e, t, i] = w.analyser.getAverageFrequencies([
                            { low: 0, high: 450 },
                            { low: 400, high: 5e3 },
                            { low: 5e3, high: 2e4 },
                        ]);
                        let rms = w.analyser.getRMS(),
                            rmsAlt = w.analyser.getRMSAlt(),
                            energy = ((rms + rmsAlt) / 2) * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT?.() ?? 1) + 0.3,
                            energyNormalized = window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.() ? energy : (N?.entityMeta?.trackParameters?.energy ?? 1);
                        null == c || c.updateEnergy(energyNormalized),
                            null == c || c.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != i ? i : 0 });
                    });
                    (0, a.useEffect)(() => {
                        if (!f || c) return;
                        if (!f.transferControlToOffscreen) return void R();
                        let e = f.transferControlToOffscreen(),
                            i = new A.a6({ offscreenCanvas: e, state: t, shaderOptions: y, fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25, onMessage: M, onError: R });
                        d(i), k(new A.Rv(A.p4, T)), i.applySettings({ customColors: E({ averageColor: r, isPlaying: N.isPlaying }) });
                    }, [r, f, R, M, k, d, N.isPlaying, T, t, c]);
                    let W = (0, s.c)(() => {
                        null == c || c.destroy(), d(null), null == h || h.stop(), k(null);
                    });
                    return ((0, a.useEffect)(
                        () => () => {
                            W();
                        },
                        [W],
                    ),
                    (0, a.useEffect)(() => {
                        null == c || c.applySettings({ customColors: E({ averageColor: r, isPlaying: N.isPlaying }) });
                    }, [r, N.isPlaying, c]),
                    (0, a.useEffect)(() => {
                        i && N.isPlaying ? (null == c || c.playAnimation({}), null == h || h.start()) : (null == c || c.idleAnimation(), null == h || h.stop());
                    }, [h, i, N.isPlaying, c]),
                    (0, a.useEffect)(() => {
                        i ? null == c || c.enable() : null == c || c.disable();
                    }, [i, c]),
                    (0, a.useEffect)(() => {
                        null == c || c.updateLayout(P.isMobile);
                    }, [P.isMobile, c]),
                    (0, a.useEffect)(() => {
                        t === A.IU.LITE && (null == c || c.enableLiteAnimation());
                    }, [t, c]),
                    V)
                        ? (0, n.jsx)(g.VibeWidgetFallbackAnimation, { ref: l, className: o })
                        : (0, n.jsx)('div', {
                              ref: l,
                              className: (0, _.$)(v().root, o),
                              ...(0, p.Am)(p.Kq.vibeAnimation.VIBE_ANIMATION),
                              children: (0, n.jsx)('canvas', { ref: m }),
                          });
                }),
                V = (0, a.forwardRef)((e, t) => (0, n.jsx)(k, { forwardRef: t, ...e })),
                L = { enter: v().enter, enterActive: v().enter_active, enterDone: v().enter_done, exit: v().exit, exitActive: v().exit_active, exitDone: v().exit_done },
                N = (0, r.PA)((e) => {
                    let { averageColor: t, className: i } = e,
                        r = (0, a.useRef)(null),
                        m = (0, a.useRef)(null),
                        [v, _] = (0, a.useState)(!1),
                        { experiments: p, settings: b } = (0, u.Pjs)();
                    (0, f.f)();
                    let A = (0, s.c)(() => {
                        _('visible' === document.visibilityState);
                    });
                    (0, a.useEffect)(
                        () => (
                            A(),
                            document.addEventListener('visibilitychange', A),
                            () => {
                                document.removeEventListener('visibilitychange', A);
                            }
                        ),
                        [A],
                    );
                    let h = p.checkExperiment(u.zal.WebNextLiteVersion, 'on'),
                        E = b.isLiteVersionModeEnabled,
                        { isFallback: x, vibeAnimationState: y } = (0, d.I)({ isEnabled: h && v }),
                        k = x || (h && E) || 'undefined' == typeof Worker,
                        N = (0, c.L)(() =>
                            k
                                ? (0, n.jsx)(g.VibeWidgetFallbackAnimation, { ref: m, className: i })
                                : (0, n.jsx)(V, { ref: r, vibeAnimationState: y, isVibeAnimationVisible: v, averageColor: t, className: i }),
                        );
                    return (0, n.jsx)(l.A, {
                        mode: 'out-in',
                        children: (0, n.jsx)(o.A, { nodeRef: k ? m : r, timeout: 1e3, appear: !0, classNames: L, children: N }, k ? 'fallback' : 'shader'),
                    });
                });
        },
        54260: (e) => {
            e.exports = {
                root: 'VibeWidgetAnimation_root__7fpeP',
                root_visible: 'VibeWidgetAnimation_root_visible__owKzA',
                fallback: 'VibeWidgetAnimation_fallback__5PgjQ',
                image: 'VibeWidgetAnimation_image__9hizK',
                enter: 'VibeWidgetAnimation_enter__PO_og',
                enter_active: 'VibeWidgetAnimation_enter_active__rbO3b',
                enter_done: 'VibeWidgetAnimation_enter_done__c9_F_',
                exit: 'VibeWidgetAnimation_exit__AWXHS',
                exit_active: 'VibeWidgetAnimation_exit_active__V__iv',
                exit_done: 'VibeWidgetAnimation_exit_done__eAbOW',
            };
        },
        56428: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var n = i(44020),
                r = i(42561);
            let a = () => {
                let e = (0, r.NFA)().get(r.vgk),
                    t = (0, n.useRef)(!0);
                (0, n.useEffect)(() => {
                    if (!t.current) return;
                    let i = document.createElement('canvas');
                    try {
                        let n = i.getContext('webgl2') || i.getContext('webgl');
                        if (!n) return;
                        let r = n.getExtension('WEBGL_debug_renderer_info');
                        if (!r) return;
                        let a = n.getParameter(r.UNMASKED_RENDERER_WEBGL);
                        a && (e.count(a, 'gpuRenderer'), (t.current = !1));
                    } catch (e) {}
                    i.remove();
                }, [e]);
            };
        },
        81256: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => l });
            var n = i(44020),
                r = i(81959),
                a = i(42561);
            let l = (e) => {
                var t, i;
                let { handleTrackLike: l, shouldCheckVibeContext: o } = e,
                    [s, c] = (0, n.useState)({}),
                    { sonataState: u } = (0, a.Pjs)();
                (0, n.useEffect)(() => {
                    let e = () => {
                        var e, t, i, n;
                        s.id === (null == (e = u.entityMeta) ? void 0 : e.id) && !s.isLiked && (null == (n = u.entityMeta) ? void 0 : n.isLiked) && l(),
                            c({ id: null == (t = u.entityMeta) ? void 0 : t.id, isLiked: null == (i = u.entityMeta) ? void 0 : i.isLiked });
                    };
                    o ? u.contextType === r.K.Vibe && e() : e();
                }, [l, o, u.contextType, null == (t = u.entityMeta) ? void 0 : t.id, null == (i = u.entityMeta) ? void 0 : i.isLiked, s.id, s.isLiked]);
            };
        },
    },
]);
