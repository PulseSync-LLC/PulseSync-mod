(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1013, 1560],
    {
        11560: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { VibeWidgetFallbackAnimation: () => m });
            var n = i(32290),
                r = i(63618),
                a = i(96103),
                s = i(55178),
                l = i(59824),
                o = i(50162),
                c = i(49574),
                u = i(12916),
                d = i.n(u);
            let f = (0, a.PA)((e) => {
                    let { forwardRef: t, className: i } = e,
                        { sonataState: a, vibe: s } = (0, c.Pjs)(),
                        u = !!(s.isShuffleVibe && a.isVibeContext);
                    return (0, n.jsx)('div', {
                        ref: t,
                        className: (0, r.$)(d().root, d().root_visible, { [d().fallback]: a.isPlaying && !u }, i),
                        ...(0, l.Am)(l.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: (0, n.jsx)(o.Image, {
                            src: u
                                ? 'avatars.mds.yandex.net/get-music-misc/34161/img.69f094ae5e8c2b29ab5e5346/%%'
                                : 'avatars.mds.yandex.net/get-music-misc/2419084/img.69c4e2a11982013a65e2121b/%%',
                            className: d().image,
                            size: 400,
                            withAvatarReplace: !0,
                            withLoadingIndicator: !1,
                            fit: 'cover',
                        }),
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, n.jsx)(f, { forwardRef: t, ...e }));
        },
        12916: (e) => {
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
        38248: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var n,
                r,
                a = i(2783),
                s = i(55178),
                l = i(65549),
                o = i(89562),
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
                        return s.cloneElement(t, {
                            in: !1,
                            onExited: u(t, 'onExited', function () {
                                i(l.ns, null);
                            }),
                        });
                    }),
                    (n[c.in] = function (e) {
                        var t = e.current,
                            i = e.changeState,
                            n = e.children;
                        return [
                            t,
                            s.cloneElement(n, {
                                in: !0,
                                onEntered: u(n, 'onEntered', function () {
                                    i(l.ns);
                                }),
                            }),
                        ];
                    }),
                    n),
                f =
                    (((r = {})[c.out] = function (e) {
                        var t = e.children,
                            i = e.changeState;
                        return s.cloneElement(t, {
                            in: !0,
                            onEntered: u(t, 'onEntered', function () {
                                i(l._K, s.cloneElement(t, { in: !0 }));
                            }),
                        });
                    }),
                    (r[c.in] = function (e) {
                        var t = e.current,
                            i = e.children,
                            n = e.changeState;
                        return [
                            s.cloneElement(t, {
                                in: !1,
                                onExited: u(t, 'onExited', function () {
                                    n(l._K, s.cloneElement(i, { in: !0 }));
                                }),
                            }),
                            s.cloneElement(i, { in: !0 }),
                        ];
                    }),
                    r),
                m = (function (e) {
                    function t() {
                        for (var t, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                        return (
                            ((t = e.call.apply(e, [this].concat(n)) || this).state = { status: l._K, current: null }),
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
                                : t.status === l.ns && e.mode === c.in
                                  ? { status: l.ns }
                                  : t.current &&
                                      !((i = t.current) === (n = e.children) || (s.isValidElement(i) && s.isValidElement(n) && null != i.key && i.key === n.key)) &&
                                      1
                                    ? { status: l.ze }
                                    : { current: s.cloneElement(e.children, { in: !0 }) };
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
                                case l.ns:
                                    e = f[n](u);
                                    break;
                                case l.ze:
                                    e = d[n](u);
                                    break;
                                case l._K:
                                    e = c;
                            }
                            return s.createElement(o.A.Provider, { value: { isMounting: !this.appeared } }, e);
                        }),
                        t
                    );
                })(s.Component);
            (m.propTypes = {}), (m.defaultProps = { mode: c.out });
            let v = m;
        },
        51013: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { VibeWidgetAnimation: () => N });
            var n = i(32290),
                r = i(96103),
                a = i(55178),
                s = i(38248),
                l = i(9612),
                o = i(91027),
                c = i(6752),
                u = i(49574),
                d = i(75297),
                f = i(87488),
                m = i(12916),
                v = i.n(m),
                g = i(11560),
                _ = i(63618),
                b = i(59824),
                h = i(54862),
                p = i(73295);
            let A = (e, t, i) => ({ h: e, s: t / 100, l: i / 100 }),
                x = (e) => {
                    let { averageColor: t, isPlaying: i, isShuffleVibeActive: n } = e,
                        { h: r, s: a, l: s } = (0, u.g8k)(t);
                    return i || n
                        ? { top: A(r, a + 15, s + 10), middle: A(r, a + 15, s + 5), bottom: A(r, a, s) }
                        : { top: A(50, 100, 50), middle: A(330, 100, 50), bottom: A(300, 100, 50) };
                },
                Q = () => !window.VIBE_ANIMATION_USE_VIBE_WIDGET_COLORS?.() ?? !1;
            var E = i(60196);
            let V = { transparent: !0 },
                y = (0, r.PA)((e) => {
                    let { vibeAnimationState: t, isVibeAnimationVisible: i, averageColor: r, forwardRef: s, className: l } = e,
                        [c, d] = (0, h.d)(),
                        [f, m] = (0, h.d)(),
                        [A, y] = (0, h.d)(),
                        [k, L] = (0, a.useState)(!1),
                        { user: B, sonataState: N, settings: P, vibe: j } = (0, u.Pjs)(),
                        S = (0, u.UlF)(),
                        w = (0, u.iIU)(),
                        C = (0, o.c)((e) => {
                            e.data.type === p.iR.ERROR && (L(!0), S.error(e.data.payload));
                        }),
                        M = (0, o.c)(() => {
                            L(!0);
                        }),
                        R = (0, o.c)(() => {
                            null == c || c.likeAnimation();
                        });
                    (0, E.d)({ handleTrackLike: R, shouldCheckVibeContext: !1 });
                    let I = (0, o.c)(() => {
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
                        var a, s;
                        if (!f || c) return;
                        if (!f.transferControlToOffscreen) return void M();
                        let e = f.transferControlToOffscreen(),
                            i = new p.a6({
                                offscreenCanvas: e,
                                state: t,
                                collectionHue: Q() ? void 0 : B.collectionHue,
                                shaderOptions: V,
                                fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25,
                                resolution: window.nativeSettings.get('modSettings.vibeAnimationEnhancement.canvasResolution') ?? 650,
                                onMessage: C,
                                onError: M,
                            }),
                            n = null == (s = N.entityMeta) || null == (a = s.trackParameters) ? void 0 : a.hue;
                        d(i),
                            y(new p.Rv(p.p4, I)),
                            Q()
                                ? i.applySettings({
                                      customColors: x({ averageColor: r, isPlaying: N.isPlaying, isShuffleVibeActive: !!(j.isShuffleVibe && N.isVibeContext) }),
                                  })
                                : i.applySettings({ hue: n, collectionHue: B.collectionHue });
                    }, [r, f, M, C, y, d, N.isPlaying, N.isVibeContext, I, j.isShuffleVibe, t, c, B.collectionHue, null == N.entityMeta ? void 0 : N.entityMeta.trackParameters]);
                    let T = (0, o.c)(() => {
                        null == c || c.destroy(), d(null), null == A || A.stop(), y(null);
                    });
                    return ((0, a.useEffect)(
                        () => () => {
                            T();
                        },
                        [T],
                    ),
                    (0, a.useEffect)(() => {
                        var e, t;
                        let i = null == (t = N.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue;
                        Q()
                            ? null == c ||
                              c.applySettings({
                                  customColors: x({ averageColor: r, isPlaying: N.isPlaying, isShuffleVibeActive: !!(j.isShuffleVibe && N.isVibeContext) }),
                              })
                            : null == c || c.applySettings({ hue: i, collectionHue: B.collectionHue });
                    }, [r, N.isPlaying, N.isVibeContext, j.isShuffleVibe, c, B.collectionHue, null == N.entityMeta ? void 0 : N.entityMeta.trackParameters]),
                    (0, a.useEffect)(() => {
                        var e, t, n, a, oA;
                        let s = null == (t = N.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            l = null == (a = N.entityMeta) || null == (n = a.trackParameters) ? void 0 : n.energy,
                            o = null == (oA = N.entityMeta) ? void 0 : oA.trackParameters;
                        o && o.userCollectionHue && B.setUserCollectionHue(o.userCollectionHue),
                            i && N.isPlaying
                                ? (null == c ||
                                      c.playAnimation(
                                          Q()
                                              ? {
                                                    energy: l,
                                                    customColors: x({
                                                        averageColor: r,
                                                        isPlaying: N.isPlaying,
                                                        isShuffleVibeActive: !!(j.isShuffleVibe && N.isVibeContext),
                                                    }),
                                                }
                                              : { hue: s, energy: l, collectionHue: o && o.userCollectionHue },
                                      ),
                                  null == A || A.start())
                                : (null == c || c.idleAnimation(), null == A || A.stop());
                    }, [A, i, N.isPlaying, c, B, r, N.isVibeContext, j.isShuffleVibe, null == N.entityMeta ? void 0 : N.entityMeta.trackParameters]),
                    (0, a.useEffect)(() => {
                        i ? null == c || c.enable() : null == c || c.disable();
                    }, [i, c]),
                    (0, a.useEffect)(() => {
                        null == c || c.updateLayout(P.isMobile);
                    }, [P.isMobile, c]),
                    (0, a.useEffect)(() => {
                        t === p.IU.LITE && (null == c || c.enableLiteAnimation());
                    }, [t, c]),
                    k)
                        ? (0, n.jsx)(g.VibeWidgetFallbackAnimation, { ref: s, className: l })
                        : (0, n.jsx)('div', {
                              ref: s,
                              className: (0, _.$)(v().root, l),
                              ...(0, b.Am)(b.Kq.vibeAnimation.VIBE_ANIMATION),
                              children: (0, n.jsx)('canvas', { ref: m }),
                          });
                }),
                k = (0, a.forwardRef)((e, t) => (0, n.jsx)(y, { forwardRef: t, ...e })),
                L = { enter: v().enter, enterActive: v().enter_active, enterDone: v().enter_done, exit: v().exit, exitActive: v().exit_active, exitDone: v().exit_done },
                N = (0, r.PA)((e) => {
                    let { averageColor: t, className: i } = e,
                        r = (0, a.useRef)(null),
                        m = (0, a.useRef)(null),
                        [v, _] = (0, a.useState)(!1),
                        { experiments: b, settings: h } = (0, u.Pjs)();
                    (0, f.f)();
                    let p = (0, o.c)(() => {
                        _('visible' === document.visibilityState);
                    });
                    (0, a.useEffect)(
                        () => (
                            p(),
                            document.addEventListener('visibilitychange', p),
                            () => {
                                document.removeEventListener('visibilitychange', p);
                            }
                        ),
                        [p],
                    );
                    let A = b.checkExperiment(u.zal.WebNextLiteVersion, 'on'),
                        x = h.isLiteVersionModeEnabled,
                        { isFallback: E, vibeAnimationState: V } = (0, d.I)({ isEnabled: A && v }),
                        y = E || (A && x) || 'undefined' == typeof Worker,
                        N = (0, c.L)(() =>
                            y
                                ? (0, n.jsx)(g.VibeWidgetFallbackAnimation, { ref: m, className: i })
                                : (0, n.jsx)(k, { ref: r, vibeAnimationState: V, isVibeAnimationVisible: v, averageColor: t, className: i }),
                        );
                    return (0, n.jsx)(s.A, {
                        mode: 'out-in',
                        children: (0, n.jsx)(l.A, { nodeRef: y ? m : r, timeout: 1e3, appear: !0, classNames: L, children: N }, y ? 'fallback' : 'shader'),
                    });
                });
        },
        59688: (e) => {
            e.exports = {
                message: 'NotificationLiteVersion_message__IT6FA',
                icon: 'NotificationLiteVersion_icon__T4E8d',
                title: 'NotificationLiteVersion_title__UPCcu',
                linkText: 'NotificationLiteVersion_linkText__L6r3P',
                link: 'NotificationLiteVersion_link__cQUUY',
            };
        },
        60196: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => s });
            var n = i(55178),
                r = i(71483),
                a = i(49574);
            let s = (e) => {
                var t, i;
                let { handleTrackLike: s, shouldCheckVibeContext: l } = e,
                    [o, c] = (0, n.useState)({}),
                    { sonataState: u } = (0, a.Pjs)();
                (0, n.useEffect)(() => {
                    let e = () => {
                        var e, t, i, n;
                        o.id === (null == (e = u.entityMeta) ? void 0 : e.id) && !o.isLiked && (null == (n = u.entityMeta) ? void 0 : n.isLiked) && s(),
                            c({ id: null == (t = u.entityMeta) ? void 0 : t.id, isLiked: null == (i = u.entityMeta) ? void 0 : i.isLiked });
                    };
                    l ? u.contextType === r.K.Vibe && e() : e();
                }, [s, l, u.contextType, null == (t = u.entityMeta) ? void 0 : t.id, null == (i = u.entityMeta) ? void 0 : i.isLiked, o.id, o.isLiked]);
            };
        },
        75297: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => h });
            var n = i(32290),
                r = i(55178),
                a = i(91027),
                s = i(73295),
                l = i(49574),
                o = i(96103),
                c = i(39407),
                u = i(82586),
                d = i(71926),
                f = i(44574),
                m = i(59688),
                v = i.n(m);
            let g = (0, o.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: i } = (0, l.Pjs)(),
                        a = (0, r.useCallback)(() => {
                            i.modal.isOpened && i.modal.close();
                        }, [i]),
                        s = (0, r.useMemo)(
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
                                            href: l.Zyd.settings.href,
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
                        message: s,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                _ = 'vibeAnimationDegradationLevel',
                b = null,
                h = (e) => {
                    let { isEnabled: t } = e,
                        i = (0, r.useRef)(0),
                        o = (0, l.NFA)(),
                        { notify: c } = (0, l.lkh)(),
                        { settings: u } = (0, l.Pjs)(),
                        [d, f] = (0, r.useState)(!1),
                        [m, v] = (0, r.useState)(s.IU.DEFAULT),
                        h = o.get(l.vgk),
                        p = (0, r.useMemo)(() => (b || (b = new s.Qq()), b), []),
                        A = (0, a.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                i.current = 0;
                                return;
                            }
                            if ((i.current++, !(i.current < 3))) {
                                if (((i.current = 0), m !== s.IU.LITE)) {
                                    v(s.IU.LITE), h.count('liteAnimation', _);
                                    return;
                                }
                                d ||
                                    (f(!0),
                                    h.count('fallback', _),
                                    u.setLiteVersionMode(l.wv5.ENABLED, !0),
                                    c((0, n.jsx)(g, {}), { containerId: l.uQT.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                u.isLiteVersionModeAvailableForToggle || !t || d ? (p.stopMeasuring(), (i.current = 0)) : p.startMeasuring(A),
                                () => {
                                    p.stopMeasuring();
                                }
                            ),
                            [p, A, t, d, u.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: d, vibeAnimationState: m }
                    );
                };
        },
        87488: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var n = i(55178),
                r = i(49574);
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
    },
]);
