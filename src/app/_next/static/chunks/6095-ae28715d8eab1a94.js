'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6095],
    {
        36095: (d, l, X) => {
            X.d(l, { by: () => p, wT: () => s, Qq: () => y, p4: () => R, Rv: () => L, IU: () => b, iR: () => V, a6: () => W, aq: () => G, de: () => Z });
            let G = (d) => (d + 280) % 360,
                Z = (d, l, X) => {
                    let G = (G) => {
                        let Z = (G + d / 30) % 12,
                            b = l * Math.min(X, 1 - X);
                        return X - b * Math.max(-1, Math.min(Z - 3, 9 - Z, 1));
                    };
                    return [G(0), G(8), G(4)];
                };
            (X(64563),
                X(87379),
                X(14719),
                X(25456),
                X(47077),
                X(47677),
                (function (d) {
                    ((d.DEFAULT = 'DEFAULT'), (d.LITE = 'LITE'));
                })(b || (b = {})),
                X(10694),
                X(47619));
            var b,
                V,
                c = X(58025),
                m = function (options) {
                    const code = window.getWorker('vibeAnimation');
                    const url = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }));
                    try {
                        const worker = new Worker(url, options);
                        worker.__pulseSyncObjectUrl = url;
                        return worker;
                    } catch (error) {
                        URL.revokeObjectURL(url);
                        throw error;
                    }
                };
            !(function (d) {
                ((d.INIT = 'vibe-animation-worker-init'),
                    (d.ERROR = 'vibe-animation-worker-error'),
                    (d.UPDATE_LAYOUT = 'vibe-animation-worker-update-layout'),
                    (d.UPDATE_RUNTIME_SETTINGS = 'vibe-animation-worker-update-runtime-settings'),
                    (d.APPLY_SETTINGS = 'vibe-animation-worker-apply-settings'),
                    (d.IDLE_ANIMATION = 'vibe-animation-worker-idle-animation'),
                    (d.PLAY_ANIMATION = 'vibe-animation-worker-play-animation'),
                    (d.LIKE_ANIMATION = 'vibe-animation-worker-like-animation'),
                    (d.ENABLE = 'vibe-animation-worker-enable'),
                    (d.DISABLE = 'vibe-animation-worker-disable'),
                    (d.AUDIO_ANALYZER_FREQUENCIES = 'vibe-animation-worker-audio-analyzer-frequencies'),
                    (d.ENABLE_LITE_ANIMATION = 'vibe-animation-worker-enable-lite-animation'),
                    (d.UPDATE_VIBE_ENERGY = 'vibe-animation-worker-update-energy'));
            })(V || (V = {}));
            class W {
                invoke(d, l) {
                    let X = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    this.worker.postMessage({ source: 'vibe', type: d, payload: l }, X);
                }
                applySettings(d) {
                    this.invoke(V.APPLY_SETTINGS, d);
                }
                updateLayout(d) {
                    this.invoke(V.UPDATE_LAYOUT, { isMobile: d });
                }
                enable() {
                    this.invoke(window.VIBE_ANIMATION_DISABLE_RENDERING?.() ? V.DISABLE : V.ENABLE);
                }
                updateRuntimeSettings(settings) {
                    if (Object.prototype.hasOwnProperty.call(settings, 'animationVariant')) this.animationVariant = settings.animationVariant === 'ncs' ? 'ncs' : 'vibe';
                    this.invoke(V.UPDATE_RUNTIME_SETTINGS, settings);
                }
                updateEnergy(energy) {
                    this.invoke(V.UPDATE_VIBE_ENERGY, energy);
                }
                disable() {
                    this.invoke(V.DISABLE);
                }
                idleAnimation() {
                    this.invoke(V.IDLE_ANIMATION);
                }
                playAnimation(d) {
                    this.invoke(V.PLAY_ANIMATION, d);
                }
                likeAnimation() {
                    this.invoke(V.LIKE_ANIMATION);
                }
                enableLiteAnimation() {
                    this.invoke(V.ENABLE_LITE_ANIMATION);
                }
                updateAudioFrequencies(d) {
                    this.invoke(V.AUDIO_ANALYZER_FREQUENCIES, d);
                }
                destroy() {
                    (this.onMessage && this.worker.removeEventListener('message', this.onMessage),
                        this.onError && this.worker.removeEventListener('error', this.onError),
                        this.worker.terminate());
                    if (this.worker.__pulseSyncObjectUrl) {
                        URL.revokeObjectURL(this.worker.__pulseSyncObjectUrl);
                        delete this.worker.__pulseSyncObjectUrl;
                    }
                }
                constructor({
                    offscreenCanvas: d,
                    state: l,
                    isShaderV3Enabled: X,
                    collectionHue: G,
                    shaderOptions: Z,
                    onError: b,
                    onMessage: W,
                    fps,
                    resolution,
                    animationVariant,
                }) {
                    this.animationVariant = animationVariant === 'ncs' ? 'ncs' : 'vibe';
                    ((0, c._)(this, 'worker', void 0),
                        (0, c._)(this, 'onMessage', void 0),
                        (0, c._)(this, 'onError', void 0),
                        (this.worker = new m()),
                        W && ((this.onMessage = W), this.worker.addEventListener('message', this.onMessage)),
                        b && ((this.onError = b), this.worker.addEventListener('error', this.onError)),
                        this.invoke(
                            V.INIT,
                            { canvas: d, state: l, isShaderV3Enabled: X, collectionHue: G, shaderOptions: Z, fps, resolution, animationVariant: this.animationVariant },
                            [d],
                        ));
                }
            }
            let R = 25,
                s = 0.8,
                p = 0.46;
            class y {
                startMeasuring(d) {
                    let l,
                        X = [],
                        G = (Z) => {
                            if (void 0 === l) return ((l = Z), void (this.requestId = requestAnimationFrame(G)));
                            let b = Z - l;
                            if (((l = Z), X.length < 600)) return (X.push(b), void (this.requestId = requestAnimationFrame(G)));
                            (d(
                                1e3 /
                                    ((d) => {
                                        let l = Math.ceil(0.05 * d.length),
                                            X = d.sort((d, l) => d - l).slice(l, d.length - l);
                                        return X.reduce((d, l) => d + l, 0) / X.length;
                                    })(X),
                            ),
                                (X = []),
                                (this.requestId = requestAnimationFrame(G)));
                        };
                    this.requestId = requestAnimationFrame(G);
                }
                stopMeasuring() {
                    cancelAnimationFrame(this.requestId);
                }
                constructor() {
                    (0, c._)(this, 'requestId', 0);
                }
            }
            class L {
                start() {
                    if (this.isActive) return;
                    let d = performance.now(),
                        l = 1e3 / this.fps,
                        X = (G) => {
                            this.requestId = requestAnimationFrame(X);
                            let Z = G - d;
                            Z >= l - 0.1 && ((d = G - (Z % l)), this.render(Z));
                        };
                    ((this.isActive = !0), (this.requestId = requestAnimationFrame(X)));
                }
                stop() {
                    this.isActive && ((this.isActive = !1), cancelAnimationFrame(this.requestId));
                }
                constructor(d, l) {
                    ((0, c._)(this, 'fps', void 0),
                        (0, c._)(this, 'render', void 0),
                        (0, c._)(this, 'isActive', !1),
                        (0, c._)(this, 'requestId', 0),
                        (this.fps = d),
                        (this.render = l));
                }
            }
        },
    },
]);
