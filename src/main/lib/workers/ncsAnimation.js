// NCS animation module. Preload places this source before vibeAnimation.js in
// the Blob worker; it has no imports and shares the worker's WebGL primitives.
self.PulseSyncNcsAnimation = (() => {
    'use strict';
    // Particle-field / sphere projection inspired by Roonil/NCS_Spectrum_GLava,
    // now tuned against NCS current visualizer.aep (Trapcode Form + Glow).
    // Form's private noise, audio filters and time units are approximated here.
    // Point sprites accumulate density instead of OpenGL image atomics. The GLSL
    // is self-contained because this worker is loaded from a Blob.
    const isMacOS = /Mac/i.test(self.navigator?.platform ?? '') || /Macintosh|Mac OS X/i.test(self.navigator?.userAgent ?? '');

    function createNcsShaderSources(transparent) {
        return {
            particleVertex: `
precision highp float;
attribute vec2 position;
uniform float vNcsTime;
uniform float vScale;
uniform vec2 vScreenSize;
uniform vec2 vNcsAudio;
uniform float vNcsEnergy;
uniform float vReact[3];

vec4 gradient4(vec4 cell) {
    // Permuted lattice gradients for classic 4D Perlin noise. Unlike a sine/hash
    // field, the lattice is repeatable and smoothly interpolated in all axes.
    cell = mod(cell, 289.0);
    float hash = 0.0;
    for (int axis = 0; axis < 4; axis++) {
        hash += cell[axis];
        hash = mod((hash * 34.0 + 1.0) * hash, 289.0);
    }
    vec3 xyz = fract(vec3(hash / 7.0, floor(hash / 7.0) / 7.0, floor(hash / 49.0) / 6.0)) - 0.5;
    float w = 0.75 - dot(abs(xyz), vec3(1.0));
    xyz.xy -= step(w, 0.0) * (step(vec2(0.0), xyz.xy) - 0.5);
    return normalize(vec4(xyz, w));
}

float noise4(vec4 p) {
    vec4 cell = floor(p);
    vec4 local = fract(p);
    vec4 fade = local * local * local * (local * (local * 6.0 - 15.0) + 10.0);
    float value = 0.0;
    for (int corner = 0; corner < 16; corner++) {
        float index = float(corner);
        vec4 offset = mod(floor(index / vec4(1.0, 2.0, 4.0, 8.0)), 2.0);
        vec4 weight = mix(1.0 - fade, fade, offset);
        value += dot(gradient4(cell + offset), local - offset) * weight.x * weight.y * weight.z * weight.w;
    }
    return value * 2.2;
}

float fractal4(vec4 p) {
    // AEP: Complexity 3, Octave Multiplier 0.5, Octave Scale 1.5.
    float value = noise4(p);
    value += 0.5 * noise4(p * 1.5);
    value += 0.25 * noise4(p * 2.25);
    return clamp(value / 1.75, -1.0, 1.0);
}

void main() {
    // AEP: 300 x 300 planar grid, XYZ Linked displacement 100, radius 220.
    vec3 point = vec3(position * 150.0, 0.0);
    vec4 field = vec4(point / 100.0, 0.0);
    // AEP Flow Y 153 / Evolution 80, calibrated into noise units per second.
    // The clock integrates audio-driven speed on the CPU, so beats accelerate
    // the flow without jumping to a different noise phase.
    vec4 flow = vNcsTime * vec4(0.0, 0.153, 0.0, 0.080);
    vec3 displacement = vec3(
        fractal4(field + flow),
        fractal4(field + flow + vec4(19.1, 7.7, 3.4, 0.0)),
        fractal4(field + flow + vec4(5.3, 23.8, 11.7, 0.0))
    );
    // Reactor 1 (1 kHz) drives the fractal; Reactor 2 (100 Hz) drives radius.
    // A small broadband envelope retains the user's energy response preference.
    point += displacement * 100.0 * (0.25 + 1.4 * vNcsAudio.y + 0.15 * vNcsEnergy);
    float radius = 220.0 * (1.0 + 0.20 * vNcsAudio.x + 0.08 * vNcsEnergy + 0.08 * vReact[0]);
    float distanceToCenter = length(point);
    vec3 direction = point / max(distanceToCenter, 0.0001);
    float gap = max(radius - distanceToCenter, 0.0);
    point += direction * gap * smoothstep(0.0, 0.50 * radius, gap);
    // Keep the previously requested compact screen radius (0.4 * 1.447).
    gl_Position = vec4(point.xy * vScale * (0.5788 / 220.0), 0.0, 1.0);
    gl_PointSize = max(1.0, 0.85 * vScreenSize.y / 380.0);
}
`,
            particleFragment: `
precision highp float;
uniform float vParticleWeight;
void main() {
    float distanceToCenter = length(gl_PointCoord * 2.0 - 1.0);
    float density = (1.0 - smoothstep(0.0, 1.0, distanceToCenter)) * vParticleWeight;
    gl_FragColor = vec4(density / 64.0);
}
`,
            blurFragment: `
precision highp float;
varying highp vec2 textureUv;
uniform sampler2D vSource;
uniform vec2 vBlurStep;
void main() {
    vec4 color = texture2D(vSource, textureUv) * 0.227027;
    color += texture2D(vSource, textureUv + vBlurStep * 1.384615) * 0.316216;
    color += texture2D(vSource, textureUv - vBlurStep * 1.384615) * 0.316216;
    color += texture2D(vSource, textureUv + vBlurStep * 3.230769) * 0.070270;
    color += texture2D(vSource, textureUv - vBlurStep * 3.230769) * 0.070270;
    gl_FragColor = color;
}
`,
            compositeFragment: `
precision highp float;
varying highp vec2 textureUv;
uniform sampler2D vDensity;
uniform sampler2D vGlow;
uniform vec3 vColor[6];
uniform vec3 vColorBackground;
void main() {
    float density = texture2D(vDensity, textureUv).r * 64.0;
    float haloDensity = texture2D(vGlow, textureUv).r * 64.0;
    float opacity = 1.0 - pow(0.95, density);
    float halo = 1.0 - exp(-haloDensity * 0.05);
    float intensity = max(0.0, pow(density, 0.2) - 0.2) * opacity;
    vec3 tint = mix(vColor[0], vColor[3], textureUv.y);
    vec3 color = tint * (intensity * 0.22 + halo * 0.11);
    color *= 0.92 + 0.92 / sqrt(max(length(color), 0.001));
    // Fade at the canvas edge, keeping the widget border invisible on any background.
    vec2 edge = smoothstep(vec2(0.0), vec2(0.045), textureUv) * smoothstep(vec2(0.0), vec2(0.045), 1.0 - textureUv);
    float fade = edge.x * edge.y;
    float alpha = clamp(max(max(color.r, color.g), color.b) + halo * 0.15, 0.0, 1.0) * fade;
    color = clamp(color, 0.0, 1.0) * fade;
    gl_FragColor = ${transparent ? (isMacOS ? 'vec4(color, alpha)' : 'vec4(color / max(alpha, 0.001), alpha)') : 'vec4(color + vColorBackground * (1.0 - alpha), 1.0)'};
}
`,
        };
    }

    class AudioState {
        bandTargets = new Float32Array(2);
        bands = new Float32Array(2);
        audio = [0, 0];
        time = 0;
        energy = 0;
        energyTarget = 0;
        audioUpdatedAt = -Infinity;
        uniforms = {
            vNcsAudio: { value: this.audio },
            vNcsTime: { value: this.time },
            vNcsEnergy: { value: this.energy },
        };
        updateAudioFrequencies(t) {
            const { linearSpectrum, sampleRate, fftSize, rms } = t ?? {};
            this.bandTargets.fill(0);
            this.energyTarget = Number.isFinite(rms) ? 1 - Math.exp(-Math.max(0, rms) * 4) : 0;
            this.audioUpdatedAt = performance.now();
            if (!linearSpectrum?.length || !Number.isFinite(sampleRate) || sampleRate <= 0 || !Number.isFinite(fftSize) || fftSize <= 0) return;
            // AEP Reactors: 100 Hz -> Sphere 1 Size, 1000 Hz -> Fractal, Width 50.
            // Form's filter curve is private: approximate it with a half-octave
            // Gaussian response. Integrate linear power, not clipped dB samples.
            const binHz = sampleRate / fftSize;
            for (let band = 0; band < 2; band++) {
                const center = band === 0 ? 100 : 1000;
                const first = Math.max(1, Math.floor(center / 4 / binHz));
                const last = Math.min(linearSpectrum.length - 1, Math.ceil(center * 4 / binHz));
                let power = 0;
                for (let bin = first; bin <= last; bin++) {
                    const amplitude = Number(linearSpectrum[bin]);
                    if (!Number.isFinite(amplitude) || amplitude <= 0) continue;
                    const distance = Math.log2(bin * binHz / center) / 0.5;
                    power += amplitude * amplitude * Math.exp(-0.5 * distance * distance);
                }
                this.bandTargets[band] = 1 - Math.exp(-12 * Math.sqrt(power));
            }
        }
        update(delta, audioRatio) {
            const active = performance.now() - this.audioUpdatedAt < 500;
            const energyTarget = active ? this.energyTarget * audioRatio : 0;
            const energySmoothing = 1 - Math.exp(-Math.max(0, delta) / (energyTarget > this.energy ? 65 : 260));
            this.energy += (energyTarget - this.energy) * energySmoothing;
            for (let band = 0; band < 2; band++) {
                const target = active ? this.bandTargets[band] * audioRatio : 0;
                const coefficient = 1 - Math.exp(-Math.max(0, delta) / (target > this.bands[band] ? 35 : 240));
                this.bands[band] += (target - this.bands[band]) * coefficient;
                this.audio[band] = this.bands[band];
            }
            // A stronger midrange reactor speeds up both drift and evolution.
            // Integrate the smoothed envelope instead of multiplying elapsed
            // time by it: the latter would make the field jump on every beat.
            const flowSpeed = 1 + 2 * this.audio[1] + 0.75 * this.energy;
            this.time += (Math.max(0, delta) / 1000) * flowSpeed;
        }
        syncUniformValues() {
            this.uniforms.vNcsTime.value = this.time;
            this.uniforms.vNcsEnergy.value = this.energy;
        }
        reset() {
            this.bandTargets.fill(0);
            this.bands.fill(0);
            this.audio.fill(0);
            this.energy = 0;
            this.energyTarget = 0;
        }
    }

    function createShader({ renderer, uniforms, size, transparent, lite, graphics }) {
        const { Program, Geometry, Plane, Mesh, Transform, createVertexShader, createRenderTarget } = graphics;
        const gl = renderer.gl;
        const sources = createNcsShaderSources(transparent);
        const { width, height } = size;
        const density = createRenderTarget(gl, width, height);
        const blurX = createRenderTarget(gl, Math.max(1, Math.round(width / 2)), Math.max(1, Math.round(height / 2)));
        const blurY = createRenderTarget(gl, blurX.width, blurX.height);
        const quad = new Plane(gl, { width: 2, height: 2 });
        const options = { cullFace: null, depthTest: !1, depthWrite: !1 };
        const particleWeight = { value: 1 };
        const particles = new Program(gl, {
            ...options,
            vertex: sources.particleVertex,
            fragment: sources.particleFragment,
            uniforms: { ...uniforms, vParticleWeight: particleWeight },
        });
        particles.setBlendFunc(gl.ONE, gl.ONE);
        const horizontal = new Program(gl, {
            ...options,
            vertex: createVertexShader(),
            fragment: sources.blurFragment,
            uniforms: { vSource: { value: density.texture }, vBlurStep: { value: [3 / width, 0] } },
        });
        const vertical = new Program(gl, {
            ...options,
            vertex: createVertexShader(),
            fragment: sources.blurFragment,
            uniforms: { vSource: { value: blurX.texture }, vBlurStep: { value: [0, 3 / height] } },
        });
        const composite = new Program(gl, {
            ...options,
            vertex: createVertexShader(),
            fragment: sources.compositeFragment,
            uniforms: { ...uniforms, vDensity: { value: density.texture }, vGlow: { value: blurY.texture } },
        });
        const particleScene = new Transform();
        const horizontalScene = new Transform();
        const verticalScene = new Transform();
        const compositeScene = new Transform();
        let pointGeometry;
        let pointMesh;
        const setParticleCount = (side) => {
            pointMesh?.setParent(null);
            pointGeometry?.remove();
            const positions = new Float32Array(side * side * 2);
            for (let y = 0; y < side; y++) {
                for (let x = 0; x < side; x++) {
                    const offset = (y * side + x) * 2;
                    positions[offset] = ((x + 0.5) / side) * 2 - 1;
                    positions[offset + 1] = ((y + 0.5) / side) * 2 - 1;
                }
            }
            particleWeight.value = Math.pow(380 / side, 2) * 3;
            pointGeometry = new Geometry(gl, { position: { size: 2, data: positions } });
            pointMesh = new Mesh(gl, { geometry: pointGeometry, program: particles, mode: gl.POINTS, frustumCulled: !1 });
            pointMesh.setParent(particleScene);
        };
        setParticleCount(lite ? 192 : 250);
        new Mesh(gl, { geometry: quad, program: horizontal }).setParent(horizontalScene);
        new Mesh(gl, { geometry: quad, program: vertical }).setParent(verticalScene);
        new Mesh(gl, { geometry: quad, program: composite }).setParent(compositeScene);
        return {
            program: composite,
            enableLiteAnimation: () => setParticleCount(192),
            setSize: (nextWidth, nextHeight) => {
                density.setSize(nextWidth, nextHeight);
                blurX.setSize(nextWidth / 2, nextHeight / 2);
                blurY.setSize(blurX.width, blurX.height);
                horizontal.uniforms.vBlurStep.value[0] = 3 / nextWidth;
                vertical.uniforms.vBlurStep.value[1] = 3 / nextHeight;
            },
            render: () => {
                renderer.render({ scene: particleScene, target: density, update: !1, sort: !1, frustumCull: !1 });
                renderer.render({ scene: horizontalScene, target: blurX, update: !1, sort: !1, frustumCull: !1 });
                renderer.render({ scene: verticalScene, target: blurY, update: !1, sort: !1, frustumCull: !1 });
                renderer.render({ scene: compositeScene, update: !1, sort: !1, frustumCull: !1 });
            },
            destroy: () => {
                for (const program of [particles, horizontal, vertical, composite]) program.remove();
                pointGeometry.remove();
                quad.remove();
                density.destroy();
                blurX.destroy();
                blurY.destroy();
            },
        };
    }

    // Keep the stored Vibe preset values as quality identifiers, so switching
    // variants preserves Low / Medium / High without rewriting the setting.
    function getResolution(resolution) {
        switch (Number(resolution)) {
            case 300: return 700;
            case 650: return 1400;
            case 1400: return 2000;
            default: return resolution;
        }
    }

    return { AudioState, createShader, getResolution };
})();
