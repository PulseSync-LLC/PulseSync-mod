(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2730, 6232],
    {
        8689: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => M });
            var i = n(25839),
                r = n(74631),
                l = n(71035),
                a = n(36095),
                o = n(36484),
                s = n(62562),
                u = n(91149),
                c = n(92942),
                d = n(27954),
                f = n(95029),
                v = n(88204),
                m = n(8487),
                _ = n(66738),
                p = n(4254),
                g = n(53712),
                E = n(51790),
                b = n(97522),
                h = n(81592),
                x = n.n(h);
            let y = (0, v.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: n } = (0, d.g)(),
                        l = (0, r.useCallback)(() => {
                            n.modal.isOpened && n.modal.close();
                        }, [n]),
                        a = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: x().message,
                                    children: [
                                        (0, i.jsx)(p.HL, {
                                            className: x().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, i.jsx)(m.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, i.jsx)(b.N, {
                                            className: x().link,
                                            href: g.Z.settings.href,
                                            onClick: l,
                                            children: (0, i.jsx)(p.HL, {
                                                className: x().linkText,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, i.jsx)(m.A, { id: 'lite-version.go-to-settings' }),
                                            }),
                                        }),
                                    ],
                                }),
                            [l],
                        );
                    return (0, i.jsx)(E.$, {
                        cover: (0, i.jsx)(_.I, { className: x().icon, size: 'xs', variant: 'liteVersion' }),
                        message: a,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                A = 'vibeAnimationDegradationLevel',
                k = null,
                M = (e) => {
                    let { isEnabled: t } = e,
                        n = (0, r.useRef)(0),
                        v = (0, s.N)(),
                        { notify: m } = (0, c.l)(),
                        { settings: _ } = (0, d.g)(),
                        [p, g] = (0, r.useState)(!1),
                        [E, b] = (0, r.useState)(a.IU.DEFAULT),
                        h = v.get(o.vg),
                        x = (0, r.useMemo)(() => (k || (k = new a.Qq()), k), []),
                        M = (0, l.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                n.current = 0;
                                return;
                            }
                            if ((n.current++, !(n.current < 3))) {
                                if (((n.current = 0), E !== a.IU.LITE)) {
                                    (b(a.IU.LITE), h.count('liteAnimation', A));
                                    return;
                                }
                                p ||
                                    (g(!0),
                                    h.count('fallback', A),
                                    _.setLiteVersionMode(f.w.ENABLED, !0),
                                    m((0, i.jsx)(y, {}), { containerId: u.u.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                _.isLiteVersionModeAvailableForToggle || !t || p ? (x.stopMeasuring(), (n.current = 0)) : x.startMeasuring(M),
                                () => {
                                    x.stopMeasuring();
                                }
                            ),
                            [x, M, t, p, _.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: p, vibeAnimationState: E }
                    );
                };
        },
        23144: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r, i: () => l });
            var i = n(74631);
            let r = (0, i.createContext)(null);
            function l() {
                return (0, i.useContext)(r);
            }
        },
        29148: (e) => {
            e.exports = { root: 'VibeDebugPanel_root__97HZQ', forceTop: 'VibeDebugPanel_forceTop__VY0oQ' };
        },
        56232: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { VibeFallbackAnimation: () => m, VibeFallbackAnimationComponent: () => v }));
            var i = n(25839),
                r = n(82298),
                l = n(88204),
                a = n(74631),
                o = n(61493),
                s = n(27954),
                u = n(96618);
            let c = (e, t) => ''.concat('', '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(t);
            var d = n(67648),
                f = n.n(d);
            let v = (0, l.PA)((e) => {
                    var t, n;
                    let { forwardRef: l, className: d } = e,
                        v = (0, a.useRef)(null),
                        { theme: m } = (0, u.W)(),
                        { sonataState: _ } = (0, s.g)(),
                        p = _.isPlaying && _.isVibeContext;
                    (0, a.useEffect)(() => {
                        var e, t, n;
                        let i = null != (n = null == (t = _.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.energy) ? n : 1;
                        v.current && (v.current.playbackRate = p ? Math.max(1.5 * i, 1) : 0.8);
                    }, [p, null == (n = _.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.energy]);
                    let g = (0, a.useMemo)(
                        () =>
                            ((e) => {
                                if (e) return { posterSrc: c(e, 'jpeg'), videoSrc: c(e, 'mp4') };
                            })(m),
                        [m],
                    );
                    return (0, i.jsxs)('div', {
                        ref: l,
                        className: (0, r.$)(f().root, f().root_visible, d),
                        'data-test-id': o.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: [
                            (0, i.jsx)('video', {
                                ref: v,
                                preload: 'metadata',
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                width: 1e3,
                                height: 1e3,
                                src: null == g ? void 0 : g.videoSrc,
                                poster: null == g ? void 0 : g.posterSrc,
                            }),
                            (0, i.jsx)('div', {}),
                        ],
                    });
                }),
                m = (0, a.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        62730: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { VibeAnimation: () => R }));
            var i = n(25839),
                r = n(88204),
                l = n(74631),
                a = n(73760),
                o = n(45705),
                s = n(71035),
                u = n(49656),
                c = n(27954),
                d = n(8689),
                f = n(93976),
                v = n(67648),
                m = n.n(v),
                _ = n(56232),
                p = n(82298),
                g = n(61493),
                E = n(68934),
                b = n(36095),
                h = n(84e3),
                x = n(23144),
                y = n(49337),
                A = n(96618),
                k = n(44806),
                M = n(66460),
                L = n(4071),
                V = n(5531),
                N = n(29148),
                S = n.n(N);
            let P = (0, r.PA)((e) => {
                    var t, n, r, a, o, u, d, f;
                    let { vibeAnimationState: v, isIntersecting: L, forwardRef: V, className: N } = e,
                        [S, P] = (0, E.d)(),
                        [j, I] = (0, E.d)(),
                        [R, w] = (0, E.d)(),
                        [C, T] = (0, l.useState)(!1),
                        { experiments: D, user: F, sonataState: U, settings: H } = (0, c.g)(),
                        K = (0, h.U)(),
                        { theme: O } = (0, A.W)(),
                        B = (0, x.i)(),
                        z = D.checkExperiment(k.z.WebNextShaderV3, 'on'),
                        W = (0, s.c)((e) => {
                            e.data.type === b.iR.ERROR && (T(!0), K.error(e.data.payload));
                        }),
                        q = (0, s.c)(() => {
                            T(!0);
                        }),
                        Q = U.isPlaying && U.isVibeContext,
                        G = (0, s.c)(() => {
                            null == S || S.likeAnimation();
                        });
                    (0, M.d)({ handleTrackLike: G, shouldCheckVibeContext: !0 });
                    let X = (0, s.c)(() => {
                        if (!(null == B ? void 0 : B.analyser)) return;
                        let [e, t, n] = B.analyser.getAverageFrequencies([
                            { low: 0, high: 250 },
                            { low: 500, high: 2e3 },
                            { low: 2e3, high: 4e3 },
                        ]);
                        null == S || S.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != n ? n : 0 });
                    });
                    (0, l.useEffect)(() => {
                        var e, t;
                        if (!j || S) return;
                        if (!j.transferControlToOffscreen) return void q();
                        let n = j.transferControlToOffscreen(),
                            i = new b.a6({
                                offscreenCanvas: n,
                                state: v,
                                isShaderV3Enabled: z,
                                collectionHue: F.collectionHue,
                                shaderOptions: void 0,
                                onMessage: W,
                                onError: q,
                            });
                        (P(i), w(new b.Rv(b.p4, X)));
                        let r = null == (t = U.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            l = F.collectionHue;
                        i.applySettings({ hue: r, collectionHue: l });
                    }, [R, j, q, W, w, P, z, null == (n = U.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.hue, X, F.collectionHue, v, S]);
                    let Y = (0, s.c)(() => {
                        (null == S || S.destroy(), P(null), null == R || R.stop(), w(null));
                    });
                    return ((0, l.useEffect)(
                        () => () => {
                            Y();
                        },
                        [Y],
                    ),
                    (0, l.useEffect)(() => {
                        L && Q ? null == R || R.start() : null == R || R.stop();
                    }, [R, L, Q, S]),
                    (0, l.useEffect)(() => {
                        if (S) {
                            let e = O === y.S.Dark ? 0.0705 : 0.9607;
                            null == S || S.applySettings({ backgroundColor: e });
                        }
                    }, [O, S]),
                    (0, l.useEffect)(() => {
                        var e, t, n, i, r, l;
                        let a = null == (t = U.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            o = null == (i = U.entityMeta) || null == (n = i.trackParameters) ? void 0 : n.energy,
                            s = null == (l = U.entityMeta) || null == (r = l.trackParameters) ? void 0 : r.userCollectionHue;
                        (s && F.setUserCollectionHue(s), Q ? null == S || S.playAnimation({ hue: a, energy: o, collectionHue: s }) : null == S || S.idleAnimation());
                    }, [
                        Q,
                        null == (a = U.entityMeta) || null == (r = a.trackParameters) ? void 0 : r.energy,
                        null == (u = U.entityMeta) || null == (o = u.trackParameters) ? void 0 : o.hue,
                        null == (f = U.entityMeta) || null == (d = f.trackParameters) ? void 0 : d.userCollectionHue,
                        F,
                        S,
                    ]),
                    (0, l.useEffect)(() => {
                        L ? null == S || S.enable() : null == S || S.disable();
                    }, [L, S]),
                    (0, l.useEffect)(() => {
                        null == S || S.updateLayout(H.isMobile);
                    }, [H.isMobile, S]),
                    (0, l.useEffect)(() => {
                        v === b.IU.LITE && (null == S || S.enableLiteAnimation());
                    }, [v, S]),
                    C)
                        ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: V, className: N })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      ref: V,
                                      className: (0, p.$)(m().root, N),
                                      'data-test-id': g.Kq.vibeAnimation.VIBE_ANIMATION,
                                      children: (0, i.jsx)('canvas', { ref: I }),
                                  }),
                                  !1,
                              ],
                          });
                }),
                j = (0, l.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e })),
                I = { enter: m().enter, enterActive: m().enter_active, enterDone: m().enter_done, exit: m().exit, exitActive: m().exit_active, exitDone: m().exit_done },
                R = (0, r.PA)((e) => {
                    let { isIntersecting: t = !0, className: n } = e,
                        r = (0, l.useRef)(null),
                        v = (0, l.useRef)(null),
                        [m, p] = (0, l.useState)(!1),
                        { settings: g } = (0, c.g)();
                    (0, f.f)();
                    let E = (0, s.c)(() => {
                        p('visible' === document.visibilityState);
                    });
                    (0, l.useEffect)(
                        () => (
                            E(),
                            document.addEventListener('visibilitychange', E),
                            () => {
                                document.removeEventListener('visibilitychange', E);
                            }
                        ),
                        [E],
                    );
                    let b = g.isLiteVersionModeEnabled,
                        { isFallback: h, vibeAnimationState: x } = (0, d.I)({ isEnabled: m && t }),
                        y = h || b || 'undefined' == typeof Worker,
                        A = (0, u.L)(() =>
                            y
                                ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: v, className: n })
                                : (0, i.jsx)(j, { ref: r, vibeAnimationState: x, isIntersecting: m && t, className: n }),
                        );
                    return (0, i.jsx)(a.A, {
                        mode: 'out-in',
                        children: (0, i.jsx)(o.A, { nodeRef: y ? v : r, timeout: 1e3, appear: !0, classNames: I, children: A }, y ? 'fallback' : 'shader'),
                    });
                });
        },
        66460: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => a });
            var i = n(74631),
                r = n(22939),
                l = n(27954);
            let a = (e) => {
                var t, n;
                let { handleTrackLike: a, shouldCheckVibeContext: o } = e,
                    [s, u] = (0, i.useState)({}),
                    { sonataState: c } = (0, l.g)();
                (0, i.useEffect)(() => {
                    let e = () => {
                        var e, t, n, i;
                        (s.id === (null == (e = c.entityMeta) ? void 0 : e.id) && !s.isLiked && (null == (i = c.entityMeta) ? void 0 : i.isLiked) && a(),
                            u({ id: null == (t = c.entityMeta) ? void 0 : t.id, isLiked: null == (n = c.entityMeta) ? void 0 : n.isLiked }));
                    };
                    o ? c.contextType === r.K.Vibe && e() : e();
                }, [a, o, c.contextType, null == (t = c.entityMeta) ? void 0 : t.id, null == (n = c.entityMeta) ? void 0 : n.isLiked, s.id, s.isLiked]);
            };
        },
        67648: (e) => {
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
        73760: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => m });
            var i,
                r,
                l = n(87895),
                a = n(74631),
                o = n(24227),
                s = n(83218),
                u = { out: 'out-in', in: 'in-out' },
                c = function (e, t, n) {
                    return function () {
                        var i;
                        (e.props[t] && (i = e.props)[t].apply(i, arguments), n());
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
                                (void 0 === n && (n = t.state.current), t.setState({ status: e, current: n }));
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
            ((v.propTypes = {}), (v.defaultProps = { mode: u.out }));
            let m = v;
        },
        81592: (e) => {
            e.exports = {
                message: 'NotificationLiteVersion_message__IT6FA',
                icon: 'NotificationLiteVersion_icon__T4E8d',
                title: 'NotificationLiteVersion_title__UPCcu',
                linkText: 'NotificationLiteVersion_linkText__L6r3P',
                link: 'NotificationLiteVersion_link__cQUUY',
            };
        },
        93976: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => a });
            var i = n(74631),
                r = n(36484),
                l = n(62562);
            let a = () => {
                let e = (0, l.N)().get(r.vg),
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
        95029: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => i });
            var i = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
    },
]);
