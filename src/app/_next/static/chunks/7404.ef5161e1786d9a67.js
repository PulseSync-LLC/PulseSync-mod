(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7404, 9171],
    {
        10754: (e) => {
            e.exports = { root: 'VibeDebugPanel_root__97HZQ', forceTop: 'VibeDebugPanel_forceTop__VY0oQ' };
        },
        47404: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { VibeAnimation: () => N }));
            var n = i(88800),
                l = i(84961),
                a = i(53548),
                r = i(83894),
                o = i(16967),
                s = i(29993),
                u = i(79070),
                c = i(72288),
                d = i(47749),
                f = i(99814),
                v = i(55758),
                _ = i.n(v),
                m = i(89171),
                b = i(65724),
                p = i(17392),
                x = i(50408),
                y = i(54683),
                A = i(65523),
                h = i(78638),
                k = i(8655),
                g = i(69704),
                V = i(97956),
                E = i(90860),
                P = i(96817),
                M = i(40617),
                j = i(10754),
                R = i.n(j);
            let w = (0, l.PA)((e) => {
                    var t, i, l, r, o, u, d, f;
                    let { vibeAnimationState: v, isIntersecting: P, forwardRef: M, className: j } = e,
                        [R, w] = (0, x.d)(),
                        [S, C] = (0, x.d)(),
                        [N, I] = (0, x.d)(),
                        [H, L] = (0, a.useState)(!1),
                        { experiments: O, user: D, sonataState: F, settings: T } = (0, c.g)(),
                        q = (0, A.U)(),
                        { theme: K } = (0, g.W)(),
                        U = (0, h.i)(),
                        W = O.checkExperiment(V.z.WebNextShaderV3, 'on'),
                        X = (0, s.c)((e) => {
                            e.data.type === y.iR.ERROR && (L(!0), q.error(e.data.payload));
                        }),
                        z = (0, s.c)(() => {
                            L(!0);
                        }),
                        B = F.isPlaying && F.isVibeContext,
                        J = (0, s.c)(() => {
                            null == R || R.likeAnimation();
                        });
                    (0, E.e)({ handleLike: J, shouldCheckVibeContext: !0 });
                    let Q = (0, s.c)(() => {
                        if (!(null == U ? void 0 : U.analyser)) return;
                        let [e, t, i] = U.analyser.getAverageFrequencies([
                            { low: 0, high: 250 },
                            { low: 500, high: 2e3 },
                            { low: 2e3, high: 4e3 },
                        ]);
                        null == R || R.updateAudioFrequencies({ low: null != e ? e : 0, middle: null != t ? t : 0, high: null != i ? i : 0 });
                    });
                    (0, a.useEffect)(() => {
                        var e, t;
                        if (!S || R) return;
                        if (!S.transferControlToOffscreen) return void z();
                        let i = S.transferControlToOffscreen(),
                            n = new y.a6({
                                offscreenCanvas: i,
                                state: v,
                                isShaderV3Enabled: W,
                                collectionHue: D.collectionHue,
                                shaderOptions: void 0,
                                onMessage: X,
                                onError: z,
                            });
                        (w(n), I(new y.Rv(y.p4, Q)));
                        let l = null == (t = F.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            a = D.collectionHue;
                        n.applySettings({ hue: l, collectionHue: a });
                    }, [N, S, z, X, I, w, W, null == (i = F.entityMeta) || null == (t = i.trackParameters) ? void 0 : t.hue, Q, D.collectionHue, v, R]);
                    let $ = (0, s.c)(() => {
                        (null == R || R.destroy(), w(null), null == N || N.stop(), I(null));
                    });
                    return ((0, a.useEffect)(
                        () => () => {
                            $();
                        },
                        [$],
                    ),
                    (0, a.useEffect)(() => {
                        P && B ? null == N || N.start() : null == N || N.stop();
                    }, [N, P, B, R]),
                    (0, a.useEffect)(() => {
                        if (R) {
                            let e = K === k.S.Dark ? 0.0705 : 0.9607;
                            null == R || R.applySettings({ backgroundColor: e });
                        }
                    }, [K, R]),
                    (0, a.useEffect)(() => {
                        var e, t, i, n, l, a;
                        let r = null == (t = F.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.hue,
                            o = null == (n = F.entityMeta) || null == (i = n.trackParameters) ? void 0 : i.energy,
                            s = null == (a = F.entityMeta) || null == (l = a.trackParameters) ? void 0 : l.userCollectionHue;
                        (s && D.setUserCollectionHue(s), B ? null == R || R.playAnimation({ hue: r, energy: o, collectionHue: s }) : null == R || R.idleAnimation());
                    }, [
                        B,
                        null == (r = F.entityMeta) || null == (l = r.trackParameters) ? void 0 : l.energy,
                        null == (u = F.entityMeta) || null == (o = u.trackParameters) ? void 0 : o.hue,
                        null == (f = F.entityMeta) || null == (d = f.trackParameters) ? void 0 : d.userCollectionHue,
                        D,
                        R,
                    ]),
                    (0, a.useEffect)(() => {
                        P ? null == R || R.enable() : null == R || R.disable();
                    }, [P, R]),
                    (0, a.useEffect)(() => {
                        null == R || R.updateLayout(T.isMobile);
                    }, [T.isMobile, R]),
                    (0, a.useEffect)(() => {
                        v === y.IU.LITE && (null == R || R.enableLiteAnimation());
                    }, [v, R]),
                    H)
                        ? (0, n.jsx)(m.VibeFallbackAnimation, { ref: M, className: j })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('div', {
                                      ref: M,
                                      className: (0, b.$)(_().root, j),
                                      'data-test-id': p.Kq.vibeAnimation.VIBE_ANIMATION,
                                      children: (0, n.jsx)('canvas', { ref: C }),
                                  }),
                                  !1,
                              ],
                          });
                }),
                S = (0, a.forwardRef)((e, t) => (0, n.jsx)(w, { forwardRef: t, ...e })),
                C = { enter: _().enter, enterActive: _().enter_active, enterDone: _().enter_done, exit: _().exit, exitActive: _().exit_active, exitDone: _().exit_done },
                // for PulseSync: BEGIN disable the upstream wave animation component
                N = () => null;
                // for PulseSync: END disable the upstream wave animation component
        },
        55758: (e) => {
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
        89171: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { VibeFallbackAnimation: () => _, VibeFallbackAnimationComponent: () => v }));
            var n = i(88800),
                l = i(65724),
                a = i(84961),
                r = i(53548),
                o = i(17392),
                s = i(72288),
                u = i(69704);
            let c = (e, t) => ''.concat('', '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(t);
            var d = i(55758),
                f = i.n(d);
            let v = (0, a.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, className: d } = e,
                        v = (0, r.useRef)(null),
                        { theme: _ } = (0, u.W)(),
                        { sonataState: m } = (0, s.g)(),
                        b = m.isPlaying && m.isVibeContext;
                    (0, r.useEffect)(() => {
                        var e, t, i;
                        let n = null != (i = null == (t = m.entityMeta) || null == (e = t.trackParameters) ? void 0 : e.energy) ? i : 1;
                        v.current && (v.current.playbackRate = b ? Math.max(1.5 * n, 1) : 0.8);
                    }, [b, null == (i = m.entityMeta) || null == (t = i.trackParameters) ? void 0 : t.energy]);
                    let p = (0, r.useMemo)(
                        () =>
                            ((e) => {
                                if (e) return { posterSrc: c(e, 'jpeg'), videoSrc: c(e, 'mp4') };
                            })(_),
                        [_],
                    );
                    return (0, n.jsxs)('div', {
                        ref: a,
                        className: (0, l.$)(f().root, f().root_visible, d),
                        'data-test-id': o.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: [
                            (0, n.jsx)('video', {
                                ref: v,
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
                            (0, n.jsx)('div', {}),
                        ],
                    });
                }),
                _ = (0, r.forwardRef)((e, t) => (0, n.jsx)(v, { forwardRef: t, ...e }));
        },
    },
]);
