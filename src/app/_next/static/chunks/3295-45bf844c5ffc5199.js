'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3295],
    {
        73295: (d, l, X) => {
            X.d(l, { by: () => R, wT: () => p, Qq: () => L, p4: () => s, Rv: () => y, IU: () => Z, iR: () => c, a6: () => m, aq: () => G, de: () => b });
            let G = (d) => (d + 280) % 360,
                b = (d, l, X) => {
                    let G = (G) => {
                        let b = (G + d / 30) % 12,
                            Z = l * Math.min(X, 1 - X);
                        return X - Z * Math.max(-1, Math.min(b - 3, 9 - b, 1));
                    };
                    return [G(0), G(8), G(4)];
                };
            X(28429),
                X(26313),
                (function (d) {
                    (d.DEFAULT = 'DEFAULT'), (d.LITE = 'LITE');
                })(Z || (Z = {})),
                X(10262),
                X(20686),
                X(23845),
                X(46811),
                X(21722);
            var Z,
                c,
                V = X(91945),
                W = function (e) {
                    const code = window.getWorker('vibeAnimation');
                    const blob = new Blob([code], { type: 'application/javascript' });
                    const url = URL.createObjectURL(blob);
                    return new Worker(url, e);
                };
            !(function (d) {
                (d.INIT = 'vibe-animation-worker-init'),
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
                    (d.UPDATE_VIBE_ENERGY = 'vibe-animation-worker-update-energy');
            })(c || (c = {}));
            class m {
                invoke(d, l) {
                    let X = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    this.worker.postMessage({ source: 'vibe', type: d, payload: l }, X);
                }
                applySettings(d) {
                    this.invoke(c.APPLY_SETTINGS, d);
                }
                updateLayout(d) {
                    this.invoke(c.UPDATE_LAYOUT, { isMobile: d });
                }
                updateRuntimeSettings(d) {
                    this.invoke(c.UPDATE_RUNTIME_SETTINGS, d);
                }
                enable() {
                    this.invoke(window?.VIBE_ANIMATION_DISABLE_RENDERING() ? c.DISABLE : c.ENABLE);
                }
                disable() {
                    this.invoke(c.DISABLE);
                }
                idleAnimation() {
                    this.invoke(c.IDLE_ANIMATION);
                }
                playAnimation(d) {
                    this.invoke(c.PLAY_ANIMATION, d);
                }
                likeAnimation() {
                    this.invoke(c.LIKE_ANIMATION);
                }
                enableLiteAnimation() {
                    this.invoke(c.ENABLE_LITE_ANIMATION);
                }
                updateAudioFrequencies(d) {
                    this.invoke(c.AUDIO_ANALYZER_FREQUENCIES, d);
                }
                updateEnergy(e) {
                    this.invoke(c.UPDATE_VIBE_ENERGY, e);
                }
                destroy() {
                    this.onMessage && this.worker.removeEventListener('message', this.onMessage),
                        this.onError && this.worker.removeEventListener('error', this.onError),
                        this.worker.terminate();
                }
                constructor({ offscreenCanvas: d, state: l, collectionHue: X, fps: maxFps, resolution: resolution, shaderOptions: G, onError: b, onMessage: Z }) {
                    (0, V._)(this, 'worker', void 0),
                        (0, V._)(this, 'onMessage', void 0),
                        (0, V._)(this, 'onError', void 0),
                        (this.worker = new W()),
                        Z && ((this.onMessage = Z), this.worker.addEventListener('message', this.onMessage)),
                        b && ((this.onError = b), this.worker.addEventListener('error', this.onError)),
                        this.invoke(c.INIT, { canvas: d, state: l, collectionHue: X, fps: maxFps, resolution: resolution, shaderOptions: G }, [d]);
                }
            }
            let s = 25,
                p = 0.8,
                R = 0.46;
            class L {
                startMeasuring(d) {
                    let l,
                        X = [],
                        G = (b) => {
                            if (void 0 === l) return (l = b), void (this.requestId = requestAnimationFrame(G));
                            let Z = b - l;
                            if (((l = b), X.length < 600)) return X.push(Z), void (this.requestId = requestAnimationFrame(G));
                            d(
                                1e3 /
                                    ((d) => {
                                        let l = Math.ceil(0.05 * d.length),
                                            X = d.sort((d, l) => d - l).slice(l, d.length - l);
                                        return X.reduce((d, l) => d + l, 0) / X.length;
                                    })(X),
                            ),
                                (X = []),
                                (this.requestId = requestAnimationFrame(G));
                        };
                    this.requestId = requestAnimationFrame(G);
                }
                stopMeasuring() {
                    cancelAnimationFrame(this.requestId);
                }
                constructor() {
                    (0, V._)(this, 'requestId', 0);
                }
            }
            class y {
                start() {
                    if (this.isActive) return;
                    let d = performance.now(),
                        l = 1e3 / this.fps,
                        X = (G) => {
                            this.requestId = requestAnimationFrame(X);
                            let b = G - d;
                            b >= l - 0.1 && ((d = G - (b % l)), this.render(b));
                        };
                    (this.isActive = !0), (this.requestId = requestAnimationFrame(X));
                }
                stop() {
                    this.isActive && ((this.isActive = !1), cancelAnimationFrame(this.requestId));
                }
                constructor(d, l) {
                    (0, V._)(this, 'fps', void 0),
                        (0, V._)(this, 'render', void 0),
                        (0, V._)(this, 'isActive', !1),
                        (0, V._)(this, 'requestId', 0),
                        (this.fps = d),
                        (this.render = l);
                }
            }
        },
    },
]);
