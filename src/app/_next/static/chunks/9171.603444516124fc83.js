(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9171],
    {
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
        89171: (e, i, t) => {
            'use strict';
            (t.r(i), t.d(i, { VibeFallbackAnimation: () => m, VibeFallbackAnimationComponent: () => v }));
            var a = t(88800),
                n = t(65724),
                o = t(84961),
                r = t(53548),
                l = t(17392),
                _ = t(72288),
                c = t(69704);
            let s = (e, i) => ''.concat('', '/media/vibe_animation_fallback/vibe_animation_fallback_').concat(e, '.').concat(i);
            var d = t(55758),
                b = t.n(d);
            let v = (0, o.PA)((e) => {
                    var i, t;
                    let { forwardRef: o, className: d } = e,
                        v = (0, r.useRef)(null),
                        { theme: m } = (0, c.W)(),
                        { sonataState: u } = (0, _.g)(),
                        f = u.isPlaying && u.isVibeContext;
                    (0, r.useEffect)(() => {
                        var e, i, t;
                        let a = null != (t = null == (i = u.entityMeta) || null == (e = i.trackParameters) ? void 0 : e.energy) ? t : 1;
                        v.current && (v.current.playbackRate = f ? Math.max(1.5 * a, 1) : 0.8);
                    }, [f, null == (t = u.entityMeta) || null == (i = t.trackParameters) ? void 0 : i.energy]);
                    let p = (0, r.useMemo)(
                        () =>
                            ((e) => {
                                if (e) return { posterSrc: s(e, 'jpeg'), videoSrc: s(e, 'mp4') };
                            })(m),
                        [m],
                    );
                    return (0, a.jsxs)('div', {
                        ref: o,
                        className: (0, n.$)(b().root, b().root_visible, d),
                        'data-test-id': l.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: [
                            (0, a.jsx)('video', {
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
                            (0, a.jsx)('div', {}),
                        ],
                    });
                }),
                m = (0, r.forwardRef)((e, i) => (0, a.jsx)(v, { forwardRef: i, ...e }));
        },
    },
]);
