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
                l = i(21732),
                o = i(50162),
                c = i(57594),
                u = i(12916),
                d = i.n(u);
            let f = (0, a.PA)((e) => {
                    let { forwardRef: t, className: i } = e,
                        { sonataState: a, vibe: s } = (0, c.g)(),
                        u = !!(s.isShuffleVibe && a.isVibeContext);
                    return (0, n.jsx)('div', {
                        ref: t,
                        className: (0, r.$)(d().root, d().root_visible, { [d().fallback]: a.isPlaying && !u }, i),
                        'data-test-id': l.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: (0, n.jsx)(o._V, {
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
            i.d(t, { A: () => g });
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
            let g = m;
        },
        51013: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { VibeWidgetAnimation: () => C });
            var n = i(32290),
                r = i(96103),
                a = i(55178),
                s = i(38248),
                l = i(9612),
                o = i(91027),
                c = i(6752),
                u = i(57594),
                d = i(75297),
                f = i(87488),
                m = i(12916),
                g = i.n(m),
                v = i(11560),
                _ = i(63618),
                b = i(21732),
                h = i(54862),
                E = i(73295),
                p = i(62376),
                A = i(92496),
                x = i(80451);
            let V = (e, t, i) => ({ h: e, s: t / 100, l: i / 100 }),
                y = (e) => {
                    let { averageColor: t, isPlaying: i, isShuffleVibeActive: n } = e,
                        { h: r, s: a, l: s } = (0, x.hexToHsl)(t);
                    return i || n
                        ? { top: V(r, a + 15, s + 10), middle: V(r, a + 15, s + 5), bottom: V(r, a, s) }
                        : { top: V(50, 100, 50), middle: V(330, 100, 50), bottom: V(300, 100, 50) };
                },
                Q = () => !window.VIBE_ANIMATION_USE_VIBE_WIDGET_COLORS?.() ?? !1;
            var L = i(60196);
            let k = { transparent: !0 },
                N = (0, r.PA)((e) => {
                    let { vibeAnimationState: t, isVibeAnimationVisible: i, averageColor: r, forwardRef: s, className: l } = e,
                        [c, d] = (0, h.d)(),
                        [f, m] = (0, h.d)(),
                        [x, V] = (0, h.d)(),
                        [N, S] = (0, a.useState)(!1),
                        { user: B, sonataState: w, settings: C, vibe: M } = (0, u.g)(),
                        R = (0, p.U)(),
                        I = (0, A.i)(),
                        P = (0, o.c)((e) => {
                            e.data.type === E.iR.ERROR && (S(!0), R.error(e.data.payload));
                        }),
                        j = (0, o.c)(() => {
                            S(!0);
                        }),
                        T = (0, o.c)(() => {
                            null == c || c.likeAnimation();
                        });
                    (0, L.d)({ handleTrackLike: T, shouldCheckVibeContext: !1 });
                    let W = (0, o.c)(() => {
                        if (!(null == I ? void 0 : I.analyser)) return;
                        let [e, t, i] = I.analyser.getAverageFrequencies([
                            { low: 0, high: 450 },
                            { low: 400, high: 5e3 },
                            { low: 5e3, high: 2e4 },
                        ]);
                        let rms = I.analyser.getRMS(),
                            rmsAlt = I.analyser.getRMSAlt(),
                            energy = ((rms + rmsAlt) / 2) * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT?.() ?? 1) + 0.3,
                            energyNormalized = window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.() ? energy : (w?.entityMeta?.trackParameters?.energy ?? 1);
                        null == c || c.updateEnergy(energyNormalized),
                            null == c || c.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != i ? i : 0 });
                    });
                    (0, a.useEffect)(() => {
                        var a, s;
                        if (!f || c) return;
                        if (!f.transferControlToOffscreen) return void j();
                        let e = f.transferControlToOffscreen(),
                            i = new E.a6({
                                offscreenCanvas: e,
                                state: t,
                                collectionHue: Q() ? void 0 : B.collectionHue,
                                shaderOptions: k,
                                fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25,
                                resolution: window.nativeSettings.get('modSettings.vibeAnimationEnhancement.canvasResolution') ?? 650,
                                onMessage: P,
                                onError: M,
                            }),
                            n = null == (s = w.entityMeta) || null == (a = s.trackParameters) ? void 0 : a.hue;
                        d(i),
                            V(new E.Rv(E.p4, W)),
                            Q()
                                ? i.applySettings({
                                      customColors: y({ averageColor: r, isPlaying: w.isPlaying, isShuffleVibeActive: !!(M.isShuffleVibe && w.isVibeContext) }),
                                  })
                                : i.applySettings({ hue: n, collectionHue: B.collectionHue });
                    }, [
                        r,
                        f,
                        j,
                        P,
                        V,
                        d,
                        w.isPlaying,
                        w.isVibeContext,
                        W,
                        M.isShuffleVibe,
                        t,
                        c,
                        B.collectionHue,
                        null == w.entityMeta ? void 0 : w.entityMeta.trackParameters,
                    ]);
                    let D = (0, o.c)(() => {
                        null == c || c.destroy(), d(null), null == x || x.stop(), V(null);
                    });
                    return ((0, a.useEffect)(
                        () => () => {
                            D();
                        },
                        [D],
                    ),
                    (0, a.useEffect)(() => {
                        var e, t;
                        let i = null == (t = w.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue;
                        Q()
                            ? null == c ||
                              c.applySettings({
                                  customColors: y({ averageColor: r, isPlaying: w.isPlaying, isShuffleVibeActive: !!(M.isShuffleVibe && w.isVibeContext) }),
                              })
                            : null == c || c.applySettings({ hue: i, collectionHue: B.collectionHue });
                    }, [r, w.isPlaying, w.isVibeContext, M.isShuffleVibe, c, B.collectionHue, null == w.entityMeta ? void 0 : w.entityMeta.trackParameters]),
                    (0, a.useEffect)(() => {
                        var e, t, n, a, oA;
                        let s = null == (t = w.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            l = null == (a = w.entityMeta) || null == (n = a.trackParameters) ? void 0 : n.energy,
                            o = null == (oA = w.entityMeta) ? void 0 : oA.trackParameters;
                        o && o.userCollectionHue && B.setUserCollectionHue(o.userCollectionHue),
                            i && w.isPlaying
                                ? (null == c ||
                                      c.playAnimation(
                                          Q()
                                              ? {
                                                    energy: l,
                                                    customColors: y({
                                                        averageColor: r,
                                                        isPlaying: w.isPlaying,
                                                        isShuffleVibeActive: !!(M.isShuffleVibe && w.isVibeContext),
                                                    }),
                                                }
                                              : { hue: s, energy: l, collectionHue: o && o.userCollectionHue },
                                      ),
                                  null == x || x.start())
                                : (null == c || c.idleAnimation(), null == x || x.stop());
                    }, [x, i, w.isPlaying, c, B, r, w.isVibeContext, M.isShuffleVibe, null == w.entityMeta ? void 0 : w.entityMeta.trackParameters]),
                    (0, a.useEffect)(() => {
                        i ? null == c || c.enable() : null == c || c.disable();
                    }, [i, c]),
                    (0, a.useEffect)(() => {
                        null == c || c.updateLayout(C.isMobile);
                    }, [C.isMobile, c]),
                    (0, a.useEffect)(() => {
                        t === E.IU.LITE && (null == c || c.enableLiteAnimation());
                    }, [t, c]),
                    N)
                        ? (0, n.jsx)(v.VibeWidgetFallbackAnimation, { ref: s, className: l })
                        : (0, n.jsx)('div', {
                              ref: s,
                              className: (0, _.$)(g().root, l),
                              'data-test-id': b.Kq.vibeAnimation.VIBE_ANIMATION,
                              children: (0, n.jsx)('canvas', { ref: m }),
                          });
                }),
                S = (0, a.forwardRef)((e, t) => (0, n.jsx)(N, { forwardRef: t, ...e })),
                w = { enter: g().enter, enterActive: g().enter_active, enterDone: g().enter_done, exit: g().exit, exitActive: g().exit_active, exitDone: g().exit_done },
                C = (0, r.PA)((e) => {
                    let { averageColor: t, className: i } = e,
                        r = (0, a.useRef)(null),
                        m = (0, a.useRef)(null),
                        [g, _] = (0, a.useState)(!1),
                        { settings: b } = (0, u.g)();
                    (0, f.f)();
                    let h = (0, o.c)(() => {
                        _('visible' === document.visibilityState);
                    });
                    (0, a.useEffect)(
                        () => (
                            h(),
                            document.addEventListener('visibilitychange', h),
                            () => {
                                document.removeEventListener('visibilitychange', h);
                            }
                        ),
                        [h],
                    );
                    let E = b.isLiteVersionModeEnabled,
                        { isFallback: p, vibeAnimationState: A } = (0, d.I)({ isEnabled: g }),
                        x = p || E || 'undefined' == typeof Worker,
                        V = (0, c.L)(() =>
                            x
                                ? (0, n.jsx)(v.VibeWidgetFallbackAnimation, { ref: m, className: i })
                                : (0, n.jsx)(S, { ref: r, vibeAnimationState: A, isVibeAnimationVisible: g, averageColor: t, className: i }),
                        );
                    return (0, n.jsx)(s.A, {
                        mode: 'out-in',
                        children: (0, n.jsx)(l.A, { nodeRef: x ? m : r, timeout: 1e3, appear: !0, classNames: w, children: V }, x ? 'fallback' : 'shader'),
                    });
                });
        },
        53453: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var n = (function (e) {
                return (e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e;
            })({});
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
                a = i(57594);
            let s = (e) => {
                var t, i;
                let { handleTrackLike: s, shouldCheckVibeContext: l } = e,
                    [o, c] = (0, n.useState)({}),
                    { sonataState: u } = (0, a.g)();
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
            i.d(t, { I: () => L });
            var n = i(32290),
                r = i(55178),
                a = i(91027),
                s = i(73295),
                l = i(70204),
                o = i(34186),
                c = i(45477),
                u = i(75582),
                d = i(57594),
                f = i(53453),
                m = i(96103),
                g = i(39407),
                v = i(82586),
                _ = i(71926),
                b = i(20472),
                h = i(58534),
                E = i(61258),
                p = i(59688),
                A = i.n(p);
            let x = (0, m.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: i } = (0, d.g)(),
                        a = (0, r.useCallback)(() => {
                            i.modal.isOpened && i.modal.close();
                        }, [i]),
                        s = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, n.jsx)(_.HL, {
                                            className: A().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, n.jsx)(g.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, n.jsx)(E.N, {
                                            className: A().link,
                                            href: b.Z.settings.href,
                                            onClick: a,
                                            children: (0, n.jsx)(_.HL, {
                                                className: A().linkText,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, n.jsx)(g.A, { id: 'lite-version.go-to-settings' }),
                                            }),
                                        }),
                                    ],
                                }),
                            [a],
                        );
                    return (0, n.jsx)(h.$, {
                        cover: (0, n.jsx)(v.I, { className: A().icon, size: 'xs', variant: 'liteVersion' }),
                        message: s,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                V = 'vibeAnimationDegradationLevel',
                y = null,
                L = (e) => {
                    let { isEnabled: t } = e,
                        i = (0, r.useRef)(0),
                        m = (0, o.N)(),
                        { notify: g } = (0, u.l)(),
                        { settings: v } = (0, d.g)(),
                        [_, b] = (0, r.useState)(!1),
                        [h, E] = (0, r.useState)(s.IU.DEFAULT),
                        p = m.get(l.vg),
                        A = (0, r.useMemo)(() => (y || (y = new s.Qq()), y), []),
                        L = (0, a.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                i.current = 0;
                                return;
                            }
                            if ((i.current++, !(i.current < 3))) {
                                if (((i.current = 0), h !== s.IU.LITE)) {
                                    E(s.IU.LITE), p.count('liteAnimation', V);
                                    return;
                                }
                                _ ||
                                    (b(!0),
                                    p.count('fallback', V),
                                    v.setLiteVersionMode(f.w.ENABLED, !0),
                                    g((0, n.jsx)(x, {}), { containerId: c.u.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                v.isLiteVersionModeAvailableForToggle || !t || _ ? (A.stopMeasuring(), (i.current = 0)) : A.startMeasuring(L),
                                () => {
                                    A.stopMeasuring();
                                }
                            ),
                            [A, L, t, _, v.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: _, vibeAnimationState: h }
                    );
                };
        },
        87488: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var n = i(55178),
                r = i(70204),
                a = i(34186);
            let s = () => {
                let e = (0, a.N)().get(r.vg),
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
        92496: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => r, i: () => a });
            var n = i(55178);
            let r = (0, n.createContext)(null);
            function a() {
                return (0, n.useContext)(r);
            }
        },
    },
]);
