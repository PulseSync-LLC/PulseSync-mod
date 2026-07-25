(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4546, 8158],
    {
        8428: (e) => {
            e.exports = { root: 'VibeDebugPanel_root__97HZQ', forceTop: 'VibeDebugPanel_forceTop__VY0oQ' };
        },
        14546: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeAnimation: () => I });
            var i = n(32290),
                r = n(96103),
                l = n(55178),
                a = n(38248),
                o = n(9612),
                s = n(91027),
                u = n(6752),
                c = n(57594),
                d = n(75297),
                f = n(87488),
                v = n(95920),
                m = n.n(v),
                _ = n(88158),
                p = n(63618),
                g = n(21732),
                E = n(54862),
                b = n(73295),
                h = n(62376),
                x = n(92496),
                y = n(14257),
                A = n(50),
                k = n(60196),
                M = n(63423),
                L = n(30627),
                V = n(8428),
                N = n.n(V);
            let S = (0, r.PA)((e) => {
                    var t, n, r, a, o, u, d, f;
                    let { vibeAnimationState: v, isIntersecting: M, forwardRef: L, className: V } = e,
                        [N, S] = (0, E.d)(),
                        [P, j] = (0, E.d)(),
                        [I, R] = (0, E.d)(),
                        [w, T] = (0, l.useState)(!1),
                        { user: C, sonataState: D, settings: F } = (0, c.g)(),
                        U = (0, h.U)(),
                        { theme: H } = (0, A.W)(),
                        K = (0, x.i)(),
                        O = (0, s.c)((e) => {
                            e.data.type === b.iR.ERROR && (T(!0), U.error(e.data.payload));
                        }),
                        B = (0, s.c)(() => {
                            T(!0);
                        }),
                        z = D.isPlaying && D.isVibeContext,
                        W = (0, s.c)(() => {
                            null == N || N.likeAnimation();
                        });
                    (0, k.d)({ handleTrackLike: W, shouldCheckVibeContext: !0 });
                    let q = (0, s.c)(() => {
                        if (!(null == K ? void 0 : K.analyser)) return;
                        let [e, t, n] = K.analyser.getAverageFrequencies([
                            { low: 0, high: 250 },
                            { low: 500, high: 2e3 },
                            { low: 2e3, high: 4e3 },
                        ]);
                        null == N || N.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != n ? n : 0 });
                    });
                    (0, l.useEffect)(() => {
                        var e, t;
                        if (!P || N) return;
                        if (!P.transferControlToOffscreen) return void B();
                        let n = P.transferControlToOffscreen(),
                            i = new b.a6({ offscreenCanvas: n, state: v, collectionHue: C.collectionHue, shaderOptions: void 0, onMessage: O, onError: B });
                        S(i), R(new b.Rv(b.p4, q));
                        let r = null == (t = D.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            l = C.collectionHue;
                        i.applySettings({ hue: r, collectionHue: l });
                    }, [I, P, B, O, R, S, null == (n = D.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.hue, q, C.collectionHue, v, N]);
                    let Q = (0, s.c)(() => {
                        null == N || N.destroy(), S(null), null == I || I.stop(), R(null);
                    });
                    return ((0, l.useEffect)(
                        () => () => {
                            Q();
                        },
                        [Q],
                    ),
                    (0, l.useEffect)(() => {
                        M && z ? null == I || I.start() : null == I || I.stop();
                    }, [I, M, z, N]),
                    (0, l.useEffect)(() => {
                        if (N) {
                            let e = H === y.S.Dark ? 0.0705 : 0.9607;
                            null == N || N.applySettings({ backgroundColor: e });
                        }
                    }, [H, N]),
                    (0, l.useEffect)(() => {
                        var e, t, n, i, r, l;
                        let a = null == (t = D.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            o = null == (i = D.entityMeta) || null == (n = i.trackParameters) ? void 0 : n.energy,
                            s = null == (l = D.entityMeta) || null == (r = l.trackParameters) ? void 0 : r.userCollectionHue;
                        s && C.setUserCollectionHue(s), z ? null == N || N.playAnimation({ hue: a, energy: o, collectionHue: s }) : null == N || N.idleAnimation();
                    }, [
                        z,
                        null == (a = D.entityMeta) || null == (r = a.trackParameters) ? void 0 : r.energy,
                        null == (u = D.entityMeta) || null == (o = u.trackParameters) ? void 0 : o.hue,
                        null == (f = D.entityMeta) || null == (d = f.trackParameters) ? void 0 : d.userCollectionHue,
                        C,
                        N,
                    ]),
                    (0, l.useEffect)(() => {
                        M ? null == N || N.enable() : null == N || N.disable();
                    }, [M, N]),
                    (0, l.useEffect)(() => {
                        null == N || N.updateLayout(F.isMobile);
                    }, [F.isMobile, N]),
                    (0, l.useEffect)(() => {
                        v === b.IU.LITE && (null == N || N.enableLiteAnimation());
                    }, [v, N]),
                    w)
                        ? (0, i.jsx)(_.VibeFallbackAnimation, { ref: L, className: V })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      ref: L,
                                      className: (0, p.$)(m().root, V),
                                      'data-test-id': g.Kq.vibeAnimation.VIBE_ANIMATION,
                                      children: (0, i.jsx)('canvas', { ref: j }),
                                  }),
                                  !1,
                              ],
                          });
                }),
                P = (0, l.forwardRef)((e, t) => (0, i.jsx)(S, { forwardRef: t, ...e })),
                j = { enter: m().enter, enterActive: m().enter_active, enterDone: m().enter_done, exit: m().exit, exitActive: m().exit_active, exitDone: m().exit_done },
                I = () => null;
        },
        38248: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => m });
            var i,
                r,
                l = n(2783),
                a = n(55178),
                o = n(65549),
                s = n(89562),
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
        53453: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => i });
            var i = (function (e) {
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
        60196: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => a });
            var i = n(55178),
                r = n(71483),
                l = n(57594);
            let a = (e) => {
                var t, n;
                let { handleTrackLike: a, shouldCheckVibeContext: o } = e,
                    [s, u] = (0, i.useState)({}),
                    { sonataState: c } = (0, l.g)();
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
        75297: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => M });
            var i = n(32290),
                r = n(55178),
                l = n(91027),
                a = n(73295),
                o = n(70204),
                s = n(34186),
                u = n(45477),
                c = n(75582),
                d = n(57594),
                f = n(53453),
                v = n(96103),
                m = n(39407),
                _ = n(82586),
                p = n(71926),
                g = n(20472),
                E = n(58534),
                b = n(61258),
                h = n(59688),
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
                                    b(a.IU.LITE), h.count('liteAnimation', A);
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
        87488: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => a });
            var i = n(55178),
                r = n(70204),
                l = n(34186);
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
        88158: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { VibeFallbackAnimation: () => _, VibeFallbackAnimationComponent: () => m });
            var i = n(32290),
                r = n(63618),
                l = n(96103),
                a = n(55178),
                o = n(21732),
                s = n(57594),
                u = n(50),
                c = n(49124);
            let d = (e, t) => {
                let n = c.env.ASSET_PREFIX || '';
                return ''.concat(n, '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(t);
            };
            var f = n(95920),
                v = n.n(f);
            let m = (0, l.PA)((e) => {
                    var t, n;
                    let { forwardRef: l, className: c } = e,
                        f = (0, a.useRef)(null),
                        { theme: m } = (0, u.W)(),
                        { sonataState: _ } = (0, s.g)(),
                        p = _.isPlaying && _.isVibeContext;
                    (0, a.useEffect)(() => {
                        var e, t, n;
                        let i = null != (n = null == (t = _.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.energy) ? n : 1;
                        f.current && (f.current.playbackRate = p ? Math.max(1.5 * i, 1) : 0.8);
                    }, [p, null == (n = _.entityMeta) || null == (t = n.trackParameters) ? void 0 : t.energy]);
                    let g = (0, a.useMemo)(
                        () =>
                            ((e) => {
                                if (e) return { posterSrc: d(e, 'jpeg'), videoSrc: d(e, 'mp4') };
                            })(m),
                        [m],
                    );
                    return (0, i.jsxs)('div', {
                        ref: l,
                        className: (0, r.$)(v().root, v().root_visible, c),
                        'data-test-id': o.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: [
                            (0, i.jsx)('video', {
                                ref: f,
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
                _ = (0, a.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        92496: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r, i: () => l });
            var i = n(55178);
            let r = (0, i.createContext)(null);
            function l() {
                return (0, i.useContext)(r);
            }
        },
        95920: (e) => {
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
