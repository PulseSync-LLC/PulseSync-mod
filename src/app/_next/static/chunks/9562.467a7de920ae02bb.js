(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9562],
    {
        69562: (e, i, a) => {
            'use strict';
            (a.r(i), a.d(i, { VibeWidgetFallbackAnimation: () => g }));
            var t = a(88800),
                _ = a(65724),
                o = a(53548),
                n = a(35412),
                r = a(17392),
                l = a(90688),
                d = a(84834),
                c = a.n(d);
            let m = 'avatars.mds.yandex.net/get-music-misc/2419084/img.69c4e2a11982013a65e2121b/%%',
                b = 'url("'.concat((0, n.lU)(m, 400), '")'),
                s = (e) => {
                    let { appearance: i, forwardRef: a, className: o } = e;
                    return (0, t.jsx)('div', {
                        ref: a,
                        className: (0, _.$)(c().root, c().root_visible, o),
                        style: { mixBlendMode: i.blendMode },
                        'data-test-id': r.Kq.vibeAnimation.VIBE_ANIMATION,
                        children: (0, t.jsx)('div', {
                            className: (0, _.$)(c().fallback, { [c().fallback_colored]: i.color }),
                            style: i.color ? { backgroundColor: i.color, maskImage: b } : void 0,
                            'aria-hidden': !0,
                            children: (0, t.jsx)(l._V, {
                                src: 'reshuffle' === i.image ? 'avatars.mds.yandex.net/get-music-misc/34161/img.69f094ae5e8c2b29ab5e5346/%%' : m,
                                className: (0, _.$)(c().image, { [c().image_original]: !i.color }),
                                size: 400,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                fit: 'cover',
                            }),
                        }),
                    });
                },
                g = (0, o.forwardRef)((e, i) => (0, t.jsx)(s, { forwardRef: i, ...e }));
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
