(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1560],
    {
        11560: (e, i, t) => {
            'use strict';
            t.r(i), t.d(i, { VibeWidgetFallbackAnimation: () => g });
            var a = t(32290),
                _ = t(63618),
                n = t(96103),
                o = t(55178),
                r = t(59824),
                s = t(50162),
                b = t(49574),
                d = t(12916),
                m = t.n(d);
            let c = (0, n.PA)((e) => {
                    let { forwardRef: i, className: t } = e,
                        { sonataState: n, vibe: o } = (0, b.Pjs)(),
                        d = !!(o.isShuffleVibe && n.isVibeContext);
                    return (0, a.jsx)('div', {
                        ref: i,
                        className: (0, _.$)(m().root, m().root_visible, { [m().fallback]: n.isPlaying && !d }, t),
                        ...(0, r.Am)(r.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: (0, a.jsx)(s.Image, {
                            src: d
                                ? 'avatars.mds.yandex.net/get-music-misc/34161/img.69f094ae5e8c2b29ab5e5346/%%'
                                : 'avatars.mds.yandex.net/get-music-misc/2419084/img.69c4e2a11982013a65e2121b/%%',
                            className: m().image,
                            size: 400,
                            withAvatarReplace: !0,
                            withLoadingIndicator: !1,
                            fit: 'cover',
                        }),
                    });
                }),
                g = (0, o.forwardRef)((e, i) => (0, a.jsx)(c, { forwardRef: i, ...e }));
        },
        12916: (e) => {
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
    },
]);
