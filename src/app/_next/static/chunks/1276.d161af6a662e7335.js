(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1276],
    {
        11276: (e, i, t) => {
            'use strict';
            t.r(i), t.d(i, { VibeWidgetFallbackAnimation: () => g });
            var _ = t(62936),
                a = t(79950),
                n = t(19718),
                o = t(44020),
                r = t(8669),
                b = t(13030),
                d = t(42561),
                s = t(54260),
                m = t.n(s);
            let c = (0, n.PA)((e) => {
                    let { forwardRef: i, className: t } = e,
                        { sonataState: n } = (0, d.Pjs)();
                    return (0, _.jsx)('div', {
                        ref: i,
                        className: (0, a.$)(m().root, m().root_visible, { [m().fallback]: n.isPlaying }, t),
                        ...(0, r.Am)(r.Kq.vibeAnimation.VIBE_ANIMATION),
                        children: (0, _.jsx)(b.Image, {
                            src: 'avatars.mds.yandex.net/get-music-misc/2419084/img.69c4e2a11982013a65e2121b/%%',
                            className: m().image,
                            size: 400,
                            withAvatarReplace: !0,
                            withLoadingIndicator: !1,
                            fit: 'cover',
                        }),
                    });
                }),
                g = (0, o.forwardRef)((e, i) => (0, _.jsx)(c, { forwardRef: i, ...e }));
        },
        54260: (e) => {
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
