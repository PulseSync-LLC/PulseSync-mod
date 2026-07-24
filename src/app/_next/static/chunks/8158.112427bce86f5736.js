(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8158],
    {
        88158: (e, i, t) => {
            'use strict';
            t.r(i), t.d(i, { VibeFallbackAnimation: () => m, VibeFallbackAnimationComponent: () => u });
            var n = t(32290),
                a = t(63618),
                r = t(96103),
                o = t(55178),
                l = t(21732),
                _ = t(57594),
                c = t(50),
                s = t(49124);
            let d = (e, i) => {
                let t = s.env.ASSET_PREFIX || '';
                return ''.concat(t, '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(i);
            };
            var v = t(95920),
                b = t.n(v);
            let u = (0, r.PA)((e) => {
                    var i, t;
                    let { forwardRef: r, className: s } = e,
                        v = (0, o.useRef)(null),
                        { theme: u } = (0, c.W)(),
                        { sonataState: m } = (0, _.g)(),
                        f = m.isPlaying && m.isVibeContext;
                    (0, o.useEffect)(() => {
                        var e, i, t;
                        let n = null != (t = null == (i = m.entityMeta) || null == (e = i.trackParameters) ? void 0 : e.energy) ? t : 1;
                        v.current && (v.current.playbackRate = f ? Math.max(1.5 * n, 1) : 0.8);
                    }, [f, null == (t = m.entityMeta) || null == (i = t.trackParameters) ? void 0 : i.energy]);
                    let A = (0, o.useMemo)(
                        () =>
                            ((e) => {
                                if (e) return { posterSrc: d(e, 'jpeg'), videoSrc: d(e, 'mp4') };
                            })(u),
                        [u],
                    );
                    return (0, n.jsxs)('div', {
                        ref: r,
                        className: (0, a.$)(b().root, b().root_visible, s),
                        'data-test-id': l.Kq.vibeAnimation.VIBE_ANIMATION,
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
                                src: null == A ? void 0 : A.videoSrc,
                                poster: null == A ? void 0 : A.posterSrc,
                            }),
                            (0, n.jsx)('div', {}),
                        ],
                    });
                }),
                m = (0, o.forwardRef)((e, i) => (0, n.jsx)(u, { forwardRef: i, ...e }));
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
