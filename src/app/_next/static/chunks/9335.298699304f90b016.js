(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5266, 9335],
    {
        15266: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeWidgetFallbackAnimation: () => f });
            var i = n(54486),
                r = n(50420),
                a = n(28303),
                o = n(61910),
                s = n(31500),
                l = n(58360),
                c = n(21478),
                u = n.n(c);
            let d = (0, a.PA)((e) => {
                    let { forwardRef: t, className: n } = e;
                    return (0, i.jsx)('div', {
                        ref: t,
                        className: (0, r.$)(u().root, u().fallback, u().root_visible, n),
                        ...(0, s.Am)(s.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: (0, i.jsx)(l.Image, {
                            src: 'avatars.mds.yandex.net/get-music-misc/34161/img.698c75af24d02130765b5b7c/%%',
                            className: u().image,
                            size: 400,
                            withAvatarReplace: !0,
                            withLoadingIndicator: !1,
                            fit: 'cover',
                        }),
                    });
                }),
                f = (0, o.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        21478: (e) => {
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
        29335: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeWidgetAnimation: () => N });
            var i = n(54486),
                r = n(28303),
                a = n(61910),
                o = n(84974),
                s = n(63664),
                l = n(8817),
                c = n(27510),
                u = n(83252),
                d = n(43580),
                f = n(96638),
                m = n(21478),
                v = n.n(m),
                _ = n(15266),
                g = n(50420),
                p = n(31500),
                b = n(67648),
                A = n(29444);
            let h = (e, t, n) => ({ h: e, s: t / 100, l: n / 100 }),
                E = (e, t) => {
                    let { h: n, s: i, l: r } = (0, u.g8k)(e);
                    return { top: h(n, i + (t ? 25 : 15), r + (t ? 15 : 10)), middle: h(n, i + (t ? 20 : 15), r + (t ? 10 : 5)), bottom: h(n, i, r) };
                };
            var x = n(49802);
            let k = { transparent: !0 },
                y = (0, r.PA)((e) => {
                    let { vibeAnimationState: t, isVibeAnimationVisible: n, averageColor: r, hasCover: o, forwardRef: s, className: c } = e,
                        [d, f] = (0, b.d)(),
                        [m, h] = (0, b.d)(),
                        [y, V] = (0, b.d)(),
                        [L, N] = (0, a.useState)(!1),
                        { sonataState: j, settings: w } = (0, u.Pjs)(),
                        M = (0, u.UlF)(),
                        R = (0, u.iIU)(),
                        I = (0, l.c)((e) => {
                            e.data.type === A.iR.ERROR && (N(!0), M.error(e.data.payload));
                        }),
                        T = (0, l.c)(() => {
                            N(!0);
                        }),
                        W = (0, l.c)(() => {
                            null == d || d.likeAnimation();
                        });
                    (0, x.d)(W);
                    let P = (0, l.c)(() => {
                        if (!(null == R ? void 0 : R.analyser)) return;
                        let [e, t, n] = R.analyser.getAverageFrequencies([
                            { low: 0, high: 250 },
                            { low: 500, high: 2e3 },
                            { low: 2e3, high: 4e3 },
                        ]);
                        null == d || d.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != n ? n : 0 });
                    });
                    (0, a.useEffect)(() => {
                        if (!m || d) return;
                        if (!m.transferControlToOffscreen) return void T();
                        let e = m.transferControlToOffscreen(),
                            n = new A.a6({ offscreenCanvas: e, state: t, shaderOptions: k, onMessage: I, onError: T });
                        f(n), V(new A.Rv(A.p4, P)), n.applySettings({ customColors: E(r, o) });
                    }, [r, m, T, I, o, V, f, P, t, d]);
                    let S = (0, l.c)(() => {
                        null == d || d.destroy(), f(null), null == y || y.stop(), V(null);
                    });
                    return ((0, a.useEffect)(
                        () => () => {
                            S();
                        },
                        [S],
                    ),
                    (0, a.useEffect)(() => {
                        null == d || d.applySettings({ customColors: E(r, o) });
                    }, [r, o, d]),
                    (0, a.useEffect)(() => {
                        n && j.isPlaying ? (null == d || d.playAnimation({}), null == y || y.start()) : (null == d || d.idleAnimation(), null == y || y.stop());
                    }, [y, n, j.isPlaying, d]),
                    (0, a.useEffect)(() => {
                        n ? null == d || d.enable() : null == d || d.disable();
                    }, [n, d]),
                    (0, a.useEffect)(() => {
                        null == d || d.updateLayout(w.isMobile);
                    }, [w.isMobile, d]),
                    (0, a.useEffect)(() => {
                        t === A.IU.LITE && (null == d || d.enableLiteAnimation());
                    }, [t, d]),
                    L)
                        ? (0, i.jsx)(_.VibeWidgetFallbackAnimation, { ref: s, className: c })
                        : (0, i.jsx)('div', {
                              ref: s,
                              className: (0, g.$)(v().root, c),
                              ...(0, p.Am)(p.Kq.vibeAnimation.VIBE_ANIMATION),
                              children: (0, i.jsx)('canvas', { ref: h }),
                          });
                }),
                V = (0, a.forwardRef)((e, t) => (0, i.jsx)(y, { forwardRef: t, ...e })),
                L = { enter: v().enter, enterActive: v().enter_active, enterDone: v().enter_done, exit: v().exit, exitActive: v().exit_active, exitDone: v().exit_done },
                N = (0, r.PA)((e) => {
                    let { averageColor: t, hasCover: n, className: r } = e,
                        m = (0, a.useRef)(null),
                        v = (0, a.useRef)(null),
                        [g, p] = (0, a.useState)(!1),
                        { experiments: b, settings: A } = (0, u.Pjs)();
                    (0, f.f)();
                    let h = (0, l.c)(() => {
                        p('visible' === document.visibilityState);
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
                    let E = b.checkExperiment(u.zal.WebNextLiteVersion, 'on'),
                        x = A.isLiteVersionModeEnabled,
                        { isFallback: k, vibeAnimationState: y } = (0, d.I)({ isEnabled: E && g }),
                        N = k || (E && x) || 'undefined' == typeof Worker,
                        j = (0, c.L)(() =>
                            N
                                ? (0, i.jsx)(_.VibeWidgetFallbackAnimation, { ref: v, className: r })
                                : (0, i.jsx)(V, { ref: m, vibeAnimationState: y, isVibeAnimationVisible: g, averageColor: t, hasCover: n, className: r }),
                        );
                    return (0, i.jsx)(o.A, {
                        mode: 'out-in',
                        children: (0, i.jsx)(s.A, { nodeRef: N ? v : m, timeout: 1e3, appear: !0, classNames: L, children: j }, N ? 'fallback' : 'shader'),
                    });
                });
        },
        43580: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => b });
            var i = n(54486),
                r = n(61910),
                a = n(8817),
                o = n(29444),
                s = n(83252),
                l = n(28303),
                c = n(47713),
                u = n(5956),
                d = n(97800),
                f = n(80585),
                m = n(63050),
                v = n.n(m);
            let _ = (0, l.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: n } = (0, s.Pjs)(),
                        a = (0, r.useCallback)(() => {
                            n.modal.isOpened && n.modal.close();
                        }, [n]),
                        o = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: v().message,
                                    children: [
                                        (0, i.jsx)(d.Caption, {
                                            className: v().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, i.jsx)(c.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, i.jsx)(f.N_, {
                                            className: v().link,
                                            href: s.Zyd.settings.href,
                                            onClick: a,
                                            children: (0, i.jsx)(d.Caption, {
                                                className: v().linkText,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, i.jsx)(c.A, { id: 'lite-version.go-to-settings' }),
                                            }),
                                        }),
                                    ],
                                }),
                            [a],
                        );
                    return (0, i.jsx)(f.$W, {
                        cover: (0, i.jsx)(u.Icon, { className: v().icon, size: 'xs', variant: 'liteVersion' }),
                        message: o,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                g = 'vibeAnimationDegradationLevel',
                p = null,
                b = (e) => {
                    let { isEnabled: t } = e,
                        n = (0, r.useRef)(0),
                        l = (0, s.NFA)(),
                        { notify: c } = (0, s.lkh)(),
                        { settings: u } = (0, s.Pjs)(),
                        [d, f] = (0, r.useState)(!1),
                        [m, v] = (0, r.useState)(o.IU.DEFAULT),
                        b = l.get(s.vgk),
                        A = (0, r.useMemo)(() => (p || (p = new o.Qq()), p), []),
                        h = (0, a.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                n.current = 0;
                                return;
                            }
                            if ((n.current++, !(n.current < 3))) {
                                if (((n.current = 0), m !== o.IU.LITE)) {
                                    v(o.IU.LITE), b.count('liteAnimation', g);
                                    return;
                                }
                                d ||
                                    (f(!0),
                                    b.count('fallback', g),
                                    u.setLiteVersionMode(s.wv5.ENABLED, !0),
                                    c((0, i.jsx)(_, {}), { containerId: s.uQT.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                u.isLiteVersionModeAvailableForToggle || !t || d ? (A.stopMeasuring(), (n.current = 0)) : A.startMeasuring(h),
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
        49802: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => o });
            var i = n(61910),
                r = n(63585),
                a = n(83252);
            let o = (e) => {
                var t, n;
                let [o, s] = (0, i.useState)({}),
                    { sonataState: l } = (0, a.Pjs)();
                (0, i.useEffect)(() => {
                    if (l.contextType === r.K.Vibe) {
                        var t, n, i, a;
                        o.id === (null == (t = l.entityMeta) ? void 0 : t.id) && !o.isLiked && (null == (a = l.entityMeta) ? void 0 : a.isLiked) && e(),
                            s({ id: null == (n = l.entityMeta) ? void 0 : n.id, isLiked: null == (i = l.entityMeta) ? void 0 : i.isLiked });
                    }
                }, [l.contextType, null == (t = l.entityMeta) ? void 0 : t.id, null == (n = l.entityMeta) ? void 0 : n.isLiked, o.id, o.isLiked, e]);
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
        84974: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => v });
            var i,
                r,
                a = n(8197),
                o = n(61910),
                s = n(68173),
                l = n(35948),
                c = { out: 'out-in', in: 'in-out' },
                u = function (e, t, n) {
                    return function () {
                        var i;
                        e.props[t] && (i = e.props)[t].apply(i, arguments), n();
                    };
                },
                d =
                    (((i = {})[c.out] = function (e) {
                        var t = e.current,
                            n = e.changeState;
                        return o.cloneElement(t, {
                            in: !1,
                            onExited: u(t, 'onExited', function () {
                                n(s.ns, null);
                            }),
                        });
                    }),
                    (i[c.in] = function (e) {
                        var t = e.current,
                            n = e.changeState,
                            i = e.children;
                        return [
                            t,
                            o.cloneElement(i, {
                                in: !0,
                                onEntered: u(i, 'onEntered', function () {
                                    n(s.ns);
                                }),
                            }),
                        ];
                    }),
                    i),
                f =
                    (((r = {})[c.out] = function (e) {
                        var t = e.children,
                            n = e.changeState;
                        return o.cloneElement(t, {
                            in: !0,
                            onEntered: u(t, 'onEntered', function () {
                                n(s._K, o.cloneElement(t, { in: !0 }));
                            }),
                        });
                    }),
                    (r[c.in] = function (e) {
                        var t = e.current,
                            n = e.children,
                            i = e.changeState;
                        return [
                            o.cloneElement(t, {
                                in: !1,
                                onExited: u(t, 'onExited', function () {
                                    i(s._K, o.cloneElement(n, { in: !0 }));
                                }),
                            }),
                            o.cloneElement(n, { in: !0 }),
                        ];
                    }),
                    r),
                m = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (
                            ((t = e.call.apply(e, [this].concat(i)) || this).state = { status: s._K, current: null }),
                            (t.appeared = !1),
                            (t.changeState = function (e, n) {
                                void 0 === n && (n = t.state.current), t.setState({ status: e, current: n });
                            }),
                            t
                        );
                    }
                    (0, a.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.appeared = !0;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n, i;
                            return null == e.children
                                ? { current: null }
                                : t.status === s.ns && e.mode === c.in
                                  ? { status: s.ns }
                                  : t.current &&
                                      !((n = t.current) === (i = e.children) || (o.isValidElement(n) && o.isValidElement(i) && null != n.key && n.key === i.key)) &&
                                      1
                                    ? { status: s.ze }
                                    : { current: o.cloneElement(e.children, { in: !0 }) };
                        }),
                        (n.render = function () {
                            var e,
                                t = this.props,
                                n = t.children,
                                i = t.mode,
                                r = this.state,
                                a = r.status,
                                c = r.current,
                                u = { children: n, current: c, changeState: this.changeState, status: a };
                            switch (a) {
                                case s.ns:
                                    e = f[i](u);
                                    break;
                                case s.ze:
                                    e = d[i](u);
                                    break;
                                case s._K:
                                    e = c;
                            }
                            return o.createElement(l.A.Provider, { value: { isMounting: !this.appeared } }, e);
                        }),
                        t
                    );
                })(o.Component);
            (m.propTypes = {}), (m.defaultProps = { mode: c.out });
            let v = m;
        },
        96638: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => a });
            var i = n(61910),
                r = n(83252);
            let a = () => {
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
                        let a = i.getParameter(r.UNMASKED_RENDERER_WEBGL);
                        a && (e.count(a, 'gpuRenderer'), (t.current = !1));
                    } catch (e) {}
                    n.remove();
                }, [e]);
            };
        },
    },
]);
