(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2179, 9562],
    {
        2179: (e, i, t) => {
            'use strict';
            (t.r(i), t.d(i, { VibeWidgetAnimation: () => C }));
            var a = t(88800),
                n = t(84961),
                l = t(53548),
                o = t(83894),
                r = t(16967),
                s = t(29993),
                d = t(79070),
                c = t(72288),
                _ = t(47749),
                f = t(99814),
                u = t(84834),
                m = t.n(u),
                b = t(69562),
                g = t(65724),
                v = t(17392),
                A = t(50408),
                p = t(54683),
                x = t(65523),
                h = t(78638),
                V = t(97956),
                k = t(35412);
            let E = (e, i, t) => ({ h: e, s: i / 100, l: t / 100 }),
                W = (e) => {
                    let { averageColor: i, isTrackColors: t } = e;
                    if (!t) return { top: E(50, 100, 50), middle: E(330, 100, 50), bottom: E(300, 100, 50) };
                    let { h: a, s: n, l } = (0, k.g8)(i);
                    return { top: E(a, n + 15, l + 10), middle: E(a, n + 15, l + 5), bottom: E(a, n, l) };
                };
            var y = t(90860);
            // for PulseSync: BEGIN select the NCS or standard wave animation variant
            const resolvePulseSyncAnimationVariant = (track) =>
                window.PulseSyncNcs?.resolveAnimationVariant(track) ??
                (window.nativeSettings?.get?.('modSettings.vibeAnimationEnhancement.animationVariant') === 'ncs' ? 'ncs' : 'vibe');
            // for PulseSync: END select the NCS or standard wave animation variant
            // for PulseSync: BEGIN derive wave hue from track artwork
            const resolvePulseSyncCoverHue = (averageColor) => {
                if (typeof averageColor !== 'string' || !/^#[0-9a-f]{6}$/i.test(averageColor)) return undefined;
                const { h } = (0, k.g8)(averageColor);
                // The worker rotates hue by 280 degrees and treats zero as an absent value.
                return (h + 80) % 360 || 360;
            };
            // for PulseSync: END derive wave hue from track artwork
            let w = { transparent: !0 },
                N = (0, n.PA)((e) => {
                    let { vibeAnimationState: i, isVibeAnimationVisible: t, averageColor: n, isTrackColors: o, fallbackAppearance: r, forwardRef: d, className: _ } = e,
                        [f, u] = (0, A.d)(),
                        [k, E] = (0, A.d)(),
                        [N, R] = (0, A.d)(),
                        [j, C] = (0, l.useState)(!1),
                        // for PulseSync: BEGIN state for animation energy, variant and artwork hue
                        dynamicEnergyRef = (0, l.useRef)(0),
                        { experiments: I, sonataState: O, settings: L, vibe: pulseSyncMigration_I_3, user: pulseSyncUser } = (0, c.g)(),
                        pulseSyncAnimationVariant = resolvePulseSyncAnimationVariant(O.entityMeta),
                        pulseSyncCoverHue = resolvePulseSyncCoverHue(O.entityMeta?.averageColor) ?? resolvePulseSyncCoverHue(n),
                        // for PulseSync: END state for animation energy, variant and artwork hue
                        M = (0, x.U)(),
                        S = (0, h.i)(),
                        P = I.checkExperiment(V.z.WebNextShaderV3, 'on'),
                        F = (0, s.c)((e) => {
                            e.data.type === p.iR.ERROR && (C(!0), M.error(e.data.payload));
                        }),
                        T = (0, s.c)(() => {
                            C(!0);
                        }),
                        q = (0, s.c)(() => {
                            null == f || f.likeAnimation();
                        });
                    (0, y.e)({ handleLike: q, shouldCheckVibeContext: !1 });
                    // for PulseSync: BEGIN derive missing wave palette parameters from track artwork
                    const getPulseSyncAnimationSettings = () => {
                        if (!window.VIBE_ANIMATION_USE_VIBE_WIDGET_COLORS?.()) {
                            return { customColors: W({ averageColor: n, isTrackColors: o }) };
                        }
                        const parameters = O.entityMeta?.trackParameters;
                        const hasTrackHue = Number.isFinite(parameters?.hue);
                        const hue = hasTrackHue ? parameters.hue : pulseSyncCoverHue;
                        const collectionHue =
                            parameters?.userCollectionHue ?? (hasTrackHue ? pulseSyncUser.collectionHue : (pulseSyncCoverHue ?? pulseSyncUser.collectionHue));
                        return { hue: hue === 0 ? 360 : hue, collectionHue: collectionHue === 0 ? 360 : collectionHue };
                    };
                    // for PulseSync: END derive missing wave palette parameters from track artwork
                    let z = (0, s.c)(() => {
                        // for PulseSync: BEGIN skip audio analysis while wave rendering is disabled
                        if (window.VIBE_ANIMATION_DISABLE_RENDERING?.()) return;
                        // for PulseSync: END skip audio analysis while wave rendering is disabled
                        if (!(null == S ? void 0 : S.analyser)) return;
                        // for PulseSync: BEGIN feed spectrum and dynamic-energy data into the wave animation
                        const volumeCompensation = S.analyser.getVolumeCompensation();
                        const spectrumSnapshot = S.analyser.getSpectrumSnapshot(volumeCompensation);
                        let [e, i, t] = S.analyser.getAverageFrequencies(
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
                        let rms = S.analyser.getRMS(volumeCompensation),
                            rmsAlt = S.analyser.getRMSAlt(volumeCompensation),
                            measuredEnergy = 0.7 * rms + 0.3 * rmsAlt,
                            rawEnergy = Number.isFinite(measuredEnergy) ? Math.max(0, measuredEnergy) : 0,
                            useSmoothing = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? false,
                            previousEnergy = dynamicEnergyRef.current,
                            envelopeCoefficient = rawEnergy > previousEnergy ? 0.65 : 0.12,
                            smoothedEnergy = useSmoothing ? previousEnergy + (rawEnergy - previousEnergy) * envelopeCoefficient : rawEnergy,
                            compressedEnergy = useSmoothing ? 1 - Math.exp(-1.6 * smoothedEnergy) : rawEnergy,
                            energy = compressedEnergy * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT?.() ?? 1) + 0.3,
                            energyNormalized = window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.() ? energy : (O?.entityMeta?.trackParameters?.energy ?? 1);
                        ((dynamicEnergyRef.current = smoothedEnergy),
                            null == f || f.updateEnergy(energyNormalized),
                            null == f ||
                                f.updateAudioFrequencies({
                                    low: null != e ? e : 0,
                                    middle: null != i ? i : 0,
                                    high: null != t ? t : 0,
                                    ...(f.animationVariant === 'ncs'
                                        ? {
                                              ...S.analyser.getNcsSpectrumSnapshot(volumeCompensation),
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
                                            middle: i ?? 0,
                                            high: t ?? 0,
                                        },
                                        dynamic: !!window.VIBE_ANIMATION_USE_DYNAMIC_ENERGY?.(),
                                        ts: Date.now(),
                                    },
                                }),
                            );
                        } catch {}
                        // for PulseSync: END feed spectrum and dynamic-energy data into the wave animation
                    });
                    // for PulseSync: BEGIN initialize the wave worker with mod colors, FPS, resolution and variant
                    (0, l.useEffect)(() => {
                        if (!k || f) return;
                        if (!k.transferControlToOffscreen) return void T();
                        let e = k.transferControlToOffscreen(),
                            pulseSyncMigration_i_4 = new p.a6({
                                offscreenCanvas: e,
                                state: i,
                                isShaderV3Enabled: P,
                                shaderOptions: w,
                                onMessage: F,
                                onError: T,
                                collectionHue: window.VIBE_ANIMATION_USE_VIBE_WIDGET_COLORS?.() ? pulseSyncUser.collectionHue : undefined,
                                fps: window.VIBE_ANIMATION_MAX_FPS?.() ?? 25,
                                resolution: window.nativeSettings?.get?.('modSettings.vibeAnimationEnhancement.canvasResolution') ?? 650,
                                animationVariant: pulseSyncAnimationVariant,
                            });
                        (u(pulseSyncMigration_i_4), R(new p.Rv(p.p4, z)), pulseSyncMigration_i_4.applySettings(getPulseSyncAnimationSettings()));
                    }, [
                        n,
                        o,
                        k,
                        T,
                        F,
                        R,
                        u,
                        P,
                        O.isPlaying,
                        O.isVibeContext,
                        z,
                        pulseSyncMigration_I_3.isShuffleVibe,
                        i,
                        f,
                        pulseSyncUser.collectionHue,
                        O.entityMeta?.trackParameters,
                        pulseSyncAnimationVariant,
                        pulseSyncCoverHue,
                    ]);
                    // for PulseSync: END initialize the wave worker with mod colors, FPS, resolution and variant
                    let K = (0, s.c)(() => {
                        (null == f || f.destroy(), u(null), null == N || N.stop(), R(null));
                    });
                    return ((0, l.useEffect)(
                        () => () => {
                            K();
                        },
                        [K],
                    ),
                    // for PulseSync: BEGIN apply wave animation preferences and runtime-ready updates
                    (0, l.useEffect)(() => {
                        f?.applySettings(getPulseSyncAnimationSettings());
                    }, [n, o, O.isPlaying, O.isVibeContext, pulseSyncMigration_I_3.isShuffleVibe, f, pulseSyncUser.collectionHue, O.entityMeta?.trackParameters, pulseSyncCoverHue]),
                    (0, l.useEffect)(() => {
                        if (f && f.animationVariant !== pulseSyncAnimationVariant) f.updateRuntimeSettings({ animationVariant: pulseSyncAnimationVariant });
                    }, [f, pulseSyncAnimationVariant]),
                    (0, l.useEffect)(() => {
                        const syncAnimationVariant = () => {
                            const variant = resolvePulseSyncAnimationVariant(O.entityMeta);
                            if (f && f.animationVariant !== variant) f.updateRuntimeSettings({ animationVariant: variant });
                        };
                        const onSetting = (event) => {
                            const { key, value } = event.detail ?? {};
                            switch (key) {
                                case 'modSettings.vibeAnimationEnhancement.disableRendering':
                                    value || !t || !O.isPlaying ? N?.stop() : N?.start();
                                    return value || !t ? f?.disable() : f?.enable();
                                case 'modSettings.vibeAnimationEnhancement.maxFPS':
                                    return f?.updateRuntimeSettings({ fps: Number(value) });
                                case 'modSettings.vibeAnimationEnhancement.canvasResolution':
                                    return f?.updateRuntimeSettings({ resolution: Number(value) });
                                case 'modSettings.vibeAnimationEnhancement.animationVariant':
                                    return syncAnimationVariant();
                                case 'modSettings.vibeAnimationEnhancement.useVibeWidgetColors':
                                    return f?.applySettings(getPulseSyncAnimationSettings());
                            }
                        };
                        window.addEventListener('pulse-sync-vibe-setting-change', onSetting);
                        document.addEventListener('pulsesync:runtime-ready', syncAnimationVariant);
                        return () => {
                            window.removeEventListener('pulse-sync-vibe-setting-change', onSetting);
                            document.removeEventListener('pulsesync:runtime-ready', syncAnimationVariant);
                        };
                    }, [
                        n,
                        t,
                        N,
                        O.isPlaying,
                        O.isVibeContext,
                        pulseSyncMigration_I_3.isShuffleVibe,
                        f,
                        pulseSyncUser.collectionHue,
                        O.entityMeta,
                        O.entityMeta?.trackParameters,
                        pulseSyncCoverHue,
                    ]),
                    // for PulseSync: END apply wave animation preferences and runtime-ready updates
                    // for PulseSync: BEGIN apply track hue and energy when starting the wave animation
                    (0, l.useEffect)(() => {
                        const parameters = O.entityMeta?.trackParameters;
                        if (parameters?.userCollectionHue) pulseSyncUser.setUserCollectionHue(parameters.userCollectionHue);
                        t && O.isPlaying
                            ? (f?.playAnimation({ ...getPulseSyncAnimationSettings(), energy: parameters?.energy }),
                              window.VIBE_ANIMATION_DISABLE_RENDERING?.() ? N?.stop() : N?.start())
                            : (f?.idleAnimation(), N?.stop());
                    }, [N, t, O.isPlaying, f, n, O.isVibeContext, pulseSyncMigration_I_3.isShuffleVibe, pulseSyncUser, O.entityMeta?.trackParameters, pulseSyncCoverHue]),
                    // for PulseSync: END apply track hue and energy when starting the wave animation
                    (0, l.useEffect)(() => {
                        t ? null == f || f.enable() : null == f || f.disable();
                    }, [t, f]),
                    (0, l.useEffect)(() => {
                        null == f || f.updateLayout(L.isMobile);
                    }, [L.isMobile, f]),
                    (0, l.useEffect)(() => {
                        i === p.IU.LITE && (null == f || f.enableLiteAnimation());
                    }, [i, f]),
                    j)
                        ? (0, a.jsx)(b.VibeWidgetFallbackAnimation, { ref: d, className: _, appearance: r })
                        : (0, a.jsx)('div', {
                              ref: d,
                              className: (0, g.$)(m().root, _),
                              'data-test-id': v.Kq.vibeAnimation.VIBE_ANIMATION,
                              children: (0, a.jsx)('canvas', { ref: E }),
                          });
                }),
                R = (0, l.forwardRef)((e, i) => (0, a.jsx)(N, { forwardRef: i, ...e })),
                j = { enter: m().enter, enterActive: m().enter_active, enterDone: m().enter_done, exit: m().exit, exitActive: m().exit_active, exitDone: m().exit_done },
                C = (0, n.PA)((e) => {
                    let { averageColor: i, isTrackColors: t, fallbackAppearance: n, className: u } = e,
                        m = (0, l.useRef)(null),
                        g = (0, l.useRef)(null),
                        [v, A] = (0, l.useState)(!1),
                        { settings: p } = (0, c.g)();
                    (0, f.f)();
                    let x = (0, s.c)(() => {
                        A('visible' === document.visibilityState);
                    });
                    (0, l.useEffect)(
                        () => (
                            x(),
                            document.addEventListener('visibilitychange', x),
                            () => {
                                document.removeEventListener('visibilitychange', x);
                            }
                        ),
                        [x],
                    );
                    let h = p.isLiteVersionModeEnabled,
                        { isFallback: V, vibeAnimationState: k } = (0, _.I)({ isEnabled: v }),
                        E = V || h || 'undefined' == typeof Worker,
                        W = (0, d.L)(() =>
                            E
                                ? (0, a.jsx)(b.VibeWidgetFallbackAnimation, { ref: g, className: u, appearance: n })
                                : (0, a.jsx)(R, {
                                      ref: m,
                                      vibeAnimationState: k,
                                      isVibeAnimationVisible: v,
                                      averageColor: i,
                                      isTrackColors: t,
                                      fallbackAppearance: n,
                                      className: u,
                                  }),
                        );
                    return (0, a.jsx)(o.A, {
                        mode: 'out-in',
                        children: (0, a.jsx)(r.A, { nodeRef: E ? g : m, timeout: 1e3, appear: !0, classNames: j, children: W }, E ? 'fallback' : 'shader'),
                    });
                });
        },
        69562: (e, i, t) => {
            'use strict';
            (t.r(i), t.d(i, { VibeWidgetFallbackAnimation: () => m }));
            var a = t(88800),
                n = t(65724),
                l = t(53548),
                o = t(35412),
                r = t(17392),
                s = t(90688),
                d = t(84834),
                c = t.n(d);
            let _ = 'avatars.mds.yandex.net/get-music-misc/2419084/img.69c4e2a11982013a65e2121b/%%',
                f = 'url("'.concat((0, o.lU)(_, 400), '")'),
                u = (e) => {
                    let { appearance: i, forwardRef: t, className: l } = e;
                    return (0, a.jsx)('div', {
                        ref: t,
                        className: (0, n.$)(c().root, c().root_visible, l),
                        style: { mixBlendMode: i.blendMode },
                        'data-test-id': r.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: (0, a.jsx)('div', {
                            className: (0, n.$)(c().fallback, { [c().fallback_colored]: i.color }),
                            style: i.color ? { backgroundColor: i.color, maskImage: f } : void 0,
                            'aria-hidden': !0,
                            children: (0, a.jsx)(s._V, {
                                src: 'reshuffle' === i.image ? 'avatars.mds.yandex.net/get-music-misc/34161/img.69f094ae5e8c2b29ab5e5346/%%' : _,
                                className: (0, n.$)(c().image, { [c().image_original]: !i.color }),
                                size: 400,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                fit: 'cover',
                            }),
                        }),
                    });
                },
                m = (0, l.forwardRef)((e, i) => (0, a.jsx)(u, { forwardRef: i, ...e }));
        },
        84834: (e) => {
            e.exports = {
                root: 'VibeWidgetAnimation_root__7fpeP',
                root_visible: 'VibeWidgetAnimation_root_visible__owKzA',
                fallback: 'VibeWidgetAnimation_fallback__5PgjQ',
                fallback_colored: 'VibeWidgetAnimation_fallback_colored__pic3_',
                image: 'VibeWidgetAnimation_image__9hizK',
                image_original: 'VibeWidgetAnimation_image_original__xOtav',
                enter: 'VibeWidgetAnimation_enter__PO_og',
                enter_active: 'VibeWidgetAnimation_enter_active__rbO3b',
                enter_done: 'VibeWidgetAnimation_enter_done__c9_F_',
                exit: 'VibeWidgetAnimation_exit__AWXHS',
                exit_active: 'VibeWidgetAnimation_exit_active__V__iv',
                exit_done: 'VibeWidgetAnimation_exit_done__eAbOW',
            };
        },
    },
]);
