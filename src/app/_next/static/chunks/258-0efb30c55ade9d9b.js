(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258],
    {
        108: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(2058),
                n = a(61691);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        416: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => f });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(17392),
                l = a(7802),
                d = a(29993),
                c = a(50408),
                u = a(79070),
                _ = a(96817),
                m = a(29504),
                p = a(86462),
                h = a(78940),
                v = a(72288),
                b = a(63826),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                var t, a, r, b;
                let { anchorId: f, screenId: g, button: A, buttonSize: C, buttonClassName: N, textClassName: y, feedbackToken: T, hide: E } = e,
                    { communication: S } = (0, v.g)(),
                    [B] = (0, c.d)(),
                    { openPaymentWidgetModal: I } = (0, p.D)({
                        storeName: 'music',
                        communicationId: null != (b = null == (t = A.action) ? void 0 : t.communicationId) ? b : '',
                        offerElement: { element: B, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = A.action) ? void 0 : a.communicationId),
                    }),
                    w = ((null == (r = A.action) ? void 0 : r.type) === l.T.LINK && A.action.value) || '',
                    P = (0, h.Z)(w),
                    j = (0, d.c)((e) => {
                        if (A.action)
                            switch ((f && g && A.action.id && S.action(f, g, A.action.id, T), A.action.type)) {
                                case l.T.PAYWALL:
                                    (I(), null == E || E());
                                    return;
                                case l.T.LINK:
                                    A.action.value && (P(e), null == E || E());
                                    return;
                                case l.T.CLOSE:
                                    null == E || E();
                                    return;
                            }
                    }),
                    k = (0, s.useMemo)(() => {
                        if (A.textColor) return { color: A.textColor };
                    }, [A.textColor]),
                    L = (0, u.L)(() => {
                        var e;
                        switch (null == (e = A.action) ? void 0 : e.type) {
                            case l.T.LINK:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case l.T.CLOSE:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, i.jsx)(_.$, {
                    className: (0, n.$)(x().root, x()['root_'.concat(A.color)], N),
                    role: w ? 'link' : 'button',
                    color: A.color ? A.color : void 0,
                    radius: 'xxxl',
                    onClick: j,
                    size: C,
                    'data-test-id': L,
                    children: (0, i.jsx)(m.HL, { className: (0, n.$)(x().text, y), variant: 'div', type: 'text', size: 'm', style: k, children: A.text }),
                });
            });
        },
        631: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, n, r;
                let s = null != (r = null == (n = document.getElementById(t)) || null == (i = n.querySelector('iframe')) ? void 0 : i.contentWindow) ? r : null;
                return null !== s && e.source === s && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        2258: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { v: () => i }),
                (function (e) {
                    ((e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen'));
                })(i || (i = {})));
        },
        3030: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        3474: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => o });
            var i,
                n = a(5120);
            !(function (e) {
                ((e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus'));
            })(i || (i = {}));
            var r = a(7802);
            let s = n.gK.model('CommunicationButtonAction', {
                    id: n.gK.maybeNull(n.gK.string),
                    type: n.gK.maybeNull(n.gK.enumeration(Object.values(r.T))),
                    value: n.gK.maybeNull(n.gK.string),
                    communicationId: n.gK.maybeNull(n.gK.string),
                }),
                o = n.gK.model('CommunicationButton', {
                    text: n.gK.maybeNull(n.gK.string),
                    color: n.gK.maybeNull(n.gK.enumeration(Object.values(i))),
                    action: n.gK.maybeNull(s),
                    textColor: n.gK.maybeNull(n.gK.string),
                });
        },
        4213: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        4476: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => l });
            var i = a(88800),
                n = a(53548),
                r = a(54020),
                s = a(8840),
                o = a(80566);
            let l = (e) => {
                let { children: t } = e,
                    a = (0, n.useRef)({}),
                    l = (0, n.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    i = a.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, r.A)());
                                            (i.callback(!0, e), (i.showed = !0), (i.viewUuid = e));
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    (!e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    d = (0, n.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    c = (0, n.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, n.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, n.useMemo)(() => ({ observeElement: d, unobserveElement: c }), [d, c]);
                return (0, i.jsx)(o.B.Provider, { value: u, children: t });
            };
        },
        4887: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                root_interactive: 'PlayerBarDesktopWithBackgroundProgressBar_root_interactive__GcrNw',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                thumb: 'PlayerBarDesktopWithBackgroundProgressBar_thumb__LHPFo',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        4941: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        5048: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => r });
            var i = a(61691),
                n = a(15077);
            let r = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return n.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        5866: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => f });
            var i = a(88800),
                n = a(65724),
                r = a(53548),
                s = a(2058),
                o = a(17392),
                l = a(29993),
                d = a(79070),
                c = a(54112),
                u = a(91467),
                _ = a(54965),
                m = a(97361),
                p = a(9630),
                h = a(72288),
                v = a(20674),
                b = a.n(v),
                x = a(91641);
            let f = (e) => {
                var t, a, v, f;
                let {
                        className: g,
                        sliderClassName: A,
                        disabled: C,
                        isFullscreen: N,
                        isMobile: y,
                        showThumbVariant: T,
                        withTimecode: E = !0,
                        sonataPlaybackId: S,
                        customDuration: B,
                        canMoveForward: I,
                    } = e,
                    w = (0, p.e)(),
                    P = (N || !y) && E,
                    j = (0, r.useRef)(!1),
                    { sonataState: k } = (0, h.g)(),
                    [L, R] = (0, r.useState)(null != (v = k.position) ? v : 0),
                    [O, D] = (0, r.useState)(null != (f = k.duration) ? f : 0),
                    [M, U] = (0, r.useState)(0),
                    { formatMessage: F } = (0, s.A)(),
                    { advert: z } = (0, h.g)(),
                    W = (0, u.r)(),
                    K = L && O ? (100 * Math.min(L, O)) / O : 0,
                    V = null == w ? void 0 : w.getState(S),
                    H = (0, m.P)(L),
                    G = (0, _.E)(Math.round(L), Math.round(O)),
                    Y = (0, m.P)(O),
                    $ = B && L > B,
                    q = (0, l.c)((e, t) => {
                        z.isAdvertShown || ((j.current = !t), t ? null == w || w.setProgress(e, S) : R(e));
                    });
                (0, r.useEffect)(() => {
                    $ && (I ? null == w || w.moveForward(S) : (null == w || w.moveBackward(S), null == w || w.pause(S)));
                }, [I, $, w, S]);
                let Z = (0, r.useCallback)(
                    (e) => {
                        e &&
                            (e.duration === 1 / 0
                                ? (D(0), R(0), U(0))
                                : (D(B && !z.isAdvertShown ? B : e.duration), R((t) => (j.current ? t : e.position)), U(e.loaded)));
                    },
                    [B, z.isAdvertShown],
                );
                (0, r.useEffect)(() => {
                    var e, t;
                    let a = null == W || null == (e = W.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(Z),
                        i = null == V || null == (t = V.playerState) ? void 0 : t.progress.onChange(Z);
                    return () => {
                        (null == i || i(), null == a || a());
                    };
                }, [
                    null == W || null == (t = W.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                    Z,
                    null == V || null == (a = V.playerState) ? void 0 : a.progress,
                ]);
                let X = (0, d.L)(() => {
                    if (0 !== O) return B && B <= O ? Math.round(B) : Math.round(O);
                });
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(b().root, { [b().root_fullscreen]: N, [b().root_mobile]: y, [b().root_withTimecode]: E }, g),
                    style: { '--track-progress': ''.concat(K, '%') },
                    'data-test-id': o.Kq.changeTimecode.TIMECODE_WRAPPER,
                    children: [
                        P && (0, i.jsx)(x.d, { role: 'text', 'aria-label': H, value: G, variant: 'start', className: b().timecode }),
                        (0, i.jsx)(c.A, {
                            'aria-valuetext': H,
                            className: (0, n.$)(b().slider, { [b()['slider_thumbSize_'.concat(y ? 'xs' : 'm')]]: !0 }, A),
                            disabled: C,
                            thumbSize: y ? 'xs' : 's',
                            trackSize: y ? 'xs' : 's',
                            value: Math.round(L),
                            mode: 'deferred',
                            secondaryValue: Math.round(M),
                            maxValue: X,
                            onChange: q,
                            'aria-label': F({ id: 'player-actions.timecode-control' }),
                            showThumbVariant: T,
                            'data-test-id': o.Kq.changeTimecode.TIMECODE_SLIDER,
                        }),
                        P && (0, i.jsx)(x.d, { role: 'text', 'aria-label': Y, value: (0, _.E)(Math.round(O), Math.round(O)), variant: 'end', className: b().timecode }),
                    ],
                });
            };
        },
        6259: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        6322: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => s });
            var i = a(88800),
                n = a(15077),
                r = a(33719);
            let s = (e) => {
                let { playlist: t, closeToast: a } = e;
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        6462: (e) => {
            e.exports = {
                root: 'Content_root__IsH8s',
                root_newVibe: 'Content_root_newVibe__5S1qr',
                main: 'Content_main__8_wIa',
                main_newVibe: 'Content_main_newVibe__tfCx9',
                sideBanner_newVibe: 'Content_sideBanner_newVibe__VpnTX',
                sideBanner: 'Content_sideBanner__Na07D',
                adContainer: 'Content_adContainer__4t8fj',
                adBanner: 'Content_adBanner__hxXvf',
                withBrandedBanner: 'Content_withBrandedBanner__ipwOK',
            };
        },
        6900: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => n });
            var i = a(8655);
            let n = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return n[e];
                        default:
                            return '';
                    }
                };
        },
        7554: (e) => {
            e.exports = {
                root: 'WithBrandedEntityAxeBanner_root__aXh91',
                root_withCollapsedNavbar: 'WithBrandedEntityAxeBanner_root_withCollapsedNavbar__msb7M',
                creative: 'WithBrandedEntityAxeBanner_creative__Fp6Vg',
            };
        },
        7802: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        8655: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        9184: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        9889: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        9995: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        10325: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => n });
            var i = a(43522);
            let n = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        10748: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        11518: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                timecodeGroup: 'ChangeTimecodeBackground_timecodeGroup__2VQ1N',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                timecodeGroupCurrent: 'ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB',
                important: 'ChangeTimecodeBackground_important__OSzLR',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
            };
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    n = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) n.set(e, a);
                let r = n.toString();
                return ''.concat(a).concat(r ? '?'.concat(r) : '');
            };
        },
        13315: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(30123);
            let n = (e) => e.startsWith(i.nl);
        },
        13946: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => W });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(79070),
                l = a(17610),
                d = a(24548),
                c = a(29993),
                u = a(72288),
                _ = a(35994);
            let m = (e, t) => {
                let { withLink: a, separator: i } = t,
                    n = a && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: n };
            };
            var p = a(21010),
                h = a.n(p),
                v = a(17392),
                b = a(29504),
                x = a(91292),
                f = a(2058),
                g = a(92716),
                A = a(96527),
                C = a(78940),
                N = a(55693),
                y = a(58217);
            let T = (0, r.PA)((e) => {
                    let { item: t, linkClassName: a, captionClassName: n, captionSize: r = 'm', allArtistsTitle: s, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: T,
                            isTooltipEnabled: E,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, a;
                            let { item: i, allArtistsTitle: n, withCustomTooltip: r } = e,
                                { formatMessage: s } = (0, f.A)(),
                                o = ((e, t) => {
                                    let { item: a, allArtistsTitle: i, withCustomTooltip: n } = e,
                                        r = i || a.name;
                                    return {
                                        ...a,
                                        title: n ? void 0 : r,
                                        ariaLabel: a.link ? t({ id: 'entity-names.artist-name' }, { artistName: a.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !i && n,
                                    };
                                })({ item: i, allArtistsTitle: n, withCustomTooltip: r }, s),
                                {
                                    track: l,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                _ = (0, C.Z)(null != (a = null == (t = o.link) ? void 0 : t.href) ? a : o.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, N.z)(),
                                p = (0, A.N)(),
                                h = (0, c.c)((e) => {
                                    (d && l.isOpened && l.close(), _(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: a } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: n, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: s } = i;
                                    return (0, y.l)({
                                        entity: t,
                                        callback: a,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (i.reset(), s.close()), n.modal.isOpened && n.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                b = (0, c.c)((e) => {
                                    (p({ to: g.AppScreen.ArtistScreen }), null == m || m(), v(e));
                                });
                            return { ...o, handleNavigate: b };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: o });
                    return m
                        ? (0, i.jsx)(x.N, {
                              ...m,
                              'aria-label': h,
                              className: a,
                              onClick: S,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(b.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: n, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: d,
                              children: (0, i.jsx)(b.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: n,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: a, captionClassName: n, captionSize: r, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(T, {
                                item: t.primary,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(T, {
                                                item: e,
                                                linkClassName: a,
                                                captionClassName: n,
                                                captionSize: r,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var S = a(88969),
                B = a(65453);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(B.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(h().spoiler, a),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var w = a(61013),
                P = a(87819),
                j = a(40634),
                k = a(48468),
                L = a.n(k);
            let R = (0, r.PA)((e) => {
                    let { label: t, artists: a, forwardRef: n } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: n, children: t }),
                            (0, i.jsx)(l.ZI, { className: L().tooltipContent, children: a.map((e) => (0, i.jsx)(j.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, s.forwardRef)((e, t) => (0, i.jsx)(R, { forwardRef: t, ...e }));
            var D = a(19934),
                M = a(70396),
                U = a.n(M);
            let F = (0, r.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: r } = (0, f.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, n.$)(U().root, U().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, r.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: n } = e,
                        [r, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        _ = (0, c.c)(() => {
                            let e = n.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, w.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, s.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (r || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(F, { artists: t, label: a }) : (0, i.jsx)(O, { artists: t, label: a })) : a;
                }),
                W = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: a,
                            spoilerClassName: r,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: v,
                            variant: b = 'breakAll',
                            spoilerComponent: x,
                            ...f
                        } = e,
                        g = ((e) => {
                            var t, a, i;
                            let { separator: n, visibleArtistsCount: r, withLink: o, withComposer: l, artistIdWithoutLink: d, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (a = e.withAllArtistsTitle) || a,
                                v = null == (i = e.withCustomTooltip) || i,
                                b = (0, s.useRef)(null),
                                [x, f] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                A = ((!g || 1 === p.length) && _) || !_,
                                C = ((e, t) => {
                                    var a, i, n;
                                    let r = null == (a = null == t ? void 0 : t.withComposer) || a,
                                        s = null == (i = null == t ? void 0 : t.withLink) || i,
                                        o = null != (n = null == t ? void 0 : t.separator) ? n : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let a = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...a];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: a, withComposer: i } = t;
                                            return {
                                                visibleArtists: (a ? e.slice(0, a) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: a && a < e.length ? e.length - a : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, a) =>
                                            ((e, t) => {
                                                var a;
                                                let { withLink: i, separator: n, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: i, separator: r ? void 0 : n }),
                                                    decomposed: (null != (a = e.decomposed) ? a : []).map((e) => {
                                                        let t = n ? e.separator : '';
                                                        return m(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === a }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: n, visibleArtistsCount: x ? void 0 : r, withComposer: l, withLink: !!A && o, artistIdWithoutLink: d }),
                                N = h ? C.allArtistsTitle : '',
                                y = (0, c.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: b,
                                handleOnSpoilerClick: y,
                                isTooltipEnabled: !!N && v && !_ && !g,
                                title: !N || v || _ ? void 0 : N,
                            };
                        })(f),
                        A = (0, o.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(x)
                                  ? x
                                  : (0, i.jsx)(I, { spoilerClassName: r, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        C = (0, i.jsx)(l.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: a ? { WebkitLineClamp: a } : void 0,
                                className: (0, n.$)(h().root, h()['root_variant_'.concat(b)], { [h().root_clamp]: a && a > 0, [h().ellipsis]: !a }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(z, { labelRef: g.labelRef, artists: g.artists, label: C }) : C;
                });
        },
        14315: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => p });
            var i = a(88800),
                n = a(65724),
                r = a(2058),
                s = a(28692),
                o = a(29993),
                l = a(96817),
                d = a(52300),
                c = a(17392),
                u = a(7023),
                _ = a(66241),
                m = a.n(_);
            let p = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: _,
                        iconClassName: p,
                        size: h = 'xxxs',
                        iconSize: v = 'xs',
                        color: b,
                        variant: x = 'default',
                        onClick: f,
                    } = e,
                    { formatMessage: g } = (0, r.A)(),
                    A = t || a !== s.pM.ONE ? 'repeat' : 'repeat_one',
                    C = (0, u.z)(a, g, t),
                    N = (0, o.c)((e) => {
                        (null == f || f(), e.stopPropagation());
                    });
                return (0, i.jsx)(l.$, {
                    className: _,
                    radius: 'round',
                    size: h,
                    variant: x,
                    color: b,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': C,
                    'aria-pressed': !t && a !== s.pM.NONE,
                    onClick: N,
                    icon: (0, i.jsx)(d.I, {
                        size: v,
                        variant: A,
                        className: (0, n.$)(m().repeatIcon, m()['repeatIcon_'.concat(a)], { [m().repeatIcon_disabled]: t }, p),
                    }),
                    'data-test-id': ((e, t) =>
                        e === s.pM.NONE || t
                            ? c.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                            : e === s.pM.ONE
                              ? c.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                              : c.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(a, t),
                });
            };
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        14431: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var i = a(53548);
            let n = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => T });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(2058),
                l = a(58390),
                d = a(17392),
                c = a(79070),
                u = a(17610),
                _ = a(29504),
                m = a(13946),
                p = a(55693),
                h = a(72288),
                v = a(24548),
                b = a(85587),
                x = a(90224),
                f = a(91292),
                g = a(7608),
                A = a(6667),
                C = a(85463),
                N = a(65462),
                y = a.n(N);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: r,
                        albumArtists: N,
                        withExplicitMark: T,
                        withSecondaryColor: E,
                        captionSize: S = 'm',
                        explicitSize: B = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: w,
                        artistsClassName: P,
                        ignoreDislikedStyles: j,
                        withCustomTooltip: k = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: R,
                        beforeTitle: O,
                        withArtistLink: D,
                        variant: M,
                        withTrackLink: U,
                        afterTitle: F,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: K } = (0, p.z)(),
                    {
                        settings: { isMobile: V },
                        slam: H,
                    } = (0, h.g)(),
                    G = (0, A.$)({ withCustomTooltip: k }),
                    Y = (0, l.useSearchParams)(),
                    $ = (0, g.B)(r, {
                        isMobile: V,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: N,
                        withTrackLink: U,
                        withArtistLink: D,
                        variant: M,
                        withExplicitMark: T,
                        query: R ? Object.fromEntries(Y) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: Z,
                        tooltipText: X,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var n, r;
                        let { canEnableCustomTooltip: s, isMobile: o } = a,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            d = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (n = t.version) ? n : ''),
                            c = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(c, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: d,
                            isTooltipEnabled: s && !o,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? d : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(r, $, { canEnableCustomTooltip: G, isMobile: V }, W),
                    et = (0, C.O)({ track: r, onNavigate: K, withSavingQueryParams: R, entityType: b.n.TRACK }),
                    ea = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: X,
                                hoverSettings: v.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, n.$)(y().text, y().title),
                                    type: 'entity',
                                    size: S,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [S, q, X, ee],
                    ),
                    ei = (0, c.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: X,
                                  hoverSettings: v.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, n.$)(y().text, y().title),
                                      type: 'entity',
                                      size: S,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: q,
                                  }),
                              })
                            : $.link
                              ? (0, i.jsx)(f.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: $.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                    ),
                    en = (0, s.useMemo)(() => +!!L, [L]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !r.isAvailable, [y().root_disliked]: r.isDisliked && !j, [y().root_withSecondaryColor]: E }, t),
                    children: (0, i.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, { [y().titleContainer_withVersion]: r.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, n.$)(y().text, w),
                                        type: 'entity',
                                        size: S,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            ei,
                                            $.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: S,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, i.jsx)(x.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: B,
                                            variant: $.explicitMark,
                                            className: y().explicitMark,
                                            trackId: r.id,
                                        }),
                                    F,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, i.jsx)(m.i, {
                                    className: (0, n.$)(y().text, { [y().artists]: L }, P, w),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, n.$)(y().text, y().link),
                                    captionClassName: (0, n.$)(y().text, y().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: en,
                                    captionSize: S,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
        },
        15382: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        16112: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => E });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                s = a(2058),
                o = a(42078),
                l = a(29595),
                d = a(74965),
                c = a(72288),
                u = a(66943),
                _ = a(65724),
                m = a(84961),
                p = a(17392),
                h = a(79070),
                v = a(90688),
                b = a(97956),
                x = a(90420),
                f = a(15077),
                g = a(33719),
                A = a(55211),
                C = a(14329),
                N = a.n(C);
            let y = (0, m.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: n } = (0, c.g)(),
                    r = n.checkExperiment(b.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === x.q7,
                    o = (0, h.L)(() => {
                        var e;
                        return r && t.agent
                            ? (0, i.jsx)(A.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(N().view, { [N().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [N().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [N().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [N().multivibeControl]: s }),
                              })
                            : (0, i.jsx)(v._V, {
                                  className: N().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': p.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = r && t.agent ? void 0 : 'round';
                return (0, i.jsx)(g.k, {
                    closeToast: a,
                    entityVariant: f.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: l,
                    className: N().root,
                });
            });
            var T = a(93512);
            let E = (e) => {
                let { user: t, pinsCollection: a } = (0, c.g)(),
                    { notify: _ } = (0, d.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [p, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = (0, n.HO)(a.get(e.pinId));
                    h(!0);
                    let d = await e.togglePin();
                    (h(!1),
                        s &&
                            s.type === o._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((r.backgroundImageUrl = s.data.backgroundImageUrl), (r.colors = s.data.colors), (r.agent = s.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (r.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (r.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (r.agent = (0, T.K)(d.data.agent))),
                        d
                            ? _((0, i.jsx)(y, { vibe: r }), { containerId: l.u.INFO })
                            : _((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, p, a, t.isAuthorized, e]);
            };
        },
        16208: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => E });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(2058),
                l = a(17392),
                d = a(17610),
                c = a(29504),
                u = a(13946),
                _ = a(66264),
                m = a(72288),
                p = a(24548),
                h = a(85587),
                v = a(90224),
                b = a(91292),
                x = a(7608),
                f = a(6667),
                g = a(85463),
                A = a(32138),
                C = a(65462),
                N = a.n(C),
                y = a(81132),
                T = a.n(y);
            let E = (0, r.PA)((e) => {
                var t, a, r, C, y;
                let {
                        track: E,
                        className: S,
                        withAuthor: B,
                        withSecondaryColor: I = !1,
                        withListeningProgress: w = !1,
                        captionSize: P = 'm',
                        explicitSize: j = 'xs',
                        withExplicitMark: k,
                        titleContainerClassName: L,
                        textClassName: R,
                        playContextParams: O,
                        withTimeLeftText: D = !0,
                        ignoreDislikedStyles: M,
                        albumArtists: U,
                        withCustomTooltip: F = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: W,
                        beforeTitle: K,
                        afterTitle: V,
                        withContextMenuArtists: H,
                        withArtistLink: G,
                    } = e,
                    {
                        sonataState: Y,
                        slam: $,
                        settings: { isMobile: q },
                    } = (0, m.g)(),
                    { formatMessage: Z } = (0, o.A)(),
                    X = (0, f.$)({ withCustomTooltip: F }),
                    Q = (0, g.O)({ track: E, withSavingQueryParams: W, entityType: h.n.AUDIOBOOK }),
                    J = !!(w && O && E.shouldRememberPosition && E.streamProgress && E.durationMs),
                    ee =
                        E.id === (null == (t = Y.entityMeta) ? void 0 : t.id) &&
                        (null == (r = Y.entityMeta) || null == (a = r.streamProgress) ? void 0 : a.endPositionSec),
                    et = (0, A.d)(J, E.streamProgress, ee),
                    ea = ((e, t) => {
                        let {
                                isMobile: a,
                                isOfflineModeEnabled: i,
                                shouldHideAudiobookInfo: n,
                                albumArtists: r,
                                withAuthor: s,
                                withArtistLink: o,
                                withExplicitMark: l,
                            } = t,
                            d = (0, x.B)(e, { isMobile: a, isOfflineModeEnabled: i, albumArtists: r, withArtistLink: o, withExplicitMark: l }),
                            c = !!(s && d.artists.length > 0 && !n);
                        return { ...d, hasAuthor: c };
                    })(E, {
                        isMobile: q,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        shouldHideAudiobookInfo: et,
                        albumArtists: U,
                        withAuthor: B,
                        withArtistLink: G,
                        withExplicitMark: k,
                    }),
                    ei = ((e, t, a, i) => {
                        let { canEnableCustomTooltip: n, isMobile: r } = a,
                            s = e.shouldShowRemovedTitle ? t({ id: 'track-title.audiobook-not-found' }) : e.title;
                        return {
                            displayTitle: s,
                            ariaLabel: t({ id: 'entity-names.audiobook-name' }, { bookName: i }),
                            titleAttribute: n || e.shouldShowRemovedTitle ? void 0 : s,
                            versionTitleAttribute: n ? void 0 : e.version,
                            isTooltipEnabled: n && !r,
                        };
                    })(ea, Z, { canEnableCustomTooltip: X, isMobile: q }, null == (C = E.mainAlbum) ? void 0 : C.title),
                    en = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.m_, {
                                enabled: ei.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ei.displayTitle,
                                hoverSettings: p.V,
                                children: (0, i.jsx)(c.HL, {
                                    className: N().title,
                                    type: 'entity',
                                    size: P,
                                    variant: 'span',
                                    title: ei.titleAttribute,
                                    ...e,
                                    children: ei.displayTitle,
                                }),
                            }),
                        [ei.isTooltipEnabled, ei.titleAttribute, P, ei.displayTitle],
                    ),
                    er = null == (y = ea.link) ? void 0 : y.href,
                    es = (0, s.useMemo)(
                        () =>
                            ea.shouldShowRemovedTitle
                                ? ei.displayTitle
                                : void 0 !== er
                                  ? (0, i.jsx)(b.N, {
                                        'aria-label': ei.ariaLabel,
                                        className: N().albumLink,
                                        href: er,
                                        title: ei.titleAttribute,
                                        onClick: Q,
                                        'data-test-id': l.Kq.track.TRACK_TITLE,
                                        children: en(),
                                    })
                                  : en({ 'data-test-id': l.Kq.track.TRACK_TITLE }),
                        [ea.shouldShowRemovedTitle, er, ei.ariaLabel, ei.displayTitle, en, ei.titleAttribute, Q],
                    ),
                    eo = (0, s.useMemo)(() => +!!z, [z]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(N().root, { [N().root_disabled]: !E.isAvailable, [N().root_disliked]: E.isDisliked && !M, [N().root_withSecondaryColor]: I }, S),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(N().metaContainer, T().metaContainer, { [T().metaContainer_oneLine]: !B }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(N().titleContainer, L, T().titleContainer),
                                children: [
                                    (0, i.jsxs)(c.HL, {
                                        className: (0, n.$)(N().text, R),
                                        type: 'entity',
                                        size: P,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            K,
                                            es,
                                            ea.version &&
                                                (0, i.jsxs)(c.HL, {
                                                    className: (0, n.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: P,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ei.versionTitleAttribute,
                                                    children: ['\xa0', ea.version],
                                                }),
                                        ],
                                    }),
                                    ea.explicitMark &&
                                        (0, i.jsx)(v.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: E.getDescriptionTexts,
                                            variant: ea.explicitMark,
                                            className: N().explicitMark,
                                            size: j,
                                            trackId: E.id,
                                        }),
                                    V,
                                ],
                            }),
                            ea.hasAuthor &&
                                (0, i.jsx)(c.HL, {
                                    type: 'entity',
                                    size: P,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(N().text, T().artists, R),
                                    children: (0, i.jsx)(u.i, {
                                        className: (0, n.$)(N().text, { [N().artists]: z }, R),
                                        linkClassName: (0, n.$)(N().text, N().link),
                                        captionClassName: (0, n.$)(N().text, N().artistCaption),
                                        artists: ea.artists,
                                        withLink: ea.withArtistLink,
                                        lineClamp: eo,
                                        captionSize: P,
                                        withContextMenu: H,
                                    }),
                                }),
                            J &&
                                E.streamProgress &&
                                O &&
                                (0, i.jsx)(_.B, {
                                    className: (0, n.$)(T().progress, {
                                        [T().progress_withPreviousInfo]: ea.hasAuthor,
                                        [T().progress_disabled]: !E.isAvailable || E.isDisliked,
                                    }),
                                    id: E.id,
                                    albumId: E.albumId,
                                    streamProgress: E.streamProgress,
                                    durationMs: E.durationMs || 0,
                                    playContextParams: O,
                                    withTimeLeftText: D,
                                }),
                        ],
                    }),
                });
            });
        },
        16278: (e, t, a) => {
            'use strict';
            a.d(t, { DefaultLayout: () => rN });
            var i,
                n,
                r,
                s,
                o,
                l,
                d,
                c,
                u,
                _,
                m = a(88800),
                p = a(65724),
                h = a(84961),
                v = a(58390),
                b = a(79070),
                x = a(57496),
                f = a(53548),
                g = a.t(f, 2),
                A = a(2258);
            let C = { src: '/_next/static/media/recommendations-unavailable-logo.5f746fbb.png' };
            var N = a(30283),
                y = a(2058),
                T = a(88969),
                E = a(17392),
                S = a(29993),
                B = a(52073),
                I = a(96817),
                w = a(52300),
                P = a(11372),
                j = a(17610),
                k = a(29504),
                L = a(34500),
                R = a(14518),
                O = a(44230),
                D = a(47964),
                M = a(72288),
                U = a(16462),
                F = a(55625),
                z = a.n(F);
            let W = (0, h.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, y.A)(),
                    {
                        vibe: i,
                        settings: { isMobile: n },
                        vibeSettings: r,
                    } = (0, M.g)(),
                    { pageId: s } = (0, R.$)(),
                    { blockIdForFrom: o } = (0, L.N)(),
                    l = (0, f.useRef)(null),
                    d = (0, f.useRef)(null),
                    { resetContext: c } = (0, D.B)({ seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: s, blockIdForFrom: o }),
                    { contentRef: u } = (0, O.g)();
                (0, f.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                );
                let _ = !!(i.isApplying || i.isMyVibe),
                    p = (0, S.c)((e) => {
                        var t;
                        i.isApplying || (l.current && (0, B.P)(e, z().ripple, l.current), c(), null == (t = d.current) || t.focus());
                    });
                return (0, m.jsx)(P.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.modal.isOpened,
                    onOpenChange: r.modal.onOpenChange,
                    onClose: r.modal.close,
                    className: z().root,
                    contentClassName: z().modalContent,
                    overlayClassName: z().overlay,
                    portalNode: n ? null : u,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    'data-test-id': E.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                    children: (0, m.jsxs)('div', {
                        className: z().content,
                        children: [
                            (0, m.jsxs)('div', {
                                className: z().header,
                                children: [
                                    (0, m.jsx)(k.DZ, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        'data-test-id': E.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                        children: (0, m.jsx)(T.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: z().actions,
                                        children: [
                                            (0, m.jsx)(j.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, m.jsx)(I.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, m.jsx)(w.I, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: p,
                                                    disabled: !!i.isMyVibe,
                                                    'aria-hidden': !!i.isMyVibe,
                                                    'aria-disabled': _,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: l,
                                                    'data-test-id': E.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                }),
                                            }),
                                            (0, m.jsx)(I.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, m.jsx)(w.I, { variant: 'close', size: 'xxs' }),
                                                onClick: r.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: d,
                                                'data-test-id': E.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(U.C, {}),
                        ],
                    }),
                });
            });
            var K = a(4370),
                V = a(8655),
                H = a(47938),
                G = a(6900),
                Y = a(69704);
            let $ = function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { theme: a } = (0, Y.W)(),
                    i = (0, f.useRef)(a);
                ((0, f.useLayoutEffect)(() => {
                    i.current = a;
                }, [a]),
                    (0, f.useLayoutEffect)(() => {
                        if (!t || 'undefined' == typeof document) return;
                        let a = (0, G.J)(e),
                            n = () => {
                                document.body.classList.contains(a) || (0, H.Z)(e);
                            };
                        n();
                        let r = new MutationObserver(() => {
                            n();
                        });
                        return (
                            r.observe(document.body, { attributes: !0, attributeFilter: ['class'] }),
                            () => {
                                (r.disconnect(), (0, H.Z)(i.current));
                            }
                        );
                    }, [e, t]));
            };
            var q = a(97956),
                Z = a(39661),
                X = a.n(Z);
            let Q = () => {
                var e;
                let {
                    user: t,
                    settings: a,
                    advertBanners: {
                        banners: { sideAdvertBanner: i },
                    },
                    freeAccess: n,
                } = (0, M.g)();
                return !!i.isVisible && (null == (e = a.browserInfo) || !e.isTouch) && (!t.isAuthorized || n.isFreeWebUser);
            };
            var J = a(61166),
                ee = a(95850);
            let et = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var ea = a(38744),
                ei = a.n(ea);
            let en = (0, h.PA)((e) => {
                    let { className: t, forwardRef: a, isWavePage: i } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                        } = (0, M.g)(),
                        { formatMessage: r } = (0, y.A)();
                    return (0, m.jsx)('section', {
                        className: (0, p.$)(ei().root, t, { [ei().root_vibePage]: i, [ei().root_hidden]: !n.isVisible }),
                        'aria-label': r({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: (0, m.jsx)('div', {
                            className: ei().contentWrapper,
                            children: (0, m.jsx)(ee.N, {
                                className: ei().content,
                                ownerId: J.P,
                                containerId: 'adfox_173831489302952769',
                                params: et,
                                onLoad: n.setType,
                                onError: n.toggleHasErrorTrue,
                                onNoAds: n.toggleNoAdsTrue,
                            }),
                        }),
                    });
                }),
                er = (0, f.forwardRef)((e, t) => (0, m.jsx)(en, { forwardRef: t, ...e }));
            var es = a(38147),
                eo = a(65523),
                el = a(49518),
                ed = a(60208);
            let ec = (0, h.PA)((e) => {
                let { className: t, productionBlockId: a, testBlockId: i, onRender: n, onNoAds: r, onError: s, isAsync: o } = e,
                    { experiments: l } = (0, M.g)(),
                    { render: d } = (0, el.s)(),
                    c = (0, ed.D)(),
                    u = (0, f.useMemo)(() => {
                        let e = l.checkExperiment(q.z.WebNextAdvertTest, 'on'),
                            t = 'production' === c;
                        return e || !t ? i : a;
                    }, [c, l, a, i]),
                    _ = ''.concat(J.l, '_').concat(u);
                return (
                    (0, f.useEffect)(() => {
                        d(
                            {
                                blockId: u,
                                renderTo: _,
                                async: o,
                                onRender: () => {
                                    null == n || n(es.h.DIRECT);
                                },
                                onError: s,
                            },
                            () => {
                                null == r || r();
                            },
                        );
                    }, [u, _, d, n, s, r, o]),
                    (0, m.jsx)('div', { id: _, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
            var eu = a(61013);
            let e_ = () => (30 * window.innerHeight) / 100,
                em = (e, t) => e > 0 && t > 0;
            var ep = a(6462),
                eh = a.n(ep);
            let ev = (0, h.PA)((e) => {
                    let { className: t, children: a } = e,
                        i = (0, v.usePathname)(),
                        { formatMessage: n } = (0, y.A)(),
                        { setContentRef: r, setContentRootRef: s, setSideBannerRef: o, paywallRef: l, contentScrollRef: d } = (0, O.g)(),
                        c = (0, eo.U)(),
                        {
                            experiments: u,
                            user: _,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: h, topAdvertBanner: x },
                            },
                        } = (0, M.g)(),
                        g = Q(),
                        A =
                            (i === K.Z.main.href || i === K.Z.video.href) &&
                            (u.checkExperiment(q.z.WebNextNewWaveTab, 'on') || u.checkExperiment(q.z.WebNextNewWaveTab, 'on1')),
                        C = h.isVisible && h.type === es.h.BRANDING,
                        N = x.isTouchTopAdvertEnabled && !l && !_.hasPlus && !C,
                        T = 'R-I-16641233-2',
                        E = ((e) => {
                            let [t, a] = (0, f.useState)(e_),
                                i = (0, f.useRef)(null),
                                n = (0, f.useRef)(!1),
                                r = (0, f.useRef)(e_()),
                                s = (0, f.useRef)(e_()),
                                o = (0, S.c)((e) => {
                                    let t = e.scrollTop,
                                        a = e.scrollHeight,
                                        i = e.clientHeight,
                                        n = s.current,
                                        r = t <= 5;
                                    if (!em(a, i)) return n;
                                    let o = a - i;
                                    return o <= 0 ? n : o >= n ? (r ? n : 0) : r ? n : Math.max(0, n - o);
                                }),
                                l = (0, S.c)((e) => {
                                    (a(Math.round(e)), (r.current = e));
                                }),
                                d = (0, S.c)(() => {
                                    s.current = e_();
                                }),
                                c = (0, S.c)((e) => {
                                    let t = i.current;
                                    (null !== t && cancelAnimationFrame(t),
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let t = o(e),
                                                a = Math.abs(t - r.current),
                                                n = s.current;
                                            (0 === t || t >= n || a >= 2) && l(t);
                                        })));
                                });
                            (0, f.useLayoutEffect)(() => {
                                if (!e) {
                                    let e = e_();
                                    ((s.current = e), l(e), (n.current = !1));
                                    return;
                                }
                                if (n.current) return;
                                n.current = !0;
                                let t = e_();
                                return ((s.current = t), e.scrollTop <= 50) ? void l(t) : em(e.scrollHeight, e.clientHeight) ? void l(o(e)) : void l(t);
                            }, [e, l, o]);
                            let u = (0, f.useMemo)(
                                () =>
                                    e
                                        ? (0, eu.A)(() => {
                                              (d(), c(e));
                                          }, 100)
                                        : null,
                                [e, c, d],
                            );
                            return (
                                (0, f.useEffect)(() => {
                                    if (!e || !u) return;
                                    c(e);
                                    let t = () => {
                                        c(e);
                                    };
                                    e.addEventListener('scroll', t, { passive: !0 });
                                    let a = new ResizeObserver(u);
                                    a.observe(e);
                                    let n = () => {
                                        (d(), u());
                                    };
                                    return (
                                        window.addEventListener('resize', n, { passive: !0 }),
                                        () => {
                                            u.cancel();
                                            let o = i.current;
                                            null !== o && (cancelAnimationFrame(o), (i.current = null));
                                            let l = e_();
                                            ((r.current = l),
                                                (s.current = l),
                                                e.removeEventListener('scroll', t),
                                                a.disconnect(),
                                                window.removeEventListener('resize', n));
                                        }
                                    );
                                }, [e, c, u, d]),
                                t
                            );
                        })(d),
                        B = (0, S.c)(() => {
                            c.error('Cannot render advert banner', { adBlockId: T });
                        }),
                        I = (0, b.L)(() => {
                            if (N)
                                return (0, m.jsx)('div', {
                                    className: eh().adContainer,
                                    'aria-label': n({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, m.jsx)(ec, { isAsync: !1, onError: B, productionBlockId: T, testBlockId: T, className: eh().adBanner }),
                                });
                        });
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(eh().root, t, { [eh().root_newVibe]: A }),
                        ref: s,
                        children: [
                            I,
                            (0, m.jsx)('main', {
                                className: (0, p.$)(eh().main, { [eh().main_newVibe]: A, [eh().withBrandedBanner]: C }),
                                style: C ? { marginBlockStart: ''.concat(E, 'px') } : void 0,
                                ref: r,
                                children: (0, m.jsx)(f.Suspense, { children: a }),
                            }),
                            g && (0, m.jsx)(er, { className: (0, p.$)(eh().sideBanner, { [eh().sideBanner_newVibe]: A }), isWavePage: A, ref: o }),
                        ],
                    });
                }),
                eb = (e) => window.innerWidth < (e ? 1920 : 1024),
                ex = () => {
                    let { sideBannerRef: e } = (0, O.g)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, M.g)(),
                        a = Q(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, f.useState)(eb(i)),
                        s = (0, f.useMemo)(
                            () =>
                                (0, eu.A)(
                                    () => {
                                        r(eb(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, f.useEffect)(
                            () => (
                                window.addEventListener('resize', s),
                                s(),
                                () => {
                                    window.removeEventListener('resize', s);
                                }
                            ),
                            [s],
                        ),
                        n
                    );
                };
            var ef = a(4086),
                eg = a(41928),
                eA = a(15253),
                eC = a(78793),
                eN = a(92716),
                ey = a(27104),
                eT = a(90780),
                eE = a(72997),
                eS = a.n(eE),
                eB = a(30282),
                eI = a(95694),
                ew = a(68211),
                eP = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    2678: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    8946: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    450: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    9432: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    s = r / 2,
                                    o = i.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                                    d = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                                ((n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(l - s, 'px')),
                                    (n.style.top = ''.concat(d - s, 'px')),
                                    n.classList.add(t));
                                let c = i.getElementsByClassName(t)[0];
                                (c && c.remove(), i.insertBefore(n, i.firstChild));
                            }));
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            n = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let r = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, n.findColorBucketByName)(e);
                            return a ? r(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? r(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                        var r = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return r.getVibePaletteColors;
                            },
                        });
                    },
                    8122: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0));
                        let n = a(4377),
                            r = a(5881),
                            s = a(9779),
                            o = i(a(2678));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: l = 'vertical', ...d } = e;
                            return (0, n.jsx)(s.NavigationProvider, {
                                collapsed: i,
                                direction: l,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(o.default.root, o.default['root_direction_'.concat(l)], { [o.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    9779: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0));
                        let i = a(4377),
                            n = a(810);
                        ((t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: r, children: s } = e,
                                    o = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: o, children: s });
                            }));
                    },
                    2676: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0));
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(9779),
                            l = i(a(8946));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, r.createRef)(),
                                { direction: c } = (0, r.useContext)(o.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, s.clsx)(l.default.root, l.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    9699: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0));
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(9779),
                            l = a(6882),
                            d = i(a(450)),
                            c = i(a(9432));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: _,
                                    withRipple: m = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: h,
                                    ...v
                                } = e,
                                { collapsed: b, direction: x } = (0, r.useContext)(o.NavigationContext),
                                f = h ? c.default : d.default,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m && (0, l.createRipple)(e, f.ripple);
                                    },
                                    [f.ripple, m],
                                ),
                                [A, C] = r.Children.toArray(i.props.children),
                                N = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: f.iconContainer, children: A }),
                                                (0, n.jsx)('div', {
                                                    className: (0, s.clsx)(f.textContainer, f['textContainer_direction_'.concat(x)], { [f.textContainer_selected]: u }),
                                                    children: C,
                                                }),
                                            ],
                                        }),
                                    [f, A, x, u, C],
                                ),
                                y = (0, r.cloneElement)(i, {
                                    className: (0, s.clsx)(
                                        f.item,
                                        f['item_direction_'.concat(x)],
                                        { [f.item_selected]: u, [f['item_collapsed_'.concat(x)]]: b },
                                        i.props.className,
                                    ),
                                    children: N,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, s.clsx)(
                                    f.root,
                                    f['root_direction_'.concat(x)],
                                    f['root_variant_'.concat(p)],
                                    { [f.root_animate]: _, [f.root_collapsed]: b },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: g,
                                ...v,
                                children: y,
                            });
                        }
                        ((t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }))));
                    },
                    2660: (e) => {
                        e.exports = ew;
                    },
                    810: (e) => {
                        e.exports = g;
                    },
                },
                ej = {};
            function ek(e) {
                var t = ej[e];
                if (void 0 !== t) return t.exports;
                var a = (ej[e] = { exports: {} });
                return (eP[e].call(a.exports, a, a.exports, ek), a.exports);
            }
            ((ek.d = (e, t) => {
                for (var a in t) ek.o(t, a) && !ek.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (ek.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (ek.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var eL = {};
            (() => {
                (Object.defineProperty(eL, 'X$', { value: !0 }), (eL.Dx = eL.KB = eL.W_ = void 0));
                var e = ek(8122);
                Object.defineProperty(eL, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = ek(2676);
                Object.defineProperty(eL, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = ek(9699);
                Object.defineProperty(eL, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var eR = eL.W_,
                eO = eL.KB,
                eD = eL.Dx;
            eL.X$;
            var eM = a(74973),
                eU = a(4476),
                eF = a(53643),
                ez = (function (e) {
                    return (
                        (e.SEARCH = 'SEARCH'),
                        (e.HOME = 'HOME'),
                        (e.FOR_YOU_AND_TRENDS = 'FOR_YOU_AND_TRENDS'),
                        (e.CONCERTS = 'CONCERTS'),
                        (e.NON_MUSIC = 'NON_MUSIC'),
                        (e.KIDS = 'KIDS'),
                        (e.COLLECTION = 'COLLECTION'),
                        (e.PLUS = 'PLUS'),
                        (e.MUZMARKET = 'MUZMARKET'),
                        // for PulseSync: BEGIN settings sidebar navigation item ID
                        (e.SETTINGS = 'SETTINGS'),
                        // for PulseSync: END settings sidebar navigation item ID
                        e
                    );
                })({}),
                eW = a(77356),
                eK = a(46312),
                eV = a(67174);
            let eH = () => {
                let { user: e, experiments: t, location: a, slam: i, settings: n } = (0, M.g)(),
                    { formatMessage: r } = (0, y.A)(),
                    s = ((e) => {
                        let {
                                checkExperiment: t,
                                formatMessage: a,
                                hasPlus: i,
                                isAuthorized: n,
                                isChildModeEnabled: r,
                                isMobile: s,
                                isOfflineModeEnabled: o,
                                isWebApplication: l,
                                tld: d,
                            } = e,
                            c = [],
                            u = t(q.z.WebNextNewWaveTab, 'on') || t(q.z.WebNextNewWaveTab, 'on1');
                        if (
                            (t(q.z.WebNextDisableSearch, 'on') ||
                                c.push({ id: ez.SEARCH, path: K.Z.search.href, availablePaths: [K.Z.search.href], title: a({ id: 'navigation.search' }), isEnabled: !o }),
                            c.push({
                                id: ez.HOME,
                                path: K.Z.main.href,
                                availablePaths: [K.Z.main.href],
                                title: a(u ? { id: 'navigation.page-my-vibe' } : { id: 'navigation.page-main' }),
                                isEnabled: !o,
                            }),
                            u)
                        ) {
                            let e = n ? eK.p.MAIN : eK.p.MAIN_NOLOGIN,
                                t = (0, eV.u)('/landing/:skeleton', { params: { skeleton: e } }).href;
                            c.push({ id: ez.FOR_YOU_AND_TRENDS, path: t, availablePaths: [t], title: a({ id: 'navigation.page-for-you-and-trends' }), isEnabled: !o });
                        }
                        return (
                            t(q.z.WebNextConcertsTab, 'on') &&
                                !t(q.z.WebNextDisableConcertsTab, 'on') &&
                                i &&
                                c.push({
                                    id: ez.CONCERTS,
                                    path: K.Z.concerts.href,
                                    availablePaths: [K.Z.concerts.href],
                                    title: a({ id: 'entity-names.concerts' }),
                                    isEnabled: !o,
                                }),
                            t(q.z.WebNextDisableNonMusic, 'on') ||
                                c.push({
                                    id: ez.NON_MUSIC,
                                    path: '/non-music',
                                    availablePaths: ['/non-music'],
                                    title: a({ id: 'entity-names.podcasts-and-books' }),
                                    isEnabled: !o,
                                }),
                            !t(q.z.WebNextDisableKids, 'on') &&
                                r &&
                                c.push({ id: ez.KIDS, path: K.Z.kids.href, availablePaths: [K.Z.kids.href], title: a({ id: 'kids.for-kids' }), isEnabled: !o }),
                            !t(q.z.WebNextDisableCollection, 'on') &&
                                n &&
                                c.push({
                                    id: ez.COLLECTION,
                                    path: K.Z.collection.href,
                                    availablePaths: [K.Z.collection.href, K.Z.mymusic.href],
                                    title: a({ id: 'navigation.page-collection' }),
                                    isEnabled: !0,
                                }),
                            // for PulseSync: BEGIN add the desktop settings sidebar navigation item
                            n &&
                                c.push({
                                    id: ez.SETTINGS,
                                    path: K.Z.settings.href,
                                    availablePaths: [K.Z.settings.href],
                                    title: a({ id: 'page.settings' }),
                                    isEnabled: !0,
                                }),
                            // for PulseSync: END add the desktop settings sidebar navigation item
                            !t(q.z.WebNextDisablePlus, 'on') &&
                                t(q.z.WebNextPlusOptionsMarketplace, 'on') &&
                                l &&
                                !s &&
                                i &&
                                c.push({ id: ez.PLUS, path: '/plus', availablePaths: ['/plus'], title: a({ id: 'navigation.page-plus' }), isEnabled: !0 }),
                            t(q.z.WebNextMarketLanding, 'on') &&
                                'ru' === d &&
                                !s &&
                                n &&
                                c.push({
                                    id: ez.MUZMARKET,
                                    path: K.Z.muzmarket.href,
                                    availablePaths: [K.Z.muzmarket.href],
                                    title: a({ id: 'navigation.page-muzmarket' }),
                                    isEnabled: !o,
                                }),
                            c
                        );
                    })({
                        checkExperiment: (e, a) => t.checkExperiment(e, a),
                        formatMessage: r,
                        hasPlus: e.hasPlus,
                        isAuthorized: e.isAuthorized,
                        isChildModeEnabled: e.settings.isChildModeEnabled,
                        isMobile: !!n.isMobile,
                        isOfflineModeEnabled: !!i.isOfflineModeEnabled,
                        isWebApplication: eB.$3,
                        tld: a.tld,
                    }),
                    o = t.checkExperiment(q.z.WebNextNewWaveTab, 'on') || t.checkExperiment(q.z.WebNextNewWaveTab, 'on1'),
                    l = {
                        [ez.SEARCH]: () => ({
                            icon: 'search',
                            iconSelected: 'search_selected',
                            iconNewVersion: 'navigationSearch',
                            iconNewVersionSelected: 'navigationSearch',
                            analyticsParams: { to: eN.AppScreen.SearchScreen, entityType: eN.EntityTypes.Search },
                        }),
                        [ez.HOME]: () => {
                            let e = o && t.checkExperiment(q.z.WebNextNdaLabelOnWaveTab, 'on') ? 'navigationMyVibeNDA' : 'navigationMyVibe';
                            return {
                                icon: 'home',
                                iconSelected: 'home_selected',
                                iconNewVersion: o ? e : 'navigationForYouAndTrends',
                                iconNewVersionSelected: o ? e : 'navigationForYouAndTrends_selected',
                                analyticsParams: { to: o ? eN.AppScreen.WaveLandingScreen : eN.AppScreen.MainScreen, entityType: eN.EntityTypes.Home },
                            };
                        },
                        [ez.FOR_YOU_AND_TRENDS]: () => ({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: 'navigationForYouAndTrends',
                            iconNewVersionSelected: 'navigationForYouAndTrends_selected',
                            analyticsParams: { to: eN.AppScreen.ForYouScreen, entityType: eN.EntityTypes.Home },
                        }),
                        [ez.CONCERTS]: () => ({
                            icon: 'ticket',
                            iconSelected: 'ticket_selected',
                            iconNewVersion: 'navigationConcerts',
                            iconNewVersionSelected: 'navigationConcerts_selected',
                            analyticsParams: { to: eN.AppScreen.ConcertsLandingScreen, entityType: eN.EntityTypes.Concerts },
                            onboardingConfig: {
                                id: eW.h.CONCERTS_TAB,
                                text: r({ id: 'concerts.onboarding' }, { nbsp: '\xa0' }),
                                isEnabled: t.checkExperiment(q.z.WebNextConcertTabOnboarding, 'on'),
                            },
                        }),
                        [ez.NON_MUSIC]: () => ({
                            icon: 'non_music',
                            iconSelected: 'non_music_selected',
                            iconNewVersion: 'navigationNonMusic',
                            iconNewVersionSelected: 'navigationNonMusic_selected',
                            analyticsParams: { to: eN.AppScreen.NonmusicLandingScreen, entityType: eN.EntityTypes.NonMusic },
                        }),
                        [ez.KIDS]: () => ({
                            icon: 'kids',
                            iconSelected: 'kids_selected',
                            iconNewVersion: 'navigationKids',
                            iconNewVersionSelected: 'navigationKids_selected',
                            analyticsParams: { to: eN.AppScreen.KidsLandingScreen, entityType: eN.EntityTypes.Kids },
                        }),
                        [ez.COLLECTION]: () => ({
                            icon: 'collections',
                            iconSelected: 'collections_selected',
                            iconNewVersion: 'navigationCollection',
                            iconNewVersionSelected: 'navigationCollection_selected',
                            analyticsParams: { to: eN.AppScreen.CollectionLandingScreen, entityType: eN.EntityTypes.Collection },
                        }),
                        // for PulseSync: BEGIN settings sidebar icon and analytics metadata
                        [ez.SETTINGS]: () => ({
                            icon: 'settingsGear',
                            iconSelected: 'settingsGear',
                            iconNewVersion: 'settingsGear',
                            iconNewVersionSelected: 'settingsGear',
                            analyticsParams: { to: eN.AppScreen.SettingsScreen, entityType: eN.EntityTypes.Profile },
                        }),
                        // for PulseSync: END settings sidebar icon and analytics metadata
                        [ez.PLUS]: () => ({
                            icon: 'plusOutlined',
                            iconSelected: 'plusOutlined',
                            iconNewVersion: 'navigationPlus',
                            iconNewVersionSelected: 'navigationPlus',
                            analyticsParams: { to: eN.AppScreen.PlusScreen, entityType: eN.EntityTypes.Plus },
                        }),
                        [ez.MUZMARKET]: () => ({
                            icon: 'navigationMuzmarket',
                            iconSelected: 'navigationMuzmarket',
                            iconNewVersion: 'navigationMuzmarket',
                            iconNewVersionSelected: 'navigationMuzmarket',
                            analyticsParams: { to: eN.AppScreen.MuzmarketScreen, entityType: eN.EntityTypes.Muzmarket },
                        }),
                    };
                return s.map((e) => ({ ...e, ...l[e.id]() }));
            };
            var eG = a(92192);
            let eY = () => {
                let e = (0, eG.D)(),
                    t = (0, v.usePathname)();
                return (0, f.useCallback)((a) => a.some((a) => (a === K.Z.main.href ? a === t : e.startsWith(a))), [e, t]);
            };
            var e$ = a(52726),
                eq = a(91292),
                eZ = a(64546),
                eX = a(99984);
            let eQ = () => {
                    let e = (0, eT.st)(),
                        { hash: t } = (0, eT.gf)(),
                        a = (0, eo.U)(),
                        { location: i } = (0, M.g)();
                    return (0, f.useCallback)(
                        (n, r) => {
                            if (!e || !t) return;
                            let s = (0, eC.F)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: eN.EntityTypes.Error,
                                              entityId: eN.EntityTypes.Error,
                                              hash: n,
                                              pageId: eN.AppScreen.PageNotFoundScreen,
                                              pageStyle: eN.PageStyles.Fullscreen,
                                              pagePlacement: eN.PagePlacements.Fullscreen,
                                              mainObjectType: eN.DomainObjectType.NonApplicable,
                                              mainObjectId: eN.DomainObjectType.NonApplicable,
                                              from: eN.AppScreen.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: eN.AppScreen.Sidebar,
                                              pageStyle: eN.PageStyles.Bar,
                                              pagePlacement: eN.PagePlacements.Left,
                                              from: eN.AppScreen.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: r, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            s && (0, eX.ID)(e.evgenInstance, s);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                eJ = {
                    [ez.SEARCH]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [ez.HOME]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [ez.FOR_YOU_AND_TRENDS]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [ez.CONCERTS]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [ez.NON_MUSIC]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [ez.KIDS]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [ez.COLLECTION]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [ez.PLUS]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                    [ez.MUZMARKET]: E.e8.navbar.NAVBAR_NAVIGATION_ITEM_MUZMARKET,
                },
                e0 = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                e1 = e0({ placement: 'right', padding: 8 });
            var e2 = a(45197),
                e5 = a.n(e2);
            let e8 = (e) => {
                let { children: t } = e;
                return (0, m.jsxs)('span', {
                    className: e5().root,
                    children: [t, (0, m.jsx)(k.HL, { variant: 'span', type: 'controls', size: 'xxs', weight: 'medium', className: e5().badge, children: 'BETA' })],
                });
            };
            var e4 = a(83295),
                e9 = a(12816),
                e3 = a(82204),
                e6 = a(28830),
                e7 = a(77948),
                te = a(59844),
                tt = a(50408),
                ta = a(49034),
                ti = a(26645),
                tn = a(95547),
                tr = a.n(tn);
            let ts = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                to = (0, h.PA)((e) => {
                    let { config: t, children: a, intersectionPropertyId: i, referenceRef: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, M.g)(),
                        { compositePlayerBarRef: o } = (0, O.g)(),
                        { setIsOnboardingOpened: l } = (0, ti.w)(),
                        [d, c] = (0, tt.d)(),
                        u = (0, e4.S)([c, n]),
                        _ = (0, ta.z)({ id: t.id, ref: d, intersectionPropertyId: i }),
                        [p, h] = (0, f.useState)(_ && t.isEnabled),
                        v = (0, S.c)((e) => {
                            (null == e || e.stopPropagation(), h(!1), l(!1));
                        }),
                        b = (0, S.c)((e) => {
                            e || v();
                        });
                    return (0, m.jsxs)(j.m_, {
                        placement: s ? 'top' : 'right',
                        arrowProps: ts,
                        offsetOptions: s ? 15 : -10,
                        isHoverEnabled: !1,
                        open: p,
                        onOpenChange: b,
                        enableAriaDescribedby: !0,
                        referenceRef: null != u ? u : void 0,
                        children: [
                            a,
                            (0, m.jsxs)(j.ZI, {
                                className: tr().tooltip,
                                rootNode: s ? o : void 0,
                                children: [
                                    (0, m.jsx)(I.$, {
                                        icon: (0, m.jsx)(w.I, { variant: 'close', size: 'xxs' }),
                                        onClick: v,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: tr().button,
                                        'aria-label': r({ id: 'interface-actions.close' }),
                                    }),
                                    (0, m.jsx)(k.HL, { className: tr().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                tl = (e) => {
                    let { config: t, children: a, intersectionPropertyId: i, referenceRef: n } = e;
                    return t ? (0, m.jsx)(to, { config: t, intersectionPropertyId: i, referenceRef: n, children: a }) : a;
                },
                td = (e) => {
                    let { route: t, ref: a, ...i } = e,
                        { ref: n, intersectionPropertyId: r } = (0, e6.n)(),
                        s = (0, e4.S)([n, a]);
                    return (0, m.jsx)(tl, {
                        config: t.onboardingConfig,
                        intersectionPropertyId: r,
                        referenceRef: s,
                        children: (0, m.jsx)(eD, { ...i, ref: s, 'data-intersection-property-id': r }),
                    });
                },
                tc = (e) => {
                    let { route: t, ...a } = e;
                    return (0, m.jsx)(te.n, {
                        pageId: e9._Q.SIDEBAR,
                        children: (0, m.jsx)(e3.F, {
                            blockType: t.analyticsParams.entityType,
                            blockId: t.analyticsParams.entityType,
                            blockPosX: 1,
                            blockPosY: 1,
                            children: (0, m.jsx)(e7.B, {
                                objectType: eN.DomainObjectType.Shortcut,
                                objectId: t.path,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, m.jsx)(td, { route: t, ...a }),
                            }),
                        }),
                    });
                };
            var tu = a(62571),
                t_ = a(21970),
                tm = a(45628),
                tp = a(15028);
            function th(e, t) {
                var a = Object.create(null);
                return (
                    e &&
                        f.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            a[e.key] = t && (0, f.isValidElement)(e) ? t(e) : e;
                        }),
                    a
                );
            }
            function tv(e, t, a) {
                return null != a[t] ? a[t] : e.props[t];
            }
            var tb =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                tx = (function (e) {
                    function t(t, a) {
                        var i = e.call(this, t, a) || this,
                            n = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return ((i.state = { contextValue: { isMounting: !0 }, handleExited: n, firstRender: !0 }), i);
                    }
                    (0, tm.A)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (a.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var a,
                                i,
                                n = t.children,
                                r = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? th(e.children, function (t) {
                                          return (0, f.cloneElement)(t, {
                                              onExited: r.bind(null, t),
                                              in: !0,
                                              appear: tv(t, 'appear', e),
                                              enter: tv(t, 'enter', e),
                                              exit: tv(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function a(a) {
                                                  return a in t ? t[a] : e[a];
                                              }
                                              ((e = e || {}), (t = t || {}));
                                              var i,
                                                  n = Object.create(null),
                                                  r = [];
                                              for (var s in e) s in t ? r.length && ((n[s] = r), (r = [])) : r.push(s);
                                              var o = {};
                                              for (var l in t) {
                                                  if (n[l])
                                                      for (i = 0; i < n[l].length; i++) {
                                                          var d = n[l][i];
                                                          o[n[l][i]] = a(d);
                                                      }
                                                  o[l] = a(l);
                                              }
                                              for (i = 0; i < r.length; i++) o[r[i]] = a(r[i]);
                                              return o;
                                          })(n, (a = th(e.children)))),
                                      ).forEach(function (t) {
                                          var s = i[t];
                                          if ((0, f.isValidElement)(s)) {
                                              var o = t in n,
                                                  l = t in a,
                                                  d = n[t],
                                                  c = (0, f.isValidElement)(d) && !d.props.in;
                                              l && (!o || c)
                                                  ? (i[t] = (0, f.cloneElement)(s, {
                                                        onExited: r.bind(null, s),
                                                        in: !0,
                                                        exit: tv(s, 'exit', e),
                                                        enter: tv(s, 'enter', e),
                                                    }))
                                                  : l || !o || c
                                                    ? l &&
                                                      o &&
                                                      (0, f.isValidElement)(d) &&
                                                      (i[t] = (0, f.cloneElement)(s, {
                                                          onExited: r.bind(null, s),
                                                          in: d.props.in,
                                                          exit: tv(s, 'exit', e),
                                                          enter: tv(s, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, f.cloneElement)(s, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (a.handleExited = function (e, t) {
                            var a = th(this.props.children);
                            e.key in a ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var a = (0, t_.A)({}, t.children);
                                        return (delete a[e.key], { children: a });
                                    }));
                        }),
                        (a.render = function () {
                            var e = this.props,
                                t = e.component,
                                a = e.childFactory,
                                i = (0, tu.A)(e, ['component', 'childFactory']),
                                n = this.state.contextValue,
                                r = tb(this.state.children).map(a);
                            return (delete i.appear, delete i.enter, delete i.exit, null === t)
                                ? f.createElement(tp.A.Provider, { value: n }, r)
                                : f.createElement(tp.A.Provider, { value: n }, f.createElement(t, i, r));
                        }),
                        t
                    );
                })(f.Component);
            ((tx.propTypes = {}),
                (tx.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                }));
            var tf = a(16967),
                tg = a(42078),
                tA = a(90688),
                tC = a(7555),
                tN = a(61691),
                ty = a(60757),
                tT = a(29008),
                tE = a(46474),
                tS = a(18610),
                tB = a(56651),
                tI = a(78940);
            let tw = () => {
                let e = (0, eT.st)(),
                    { hash: t } = (0, eT.gf)(),
                    a = (0, eo.U)(),
                    {
                        settings: { isMobile: i },
                    } = (0, M.g)();
                return (0, f.useCallback)(
                    (n, r) => {
                        if (!e) return;
                        let s = (0, eC.F)({
                            params: {
                                hash: t,
                                pageId: eN.AppScreen.Sidebar,
                                sidebarSize: n || i ? eN.UIElementSizes.Small : eN.UIElementSizes.Medium,
                                from: eN.AppScreen.Sidebar,
                                to: r,
                            },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        s && (0, ey.qi)(e.evgenInstance, s);
                    },
                    [e, t, i, a],
                );
            };
            var tP = a(8990),
                tj = a(14431),
                tk = a.n(tj);
            let tL = (e) => {
                    let { children: t, entityUrl: a, ariaLabel: i, ...n } = e;
                    return a ? (0, m.jsx)(eq.N, { href: a, className: tk().link, 'aria-label': i, ...n, children: t }) : t;
                },
                tR = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: s,
                            withCollapseAnimation: o,
                            entityUrl: l,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: _,
                        } = e,
                        h = eY(),
                        v = (0, f.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, B.P)(e, tk().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        b = l && h([l]) ? void 0 : l;
                    return (0, m.jsxs)(tP.C, {
                        ref: u,
                        className: (0, p.$)(tk().root, { [tk().root_withoutLink]: !b }, t),
                        role: 'listitem',
                        'aria-label': b ? void 0 : _,
                        'data-test-id': E.e8.navbar.PIN_ITEM,
                        children: [
                            (0, m.jsxs)(tL, {
                                entityUrl: b,
                                ariaLabel: _,
                                onClick: v,
                                children: [
                                    (0, m.jsx)('div', { className: tk().cover, 'data-test-id': E.e8.navbar.PIN_COVER, children: a }),
                                    (0, m.jsx)('div', {
                                        className: tk().meta,
                                        children: (0, m.jsxs)('div', {
                                            className: (0, p.$)(tk().info, {
                                                [tk().info_collapsed]: s,
                                                [tk().info_animated]: o,
                                                [tk().info_withContextMenu]: (0, f.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, m.jsx)(k.HL, {
                                                    'aria-hidden': !0,
                                                    className: tk().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': E.e8.navbar.PIN_TITLE,
                                                    children: i,
                                                }),
                                                (0, m.jsx)(k.HL, {
                                                    'aria-hidden': !0,
                                                    className: tk().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': E.e8.navbar.PIN_SUBTITLE,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, f.isValidElement)(r) &&
                                (0, m.jsx)('div', {
                                    className: (0, p.$)(tk().contextMenu, { [tk().contextMenu_hidden]: s }),
                                    'data-test-id': E.e8.navbar.PIN_CONTEXT_MENU_BUTTON,
                                    children: r,
                                }),
                        ],
                    });
                },
                tO = (0, f.forwardRef)((e, t) => (0, m.jsx)(tR, { forwardRef: t, ...e })),
                tD = (0, f.createContext)(null);
            var tM = a(82640),
                tU = a.n(tM),
                tF = a(19934),
                tz = a(95210),
                tW = a(27817);
            let tK = () => {
                    let e = (0, eT.st)(),
                        { hash: t } = (0, eT.gf)(),
                        a = (0, eo.U)(),
                        {
                            settings: { isMobile: i },
                        } = (0, M.g)();
                    return (0, f.useCallback)(
                        (n) => {
                            let { actionType: r, isCollapsed: s, mainObjectType: o, mainObjectId: l } = n;
                            if (!e) return;
                            let d = {
                                hash: t,
                                actionType: r,
                                user_interaction_type: eN.UserInteractionType.Tap,
                                pageId: eN.AppScreen.Sidebar,
                                sidebarSize: s || i ? eN.UIElementSizes.Small : eN.UIElementSizes.Medium,
                            };
                            (o && (d.mainObjectType = o), l && (d.mainObjectId = l));
                            let c = (0, eC.F)({ params: d, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            c && (0, ey.dL)(e.evgenInstance, c);
                        },
                        [e, t, i, a],
                    );
                },
                tV = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, y.A)(),
                        { isCollapsed: n } = (0, f.useContext)(tD) || {},
                        [r, s] = (0, f.useState)(!1),
                        o = tK(),
                        l = (0, f.useCallback)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }, []),
                        d = (0, f.useCallback)(() => {
                            (t(), o({ actionType: eN.ActionType.Unpin, isCollapsed: null != n && n }));
                        }, [n, t, o]);
                    return (
                        (0, tz.N)(r),
                        (0, m.jsx)(tF.W1, {
                            className: (0, p.$)(tU().contextMenu, { [tU().contextMenu_visible]: r }),
                            onClick: l,
                            icon: (0, m.jsx)(w.I, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: s,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: E.e8.navbar.PIN_CONTEXT_MENU,
                            children: (0, m.jsx)(tW.L, { onClick: d, isPinned: a }),
                        })
                    );
                },
                tH = (0, h.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, y.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        d = (0, tB.A)(i),
                        c = (0, tT.r)(i.type, tT.c.PIN),
                        u = tw(),
                        _ = ((e) =>
                            (0, f.useMemo)(() => {
                                switch (e) {
                                    case tN._.PODCAST:
                                        return eN.AppScreen.PodcastScreen;
                                    case tN._.AUDIOBOOK:
                                        return eN.AppScreen.AudiobookScreen;
                                    default:
                                        return eN.AppScreen.AlbumScreen;
                                }
                            }, [e]))(i.type),
                        h = (0, tI.Z)(i.url),
                        v = ((e) => {
                            let { albumId: t, albumUrl: a, callback: i } = e,
                                { getAlbumUrlWithSavedClid: n, checkIsCurrentAlbumPage: r } = (0, tE.I)(),
                                s = (0, tS.p)();
                            return (0, S.c)((e) => {
                                if (!t || !a) {
                                    null == i || i(e);
                                    return;
                                }
                                if (r(t)) {
                                    (null == e || e.preventDefault(), s(n(t, a)));
                                    return;
                                }
                                null == i || i(e);
                            });
                        })({ albumId: i.id, albumUrl: i.url, callback: h }),
                        b = (0, ty.c)({ album: i, callback: v }),
                        x = (0, S.c)((e) => {
                            (u(null != o && o, _), b(e));
                        }),
                        g = (0, f.useMemo)(
                            () =>
                                (0, m.jsx)(tC.t, {
                                    className: tU().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(j.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tA._V, {
                                                className: tU().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(j.ZI, {
                                                className: tU().tooltip,
                                                children: (0, m.jsx)(k.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, o, r],
                        );
                    return (0, m.jsx)(tO, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, p.$)(tU().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: g,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tV, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: x,
                    });
                }),
                tG = (0, f.forwardRef)((e, t) => (0, m.jsx)(tH, { forwardRef: t, ...e }));
            var tY = a(91959),
                t$ = a(77455);
            let tq = (0, h.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, y.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        d = (0, t$.A)(i),
                        c = tw(),
                        u = (0, tI.Z)(i.url),
                        _ = (0, tY.S)({ artist: i, callback: u }),
                        h = (0, S.c)((e) => {
                            (c(null != o && o, eN.AppScreen.ArtistScreen), _(e));
                        }),
                        v = (0, f.useMemo)(
                            () =>
                                (0, m.jsx)(tC.t, {
                                    className: tU().cover,
                                    radius: 'round',
                                    children: (0, m.jsxs)(j.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tA._V, {
                                                className: tU().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(j.ZI, {
                                                className: tU().tooltip,
                                                children: (0, m.jsx)(k.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, o, r],
                        );
                    return (0, m.jsx)(tO, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, p.$)(tU().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(T.A, { id: 'entity-names.artist' }),
                        cover: v,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tV, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: h,
                    });
                }),
                tZ = (0, f.forwardRef)((e, t) => (0, m.jsx)(tq, { forwardRef: t, ...e }));
            var tX = a(24460);
            let tQ = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, y.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        d = (0, tX.A)(i),
                        c = tw(),
                        u = (0, S.c)(() => {
                            c(null != o && o, eN.AppScreen.PlaylistScreen);
                        }),
                        _ = (0, f.useMemo)(
                            () =>
                                (0, m.jsx)(tC.t, {
                                    className: tU().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(j.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tA._V, {
                                                'aria-hidden': !0,
                                                className: tU().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(j.ZI, {
                                                className: tU().tooltip,
                                                children: (0, m.jsx)(k.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [o, i.coverUri, i.title, r],
                        );
                    return (0, m.jsx)(tO, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, p.$)(tU().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(T.A, { id: 'entity-names.playlist' }),
                        cover: _,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tV, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                tJ = (0, f.forwardRef)((e, t) => (0, m.jsx)(tQ, { forwardRef: t, ...e }));
            var t0 = a(78275),
                t1 = a(16112),
                t2 = a(55211),
                t5 = a(5407),
                t8 = a(64284),
                t4 = a(76675),
                t9 = a(90420),
                t3 = a(39267);
            let t6 = (0, h.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        s = (0, f.useId)(),
                        { formatMessage: o } = (0, y.A)(),
                        { isCollapsed: l, withCollapseAnimation: d } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        [c, u] = (0, f.useState)(!1),
                        _ = (0, t1.A)(i),
                        { freeAccess: h } = (0, M.g)(),
                        { state: v, setState: x } = (0, t0.e)(!1),
                        g = (() => {
                            let e = (0, eT.st)(),
                                { hash: t } = (0, eT.gf)(),
                                a = (0, eo.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, M.g)();
                            return (0, f.useCallback)(
                                (n) => {
                                    let { isCollapsed: r, mainObjectId: s } = n;
                                    if (!e) return;
                                    let o = (0, eC.F)({
                                        params: {
                                            hash: t,
                                            pageId: eN.AppScreen.Sidebar,
                                            sidebarSize: r || i ? eN.UIElementSizes.Small : eN.UIElementSizes.Medium,
                                            mainObjectType: eN.DomainObjectType.Wave,
                                            mainObjectId: s,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    o && (0, ey.cV)(e.evgenInstance, o);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        A = tK(),
                        C = (0, t4.b)(),
                        N = (0, t5.P)(),
                        T = i.stationType === t9.q7,
                        { isPlaying: E, togglePlay: B, isCurrent: I } = (0, D.B)({ seeds: i.seeds, pageIdForFrom: e9._Q.SIDEBAR, blockIdForFrom: t8.U.RADIO }),
                        w = (0, S.c)(async () => {
                            var e, t;
                            return h.isVibeStartRestricted
                                ? void x(!0)
                                : (E
                                      ? A({
                                            actionType: eN.ActionType.Pause,
                                            isCollapsed: null != l && l,
                                            mainObjectType: eN.DomainObjectType.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : g({ isCollapsed: null != l && l, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  B());
                        }),
                        P = (0, S.c)(() => {
                            N() ||
                                (u(!0),
                                w().finally(() => {
                                    u(!1);
                                }),
                                C(!E));
                        }),
                        L = (0, f.useMemo)(
                            () => (0, m.jsx)(k.HL, { id: s, variant: 'span', type: 'controls', size: 's', lineClamp: 1, children: i.title }),
                            [s, i.title],
                        ),
                        R = (0, b.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, m.jsx)(t2.n, {
                                      agent: i.agent,
                                      isCurrent: I,
                                      isPlaying: E,
                                      onPlayButtonClick: P,
                                      className: (0, p.$)({ [tU().multivibeContainer]: T }),
                                      coverClassName: (0, p.$)({ [tU().multivibeCover]: T }),
                                      entityCoverClassName: (0, p.$)({ [tU().multivibeAvatar]: T }),
                                      controlClassName: (0, p.$)({ [tU().multivibeControl]: T }),
                                  })
                                : (0, m.jsx)(t3.q, {
                                      isCurrent: I,
                                      isPlaying: E,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: P,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: s,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      className: (0, p.$)({ [tU().multivibeContainer]: T }),
                                      withLoadingIndicator: !1,
                                      coverClassName: (0, p.$)({ [tU().multivibeCover]: T }),
                                      entityCoverClassName: (0, p.$)({ [tU().multivibeAvatar]: T }),
                                      controlClassName: (0, p.$)({ [tU().multivibeControl]: T }),
                                  });
                        }),
                        O = (0, b.L)(() =>
                            (0, m.jsxs)(j.m_, {
                                ...r,
                                enabled: l,
                                children: [
                                    R,
                                    (0, m.jsx)(j.ZI, {
                                        className: tU().tooltip,
                                        children: (0, m.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        U = (0, f.useCallback)(
                            () =>
                                (0, m.jsx)(tO, {
                                    ref: n,
                                    ariaLabel: o({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    onDoubleClick: w,
                                    className: (0, p.$)(tU().root, a),
                                    isCollapsed: !!l,
                                    contextMenu: (0, m.jsx)(tV, { onPinClick: _, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: L,
                                    subtitle: i.getDescription(o({ id: 'entity-names.my-vibe' })),
                                    cover: O,
                                }),
                            [n, w, a, l, _, i, d, L, o, O],
                        );
                    return (0, m.jsx)(e$.S, {
                        isEnabled: h.isVibeStartRestricted,
                        isOpened: v,
                        onOpenChange: x,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: U,
                    });
                }),
                t7 = (0, f.forwardRef)((e, t) => (0, m.jsx)(t6, { forwardRef: t, ...e }));
            var ae = a(9889),
                at = a.n(ae);
            let aa = e0({ placement: 'right', padding: 20 }),
                ai = { enter: at().pin_enter, enterActive: at().pin_enter_active, exit: at().pin_exit, exitActive: at().pin_exit_active },
                an = (0, h.PA)((e) => {
                    let { className: t, withCollapseAnimation: a, isCollapsed: i, style: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        { pinsCollection: s } = (0, M.g)(),
                        o = s.filteredItems,
                        l = null == o ? void 0 : o.map(() => (0, f.createRef)()),
                        d = (0, f.useMemo)(() => ({ withCollapseAnimation: a, isCollapsed: i }), [i, a]),
                        c = o && o.length > 0,
                        u = o && o.length >= 3;
                    return (0, m.jsx)(tD.Provider, {
                        value: d,
                        children: (0, m.jsx)('div', {
                            className: (0, p.$)(at().root, { [at().root_withScroll]: u, [at().root_hasPins]: c }, t),
                            style: n,
                            'data-test-id': E.e8.navbar.PIN_LIST,
                            children: (0, m.jsx)('div', {
                                role: 'list',
                                'aria-label': r({ id: 'navigation.pins-list' }),
                                className: at().content,
                                children: (0, m.jsx)(tx, {
                                    component: null,
                                    children:
                                        null == o
                                            ? void 0
                                            : o.map((e, t) => {
                                                  switch (e.type) {
                                                      case tg._.ALBUM_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: ai,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tG, {
                                                                      className: at().pin,
                                                                      tooltipOptions: aa,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tg._.ARTIST_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: ai,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tZ, {
                                                                      className: at().pin,
                                                                      tooltipOptions: aa,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tg._.PLAYLIST_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: ai,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tJ, {
                                                                      className: at().pin,
                                                                      tooltipOptions: aa,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tg._.WAVE_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: ai,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(t7, {
                                                                      className: at().pin,
                                                                      tooltipOptions: aa,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                ar = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                as = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                ao = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                al = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var ad = a(98675),
                ac = a.n(ad);
            let au = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, Y.W)(),
                        n = (0, b.L)(() => {
                            switch (i) {
                                case V.S.Dark:
                                    if (t) return as.src;
                                    return ar.src;
                                case V.S.Light:
                                    if (t) return al.src;
                                    return ao.src;
                            }
                        });
                    return (0, m.jsx)(tA._V, { ref: a, className: ac().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                a_ = (0, f.forwardRef)((e, t) => (0, m.jsx)(au, { forwardRef: t, ...e }));
            var am = a(66294),
                ap = a.n(am),
                ah = a(72131),
                av = (function (e) {
                    return ((e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e);
                })({}),
                ab = a(79275),
                ax = a.n(ab);
            let af = { exit: ax().bar_exit, exitActive: ax().bar_exit_active, enter: ax().bar_enter, enterActive: ax().bar_enter_active },
                ag = { exit: ax().button_exit, exitActive: ax().button_exit_active, enter: ax().button_enter, enterActive: ax().button_enter_active },
                aA = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        s = (0, f.useRef)(null),
                        o = (0, f.useRef)(null);
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(ax().root, t),
                        children: [
                            (0, m.jsx)(tf.A, {
                                nodeRef: o,
                                in: n,
                                timeout: 150,
                                classNames: ag,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(ax().button), ref: o, children: i }),
                            }),
                            (0, m.jsx)(tf.A, {
                                nodeRef: s,
                                in: !n,
                                timeout: 150,
                                classNames: af,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(ax().bar, r), ref: s, children: a }),
                            }),
                        ],
                    });
                },
                aC = (e) => {
                    switch (e) {
                        case av.MACOS:
                            return 'macos';
                        case av.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                aN = (e) => {
                    let { formatMessage: t } = (0, y.A)();
                    switch (e) {
                        case av.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case av.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var ay = a(10748),
                aT = a.n(ay);
            let aE = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        s = aN(t),
                        o = (0, f.useMemo)(() => {
                            let e = { span: (e) => (0, m.jsx)('span', { className: aT().textBright, children: e }) };
                            switch (t) {
                                case av.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case av.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, m.jsx)('section', {
                        ref: a,
                        'aria-label': s,
                        children: (0, m.jsxs)(tC.t, {
                            radius: 'm',
                            className: aT().root,
                            children: [
                                (0, m.jsx)(I.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: aT().closeButton,
                                    icon: (0, m.jsx)(w.I, { variant: 'close', size: 'xxs', className: aT().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, m.jsx)(k.HL, { variant: 'div', className: aT().text, size: 'm', children: o }),
                                (0, m.jsx)(I.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': s,
                                    onClick: i,
                                    icon: (0, m.jsx)(w.I, { variant: aC(t), size: 'xxs', className: aT().downloadButtonIcon }),
                                    'data-test-id': E.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED,
                                    children: (0, m.jsx)(k.HL, {
                                        variant: 'span',
                                        className: aT().downloadButtonText,
                                        size: 'm',
                                        children: (0, m.jsx)(T.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                aS = (0, f.forwardRef)((e, t) => (0, m.jsx)(aE, { forwardRef: t, ...e }));
            var aB = a(3030),
                aI = a.n(aB);
            let aw = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = aN(t),
                        n = (0, f.useMemo)(() => aC(t), [t]);
                    return (0, m.jsxs)(tC.t, {
                        radius: 'm',
                        className: aI().root,
                        children: [
                            (0, m.jsx)(w.I, { variant: n, className: aI().icon }),
                            (0, m.jsxs)(j.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, m.jsx)(I.$, {
                                        className: aI().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, m.jsx)(w.I, { variant: 'download', size: 'xxs', className: aI().buttonIcon }),
                                        'aria-label': i,
                                        'data-test-id': E.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED,
                                    }),
                                    (0, m.jsx)(j.ZI, {
                                        children: (0, m.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                aP = (0, h.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, M.g)(),
                        n = (0, eg.N)(),
                        r = n.get(ef.oo),
                        s = n.get(ef.V4),
                        [o, l] = (0, f.useState)(!1),
                        d = (() => {
                            let e = (0, eT.st)(),
                                { hash: t } = (0, eT.gf)(),
                                a = (0, eo.U)();
                            return (0, f.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, eC.F)({
                                    params: {
                                        entityType: eN.EntityTypes.Error,
                                        entityId: eN.EntityTypes.Error,
                                        hash: t,
                                        pageId: eN.AppScreen.PageNotFoundScreen,
                                        pageStyle: eN.PageStyles.Fullscreen,
                                        pagePlacement: eN.PagePlacements.Fullscreen,
                                        mainObjectType: eN.DomainObjectType.NonApplicable,
                                        mainObjectId: eN.DomainObjectType.NonApplicable,
                                        from: eN.AppScreen.PageNotFoundScreen,
                                        to: eN.AppScreen.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, eX.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        c = (0, f.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return av.MACOS;
                                case 'Windows':
                                    return av.WINDOWS;
                                default:
                                    return av.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, ah._)(s.downloadDesktop.url),
                        _ = (0, f.useCallback)(() => {
                            (d(), window.open(u, '_blank', 'noreferrer noopener'));
                        }, [d, u]),
                        p = (0, f.useCallback)(() => {
                            (r.set(eA.c.NavbarDownloadBarIsHidden, !0, { expires: 30 }), l(!0));
                        }, [r]);
                    return o
                        ? null
                        : (0, m.jsx)(aA, {
                              isCollapsed: a,
                              button: (0, m.jsx)(aw, { variant: c, onDownloadClick: _ }),
                              children: (0, m.jsx)(aS, { variant: c, onDownloadClick: _, onCloseClick: p }),
                          });
                });
            var aj = a(19994),
                ak = a(86462),
                aL = a(67594),
                aR = a.n(aL);
            let aO = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                aD = (0, h.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i } = (0, M.g)(),
                        [n, r] = (0, tt.d)(),
                        { formatMessage: s } = (0, y.A)(),
                        {
                            mainText: o,
                            isShimmerVisible: l,
                            isShimmerActive: d,
                            openPaymentWidgetModal: c,
                            saveOfferAndAuthorize: u,
                        } = (0, ak.D)({ storeName: 'music', isEnabled: t, offerElement: { element: n, intersectionPropertyId: aO } }),
                        _ = (0, b.L)(() => o || s({ id: 'authorization.start-button' })),
                        p = (0, S.c)(() => {
                            if (!i.isAuthorized) return void u();
                            c();
                        });
                    return l
                        ? (0, m.jsx)(aj.W, { className: aR().plusButtonShimmer, isActive: d, radius: 'xxxl' })
                        : (0, m.jsx)(I.$, {
                              className: aR().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: p,
                              ref: r,
                              'data-intersection-property-id': aO,
                              ...a,
                              children: (0, m.jsx)(k.HL, { variant: 'div', size: 's', lineClamp: 2, children: _ }),
                          });
                });
            aD.displayName = 'PlusNavbarButton';
            var aM = a(44450),
                aU = a(26e3),
                aF = a(40210);
            function az() {
                return (az = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aW = function (e) {
                return f.createElement(
                    'svg',
                    az({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    f.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        f.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = f.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = f.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = f.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            f.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                s || (s = f.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            o || (o = f.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            l ||
                                (l = f.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    f.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    f.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = f.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            f.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            f.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = f.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = f.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    _ ||
                        (_ = f.createElement(
                            'defs',
                            null,
                            f.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                f.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                f.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            f.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                f.createElement('stop', { stopColor: '#FF5C4D' }),
                                f.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                f.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                f.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                f.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                f.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                f.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var aK = a(89057),
                aV = a.n(aK);
            let aH = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, M.g)(),
                        { formatMessage: r } = (0, y.A)();
                    return (0, m.jsxs)('section', {
                        className: (0, p.$)(aV().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        'data-test-id': E.e8.plusBar.PLUS_BAR,
                        children: [
                            (0, m.jsx)(aW, { className: aV().logos, 'aria-hidden': 'true' }),
                            (0, m.jsx)(k.HL, {
                                className: aV().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': E.e8.plusBar.PLUS_BAR_TITLE,
                                children: (0, m.jsx)(T.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsx)(k.HL, {
                                className: aV().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                'data-test-id': E.e8.plusBar.PLUS_BAR_ADDITION,
                                children: (0, m.jsx)(T.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: aV().buttons,
                                children: [
                                    (0, m.jsx)(aD, { shouldFetchOffers: i, 'data-test-id': E.e8.plusBar.PLUS_BAR_OFFER_BUTTON }),
                                    (0, m.jsx)(I.$, {
                                        className: aV().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        'data-test-id': E.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON,
                                        children: (0, m.jsx)(T.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                aG = (0, f.forwardRef)((e, t) =>
                    (0, m.jsx)(aM.r, { page: aU.l.SIDEBAR, places: [aF.R.SIDEBAR_BANNER], children: (0, m.jsx)(aH, { forwardRef: t, ...e }) }),
                );
            var aY = a(9995),
                a$ = a.n(aY);
            let aq = (0, h.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, y.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, M.g)();
                return (0, m.jsx)(aA, {
                    className: a$().root,
                    isCollapsed: t,
                    button: (0, m.jsxs)(j.m_, {
                        ...e1,
                        enabled: t,
                        children: [
                            (0, m.jsx)(I.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, m.jsx)(w.I, { className: a$().icon, variant: 'plusOutlined' }),
                                className: (0, p.$)(a$().button, a$().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                'data-test-id': E.e8.navbar.PAYWALL_BUTTON_MINIMIZED,
                            }),
                            (0, m.jsx)(j.ZI, {
                                children: (0, m.jsx)(k.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, m.jsx)(T.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aG, { shouldFetchOffers: a }),
                });
            });
            aq.displayName = 'NavbarDesktopAnimatedPlusBar';
            var aZ = a(2946),
                aX = a(7628),
                aQ = a(4213),
                aJ = a.n(aQ);
            let a0 = () => {
                let { formatMessage: e } = (0, y.A)(),
                    t = e({ id: 'authorization.enter-title' }),
                    a = e({ id: 'authorization.enter-subtitle' });
                return (0, m.jsxs)('div', {
                    className: aJ().root,
                    'data-test-id': E.e8.unauthBar.UNAUTH_BAR,
                    children: [
                        (0, m.jsx)(f.Suspense, { children: (0, m.jsx)(aZ.F, { className: aJ().userProfile, userIdClassName: aJ().userId, variant: 'desktop' }) }),
                        (0, m.jsx)(k.HL, {
                            className: aJ().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            'data-test-id': E.e8.unauthBar.UNAUTH_BAR_TITLE,
                            children: t,
                        }),
                        (0, m.jsx)(k.HL, {
                            className: aJ().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            'data-test-id': E.e8.unauthBar.UNAUTH_BAR_ADDITION,
                            children: a,
                        }),
                        (0, m.jsx)(aX.H, { size: 's', isBlock: !0 }),
                    ],
                });
            };
            var a1 = a(91129),
                a2 = a.n(a1);
            let a5 = (0, h.PA)((e) => {
                let { isCollapsed: t, withUserProfileAnimation: a } = e,
                    { user: i } = (0, M.g)();
                return i.isAuthorized
                    ? (0, m.jsx)('div', {
                          className: a2().userProfileContainer,
                          children: (0, m.jsx)(aZ.F, {
                              className: a2().userProfile,
                              userIdClassName: a2().userId,
                              metaClassName: (0, p.$)(a2().userMeta, { [a2().userMeta_withAnimation]: a, [a2().userMeta_collapsed]: t }),
                              withMeta: !0,
                          }),
                      })
                    : (0, m.jsx)(aA, {
                          barClassName: a2().unauthorizedBar,
                          isCollapsed: t,
                          button: (0, m.jsxs)(j.m_, {
                              ...e1,
                              enabled: t,
                              children: [
                                  (0, m.jsx)('div', { className: a2().userProfileContainer, children: (0, m.jsx)(aZ.F, { className: a2().userProfile }) }),
                                  (0, m.jsx)(j.ZI, {
                                      children: (0, m.jsx)(k.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: (0, m.jsx)(T.A, { id: 'authorization.enter-tooltip' }),
                                      }),
                                  }),
                              ],
                          }),
                          children: (0, m.jsx)(a0, {}),
                      });
            });
            a5.displayName = 'NavbarDesktopUserWidget';
            let // for PulseSync: BEGIN desktop sidebar settings navigation
                a8 = (0, h.PA)((e) => {
                var t, a, i, n, r;
                let { className: s, isCollapsed: o, shownAnimation: l, handleClick: d } = e,
                    c = ex(),
                    u = eY(),
                    { formatMessage: _ } = (0, y.A)(),
                    h = (0, eF.j)(),
                    {
                        user: v,
                        experiments: b,
                        settings: x,
                        modals: { bestRecommedationModal: g },
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: A },
                        },
                    } = (0, M.g)(),
                    C = eH(),
                    N = (0, eg.N)().get(ef.oo),
                    E = eQ(),
                    B = ((e) => {
                        let t = (0, eg.N)().get(ef.oo),
                            a = ex(),
                            [i, n] = (0, f.useState)(!1);
                        return (
                            (0, f.useEffect)(() => {
                                !0 !== t.get(eA.c.NavbarCollapsed) && (((e || a) && !1 !== t.get(eA.c.NavbarCollapsed)) || n(!0));
                            }, [e, a, t]),
                            i
                        );
                    })(o),
                    L = v.isAuthorized && !v.hasPlus,
                    R = (0, eM.Q)(),
                    O = A.isVisible && A.type === es.h.BRANDING && R.isEnabled ? (null == (t = R.data) ? void 0 : t.style) : void 0,
                    D = b.checkExperiment(q.z.WebNextPromoVeryBestRecommendations, 'on'),
                    U = b.checkExperiment(q.z.WebNextNavbarExplicit, 'on'),
                    F = !o && U;
                null == (a = x.browserInfo) || a.isTouch;
                let z = N.get(eA.c.NavbarDownloadBarIsHidden),
                    W = b.checkExperiment(q.z.WebNextNewWaveTab, 'on') || b.checkExperiment(q.z.WebNextNewWaveTab, 'on1'),
                    K =
                        !(null == (i = x.browserInfo) ? void 0 : i.isTouch) &&
                        v.isAuthorized &&
                        !v.hasPlus &&
                        (null == (r = b.getExperiment(q.z.WebNextDesktopWebFreemium)) || null == (n = r.value) ? void 0 : n.closeCollection) === 'on',
                    [V, H] = (0, f.useState)(!1),
                    [G, Y] = (0, f.useState)(null),
                    $ = (0, f.useMemo)(() => C.some((e) => e.id === ez.COLLECTION && e.isEnabled), [C]),
                    Z = K && $;
                (0, f.useEffect)(() => {
                    K || H(!1);
                }, [K]);
                let X = (0, S.c)(() => (0, m.jsx)('span', { 'aria-hidden': !0 })),
                    Q = !z && eB.$3 && 0,
                    J = (0, f.useMemo)(() => (o ? _({ id: 'sidebar.uncollapse' }) : _({ id: 'sidebar.collapse' })), [o, _]),
                    ee = (0, f.useCallback)(
                        (e, t) =>
                            e.id === ez.SETTINGS ? (0, m.jsx)(w.I, { variant: 'settingsGear', size: 'xs' }) : (e.id === ez.CONCERTS && b.checkExperiment(q.z.WebNextConcertsTicketIcon, 'on')
                                ? (0, m.jsx)(a_, { isSelected: t })
                                : W
                                  ? (0, m.jsx)(w.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                  : (0, m.jsx)(w.I, { variant: t ? e.iconSelected : e.icon, size: 'm' })),
                        [b, W],
                    ),
                    et = (0, S.c)(() => {
                        F && g.open();
                    }),
                    ea = (0, S.c)((e, t) => () => {
                        E(e, t);
                    }),
                    ei = (0, f.useCallback)(
                        (items) =>
                            (0, m.jsx)(
                                eO,
                                {
                                    className: (0, p.$)({ [ap().navigationGroup]: W }),
                                    children: items.map((e) => {
                                        let t = u(e.availablePaths),
                                            a = ((e) => (e.id === ez.MUZMARKET ? (0, m.jsx)(e8, { children: e.title }) : e.title))(e),
                                            i = e.id === ez.COLLECTION && !!K && e.isEnabled,
                                            n = ea(e.analyticsParams.entityType, e.analyticsParams.to),
                                            r = !i && e.isEnabled && !t;
                                        return (0, m.jsx)(
                                            tc,
                                            {
                                                route: e,
                                                selected: t,
                                                shownAnimation: l,
                                                variant: 'main',
                                                isNewVisualVersion: W,
                                                withRipple: W && e.isEnabled && !t,
                                                children: (0, m.jsxs)(eq.N, {
                                                    ref: i ? Y : void 0,
                                                    href: r ? e.path : void 0,
                                                    role: 'link',
                                                    'aria-disabled': !e.isEnabled,
                                                    tabIndex: e.isEnabled ? 0 : -1,
                                                    className: (0, p.$)({ [ap().disabledNavigationItem]: !e.isEnabled }),
                                                    onClick: i
                                                        ? (e) => {
                                                              (e.preventDefault(), n(), H((e) => !e));
                                                          }
                                                        : n,
                                                    'data-test-id': eJ[e.id],
                                                    children: [
                                                        (0, m.jsxs)(j.m_, {
                                                            ...e1,
                                                            enabled: o,
                                                            children: [
                                                                ee(e, t),
                                                                (0, m.jsx)(j.ZI, {
                                                                    children: (0, m.jsx)(k.HL, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        children: a,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)(k.HL, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: (0, p.$)({ [ap().title_animate]: l, [ap().title_collapsed]: o }),
                                                            children: a,
                                                        }),
                                                    ],
                                                }),
                                            },
                                            e.id,
                                        );
                                    }),
                                },
                                'main',
                            ),
                        [u, o, b, b.loadingState, l, C, ea, ee, K, H],
                    ),
                    en = (0, f.useMemo)(
                        () =>
                            c
                                ? null
                                : (0, f.createElement)(j.m_, {
                                      ...e1,
                                      key: 'collapseTooltip',
                                      enabled: o,
                                      isFocusEnabled: !1,
                                      children: [
                                          (0, m.jsx)(I.$, {
                                              className: ap().collapseButton,
                                              'aria-label': J,
                                              radius: 'round',
                                              color: 'secondary',
                                              size: 'xs',
                                              icon: (0, m.jsx)(w.I, { variant: o ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                              onClick: d,
                                          }),
                                          (0, m.jsx)(j.ZI, { className: (0, p.$)({ [ap().collapseButtonTooltip_hidden]: !o }), children: J }),
                                      ],
                                  }),
                        [o, J, d, c],
                    );
                return (0, m.jsxs)('div', {
                    className: (0, p.$)(ap().root, s),
                    style: O,
                    children: [
                        (0, m.jsxs)('div', {
                            className: ap().logoWrapper,
                            children: [
                                (0, m.jsx)(eq.N, {
                                    href: '/',
                                    className: ap().logoLink,
                                    'aria-label': _({ id: 'navigation.page-main' }),
                                    children: (0, m.jsx)(eI.gu, { className: ap().logo, collapsed: o, shownAnimation: l, lang: h }),
                                }),
                                en,
                            ],
                        }),
                        D &&
                            (0, m.jsx)(k.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'xs',
                                weight: 'medium',
                                className: (0, p.$)(ap().subTitle, { [ap().title_animate]: l, [ap().title_collapsed]: o, [ap().subTitle_withCursorPointer]: F }),
                                onClick: et,
                                children: (0, m.jsx)(T.A, { id: 'navigation.best-recommendations' }),
                            }),
                        (0, m.jsx)('div', {
                            className: ap().scrollableContainer,
                            children: (0, m.jsxs)('div', {
                                className: ap().scrollableContent,
                                children: [
                                    (0, m.jsx)(eR, {
                                        className: (0, p.$)(ap().navigation, { [ap().navigation_new]: W, [ap().navigation_gapFill]: !1 }),
                                        collapsed: o,
                                        'aria-label': _({ id: 'navigation.main-menu' }),
                                        children: (0, m.jsx)(eU.j, { children: ei(C.filter((item) => item.id !== ez.SETTINGS)) }),
                                    }),
                                    (0, m.jsx)(eZ.WithOffline, {
                                        fallback: (0, m.jsx)(an, { style: O, isCollapsed: o, withCollapseAnimation: !!l, className: ap().pinsList }),
                                    }),
                                    L && (0, m.jsx)(aq, { shouldFetchOffers: B, isCollapsed: o }),
                                    Q && (0, m.jsx)(aP, { isCollapsed: o }),
                                ],
                            }),
                        }),
                        v.isAuthorized &&
                            (0, m.jsx)(eR, {
                                className: (0, p.$)(ap().navigation, { [ap().navigation_new]: W }),
                                collapsed: o,
                                'aria-label': _({ id: 'page.settings' }),
                                children: ei(C.filter((item) => item.id === ez.SETTINGS)),
                            }),
                        (0, m.jsx)(a5, { withUserProfileAnimation: l, isCollapsed: o }),
                        Z &&
                            null !== G &&
                            (0, m.jsx)(e$.S, {
                                isOpened: V,
                                onOpenChange: H,
                                placement: 'right',
                                positionElement: G,
                                textVariant: 'collectionFreemium',
                                renderChildren: X,
                            }),
                        U &&
                            (0, m.jsxs)(P.a, {
                                className: ap().bestRecommendationsModal,
                                headerClassName: ap().bestRecommendationsModalHeader,
                                contentClassName: ap().bestRecommendationsModalContent,
                                open: g.isOpened,
                                onOpenChange: g.onOpenChange,
                                onClose: g.close,
                                size: 'fitContent',
                                placement: 'center',
                                overlayColor: 'full',
                                labelClose: _({ id: 'interface-actions.close' }),
                                children: [
                                    (0, m.jsx)(w.I, { variant: 'musicLogo', className: ap().bestRecommendationsModalLogo }),
                                    (0, m.jsx)(k.HL, {
                                        className: ap().bestRecommendationsModalText,
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'normal',
                                        dangerouslySetInnerHTML: { __html: _({ id: 'about-app.explicit-content' }) },
                                    }),
                                ],
                            }),
                    ],
                });
            })
                // for PulseSync: END desktop sidebar settings navigation
;
            var a4 = a(97572),
                a9 = a.n(a4);
            let // for PulseSync: BEGIN hide desktop settings in mobile navigation
                a3 = (0, h.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, M.g)(),
                        i = eY(),
                        { formatMessage: n } = (0, y.A)(),
                        r = eH(),
                        s = n({ id: 'navigation.main-menu' }),
                        o = eQ(),
                        l = a.checkExperiment(q.z.WebNextNewWaveTab, 'on') || a.checkExperiment(q.z.WebNextNewWaveTab, 'on1'),
                        d = (0, f.useCallback)(
                            (e, t) =>
                                e.id === ez.CONCERTS && a.checkExperiment(q.z.WebNextConcertsTicketIcon, 'on')
                                    ? (0, m.jsx)(a_, { isSelected: t || l })
                                    : l
                                      ? (0, m.jsx)(w.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, m.jsx)(w.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, l],
                        ),
                        c = (0, S.c)((e, t) => () => {
                            o(e, t);
                        });
                    return (0, m.jsx)('div', {
                        className: (0, p.$)(a9().root, t),
                        children: (0, m.jsx)(eR, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': s,
                            children: (0, m.jsx)(eO, {
                                children: (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)(eU.j, {
                                            children: r.filter((item) => item.id !== ez.SETTINGS).map((e) => {
                                                let t = i(e.availablePaths);
                                                return (0, m.jsx)(
                                                    tc,
                                                    {
                                                        route: e,
                                                        selected: t,
                                                        isNewVisualVersion: l,
                                                        children: (0, m.jsxs)(eq.N, {
                                                            href: e.isEnabled && !t ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [a9().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: c(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            'data-test-id': eJ[e.id],
                                                            children: [
                                                                d(e, t),
                                                                (0, m.jsx)(k.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    e.id,
                                                );
                                            }),
                                        }),
                                        !l && (0, m.jsx)(eD, { children: (0, m.jsx)(aZ.F, { className: a9().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                })
                // for PulseSync: END hide desktop settings in mobile navigation
,
                a6 = (0, h.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        r = (0, eg.N)().get(ef.oo),
                        s = ex(),
                        {
                            settings: { isMobile: o },
                        } = (0, M.g)(),
                        [l, d] = (0, f.useState)(null != (t = r.get(eA.c.NavbarCollapsed)) ? t : s),
                        [c, u] = (0, f.useState)(!1),
                        _ = (() => {
                            let e = (0, eT.st)(),
                                { hash: t } = (0, eT.gf)(),
                                a = (0, eo.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, M.g)();
                            return (0, f.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let r = (0, eC.F)({
                                        params: {
                                            hash: t,
                                            pageId: eN.AppScreen.Sidebar,
                                            sidebarSize: n || i ? eN.UIElementSizes.Small : eN.UIElementSizes.Medium,
                                            sidebarPosition: i ? eN.UIPositions.Bottom : eN.UIPositions.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    r && (0, ey.U0)(e.evgenInstance, r);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        h = null != i ? i : l,
                        v = null != n ? n : d,
                        b = (0, f.useMemo)(() => (o ? a3 : a8), [o]),
                        x = (0, S.c)((e) => {
                            (e.stopPropagation(), e.preventDefault());
                            let t = !h;
                            (r.set(eA.c.NavbarCollapsed, t, { expires: 180 }), v(t), u(!0));
                        });
                    return (
                        (0, f.useEffect)(() => {
                            _(h || s);
                        }, [s, h, _]),
                        (0, m.jsx)('aside', {
                            className: (0, p.$)(eS().root, { [eS().root_collapsed]: h || s }, a),
                            'data-test-id': E.e8.navbar.NAVBAR,
                            children: (0, m.jsx)(b, { handleClick: x, isCollapsed: h || s, shownAnimation: c }),
                        })
                    );
                });
            var a7 = a(631);
            let ie = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' },
                it = 'adfox_175861261312993498';
            var ia = a(82712),
                ii = (function (e) {
                    return ((e.PLAYER = 'branded_player'), e);
                })({});
            let ir = (e) =>
                    (0, ia.m)(e) &&
                    e.type === ii.PLAYER &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'thumb' in e.payload &&
                    ((e) =>
                        !!(
                            'object' == typeof e &&
                            null !== e &&
                            'href' in e &&
                            'string' == typeof e.href &&
                            'width' in e &&
                            'number' == typeof e.width &&
                            'height' in e &&
                            'number' == typeof e.height
                        ))(e.payload.thumb) &&
                    'modal' in e.payload &&
                    (null === e.payload.modal ||
                        ((e) =>
                            !!(
                                'object' == typeof e &&
                                null !== e &&
                                'imageUri' in e &&
                                'string' == typeof e.imageUri &&
                                'content' in e &&
                                'string' == typeof e.content &&
                                'primaryHref' in e &&
                                'string' == typeof e.primaryHref &&
                                'shouldShowSecondaryButton' in e &&
                                'boolean' == typeof e.shouldShowSecondaryButton &&
                                'secondaryText' in e &&
                                'string' == typeof e.secondaryText
                            ))(e.payload.modal)) &&
                    (!('disclaimer' in e.payload) ||
                        null === e.payload.disclaimer ||
                        ((e) =>
                            !!('object' == typeof e && null !== e && 'advertiser' in e && 'string' == typeof e.advertiser && 'token' in e && 'string' == typeof e.token))(
                            e.payload.disclaimer,
                        )),
                is = (0, h.PA)(() => {
                    let {
                            advertBanners: {
                                banners: { brandedPlayerBanner: e },
                            },
                        } = (0, M.g)(),
                        t = (0, S.c)(() => {
                            e.setType(es.h.BRANDING);
                        }),
                        a = (0, S.c)((t) => {
                            (0, a7.f)(t, it, ir) && e.setPayload(t.data.payload);
                        });
                    return ((0, f.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, f.useEffect)(
                        () => (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        ),
                        [a],
                    ),
                    e.isVisible)
                        ? (0, m.jsx)(ee.N, { ownerId: J.P, containerId: it, params: ie, onLoad: t, onError: e.toggleHasErrorTrue, onNoAds: e.toggleNoAdsTrue })
                        : null;
                });
            var io = a(51318),
                il = a(17071),
                id = a(38860),
                ic = a(5915),
                iu = a(78999),
                i_ = a.n(iu);
            let im = (0, h.PA)((e) => {
                let { className: t, data: a, mediaContent: i, linkClassName: n } = e,
                    {
                        settings: { isMobile: r },
                    } = (0, M.g)(),
                    s = (0, f.useMemo)(
                        () =>
                            (null == a ? void 0 : a.clickThroughUrl)
                                ? (0, m.jsx)(eq.N, {
                                      target: '_blank',
                                      href: a.clickThroughUrl,
                                      className: (0, p.$)(i_().button, i_().linkButton, n),
                                      children: (0, m.jsx)(T.A, { id: 'ads.learn-more' }),
                                  })
                                : (0, m.jsx)(I.$, {
                                      className: (0, p.$)(i_().button, n),
                                      variant: 'default',
                                      radius: 'xxxl',
                                      disabled: !0,
                                      children: (0, m.jsx)(T.A, { id: 'ads.learn-more' }),
                                  }),
                        [null == a ? void 0 : a.clickThroughUrl, n],
                    );
                return (0, m.jsxs)('div', {
                    className: (0, p.$)(i_().root, t),
                    children: [
                        i,
                        (0, m.jsxs)('div', {
                            className: i_().container,
                            children: [
                                (0, m.jsxs)('div', {
                                    className: i_().info,
                                    children: [
                                        (0, m.jsx)(tA._V, {
                                            className: i_().favicon,
                                            withAspectRatio: !0,
                                            'aria-hidden': !0,
                                            fit: 'cover',
                                            src: (null == a ? void 0 : a.iconSrc) || '',
                                            alt: '',
                                            fallbackIconVariant: 'picture',
                                        }),
                                        (0, m.jsxs)('div', {
                                            className: i_().text,
                                            children: [
                                                (0, m.jsx)(k.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: i_().title,
                                                    lineClamp: r ? 5 : void 0,
                                                    children: null == a ? void 0 : a.adTitle,
                                                }),
                                                (0, m.jsx)(k.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: i_().subtitle,
                                                    children: (0, m.jsx)(T.A, { id: 'ads.ad' }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, m.jsx)('div', { className: i_().buttonContainer, children: s }),
                            ],
                        }),
                    ],
                });
            });
            var ip = a(26208),
                ih = a(43484),
                iv = a.n(ih);
            let ib = (0, h.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, M.g)(),
                        { formatMessage: i } = (0, y.A)(),
                        n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        r = (0, f.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return n
                        ? (0, m.jsxs)(tF.W1, {
                              className: iv().contextMenuButton,
                              size: 'xxs',
                              icon: (0, m.jsx)(w.I, { size: 'xxs', variant: 'more', className: iv().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo && (0, m.jsx)(k.HL, { variant: 'div', size: 's', className: iv().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, m.jsx)(tF.Dr, {
                                          onClick: r,
                                          icon: (0, m.jsx)(w.I, { variant: 'info', size: 'xxs' }),
                                          children: (0, m.jsx)(T.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                ix = (0, h.PA)((e) => {
                    var t, a, i;
                    let { className: n } = e,
                        { advert: r } = (0, M.g)();
                    return r.isAdvertDisabled(ip.f.AUDIO) || !(r.data && r.isAdvertShown)
                        ? null
                        : (0, m.jsx)('div', {
                              className: n,
                              children: (0, m.jsx)(im, {
                                  data: r.data,
                                  mediaContent: (0, m.jsxs)('div', {
                                      className: iv().imageContainer,
                                      children: [
                                          (0, m.jsx)(tA._V, {
                                              className: (0, p.$)(iv().image, { [iv().image_fallback]: !(null == (t = r.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = r.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(tA._V, {
                                              className: iv().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = r.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(ib, { advertData: r.data }),
                                      ],
                                  }),
                                  linkClassName: iv().linkButton,
                              }),
                          });
                });
            var ig = a(24437),
                iA = a(44164),
                iC = a.n(iA),
                iN = a(73170),
                iy = a(54112),
                iT = a(7123),
                iE = a(56425),
                iS = a(13758),
                iB = a(57249),
                iI = a(6087),
                iw = a(13315),
                iP = a(31941),
                ij = a.n(iP),
                ik = a(49124);
            let iL = iI.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = ik.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, iS.setWasmUrl)(new URL(iB, e).href);
            }
            let iR = (0, h.PA)((e) => {
                let { className: t, thumbData: a, onThumbAction: i } = e,
                    { sonataState: n } = (0, M.g)(),
                    { formatMessage: r } = (0, y.A)(),
                    [s, o] = (0, f.useState)(null),
                    [l, d] = (0, f.useState)(null),
                    c = (0, f.useRef)(null),
                    u = (0, f.useRef)(null),
                    _ = (0, S.c)(() => {
                        n.status === iT.MT.PLAYING ? null == s || s.play() : null == s || s.pause();
                    });
                ((0, f.useEffect)(() => {
                    if (!a) return;
                    if ((0, iw.J)(a.href)) return void d(a.href);
                    let e = iE.z[a.href];
                    e
                        ? e().then((e) => {
                              (0, iw.J)(e) ? d(e) : d(''.concat(window.location.origin).concat(e));
                          })
                        : d(a.href);
                }, [a]),
                    (0, f.useEffect)(() => {
                        s && (s.setUseFrameInterpolation(!1), s.setRenderConfig({ devicePixelRatio: 0.1 }));
                    }, [s]),
                    (0, f.useEffect)(() => {
                        if (s)
                            return (
                                s.addEventListener('load', _),
                                () => {
                                    s.removeEventListener('load', _);
                                }
                            );
                    }, [s, _, n.status]),
                    (0, f.useEffect)(() => {
                        _();
                    }, [s, _, n.status]),
                    (0, f.useEffect)(
                        () => () => {
                            u.current && clearTimeout(u.current);
                        },
                        [],
                    ));
                let h = (0, S.c)(() => {
                        (u.current && (clearTimeout(u.current), (u.current = null)), null == i || i());
                    }),
                    v = (0, S.c)(() => {
                        i &&
                            (u.current && clearTimeout(u.current),
                            (u.current = setTimeout(() => {
                                (null == i || i(), (u.current = null));
                            }, 800)));
                    }),
                    x = (0, S.c)(() => {
                        u.current && (clearTimeout(u.current), (u.current = null));
                    }),
                    g = (0, b.L)(() => {
                        if (a)
                            return { '--thumb-width': ''.concat(a.width, 'px'), '--thumb-height': ''.concat(a.height, 'px'), '--thumb-cursor': i ? 'pointer' : 'auto' };
                    });
                return l
                    ? i
                        ? (0, m.jsx)('div', {
                              className: ij().root,
                              style: g,
                              children: (0, m.jsx)(I.$, {
                                  ref: c,
                                  className: (0, p.$)(ij().container, t),
                                  onClick: h,
                                  onMouseEnter: v,
                                  onMouseLeave: x,
                                  withRipple: !1,
                                  'aria-label': r({ id: 'branded-player.branding-integration' }),
                                  'data-test-id': E.OA.customPlayerThumb.CUSTOM_PLAYER_THUMB_BUTTON,
                                  children: (0, m.jsx)(iL, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                        : (0, m.jsx)('div', {
                              className: ij().root,
                              style: g,
                              children: (0, m.jsx)('div', {
                                  ref: c,
                                  className: (0, p.$)(ij().container, t),
                                  children: (0, m.jsx)(iL, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                    : null;
            });
            var iO = a(34712),
                iD = a(34194),
                iM = a.n(iD);
            let iU = (0, h.PA)((e) => {
                var t;
                let { modal: a, disclaimer: i } = e,
                    {
                        paywall: n,
                        experiments: r,
                        advertBanners: {
                            banners: { brandedPlayerBanner: s },
                        },
                    } = (0, M.g)(),
                    { contentRootRef: o } = (0, O.g)(),
                    { formatMessage: l } = (0, y.A)(),
                    [d, c] = (0, f.useState)(!1),
                    u = r.checkExperiment(q.z.WebNextBrandedPlayerErids, 'on'),
                    _ = (0, tI.Z)(a.primaryHref),
                    p = (0, S.c)((e) => {
                        var t, a;
                        null == (t = (a = s.modal).onOpenChange) || t.call(a, e);
                    });
                ((e) => {
                    let { enabled: t, onChange: a } = e,
                        i = (0, v.usePathname)();
                    (0, f.useRef)(i);
                    let n = (0, S.c)(a);
                    return (
                        (0, f.useEffect)(() => {}, [t, n, i]),
                        (0, f.useEffect)(() => {
                            if (!t || !eB.NN) return;
                            let e = window.navigation;
                            if (e)
                                return (
                                    e.addEventListener('navigate', n),
                                    () => {
                                        e.removeEventListener('navigate', n);
                                    }
                                );
                        }, [t, n])
                    );
                })({ enabled: s.modal.isOpened, onChange: s.modal.close });
                let h = { '--modal-bottom-offset': ''.concat(null == (t = s.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, m.jsxs)(P.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: s.modal.isOpened,
                    onOpenChange: p,
                    className: iM().root,
                    contentClassName: iM().modalContent,
                    portalNode: o,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: h,
                    'data-test-id': E.OA.playerBranding.BRANDED_PLAYER_MODAL,
                    children: [
                        (0, m.jsxs)('header', {
                            children: [
                                a.imageUri &&
                                    (0, m.jsx)(tA._V, { src: a.imageUri, className: iM().image, 'data-test-id': E.OA.playerBranding.BRANDED_PLAYER_MODAL_IMAGE }),
                                (0, m.jsx)(I.$, {
                                    className: iM().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: s.modal.close,
                                    icon: (0, m.jsx)(w.I, { variant: 'close', size: 'xs' }),
                                    'aria-label': l({ id: 'interface-actions.close' }),
                                    'data-test-id': E.OA.playerBranding.BRANDED_PLAYER_MODAL_CLOSE_BUTTON,
                                }),
                            ],
                        }),
                        (0, m.jsx)(k.HL, {
                            variant: 'span',
                            className: iM().content,
                            lineClamp: 2,
                            'data-test-id': E.OA.playerBranding.BRANDED_PLAYER_MODAL_CONTENT_TEXT,
                            children: a.content,
                        }),
                        u &&
                            i &&
                            (0, m.jsxs)(iO.AM, {
                                placement: 'top-start',
                                open: d,
                                onOpenChange: c,
                                offsetOptions: 8,
                                transform: !1,
                                children: [
                                    (0, m.jsxs)(I.$, {
                                        className: iM().advDisclaimerTrigger,
                                        variant: 'text',
                                        color: 'secondary',
                                        withHover: !1,
                                        withRipple: !1,
                                        'data-test-id': E.OA.playerBranding.ADVERT_DISCLAIMER_TRIGGER_BUTTON,
                                        children: [
                                            (0, m.jsx)(T.A, { id: 'ads.ad' }),
                                            (0, m.jsx)(w.I, { className: iM().advDisclaimerTriggerIcon, variant: 'moreOutlined', size: 'xxxs' }),
                                        ],
                                    }),
                                    (0, m.jsx)(iO.hl, {
                                        className: iM().advDisclaimerPopover,
                                        children: (0, m.jsx)(k.HL, {
                                            className: iM().advDisclaimerText,
                                            variant: 'p',
                                            type: 'text',
                                            size: 'xs',
                                            weight: 'medium',
                                            'data-test-id': E.OA.playerBranding.ADVERT_DISCLAIMER_TEXT,
                                            children: (0, m.jsx)(T.A, { id: 'ads.disclaimer', values: { advertiser: i.advertiser, eridToken: i.token } }),
                                        }),
                                    }),
                                ],
                            }),
                        (0, m.jsxs)('div', {
                            className: iM().actions,
                            children: [
                                (0, m.jsx)(I.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: _,
                                    className: iM().button,
                                    'data-test-id': E.OA.playerBranding.BRANDED_PLAYER_MODAL_PRIMARY_BUTTON,
                                    children: (0, m.jsx)(k.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, m.jsx)(T.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, m.jsx)(I.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: n.openModal,
                                        className: iM().button,
                                        'data-test-id': E.OA.playerBranding.BRANDED_PLAYER_MODAL_SECONDARY_BUTTON,
                                        children: (0, m.jsx)(k.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, m.jsx)(T.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var iF = a(91467),
                iz = a(97361),
                iW = a(9630),
                iK = a(71774),
                iV = a(11518),
                iH = a.n(iV),
                iG = a(54965),
                iY = a(91641),
                i$ = a(39901),
                iq = a.n(i$);
            let iZ = (e) => {
                    let { progress: t, position: a, duration: i, timecodeClassName: n, currentTimecodeClassName: r, progressElementWidth: s, shouldHoldTimecode: o } = e,
                        l = (0, iz.P)(a),
                        d = (0, iz.P)(i),
                        c = (0, f.useRef)(null),
                        [u, _] = (0, f.useState)(0),
                        h = (0, iG.E)(Math.round(i), Math.round(i));
                    (0, f.useEffect)(() => {
                        c.current && _(Math.round(c.current.getBoundingClientRect().width));
                    }, [h.length, s]);
                    let v = Math.round((t / 100) * s),
                        x = 0 !== s ? s - u : 0,
                        g = Math.min(Math.max(v - u / 2, 0), x),
                        A = (0, b.L)(() => {
                            if (!o) return { '--timecode-position': ''.concat(g, 'px') };
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(iY.d, {
                                role: 'text',
                                'aria-label': d,
                                value: h,
                                variant: 'end',
                                className: (0, p.$)(iq().timecode, n, iq().timecode_end, { [iq().timecode_end_hidden]: !(v < x - u / 2) }),
                            }),
                            (0, m.jsx)(iY.d, {
                                role: 'text',
                                'aria-label': l,
                                style: A,
                                ref: c,
                                value: (0, iG.E)(Math.round(a), Math.round(i)),
                                variant: 'start',
                                className: (0, p.$)(iq().timecode, iq().timecode_current, n, r, {
                                    [iq().timecode_current_animation]: u > 0,
                                    [iq().timecode_current_hidden]: o && !(v > 2 * u),
                                }),
                            }),
                        ],
                    });
                },
                iX = (0, h.PA)((e) => {
                    var t, a, i;
                    let {
                            sliderClassName: n,
                            disabled: r,
                            isMobile: s,
                            progressbarClassName: o,
                            thumbClassName: l,
                            showThumbVariant: d,
                            withTimecode: c,
                            sonataPlaybackId: u,
                        } = e,
                        _ = (0, iW.e)(),
                        h = null == _ ? void 0 : _.getState(u),
                        v = (0, f.useRef)(!1),
                        {
                            advert: x,
                            sonataState: g,
                            settings: A,
                            advertBanners: {
                                banners: { brandedPlayerBanner: C },
                            },
                        } = (0, M.g)(),
                        { formatMessage: N } = (0, y.A)(),
                        T = (0, iF.r)(),
                        [B, I] = (0, f.useState)(g.position),
                        [w, P] = (0, f.useState)(g.duration),
                        j = (0, iz.P)(Math.round(null != B ? B : 0)),
                        k = B && w ? (100 * Math.min(B, w)) / w : 0,
                        L = (0, f.useRef)(null),
                        [R, O] = (0, f.useState)(0),
                        D = R > 0,
                        { state: U, toggleTrue: F, toggleFalse: z } = (0, t0.e)(!1),
                        { state: W, toggleTrue: K, toggleFalse: V } = (0, t0.e)(!1),
                        { isVisibilityRestored: H } = (() => {
                            let { state: e, toggleTrue: t, toggleFalse: a } = (0, t0.e)(!1);
                            return (
                                (0, f.useEffect)(() => {
                                    let e = new AbortController();
                                    return (
                                        document.addEventListener(
                                            'visibilitychange',
                                            () => {
                                                document.hidden || t();
                                            },
                                            { signal: e.signal },
                                        ),
                                        () => {
                                            e.abort();
                                        }
                                    );
                                }, [t]),
                                (0, f.useEffect)(() => {
                                    if (!e) return;
                                    let t = requestAnimationFrame(() => {
                                        a();
                                    });
                                    return () => {
                                        cancelAnimationFrame(t);
                                    };
                                }, [e, a]),
                                { isVisibilityRestored: e }
                            );
                        })(),
                        G = (0, b.L)(() => {
                            var e, t;
                            return C.isVisible && (null == (e = C.payload) ? void 0 : e.thumb)
                                ? { thumb: C.payload.thumb, onThumbAction: C.modal.open }
                                : A.selectedThumbId && A.selectedThumbId !== iK.T.DEFAULT
                                  ? { thumb: null == (t = (0, iE.r)(N).get(A.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    ((0, f.useEffect)(() => {
                        (null == _ ? void 0 : _.state.playerState.status.value) === iT.MT.PLAYING && V();
                    }, [V, null == _ ? void 0 : _.state.playerState.status.value]),
                        (0, f.useEffect)(() => {
                            let e = null == _ ? void 0 : _.state.queueState.currentEntity.onChange(K);
                            return (
                                V(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [K, V, null == _ ? void 0 : _.state.queueState.currentEntity]));
                    let Y = (0, S.c)((e, t) => {
                            x.isAdvertShown || ((v.current = !t), t ? null == _ || _.setProgress(e, u) : I(e));
                        }),
                        $ = (0, S.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (P(0), I(0)) : (P(e), v.current || I(t)));
                        });
                    ((0, f.useEffect)(() => {
                        u || $(g.duration, g.position);
                    }, [g.duration, g.position, $, u]),
                        (0, f.useEffect)(() => {
                            var e;
                            if (!u) return;
                            let t =
                                null == h || null == (e = h.playerState)
                                    ? void 0
                                    : e.progress.onChange((e) => {
                                          e && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [u, null == h || null == (t = h.playerState) ? void 0 : t.progress, $]),
                        (0, f.useEffect)(() => {
                            var e;
                            let t =
                                null == T || null == (e = T.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && x.isAdvertShown && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == T || null == (a = T.audioAdvertPlayback) ? void 0 : a.state.playerState.progress, $, x.isAdvertShown]));
                    let q = (k / 100) * R - 6;
                    (0, f.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            O(Math.round(null != (t = null == (e = L.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            L.current && e.observe(L.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Z = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(k, '%'),
                        '--thumb-position': ''.concat(q, 'px'),
                        ...((W || H) && { '--transition-disabled': 'none' }),
                    };
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(iH().root, { [iH().root_focusVisible]: U, [iH().root_isPlayingTrack]: !x.isAdvertShown }),
                        style: Z,
                        'data-test-id': E.Kq.changeTimecode.TIMECODE_WRAPPER,
                        children: [
                            !s &&
                                c &&
                                D &&
                                (0, m.jsx)(iZ, {
                                    currentTimecodeClassName: G ? void 0 : (0, p.$)(iH().timecodeGroupCurrent, iH().important),
                                    timecodeClassName: iH().timecodeGroup,
                                    progress: k,
                                    position: null != B ? B : 0,
                                    duration: null != w ? w : 0,
                                    progressElementWidth: R,
                                    shouldHoldTimecode: !!G,
                                }),
                            (0, m.jsx)('div', { ref: L, className: (0, p.$)(iH().progressbar, o) }),
                            D && !G && (0, m.jsx)('div', { className: (0, p.$)(iH().thumb, l) }),
                            G &&
                                (0, m.jsx)(iR, {
                                    className: iH().brandedThumb,
                                    thumbData: null == G ? void 0 : G.thumb,
                                    onThumbAction: null == G ? void 0 : G.onThumbAction,
                                }),
                            (null == (i = C.payload) ? void 0 : i.modal) && (0, m.jsx)(iU, { modal: C.payload.modal, disclaimer: C.payload.disclaimer }),
                            (0, m.jsx)(iy.A, {
                                'aria-valuetext': j,
                                onClick: z,
                                onBlur: z,
                                onFocus: F,
                                className: (0, p.$)(iH().slider, iH().important, n),
                                disabled: r || x.isAdvertShown,
                                'aria-label': N({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: d,
                                onChange: Y,
                                maxValue: w ? Math.round(w) : 0,
                                mode: 'deferred',
                                value: Math.round(null != B ? B : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                'data-test-id': E.Kq.changeTimecode.TIMECODE_SLIDER,
                            }),
                            (0, m.jsx)('div', { className: iH().backgroundProgressbar }),
                        ],
                    });
                });
            var iQ = a(59717),
                iJ = a(86200),
                i0 = a(8641),
                i1 = a(17743),
                i2 = a(16208),
                i5 = a(48215),
                i8 = a(15232),
                i4 = a(1829),
                i9 = a(35262),
                i3 = a(81877),
                i6 = a(49738),
                i7 = a(63955),
                ne = a(64014);
            let nt = 'player-region';
            var na = a(92644),
                ni = a(52032),
                nn = a.n(ni);
            let nr = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, m.jsx)('div', {
                        ref: n,
                        className: (0, p.$)(nn().root, t),
                        children: (0, m.jsx)(I.$, {
                            className: nn().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, m.jsx)(w.I, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            'data-test-id': E.e8.player.FULLSCREEN_PLAYER_BUTTON,
                        }),
                    });
                },
                ns = (0, f.forwardRef)((e, t) => (0, m.jsx)(nr, { forwardRef: t, ...e }));
            // for PulseSync WebHost: BEGIN imports for player quality and addon button tooltips
            var pulseSyncPlayerTooltip = a(94398),
                no = a(58292),
            // for PulseSync WebHost: END imports for player quality and addon button tooltips
                nl = a(4887),
                nd = a.n(nl);
            // for PulseSync: BEGIN Yandex Station device picker and player-bar refresh callbacks
            const pulseSyncPlayerReact = f,
                pulseSyncPlayerJsx = m,
                pulseSyncPlayerIntl = y,
                pulseSyncPlayerButton = I,
                pulseSyncPlayerIcon = w,
                pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return (
                            i && a.add(i),
                            {
                                accountSpeaker: e,
                                localSpeaker: i ?? void 0,
                                canUseLocal: !!i,
                            }
                        );
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, pulseSyncPlayerJsx.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, pulseSyncPlayerJsx.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, pulseSyncPlayerJsx.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.musicDesktop?.pulsesync.station.selectSpeaker?.(e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = {
                                ok: !1,
                                error: e,
                            };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return (
                        t ?? {
                            ok: !1,
                        }
                    );
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([
                        {
                            isThisDevice: !0,
                        },
                        ...pulseSyncBuildCastDeviceRows(a, i),
                    ]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncYandexStationCastControl = (0, h.PA)((e) => {
                    let { buttonClassName: t, disabled: a } = e,
                        { formatMessage: i } = (0, pulseSyncPlayerIntl.A)(),
                        [r, l] = (0, pulseSyncPlayerReact.useState)(!1),
                        [s, d] = (0, pulseSyncPlayerReact.useState)(!1),
                        [_, m] = (0, pulseSyncPlayerReact.useState)(0),
                        [v, y] = (0, pulseSyncPlayerReact.useState)([]),
                        [g, b] = (0, pulseSyncPlayerReact.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [x, A] = (0, pulseSyncPlayerReact.useState)(null),
                        [f, C] = (0, pulseSyncPlayerReact.useState)(null),
                        [k, P] = (0, pulseSyncPlayerReact.useState)(!1),
                        [j, S] = (0, pulseSyncPlayerReact.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, pulseSyncPlayerReact.useState)(null),
                        [castEnabled, setCastEnabled] = (0, pulseSyncPlayerReact.useState)(pulseSyncIsYandexStationCastEnabled()),
                        I = (0, pulseSyncPlayerReact.useRef)(null),
                        w = (0, pulseSyncPlayerReact.useRef)(null),
                        L = (0, pulseSyncPlayerReact.useCallback)(async () => {
                            if (!castEnabled) {
                                y([]);
                                S(!1);
                                P(!1);
                                return;
                            }
                            try {
                                P(!0);
                                const e = await (window.musicDesktop?.pulsesync.station.getState?.() ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(e, {
                                    setActiveSpeakerId: b,
                                    setDeviceRows: y,
                                    setDevicesLoaded: S,
                                    setDevicesLoading: P,
                                });
                            } catch (e) {
                                (console.warn('Failed to load Yandex Station cast devices', e), y([]), S(!1), P(!1));
                            }
                        }, [castEnabled]),
                        M = (0, pulseSyncPlayerReact.useCallback)(() => {
                            l(!1);
                            clearTimeout(w.current);
                            w.current = setTimeout(() => {
                                d(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        B = (0, pulseSyncPlayerReact.useCallback)(() => {
                            m(pulseSyncGetCastPopoverShift(I.current));
                        }, []),
                        O = (0, pulseSyncPlayerReact.useCallback)(() => {
                            clearTimeout(w.current);
                            d(!0);
                            requestAnimationFrame(() => {
                                B();
                                l(!0);
                            });
                        }, [B]),
                        V = (0, pulseSyncPlayerReact.useCallback)(() => {
                            r ? M() : O();
                        }, [r, M, O]);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        void L();
                    }, [L]);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        const e = (t) => {
                            pulseSyncApplyYandexStationState(t, {
                                setActiveSpeakerId: b,
                                setDeviceRows: y,
                                setDevicesLoaded: S,
                                setDevicesLoading: P,
                            });
                        };
                        return window.musicDesktop?.pulsesync.station.onState?.(e);
                    }, []);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        const e = (e) => {
                            b(e.detail?.activeSpeakerId ?? null);
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-change', e);
                            }
                        );
                    }, []);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        const e = (e) => {
                            const t = e.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setCastEnabled(t);
                            t ? (S(!1), void L()) : (M(), y([]), b(null), S(!1), P(!1));
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-setting-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', e);
                            }
                        );
                    }, [M, L]);
                    (0, pulseSyncPlayerReact.useEffect)(() => () => clearTimeout(w.current), []);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        if (!s) return;
                        const e = (e) => {
                            I.current?.contains?.(e.target) || M();
                        };
                        return (
                            document.addEventListener('pointerdown', e, !0),
                            () => {
                                document.removeEventListener('pointerdown', e, !0);
                            }
                        );
                    }, [s, M]);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        if (!s) return;
                        const e = () => B();
                        return (
                            B(),
                            window.addEventListener('resize', e),
                            () => {
                                window.removeEventListener('resize', e);
                            }
                        );
                    }, [s, B]);
                    return a || !castEnabled
                        ? null
                        : (0, pulseSyncPlayerJsx.jsxs)('div', {
                              ref: I,
                              style: {
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                              },
                              children: [
                                  (0, pulseSyncPlayerJsx.jsx)(pulseSyncPlayerButton.$, {
                                      className: t,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': i({
                                          id: 'player-actions.cast',
                                      }),
                                      icon: g
                                          ? pulseSyncRenderCastDeviceIcon(pulseSyncGetActiveCastDeviceRow(v, g), 'PulseSync_castPlayerButtonIcon')
                                          : (0, pulseSyncPlayerJsx.jsx)(pulseSyncPlayerIcon.I, {
                                                variant: 'cast',
                                                size: 'xs',
                                            }),
                                      onClick: V,
                                      style: g
                                          ? {
                                                color: 'var(--ym-controls-color-primary-text-hovered)',
                                            }
                                          : void 0,
                                  }),
                                  s &&
                                      (0, pulseSyncPlayerJsx.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: r ? 1 : 0,
                                              transform: 'translateX('.concat(_, 'px) ').concat(r ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: r ? 'auto' : 'none',
                                          },
                                          children: !j
                                              ? (0, pulseSyncPlayerJsx.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, pulseSyncPlayerJsx.jsxs)(
                                                    'div',
                                                    {
                                                        className: 'PulseSync_castPopoverContent',
                                                        children: [
                                                            (0, pulseSyncPlayerJsx.jsx)(
                                                                'div',
                                                                {
                                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                        k ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                    ),
                                                                    children: 'Обновляем список устройств...',
                                                                },
                                                                'cast-refreshing',
                                                            ),
                                                            v.length
                                                                ? v.map((e) => {
                                                                      const t = !e.isThisDevice && !e.canUseLocal,
                                                                          a = e.isThisDevice ? void 0 : (e.accountSpeaker?.roomName ?? e.accountSpeaker?.householdName),
                                                                          r = e.accountSpeaker?.id,
                                                                          isConnecting = !e.isThisDevice && x === r && g !== r,
                                                                          hasConnectionError = !e.isThisDevice && f === r && g !== r,
                                                                          isDisabled = t || !!x,
                                                                          isConnected = (e.isThisDevice && !g) || (!e.isThisDevice && g === r),
                                                                          i = e.isThisDevice
                                                                              ? g
                                                                                  ? 'Отключить колонку'
                                                                                  : 'Сейчас выбрано'
                                                                              : isConnecting
                                                                                ? 'Подключение...'
                                                                                : hasConnectionError
                                                                                  ? 'Ошибка подключения'
                                                                                  : g === r
                                                                                    ? 'Подключено'
                                                                                    : e.canUseLocal
                                                                                      ? 'В сети'
                                                                                      : 'Вне локальной сети',
                                                                          n = e.isThisDevice
                                                                              ? 'pulse-sync-this-device'
                                                                              : (e.accountSpeaker?.id ?? e.accountSpeaker?.name ?? e.localSpeaker?.deviceId);
                                                                      return (0, pulseSyncPlayerJsx.jsxs)('button', {
                                                                          key: n,
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === n)
                                                                                  ? ' PulseSync_castPopoverItem_active'
                                                                                  : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (e.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.musicDesktop?.pulsesync.station.clearSpeaker?.();
                                                                                        b(null);
                                                                                        A(null);
                                                                                        C(null);
                                                                                        M();
                                                                                        return;
                                                                                    }
                                                                                    const t = e.accountSpeaker?.id;
                                                                                    if (!t) return;
                                                                                    A(t);
                                                                                    C(null);
                                                                                    try {
                                                                                        const e = await pulseSyncSelectYandexStationSpeaker(t);
                                                                                        e?.ok
                                                                                            ? (b(t), C(null), M())
                                                                                            : (C(t), console.warn('Failed to select Yandex Station cast device', e));
                                                                                    } catch (e) {
                                                                                        C(t);
                                                                                        console.warn('Failed to select Yandex Station cast device', e);
                                                                                    } finally {
                                                                                        A(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(n),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(e),
                                                                              (0, pulseSyncPlayerJsx.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: e.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (e.accountSpeaker?.name ??
                                                                                                        e.accountSpeaker?.id ??
                                                                                                        'Yandex Station'),
                                                                                              }),
                                                                                              a &&
                                                                                                  (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                                      className:
                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: a,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: i,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected &&
                                                                                  (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                      children: (0, pulseSyncPlayerJsx.jsx)('svg', {
                                                                                          width: '16',
                                                                                          height: '16',
                                                                                          fill: 'currentColor',
                                                                                          xmlns: 'http://www.w3.org/2000/svg',
                                                                                          children: (0, pulseSyncPlayerJsx.jsx)('path', {
                                                                                              d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z',
                                                                                          }),
                                                                                      }),
                                                                                  }),
                                                                          ],
                                                                      });
                                                                  })
                                                                : (0, pulseSyncPlayerJsx.jsx)(
                                                                      'div',
                                                                      {
                                                                          className: 'PulseSync_castPopoverStatus',
                                                                          children: 'Устройства не найдены',
                                                                      },
                                                                      'cast-empty',
                                                                  ),
                                                        ],
                                                    },
                                                    'cast-content',
                                                ),
                                      }),
                              ],
                          });
                });
            const pulseSyncPlayerBarRefreshers = new Set();
            const pulseSyncRefreshPlayerBars = () => pulseSyncPlayerBarRefreshers.forEach((refresh) => refresh());
            // for PulseSync: END Yandex Station device picker and player-bar refresh callbacks
            let nc = (0, h.PA)((e) => {
                var t;
                // for PulseSync: BEGIN register player-bar rerender callbacks for live mod preferences
                const [, forcePlayerBarRerender] = (0, f.useReducer)((revision) => revision + 1, 0);
                (0, f.useEffect)(() => {
                    pulseSyncPlayerBarRefreshers.add(forcePlayerBarRerender);
                    window.forcePlayerBarRerender = pulseSyncRefreshPlayerBars;
                    window.addEventListener('pulse-sync-yandex-station-cast-setting-change', forcePlayerBarRerender);
                    return () => {
                        window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', forcePlayerBarRerender);
                        pulseSyncPlayerBarRefreshers.delete(forcePlayerBarRerender);
                        if (!pulseSyncPlayerBarRefreshers.size && window.forcePlayerBarRerender === pulseSyncRefreshPlayerBars) delete window.forcePlayerBarRerender;
                    };
                }, [forcePlayerBarRerender]);
                // for PulseSync: END register player-bar rerender callbacks for live mod preferences
                let {
                        className: a,
                        entityMeta: i,
                        isLiked: n,
                        isDisliked: r,
                        onLikeClick: s,
                        onDislikeClick: o,
                        renderSonataControls: l,
                        withLike: d,
                        withDislike: c,
                        withExtraControls: u,
                        withFullscreen: _,
                        withContextMenu: h = !0,
                        withTrackAndArtistLinks: v = !0,
                        sonataPlaybackId: x,
                        sonataVolume: g,
                    } = e,
                    {
                        user: A,
                        sonataState: C,
                        fullscreenPlayer: N,
                        settings: { isMobileLandscapeHeight: P },
                        advert: L,
                        track: R,
                        experiments: O,
                    } = (0, M.g)(),
                    [D, U] = (0, f.useState)(!1),
                    [F, z] = (0, f.useState)(!1),
                    // for PulseSync: BEGIN player download filename, progress state and desktop download action
                    [downloadProgress, setDownloadProgress] = (0, f.useState)(0),
                    trackDownloadName = (0, f.useMemo)(() => {
                        const artists = (i?.artists ?? [])
                            .map((artist) => artist.name)
                            .filter(Boolean)
                            .join(', ');
                        return [artists, i?.title].filter(Boolean).join(' — ');
                    }, [i]),
                    onDownloadClick = (0, f.useCallback)(() => {
                        i?.id && window.musicDesktop?.pulsesync.downloads.track?.(i.id, trackDownloadName);
                    }, [i, trackDownloadName]),
                    // for PulseSync: END player download filename, progress state and desktop download action
                    { formatMessage: W } = (0, y.A)(),
                    K = _ && !C.isGenerativeContext,
                    V = C.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    H = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    G = null == i ? void 0 : i.isTrackAudiobook,
                    Y = (0, i0.d)(),
                    $ = (0, na.K)(i),
                    Z = (0, S.c)(() => {
                        R.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    X = (0, S.c)((e) => {
                        e.stopPropagation();
                    }),
                    Q = (0, S.c)(async (e) => {
                        await Y(C, e, x);
                    }),
                    J = (0, S.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && K && a && !L.isAdvertShown && N.showFullscreenPlayerModal();
                    }),
                    ee = (0, S.c)((e) => {
                        if (!C.isGenerativeContext && i) {
                            if (((0, B.P)(e, nd().ripple), 2 === e.detail)) {
                                (R.close(), J(e));
                                return;
                            }
                            _ && 1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !N.modal.isOpened && Z();
                        }
                    }),
                    // for PulseSync: BEGIN load, prefetch and restore fallback synchronized lyrics in the player bar
                    sonataRuntimeState = (0, iW.e)(),
                    lrclibSyncLyricsEffect =
                        ((0, f.useEffect)(() => {
                            const trackId = null == i ? void 0 : i.id;
                            const nativeAvailable =
                                (null == i ? void 0 : i.isSyncLyricsAvailable) ||
                                (null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) ||
                                (null == i ? void 0 : i.hasSyncLyrics);
                            let lrclibEnabled = !0;
                            try {
                                lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                            } catch (_error) {}
                            if (
                                trackId &&
                                !(null == i ? void 0 : i.isNonMusic) &&
                                N.syncLyrics.currentTrackId !== trackId &&
                                (nativeAvailable || lrclibEnabled || i.trackSource === 'UGC')
                            ) {
                                N.syncLyrics.getData(trackId);
                            }
                            N.syncLyrics.prefetchNextTrack(sonataRuntimeState);
                        }, [
                            null == i ? void 0 : i.id,
                            null == i ? void 0 : i.isSyncLyricsAvailable,
                            null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature,
                            null == i ? void 0 : i.hasSyncLyrics,
                            null == i ? void 0 : i.isNonMusic,
                            null == i ? void 0 : i.trackSource,
                            N.syncLyrics.currentTrackId,
                            N.syncLyrics,
                            sonataRuntimeState,
                        ]),
                        null),
                    restoreSyncLyricsEffect =
                        ((0, f.useEffect)(() => {
                            const trackId = null == i ? void 0 : i.id;
                            if (!trackId || String(N.syncLyrics.currentTrackId) !== String(trackId) || N.syncLyrics.isLoadingForTrack(trackId)) return;
                            if (N.syncLyrics.isRejected || N.syncLyrics.hasInvalidLyrics) {
                                N.autoHideSyncLyrics(trackId);
                                return;
                            }
                            if (trackId && N.syncLyrics.hasLyricsForTrack(trackId)) N.restoreSyncLyricsForTrack(trackId);
                        }, [
                            null == i ? void 0 : i.id,
                            N.syncLyrics.currentTrackId,
                            N.syncLyrics.lines,
                            N.syncLyrics.isLoading,
                            N.syncLyrics.isRejected,
                            N.syncLyrics.hasInvalidLyrics,
                            N.syncLyrics.isResolved,
                            N.syncLyrics,
                            N.autoHideSyncLyrics,
                            N.restoreSyncLyricsForTrack,
                        ]),
                        null),
                    syncLyricsAvailable =
                        !!(null == i ? void 0 : i.isSyncLyricsAvailable) ||
                        !!(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) ||
                        !!(null == i ? void 0 : i.hasSyncLyrics) ||
                        (!!(null == i ? void 0 : i.id) &&
                            'function' == typeof (null == N.syncLyrics ? void 0 : N.syncLyrics.hasLyricsForTrack) &&
                            N.syncLyrics.hasLyricsForTrack(i.id)),
                    // for PulseSync: END load, prefetch and restore fallback synchronized lyrics in the player bar
                    et = (0, f.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(W({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(W({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : N.showSyncLyrics;
                            return (0, m.jsx)(I.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                // for PulseSync: BEGIN enable and expose the player-bar lyrics button for fallback results
                                disabled: !syncLyricsAvailable || P,
                                'aria-hidden': !syncLyricsAvailable,
                                // for PulseSync: END enable and expose the player-bar lyrics button for fallback results
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, m.jsx)(w.I, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                'data-test-id': E.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                            });
                        },
                        // for PulseSync: BEGIN refresh player-bar lyrics controls when fallback availability changes
                        [W, N.showSyncLyrics, syncLyricsAvailable, P],
                        // for PulseSync: END refresh player-bar lyrics controls when fallback availability changes
                    ),
                    ea = (0, f.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || L.isAdvertShown
                                ? null
                                : A.isAuthorized && !A.hasPlus
                                  ? (0, m.jsx)(e$.S, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: et })
                                  : (0, m.jsx)(i7.Z, { isEnabled: !A.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: et }),
                        [null == i ? void 0 : i.isNonMusic, L.isAdvertShown, A.isAuthorized, et, A.hasPlus],
                    ),
                    ei = (0, f.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : N.showPlayQueue;
                            return (0, m.jsx)(I.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': W({ id: 'play-queue.title' }),
                                icon: (0, m.jsx)(w.I, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                'data-test-id': E.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                            });
                        },
                        [i, N.showPlayQueue, W],
                    ),
                    en = (0, f.useMemo)(
                        () => (L.isAdvertShown ? null : (0, m.jsx)(i7.Z, { isEnabled: !A.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: ei })),
                        [L.isAdvertShown, A.isAuthorized, ei],
                    ),
                    er = (0, f.useMemo)(() => {
                        if (h && i && !C.isGenerativeContext && !L.isAdvertShown)
                            return (0, m.jsx)('div', {
                                onDoubleClick: X,
                                children: (0, m.jsx)(i4._, {
                                    track: i,
                                    placement: 'top',
                                    className: nd().trackContextMenuIcon,
                                    open: D,
                                    onOpenChange: U,
                                    icon: (0, m.jsx)(w.I, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    'data-test-id': E.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                                }),
                            });
                    }, [L.isAdvertShown, i, X, D, C.isGenerativeContext, h]),
                    es = (0, f.useMemo)(
                        () =>
                            i
                                ? G
                                    ? (0, m.jsx)(i2.Z, {
                                          afterTitle: er,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withArtistLink: v,
                                          withContextMenuArtists: !0,
                                      })
                                    : H
                                      ? (0, m.jsx)(i5.w, {
                                            afterTitle: er,
                                            explicitSize: 'xxxs',
                                            track: i,
                                            withDate: !1,
                                            withSecondaryColor: !0,
                                            withPodcastName: !0,
                                            withAlbumTitleLink: v,
                                        })
                                      : (0, m.jsx)(i8.j, {
                                            afterTitle: er,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: v && !C.isGenerativeContext,
                                            withArtistLink: v,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [er, i, G, H, C.isGenerativeContext, v],
                    ),
                    eo = (0, b.L)(() =>
                        l
                            ? l({ isMobile: !1, entityMeta: i })
                            : (0, m.jsx)(i1.$, {
                                  className: (0, p.$)(nd().sonataControls, nd().important),
                                  withRepeat: !0,
                                  withShuffle: !0,
                                  isMobile: !1,
                                  entityMeta: i,
                              }),
                    ),
                    // for PulseSync WebHost: BEGIN player button layout, addon slots, download progress and audio quality state
                    el = window.CHANGE_DISLIKE_BUTTON_POS?.() ?? true;
                const pulseSyncInjectPlayerBarButtons = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playerBarButtons', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                description = String(payload?.description ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, m.jsx)(
                                pulseSyncPlayerTooltip.k,
                                {
                                    title: label,
                                    ...(description
                                        ? {
                                              description,
                                          }
                                        : {}),
                                    children: (0, m.jsx)(I.$, {
                                        className: nd().settingsButton,
                                        radius: 'round',
                                        size: 'xxxs',
                                        variant: 'text',
                                        withRipple: !1,
                                        'aria-label': label,
                                        icon: (0, m.jsx)(w.I, {
                                            variant: icon,
                                            size: 'xs',
                                        }),
                                        onClick: activate,
                                        'data-pulsesync-addon-player-button': '',
                                    }),
                                },
                                key,
                            );
                        },
                    }) ?? items;
                (0, f.useEffect)(() => {
                    setDownloadProgress(0);
                    const unsubscribe = window.musicDesktop?.pulsesync.downloads.onProgress?.((progressId, progress) => {
                        if (i?.id && progressId === `trackDownload|${i.id}`) setDownloadProgress(progress);
                    });
                    return () => {
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [i?.id]);
                let qualityMap = {
                        lq: 'LQ',
                        nq: 'NQ',
                        hq: 'HQ',
                        lossless: 'HQ+',
                    },
                    codecMap = {
                        mp3: 'MP3',
                        'he-aac': 'HE-AAC',
                        aac: 'AAC',
                        flac: 'FLAC',
                        'aac-mp4': 'AAC',
                        'he-aac-mp4': 'HE-AAC',
                        'flac-mp4': 'FLAC',
                    },
                    theState = (0, iW.e)(),
                    [downloadInfo, setDownloadInfo] = (0, f.useState)(theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data),
                    [parsedTrackQualityInfo, setParsedTrackQualityInfo] = (0, f.useState)(null),
                    updateParsedTrackQualityInfo = (0, f.useCallback)(
                        (e, t = !0) => {
                            setParsedTrackQualityInfo(window?.PulseSyncTrackQuality?.updateFromFormat?.(e, t ? downloadInfo : null) ?? null);
                        },
                        [downloadInfo, setParsedTrackQualityInfo],
                    );
                (0, f.useEffect)(() => {
                    let e = window?.PulseSyncTrackQuality?.getLastInfo?.();
                    (e ? setParsedTrackQualityInfo(e) : updateParsedTrackQualityInfo(null, !0),
                        window?.nativeAudioOutput
                            ?.getYaspAudioFormat?.()
                            ?.then?.((e) => {
                                updateParsedTrackQualityInfo(e, !0);
                            })
                            ?.catch?.(() => {}));
                    let t = window.musicDesktop?.pulsesync.audio.onFormatChanged?.((t) => {
                        updateParsedTrackQualityInfo(t, Boolean(t));
                    });
                    return () => {
                        'function' == typeof t && t();
                    };
                }, [updateParsedTrackQualityInfo]);
                (0, f.useEffect)(() => {
                    let timer;
                    const refresh = () => {
                        clearInterval(timer);
                        const read = () => theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                        const current = read();
                        setDownloadInfo(current);
                        if (current !== undefined) return;
                        let attempts = 5;
                        timer = setInterval(() => {
                            const next = read();
                            if (next !== undefined || --attempts <= 0) {
                                setDownloadInfo(next);
                                clearInterval(timer);
                            }
                        }, 200);
                    };
                    const unsubscribe = theState?.state?.queueState?.currentEntity?.onChange?.(refresh);
                    refresh();
                    return () => {
                        clearInterval(timer);
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [theState]);
                    // for PulseSync WebHost: END player button layout, addon slots, download progress and audio quality state
                return (0, m.jsx)('section', {
                    style: L.isAdvertShown ? void 0 : $,
                    className: (0, p.$)(nd().root, nd().important, a, { [nd().root_interactive]: _ }),
                    'data-test-id': E.e8.player.PLAYERBAR_DESKTOP,
                    'aria-labelledby': nt,
                    children: (0, m.jsxs)('div', {
                        className: nd().playerBar,
                        children: [
                            !C.isGenerativeContext &&
                                (0, m.jsx)(iX, {
                                    sliderClassName: nd().slider,
                                    progressbarClassName: nd().progressBar,
                                    thumbClassName: nd().thumb,
                                    disabled: !i,
                                    isMobile: !1,
                                    withTimecode: !0,
                                    sonataPlaybackId: x,
                                }),
                            (0, m.jsxs)('div', {
                                className: (0, p.$)(nd().player, { [nd().player_disabled]: !i }),
                                children: [
                                    _ && (0, m.jsx)('div', { onClick: ee, className: nd().triggerModal }),
                                    (0, m.jsx)(iN.q, { children: (0, m.jsx)(k.DZ, { variant: 'h3', id: nt, children: (0, m.jsx)(T.A, { id: 'a11y-regions.player' }) }) }),
                                    (0, m.jsx)('div', {
                                        className: nd().info,
                                        children: (0, m.jsx)('div', {
                                            className: nd().infoCard,
                                            children:
                                                i &&
                                                !L.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        (0, m.jsxs)(tC.t, {
                                                            radius: 's',
                                                            className: nd().coverContainer,
                                                            'data-test-id': E.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                                                            children: [
                                                                (0, m.jsx)(i3.B, {
                                                                    className: nd().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                K &&
                                                                    (0, m.jsxs)(j.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, m.jsx)(ns, {
                                                                                ariaLabel: W({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: N.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, m.jsx)(j.ZI, { children: (0, m.jsx)(T.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)('div', { className: nd().description, children: es }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: (0, p.$)(nd().sonata, { [nd().sonata_withReversedControls]: el }),
                                        children: [
                                            d &&
                                                (0, m.jsx)(eZ.WithOffline, {
                                                    fallback: (0, m.jsx)(i6.c, { disabled: !i || L.isAdvertShown, isLiked: n, onClick: s, iconSize: 'xs' }),
                                                }),
                                            eo,
                                            c &&
                                                (0, m.jsx)(eZ.WithOffline, {
                                                    fallback: (0, m.jsx)(i9._, { disabled: !i || L.isAdvertShown, isDisliked: r, onClick: o, iconSize: 'xs' }),
                                                }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nd().meta,
                                        children: [
                                            u &&
                                                !C.isGenerativeContext &&
                                                !L.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    // for PulseSync WebHost: BEGIN inject native addon items into the player-bar button group
                                                    children: pulseSyncInjectPlayerBarButtons([
                                                        V && (0, m.jsx)(ne.i, { iconSize: 'l' }),
                                                        ea,
                                                        // for PulseSync: BEGIN player-bar cast, download and audio quality controls
                                                        (0, m.jsx)(pulseSyncYandexStationCastControl, {
                                                            buttonClassName: nd().settingsButton,
                                                            disabled: L.isAdvertShown,
                                                        }),
                                                        en,
                                                        (0, m.jsx)(pulseSyncPlayerTooltip.k, {
                                                            title: 'Скачать трек в файл',
                                                            description: (null == i ? void 0 : i.id)
                                                                ? 'Скачать трек в читаемый файл на вашем ПК'
                                                                : 'Не удалось получить данные о треке',
                                                            children: (0, m.jsxs)('button', {
                                                                disabled: !(null == i ? void 0 : i.id),
                                                                className: 'cpeagBA1_PblpJn8Xgtv UDMYhpDjiAFT3xUx268O '.concat(
                                                                    (null == i ? void 0 : i.id) ? 'HbaqudSqu7Q3mv3zMPGr' : '',
                                                                    ' qU2apWBO1yyEK0lZ3lPO',
                                                                ),
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: '2px',
                                                                    alignSelf: 'center',
                                                                    paddingTop: '5px',
                                                                    paddingInline: '2px',
                                                                },
                                                                children: [
                                                                    (0, m.jsx)('span', {
                                                                        className: 'JjlbHZ4FaP9EAcR_1DxF',
                                                                        children: (0, m.jsx)(w.I, {
                                                                            variant: 'download',
                                                                            size: 'xxs',
                                                                            style: {
                                                                                width: '24px',
                                                                                height: '24px',
                                                                            },
                                                                        }),
                                                                    }),
                                                                    (0, m.jsx)('div', {
                                                                        style: {
                                                                            backgroundColor: 'var(--ym-controls-color-secondary-text-enabled)',
                                                                            width: ''.concat(-100 === downloadProgress ? 0 : downloadProgress, '%'),
                                                                            transition:
                                                                                downloadProgress >= 0 && downloadProgress < 100
                                                                                    ? 'width 0.3s'
                                                                                    : 'width 0.3s, opacity 0.3s linear 0.5s',
                                                                            opacity: downloadProgress >= 0 && downloadProgress < 100 ? '1' : '0',
                                                                            height: '2px',
                                                                            borderRadius: '10px',
                                                                        },
                                                                    }),
                                                                ],
                                                                onClick: onDownloadClick,
                                                            }),
                                                        }),
                                                        (0, m.jsx)(pulseSyncPlayerTooltip.k, {
                                                            title: 'Качество трека',
                                                            description:
                                                                (null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.label) ??
                                                                'Не удалось получить качество трека',
                                                            children: (0, m.jsx)('div', {
                                                                className: 'cpeagBA1_PblpJn8Xgtv HbaqudSqu7Q3mv3zMPGr',
                                                                children: (0, m.jsx)(no.p$, {
                                                                    placement: 'bottom',
                                                                    open: F,
                                                                    onOpenChange: z,
                                                                    // for PulseSync: BEGIN display the configured codec or quality mark in player settings
                                                                    icon: (
                                                                        window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK?.()
                                                                            ? ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.codec) ??
                                                                              (null == downloadInfo ? void 0 : codecMap[downloadInfo.codec]))
                                                                            : ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.quality) ??
                                                                              (null == downloadInfo ? void 0 : qualityMap[downloadInfo.quality]))
                                                                    )
                                                                        ? (0, m.jsxs)('span', {
                                                                              className: nd().settingsButton,
                                                                              style: {
                                                                                  width: 'auto',
                                                                                  height: 'auto',
                                                                                  'align-content': 'center',
                                                                              },
                                                                              children:
                                                                                  (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK?.()
                                                                                      ? ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.codec) ??
                                                                                        (null == downloadInfo ? void 0 : codecMap[downloadInfo.codec]))
                                                                                      : ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.quality) ??
                                                                                        (null == downloadInfo ? void 0 : qualityMap[downloadInfo.quality]))) ?? 'NONE',
                                                                          })
                                                                        : (0, m.jsx)(w.I, {
                                                                              variant: 'settings',
                                                                              size: 'xs',
                                                                          }),
                                                                    // for PulseSync: END display the configured codec or quality mark in player settings
                                                                    size: 'xxxs',
                                                                    referenceClassName: nd().settingsButton,
                                                                }),
                                                            }),
                                                        }),
                                                        // for PulseSync: END player-bar cast, download and audio quality controls
                                                    ]),
                                                    // for PulseSync WebHost: END inject native addon items into the player-bar button group
                                                }),
                                            (0, m.jsx)(iJ.r, { variant: iQ.q.VERTICAL, sonataVolume: null != g ? g : C.volume, onVolumeClick: Q, playbackId: x }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var nu = a(5866),
                n_ = a(69547),
                nm = a.n(n_);
            let np = (0, h.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: n, onLikeClick: r, renderSonataControls: s, withLike: o, withFullscreen: l, sonataPlaybackId: d } = e,
                        { user: c, sonataState: u, fullscreenPlayer: _, advert: h } = (0, M.g)(),
                        v = c.isAuthorized && i && !h.isAdvertShown,
                        x = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        g = null == i ? void 0 : i.isTrackAudiobook,
                        A = (0, na.K)(i),
                        C = (0, f.useCallback)(
                            (e) => {
                                if (h.isAdvertShown || !l) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !u.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, u.isGenerativeContext, h.isAdvertShown, l],
                        ),
                        N = (0, f.useMemo)(
                            () =>
                                h.isAdvertShown
                                    ? null
                                    : i
                                      ? g
                                          ? (0, m.jsx)(i2.Z, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : x
                                            ? (0, m.jsx)(i5.w, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, m.jsx)(i8.j, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, m.jsxs)('div', {
                                            className: nm().shimmerMeta,
                                            children: [
                                                (0, m.jsx)(aj.W, { className: nm().shimmerMetaTitle }),
                                                (0, m.jsx)(aj.W, { className: nm().shimmerMetaDescription }),
                                            ],
                                        }),
                            [h.isAdvertShown, i, g, x],
                        ),
                        y = (0, b.L)(() =>
                            h.isAdvertShown
                                ? (0, m.jsx)('div', { className: nm().infoCard })
                                : i
                                  ? (0, m.jsxs)('div', {
                                        className: nm().infoCard,
                                        children: [
                                            (0, m.jsx)(tC.t, {
                                                radius: 's',
                                                className: nm().coverContainer,
                                                children: (0, m.jsx)(i3.B, { className: nm().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, m.jsx)('div', { className: nm().description, children: N }),
                                        ],
                                    })
                                  : (0, m.jsxs)('div', {
                                        className: nm().infoCard,
                                        children: [
                                            (0, m.jsx)(tC.t, {
                                                radius: 's',
                                                className: nm().coverContainer,
                                                children: (0, m.jsx)(aj.W, { className: nm().shimmerCover }),
                                            }),
                                            (0, m.jsx)('div', { className: nm().description, children: N }),
                                        ],
                                    }),
                        ),
                        S = (0, b.L)(() => (s ? s({ isMobile: !0, entityMeta: i }) : (0, m.jsx)(i1.$, { isMobile: !0, entityMeta: i })));
                    return (0, m.jsxs)('section', {
                        style: h.isAdvertShown ? void 0 : A,
                        className: (0, p.$)(nm().root, a),
                        onClick: C,
                        'data-test-id': E.e8.player.MOBILE_PLAYERBAR,
                        children: [
                            (0, m.jsx)(iN.q, { children: (0, m.jsx)(k.DZ, { variant: 'h3', id: nt, children: (0, m.jsx)(T.A, { id: 'a11y-regions.player' }) }) }),
                            !u.isGenerativeContext &&
                                (0, m.jsx)(nu.v, {
                                    className: nm().backgroundProgress,
                                    sliderClassName: nm().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                    sonataPlaybackId: d,
                                }),
                            (0, m.jsxs)('div', {
                                className: nm().info,
                                children: [
                                    y,
                                    (0, m.jsxs)('div', {
                                        className: nm().infoButtons,
                                        children: [
                                            o &&
                                                i &&
                                                v &&
                                                !h.isAdvertShown &&
                                                (0, m.jsx)(eZ.WithOffline, {
                                                    fallback: (0, m.jsx)(i6.c, { isLiked: n, iconSize: 'xs', onClick: r, disabled: !c.isAuthorized }),
                                                }),
                                            S,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nh = (0, h.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: n,
                        } = (0, M.g)(),
                        { isLiked: r, handleLike: s, isDisliked: o, handleDislike: l } = (0, ic.f)(),
                        d = (0, id.z)(),
                        c = (0, S.c)(() => {
                            if (i.entityMeta) {
                                if (n.modal.isOpened) return void n.modal.close();
                                n.modal.open();
                            }
                        });
                    (0, f.useEffect)(() => {
                        if (!i.isGenerativeContext)
                            return (
                                null == d || d.addShortcutsListener(il.M.MAIN, io.l.TOGGLE_FULLSCREEN_PLAYER, c),
                                null == d || d.addShortcutsListener(il.M.MAIN, io.l.LIKE, s),
                                null == d || d.addShortcutsListener(il.M.MAIN, io.l.DISLIKE, l),
                                () => {
                                    (null == d || d.removeShortcutsListener(il.M.MAIN, io.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == d || d.removeShortcutsListener(il.M.MAIN, io.l.LIKE),
                                        null == d || d.removeShortcutsListener(il.M.MAIN, io.l.DISLIKE));
                                }
                            );
                    }, [l, s, d, i.isGenerativeContext, i.entityMeta, c]);
                    let u = (0, b.L)(() =>
                        a
                            ? (0, m.jsx)(np, {
                                  className: (0, p.$)(t, iC().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withFullscreen: !0,
                              })
                            : (0, m.jsx)(nc, {
                                  className: (0, p.$)(t, iC().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  isDisliked: o,
                                  onDislikeClick: l,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withDislike: !0,
                                  withExtraControls: !0,
                                  withFullscreen: !0,
                              }),
                    );
                    return (0, m.jsxs)(m.Fragment, { children: [u, (0, m.jsx)(ix, { className: iC().adPopup }), (0, m.jsx)(is, {}), (0, m.jsx)(ig.e, {})] });
                });
            var nv = a(32245),
                nb = a.n(nv);
            let nx = (0, h.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: a, buttonText: i, href: n },
                    } = (0, M.g)(),
                    r = (0, tI.Z)(n),
                    { theme: s } = (0, Y.W)();
                return (0, m.jsx)('div', {
                    className: (0, p.$)(nb().wrapper, t),
                    'data-test-id': E.e8.redAlert.RED_ALERT,
                    children: (0, m.jsxs)('div', {
                        className: (0, p.$)(nb().root, { [nb().root_light]: s === V.S.Light }),
                        children: [
                            (0, m.jsx)(k.HL, {
                                className: nb().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': E.e8.redAlert.RED_ALERT_TEXT,
                                children: a,
                            }),
                            (0, m.jsx)(I.$, {
                                className: nb().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: r,
                                'data-test-id': E.e8.redAlert.RED_ALERT_BUTTON,
                                children: (0, m.jsx)(k.HL, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: i }),
                            }),
                        ],
                    }),
                });
            });
            var nf = a(32596),
                ng = a(416),
                nA = a(73856),
                nC = a.n(nA);
            let nN = (0, h.PA)((e) => {
                var t, a, i, n, r, s;
                let { className: o, barBelow: l } = e,
                    d = (0, v.usePathname)(),
                    { experiments: c, paywall: u, user: _ } = (0, M.g)(),
                    h = _.hasPlus && d === K.Z.main.href && c.checkExperiment(q.z.WebNextProductWithoutRecommendation, 'on') && u.isPassed,
                    { formatMessage: b } = (0, y.A)(),
                    [x, g] = (0, f.useState)(!1),
                    A = null == (t = l.barBelowItem) ? void 0 : t.content.advDisclaimer,
                    C = { 'data-test-id': h ? E.Kq.barBelow.BAR_BELOW_RECOMMENDATIONS_UNAVAILABLE_CONTENT : E.Kq.barBelow.BAR_BELOW_CONTENT },
                    N = (0, f.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {}, disclaimerTrigger: {} };
                        if (!l.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = l.barBelowItem.content;
                        (t && (e.title.color = t), a && (e.text.color = a), i && (e.bg.backgroundColor = i), n && (e.bg.backgroundImage = 'url("'.concat(n, '")')));
                        let r = a || t;
                        return (r && (e.disclaimerTrigger['--adv-disclaimer-color'] = r), e);
                    }, [l]),
                    S = (0, f.useMemo)(() => {
                        var e;
                        return null == (e = l.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, m.jsx)(
                                      ng.t,
                                      {
                                          anchorId: null == (t = l.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = l.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'xs',
                                          buttonClassName: nC().button,
                                          hide: l.hide,
                                          feedbackToken: l.barBelowItem ? l.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [l]),
                    B = (0, f.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? l.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && l.setAnimationAlreadyBeenHidden();
                        },
                        [l],
                    ),
                    I = (0, f.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && l.setAnimationAlreadyBeenStarted();
                        },
                        [l],
                    );
                return (0, m.jsx)(aM.r, {
                    page: aU.l.MUSIC_DEEPLINK_SCREEN,
                    places: [aF.R.TOP_BUTTON],
                    children: (0, m.jsxs)('section', {
                        className: (0, p.$)(
                            nC().root,
                            {
                                [nC().root_hidden]: !l.isVisible && !l.hideWithAnimation,
                                [nC().root_show]: l.showWithAnimation,
                                [nC().root_hide]: l.hideWithAnimation,
                                [nC().root_productWithoutRecommendation]: h,
                            },
                            o,
                        ),
                        style: N.bg,
                        onAnimationStart: I,
                        onAnimationEnd: B,
                        'aria-label': b({ id: 'bar-below.section-name' }),
                        'data-test-id': E.Kq.barBelow.BAR_BELOW,
                        children: [
                            (null == (a = l.barBelowItem) ? void 0 : a.content.imageUrl) &&
                                (0, m.jsx)(tA._V, {
                                    className: nC().image,
                                    'aria-hidden': !0,
                                    src: null == (i = l.barBelowItem) ? void 0 : i.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !h,
                                    withAspectRatio: !0,
                                    'data-test-id': E.Kq.barBelow.BAR_BELOW_IMAGE,
                                }),
                            (0, m.jsxs)('div', {
                                className: nC().content,
                                ...C,
                                children: [
                                    (h || (null == (n = l.barBelowItem) ? void 0 : n.content.title)) &&
                                        (0, m.jsx)(k.DZ, {
                                            className: nC().title,
                                            variant: 'h3',
                                            style: N.title,
                                            lineClamp: h ? void 0 : 2,
                                            'data-test-id': E.Kq.barBelow.BAR_BELOW_TITLE_TEXT,
                                            children: h
                                                ? (0, m.jsx)(T.A, {
                                                      id: 'bar-below.recommendations-unavailable',
                                                      values: {
                                                          collection: (e) =>
                                                              (0, m.jsx)(eq.N, {
                                                                  className: nC().collectionLink,
                                                                  href: K.Z.collection.href,
                                                                  'data-test-id': E.Kq.barBelow.BAR_BELOW_COLLECTION_LINK,
                                                                  children: e,
                                                              }),
                                                      },
                                                  })
                                                : null == (r = l.barBelowItem)
                                                  ? void 0
                                                  : r.content.title,
                                        }),
                                    (null == (s = l.barBelowItem) ? void 0 : s.content.text) &&
                                        (0, m.jsx)(k.DZ, {
                                            className: nC().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: N.text,
                                            lineClamp: l.barBelowItem.content.title ? 1 : 2,
                                            'data-test-id': E.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT,
                                            children: l.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, m.jsx)('div', { className: nC().buttons, children: S }),
                            A &&
                                (0, m.jsx)('div', {
                                    className: nC().advDisclaimer,
                                    children: (0, m.jsxs)(iO.AM, {
                                        placement: 'left-end',
                                        open: x,
                                        onOpenChange: g,
                                        offsetOptions: { mainAxis: 8 },
                                        transform: !1,
                                        children: [
                                            (0, m.jsx)('button', {
                                                type: 'button',
                                                className: nC().advDisclaimerTrigger,
                                                style: N.disclaimerTrigger,
                                                'data-test-id': E.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                children: (0, m.jsx)(T.A, { id: 'ads.ad' }),
                                            }),
                                            (0, m.jsx)(iO.hl, {
                                                className: nC().advDisclaimerContent,
                                                children: (0, m.jsx)('div', {
                                                    className: nC().advDisclaimerInner,
                                                    children: (0, m.jsx)(k.HL, {
                                                        className: nC().advDisclaimerText,
                                                        type: 'text',
                                                        variant: 'p',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': E.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TEXT,
                                                        children: A,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                });
            });
            var ny = a(91051),
                nT = a(15382),
                nE = a.n(nT);
            let nS = 'buy-subscription-modal',
                nB = (0, h.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, v.useRouter)(),
                        i = (0, eg.N)().get(ef.QG),
                        { user: n } = (0, M.g)(),
                        [r, s] = (0, tt.d)(),
                        {
                            openPaymentWidgetModal: o,
                            isShimmerActive: l,
                            isShimmerVisible: d,
                            mainText: c,
                            mainTextA11y: u,
                            additionText: _,
                            saveOfferAndAuthorize: p,
                        } = (0, ak.D)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: nS } }),
                        h = (0, S.c)(() => {
                            if ((t.close(), !n.isAuthorized)) return void p();
                            o();
                        }),
                        b = (0, S.c)(() => {
                            (t.close(), i.authorizationUrl && a.push(i.authorizationUrl));
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(k.HL, {
                                className: nE().heading,
                                variant: 'div',
                                weight: 'bold',
                                'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: nE().buttons,
                                children: [
                                    (0, m.jsx)(ny.b, {
                                        ref: s,
                                        'data-intersection-property-id': nS,
                                        mainText: c,
                                        ariaLabel: u,
                                        additionText: _,
                                        isShimmerActive: l,
                                        isShimmerVisible: d,
                                        onClick: h,
                                        className: nE().button,
                                        mainTextClassName: nE().buttonMainText,
                                        additionTextClassName: nE().buttonAdditionText,
                                        'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                    }),
                                    (0, m.jsx)(I.$, {
                                        onClick: b,
                                        className: nE().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        children: (0, m.jsx)(k.HL, {
                                            className: nE().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, m.jsx)(T.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var nI = a(98148),
                nw = a(52620),
                nP = a.n(nw);
            let nj = 'buy-subscription-benefits-modal',
                nk = (0, h.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: r } = e,
                        { user: s } = (0, M.g)(),
                        [o, l] = (0, tt.d)(),
                        {
                            openPaymentWidgetModal: d,
                            isShimmerActive: c,
                            isShimmerVisible: u,
                            mainText: _,
                            mainTextA11y: p,
                            additionText: h,
                            oneClickAvailable: v,
                            oneClickDisclaimerText: b,
                            oneClickDisclaimerTextA11y: x,
                            buttonText: f,
                        } = (0, ak.D)({ storeName: 'music', offerElement: { element: o, intersectionPropertyId: nj } }),
                        g = !!f && s.isAuthorized,
                        A = !s.isAuthorized,
                        C = s.isAuthorized && !s.hasPlus,
                        N = (0, S.c)(() => {
                            (t.close(), d());
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(tC.t, {
                                radius: r ? 'round' : 'm',
                                className: nP().entityCover,
                                children: (0, m.jsx)(i3.B, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || n,
                                }),
                            }),
                            !!a &&
                                (0, m.jsx)(k.HL, {
                                    variant: 'span',
                                    className: nP().entityTitle,
                                    lineClamp: 2,
                                    'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ENTITY_TITLE,
                                    children: a,
                                }),
                            (0, m.jsxs)('div', {
                                className: nP().headingContainer,
                                children: [
                                    (0, m.jsx)(k.HL, {
                                        className: nP().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                        children: (0, m.jsx)(T.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: '\xa0' } }),
                                    }),
                                    g &&
                                        (0, m.jsx)(k.HL, {
                                            className: nP().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_OFFER_TITLE,
                                            children: (0, m.jsx)(T.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == f ? void 0 : f.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, m.jsxs)('div', {
                                className: nP().benefits,
                                'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BENEFITS,
                                children: [
                                    (0, m.jsxs)('div', {
                                        className: nP().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nP().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nP().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(k.HL, {
                                                variant: 'span',
                                                className: nP().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nP().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nP().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nP().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(k.HL, {
                                                variant: 'span',
                                                className: nP().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsx)(nI.c, { className: nP().benefitDivider }),
                                    (0, m.jsx)(nI.c, { className: nP().benefitDivider }),
                                    (0, m.jsxs)('div', {
                                        className: nP().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nP().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nP().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(k.HL, {
                                                variant: 'span',
                                                className: nP().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nP().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nP().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nP().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(k.HL, {
                                                variant: 'span',
                                                className: nP().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            A &&
                                (0, m.jsxs)('div', {
                                    className: nP().loginContainer,
                                    children: [
                                        (0, m.jsx)(aX.H, {
                                            size: 'l',
                                            variant: 'default',
                                            buttonText: (0, m.jsx)(k.HL, {
                                                variant: 'span',
                                                size: 'l',
                                                children: (0, m.jsx)(T.A, { id: 'authorization.enter-and-listen-button' }),
                                            }),
                                            className: nP().button,
                                            'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        }),
                                        (0, m.jsxs)(k.HL, {
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'medium',
                                            className: nP().bonusText,
                                            'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BONUS_TEXT,
                                            children: [
                                                (0, m.jsx)(w.I, { variant: 'gift', size: 'xxs', className: nP().giftIcon }),
                                                (0, m.jsx)(T.A, { id: 'payment.learn-personal-bonus' }),
                                            ],
                                        }),
                                    ],
                                }),
                            C &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)(ny.b, {
                                            ref: l,
                                            'data-intersection-property-id': nj,
                                            mainText: _,
                                            ariaLabel: p,
                                            additionText: h,
                                            isShimmerActive: c,
                                            isShimmerVisible: u,
                                            onClick: N,
                                            className: nP().button,
                                            mainTextClassName: nP().buttonMainText,
                                            additionTextClassName: nP().buttonAdditionText,
                                            color: 'primary',
                                            'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                        }),
                                        v &&
                                            (0, m.jsx)(k.HL, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'normal',
                                                'aria-label': x,
                                                className: nP().oneClickDisclaimerText,
                                                'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_DISCLAIMER_TEXT,
                                                children: b,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var nL = a(75641),
                nR = a.n(nL);
            let nO = (0, h.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, isLegalRejected: r, withRoundCover: s } = e,
                    o = (0, b.L)(() =>
                        r ? (0, m.jsx)(nB, { modal: t }) : (0, m.jsx)(nk, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: s }),
                    );
                return (0, m.jsx)(P.a, {
                    className: nR().root,
                    headerClassName: nR().header,
                    contentClassName: nR().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonDataTestId: E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON,
                    'data-test-id': E.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET,
                    children: o,
                });
            });
            nO.displayName = 'BuySubscriptionModal';
            let nD = (0, f.createContext)(null);
            var nM = a(80527),
                nU = a(92847),
                nF = a(53158),
                nz = a(7554),
                nW = a.n(nz);
            let nK = (0, h.PA)((e) => {
                    var t, a;
                    let { children: i, className: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        {
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: s },
                            },
                        } = (0, M.g)(),
                        o = (0, eM.Q)(),
                        l = (0, f.useContext)(nD),
                        d = null != (a = null == l ? void 0 : l.isCollapsed) && a,
                        c = (0, S.c)(() => {
                            s.setType(es.h.BRANDING);
                        });
                    return ((0, f.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isVisible)
                        ? (0, m.jsxs)('div', {
                              'aria-label': r({ id: 'advert.banner' }),
                              role: 'banner',
                              children: [
                                  (0, m.jsx)(ee.N, {
                                      ownerId: J.P,
                                      containerId: nM.E9,
                                      params: nM.$,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                      className: (0, p.$)(nW().creative, { [nW().creative_withCollapsedNavbar]: d }),
                                  }),
                                  (0, m.jsx)(ee.N, {
                                      ownerId: J.P,
                                      containerId: nM.r_,
                                      params: nM.kz,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                  }),
                                  (0, m.jsx)('div', {
                                      className: (0, p.$)(nW().root, n, { [nW().root_withCollapsedNavbar]: d }),
                                      style: null == (t = o.data) ? void 0 : t.style,
                                      children: i,
                                  }),
                              ],
                          })
                        : i;
                }),
                nV = (0, h.PA)((e) => {
                    let { children: t, className: a } = e;
                    return (0, m.jsx)(nF.A, { containerId: nM.r_, expectedType: nU.k.AXE_GRADIENT, children: (0, m.jsx)(nK, { className: a, children: t }) });
                });
            var nH = a(59304),
                nG = a(49288),
                nY = a.n(nG);
            let n$ = (e) => {
                let { refetchRequests: t, closeToast: a } = e,
                    { formatMessage: i } = (0, y.A)(),
                    n = (0, f.useMemo)(
                        () =>
                            (0, m.jsxs)('div', {
                                className: nY().message,
                                children: [
                                    (0, m.jsx)(k.HL, {
                                        className: nY().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: (0, m.jsx)(T.A, { id: 'error-messages.error-during-initial-loading' }),
                                    }),
                                    (0, m.jsx)(I.$, {
                                        className: nY().button,
                                        onClick: t,
                                        variant: 'text',
                                        'aria-label': i({ id: 'interface-actions.reload-part-page' }),
                                        icon: (0, m.jsx)(w.I, { variant: 'reset', size: 'xxs', className: nY().icon }),
                                    }),
                                ],
                            }),
                        [i, t],
                    );
                return (0, m.jsx)(nH.$, { className: (0, p.$)(nY().root, nY().important), message: n, closeToast: a });
            };
            var nq = a(29595),
                nZ = a(74965),
                nX = a(70787),
                nQ = a(74773),
                nJ = a(79272),
                n0 = a(94144),
                n1 = a(88626),
                n2 = a(12533),
                n5 = a(34303),
                n8 = a(58360),
                n4 = a.n(n8);
            let n9 = 'noreferrer noopener',
                n3 = (0, h.PA)(() => {
                    var e;
                    let {
                            settings: { browserInfo: t },
                            user: { account: a },
                        } = (0, M.g)(),
                        { deeplink: i } = null != (e = (0, n0.P)()) ? e : {},
                        n = (0, nJ.q)({ browserInfo: t, login: a.data.login }),
                        { shouldShow: r } = ((e) => {
                            let {
                                    enabled: t = !0,
                                    searchParamKey: a,
                                    storageKey: i,
                                    storageValue: n = 'true',
                                    storageMatcher: r = (e) => 'true' === e,
                                    useSessionStorage: s = !0,
                                    searchParamHideValue: o,
                                    shouldHideChecker: l,
                                } = e,
                                [d, c] = (0, f.useState)(!1),
                                [u, _] = (0, f.useState)(!1),
                                m = (0, v.useSearchParams)(),
                                p = (0, eg.N)(),
                                h = p.get(ef.vH),
                                b = p.get(ef.Zf),
                                x = (0, S.c)(l || (() => !1)),
                                g = ((e) => {
                                    switch (e.length) {
                                        case 0:
                                            return;
                                        case 1:
                                            return e[0];
                                        default:
                                            return e;
                                    }
                                })(m.getAll(a)),
                                A = (0, S.c)(() => {
                                    if (!s) return !1;
                                    try {
                                        let e = h.get(i);
                                        return r('string' == typeof e ? e : null);
                                    } catch (e) {
                                        return (b.error('Failed to get sessionStorage', { type: 'useSearchParamVisibility', storageKey: i }), !1);
                                    }
                                }),
                                C = (0, S.c)(() => {
                                    if (s)
                                        try {
                                            h.set(i, n);
                                        } catch (e) {
                                            b.error('Failed to set sessionStorage', { type: 'useSearchParamVisibility', storageKey: i });
                                        }
                                });
                            return (
                                (0, f.useEffect)(() => {
                                    c(!0);
                                }, []),
                                (0, f.useEffect)(() => {
                                    if (!d || !t) return void _(!1);
                                    let e =
                                            (!!o &&
                                                ((e, t) => {
                                                    if (!e || !t) return !1;
                                                    let a = t.toLowerCase();
                                                    return Array.isArray(e) ? e.some((e) => e.toLowerCase() === a) : e.toLowerCase() === a;
                                                })(g, o)) ||
                                            x(g),
                                        a = A();
                                    (e && C(), _(!(e || a)));
                                }, [g, o, s, d, t, x, A, C]),
                                { shouldShow: !!d && u, searchParamValue: g }
                            );
                        })({ searchParamKey: n5.K.UTM_SOURCE, storageKey: eA.c.HideDeeplinkAndOnelink, searchParamHideValue: 'bottomsheet' }),
                        s = (0, b.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery) ? 'huaweiAppGallery' : (null == t ? void 0 : t.OSFamily) === n1.j.IOS ? 'macos' : 'googlePlay',
                        ),
                        o = (0, b.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery)
                                ? (0, m.jsx)(T.A, { id: 'deeplinks.download-from-app-gallery' })
                                : (null == t ? void 0 : t.OSFamily) === n1.j.IOS
                                  ? (0, m.jsx)(T.A, { id: 'deeplinks.download-from-app-store' })
                                  : (0, m.jsx)(T.A, { id: 'deeplinks.download-from-google-play' }),
                        ),
                        l = (0, S.c)(() => {
                            if (!i) return;
                            let e = new URLSearchParams(window.location.search);
                            window.open((0, n2.C)(i, e), '_self', n9);
                        }),
                        d = (0, S.c)(() => {
                            let e = new URLSearchParams(window.location.search),
                                t = n(i && (0, n2.C)(i, e));
                            window.open(t, '_blank', n9);
                        });
                    return r
                        ? (0, m.jsxs)('div', {
                              className: n4().root,
                              children: [
                                  (0, m.jsx)(I.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: l,
                                      radius: 'xxxl',
                                      className: n4().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(w.I, { className: (0, p.$)(n4().buttonIcon, n4().musicIcon), variant: 'musicLogo' }),
                                      children: (0, m.jsx)(k.HL, {
                                          className: n4().buttonTitle,
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, m.jsx)(T.A, { id: 'deeplinks.listen-in-app' }),
                                      }),
                                  }),
                                  (0, m.jsx)(I.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: d,
                                      radius: 'xxxl',
                                      className: n4().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(w.I, { className: (0, p.$)(n4().buttonIcon, n4().onelinkIcon), variant: s }),
                                      children: (0, m.jsx)(k.HL, { className: n4().buttonTitle, variant: 'div', type: 'text', size: 'm', weight: 'normal', children: o }),
                                  }),
                              ],
                          })
                        : null;
                });
            var n6 = a(28166);
            let n7 = (e) => {
                let { children: t, isEnabled: a } = e,
                    [i, n] = (0, f.useState)(n6.ov),
                    r = (0, S.c)((e) => {
                        let { href: t } = (0, eV.u)(null != e ? e : '', { options: { host: n6.ov } });
                        n(t);
                    }),
                    s = (0, f.useMemo)(() => ({ deeplink: i, setDeeplink: r, isEnabled: a }), [a, r, i]);
                return a ? (0, m.jsx)(n0.H.Provider, { value: s, children: t }) : t;
            };
            var re = a(19129),
                rt = a(54486);
            let ra = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var ri = a(30990),
                rn = a.n(ri);
            let rr = (0, h.PA)((e) => {
                    let { className: t, forwardRef: a, onAdvertChange: i, ...n } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: r },
                            },
                        } = (0, M.g)(),
                        { formatMessage: s } = (0, y.A)(),
                        o = (0, S.c)((e) => {
                            (void 0 !== e && r.setType(e), i());
                        });
                    return (0, m.jsx)('section', {
                        ref: a,
                        className: (0, p.$)(rn().root, t, { [rn().root_hidden]: !r.isVisible }),
                        'aria-label': s({ id: 'advert.banner' }),
                        role: 'banner',
                        ...n,
                        children: (0, m.jsx)(ee.N, {
                            className: rn().advert,
                            ownerId: J.P,
                            containerId: 'adfox_173831489272852769',
                            params: ra,
                            onLoad: r.setType,
                            onRender: o,
                            onError: r.toggleHasErrorTrue,
                            onNoAds: r.toggleNoAdsTrue,
                        }),
                    });
                }),
                rs = (0, f.forwardRef)((e, t) => (0, m.jsx)(rr, { forwardRef: t, ...e }));
            var ro = a(50227),
                rl = a.n(ro);
            let rd = (0, h.PA)((e) => {
                let { children: t } = e,
                    [a, i] = (0, f.useState)(!1),
                    [n, r] = (0, f.useState)(!0),
                    [s, o] = (0, f.useState)(!1),
                    { contentRef: l, contentScrollRef: d } = (0, O.g)(),
                    c = (0, f.useRef)(null),
                    {
                        user: u,
                        settings: { isMobile: _ },
                        advertBanners: {
                            banners: { topAdvertBanner: h },
                        },
                        freeAccess: v,
                    } = (0, M.g)(),
                    b = (!u.isAuthorized || v.isFreeWebUser) && h.isVisible,
                    x = (0, f.useCallback)(() => {
                        (r(!1), i(!0));
                    }, [r, i]),
                    g = (0, f.useCallback)(() => {
                        (r(!0), i(!1));
                    }, [r, i]),
                    A = (0, f.useCallback)(() => {
                        o(!1);
                    }, [o]),
                    C = (0, f.useMemo)(
                        () =>
                            b
                                ? (0, m.jsx)(rs, { className: (0, p.$)(rl().banner, { [rl().banner_canShow]: a }), onFocus: x, onBlur: g, onAdvertChange: A, ref: c })
                                : null,
                        [b, a, x, g, A],
                    ),
                    N = (0, f.useCallback)(() => (_ ? window.scrollY : null == d ? void 0 : d.scrollTop), [d, _]),
                    y = (0, f.useCallback)(() => {
                        if (!C) return;
                        let e = N();
                        if (void 0 === e) return void i(!0);
                        let t = e > 0;
                        if (!_ && l && d) {
                            var a;
                            let e = l.clientHeight + ((null == (a = c.current) ? void 0 : a.offsetHeight) || 0) < d.scrollHeight;
                            e ? r(!0) : !e && t && r(!1);
                        }
                        if (!n || (!t && s)) return;
                        let u = !t;
                        (i(u), u && o(!0));
                    }, [l, d, C, n, N, _, s, i, r, o]);
                (0, f.useEffect)(() => {
                    y();
                }, [y, d]);
                let T = (0, f.useMemo)(() => (0, eu.A)(y, 200), [y]);
                return (
                    (0, rt.L)(_ ? { onScroll: T } : { onScroll: T, elementRef: d }),
                    (0, m.jsxs)('div', { className: rl().root, children: [C, (0, m.jsx)('div', { className: rl().content, children: t })] })
                );
            });
            var rc = a(85838),
                ru = a(50943),
                r_ = a.n(ru);
            let rm = (e) => {
                    let { onDismiss: t, closeToast: a } = e,
                        i = (0, S.c)(() => {
                            (t(), null == a || a());
                        });
                    return (0, m.jsx)(nH.$, {
                        className: r_().root,
                        cover: (0, m.jsx)(tA._V, { className: r_().logo, src: C.src, alt: '', fit: 'contain', withAvatarReplace: !1 }),
                        coverClassName: r_().cover,
                        message: (0, m.jsx)(k.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 's',
                            'data-test-id': E.S7.NOTIFICATION_RECOMMENDATIONS_UNAVAILABLE_TEXT,
                            children: (0, m.jsx)(T.A, { id: 'notifications-info.recommendations-unavailable' }),
                        }),
                        closeToast: i,
                    });
                },
                rp = (0, h.PA)(() => {
                    let e = (0, v.usePathname)(),
                        { experiments: t, communication: a, user: i } = (0, M.g)(),
                        { notify: n, dismiss: r } = (0, nZ.l)(),
                        s = a.isRecommendationsNotificationDismissed,
                        o = i.hasPlus && t.checkExperiment(q.z.WebNextProductWithoutRecommendation, 'on'),
                        l = e === K.Z.main.href;
                    return (
                        (0, f.useEffect)(() => {
                            if (!o || l || s) return;
                            let e = n((0, m.jsx)(rm, { onDismiss: a.dismissRecommendationsNotification }), {
                                containerId: nq.u.PRODUCT_WITHOUT_RECOMMENDATION,
                                autoClose: !1,
                                important: !0,
                                single: !1,
                                toastId: 'product-without-recommendation',
                            });
                            return () => r({ notificationId: e, forceClose: !0 });
                        }, [a, r, s, o, l, n]),
                        null
                    );
                });
            var rh = a(26071),
                rv = a.n(rh);
            // for PulseSync WebHost: BEGIN render native addon notifications with icons, covers and links
            const NativeAddonNotification = ({ notification, iconProps, closeToast }) => {
                const { message, kind, coverUrl, link, isActive } = notification;
                if (kind === 'error' && !iconProps && !coverUrl && !link)
                    return (0, m.jsx)(a(66943).h, {
                        error: message,
                        closeToast,
                    });
                const caption = (0, m.jsxs)(a(29504).HL, {
                    className: kind === 'error' ? a(49397).message : undefined,
                    variant: 'div',
                    type: 'controls',
                    size: 'm',
                    role: kind === 'error' ? 'alert' : 'status',
                    children: [
                        message,
                        link && ' ',
                        link &&
                            (0, m.jsx)(a(91292).N, {
                                href: link.href,
                                className: a(95641).link,
                                onClick: (event) => {
                                    if (!isActive()) return event.preventDefault();
                                    closeToast?.();
                                },
                                children: (0, m.jsx)(a(29504).HL, {
                                    className: a(95641).title,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    children: link.label,
                                }),
                            }),
                    ],
                });
                return (0, m.jsx)(a(59304).$, {
                    className: kind === 'error' ? a(49397).root : undefined,
                    message: caption,
                    cover: coverUrl
                        ? (0, m.jsx)(a(90688)._V, {
                              src: coverUrl,
                              size: 100,
                              fit: 'cover',
                              className: a(95641).image,
                              'aria-hidden': true,
                          })
                        : iconProps
                          ? (0, m.jsx)(a(52300).I, iconProps)
                          : undefined,
                    coverRadius: 's',
                    closeToast,
                });
            };
            // for PulseSync WebHost: END render native addon notifications with icons, covers and links

            let rb = [{ id: nq.u.INFO }, { id: nq.u.ERROR, limit: 1 }, { id: nq.u.PRODUCT_WITHOUT_RECOMMENDATION }],
                rx = () => {
                    // for PulseSync WebHost: BEGIN register native addon notifications
                    const { notify, dismiss } = (0, nZ.l)();
                    (0, f.useEffect)(() => {
                        let unregister;
                        const register = () => {
                            const api = window.pulsesyncApi;
                            if (unregister || !api?.registerNativeNotifications) return;
                            unregister = api.registerNativeNotifications({
                                show: (notification) => {
                                    const { id, icon, kind, durationMs, onClose } = notification;
                                    const iconProps = icon ? a(52300).resolveIcon(icon) : undefined;
                                    if (icon && !iconProps) throw new TypeError('Notification icon is not in the native catalog');
                                    const content = (0, m.jsx)(NativeAddonNotification, {
                                        notification,
                                        iconProps,
                                    });
                                    notify(content, {
                                        containerId: kind === 'error' ? nq.u.ERROR : nq.u.INFO,
                                        toastId: id,
                                        autoClose: durationMs,
                                        single: false,
                                        onClose,
                                    });
                                },
                                dismiss: (id) =>
                                    dismiss({
                                        notificationId: id,
                                        forceClose: true,
                                    }),
                            });
                        };
                        document.addEventListener('pulsesync:runtime-ready', register);
                        register();
                        return () => {
                            document.removeEventListener('pulsesync:runtime-ready', register);
                            unregister?.();
                        };
                    }, [notify, dismiss]);
                    // for PulseSync WebHost: END register native addon notifications

                    let e = (0, f.useRef)(null);
                    return (
                        (0, f.useEffect)(() => {
                            let t = e.current;
                            if (!t) return;
                            let a = '.'.concat(rv().root, ':not(.').concat(rv().recommendations, ')'),
                                i = () => {
                                    let e = Math.max(0, ...Array.from(t.querySelectorAll(a), (e) => e.getBoundingClientRect().height));
                                    t.style.setProperty('--transient-offset', e > 0 ? 'calc(-'.concat(e, 'px - var(--ym-spacer-size-m))') : '0px');
                                },
                                n = new ResizeObserver(i),
                                r = () => {
                                    (n.disconnect(), t.querySelectorAll(a).forEach((e) => n.observe(e)), i());
                                },
                                s = new MutationObserver(r);
                            return (
                                s.observe(t, { childList: !0, subtree: !0 }),
                                r(),
                                () => {
                                    (s.disconnect(), n.disconnect());
                                }
                            );
                        }, []),
                        (0, m.jsxs)('div', {
                            ref: e,
                            className: rv().container,
                            children: [
                                rb.map((e) => {
                                    let { id: t, limit: a } = e;
                                    return (0, m.jsx)(
                                        rc.Notification,
                                        {
                                            className: (0, p.$)(rv().root, { [rv().recommendations]: t === nq.u.PRODUCT_WITHOUT_RECOMMENDATION }),
                                            enableMultiContainer: !0,
                                            containerId: t,
                                            position: 'bottom-center',
                                            limit: a,
                                        },
                                        t,
                                    );
                                }),
                                (0, m.jsx)(rp, {}),
                            ],
                        })
                    );
                },
                rf = iI.default.default(
                    () =>
                        Promise.all([
                            a.e(3637),
                            a.e(8380),
                            a.e(7435),
                            a.e(4596),
                            a.e(100),
                            a.e(7165),
                            a.e(1951),
                            a.e(7565),
                            a.e(6740),
                            a.e(9625),
                            a.e(8752),
                            a.e(2441),
                            a.e(8034),
                            a.e(7456),
                            a.e(127),
                            a.e(6311),
                            a.e(7617),
                            a.e(8963),
                            a.e(9380),
                            a.e(9202),
                            a.e(8872),
                            a.e(7618),
                            a.e(9425),
                            a.e(4683),
                            a.e(2690),
                            a.e(2671),
                            a.e(617),
                            a.e(4530),
                            a.e(1157),
                        ])
                            .then(a.bind(a, 96579))
                            .then((e) => e.ProductLayoutClientOnlyModalsContent),
                    { ssr: !1 },
                ),
                rg = (0, h.PA)((e) => {
                    var t, a, i;
                    let { children: n, barBelow: r, isNewWaveMainTabActive: s, layoutChromeStyles: o, rootClassName: l, rootStyle: d } = e,
                        c = (0, v.usePathname)(),
                        { setCompositePlayerBarRef: u } = (0, O.g)(),
                        _ = (0, eg.N)().get(ef.oo),
                        h = ex(),
                        {
                            settings: { browserInfo: b, isMobile: x, isWindowsApplication: g, isMacOSApplication: A, isLinuxApplication: C },
                            experiments: N,
                            user: y,
                            redAlert: T,
                            album: E,
                            albumCPA: { isPlusCPAPlayerBarEnabled: S, isHidePlusModalEnabled: B },
                            modals: { buySubscriptionModal: I },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: w },
                            },
                            freeAccess: P,
                        } = (0, M.g)(),
                        [j, k] = (0, f.useState)(null != (i = _.get(eA.c.NavbarCollapsed)) ? i : h),
                        L = (0, f.useMemo)(() => ({ isCollapsed: j || h, setIsCollapsed: k }), [j, h]);
                    (() => {
                        let { notify: e, dismiss: t } = (0, nZ.l)(),
                            a = (0, f.useRef)(void 0),
                            { library: i, user: n } = (0, M.g)(),
                            r = (0, eg.N)().get(ef.U2),
                            [s, o] = (0, f.useState)(!0),
                            l = (0, f.useCallback)(async () => {
                                o(!1);
                                let e = [];
                                (n.settings.loadingState === nQ.G.REJECT && e.push(n.getSettings()),
                                    i.loadingState === nQ.G.REJECT && e.push(i.getData()),
                                    t({ notificationId: a.current, forceClose: !0 }),
                                    await Promise.allSettled(e),
                                    o(!0));
                            }, [t, i, n]);
                        ((0, f.useEffect)(() => {
                            let t = [n.settings.loadingState];
                            (0, nX.g)(r) || t.push(i.loadingState);
                            let o = t.every((e) => e !== nQ.G.PENDING);
                            s && o && t.includes(nQ.G.REJECT) && (a.current = e((0, m.jsx)(n$, { refetchRequests: l }), { containerId: nq.u.IMPORTANT, autoClose: !1 }));
                        }, [e, l, s, i.loadingState, n.settings.loadingState, r]),
                            (0, f.useEffect)(
                                () => () => {
                                    t({ notificationId: a.current, forceClose: !0 });
                                },
                                [t],
                            ));
                    })();
                    let R = (!y.isAuthorized || P.isFreeWebUser) && (null == b ? void 0 : b.isTouch),
                        D = N.checkExperiment(q.z.WebNextDeeplinksToMobile, 'on') && y.hasPlus && !!(null == b ? void 0 : b.isMobile) && !1,
                        U = D && !s,
                        { setDefaultLayoutRef: F } = (0, O.g)(),
                        z = S(null == E ? void 0 : E.id, null == E || null == (t = E.meta) ? void 0 : t.isNonMusic),
                        W = B(null == E ? void 0 : E.id, null == E || null == (a = E.meta) ? void 0 : a.isNonMusic),
                        K = !R || z,
                        V = z && (null == b ? void 0 : b.isTouch);
                    return (
                        (0, f.useEffect)(() => {
                            W && I.close();
                        }, [W, I]),
                        (0, m.jsx)(nD.Provider, {
                            value: L,
                            children: (0, m.jsx)(rd, {
                                children: (0, m.jsx)(n7, {
                                    isEnabled: D,
                                    children: (0, m.jsx)(nV, {
                                        children: (0, m.jsxs)('div', {
                                            ref: F,
                                            className: l,
                                            style: d,
                                            children: [
                                                V && (0, m.jsx)(nO, { modal: I }),
                                                !x &&
                                                    K &&
                                                    (0, m.jsx)(a6, {
                                                        className: (0, p.$)(o.navbar, {
                                                            [o.navbar_application_windows]: g,
                                                            [o.navbar_application_macos]: A,
                                                            [o.navbar_application_linux]: C,
                                                        }),
                                                        externalIsCollapsed: j,
                                                        externalSetIsCollapsed: k,
                                                    }),
                                                (0, m.jsx)(ev, {
                                                    // for PulseSync: BEGIN reserve player-bar space when the legacy bar is enabled on the wave page
                                                    className: (0, p.$)(X().content, {
                                                        [X().content_withPlayerBar]: x && (!s || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()),
                                                        [X().content_withAxeBanner]: w.isVisible,
                                                    }),
                                                    // for PulseSync: END reserve player-bar space when the legacy bar is enabled on the wave page
                                                    children: (0, m.jsxs)(re.ErrorBoundary, { fallback: nf.SomethingWentWrong, children: [n, (0, m.jsx)(rx, {})] }, c),
                                                }),
                                                // for PulseSync: BEGIN render the legacy player bar on the wave page when requested
                                                !x &&
                                                    K &&
                                                    (!s || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()) &&
                                                    (0, m.jsx)(te.n, { pageId: e9._Q.PLAYER, children: (0, m.jsx)(nh, { className: X().playerBar }) }),
                                                // for PulseSync: END render the legacy player bar on the wave page when requested
                                                x &&
                                                    K &&
                                                    (0, m.jsxs)('div', {
                                                        ref: u,
                                                        className: (0, p.$)(X().compositePlayerBar, { [X().compositePlayerBar_withNewVibe]: s }),
                                                        children: [
                                                            U && (0, m.jsx)(n3, {}),
                                                            // for PulseSync: BEGIN render the legacy player bar on the wave page when requested
                                                            (!s || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()) &&
                                                                (0, m.jsx)(te.n, { pageId: e9._Q.PLAYER, children: (0, m.jsx)(nh, { className: X().playerBar }) }),
                                                            // for PulseSync: END render the legacy player bar on the wave page when requested
                                                            (0, m.jsx)(a6, {
                                                                className: (0, p.$)(o.navbar, {
                                                                    [o.navbar_application_windows]: g,
                                                                    [o.navbar_application_macos]: A,
                                                                    [o.navbar_application_linux]: C,
                                                                }),
                                                                externalIsCollapsed: j,
                                                                externalSetIsCollapsed: k,
                                                            }),
                                                        ],
                                                    }),
                                                T.isVisible && (0, m.jsx)(nx, { className: o.barBelow }),
                                                !T.isVisible && r && (0, m.jsx)(nN, { className: o.barBelow, barBelow: r }),
                                                (0, m.jsx)(rf, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var rA = a(20855),
                rC = a.n(rA);
            let // for PulseSync: BEGIN desktop titlebar and wave layout preferences
                rN = (0, h.PA)((e) => {
                let t,
                    { className: a, children: i } = e,
                    n = (0, v.usePathname)(),
                    {
                        settings: { isMobile: r, isWindowsApplication: s, isLinuxApplication: o , isMacOSApplication: isMacOS},
                        redAlert: l,
                        communication: d,
                        paywall: c,
                        user: u,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: _ },
                        },
                        sonataState: h,
                        experiments: g,
                        vibe: y,
                        words: T,
                    } = (0, M.g)(),
                    E = !r && u.hasPlus && n === K.Z.main.href && g.checkExperiment(q.z.WebNextProductWithoutRecommendation, 'on') && c.isPassed,
                    S = ((e) =>
                        (0, f.useMemo)(() => {
                            if (e)
                                return N.t.create({
                                    anchorId: A.v.ON_START_BAR_BELOW,
                                    isVisible: !0,
                                    hasAnimationAlreadyBeenShown: !0,
                                    hasAnimationAlreadyBeenStarted: !0,
                                    list: [
                                        {
                                            anchorId: A.v.ON_START_BAR_BELOW,
                                            screenId: 'product-without-recommendation',
                                            feedbackToken: null,
                                            content: { imageUrl: C.src, buttons: [] },
                                        },
                                    ],
                                });
                        }, [e]))(E),
                    B = (0, b.L)(() => {
                        if (E) return S;
                        if (!r) {
                            var e;
                            return null == (e = d.list) ? void 0 : e.barBelow;
                        }
                    }),
                    I =
                        n === K.Z.main.href || n === K.Z.video.href;
                $(V.S.Dark, I);
                let w = l.isVisible || ((null == B ? void 0 : B.isVisible) && B.hasAnimationAlreadyBeenStarted),
                    P = {
                        barBelow: rC().barBelow,
                        navbar: rC().navbar,
                        navbar_application_linux: rC().navbar_application_linux,
                        navbar_application_macos: rC().navbar_application_macos,
                        navbar_application_windows: rC().navbar_application_windows,
                    },
                    j = rC().root_withBarBelow,
                    k = rC().root;
                if (I) {
                    var L;
                    let e = y.isShuffleVibe && h.isVibeContext;
                    ((t = ((e) => {
                        let { palette: t, isPlaying: a } = e;
                        return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
                    })({ palette: (0, x.OH)(e || null == (L = h.entityMeta) ? void 0 : L.averageColor), isPlaying: h.isPlaying && !T.bigCardPanel.isOpened })),
                        (j = rC().rootNewVibe_withBarBelow),
                        (k = rC().rootNewVibe));
                }
                let R = (0, p.$)(
                    X().root,
                    k,
                    {
                        [rC().root_applicationPreserveTitleBar]: s || o || isMacOS,
                        [rC().root_withProductWithoutRecommendation]: E,
                        [j]: w,
                        [rC().withRedAlert]: l.isVisible,
                        [X().root_withAxeBanner]: _.isVisible,
                        modSettings_alwaysWideBar: window.ALWAYS_WIDE_BAR?.(),
                        modSettings_showOldPlayerBarOnNewWave: window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.(),
                    },
                    a,
                );
                return (0, m.jsxs)(rg, {
                    barBelow: B,
                    isNewWaveMainTabActive: I,
                    layoutChromeStyles: P,
                    rootClassName: R,
                    rootStyle: t,
                    children: [i, I && (0, m.jsx)(W, {})],
                });
            })
                // for PulseSync: END desktop titlebar and wave layout preferences
;
        },
        16381: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        17743: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => K });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                s = a(29993),
                o = a(37173),
                l = a(5407),
                d = a(91467),
                c = a(86535),
                u = a(12816),
                _ = a(76675),
                m = a(51318),
                p = a(17071),
                h = a(38860),
                v = a(47964),
                b = a(9630),
                x = a(72288),
                f = a(27397),
                g = a(36361),
                // for PulseSync: BEGIN imports for player store and yellow play button experiment IDs
                A = a(16704),
                pulseSyncPlayerStore = a(72288),
                yellowExperimentIds = a(97956);
                // for PulseSync: END imports for player store and yellow play button experiment IDs
            let C = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: n, className: r } = e;
                return (0, i.jsx)(A.D, { className: r, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: n });
            };
            var N = a(51976),
                y = a(65724),
                T = a(2058),
                E = a(17392),
                S = a(96817),
                B = a(52300),
                I = a(14315),
                w = a(68039),
                P = a(86961),
                j = a.n(P);
            let k = (0, n.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: n,
                        canMoveForward: r,
                        canMoveBackward: s,
                        canRewind: o,
                        canShuffle: l,
                        onClickNext: d,
                        onClickPrev: c,
                        onRewindBackwardsClick: u,
                        onRewindForwardClick: _,
                        onClickPlayPause: m,
                        canChangeRepeatMode: p,
                        shuffle: h,
                        className: v,
                        onRepeatClick: b,
                        onShuffleClick: x,
                    } = e,
                    // for PulseSync: BEGIN read the yellow fullscreen play button experiment override
                    { formatMessage: f } = (0, T.A)(),
                    { experiments: pulseSyncExperiments } = (0, pulseSyncPlayerStore.g)(),
                    pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(yellowExperimentIds.z.WebNextPlayerBarYellowButton, 'on');
                    // for PulseSync: END read the yellow fullscreen play button experiment override
                return (0, i.jsxs)('div', {
                    className: (0, y.$)(j().root, v),
                    children: [
                        (0, i.jsxs)('div', {
                            className: j().buttonContainer,
                            children: [
                                (t || l) &&
                                    (0, i.jsx)(w.u, {
                                        className: j().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: h,
                                        onClick: x,
                                        'data-test-id': E.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                !t &&
                                    o &&
                                    (0, i.jsx)(S.$, {
                                        className: (0, y.$)(j().sonataButton, j().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: u,
                                        'data-test-id': E.Kq.sonata.REWIND_BACKWARDS_BUTTON,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: j().sonataButtons,
                            children: [
                                (0, i.jsx)(S.$, {
                                    className: j().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !s,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.previous-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xxs' }),
                                    onClick: c,
                                    'data-test-id': E.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                                (0, i.jsx)(A.D, {
                                    className: (0, y.$)(j().sonataButton, j().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    // for PulseSync: BEGIN apply the yellow fullscreen play icon class
                                    iconClassName: (0, y.$)(j().playPauseButtonIcon, { [j().playPauseButtonIcon_withYellowPlayButton]: pulseSyncYellowButtonEnabled }),
                                    // for PulseSync: END apply the yellow fullscreen play icon class
                                    onClick: m,
                                }),
                                (0, i.jsx)(S.$, {
                                    className: j().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !r,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.next-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xxs' }),
                                    onClick: d,
                                    'data-test-id': E.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: j().buttonContainer,
                            children: [
                                !t &&
                                    o &&
                                    (0, i.jsx)(S.$, {
                                        className: (0, y.$)(j().sonataButton, j().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        'data-test-id': E.Kq.sonata.REWIND_FORWARD_BUTTON,
                                    }),
                                (t || p) &&
                                    (0, i.jsx)(I.s, {
                                        className: j().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: n,
                                        onClick: b,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = a(18593),
                R = a(99698),
                O = a(42174),
                D = a(35262),
                M = a(49738),
                U = a(64546),
                F = a(4941),
                z = a.n(F);
            let W = (0, n.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: n,
                            canRewind: s,
                            onClickNext: o,
                            onClickPrev: l,
                            onRewindBackwardsClick: d,
                            onRewindForwardClick: c,
                            onClickPlayPause: u,
                            className: _,
                        } = e,
                        { formatMessage: v } = (0, T.A)(),
                        { user: b, sonataState: f } = (0, x.g)(),
                        g = (0, h.z)(),
                        C = f.entityMeta,
                        N = f.contextType === L.K.Generative,
                        I = b.isAuthorized && !N,
                        w = (0, O.K)(f.entityMeta),
                        P = (0, R.m)(f.entityMeta);
                    (0, r.useEffect)(() => {
                        if (!f.isGenerativeContext)
                            return (
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.LIKE, w),
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.DISLIKE, P),
                                () => {
                                    (null == g || g.removeShortcutsListener(p.M.MAIN, m.l.LIKE), null == g || g.removeShortcutsListener(p.M.MAIN, m.l.DISLIKE));
                                }
                            );
                    }, [P, w, g, f.isGenerativeContext]);
                    let j = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: d,
                                          'data-test-id': E.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON,
                                      })
                                    : (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !n,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.previous-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xs' }),
                                          onClick: l,
                                          'data-test-id': E.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON,
                                      }),
                            [s, n, v, l, d],
                        ),
                        k = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: c,
                                          'data-test-id': E.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON,
                                      })
                                    : (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.next-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xs' }),
                                          onClick: o,
                                          'data-test-id': E.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON,
                                      }),
                            [s, a, v, o, c],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, y.$)(z().root, _),
                        children: [
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children: C && I && (0, i.jsx)(U.WithOffline, { fallback: (0, i.jsx)(D._, { isDisliked: C.isDisliked, iconSize: 'xs', onClick: P }) }),
                            }),
                            (0, i.jsxs)('div', {
                                className: z().sonataButtons,
                                children: [
                                    j,
                                    (0, i.jsx)(A.D, {
                                        className: z().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: z().playPauseButtonIcon,
                                        onClick: u,
                                    }),
                                    k,
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children:
                                    C &&
                                    I &&
                                    (0, i.jsx)(U.WithOffline, {
                                        fallback: (0, i.jsx)(M.c, { isLiked: C.isLiked, iconSize: 'xs', onClick: w, disabled: !b.isAuthorized }),
                                    }),
                            }),
                        ],
                    });
                }),
                K = (0, n.PA)((e) => {
                    var t, a;
                    // for PulseSync: BEGIN access fullscreen mode and the yellow play button experiment override
                    let { isMobile: n, entityMeta: A, isFullscreen: pulseSyncIsFullscreen, className: T, withShuffle: E, withRepeat: S } = e,
                        { sonataState: B, vibe: I, advert: w, freePlayerAccess: P, experiments: pulseSyncExperiments } = (0, x.g)(),
                        pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(yellowExperimentIds.z.WebNextPlayerBarYellowButton, 'on'),
                    // for PulseSync: END access fullscreen mode and the yellow play button experiment override
                        j = (0, h.z)(),
                        L = (0, b.e)(),
                        { rewindBackwards: R, rewindForward: O } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, x.g)(),
                                t = (0, b.e)();
                            return {
                                rewindBackwards: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = t.state.playerState.progress.value.position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        i = t.state.playerState.progress.value.position + 30;
                                    t.setProgress(i < a ? i : a);
                                }, [e, t]),
                            };
                        })(),
                        D = (0, d.r)(),
                        M = (0, _.b)(),
                        U = (null == A ? void 0 : A.isNonMusic) && !w.isAdvertShown,
                        F = (0, l.P)(),
                        { togglePlay: z } = (0, v.B)({
                            seeds: null != (a = null == (t = I.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: u._Q.HOME,
                            blockIdForFrom: c.h.RUP_MAIN_RADIO,
                            onPlayInterrupted: () => P.showRestrictionModal(o.W.Interrupted),
                        }),
                        K = (0, r.useMemo)(() => (w.isAdvertShown ? w.isAdvertPlaying : B.isPlaying), [w.isAdvertShown, w.isAdvertPlaying, B.isPlaying]),
                        V = (0, s.c)(() => {
                            if (w.isAdvertShown) {
                                var e;
                                null == D || null == (e = D.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            A ? null == L || L.togglePause() : z();
                        }),
                        H = (0, s.c)(() => {
                            // for PulseSync: BEGIN handle play toggling according to fullscreen mode
                            (pulseSyncIsFullscreen && F()) || (V(), M(!K));
                            // for PulseSync: END handle play toggling according to fullscreen mode
                        }),
                        G = (0, s.c)(() => {
                            null == L || L.moveForward();
                        }),
                        Y = (0, s.c)(() => {
                            null == L || L.moveBackward();
                        }),
                        $ = (0, g.e)(),
                        q = (0, f.A)(),
                        Z = (0, s.c)(() => {
                            q(B);
                        }),
                        X = (0, s.c)(() => {
                            $(B);
                        });
                    // for PulseSync: BEGIN register main-player shortcuts only outside fullscreen controls
                    (0, r.useEffect)(() => {
                        if (!pulseSyncIsFullscreen && (null == j || j.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY, V), !w.isAdvertShown))
                            return (
                                null == j || j.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT, Z),
                                null == j || j.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE, X),
                                () => {
                                    (null == j || j.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY),
                                        w.isAdvertShown ||
                                            (null == j || j.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE),
                                            null == j || j.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT)));
                                }
                            );
                    }, [pulseSyncIsFullscreen, V, Z, X, j, w.isAdvertShown]);
                    // for PulseSync: END register main-player shortcuts only outside fullscreen controls
                    // for PulseSync: BEGIN select player control layout using fullscreen mode
                    let Q = (0, r.useMemo)(() => (pulseSyncIsFullscreen ? (n ? W : k) : n ? C : N.Z), [n, pulseSyncIsFullscreen]);
                    // for PulseSync: END select player control layout using fullscreen mode
                    return (0, i.jsx)(Q, {
                        // for PulseSync: BEGIN apply the yellow play button root class
                        className: (0, y.$)(T, { SonataControls_root__w8uqu: pulseSyncYellowButtonEnabled }),
                        // for PulseSync: END apply the yellow play button root class
                        disabled: null === B.entityMeta || (w.isAdvertShown && !n),
                        isPlaying: K || !1,
                        canMoveBackward: B.canMoveBackward && !w.isAdvertShown,
                        canMoveForward: B.canMoveForward && !w.isAdvertShown,
                        withShuffle: E,
                        withRepeat: S,
                        canShuffle: B.canShuffle,
                        shuffle: B.shuffle,
                        onClickPlayPause: H,
                        onClickNext: G,
                        onClickPrev: Y,
                        canRewind: U,
                        onRewindBackwardsClick: R,
                        onRewindForwardClick: O,
                        canChangeRepeatMode: B.canChangeRepeatMode,
                        repeatMode: B.repeatMode,
                        onRepeatClick: Z,
                        onShuffleClick: X,
                    });
                });
        },
        18143: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18278: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => d });
            var i = a(88800),
                n = a(53548),
                r = a(17392),
                s = a(29504),
                o = a(15526),
                l = a.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [o, d] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
                            s.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        19129: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => d });
            var i = a(9519),
                n = a(88800),
                r = a(53548),
                s = a(4086),
                o = a(41928);
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: { ...t }, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, n.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    (super(...e), (0, i._)(this, 'state', { hasError: !1 }));
                }
            }
            let d = (function (e) {
                let t = (t) => {
                    let a = (0, o.N)().get(s.Zf);
                    return (0, n.jsx)(e, { ...t, logger: a });
                };
                return ((t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t);
            })(l);
        },
        20674: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        20855: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withProductWithoutRecommendation: 'DefaultLayout_root_withProductWithoutRecommendation__6LXgR',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                rootNewVibe: 'DefaultLayout_rootNewVibe__MSDOn',
                rootNewVibe_withBarBelow: 'DefaultLayout_rootNewVibe_withBarBelow__82_qG',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                withRedAlert: 'DefaultLayout_withRedAlert__md0yB',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        21284: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { h: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(i || (i = {})));
        },
        24460: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                s = a(2058),
                o = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(6322);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? a((0, i.jsx)(u.l, { playlist: r }), { containerId: o.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, a, _]);
            };
        },
        24548: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        25883: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => o });
            var i = a(88800),
                n = a(84961),
                r = a(33719),
                s = a(5048);
            let o = (0, n.PA)((e) => {
                let { album: t, closeToast: a } = e,
                    n = (0, s.b)(t.type);
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            });
        },
        26071: (e) => {
            e.exports = {
                container: 'LayoutNotificationContainers_container__8wnWk',
                root: 'LayoutNotificationContainers_root__5HClw',
                recommendations: 'LayoutNotificationContainers_recommendations__g9p5w',
            };
        },
        26208: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        26645: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n, w: () => r });
            var i = a(53548);
            let n = (0, i.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        27104: (e, t, a) => {
            'use strict';
            ((t.U0 = function (e, t) {
                let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                    o = (0, i.makeMetaParams)(2),
                    l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                e.trackEvent('Sidebar.Opened', l);
            }),
                (t.dL = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.ActionPerformed', l);
                }),
                (t.qi = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.Navigated', l);
                }),
                (t.cV = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.Started', l);
                }));
            let i = a(92948),
                n = a(92716);
        },
        27817: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => u });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                s = a(88969),
                o = a(17392),
                l = a(52300),
                d = a(19934),
                c = a(72288);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: a, disabled: n, className: u, iconClassName: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'unpin' : 'pin',
                    h = t ? o.S7.CONTEXT_MENU_UNPIN_BUTTON : o.S7.CONTEXT_MENU_PIN_BUTTON,
                    v = (0, r.useMemo)(() => (t ? (0, i.jsx)(s.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(s.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: a,
                    icon: (0, i.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': h,
                    disabled: n || !m.isAuthorized,
                    children: v,
                });
            });
        },
        28870: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(5120);
            let n = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        29008: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => s, r: () => o });
            var i = a(53548),
                n = a(2058),
                r = a(61691),
                s = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: a } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return a({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return a({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return a({ id: 'entity-names.book' });
                            return a({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'entity-names.fairy-tale' });
                        default:
                            return a({ id: 'entity-names.album' });
                    }
                }, [e, a, t]);
            };
        },
        30283: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => l });
            var i = a(5120),
                n = a(2258),
                r = a(3474);
            let s = i.gK.model('BarBelowContent', {
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    imageUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(r._),
                    advDisclaimer: i.gK.maybeNull(i.gK.string),
                }),
                o = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: s,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                l = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(o),
                    })
                    .volatile(() => ({ wasShown: !1 }))
                    .views((e) => ({
                        get barBelowItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                        get showWithAnimation() {
                            return !e.hasAnimationAlreadyBeenShown && e.isVisible;
                        },
                        get hideWithAnimation() {
                            return e.hasAnimationAlreadyBeenShown && !e.hasAnimationAlreadyBeenHidden && !e.isVisible;
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                        show() {
                            ((e.isVisible = !0), (e.wasShown = !0));
                        },
                        hide() {
                            e.isVisible = !1;
                        },
                        setAnimationAlreadyBeenShown() {
                            e.hasAnimationAlreadyBeenShown = !0;
                        },
                        setAnimationAlreadyBeenHidden() {
                            e.hasAnimationAlreadyBeenHidden = !0;
                        },
                        setAnimationAlreadyBeenStarted() {
                            e.hasAnimationAlreadyBeenStarted = !0;
                        },
                    }));
        },
        30990: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        31510: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => i });
            let i = (e) => ({ uri: e.uri, color: e.color });
        },
        31941: (e) => {
            e.exports = { root: 'CustomPlayerThumb_root__hZTw6', container: 'CustomPlayerThumb_container__lBm2j' };
        },
        32138: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n });
            var i = a(72288);
            let n = (e, t, a) => {
                let {
                    settings: { isMobile: n },
                } = (0, i.g)();
                return !!(n && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (a && a > 0)));
            };
        },
        32245: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => P });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(2058),
                l = a(88969);
            a(30282);
            var d = a(96817),
                c = a(52300),
                u = a(29504),
                _ = a(78793),
                m = a(92716),
                p = a(99984),
                h = a(90780),
                v = a(65523),
                b = a(14518),
                x = a(44230),
                f = a(4370),
                g = a(72288),
                A = a(97956),
                C = a(56248),
                N = a(90688),
                y = a(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = a(96856),
                S = a.n(E);
            let B = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: r } = e,
                    { slam: s } = (0, g.g)(),
                    { contentRef: o } = (0, x.g)(),
                    c = (0, y.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(S().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(C.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(S().navigation, { [S().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(S().content, { [S().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(N._V, { className: S().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, i.jsx)(d.$, {
                                        className: S().button,
                                        onClick: c,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: S().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = a(9184),
                w = a.n(I);
            let P = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: r } = e,
                    { formatMessage: N } = (0, o.A)(),
                    y = (0, s.useContext)(g.P),
                    T = null == y ? void 0 : y.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    E = N(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: a } = (0, h.gf)(),
                        { pageId: i } = (0, b.$)(),
                        n = (0, v.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, a, i, n]);
                })(E);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: a } = (0, b.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let n = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, p.bv)(e.evgenInstance, n);
                            }, [e, t, a, i]),
                        };
                    })(),
                    I = (0, s.useCallback)(() => {
                        (S(), (window.location.href = f.Z.main.href));
                    }, [S]),
                    { contentRef: P } = (0, x.g)();
                return T
                    ? (0, i.jsx)(B, { className: t, withBackwardControl: a, onBack: r })
                    : (0, i.jsxs)('div', {
                          className: (0, n.$)(w().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(w().navigation, { [w().navigation_desktop]: !P }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, n.$)(w().content, { [w().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(c.I, { className: w().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, n.$)(w().title, w().important), variant: 'h3', size: 'xs', children: E }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, n.$)(w().text, w().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(d.$, {
                                          onClick: I,
                                          className: w().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        32947: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n, L: () => r });
            let i = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var n = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let r = (e) => {
                let t = new Date();
                if (i(t, e)) return 'today';
                let a = new Date();
                return (a.setDate(a.getDate() - 1), i(a, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        33719: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => g });
            var i = a(88800),
                n = a(65724),
                r = a(53548),
                s = a(17392),
                o = a(90688),
                l = a(73170),
                d = a(29504),
                c = a(2058),
                u = a(88969),
                _ = a(29993),
                m = a(15077),
                p = a(72288),
                h = a(97956),
                v = a(91292),
                b = a(59304),
                x = a(95641),
                f = a.n(x);
            let g = (e) => {
                let {
                        closeToast: t,
                        className: a,
                        coverUri: x,
                        entityTitle: g,
                        entityDescription: A,
                        entityVariant: C,
                        entityUrl: N,
                        customCover: y,
                        radius: T,
                        isPinned: E,
                    } = e,
                    S = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(h.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    B = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(h.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    I = (0, r.useMemo)(
                        () =>
                            N
                                ? (0, i.jsx)(v.N, {
                                      className: f().link,
                                      href: N,
                                      title: g,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: f().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', g, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: f().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: g,
                                      children: ['\xa0', g, '\xa0'],
                                  }),
                        [g, N],
                    ),
                    w = (0, r.useMemo)(
                        () => y || (0, i.jsx)(o._V, { className: f().image, src: x, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [x, y],
                    ),
                    P = (0, r.useMemo)(() => {
                        let e = { entity: I, description: A };
                        return E
                            ? S({ entityVariant: C, values: e, entityTitle: g, entityDescription: A })
                            : B({ entityVariant: C, values: e, entityTitle: g, entityDescription: A });
                    }, [I, A, E, B, C, g, S]);
                return (0, i.jsx)(b.$, {
                    className: (0, n.$)(f().root, { [f().root_withLongText]: C === m.c.AUDIOBOOK }, a),
                    closeToast: t,
                    cover: w,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': P.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: f().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: P.caption,
                            }),
                        ],
                    }),
                    coverRadius: T,
                });
            };
        },
        34194: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
                advDisclaimerTrigger: 'BrandedPlayerModal_advDisclaimerTrigger__60ecu',
                advDisclaimerTriggerIcon: 'BrandedPlayerModal_advDisclaimerTriggerIcon__0LYXY',
                advDisclaimerPopover: 'BrandedPlayerModal_advDisclaimerPopover__l7iKp',
                advDisclaimerText: 'BrandedPlayerModal_advDisclaimerText__B91Hs',
            };
        },
        35994: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => n });
            var i = a(67174);
            let n = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36303: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(2058),
                n = a(48987);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)(),
                    { hours: r, minutes: s, seconds: o } = (0, n.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, n.e)(t);
                return a(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: r, beginMinutes: s, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        37013: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        38147: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        38514: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => n });
            var i = a(67174);
            let n = (e) => (0, i.u)('/album/:albumId', { params: { albumId: e } });
        },
        38744: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_vibePage: 'SideAdvertBanner_root_vibePage__PLY_P',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
            };
        },
        39661: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewVibe: 'CommonLayout_compositePlayerBar_withNewVibe__taMVb',
            };
        },
        39901: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        40634: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => f });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(92716),
                l = a(17392),
                d = a(29993),
                c = a(90688),
                u = a(19934),
                _ = a(7555),
                m = a(29504),
                p = a(96527),
                h = a(78940),
                v = a(72288),
                b = a(80932),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: r } = (0, v.g)(),
                    b = (0, h.Z)(t.url),
                    g = (0, p.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(f, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    C = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), g({ to: o.AppScreen.ArtistScreen }), b(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, n.$)(x().root, a),
                            onClick: C,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        42078: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(i || (i = {})));
        },
        43484: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        44164: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        44230: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n, g: () => r });
            var i = a(53548);
            let n = (0, i.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                r = () => (0, i.useContext)(n);
        },
        44440: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        44988: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var i = a(88800),
                n = a(84961),
                r = a(17392),
                s = a(52300),
                o = a(19934),
                l = a(108),
                d = a(72288);
            let c = (0, n.PA)((e) => {
                let { isLiked: t, onClick: a, className: n, iconClassName: c, albumType: u, disabled: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, i.jsx)(o.Dr, {
                    className: n,
                    onClick: a,
                    icon: (0, i.jsx)(s.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        45197: (e) => {
            e.exports = { root: 'MuzmarketTitle_root___tr35', badge: 'MuzmarketTitle_badge__d3Xuz' };
        },
        46312: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { p: () => i }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(i || (i = {})));
        },
        46474: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(53548),
                n = a(29993),
                r = a(72288);
            a(97956);
            var s = a(34303),
                o = a(67174),
                l = (a(10325), a(43522)),
                d = (a(44440), a(14912));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, r.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, n.c)((e, t) => {}),
                    _ = (0, n.c)(() => {
                        let e = (0, l.j)();
                        if (null === e) return;
                        e.delete(s.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    m = (0, n.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, n.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    h = (0, n.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [s.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: _,
                    checkIsValidClid: m,
                    getAlbumUrlWithSavedClid: h,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        47938: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(6900),
                n = a(8655);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(i.o)), e && Object.values(n.S).includes(e) && document.body.classList.add(i.o[e]));
            };
        },
        48215: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => k });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(2058),
                l = a(58390),
                d = a(17392),
                c = a(29993),
                u = a(79070),
                _ = a(17610),
                m = a(29504),
                p = a(66264),
                h = a(58217),
                v = a(78940),
                b = a(72288),
                x = a(24548),
                f = a(85587),
                g = a(90224),
                A = a(91292),
                C = a(32947),
                N = a(62837),
                y = a(38514),
                T = a(69553),
                E = a(6667),
                S = a(85463),
                B = a(32138),
                I = a(65462),
                w = a.n(I),
                P = a(87724),
                j = a.n(P);
            let k = (0, r.PA)((e) => {
                var t, a, r, I, P, k, L;
                let {
                        track: R,
                        className: O,
                        withPodcastName: D,
                        withDate: M,
                        withSecondaryColor: U = !1,
                        withListeningProgress: F = !1,
                        captionSize: z = 'm',
                        explicitSize: W = 'xs',
                        withExplicitMark: K,
                        titleContainerClassName: V,
                        textClassName: H,
                        playContextParams: G,
                        withTimeLeftText: Y = !0,
                        ignoreDislikedStyles: $,
                        withCustomTooltip: q = !0,
                        withSavingQueryParams: Z,
                        beforeTitle: X,
                        afterTitle: Q,
                        titleLineClamp: J = 1,
                        podcastMetaClassName: ee,
                        progressClassName: et,
                        withAlbumTitleLink: ea,
                    } = e,
                    {
                        fullscreenPlayer: ei,
                        sonataState: en,
                        slam: er,
                        settings: { isMobile: es },
                    } = (0, b.g)(),
                    { formatMessage: eo, formatDate: el } = (0, o.A)(),
                    ed = (0, E.$)({ withCustomTooltip: q }),
                    ec = (0, l.useSearchParams)(),
                    eu = (0, v.Z)(null != (k = null == (t = R.mainAlbum) ? void 0 : t.url) ? k : ''),
                    e_ = !!(F && G && R.shouldRememberPosition && R.streamProgress && R.durationMs),
                    em =
                        R.id === (null == (a = en.entityMeta) ? void 0 : a.id) &&
                        (null == (I = en.entityMeta) || null == (r = I.streamProgress) ? void 0 : r.endPositionSec),
                    ep = (0, B.d)(e_, R.streamProgress, em),
                    eh = ((e, t) => {
                        let {
                                isMobile: a,
                                isOfflineModeEnabled: i,
                                mainAlbum: n,
                                shouldHidePodcastInfo: r,
                                withPodcastName: s,
                                withDate: o,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, T.q)(e, { isMobile: a, isOfflineModeEnabled: i, query: c }),
                            _ = (null == l || l) && e.disclaimers ? (0, N.DQ)(e.disclaimers) : null,
                            m = null != s && s && !r ? n : null,
                            p = m && (null == d || d) ? (0, y.L)(m.id) : null,
                            h = (null == o || o) && !r ? e.pubDate : void 0,
                            v = e.pubDate ? new Date(e.pubDate) : new Date(),
                            b = (0, C.L)(v),
                            x = !!(h && [C.r.TODAY, C.r.YESTERDAY].includes(b));
                        return { ...u, explicitMark: _, album: m, albumLink: p, pubDate: h, dateType: b, isSoonDate: x };
                    })(R, {
                        isMobile: es,
                        isOfflineModeEnabled: er.isOfflineModeEnabled,
                        mainAlbum: R.mainAlbum,
                        shouldHidePodcastInfo: ep,
                        withPodcastName: D,
                        withDate: M,
                        withExplicitMark: K,
                        withAlbumTitleLink: ea,
                        query: Z ? Object.fromEntries(ec) : void 0,
                    }),
                    ev = ((e, t, a, i, n) => {
                        var r, s;
                        let { canEnableCustomTooltip: o, isMobile: l } = n,
                            d = t.shouldShowRemovedTitle ? a({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = a({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (s = e.version) ? s : ''),
                            _ = t.album ? a({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            m = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case C.r.TODAY:
                                    m = a({ id: 'interface-actions.date-today' });
                                    break;
                                case C.r.YESTERDAY:
                                    m = a({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case C.r.DATE_WITH_YEAR:
                                    m = i(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    m = i(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: o || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: o ? void 0 : t.version,
                            isTooltipEnabled: o && !l,
                            albumAriaLabel: _,
                            albumTitleAttribute: o || null == (r = t.album) ? void 0 : r.title,
                            dateText: m,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(R, eh, eo, el, { canEnableCustomTooltip: ed, isMobile: es }),
                    eb = (0, h.l)({ entity: null != (L = R.mainAlbum) ? L : null, entityType: f.n.PODCAST, callback: eu }),
                    ex = (0, c.c)((e) => {
                        (ei.modal.isOpened && ei.modal.close(), eb(e));
                    }),
                    ef = (0, S.O)({ track: R, withSavingQueryParams: Z, entityType: f.n.PODCAST }),
                    eg = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(_.m_, {
                                enabled: ev.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ev.displayTitle,
                                hoverSettings: x.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: w().title,
                                    type: 'entity',
                                    size: z,
                                    variant: 'span',
                                    title: ev.titleAttribute,
                                    ...e,
                                    children: ev.displayTitle,
                                }),
                            }),
                        [ev.isTooltipEnabled, ev.titleAttribute, z, ev.displayTitle],
                    ),
                    eA = null == (P = eh.link) ? void 0 : P.href,
                    eC = (0, s.useMemo)(
                        () =>
                            eh.shouldShowRemovedTitle
                                ? (0, i.jsx)(_.m_, {
                                      enabled: ev.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ev.displayTitle,
                                      hoverSettings: x.V,
                                      children: (0, i.jsx)('span', { children: ev.displayTitle }),
                                  })
                                : void 0 !== eA
                                  ? (0, i.jsx)(A.N, {
                                        onClick: ef,
                                        className: w().albumLink,
                                        href: eA,
                                        'aria-label': ev.ariaLabel,
                                        title: ev.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: eg(),
                                    })
                                  : eg({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [ev.isTooltipEnabled, eh.shouldShowRemovedTitle, eA, ev.displayTitle, eg, ev.titleAttribute, ef, ev.ariaLabel],
                    ),
                    eN = (0, u.L)(() => {
                        let e = eh.album;
                        if (!e) return;
                        let t = (0, i.jsx)(_.m_, {
                            enabled: ev.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: x.V,
                            children: (0, i.jsx)(m.HL, { variant: 'span', type: 'entity', size: z, className: w().albumTitle, children: e.title }),
                        });
                        return eh.albumLink
                            ? (0, i.jsx)(A.N, {
                                  'aria-label': ev.albumAriaLabel,
                                  className: w().link,
                                  href: eh.albumLink.href,
                                  title: ev.albumTitleAttribute,
                                  onClick: ex,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, i.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, i.jsx)('div', {
                    className: (0, n.$)(w().root, { [w().root_disabled]: !R.isAvailable, [w().root_disliked]: R.isDisliked && !$, [w().root_withSecondaryColor]: U }, O),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(w().metaContainer, j().podcastMetaContainer, ee),
                        children: [
                            e_ &&
                                G &&
                                R.streamProgress &&
                                (0, i.jsx)(p.B, {
                                    className: (0, n.$)(j().progress, et, {
                                        [j().progress_withPreviousInfo]: eh.album || eh.pubDate,
                                        [j().progress_disabled]: !R.isAvailable || R.isDisliked,
                                    }),
                                    id: R.id,
                                    albumId: R.albumId,
                                    streamProgress: R.streamProgress,
                                    durationMs: R.durationMs || 0,
                                    playContextParams: G,
                                    withTimeLeftText: Y,
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(w().titleContainer, V, j().podcastTitleContainer),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, n.$)(w().text, H),
                                        type: 'entity',
                                        size: z,
                                        variant: 'div',
                                        lineClamp: J,
                                        children: [
                                            X,
                                            eC,
                                            eh.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, n.$)(w().text, w().version),
                                                    type: 'entity',
                                                    size: z,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ev.versionTitleAttribute,
                                                    children: ['\xa0', eh.version],
                                                }),
                                        ],
                                    }),
                                    eh.explicitMark &&
                                        (0, i.jsx)(g.N, {
                                            containerClassName: w().explicitMarkContainer,
                                            getDescriptionTexts: R.getDescriptionTexts,
                                            variant: eh.explicitMark,
                                            className: w().explicitMark,
                                            size: W,
                                            trackId: R.id,
                                        }),
                                    Q,
                                ],
                            }),
                            ev.withSecondaryInfo &&
                                (0, i.jsxs)(m.HL, {
                                    type: 'entity',
                                    size: z,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(w().text, j().podcastName, H),
                                    children: [
                                        eN,
                                        null !== ev.dateText &&
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: z,
                                                className: (0, n.$)({
                                                    [j().dateWithName]: !!eh.album,
                                                    [j().soonDate]: eh.isSoonDate,
                                                    [j().dateDisabled]: !R.isAvailable,
                                                    [j().dateDisliked]: R.isDisliked && !$,
                                                }),
                                                children: ev.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        49034: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => d });
            var i = a(53548),
                n = a(8840),
                r = a(4086),
                s = a(41928),
                o = a(39318),
                l = a(26645);
            let d = (e) => {
                var t;
                let { id: a, ref: d, intersectionPropertyId: c = o.N } = e,
                    { config: u, isOnboardingOpened: _, setIsOnboardingOpened: m } = (0, l.w)(),
                    p = (0, i.useRef)(!1),
                    h = (0, n.BL)([{ current: d }], !d),
                    { isIntersecting: v } = null != (t = h[c]) ? t : {},
                    b = (0, s.N)().get(r.U2);
                for (let { id: e, storageKey: t, enabled: n } of ((0, i.useEffect)(() => {
                    if (p.current && v) {
                        let e = u.find((e) => {
                            let { id: t } = e;
                            return t === a;
                        });
                        e && b.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [u, a, v, b, h, d]),
                u)) {
                    let i = b.get(t);
                    if (n) {
                        if (null == _ ? void 0 : _.current) return !1;
                        if (a === e) {
                            if (i) return !1;
                            return ((p.current = !0), m(!0), !0);
                        }
                        if (!i) break;
                    }
                }
                return !1;
            };
        },
        49288: (e) => {
            e.exports = {
                root: 'NotificationReloadPrefetchedRequests_root__90_4R',
                important: 'NotificationReloadPrefetchedRequests_important__ews9K',
                text: 'NotificationReloadPrefetchedRequests_text__oXCop',
                icon: 'NotificationReloadPrefetchedRequests_icon__Pg1_X',
                button: 'NotificationReloadPrefetchedRequests_button__lSehi',
                message: 'NotificationReloadPrefetchedRequests_message__i9Tx6',
            };
        },
        49518: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => _ });
            var i = a(53548),
                n = a(29993);
            let r = null,
                s = [],
                o = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    r.context.AdvManager.render(...t);
                },
                l = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [n, ...o] = a;
                    if (null === r)
                        return void s.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == r ? void 0 : r.cspNonce) ? t : void 0, ...n }, ...o);
                        });
                    r.code.create({ cspNonce: null != (e = r.cspNonce) ? e : void 0, ...n }, ...o);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.reload(...t);
                        });
                    r.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.destroy(...t);
                        });
                    r.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.initialize(...t);
                        });
                    r.code.initialize(...t);
                },
                _ = () => {
                    let [e, t] = (0, i.useState)(null !== r),
                        a = (0, n.c)((a) => {
                            var i, n, o;
                            let { cspNonce: l } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (n = window) ? void 0 : n.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (r = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: l }),
                                t(!0),
                                (o = r),
                                s.forEach((e) => {
                                    e(o);
                                }),
                                (s = []));
                        });
                    return { isLoaded: e, init: a, render: o, create: l, reload: d, destroy: c, initialize: u };
                };
        },
        50227: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        50943: (e) => {
            e.exports = {
                root: 'ProductWithoutRecommendationNotificationInitializer_root__YcanW',
                cover: 'ProductWithoutRecommendationNotificationInitializer_cover__Gr2nS',
                logo: 'ProductWithoutRecommendationNotificationInitializer_logo__xpJYk',
            };
        },
        51231: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            var i = a(5120),
                n = a(31510);
            let r = (e) => {
                let t = (0, n.e)(e);
                return (0, i.wg)(t);
            };
        },
        51976: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => T });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                s = a(29993),
                o = a(79070),
                l = a(12670),
                d = a(72288),
                c = a(52726),
                u = a(63955),
                _ = a(16704),
                m = a(19376),
                p = a(65724),
                h = a(2058),
                v = a(17392),
                b = a(96817),
                x = a(52300),
                f = a(14315),
                g = a(68039),
                A = a(16381),
                C = a.n(A);
            let N = (0, n.PA)((e) => {
                    let {
                            className: t,
                            withShuffle: a,
                            shuffle: n,
                            canMoveBackward: r,
                            canMoveForward: o,
                            onClickNext: l,
                            onClickPrev: d,
                            withRepeat: c,
                            repeatMode: u,
                            playButton: _,
                            isDisabledShuffle: m,
                            isDisabledRepeat: A,
                            onRepeatClick: N,
                            onShuffleClick: y,
                        } = e,
                        { formatMessage: T } = (0, h.A)(),
                        E = (0, s.c)(() => {
                            l();
                        }),
                        S = (0, s.c)(() => {
                            d();
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, p.$)(C().root, t),
                        children: [
                            a &&
                                (0, i.jsx)('div', {
                                    className: C().buttonContainer,
                                    children: (0, i.jsx)(g.u, {
                                        className: C().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        iconSize: 'xs',
                                        isDisabled: m,
                                        shuffle: n,
                                        onClick: y,
                                        'data-test-id': v.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: C().sonataButtons,
                                children: [
                                    (0, i.jsx)(b.$, {
                                        className: C().sonataButton,
                                        variant: 'text',
                                        size: 'm',
                                        radius: 'round',
                                        disabled: !r,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.previous-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'previous', size: 'xxs' }),
                                        onClick: S,
                                        'data-test-id': v.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                    _,
                                    (0, i.jsx)(b.$, {
                                        className: C().sonataButton,
                                        radius: 'round',
                                        size: 'm',
                                        variant: 'text',
                                        disabled: !o,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.next-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'next', size: 'xxs' }),
                                        onClick: E,
                                        'data-test-id': v.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                                ],
                            }),
                            c &&
                                (0, i.jsx)('div', {
                                    className: C().buttonContainer,
                                    children: (0, i.jsx)(f.s, {
                                        className: C().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        isDisabled: A,
                                        iconSize: 'xs',
                                        repeatMode: u,
                                        onClick: N,
                                    }),
                                }),
                        ],
                    });
                }),
                y = { mainAxis: 44 },
                T = (0, n.PA)((e) => {
                    let {
                            disabled: t,
                            isPlaying: a,
                            repeatMode: n,
                            canMoveForward: p,
                            canMoveBackward: h,
                            canShuffle: v,
                            shuffle: b,
                            onClickNext: x,
                            onClickPrev: f,
                            onClickPlayPause: g,
                            canChangeRepeatMode: A,
                            className: T,
                            withShuffle: E,
                            withRepeat: S,
                            onRepeatClick: B,
                            onShuffleClick: I,
                        } = e,
                        { advert: w, freePlayerAccess: P, freeAccess: j, user: k, paymentWidgetModal: L } = (0, d.g)();
                    (0, m.e)();
                    let R = (0, r.useCallback)(
                            () =>
                                (0, i.jsx)(_.D, {
                                    className: C().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: a,
                                    iconClassName: C().playButtonIcon,
                                    onClick: g,
                                }),
                            [a, g],
                        ),
                        O = (0, s.c)((e) => {
                            e || P.hideRestrictionModal();
                        }),
                        D = (0, o.L)(() => {
                            let e = j.isFreeWebUser && k.isAuthorized && !j.limitedFreePlayback ? 'vibe' : 'fullTracks';
                            return P.shownRestrictionModal === l.h.PlayerAuthorization
                                ? (0, i.jsx)(u.Z, { isOpened: !0, placement: 'top', onOpenChange: O, offsetOptions: y, textVariant: e, renderChildren: R })
                                : L.modal.isOpened || P.shownRestrictionModal !== l.h.PlayerSubscription
                                  ? R()
                                  : (0, i.jsx)(c.S, { isOpened: !0, placement: 'top', onOpenChange: O, offsetOptions: y, textVariant: e, renderChildren: R });
                        });
                    return (0, i.jsx)(N, {
                        isDisabledRepeat: !A || t,
                        isDisabledShuffle: !v || t,
                        withShuffle: ((t || v) && !(null == w ? void 0 : w.isAdvertShown)) || !!E,
                        shuffle: b,
                        canMoveBackward: h,
                        canMoveForward: p,
                        onClickNext: x,
                        onClickPrev: f,
                        withRepeat: ((t || A) && !(null == w ? void 0 : w.isAdvertShown)) || !!S,
                        repeatMode: n,
                        className: T,
                        playButton: D,
                        onRepeatClick: B,
                        onShuffleClick: I,
                    });
                });
        },
        52032: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        52150: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(53548).createContext)({ pageAlbumId: void 0 });
        },
        52456: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                n = a(14022),
                r = a(53548),
                s = {
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (s[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useDebouncedToggle = void 0));
                let e = l(352),
                    t = l(810);
                d.useDebouncedToggle = (a) => {
                    let { delay: i, initialState: n, throttleTimeout: r } = a,
                        s = (0, t.useRef)(null),
                        [o, l] = (0, t.useState)(!!n),
                        d = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (l(!n),
                                        s.current && window.clearTimeout(s.current),
                                        (s.current = window.setTimeout(() => {
                                            l(!!n);
                                        }, i)));
                                }, r),
                            [i, n, r],
                        ),
                        c = (0, t.useCallback)(() => {
                            (l(!!n), s.current && window.clearTimeout(s.current));
                        }, [n]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                s.current && window.clearTimeout(s.current);
                            },
                            [],
                        ),
                        { state: o, handleDebouncedToggle: d, reset: c }
                    );
                };
            })(),
                d.__esModule);
            var c = d.useDebouncedToggle;
        },
        52620: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        53158: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => x });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                s = a(29993),
                o = a(631),
                l = a(38147),
                d = a(72288),
                c = a(69704),
                u = a(78101),
                _ = a(8655);
            let m = (e, t) => (t === _.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                p = (e) => e.toString(16).padStart(2, '0');
            var h = a(82712),
                v = a(92847);
            let b = (e) =>
                    (0, h.m)(e) &&
                    (e.type === v.k.PLAYLIST_GRADIENT || e.type === v.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                x = (0, n.PA)((e) => {
                    let { children: t, containerId: a, expectedType: n } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: _, brandedEntityAxeBanner: h },
                            },
                        } = (0, d.g)(),
                        { theme: x } = (0, c.W)(),
                        f = (0, r.useContext)(u.G),
                        [g, A] = (0, r.useState)(null),
                        C = (0, s.c)((e) => {
                            (0, o.f)(e, a, b) && e.data.type === n && A(e.data);
                        });
                    (0, r.useEffect)(
                        () => (
                            window.addEventListener('message', C),
                            () => {
                                window.removeEventListener('message', C);
                            }
                        ),
                        [C],
                    );
                    let N = n === v.k.PLAYLIST_GRADIENT && _.isVisible && _.type !== l.h.EMPTY,
                        y = n === v.k.AXE_GRADIENT && h.isVisible && h.type !== l.h.EMPTY,
                        T = N || y,
                        E = (0, r.useMemo)(() => {
                            if ((null == g ? void 0 : g.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    h.isVisible && h.type !== l.h.EMPTY && x
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  n = parseInt(a.substring(2, 4), 16),
                                                  r = parseInt(a.substring(4, 6), 16),
                                                  s = m(i, t),
                                                  o = m(n, t),
                                                  l = m(r, t);
                                              return '#'.concat(p(s)).concat(p(o)).concat(p(l));
                                          })(g.payload.color, x)
                                        : g.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === g.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': g.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': g.payload.button.textColor,
                                  };
                        }, [null == g ? void 0 : g.payload.color, null == g ? void 0 : g.payload.button, x, h.isVisible, h.type]),
                        S = (0, r.useMemo)(() => (T && null !== g ? { data: { type: g.type, style: E, button: g.payload.button }, isEnabled: T } : f), [g, E, T, f]);
                    return (0, i.jsx)(u.G.Provider, { value: S, children: t });
                });
        },
        54486: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var i,
                n = a(14022),
                r = a(53548),
                s = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            n = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: r } = e,
                                s = (0, n.useRef)(null),
                                [o, l] = (0, n.useState)(!!a),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (l(!a),
                                                s.current && window.clearTimeout(s.current),
                                                (s.current = window.setTimeout(() => {
                                                    l(!!a);
                                                }, t)));
                                        }, r),
                                    [t, a, r],
                                ),
                                c = (0, n.useCallback)(() => {
                                    (l(!!a), s.current && window.clearTimeout(s.current));
                                }, [a]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        s.current && window.clearTimeout(s.current);
                                    },
                                    [],
                                ),
                                { state: o, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (s[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0));
                let e = l(810),
                    t = l(1848),
                    a = l(8612);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: r, elementRef: s } = i,
                        { state: o, handleDebouncedToggle: l } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            (r && l(), null == n || n());
                        }, [r, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(s);
                            if (null === e) return;
                            let a = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return (a.addEventListener('scroll', d, i), () => a.removeEventListener('scroll', d, i));
                        }, [s, d]),
                        o
                    );
                };
            })(),
                d.__esModule);
            var c = d.useScroll;
        },
        55211: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(88800),
                n = a(65724),
                r = a(21284),
                s = a(79070),
                o = a(39267),
                l = a(85925),
                d = a.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: p,
                        coverClassName: h,
                        entityCoverClassName: v,
                        controlClassName: b,
                        fallbackIconSize: x,
                    } = e,
                    f = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === r.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(d().root, d()['root_radius_'.concat(f)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: f,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: x,
                    coverClassName: h,
                    entityCoverClassName: v,
                    controlClassName: b,
                });
            };
        },
        55625: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        56425: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => o, r: () => l });
            var i = a(71774),
                n = a(5120),
                r = a(28870);
            let s = n.gK.model('CustomPlayerThumbItem', { id: n.gK.enumeration(Object.values(i.T)), name: n.gK.string, thumb: r.K }),
                o = {
                    [i.T.DUCK]: () =>
                        a
                            .e(8962)
                            .then(a.t.bind(a, 68962, 17))
                            .then((e) => e.default),
                    [i.T.CAR]: () =>
                        a
                            .e(8765)
                            .then(a.t.bind(a, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [i.T.DUCK, s.create({ id: i.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: i.T.DUCK, width: 50, height: 50 } })],
                        [i.T.CAR, s.create({ id: i.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: i.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        56651: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                s = a(2058),
                o = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(25883);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? a((0, i.jsx)(u.l, { album: r }), { containerId: o.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, _, a, m, t.isAuthorized]);
            };
        },
        58360: (e) => {
            e.exports = {
                root: 'DeeplinkAndOnelinkContainer_root__69SNc',
                button: 'DeeplinkAndOnelinkContainer_button__QzMwG',
                buttonTitle: 'DeeplinkAndOnelinkContainer_buttonTitle__KmdNV',
                buttonIcon: 'DeeplinkAndOnelinkContainer_buttonIcon__U6JJv',
                musicIcon: 'DeeplinkAndOnelinkContainer_musicIcon__jIu2m',
                onelinkIcon: 'DeeplinkAndOnelinkContainer_onelinkIcon__ELZLH',
            };
        },
        59844: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(88800),
                n = a(53548),
                r = a(90334);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l, children: d } = e,
                    c = (0, n.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, a, s, o, l]);
                return (0, i.jsx)(r.r.Provider, { value: c, children: d });
            };
        },
        60757: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var i = a(58217);
            let n = (e) => {
                let { album: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        61166: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n, l: () => i });
            let i = 'yandex_rtb',
                n = 256152;
        },
        63826: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        64014: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => m });
            var i = a(88800),
                n = a(53548),
                r = a(2058),
                s = a(17392),
                o = a(29993),
                l = a(96817),
                d = a(52300),
                c = a(9630),
                u = a(39185);
            let _ = (e) => {
                    var t, a, _;
                    let {
                            className: m,
                            variant: p = 'text',
                            iconSize: h,
                            onClick: v,
                            iconClassName: b,
                            withRipple: x = !1,
                            size: f = 's',
                            forwardRef: g,
                            children: A,
                            color: C,
                            disabled: N = !1,
                            isIconCentered: y = !1,
                        } = e,
                        T = (0, c.e)(),
                        { formatMessage: E } = (0, r.A)(),
                        S = null != (t = null == T ? void 0 : T.state.playerState.speed.value) ? t : 1,
                        B = null != (a = u.f_[S]) ? a : 0,
                        [I, w] = (0, n.useState)(B),
                        P = null != (_ = u.pp[I]) ? _ : 1,
                        j = (0, o.c)(() => {
                            var e;
                            let t = (I + 1) % u.pp.length;
                            (w(t), null == T || T.setSpeed(Number(null != (e = u.pp[t]) ? e : 1)), null == v || v());
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let e =
                                null == T
                                    ? void 0
                                    : T.state.playerState.speed.onChange(() => {
                                          var e;
                                          let t = T.state.playerState.speed.value;
                                          w(null != (e = u.f_[t]) ? e : 0);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [T]),
                        (0, i.jsx)(l.$, {
                            className: m,
                            color: C,
                            withRipple: x,
                            variant: p,
                            size: f,
                            radius: 'xxxl',
                            'aria-label': E({ id: 'interface-actions.speed' }, { speed: P }),
                            onClick: j,
                            icon: (0, i.jsx)(d.I, { size: h, className: b, variant: (0, u.CU)(P, y) }),
                            ref: g,
                            disabled: N,
                            'data-test-id': s.S7.SPEED_BUTTON,
                            children: A,
                        })
                    );
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        64247: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => s });
            var i = a(88800),
                n = a(15077),
                r = a(33719);
            let s = (e) => {
                let { artist: t, closeToast: a } = e;
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        66241: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        66264: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => g });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(88969),
                l = a(17392),
                d = a(68254),
                c = a(52300),
                u = a(29504),
                _ = a(7123),
                m = a(39079),
                p = a(9630),
                h = a(72288),
                v = a(36303),
                b = a(91106),
                x = a(92152),
                f = a.n(x);
            let g = (0, r.PA)((e) => {
                var t, a, r, x, g, A, C, N, y;
                let { className: T, id: E, albumId: S, streamProgress: B, durationMs: I, playContextParams: w, withTimeLeftText: P = !0, isFinishedLabelHidden: j } = e,
                    k = (0, p.e)(),
                    { sonataState: L, album: R } = (0, h.g)(),
                    O = Math.floor(I / 1e3),
                    [D, M] = (0, s.useState)(!1),
                    U = (0, b.$)(),
                    { isPlaying: F, isCurrent: z } = (0, m.D)({ playContextParams: w, entityId: S ? ''.concat(E, ':').concat(S) : E });
                ((0, s.useEffect)(() => {
                    if (!z) return void M(!1);
                    let e =
                        null == k
                            ? void 0
                            : k.state.playerState.status.onChange(() => {
                                  (null == k ? void 0 : k.state.playerState.status.value) === _.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [k, B, z, F]),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == R || null == (e = R.meta) ? void 0 : e.listeningFinished)
                            ? (B.updateEndPositionSec(0), B.updateEverFinished(!0))
                            : (null == R ? void 0 : R.allTracksUnfinished) && B.updateEverFinished(!1);
                    }, [B, null == R ? void 0 : R.allTracksUnfinished, null == R || null == (t = R.meta) ? void 0 : t.listeningFinished]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        (z &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            B &&
                            L.entityMeta.streamProgress.hasEverFinished !== B.hasEverFinished &&
                            B.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            O - ((null == B ? void 0 : B.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    z &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == B || B.updateEverFinished(!0)));
                    }, [
                        z,
                        null == L || null == (a = L.entityMeta) ? void 0 : a.streamProgress,
                        null == L || null == (x = L.entityMeta) || null == (r = x.streamProgress) ? void 0 : r.hasEverFinished,
                        B,
                        B.hasEverFinished,
                        B.endPositionSec,
                        O,
                    ]),
                    (0, s.useEffect)(() => {
                        if (!z) return;
                        let e =
                            null == k
                                ? void 0
                                : k.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = k.state.playerState.progress.value,
                                          a = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && B.updateEndPositionSec(t.position),
                                          z &&
                                              parseInt(''.concat(null == a ? void 0 : a.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == a || a.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [k, B, z, F, D, E, null == L ? void 0 : L.entityMeta]));
                let W = (z && (null == L || null == (A = L.entityMeta) || null == (g = A.streamProgress) ? void 0 : g.endPositionSec)) || B.endPositionSec,
                    K = (0, v.m)(null != W ? W : 0, O),
                    V = (0, s.useMemo)(() => {
                        var e, t, a;
                        if (
                            ((z && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == B ? void 0 : B.hasEverFinished) ||
                                (null == R || null == (a = R.meta) ? void 0 : a.listeningFinished)) &&
                            !j
                        )
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !P }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, i.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, i.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: f().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!W || 0 === W) return;
                        let r = O - W,
                            s = U(r);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !P }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: s,
                                }),
                                r > 1 || j
                                    ? (0, i.jsx)(d.q, {
                                          'aria-valuetext': K,
                                          'aria-busy': z && F,
                                          value: W,
                                          max: O,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, i.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: f().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        O,
                        null == B ? void 0 : B.hasEverFinished,
                        P,
                        U,
                        z,
                        F,
                        null == L || null == (N = L.entityMeta) || null == (C = N.streamProgress) ? void 0 : C.hasEverFinished,
                        null == R || null == (y = R.meta) ? void 0 : y.listeningFinished,
                        j,
                        W,
                        K,
                    ]);
                return (0, i.jsx)('div', { className: (0, n.$)(f().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: V });
            });
        },
        66294: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        67594: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        68039: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => _ });
            var i = a(88800),
                n = a(65724),
                r = a(2058),
                s = a(29993),
                o = a(96817),
                l = a(52300),
                d = a(17392),
                c = a(37013),
                u = a.n(c);
            let _ = (e) => {
                let { isDisabled: t, shuffle: a, className: c, size: _ = 'xxxs', variant: m = 'default', iconSize: p = 'xs', color: h, onClick: v } = e,
                    { formatMessage: b } = (0, r.A)(),
                    x = (0, s.c)((e) => {
                        (null == v || v(), e.stopPropagation());
                    });
                return (0, i.jsx)(o.$, {
                    className: c,
                    radius: 'round',
                    size: _,
                    variant: m,
                    color: h,
                    withRipple: !1,
                    disabled: t,
                    'aria-label': b({ id: 'player-actions.shuffle' }),
                    'aria-pressed': !t && a,
                    'aria-hidden': t,
                    icon: (0, i.jsx)(l.I, {
                        variant: 'shuffle',
                        size: p,
                        className: (0, n.$)(u().shuffleIcon, { [u().shuffleIcon_disabled]: t, [u().shuffleIcon_on]: !t && a, [u().shuffleIcon_off]: !t && !a }),
                    }),
                    onClick: x,
                    'data-test-id': !a || t ? d.Kq.sonata.SHUFFLE_BUTTON : d.Kq.sonata.SHUFFLE_BUTTON_ON,
                });
            };
        },
        69547: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        69704: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => n, W: () => r });
            var i = a(53548);
            let n = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71774: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        72997: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        73856: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
                button: 'BarBelow_button__4l6dO',
                advDisclaimer: 'BarBelow_advDisclaimer__ZbpQU',
                advDisclaimerTrigger: 'BarBelow_advDisclaimerTrigger___O0bh',
                advDisclaimerContent: 'BarBelow_advDisclaimerContent__lKKit',
                advDisclaimerInner: 'BarBelow_advDisclaimerInner__1CyNr',
                advDisclaimerText: 'BarBelow_advDisclaimerText__wJgZZ',
                root_productWithoutRecommendation: 'BarBelow_root_productWithoutRecommendation__aOkOm',
                collectionLink: 'BarBelow_collectionLink__qXt9B',
            };
        },
        74973: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(53548),
                n = a(78101);
            let r = () => (0, i.useContext)(n.G);
        },
        75641: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        77356: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        77455: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                s = a(2058),
                o = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(64247);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? a((0, i.jsx)(u.l, { artist: r }), { containerId: o.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, _, a]);
            };
        },
        77948: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var i = a(88800),
                n = a(53548),
                r = a(90134);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u, children: _ } = e,
                    m = (0, n.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, a, s, o, l, d, c, u],
                    );
                return (0, i.jsx)(r.l.Provider, { value: m, children: _ });
            };
        },
        78101: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(53548).createContext)({ data: null, isEnabled: !1 });
        },
        78275: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i,
                n = a(53548),
                r = {
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var i = (s[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(810);
                o.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: n, setState: i, toggleTrue: r, toggleFalse: s };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        78999: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        79272: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i = a(58390),
                n = a(28166),
                r = a(29993),
                s = a(79070),
                o = a(88626),
                l = a(67174);
            let d = /[^\w\-./:?=&[\]%]/gi,
                c = (e) => {
                    let { browserInfo: t, login: a } = e,
                        c = (0, i.useSearchParams)(),
                        u = (0, s.L)(() => {
                            var e;
                            let a = parseFloat(null != (e = null == t ? void 0 : t.version) ? e : '');
                            return (null == t ? void 0 : t.OSFamily) === o.j.IOS
                                ? a >= 16
                                : (null == t ? void 0 : t.OSFamily) === o.j.ANDROID
                                  ? a >= 7
                                  : null == t
                                    ? void 0
                                    : t.inAppBrowser;
                        });
                    return (0, r.c)((e) =>
                        u && e
                            ? ((e, t, a) => {
                                  let i = e.get('deeplink_url'),
                                      r = e.get('channel'),
                                      s = e.get('tags'),
                                      o = { campaign: 'yamusicweb', channel: null != r ? r : 'musicmain', deep_link_value: t, af_dp: t };
                                  if ((a && (o.login = a), i)) {
                                      let e = ''.concat(n.ov).concat(i);
                                      ((o.deep_link_value = e), (o.af_dp = e), (o.deeplink_url = i));
                                  }
                                  s && (o.pid = s);
                                  let c = Object.keys(o).reduce((e, t) => {
                                          let a = o[t];
                                          if (void 0 !== a) {
                                              let i = ((e) => ('string' == typeof e ? e.replace(d, '') : ''))(a);
                                              i && (e[t] = i);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, l.u)('/', { query: c, options: { host: 'https://music.onelink.me/VkDa' } });
                                  return u;
                              })(c, e, a)
                            : ((e) => {
                                  if (e === o.j.IOS) {
                                      let { href: e } = (0, l.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === o.j.ANDROID) {
                                      let { href: e } = (0, l.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, l.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        79275: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        80527: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s, E9: () => d, KZ: () => l, LB: () => o, RA: () => n, kz: () => r, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                n = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                s = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                o = 'adfox_173998931315812570',
                l = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        81132: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        82204: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => s });
            var i = a(88800),
                n = a(53548),
                r = a(43620);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: s,
                        blockPosX: o,
                        blockPosY: l,
                        objectsCount: d,
                        mainObjectType: c,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    p = (0, n.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: s,
                            blockPosX: o,
                            blockPosY: l,
                            objectsCount: d,
                            mainObjectType: c,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, a, s, o, l, d, c, u, m],
                    );
                return (0, i.jsx)(r.p.Provider, { value: p, children: _ });
            };
        },
        82640: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
                multivibeContainer: 'PinItem_multivibeContainer__M3tj_',
                multivibeCover: 'PinItem_multivibeCover__QykrX',
                multivibeAvatar: 'PinItem_multivibeAvatar__2WWq4',
                multivibeControl: 'PinItem_multivibeControl__uw80u',
            };
        },
        82712: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        83295: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => o });
            var i = a(87819),
                n = {
                    1964: (e) => {
                        e.exports = i;
                    },
                },
                r = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useMergeRefs = void 0));
                var e = (function e(t) {
                    var a = r[t];
                    if (void 0 !== a) return a.exports;
                    var i = (r[t] = { exports: {} });
                    return (n[t](i, i.exports, e), i.exports);
                })(1964);
                Object.defineProperty(s, 'useMergeRefs', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                s.__esModule);
            var o = s.useMergeRefs;
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        86535: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(64284),
                n = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86961: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsDesktop_root__ZCIGk',
                sonataButtons: 'SonataFullscreenControlsDesktop_sonataButtons__9y89g',
                sonataButton: 'SonataFullscreenControlsDesktop_sonataButton__69FFc',
                sonataPlayButton: 'SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp',
                playPauseButtonIcon: 'SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX',
                // for PulseSync: BEGIN yellow fullscreen play icon CSS class binding
                playPauseButtonIcon_withYellowPlayButton: 'SonataFullscreenControlsDesktop_playPauseButtonIcon_withYellowPlayButton__osz8_',
                // for PulseSync: END yellow fullscreen play icon CSS class binding
                buttonContainer: 'SonataFullscreenControlsDesktop_buttonContainer__SpXWc',
            };
        },
        87724: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        87762: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => r });
            var i = a(53548),
                n = a(52150);
            function r() {
                return (0, i.useContext)(n.H);
            }
        },
        88626: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        89057: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        90224: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => h });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                s = a(53548),
                o = a(2058),
                l = a(17392),
                d = a(52300),
                c = a(62837),
                u = a(72288),
                _ = a(94398),
                m = a(17332),
                p = a.n(m);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: r, containerClassName: m, variant: h, iconVariant: iconOverride, size: v = 'xxxs', ...b } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: f },
                    } = (0, u.g)(),
                    [g, A] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    a && a().then(A);
                }, [a, r]);
                let {
                    iconVariant: C,
                    descriptionText: N,
                    isTooltipEnabled: y,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: a, descriptionTexts: i, isMobile: n } = e,
                        r = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(a),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !n,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: g, isMobile: f }, x);
                return (0, i.jsx)(_.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, i.jsx)('span', {
                        className: m,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === c.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, n.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': T,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...b,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(d.I, {
                            className: (0, n.$)(p().explicitMark, t),
                            'aria-label': T,
                            variant: iconOverride ? d.resolveIcon(iconOverride)?.variant ?? 'exclamation' : C,
                            size: iconOverride ? d.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...b,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        91106: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(53548),
                n = a(2058);
            let r = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, i.useCallback)(
                    function (t) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            i = Math.floor(t / 60),
                            n = function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.minutes-left' }, { minutes: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.seconds-left' }, { seconds: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            })(Math.floor(t), a);
                        if (i < 60) return n(i, a);
                        let r = Math.floor(i / 60),
                            s = i % 60,
                            o = (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return a ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(r, a);
                        return s > 0 ? ''.concat(o, ' ').concat(n(s)) : o;
                    },
                    [e],
                );
            };
        },
        91129: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        91641: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var i = a(88800),
                n = a(65724),
                r = a(53548),
                s = a(17392),
                o = a(29504),
                l = a(6259),
                // for PulseSync: BEGIN React binding for player timestamp preferences
                d = a.n(l),
                pulseSyncTimestampReact = r;
                // for PulseSync: END React binding for player timestamp preferences
            let c = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...c } = e,
                        // for PulseSync: BEGIN read and subscribe to the always-show-timestamps preference
                        u = 'start' === a ? s.Kq.changeTimecode.TIMECODE_TIME_START : s.Kq.changeTimecode.TIMECODE_TIME_END,
                        [pulseSyncShowTimestamps, setPulseSyncShowTimestamps] = (0, pulseSyncTimestampReact.useState)(() =>
                            Boolean(window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.()),
                        );
                    (0, pulseSyncTimestampReact.useEffect)(() => {
                        const unsubscribe = window.musicDesktop?.pulsesync.settings.onChange?.((key, value) => {
                            if (key === 'modSettings.playerBarEnhancement.alwaysShowTimestamps') setPulseSyncShowTimestamps(Boolean(value));
                        });
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                        // for PulseSync: END read and subscribe to the always-show-timestamps preference
                    return (0, i.jsx)(o.HL, {
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(d().root, d()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...c,
                        // for PulseSync: BEGIN keep player timestamps visible when requested
                        style: pulseSyncShowTimestamps ? { ...c.style, opacity: 1 } : c.style,
                        // for PulseSync: END keep player timestamps visible when requested
                        'data-test-id': u,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        91959: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(58217);
            let n = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92152: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        92644: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(35412);
            let n = (e) => ({
                // for PulseSync: BEGIN ignore per-track colors when disabled in mod settings
                '--player-average-color-background': ((e) => {
                    if (!e) return;
                    let { h: t, s: a } = (0, i.g8)(e);
                    return 'hsl('.concat(t, ', ').concat(a, '%, 20%)');
                })(null == e || (window.DISABLE_PER_TRACK_COLORS?.() ?? false) ? void 0 : e.averageColor),
                // for PulseSync: END ignore per-track colors when disabled in mod settings
            });
        },
        92847: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        92867: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => d });
            var i = a(53548),
                n = a.t(i, 2),
                r = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useIsomorphicEffect = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var i = (s[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(810);
                o.useIsomorphicEffect = 'undefined' != typeof document ? e.useLayoutEffect : e.useEffect;
            })(),
                o.__esModule);
            var l = o.useIsomorphicEffect;
            let d = (e) => {
                let [t, a] = (0, i.useState)(!1);
                return (
                    l(() => {
                        let t = window.matchMedia(e),
                            i = () => a(t.matches);
                        return (
                            i(),
                            t.addEventListener('change', i),
                            () => {
                                t.removeEventListener('change', i);
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
        92966: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => h });
            var i = a(88800),
                n = a(2058),
                r = a(29993),
                s = a(87762),
                o = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(96706),
                _ = a(53548),
                m = a(79390),
                p = a(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: a,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, n.A)(),
                    { notify: b } = (0, l.l)(),
                    x = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [a, s] = (0, _.useState)(!1),
                            { formatMessage: h } = (0, n.A)();
                        return (0, r.c)(async (n) => {
                            let { album: r, withLink: l = !0, withNotification: d = !0 } = n;
                            if (a) return;
                            let _ = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            s(!0);
                            let v = await r.toggleLike();
                            if ((s(!1), !d)) return;
                            let b = t.modal.isOpened;
                            v === m.f.OK
                                ? e((0, i.jsx)(p.T, { withLink: l, album: _ }), { containerId: b ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, i.jsx)(c.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: b ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: f } = (0, s.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void a.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void b((0, i.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        93512: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(51231);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n, P: () => r });
            var i = a(53548);
            let n = (0, i.createContext)(null),
                r = () => (0, i.useContext)(n);
        },
        94398: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => c });
            var i = a(88800),
                n = a(17392),
                r = a(17610),
                s = a(29504),
                o = a(37438),
                l = a.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: a, title: o, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(r.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95547: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        95850: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                s = a(58390),
                o = a(38147),
                l = a(49518),
                d = a(65523),
                c = a(72288),
                u = a(8655),
                _ = a(69704);
            let m = (0, n.PA)((e) => {
                let { className: t, ownerId: a, containerId: n, params: m, onLoad: p, onRender: h, onNoAds: v, onError: b } = e,
                    { user: x } = (0, c.g)(),
                    f = (0, s.usePathname)(),
                    g = (0, s.useSearchParams)(),
                    { create: A, destroy: C, initialize: N } = (0, l.s)(),
                    { theme: y } = (0, _.W)(),
                    T = (0, d.U)(),
                    E = (0, r.useRef)(!0),
                    S = { ...m };
                return (
                    (S.puid1 = x.advertRole),
                    (0, r.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: n,
                            params: S,
                            insertionCodeParams: { darkTheme: y === u.S.Dark, additionalClasses: y ? [y] : [] },
                            onClose: () => {
                                T.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((T.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == p || p(o.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == p || p(o.h.DIRECT);
                                    return;
                                }
                                null == p || p(o.h.CREATIVE);
                            },
                            onRender: () => {
                                (T.log('[AdvertBanner] Render'), null == h || h());
                            },
                            onStub: () => {
                                (T.log('[AdvertBanner] Stub'), null == v || v());
                            },
                            onError: (e) => {
                                (T.log('[AdvertBanner] Error', { error: e }), null == b || b());
                            },
                        });
                    }, []),
                    (0, r.useEffect)(() => {
                        if (E.current) {
                            E.current = !1;
                            return;
                        }
                        (T.log('[AdvertBanner] Destroy'), C(n), T.log('[AdvertBanner] Initialize'), N(n));
                    }, [f, g, n, C, N, T]),
                    (0, i.jsx)('div', { id: n, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        96295: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => o });
            var i = a(88800),
                n = a(84961),
                r = a(42729),
                s = a(5048);
            let o = (0, n.PA)((e) => {
                let { album: t, closeToast: a, withLink: n } = e,
                    o = (0, s.b)(t.type);
                return (0, i.jsx)(r.O, {
                    closeToast: a,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        97361: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            var i = a(2058),
                n = a(29831);
            let r = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, n.j)(e, t);
            };
        },
        97572: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        98675: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
    },
]);
