(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1616, 3751],
    {
        8689: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => k });
            var n = i(25839),
                r = i(74631),
                a = i(71035),
                s = i(36095),
                l = i(36484),
                o = i(62562),
                c = i(91149),
                u = i(92942),
                d = i(27954),
                f = i(95029),
                m = i(88204),
                g = i(8487),
                v = i(66738),
                _ = i(4254),
                b = i(53712),
                h = i(51790),
                E = i(97522),
                p = i(81592),
                x = i.n(p);
            let A = (0, m.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: i } = (0, d.g)(),
                        a = (0, r.useCallback)(() => {
                            i.modal.isOpened && i.modal.close();
                        }, [i]),
                        s = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: x().message,
                                    children: [
                                        (0, n.jsx)(_.HL, {
                                            className: x().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, n.jsx)(g.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, n.jsx)(E.N, {
                                            className: x().link,
                                            href: b.Z.settings.href,
                                            onClick: a,
                                            children: (0, n.jsx)(_.HL, {
                                                className: x().linkText,
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
                        cover: (0, n.jsx)(v.I, { className: x().icon, size: 'xs', variant: 'liteVersion' }),
                        message: s,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                V = 'vibeAnimationDegradationLevel',
                y = null,
                k = (e) => {
                    let { isEnabled: t } = e,
                        i = (0, r.useRef)(0),
                        m = (0, o.N)(),
                        { notify: g } = (0, u.l)(),
                        { settings: v } = (0, d.g)(),
                        [_, b] = (0, r.useState)(!1),
                        [h, E] = (0, r.useState)(s.IU.DEFAULT),
                        p = m.get(l.vg),
                        x = (0, r.useMemo)(() => (y || (y = new s.Qq()), y), []),
                        k = (0, a.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                i.current = 0;
                                return;
                            }
                            if ((i.current++, !(i.current < 3))) {
                                if (((i.current = 0), h !== s.IU.LITE)) {
                                    (E(s.IU.LITE), p.count('liteAnimation', V));
                                    return;
                                }
                                _ ||
                                    (b(!0),
                                    p.count('fallback', V),
                                    v.setLiteVersionMode(f.w.ENABLED, !0),
                                    g((0, n.jsx)(A, {}), { containerId: c.u.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                v.isLiteVersionModeAvailableForToggle || !t || _ ? (x.stopMeasuring(), (i.current = 0)) : x.startMeasuring(k),
                                () => {
                                    x.stopMeasuring();
                                }
                            ),
                            [x, k, t, _, v.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: _, vibeAnimationState: h }
                    );
                };
        },
        23144: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => r, i: () => a });
            var n = i(74631);
            let r = (0, n.createContext)(null);
            function a() {
                return (0, n.useContext)(r);
            }
        },
        26116: (e) => {
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
        53751: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { VibeWidgetAnimation: () => M }));
            var n = i(25839),
                r = i(88204),
                a = i(74631),
                s = i(73760),
                l = i(45705),
                o = i(71035),
                c = i(49656),
                u = i(27954),
                d = i(8689),
                f = i(93976),
                m = i(26116),
                g = i.n(m),
                v = i(81616),
                _ = i(82298),
                b = i(61493),
                h = i(68934),
                E = i(36095),
                p = i(84e3),
                x = i(23144),
                A = i(44806),
                V = i(89288);
            let y = (e, t, i) => ({ h: e, s: t / 100, l: i / 100 }),
                k = (e) => {
                    let { averageColor: t, isPlaying: i, isShuffleVibeActive: n } = e,
                        { h: r, s: a, l: s } = (0, V.g8)(t);
                    return i || n
                        ? { top: y(r, a + 15, s + 10), middle: y(r, a + 15, s + 5), bottom: y(r, a, s) }
                        : { top: y(50, 100, 50), middle: y(330, 100, 50), bottom: y(300, 100, 50) };
                };
            var L = i(66460);
            const resolvePulseSyncAnimationVariant = (track) =>
                window.PulseSyncNcs?.resolveAnimationVariant(track) ??
                (window.nativeSettings?.get?.('modSettings.vibeAnimationEnhancement.animationVariant') === 'ncs' ? 'ncs' : 'vibe');
            let N = { transparent: !0 },
                S = (0, r.PA)((e) => {
                    let { vibeAnimationState: t, isVibeAnimationVisible: i, averageColor: r, forwardRef: s, className: l } = e,
                        [c, d] = (0, h.d)(),
                        [f, m] = (0, h.d)(),
                        [V, y] = (0, h.d)(),
                        [S, w] = (0, a.useState)(!1),
                        dynamicEnergyRef = (0, a.useRef)(0),
                        { experiments: C, sonataState: M, settings: R, vibe: I, user: pulseSyncUser } = (0, u.g)(),
                        pulseSyncAnimationVariant = resolvePulseSyncAnimationVariant(M.entityMeta),
                        P = (0, p.U)(),
                        j = (0, x.i)(),
                        W = C.checkExperiment(A.z.WebNextShaderV3, 'on'),
                        T = (0, o.c)((e) => {
                            e.data.type === E.iR.ERROR && (w(!0), P.error(e.data.payload));
                        }),
                        D = (0, o.c)(() => {
                            w(!0);
                        }),
                        F = (0, o.c)(() => {
                            null == c || c.likeAnimation();
                        });
                    (0, L.d)({ handleTrackLike: F, shouldCheckVibeContext: !1 });
                    const getPulseSyncAnimationSettings = () =>
                        window.VIBE_ANIMATION_USE_VIBE_WIDGET_COLORS?.()
                            ? { hue: M.entityMeta?.trackParameters?.hue, collectionHue: pulseSyncUser.collectionHue }
                            : { customColors: k({ averageColor: r, isPlaying: M.isPlaying, isShuffleVibeActive: !!(I.isShuffleVibe && M.isVibeContext) }) };
                    let O = (0, o.c)(() => {
                        if (!(null == j ? void 0 : j.analyser)) return;
                        const volumeCompensation = j.analyser.getVolumeCompensation();
                        const spectrumSnapshot = j.analyser.getSpectrumSnapshot(volumeCompensation);
                        let [e, t, i] = j.analyser.getAverageFrequencies(
                            [
                                {
                                    low: 20,
                                    high: 250,
                                },
                                {
                                    low: 250,
                                    high: 2500,
                                },
                                {
                                    low: 2500,
                                    high: 12000,
                                },
                            ],
                            spectrumSnapshot,
                        );
                        let rms = j.analyser.getRMS(volumeCompensation),
                            rmsAlt = j.analyser.getRMSAlt(volumeCompensation),
                            measuredEnergy = 0.7 * rms + 0.3 * rmsAlt,
                            rawEnergy = Number.isFinite(measuredEnergy) ? Math.max(0, measuredEnergy) : 0,
                            useSmoothing = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? false,
                            previousEnergy = dynamicEnergyRef.current,
                            envelopeCoefficient = rawEnergy > previousEnergy ? 0.65 : 0.12,
                            smoothedEnergy = useSmoothing ? previousEnergy + (rawEnergy - previousEnergy) * envelopeCoefficient : rawEnergy,
                            compressedEnergy = useSmoothing ? 1 - Math.exp(-1.6 * smoothedEnergy) : rawEnergy,
                            energy = compressedEnergy * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT?.() ?? 1) + 0.3,
                            energyNormalized = window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.() ? energy : (M?.entityMeta?.trackParameters?.energy ?? 1);
                        ((dynamicEnergyRef.current = smoothedEnergy),
                            null == c || c.updateEnergy(energyNormalized),
                            null == c ||
                                c.updateAudioFrequencies({
                                    low: null != e ? e : 0,
                                    middle: null != t ? t : 0,
                                    high: null != i ? i : 0,
                                    ...(c.animationVariant === 'ncs'
                                        ? {
                                              ...j.analyser.getNcsSpectrumSnapshot(volumeCompensation),
                                              rms: rawEnergy,
                                          }
                                        : null),
                                }));
                        try {
                            window.dispatchEvent(
                                new CustomEvent('vibe:energy', {
                                    detail: {
                                        energy: energyNormalized,
                                        rms: rms,
                                        bands: {
                                            low: e ?? 0,
                                            middle: t ?? 0,
                                            high: i ?? 0,
                                        },
                                        dynamic: !!window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.(),
                                        ts: Date.now(),
                                    },
                                }),
                            );
                        } catch {}
                    });
                    (0, a.useEffect)(() => {
                        if (!f || c) return;
                        if (!f.transferControlToOffscreen) return void D();
                        let e = f.transferControlToOffscreen(),
                            i = new E.a6({
                                offscreenCanvas: e,
                                state: t,
                                isShaderV3Enabled: W,
                                shaderOptions: N,
                                onMessage: T,
                                onError: D,
                                collectionHue: window.VIBE_ANIMATION_USE_VIBE_WIDGET_COLORS?.() ? pulseSyncUser.collectionHue : undefined,
                                fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25,
                                resolution: window.nativeSettings?.get?.('modSettings.vibeAnimationEnhancement.canvasResolution') ?? 650,
                                animationVariant: pulseSyncAnimationVariant,
                            });
                        (d(i), y(new E.Rv(E.p4, O)), i.applySettings(getPulseSyncAnimationSettings()));
                    }, [
                        r,
                        f,
                        D,
                        T,
                        y,
                        d,
                        W,
                        M.isPlaying,
                        M.isVibeContext,
                        O,
                        I.isShuffleVibe,
                        t,
                        c,
                        pulseSyncUser.collectionHue,
                        M.entityMeta?.trackParameters,
                        pulseSyncAnimationVariant,
                    ]);
                    let K = (0, o.c)(() => {
                        (null == c || c.destroy(), d(null), null == V || V.stop(), y(null));
                    });
                    return ((0, a.useEffect)(
                        () => () => {
                            K();
                        },
                        [K],
                    ),
                    (0, a.useEffect)(() => {
                        c?.applySettings(getPulseSyncAnimationSettings());
                    }, [r, M.isPlaying, M.isVibeContext, I.isShuffleVibe, c, pulseSyncUser.collectionHue, M.entityMeta?.trackParameters]),
                    (0, a.useEffect)(() => {
                        if (c && c.animationVariant !== pulseSyncAnimationVariant) c.updateRuntimeSettings({ animationVariant: pulseSyncAnimationVariant });
                    }, [c, pulseSyncAnimationVariant]),
                    (0, a.useEffect)(() => {
                        const syncAnimationVariant = () => {
                            const variant = resolvePulseSyncAnimationVariant(M.entityMeta);
                            if (c && c.animationVariant !== variant) c.updateRuntimeSettings({ animationVariant: variant });
                        };
                        const onSetting = (event) => {
                            const { key, value } = event.detail ?? {};
                            switch (key) {
                                case 'modSettings.vibeAnimationEnhancement.disableRendering':
                                    return value || !i ? c?.disable() : c?.enable();
                                case 'modSettings.vibeAnimationEnhancement.maxFPS':
                                    return c?.updateRuntimeSettings({ fps: Number(value) });
                                case 'modSettings.vibeAnimationEnhancement.canvasResolution':
                                    return c?.updateRuntimeSettings({ resolution: Number(value) });
                                case 'modSettings.vibeAnimationEnhancement.animationVariant':
                                    return syncAnimationVariant();
                                case 'modSettings.vibeAnimationEnhancement.useVibeWidgetColors':
                                    return c?.applySettings(getPulseSyncAnimationSettings());
                            }
                        };
                        window.addEventListener('pulse-sync-vibe-setting-change', onSetting);
                        document.addEventListener('pulsesync:runtime-ready', syncAnimationVariant);
                        return () => {
                            window.removeEventListener('pulse-sync-vibe-setting-change', onSetting);
                            document.removeEventListener('pulsesync:runtime-ready', syncAnimationVariant);
                        };
                    }, [r, i, M.isPlaying, M.isVibeContext, I.isShuffleVibe, c, pulseSyncUser.collectionHue, M.entityMeta, M.entityMeta?.trackParameters]),
                    (0, a.useEffect)(() => {
                        const parameters = M.entityMeta?.trackParameters;
                        if (parameters?.userCollectionHue) pulseSyncUser.setUserCollectionHue(parameters.userCollectionHue);
                        i && M.isPlaying
                            ? (c?.playAnimation({ ...getPulseSyncAnimationSettings(), energy: parameters?.energy }), V?.start())
                            : (c?.idleAnimation(), V?.stop());
                    }, [V, i, M.isPlaying, c, r, M.isVibeContext, I.isShuffleVibe, pulseSyncUser, M.entityMeta?.trackParameters]),
                    (0, a.useEffect)(() => {
                        i ? null == c || c.enable() : null == c || c.disable();
                    }, [i, c]),
                    (0, a.useEffect)(() => {
                        null == c || c.updateLayout(R.isMobile);
                    }, [R.isMobile, c]),
                    (0, a.useEffect)(() => {
                        t === E.IU.LITE && (null == c || c.enableLiteAnimation());
                    }, [t, c]),
                    S)
                        ? (0, n.jsx)(v.VibeWidgetFallbackAnimation, { ref: s, className: l })
                        : (0, n.jsx)('div', {
                              ref: s,
                              className: (0, _.$)(g().root, l),
                              'data-test-id': b.Kq.vibeAnimation.VIBE_ANIMATION,
                              children: (0, n.jsx)('canvas', { ref: m }),
                          });
                }),
                w = (0, a.forwardRef)((e, t) => (0, n.jsx)(S, { forwardRef: t, ...e })),
                C = { enter: g().enter, enterActive: g().enter_active, enterDone: g().enter_done, exit: g().exit, exitActive: g().exit_active, exitDone: g().exit_done },
                M = (0, r.PA)((e) => {
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
                        { isFallback: p, vibeAnimationState: x } = (0, d.I)({ isEnabled: g }),
                        A = p || E || 'undefined' == typeof Worker,
                        V = (0, c.L)(() =>
                            A
                                ? (0, n.jsx)(v.VibeWidgetFallbackAnimation, { ref: m, className: i })
                                : (0, n.jsx)(w, { ref: r, vibeAnimationState: x, isVibeAnimationVisible: g, averageColor: t, className: i }),
                        );
                    return (0, n.jsx)(s.A, {
                        mode: 'out-in',
                        children: (0, n.jsx)(l.A, { nodeRef: A ? m : r, timeout: 1e3, appear: !0, classNames: C, children: V }, A ? 'fallback' : 'shader'),
                    });
                });
        },
        66460: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => s });
            var n = i(74631),
                r = i(22939),
                a = i(27954);
            let s = (e) => {
                var t, i;
                let { handleTrackLike: s, shouldCheckVibeContext: l } = e,
                    [o, c] = (0, n.useState)({}),
                    { sonataState: u } = (0, a.g)();
                (0, n.useEffect)(() => {
                    let e = () => {
                        var e, t, i, n;
                        (o.id === (null == (e = u.entityMeta) ? void 0 : e.id) && !o.isLiked && (null == (n = u.entityMeta) ? void 0 : n.isLiked) && s(),
                            c({ id: null == (t = u.entityMeta) ? void 0 : t.id, isLiked: null == (i = u.entityMeta) ? void 0 : i.isLiked }));
                    };
                    l ? u.contextType === r.K.Vibe && e() : e();
                }, [s, l, u.contextType, null == (t = u.entityMeta) ? void 0 : t.id, null == (i = u.entityMeta) ? void 0 : i.isLiked, o.id, o.isLiked]);
            };
        },
        73760: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var n,
                r,
                a = i(87895),
                s = i(74631),
                l = i(24227),
                o = i(83218),
                c = { out: 'out-in', in: 'in-out' },
                u = function (e, t, i) {
                    return function () {
                        var n;
                        (e.props[t] && (n = e.props)[t].apply(n, arguments), i());
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
                                (void 0 === i && (i = t.state.current), t.setState({ status: e, current: i }));
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
            ((m.propTypes = {}), (m.defaultProps = { mode: c.out }));
            let g = m;
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
        81616: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { VibeWidgetFallbackAnimation: () => m }));
            var n = i(25839),
                r = i(82298),
                a = i(88204),
                s = i(74631),
                l = i(61493),
                o = i(23818),
                c = i(27954),
                u = i(26116),
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
        93976: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var n = i(74631),
                r = i(36484),
                a = i(62562);
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
        95029: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var n = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
    },
]);
