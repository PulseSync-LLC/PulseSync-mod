(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5396],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => i, W: () => s });
            var r = a(55178);
            let i = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, r.useContext)(i);
        },
        180: (e, t, a) => {
            'use strict';
            a.d(t, { WithBetaUser: () => T });
            var r = a(32290),
                i = a(96103),
                s = a(63618),
                n = a(55178),
                o = a(39407),
                l = a(21732),
                u = a(63423),
                d = a(7276),
                c = a(74196),
                h = a(71926),
                v = a(11517),
                y = a(14177),
                p = a(70204),
                m = a(34186),
                f = a(57197),
                g = a(3796),
                b = a(27120),
                E = a(57594),
                S = a(82273),
                _ = a(94218),
                A = a(62672),
                P = a.n(A);
            let k = (0, i.PA)((e) => {
                let { withoutExperiment: t = !1, showLoginButton: i = !1, showUserProfile: A = !1, withOffer: k = !1 } = e,
                    I = (0, m.N)(),
                    {
                        settings: { isMobile: C },
                    } = (0, E.g)(),
                    T = (0, f.j)(),
                    x = I.get(p.tw),
                    R = (0, S._)(x.oldWebHost),
                    w = (0, n.useMemo)(() => (C ? a(91030).A.src : a(51402).A.src), [C]),
                    D = (0, n.useCallback)(() => {
                        let e = 'https://'.concat(R, '/pay');
                        window.open(e, '_blank', 'noreferrer noopener');
                    }, [R]);
                (0, g.J)(!0);
                let N = (0, n.useMemo)(
                        () =>
                            k
                                ? (0, r.jsx)(h.DZ, {
                                      variant: 'h1',
                                      size: 'xl',
                                      weight: 'bold',
                                      className: P().text,
                                      children: (0, r.jsx)(o.A, { id: 'welcome-page.offer-header' }),
                                  })
                                : t
                                  ? (0, r.jsx)(h.DZ, {
                                        variant: 'h1',
                                        size: 'xxl',
                                        weight: 'bold',
                                        className: P().text,
                                        children: (0, r.jsx)(o.A, { id: 'welcome-page.beta-header', values: { br: (0, r.jsx)('br', {}) } }),
                                    })
                                  : (0, r.jsx)(h.DZ, {
                                        variant: 'h1',
                                        size: 'xxl',
                                        weight: 'bold',
                                        className: P().text,
                                        children: (0, r.jsx)(o.A, { id: 'welcome-page.not-auth-header', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                        [k, t],
                    ),
                    O = (0, n.useMemo)(
                        () =>
                            t
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(h.HL, {
                                              variant: 'span',
                                              type: 'text',
                                              size: 'l',
                                              className: P().text,
                                              children: (0, r.jsx)(o.A, { id: 'welcome-page.beta-text-short' }),
                                          }),
                                          (0, r.jsx)(c.q, {
                                              children: (0, r.jsx)(h.DZ, { variant: 'h2', children: (0, r.jsx)(o.A, { id: 'welcome-page.beta-text-short' }) }),
                                          }),
                                      ],
                                  })
                                : k
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(h.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                className: P().offerText,
                                                children: (0, r.jsx)(o.A, { id: 'welcome-page.offer-text' }),
                                            }),
                                            (0, r.jsx)(c.q, {
                                                children: (0, r.jsx)(h.DZ, { variant: 'h2', children: (0, r.jsx)(o.A, { id: 'welcome-page.offer-text' }) }),
                                            }),
                                        ],
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(h.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                className: P().text,
                                                children: (0, r.jsx)(o.A, { id: 'welcome-page.not-auth-text', values: { br: (0, r.jsx)('br', {}) } }),
                                            }),
                                            (0, r.jsx)(c.q, {
                                                children: (0, r.jsx)(h.DZ, {
                                                    variant: 'h2',
                                                    children: (0, r.jsx)(o.A, { id: 'welcome-page.not-auth-text', values: { br: (0, r.jsx)('br', {}) } }),
                                                }),
                                            }),
                                        ],
                                    }),
                        [k, t],
                    ),
                    M = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, r.jsx)(_.H, { size: 'm', className: P().loginButton })
                                : k
                                  ? (0, r.jsx)(u.$, {
                                        onClick: D,
                                        className: (0, s.$)(P().offerButton, P().offerButton_important),
                                        role: 'link',
                                        color: 'plus',
                                        size: 'l',
                                        radius: 'm',
                                        withRipple: !1,
                                        children: (0, r.jsx)(o.A, { id: 'payment.offer-button' }),
                                    })
                                  : void 0,
                        [D, i, k],
                    );
                return (
                    (0, b.N)(!0),
                    (0, r.jsxs)('div', {
                        className: (0, s.$)(P().root),
                        'data-test-id': l.Xk.welcome.WELCOME_PAGE,
                        children: [
                            (0, r.jsx)(v.TitleBar, { withSecondaryColor: !0 }),
                            (0, r.jsx)('div', { className: P().logoContainer, children: (0, r.jsx)(d.gu, { alignIcon: 'center', lang: T, className: P().logo }) }),
                            N,
                            O,
                            M,
                            (0, r.jsx)('img', { className: P().image, src: w }),
                            A &&
                                (0, r.jsx)(y.F, {
                                    className: P().user,
                                    withMeta: !C,
                                    variant: C ? 'mobile' : 'desktop',
                                    usernameClassName: (0, s.$)(P().username, P().important),
                                }),
                        ],
                    })
                );
            });
            var I = a(7697),
                C = a(79406);
            let T = (0, i.PA)((e) => {
                let { children: t } = e,
                    { user: a, experiments: i } = (0, E.g)(),
                    { hasFreeUserAccess: s } = (0, I.X)();
                if ((a.isAuthorized, a.isAuthorized))
                    return i.checkExperiment(C.z.WebNext, 'on')
                        ? a.hasPlus || s
                            ? t
                            : (0, r.jsx)(k, { withOffer: !0, showUserProfile: !0 })
                        : (0, r.jsx)(k, { withoutExperiment: !0, showUserProfile: !0 });
                return (0, r.jsx)(k, { showLoginButton: !0 });
            });
        },
        365: (e) => {
            e.exports = {
                root: 'TitleBar_root__QjdOZ',
                button: 'TitleBar_button__9MptL',
                button_withSecondaryColor: 'TitleBar_button_withSecondaryColor__oIkuo',
                icon: 'TitleBar_icon__8Wji9',
                icon_withSecondaryColor: 'TitleBar_icon_withSecondaryColor__vuw6G',
                closeButton: 'TitleBar_closeButton__Epxh7',
                pulseText: 'TitleBar_pulseText__FhYv',
            };
        },
        1176: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => r });
            let r = (0, a(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        1204: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var r = (function (e) {
                return (e.PLAY_VIBE = 'play-vibe'), (e.SHOW_MULTIVIBE_PROMO = 'show-multivibe-promo'), (e.SHOW_MULTIVIBE_INVITE = 'show-multivibe-invite'), e;
            })({});
        },
        1918: (e) => {
            e.exports = {
                root: 'UgcUploadCenterNotification_root__K_U0z',
                title: 'UgcUploadCenterNotification_title__s3yTL',
                link: 'UgcUploadCenterNotification_link__NPz6r',
            };
        },
        2527: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => r });
            var r = (function (e) {
                return (e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e;
            })({});
        },
        3796: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var r = a(21916),
                i = a(55178);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [a, s] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, a, t]);
            };
        },
        5285: (e, t, a) => {
            'use strict';
            a.d(t, { UrlInitializer: () => n });
            var r = a(96103),
                i = a(21916),
                s = a(57594);
            let n = (0, r.PA)((e) => {
                let { host: t } = e,
                    { location: a } = (0, s.g)(),
                    r = (0, i.usePathname)(),
                    n = (0, i.useSearchParams)().toString(),
                    o = window.location.host,
                    l = t || o,
                    u = 'https://'.concat(l),
                    d = 'https://'
                        .concat(l)
                        .concat(r)
                        .concat(n ? '?' : '')
                        .concat(n);
                (u = l),
                    (d = ''
                        .concat(l)
                        .concat(r)
                        .concat(n ? '?' : '')
                        .concat(n)),
                    a.setPathname(r),
                    a.setSearchParams(n),
                    a.setHost(l),
                    a.setTld(
                        ((e) => {
                            let t = null == e ? void 0 : e.split(':')[0];
                            return ((null == t ? void 0 : t.includes('.')) && (null == t ? void 0 : t.split('.').pop())) || '';
                        })(l) || 'ru',
                    ),
                    a.setOrigin(u),
                    a.setHref(d);
            });
        },
        5506: (e, t, a) => {
            'use strict';
            a.d(t, { DeeplinkInitializer: () => m });
            var r = a(96103),
                i = a(21916),
                s = a(55178),
                n = a(57594),
                o = a(1204),
                l = a(97201),
                u = a(91027),
                d = a(71670),
                c = a(44989),
                h = a(48922),
                v = a(7697),
                y = a(43564);
            let p = [l.K.DEEPLINK, l.K.SEEDS, l.K.STATION_ID, l.K.OPEN_PLAYER, l.K.SCREEN],
                m = (0, r.PA)(
                    () => (
                        (() => {
                            let { fullscreenPlayer: e, sonataState: t, user: a, location: r } = (0, n.g)(),
                                u = (0, i.useSearchParams)(),
                                m = (0, d.X)(),
                                f = u.get(l.K.SEEDS),
                                g = u.get(l.K.STATION_ID),
                                { isFreemium: b } = (0, v.X)(),
                                { state: E, toggleTrue: S } = (0, c.e)(!1),
                                _ = (0, s.useMemo)(() => {
                                    let e = f ? f.split(',') : [];
                                    return g && e.unshift(g), e;
                                }, [f, g]),
                                { togglePlay: A } = (0, y.B)({ seeds: _, pageIdForFrom: h._Q.RADIO, blockIdForFrom: _.join('_') });
                            (0, s.useEffect)(() => {
                                if (E) {
                                    let e = new URL(window.location.href);
                                    p.forEach((t) => e.searchParams.delete(t)), m(e.toString()), r.setHref(window.location.href);
                                }
                            }, [r, m, E, r.href]),
                                (0, s.useEffect)(() => {
                                    if (u.get(l.K.DEEPLINK) === o.v.PLAY_VIBE) {
                                        if (!a.isAuthorized || b) return void S();
                                        t.setShouldApplyYnisonState(!1), A(), 'true' === u.get(l.K.OPEN_PLAYER) && e.modal.open(), S();
                                    }
                                    return () => {
                                        t.setShouldApplyYnisonState(!0);
                                    };
                                }, [e.modal, b, u, S, t, A, a.isAuthorized]);
                        })(),
                        (() => {
                            let { multivibe: e, user: t } = (0, n.g)(),
                                a = (0, i.useSearchParams)(),
                                r = (() => {
                                    let { location: e } = (0, n.g)(),
                                        t = (0, d.X)();
                                    return (0, u.c)((a) => {
                                        let r = new URL(window.location.href);
                                        a.forEach((e) => r.searchParams.delete(e));
                                        let i = r.toString();
                                        t(i), e.setHref(i);
                                    });
                                })(),
                                { isEnabled: c, inviteModal: h, promoModal: v } = e,
                                y = a.get(l.K.DEEPLINK),
                                p = a.get(l.K.MULTIVIBE_INVITE_ROOM_ID);
                            (0, s.useEffect)(() => {
                                if (c && t.hasPlus) {
                                    if (y === o.v.SHOW_MULTIVIBE_INVITE && p) {
                                        h.open(), r([l.K.DEEPLINK, l.K.MULTIVIBE_INVITE_ROOM_ID]);
                                        return;
                                    }
                                    y === o.v.SHOW_MULTIVIBE_PROMO && (v.open(), r([l.K.DEEPLINK]));
                                }
                            }, [y, p, c, t.hasPlus, h, v, r]);
                        })(),
                        null
                    ),
                );
        },
        5537: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var r = a(57594),
                i = a(79406);
            let s = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = n.getExperiment(i.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6752: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => i });
            var r = {};
            Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule;
            var i = r.useReturnValue;
        },
        7027: (e, t, a) => {
            'use strict';
            a.d(t, { PrefetchDataProvider: () => c });
            var r = a(96103),
                i = a(55178),
                s = a(70204),
                n = a(34186),
                o = a(57594),
                l = a(49399),
                u = a(18847);
            let d = async (e) => {
                    let { experimentsData: t, userAccountData: a, userId: r, store: i, withPins: s = !0 } = e,
                        { user: n, experiments: o, pinsCollection: l, disclaimersDictionary: u } = i;
                    if ((await n.getAbout(a), n.puid && r.setPassportUid(n.puid), await Promise.allSettled([o.getData(t), u.getDisclaimers()]), n.isAuthorized)) {
                        let e = [n.getSettings(), i.library.getData()];
                        s && e.push(l.getData()), await Promise.allSettled(e);
                    }
                },
                c = (0, r.PA)((e) => {
                    let { children: t, ...a } = e,
                        r = (0, o.g)(),
                        c = (0, n.N)().get(s.WA);
                    return (
                        (0, u.l)(r.settings),
                        r.user.puid && c.setPassportUid(r.user.puid),
                        r.user.account.loadingState === l.G.IDLE && (0, i.use)(d({ store: r, userId: c, ...a })),
                        t
                    );
                });
        },
        7697: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => s });
            var r = a(5537),
                i = a(57594);
            let s = () => {
                let { user: e } = (0, i.g)(),
                    t = (0, r.N)(),
                    a = ((e) => {
                        let { hasUserPlus: t } = e,
                            a = !t,
                            r = !t && !1;
                        return { isPassToProduct: a, isFreemium: r, hasFreeUserAccess: a || r };
                    })({ hasUserPlus: e.hasPlus }),
                    s = a.isFreemium || t;
                return {
                    ...a,
                    withFreemiumCloseListening: t,
                    withPlusPopoverWeb: s,
                    withPlusPopoverIncludingPassToProduct: a.hasFreeUserAccess || t,
                    withPlusPopoverSearchVibeCard: t,
                };
            };
        },
        8152: (e, t, a) => {
            'use strict';
            a.d(t, { AuthorizationChecker: () => u }), a(32290);
            var r = a(96103),
                i = a(21916),
                s = a(55178);
            a(80451);
            var n = a(70204),
                o = a(34186),
                l = a(57594);
            let u = (0, r.PA)((e) => {
                var t;
                let { nonce: a } = e,
                    r = (0, s.useContext)(i.ServerInsertedHTMLContext),
                    u = (0, o.N)(),
                    {
                        user: d,
                        location: { pathname: c, searchParams: h, host: v, tld: y },
                    } = (0, l.g)(),
                    p = (0, s.useCallback)(
                        (e) => {
                            window.location.href = e;
                        },
                        [r, a],
                    ),
                    m = u.get(n.QG);
                m.setRedirectUrl({ pathname: c, searchParams: h, host: v, tld: y }),
                    (0, s.useEffect)(() => {
                        m.disconnect(), m.observe(!1);
                    }, [m, d.isAuthorized, d.puid]),
                    null == (t = m.setTokenOwnerLogin) || t.call(m, d.account.data.login),
                    m.setRedirectHandler(p),
                    m.check();
            });
        },
        8623: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        8960: (e) => {
            e.exports = { root: 'BrowserUpdateNotification_root__IN495', important: 'BrowserUpdateNotification_important__6k4Gb' };
        },
        9152: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            var r = a(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Album;
            }
        },
        10790: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s, q: () => i });
            let r = new Set(),
                i = (e) => (
                    r.add(e),
                    () => {
                        r.delete(e);
                    }
                ),
                s = () => {
                    r.forEach((e) => {
                        e();
                    });
                };
        },
        11517: (e, t, a) => {
            'use strict';
            a.d(t, { TitleBar: () => v });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(57594),
                u = a(15808),
                d = a(365),
                c = a.n(d);
            let h = (e) => {
                    let { children: t, className: a, onClick: s, ariaLabel: n, withSecondaryColor: o } = e;
                    return (0, r.jsx)('button', {
                        type: 'button',
                        className: (0, i.$)(c().button, { [c().button_withSecondaryColor]: o }, a),
                        onClick: s,
                        'aria-label': n,
                        children: t,
                    });
                },
                v = (0, s.PA)((e) => {
                    let { withSecondaryColor: t } = e,
                        { settings: a } = (0, l.g)(),
                        s = a.isWindowsApplication || a.isLinuxApplication,
                        { formatMessage: d } = (0, o.A)(),
                        v = (0, n.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(u.E.WINDOW_MINIMIZE);
                            })();
                        }, []),
                        y = (0, n.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(u.E.WINDOW_MAXIMIZE);
                            })();
                        }, []),
                        p = (0, n.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(u.E.WINDOW_CLOSE);
                            })();
                        }, []),
                        onMiniPlayerToggle = (0, n.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(u.E.TOGGLE_MINIPLAYER);
                        }, []),
                        onPulseSyncSettingsOpen = (0, n.useCallback)(() => {
                            window.dispatchEvent(new CustomEvent('pulsesync-open-settings'));
                        }, []),
                        E = (0, n.useCallback)((e) => {
                            if (e.target.closest('button')) return;
                            var t;
                            null == (t = window.desktopEvents) || t.send(u.E.WINDOW_MAXIMIZE);
                        }, []),
                        [w, N] = (0, n.useState)(window.HIDE_PULSESYNC_VERSION_IN_TITLEBAR?.() ?? !1);
                    (0, n.useEffect)(() => {
                        let e = (e, t, a) => {
                                'modSettings.window.hidePulseSyncVersionInTitleBar' === t && N(a);
                            },
                            t = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', e);
                        return () => {
                            'function' == typeof t && t();
                        };
                    }, []);
                    return (0, r.jsx)('div', {
                        className: c().root,
                        onDoubleClick: E,
                        children:
                            s &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    !w && (0, r.jsx)('span', { className: c().pulseText, children: 'PulseSync '.concat(window.PULSE_VERSION) }),
                                    (0, r.jsx)(h, {
                                        onClick: onPulseSyncSettingsOpen,
                                        ariaLabel: 'Настройки мода',
                                        withSecondaryColor: t,
                                        children: (0, r.jsxs)('svg', {
                                            width: '14',
                                            height: '14',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                            children: [
                                                (0, r.jsx)('path', {
                                                    d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.09a2 2 0 0 1 1 1.74v.5a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2.25',
                                                    strokeLinecap: 'round',
                                                    strokeLinejoin: 'round',
                                                }),
                                                (0, r.jsx)('circle', { cx: '12', cy: '12', r: '3', stroke: 'currentColor', strokeWidth: '2.25' }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(h, {
                                        onClick: onMiniPlayerToggle,
                                        ariaLabel: 'miniplayer',
                                        withSecondaryColor: t,
                                        children: (0, r.jsxs)('svg', {
                                            width: '12',
                                            height: '12',
                                            viewBox: '0 0 12 12',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                            children: [
                                                (0, r.jsx)('path', {
                                                    d: 'M1.49805 11C1.42969 11 1.36458 10.987 1.30273 10.961C1.24414 10.935 1.19206 10.8992 1.14648 10.8537C1.10091 10.8081 1.0651 10.7561 1.03906 10.6976C1.01302 10.6358 1 10.5707 1 10.5024C1 10.4341 1.01302 10.3707 1.03906 10.3122C1.0651 10.2504 1.10091 10.1967 1.14648 10.1512C1.19206 10.1024 1.24414 10.065 1.30273 10.039C1.36458 10.013 1.42969 10 1.49805 10H10.502C10.5703 10 10.6338 10.013 10.6924 10.039C10.7542 10.065 10.8079 10.1024 10.8535 10.1512C10.8991 10.1967 10.9349 10.2504 10.9609 10.3122C10.987 10.3707 11 10.4341 11 10.5024C11 10.5707 10.987 10.6358 10.9609 10.6976C10.9349 10.7561 10.8991 10.8081 10.8535 10.8537C10.8079 10.8992 10.7542 10.935 10.6924 10.961C10.6338 10.987 10.5703 11 10.502 11H1.49805Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, r.jsx)('path', {
                                                    d: 'M1.24902 2C1.21484 2 1.18229 1.98699 1.15137 1.96098C1.12207 1.93496 1.09603 1.89919 1.07324 1.85366C1.05046 1.80813 1.03255 1.7561 1.01953 1.69756C1.00651 1.63577 1 1.57073 1 1.50244C1 1.43415 1.00651 1.37073 1.01953 1.31219C1.03255 1.25041 1.05046 1.19675 1.07324 1.15122C1.09603 1.10244 1.12207 1.06504 1.15137 1.03902C1.18229 1.01301 1.21484 1 1.24902 1H5.75098C5.78516 1 5.81689 1.01301 5.84619 1.03902C5.87711 1.06504 5.90397 1.10244 5.92676 1.15122C5.94955 1.19675 5.96745 1.25041 5.98047 1.31219C5.99349 1.37073 6 1.43415 6 1.50244C6 1.57073 5.99349 1.63577 5.98047 1.69756C5.96745 1.7561 5.94955 1.80813 5.92676 1.85366C5.90397 1.89919 5.87711 1.93496 5.84619 1.96098C5.81689 1.98699 5.78516 2 5.75098 2H1.24902Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, r.jsx)('path', {
                                                    d: 'M10 6.24902C10 6.21484 10.013 6.18229 10.039 6.15137C10.065 6.12207 10.1008 6.09603 10.1463 6.07324C10.1919 6.05046 10.2439 6.03255 10.3024 6.01953C10.3642 6.00651 10.4293 6 10.4976 6C10.5659 6 10.6293 6.00651 10.6878 6.01953C10.7496 6.03255 10.8033 6.05046 10.8488 6.07324C10.8976 6.09603 10.935 6.12207 10.961 6.15137C10.987 6.18229 11 6.21484 11 6.24902L11 10.751C11 10.7852 10.987 10.8169 10.961 10.8462C10.935 10.8771 10.8976 10.904 10.8488 10.9268C10.8033 10.9495 10.7496 10.9675 10.6878 10.9805C10.6293 10.9935 10.5659 11 10.4976 11C10.4293 11 10.3642 10.9935 10.3024 10.9805C10.2439 10.9675 10.1919 10.9495 10.1463 10.9268C10.1008 10.904 10.065 10.8771 10.039 10.8462C10.013 10.8169 10 10.7852 10 10.751L10 6.24902Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, r.jsx)('path', {
                                                    d: 'M9.85698 1.4045C9.89078 1.37069 9.93219 1.34771 9.98121 1.33556C10.0286 1.32502 10.0797 1.3246 10.1345 1.33432C10.1893 1.34404 10.2439 1.3632 10.2982 1.3918C10.3549 1.4227 10.4074 1.46234 10.4558 1.51072C10.5042 1.55911 10.5427 1.61048 10.5713 1.66483C10.6022 1.72148 10.6225 1.77721 10.6322 1.832C10.6442 1.8891 10.645 1.94135 10.6344 1.98876C10.6223 2.03778 10.5993 2.07919 10.5655 2.11299L6.11287 6.56559C6.07907 6.5994 6.03846 6.62158 5.99105 6.63212C5.94203 6.64427 5.88898 6.64434 5.83188 6.63231C5.77708 6.62259 5.72136 6.60228 5.6647 6.57139C5.61035 6.54279 5.55899 6.5043 5.5106 6.45591C5.46222 6.40753 5.42257 6.35501 5.39167 6.29835C5.36308 6.244 5.34392 6.18943 5.3342 6.13464C5.32448 6.07984 5.3257 6.02794 5.33785 5.97892C5.3484 5.93151 5.37057 5.8909 5.40438 5.8571L9.85698 1.4045Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, r.jsx)('path', {
                                                    d: 'M10 1.19922C10 1.17188 10.013 1.14583 10.039 1.12109C10.065 1.09766 10.1008 1.07682 10.1463 1.05859C10.1919 1.04036 10.2439 1.02604 10.3024 1.01562C10.3642 1.00521 10.4293 1 10.4976 1C10.5659 1 10.6293 1.00521 10.6878 1.01562C10.7496 1.02604 10.8033 1.04036 10.8488 1.05859C10.8976 1.07682 10.935 1.09766 10.961 1.12109C10.987 1.14583 11 1.17188 11 1.19922L11 4.80078C11 4.82812 10.987 4.85352 10.961 4.87695C10.935 4.90169 10.8976 4.92318 10.8488 4.94141C10.8033 4.95964 10.7496 4.97396 10.6878 4.98438C10.6293 4.99479 10.5659 5 10.4976 5C10.4293 5 10.3642 4.99479 10.3024 4.98438C10.2439 4.97396 10.1919 4.95964 10.1463 4.94141C10.1008 4.92318 10.065 4.90169 10.039 4.87695C10.013 4.85352 10 4.82812 10 4.80078L10 1.19922Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, r.jsx)('path', {
                                                    d: 'M10.8008 1C10.8281 1 10.8542 1.01301 10.8789 1.03902C10.9023 1.06504 10.9232 1.10081 10.9414 1.14634C10.9596 1.19187 10.974 1.2439 10.9844 1.30244C10.9948 1.36423 11 1.42927 11 1.49756C11 1.56585 10.9948 1.62927 10.9844 1.68781C10.974 1.74959 10.9596 1.80325 10.9414 1.84878C10.9232 1.89756 10.9023 1.93496 10.8789 1.96098C10.8542 1.98699 10.8281 2 10.8008 2L7.19922 2C7.17188 2 7.14648 1.98699 7.12305 1.96098C7.09831 1.93496 7.07682 1.89756 7.05859 1.84878C7.04036 1.80325 7.02604 1.74959 7.01562 1.68781C7.00521 1.62927 7 1.56585 7 1.49756C7 1.42927 7.00521 1.36423 7.01562 1.30244C7.02604 1.2439 7.04036 1.19187 7.05859 1.14634C7.07682 1.10081 7.09831 1.06504 7.12305 1.03902C7.14648 1.01301 7.17188 1 7.19922 1L10.8008 1Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, r.jsx)('path', {
                                                    d: 'M1 1.49805C1 1.42969 1.01301 1.36458 1.03902 1.30273C1.06504 1.24414 1.10081 1.19206 1.14634 1.14648C1.19187 1.10091 1.2439 1.0651 1.30244 1.03906C1.36423 1.01302 1.42927 1 1.49756 1C1.56585 1 1.62927 1.01302 1.68781 1.03906C1.74959 1.0651 1.80325 1.10091 1.84878 1.14648C1.89756 1.19206 1.93496 1.24414 1.96098 1.30273C1.98699 1.36458 2 1.42969 2 1.49805L2 10.502C2 10.5703 1.98699 10.6338 1.96098 10.6924C1.93496 10.7542 1.89756 10.8079 1.84878 10.8535C1.80325 10.8991 1.74959 10.9349 1.68781 10.9609C1.62927 10.987 1.56585 11 1.49756 11C1.42927 11 1.36423 10.987 1.30244 10.9609C1.2439 10.9349 1.19187 10.8991 1.14634 10.8535C1.10081 10.8079 1.06504 10.7542 1.03902 10.6924C1.01301 10.6338 1 10.5703 1 10.502L1 1.49805Z',
                                                    fill: 'currentColor',
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(h, {
                                        onClick: v,
                                        ariaLabel: d({ id: 'windows-menu.roll-up' }),
                                        withSecondaryColor: t,
                                        children: (0, r.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                            children: (0, r.jsx)('path', {
                                                d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)(h, {
                                        onClick: y,
                                        ariaLabel: d({ id: 'windows-menu.unwrap' }),
                                        withSecondaryColor: t,
                                        children: (0, r.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                            children: (0, r.jsx)('path', {
                                                d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)(h, {
                                        className: c().closeButton,
                                        onClick: p,
                                        ariaLabel: d({ id: 'windows-menu.close' }),
                                        children: (0, r.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                            children: (0, r.jsx)('path', {
                                                d: 'M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    });
                });
        },
        11541: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => i });
            var r = a(19379);
            let i = (e) => {
                let t = e.get(r.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        12818: () => {},
        12894: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(21732),
                u = a(91027),
                d = a(63423),
                c = a(82586),
                h = a(21935),
                v = a(78842),
                y = a.n(v);
            let p = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: a = !0,
                        shouldFocusOnMount: s = !0,
                        className: v,
                        withBackwardFallback: p,
                        buttonSize: m = 'xxs',
                    } = e,
                    { formatMessage: f } = (0, o.A)(),
                    { canBack: g, canForward: b, moveBack: E, moveForward: S } = (0, h.J)(p),
                    _ = (0, n.useRef)(null),
                    A = (0, u.c)((e) => {
                        e.stopPropagation(), E();
                    }),
                    P = (0, u.c)((e) => {
                        e.stopPropagation(), S();
                    });
                return (
                    (0, n.useEffect)(() => {
                        s && _.current && g && _.current.focus();
                    }, [g]),
                    (0, r.jsxs)('div', {
                        className: (0, i.$)(y().root, v),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(d.$, {
                                    ref: _,
                                    'aria-label': f({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !g,
                                    size: m,
                                    icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: A,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            a &&
                                (0, r.jsx)(d.$, {
                                    'aria-label': f({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !b,
                                    size: m,
                                    icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: P,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        13598: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => r });
            var r = (function (e) {
                return (e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e;
            })({});
        },
        14190: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => s, cy: () => i, pE: () => r });
            let r = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                i = 'yandex',
                s = 'ru-RU';
        },
        15808: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var r = (function (e) {
                return (
                    (e.WINDOW_MINIMIZE = 'WINDOW_MINIMIZE'),
                    (e.WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE'),
                    (e.WINDOW_CLOSE = 'WINDOW_CLOSE'),
                    (e.INSTALL_UPDATE = 'INSTALL_UPDATE'),
                    (e.UPDATE_AVAILABLE = 'UPDATE_AVAILABLE'),
                    (e.APPLICATION_READY = 'APPLICATION_READY'),
                    (e.GET_PASSPORT_LOGIN = 'GET_PASSPORT_LOGIN'),
                    (e.GET_YANDEX_UID = 'GET_YANDEX_UID'),
                    (e.REFRESH_APPLICATION_DATA = 'REFRESH_APPLICATION_DATA'),
                    (e.PLAYER_STATE = 'PLAYER_STATE'),
                    (e.PLAYER_ACTION = 'PLAYER_ACTION'),
                    (e.OPEN_DEEPLINK = 'OPEN_DEEPLINK'),
                    (e.FIRST_LAUNCH = 'FIRST_LAUNCH'),
                    (e.APPLICATION_THEME = 'APPLICATION_THEME'),
                    (e.PROBABILITY_BUCKET = 'PROBABILITY_BUCKET'),
                    (e.LOAD_RELEASE_NOTES = 'LOAD_RELEASE_NOTES'),
                    (e.REFRESH_TRACKS_AVAILABILITY = 'REFRESH_TRACKS_AVAILABILITY'),
                    (e.REFRESH_REPOSITORY_META = 'REFRESH_REPOSITORY_META'),
                    (e.TRACKS_AVAILABILITY_UPDATED = 'TRACKS_AVAILABILITY_UPDATED'),
                    (e.REPOSITORY_META_UPDATED = 'REPOSITORY_META_UPDATED'),
                    (e.SAVE_FILE_TO_LOCAL_DISK = 'SAVE_FILE_TO_LOCAL_DISK'),
                    (e.TOGGLE_MINIPLAYER = 'TOGGLE_MINIPLAYER'),
                    (e.PULSESYNC_API = 'PULSESYNC_API'),
                    (e.GET_CURRENT_TRACK = 'GET_CURRENT_TRACK'),
                    (e.DOWNLOAD_CURRENT_TRACK = 'DOWNLOAD_CURRENT_TRACK'),
                    (e.DOWNLOAD_TRACK = 'DOWNLOAD_TRACK'),
                    (e.DOWNLOAD_TRACKS = 'DOWNLOAD_TRACKS'),
                    (e.DOWNLOAD_INFO = 'DOWNLOAD_INFO'),
                    (e.GPU_STALL = 'GPU_STALL'),
                    (e.APP_STALL = 'APP_STALL'),
                    (e.APP_STALL_CANCEL_RESTART = 'APP_STALL_CANCEL_RESTART'),
                    (e.MOD_UPDATE_AVAILABLE = 'MOD_UPDATE_AVAILABLE'),
                    (e.DOWNLOAD_MOD_UPDATE = 'DOWNLOAD_MOD_UPDATE'),
                    (e.INSTALL_MOD_UPDATE = 'INSTALL_MOD_UPDATE'),
                    (e.PROGRESS_BAR_CHANGE = 'PROGRESS_BAR_CHANGE'),
                    (e.APPLICATION_RESTART = 'APPLICATION_RESTART'),
                    (e.YNISON_STATE = 'YNISON_STATE'),
                    (e.BASIC_TOAST_CREATE = 'BASIC_TOAST_CREATE'),
                    (e.BASIC_TOAST_DISMISS = 'BASIC_TOAST_DISMISS'),
                    e
                );
            })({});
        },
        17129: (e, t, a) => {
            'use strict';
            a.d(t, { $n: () => o, DM: () => n, iy: () => s });
            var r = a(65808),
                i = a(79713);
            let s = [r.N.FLAC, r.N.AAC, r.N.HEAAC, r.N.MP3],
                n = [r.N.FLACMP4, r.N.AACMP4, r.N.HEAACMP4],
                o = { createSign: i.m };
        },
        17584: (e, t, a) => {
            'use strict';
            a.d(t, { MetrikaScript: () => d });
            var r = a(32290),
                i = a(59569),
                s = a(55178),
                n = a(70204),
                o = a(34186),
                l = a(98588),
                u = a(62376);
            let d = (e) => {
                let { nonce: t, initialMetrikaSettings: a } = e,
                    d = (0, u.U)(),
                    c = (0, o.N)().get(n.vg),
                    h = (0, s.useCallback)(() => {
                        a && c.init({ ...a, id: (0, l.R)(), logger: d });
                    }, [a, c, d]);
                return a
                    ? (0, r.jsx)(i.default, {
                          id: 'metrika-script',
                          src: 'https://mc.yandex.ru/metrika/tag.js',
                          nonce: null != t ? t : void 0,
                          strategy: 'lazyOnload',
                          onReady: h,
                      })
                    : null;
            };
        },
        17679: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        18847: (e, t, a) => {
            'use strict';
            a.d(t, { LayoutProvider: () => S, l: () => E });
            var r = a(32290),
                i = a(8055),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(54862);
            let u = {
                Chrome: 105,
                ChromeMobile: 105,
                Edge: 105,
                Firefox: 104,
                MobileFirefox: 104,
                Opera: 90,
                OperaMobile: 80,
                Safari: 16,
                MobileSafari: 16,
                UCBrowser: 15,
                MSIE: 12,
                YandexBrowser: 23,
            };
            var d = a(63618),
                c = a(58534),
                h = a(8960),
                v = a.n(h);
            let y = (e) => {
                let { message: t, closeToast: a } = e;
                return (0, r.jsx)(c.$, { className: (0, d.$)(v().root, v().important), message: t, closeToast: a });
            };
            var p = a(54667),
                m = a(83920),
                f = a(45477),
                g = a(75582),
                b = a(57594);
            let E = (e) => {
                    {
                        document.body.classList.remove('desktop'),
                            e.setLayout(window.innerWidth < p.P.Mobile ? p.u.Mobile : p.u.Desktop),
                            e.setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
                        let t = window.screen.availHeight || window.innerHeight;
                        e.setIsMobileLandscapeHeight(t < 450);
                    }
                },
                S = (0, s.PA)((e) => {
                    let { children: t } = e,
                        { formatMessage: a } = (0, o.A)(),
                        { notify: s } = (0, g.l)(),
                        { settings: d } = (0, b.g)(),
                        [c, h] = (0, l.d)(),
                        [v, p] = (0, l.d)(),
                        [S, _] = (0, l.d)(),
                        [A, P] = (0, l.d)(),
                        [k, I] = (0, l.d)(),
                        [C, T] = (0, l.d)(),
                        [x, R] = (0, l.d)(),
                        [w, D] = (0, l.d)(),
                        [N, O] = (0, l.d)();
                    d.layout;
                    let M = (0, n.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                E(d);
                            }, 100),
                        [d],
                    );
                    (0, n.useEffect)(() => {
                        (function (e) {
                            if (!(null == e ? void 0 : e.isBrowser) || !e.name || !e.version) return !1;
                            let t = u[e.name];
                            if (!t) return !1;
                            let a = parseFloat(e.version);
                            return !Number.isNaN(a) && a < t;
                        })(d.browserInfo) && s((0, r.jsx)(y, { message: a({ id: 'warning-messages.update-your-browser' }) }), { containerId: f.u.IMPORTANT, single: !0 });
                    }, [a, s, d.browserInfo]),
                        (0, n.useLayoutEffect)(() => {
                            E(d);
                        }, [d]),
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', M),
                                () => {
                                    window.removeEventListener('resize', M);
                                }
                            ),
                            [M],
                        );
                    let L = (0, n.useMemo)(
                        () => ({
                            defaultLayoutRef: c,
                            contentRef: v,
                            contentRootRef: S,
                            contentScrollRef: A,
                            sideBannerRef: C,
                            playlistStickyFiltersRef: x,
                            playlistStaticFiltersRef: w,
                            compositePlayerBarRef: k,
                            paywallRef: N,
                            setContentRef: p,
                            setDefaultLayoutRef: h,
                            setContentRootRef: _,
                            setContentScrollRef: P,
                            setSideBannerRef: T,
                            setPlaylistStickyFiltersRef: R,
                            setPlaylistStaticFiltersRef: D,
                            setCompositePlayerBarRef: I,
                            setPaywallRef: O,
                        }),
                        [c, v, S, A, C, x, w, k, N, h, p, _, P, T, R, D, I, O],
                    );
                    return (0, r.jsx)(m.M.Provider, { value: L, children: t });
                });
        },
        19268: (e, t, a) => {
            'use strict';
            a.d(t, { ShortcutsProvider: () => P });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(29098),
                o = a(91945),
                l = a(67893),
                u = a(81933),
                d = a(55332);
            let c = () => ({
                [d.l.TOGGLE_PLAY]: {},
                [d.l.TOGGLE_MUTE]: {},
                [d.l.INCREASE_VOLUME]: { repeatable: !0 },
                [d.l.DECREASE_VOLUME]: { repeatable: !0 },
                [d.l.LIKE]: {},
                [d.l.DISLIKE]: {},
                [d.l.MOVE_FORWARD]: { repeatable: !0 },
                [d.l.MOVE_BACKWARD]: { repeatable: !0 },
                [d.l.SLIDE_FORWARD]: { repeatable: !0 },
                [d.l.SLIDE_BACKWARD]: { repeatable: !0 },
                [d.l.TOGGLE_REPEAT]: {},
                [d.l.TOGGLE_SHUFFLE]: {},
                [d.l.TOGGLE_FULLSCREEN_PLAYER]: {},
                [d.l.CLOSE]: {},
            });
            var h = a(95329);
            let v = { [h.M.MAIN]: c(), [h.M.TRAILER]: c(), [h.M.VIDEO_PLAYER]: c(), [h.M.IMAGE_SLIDER]: c(), [h.M.PROMO_LANDING]: c() };
            class y {
                constructor(e) {
                    (0, o._)(this, 'code', void 0),
                        (0, o._)(this, 'ctrlKey', void 0),
                        (0, o._)(this, 'shiftKey', void 0),
                        (0, o._)(this, 'altKey', void 0),
                        (0, o._)(this, 'metaKey', void 0),
                        (this.code = e.code),
                        (this.altKey = !!e.altKey),
                        (this.ctrlKey = !!e.ctrlKey),
                        (this.shiftKey = !!e.shiftKey),
                        (this.metaKey = !!e.metaKey);
                }
            }
            class p {
                addShortcutsListener(e, t, a) {
                    let r = this.listenersGroups[e][t];
                    r && (r.handler = a);
                }
                removeShortcutsListener(e, t) {
                    let a = this.listenersGroups[e][t];
                    a && delete a.handler;
                }
                disable(e, t) {
                    this.setListenersDisabled(!0, e, t);
                }
                enable(e, t) {
                    this.setListenersDisabled(!1, e, t);
                }
                setListenersDisabled(e, t, a) {
                    if (t) {
                        if (a) {
                            this.listenersGroups[t][a].disabled = e;
                            return;
                        }
                        Object.values(this.listenersGroups[t]).forEach((t) => {
                            t.disabled = e;
                        });
                        return;
                    }
                    if (a)
                        return void Object.values(this.listenersGroups).forEach((t) => {
                            let r = t[a];
                            r && (r.disabled = e);
                        });
                    Object.values(this.listenersGroups).forEach((t) => {
                        Object.values(t).forEach((t) => {
                            t.disabled = e;
                        });
                    });
                }
                handle(e) {
                    var t;
                    let { action: a, shortcut: r } = null != (t = this.store[e.code]) ? t : {};
                    a &&
                        r &&
                        (0, l.A)(r, new y(e)) &&
                        (((e, t) => {
                            let a, r;
                            if (!(e.target instanceof Element)) return !1;
                            let i = e.target,
                                s = t.code;
                            return !!(
                                (a = i).hasAttribute('contenteditable') ||
                                ('INPUT' === a.tagName && 'range' !== a.getAttribute('type')) ||
                                ['TEXTAREA', 'SELECT', 'OPTION'].includes(a.tagName) ||
                                ('INPUT' === (r = i).tagName &&
                                    'range' === r.getAttribute('type') &&
                                    (s === u.Y.ARROW_LEFT || s === u.Y.ARROW_RIGHT || s === u.Y.ARROW_UP || s === u.Y.ARROW_DOWN))
                            );
                        })(e, r) ||
                            Object.values(this.listenersGroups).forEach((t) => {
                                var r;
                                let i = t[a];
                                i && !i.disabled && (i.repeatable || !e.repeat) && (e.preventDefault(), null == (r = i.handler) || r.call(i));
                            }));
                }
                listen() {
                    window.addEventListener('keydown', this.handle);
                }
                stopListening() {
                    window.removeEventListener('keydown', this.handle);
                }
                constructor(e) {
                    (0, o._)(this, 'store', void 0), (0, o._)(this, 'listenersGroups', v), (this.store = e.getFlatStore()), (this.handle = this.handle.bind(this));
                }
            }
            let m = {
                [d.l.TOGGLE_PLAY]: [new y({ code: u.Y.KEY_K })],
                [d.l.TOGGLE_MUTE]: [new y({ code: u.Y.KEY_M })],
                [d.l.INCREASE_VOLUME]: [new y({ code: u.Y.ARROW_UP })],
                [d.l.DECREASE_VOLUME]: [new y({ code: u.Y.ARROW_DOWN })],
                [d.l.LIKE]: [new y({ code: u.Y.KEY_F })],
                [d.l.DISLIKE]: [new y({ code: u.Y.KEY_D })],
                [d.l.MOVE_FORWARD]: [new y({ code: u.Y.KEY_N })],
                [d.l.MOVE_BACKWARD]: [new y({ code: u.Y.KEY_P })],
                [d.l.SLIDE_FORWARD]: [new y({ code: u.Y.ARROW_RIGHT }), new y({ code: u.Y.KEY_L })],
                [d.l.SLIDE_BACKWARD]: [new y({ code: u.Y.ARROW_LEFT }), new y({ code: u.Y.KEY_J })],
                [d.l.TOGGLE_REPEAT]: [new y({ code: u.Y.KEY_R })],
                [d.l.TOGGLE_SHUFFLE]: [new y({ code: u.Y.KEY_S })],
                [d.l.TOGGLE_FULLSCREEN_PLAYER]: [new y({ code: u.Y.KEY_W })],
                [d.l.CLOSE]: [new y({ code: u.Y.ESC })],
            };
            class f {
                getFlatStore() {
                    let e = {};
                    for (let [t, a] of Object.entries(this.store))
                        a.forEach((a) => {
                            e[a.code] = { action: t, shortcut: a };
                        });
                    return e;
                }
                constructor() {
                    (0, o._)(this, 'store', m);
                }
            }
            var g = a(57594),
                b = a(68535),
                E = a(70204),
                S = a(34186),
                _ = a(44128);
            let A = null,
                P = (0, i.PA)((e) => {
                    let { children: t } = e,
                        { sonataState: a } = (0, g.g)(),
                        i = (0, s.useMemo)(() => (A || (A = new p(new f())), A), []);
                    return (
                        ((e) => {
                            let { controller: t, sonataState: a, playbackId: r, groupId: i } = e,
                                n = (0, _.e)(),
                                o = (0, S.N)(),
                                l = (0, b.d)(),
                                u = o.get(E.oo);
                            (0, s.useEffect)(
                                () => (
                                    null == t ||
                                        t.addShortcutsListener(i, d.l.DECREASE_VOLUME, () => {
                                            null == n || n.decreaseExponentVolume(0.05, r);
                                        }),
                                    null == t ||
                                        t.addShortcutsListener(i, d.l.INCREASE_VOLUME, () => {
                                            null == n || n.increaseExponentVolume(0.05, r);
                                        }),
                                    null == t ||
                                        t.addShortcutsListener(i, d.l.TOGGLE_MUTE, async () => {
                                            let e = null == n ? void 0 : n.getState(r).playerState.exponentVolume.value;
                                            void 0 !== e && (await l(a, e, r));
                                        }),
                                    () => {
                                        null == t || t.removeShortcutsListener(i, d.l.DECREASE_VOLUME),
                                            null == t || t.removeShortcutsListener(i, d.l.INCREASE_VOLUME),
                                            null == t || t.removeShortcutsListener(i, d.l.TOGGLE_MUTE);
                                    }
                                ),
                                [t, r, n, u, l, a, i],
                            ),
                                (0, s.useEffect)(() => {
                                    if (!a.isGenerativeContext)
                                        return (
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.MOVE_BACKWARD, async () => {
                                                    var e;
                                                    (null == n || null == (e = n.getState(r).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                                        (await n.moveBackward(r));
                                                }),
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.MOVE_FORWARD, async () => {
                                                    var e;
                                                    (null == n || null == (e = n.getState(r).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                                        (await (null == n ? void 0 : n.moveForward(r)));
                                                }),
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.SLIDE_BACKWARD, async () => {
                                                    (null == n ? void 0 : n.getState(r).playerState.progress.value.duration) &&
                                                        (await (null == n ? void 0 : n.slideBackward(2, r)));
                                                }),
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.SLIDE_FORWARD, async () => {
                                                    (null == n ? void 0 : n.getState(r).playerState.progress.value.duration) &&
                                                        (await (null == n ? void 0 : n.slideForward(2, r)));
                                                }),
                                            () => {
                                                null == t || t.removeShortcutsListener(i, d.l.MOVE_FORWARD),
                                                    null == t || t.removeShortcutsListener(i, d.l.MOVE_BACKWARD),
                                                    null == t || t.removeShortcutsListener(i, d.l.SLIDE_BACKWARD),
                                                    null == t || t.removeShortcutsListener(i, d.l.SLIDE_FORWARD);
                                            }
                                        );
                                }, [t, n, u, a.isGenerativeContext, r, i]);
                        })({ controller: i, sonataState: a, groupId: h.M.MAIN }),
                        (0, s.useEffect)(
                            () => (
                                null == i || i.listen(),
                                () => {
                                    null == i || i.stopListening();
                                }
                            ),
                            [i],
                        ),
                        (0, r.jsx)(n.P.Provider, { value: i, children: t })
                    );
                });
        },
        19476: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { default: () => y });
            var r = a(32290),
                i = a(63618),
                s = a(55178),
                n = a(44989),
                o = a(54280),
                l = a(49545),
                u = a(42040),
                d = a(72733),
                c = a(91288),
                h = a.n(c),
                v = a(49124);
            let y = (e) => {
                let { children: t } = e,
                    { state: a, toggleTrue: c } = (0, n.e)(Boolean(window.nativeSettings?.get?.('modSettings.window.minimizedStart'))),
                    { state: y, toggleTrue: p } = (0, n.e)(!1),
                    { getThemeFromStorage: m } = (0, d.Q)(new o.si()),
                    f = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = m()) ? e : (0, u.V)();
                    }, [m]),
                    g = (0, s.useCallback)(
                        (e) => {
                            let t = v.env.ASSET_PREFIX || '';
                            return ''.concat(t, '/media/splash_screen/splash_screen_').concat(f, '.').concat(e);
                        },
                        [f],
                    ),
                    b = (0, s.useMemo)(() => ({ isVisible: !a }), [a]);
                return (0, r.jsxs)(l.n.Provider, {
                    value: b,
                    children: [
                        !a &&
                            (0, r.jsx)('div', {
                                className: (0, i.$)(h().root, h()['root_'.concat(f)], { [h().root_hidden]: y }),
                                onAnimationEnd: c,
                                children: (0, r.jsxs)('video', {
                                    className: h().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: p,
                                    onError: c,
                                    children: [(0, r.jsx)('source', { src: g('webm'), type: 'video/webm' }), (0, r.jsx)('source', { src: g('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        t,
                    ],
                });
            };
        },
        20852: (e, t, a) => {
            'use strict';
            a.d(t, { DesktopPaywallInitializer: () => l });
            var r = a(96103),
                i = a(55178),
                s = a(70794),
                n = a(7697),
                o = a(57594);
            let l = (0, r.PA)(() => {
                let { desktopPaywall: e, user: t } = (0, o.g)(),
                    { isFreemium: a } = (0, n.X)(),
                    { shouldShowFamilyInvite: r } = (0, s.h)();
                (0, i.useEffect)(() => {
                    if (t.account.isResolved && (!t.isAuthorized || a) && !r)
                        return (
                            e.shouldShowOnEnter && e.showPaywall(),
                            e.startCrackdownTimeout(),
                            () => {
                                e.clearCrackdownTimeout();
                            }
                        );
                }, [e, a, r, t.account.isResolved, t.isAuthorized]);
            });
        },
        21935: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var r = a(62060),
                i = a(55178),
                s = a(83808);
            let n = (e) => {
                let t = (0, s.W)(),
                    a = (0, i.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    n = (0, i.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: n };
            };
        },
        22308: (e) => {
            e.exports = {
                root: 'OverwrittenExperimentsModal_root__amBOc',
                header: 'OverwrittenExperimentsModal_header__9LrO1',
                content: 'OverwrittenExperimentsModal_content__Eki5k',
                closeModalButton: 'OverwrittenExperimentsModal_closeModalButton__k0LqG',
                reloadButton: 'OverwrittenExperimentsModal_reloadButton__bskTH',
                heading: 'OverwrittenExperimentsModal_heading__9oiHL',
                overrideForm: 'OverwrittenExperimentsModal_overrideForm__cJ8PH',
                overrideInput: 'OverwrittenExperimentsModal_overrideInput__cYffP',
                valueInput: 'OverwrittenExperimentsModal_valueInput__goR3Y',
                shake: 'OverwrittenExperimentsModal_shake__mFxEK',
                submitButton: 'OverwrittenExperimentsModal_submitButton___VRmz',
                row: 'OverwrittenExperimentsModal_row__W6A7r',
                textContainer: 'OverwrittenExperimentsModal_textContainer__5m84F',
                title: 'OverwrittenExperimentsModal_title__kMZ2J',
                description: 'OverwrittenExperimentsModal_description__m9r4M',
                selectButton: 'OverwrittenExperimentsModal_selectButton__P0v2_',
                experimentsList: 'OverwrittenExperimentsModal_experimentsList__PFRVV',
                overridedExperiment: 'OverwrittenExperimentsModal_overridedExperiment__w1bng',
            };
        },
        22692: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 63397)),
                Promise.resolve().then(a.bind(a, 46456)),
                Promise.resolve().then(a.bind(a, 29680)),
                Promise.resolve().then(a.bind(a, 54441)),
                Promise.resolve().then(a.t.bind(a, 12818, 23)),
                Promise.resolve().then(a.bind(a, 180)),
                Promise.resolve().then(a.bind(a, 76202)),
                Promise.resolve().then(a.bind(a, 38732)),
                Promise.resolve().then(a.bind(a, 19476)),
                Promise.resolve().then(a.bind(a, 66369)),
                Promise.resolve().then(a.bind(a, 45531)),
                Promise.resolve().then(a.bind(a, 98480)),
                Promise.resolve().then(a.bind(a, 5506)),
                Promise.resolve().then(a.bind(a, 25366)),
                Promise.resolve().then(a.bind(a, 20852)),
                Promise.resolve().then(a.bind(a, 38167)),
                Promise.resolve().then(a.t.bind(a, 36131, 23)),
                Promise.resolve().then(a.bind(a, 48177)),
                Promise.resolve().then(a.bind(a, 47236)),
                Promise.resolve().then(a.bind(a, 96923)),
                Promise.resolve().then(a.bind(a, 60780)),
                Promise.resolve().then(a.bind(a, 5285)),
                Promise.resolve().then(a.bind(a, 53542)),
                Promise.resolve().then(a.bind(a, 47776)),
                Promise.resolve().then(a.bind(a, 74359)),
                Promise.resolve().then(a.bind(a, 93296)),
                Promise.resolve().then(a.bind(a, 39670)),
                Promise.resolve().then(a.bind(a, 59456)),
                Promise.resolve().then(a.bind(a, 18847)),
                Promise.resolve().then(a.bind(a, 7027)),
                Promise.resolve().then(a.bind(a, 19268)),
                Promise.resolve().then(a.bind(a, 68281)),
                Promise.resolve().then(a.bind(a, 70444)),
                Promise.resolve().then(a.bind(a, 75170)),
                Promise.resolve().then(a.bind(a, 96096)),
                Promise.resolve().then(a.bind(a, 57510)),
                Promise.resolve().then(a.bind(a, 11517)),
                Promise.resolve().then(a.bind(a, 62797)),
                Promise.resolve().then(a.bind(a, 8152)),
                Promise.resolve().then(a.bind(a, 23402)),
                Promise.resolve().then(a.bind(a, 49932)),
                Promise.resolve().then(a.bind(a, 36011)),
                Promise.resolve().then(a.bind(a, 26452)),
                Promise.resolve().then(a.bind(a, 38936)),
                Promise.resolve().then(a.bind(a, 9634)),
                Promise.resolve().then(a.bind(a, 17584)),
                Promise.resolve().then(a.bind(a, 79884)),
                Promise.resolve().then(a.bind(a, 64170));
        },
        22748: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i, v: () => s });
            var r = a(55178);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        23402: (e, t, a) => {
            'use strict';
            a.d(t, { OnboardingProvider: () => l });
            var r = a(32290),
                i = a(55178),
                s = a(19379),
                n = a(59518),
                o = a(46151);
            let l = (e) => {
                let { children: t } = e,
                    a = (0, i.useRef)(!1),
                    l = (0, i.useCallback)((e) => {
                        a.current = e;
                    }, []),
                    { current: u } = (0, i.useRef)([
                        { id: n.h.CONCERTS_TAB, storageKey: s.c.ConcertsTabOnboardingShowed, expires: 365, enabled: !0 },
                        { id: n.h.TRAILER_BUTTON, storageKey: s.c.TrailerButtonOnbordingShowed, expires: 365, enabled: !0 },
                        { id: n.h.ARTIST_DONATION_BUTTON, storageKey: s.c.ArtistDonationButtonOnbordingShowed, expires: 90, enabled: !0 },
                    ]),
                    d = (0, i.useMemo)(() => ({ config: u, isOnboardingOpened: a, setIsOnboardingOpened: l }), [u, l]);
                return (0, r.jsx)(o.d.Provider, { value: d, children: t });
            };
        },
        25366: (e, t, a) => {
            'use strict';
            a.d(t, {
                DesktopInitializer: () => K,
                sendDownloadTrack: () => sendDownloadTrack,
                sendDownloadCurrentTrack: () => sendDownloadCurrentTrack,
                sendDownloadTracks: () => sendDownloadTracks,
                sendYnisonState: () => sendYnisonState,
            });
            var r = a(32290),
                i = a(55178),
                s = a(15808),
                n = a(14257),
                o = a(21916),
                l = a(91027),
                u = a(20472),
                d = a(1204),
                c = a(97201),
                h = a(36477);
            let sendDownloadTrack = (e, t) => {
                    var a;
                    null == (a = window.desktopEvents) || a.send(s.E.DOWNLOAD_TRACK, e, t);
                },
                sendDownloadCurrentTrack = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(s.E.DOWNLOAD_CURRENT_TRACK, e);
                },
                sendDownloadTracks = (e, t, a) => {
                    var r;
                    null == (r = window.desktopEvents) || r.send(s.E.DOWNLOAD_TRACKS, e, t, a);
                },
                sendYnisonState = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(s.E.YNISON_STATE, { rawData: e.rawData });
                },
                v = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let a = t[1],
                                r = t[2] || '';
                            if (!a) return e;
                            let i = new URLSearchParams(r.startsWith('?') ? r.substring(1) : '');
                            return i.set('tab', a), '/?'.concat(i.toString());
                        },
                    ],
                    [/^\/home$/, () => u.Z.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => u.Z.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => u.Z.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => u.Z.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => u.Z.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => u.Z.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => u.Z.collection.href],
                    [/^\/users\/(.*)\/history$/, () => u.Z.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let t = new URLSearchParams(e.split('?')[1]);
                            t.set(c.K.DEEPLINK, d.v.PLAY_VIBE);
                            let a = ((e, t) => {
                                let a = new URLSearchParams();
                                return (
                                    e.forEach((e, t) => {
                                        a.append(t, e);
                                    }),
                                    t.forEach((e, t) => {
                                        a.append(t, e);
                                    }),
                                    a
                                );
                            })(new URLSearchParams(window.location.search), t);
                            return 'landing' === t.get(c.K.SCREEN) ? '/?'.concat(a.toString()) : ''.concat(window.location.pathname, '?').concat(a.toString());
                        },
                    ],
                ];
            var y = a(60900),
                p = a(45477),
                m = a(75582),
                f = a(63618),
                g = a(21732),
                b = a(63423),
                E = a(71926),
                S = a(58534),
                _ = a(8623),
                A = a.n(_);
            let P = (e) => {
                    let { version: t, formatMessage: a, closeToast: n } = e,
                        o = (0, i.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(s.E.INSTALL_UPDATE), null == n || n();
                        }, [n]),
                        l = (0, i.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, r.jsx)(E.HL, {
                                            className: A().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-update-available' }, { version: t }),
                                        }),
                                        (0, r.jsx)(b.$, {
                                            className: A().button,
                                            onClick: o,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            'data-test-id': g.Kq.appUpdate.APP_UPDATE_NOTIFICATION_BUTTON,
                                            children: (0, r.jsx)(E.HL, { variant: 'div', type: 'controls', size: 'm', children: a({ id: 'desktop.update' }) }),
                                        }),
                                    ],
                                }),
                            [a, o, t],
                        );
                    return (0, r.jsx)(S.$, { className: (0, f.$)(A().root, A().important), message: l });
                },
                modUpdateToast = (e) => {
                    let { version: t, formatMessage: a, closeToast: n } = e,
                        [o, l] = (0, i.useState)(-1),
                        u = (0, i.useCallback)(() => {
                            window.desktopEvents?.send?.(s.E.INSTALL_MOD_UPDATE), null == n || n();
                        }, [n]),
                        d = (0, i.useCallback)(() => {
                            window.desktopEvents?.send?.(s.E.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        c = (e) => {
                            let t = a({ id: 'offline.download' });
                            return e < 0 ? (t = a({ id: 'offline.download' })) : e >= 0 && e <= 100 ? (t = 'Скачивание…') : e > 100 && (t = 'Установить'), t;
                        },
                        h = (0, i.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, r.jsx)(E.HL, {
                                            className: A().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-mod-update-available' }, { version: t }),
                                        }),
                                        (0, r.jsx)(b.$, {
                                            className: A().button,
                                            onClick: o <= 100 ? d : u,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: o <= 100 && o >= 0,
                                            children: (0, r.jsx)(E.HL, { variant: 'div', type: 'controls', size: 'm', children: c(o) }),
                                        }),
                                    ],
                                }),
                            [a, u, t, o, d],
                        ),
                        v = (0, i.useCallback)((e, t, a, r = 0) => {
                            if ('modUpdateToast' !== t) return;
                            if (window.dedupeNonces && window.dedupeNonces[t] === r) return;
                            window.dedupeNonces || (window.dedupeNonces = {}), r && (window.dedupeNonces[t] = r), l(a);
                        }, []);
                    return (
                        (0, i.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(s.E.PROGRESS_BAR_CHANGE, v),
                                () => {
                                    window.desktopEvents?.off?.(s.E.PROGRESS_BAR_CHANGE, v);
                                }
                            );
                        }, [v]),
                        (0, i.useEffect)(() => {
                            let e = () => {
                                null == n || n();
                            };
                            return (
                                window.desktopEvents?.on?.(s.E.MOD_UPDATE_AVAILABLE, e),
                                () => {
                                    window.desktopEvents?.off?.(s.E.MOD_UPDATE_AVAILABLE, e);
                                }
                            );
                        }, [n]),
                        (0, r.jsxs)(S.$, {
                            className: (0, f.$)(A().root, A().important),
                            message: h,
                            children: [
                                (0, r.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: o + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: o <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                toastWithProgress = (e) => {
                    let {
                            closeToast: t,
                            toastID: a,
                            message: n,
                            buttonLabel: o,
                            onButtonClick: l,
                            disabled: u = !1,
                            dismissOnButtonClick: d = !1,
                            createNonce: c = 0,
                        } = e,
                        [h, v] = (0, i.useState)(-1),
                        [y, g] = (0, i.useState)('Ожидание...'),
                        k = '__pulseToastProgressCache',
                        I = (0, i.useCallback)(() => {
                            null == l || l(), d && (null == t || t());
                        }, [d, l, t]),
                        C = (0, i.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, r.jsx)(E.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', children: n.replace('#s', y) }),
                                        o &&
                                            (0, r.jsx)(b.$, {
                                                className: A().button,
                                                onClick: I,
                                                variant: 'default',
                                                color: 'secondary',
                                                size: 'xs',
                                                radius: 'xxxl',
                                                disabled: u,
                                                children: (0, r.jsx)(E.HL, { variant: 'div', type: 'controls', size: 'm', children: o }),
                                            }),
                                    ],
                                }),
                            [u, o, n, I, y],
                        ),
                        T = (0, i.useCallback)(
                            (e, t, n, r = 0, i = void 0, s = 0) => {
                                if (t !== a) return;
                                if (s && c && s !== c) return;
                                if (window.dedupeNonces && window.dedupeNonces[t] === r) return;
                                window.dedupeNonces || (window.dedupeNonces = {}),
                                    r && (window.dedupeNonces[t] = r),
                                    window[k] || (window[k] = {}),
                                    (window[k][t] = { progress: n, label: i }),
                                    v(n),
                                    i && g(i);
                            },
                            [a, c],
                        ),
                        x = (0, i.useCallback)(
                            (e, n, r = 0, i = 0) => {
                                if (i && c && i !== c) return;
                                if (window['onBasicToastDismiss' + a] === r) return;
                                r && (window['onBasicToastDismiss' + a] = r), n === a && (window[k] && delete window[k][a], null == t || t());
                            },
                            [t, a, c],
                        );
                    return (
                        (0, i.useEffect)(() => {
                            let e = window[k] && window[k][a];
                            e && (v(e.progress), e.label && g(e.label));
                            return () => {
                                window[k] && delete window[k][a];
                            };
                        }, [a]),
                        (0, i.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(s.E.PROGRESS_BAR_CHANGE, T),
                                () => {
                                    window.desktopEvents?.off?.(s.E.PROGRESS_BAR_CHANGE, T);
                                }
                            );
                        }, [T]),
                        (0, i.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(s.E.BASIC_TOAST_DISMISS, x),
                                () => {
                                    window.desktopEvents?.off?.(s.E.BASIC_TOAST_DISMISS, x);
                                }
                            );
                        }, [x]),
                        (0, r.jsxs)(S.$, {
                            className: (0, f.$)(A().root, A().important),
                            message: C,
                            children: [
                                (0, r.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: h + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: h <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                };
            var k = a(70204),
                I = a(34186),
                C = a(39472),
                T = a(57594),
                x = a(10790),
                R = a(88964),
                w = a(96103),
                D = a(60764),
                N = a(39407),
                O = a(84638),
                M = a(46049);
            a(75717);
            var L = a(35174),
                F = a(61945),
                B = a(89337),
                q = a.n(B);
            let V = {
                    ul: (e) => (0, r.jsx)('ul', { className: q().description, children: e }),
                    li: (e) => (0, r.jsx)('li', { className: q().item, children: e }),
                    code: (e) => (0, r.jsx)('code', { className: q().code, children: e }),
                    date: (e) => (0, r.jsx)('span', { className: q().date, children: e }),
                    p: (e) => (0, r.jsx)('p', { className: q().paragraph, children: e }),
                    br: (0, r.jsx)('br', {}),
                },
                U = (0, w.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: a },
                        } = (0, T.g)(),
                        { formatMessage: i } = (0, y.A)(),
                        { language: s, defaultLanguage: n } = (0, F.h)(),
                        o = (0, L.C)();
                    return (0, r.jsx)(O.a, {
                        title: i({ id: 'desktop.release-notes-modal-title' }),
                        open: a.isOpened,
                        onOpenChange: a.onOpenChange,
                        onClose: a.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: q().modalOverlay,
                        overlayColor: 'full',
                        labelClose: i({ id: 'interface-actions.close' }),
                        className: q().root,
                        headerClassName: q().modalHeader,
                        contentClassName: q().modalContent,
                        containerProps: { 'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_MODAL },
                        closeButtonProps: { 'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_MODAL_CLOSE_BUTTON },
                        children: (0, r.jsx)(D.A, {
                            onError: o,
                            defaultLocale: n,
                            locale: s,
                            messages: null == e ? void 0 : e.data,
                            children: (0, r.jsx)(M.N, {
                                className: (0, f.$)(q().scrollableContent, q().important),
                                containerClassName: (0, f.$)(q().notes, q().important),
                                children:
                                    null == t
                                        ? void 0
                                        : t.map((e) =>
                                              (0, r.jsxs)(
                                                  'div',
                                                  {
                                                      className: q().note,
                                                      children: [
                                                          (0, r.jsx)(E.DZ, {
                                                              variant: 'h4',
                                                              className: (0, f.$)(q().version, q().important),
                                                              'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_VERSION,
                                                              children: ((e) => {
                                                                  var t;
                                                                  return null != (t = e.split('desktop-release-notes.')[1]) ? t : '';
                                                              })(e),
                                                          }),
                                                          (0, r.jsx)('div', {
                                                              'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_TEXT,
                                                              children: (0, r.jsx)(N.A, { id: e, values: V }),
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              ),
                                          ),
                            }),
                        }),
                    });
                });
            var W = a(50);
            let K = () => {
                let { language: e } = (0, F.h)();
                {
                    let { theme: t } = (0, W.W)(),
                        a = (0, I.N)().get(k.vg);
                    (() => {
                        let [e, t] = (0, i.useState)(!1),
                            {
                                releaseNotes: { setTranslationsReleaseNotes: a, isReady: r, modal: n, setSortedDescReleaseNotesKeys: o },
                            } = (0, T.g)(),
                            l = (0, i.useCallback)(
                                (e, r) => {
                                    let { needToShowReleaseNotes: i, sortedDescReleaseNotesKeys: s, translationsReleaseNotes: n } = r;
                                    a(n), o(s), i && t(!0);
                                },
                                [o, a],
                            );
                        (0, i.useEffect)(() => {
                            e && r && (n.open(), t(!1));
                        }, [r, n, e]),
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.LOAD_RELEASE_NOTES, l),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.LOAD_RELEASE_NOTES, l);
                                    }
                                );
                            }, [l]);
                    })(),
                        (() => {
                            let { formatMessage: e } = (0, y.A)(),
                                { notify: t } = (0, m.l)(),
                                { notify: a, dismiss: n } = (0, m.l)(),
                                { notify: o } = (0, m.l)(),
                                { notify: l } = (0, m.l)(),
                                { notify: u } = (0, m.l)(),
                                d = (0, i.useRef)(''),
                                c = (0, i.useCallback)(
                                    (a, n) => {
                                        d.current !== n && ((d.current = n), t((0, r.jsx)(P, { formatMessage: e, version: n }), { containerId: p.u.IMPORTANT }));
                                    },
                                    [e, d, t],
                                ),
                                h = (0, i.useCallback)(
                                    (t, o, l, u = 0) => {
                                        if (window.modUpdateAvailableEventDedupeNonce === u) return;
                                        u && (window.modUpdateAvailableEventDedupeNonce = u),
                                            a((0, r.jsx)(modUpdateToast, { formatMessage: e, version: `${o} -> ${l}`, closeToast: n }), { containerId: p.u.IMPORTANT });
                                    },
                                    [e, a, n],
                                ),
                                v = (0, i.useCallback)(() => {
                                    window.desktopEvents?.send(s.E.APPLICATION_RESTART);
                                }, []),
                                g = (0, i.useCallback)(
                                    (e, t = 'GPU_STALL', a = 0) => {
                                        if (window.onGPUStallEventDedupeNonce === a) return;
                                        a && (window.onGPUStallEventDedupeNonce = a),
                                            o(
                                                (0, r.jsx)(toastWithProgress, {
                                                    toastID: 'GPU_STALL',
                                                    message: `Аппаратное ускорение отключилось: ${t}`,
                                                    buttonLabel: 'Исправить',
                                                    onButtonClick: v,
                                                }),
                                                { containerId: p.u.IMPORTANT },
                                            );
                                    },
                                    [o, v],
                                ),
                                b = (0, i.useCallback)(() => {
                                    window.desktopEvents?.send(s.E.APP_STALL_CANCEL_RESTART);
                                }, []),
                                E = (0, i.useCallback)(
                                    (e, t = 0) => {
                                        if (window.onAppStallStallDedupeNonce === t) return;
                                        (window.onAppStallStallDedupeNonce = t),
                                            l(
                                                (0, r.jsx)(toastWithProgress, {
                                                    toastID: 'safeModeRestart',
                                                    message: 'Плеер запускается слишком долго. Перезагрузка в безопасном режиме через #s',
                                                    buttonLabel: 'Отменить',
                                                    onButtonClick: b,
                                                    dismissOnButtonClick: !0,
                                                }),
                                                { containerId: p.u.IMPORTANT },
                                            );
                                    },
                                    [l, b],
                                ),
                                S = (0, i.useCallback)(
                                    (e, t, a, n, o = 0, l, d) => {
                                        if (window['onBasicToastCreate' + t] === o) return;
                                        o && (window['onBasicToastCreate' + t] = o),
                                            window['onBasicToastDismiss' + t] && delete window['onBasicToastDismiss' + t],
                                            window.dedupeNonces && delete window.dedupeNonces[t],
                                            window.__pulseToastProgressCache && delete window.__pulseToastProgressCache[t],
                                            u(
                                                (0, r.jsx)(toastWithProgress, {
                                                    toastID: t,
                                                    message: a,
                                                    buttonLabel: n || void 0,
                                                    onButtonClick: l ? () => window.desktopEvents?.send(l, d) : void 0,
                                                    dismissOnButtonClick: !!n,
                                                    createNonce: o,
                                                }),
                                                { containerId: p.u.IMPORTANT },
                                            );
                                    },
                                    [u],
                                );
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.UPDATE_AVAILABLE, c),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.UPDATE_AVAILABLE, c);
                                    }
                                );
                            }, [c]),
                                (0, i.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(s.E.BASIC_TOAST_CREATE, S),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(s.E.BASIC_TOAST_CREATE, S);
                                        }
                                    );
                                }, [S]),
                                (0, i.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(s.E.MOD_UPDATE_AVAILABLE, h),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(s.E.MOD_UPDATE_AVAILABLE, h);
                                        }
                                    );
                                }, [h]),
                                (0, i.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(s.E.GPU_STALL, g),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(s.E.GPU_STALL, g);
                                        }
                                    );
                                }, [g]),
                                (0, i.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(s.E.APP_STALL, E),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(s.E.APP_STALL, E);
                                        }
                                    );
                                }, [E]);
                        })(),
                        (() => {
                            let { library: e, experiments: t } = (0, T.g)(),
                                a = (0, i.useCallback)(() => {
                                    t.getData(), e.getData(), (0, x.Q)();
                                }, [t, e]);
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.REFRESH_APPLICATION_DATA, a),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.REFRESH_APPLICATION_DATA, a);
                                    }
                                );
                            }, [a]);
                        })(),
                        (() => {
                            let e = (0, o.useRouter)(),
                                t = (0, l.c)((t, a) => {
                                    for (let [t, r] of v) if (t.test(a)) return void e.push(r(a));
                                    let { href: r } = (0, h.u)(null != a ? a : u.Z.main.href);
                                    e.push(r);
                                });
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.OPEN_DEEPLINK, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.OPEN_DEEPLINK, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, I.N)().get(k.vg),
                                t = (0, i.useCallback)(
                                    (t, a) => {
                                        a && e.count(a, 'probabilityBucket');
                                    },
                                    [e],
                                );
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.PROBABILITY_BUCKET, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.PROBABILITY_BUCKET, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, I.N)().get(k.vg),
                                t = (0, i.useCallback)(() => {
                                    let t = (0, C.H)();
                                    t && e.count(t, 'installsCount');
                                }, [e]);
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.FIRST_LAUNCH, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.FIRST_LAUNCH, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, R.j)(),
                                t = (0, i.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksMeta().then(() => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.send(s.E.REPOSITORY_META_UPDATED);
                                        });
                                }, [e.tracksController]);
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.REFRESH_REPOSITORY_META, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.REFRESH_REPOSITORY_META, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, R.j)(),
                                t = (0, i.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksAvailability().then(() => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.send(s.E.TRACKS_AVAILABILITY_UPDATED);
                                        });
                                }, [e.tracksController]);
                            (0, i.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(s.E.REFRESH_TRACKS_AVAILABILITY, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(s.E.REFRESH_TRACKS_AVAILABILITY, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (0, i.useEffect)(() => {
                            ((e) => {
                                var t;
                                null == (t = window.desktopEvents) || t.send(s.E.APPLICATION_READY, e);
                            })(e),
                                document.addEventListener('auxclick', (e) => e.preventDefault()),
                                document.addEventListener('click', (e) => {
                                    (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                                });
                        }, [e]),
                        (0, i.useEffect)(() => {
                            let e = (0, C.H)();
                            e && a.count(e, 'appVersion');
                        }, [a]),
                        (0, i.useEffect)(() => {
                            t &&
                                (((e) => {
                                    let t = e === n.S.Light ? '#FFFFFF' : '#000000';
                                    window.desktopEvents.send(s.E.APPLICATION_THEME, t);
                                })(t),
                                a.count(t, 'appTheme'));
                        }, [t]);
                }
                return (0, r.jsx)(U, {});
            };
        },
        25500: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var r = a(95415),
                i = a(87748),
                s = (function (e) {
                    return (e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e;
                })({});
            let n = () => ''.concat(s.DESKTOP).concat((0, i.t)((0, r.u)()));
        },
        25718: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { e: () => r }),
                (function (e) {
                    (e.AUDIO = 'audio'), (e.DOWNLOADED_AUDIO = 'downloadedAudio'), (e.HLS = 'hls'), (e.CLIP = 'clip');
                })(r || (r = {}));
        },
        26452: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoosterScript: () => r }), a(32290);
            let r = (e) => {
                let { nonce: t, assetPrefix: a, errorBooster: r } = e;
                return null;
            };
        },
        26518: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => r });
            let r = () => {
                if (void 0 === window.DEVICE_INFO) return;
                let e = Object.entries(window.DEVICE_INFO);
                if (0 !== e.length)
                    return e
                        .map((e) => {
                            let [t, a] = e;
                            return ''.concat(t, '=').concat(a);
                        })
                        .join('; ');
            };
        },
        27120: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var r = a(55178),
                i = a(53022);
            let s = (e) => {
                let t = (0, r.useRef)(!1),
                    a = (0, i.z)();
                (0, r.useEffect)(() => {
                    e && (null == a || a.disable(), (t.current = !0)), !e && t.current && (null == a || a.enable(), (t.current = !1));
                }, [e, a]);
            };
        },
        29098: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            let r = (0, a(55178).createContext)(null);
        },
        30310: (e) => {
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
        32629: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var r = a(39472),
                i = a(25500);
            let s = () => {
                let e,
                    t = (0, r.H)() || '1.0.0';
                return (e = (0, i.y)()), ''.concat(e, '/').concat(t);
            };
        },
        35174: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => n });
            var r = a(55178),
                i = a(19805),
                s = a(62376);
            let n = () => {
                let e = (0, s.U)();
                return (0, r.useCallback)(
                    (t) => {
                        if ('code' in t && t.code === i.lo.MISSING_DATA) return;
                        let a = t && 'object' == typeof t && 'code' in t && t.code,
                            r = 'IntlProviderError';
                        a && (r += ':'.concat(a)), e.error(r, { error: null == t ? void 0 : t.message, stack: null == t ? void 0 : t.stack });
                    },
                    [e],
                );
            };
        },
        36011: (e, t, a) => {
            'use strict';
            a.d(t, { DevPanel: () => V });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(63423),
                o = a(12583),
                l = a(70204),
                u = a(34186),
                d = a(57594),
                c = a(19379),
                h = a(68896),
                v = a.n(h),
                y = a(14190),
                p = a(61945);
            let m = (0, s.lazy)(() =>
                    Promise.all([a.e(5118), a.e(2641), a.e(2183)])
                        .then(a.bind(a, 40198))
                        .then((e) => ({ default: e.GeoWidget })),
                ),
                f = (e) => {
                    let { isActive: t, onToggle: a } = e;
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Скрыть' : 'Показать', ' гео-подмену'],
                    });
                },
                g = (e) => {
                    let { onClose: t } = e,
                        { language: a } = (0, p.h)(),
                        i = (0, s.useRef)(null);
                    !(function (e) {
                        (0, s.useEffect)(() => {
                            let t,
                                a = () => {
                                    var r;
                                    let i = null == (r = e.current) ? void 0 : r.querySelector('button');
                                    if (!i) {
                                        t = requestAnimationFrame(a);
                                        return;
                                    }
                                    i.animate(
                                        [
                                            { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 200, 0, 0.8)' },
                                            { transform: 'scale(1.2)', boxShadow: '0 0 0 15px rgba(255, 200, 0, 0)' },
                                            { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 200, 0, 0)' },
                                        ],
                                        { duration: 1e3, iterations: 5, easing: 'ease-in-out' },
                                    );
                                };
                            return (t = requestAnimationFrame(a)), () => cancelAnimationFrame(t);
                        }, [e]);
                    })(i);
                    let n = (0, s.useCallback)(() => {
                        window.location.reload();
                    }, []);
                    return (0, r.jsx)('div', {
                        ref: i,
                        children: (0, r.jsx)(s.Suspense, {
                            children: (0, r.jsx)(m, {
                                lang: 'ru' === a ? 'ru' : 'en',
                                environment: 'production',
                                brand: y.cy,
                                onHide: t,
                                onEnableReplacement: n,
                                onDisableReplacement: n,
                            }),
                        }),
                    });
                };
            var b = a(60900),
                E = a(82586),
                S = a(84638),
                _ = a(70280),
                A = a(71926),
                P = a(63618),
                k = a(92708),
                I = a(30627),
                C = a(54280),
                T = a(22308),
                x = a.n(T),
                pulseExperimentNames = a(79406);
            let UNSET_EXPERIMENT_GROUP_VALUE = '__pulse_sync_unset__',
                IGNORED_EXPERIMENT_NAMES = new Set(['ABTestIds']),
                EXPERIMENT_VARIANTS_CACHE = new Map(),
                EXPERIMENT_VARIANTS_PENDING = new Map(),
                UNSET_EXPERIMENT_GROUP_OPTION = { value: UNSET_EXPERIMENT_GROUP_VALUE, label: 'с сервера' },
                DEFAULT_EXPERIMENT_GROUP_OPTIONS = [
                    { value: 'default', label: 'off' },
                    { value: 'on', label: 'on' },
                ],
                getExperimentEntries = (e) => {
                    if (!e) return [];
                    if ('function' == typeof e.entries) return [...e.entries()];
                    return Array.isArray(e) ? e : 'object' == typeof e ? Object.entries(e) : [];
                },
                getExperimentValue = (e, t) => {
                    if (!e) return;
                    if ('function' == typeof e.get) return e.get(t);
                    return 'object' == typeof e ? e[t] : void 0;
                },
                hasExperimentValue = (e, t) => !!e && ('function' == typeof e.has ? e.has(t) : 'object' == typeof e && Object.prototype.hasOwnProperty.call(e, t)),
                getExperimentObject = (e) => Object.fromEntries(getExperimentEntries(e)),
                getStaticExperimentNames = (e) => {
                    try {
                        return getExperimentEntries(null == e ? void 0 : e.experiments)
                            .map((e) => e[0])
                            .filter((e) => !IGNORED_EXPERIMENT_NAMES.has(e));
                    } catch (e) {
                        return console.error('[PulseSync] Failed to get experiment keys from store', e), [];
                    }
                },
                normalizeSearchValue = (e) =>
                    String(e || '')
                        .trim()
                        .toLowerCase(),
                getSearchScore = (e, t) => {
                    if (!t) return 0;
                    let a = e.toLowerCase(),
                        r = a.indexOf(t);
                    if (r < 0) return Number.MAX_SAFE_INTEGER;
                    let i = a === t ? 0 : a.startsWith(t) ? 1 : 2;
                    return 1e3 * i + r;
                },
                buildExperimentOptions = (e, t) => {
                    let a = [UNSET_EXPERIMENT_GROUP_OPTION],
                        r = new Set([UNSET_EXPERIMENT_GROUP_VALUE]),
                        i = [];
                    return (
                        t && !r.has(t) && (a.push({ value: t, label: t, description: 'Current override' }), r.add(t)),
                        DEFAULT_EXPERIMENT_GROUP_OPTIONS.forEach((e) => {
                            r.has(e.value) || (r.add(e.value), i.push(e));
                        }),
                        'loaded' === (null == e ? void 0 : e.status) &&
                            (null == e ? void 0 : e.options) &&
                            e.options.length > 0 &&
                            e.options.forEach((e) => {
                                r.has(e.value) || (r.add(e.value), i.push(e));
                            }),
                        a.concat(i)
                    );
                },
                settingBarWithDropdown = (e) => {
                    let { title: t, description: a, onChange: i, value: n, options: o, direction: l = 'bottom', disabled: u = !1, onOpen: d } = e,
                        [c, h] = s.useState(!1),
                        [v, y] = s.useState(160),
                        [p, m] = s.useState(!1),
                        f = s.useRef(null),
                        g = o.find((e) => e.value === n);
                    return (
                        s.useEffect(() => {
                            let e = (e) => {
                                var t;
                                c && !(null == (t = f.current) ? void 0 : t.contains(e.target)) && h(!1);
                            };
                            return (
                                document.addEventListener('click', e),
                                () => {
                                    document.removeEventListener('click', e);
                                }
                            );
                        }, [c]),
                        s.useEffect(() => {
                            let e = f.current;
                            if (!e || 'undefined' == typeof ResizeObserver) return;
                            let t = new ResizeObserver(([e]) => {
                                var t, a;
                                let r =
                                    (null == (t = e.borderBoxSize) ? void 0 : t[0]) && 'number' == typeof e.borderBoxSize[0].inlineSize
                                        ? e.borderBoxSize[0].inlineSize
                                        : null == (a = e.contentRect)
                                          ? void 0
                                          : a.width;
                                'number' == typeof r && r > 0 && y(r);
                            });
                            return (
                                t.observe(e),
                                () => {
                                    t.disconnect();
                                }
                            );
                        }, []),
                        s.useEffect(() => {
                            c && m(!0);
                        }, [c]),
                        s.useEffect(() => {
                            if (c || !p) return;
                            let e = setTimeout(() => {
                                m(!1);
                            }, 180);
                            return () => {
                                clearTimeout(e);
                            };
                        }, [c, p]),
                        (0, r.jsxs)('div', {
                            className: x().row,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: x().textContainer,
                                    children: [
                                        (0, r.jsx)('div', { 'aria-hidden': !0, className: x().title, children: t }),
                                        a && (0, r.jsx)('div', { className: x().description, children: a }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    ref: f,
                                    role: 'button',
                                    tabIndex: u ? -1 : 0,
                                    onClick: () =>
                                        h((e) => {
                                            if (u) return !1;
                                            let t = !e;
                                            return t && d && d(), t;
                                        }),
                                    onKeyDown: (e) => {
                                        if (u) return;
                                        ('Enter' === e.key || ' ' === e.key) &&
                                            (e.preventDefault(),
                                            h((e) => {
                                                let t = !e;
                                                return t && d && d(), t;
                                            }));
                                    },
                                    className: ''.concat(u ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button', ' ', x().selectButton),
                                    children: [
                                        (null == g ? void 0 : g.label) || 'Select...',
                                        p &&
                                            (0, r.jsx)('ul', {
                                                role: 'menu',
                                                className: 'settingBarWithDropdown_menu'.concat(c ? '' : ' settingBarWithDropdown_menu__closed'),
                                                style: {
                                                    width: ''.concat(v, 'px'),
                                                    top: 'bottom' === l ? '120%' : 'unset',
                                                    bottom: 'top' === l ? '120%' : 'unset',
                                                    '--settingBarWithDropdown-offset-y': 'bottom' === l ? '-6px' : '6px',
                                                    '--settingBarWithDropdown-origin': 'bottom' === l ? 'top right' : 'bottom right',
                                                },
                                                children: o.map((e) =>
                                                    (0, r.jsxs)(
                                                        'li',
                                                        {
                                                            role: 'menuitem',
                                                            className: 'settingBarWithDropdown_menuItem',
                                                            id: e.value,
                                                            'aria-selected': n === e.value,
                                                            onClick: (t) => {
                                                                t.stopPropagation(), i(e.value), h(!1);
                                                            },
                                                            children: [
                                                                (0, r.jsx)('span', { children: e.label }),
                                                                n === e.value &&
                                                                    (0, r.jsx)('svg', {
                                                                        width: '16',
                                                                        height: '16',
                                                                        fill: 'currentColor',
                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                        children: (0, r.jsx)('path', { d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z' }),
                                                                    }),
                                                            ],
                                                        },
                                                        ''.concat(e.value),
                                                    ),
                                                ),
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                PulseSyncExperimentOverrideRow = (0, i.PA)((e) => {
                    let { experimentName: t, selectedGroup: a, defaultGroup: i, optionsState: n, onSelect: o, onOpenDropdown: l } = e,
                        [u, d] = s.useState(a || UNSET_EXPERIMENT_GROUP_VALUE),
                        c = 'error' === (null == n ? void 0 : n.status),
                        h = i ? 'С сервера: '.concat(i) : 'С сервера: отсутствует',
                        v = a || u,
                        y = c
                            ? 'Не удалось загрузить варианты. Попробуйте ещё раз. | '.concat(h)
                            : v && v !== UNSET_EXPERIMENT_GROUP_VALUE
                              ? 'Переопределено | '.concat(h)
                              : h,
                        p = buildExperimentOptions(n, v);
                    return (
                        s.useEffect(() => {
                            d(a || UNSET_EXPERIMENT_GROUP_VALUE);
                        }, [a]),
                        (0, r.jsx)(settingBarWithDropdown, {
                            title: t,
                            description: y,
                            value: v,
                            options: p,
                            onChange: (e) => {
                                d(e), o(t, e);
                            },
                            onOpen: () => l(t),
                        })
                    );
                }),
                R = (0, i.PA)((e) => {
                    let { experiment: t = { name: '', value: {} }, readOnly: a, deleteMode: i } = e,
                        { experiments: o } = (0, d.g)(),
                        h = (0, u.N)().get(l.oo),
                        v = (0, s.useRef)(null),
                        y = (0, s.useRef)(null),
                        p = o.overwrittenExperiments,
                        m = (0, s.useCallback)(
                            (e) => {
                                var t, a, r;
                                let i;
                                e.preventDefault();
                                let s = Object.fromEntries(new FormData(e.currentTarget));
                                if (!s.name || !s.group) return;
                                try {
                                    i = JSON.parse(String(s.value || '{}'));
                                } catch (e) {
                                    null == (a = y.current) || a.setCustomValidity('Невалидный JSON в поле value'), null == (r = y.current) || r.reportValidity();
                                    return;
                                }
                                null == (t = v.current) || t.reset();
                                let n = (0, C.jU)({ name: String(s.name), group: String(s.group), value: i });
                                h.set(c.c.OverwrittenExperiments, { ...(0, k.HO)(p), ...n }), o.updateOverwrittenExperiments(s.name, n[s.name]);
                            },
                            [h, p, o],
                        ),
                        f = (0, s.useCallback)(() => {
                            let e = { ...(0, k.HO)(p) };
                            delete e[t.name], o.deleteOverwrittenExperiments(t.name), h.set(c.c.OverwrittenExperiments, { ...e });
                        }, [p, t.name, o, h]),
                        g = (0, s.useCallback)(() => {
                            var e, t;
                            null == (e = y.current) || e.setCustomValidity(''), null == (t = y.current) || t.reportValidity();
                        }, []);
                    return (0, r.jsxs)('form', {
                        className: x().overrideForm,
                        onSubmit: m,
                        ref: v,
                        children: [
                            (0, r.jsx)(I.p, {
                                containerClassName: x().overrideInput,
                                type: 'text',
                                name: 'name',
                                placeholder: 'Experiment name',
                                required: !0,
                                defaultValue: t.name,
                                readOnly: a,
                            }),
                            (0, r.jsx)(I.p, {
                                containerClassName: x().overrideInput,
                                type: 'text',
                                name: 'group',
                                placeholder: 'Experiment group',
                                required: !0,
                                defaultValue: t.value.group,
                            }),
                            (0, r.jsx)(I.p, {
                                ref: y,
                                containerClassName: x().overrideInput,
                                inputClassName: x().valueInput,
                                type: 'text',
                                name: 'value',
                                placeholder: 'Optional experiment value in JSON format',
                                defaultValue: JSON.stringify(t.value.value),
                                onInput: g,
                            }),
                            (0, r.jsx)(n.$, {
                                className: (0, P.$)({ [x().submitButton]: !i }),
                                size: 'xxs',
                                type: 'submit',
                                children: i ? 'Обновить эксперимент' : 'Переопределить эксперимент',
                            }),
                            i && (0, r.jsx)(n.$, { size: 'xxs', type: 'submit', onClick: f, children: 'Удалить эксперимент' }),
                        ],
                    });
                }),
                w = { className: x().closeModalButton },
                D = (0, i.PA)(() => {
                    let {
                            modals: { overwrittenExperimentsModal: e },
                            experiments: t,
                        } = (0, d.g)(),
                        { formatMessage: a } = (0, b.A)(),
                        i = (0, s.useCallback)(() => {
                            window.location.reload();
                        }, []),
                        o = Object.entries(t.overwrittenExperiments).map((e) => {
                            let [t, a] = e;
                            return { name: t, value: a };
                        });
                    return (0, r.jsxs)(S.a, {
                        className: x().root,
                        headerClassName: x().header,
                        contentClassName: x().content,
                        closeButtonProps: w,
                        title: 'Переопределение экспериментов',
                        header: (0, r.jsx)(
                            _.m_,
                            {
                                offsetOptions: 4,
                                placement: 'left',
                                text: 'Перезагрузить страницу',
                                children: (0, r.jsx)(n.$, {
                                    className: x().reloadButton,
                                    size: 'xxs',
                                    radius: 'round',
                                    icon: (0, r.jsx)(E.I, { variant: 'reset', size: 'xxs' }),
                                    onClick: i,
                                }),
                            },
                            'reloadTooltip',
                        ),
                        open: e.isOpened,
                        onOpenChange: e.onOpenChange,
                        onClose: e.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: a({ id: 'interface-actions.close' }),
                        children: [
                            (0, r.jsx)(R, {}),
                            (0, r.jsx)(A.DZ, {
                                variant: 'h1',
                                size: 's',
                                weight: 'bold',
                                className: x().heading,
                                lineClamp: 2,
                                children: 'Список переопределенных экспериментов',
                            }),
                            (0, r.jsxs)('ul', {
                                className: x().experimentsList,
                                children: [
                                    o.map((e) =>
                                        (0, r.jsx)(
                                            'li',
                                            { className: x().overridedExperiment, children: (0, r.jsx)(R, { experiment: e, readOnly: !0, deleteMode: !0 }) },
                                            e.name,
                                        ),
                                    ),
                                    0 === o.length &&
                                        (0, r.jsx)('li', {
                                            className: x().overridedExperiment,
                                            children: (0, r.jsx)(A.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                children: 'Нет переопределенных экспериментов',
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    });
                }),
                PulseSyncCloseButtonProps = { className: x().closeModalButton },
                PulseSyncOverwrittenExperimentsModal = (0, i.PA)(() => {
                    let {
                            modals: { overwrittenExperimentsModal: e },
                            experiments: t,
                        } = (0, d.g)(),
                        { formatMessage: a } = (0, b.A)(),
                        storage = (0, u.N)().get(l.oo),
                        [o, h] = s.useState(''),
                        [v, y] = s.useState({}),
                        p = s.useMemo(
                            () =>
                                [
                                    ...new Set([...Object.values(pulseExperimentNames.z || {}).filter((e) => typeof e === 'string'), ...getStaticExperimentNames(t)]),
                                ].filter((e) => !IGNORED_EXPERIMENT_NAMES.has(e)),
                            [t.experiments],
                        ),
                        m = (0, s.useCallback)(() => {
                            window.location.reload();
                        }, []),
                        f = s.useCallback(
                            (e) => {
                                let a = getExperimentObject(t.overwrittenExperiments);
                                delete a[e], t.deleteOverwrittenExperiments(e), storage.set(c.c.OverwrittenExperiments, { ...a });
                            },
                            [t, storage],
                        ),
                        g = s.useCallback(
                            (e, a) => {
                                if (a === UNSET_EXPERIMENT_GROUP_VALUE) return void f(e);
                                let r = null == v[e] ? void 0 : v[e].groups,
                                    i = null == r ? void 0 : r[a],
                                    s = (0, C.jU)({ name: e, group: a, value: i && 'object' == typeof i ? i : { title: a } });
                                storage.set(c.c.OverwrittenExperiments, { ...getExperimentObject(t.overwrittenExperiments), ...s }),
                                    t.updateOverwrittenExperiments(e, s[e]);
                            },
                            [f, v, storage, t],
                        ),
                        P = s.useCallback(async (e) => {
                            let t = EXPERIMENT_VARIANTS_CACHE.get(e);
                            if (t) {
                                y((a) => ({ ...a, [e]: t }));
                                return;
                            }
                            let a = !1;
                            y((t) => {
                                let r = t[e];
                                return r && ('loading' === r.status || 'loaded' === r.status) ? t : ((a = !0), { ...t, [e]: { ...(r || {}), status: 'loading' } });
                            });
                            if (!a) return;
                            if (EXPERIMENT_VARIANTS_PENDING.has(e)) {
                                try {
                                    await EXPERIMENT_VARIANTS_PENDING.get(e);
                                    let t = EXPERIMENT_VARIANTS_CACHE.get(e);
                                    t && y((a) => ({ ...a, [e]: t }));
                                } catch (t) {
                                    y((t) => ({ ...t, [e]: { ...(t[e] || {}), status: 'error' } }));
                                }
                                return;
                            }
                            try {
                                let t = (async () => {
                                    let t = await fetch('https://api.music.yandex.net/experiments?experiment='.concat(encodeURIComponent(e)), { credentials: 'include' });
                                    if (!t.ok) throw Error('HTTP '.concat(t.status));
                                    let a = await t.json(),
                                        r = a && 'object' == typeof a && a.result && 'object' == typeof a.result ? a.result : {},
                                        i = Object.entries(r)
                                            .map((e) => {
                                                let [t, a] = e,
                                                    r = (null == a ? void 0 : a.title) && 'string' == typeof a.title ? a.title : t;
                                                return { value: t, label: r, description: r !== t ? t : void 0 };
                                            })
                                            .sort((e, t) => e.value.localeCompare(t.value)),
                                        s = { status: 'loaded', options: i, groups: r };
                                    return EXPERIMENT_VARIANTS_CACHE.set(e, s), s;
                                })();
                                EXPERIMENT_VARIANTS_PENDING.set(e, t);
                                let a = await t;
                                y((t) => ({ ...t, [e]: a }));
                            } catch (t) {
                                console.error('[PulseSync] Failed to load experiment variants', e, t), y((t) => ({ ...t, [e]: { ...(t[e] || {}), status: 'error' } }));
                            } finally {
                                EXPERIMENT_VARIANTS_PENDING.delete(e);
                            }
                        }, []),
                        k = normalizeSearchValue(o),
                        I = getExperimentEntries(t.overwrittenExperiments).map((e) => e[0]),
                        T = [...new Set([...p, ...I])].filter((e) => !IGNORED_EXPERIMENT_NAMES.has(e)),
                        R = T.filter((e) => !k || e.toLowerCase().includes(k)).sort((e, a) => {
                            let r = hasExperimentValue(t.overwrittenExperiments, e) ? 0 : 1,
                                i = hasExperimentValue(t.overwrittenExperiments, a) ? 0 : 1;
                            if (r !== i) return r - i;
                            let s = getSearchScore(e, k),
                                n = getSearchScore(a, k);
                            return s !== n ? s - n : e.localeCompare(a);
                        });
                    return (0, r.jsxs)(S.a, {
                        className: x().root,
                        headerClassName: x().header,
                        contentClassName: x().content,
                        closeButtonProps: PulseSyncCloseButtonProps,
                        title: 'Переопределение экспериментов',
                        header: (0, r.jsx)(
                            _.m_,
                            {
                                offsetOptions: 4,
                                placement: 'left',
                                text: 'Перезагрузить страницу',
                                children: (0, r.jsx)(n.$, {
                                    className: x().reloadButton,
                                    size: 'xxs',
                                    radius: 'round',
                                    icon: (0, r.jsx)(E.I, { variant: 'reset', size: 'xxs' }),
                                    onClick: m,
                                }),
                            },
                            'reloadTooltip',
                        ),
                        open: e.isOpened,
                        onOpenChange: e.onOpenChange,
                        onClose: e.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: a({ id: 'interface-actions.close' }),
                        children: [
                            (0, r.jsx)('div', {
                                className: x().overrideForm,
                                children: (0, r.jsx)('input', {
                                    className: x().overrideInput,
                                    type: 'text',
                                    name: 'experimentSearch',
                                    placeholder: 'Поиск',
                                    value: o,
                                    onChange: (e) => h(e.target.value),
                                    style: {
                                        minHeight: '2.5rem',
                                        width: '100%',
                                        border: '1px solid var(--ym-controls-color-secondary-outline-enabled_stroke)',
                                        borderRadius: 'var(--ym-radius-size-xs)',
                                        background: 'transparent',
                                        color: 'var(--ym-controls-color-primary-text-enabled_variant)',
                                        padding: '0 0.75rem',
                                    },
                                }),
                            }),
                            (0, r.jsx)('div', {
                                style: { color: 'var(--ym-controls-color-secondary-text-enabled)', fontSize: '0.875rem', fontWeight: 500 },
                                children: ''.concat(R.length, ' / ').concat(T.length, ' experiments'),
                            }),
                            (0, r.jsx)('div', {
                                className: 'PulseSync_experimentsListScroll',
                                style: { flex: '1 1 auto', minHeight: '16rem', overflowY: 'auto' },
                                children: (0, r.jsxs)('ul', {
                                    className: x().experimentsList,
                                    children: [
                                        R.map((e) => {
                                            let a = getExperimentValue(t.overwrittenExperiments, e),
                                                i = getExperimentValue(t.experiments, e);
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: x().overridedExperiment,
                                                    children: (0, r.jsx)(PulseSyncExperimentOverrideRow, {
                                                        experimentName: e,
                                                        selectedGroup: null == a ? void 0 : a.group,
                                                        defaultGroup: null == i ? void 0 : i.group,
                                                        optionsState: v[e],
                                                        onSelect: g,
                                                        onOpenDropdown: P,
                                                    }),
                                                },
                                                e,
                                            );
                                        }),
                                        0 === R.length &&
                                            (0, r.jsx)('li', {
                                                className: x().overridedExperiment,
                                                children: (0, r.jsx)('span', {
                                                    style: { color: 'var(--ym-controls-color-secondary-text-enabled)', fontSize: '0.875rem', fontWeight: 500 },
                                                    children: 'No experiments found',
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                        ],
                    });
                }),
                N = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = 'on' === e.get(c.c.AllowAnalyticsLogs),
                        a = (0, s.useCallback)(() => {
                            e.set(c.c.AllowAnalyticsLogs, t ? 'default' : 'on'), window.location.reload();
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' логи евгена'],
                    });
                },
                O = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableCrossfadeDebugMode),
                        a = (0, s.useCallback)(() => {
                            e.set(c.c.EnableCrossfadeDebugMode, !t), window.location.reload();
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' логирование кроссфейда'],
                    });
                },
                M = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableBurstDebounceDebugMode),
                        a = (0, s.useCallback)(() => {
                            e.set(c.c.EnableBurstDebounceDebugMode, !t), window.location.reload();
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' логирование burstDebounce'],
                    });
                },
                L = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableMetricsPluginDebugMode),
                        a = (0, s.useCallback)(() => {
                            e.set(c.c.EnableMetricsPluginDebugMode, !t), window.location.reload();
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' debug режим плагина метрик'],
                    });
                },
                F = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableYnisonMetricsDebugMode),
                        a = (0, s.useCallback)(() => {
                            e.set(c.c.EnableYnisonMetricsDebugMode, !t), window.location.reload();
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' debug режим метрик юнисона'],
                    });
                },
                B = (0, i.PA)((e) => {
                    let { togglePanel: t } = e,
                        {
                            modals: { overwrittenExperimentsModal: a },
                        } = (0, d.g)(),
                        i = (0, s.useCallback)(() => {
                            a.open(), t();
                        }, [a, t]);
                    return (0, r.jsx)(n.$, { size: 'xxs', className: v().block, variant: 'default', isBlock: !0, onClick: i, children: 'Переопределение экспериментов' });
                }),
                q = (e) => {
                    let { togglePanel: t, isGeoWidgetShown: a, onToggleGeoWidget: i } = e;
                    return (0, r.jsxs)('div', {
                        className: v().panel,
                        children: [
                            (0, r.jsx)(N, {}),
                            (0, r.jsx)(O, {}),
                            (0, r.jsx)(M, {}),
                            (0, r.jsx)(L, {}),
                            (0, r.jsx)(F, {}),
                            (0, r.jsx)(B, { togglePanel: t }),
                            // (0, r.jsx)(f, { isActive: a, onToggle: i }),
                        ],
                    });
                },
                V = () => {
                    let e = (0, u.N)().get(l.P0).get(o.qV),
                        [t, a] = (0, s.useState)(!1),
                        [i, d] = (0, s.useState)(!1),
                        c = (0, s.useCallback)(() => a((e) => !e), []),
                        h = (0, s.useCallback)(() => {
                            d((e) => !e);
                        }, []),
                        y = (0, s.useCallback)(() => {
                            d(!1);
                        }, []);
                    return e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: v().root,
                                      children: [
                                          (0, r.jsx)(n.$, { size: 'xxs', onClick: c, children: 'dev' }),
                                          t && (0, r.jsx)(q, { togglePanel: c, isGeoWidgetShown: i, onToggleGeoWidget: h }),
                                      ],
                                  }),
                                  (0, r.jsx)(PulseSyncOverwrittenExperimentsModal, {}),
                                  i && (0, r.jsx)(g, { onClose: y }),
                              ],
                          })
                        : null;
                };
        },
        36131: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        37240: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s });
            var r = a(55178),
                i = a(1176);
            function s() {
                return (0, r.useContext)(i.r);
            }
        },
        37862: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => r });
            var r = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        38167: (e, t, a) => {
            'use strict';
            a.d(t, { FamilyInviteInitializer: () => o });
            var r = a(96103),
                i = a(55178),
                s = a(70794),
                n = a(57594);
            let o = (0, r.PA)(() => {
                let e = (0, s.h)(),
                    {
                        user: t,
                        familyInvite: { start: a },
                    } = (0, n.g)();
                (0, i.useEffect)(() => {
                    e.shouldShowFamilyInvite && e.inviteId && (t.isAuthorized && e.clear(), a(e.inviteId));
                }, [t.isAuthorized, e, a]);
            });
        },
        38732: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockFullscreen: () => _ });
            var r = a(32290),
                i = a(96103),
                s = a(21916),
                n = a(55178),
                o = a(60900),
                l = a(63423),
                u = a(71926),
                d = a(11517),
                c = a(70204),
                h = a(34186),
                v = a(57594),
                y = a(79406),
                p = a(74006),
                m = a.n(p);
            let f = (0, i.PA)((e) => {
                var t, a, i, p;
                let { isAuthorizedUser: f = !1 } = e,
                    { formatMessage: g } = (0, o.A)(),
                    b = (0, s.useRouter)(),
                    {
                        experiments: E,
                        settings: { isMobile: S },
                    } = (0, v.g)(),
                    _ = (0, h.N)().get(c.QG),
                    A = E.getExperiment(y.z.WebNextBlockFullscreen),
                    P = null == A || null == (t = A.value) ? void 0 : t.metadata,
                    k = (0, n.useCallback)(() => {
                        _.authorizationUrl && b.push(_.authorizationUrl);
                    }, [_.authorizationUrl, b]),
                    I = (0, n.useCallback)(() => {
                        var e;
                        let t = new URLSearchParams({
                                origin: 'music_button-header',
                                retpath: encodeURIComponent('https://music.yandex.ru/settings?reqid=527383194170610471317084142111361467&from-passport'),
                            }),
                            a = (null == P || null == (e = P.redirectButton) ? void 0 : e.link) || _.getAuthorizationUrlWithParams(t);
                        a && window.open(a, '_self', 'noreferrer noopener');
                    }, [_, null == P || null == (a = P.redirectButton) ? void 0 : a.link]),
                    C = (null == P || null == (i = P.redirectButton) ? void 0 : i.text) || g({ id: 'snegir.redirect-button-text' }),
                    T = (null == P || null == (p = P.authButton) ? void 0 : p.text) || g({ id: 'snegir.auth-button-text' }),
                    x = (0, n.useMemo)(
                        () =>
                            f
                                ? (0, r.jsx)(l.$, { onClick: I, className: m().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: C })
                                : (0, r.jsx)(l.$, { onClick: k, className: m().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: T }),
                        [f, k, T, I, C],
                    ),
                    R = (null == P ? void 0 : P.mainText) || g({ id: 'snegir.main-text' }, { br: '\r\n' });
                return (0, r.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, r.jsx)(d.TitleBar, { withSecondaryColor: !0 }),
                        (0, r.jsxs)('div', {
                            className: m().container,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: m().content,
                                    children: [(0, r.jsx)(u.DZ, { variant: 'h1', size: S ? 'xl' : 'xxl', weight: 'bold', className: m().title, children: R }), x],
                                }),
                                (0, r.jsx)('div', { className: m().image }),
                            ],
                        }),
                    ],
                });
            });
            var g = a(27576),
                b = a(16172),
                E = a(52068),
                S = a(62376);
            let _ = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: a, user: i } = (0, v.g)(),
                    s = a.checkExperiment(y.z.WebNextBlockFullscreen, 'on') || !i.isServiceAvailable;
                return (!(function (e) {
                    let t = (0, E.st)(),
                        { hash: a } = (0, E.gf)(),
                        r = (0, S.U)(),
                        i = (0, n.useRef)(void 0);
                    (0, n.useEffect)(() => {
                        if (!e || !t || !a) return;
                        i.current = (0, g.A)();
                        let s = (0, b.Fx)({
                            params: {
                                hash: a,
                                pageId: b.QT.SnegirScreen,
                                pageStyle: b.QL.Fullscreen,
                                pagePlacement: b.c4.Fullscreen,
                                mainObjectType: b.ky.NonApplicable,
                                mainObjectId: b.ky.NonApplicable,
                                isTabSelectedByDefault: !1,
                            },
                            logger: r,
                            context: 'useSendEventOnSnegirShowedOrHidden.open',
                        });
                        return (
                            s && (0, b.w5)(t.evgenInstance, s),
                            () => {
                                let e = (0, b.Fx)({
                                    params: {
                                        hash: a,
                                        pageId: b.QT.SnegirScreen,
                                        pageStyle: b.QL.Fullscreen,
                                        pagePlacement: b.c4.Fullscreen,
                                        mainObjectType: b.ky.NonApplicable,
                                        mainObjectId: b.ky.NonApplicable,
                                        viewUuid: i.current,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSnegirShowedOrHidden.close',
                                });
                                e && (0, b.XB)(t.evgenInstance, e);
                            }
                        );
                    }, [e, t, a, r]);
                })(s),
                s)
                    ? i.isAuthorized
                        ? (0, r.jsx)(f, { isAuthorizedUser: !0 })
                        : (0, r.jsx)(f, {})
                    : t;
            });
        },
        38936: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => u });
            var r = a(91945),
                i = a(32290),
                s = a(55178),
                n = a(70204),
                o = a(34186);
            class l extends s.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: t, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, i.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    super(...e), (0, r._)(this, 'state', { hasError: !1 });
                }
            }
            let u = (function (e) {
                let t = (t) => {
                    let a = (0, o.N)().get(n.Zf);
                    return (0, i.jsx)(e, { ...t, logger: a });
                };
                return (t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t;
            })(l);
        },
        39231: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            var r = a(80408);
            let i = (e) => {
                var t, a;
                return null != (a = null == (t = (0, r.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        39472: (e, t, a) => {
            'use strict';
            function r() {
                return window.VERSION;
            }
            a.d(t, { H: () => r });
        },
        43352: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => s });
            var r = a(75314),
                i = a(14257);
            let s = (e) => {
                document.body.classList.remove(...Object.values(r.o)), e && Object.values(i.S).includes(e) && document.body.classList.add(r.o[e]);
            };
        },
        43564: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => S });
            var r = a(32290),
                i = a(55178),
                s = a(60900),
                n = a(62386),
                o = a(71483),
                l = a(21263),
                u = a(91027),
                d = a(72676),
                c = a(90357),
                h = a(72396),
                v = a(7697),
                y = a(45477),
                p = a(75582),
                m = a(57594),
                f = a(8322);
            let g = 'radio';
            var b = a(77156),
                E = a(44128);
            let S = (e) => {
                var t, a;
                let { seeds: S = [f.M1], pageIdForFrom: _, blockIdForFrom: A, onPlayInterrupted: P, parentContextId: k } = e,
                    { from: I } = (0, h.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(g)) || t.includes(g)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(g) })(_, A),
                    ),
                    { formatMessage: C } = (0, s.A)(),
                    T = (0, E.e)(),
                    { notify: x } = (0, p.l)(),
                    { sonataState: R, vibe: w, fullscreenPlayer: D, user: N } = (0, m.g)(),
                    { isFreemium: O } = (0, v.X)(),
                    [M, L] = (0, i.useState)(null),
                    F = (0, u.c)(() => (D.modal.isOpened ? y.u.FULLSCREEN_ERROR : y.u.ERROR));
                (0, i.useEffect)(() => {
                    let e =
                        null == T
                            ? void 0
                            : T.state.currentContext.onChange(() => {
                                  (0, n.i)(T.state.currentContext.value) ? L(T.state.currentContext.value) : L(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [T]),
                    (0, i.useEffect)(() => {
                        let e =
                            null == M
                                ? void 0
                                : M.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == M || null == (e = M.observableActiveSession.value) ? void 0 : e.wave) &&
                                          w.setVibe(null == M || null == (t = M.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [M, w]);
                let B = (0, u.c)(async (e) => {
                        try {
                            await (null == T
                                ? void 0
                                : T.playContext({
                                      contextData: {
                                          type: o.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: I,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: k,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            x((0, r.jsx)(c.h, { error: C({ id: 'vibe-errors.start-vibe' }) }), { containerId: F() });
                        }
                    }),
                    q = (0, u.c)(async (e) => {
                        if (T && M)
                            try {
                                await M.setSettings({ seeds: e, queueState: T.state.queueState, interactive: !0, from: I });
                            } catch (e) {
                                x((0, r.jsx)(c.h, { error: C({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: F() });
                            }
                    }),
                    V = (0, u.c)(async (e) => {
                        if (T)
                            try {
                                await T.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                x((0, r.jsx)(c.h, { error: C({ id: 'error-messages.something-went-wrong' }) }), { containerId: F() });
                            }
                    }),
                    U = !!M,
                    W = U && (0, b._)(null != (a = null == (t = w.meta) ? void 0 : t.seeds) ? a : [], S),
                    K = W && R.status === d.MT.PLAYING,
                    j = W && R.status === d.MT.PAUSED;
                (0, i.useEffect)(() => {
                    K && w.setIsApplying(!1);
                }, [K, w]);
                let Y = (0, u.c)(async () => {
                        if (!K && (O || !N.isAuthorized)) {
                            null == P || P();
                            return;
                        }
                        w.setIsApplying(!0), await B(S), w.setIsApplying(!1);
                    }),
                    G = (0, u.c)(async (e, t) => {
                        var a;
                        w.setIsApplying(!0);
                        let r = [];
                        if (w.meta && Array.isArray(null == (a = w.meta) ? void 0 : a.seeds))
                            if (w.meta.seeds.includes(e)) r = w.meta.seeds.filter((t) => t !== e);
                            else if (t) r = [e, ...w.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                r = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...w.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...w.meta.seeds, e]
                                    : [...w.meta.seeds];
                            }
                        else r = [e];
                        M ? (await q(r), await V(!0)) : await B(r), w.setIsApplying(!1);
                    });
                return {
                    isVibeContext: U,
                    isPlaying: K,
                    isPaused: j,
                    isCurrent: W,
                    togglePlay: Y,
                    resetContext: (0, u.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [f.M1];
                        w.setIsApplying(!0), M ? (await q(e), await V(!0)) : await B(e), w.setIsApplying(!1);
                    }),
                    applySetting: G,
                    playSeeds: (0, u.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : S;
                        if (O || !N.isAuthorized) {
                            null == P || P();
                            return;
                        }
                        w.setIsApplying(!0), M ? (await q(t), await V(!0)) : await B(t), w.setIsApplying(!1);
                    }),
                };
            };
        },
        43740: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => i });
            var r = a(46862);
            let i = () => {
                let e = null,
                    t = new r.cJ(!1),
                    a = [];
                return {
                    isLoaded: t,
                    init: (r) => {
                        var i, s;
                        if (void 0 !== (null == (i = window.Ya) ? void 0 : i.Metrika2) && !t.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...r })),
                                    (t.value = !0),
                                    (s = e),
                                    a.forEach((e) => {
                                        e(s);
                                    }),
                                    (a.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && r.logger.error(e);
                            }
                    },
                    count: function (t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [r]: t })
                            : a.push((e) => {
                                  e.params({ [r]: t });
                              });
                    },
                    hit: (t) => {
                        e
                            ? e.hit(t)
                            : a.push((e) => {
                                  e.hit(t);
                              });
                    },
                    reachGoal: (t, r) => {
                        if (!e) return void a.push((e) => e.reachGoal(t, r));
                        e.reachGoal(t, r);
                    },
                };
            };
        },
        44128: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i, e: () => s });
            var r = a(55178);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        44884: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { b: () => r }),
                (function (e) {
                    (e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search');
                })(r || (r = {}));
        },
        44989: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var r,
                i = a(55178),
                s = {
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {},
                o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0);
                let e = (function e(t) {
                    var a = n[t];
                    if (void 0 !== a) return a.exports;
                    var r = (n[t] = { exports: {} });
                    return s[t](r, r.exports, e), r.exports;
                })(810);
                o.useToggle = (t) => {
                    let [a, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let i = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: a, toggle: i, setState: r, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule;
            var l = o.useToggle;
        },
        45066: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        45531: (e, t, a) => {
            'use strict';
            a.d(t, { CommunicationsInitializer: () => n });
            var r = a(96103),
                i = a(55178),
                s = a(57594);
            let n = (0, r.PA)(() => {
                let { user: e, redAlert: t, communication: a } = (0, s.g)();
                (0, i.useEffect)(() => {
                    e.isAuthorized && Promise.allSettled([a.getData(), t.getData()]);
                }, [t, a, e.isAuthorized]);
            });
        },
        46151: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => i, w: () => s });
            var r = a(55178);
            let i = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                s = () => (0, r.useContext)(i);
        },
        47236: (e, t, a) => {
            'use strict';
            a.d(t, { ServiceWorkerInitialiazer: () => n });
            var r = a(55178),
                i = a(70204),
                s = a(34186);
            let n = () => {
                let e = (0, s.N)().get(i.Zf);
                (0, r.useEffect)(() => {
                    'serviceWorker' in navigator &&
                        navigator.serviceWorker.addEventListener('message', (t) => {
                            var a, r, i, s, n;
                            if ((null == (a = t.data) ? void 0 : a.type) === 'PUT_RSC_WORKER_ERROR_MESSAGE_TYPE') {
                                let a = new URL(null == (i = t.data) || null == (r = i.payload) ? void 0 : r.url);
                                e.error(
                                    '[RSC worker] Error getting url '
                                        .concat(a.origin, ' ')
                                        .concat(a.pathname)
                                        .concat(a.search, ', reason: ')
                                        .concat(null == (n = t.data) || null == (s = n.payload) ? void 0 : s.error),
                                );
                            }
                        });
                }, [e]);
            };
        },
        47776: (e, t, a) => {
            'use strict';
            a.d(t, { NavigationEvents: () => l });
            var r = a(55178),
                i = a(70204),
                s = a(34186),
                n = a(57594),
                o = a(48322);
            let l = () => {
                let e = (0, s.N)().get(i.vg),
                    t = (0, o.D)(),
                    {
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: a },
                        },
                    } = (0, n.g)();
                return (
                    (0, r.useEffect)(() => {
                        a.reset(), e.hit(t);
                    }, [t, e, a]),
                    null
                );
            };
        },
        48177: (e, t, a) => {
            'use strict';
            a.d(t, { SavedOfferInitializer: () => d });
            var r = a(96103),
                i = a(55178),
                s = a(70204),
                n = a(34186),
                o = a(7697),
                l = a(57594),
                u = a(19379);
            let d = (0, r.PA)(() => {
                let {
                        paymentWidgetModal: {
                            modal: e,
                            setTarget: t,
                            setTariffOfferName: a,
                            setServiceSessionId: r,
                            setIsSilent: d,
                            setOffersBatchId: c,
                            setOffersPositionIds: h,
                        },
                        user: v,
                    } = (0, l.g)(),
                    { hasFreeUserAccess: y } = (0, o.X)(),
                    p = (0, n.N)(),
                    m = (0, i.useMemo)(() => p.get(s.vH), [p]);
                (0, i.useLayoutEffect)(() => {
                    if (!v.isAuthorized || !y || null === m) return;
                    let i = m.get(u.c.Offer);
                    if (null === i) return;
                    let { target: s, serviceSessionId: n, tariffOfferName: o, isSilent: l, offersBatchId: p, offersPositionIds: f } = i;
                    m.remove(u.c.Offer), t(s), d(l), r(n), c(p), h(f), o && a(o), e.open();
                }, [y, m, e, a, t, r, d, c, h, v.isAuthorized]);
            });
        },
        48322: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => s });
            var r = a(21916),
                i = a(55178);
            let s = () => {
                let e = (0, r.usePathname)(),
                    t = (0, r.useSearchParams)();
                return (0, i.useMemo)(() => {
                    let a = t.size > 0 ? '?'.concat(t) : '';
                    return ''.concat(e).concat(a);
                }, [e, t]);
            };
        },
        48922: (e, t, a) => {
            'use strict';
            a.d(t, { _Q: () => r, fD: () => s, qG: () => n, xK: () => i });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACCEPTING_INVITATION_SCREEN = 'multivibe_accepting_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_ALONE_SCREEN = 'multivibe_alone_screen'),
                    (e.MULTIVIBE_INVALID_INVITATION_SCREEN = 'multivibe_invalid_invitation_screen'),
                    (e.MULTIVIBE_PENDING_INVITATION_SCREEN = 'multivibe_pending_invitation_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_ALREADY_EXIST_SCREEN = 'multivibe_already_exist_screen'),
                    e
                );
            })({});
            let i = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                s = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                n = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        49259: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => m, s: () => f });
            var r = a(32290),
                i = a(29222),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(80451),
                u = a(96218),
                d = a(5245),
                c = a(57594),
                h = a(31726);
            (0, s.eO)(!1);
            let v = (0, o.createContext)(null),
                y = (e) => {
                    let { children: t, store: a, storeKey: i } = e,
                        s = (0, o.useMemo)(() => ({ store: a, storeKey: i }), [a, i]);
                    return (0, r.jsx)(v.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: i } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(u.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: n } = e,
                                o = (0, h.Y)(),
                                l = (0, c.g)(),
                                { store: v, patchesRef: m } = (0, d.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: u.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: n, patchKey: a, patchesRef: m }), (0, r.jsx)(y, { store: v, storeKey: a, children: s })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, o.useContext)(v);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new i.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == a ? void 0 : a.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        49545: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => s, n: () => i });
            var r = a(55178);
            let i = (0, r.createContext)({ isVisible: !1 }),
                s = () => (0, r.useContext)(i);
        },
        49932: (e, t, a) => {
            'use strict';
            a.d(t, { ApplicationInformationHeadTags: () => i });
            var r = a(32290);
            let i = (e) => {
                let { assetPrefix: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('link', { rel: 'icon', type: 'image/png', sizes: '48x48', href: ''.concat(t, '/favicon-48x48.png') }),
                        (0, r.jsx)('link', { rel: 'icon', type: 'image/svg+xml', href: ''.concat(t, '/favicon.svg') }),
                        (0, r.jsx)('link', { rel: 'shortcut icon', href: ''.concat(t, '/favicon.ico') }),
                        (0, r.jsx)('link', { rel: 'apple-touch-icon', sizes: '180x180', href: ''.concat(t, '/apple-touch-icon.png') }),
                        (0, r.jsx)('link', { rel: 'manifest', crossOrigin: 'use-credentials', href: ''.concat(t, '/site.webmanifest') }),
                        (0, r.jsx)('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
                        (0, r.jsx)('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
                        (0, r.jsx)('meta', { name: 'apple-mobile-web-app-title', content: 'Яндекс Музыка' }),
                        (0, r.jsx)('link', {
                            rel: 'search',
                            type: 'application/opensearchdescription+xml',
                            title: 'Яндекс Музыка',
                            href: ''.concat(t, '/opensearch.xml'),
                        }),
                        (0, r.jsx)('meta', { name: 'robots', content: 'noyaca' }),
                    ],
                });
            };
        },
        51378: (e) => {
            e.exports = { icon: 'NotificationDownloadError_icon__r2AWx', message: 'NotificationDownloadError_message__WwjsI' };
        },
        51402: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => r });
            let r = {
                src: '/_next/static/media/desktop.1e0910e6.webp',
                height: 1800,
                width: 2880,
                blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEOaA+wuAD+/SCh9NmVu/p31WSFlBGQJpSkM3AKDGRsZhmAAAA=',
                blurWidth: 8,
                blurHeight: 5,
            };
        },
        51770: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var r = a(91945),
                i = a(31322),
                s = a(79722);
            class n extends i.X {
                async progressSync(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/sync',
                            this.createHttpOptions({
                                timeoutKey: 'progressSync',
                                params: e,
                                json: { lastSyncTimestamp: e.lastSyncTimestamp, trackStreams: e.trackStreams },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumFinished',
                                params: e,
                                searchParams: (0, s.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumUnfinished',
                                params: e,
                                searchParams: (0, s.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markFinished',
                                params: e,
                                searchParams: (0, s.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markUnfinished',
                                params: e,
                                searchParams: (0, s.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async progressSaveCurrent(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/save-current',
                            this.createHttpOptions({
                                timeoutKey: 'progressSaveCurrent',
                                params: e,
                                searchParams: (0, s.P)({
                                    trackId: e.trackId,
                                    positionSec: e.positionSec,
                                    trackLengthSec: e.trackLengthSec,
                                    finished: e.finished,
                                    timestamp: e.timestamp,
                                }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t), (0, r._)(this, 'httpClient', void 0), (0, r._)(this, 'config', void 0), (this.httpClient = e), (this.config = t);
                }
            }
        },
        52068: (e, t, a) => {
            'use strict';
            a.d(t, { vZ: () => v, st: () => s, gf: () => o });
            var r = a(55178);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
            let n = (0, r.createContext)({ hash: void 0 });
            function o() {
                return (0, r.useContext)(n);
            }
            var l = a(32290),
                u = a(27576);
            let d = (e) => {
                let { children: t } = e,
                    a = (0, r.useMemo)(() => ({ hash: (0, u.A)() }), []);
                return (0, l.jsx)(n.Provider, { value: a, children: t });
            };
            var c = a(16172);
            let h = null,
                v = (e) => {
                    let { allowAnalyticsLogs: t, children: a, evgenUserParam: s, logger: n, metrika: o } = e,
                        u = (0, r.useMemo)(() => {
                            if (h) return h;
                            let e = (0, c.vD)((e) => o.count(e, s), n, t),
                                a = (0, c.xU)(),
                                r = (0, c.$N)();
                            return (h = new c.gK(e, a, r));
                        }, [n, o]);
                    return (0, l.jsx)(i.Provider, { value: u, children: (0, l.jsx)(d, { children: a }) });
                };
        },
        53022: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var r = a(55178),
                i = a(29098);
            let s = () => (0, r.useContext)(i.P);
        },
        53512: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var r = a(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Artist;
            }
        },
        53542: (e, t, a) => {
            'use strict';
            a.d(t, { WebInitializer: () => o });
            var r = a(32290),
                i = a(96103);
            a(19379), a(34186);
            var s = a(57594);
            let n = (0, i.PA)((e) => {
                    let { children: t, userIp: a } = e,
                        { location: r } = (0, s.g)();
                    return t;
                }),
                o = (e) => {
                    let { userIp: t } = e;
                    return (0, r.jsx)(n, { userIp: t });
                };
        },
        54441: (e, t, a) => {
            'use strict';
            let r;
            a.d(t, { useMetrika: () => n });
            var i = a(55178),
                s = a(43740);
            let n = () => {
                let e = (r || (r = (0, s.a)()), r),
                    t = (0, i.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, i.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        54862: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => l });
            var r,
                i = a(55178),
                s = {
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {},
                o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.useForceUpdateRef = void 0);
                let e = (function e(t) {
                    var a = n[t];
                    if (void 0 !== a) return a.exports;
                    var r = (n[t] = { exports: {} });
                    return s[t](r, r.exports, e), r.exports;
                })(810);
                o.useForceUpdateRef = () => {
                    let [t, a] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            a((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                o.__esModule;
            var l = o.useForceUpdateRef;
        },
        55499: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => s });
            var r = a(91945),
                i = a(25718);
            class s {
                constructor({ data: e }) {
                    (0, r._)(this, 'data', void 0),
                        (0, r._)(this, 'mediaElementErrorReloadCounter', 0),
                        (0, r._)(this, 'contentType', i.e.AUDIO),
                        (0, r._)(this, 'hidden', !1),
                        (0, r._)(this, 'playId', ''),
                        (this.data = e);
                }
            }
        },
        56755: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => r });
            var r = (function (e) {
                return (e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e;
            })({});
        },
        57510: (e, t, a) => {
            'use strict';
            a.d(t, { TranslationsProvider: () => o });
            var r = a(32290),
                i = a(60764),
                s = a(35174),
                n = a(61945);
            let o = (e) => {
                let { children: t } = e,
                    { dictionary: a, language: o, defaultLanguage: l } = (0, n.h)(),
                    u = (0, s.C)();
                return (0, r.jsx)(i.A, { onError: u, defaultLocale: l, locale: o, messages: a, children: t });
            };
        },
        59456: (e, t, a) => {
            'use strict';
            a.d(t, { HistoryProvider: () => f });
            var r = a(32290),
                i = a(21916),
                s = a(55178),
                n = a(91027),
                o = a(70204),
                l = a(34186),
                u = a(91945),
                d = a(19379),
                c = a(80451);
            class h {
                isLocationNotEqual(e) {
                    return this.data.href !== e;
                }
                toString() {
                    return (0, c.stringifyJSONSafely)(this.data);
                }
                constructor(e, t = null, a = null) {
                    (0, u._)(this, 'data', void 0), (0, u._)(this, 'next', void 0), (0, u._)(this, 'prev', void 0), (this.data = e), (this.next = t), (this.prev = a);
                }
            }
            class v {
                replaceState(e) {
                    let t = new h(e, null, null);
                    this.current && (t = new h(e, this.current.next, this.current.prev)), (this.current = t), this.updateSessionStorage();
                }
                pushState(e) {
                    let t = new h(e, null, null);
                    this.current && this.current.isLocationNotEqual(e.href) && ((t = new h(e, null, this.current)), (this.current.next = t)),
                        (this.current = t),
                        this.updateSessionStorage();
                }
                get state() {
                    return this.current;
                }
                get canForward() {
                    var e;
                    return !!(null == (e = this.current) ? void 0 : e.next);
                }
                get canBack() {
                    var e;
                    return !!(null == (e = this.current) ? void 0 : e.prev);
                }
                forward() {
                    var e;
                    if (!this.canForward) return;
                    let t = null == (e = this.current) ? void 0 : e.next;
                    t && (this.current = t), this.updateSessionStorage();
                }
                back() {
                    var e;
                    if (!this.canBack) return;
                    let t = null == (e = this.current) ? void 0 : e.prev;
                    t && (this.current = t), this.updateSessionStorage();
                }
                updateSessionStorage() {
                    this.current && this.sessionStorage.set(d.c.SessionHistoryState, this.current.data);
                }
                restoreHistory() {
                    let e = this.sessionStorage.get(d.c.SessionHistoryState);
                    e && this.replaceState(e);
                }
                constructor(e) {
                    (0, u._)(this, 'sessionStorage', void 0), (0, u._)(this, 'current', void 0), (this.sessionStorage = e), (this.current = null), this.restoreHistory();
                }
            }
            var y = a(83808),
                p = a(74523);
            let m = null,
                f = (e) => {
                    let { children: t } = e,
                        a = (0, l.N)(),
                        u = (0, i.useRouter)(),
                        d = (0, i.usePathname)(),
                        c = (0, i.useSearchParams)(),
                        [h, f] = (0, s.useState)(!1),
                        [g, b] = (0, s.useState)(!1),
                        [E, S] = (0, s.useState)(null),
                        _ = (0, s.useRef)(0),
                        A = (0, s.useRef)(null),
                        P = (0, s.useMemo)(() => m || (m = new v(a.get(o.vH))), [a]),
                        k = (0, n.c)(() => {
                            P && (f(P.canBack), b(P.canForward), S(P.state));
                        }),
                        I = (0, n.c)((e) => {
                            P && (P.replaceState(e), u.replace(e.href));
                        }),
                        C = (0, n.c)((e) => {
                            P && (P.pushState(e), k());
                        }),
                        T = (0, n.c)(() => {
                            P && (P.back(), k(), u.back());
                        }),
                        x = (0, n.c)(() => {
                            P && (P.forward(), k(), u.forward());
                        });
                    (0, s.useEffect)(() => {
                        var e;
                        let t = [d, c.toString()].join('?');
                        (!(null == P ? void 0 : P.state) || (null == P || null == (e = P.state) ? void 0 : e.isLocationNotEqual(t))) && C({ href: t });
                    }, [P, d, c, C]);
                    {
                        let e = (0, p.C)(d, c);
                        e !== A.current && ((A.current = e), (_.current = _.current + 1));
                    }
                    return (0, r.jsx)(y.Q.Provider, {
                        value: { pushState: C, replaceState: I, canForward: g, canBack: h, back: T, forward: x, state: E, length: _.current },
                        children: t,
                    });
                };
        },
        59518: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var r = (function (e) {
                return (e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e;
            })({});
        },
        60780: (e, t, a) => {
            'use strict';
            a.d(t, { UlitochkaInitializer: () => u });
            var r = a(32290),
                i = a(96103),
                s = a(59569),
                n = a(91027),
                o = a(57594),
                l = a(79406);
            let u = (0, i.PA)((e) => {
                let { nonce: t } = e,
                    { experiments: a } = (0, o.g)(),
                    i = (0, n.c)(() => {
                        window.Ya.ulitochka.init({
                            theme: 'light',
                            platform: 'desktop',
                            customButtonStyle: { right: 5, top: 60, left: 'auto', border: 0, background: 'none' },
                            withReactFallbackLoading: !0,
                            disableAnalytics: !0,
                        });
                    });
                if (a.checkExperiment(l.z.WebNextUlitochka, 'on'))
                    return (0, r.jsx)(s.default, {
                        src: 'https://yastatic.net/s3/ulitochka/latest/ulitochka.min.js',
                        nonce: null != t ? t : void 0,
                        onLoad: i,
                        async: !0,
                    });
            });
        },
        61258: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => p });
            var r = a(32290),
                i = a(96103),
                s = a(59611),
                n = a.n(s),
                o = a(55178),
                l = a(91027),
                u = a(63887),
                d = a(57594),
                c = a(79406),
                h = a(36477);
            let v = (e) => {
                    let [t, a] = (0, o.useState)(!1),
                        i = (0, l.c)(() => {
                            a(!0);
                        });
                    return (0, r.jsx)(n(), { prefetch: t, ...e, onMouseEnter: i });
                },
                y = (0, i.PA)((e) => {
                    let { forwardedRef: t, href: a, component: i, ...s } = e,
                        { experiments: l } = (0, d.g)(),
                        { href: y, target: p, rel: m } = (0, h.u)(null != a ? a : ''),
                        f = l.checkExperiment(c.z.WebNextDisablePrefetchRequests, 'on'),
                        g = l.checkExperiment(c.z.WebNextDisablePrefetchRequests, 'hover'),
                        b = (0, o.isValidElement)(i)
                            ? i
                            : (function (e, t, a) {
                                  return e ? (t ? (0, r.jsx)(n(), { prefetch: !1 }) : a ? (0, r.jsx)(v, { href: e }) : (0, r.jsx)(n(), {})) : (0, r.jsx)('a', {});
                              })(a, f, g);
                    return (0, r.jsx)(u.N, { ref: t, component: b, href: a ? y : void 0, target: p, rel: m, ...s });
                }),
                p = (0, o.forwardRef)((e, t) => (0, r.jsx)(y, { ...e, forwardedRef: t }));
        },
        61945: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var r = a(55178),
                i = a(70204),
                s = a(34186);
            let n = () => {
                let e = (0, s.N)().get(i.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    n = e.getDictionary(),
                    o = e.getAvailableLanguages(),
                    l = (0, r.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, r.useMemo)(() => ({ dictionary: n, language: t, defaultLanguage: a, availableLanguages: o, setLanguage: l }), [t, l]);
            };
        },
        62386: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var r = a(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Vibe;
            }
        },
        62672: (e) => {
            e.exports = {
                root: 'WelcomePage_root__JK3Pb',
                image: 'WelcomePage_image__7_fpW',
                loginButton: 'WelcomePage_loginButton__AJHcG',
                secondBackground: 'WelcomePage_secondBackground__55zFI',
                offerButton: 'WelcomePage_offerButton__MRs_g',
                offerButton_important: 'WelcomePage_offerButton_important__0wf60',
                text: 'WelcomePage_text__A4aXp',
                offerText: 'WelcomePage_offerText__ZvXKN',
                logoContainer: 'WelcomePage_logoContainer__72W3y',
                logo: 'WelcomePage_logo__oMU8g',
                user: 'WelcomePage_user__WNc4W',
                username: 'WelcomePage_username__yXGsn',
                important: 'WelcomePage_important__MJxEk',
            };
        },
        62797: (e, t, a) => {
            'use strict';
            a.d(t, { UgcUploadInitializer: () => S });
            var r = a(96103),
                i = a(55178),
                s = a(57594),
                n = a(32290),
                o = a(60900),
                l = a(45477),
                u = a(75582),
                d = a(90357),
                c = a(39407),
                h = a(21732),
                v = a(71926),
                y = a(58534),
                p = a(61258),
                m = a(1918),
                f = a.n(m),
                g = (function (e) {
                    return (e.ERROR = 'error'), (e.SUCCESS = 'success'), e;
                })({});
            let b = (e) => {
                let { playlistName: t, url: a, variant: r } = e,
                    s = (0, i.useMemo)(
                        () =>
                            (0, n.jsx)(p.N, {
                                href: a,
                                className: f().link,
                                children: (0, n.jsx)(v.HL, { className: f().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: t }),
                            }),
                        [t, a],
                    ),
                    o = (0, i.useMemo)(
                        () =>
                            'error' === r
                                ? (0, n.jsx)(v.HL, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      'data-test-id': h.S7.BASE_NOTIFICATION_UGC_TRACK_ERROR_TEXT,
                                      children: (0, n.jsx)(c.A, { id: 'ugc.notification-unknown-error', values: { playlistName: s } }),
                                  })
                                : (0, n.jsxs)(v.HL, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      children: [(0, n.jsx)(c.A, { id: 'ugc.notification-success', values: { playlistName: s } }), ';'],
                                  }),
                        [s, r],
                    );
                return (0, n.jsx)(y.$, { className: f().root, message: o });
            };
            var E = a(71983);
            let S = (0, r.PA)(() => {
                let { ugcUploadCenter: e } = (0, s.g)(),
                    t = (0, i.useRef)(void 0);
                (() => {
                    var e;
                    let {
                            ugcUploadCenter: { notifications: t },
                            playlist: a,
                        } = (0, s.g)(),
                        { notify: r } = (0, u.l)(),
                        { formatMessage: c } = (0, o.A)();
                    (0, i.useEffect)(() => {
                        t.showAllNotifications().forEach((e) => {
                            switch (e.type) {
                                case E.u.FILE_TOO_LARGE:
                                    r((0, n.jsx)(d.h, { error: c({ id: 'ugc.notification-too-large-file-error' }) }), { containerId: l.u.ERROR });
                                    break;
                                case E.u.TOO_MANY_FILES:
                                    r((0, n.jsx)(d.h, { error: c({ id: 'ugc.notification-too-many-files-error' }) }), { containerId: l.u.ERROR });
                                    break;
                                case E.u.UNKNOWN_ERROR:
                                    r((0, n.jsx)(b, { url: e.playlist.url, playlistName: e.playlist.title, variant: g.ERROR }), { containerId: l.u.ERROR });
                                    break;
                                case E.u.SUCCESS:
                                    var t;
                                    (null == (t = a.meta) ? void 0 : t.kind) !== e.playlist.kind &&
                                        r((0, n.jsx)(b, { url: e.playlist.url, playlistName: e.playlist.title, variant: g.SUCCESS }), { containerId: l.u.INFO });
                            }
                        });
                    }, [c, t, t.pairs.length, r, null == (e = a.meta) ? void 0 : e.kind]);
                })();
                let a = (0, i.useCallback)(() => {
                        e.checkProcessingTracks();
                    }, [e]),
                    r = (0, i.useCallback)(() => {
                        t.current || (t.current = setInterval(a, 2e3));
                    }, [a]),
                    c = (0, i.useCallback)(() => {
                        clearInterval(t.current), (t.current = void 0);
                    }, []);
                (0, i.useEffect)(() => {
                    e.shouldCheckProcessingTracks ? r() : c();
                }, [c, r, e.shouldCheckProcessingTracks]),
                    (0, i.useEffect)(() => () => c(), [c]);
            });
        },
        63887: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => u });
            var r,
                i = a(55178),
                s = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        a.r(t), a.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    9829: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    3937: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0);
                        let i = a(4377),
                            s = a(810),
                            n = a(5881),
                            o = r(a(9829)),
                            l = (e) => {
                                let {
                                        component: t = (0, i.jsx)('a', {}),
                                        block: a,
                                        target: r,
                                        rel: l,
                                        href: u,
                                        forwardRef: d,
                                        iconPosition: c = 'left',
                                        flexIcon: h,
                                        icon: v,
                                        className: y,
                                        children: p,
                                        textClassName: m = '',
                                        containerClassName: f,
                                        ...g
                                    } = e,
                                    b = (0, s.useId)(),
                                    E = !s.Children.count(p),
                                    S = 'left' === c,
                                    _ = null;
                                if (void 0 !== v) {
                                    var A;
                                    _ = (0, s.cloneElement)(v, {
                                        className: (0, n.clsx)(
                                            o.default.icon,
                                            { [o.default['icon_position_'.concat(c)]]: !E && c },
                                            null == (A = v.props) ? void 0 : A.className,
                                        ),
                                        key: b,
                                    });
                                }
                                let P = (0, s.useMemo)(
                                    () =>
                                        v
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, n.clsx)(o.default.iconContainer, f),
                                                  children: [S && _, !E && (0, i.jsx)('span', { className: m, children: p }), !S && _],
                                              })
                                            : p,
                                    [p, f, v, S, E, _, m],
                                );
                                return (0, s.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: r,
                                        rel: '_blank' === r && void 0 === l ? 'noopener noreferrer' : l,
                                        href: u,
                                        className: (0, n.clsx)(o.default.root, { [o.default.block]: a, [o.default.flexIcon]: v && h, [o.default.iconOnly]: v && E }, y),
                                        ...g,
                                        ...t.props,
                                    },
                                    P,
                                );
                            };
                        t.Link = (0, s.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return s[e].call(a.exports, a, a.exports, o), a.exports;
            }
            (o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var l = {};
            (() => {
                Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0);
                var e = o(3937);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var u = l.r;
            l.X;
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => S });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(39407),
                u = a(63423),
                d = a(82586),
                c = a(71926),
                h = a(16172),
                v = a(52068),
                y = a(62376),
                p = a(37240),
                m = a(83920),
                f = a(20472),
                g = a(12894),
                b = a(30310),
                E = a.n(b);
            let S = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: s } = (0, o.A)(),
                    b = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: a } = (0, v.gf)(),
                        { pageId: r } = (0, p.$)(),
                        i = (0, y.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !r) return;
                        let s = (0, h.Fx)({
                            params: {
                                entityType: h.LA.Error,
                                entityId: h.LA.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: r,
                                pageStyle: h.QL.Fullscreen,
                                pagePlacement: h.c4.Fullscreen,
                                mainObjectType: h.ky.NonApplicable,
                                mainObjectId: h.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, h.z5)(t.evgenInstance, s);
                    }, [t, e, a, r, i]);
                })(b);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: a } = (0, p.$)(),
                            r = (0, y.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let i = (0, h.Fx)({
                                    params: {
                                        actionType: h.X2.Refresh,
                                        userInteractionType: h.gi.Tap,
                                        entityType: h.LA.Error,
                                        entityId: h.LA.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: h.QL.Fullscreen,
                                        pagePlacement: h.c4.Fullscreen,
                                        mainObjectType: h.ky.NonApplicable,
                                        mainObjectId: h.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, h.bv)(e.evgenInstance, i);
                            }, [e, t, a, r]),
                        };
                    })(),
                    _ = (0, n.useCallback)(() => {
                        S(), (window.location.href = f.Z.main.href);
                    }, [S]),
                    { contentRef: A } = (0, m.g)();
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(E().root, t),
                    children: [
                        a &&
                            (0, r.jsx)(g.L, { withBackwardFallback: '/', className: (0, i.$)(E().navigation, { [E().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(E().content, { [E().content_shrink]: !a }),
                            children: [
                                (0, r.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(c.DZ, { className: (0, i.$)(E().title, E().important), variant: 'h3', size: 'xs', children: b }),
                                (0, r.jsxs)(c.HL, {
                                    className: (0, i.$)(E().text, E().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(u.$, {
                                    onClick: _,
                                    className: E().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(c.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        65068: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var r = a(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Various;
            }
        },
        65163: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { O: () => r }),
                (function (e) {
                    (e.RADIO_STARTED = 'radioStarted'),
                        (e.TRACK_STARTED = 'trackStarted'),
                        (e.TRACK_FINISHED = 'trackFinished'),
                        (e.SKIP = 'skip'),
                        (e.SKIP_FAILED = 'skipFailed'),
                        (e.LIKE = 'like'),
                        (e.DISLIKE = 'dislike'),
                        (e.AD = 'ad'),
                        (e.JINGLE = 'jingle'),
                        (e.UNLIKE = 'unlike'),
                        (e.UNDISLIKE = 'undislike'),
                        (e.COMBINED_QUEUE_STARTED = 'combinedQueueStarted'),
                        (e.PLAYABLE_ITEM_STARTED = 'playableItemStarted'),
                        (e.PLAYABLE_ITEM_FINISHED = 'playableItemFinished'),
                        (e.PLAYABLE_ITEM_SKIP = 'playableItemSkip'),
                        (e.PLAYABLE_ITEM_LIKE = 'playableItemLike'),
                        (e.PLAYABLE_ITEM_DISLIKE = 'playableItemDislike'),
                        (e.PLAYABLE_ITEM_UNLIKE = 'playableItemUnlike'),
                        (e.PLAYABLE_ITEM_UNDISLIKE = 'playableItemUndislike');
                })(r || (r = {}));
        },
        65808: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { N: () => r }),
                (function (e) {
                    (e.MP3 = 'mp3'),
                        (e.FLAC = 'flac'),
                        (e.AAC = 'aac'),
                        (e.HEAAC = 'he-aac'),
                        (e.FLACMP4 = 'flac-mp4'),
                        (e.AACMP4 = 'aac-mp4'),
                        (e.HEAACMP4 = 'he-aac-mp4');
                })(r || (r = {}));
        },
        66369: (e, t, a) => {
            'use strict';
            a.d(t, { BuySubscriptionParamsInitializer: () => c });
            var r = a(55178),
                i = a(70204),
                s = a(34186),
                n = a(19379),
                o = a(39231),
                l = a(80408),
                u = a(71670);
            let d = { TARGET: 'target', COMMUNICATION_ID: 'communication_id', CAMPAIGN_ID: 'campaign_id' },
                c = () => {
                    let e = (0, s.N)(),
                        t = (0, u.X)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let a = e.get(i.vH),
                                r = (0, o.q)(d.TARGET),
                                s = (0, o.q)(d.COMMUNICATION_ID),
                                u = (0, o.q)(d.CAMPAIGN_ID);
                            if (!(r || s || u)) return;
                            a.set(n.c.BuySubscriptionParams, { target: r, communicationId: s, campaignId: u });
                            let c = (0, l.j)();
                            if (null === c) return;
                            c.delete(d.TARGET), c.delete(d.COMMUNICATION_ID), c.delete(d.CAMPAIGN_ID);
                            let h = new URL(window.location.href);
                            (h.search = c.toString()), t(h.toString());
                        }, [e, t]),
                        null
                    );
                };
        },
        68281: (e, t, a) => {
            'use strict';
            a.d(t, { SlamProvider: () => O });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(39407),
                o = a(75807),
                l = a(17129),
                u = a(94299),
                d = a(44547),
                c = a(91027),
                h = a(82586),
                v = a(71926),
                y = a(58534),
                p = a(51378),
                m = a.n(p);
            let f = (e) => {
                let { message: t } = e;
                return (0, r.jsx)(y.$, {
                    cover: (0, r.jsx)(h.I, { variant: 'unavailable', size: 'xs', className: m().icon }),
                    message: (0, r.jsx)(v.HL, { className: m().message, variant: 'div', type: 'controls', size: 'm', children: t }),
                    coverRadius: 's',
                });
            };
            var g = a(77327),
                b = a(70675);
            let E = { 51: '1-50', 101: '51-100', 201: '101-200', 301: '201-300' };
            var S = a(70204),
                _ = a(34186),
                A = a(45477),
                P = a(75582),
                k = a(11541),
                I = a(88964),
                C = a(22748),
                T = a(84199),
                x = a(81218),
                R = a(57594),
                w = a(79406),
                D = a(19379);
            let N = !0,
                O = (0, i.PA)((e) => {
                    var t, a, i;
                    let { children: h } = e,
                        { slam: v, user: y, experiments: p, library: m } = (0, R.g)(),
                        O = (0, I.j)(),
                        M = (0, _.N)(),
                        L = M.get(S.U2),
                        F = M.get(S.vg),
                        B = (0, x.g)(),
                        { notify: q } = (0, P.l)(),
                        V = (0, c.c)((e) => {
                            v.setNetworkStatus(e);
                        }),
                        U = (0, c.c)((e) => {
                            let { id: t, state: a } = e;
                            v.setTrack(t, a),
                                a.loadingState === d.DT.DOWNLOAD_FAILED &&
                                    q((0, r.jsx)(f, { message: (0, r.jsx)(n.A, { id: 'offline.track-download-error' }) }), { containerId: A.u.ERROR });
                        }),
                        W = (0, c.c)((e) => {
                            v.setTracks(e);
                        });
                    return (
                        y.account.data.uid &&
                            y.hasPlus &&
                            O.init({
                                userConfig: { uid: y.account.data.uid },
                                resources: { tracksResource: M.get(S.Oo), getFileInfoResource: M.get(S.qT), availabilityResource: M.get(S.$5) },
                                downloaderVariables: { maxConcurrentDownloads: 5, getQuality: () => (0, o.i)({ productQuality: null == B ? void 0 : B.quality.value }) },
                                featureFlags: { entities: !0 },
                                tracksControllerVariables: { requestTrackChunkSize: 100 },
                                trackDownloadTaskParams: {
                                    secretKey: M.get(S.tw).player.secretKey,
                                    transport: u.o.ENCRAW,
                                    variables: { chunkSize: 1048576, coverSize: 1e3, codecs: l.iy },
                                },
                            }),
                        (0, s.useEffect)(() => {
                            if (N) {
                                var e;
                                null == (e = O.tracksController) ||
                                    e.getTracksCount().then((e) => {
                                        let t = ((e) => {
                                            if (0 === e) return '0';
                                            if (e > 300) return '>300';
                                            for (let t of Object.keys(E)) if (e < Number(t)) return E[Number(t)];
                                        })(e);
                                        t && F.count({ [g.x.TRACKS_COUNT]: t }, b.l);
                                    }),
                                    (N = !1);
                            }
                        }, [F, O.tracksController]),
                        (0, s.useEffect)(() => {
                            if (void 0 !== y.puid && !p.checkExperiment(w.z.WebNextOfflineDegradation, 'default')) {
                                var e, t;
                                let a = null == (e = p.getExperiment(w.z.WebNextOfflineDegradation)) ? void 0 : e.group,
                                    r = ''.concat(D.c.OfflineDegradation, '_').concat(y.puid),
                                    i = L.get(r);
                                a && a !== i && (null == (t = O.tracksController) || t.clearAll(), L.set(r, a));
                            }
                        }, [p, L, O, y.puid]),
                        (0, s.useEffect)(() => {
                            var e, t, a;
                            return (
                                null == (e = O.store) || e.tracks.events.on(d.je.ENTITY_CHANGED, U),
                                null == (t = O.store) || t.tracks.events.on(d.je.STATE_CHANGED, W),
                                null == (a = O.tracksController) || a.initState(),
                                () => {
                                    var e, t;
                                    null == (e = O.store) || e.tracks.events.off(d.je.ENTITY_CHANGED, U),
                                        null == (t = O.store) || t.tracks.events.off(d.je.STATE_CHANGED, W);
                                }
                            );
                        }, [U, W, null == (t = O.store) ? void 0 : t.tracks.events, O.tracksController]),
                        (0, s.useEffect)(() => {
                            var e;
                            return (
                                null == (e = O.network) || e.subscribe(V),
                                () => {
                                    var e;
                                    null == (e = O.network) || e.unsubscribe(V);
                                }
                            );
                        }, [V, O.network, null == (a = O.network) ? void 0 : a.subscribe, null == (i = O.network) ? void 0 : i.unsubscribe]),
                        (0, s.useEffect)(() => {
                            let e = (0, k.g)(L);
                            v.setOfflineMode(e);
                        }, [L, v]),
                        (0, s.useEffect)(() => {
                            y.isAuthorized && !v.isOfflineModeEnabled && (m.isNeededToLoad || m.isRejected) && m.getData();
                        }, [m, v.isOfflineModeEnabled, y.isAuthorized]),
                        (0, r.jsx)(C.h.Provider, { value: O.artistsController, children: (0, r.jsx)(T.m.Provider, { value: O.playlistsController, children: h }) })
                    );
                });
        },
        68896: (e) => {
            e.exports = {
                root: 'DevPanel_root__Gu7qn',
                panel: 'DevPanel_panel__LnoO2',
                group: 'DevPanel_group__yDdVt',
                block: 'DevPanel_block__SJ_76',
                changeLanguageBlock: 'DevPanel_changeLanguageBlock__WGj1D',
                generativeBlock: 'DevPanel_generativeBlock__CwcM2',
                changeLanguageInput: 'DevPanel_changeLanguageInput__nQ01C',
                generativeInput: 'DevPanel_generativeInput__hYqt3',
            };
        },
        70280: (e, t, a) => {
            'use strict';
            a.d(t, { ZI: () => h, m_: () => c });
            var r,
                i = a(78035),
                s = a(80451),
                n = a(55178),
                o = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        a.r(t), a.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    9682: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    6951: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    5882: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    58: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0);
                        let r = a(4377),
                            i = a(810),
                            s = a(1964),
                            n = a(2660),
                            o = a(3770),
                            l = a(5481);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: a, children: u, referenceRef: d, ...c } = e,
                                [h, v] = Array.isArray(u) ? u : [u],
                                y = (0, l.useTooltip)(c),
                                p = (0, i.useId)(),
                                m = (0, i.useId)(),
                                f = (0, i.useId)(),
                                g = (0, s.useMergeRefs)([y.refs.setReference, d]);
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, i.cloneElement)(h, {
                                        ref: g,
                                        ...(t ? { 'aria-describedby': p } : {}),
                                        ...y.getReferenceProps(),
                                        ...(0, n.getDataAttrFromProps)(c),
                                        key: m,
                                    }),
                                    y.context.open
                                        ? (0, i.cloneElement)(null != v ? v : (0, r.jsx)(o.TooltipContent, {}), {
                                              ref: y.refs.setFloating,
                                              style: { ...y.floatingStyles, visibility: y.referenceHidden ? 'hidden' : 'visible' },
                                              text: a,
                                              arrow: y.arrow,
                                              ...(t ? { id: p } : {}),
                                              ...y.getFloatingProps(),
                                              key: f,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3770: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0);
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = a(1964),
                            l = a(7743),
                            u = r(a(9682));
                        (t.TooltipContentComponent = (e) => {
                            let { className: t, children: a, arrow: r, rootNode: d, forwardRef: c, text: h, ...v } = e;
                            return (0, i.jsx)(o.FloatingPortal, {
                                root: d,
                                children: (0, i.jsxs)('div', {
                                    className: (0, s.clsx)(u.default.root, t),
                                    ref: c,
                                    ...v,
                                    children: [
                                        (0, n.isValidElement)(r) && r,
                                        (0, i.jsx)(l.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: u.default.text,
                                            children: null != a ? a : h,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, n.forwardRef)((e, a) => (0, i.jsx)(t.TooltipContentComponent, { forwardRef: a, ...e })));
                    },
                    5481: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0);
                        let r = a(4377),
                            i = a(810),
                            s = a(1964),
                            n = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: a = 'top',
                                    open: o,
                                    onOpenChange: l,
                                    isHoverEnabled: u = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: c,
                                    flipOptions: h = {},
                                    shiftOptions: v = {},
                                    hoverSettings: y = n,
                                    enabled: p = !0,
                                    arrowProps: m,
                                } = e,
                                [f, g] = (0, i.useState)(t),
                                b = (0, i.useRef)(null),
                                E = null != o ? o : f,
                                S = null != l ? l : g,
                                _ = (0, s.useFloating)({
                                    placement: a,
                                    open: E,
                                    onOpenChange: S,
                                    whileElementsMounted: s.autoUpdate,
                                    middleware: [
                                        (0, s.offset)(c),
                                        (0, s.flip)({ crossAxis: a.includes('-'), ...h }),
                                        (0, s.shift)(v),
                                        (0, s.arrow)({ element: b }),
                                        (0, s.hide)(),
                                    ],
                                }),
                                A = _.context,
                                P = (0, s.useHover)(A, { move: !1, enabled: u && p, ...y }),
                                k = (0, s.useFocus)(A, { enabled: d && p }),
                                I = (0, s.useDismiss)(A),
                                C = (0, s.useRole)(A, { role: 'tooltip' }),
                                T = (0, s.useInteractions)([P, k, I, C]),
                                x = (0, i.useMemo)(() => {
                                    if (m) return (0, r.jsx)(s.FloatingArrow, { ref: b, context: _.context, ...m });
                                }, [m, _.context]);
                            return (0, i.useMemo)(() => {
                                var e;
                                return { open: E, setOpen: S, arrow: x, referenceHidden: null == (e = _.middlewareData.hide) ? void 0 : e.referenceHidden, ...T, ..._ };
                            }, [E, S, x, T, _]);
                        };
                    },
                    7743: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = a(4721),
                            l = r(a(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: r = 'text', size: n = 's', className: u, children: d, weight: c = 'medium', ...h } = e;
                            return (0, i.jsx)(o.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_'.concat(r, '_').concat(n)], l.default['root_weight_'.concat(c)], u),
                                ...h,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, a) => (0, i.jsx)(t.CaptionComponent, { forwardRef: a, ...e })));
                    },
                    4721: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = r(a(5882));
                        function l(e) {
                            let { forwardRef: t, style: a, className: r, children: n, variant: l, lineClamp: u, ...d } = e,
                                c = u && 'string' == typeof n ? n : void 0;
                            return (0, i.jsx)(l, {
                                style: { ...a, WebkitLineClamp: u },
                                ref: t,
                                title: c,
                                className: (0, s.clsx)(
                                    o.default.root,
                                    { [o.default.root_clamp]: u && u > 0, [o.default.root_clamp_oneline]: u && 1 === u, [o.default.root_clamp_multiline]: u && u > 1 },
                                    r,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        (t.TypographyComponent = l), (t.Typography = (0, n.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e })));
                    },
                    1964: (e) => {
                        e.exports = i;
                    },
                    2660: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                l = {};
            function u(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return o[e].call(a.exports, a, a.exports, u), a.exports;
            }
            (u.d = (e, t) => {
                for (var a in t) u.o(t, a) && !u.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (u.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var d = {};
            (() => {
                Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0);
                var e = u(58);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = u(3770);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var c = d.u,
                h = d._v;
            d.X$;
        },
        70444: (e, t, a) => {
            'use strict';
            a.d(t, { SonataProvider: () => so });
            var r,
                i,
                s,
                n,
                o,
                l,
                u,
                d,
                c,
                h,
                v,
                y,
                p,
                m,
                f,
                g,
                b,
                E,
                S,
                _,
                A,
                P,
                k,
                I,
                C,
                T,
                x,
                R,
                w = a(32290),
                D = a(46966),
                N = a(96103),
                O = a(55178),
                M = a(80451),
                L = a(91945),
                F = a(72676),
                B = a(96333),
                q = a(3623),
                V = a(63849),
                U = a(25718);
            !(function (e) {
                (e.PLAYING = 'playing'), (e.NOT_PLAYING = 'not-playing');
            })(r || (r = {}));
            let W = (e) =>
                !!(
                    'object' == typeof e &&
                    e &&
                    'streamProgress' in e &&
                    'object' == typeof e.streamProgress &&
                    e.streamProgress &&
                    'endPositionSec' in e.streamProgress &&
                    'number' == typeof e.streamProgress.endPositionSec
                );
            class K {
                set playId(e) {
                    this.entityPlayId = e;
                }
                get playId() {
                    return this.entityPlayId;
                }
                set addTracksToPlayerTime(e) {
                    this.entityAddTracksToPlayerTime = e;
                }
                get addTracksToPlayerTime() {
                    return this.entityAddTracksToPlayerTime;
                }
                get totalPlayedSeconds() {
                    return (function (e) {
                        let t,
                            a,
                            i = 0,
                            s = [];
                        if (0 !== e.length) {
                            for (let i of (function (e) {
                                let t = [];
                                for (; 0 !== e.length; ) {
                                    let a = e.shift();
                                    if (a && a.stage === r.PLAYING) {
                                        let e = t[t.length - 1];
                                        (e && e.stage !== r.NOT_PLAYING) || t.push(a);
                                    } else if (a && a.stage === r.NOT_PLAYING) {
                                        let e = t[t.length - 1];
                                        e && e.stage === r.PLAYING && t.push(a);
                                    }
                                }
                                let a = t[t.length - 1];
                                return a && a.stage === r.PLAYING && t.push({ stage: r.NOT_PLAYING, perfNow: performance.now(), ts: Date.now() }), t;
                            })(e))
                                i.stage === r.PLAYING ? (t = i.perfNow) : (a = i.perfNow), t && a && (s.push(a - t), (t = void 0), (a = void 0));
                            for (let e of s) i += e;
                            return Math.round((i / 1e3 + Number.EPSILON) * 1e3) / 1e3;
                        }
                        return i;
                    })([...this.entityTimeStagesOfPlayback]);
                }
                get timeStagesOfPlayback() {
                    return this.entityTimeStagesOfPlayback;
                }
                saveTimeStageOfPlayback(e) {
                    let t = { stage: e.stage, perfNow: performance.now(), ts: Date.now() };
                    e.reason && (t.reason = e.reason), this.entityTimeStagesOfPlayback.push(t);
                }
                clearTimeStagesOfPlayback() {
                    this.entityTimeStagesOfPlayback = [];
                }
                get data() {
                    return this.entityData;
                }
                get isAvailable() {
                    return !!('available' in this.entityData.meta && this.entityData.meta.available);
                }
                get isDisliked() {
                    return void 0 !== this.likeStore && this.likeStore.isTrackDisliked(this.entityData.meta.id);
                }
                get isExplicit() {
                    return 'contentWarning' in this.entityData.meta && this.entityData.meta.contentWarning === V.K.EXPLICIT;
                }
                get everFinished() {
                    return W(this.entityData.meta) ? this.entityData.meta.streamProgress.everFinished : null;
                }
                set everFinished(e) {
                    W(this.entityData.meta) && null !== e && (this.entityData.meta.streamProgress.everFinished = e);
                }
                hasPlayId() {
                    return '' !== this.playId;
                }
                constructor(e) {
                    (0, L._)(this, 'entityData', void 0),
                        (0, L._)(this, 'likeStore', void 0),
                        (0, L._)(this, 'entityPlayId', ''),
                        (0, L._)(this, 'entityAddTracksToPlayerTime', ''),
                        (0, L._)(this, 'entityTimeStagesOfPlayback', []),
                        (0, L._)(this, 'mediaElementErrorReloadCounter', 0),
                        (0, L._)(this, 'mediaSourceData', null),
                        (0, L._)(this, 'expectedQuality', null),
                        (0, L._)(this, 'startPosition', null),
                        (0, L._)(this, 'contentType', U.e.AUDIO),
                        (0, L._)(this, 'hidden', !1),
                        (this.entityData = e.data),
                        (this.likeStore = e.likeStore);
                }
            }
            class j extends K {}
            class Y extends K {
                constructor(...e) {
                    super(...e), (0, L._)(this, 'contentType', U.e.DOWNLOADED_AUDIO);
                }
            }
            class G extends K {}
            class H extends K {
                get isAvailable() {
                    return !1;
                }
                get isDisliked() {
                    return !1;
                }
            }
            var z = a(29222);
            class Q extends z.t {
                constructor(e, { code: t = 'E_ENTITY_FACTORY', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'EntityFactoryException'), Object.setPrototypeOf(this, Q.prototype);
                }
            }
            class X extends K {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, L._)(this, 'contentType', U.e.HLS);
                }
            }
            class Z extends K {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
            }
            class $ extends K {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, L._)(this, 'contentType', U.e.CLIP);
                }
            }
            class J extends K {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, L._)(this, 'contentType', U.e.HLS);
                }
            }
            class ee {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
                    try {
                        switch (a.type) {
                            case q.R.Music:
                                t = new j({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.DownloadedMusic:
                                t = new Y({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.VibeTrack:
                                t = new G({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.Generative:
                                t = new X({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.SmartPreview:
                                t = new Z({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.Clip:
                                t = new $({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.Radio:
                                t = new J({ data: a, likeStore: this.likeStore });
                                break;
                            case q.R.Unknown:
                                a.meta.type, B.S.MUSIC, (t = new j({ data: { ...a, type: q.R.Music }, likeStore: this.likeStore }));
                                break;
                            case F.z4.Unloaded:
                                t = new H({ data: a, likeStore: this.likeStore });
                        }
                    } catch (e) {
                        throw new Q('Error while creating entity', { cause: e, data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new Q('Cannot create entities with nonexistent type', { code: 'E_NONEXISTENT_ENTITY_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    (0, L._)(this, 'likeStore', void 0), (this.likeStore = e.likeStore);
                }
            }
            var et = a(71483);
            function ea(e, t) {
                let a = [];
                for (let r of e) for (let e of r) a.push({ type: F.z4.Unloaded, meta: e, additional: t });
                return a;
            }
            var er = a(46862);
            class ei extends z.t {
                constructor(e, { code: t = 'E_CONTEXT', name: a, ...r } = {}) {
                    super(e, { code: t, ...r }),
                        (0, L._)(this, 'name', void 0),
                        (this.name = null != a ? a : 'ContextException'),
                        Object.setPrototypeOf(this, ei.prototype);
                }
            }
            class es extends F.EX {
                get isCurrentContext() {
                    return this.isCurrent;
                }
                set isCurrentContext(e) {
                    this.isCurrent = e;
                }
                get availableActions() {
                    return this.actions;
                }
                logError(e) {
                    let t,
                        { name: a, message: r = 'Error in YaMusicContext', data: i, cause: s, originalError: n } = e;
                    (t = n instanceof z.t ? n : new ei(r, { name: a, cause: (0, M.createObjectFromError)(s), data: i })),
                        this.logger.error(t, { ...t.data, code: t.code, cause: t.cause, stack: t.stack, message: t.message });
                }
                constructor({ logger: e }) {
                    super(),
                        (0, L._)(this, 'isCurrent', !1),
                        (0, L._)(this, 'actions', {
                            moveBackward: new er.cJ(!1),
                            moveForward: new er.cJ(!0),
                            repeat: new er.cJ(null),
                            shuffle: new er.cJ(null),
                            speed: new er.cJ(null),
                        }),
                        (0, L._)(this, 'from', ''),
                        (0, L._)(this, 'utmLink', void 0),
                        (0, L._)(this, 'logger', void 0),
                        (this.logger = e);
                }
            }
            function en(e, t) {
                return e.map((e) => ({ type: q.R.SmartPreview, meta: e, additional: t }));
            }
            class eo extends es {
                loadTrailer() {
                    return this.albumsResource
                        .getTrailer({ albumId: Number(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new ei('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_TRAILER',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return this.albumsResource
                        .getAlbumWithRichTracks({ albumId: Number(this.contextData.meta.id), resumeStream: !0 })
                        .then((e) => ((this.contextData.meta = e), e))
                        .catch((e) => {
                            throw new ei('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => en(t.trailer.tracks, e))
                        : this.contextData.meta.volumes
                          ? Promise.resolve(ea(this.contextData.meta.volumes, e))
                          : this.loadContextMeta().then((t) => Promise.resolve(ea(t.volumes, e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                get resumeFromIndex() {
                    var e;
                    if ((null == (e = this.contextData.meta.resumeFrom) ? void 0 : e.trackId) && Array.isArray(this.contextData.meta.volumes)) {
                        let e = [].concat(...this.contextData.meta.volumes).findIndex((e) => {
                            var t;
                            return String(e.id) === String(null == (t = this.contextData.meta.resumeFrom) ? void 0 : t.trackId);
                        });
                        if (e >= 0) return e;
                    }
                    return null;
                }
                constructor(e) {
                    super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'albumsResource', void 0), (0, L._)(this, 'variables', void 0);
                    let { data: t, albumsResource: a, variables: r } = e;
                    (this.albumsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            var el = a(86882);
            class eu extends es {
                loadTrailer() {
                    let { uid: e, kind: t } = (0, el.I)(this.contextData.meta.id);
                    return this.usersResource
                        .getPlaylistTrailer({ userId: e, playlistKind: t })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new ei('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_TRAILER',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.contextData.meta.uuid,
                        { uid: t, kind: a } = (0, el.I)(this.contextData.meta.id),
                        r = 3 === a;
                    return (
                        r && void 0 !== e
                            ? this.playlistResource.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 })
                            : this.usersResource.getPlaylistWithTracksIds({ userId: t, playlistKind: a, resumeStream: !1, trackMetaType: r ? 'music' : void 0 })
                    )
                        .then((e) => {
                            let t,
                                a,
                                r = { ...e, id: ((t = e.uid), (a = e.kind), ''.concat(t, ':').concat(a)) };
                            return (this.contextData.meta = r), r;
                        })
                        .catch((e) => {
                            throw new ei('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => en(t.trailer.tracks, e));
                    if (this.contextData.meta.tracks) {
                        let t = [];
                        for (let a of this.contextData.meta.tracks) t.push({ type: F.z4.Unloaded, meta: a, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        for (let r of t.tracks) a.push({ type: F.z4.Unloaded, meta: r, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'usersResource', void 0),
                        (0, L._)(this, 'playlistResource', void 0),
                        (0, L._)(this, 'variables', void 0);
                    let { data: t, playlistResource: a, usersResource: r, variables: i } = e;
                    (this.usersResource = r), (this.playlistResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = i);
                }
            }
            class ed extends es {
                loadTrailer() {
                    return this.artistsResource
                        .getTrailer({ artistId: String(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new ei('Error in ArtistContext', {
                                code: 'E_ARTIST_LOAD_TRAILER',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return (
                        this.artistsResource
                            .getInfo({ artistId: String(this.contextData.meta.id) })
                            .then((e) => {
                                Object.assign(this.contextData.meta, e);
                            })
                            .catch((e) => {
                                throw new ei('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, M.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            }),
                        this.artistsResource
                            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
                            .then((e) => ((this.contextData.meta.trackIds = e), this.contextData.meta))
                            .catch((e) => {
                                throw new ei('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, M.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            })
                    );
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => en(t.trailer.tracks, e));
                    if (this.contextData.meta.trackIds) {
                        let t = [];
                        for (let a of this.contextData.meta.trackIds) t.push({ type: F.z4.Unloaded, meta: { id: a }, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        if (t.trackIds) for (let r of t.trackIds) a.push({ type: F.z4.Unloaded, meta: { id: r }, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'artistsResource', void 0), (0, L._)(this, 'variables', void 0);
                    let { data: t, artistsResource: a, variables: r } = e;
                    (this.artistsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            var ec = a(65163);
            function eh(e) {
                return (null == e ? void 0 : e.data.type) === q.R.VibeTrack;
            }
            let ev = 'user:onyourwave';
            function ey(e) {
                var t;
                let a;
                if (!(a = e.data.type === F.z4.Unloaded ? e.data.meta.id : 'realId' in e.data.meta ? e.data.meta.realId : e.data.meta.id))
                    throw new z.t('Can not create trackId for entity.');
                let r = 'albums' in e.data.meta ? e.data.meta.albums : [];
                return r && (null == (t = r[0]) ? void 0 : t.id) ? ''.concat(a, ':').concat(r[0].id) : String(a);
            }
            function ep() {
                return new Date().toISOString();
            }
            function em(e) {
                let t,
                    a,
                    r,
                    { entity: i, type: s, from: n } = e;
                'batchId' in i.data && void 0 !== i.data.batchId && (t = i.data.batchId);
                try {
                    switch (s) {
                        case ec.O.RADIO_STARTED:
                            r = { event: { type: s, timestamp: ep(), from: n }, from: n };
                            break;
                        case ec.O.TRACK_STARTED:
                        case ec.O.LIKE:
                        case ec.O.UNLIKE:
                        case ec.O.UNDISLIKE:
                            r = { batchId: t, event: { type: s, timestamp: ep(), trackId: ey(i) }, from: n };
                            break;
                        case ec.O.TRACK_FINISHED:
                            if (eh(i) && i.data.meta.durationMs) {
                                let e = i.data.meta.durationMs / 1e3;
                                a = e % 1 == 0 ? e : Number(e.toFixed(3));
                            }
                            r = {
                                batchId: t,
                                event: { type: s, timestamp: ep(), trackId: ey(i), totalPlayedSeconds: i.totalPlayedSeconds, trackLengthSeconds: a },
                                from: n,
                            };
                            break;
                        case ec.O.SKIP:
                        case ec.O.DISLIKE:
                            r = { batchId: t, event: { type: s, timestamp: ep(), trackId: ey(i), totalPlayedSeconds: i.totalPlayedSeconds }, from: n };
                    }
                    return { feedback: r };
                } catch (e) {
                    return { feedback: void 0, error: e };
                }
            }
            function ef(e, t) {
                if (e === t) return !0;
                let a = [ec.O.SKIP, ec.O.TRACK_FINISHED];
                return a.includes(e) && a.includes(t);
            }
            function eg(e, t) {
                return e.some((e) => ef(t.event.type, e.event.type) && 'trackId' in t.event && 'trackId' in e.event && t.event.trackId === e.event.trackId);
            }
            var eb = a(68100);
            let eE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
                eS = (e) => eE.test(String(e)),
                e_ = (e) => {
                    let { meta: t } = e.data,
                        a = 'trackSource' in t ? t.trackSource : void 0;
                    return void 0 !== a ? a === eb.J.UGC || a === eb.J.OWN_REPLACED_TO_UGC : eS(t.id);
                };
            var eA = a(75369);
            function eP(e) {
                if (eh(e) || (0, eA.b)(e)) return e.data.radioSessionId;
            }
            class ek {
                set afterErrorHook(e) {
                    this.afterError = e;
                }
                get multipleSessions() {
                    var e, t, a;
                    return null != (a = null == (t = this.variables) || null == (e = t.multipleSessions) ? void 0 : e.enabled) && a;
                }
                storeFeedbacksForWasPlayedTracks(e, t) {
                    for (let i of e)
                        if (eh(i.entity) && i.entity.data.wasPlayed) {
                            var a, r;
                            let { feedback: e, error: s } = em({ entity: i.entity, type: ec.O.TRACK_STARTED, from: t }),
                                { feedback: n, error: o } = em({ entity: i.entity, type: ec.O.TRACK_FINISHED, from: t }),
                                l = eP(i.entity);
                            e || null == (a = this.afterError) || a.promise(new z.t('[VibeContext] Can not create feedback for history vibe track', { cause: s })),
                                n || null == (r = this.afterError) || r.promise(new z.t('[VibeContext] Can not create feedback for history vibe track', { cause: o })),
                                e && n && this.sessionStore.storeSessionFeedbacksInHistory([e, n], l);
                        }
                }
                storeDeferredSkip(e) {
                    var t, a, r;
                    let { entity: i, from: s } = e;
                    if (!this.multipleSessions) return !1;
                    let n = eP(i);
                    if (!n) return !1;
                    let { feedback: o, error: l } = em({ entity: i, type: ec.O.SKIP, from: s });
                    if (!o) return null == (t = this.afterError) || t.promise(new z.t('[VibeContext] Cannot create deferred SKIP feedback', { cause: l })), !1;
                    if ('trackId' in o.event && e_(i)) return !1;
                    let u = this.sessionStore.store.get(n);
                    return (
                        !(eg(null != (a = null == u ? void 0 : u.historyFeedbacks) ? a : [], o) || eg(null != (r = null == u ? void 0 : u.feedbacks) ? r : [], o)) &&
                        (this.validateFeedback(o), this.sessionStore.storeSessionFeedbacksWithMultipleSessions(o, n), !0)
                    );
                }
                sendFeedback(e) {
                    let { entity: t, type: a, from: r, session: i, sendWithSessionTracks: s = !1, saveFeedbackToHistory: n = !1 } = e;
                    if (this.multipleSessions) return this.sendFeedbackWithMultipleSessions(e);
                    let { radioSessionId: o } = i,
                        { feedback: l, error: u } = em({ entity: t, type: a, from: r });
                    return l
                        ? ('trackId' in l.event && e_(t)) || eg(this.sessionStore.feedbacksHistory, l) || eg(this.sessionStore.feedbacksForSending, l)
                            ? Promise.resolve()
                            : (this.validateFeedback(l), s)
                              ? (this.sessionStore.storeSessionFeedbacks(l, i.radioSessionId), Promise.resolve())
                              : this.rotorResource
                                    .sessionFeedback({ radioSessionId: o, feedback: l })
                                    .then(() => (n && this.sessionStore.storeSessionFeedbacksInHistory([l], i.radioSessionId), Promise.resolve()))
                        : Promise.reject(new z.t('Cannot create feedback', { data: { type: a }, cause: u }));
                }
                sendFeedbacksForInactiveSessions() {
                    return this.multipleSessions
                        ? this.deferredFeedbacksQueue.prepare({ onlyInactiveSessions: !0 }).then((e) => {
                              var t;
                              return (null == (t = e.sessionsFeedbacks) ? void 0 : t.length)
                                  ? this.rotorResource
                                        .sessionsFeedbacks({ sessions: e.sessionsFeedbacks })
                                        .then(() => this.deferredFeedbacksQueue.commit(e))
                                        .catch((t) => (this.deferredFeedbacksQueue.rollback(e), Promise.reject(t)))
                                  : Promise.resolve();
                          })
                        : Promise.resolve();
                }
                sendDeferredFeedbacks(e) {
                    let { radioSessionId: t, entity: a, from: r } = e,
                        { feedback: i, error: s } = em({ entity: a, type: ec.O.SKIP, from: r });
                    if (!i) return Promise.reject(new z.t('Cannot create deferred skip feedback', { cause: s }));
                    if (!('trackId' in i.event && e_(a))) {
                        var n, o;
                        this.validateFeedback(i);
                        let e = this.sessionStore.store.get(t);
                        eg(null != (n = null == e ? void 0 : e.historyFeedbacks) ? n : [], i) ||
                            eg(null != (o = null == e ? void 0 : e.feedbacks) ? o : [], i) ||
                            this.sessionStore.storeSessionFeedbacksWithMultipleSessions(i, t);
                    }
                    return this.deferredFeedbacksQueue.prepare().then((e) => {
                        var t;
                        return (null == (t = e.sessionsFeedbacks) ? void 0 : t.length)
                            ? this.rotorResource
                                  .sessionsFeedbacks({ sessions: e.sessionsFeedbacks })
                                  .then(() => this.deferredFeedbacksQueue.commit(e))
                                  .catch((t) => {
                                      throw (this.deferredFeedbacksQueue.rollback(e), t);
                                  })
                            : Promise.resolve();
                    });
                }
                sendStoredInMemoryFeedbacks() {
                    return this.multipleSessions
                        ? this.deferredFeedbacksQueue.prepare().then((e) => {
                              var t;
                              return (null == (t = e.sessionsFeedbacks) ? void 0 : t.length)
                                  ? this.rotorResource
                                        .sessionsFeedbacks({ sessions: e.sessionsFeedbacks })
                                        .then(() => this.deferredFeedbacksQueue.commit(e))
                                        .catch((t) => (this.deferredFeedbacksQueue.rollback(e), Promise.reject(t)))
                                  : Promise.resolve();
                          })
                        : Promise.resolve();
                }
                sendFeedbackWithMultipleSessions(e) {
                    var t, a;
                    let { entity: r, type: i, from: s, session: n, sendWithSessionTracks: o = !1, saveFeedbackToHistory: l = !1 } = e,
                        u = eP(r);
                    if ((i === ec.O.RADIO_STARTED && (u = n.radioSessionId), !u)) return Promise.reject(new z.t('Cannot create feedback. No radioSessionId.'));
                    let { feedback: d, error: c } = em({ entity: r, type: i, from: s });
                    if (!d) return Promise.reject(new z.t('Cannot create feedback', { data: { type: i }, cause: c }));
                    if ('trackId' in d.event && e_(r)) return Promise.resolve();
                    let h = this.sessionStore.store.get(u);
                    return eg(null != (t = null == h ? void 0 : h.historyFeedbacks) ? t : [], d) || eg(null != (a = null == h ? void 0 : h.feedbacks) ? a : [], d)
                        ? Promise.resolve()
                        : (this.validateFeedback(d), o)
                          ? (this.sessionStore.storeSessionFeedbacksWithMultipleSessions(d, u), Promise.resolve())
                          : this.rotorResource
                                .sessionFeedback({ radioSessionId: u, feedback: d })
                                .then(() => (l && this.sessionStore.storeSessionFeedbacksInHistoryWithMultipleSessions([d], u), Promise.resolve()));
                }
                validateFeedback(e) {
                    let t = [ec.O.TRACK_STARTED, ec.O.TRACK_FINISHED, ec.O.SKIP, ec.O.LIKE, ec.O.UNLIKE, ec.O.DISLIKE, ec.O.UNDISLIKE];
                    if (!e.batchId && t.includes(e.event.type)) {
                        var a;
                        null == (a = this.afterError) || a.promise(new z.t('[VibeContext] No batchId in feedback', { data: { feedback: e } }));
                    }
                }
                constructor({ rotorResource: e, variables: t, sessionStore: a, deferredFeedbacksQueue: r }) {
                    (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'deferredFeedbacksQueue', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'afterError', void 0),
                        (this.rotorResource = e),
                        (this.sessionStore = a),
                        (this.deferredFeedbacksQueue = r),
                        (this.variables = t);
                }
            }
            function eI(e) {
                let { targetEntityWasPlayed: t, hasSourceContext: a, targetEntityIndex: r, livePlayableIndex: i, targetEntityIsLastEntity: s, useWaveQueue: n } = e;
                return !1 === n ? !s && t : !s && (t || a || r <= i);
            }
            function eC(e) {
                return e.filter((e) => {
                    if ('string' == typeof e) {
                        let [t] = e.split(':');
                        return !eS(null != t ? t : '');
                    }
                    return !e.ugc;
                });
            }
            let eT = (e, t) => {
                var a;
                return [
                    e,
                    null != (a = t.batchId) ? a : 'no-batch',
                    ((e) => {
                        let { type: t } = e.event;
                        return t === ec.O.SKIP || t === ec.O.TRACK_FINISHED ? 'track-ending' : t;
                    })(t),
                    ((e) => {
                        let { event: t } = e;
                        return 'trackId' in t && t.trackId
                            ? t.trackId
                            : 'playable' in t && t.playable
                              ? ''.concat(t.playable.type, ':').concat(t.playable.id)
                              : t.timestamp;
                    })(t),
                ]
                    .map((e) => encodeURIComponent(e))
                    .join(':');
            };
            class ex {
                get multipleSessions() {
                    var e, t, a;
                    return null != (a = null == (t = this.variables) || null == (e = t.multipleSessions) ? void 0 : e.enabled) && a;
                }
                storeSessionFeedbacksInHistory(e, t) {
                    if (this.multipleSessions && t) return void this.storeSessionFeedbacksInHistoryWithMultipleSessions(e, t);
                    for (let t of e) this.feedbacksHistory.push(t);
                }
                storeSessionFeedbacks(e, t) {
                    if (this.multipleSessions) return void this.storeSessionFeedbacksWithMultipleSessions(e, t);
                    let a = Array.isArray(e) ? e : [e];
                    this.feedbacksForSending.push(...a);
                }
                storeSessionFeedbacksInHistoryWithMultipleSessions(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        let t = Array.isArray(e) ? e : [e];
                        a.historyFeedbacks.push(...t);
                    } else throw new z.t('Can not store history feedback. No session was created in map.');
                }
                storeSessionFeedbacksWithMultipleSessions(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        var r, i;
                        let s = Array.isArray(e) ? e : [e];
                        a.feedbacks.push(...s), this.storePersistentFeedbacks(s, t, null != (i = null == (r = a.wave) ? void 0 : r.seeds) ? i : []);
                    } else throw new z.t('Can not store feedbacks for sending. No session was created in map.');
                }
                getSessionFeedbacksWithMultipleSessions(e) {
                    let t = this.store.get(e);
                    if (t) {
                        let e = t.feedbacks;
                        return (t.feedbacks = []), e;
                    }
                }
                getSessionsFeedbacks() {
                    let e = [];
                    for (let [r, i] of this.store.entries()) {
                        if (i.feedbacks.length) {
                            var t, a;
                            e.push({ radioSessionId: r, feedbacks: i.feedbacks, seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [] }),
                                (i.feedbacks = []);
                        }
                        i.feedbacks = [];
                    }
                    return 0 !== e.length ? e : void 0;
                }
                getSessionFeedbacks(e) {
                    if (this.multipleSessions) return this.getSessionFeedbacksWithMultipleSessions(e);
                    let t = this.feedbacksForSending;
                    return (this.feedbacksForSending = []), t;
                }
                clearStoredFeedbacks() {
                    (this.feedbacksHistory = []), (this.feedbacksForSending = []), this.store.clear();
                }
                isDeferredFeedbacksStorageEnabled() {
                    var e;
                    return this.multipleSessions && !!(null == (e = this.variables) ? void 0 : e.enableStoredDeferredFeedbacks) && !!this.deferredFeedbacksStore;
                }
                storePersistentFeedbacks(e, t, a) {
                    if (!this.isDeferredFeedbacksStorageEnabled()) return;
                    let r = Date.now();
                    Promise.all(
                        e
                            .map((e) => ({ id: eT(t, e), radioSessionId: t, seeds: a, feedback: e, createdAt: r }))
                            .map((e) => {
                                var t;
                                return null == (t = this.deferredFeedbacksStore) ? void 0 : t.storeFeedbackData(e);
                            }),
                    ).catch(() => void 0);
                }
                addActiveSession(e) {
                    let { session: t, feedbacks: a = [] } = e;
                    this.store.forEach((e) => {
                        e.active = !1;
                    });
                    let { radioSessionId: r, wave: i, acceptedSeeds: s, pumpkin: n, batchId: o, descriptionSeed: l } = t,
                        u = { radioSessionId: r, wave: i, acceptedSeeds: s, pumpkin: n, descriptionSeed: l, batchId: o, feedbacks: a, historyFeedbacks: [], active: !0 };
                    this.store.set(r, u), (this.observableActiveSession.value = u);
                }
                addClonedSession(e) {
                    let { radioSessionId: t, feedbacks: a = [] } = e;
                    this.store.set(t, { radioSessionId: t, feedbacks: a, historyFeedbacks: [], active: !1 });
                }
                constructor({ variables: e, deferredFeedbacksStore: t }) {
                    (0, L._)(this, 'store', new Map()),
                        (0, L._)(this, 'feedbacksHistory', []),
                        (0, L._)(this, 'feedbacksForSending', []),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'deferredFeedbacksStore', void 0),
                        (0, L._)(this, 'observableActiveSession', new er.cJ(void 0)),
                        (this.variables = e),
                        (this.deferredFeedbacksStore = t);
                }
            }
            !(function (e) {
                (e.CLONED = 'cloned'), (e.RESTORED_TO_DEFAULT_SEED = 'restoredToDefaultSeed');
            })(i || (i = {}));
            var eR = a(21263);
            function ew(e) {
                let { sequence: t, batchId: a, radioSessionId: r, additional: i } = e,
                    s = [];
                for (let e of t)
                    s.push({
                        type: q.R.VibeTrack,
                        additional: i,
                        batchId: a,
                        radioSessionId: r,
                        meta: { ...e.track, liked: e.liked, trackParameters: e.trackParameters },
                        fromCurrentContext: !0,
                        wasPlayed: !1,
                    });
                return s;
            }
            class eD {
                applyNewSession(e) {
                    return (
                        (this.contextData.meta.session = e), (this.contextData.meta.id = (0, eR.f)(e.wave.seeds)), this.sessionStore.addActiveSession({ session: e }), e
                    );
                }
                get shouldResetSeedToDefault() {
                    var e;
                    let {
                            meta: { session: t },
                        } = this.contextData,
                        { multipleSessions: a } = null != (e = this.variables) ? e : {},
                        { enabled: r, sessionLifeTimeMin: i } = null != a ? a : {};
                    return (
                        !(!r || void 0 === i || ((null == t ? void 0 : t.wave.seeds) && 1 === t.wave.seeds.length && t.wave.seeds.includes(ev))) &&
                        Date.now() - this.timeOfLastInteractionWithVibe >= 60 * i * 1e3
                    );
                }
                sessionClone(e) {
                    let { cloneSessionId: t, queue: a, trackToStartFrom: r, includeTracksInResponse: i, allowExplicit: s, interactive: n } = this.contextData;
                    return t
                        ? this.rotorResource
                              .sessionClone({
                                  includeWaveModel: !0,
                                  radioSessionId: t,
                                  trackToStartFrom: r,
                                  queue: a,
                                  allowExplicit: s,
                                  includeTracksInResponse: i,
                                  interactive: n,
                                  sessions: e.sessionsFeedbacks,
                              })
                              .then((t) => this.deferredFeedbacksQueue.commit(e).then(() => this.applyNewSession(t)))
                              .catch((t) => {
                                  throw (this.deferredFeedbacksQueue.rollback(e), new z.t('Error in clone vibe session', { cause: t }));
                              })
                        : Promise.reject(new z.t('Error in clone vibe session. No cloneSessionId'));
                }
                sessionNew(e) {
                    let { seeds: t, queue: a, trackToStartFrom: r, includeTracksInResponse: i, allowExplicit: s, interactive: n } = this.contextData;
                    return this.rotorResource
                        .sessionNew({
                            seeds: t,
                            includeWaveModel: !0,
                            trackToStartFrom: r,
                            queue: a,
                            allowExplicit: s,
                            includeTracksInResponse: i,
                            interactive: n,
                            sessions: e.sessionsFeedbacks,
                        })
                        .then((t) => this.deferredFeedbacksQueue.commit(e).then(() => this.applyNewSession(t)))
                        .catch((t) => {
                            throw (this.deferredFeedbacksQueue.rollback(e), new z.t('Error in create new vibe session', { cause: t }));
                        });
                }
                createSessionWithSettings(e) {
                    let { seeds: t, rotorQueueParam: a, allowExplicit: r, interactive: i, from: s } = e,
                        { trackToStartFrom: n, includeTracksInResponse: o } = this.contextData;
                    return this.deferredFeedbacksQueue.prepare().then((e) =>
                        this.rotorResource
                            .sessionNew({
                                sessions: e.sessionsFeedbacks,
                                includeTracksInResponse: o,
                                trackToStartFrom: n,
                                seeds: t,
                                queue: a,
                                allowExplicit: r,
                                includeWaveModel: !0,
                                interactive: i,
                            })
                            .then((t) =>
                                this.deferredFeedbacksQueue
                                    .commit(e)
                                    .then(() => ((this.contextData.meta.allowExplicit = r), s && (this.contextData.from = s), this.applyNewSession(t))),
                            )
                            .catch((t) => {
                                throw (this.deferredFeedbacksQueue.rollback(e), new z.t('Error in create new vibe session with settings', { cause: t }));
                            }),
                    );
                }
                defaultSessionNew(e) {
                    let { rotorQueueParam: t, preparedFeedbacks: a } = e,
                        { includeTracksInResponse: r, allowExplicit: i, queue: s } = this.contextData;
                    return this.rotorResource
                        .sessionNew({
                            sessions: a.sessionsFeedbacks,
                            seeds: [ev],
                            queue: null != t ? t : s,
                            includeWaveModel: !0,
                            allowExplicit: i,
                            includeTracksInResponse: r,
                            interactive: !0,
                        })
                        .then((e) => this.deferredFeedbacksQueue.commit(a).then(() => this.applyNewSession(e)))
                        .catch((e) => {
                            throw (this.deferredFeedbacksQueue.rollback(a), new z.t('Error in create new vibe session', { cause: e }));
                        });
                }
                getLoadContextMetaRequest() {
                    let { cloneSessionId: e } = this.contextData;
                    return this.deferredFeedbacksQueue
                        .prepare()
                        .then((t) =>
                            this.shouldResetSeedToDefault
                                ? ((this.restoreMethod = i.RESTORED_TO_DEFAULT_SEED), this.defaultSessionNew({ preparedFeedbacks: t }))
                                : e
                                  ? ((this.restoreMethod = i.CLONED), this.sessionClone(t))
                                  : this.sessionNew(t),
                        );
                }
                getEntitiesFromDefaultSessionNew(e) {
                    let t = { from: this.contextData.from, utmLink: this.contextData.utmLink };
                    return this.deferredFeedbacksQueue
                        .prepare()
                        .then((t) => this.defaultSessionNew({ rotorQueueParam: e, preparedFeedbacks: t }))
                        .then((e) => {
                            let { batchId: a, sequence: r, radioSessionId: i } = e;
                            return ew({ batchId: a, sequence: r, radioSessionId: i, additional: t });
                        });
                }
                getEntitiesFromCurrentSession(e) {
                    if (!this.contextData.meta.session) return Promise.reject(new z.t('Cannot get next vibe tracks. No session'));
                    let {
                            meta: { session: t },
                        } = this.contextData,
                        a = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        { radioSessionId: r } = t;
                    return this.deferredFeedbacksQueue.prepare({ radioSessionId: r }).then((t) => {
                        var i, s;
                        let n = null == (s = t.sessionsFeedbacks) || null == (i = s[0]) ? void 0 : i.feedbacks;
                        return this.rotorResource
                            .sessionTracks({ radioSessionId: r, queue: e, feedbacks: n })
                            .then((e) =>
                                this.deferredFeedbacksQueue.commit(t).then(() => {
                                    let { batchId: t, sequence: i } = e,
                                        s = ew({ batchId: t, sequence: i, radioSessionId: r, additional: a });
                                    return (this.contextData.meta.sessionTracks = e), (this.contextData.meta.sessionTracks.sequence = []), s;
                                }),
                            )
                            .catch(
                                (e) => (
                                    this.deferredFeedbacksQueue.rollback(t),
                                    Promise.reject(new z.t('Error in getting next vibe tracks from current session', { cause: e }))
                                ),
                            );
                    });
                }
                getEntitiesFromNextSequence(e) {
                    Promise.resolve([]);
                    return (this.shouldResetSeedToDefault ? this.getEntitiesFromDefaultSessionNew(e) : this.getEntitiesFromCurrentSession(e)).then((e) => e);
                }
                getEntitiesFromInitialSequence() {
                    if (!this.contextData.meta.session) return [];
                    let e = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        { batchId: t, sequence: a, radioSessionId: r } = this.contextData.meta.session,
                        i = ew({ batchId: t, sequence: a, radioSessionId: r, additional: e });
                    return (this.contextData.meta.session.sequence = []), i;
                }
                constructor({ contextData: e, rotorResource: t, sessionStore: a, deferredFeedbacksQueue: r, variables: i }) {
                    (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'deferredFeedbacksQueue', void 0),
                        (0, L._)(this, 'timeOfLastInteractionWithVibe', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'restoreMethod', void 0),
                        (this.contextData = e),
                        (this.rotorResource = t),
                        (this.sessionStore = a),
                        (this.deferredFeedbacksQueue = r),
                        (this.variables = i),
                        (this.timeOfLastInteractionWithVibe = e.timeOfLastInteractionWithVibe ? e.timeOfLastInteractionWithVibe : Date.now());
                }
            }
            function eN(e, t, a) {
                let r = void 0 !== a ? a : t;
                return eC(e.slice(r, r + 2));
            }
            function eO(e, t) {
                let a = null,
                    r = null;
                for (let i = e.length - 1; i >= 0; i--) {
                    let s = e[i];
                    if (!s || !eh(s.entity)) continue;
                    let { entity: n, sourceContext: o } = s;
                    if (!o) {
                        if (n.data.wasPlayed || t === i) break;
                        (a = s), (r = i);
                    }
                }
                let i = null !== r ? r + 1 : e.length;
                return { vibeHistory: e.slice(0, i), firstNotPlayedVibeEntity: a, firstNotPlayedVibeEntityIndex: r };
            }
            function eM(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { entityList: a, livePlayableIndex: r, index: i } = e;
                return t
                    ? eN(
                          a.value.map((e) => ey(e.entity)),
                          i.value,
                          r.value,
                      )
                    : eC(
                          (function (e, t) {
                              let { vibeHistory: a } = eO(e, t);
                              return a.filter((e) => !e_(e.entity)).map((e) => ey(e.entity));
                          })(a.value, i.value),
                      ).slice(-100);
            }
            class eL {
                storeFeedbackData() {
                    return Promise.resolve();
                }
                getStoredFeedbacksData() {
                    return Promise.resolve([]);
                }
                deleteFeedbacksData() {
                    return Promise.resolve();
                }
                deleteFeedbacksBySessionFeedbacks() {
                    return Promise.resolve();
                }
                isAvailable() {
                    return !1;
                }
                openDatabase() {
                    return Promise.resolve();
                }
                deleteDatabase() {
                    return Promise.resolve();
                }
                setErrorLogger() {}
            }
            class eF {
                prepare() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this.runtimeState.prepareLock.catch(() => void 0).then(() => this.prepareInternal(e));
                    return (
                        (this.runtimeState.prepareLock = t.then(
                            () => void 0,
                            () => void 0,
                        )),
                        t
                    );
                }
                commit(e) {
                    if ((this.storeMemoryFeedbacksInHistory(e.memorySessionsFeedbacks), !this.deferredFeedbacksStore))
                        return this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds), Promise.resolve();
                    let t = this.getPersistentCleanupRequests(e);
                    return t.length
                        ? Promise.all(t)
                              .then(() => {
                                  this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds);
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.logger) || t.error('[DeferredFeedbacksQueue] Error while deleting sent feedbacks', { error: e });
                              })
                        : (this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds), Promise.resolve());
                }
                rollback(e) {
                    this.restoreMemoryFeedbacks(e.memorySessionsFeedbacks), this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds);
                }
                prepareInternal(e) {
                    let t = this.prepareMemorySessionsFeedbacks(e),
                        a = this.claimMemorySessionsFeedbacks(t);
                    return this.prepareStoredFeedbacks(e).then((e) => {
                        this.claimStoredFeedbacks(e);
                        let r = [...a, ...e.map((e) => e.id)];
                        return {
                            memorySessionsFeedbacks: t,
                            storedFeedbacks: e,
                            claimedStoredFeedbackIds: r,
                            sessionsFeedbacks: this.mergeSessionsFeedbacks(t, this.groupStoredFeedbacksBySession(e)),
                        };
                    });
                }
                prepareMemorySessionsFeedbacks(e) {
                    let { radioSessionId: t, onlyInactiveSessions: a } = e;
                    if (a) return this.prepareInactiveMemorySessionsFeedbacks();
                    if (!t) return this.sessionStore.getSessionsFeedbacks();
                    let r = this.sessionStore.getSessionFeedbacks(t);
                    if (null == r ? void 0 : r.length) return [{ radioSessionId: t, seeds: this.getSessionSeeds(t), feedbacks: r }];
                }
                prepareStoredFeedbacks(e) {
                    var t, a, r;
                    let { radioSessionId: i, onlyInactiveSessions: s } = e;
                    return ((null == (t = this.variables) ? void 0 : t.enableStoredDeferredFeedbacks) ||
                        (null == (a = this.variables) ? void 0 : a.shouldDeleteDeferredFeedbacksObjectStore)) &&
                        this.deferredFeedbacksStore
                        ? (this.deferredFeedbacksStore.setErrorLogger((e) => {
                              var t;
                              null == (t = this.logger) || t.error('[DeferredFeedbacksStore] Error', { error: e });
                          }),
                          null == (r = this.variables) ? void 0 : r.shouldDeleteDeferredFeedbacksObjectStore)
                            ? this.deferredFeedbacksStore
                                  .deleteDatabase()
                                  .then(() => [])
                                  .catch((e) => {
                                      var t;
                                      return null == (t = this.logger) || t.error('[DeferredFeedbacksStore] Error while deleting database', { error: e }), [];
                                  })
                            : this.deferredFeedbacksStore
                                  .openDatabase()
                                  .then(() =>
                                      ((e, t) => {
                                          if (!e.isAvailable()) return Promise.resolve({ storedFeedbacks: [] });
                                          let a = Date.now();
                                          return e.getStoredFeedbacksData(t, a).then((e) =>
                                              e.length
                                                  ? {
                                                        storedFeedbacks: e,
                                                        sessionsFeedbacks: ((e) => {
                                                            let t = new Map();
                                                            for (let a of e) {
                                                                let e = t.get(a.radioSessionId);
                                                                if (e) {
                                                                    e.feedbacks.push(a.feedback);
                                                                    continue;
                                                                }
                                                                t.set(a.radioSessionId, { radioSessionId: a.radioSessionId, seeds: a.seeds, feedbacks: [a.feedback] });
                                                            }
                                                            return Array.from(t.values());
                                                        })(e),
                                                    }
                                                  : { storedFeedbacks: e },
                                          );
                                      })(this.deferredFeedbacksStore),
                                  )
                                  .then((e) => {
                                      let { storedFeedbacks: t } = e;
                                      return t.filter((e) => {
                                          var t;
                                          let a = !i || e.radioSessionId === i,
                                              r = !s || (null == (t = this.sessionStore.store.get(e.radioSessionId)) ? void 0 : t.active) === !1;
                                          return a && r && !this.runtimeState.claimedStoredFeedbackIds.has(e.id);
                                      });
                                  })
                                  .catch((e) => {
                                      var t;
                                      return null == (t = this.logger) || t.error('[DeferredFeedbacksStore] Error while preparing stored feedbacks', { error: e }), [];
                                  })
                        : Promise.resolve([]);
                }
                claimStoredFeedbacks(e) {
                    for (let t of e) this.runtimeState.claimedStoredFeedbackIds.add(t.id);
                }
                claimMemorySessionsFeedbacks(e) {
                    if (!this.shouldUseStoredFeedbacks() || !e) return [];
                    let t = [];
                    for (let a of e)
                        for (let e of a.feedbacks) {
                            let r = eT(a.radioSessionId, e);
                            this.runtimeState.claimedStoredFeedbackIds.add(r), t.push(r);
                        }
                    return t;
                }
                releaseStoredFeedbackIdsClaim(e) {
                    if (e) for (let t of e) this.runtimeState.claimedStoredFeedbackIds.delete(t);
                }
                getPersistentCleanupRequests(e) {
                    if (!this.deferredFeedbacksStore) return [];
                    let t = [];
                    if ((e.storedFeedbacks.length && t.push(this.deferredFeedbacksStore.deleteFeedbacksData(e.storedFeedbacks)), this.shouldUseStoredFeedbacks())) {
                        var a;
                        for (let r of null != (a = e.memorySessionsFeedbacks) ? a : [])
                            t.push(this.deferredFeedbacksStore.deleteFeedbacksBySessionFeedbacks({ radioSessionId: r.radioSessionId, feedbacks: r.feedbacks }));
                    }
                    return t;
                }
                shouldUseStoredFeedbacks() {
                    var e;
                    return !!((null == (e = this.variables) ? void 0 : e.enableStoredDeferredFeedbacks) && this.deferredFeedbacksStore);
                }
                groupStoredFeedbacksBySession(e) {
                    let t = new Map();
                    for (let a of e) {
                        let e = t.get(a.radioSessionId);
                        if (e) {
                            this.addFeedbacks(e.feedbacks, [a.feedback]);
                            continue;
                        }
                        t.set(a.radioSessionId, { radioSessionId: a.radioSessionId, seeds: a.seeds, feedbacks: [a.feedback] });
                    }
                    let a = Array.from(t.values());
                    return a.length ? a : void 0;
                }
                mergeSessionsFeedbacks(e, t) {
                    let a = [],
                        r = (e) => {
                            if (e)
                                for (let t of e) {
                                    let e = a.find((e) => e.radioSessionId === t.radioSessionId);
                                    if (e) {
                                        this.addFeedbacks(e.feedbacks, t.feedbacks);
                                        continue;
                                    }
                                    let r = [];
                                    this.addFeedbacks(r, t.feedbacks), a.push({ radioSessionId: t.radioSessionId, seeds: t.seeds, feedbacks: r });
                                }
                        };
                    return r(e), r(t), a.length ? a : void 0;
                }
                addFeedbacks(e, t) {
                    for (let a of t) eg(e, a) || e.push(a);
                }
                storeMemoryFeedbacksInHistory(e) {
                    if (e) for (let t of e) this.sessionStore.storeSessionFeedbacksInHistory(t.feedbacks, t.radioSessionId);
                }
                restoreMemoryFeedbacks(e) {
                    if (e)
                        for (let r of e) {
                            var t, a;
                            if (null == (a = this.variables) || null == (t = a.multipleSessions) ? void 0 : t.enabled) {
                                let e = this.sessionStore.store.get(r.radioSessionId);
                                if (e) {
                                    e.feedbacks.push(...r.feedbacks);
                                    continue;
                                }
                            } else {
                                this.sessionStore.feedbacksForSending.push(...r.feedbacks);
                                continue;
                            }
                            this.sessionStore.storeSessionFeedbacks(r.feedbacks, r.radioSessionId);
                        }
                }
                getSessionSeeds(e) {
                    var t, a, r;
                    return null != (r = null == (a = this.sessionStore.store.get(e)) || null == (t = a.wave) ? void 0 : t.seeds) ? r : [];
                }
                prepareInactiveMemorySessionsFeedbacks() {
                    let e = [];
                    for (let r of this.sessionStore.store.values()) {
                        var t, a;
                        !r.active &&
                            r.feedbacks.length &&
                            (e.push({ radioSessionId: r.radioSessionId, seeds: null != (a = null == (t = r.wave) ? void 0 : t.seeds) ? a : [], feedbacks: r.feedbacks }),
                            (r.feedbacks = []));
                    }
                    return e.length ? e : void 0;
                }
                getRuntimeState(e) {
                    if (!e) return this.createRuntimeState();
                    let t = eF.runtimeStateByStore.get(e);
                    if (t) return t;
                    let a = this.createRuntimeState();
                    return eF.runtimeStateByStore.set(e, a), a;
                }
                createRuntimeState() {
                    return { prepareLock: Promise.resolve(), claimedStoredFeedbackIds: new Set() };
                }
                constructor({ sessionStore: e, variables: t, deferredFeedbacksStore: a, logger: r }) {
                    (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'deferredFeedbacksStore', void 0),
                        (0, L._)(this, 'logger', void 0),
                        (0, L._)(this, 'runtimeState', void 0),
                        (this.sessionStore = e),
                        (this.variables = t),
                        (this.deferredFeedbacksStore = a),
                        (this.logger = r),
                        (this.runtimeState = this.getRuntimeState(a));
                }
            }
            (0, L._)(eF, 'runtimeStateByStore', new WeakMap());
            class eB extends es {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    (this.afterErrorHook = t.afterError),
                        (this.feedbacksController.afterErrorHook = t.afterError),
                        t.beforeDestroy.tapPromise('VibeContext', () => {
                            var e;
                            return (null == (e = this.variables) ? void 0 : e.sendDeferredFeedbacksOnDestroy)
                                ? this.feedbacksController.sendStoredInMemoryFeedbacks().catch((e) => {
                                      this.logVibeError({ message: 'Error while sending stored in-memory vibe feedbacks on destroy', cause: e });
                                  })
                                : Promise.resolve();
                        }),
                        t.beforeContextSet.tap('VibeContext', () => {
                            var e;
                            if (!this.isCurrentContext) return;
                            let t = a.state.queueState.currentEntity.value;
                            if (!t) return;
                            if (!(null == (e = this.variables) ? void 0 : e.flushDeferredFeedbacksOnContextSwitch)) {
                                this.sendFeedback({ entity: t.entity, type: ec.O.SKIP }), this.sessionStore.clearStoredFeedbacks();
                                return;
                            }
                            let r = this.contextData.meta.session;
                            if (!r) {
                                this.logVibeError({ message: 'Cannot send feedbacks on context switch. No session' }), this.sessionStore.clearStoredFeedbacks();
                                return;
                            }
                            this.feedbacksController
                                .sendDeferredFeedbacks({ radioSessionId: r.radioSessionId, entity: t.entity, from: this.contextData.from, seeds: r.wave.seeds })
                                .catch((e) => {
                                    this.logVibeError({ message: 'Error while sending vibe feedbacks on context switch', cause: e });
                                });
                        }),
                        t.afterSetupQueue.tap('VibeContext', () => {
                            if (!this.isCurrentContext || !this.sessionController.restoreMethod) return;
                            let { value: e } = a.state.queueState.entityList;
                            if ((this.feedbacksController.storeFeedbacksForWasPlayedTracks(e.slice(0, -1), this.from), this.contextData.meta.session)) {
                                let e = this.sessionController.getEntitiesFromInitialSequence();
                                a.injectLast({ entitiesData: e });
                            }
                            this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                        }),
                        t.afterMediaStartPlaying.tapPromise('VibeContext', () =>
                            this.isCurrentContext && this.contextData.meta.session
                                ? new Promise((e) => {
                                      let t = a.state.queueState.currentEntity.value;
                                      if (!t) return void e();
                                      let { entity: r } = t;
                                      this.isVibeStarted
                                          ? this.sendFeedback({ type: ec.O.TRACK_STARTED, entity: r, saveFeedbackToHistory: !0 })
                                          : (this.sendFeedback({ type: ec.O.RADIO_STARTED, entity: r }).then(() => {
                                                this.sendFeedback({ type: ec.O.TRACK_STARTED, entity: r, saveFeedbackToHistory: !0 });
                                            }),
                                            (this.isVibeStarted = !0)),
                                          e();
                                  })
                                : Promise.resolve(),
                        ),
                        t.beforeFindPlayableEntityIndex.tapPromise('VibeContext', (e) => {
                            if (!this.isCurrentContext) return Promise.resolve();
                            let t = Promise.resolve();
                            switch (e.method) {
                                case F.So.AUTO_MOVE_FORWARD:
                                case F.So.ERROR_MOVE_FORWARD:
                                    t = this.onAutoMoveForward(a);
                                    break;
                                case F.So.MOVE_FORWARD:
                                    t = this.onMoveForward(a);
                                    break;
                                case F.So.MOVE_BACKWARD:
                                    t = this.onMoveBackward(a);
                                    break;
                                case F.So.SET_INDEX:
                                    t = this.onSetIndex(a, e.indexToChangeOn);
                            }
                            return t.finally(() => {
                                this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                            });
                        }),
                        t.beforeInject.tap('VibeContext', (e) => {
                            var t;
                            if (!this.isCurrentContext || !e.sourceContext) return e;
                            let a = (function (e) {
                                let { position: t, livePlayableIndex: a, entityList: r, useWaveQueue: i } = e;
                                if ('number' != typeof a || !i) return t;
                                let s = (function (e, t) {
                                        if (void 0 === e) return 0;
                                        let a = 0;
                                        for (let i = t + 1; i < e.length; i++) {
                                            var r;
                                            (null == (r = e[i]) ? void 0 : r.sourceContext) && (a += 1);
                                        }
                                        return a;
                                    })(r, a),
                                    n = a + 1 + s;
                                return t > n ? n : t;
                            })({
                                position: e.position,
                                livePlayableIndex: e.livePlayableIndex,
                                entityList: e.entityList,
                                useWaveQueue: null == (t = this.variables) ? void 0 : t.useWaveQueue,
                            });
                            return (this.sessionController.timeOfLastInteractionWithVibe = Date.now()), { ...e, calibratedPosition: a };
                        }),
                        t.afterInject.tap('VibeContext', (e) => {
                            if (!this.isCurrentContext) return e;
                            let { contextEntityPairs: t } = e;
                            for (let e of t)
                                if ((eh(e.entity) || (0, eA.b)(e.entity)) && !e.entity.data.fromCurrentContext) {
                                    var r, i;
                                    (e.entity.data.batchId = ((i = e.entity), 'user-queue-'.concat(i.data.meta.id, '-').concat(Date.now()))),
                                        (e.entity.data.radioSessionId = null == (r = this.contextData.meta.session) ? void 0 : r.radioSessionId);
                                } else a.hooks.afterError.promise(new z.t('Can not manualy set batchId/radioSessionId for '.concat(e.entity.data.type, ' entity.')));
                            return { contextEntityPairs: t };
                        });
                }
                get observableActiveSession() {
                    return this.sessionStore.observableActiveSession;
                }
                loadContextMeta() {
                    let {
                        meta: { id: e },
                        cloneSessionId: t,
                    } = this.contextData;
                    return (
                        (this.contextData.queue = this.contextData.queue ? eC(this.contextData.queue) : void 0),
                        t && this.sessionStore.addClonedSession({ radioSessionId: t }),
                        this.sessionController.getLoadContextMetaRequest().then((t) => ((this.contextData.trackToStartFrom = void 0), { id: e, session: t }))
                    );
                }
                get shouldRemoveNotPlayedVibeTracksByTtl() {
                    return Date.now() - this.sessionController.timeOfLastInteractionWithVibe >= 18e5;
                }
                setSettings(e) {
                    var t, a, r;
                    let i,
                        { seeds: s, queueState: n, allowExplicit: o, interactive: l, from: u } = e;
                    this.contextData.interactive = l;
                    let d = eM(n, null == (t = this.variables) ? void 0 : t.sendCorrectRotorQueueParam),
                        c = n.currentEntity.value,
                        h = null != o ? o : n.filterParams.value.allowExplicit;
                    if (null != (r = null == (a = this.variables) ? void 0 : a.batchFeedbacksOnVibeSettingsChange) && r)
                        c && eh(c.entity) && this.feedbacksController.storeDeferredSkip({ entity: c.entity, from: this.contextData.from }),
                            (i = this.sessionController.createSessionWithSettings({ seeds: s, rotorQueueParam: d, allowExplicit: h, interactive: l, from: u }));
                    else {
                        let e = Promise.resolve();
                        c && eh(c.entity) && (e = this.sendFeedback({ entity: c.entity, type: ec.O.SKIP })),
                            (i = e.then(() =>
                                this.sessionController.createSessionWithSettings({ seeds: s, rotorQueueParam: d, allowExplicit: h, interactive: l, from: u }),
                            ));
                    }
                    return i
                        .then(() => {
                            var e;
                            (null == (e = this.variables) ? void 0 : e.sendRadioStartedOnVibeSettingsChange) && (this.isVibeStarted = !1), u && (this.from = u);
                        })
                        .catch((e) => {
                            this.logVibeError({ message: 'Error while setting new vibe settings', cause: e });
                        });
                }
                getContextEntitiesData() {
                    let {
                        meta: { session: e },
                    } = this.contextData;
                    return e
                        ? Promise.resolve(this.sessionController.getEntitiesFromInitialSequence())
                        : this.loadContextMeta().then(() => this.sessionController.getEntitiesFromInitialSequence());
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                logVibeError(e) {
                    var t, a, r;
                    let { message: i, cause: s } = e;
                    null == (a = this.afterErrorHook) ||
                        a.promise(
                            new z.t('[VibeContext] '.concat(i || 'Error in VibeContext'), {
                                cause: s,
                                data: {
                                    contextId: this.contextData.meta.id,
                                    sessionId: null != (r = null == (t = this.contextData.meta.session) ? void 0 : t.radioSessionId) ? r : '',
                                },
                            }),
                        );
                }
                onAutoMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: ec.O.TRACK_FINISHED,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        let { index: t, entityList: r } = e.state.queueState,
                            i = t.value === r.value.length - 2,
                            s = t.value === r.value.length - 1;
                        if (!i && !s) return Promise.resolve();
                        let n = this.getNextTracks(a).then((t) => {
                            e.injectLast({ entitiesData: t }), (this.availableActions.moveForward.value = !0);
                        });
                        return s ? n : (i && n.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: ec.O.SKIP,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var t;
                        let { index: r, entityList: i, livePlayableIndex: s } = e.state.queueState,
                            n = r.value === i.value.length - 1,
                            o = r.value + 1,
                            l = e.getEntityByIndex({ index: o }),
                            u = o === i.value.length - 1;
                        if (
                            eI({
                                targetEntityWasPlayed: !!(l && eh(l.entity) && l.entity.data.wasPlayed),
                                hasSourceContext: !!(null == l ? void 0 : l.sourceContext),
                                targetEntityIndex: o,
                                livePlayableIndex: s.value,
                                targetEntityIsLastEntity: u,
                                useWaveQueue: !!(null == (t = this.variables) ? void 0 : t.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let d = this.getNextTracks(a).then((t) => e.injectLast({ entitiesData: t }));
                        return n ? d : (d.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveBackward(e) {
                    this.removeNotPlayedVibeTracksByTtl(e);
                    let t = e.state.queueState.currentEntity.value;
                    if (!t) return Promise.resolve();
                    let { entity: a } = t;
                    return this.sendFeedback({ entity: a, type: ec.O.SKIP, saveFeedbackToHistory: !0 }), Promise.resolve();
                }
                onSetIndex(e, t) {
                    var a;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let r = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: ec.O.SKIP,
                        entity: null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var a;
                        let { index: i, entityList: s, livePlayableIndex: n } = e.state.queueState,
                            o = i.value === s.value.length - 1,
                            l = e.getEntityByIndex({ index: t });
                        if (
                            eI({
                                targetEntityWasPlayed: !!(l && eh(l.entity) && l.entity.data.wasPlayed),
                                hasSourceContext: !!(null == l ? void 0 : l.sourceContext),
                                targetEntityIndex: t,
                                livePlayableIndex: n.value,
                                targetEntityIsLastEntity: t === s.value.length - 1,
                                useWaveQueue: !!(null == (a = this.variables) ? void 0 : a.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let u = this.getNextTracks(r)
                            .then((t) => e.injectLast({ entitiesData: t }))
                            .catch((e) => this.logVibeError({ cause: e }));
                        return o ? u : Promise.resolve();
                    });
                }
                getNextTracks(e) {
                    return (
                        (this.sessionTracksPromise = this.sendFeedbacksForInactiveSessions()
                            .then(() => this.sessionController.getEntitiesFromNextSequence(e))
                            .finally(() => {
                                (this.sessionTracksPromise = null), (this.availableActions.moveForward.value = !0);
                            })),
                        (this.availableActions.moveForward.value = !1),
                        this.sessionTracksPromise
                    );
                }
                sendFeedbacksForInactiveSessions() {
                    return this.feedbacksController
                        .sendFeedbacksForInactiveSessions()
                        .catch((e) => (this.logVibeError({ message: 'Error while sending feedback for inactive sessions', cause: e }), Promise.resolve()));
                }
                sendFeedback(e) {
                    let { entity: t, type: a, sendWithSessionTracks: r = !1, saveFeedbackToHistory: i = !1 } = e;
                    if (!t) return this.logVibeError({ message: 'Cannot send feedback. No entity' }), Promise.resolve();
                    let { session: s } = this.contextData.meta;
                    return s
                        ? this.feedbacksController
                              .sendFeedback({ entity: t, type: a, session: s, from: this.contextData.from, sendWithSessionTracks: r, saveFeedbackToHistory: i })
                              .catch((e) => (this.logVibeError({ message: 'Error while sending feedback', cause: e }), Promise.resolve()))
                        : (this.logVibeError({ message: 'Cannot send feedback. No session' }), Promise.resolve());
                }
                calculateLivePlayableIndex(e) {
                    return e.state.queueState.livePlayableIndex.value;
                }
                removeNotPlayedVibeTracksByTtl(e) {
                    let { index: t, entityList: a } = e.state.queueState;
                    if (this.shouldRemoveNotPlayedVibeTracksByTtl) {
                        let r = [];
                        for (let e = t.value + 1; e < a.value.length; e++) {
                            let t = a.value[e];
                            t && eh(t.entity) && !t.entity.data.wasPlayed && r.push(e);
                        }
                        this.remove(e, r);
                    }
                }
                removeVibeTracksBeforeMoveForward(e) {
                    var t, a;
                    let { index: r, entityList: i, livePlayableIndex: s } = e.state.queueState;
                    if (!(null != (a = null == (t = this.variables) ? void 0 : t.useWaveQueue) && a)) {
                        let t = this.getPositionsFromStartToEnd(r.value + 2, i.value.length);
                        this.remove(e, t);
                        return;
                    }
                    let n = this.findNextPlayablePosition(i.value, r.value);
                    if (null === n) return;
                    let o = this.getPositionsToRemoveForWaveQueue(i.value, n + 1, s.value);
                    this.remove(e, o);
                }
                findNextPlayablePosition(e, t) {
                    for (let r = t + 1; r < e.length; r++) {
                        var a;
                        if ((null == (a = e[r]) ? void 0 : a.entity.hidden) !== !0) return r;
                    }
                    return null;
                }
                getPositionsToRemoveForWaveQueue(e, t, a) {
                    let r = [];
                    for (let i = t; i < e.length; i++) {
                        let t = e[i],
                            s = i <= a,
                            n = !!(null == t ? void 0 : t.sourceContext);
                        s || n || r.push(i);
                    }
                    return r;
                }
                getPositionsFromStartToEnd(e, t) {
                    let a = [];
                    for (let r = e; r < t; r++) a.push(r);
                    return a;
                }
                onQueueNavigationCommon(e) {
                    var t;
                    let a = eM(e.state.queueState, null == (t = this.variables) ? void 0 : t.sendCorrectRotorQueueParam);
                    return this.removeNotPlayedVibeTracksByTtl(e), a;
                }
                remove(e, t) {
                    (this.handleAfterEntityRemoveHook = !1), e.remove(t, !0);
                }
                constructor(e) {
                    super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'isVibeStarted', !1),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'sessionTracksPromise', null),
                        (0, L._)(this, 'feedbacksController', void 0),
                        (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'deferredFeedbacksQueue', void 0),
                        (0, L._)(this, 'sessionController', void 0),
                        (0, L._)(this, 'afterErrorHook', void 0),
                        (0, L._)(this, 'handleAfterEntityRemoveHook', !0);
                    let { data: t, rotorResource: a, variables: r, deferredFeedbacksStore: i, logger: s } = e;
                    this.contextData = t;
                    let n = null != i ? i : new eL();
                    (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = r),
                        (this.sessionStore = new ex({ variables: r, deferredFeedbacksStore: n, logger: s })),
                        (this.deferredFeedbacksQueue = new eF({ sessionStore: this.sessionStore, variables: r, deferredFeedbacksStore: n, logger: s })),
                        (this.feedbacksController = new ek({
                            rotorResource: a,
                            sessionStore: this.sessionStore,
                            deferredFeedbacksQueue: this.deferredFeedbacksQueue,
                            variables: r,
                        })),
                        (this.sessionController = new eD({
                            variables: this.variables,
                            contextData: this.contextData,
                            rotorResource: a,
                            sessionStore: this.sessionStore,
                            deferredFeedbacksQueue: this.deferredFeedbacksQueue,
                        }));
                }
            }
            class eq extends es {
                getContextId() {
                    var e, t;
                    let a = null == (t = this.contextData.meta.albums) || null == (e = t[0]) ? void 0 : e.id;
                    return a ? ''.concat(this.contextData.meta.id, ':').concat(a) : String(this.contextData.meta.id);
                }
                loadTrailer() {
                    return this.tracksResource
                        .getTrailer({ trackId: this.getContextId() })
                        .then((e) => ((this.contextData.meta = e.track), e))
                        .catch((e) => {
                            throw new ei('Error in PlaylistContext', { code: 'E_PLAYLIST_LOAD_TRAILER', cause: e, data: { contextId: this.contextData.meta.id } });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.getContextId();
                    return this.tracksResource
                        .getTracksMeta({ trackIds: [e], withProgress: !0 })
                        .then((t) => {
                            let a = t[0];
                            if (a) return (this.contextData.meta = a), a;
                            throw new ei('Error in VariousContext. Track not found', { code: 'E_VARIOUS_LOAD_CONTEXT_META', data: { contextId: e } });
                        })
                        .catch((t) => {
                            throw new ei('Error in VariousContext', { code: 'E_VARIOUS_LOAD_CONTEXT_META', cause: t, data: { contextId: e } });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => [{ meta: t.track, type: q.R.SmartPreview, additional: e }])
                        : this.contextData.meta
                          ? Promise.resolve([{ meta: this.contextData.meta, type: q.R.Unknown, additional: e }])
                          : this.loadContextMeta().then((t) => [{ meta: t, type: q.R.Unknown, additional: e }]);
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'tracksResource', void 0), (0, L._)(this, 'variables', void 0);
                    let { data: t, tracksResource: a, variables: r } = e;
                    (this.tracksResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            class eV extends z.t {
                constructor(e, { code: t = 'E_CONTEXT_FACTORY', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'ContextFactoryException'), Object.setPrototypeOf(this, eV.prototype);
                }
            }
            var eU = a(11051);
            let eW = (e) => [{ type: q.R.Generative, meta: e }],
                eK = 'E_GENERATIVE_RESTART_LIMIT',
                ej = 'E_GENERATIVE_RESTART_FAILED',
                eY = new Set([F.QC.PLAY, F.QC.RESUME, F.QC.MEDIA_ELEMENT_ERROR, F.QC.PRE_FETCH]);
            class eG extends es {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    a.state.playerState.status.onChange((e) => {
                        this.isCurrentContext &&
                            e &&
                            (e === F.MT.PLAYING
                                ? (this.isPaused && this.sendFeedback(eU.Q.StreamPlay, a), (this.isPaused = !1))
                                : e === F.MT.PAUSED && (this.sendFeedback(eU.Q.StreamPause, a), (this.isPaused = !0)));
                    }),
                        t.afterError.tap('GenerativeContext', (e) => {
                            let t = e && e instanceof ei && e.code === eK,
                                r = e && e instanceof ei && e.code === ej,
                                i = e instanceof F.LI && eY.has(e.code);
                            !t && !r && this.isCurrentContext && i && (this.restartsCount >= 5 || this.restart(a));
                        });
                }
                loadContextMeta() {
                    return this.rotorResource
                        .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), stream: e.stream, ...e.data };
                            return (this.contextData.meta = t), t;
                        })
                        .catch((e) => {
                            throw new ei('Error GenerativeContext', {
                                code: 'E_GENERATIVE_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta.stream) ? void 0 : e.id)
                        ? Promise.resolve(eW(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eW(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                sendFeedback(e, t) {
                    var a;
                    return this.rotorResource
                        .stationFeedback({
                            type: e,
                            stationId: String(this.contextData.meta.id),
                            streamId: String(null == (a = this.contextData.meta.stream) ? void 0 : a.id),
                            timestamp: ep(),
                        })
                        .then((a) => {
                            if (a.reload_stream) {
                                let a = e === eU.Q.TimestampDislike;
                                this.restart(t, a);
                            }
                        });
                }
                restart(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.restartsCount >= 5) {
                        let t = new ei('Error GenerativeContext', { code: eK, data: { contextId: this.contextData.meta.id } });
                        return e.hooks.afterError.promise(t), Promise.reject(t);
                    }
                    return (
                        this.restartsCount++,
                        this.loadContextMeta()
                            .then(() => {
                                let a = t || !this.isPaused;
                                return t && this.isPaused && (this.isPaused = !1), e.restartContext({ playAfterRestart: a, entitiesData: eW(this.contextData.meta) });
                            })
                            .catch((t) => {
                                let a = new ei('Error GenerativeContext restart', {
                                    code: ej,
                                    cause: (0, M.createObjectFromError)(t),
                                    data: { contextId: this.contextData.meta.id, restartsCount: this.restartsCount },
                                });
                                throw (e.hooks.afterError.promise(a), a);
                            })
                    );
                }
                constructor(e) {
                    super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'isPaused', !1),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'restartsCount', 0);
                    let { data: t, variables: a, rotorResource: r } = e;
                    (this.rotorResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            let eH = (e) => [{ type: q.R.Radio, meta: e }];
            class ez extends es {
                apply(e) {}
                loadContextMeta() {
                    return Promise.all([
                        this.radioStationsResource.getStreamBySlug({
                            stationSlug: String(this.contextData.meta.stationSlug),
                            streamSlug: String(this.contextData.meta.streamSlug),
                        }),
                        this.radioStationsResource.getStreamUrlBySlug({
                            stationSlug: String(this.contextData.meta.stationSlug),
                            streamSlug: String(this.contextData.meta.streamSlug),
                        }),
                    ])
                        .then((e) => {
                            let [t, { url: a, episodeId: r }] = e,
                                i = {
                                    id: this.contextData.meta.id,
                                    stationSlug: String(this.contextData.meta.stationSlug),
                                    streamSlug: String(this.contextData.meta.streamSlug),
                                    manualQualitySourceKey: this.contextData.meta.manualQualitySourceKey,
                                    stream: t,
                                    streamUrl: a,
                                    streamEpisodeId: r,
                                };
                            return (this.contextData.meta = i), i;
                        })
                        .catch((e) => {
                            throw new ei('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e, t;
                    return (null == (t = this.contextData.meta) || null == (e = t.stream) ? void 0 : e.slug)
                        ? Promise.resolve(eH(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eH(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'radioStationsResource', void 0), (0, L._)(this, 'variables', void 0);
                    let { data: t, variables: a, radioStationsResource: r } = e;
                    (this.radioStationsResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            let eQ = (e) => [{ type: q.R.Radio, meta: e }];
            class eX extends es {
                apply(e) {}
                loadContextMeta() {
                    return this.radioStreamResource
                        .getByRadioId({ radioId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), ...e };
                            return (this.contextData.meta = t), t;
                        })
                        .catch((e) => {
                            throw new ei('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta) ? void 0 : e.uuid)
                        ? Promise.resolve(eQ(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eQ(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'radioStreamResource', void 0),
                        (0, L._)(this, 'isPaused', !1),
                        (0, L._)(this, 'restartsCount', 0),
                        (0, L._)(this, 'variables', void 0);
                    let { data: t, variables: a, radioStreamResource: r } = e;
                    (this.radioStreamResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            class eZ {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    try {
                        var r, i, s, n, o, l, u, d;
                        switch (a.type) {
                            case et.K.Album:
                                if (!this.albumsResource)
                                    throw new eV('Albums resource is not provided', { code: 'E_ALBUMS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eo({
                                    data: a,
                                    albumsResource: this.albumsResource,
                                    logger: this.logger,
                                    variables: null == (r = this.variables) ? void 0 : r[et.K.Album],
                                });
                                break;
                            case et.K.Playlist:
                                if (!this.usersResource || !this.playlistResource)
                                    throw new eV('Users and playlist resources are not provided', {
                                        code: 'E_USERS_AND_PLAYLIST_RESOURCES_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new eu({
                                    data: a,
                                    usersResource: this.usersResource,
                                    playlistResource: this.playlistResource,
                                    logger: this.logger,
                                    variables: null == (i = this.variables) ? void 0 : i[et.K.Playlist],
                                });
                                break;
                            case et.K.Artist:
                                if (!this.artistsResource)
                                    throw new eV('Artists resource is not provided', { code: 'E_ARTISTS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ed({
                                    data: a,
                                    artistsResource: this.artistsResource,
                                    logger: this.logger,
                                    variables: null == (s = this.variables) ? void 0 : s[et.K.Artist],
                                });
                                break;
                            case et.K.Vibe:
                                if (!this.rotorResource)
                                    throw new eV('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eB({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (n = this.variables) ? void 0 : n[et.K.Vibe],
                                    deferredFeedbacksStore: this.deferredFeedbacksStore,
                                });
                                break;
                            case et.K.Various:
                                if (!this.tracksResource)
                                    throw new eV('Tracks resource is not provided', { code: 'E_TRACKS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eq({
                                    data: a,
                                    tracksResource: this.tracksResource,
                                    logger: this.logger,
                                    variables: null == (o = this.variables) ? void 0 : o[et.K.Various],
                                });
                                break;
                            case et.K.Generative:
                                if (!this.rotorResource)
                                    throw new eV('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eG({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (l = this.variables) ? void 0 : l[et.K.Generative],
                                });
                                break;
                            case et.K.Radio:
                                if (!this.radioStationsResource)
                                    throw new eV('Radio stations resource is not provided', {
                                        code: 'E_RADIO_STATIONS_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new ez({
                                    data: a,
                                    radioStationsResource: this.radioStationsResource,
                                    logger: this.logger,
                                    variables: null == (u = this.variables) ? void 0 : u[et.K.Radio],
                                });
                                break;
                            case et.K.LegacyRadio:
                                if (!this.radioStreamResource)
                                    throw new eV('Radio stream resource is not provided', {
                                        code: 'E_RADIO_STREAM_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new eX({
                                    data: a,
                                    radioStreamResource: this.radioStreamResource,
                                    logger: this.logger,
                                    variables: null == (d = this.variables) ? void 0 : d[et.K.LegacyRadio],
                                });
                        }
                    } catch (e) {
                        throw new eV('Error while creating context', { cause: (0, M.createObjectFromError)(e), data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new eV('Cannot create context with nonexistent type', { code: 'E_NONEXISTENT_CONTEXT_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    (0, L._)(this, 'logger', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'albumsResource', void 0),
                        (0, L._)(this, 'usersResource', void 0),
                        (0, L._)(this, 'artistsResource', void 0),
                        (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'tracksResource', void 0),
                        (0, L._)(this, 'playlistResource', void 0),
                        (0, L._)(this, 'radioStationsResource', void 0),
                        (0, L._)(this, 'radioStreamResource', void 0),
                        (0, L._)(this, 'deferredFeedbacksStore', void 0);
                    let {
                        variables: t,
                        logger: a,
                        rotorResource: r,
                        usersResource: i,
                        playlistResource: s,
                        tracksResource: n,
                        albumsResource: o,
                        artistsResource: l,
                        radioStreamResource: u,
                        radioStationsResource: d,
                        deferredFeedbacksStore: c,
                    } = e;
                    (this.albumsResource = null != o ? o : null),
                        (this.artistsResource = null != l ? l : null),
                        (this.rotorResource = null != r ? r : null),
                        (this.usersResource = null != i ? i : null),
                        (this.tracksResource = null != n ? n : null),
                        (this.playlistResource = null != s ? s : null),
                        (this.radioStationsResource = null != d ? d : null),
                        (this.radioStreamResource = null != u ? u : null),
                        (this.variables = t),
                        (this.deferredFeedbacksStore = null != c ? c : new eL()),
                        (this.logger = a);
                }
            }
            var e$ = a(62386),
                eJ = a(80785);
            function e0(e) {
                return !!(0, e$.i)(e) && !!e.data.meta.session && e.data.meta.session.wave.type === eJ.y.MIX;
            }
            var e1 = a(9152);
            class e9 {
                set positionSec(e) {
                    this.internalPositionSec = e;
                }
                get positionSec() {
                    return void 0 !== this.internalPositionSec
                        ? this.internalPositionSec
                        : e0(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                          ? this.entity.data.meta.mixFade.inStart
                          : void 0;
                }
                get canBePlayedOnlyWithCrossing() {
                    return e0(this.context);
                }
                canBePlayed(e) {
                    let t = 'playDisliked' in this.context.data && void 0 !== this.context.data.playDisliked && this.context.data.playDisliked,
                        { entityChangeMethod: a, index: r } = e,
                        i = t || a === F.So.SET_INDEX || (a === F.So.PLAY_CONTEXT && void 0 !== r),
                        s = a === F.So.SET_INDEX,
                        n = !i && this.entity.isDisliked,
                        o = !s && this.entity.hidden,
                        l = (0, e$.i)(this.context) || !this.entity.isExplicit || !1 !== e.filterParams.allowExplicit;
                    return !!(this.entity.isAvailable && l) && (n ? !!(0, e$.i)(this.context) : !o);
                }
                getCrossParams() {
                    return e0(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? this.entity.data.meta.mixFade
                        : 'fade' in this.entity.data.meta && void 0 !== this.entity.data.meta.fade
                          ? this.entity.data.meta.fade
                          : null;
                }
                canBeCrossedWith(e) {
                    return (
                        !(
                            !('type' in this.entity.data.meta) ||
                            !('type' in e.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            !('fade' in e.entity.data.meta) ||
                            (0, e1.F)(this.context)
                        ) &&
                        this.entity.data.meta.type === B.S.MUSIC &&
                        e.entity.data.meta.type === B.S.MUSIC &&
                        void 0 !== this.entity.data.meta.fade &&
                        void 0 !== e.entity.data.meta.fade
                    );
                }
                getFadeMode() {
                    return e0(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? F.OQ.MIX
                        : !('type' in this.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            (0, e1.F)(this.context) ||
                            this.entity.data.meta.type !== B.S.MUSIC ||
                            void 0 === this.entity.data.meta.fade
                          ? F.OQ.NONE
                          : F.OQ.CROSSFADE;
                }
                constructor(e, t, a) {
                    (0, L._)(this, 'context', void 0),
                        (0, L._)(this, 'entity', void 0),
                        (0, L._)(this, 'lastChangeMethod', null),
                        (0, L._)(this, 'lastSeekPosition', void 0),
                        (0, L._)(this, 'internalPositionSec', void 0),
                        (0, L._)(this, 'sourceContext', void 0),
                        (this.context = e),
                        (this.entity = t),
                        (this.sourceContext = a);
                }
            }
            class e5 {
                createContext(e) {
                    return this.contextFactory.create(e);
                }
                createEntity(e) {
                    return this.entityFactory.create(e);
                }
                createContextEntityPair(e, t, a) {
                    return new e9(e, t, a);
                }
                constructor(e) {
                    (0, L._)(this, 'entityFactory', void 0),
                        (0, L._)(this, 'contextFactory', void 0),
                        (this.entityFactory = new ee(e.entityFactoryParams)),
                        (this.contextFactory = new eZ(e.contextFactoryParams));
                }
            }
            var e3 = a(14600);
            let e2 = 'deferred-feedbacks';
            class e4 extends z.t {
                constructor(e, { code: t = 'E_DEFERRED_FEEDBACKS_IDB_STORE', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'DeferredFeedbacksStoreException'), Object.setPrototypeOf(this, e4.prototype);
                }
            }
            let e8 = (e, t) => (void 0 === e && void 0 === t) || (void 0 !== e && void 0 !== t && e === t),
                e6 = (e) => ('trackId' in e.event ? e.event.trackId : void 0),
                e7 = (e) => {
                    let { event: t } = e;
                    if (!('trackId' in t) || !t.trackId) return 'playable' in t && t.playable ? ''.concat(t.playable.type, ':').concat(t.playable.id) : t.timestamp;
                };
            class te {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new e3.h(this.idbName).deleteDB({ onBlocked: () => void 0 }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return this.idb || (this.idb = this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() })), this.idb;
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storeFeedbackData(e) {
                    let t = this.pendingFeedbackIds.has(e.id);
                    return (
                        t || this.pendingFeedbackIds.add(e.id),
                        this.executeTransaction((a) =>
                            a.get(e2, e.id).then((r) =>
                                r || t
                                    ? a.count(e2)
                                    : a
                                          .add(e2, e)
                                          .catch((e) => (this.isConstraintError(e) ? Promise.resolve() : Promise.reject(e)))
                                          .then(() => a.count(e2)),
                            ),
                        )
                            .then((e) =>
                                'number' == typeof e && e > this.storedFeedbacksLimit ? this.deleteOverLimitFeedbacks(e, this.storedFeedbacksLimit) : Promise.resolve(),
                            )
                            .catch((e) => {
                                throw this.generateAndLogError('Saving Deferred Feedback Error', e);
                            })
                            .finally(() => {
                                t || this.pendingFeedbackIds.delete(e.id);
                            })
                    );
                }
                getStoredFeedbacksData(e, t) {
                    return this.executeTransaction(
                        (a) => ('number' == typeof t ? a.getAllFromIndex(e2, 'createdAt', IDBKeyRange.upperBound(t, !0), e) : a.getAll(e2, null, e)),
                        { defaultValue: [] },
                    ).catch((e) => {
                        throw this.generateAndLogError('Error getting Deferred Feedbacks', e);
                    });
                }
                deleteFeedbacksData(e) {
                    return Promise.all(
                        e.map((e) => {
                            let { id: t } = e;
                            return this.executeTransaction((e) => e.delete(e2, t));
                        }),
                    )
                        .then(() => void 0)
                        .catch((e) => {
                            throw this.generateAndLogError('Error deleting Deferred Feedbacks', e);
                        });
                }
                deleteFeedbacksBySessionFeedbacks(e) {
                    let { radioSessionId: t, feedbacks: a } = e;
                    return a.length
                        ? this.iterateByCursor('radioSessionId', t, 'readwrite', (e) =>
                              a.some((a) =>
                                  ((e, t, a) => {
                                      let r = e.feedback;
                                      return (
                                          e.radioSessionId === t &&
                                          !!ef(r.event.type, a.event.type) &&
                                          !!e8(r.batchId, a.batchId) &&
                                          !!e8(e6(r), e6(a)) &&
                                          e8(e7(r), e7(a))
                                      );
                                  })(e.value, t, a),
                              )
                                  ? e.delete()
                                  : Promise.resolve(),
                          ).catch((e) => {
                              throw this.generateAndLogError('Error deleting Deferred Feedbacks by session feedbacks', e);
                          })
                        : Promise.resolve();
                }
                deleteOverLimitFeedbacks(e, t) {
                    let a = e - t;
                    return this.iterateByCursor('createdAt', null, 'readwrite', (e, t) => (t > a ? Promise.resolve() : e.delete()), 'next').catch((e) => {
                        throw this.generateAndLogError('Error deleting overlimit Deferred Feedbacks', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'prev',
                        s = 0,
                        n = (e) =>
                            e
                                ? r(e, ++s)
                                      .then(() => e.continue())
                                      .then(n)
                                : Promise.resolve();
                    return this.getCursor(e, t, a, i).then(n);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    (this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        }));
                }
                openIdb(e) {
                    return new e3.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, r) => {
                                var i;
                                this.logError('Connection has been blocked'), null == e || null == (i = e.onBlocked) || i.call(e, t, a, r);
                            },
                            onTerminated: () => {
                                var t;
                                this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(e2, { keyPath: 'id' });
                                t.createIndex('radioSessionId', 'radioSessionId', { unique: !1 }), t.createIndex('createdAt', 'createdAt', { unique: !1 });
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            (this.idbIsAvailable = !1), this.logError('Open storage error', e);
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    return this.executeTransaction(
                        (i) => {
                            let s = i.transaction([e2], a).objectStore(e2);
                            return e ? s.index(e).openCursor(t, r) : s.openCursor(t, r);
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, r);
                }
                generateAndLogError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    return null == (a = this.errorLogger) || a.call(this, r), r;
                }
                generateError(e, t) {
                    var a;
                    let r = '[IndexedDB]['.concat(this.idbName, '.').concat(e2, ']: ').concat(e),
                        i = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new e4(r, { data: { originalError: i, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                isConstraintError(e) {
                    return e instanceof DOMException && 'ConstraintError' === e.name;
                }
                constructor(e = 500) {
                    (0, L._)(this, 'storedFeedbacksLimit', void 0),
                        (0, L._)(this, 'idb', void 0),
                        (0, L._)(this, 'errorLogger', void 0),
                        (0, L._)(this, 'pendingFeedbackIds', new Set()),
                        (0, L._)(this, 'idbIsAvailable', !1),
                        (0, L._)(this, 'idbName', void 0),
                        (0, L._)(this, 'storageEstimate', void 0),
                        (this.storedFeedbacksLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_deferred_feedbacks', '_').concat('1.0.0'));
                }
            }
            var tt = a(90369),
                eZStorage = a(19379);
            class ta {
                getAverageFrequencies(e) {
                    if (null === this.currentGraph) return [];
                    let { analyserNode: t, spectrum: a, bufferLength: r, context: i } = this.currentGraph;
                    if (!t) throw new z.t('No analyser node has been created');
                    t.getByteFrequencyData(a);
                    let s = i.sampleRate / t.fftSize,
                        n = 0,
                        o = e.map((e) => {
                            let { low: t, high: a } = e,
                                i = Math.max(0, Math.min(r - 1, Math.ceil(t / s))),
                                o = Math.max(i, Math.min(r - 1, Math.ceil(a / s) - 1));
                            return (n = Math.max(n, o)), { startIndex: i, endIndex: o };
                        }),
                        l = Array(n + 2).fill(0);
                    for (let e = 0; e < n + 1; e++) {
                        var u, d;
                        let t = (null != (u = a[e]) ? u : 0) / 255;
                        l[e + 1] = (null != (d = l[e]) ? d : 0) + t;
                    }
                    return o.map((e) => {
                        let { startIndex: t, endIndex: a } = e,
                            r = l[t],
                            i = l[a + 1];
                        return void 0 === r || void 0 === i ? 0 : (i - r) / (a - t + 1);
                    });
                }
                getExponentialVolume = (e) => {
                    let t = Math.pow(0.01, 1 - e);
                    return t > 0.01 ? t : 0;
                };
                getVolumeCompensation() {
                    let e = 1;
                    try {
                        e = JSON.parse(window.localStorage.getItem(eZStorage.c.YmPlayerVolume))?.value ?? 1;
                    } catch {}
                    return this.getExponentialVolume(e);
                }
                getRMS(volumeCompensation) {
                    if (null === this.currentGraph) return 0;
                    let { analyserNode: t } = this.currentGraph;
                    if (!t) return 0;
                    let a = t.fftSize,
                        i = this.timeDomainBuffer.length === a ? this.timeDomainBuffer : (this.timeDomainBuffer = new Uint8Array(a));
                    t.getByteTimeDomainData(i);
                    let r = 0,
                        n = volumeCompensation ?? this.getVolumeCompensation();
                    for (let e = 0; e < a; e++) {
                        let t = 0 !== n ? (i[e] - 128) / 128 / n : 0;
                        r += t * t;
                    }
                    let l = 2 * Math.sqrt(r / a);
                    if (window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? !1) {
                        let e = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICIENT?.() ?? 0.2;
                        return (this._prevTimeRms = void 0 !== this._prevTimeRms ? this._prevTimeRms * (1 - e) + l * e : l), this._prevTimeRms;
                    }
                    return (this._prevTimeRms = l), l;
                }
                getRMSAlt(volumeCompensation) {
                    if (null === this.currentGraph) return 0;
                    let { analyserNode: t } = this.currentGraph;
                    if (!t) return 0;
                    let a = t.frequencyBinCount,
                        i = this.frequencyDomainBuffer.length === a ? this.frequencyDomainBuffer : (this.frequencyDomainBuffer = new Float32Array(a));
                    t.getFloatFrequencyData(i);
                    let r = 0,
                        n = volumeCompensation ?? this.getVolumeCompensation();
                    for (let e = 0; e < a; e++) {
                        let t = i[e];
                        if (t === -1 / 0) continue;
                        let s = 0 !== n ? Math.pow(10, t / 20) / n : 0;
                        r += s * s;
                    }
                    let l = 120 * Math.sqrt(r / a);
                    if (window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? !1) {
                        let e = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICIENT?.() ?? 0.2;
                        return (this._prevFrequencyRms = void 0 !== this._prevFrequencyRms ? this._prevFrequencyRms * (1 - e) + l * e : l), this._prevFrequencyRms;
                    }
                    return (this._prevFrequencyRms = l), l;
                }
                constructor({ currentAudioElement: e, graphs: t }) {
                    (0, L._)(this, 'currentGraph', null),
                        (0, L._)(this, 'graphs', void 0),
                        (0, L._)(this, 'timeDomainBuffer', new Uint8Array()),
                        (0, L._)(this, 'frequencyDomainBuffer', new Float32Array()),
                        (0, L._)(this, '_prevTimeRms', void 0),
                        (0, L._)(this, '_prevFrequencyRms', void 0),
                        (this.graphs = t),
                        e.onChange((e) => {
                            let t = this.graphs.find((t) => t.audioElement === e);
                            t && ((this.currentGraph = t), (this._prevTimeRms = void 0), (this._prevFrequencyRms = void 0));
                        });
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED');
            })(s || (s = {}));
            class tr {
                enable() {
                    this.state !== s.ENABLED &&
                        (this.graphs.forEach((e) => {
                            e.connectEqualizer();
                        }),
                        (this.state = s.ENABLED));
                }
                disable() {
                    this.state !== s.DISABLED &&
                        (this.graphs.forEach((e) => {
                            e.disconnectEqualizer();
                        }),
                        (this.state = s.DISABLED));
                }
                applyPreset(e) {
                    (this.preset = e),
                        this.graphs.forEach((t) => {
                            t.setPreamp(e.preamp), t.setBands(e.frequencies);
                        });
                }
                addGraphs(e) {
                    let t = e.filter((e) => !this.graphs.includes(e));
                    if (0 === t.length) return;
                    this.graphs.push(...t);
                    let { preset: a } = this;
                    a &&
                        t.forEach((e) => {
                            e.setPreamp(a.preamp), e.setBands(a.frequencies);
                        }),
                        this.state === s.ENABLED &&
                            t.forEach((e) => {
                                e.connectEqualizer();
                            });
                }
                constructor({ preset: e, graphs: t }) {
                    (0, L._)(this, 'graphs', void 0),
                        (0, L._)(this, 'state', s.DISABLED),
                        (0, L._)(this, 'preset', void 0),
                        (this.graphs = [...t]),
                        e && this.applyPreset(e);
                }
            }
            var ti = (function (e, t, a) {
                var r;
                return function (t) {
                    var a, i, s;
                    return new Worker(
                        (r =
                            r ||
                            ((i = (a = atob(e)).indexOf('\n', 10) + 1),
                            (s = new Blob([a.substring(i) + ''], { type: 'application/javascript' })),
                            URL.createObjectURL(s))),
                        t,
                    );
                };
            })(
                'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIGxldCB0aW1lciA9IG51bGw7CiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkgewogICAgICAgIHN3aXRjaCAoZS5kYXRhLmNvbW1hbmQpIHsKICAgICAgICAgICAgY2FzZSAnc3RhcnQnOgogICAgICAgICAgICAgICAgc3RhcnQoZS5kYXRhLmludGVydmFsKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlICdzdG9wJzoKICAgICAgICAgICAgICAgIHN0b3AoKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHN0YXJ0KGludGVydmFsKSB7CiAgICAgICAgc3RvcCgpOwogICAgICAgIHRpbWVyID0gc2VsZi5zZXRJbnRlcnZhbCgoKSA9PiB7CiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7CiAgICAgICAgICAgICAgICBtZXNzYWdlOiAndGljaycKICAgICAgICAgICAgfTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShkYXRhKTsKICAgICAgICB9LCBpbnRlcnZhbCk7CiAgICB9CiAgICBmdW5jdGlvbiBzdG9wKCkgewogICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkgewogICAgICAgICAgICBzZWxmLmNsZWFySW50ZXJ2YWwodGltZXIpOwogICAgICAgIH0KICAgICAgICB0aW1lciA9IG51bGw7CiAgICB9CiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpOwoKfSkoKTsK',
            );
            class ts {
                init() {
                    try {
                        return (this.worker = new ti()), this.worker.addEventListener('message', this.onMessage.bind(this)), Promise.resolve();
                    } catch (e) {
                        return this.destroy(), Promise.reject(e);
                    }
                }
                get isIntervalRunning() {
                    return this.isTrackingInWorker;
                }
                setInterval(e, t) {
                    this.worker && ((this.callback = e), (this.isTrackingInWorker = !0), this.worker.postMessage({ command: 'start', interval: t }));
                }
                clearInterval() {
                    this.worker && ((this.isTrackingInWorker = !1), this.worker.postMessage({ command: 'stop' }));
                }
                onError(e) {
                    this.worker && (this.errorListeners.push(e), this.worker.addEventListener('error', e), this.worker.addEventListener('messageerror', e));
                }
                destroy() {
                    var e;
                    this.clearInterval(),
                        this.errorListeners.forEach((e) => {
                            var t, a;
                            null == (t = this.worker) || t.removeEventListener('error', e), null == (a = this.worker) || a.removeEventListener('messageerror', e);
                        }),
                        null == (e = this.worker) || e.terminate(),
                        (this.worker = null);
                }
                onMessage(e) {
                    'tick' === e.data.message && this.callback && this.callback();
                }
                constructor() {
                    (0, L._)(this, 'worker', null), (0, L._)(this, 'callback', null), (0, L._)(this, 'isTrackingInWorker', !1), (0, L._)(this, 'errorListeners', []);
                }
            }
            class tn {
                get isIntervalRunning() {
                    return !!this.intervalId;
                }
                init() {
                    return Promise.resolve();
                }
                onError() {}
                setInterval(e, t) {
                    this.intervalId = setInterval(e, t);
                }
                clearInterval() {
                    null !== this.intervalId && clearInterval(this.intervalId), (this.intervalId = null);
                }
                destroy() {
                    this.clearInterval();
                }
                constructor() {
                    (0, L._)(this, 'intervalId', null);
                }
            }
            class to {
                get isIntervalRunning() {
                    return !!this.ticker.isIntervalRunning;
                }
                init() {
                    return this.ticker.init().catch((e) => {
                        throw ((this.ticker = new tn()), Error('Error in creating WorkerTicker. Fallback to IntervalTicker', { cause: e }));
                    });
                }
                onError(e) {
                    return this.ticker.onError(e);
                }
                setInterval(e, t) {
                    return this.ticker.setInterval(e, t);
                }
                clearInterval() {
                    return this.ticker.clearInterval();
                }
                destroy() {
                    this.ticker.destroy();
                }
                constructor() {
                    (0, L._)(this, 'ticker', new ts());
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED');
            })(n || (n = {}));
            let tl = 1e3 / 60,
                tu = 1 / 60;
            class td {
                updateGain() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = e >= this.outStart && e <= this.outStop;
                    if (t) {
                        let t = this.getFadeInVolume(e);
                        this.volumeAtTime = t;
                    }
                    if (a) {
                        let e = this.getFadeOutVolume();
                        this.volumeAtTime = e;
                    }
                    e > this.inStop && e < this.outStart && (this.volumeAtTime = this.maxVolume), e > this.outStop && (this.volumeAtTime = 0);
                }
                enable() {
                    this.saveAudioElementVolumeBeforeFade(),
                        (this.volume = 0),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.updateGain.bind(this), tl);
                }
                enableFadeIn() {
                    this.saveAudioElementVolumeBeforeFade(),
                        (this.volume = 0),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeIn.bind(this), tl);
                }
                fadeIn() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = this.getFadeInVolume(e);
                    t && (this.volumeAtTime = a), e > this.inStop && e < this.outStart && ((this.volumeAtTime = this.maxVolume), this.disable());
                }
                enableFadeOut() {
                    this.saveAudioElementVolumeBeforeFade(),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeOut.bind(this), tl);
                }
                fadeOut() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.audioElement.currentTime,
                        t = e >= this.outStart && e <= this.outStop,
                        a = this.getFadeOutVolume();
                    t && (this.volumeAtTime = a), e > this.outStop && (this.volumeAtTime = 0);
                }
                getFadeInVolume(e) {
                    let t = this.inStop - this.inStart,
                        a = this.maxVolume;
                    return 0 === e ? 0 : Math.min(this.volume + 1 / (t / tu), a);
                }
                getFadeOutVolume() {
                    let e = this.outStop - this.outStart;
                    return Math.max(this.volume - 1 / (e / tu), 0);
                }
                disable() {
                    let e = !this.config.useVolumeForAudioEffect || null !== this.audioElementVolumeBeforeFade,
                        t = this.maxVolume;
                    (this.state = n.DISABLED), this.ticker.clearInterval(), e && (this.volume = t), (this.audioElementVolumeBeforeFade = null);
                }
                setFadeParams(e) {
                    let { inStart: t, inStop: a, outStart: r, outStop: i } = e;
                    (this.inStart = t), (this.inStop = a), (this.outStart = r), (this.outStop = i);
                }
                set volumeAtTime(e) {
                    if (this.config.useVolumeForAudioEffect) this.audioElement.volume = e;
                    else {
                        let { gainNode: t, context: a } = this.getWebAudioTarget();
                        t.gain.setValueAtTime(e, a.currentTime);
                    }
                }
                set volume(e) {
                    this.config.useVolumeForAudioEffect ? (this.audioElement.volume = e) : (this.getWebAudioTarget().gainNode.gain.value = e);
                }
                get volume() {
                    return this.config.useVolumeForAudioEffect ? this.audioElement.volume : this.getWebAudioTarget().gainNode.gain.value;
                }
                get maxVolume() {
                    if (this.config.useVolumeForAudioEffect) {
                        var e;
                        return null != (e = this.audioElementVolumeBeforeFade) ? e : 1;
                    }
                    return 1;
                }
                saveAudioElementVolumeBeforeFade() {
                    this.config.useVolumeForAudioEffect && null === this.audioElementVolumeBeforeFade && (this.audioElementVolumeBeforeFade = this.audioElement.volume);
                }
                getWebAudioTarget() {
                    let { gainNode: e, context: t } = this.target;
                    if (!e || !t) throw new z.t('FadeEffect. WebAudio target is required for gain-based fade.');
                    return { gainNode: e, context: t };
                }
                handleTickerError(e) {
                    this.disable();
                    let t = new z.t('FadeEffect. Error in ticker runtime.', { cause: (0, M.createObjectFromError)(e) });
                    this.hooks.afterError.promise(t);
                }
                constructor({ target: e, hooks: t, config: a }) {
                    var r, i;
                    (0, L._)(this, 'state', n.IDLE),
                        (0, L._)(this, 'inStart', 0),
                        (0, L._)(this, 'inStop', 0),
                        (0, L._)(this, 'outStart', 0),
                        (0, L._)(this, 'outStop', 0),
                        (0, L._)(this, 'ticker', void 0),
                        (0, L._)(this, 'audioElement', void 0),
                        (0, L._)(this, 'target', void 0),
                        (0, L._)(this, 'hooks', void 0),
                        (0, L._)(this, 'config', void 0),
                        (0, L._)(this, 'audioElementVolumeBeforeFade', null),
                        (this.target = e),
                        (this.audioElement = e.audioElement),
                        (this.hooks = t),
                        (this.config = { useVolumeForAudioEffect: null != (r = a.useVolumeForAudioEffect) && r, useWorker: null == (i = a.useWorker) || i }),
                        this.config.useVolumeForAudioEffect || this.getWebAudioTarget(),
                        this.config.useWorker ? (this.ticker = new to()) : (this.ticker = new tn()),
                        this.ticker
                            .init()
                            .then(() => {
                                this.ticker.onError(this.handleTickerError.bind(this));
                            })
                            .catch((e) => {
                                let t = new z.t('FadeEffect. Error in ticker init().', { cause: (0, M.createObjectFromError)(e) });
                                this.hooks.afterError.promise(t);
                            });
                }
            }
            class tc {
                enable() {
                    this.currentFadeEffect && this.currentFadeEffect.enable();
                }
                disable() {
                    this.currentFadeEffect && this.currentFadeEffect.disable();
                }
                apply(e) {
                    if (this.currentFadeEffect) {
                        if (!e) return void this.currentFadeEffect.disable();
                        this.currentFadeEffect.setFadeParams(e), this.currentFadeEffect.enable();
                    }
                }
                constructor({ currentAudioElement: e, graphs: t, playback: a }) {
                    (0, L._)(this, 'fadeEffects', []),
                        (0, L._)(this, 'currentFadeEffect', null),
                        t.forEach((e) => {
                            this.fadeEffects.push(
                                new td({
                                    target: { audioElement: e.audioElement, gainNode: e.gainNode, context: e.context },
                                    hooks: a.hooks,
                                    config: { useVolumeForAudioEffect: !1, useWorker: !1 },
                                }),
                            );
                        }),
                        e.onChange((e) => {
                            let t = this.fadeEffects.find((t) => t.audioElement === e);
                            t && (this.currentFadeEffect = t);
                        });
                }
            }
            class th {
                enableCrossfade() {
                    let { currentEntity: e, nextEntity: t } = this.playback.state.queueState,
                        a = this.playback.state.mediaPlayersStore.value[U.e.AUDIO];
                    if (!e.value || !t.value || !a || !(0, F.uo)(a)) return;
                    let r = e.value.getCrossParams(),
                        i = t.value.getCrossParams();
                    if (!r || !i) return;
                    let s = this.fadeEffects.find((e) => !!a.crossOutMediaPlayer && e.audioElement === a.crossOutMediaPlayer.currentAudioElement.value),
                        n = this.fadeEffects.find((e) => !!a.crossInMediaPlayer && e.audioElement === a.crossInMediaPlayer.currentAudioElement.value);
                    s && n && (s.setFadeParams(r), n.setFadeParams(i), s.enableFadeOut(), n.enableFadeIn());
                }
                enableFastFade() {
                    let { currentEntity: e } = this.playback.state.queueState,
                        t = this.playback.state.mediaPlayersStore.value[U.e.AUDIO];
                    if (!e.value || !t || !(0, F.uo)(t)) return;
                    let a = e.value.getCrossParams(),
                        r = this.fadeEffects.find((e) => e.audioElement === t.currentAudioElement.value);
                    if (!a || !r) return;
                    let i = a.inStop - a.inStart,
                        s = { ...a, inStop: a.inStart + i / 4 };
                    r.setFadeParams(s), r.enableFadeIn();
                }
                disableFade() {
                    this.fadeEffects.forEach((e) => {
                        e.disable();
                    });
                }
                canEnableFastFade(e) {
                    let { currentEntity: t } = this.playback.state.queueState;
                    return !!(t.value && !e && e0(t.value.context));
                }
                constructor({ graphs: e, playback: t, config: a = {} }) {
                    (0, L._)(this, 'playback', void 0), (0, L._)(this, 'fadeEffects', []), (this.playback = t);
                    let r = t.state.mediaPlayersStore.value[U.e.AUDIO];
                    a.useVolumeForAudioEffect && r && (0, F.uo)(r)
                        ? r.audioElementsStore.forEach((e) => {
                              this.fadeEffects.push(
                                  new td({
                                      target: { audioElement: e },
                                      hooks: t.hooks,
                                      config: { useVolumeForAudioEffect: a.useVolumeForAudioEffect, useWorker: a.useWorker },
                                  }),
                              );
                          })
                        : null == e ||
                          e.forEach((e) => {
                              this.fadeEffects.push(
                                  new td({
                                      target: { audioElement: e.audioElement, gainNode: e.gainNode, context: e.context },
                                      hooks: t.hooks,
                                      config: { useVolumeForAudioEffect: a.useVolumeForAudioEffect, useWorker: a.useWorker },
                                  }),
                              );
                          }),
                        r &&
                            (0, F.uo)(r) &&
                            (r.isReadyForAudioEffect.onChange(
                                (e) => {
                                    e ? this.enableCrossfade() : this.disableFade();
                                },
                                { skipFirstChange: !0 },
                            ),
                            r.isReadyForAudioEffectInStart.onChange(
                                (e) => {
                                    e && this.canEnableFastFade(r.isReadyForAudioEffect.value) && this.enableFastFade(), e || this.disableFade();
                                },
                                { skipFirstChange: !0 },
                            ));
                }
            }
            function tv(e) {
                return e === U.e.AUDIO;
            }
            let ty = [U.e.AUDIO, U.e.DOWNLOADED_AUDIO];
            function tp(e) {
                return ty.includes(e);
            }
            class tm {
                apply(e) {
                    this.durationMs = e;
                }
                constructor({ playback: e }) {
                    (0, L._)(this, 'playback', null),
                        (0, L._)(this, 'durationMs', void 0),
                        (this.playback = e),
                        this.playback.state.playerState.progress.onChange((e) => {
                            var t, a;
                            let r = (null != (t = this.durationMs) ? t : 0) / 1e3,
                                i = e && Math.abs(e.duration - r) > 1;
                            e && e.position > r && i && (null == (a = this.playback) || a.moveForward());
                        });
                }
            }
            !(function (e) {
                (e.SUSPENDED = 'suspended'), (e.RUNNING = 'running'), (e.CLOSED = 'closed');
            })(o || (o = {})),
                (function (e) {
                    (e.HIGHSHELF = 'highshelf'), (e.PEAKING = 'peaking'), (e.LOWSHELF = 'lowshelf');
                })(l || (l = {}));
            let pulseSyncR128NormalizationEnabled = !0;
            null == window ||
                null == window.nativeSettings ||
                window.nativeSettings
                    .getAsync('modSettings.r128Normalization')
                    .then((e) => {
                        pulseSyncR128NormalizationEnabled = e ?? !0;
                    })
                    .catch(() => {});
            class tf {
                connectNodes() {
                    let { useAnalyser: e, useGain: t } = this.config;
                    this.sourceNode.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination);
                }
                connectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        this.r128GainNode.disconnect(),
                        this.sourceNode.connect(this.preamp),
                        a.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination));
                }
                disconnectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        a.disconnect(),
                        this.r128GainNode.disconnect(),
                        this.sourceNode.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination));
                }
                setR128Gain(e, t) {
                    let a = null != e ? e : this.lastR128,
                        r = Number(null == a ? void 0 : a.i),
                        i = 'boolean' == typeof t ? t : pulseSyncR128NormalizationEnabled;
                    'boolean' == typeof t && (pulseSyncR128NormalizationEnabled = t), null != e && (this.lastR128 = e);
                    if (!i || !Number.isFinite(r)) return void this.r128GainNode.gain.setValueAtTime(1, this.context.currentTime);
                    let s = Number(null == a ? void 0 : a.tp),
                        n = -23 - r;
                    Number.isFinite(s) && (n = Math.min(n, -s));
                    let o = Math.pow(10, n / 20);
                    (Number.isFinite(o) && o > 0) || (o = 1), this.r128GainNode.gain.setValueAtTime(o, this.context.currentTime);
                }
                setBands(e) {
                    0 === this.bands.length ? (this.bands = this.connectBandsBetween(this.createBandsByFrequencies(e))) : this.updateBands(e);
                }
                setPreamp(e) {
                    this.preamp.gain.linearRampToValueAtTime(e, this.context.currentTime + 0.3);
                }
                createBandsByFrequencies(e) {
                    return e.map((t, a) => {
                        let { key: r, value: i } = t;
                        return this.createBand(this.getBiquadFilterType(a, e.length), r, i);
                    });
                }
                createBand(e, t, a) {
                    let r = this.context.createBiquadFilter();
                    return (r.type = e), (r.frequency.value = t), (r.Q.value = 1), a && r.gain.setValueAtTime(a, this.context.currentTime + 0.3), r;
                }
                getBiquadFilterType(e, t) {
                    return 0 === e ? l.LOWSHELF : e === t - 1 ? l.HIGHSHELF : l.PEAKING;
                }
                connectBandsBetween(e) {
                    let t = this.preamp;
                    return (
                        e.forEach((e) => {
                            t.connect(e), (t = e);
                        }),
                        e
                    );
                }
                updateBands(e) {
                    this.bands.forEach((t, a) => {
                        let r = e[a];
                        r && t.gain.setValueAtTime(r.value, this.context.currentTime + 0.3);
                    });
                }
                createAnalyzerNode(e) {
                    let t = e.createAnalyser();
                    return (t.fftSize = 1024), (t.smoothingTimeConstant = 0.4), t;
                }
                checkAndResumeAudioContext(e) {
                    let t = () => {
                        e.resume().then(() => {
                            document.body.removeEventListener('touchend', t, !0),
                                document.body.removeEventListener('click', t, !0),
                                document.body.removeEventListener('keydown', t, !0);
                        });
                    };
                    e.state === o.SUSPENDED &&
                        (document.body.addEventListener('touchend', t, !0),
                        document.body.addEventListener('click', t, !0),
                        document.body.addEventListener('keydown', t, !0));
                }
                constructor(e, t) {
                    (0, L._)(this, 'audioElement', void 0),
                        (0, L._)(this, 'context', void 0),
                        (0, L._)(this, 'sourceNode', void 0),
                        (0, L._)(this, 'preamp', void 0),
                        (0, L._)(this, 'bands', []),
                        (0, L._)(this, 'analyserNode', void 0),
                        (0, L._)(this, 'bufferLength', 0),
                        (0, L._)(this, 'spectrum', new Uint8Array()),
                        (0, L._)(this, 'gainNode', void 0),
                        (0, L._)(this, 'r128GainNode', void 0),
                        (0, L._)(this, 'lastR128', null),
                        (0, L._)(this, 'config', void 0),
                        (this.audioElement = e),
                        (this.context = new AudioContext()),
                        this.checkAndResumeAudioContext(this.context),
                        (this.sourceNode = this.context.createMediaElementSource(this.audioElement)),
                        (this.analyserNode = this.createAnalyzerNode(this.context)),
                        (this.bufferLength = this.analyserNode.frequencyBinCount),
                        (this.spectrum = new Uint8Array(this.bufferLength)),
                        (this.gainNode = this.context.createGain()),
                        (this.r128GainNode = this.context.createGain()),
                        (this.preamp = this.context.createGain()),
                        (this.config = t),
                        this.connectNodes();
                }
            }
            class tg {
                createGraphs(e, t) {
                    let { useAnalyser: a, useGain: r } = t;
                    if ((0, F.s4)(e)) return [new tf(e.currentAudioElement.value, { useAnalyser: a, useGain: r })];
                    if ((0, F.uo)(e)) return e.audioElementsStore.map((e) => new tf(e, { useAnalyser: a, useGain: r }));
                    throw new z.t('Can not create audio graph for this type of media player');
                }
                getOrCreateGraphs(e, t) {
                    let a = this.graphsByMediaPlayer.get(e);
                    if (a) return a;
                    let r = this.createGraphs(e, t);
                    return r.forEach((e) => this.graphs.add(e)), this.graphsByMediaPlayer.set(e, r), r;
                }
                initializeAnalyser(e, t, a) {
                    tv(a) && this.options.useAnalyser && !this.analyser && (this.analyser = new ta({ currentAudioElement: e.currentAudioElement, graphs: t }));
                }
                initializeEqualizer(e, t) {
                    if (!tp(t) || !this.options.useEqualizer) return;
                    let a = 'object' == typeof this.options.useEqualizer ? this.options.useEqualizer : void 0;
                    if (this.equalizer.value) return void this.equalizer.value.addGraphs(e);
                    this.equalizer.value = new tr({ graphs: e, preset: null == a ? void 0 : a.preset });
                }
                initializeFade(e, t, a, r) {
                    tv(r) && this.options.useFade && !this.fade && (this.fade = new tc({ currentAudioElement: e.currentAudioElement, graphs: a, playback: t }));
                }
                initializeCrossfade(e, t, a) {
                    tv(a) &&
                        this.options.useCrossFade &&
                        !this.crossfade &&
                        (t || this.isVolumeCrossfadeEnabled()) &&
                        (this.crossfade = new th({ playback: e, graphs: t, config: this.options.crossFadeConfig }));
                }
                isVolumeCrossfadeEnabled() {
                    var e;
                    return !!(this.options.useCrossFade && (null == (e = this.options.crossFadeConfig) ? void 0 : e.useVolumeForAudioEffect));
                }
                initializeSmartPreview(e, t) {
                    tv(t) && this.options.useSmartPreview && !this.smartPreview && (this.smartPreview = new tm({ playback: e }));
                }
                initializeContext(e, t, a) {
                    if (
                        !(function (e, t) {
                            if (tv(e)) {
                                var a;
                                let e = !!t.useCrossFade && !(null == (a = t.crossFadeConfig) ? void 0 : a.useVolumeForAudioEffect);
                                return !!t.useEqualizer || !!t.useAnalyser || !!t.useFade || e;
                            }
                            return tp(e) && !!t.useEqualizer;
                        })(a, this.options)
                    ) {
                        this.initializeCrossfade(t, void 0, a), this.initializeSmartPreview(t, a);
                        return;
                    }
                    let r = this.getOrCreateGraphs(
                        e,
                        (function (e, t) {
                            var a;
                            let r = tv(e),
                                i = !!t.useCrossFade && !(null == (a = t.crossFadeConfig) ? void 0 : a.useVolumeForAudioEffect);
                            return { useAnalyser: !!r && t.useAnalyser, useGain: r && (!!t.useFade || i) };
                        })(a, this.options),
                    );
                    this.initializeAnalyser(e, r, a),
                        this.initializeEqualizer(r, a),
                        this.initializeFade(e, t, r, a),
                        this.initializeCrossfade(t, r, a),
                        this.initializeSmartPreview(t, a);
                }
                initializeMediaPlayersStore(e, t) {
                    void 0 !== e &&
                        ty.forEach((a) => {
                            let r = e[a];
                            void 0 !== r && ((0, F.s4)(r) || (0, F.uo)(r)) && this.initializeContext(r, t, a);
                        });
                }
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    a.state.mediaPlayersStore.onChange((e) => {
                        this.initializeMediaPlayersStore(e, a);
                    }),
                        a.state.playerState.event.onChange(() => {
                            if (this.fade)
                                switch (a.state.playerState.event.value) {
                                    case F.Iu.PLAYING:
                                        this.fade.enable();
                                        break;
                                    case F.Iu.PAUSED:
                                    case F.Iu.STOP:
                                        this.fade.disable();
                                }
                        }),
                        t.beforeMediaStartPlaying.tapPromise('WebAudioPlugin', () => {
                            var e, t, r;
                            let i,
                                s,
                                { currentEntity: n } = a.state.queueState,
                                o = null == (e = n.value) ? void 0 : e.entity;
                            return (
                                (0, tt.l)(o) &&
                                    ((i = null == (t = o.data.meta.smartPreviewParams) ? void 0 : t.fade),
                                    (s = null == (r = o.data.meta.smartPreviewParams) ? void 0 : r.durationMs)),
                                (0, eA.b)(o) && ((i = o.data.meta.fade), (s = o.data.meta.durationMs)),
                                this.graphs.forEach((e) => {
                                    var t;
                                    let r = null == (t = a.state.mediaPlayersStore.value[U.e.AUDIO]) ? void 0 : t.currentAudioElement.value,
                                        i = null == o ? void 0 : o.data.meta.r128,
                                        s = !i && o ? { i: 0, tp: 0 } : i;
                                    (!r || e.audioElement === r) && e.setR128Gain(s);
                                }),
                                this.fade && this.fade.apply(i),
                                this.smartPreview && this.smartPreview.apply(s),
                                Promise.resolve()
                            );
                        });
                }
                constructor(e) {
                    (0, L._)(this, 'options', void 0),
                        (0, L._)(this, 'graphsByMediaPlayer', new WeakMap()),
                        (0, L._)(this, 'graphs', new Set()),
                        (0, L._)(this, 'analyser', void 0),
                        (0, L._)(this, 'equalizer', new er.cJ(null)),
                        (0, L._)(this, 'fade', void 0),
                        (0, L._)(this, 'smartPreview', void 0),
                        (0, L._)(this, 'crossfade', void 0),
                        (this.options = e),
                        (window.__PULSESYNC_APPLY_R128_NORMALIZATION__ = (e) => {
                            let t = Boolean(e);
                            (pulseSyncR128NormalizationEnabled = t),
                                this.graphs.forEach((e) => {
                                    e.setR128Gain(void 0, t);
                                });
                        });
                }
            }
            function tb(e) {
                return (null == e ? void 0 : e.data.type) === q.R.Clip;
            }
            !(function (e) {
                (e.AD = 'ad'), (e.SHOT = 'shot');
            })(u || (u = {})),
                (function (e) {
                    (e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle');
                })(d || (d = {})),
                (function (e) {
                    (e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle');
                })(c || (c = {})),
                (function (e) {
                    (e.VIDEO = 'video'), (e.AUDIO = 'audio');
                })(h || (h = {}));
            class tE {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.beforeEntityChange.tapPromise(
                        'AdvertPlugin',
                        () =>
                            new Promise((e) => {
                                if (!this.variables.enabled) return void e();
                                let {
                                    state: {
                                        currentContext: a,
                                        queueState: {
                                            index: { value: r },
                                            order: { value: i },
                                            entityList: { value: s },
                                            currentEntity: { value: n },
                                        },
                                    },
                                } = t;
                                if (void 0 !== a.value) {
                                    let o = i[r + 1],
                                        l = void 0 !== o ? s[o] : void 0,
                                        v = l ? String(l.entity.data.meta.id) : void 0,
                                        y = i[r - 1],
                                        p = void 0 !== y ? s[y] : void 0,
                                        m = p ? String(p.entity.data.meta.id) : void 0,
                                        f =
                                            ((null == n ? void 0 : n.entity.totalPlayedSeconds) || 0) /
                                            ((((null == n ? void 0 : n.entity.data.meta) && 'durationMs' in n.entity.data.meta && n.entity.data.meta.durationMs) || 1) /
                                                1e3);
                                    (this.currentTrackId = String(null == n ? void 0 : n.entity.data.meta.id)),
                                        (this.from = a.value.from),
                                        this.afterTrackResource
                                            .getAfterTrack({ contextItem: String(a.value.data.meta.id), from: a.value.from, types: u.AD, nextTrackId: v, prevTrackId: m })
                                            .then((a) => {
                                                var r, i, s;
                                                let n =
                                                    (f >= 0.5 && (null == (r = a.ad) ? void 0 : r.afterPlay) === d.AD) ||
                                                    (f < 0.5 && (null == (i = a.ad) ? void 0 : i.afterSkip) === c.AD);
                                                if ('ad' in a && this.advertModule && n) {
                                                    let r = tb(null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity) ? h.VIDEO : void 0;
                                                    t.pause(), this.advertModule.playAdvert({ afterTrackResponse: a, advertType: r }).finally(e);
                                                } else e();
                                            });
                                } else e();
                            }),
                    );
                }
                advertFeedbackCallback() {
                    this.adsResource.saveAds({ from: this.from, trackId: this.currentTrackId, type: 'ad' });
                }
                constructor(e) {
                    var t;
                    (0, L._)(this, 'advertModule', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'afterTrackResource', void 0),
                        (0, L._)(this, 'adsResource', void 0),
                        (0, L._)(this, 'currentTrackId', ''),
                        (0, L._)(this, 'from', '');
                    let { afterTrackResource: a, advertModule: r, adsResource: i, variables: s } = e;
                    (this.afterTrackResource = a),
                        (this.adsResource = i),
                        (this.variables = s),
                        (this.advertModule = r),
                        null == (t = this.advertModule) || t.setAdvertFeedbackCallback(this.advertFeedbackCallback.bind(this));
                }
            }
            var tS = a(8342),
                t_ = a(82411),
                tA = a(52469),
                tP = a(27158);
            function tk(e) {
                let t = tS.FM.r.PAUSE;
                switch (e.status.value) {
                    case F.MT.BUFFERING:
                        t = tS.FM.r.BUFFERING;
                        break;
                    case F.MT.ENDED:
                    case F.MT.STOPPED:
                        t = tS.FM.r.END;
                        break;
                    case F.MT.PLAYING:
                        t = tS.FM.r.PLAY;
                        break;
                    case F.MT.PAUSED:
                    case F.MT.IDLE:
                    case F.MT.LOADING_MEDIA_SOURCE:
                        t = tS.FM.r.PAUSE;
                }
                return t;
            }
            class tI {
                createTelemetry(e) {
                    (this.vsid = (0, M.createVsid)(e.playbackInitializationTime, this.playerTypeForVsid)),
                        (this.telemetry = new tS.YT({
                            getState: () => {
                                var t;
                                let {
                                    progress: {
                                        value: { duration: a, position: r, remainingBufferedTime: i },
                                    },
                                    volume: s,
                                } = e.state.playerState;
                                return (
                                    (null == (t = e.state.currentContext.value) ? void 0 : t.data.type) === et.K.Radio &&
                                    e.state.currentContext.value.data.meta.streamEpisodeId
                                        ? this.setStaticParams({ videoContentId: e.state.currentContext.value.data.meta.streamEpisodeId })
                                        : this.setStaticParams({ videoContentId: void 0 }),
                                    {
                                        duration: (0, tP.fP)(a),
                                        currentTime: (0, tP.fP)(r),
                                        utcStartTime: void 0,
                                        videoType: 'VOD',
                                        isFullscreen: !1,
                                        volume: s.value,
                                        muted: 0 === s.value,
                                        remainingBufferedTime: { total: (0, tP.fP)(null != i ? i : 0) },
                                        playingState: tk(e.state.playerState),
                                        videoSize: void 0,
                                        liveLatency: void 0,
                                        videoTracks: [],
                                        audioTrack: void 0,
                                        isVisible: !1,
                                    }
                                );
                            },
                            sendLog: (e, t) => {
                                this.telemetryResource.log({ payload: e, urlParams: t });
                            },
                            playerInfo: { service: this.service, version: '1.0.0', vsid: this.vsid, isVideoADB: !1 },
                        })),
                        this.telemetry.setStaticParams({ labels: { from: this.from } }),
                        (this.resourceTimingsMonitor = new tS.yv({
                            sendLog: (e, t) => {
                                this.telemetryResource.perfLog({ payload: e, urlParams: t });
                            },
                        })),
                        this.resourceTimingsMonitor.attach(window);
                }
                logEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent(e, t);
                }
                logError(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logError(e, t);
                }
                setPlayingState(e) {
                    var t;
                    let a = tk(e);
                    null == (t = this.telemetry) || t.setPlayingState(a);
                }
                setStaticParams(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.setStaticParams(e, t);
                }
                onBeforeSetSource() {
                    var e;
                    return null == (e = this.telemetry) ? void 0 : e.onBeforeSetSource();
                }
                onSetSource(e) {
                    var t;
                    null == (t = this.telemetry) || t.onSetSource(e, { streams: [], params: {} });
                }
                onCreatePlayer(e) {
                    var t;
                    let { location: a, referrer: r } = (0, tA.V)(window.document);
                    null == (t = this.telemetry) ||
                        t.onCreatePlayer(e, { location: (0, t_.K)(window), topLocation: a, referrer: window.document.referrer, topReferrer: r });
                }
                onSeek(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.onSeek({ oldPosition: e, newPosition: t });
                }
                logYaspEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent({ name: e, data: t });
                }
                logYaspError(e) {
                    var t;
                    null == (t = this.telemetry) || t.logError({ error: e.detail });
                }
                constructor({ telemetryResource: e, service: t, from: a, playerTypeForVsid: r }) {
                    (0, L._)(this, 'telemetry', void 0),
                        (0, L._)(this, 'resourceTimingsMonitor', void 0),
                        (0, L._)(this, 'telemetryResource', void 0),
                        (0, L._)(this, 'from', void 0),
                        (0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'playerTypeForVsid', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (this.telemetryResource = e),
                        (this.service = t),
                        (this.from = a),
                        (this.playerTypeForVsid = r);
                }
            }
            class tC {
                send(e) {
                    return this.transport.send(e, { topLevelParameter: 'player-metrics' });
                }
                constructor(e) {
                    (0, L._)(this, 'transport', void 0), (this.transport = e);
                }
            }
            class tT {
                send(e) {
                    return this.transport.send(e, { service: 'Player' });
                }
                constructor(e) {
                    (0, L._)(this, 'transport', void 0), (this.transport = e);
                }
            }
            var tx = a(79490);
            let tR = [];
            function tw(e, t) {
                let a,
                    r,
                    i = e.state.queueState.order.value,
                    s = e.state.queueState.index.value,
                    n = e.state.currentContext.value,
                    o = e.state.queueState.entityList.value,
                    l = e.state.queueState.repeat.value === F.pM.CONTEXT;
                tR.forEach((e) => e());
                for (let t = s - 1; t >= 0; t--) {
                    let r = i[t];
                    if ('number' != typeof r) break;
                    let s = o[r],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: F.So.MOVE_BACKWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        a = s.entity;
                        break;
                    }
                }
                let u = !!a || l;
                for (let t = s + 1; t < i.length; t++) {
                    let a = i[t];
                    if ('number' != typeof a) break;
                    let s = o[a],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: F.So.MOVE_FORWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        r = s.entity;
                        break;
                    }
                }
                let d = !!r || (l && !!a) || (!l && t);
                if (
                    (n &&
                        ((n.availableActions.moveBackward.value = u),
                        (n.availableActions.moveForward.value = d && !(0, tx.S)(n)),
                        (0, e$.i)(n) && !n.data.meta.session && (n.availableActions.moveForward.value = !1),
                        a || r || !l || ((n.availableActions.moveBackward.value = !1), (n.availableActions.moveForward.value = !1))),
                    (0, tx.S)(n))
                )
                    return;
                if (!a) {
                    let t = e.state.playerState.progress.onChange((t) => {
                        n &&
                            t &&
                            (((l = e.state.queueState.repeat.value === F.pM.CONTEXT) && !a && !r) || !l) &&
                            (n.availableActions.moveBackward.value = t.position > F.DS);
                    });
                    tR.push(t);
                }
                let c = e.state.queueState.repeat.onChange((e) => {
                    if (n) {
                        if ((0, e$.i)(n) && !n.data.meta.session) {
                            n.availableActions.moveForward.value = !1;
                            return;
                        }
                        if (e === F.pM.CONTEXT) {
                            (n.availableActions.moveBackward.value = !!a || (0 === s && !!r)), (n.availableActions.moveForward.value = !!r || !!a);
                            return;
                        }
                        (n.availableActions.moveBackward.value = !!a), (n.availableActions.moveForward.value = !!r || t);
                    }
                });
                tR.push(c);
            }
            let tD = [B.S.AUDIOBOOK, B.S.FAIRY_TALE, B.S.PODCAST, B.S.COMMENT];
            var tN = a(64605);
            let tO = (e) => {
                let { meta: t } = e.data,
                    a = 'albums' in t && t.albums && t.albums.length > 0 && t.albums[0] && t.albums[0].type === tN._.PODCAST;
                return !!(('type' in t && t.type && tD.includes(t.type)) || a);
            };
            class tM {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        r = () => {
                            !(function (e) {
                                let { playback: t, isVibeRepeatEnabled: a } = e,
                                    { value: r } = t.state.currentContext,
                                    { value: i } = t.state.queueState.currentEntity;
                                if (!r || !i) return;
                                let { meta: s } = i.entity.data,
                                    n = (0, e$.i)(r),
                                    o = (0, tx.S)(r),
                                    l = 'type' in s && s.type && tD.includes(s.type),
                                    u = !n && !o && !l,
                                    d = (!n || a) && !o && !l;
                                (r.availableActions.shuffle.value = u),
                                    (r.availableActions.repeat.value = d),
                                    !u && t.state.queueState.shuffle.value && t.toggleShuffle();
                                let c = t.state.queueState.repeat.value,
                                    h = !d && c !== F.pM.NONE,
                                    v = d && n && c === F.pM.CONTEXT;
                                (h || v) && t.setRepeatMode(F.pM.NONE);
                            })({ playback: a, isVibeRepeatEnabled: this.variables.isVibeRepeatEnabled });
                            let { value: e } = a.state.currentContext,
                                { value: t } = a.state.queueState.currentEntity,
                                r = void 0 !== t;
                            if (void 0 !== e && r) {
                                let a = tO(t.entity);
                                e.availableActions.speed.value = !!a;
                            }
                        };
                    t.afterContextSet.tap('AvailableActionsPlugin', r),
                        t.beforeMediaStartPlaying.tap('AvailableActionsPlugin', r),
                        a.state.queueState.entityList.onChange(() => {
                            r(), tw(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.filterParams.onChange(() => {
                            r(), tw(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.index.onChange(() => {
                            tw(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.repeat.onChange((e) => {
                            let { value: t } = a.state.currentContext;
                            (0, e$.i)(t) && this.variables.isVibeRepeatEnabled && e === F.pM.CONTEXT && a.setRepeatMode(F.pM.ONE);
                        });
                }
                constructor({ variables: e }) {
                    (0, L._)(this, 'variables', void 0), (this.variables = e);
                }
            }
            class tL {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterContextSet.tap('ApplyContextPlugin', () => {
                        let e = a.state.currentContext.value;
                        e && e instanceof F.EX && e.apply({ hooks: t, playback: a });
                    });
                }
            }
            class tF {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    t.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = t.state.queueState;
                        if (e.value)
                            switch (t.state.playerState.event.value) {
                                case F.Iu.PAUSED:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(F.Iu.PAUSED) });
                                    break;
                                case F.Iu.WAITING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(F.Iu.WAITING) });
                                    break;
                                case F.Iu.PLAYING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.PLAYING, reason: 'event-'.concat(F.Iu.PLAYING) });
                                    break;
                                case F.Iu.MEDIA_ELEMENT_ERROR:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(F.Iu.MEDIA_ELEMENT_ERROR) });
                            }
                    }),
                        a.beforeEntityPlayingProcessStart.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.clearTimeStagesOfPlayback(), Promise.resolve();
                        }),
                        a.afterMediaStartPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.PLAYING, reason: 'hook-afterMediaStartPlaying' }), Promise.resolve();
                        }),
                        a.afterMediaEndPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-afterMediaEndPlaying' }), Promise.resolve();
                        }),
                        a.beforeEntityChange.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-beforeEntityChange' }), Promise.resolve();
                        }),
                        a.beforeContextSet.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-beforeContextSet' }), Promise.resolve();
                        });
                }
            }
            var tB = a(31322),
                tq = a(79722);
            class tV extends tB.X {
                async sendPlays(e, t) {
                    return (
                        await this.httpClient.post(
                            'plays',
                            this.createHttpOptions({
                                timeoutKey: 'sendPlays',
                                params: e,
                                searchParams: (0, tq.P)({ clientNow: e.clientNow }),
                                json: { plays: e.plays },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t), (0, L._)(this, 'httpClient', void 0), (0, L._)(this, 'config', void 0), (this.httpClient = e), (this.config = t);
                }
            }
            var tU = a(87953);
            !(function (e) {
                (e.START = 'start'), (e.END = 'end'), (e.PLAYING = 'playing'), (e.PAUSE = 'pause');
            })(v || (v = {}));
            var tW = a(82299),
                tK = a(44179),
                tj = a(92478),
                tY = a(94527),
                tG = a(36795);
            let tH = (e) => !!(e && 'object' == typeof e && 'playId' in e && 'totalPlayedSeconds' in e),
                tz = (e) => {
                    let t = [e.find((e) => 0 === e.totalPlayedSeconds), (0, tj.A)(e, 'totalPlayedSeconds')];
                    return (0, tY.A)(t.filter(tH), 'totalPlayedSeconds');
                };
            class tQ {
                use(e) {
                    return this.middlewares.push(e), this;
                }
                run(e) {
                    let t = (a) => (a >= this.middlewares.length ? Promise.resolve() : (0, this.middlewares[a])(e, () => t(a + 1)));
                    return t(0);
                }
                constructor() {
                    (0, L._)(this, 'middlewares', []);
                }
            }
            class tX {
                getResult() {
                    return this.playData;
                }
                constructor(e) {
                    (0, L._)(this, 'contextEntityPair', void 0),
                        (0, L._)(this, 'playType', void 0),
                        (0, L._)(this, 'totalPlayedSeconds', void 0),
                        (0, L._)(this, 'endPositionSeconds', void 0),
                        (0, L._)(this, 'dynamicData', void 0),
                        (0, L._)(this, 'hooks', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'operation', void 0),
                        (0, L._)(this, 'clock', void 0),
                        (0, L._)(this, 'isCrossfadeEnabled', void 0),
                        (0, L._)(this, 'playData', {}),
                        (this.contextEntityPair = e.contextEntityPair),
                        (this.playType = e.playType),
                        (this.totalPlayedSeconds = e.totalPlayedSeconds),
                        (this.endPositionSeconds = e.endPositionSeconds),
                        (this.dynamicData = e.dynamicData),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.operation = e.operation),
                        (this.clock = e.clock),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled);
                }
            }
            class tZ extends z.t {
                constructor(e, { code: t = 'E_PLAYS', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'PlaysException'), Object.setPrototypeOf(this, tZ.prototype);
                }
            }
            let t$ = (e, t) => {
                var a, r, i;
                let { entity: s, context: n } = e.contextEntityPair;
                if (!s.playId) {
                    let t = {};
                    (t.contextId = n.data.meta.id), (t.entityId = s.data.meta.id);
                    let a = new tZ('Trying to '.concat(e.operation, ' without playId'), { data: t });
                    throw (null == (r = e.hooks) || r.afterError.promise(a), a);
                }
                let o = (null == (a = s.data.additional) ? void 0 : a.from) || n.from;
                if (!o) {
                    let t = new tZ('from field is required for '.concat(e.operation, ', but was not found in plays data'));
                    throw (null == (i = e.hooks) || i.afterError.promise(t), t);
                }
                return (e.playData.playId = s.playId), (e.playData.from = o), t();
            };
            function tJ(e) {
                return (null == e ? void 0 : e.data.type) === et.K.Radio;
            }
            function t0(e) {
                if ((0, tt.l)(e)) {
                    var t;
                    if ('smartPreviewParams' in e.data.meta && (null == (t = e.data.meta.smartPreviewParams) ? void 0 : t.durationMs))
                        return e.data.meta.smartPreviewParams.durationMs / 1e3;
                } else if ('durationMs' in e.data.meta && e.data.meta.durationMs) return e.data.meta.durationMs / 1e3;
                return 0;
            }
            let t1 = (e, t) => {
                    let { entity: a, context: r } = e.contextEntityPair,
                        i = t0(a),
                        s = e.totalPlayedSeconds,
                        n = e.endPositionSeconds;
                    return (
                        0.5 > Math.abs(i - e.totalPlayedSeconds) && (s = i),
                        0.5 > Math.abs(i - e.endPositionSeconds) && (n = i),
                        tJ(r) && (n = s),
                        (e.playData.totalPlayedSeconds = s),
                        (e.playData.endPositionSeconds = n),
                        (e.playData.trackLengthSeconds = i),
                        t()
                    );
                },
                t9 = (e) => {
                    if (e.mediaSourceData && 'urls' in e.mediaSourceData.data) {
                        let t = e.mediaSourceData.data.urls[0];
                        if (t && t.startsWith('blob:')) return !0;
                    }
                    return !1;
                };
            function t5(e) {
                return (null != e ? e : new Date()).toISOString();
            }
            let t3 = (e, t) => {
                    var a;
                    let { entity: r, context: i } = e.contextEntityPair;
                    (e.playData.timestamp = t5(e.clock())),
                        (e.playData.albumId = (function (e) {
                            let t;
                            if ('albums' in e.data.meta) {
                                let {
                                    data: {
                                        meta: { albums: a },
                                    },
                                } = e;
                                if (a) {
                                    let e = a[0];
                                    e && (t = String(e.id));
                                }
                            }
                            return t;
                        })(r)),
                        (e.playData.context = i.data.type),
                        (e.playData.contextItem = String(i.data.meta.id)),
                        (e.playData.addTracksToPlayerTime = r.addTracksToPlayerTime),
                        (e.playData.fromCache = t9(r)),
                        (e.playData.isRestored = !!r.data.isRestored);
                    let s = (null == (a = r.data.additional) ? void 0 : a.utmLink) || i.utmLink || {};
                    return (e.playData = { ...e.playData, ...s }), t();
                },
                t2 = (e, t) => ((e.playData.audioAuto = 'none'), (e.playData.audioOutputName = 'Динамик'), (e.playData.audioOutputType = 'Speaker'), t()),
                t4 = (e, t) => {
                    let a,
                        { entity: r, context: i } = e.contextEntityPair,
                        s = String(r.data.meta.id);
                    if ((0, tx.S)(i)) {
                        var n;
                        a = { generativeStreamId: (null == (n = i.data.meta.stream) ? void 0 : n.id) ? String(i.data.meta.stream.id) : void 0 };
                    } else a = { trackId: s };
                    return (e.playData = { ...e.playData, ...a }), t();
                },
                t8 = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, e$.i)(a) && a.data.meta.session) {
                        var r, i, s;
                        let { dynamicData: t } = e,
                            n = eh(e.contextEntityPair.entity) || (0, eA.b)(e.contextEntityPair.entity) ? e.contextEntityPair.entity.data.batchId : void 0,
                            {
                                wave: { seeds: o, stationId: l },
                            } = a.data.meta.session;
                        (e.playData.radioSessionId = null != (r = t.radioSessionId) ? r : a.data.meta.session.radioSessionId),
                            (e.playData.batchId = null != (i = null != n ? n : t.radioBatchId) ? i : a.data.meta.session.batchId),
                            (e.playData.isFromAutoflow = t.isFromAutoflow),
                            (e.playData.isFromPumpkin = t.isFromPumpkin),
                            (e.playData.context = 'radio'),
                            (e.playData.contextItem = null != (s = t.contextItem) ? s : o.join() || l);
                    }
                    return t();
                };
            var t6 = a(92382);
            let t7 = (e, t) => {
                let { context: a } = e.contextEntityPair;
                return (
                    (0, t6.K)(a) &&
                        ((e.playData.playlistId = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind)),
                        (e.playData.contextItem = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind))),
                    t()
                );
            };
            var ae = a(65068),
                at = a(44884);
            let aa = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, ae.p)(a)) {
                        var r;
                        let t = [at.b.Search, at.b.Other],
                            i = null != (r = a.data.overrideContextType) ? r : at.b.Other;
                        (e.playData.context = i), t.includes(i) && (e.playData.contextItem = null);
                    }
                    return t();
                },
                ar = (e, t) => {
                    let { entity: a } = e.contextEntityPair;
                    return (0, tt.l)(a) && (e.playData.smartPreview = !0), t();
                };
            !(function (e) {
                (e.AFTER_MEDIA_END_PLAYING = 'AFTER_MEDIA_END_PLAYING'),
                    (e.BEFORE_CONTEXT_SET = 'BEFORE_CONTEXT_SET'),
                    (e.BEFORE_ENTITY_CHANGE = 'BEFORE_ENTITY_CHANGE'),
                    (e.AFTER_CONTEXT_END = 'AFTER_CONTEXT_END');
            })(y || (y = {}));
            let ai = (e, t) => {
                var a, r;
                let { dynamicData: i, playType: s } = e;
                return (
                    (e.playData.seek = null != (a = i.seek) && a),
                    (e.playData.pause = null != (r = i.pause) && r),
                    (e.playData.startTimestamp = i.startTimestamp),
                    s !== v.START && (e.playData.maxPlayerStage = i.maxPlayerStage),
                    (e.playData.isRepeated = i.hookSource === y.AFTER_MEDIA_END_PLAYING && i.repeatMode === F.pM.ONE),
                    t()
                );
            };
            !(function (e) {
                (e.FINISH = 'finish'),
                    (e.SKIP = 'skip'),
                    (e.DISLIKE = 'dislike'),
                    (e.BACK_SKIP = 'back_skip'),
                    (e.OTHER_TRACK = 'other_track'),
                    (e.IN_PROGRESS = 'in_progress');
            })(p || (p = {}));
            let as = (e, t) => {
                let a,
                    { dynamicData: r, playType: i } = e;
                if (void 0 !== r.changeReason) return (e.playData.changeReason = r.changeReason), t();
                if (!r.hookSource) return i === v.PLAYING && (e.playData.changeReason = p.IN_PROGRESS), t();
                switch (r.hookSource) {
                    case y.AFTER_MEDIA_END_PLAYING:
                        a = p.FINISH;
                        break;
                    case y.BEFORE_CONTEXT_SET:
                        a = p.OTHER_TRACK;
                        break;
                    case y.BEFORE_ENTITY_CHANGE:
                    case y.AFTER_CONTEXT_END:
                        a = (function (e, t) {
                            if (!e) return p.OTHER_TRACK;
                            switch (e) {
                                case F.So.AUTO_MOVE_FORWARD:
                                    return p.FINISH;
                                case F.So.ERROR_MOVE_FORWARD:
                                case F.So.MOVE_FORWARD:
                                    return t ? p.DISLIKE : p.SKIP;
                                case F.So.MOVE_BACKWARD:
                                    return p.BACK_SKIP;
                                default:
                                    return p.OTHER_TRACK;
                            }
                        })(r.entityChangeMethod, r.wasDislikedOnChange);
                }
                return (e.playData.changeReason = a), t();
            };
            function an(e) {
                let t = e.state.mediaPlayersStore.value[U.e.AUDIO];
                return !!t && !!(0, F.uo)(t) && t.isReadyForAudioEffect.value;
            }
            let ao = (e, t) => {
                    if ((0, tx.S)(e.contextEntityPair.context)) return t();
                    let a = an(e.playback),
                        r = e.contextEntityPair.getCrossParams(),
                        i = e.contextEntityPair.getFadeMode();
                    if (
                        ((e.playData.fadeMode = a && r ? i : F.OQ.NONE),
                        !(function (e) {
                            let t = e.contextEntityPair.getCrossParams(),
                                a = e0(e.contextEntityPair.context),
                                r = !!e.isCrossfadeEnabled && e.isCrossfadeEnabled.value,
                                i = a || (r && e.contextEntityPair.getFadeMode() !== F.OQ.NONE);
                            if (!t || !i) {
                                e.playData.expectedTrackLengthSeconds = t0(e.contextEntityPair.entity);
                                return;
                            }
                            e.playData.expectedTrackLengthSeconds = t.outStart - t.inStart;
                        })(e),
                        e.dynamicData.startedWithCrossfade && r)
                    )
                        e.playData.startPositionSeconds = r.inStart;
                    else {
                        var s;
                        e.playData.startPositionSeconds = null != (s = e.contextEntityPair.positionSec) ? s : 0;
                    }
                    return t();
                },
                al = (e, t) => {
                    let { context: a } = e.contextEntityPair,
                        { livePlayableIndex: r, index: i } = e.playback.state.queueState,
                        s = i.value === r.value;
                    return (0, tx.S)(a) || ((0, e$.i)(a) ? (e.playData.isLivePlayableIndex = s) : (e.playData.isLivePlayableIndex = !1)), t();
                },
                au = (e, t) => {
                    let { context: a, sourceContext: r } = e.contextEntityPair;
                    return (0, e$.i)(a) && r && ((e.playData.context = r.data.type), (e.playData.contextItem = String(r.data.meta.id))), t();
                };
            class ad {
                buildPlayDataPipeline() {
                    let e = new tQ().use(t$).use(t1).use(t3).use(t2).use(t4).use(t8).use(t7).use(aa).use(ar).use(ai).use(as).use(al);
                    return this.toggles.enableSendFadeFieldsInPlays && e.use(ao), this.toggles.enableSendOriginalContextInVibePlays && e.use(au), e;
                }
                createPlay(e) {
                    let t = new tX({ ...e, hooks: this.hooks, playback: this.playback, clock: this.clock, isCrossfadeEnabled: this.isCrossfadeEnabled });
                    return this.playDataPipeline
                        .run(t)
                        .then(() => t.getResult())
                        .catch((e) => (console.error('Critical error in play data pipeline:', e), null));
                }
                createStartPlay(e) {
                    e.entity.addTracksToPlayerTime = ''.concat(Math.random().toString().slice(2), '-').concat(Math.ceil(Number(this.clock()) / 1e3));
                    let t = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: v.START,
                        totalPlayedSeconds: 0,
                        endPositionSeconds: 0,
                        dynamicData: t,
                        operation: 'send start entity play',
                    });
                }
                createProgressPlay(e, t, a, r) {
                    let i = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({ contextEntityPair: e, playType: v.PLAYING, totalPlayedSeconds: t, endPositionSeconds: a, dynamicData: i, operation: r });
                }
                createEndPlay(e, t, a) {
                    let r = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: v.END,
                        totalPlayedSeconds: t,
                        endPositionSeconds: a,
                        dynamicData: r,
                        operation: 'send end entity play',
                    });
                }
                sendStartEntityPlay(e) {
                    if (!e) return Promise.resolve();
                    try {
                        return this.createStartPlay(e).then((t) => {
                            if (t && !this.toggles.disableSendPlaysOnTrackStart)
                                return this.sendPlay(t).catch((t) => {
                                    this.handleSendingError(t, 'Error while sending plays', e);
                                });
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendPartialPlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            r = this.hasSentPartialPlayReportId(t),
                            i = this.toggles.enablePartialPlayReporting && !r && a >= 30.1,
                            s = this.toggles.enablePeriodicSendPlays && this.nextPeriodicSendTotalPlayedSeconds < a;
                        if (!(0, tx.S)(e.context) && (i || s))
                            return this.createProgressPlay(e, a, this.playback.state.playerState.progress.value.position, 'send partial play report').then((t) =>
                                t
                                    ? this.sendPlay(t)
                                          .then(() => {
                                              i && this.addSentPartialPlayReportId(t.playId),
                                                  s && (this.nextPeriodicSendTotalPlayedSeconds += this.periodicSendIntervalSeconds);
                                          })
                                          .catch((t) => {
                                              this.handleSendingError(t, 'Error while sending plays', e);
                                          })
                                    : Promise.resolve(),
                            );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays partial play report', e);
                    }
                    return Promise.resolve();
                }
                sendPausePlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            r = this.dynamicDataManager.getDynamicDataByPlayId(t);
                        return this.createPlay({
                            contextEntityPair: e,
                            playType: v.PAUSE,
                            totalPlayedSeconds: a,
                            endPositionSeconds: this.playback.state.playerState.progress.value.position,
                            dynamicData: { ...r, changeReason: void 0 },
                            operation: 'send pause play report',
                        }).then((t) =>
                            t
                                ? this.sendPlay(t).catch((t) => {
                                      this.handleSendingError(t, 'Error while sending plays', e);
                                  })
                                : Promise.resolve(),
                        );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays pause play report', e);
                    }
                    return Promise.resolve();
                }
                sendEndEntityPlay(e) {
                    if (!e || (this.toggles.enableRemoveDuplicatePlays && this.hasSentPlayId(e.entity.playId))) return Promise.resolve();
                    this.toggles.enableRemoveDuplicatePlays && this.addSentPlayId(e.entity.playId);
                    try {
                        return this.createEndPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position).then((t) => {
                            if (t)
                                return (
                                    this.clearDynamicData(t.playId),
                                    this.toggles.enablePartialPlayReporting && this.clearSentPartialPlayReportId(t.playId),
                                    this.sendPlay(t)
                                        .catch((t) => {
                                            this.handleSendingError(t, 'Error while sending plays', e);
                                        })
                                        .finally(() => {
                                            this.resetIsRestoredFlag(e.entity);
                                        })
                                );
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendStoredPlaysData() {
                    this.isSendingPlays.value = !0;
                    let e = this.toggles.limitOfSendingPlaysData || 25;
                    return this.isStorageEnabled()
                        ? this.store
                              .getStoredPlaysData(e)
                              .then((e) => {
                                  let t = this.filterPlaysForSending(e);
                                  if (!t.length) {
                                      this.isSendingPlays.value = !1;
                                      return;
                                  }
                                  this.playsResourceSend(t)
                                      .then(() => {
                                          this.deletePlaysData(t).then(() => {
                                              this.sendStoredPlaysData();
                                          });
                                      })
                                      .catch((e) => {
                                          var a;
                                          (this.isSendingPlays.value = !1),
                                              e instanceof tU.GX && e.statusCode === tU.X1.BAD_REQUEST && this.deletePlaysData(t),
                                              null == (a = this.hooks) || a.afterError.promise(new tZ('Error while sending plays', { cause: e }));
                                      });
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                sendPlay(e) {
                    this.isSendingPlays.value = !0;
                    let t = [e];
                    return this.playsResourceSend(t)
                        .then(() => {
                            this.isStorageEnabled() && this.deletePlaysData(t, (e) => e.totalPlayedSeconds > 0);
                        })
                        .catch((a) => {
                            throw (a instanceof tU.GX && a.statusCode === tU.X1.BAD_REQUEST ? this.deletePlaysData(t) : this.storeAndReplace(e), a);
                        })
                        .finally(() => {
                            if (!this.isStorageEnabled()) {
                                this.isSendingPlays.value = !1;
                                return;
                            }
                            this.sendStoredPlaysData();
                        });
                }
                clearSentPlayIds() {
                    this.sentPlayIds.clear();
                }
                clearPeriodicSendInterval() {
                    this.nextPeriodicSendTotalPlayedSeconds = this.periodicSendIntervalSeconds;
                }
                hasSentPlayId(e) {
                    return this.sentPlayIds.has(e);
                }
                addSentPlayId(e) {
                    this.sentPlayIds.add(e);
                }
                addSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.add(e);
                }
                hasSentPartialPlayReportId(e) {
                    return this.sentPartialPlayReportIds.has(e);
                }
                clearSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.delete(e);
                }
                isSendingPlaysValue() {
                    return this.isSendingPlays.value;
                }
                onSendingPlaysStateChange(e) {
                    return this.isSendingPlays.onChange(e);
                }
                resetIsRestoredFlag(e) {
                    e.data.isRestored && (e.data.isRestored = !1);
                }
                handleSendingError(e, t, a) {
                    var r;
                    let i = '',
                        s = '';
                    a && ((i = a.context.data.meta.id), (s = a.entity.data.meta.id)),
                        null == (r = this.hooks) || r.afterError.promise(new tZ(t, { cause: e, data: { contextId: i, entityId: s } }));
                }
                clearDynamicData(e) {
                    this.dynamicDataManager.clearDynamicData(e);
                }
                setPlaysDataForSending(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.add(t);
                    });
                }
                clearSendedPlaysData(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.has(t) && this.sendingInProgressForPlayId.delete(t);
                    });
                }
                filterPlaysForSending(e) {
                    var t = e.filter((e) => {
                        let { playId: t } = e;
                        return !this.sendingInProgressForPlayId.has(t);
                    });
                    let a = (0, tK.A)((0, tW.A)(t, 'playId'), tz);
                    return (0, tG.A)(a);
                }
                playsResourceSend(e) {
                    return (
                        this.setPlaysDataForSending(e),
                        this.gateway.sendPlays(e).finally(() => {
                            this.clearSendedPlaysData(e);
                        })
                    );
                }
                deletePlaysData(e, t, a) {
                    return this.isStorageEnabled()
                        ? this.store
                              .deleteAllByPlayId(e, t)
                              .then(() => {
                                  if (a) return a();
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                storeAndReplace(e) {
                    if (!this.isStorageEnabled()) return Promise.resolve();
                    let t = () => {
                        var t;
                        return null == (t = this.store) ? void 0 : t.storePlaysData(e);
                    };
                    return this.deletePlaysData([e], (e) => e.totalPlayedSeconds > 0, t);
                }
                isStorageEnabled() {
                    return !!this.toggles.enableLocalStoredPlaysData && this.store.isAvailable();
                }
                storePlay(e) {
                    return this.storeAndReplace(e);
                }
                sendCurrentEntityEndPlay() {
                    let e = this.playback.state.queueState.currentEntity.value;
                    if (e && this.playback.state.currentContext.value) {
                        if ((0, e$.i)(this.playback.state.currentContext.value)) return this.sendEndEntityPlay(e);
                        this.sendEndEntityPlay(e);
                    }
                    return Promise.resolve();
                }
                constructor(e) {
                    (0, L._)(this, 'store', void 0),
                        (0, L._)(this, 'gateway', void 0),
                        (0, L._)(this, 'dynamicDataManager', void 0),
                        (0, L._)(this, 'clock', void 0),
                        (0, L._)(this, 'toggles', void 0),
                        (0, L._)(this, 'hooks', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'isCrossfadeEnabled', void 0),
                        (0, L._)(this, 'sentPlayIds', new Set()),
                        (0, L._)(this, 'sentPartialPlayReportIds', new Set()),
                        (0, L._)(this, 'sendingInProgressForPlayId', new Set()),
                        (0, L._)(this, 'nextPeriodicSendTotalPlayedSeconds', 0),
                        (0, L._)(this, 'isSendingPlays', void 0),
                        (0, L._)(this, 'periodicSendIntervalSeconds', void 0),
                        (0, L._)(this, 'playDataPipeline', void 0),
                        (this.store = e.store),
                        (this.gateway = e.gateway),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.clock = e.clock),
                        (this.toggles = e.toggles),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled),
                        (this.periodicSendIntervalSeconds = e.periodicSendIntervalSeconds),
                        (this.isSendingPlays = new er.cJ(!1)),
                        (this.playDataPipeline = this.buildPlayDataPipeline());
                }
            }
            !(function (e) {
                (e.PREPARE = 'prepare'), (e.PLAY = 'play');
            })(m || (m = {}));
            class ac {
                getDynamicDataByPlayId(e) {
                    var t, a, r;
                    let i = this.dynamicDataByPlayId.get(e);
                    return {
                        seek: null != (t = null == i ? void 0 : i.seek) && t,
                        pause: null != (a = null == i ? void 0 : i.pause) && a,
                        maxPlayerStage: null != (r = null == i ? void 0 : i.maxPlayerStage) ? r : m.PREPARE,
                        startTimestamp: null == i ? void 0 : i.startTimestamp,
                        radioSessionId: null == i ? void 0 : i.radioSessionId,
                        radioBatchId: null == i ? void 0 : i.radioBatchId,
                        contextItem: null == i ? void 0 : i.contextItem,
                        isFromAutoflow: null == i ? void 0 : i.isFromAutoflow,
                        isFromPumpkin: null == i ? void 0 : i.isFromPumpkin,
                        changeReason: null == i ? void 0 : i.changeReason,
                        hookSource: null == i ? void 0 : i.hookSource,
                        repeatMode: null == i ? void 0 : i.repeatMode,
                        entityChangeMethod: null == i ? void 0 : i.entityChangeMethod,
                        wasDislikedOnChange: null == i ? void 0 : i.wasDislikedOnChange,
                        wasAlreadyDisliked: null == i ? void 0 : i.wasAlreadyDisliked,
                        startedWithCrossfade: null == i ? void 0 : i.startedWithCrossfade,
                    };
                }
                updateDynamicData(e, t) {
                    var a;
                    let r = null != (a = this.dynamicDataByPlayId.get(e)) ? a : {};
                    this.dynamicDataByPlayId.set(e, { ...r, ...t });
                }
                clearDynamicData(e) {
                    this.dynamicDataByPlayId.delete(e);
                }
                hasDynamicData(e) {
                    return this.dynamicDataByPlayId.has(e);
                }
                markAsAlreadyDisliked(e) {
                    this.updateDynamicData(e, { wasAlreadyDisliked: !0 });
                }
                isAlreadyDisliked(e) {
                    var t;
                    return null != (t = this.getDynamicDataByPlayId(e).wasAlreadyDisliked) && t;
                }
                constructor() {
                    (0, L._)(this, 'dynamicDataByPlayId', new Map());
                }
            }
            var ah = a(8055);
            function av(e, t) {
                if (!(0, e$.i)(null == e ? void 0 : e.context) || !e) return;
                let {
                        meta: { session: a, sessionTracks: r },
                        parentContext: i,
                    } = e.context.data,
                    s = null == a ? void 0 : a.radioSessionId,
                    n = eh(e.entity) || (0, eA.b)(e.entity) ? e.entity.data.batchId : void 0,
                    o = null != n ? n : r ? r.batchId : null == a ? void 0 : a.batchId,
                    l = t.getDynamicDataByPlayId(e.entity.playId).contextItem,
                    u = a ? a.wave.seeds.join() || a.wave.stationId : void 0,
                    d = r ? r.pumpkin : null == a ? void 0 : a.pumpkin;
                t.updateDynamicData(e.entity.playId, { radioSessionId: s, radioBatchId: o, contextItem: null != l ? l : u, isFromPumpkin: d, isFromAutoflow: !!i });
            }
            class ay {
                attachSubscriptions() {
                    this.attachPlayerStateEventSubscription(), this.attachProgressSubscriptions();
                }
                attachPlayerStateEventSubscription() {
                    this.playback.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = this.playback.state.queueState;
                        if (!e.value) return;
                        let t = e.value.entity.playId;
                        switch (this.playback.state.playerState.event.value) {
                            case F.Iu.PLAYING:
                                this.handlePlayingEvent(e.value, t);
                                break;
                            case F.Iu.PAUSED:
                                this.handlePausedEvent(e.value, t);
                                break;
                            case F.Iu.SET_PROGRESS:
                                this.handleSetProgressEvent(e.value, t);
                        }
                    });
                }
                handlePlayingEvent(e, t) {
                    av(e, this.dynamicDataManager), this.dynamicDataManager.updateDynamicData(t, { maxPlayerStage: m.PLAY });
                }
                handlePausedEvent(e, t) {
                    let a = this.playback.state.playerState.progress.value;
                    Math.abs(a.position - a.duration) > 0.2 && this.dynamicDataManager.updateDynamicData(t, { pause: !0 }),
                        tJ(e.context) && this.service.sendPausePlayReport(e);
                }
                handleSetProgressEvent(e, t) {
                    (0, tx.S)(e.context) || tJ(e.context) || this.dynamicDataManager.updateDynamicData(t, { seek: !0 });
                }
                attachProgressSubscriptions() {
                    this.toggles.enableLocalStoredPlaysData && this.attachStorePlayOnProgress(),
                        (this.toggles.enablePartialPlayReporting || this.toggles.enablePeriodicSendPlays) && this.attachPartialPlayReporting();
                }
                attachStorePlayOnProgress() {
                    let e = (0, ah.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            !e ||
                                (0, tx.S)(e.context) ||
                                this.service
                                    .createProgressPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position, 'store play on progress')
                                    .then((e) => {
                                        e && e.playId && e.totalPlayedSeconds > 0 && this.service.storePlay(e);
                                    });
                        },
                        this.storePlaysProgressIntervalMs,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                attachPartialPlayReporting() {
                    let e = (0, ah.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            e && this.service.sendPartialPlayReport(e);
                        },
                        2e3,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                constructor(e) {
                    (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'dynamicDataManager', void 0),
                        (0, L._)(this, 'toggles', void 0),
                        (0, L._)(this, 'storePlaysProgressIntervalMs', void 0),
                        (this.playback = e.playback),
                        (this.service = e.service),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.toggles = e.toggles),
                        (this.storePlaysProgressIntervalMs = e.storePlaysProgressIntervalMs);
                }
            }
            class ap extends z.t {
                constructor(e, { code: t = 'E_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'MediaProviderException'), Object.setPrototypeOf(this, ap.prototype);
                }
            }
            class am extends ap {
                constructor(e, { code: t = 'E_GET_FILE_INFO_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'GetFileInfoMediaProviderException'), Object.setPrototypeOf(this, am.prototype);
                }
            }
            class af {
                sendPlays(e) {
                    return this.playsResource.sendPlays({ clientNow: t5(), plays: e });
                }
                constructor(e) {
                    (0, L._)(this, 'playsResource', void 0), (this.playsResource = e);
                }
            }
            class ag {
                storePlaysData(e) {
                    return Promise.resolve();
                }
                getStoredPlaysData(e) {
                    return Promise.resolve([]);
                }
                deleteAllByPlayId(e, t) {
                    return Promise.resolve();
                }
                isAvailable() {
                    return !1;
                }
                openDatabase() {
                    return Promise.resolve();
                }
                deleteDatabase() {
                    return Promise.resolve();
                }
                setErrorLogger(e) {}
            }
            class ab {
                apply(e) {
                    var t, a;
                    let { hooks: r, playback: i } = e,
                        s = this.params.store || new ag(),
                        n = new af(new tV(this.params.httpClient, this.params.playsResourceConfig));
                    (this.dynamicDataManager = new ac()),
                        (this.service = new ad({
                            store: s,
                            gateway: n,
                            dynamicDataManager: this.dynamicDataManager,
                            clock: () => new Date(),
                            toggles: this.toggles,
                            hooks: r,
                            playback: i,
                            isCrossfadeEnabled: this.params.isCrossfadeEnabled,
                            periodicSendIntervalSeconds: null != (t = this.params.periodicSendIntervalSeconds) ? t : 30,
                        })),
                        (this.playerStateSubscriptions = new ay({
                            playback: i,
                            hooks: r,
                            service: this.service,
                            dynamicDataManager: this.dynamicDataManager,
                            toggles: this.toggles,
                            storePlaysProgressIntervalMs: null != (a = this.params.storePlaysProgressIntervalMs) ? a : 1e4,
                        })),
                        this.playerStateSubscriptions.attachSubscriptions();
                    let {
                        playback: o,
                        hooks: l,
                        service: u,
                        dynamicDataManager: d,
                        toggles: c,
                        clock: h,
                    } = { playback: i, hooks: r, service: this.service, dynamicDataManager: this.dynamicDataManager, toggles: this.toggles, clock: () => new Date() };
                    l.beforeEntityPlayingProcessStart.tapPromise('PlaysPlugin', () => {
                        c.enableRemoveDuplicatePlays && u.clearSentPlayIds();
                        let { queueState: e } = o.state,
                            t = e.currentEntity.value;
                        if ((av(t, d), t)) {
                            let e = an(o),
                                a = t.entity.playId;
                            d.updateDynamicData(a, { startedWithCrossfade: e });
                        }
                        return u.sendStartEntityPlay(t), u.clearPeriodicSendInterval(), Promise.resolve();
                    }),
                        l.beforeMediaStartPlaying.tapPromise('PlaysPlugin', () => {
                            let { currentEntity: e } = o.state.queueState;
                            if (e.value) {
                                let t = e.value.entity.playId;
                                e.value.entity.isDisliked && d.markAsAlreadyDisliked(t),
                                    d.getDynamicDataByPlayId(t).startTimestamp || d.updateDynamicData(t, { startTimestamp: t5(h()) });
                            }
                            return Promise.resolve();
                        }),
                        l.afterMediaEndPlaying.tapPromise('PlaysPlugin', () => {
                            let {
                                    order: { value: e },
                                    repeat: { value: t },
                                } = o.state.queueState,
                                a = o.state.queueState.currentEntity.value,
                                r = null == a ? void 0 : a.entity.playId,
                                i = t === F.pM.CONTEXT && 1 === e.length,
                                s = t === F.pM.ONE || i,
                                n = (null == a ? void 0 : a.entity.isDisliked) && r && !d.isAlreadyDisliked(r);
                            return (
                                s && a && r && !0 !== n && (d.updateDynamicData(r, { hookSource: y.AFTER_MEDIA_END_PLAYING, repeatMode: t }), u.sendEndEntityPlay(a)),
                                Promise.resolve()
                            );
                        }),
                        l.afterError.tapPromise('PlaysPlugin', (e) => {
                            if (e instanceof am || e instanceof F.LI) {
                                let e = o.state.queueState.currentEntity.value;
                                u.sendEndEntityPlay(e);
                            }
                            return Promise.resolve();
                        }),
                        l.beforeContextSet.tapPromise('PlaysPlugin', () => {
                            let e = o.state.queueState.currentEntity.value;
                            return e && d.updateDynamicData(e.entity.playId, { hookSource: y.BEFORE_CONTEXT_SET }), u.sendCurrentEntityEndPlay();
                        }),
                        l.afterContextEnd.tapPromise('PlaysPlugin', (e) => {
                            let t = o.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId;
                            return (
                                t &&
                                    a &&
                                    (d.updateDynamicData(a, {
                                        hookSource: y.AFTER_CONTEXT_END,
                                        entityChangeMethod: e,
                                        wasDislikedOnChange: t.entity.isDisliked && !d.isAlreadyDisliked(a),
                                    }),
                                    u.sendEndEntityPlay(t)),
                                Promise.resolve()
                            );
                        }),
                        l.afterSetupQueue.tap('PlaysPlugin', () => {
                            let { queueState: e } = o.state;
                            av(e.currentEntity.value, d);
                        }),
                        l.beforeEntityChange.tapPromise('PlaysPlugin', (e) => {
                            var t;
                            let { currentEntity: a } = o.state.queueState,
                                { method: r } = e,
                                i = null == (t = a.value) ? void 0 : t.entity.playId;
                            return a.value && i
                                ? (d.updateDynamicData(i, {
                                      hookSource: y.BEFORE_ENTITY_CHANGE,
                                      entityChangeMethod: r,
                                      wasDislikedOnChange: a.value.entity.isDisliked && !d.isAlreadyDisliked(i),
                                  }),
                                  u.sendCurrentEntityEndPlay())
                                : Promise.resolve();
                        }),
                        l.beforeDestroy.tap(
                            'PlaysPlugin',
                            () =>
                                new Promise((e) => {
                                    if (!u.isSendingPlaysValue()) return void e();
                                    let t = u.onSendingPlaysStateChange((a) => {
                                        a || (t(), e());
                                    });
                                }),
                        ),
                        this.toggles.enableLocalStoredPlaysData &&
                            s.setErrorLogger((e) => {
                                r.afterError.promise(e);
                            }),
                        this.toggles.shouldDeletePlaysObjectStore && s.deleteDatabase(),
                        this.toggles.enableLocalStoredPlaysData &&
                            !this.toggles.shouldDeletePlaysObjectStore &&
                            s.openDatabase().then(() => {
                                var e;
                                null == (e = this.service) || e.sendStoredPlaysData();
                            });
                }
                constructor(e) {
                    var t, a, r, i, s, n, o, l, u, d, c, h, v, y, p, m, f, g;
                    (0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'dynamicDataManager', void 0),
                        (0, L._)(this, 'playerStateSubscriptions', void 0),
                        (0, L._)(this, 'toggles', void 0),
                        (0, L._)(this, 'params', void 0),
                        (this.params = e),
                        (this.toggles = {
                            disableSendPlaysOnTrackStart: null != (d = null == (t = e.variables) ? void 0 : t.disableSendPlaysOnTrackStart) && d,
                            enableLocalStoredPlaysData: null != (c = null == (a = e.variables) ? void 0 : a.enableLocalStoredPlaysData) && c,
                            limitOfSendingPlaysData: null != (h = null == (r = e.variables) ? void 0 : r.limitOfSendingPlaysData) ? h : 25,
                            shouldDeletePlaysObjectStore: null != (v = null == (i = e.variables) ? void 0 : i.shouldDeletePlaysObjectStore) && v,
                            enableRemoveDuplicatePlays: null != (y = null == (s = e.variables) ? void 0 : s.enableRemoveDuplicatePlays) && y,
                            enablePartialPlayReporting: null != (p = null == (n = e.variables) ? void 0 : n.enablePartialPlayReporting) && p,
                            enablePeriodicSendPlays: null != (m = null == (o = e.variables) ? void 0 : o.enablePeriodicSendPlays) && m,
                            enableSendFadeFieldsInPlays: null != (f = null == (l = e.variables) ? void 0 : l.enableSendFadeFieldsInPlays) && f,
                            enableSendOriginalContextInVibePlays: null != (g = null == (u = e.variables) ? void 0 : u.enableSendOriginalContextInVibePlays) && g,
                        });
                }
            }
            var aE = a(16839);
            let aS = 'playsHeartBeats';
            class a_ extends z.t {
                constructor(e, { code: t = 'E_PLAYS_IDB_STORE', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'PlaysStoreException'), Object.setPrototypeOf(this, a_.prototype);
                }
            }
            class aA {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new e3.h(this.idbName).deleteDB({ onBlocked: aE.A }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storePlaysData(e) {
                    return this.executeTransaction((t) => t.put(aS, e).then(() => t.count(aS)))
                        .then((e) => ('number' == typeof e && e > this.storedPlaysLimit ? this.deleteOverLimitPlays(this.storedPlaysLimit) : Promise.resolve()))
                        .catch((e) => {
                            throw this.generateError('Saving Play Error', e);
                        });
                }
                getStoredPlaysData(e) {
                    return this.executeTransaction((t) => t.getAll(aS, null, e), { defaultValue: [] }).catch((e) => {
                        throw this.generateError('Error getting Plays', e);
                    });
                }
                deleteAllByPlayId(e, t) {
                    return Promise.all(
                        e.map((e) => {
                            let { playId: a } = e;
                            return this.iterateByCursor('playId', a, 'readwrite', (e) => (!t || t(e.value) ? e.delete() : Promise.resolve()));
                        }),
                    )
                        .then(aE.A)
                        .catch((e) => {
                            throw this.generateError('Error deleting Plays', e);
                        });
                }
                deleteOverLimitPlays(e) {
                    return this.iterateByCursor(null, null, 'readwrite', (t, a) => (a <= e ? Promise.resolve() : t.delete())).catch((e) => {
                        throw this.generateError('Error deleting overlimit Plays', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = 0,
                        s = (e) =>
                            e
                                ? r(e, ++i)
                                      .then(() => e.continue())
                                      .then(s)
                                : Promise.resolve();
                    return this.getCursor(e, t, a).then(s);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    (this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        }));
                }
                openIdb(e) {
                    return new e3.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, r) => {
                                var i;
                                this.logError('Connection has been blocked'), null == e || null == (i = e.onBlocked) || i.call(e, t, a, r);
                            },
                            onTerminated: () => {
                                var t;
                                this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(aS, { keyPath: 'id', autoIncrement: !0 });
                                t.createIndex('playId', 'playId', { unique: !1 }), t.createIndex('trackId', 'trackId', { unique: !1 });
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            (this.idbIsAvailable = !1), this.logError('Open storage error', e);
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return this.executeTransaction(
                        (r) => {
                            let i = r.transaction([aS], a).objectStore(aS);
                            return e ? i.index(e).openCursor(t, 'prev') : i.openCursor(t, 'prev');
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, r);
                }
                generateError(e, t) {
                    var a;
                    let r = '[IndexedDB]['.concat(this.idbName, '.').concat(aS, ']: ').concat(e),
                        i = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new a_(r, { data: { originalError: i, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                constructor(e = 100) {
                    (0, L._)(this, 'storedPlaysLimit', void 0),
                        (0, L._)(this, 'idb', void 0),
                        (0, L._)(this, 'errorLogger', void 0),
                        (0, L._)(this, 'idbIsAvailable', !1),
                        (0, L._)(this, 'idbName', void 0),
                        (0, L._)(this, 'storageEstimate', void 0),
                        (this.storedPlaysLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_plays', '_').concat('1.0.0'));
                }
            }
            function aP(e) {
                return (null == e ? void 0 : e.data.type) === q.R.Generative;
            }
            !(function (e) {
                (e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.NEXT = 'nexttrack'), (e.PREV = 'previoustrack'), (e.SEEK = 'seekto'), (e.STOP = 'stop');
            })(f || (f = {}));
            let ak = [40, 50, 80, 100, 200, 300, 400],
                aI = [f.PLAY, f.PAUSE, f.STOP, f.SEEK];
            class aC {
                isSupported() {
                    return 'mediaSession' in window.navigator && 'MediaMetadata' in window;
                }
                handleMediaActionEvents(e, t) {
                    let { action: a } = e;
                    switch (a) {
                        case f.PLAY:
                            t.resume();
                            break;
                        case f.PAUSE:
                        case f.STOP:
                            t.pause();
                            break;
                        case f.NEXT:
                            t.moveForward();
                            break;
                        case f.PREV:
                            t.moveBackward();
                            break;
                        case f.SEEK: {
                            var r;
                            if (aP(null == (r = t.state.queueState.currentEntity.value) ? void 0 : r.entity)) return;
                            let { seekTime: a } = e;
                            a && t.setProgress(a);
                        }
                    }
                }
                prepareMetadata(e) {
                    let t,
                        a,
                        r = { title: e.title };
                    if (('artists' in e && (r.artist = (e.artists || []).map((e) => e.name).join(', ')), 'albums' in e)) {
                        var i, s;
                        r.album = null == (s = e.albums) || null == (i = s[0]) ? void 0 : i.title;
                    }
                    return (
                        'coverUri' in e && (t = e.coverUri),
                        'imageUrl' in e && (t = e.imageUrl),
                        t &&
                            (a = ak.map((e) => {
                                let a = ''.concat(e, 'x').concat(e);
                                'Safari' === this.browserName && (a = ''.concat(2 * e, 'x').concat(2 * e));
                                let r = '';
                                return (
                                    'string' == typeof t && (r = t.startsWith('blob:') ? t : 'https://'.concat(t.replace('%%', a))),
                                    { sizes: a, src: r, type: 'image/jpg' }
                                );
                            })),
                        (r.artwork = a),
                        r
                    );
                }
                updateMetadata(e) {
                    if (!e) {
                        window.navigator.mediaSession.metadata = null;
                        return;
                    }
                    let t = this.prepareMetadata(e);
                    return (window.navigator.mediaSession.metadata = null), (window.navigator.mediaSession.metadata = new MediaMetadata(t)), t;
                }
                subscribeToCrossfadeEnd(e) {
                    var t;
                    let a = null == (t = e.state.mediaPlayersStore.value) ? void 0 : t[U.e.AUDIO];
                    a &&
                        (0, F.uo)(a) &&
                        a.isCrossing.onChange(
                            (t) => {
                                !1 === t && (this.updateCurrentEntityMetadata(e), this.updatePositionState(e));
                            },
                            { skipFirstChange: !0 },
                        );
                }
                updateMediaSessionPlaybackState(e) {
                    if (e === F.MT.PAUSED || e === F.MT.STOPPED || e === F.MT.ENDED || e === F.MT.IDLE) {
                        window.navigator.mediaSession.playbackState = 'paused';
                        return;
                    }
                    (e === F.MT.PLAYING || e === F.MT.BUFFERING || e === F.MT.LOADING_MEDIA_SOURCE) && (window.navigator.mediaSession.playbackState = 'playing');
                }
                updateCurrentEntityMetadata(e) {
                    var t;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    this.updateMetadata(a);
                }
                updatePositionState(e) {
                    var t, a, r;
                    if (aP(null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity)) return void navigator.mediaSession.setPositionState();
                    let i = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta,
                        s = e.state.playerState.progress.value,
                        n = 'number' == typeof (null == s ? void 0 : s.duration) && Number.isFinite(s.duration) ? s.duration : null,
                        o = i && 'durationMs' in i && 'number' == typeof i.durationMs && Number.isFinite(i.durationMs) ? i.durationMs / 1e3 : null,
                        l = null != (r = null != n ? n : o) ? r : 0,
                        u = 'number' == typeof (null == s ? void 0 : s.position) && Number.isFinite(s.position) ? s.position : 0;
                    l > 0 && navigator.mediaSession.setPositionState({ duration: l, position: Math.min(u, l) });
                }
                handlePlayerEvents(e) {
                    let t, a;
                    e.state.currentMediaPlayer?.onChange((currentPlayer) => {
                        currentPlayer?.isCrossing?.onChange?.((isCrossing) => {
                            if (!isCrossing) {
                                this.updateMetadata();
                                this.updateMetadata(e.state.queueState.currentEntity.value?.entity?.data?.meta);
                            }
                        });
                    });
                    e.state.queueState.currentEntity.onChange(() => {
                        this.updateCurrentEntityMetadata(e), this.updatePositionState(e);
                    }),
                        e.state.playerState.status.onChange((e) => {
                            this.updateMediaSessionPlaybackState(e);
                        }),
                        this.subscribeToCrossfadeEnd(e),
                        e.state.playerState.event.onChange(() => {
                            e.state.playerState.event.value === F.Iu.UPDATING_PROGRESS &&
                                !e.state.currentMediaPlayer?.value.isCrossing?.value &&
                                (this.updateCurrentEntityMetadata(e),
                                this.updatePositionState(e),
                                aI.forEach((t) => {
                                    try {
                                        window.navigator.mediaSession.setActionHandler(t, (t) => this.handleMediaActionEvents(t, e));
                                    } catch (e) {
                                        console.log('The media session action "'.concat(t, '" is not supported yet.'));
                                    }
                                }));
                        }),
                        e.state.currentContext.onChange(() => {
                            var r, i;
                            null == t || t(),
                                null == a || a(),
                                (t =
                                    null == (r = e.state.currentContext.value)
                                        ? void 0
                                        : r.availableActions.moveBackward.onChange(() => {
                                              var t, a;
                                              let r = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveBackward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(f.PREV, r ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          })),
                                (a =
                                    null == (i = e.state.currentContext.value)
                                        ? void 0
                                        : i.availableActions.moveForward.onChange(() => {
                                              var t, a;
                                              let r = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveForward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(f.NEXT, r ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          }));
                        });
                }
                apply(e) {
                    let { playback: t } = e;
                    this.isSupported() && this.handlePlayerEvents(t);
                }
                constructor({ browserName: e, browserVersion: t }) {
                    (0, L._)(this, 'browserName', void 0), (0, L._)(this, 'browserVersion', void 0), (this.browserName = e), (this.browserVersion = t);
                }
            }
            class aT {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterError.tapPromise('LoggerPlugin', (e) => {
                        let t,
                            r = a.state.queueState.currentEntity.value ? a.state.queueState.currentEntity.value.entity.mediaSourceData : null;
                        (t = e instanceof z.t ? e : new z.t('Error in Sonata player', { code: 'E_SONATA', cause: e })).name = '[Sonata] '.concat(t.name);
                        let i = t.cause ? (0, M.createObjectFromError)(t.cause) : void 0;
                        return this.logger.error(t, { ...t.data, ...(r || {}), code: t.code, cause: i, stack: t.stack, message: t.message }), Promise.resolve();
                    });
                }
                constructor(e) {
                    (0, L._)(this, 'logger', void 0);
                    let { logger: t } = e;
                    this.logger = t;
                }
            }
            (g || (g = {})).QUALITY_CHANGE = 'QUALITY_CHANGE';
            class ax {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.quality.onChange(() => {
                        t.state.playerState.status.value !== F.MT.IDLE &&
                            t.reloadEntity(g.QUALITY_CHANGE).catch((e) => {
                                a.afterError.promise(e);
                            });
                    });
                }
                constructor(e) {
                    (0, L._)(this, 'quality', void 0), (this.quality = e);
                }
            }
            var aR = a(51770);
            let aw = (e) => 'object' == typeof e && e && 'rememberPosition' in e && 'boolean' == typeof e.rememberPosition;
            class aD {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.beforeEntityChange.tapPromise('ContinuePlayingPlugin', () => {
                        let { position: e, duration: t } = this.getTimingsFromPlayback(a);
                        return new Promise((r) => {
                            e !== t && this.checkBeforeProgressSync(a), r();
                        });
                    }),
                        a.state.playerState.status.onChange((e) => {
                            (e === F.MT.PAUSED || e === F.MT.STOPPED) && (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                                e === F.MT.PLAYING && this.shouldSendProgressSync(a) && this.setTimeout(a);
                        }),
                        a.state.playerState.event.onChange(() => {
                            if (a.state.playerState.event.value === F.Iu.SET_PROGRESS) {
                                let e = a.state.queueState.currentEntity.value,
                                    t = a.state.playerState.progress.value.position;
                                if (!e) return;
                                let { entity: r } = e;
                                aw(r.data.meta) && r.data.meta.rememberPosition && (e.lastSeekPosition = t);
                            }
                        }),
                        a.state.queueState.currentEntity.onChange(() => {
                            let e = a.state.queueState.currentEntity.value;
                            if (!e) return;
                            let { entity: t } = e;
                            if (aw(t.data.meta) && t.data.meta.rememberPosition && W(t.data.meta)) {
                                let { endPositionSec: a } = t.data.meta.streamProgress;
                                t.everFinished ? (e.positionSec = a) : (e.positionSec = void 0 !== e.lastSeekPosition ? e.lastSeekPosition : a);
                            }
                        });
                }
                checkBeforeProgressSync(e) {
                    var t;
                    if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
                    let { position: a, duration: r } = this.getTimingsFromPlayback(e),
                        i = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta.id;
                    Number.isFinite(r) &&
                        Number.isFinite(a) &&
                        r &&
                        a &&
                        i &&
                        (this.sendProgressSync({ duration: r, position: a, trackId: i }), e.state.playerState.status.value === F.MT.PLAYING && this.setTimeout(e));
                }
                sendProgressSync(e) {
                    let t = new Date().toISOString(),
                        { duration: a, position: r, trackId: i } = e;
                    this.streamsResource.progressSync({
                        lastSyncTimestamp: t,
                        trackStreams: [{ trackId: i, positionSec: r, trackLengthSec: a, finished: r === a, timestamp: t }],
                    });
                }
                shouldSendProgressSync(e) {
                    var t;
                    if (!this.variables.isEnabled) return !1;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    return !!(a && 'rememberPosition' in a && a.rememberPosition);
                }
                setTimeout(e) {
                    this.clearTimeout(),
                        (this.timeoutId = window.setTimeout(() => {
                            this.checkBeforeProgressSync(e);
                        }, 3e4));
                }
                clearTimeout() {
                    window.clearTimeout(this.timeoutId);
                }
                getTimingsFromPlayback(e) {
                    return { duration: Math.floor(e.state.playerState.progress.value.duration), position: Math.floor(e.state.playerState.progress.value.position) };
                }
                constructor(e) {
                    (0, L._)(this, 'streamsResource', void 0), (0, L._)(this, 'variables', void 0), (0, L._)(this, 'timeoutId', 0);
                    let { httpClient: t, streamsResourceConfig: a, variables: r } = e;
                    (this.streamsResource = new aR.c(t, a)), (this.variables = r);
                }
            }
            function aN(e) {
                if (e instanceof Error) {
                    if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                    if ('cause' in e && void 0 !== e.cause) return aN(e.cause);
                }
                if ('object' == typeof e && null !== e) {
                    if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                    if ('cause' in e && void 0 !== e.cause) return aN(e.cause);
                }
            }
            let aO = [401, 429],
                aM = new Set([et.K.Generative]);
            class aL {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.afterErrorProcessed.tapPromise('ErrorAutoSkipPlugin', (e) => {
                        var r;
                        if (!this.variables.enabled || this.isSkipping) return Promise.resolve();
                        let i = null == (r = t.state.queueState.currentEntity.value) ? void 0 : r.context.data.type;
                        return (i && aM.has(i)) ||
                            !(function (e) {
                                if (!(e instanceof am)) return !1;
                                let t = aN(e);
                                return void 0 !== t && t >= 400 && t < 500 && !aO.includes(t);
                            })(e) ||
                            this.consecutiveSkipCount >= this.consecutiveSkipLimit
                            ? Promise.resolve()
                            : ((this.consecutiveSkipCount += 1),
                              (this.isSkipping = !0),
                              t
                                  .moveForward(F.So.ERROR_MOVE_FORWARD)
                                  .catch((e) => a.afterError.promise(e).catch(() => void 0))
                                  .finally(() => {
                                      this.isSkipping = !1;
                                  }));
                    }),
                        a.afterMediaStartPlaying.tap('ErrorAutoSkipPlugin', () => {
                            this.consecutiveSkipCount = 0;
                        }),
                        a.afterContextSet.tap('ErrorAutoSkipPlugin', () => {
                            this.consecutiveSkipCount = 0;
                        });
                }
                constructor({ variables: e, consecutiveSkipLimit: t }) {
                    (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'consecutiveSkipLimit', void 0),
                        (0, L._)(this, 'consecutiveSkipCount', 0),
                        (0, L._)(this, 'isSkipping', !1),
                        (this.variables = e),
                        (this.consecutiveSkipLimit = null != t ? t : 10);
                }
            }
            var aF = a(94299),
                aB = a(65808);
            let aq = { [aB.N.AACMP4]: 'mp4a.40.2', [aB.N.HEAACMP4]: 'mp4a.40.5', [aB.N.FLACMP4]: 'flac' };
            class aV {
                get src() {
                    var e, t;
                    if ('error' in this.data) throw new z.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (!this.data.urls[0]) throw new z.t('No urls in DownloadInfoSource');
                    let a = this.getQueryParamsString();
                    return a
                        ? ''
                              .concat(this.data.urls[0])
                              .concat(a, '#t=')
                              .concat(null != (e = this.positionSec) ? e : 0)
                        : ''.concat(this.data.urls[0], '#t=').concat(null != (t = this.positionSec) ? t : 0);
                }
                get mirrorUrls() {
                    if ('error' in this.data) throw new z.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = this.getQueryParamsString(),
                        t = this.data.urls.slice(1);
                    return e ? t.map((t) => ''.concat(t).concat(e)) : t;
                }
                get key() {
                    if ('error' in this.data) throw new z.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (this.data.transport === aF.o.ENCRAW) return this.data.key;
                }
                get canBePreloaded() {
                    if ('error' in this.data) throw new z.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    return [aB.N.FLACMP4, aB.N.AACMP4, aB.N.HEAACMP4].includes(this.data.codec);
                }
                getQueryParamsString() {
                    if ('error' in this.data) throw new z.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = aq[this.data.codec],
                        t = e ? 'mp4' : void 0,
                        a = void 0 === this.sourceIndex ? void 0 : String(this.sourceIndex),
                        r = new URLSearchParams();
                    t && r.append('container', t), e && r.append('codec', e), this.vsid && r.append('vsid', this.vsid), a && r.append('source_index', a);
                    let i = r.toString();
                    return i ? '?'.concat(i) : void 0;
                }
                constructor(e) {
                    (0, L._)(this, 'type', 'downloadInfoSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'sourceIndex', void 0),
                        (0, L._)(this, 'loadingTime', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (0, L._)(this, 'positionSec', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.loadingTime = e.loadingTime),
                        (this.getFileInfoResponseTime = e.getFileInfoResponseTime),
                        (this.url = e.url),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            !(function (e) {
                (e.TRACK = 'track'), (e.STREAM = 'stream');
            })(b || (b = {})),
                (function (e) {
                    (e.WANT_PLAY_TRACK = 'WANT_PLAY_TRACK'),
                        (e.TRACK_IS_BUFFERING = 'TRACK_IS_BUFFERING'),
                        (e.TRACK_IS_PLAYING = 'TRACK_IS_PLAYING'),
                        (e.TRACK_IS_PLAYING_MISSED = 'TRACK_IS_PLAYING_MISSED'),
                        (e.TRACK_ERROR_PREPARE = 'TRACK_ERROR_PREPARE'),
                        (e.TRACK_ERROR_INITIAL_BUFFERING = 'TRACK_ERROR_INITIAL_BUFFERING'),
                        (e.TRACK_ERROR_PLAYING = 'TRACK_ERROR_PLAYING'),
                        (e.REQUEST_TIME = 'REQUEST_TIME'),
                        (e.FIRST_WAVE_TRACK_VISIT = 'FIRST_WAVE_TRACK_VISIT'),
                        (e.TRACK_ERROR_PRE_FETCH = 'TRACK_ERROR_PRE_FETCH'),
                        (e.WANT_PLAY_STREAM = 'WANT_PLAY_STREAM'),
                        (e.STREAM_IS_PLAYING = 'STREAM_IS_PLAYING'),
                        (e.STREAM_IS_PLAYING_MISSED = 'STREAM_IS_PLAYING_MISSED'),
                        (e.STREAM_ERROR_PLAYING = 'STREAM_ERROR_PLAYING'),
                        (e.STREAM_ERROR_INITIAL_BUFFERING = 'STREAM_ERROR_INITIAL_BUFFERING'),
                        (e.STREAM_ERROR_PREPARE = 'STREAM_ERROR_PREPARE'),
                        (e.STREAM_IS_BUFFERING = 'STREAM_IS_BUFFERING');
                })(E || (E = {}));
            var aU = a(51607),
                aW = a(76232);
            function aK(e) {
                switch (e) {
                    case aU.e.LOSSLESS:
                    case aW.e.HIGH_QUALITY:
                        return S.LOSSLESS;
                    case aU.e.NQ:
                    case aW.e.BALANCED:
                        return S.NQ;
                    case aU.e.LQ:
                    case aW.e.EFFICIENT:
                        return S.LQ;
                    case aU.e.PREVIEW:
                    case aW.e.PREVIEW:
                        return S.PREVIEW;
                    case aU.e.SMART_PREVIEW:
                        return S.SMART_PREVIEW;
                    default:
                        return;
                }
            }
            function aj(e, t, a, r) {
                a &&
                    (e
                        ? (console.group(''.concat(null != t ? t : 'Untitled Log Metrics Event Info')),
                          console.table(e.data),
                          r && (console.group('Поля только для отладки. Эти значения не отправляются в событии метрики'), console.table(r), console.groupEnd()),
                          console.group('Raw event'),
                          console.dir(e),
                          console.groupEnd(),
                          console.groupEnd())
                        : console.error('Event in logEvent method not provided'));
            }
            function aY(e, t, a) {
                t.forEach((t) => {
                    Promise.resolve()
                        .then(() => {
                            let a = t.send(e);
                            return a instanceof Promise ? a : Promise.resolve();
                        })
                        .catch((e) => {
                            null == a || a(new z.t('Failed to send metrics', { code: 'E_METRICS_SEND', cause: (0, M.createObjectFromError)(e) }));
                        });
                });
            }
            !(function (e) {
                (e.LOSSLESS = 'Lossless'), (e.NQ = 'NQ'), (e.LQ = 'LQ'), (e.PREVIEW = 'Preview'), (e.SMART_PREVIEW = 'SmartPreview');
            })(S || (S = {}));
            class aG {
                buildWantPlayCtx() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.trunc(performance.now());
                    return { now: e, expectedQuality: this.mediaConfigController ? aK(this.mediaConfigController.quality.value) : void 0 };
                }
                buildPlayingCtx() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.trunc(performance.now());
                    return { now: e };
                }
                setOnSendError(e) {
                    this.onSendError = e;
                }
                handleWantPlay(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.trunc(performance.now()),
                        { event: a, payload: r } = this.builder.buildWantPlayEvent(e, this.buildWantPlayCtx(t));
                    return (
                        this.wantPlayEvents.size > 0 && this.handlePlayingMissed(),
                        this.reportedInitialBufferingPlayIds.clear(),
                        this.reportedPreFetchTrackIds.clear(),
                        this.wantPlayEvents.set(e.entity.playId, r),
                        this.logEvent(a),
                        this.send(a),
                        a
                    );
                }
                handlePlayingMissed() {
                    let e = Array.from(this.wantPlayEvents.entries())[0];
                    if (!e) return null;
                    let [t, a] = e,
                        r = this.builder.buildPlayingMissedEvent(t, a);
                    return this.wantPlayEvents.delete(t), this.send(r), this.logEvent(r), r;
                }
                handlePlaying(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.trunc(performance.now()),
                        r = this.wantPlayEvents.get(e.entity.playId),
                        i = r ? this.builder.buildPlayingEvent(e, r, t, this.buildPlayingCtx(a)) : null;
                    return i && (this.wantPlayEvents.delete(e.entity.playId), this.send(i)), this.logEvent(i), i;
                }
                handleBuffering(e) {
                    let t = this.builder.buildBufferingEvent(e);
                    return t ? (this.send(t), this.logEvent(t), t) : null;
                }
                handleError(e, t) {
                    let a = this.normalizeInitialBufferingError(e, t);
                    if (null === a || (a instanceof F.LI && a.code === F.QC.PRE_FETCH && !this.shouldReportPreFetchError(t))) return null;
                    let r = this.builder.buildErrorEvent(a, t);
                    return (
                        r && this.isInitialBufferingEvent(r) && this.reportedInitialBufferingPlayIds.add(t.entity.playId),
                        this.maybeCleanupWantPlayOnError(a, t),
                        r && this.send(r),
                        this.logEvent(r),
                        r
                    );
                }
                normalizeInitialBufferingError(e, t) {
                    if (!(e instanceof F.LI) || 0 !== t.entity.totalPlayedSeconds) return e;
                    let a = t.entity.playId;
                    if (
                        ((e.code === F.QC.MEDIA_ELEMENT_ERROR && this.wantPlayEvents.has(a)) || (e.code === F.QC.PLAY && !this.isAbortError(e.cause))) &&
                        this.reportedInitialBufferingPlayIds.has(a)
                    )
                        return null;
                    if (e.code === F.QC.MEDIA_ELEMENT_ERROR && this.wantPlayEvents.has(a)) {
                        var r;
                        return new F.LI('Core play error', { code: F.QC.PLAY, cause: null != (r = e.cause) ? r : e });
                    }
                    return e;
                }
                isInitialBufferingEvent(e) {
                    return e.name === E.TRACK_ERROR_INITIAL_BUFFERING || e.name === E.STREAM_ERROR_INITIAL_BUFFERING;
                }
                hasWantPlay(e) {
                    return this.wantPlayEvents.has(e);
                }
                clearPreFetchDedupe() {
                    this.reportedPreFetchTrackIds.clear();
                }
                shouldReportPreFetchError(e) {
                    let t = String(e.entity.data.meta.id);
                    return !this.reportedPreFetchTrackIds.has(t) && (this.reportedPreFetchTrackIds.add(t), !0);
                }
                maybeCleanupWantPlayOnError(e, t) {
                    e instanceof F.LI &&
                        this.wantPlayEvents.has(t.entity.playId) &&
                        e.code !== F.QC.MEDIA_ELEMENT_ERROR &&
                        e.code !== F.QC.PRE_FETCH &&
                        (this.isAbortError(e.cause) || this.wantPlayEvents.delete(t.entity.playId));
                }
                isAbortError(e) {
                    return 'object' == typeof e && null !== e && 'name' in e && 'AbortError' === e.name;
                }
                send(e) {
                    aY(e, this.transports, this.onSendError);
                }
                logEvent(e) {
                    aj(e, null == e ? void 0 : e.name, this.enableDebugMode);
                }
                constructor(e) {
                    (0, L._)(this, 'builder', void 0),
                        (0, L._)(this, 'transports', void 0),
                        (0, L._)(this, 'mediaConfigController', void 0),
                        (0, L._)(this, 'enableDebugMode', void 0),
                        (0, L._)(this, 'onSendError', void 0),
                        (0, L._)(this, 'wantPlayEvents', new Map()),
                        (0, L._)(this, 'reportedInitialBufferingPlayIds', new Set()),
                        (0, L._)(this, 'reportedPreFetchTrackIds', new Set()),
                        (this.builder = e.builder),
                        (this.transports = e.transports),
                        (this.mediaConfigController = e.mediaConfigController),
                        (this.enableDebugMode = e.enableDebugMode);
                }
            }
            function aH(e) {
                let t, a, r;
                return (
                    !e.mediaSourceData ||
                        'error' in e.mediaSourceData.data ||
                        'downloadInfoSource' !== e.mediaSourceData.type ||
                        ((t = e.mediaSourceData.data.codec), (a = e.mediaSourceData.data.bitrate)),
                    e.expectedQuality && (r = aK(e.expectedQuality)),
                    { codec: t, bitrate: a, expectedQuality: r }
                );
            }
            !(function (e) {
                (e.GET_FILE_INFO = 'GetFileInfo'), (e.SOURCE = 'Source');
            })(_ || (_ = {})),
                !(function (e) {
                    (e.E_GET_MEDIA_SRC = 'E_GET_MEDIA_SRC'), (e.E_CREATE_SIGN = 'E_CREATE_SIGN'), (e.E_UNSUITABLE_ENTITY_TYPE = 'E_UNSUITABLE_ENTITY_TYPE');
                })(A || (A = {})),
                (function (e) {
                    (e.NETWORK = 'NETWORK'), (e.OTHER = 'OTHER');
                })(P || (P = {})),
                (function (e) {
                    (e.RESPONSE_CODE = 'ResponseCode'), (e.OTHER = 'OTHER');
                })(k || (k = {}));
            let az = new Set(Object.values(A));
            function aQ(e) {
                return e instanceof ap || ('object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code && az.has(e.code));
            }
            !(function (e) {
                (e.TRACK = 'track'), (e.SET = 'set'), (e.TRAILER = 'trailer'), (e.NON_MUSIC = 'non_music');
            })(I || (I = {}));
            let aX = (e) => {
                let { entity: t } = e;
                return e.getFadeMode() === F.OQ.MIX ? I.SET : (0, tt.l)(t) ? I.TRAILER : tO(t) || aP(t) ? I.NON_MUSIC : I.TRACK;
            };
            class aZ {
                buildWantPlayEvent(e, t) {
                    let { entity: a } = e,
                        r = this.profile.getIdentity(a),
                        i = aX(e);
                    return {
                        event: { name: this.profile.eventNames.wantPlay, data: { ...r, uuid: a.playId, expectedQuality: t.expectedQuality, contentType: i } },
                        payload: { ...r, time: t.now, contentType: i },
                    };
                }
                buildPlayingEvent(e, t, a, r) {
                    var i, s, n;
                    let { entity: o } = e,
                        l = this.profile.getIdentity(o),
                        { codec: u, bitrate: d, expectedQuality: c } = aH(o),
                        h = aX(e);
                    return {
                        name: this.profile.eventNames.isPlaying,
                        data: {
                            ...l,
                            time: r.now - t.time,
                            uuid: o.playId,
                            codec: u,
                            bitrate: d,
                            expectedQuality: c,
                            extraTrackType: this.profile.getExtraTrackType(a),
                            ...(null != (n = null == (i = (s = this.profile).buildExtraPlayingData) ? void 0 : i.call(s, a)) ? n : {}),
                            contentType: h,
                        },
                    };
                }
                buildPlayingMissedEvent(e, t) {
                    let { time: a, ...r } = t;
                    return { name: this.profile.eventNames.isPlayingMissed, data: { ...r, uuid: e } };
                }
                buildBufferingEvent(e) {
                    let { entity: t } = e;
                    if (0 === t.totalPlayedSeconds) return null;
                    let a = this.profile.getIdentity(t),
                        { codec: r, bitrate: i } = aH(t),
                        s = aX(e);
                    return { name: this.profile.eventNames.isBuffering, data: { ...a, uuid: t.playId, codec: r, bitrate: i, contentType: s } };
                }
                buildErrorEvent(e, t) {
                    var a, r, i;
                    let { entity: s } = t,
                        n = this.profile.getIdentity(s),
                        o = aH(s),
                        l = aX(t),
                        u = (function (e) {
                            let t = (function e(t) {
                                    return aQ(t)
                                        ? t.code
                                        : (t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                            ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)
                                          ? e(t.cause)
                                          : void 0;
                                })(e),
                                a = aN(e),
                                r = t === A.E_GET_MEDIA_SRC || 'number' == typeof a,
                                i = r ? P.NETWORK : P.OTHER,
                                s = r && 'number' == typeof a ? k.RESPONSE_CODE : k.OTHER,
                                n = 'object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code ? e.code : 'E_UNKNOWN',
                                o = r && 'number' == typeof a ? String(a) : n;
                            return { type: i, subType: s, responseCode: a, code: o };
                        })(e);
                    if (e instanceof ap)
                        return {
                            name: this.profile.eventNames.errorPrepare,
                            data: {
                                ...n,
                                uuid: s.playId,
                                type: u.type,
                                subType: u.subType,
                                name: e.name,
                                code: u.code,
                                bitrate: o.bitrate,
                                codec: o.codec,
                                expectedQuality: o.expectedQuality,
                                contentType: l,
                                place: _.GET_FILE_INFO,
                            },
                        };
                    if (e instanceof F.LI && e.code === F.QC.PLAY)
                        return this.isAbortError(e.cause)
                            ? null
                            : {
                                  name: this.profile.eventNames.errorInitialBuffering,
                                  data: {
                                      ...n,
                                      uuid: s.playId,
                                      type: u.type,
                                      subType: u.subType,
                                      name: e.name,
                                      code: u.code,
                                      bitrate: o.bitrate,
                                      codec: o.codec,
                                      expectedQuality: o.expectedQuality,
                                      contentType: l,
                                      place: _.SOURCE,
                                      ...(e.cause instanceof DOMException
                                          ? { causeCode: e.cause.code, causeMessage: e.cause.message, causeName: e.cause.name }
                                          : { causeCode: -1, causeMessage: 'Unknown error message', causeName: 'Unknown error name' }),
                                  },
                              };
                    if (e instanceof F.LI && e.code === F.QC.MEDIA_ELEMENT_ERROR)
                        return 0 === s.totalPlayedSeconds
                            ? null
                            : {
                                  name: this.profile.eventNames.errorPlaying,
                                  data: {
                                      ...n,
                                      uuid: s.playId,
                                      type: u.type,
                                      subType: u.subType,
                                      name: e.name,
                                      code: u.code,
                                      bitrate: o.bitrate,
                                      codec: o.codec,
                                      expectedQuality: o.expectedQuality,
                                      contentType: l,
                                      place: _.SOURCE,
                                      ...(e.cause instanceof MediaError
                                          ? { causeCode: e.cause.code, causeMessage: e.cause.message }
                                          : { causeCode: -1, causeMessage: 'Unknown cause' }),
                                  },
                              };
                    return null !=
                        (i =
                            null == (a = (r = this.profile).buildExtraErrorEvent)
                                ? void 0
                                : a.call(r, { error: e, identity: n, quality: o, contentType: l, errorTypeInfo: u }))
                        ? i
                        : null;
                }
                isAbortError(e) {
                    return 'object' == typeof e && null !== e && 'name' in e && 'AbortError' === e.name;
                }
                constructor(e) {
                    (0, L._)(this, 'profile', void 0), (this.profile = e);
                }
            }
            !(function (e) {
                (e.SKIPPED = 'SKIPPED'), (e.NEXT = 'NEXT'), (e.FROM_QUEUE = 'FROM_QUEUE'), (e.OTHER = 'OTHER');
            })(C || (C = {}));
            let a$ = {
                eventNames: {
                    wantPlay: E.WANT_PLAY_STREAM,
                    isPlaying: E.STREAM_IS_PLAYING,
                    isPlayingMissed: E.STREAM_IS_PLAYING_MISSED,
                    isBuffering: E.STREAM_IS_BUFFERING,
                    errorPrepare: E.STREAM_ERROR_PREPARE,
                    errorInitialBuffering: E.STREAM_ERROR_INITIAL_BUFFERING,
                    errorPlaying: E.STREAM_ERROR_PLAYING,
                },
                getIdentity: (e) => ({ radioStreamSlug: String(e.data.meta.id) }),
                getExtraTrackType: () => C.OTHER,
            };
            class aJ {
                setHooks(e) {
                    this.runner.setOnSendError((t) => e.afterError.promise(t));
                }
                onWantPlay(e) {
                    return this.runner.handleWantPlay(e);
                }
                onError(e, t) {
                    return this.runner.handleError(e, t);
                }
                onBuffering(e) {
                    return this.runner.handleBuffering(e);
                }
                onCanPlay(e) {
                    return this.runner.handlePlaying(e);
                }
                onPlaying(e) {
                    return this.runner.handlePlaying(e);
                }
                onEntityChange() {}
                onBeforeMediaStartPlaying() {}
                constructor(e) {
                    var t;
                    (0, L._)(this, 'runner', void 0),
                        (this.runner = new aG({
                            builder: new aZ(a$),
                            transports: e.transports,
                            mediaConfigController: e.mediaConfigController,
                            enableDebugMode: null == (t = e.variables) ? void 0 : t.enableDebugMode,
                        }));
                }
            }
            (T || (T = {})).GET_FILE_INFO = 'get_file_info';
            let a0 = {
                eventNames: {
                    wantPlay: E.WANT_PLAY_TRACK,
                    isPlaying: E.TRACK_IS_PLAYING,
                    isPlayingMissed: E.TRACK_IS_PLAYING_MISSED,
                    isBuffering: E.TRACK_IS_BUFFERING,
                    errorPrepare: E.TRACK_ERROR_PREPARE,
                    errorInitialBuffering: E.TRACK_ERROR_INITIAL_BUFFERING,
                    errorPlaying: E.TRACK_ERROR_PLAYING,
                },
                getIdentity: (e) => ({ trackId: String(e.data.meta.id) }),
                getExtraTrackType: (e) => e.extraTrackType,
                buildExtraPlayingData: (e) => {
                    let t = {};
                    return (
                        'number' == typeof e.trackUrlReceivedTime && (t.trackUrlReceivedTime = e.trackUrlReceivedTime),
                        'number' == typeof e.firstDataReceivedTime && (t.firstDataReceivedTime = e.firstDataReceivedTime),
                        'number' == typeof e.initialDataEnqueuedTime && (t.initialDataEnqueuedTime = e.initialDataEnqueuedTime),
                        t
                    );
                },
                buildExtraErrorEvent: (e) => {
                    let { error: t, identity: a, quality: r, contentType: i, errorTypeInfo: s } = e;
                    return t instanceof F.LI && t.code === F.QC.PRE_FETCH
                        ? {
                              name: E.TRACK_ERROR_PRE_FETCH,
                              data: {
                                  ...a,
                                  type: s.type,
                                  subType: s.subType,
                                  name: t.name,
                                  code: s.code,
                                  bitrate: r.bitrate,
                                  codec: r.codec,
                                  expectedQuality: r.expectedQuality,
                                  contentType: i,
                                  place: !(function e(t) {
                                      return (
                                          !!aQ(t) ||
                                          (((t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                              ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)) &&
                                              e(t.cause))
                                      );
                                  })(t.cause)
                                      ? _.SOURCE
                                      : _.GET_FILE_INFO,
                              },
                          }
                        : null;
                },
            };
            class a1 {
                setHooks(e) {
                    let t = (t) => {
                        e.afterError.promise(t);
                    };
                    (this.onSendError = t), this.runner.setOnSendError(t);
                }
                onCurrentEntityVisit(e, t) {
                    if (!eh(e.entity) || e.entity.data.sourceContextData || e.entity.data.wasPlayed || this.visitedWaveTrackEntities.has(e.entity)) return null;
                    let a = String(e.entity.data.meta.id),
                        r = {
                            name: E.FIRST_WAVE_TRACK_VISIT,
                            data: {
                                isDuplicated:
                                    t.filter((e) => {
                                        let { entity: t } = e;
                                        return String(t.data.meta.id) === a;
                                    }).length > 1,
                            },
                        };
                    return (
                        this.visitedWaveTrackEntities.add(e.entity),
                        aj(r, r.name, this.enableDebugMode, { trackId: a, playId: e.entity.playId }),
                        aY(r, this.transports, this.onSendError),
                        r
                    );
                }
                onBeforeMediaStartPlaying(e) {
                    var t, a;
                    if (!(e.mediaSourceData instanceof aV)) return null;
                    let r = String(e.data.meta.id),
                        i = null == (t = e.mediaSourceData) ? void 0 : t.getFileInfoResponseTime,
                        s = null == (a = e.mediaSourceData) ? void 0 : a.url,
                        n = null;
                    if ('number' == typeof i) {
                        let t = this.startupStageInfoByPlayId.get(e.playId);
                        this.startupStageInfoByPlayId.set(e.playId, { ...t, trackUrlReceivedTime: i });
                    }
                    return (
                        'number' == typeof i && s && (n = { name: E.REQUEST_TIME, data: { trackId: r, urlType: T.GET_FILE_INFO, url: s, time: i } }),
                        aj(n, null == n ? void 0 : n.name, this.enableDebugMode),
                        n && aY(n, this.transports, this.onSendError),
                        n
                    );
                }
                onWantPlay(e) {
                    let t = Math.trunc(performance.now()),
                        a = this.startupStageInfoByPlayId.get(e.entity.playId);
                    return (
                        this.startupStageInfoByPlayId.clear(),
                        this.startupStageInfoByPlayId.set(e.entity.playId, { ...a, wantPlayStartedAt: t }),
                        this.runner.handleWantPlay(e, t)
                    );
                }
                onError(e, t) {
                    let a = this.runner.hasWantPlay(t.entity.playId),
                        r = this.runner.handleError(e, t);
                    return a && !this.runner.hasWantPlay(t.entity.playId) && this.startupStageInfoByPlayId.delete(t.entity.playId), r;
                }
                onBuffering(e) {
                    return this.runner.handleBuffering(e);
                }
                onCanPlay(e) {
                    return this.handleTrackIsPlaying(e);
                }
                onPlaying(e) {
                    return this.handleTrackIsPlaying(e);
                }
                handleTrackIsPlaying(e) {
                    var t;
                    let a = Math.trunc(performance.now()),
                        r = (function (e) {
                            switch (e) {
                                case F.So.SET_INDEX:
                                case F.So.MOVE_BACKWARD:
                                    return C.FROM_QUEUE;
                                case F.So.AUTO_MOVE_FORWARD:
                                    return C.NEXT;
                                case F.So.ERROR_MOVE_FORWARD:
                                case F.So.MOVE_FORWARD:
                                    return C.SKIPPED;
                                default:
                                    return C.OTHER;
                            }
                        })(null == (t = this.addtionalInfoByPlayId.get(this.lastAdditionalInfoKey)) ? void 0 : t.entityChangeMethod),
                        i = this.runner.handlePlaying(e, this.buildTrackPlayingContext(e.entity.playId, r, a), a);
                    return (
                        i &&
                            (this.addtionalInfoByPlayId.delete(this.lastAdditionalInfoKey),
                            this.startupStageInfoByPlayId.delete(e.entity.playId),
                            (this.lastAdditionalInfoKey = null)),
                        i
                    );
                }
                onEntityChange(e, t) {
                    let { method: a } = t;
                    this.runner.clearPreFetchDedupe(),
                        this.addtionalInfoByPlayId.size && this.addtionalInfoByPlayId.clear(),
                        (this.lastAdditionalInfoKey = e.playId),
                        this.addtionalInfoByPlayId.set(e.playId, { entityChangeMethod: a });
                }
                onFirstDataReceived(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.trunc(performance.now()),
                        a = this.startupStageInfoByPlayId.get(e.playId);
                    (null != a && a.firstDataReceivedAt) || this.startupStageInfoByPlayId.set(e.playId, { ...a, firstDataReceivedAt: t });
                }
                buildTrackPlayingContext(e, t, a) {
                    let r = this.startupStageInfoByPlayId.get(e),
                        i = { extraTrackType: t, trackUrlReceivedTime: null == r ? void 0 : r.trackUrlReceivedTime };
                    if ('number' != typeof (null == r ? void 0 : r.wantPlayStartedAt) || 'number' != typeof r.firstDataReceivedAt) return i;
                    if ('number' == typeof r.trackUrlReceivedTime) {
                        let e = r.firstDataReceivedAt - r.wantPlayStartedAt - r.trackUrlReceivedTime;
                        e >= 0 && (i.firstDataReceivedTime = e);
                    }
                    let s = a - r.firstDataReceivedAt;
                    return s >= 0 && (i.initialDataEnqueuedTime = s), i;
                }
                constructor(e) {
                    var t, a;
                    (0, L._)(this, 'runner', void 0),
                        (0, L._)(this, 'addtionalInfoByPlayId', new Map()),
                        (0, L._)(this, 'startupStageInfoByPlayId', new Map()),
                        (0, L._)(this, 'lastAdditionalInfoKey', null),
                        (0, L._)(this, 'visitedWaveTrackEntities', new WeakSet()),
                        (0, L._)(this, 'enableDebugMode', void 0),
                        (0, L._)(this, 'transports', void 0),
                        (0, L._)(this, 'onSendError', void 0),
                        (this.runner = new aG({
                            builder: new aZ(a0),
                            transports: e.transports,
                            mediaConfigController: e.mediaConfigController,
                            enableDebugMode: null == (t = e.variables) ? void 0 : t.enableDebugMode,
                        })),
                        (this.enableDebugMode = null == (a = e.variables) ? void 0 : a.enableDebugMode),
                        (this.transports = e.transports);
                }
            }
            class a9 {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    this.metricsStore.setHooks(t),
                        this.subscribeOnBufferedInfoChanged(a),
                        a.state.playerState.event.onChange(() => {
                            let e = a.state.playerState.event.value,
                                t = a.state.queueState.currentEntity.value;
                            t &&
                                (e === F.Iu.CANPLAY && this.metricsStore.onCanPlay(t),
                                e === F.Iu.WAITING && this.recentMediaPlayerEventType !== F.Iu.SETTING_PROGRESS && this.metricsStore.onBuffering(t)),
                                (this.recentMediaPlayerEventType = e);
                        }),
                        a.state.queueState.currentEntity.onChange(() => {
                            let e = a.state.queueState.currentEntity.value;
                            if (e) {
                                var t, r;
                                null == (t = (r = this.metricsStore).onCurrentEntityVisit) || t.call(r, e, a.state.queueState.entityList.value);
                            }
                        }),
                        t.beforeEntityChange.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value;
                            return t && this.metricsStore.onEntityChange(t.entity, e), Promise.resolve();
                        }),
                        t.beforeEntityPlayingProcessStart.tapPromise('MetricsPlugin', () => {
                            this.subscribeOnBufferedInfoChanged(a);
                            let e = a.state.queueState.currentEntity.value;
                            return e && ((this.firstDataReceivedPlayId = null), this.metricsStore.onWantPlay(e)), Promise.resolve();
                        }),
                        t.afterError.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value,
                                r = a.state.queueState.nextEntity.value,
                                i = e instanceof F.LI && e.code === F.QC.PRE_FETCH && null != r ? r : t;
                            return i && this.metricsStore.onError(e, i), Promise.resolve();
                        }),
                        t.afterMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsStore.onPlaying(e), Promise.resolve();
                        }),
                        t.beforeMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsStore.onBeforeMediaStartPlaying(e.entity), Promise.resolve();
                        }),
                        t.beforeDestroy.tapPromise('MetricsPlugin', () => (this.unsubscribeFromBufferedInfoChanged(), Promise.resolve()));
                }
                subscribeOnBufferedInfoChanged(e) {
                    var t, a;
                    let r = null == (a = window.Ya) || null == (t = a.YaspAudioElement) ? void 0 : t.messenger;
                    r &&
                        ((this.bufferedInfoChangedMessenger === r && this.bufferedInfoChangedHandler) ||
                            (this.unsubscribeFromBufferedInfoChanged(),
                            (this.bufferedInfoChangedHandler = (t) => {
                                var a, r;
                                let { source: i, bufferedInfo: s } = t,
                                    n = e.state.queueState.currentEntity.value;
                                n &&
                                    0 !== s.audio.length &&
                                    this.firstDataReceivedPlayId !== n.entity.playId &&
                                    this.isCurrentSource(n.entity, i) &&
                                    ((this.firstDataReceivedPlayId = n.entity.playId),
                                    null == (a = (r = this.metricsStore).onFirstDataReceived) || a.call(r, n.entity, Math.trunc(performance.now())));
                            }),
                            r.on('BufferedInfoChanged', this.bufferedInfoChangedHandler),
                            (this.bufferedInfoChangedMessenger = r)));
                }
                unsubscribeFromBufferedInfoChanged() {
                    this.bufferedInfoChangedMessenger &&
                        this.bufferedInfoChangedHandler &&
                        (this.bufferedInfoChangedMessenger.off('BufferedInfoChanged', this.bufferedInfoChangedHandler),
                        (this.bufferedInfoChangedMessenger = void 0),
                        (this.bufferedInfoChangedHandler = void 0));
                }
                isCurrentSource(e, t) {
                    if (!(e.mediaSourceData instanceof aV)) return !1;
                    try {
                        let a = this.normalizeSource(e.mediaSourceData.src),
                            r = this.normalizeSource(t);
                        return null !== a && a === r;
                    } catch (e) {
                        return !1;
                    }
                }
                normalizeSource(e) {
                    try {
                        let t = new URL(e);
                        return ''.concat(t.origin).concat(t.pathname).concat(t.search);
                    } catch (e) {
                        return null;
                    }
                }
                constructor(e) {
                    var t, a;
                    (0, L._)(this, 'metricsStore', void 0),
                        (0, L._)(this, 'recentMediaPlayerEventType', null),
                        (0, L._)(this, 'bufferedInfoChangedMessenger', void 0),
                        (0, L._)(this, 'bufferedInfoChangedHandler', void 0),
                        (0, L._)(this, 'firstDataReceivedPlayId', null);
                    let r = null != (a = null == (t = e.variables) ? void 0 : t.profile) ? a : b.TRACK;
                    this.metricsStore = (function (e, t) {
                        switch (e) {
                            case b.STREAM:
                                return new aJ(t);
                            case b.TRACK:
                            default:
                                return new a1(t);
                        }
                    })(r, e);
                }
            }
            var a5 = a(62060);
            function a3(e, t, a) {
                return (
                    !(e instanceof H) &&
                    !!e.isAvailable &&
                    (null === e.mediaSourceData ||
                        (!('downloadInfoSource' !== e.mediaSourceData.type || 'error' in e.mediaSourceData.data || t9(e)) &&
                            (!!(performance.now() - e.mediaSourceData.loadingTime > t) ||
                                (function (e) {
                                    switch (e) {
                                        case aU.e.LOSSLESS:
                                        case aU.e.HQ:
                                            return aW.e.HIGH_QUALITY;
                                        case aU.e.NQ:
                                            return aW.e.BALANCED;
                                        case aU.e.LQ:
                                    }
                                    return aW.e.EFFICIENT;
                                })(e.mediaSourceData.data.quality) !== a.quality.value)))
                );
            }
            class a2 extends z.t {
                constructor(e = 'Preload aborted', { code: t = 'E_MEDIA_SOURCE_PRELOAD_ABORTED', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'PreloadAbortedException'), Object.setPrototypeOf(this, a2.prototype);
                }
            }
            function a4(e) {
                if (e.aborted)
                    throw (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Preload aborted';
                        return new a2(e);
                    })();
            }
            class a8 {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        r = (0, a5.A)(
                            () => {
                                this.releaseAllPreloadedSrc(a), this.preload(a, t);
                            },
                            1e3,
                            { trailing: !0 },
                        );
                    this.variables.isMediaSourcePreloadEnabled &&
                        (a.state.queueState.nextEntity.onChange(r),
                        this.mediaConfigController.quality.onChange(() => {
                            this.releaseAllPreloadedSrc(a), this.preload(a, t);
                        }),
                        t.beforeEntityChange.tapPromise(
                            'MediaSourcePreloadPlugin',
                            () => (this.abortActivePreloadRun(), this.releaseAllPreloadedSrc(a), Promise.resolve()),
                        ),
                        t.beforeEntityPlayingProcessStart.tapPromise(
                            'MediaSourcePreloadPlugin',
                            () => (this.abortActivePreloadRun(), this.releaseAllPreloadedSrc(a), Promise.resolve()),
                        ));
                }
                abortActivePreloadRun() {
                    var e;
                    null == (e = this.activePreloadAbortController) || e.abort(), (this.activePreloadAbortController = null);
                }
                startPreloadRun() {
                    this.abortActivePreloadRun();
                    let e = new AbortController();
                    return (this.activePreloadAbortController = e), e.signal;
                }
                isPreloadCancellation(e) {
                    return e instanceof a2 || ('object' == typeof e && null !== e && 'name' in e && 'AbortError' === e.name);
                }
                reportPrefetchError(e, t, a, r, i) {
                    t.aborted || this.isPreloadCancellation(r) || e.afterError.promise(new F.LI(i, { code: F.QC.PRE_FETCH, cause: r }));
                }
                preloadSources(e, t, a, r) {
                    return 0 === a.length
                        ? Promise.resolve()
                        : (a4(r),
                          Promise.allSettled(
                              a.slice(0, this.config.entitiesToPreloadSourceCount).map(
                                  (a) => (
                                      a4(r),
                                      e
                                          .preloadSrc({ entity: a.entity, bufferGoal: this.config.bufferGoal, positionSec: a.positionSec })
                                          .then(() => {
                                              a4(r), this.preloadedSrcArray.push(structuredClone(a.entity.mediaSourceData));
                                          })
                                          .catch((e) => {
                                              this.reportPrefetchError(t, r, a.entity, e, 'Preload source error');
                                          })
                                  ),
                              ),
                          ).then(() => Promise.resolve()));
                }
                preload(e, t) {
                    let a = this.startPreloadRun(),
                        r = this.getPreloadStrmContext(e);
                    if (!r) return void this.abortActivePreloadRun();
                    let { contextEntiyPairsToPreload: i, entitiesToPreloadStrmUrl: s } = r;
                    (s.length > 0 ? this.mediaProvider.getMediaSourceBatch({ entities: s }) : Promise.resolve())
                        .then(() => (a4(a), this.preloadSources(e, t, i, a)))
                        .catch((e) => {
                            if (!(a.aborted || this.isPreloadCancellation(e))) for (let r of s) this.reportPrefetchError(t, a, r, e, 'Preload strm urls error');
                        });
                }
                getPreloadStrmContext(e) {
                    let {
                        queueState: { order: t, entityList: a, nextIndex: r },
                    } = e.state;
                    if (null === r.value) return null;
                    let i = (function (e) {
                            let { preloadCount: t, contextEntityPairs: a, index: r, order: i } = e,
                                s = 0,
                                n = r,
                                o = [];
                            for (; s < t && !(n >= i.length); ) {
                                let e = i[n];
                                void 0 !== e && o.push(e), (n += 1), (s += 1);
                            }
                            return o.map((e) => a[e]);
                        })({ contextEntityPairs: a.value, index: r.value, order: t.value, preloadCount: this.config.entitiesToPreloadStrmUrlsCount }),
                        s = (function (e) {
                            let { contextEntityPairs: t, mediaSourceTtlMs: a, mediaConfigController: r } = e;
                            return t.filter((e) => a3(e.entity, a, r));
                        })({ contextEntityPairs: i, mediaSourceTtlMs: this.config.strmUrlsTtlMs, mediaConfigController: this.mediaConfigController }).map(
                            (e) => e.entity,
                        );
                    return { contextEntiyPairsToPreload: i, entitiesToPreloadStrmUrl: s };
                }
                releaseRedundantPreloadedSrc(e, t) {
                    if (!(this.preloadedSrcArray.length + t <= this.config.preloadedSourcesMaxCount))
                        for (; this.preloadedSrcArray.length + t !== this.config.preloadedSourcesMaxCount; ) {
                            let t = this.preloadedSrcArray.shift();
                            t && e.releaseSrc(t);
                        }
                }
                releaseAllPreloadedSrc(e) {
                    for (; this.preloadedSrcArray.length; ) {
                        let t = this.preloadedSrcArray.shift();
                        t && e.releaseSrc(t);
                    }
                }
                constructor({ mediaProvider: e, config: t, mediaConfigController: a, variables: r }) {
                    var i;
                    (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'mediaProvider', void 0),
                        (0, L._)(this, 'config', void 0),
                        (0, L._)(this, 'mediaConfigController', void 0),
                        (0, L._)(this, 'preloadedSrcArray', []),
                        (0, L._)(this, 'activePreloadAbortController', null),
                        (this.variables = { isMediaSourcePreloadEnabled: null != (i = null == r ? void 0 : r.isMediaSourcePreloadEnabled) && i }),
                        (this.mediaProvider = e),
                        (this.mediaConfigController = a),
                        (this.config = t);
                }
            }
            class a6 {
                apply() {
                    this.trailerPlayback.hooks.afterContextEnd.tapPromise(
                        'TrailerPlugin',
                        () => (this.trailerPlayback.restartContext({ playAfterRestart: !1 }), Promise.resolve()),
                    ),
                        this.trailerPlayback.hooks.afterMediaPause.tapPromise('TrailerPlugin', () => (this.onTrailerPaused(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaResume.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve()));
                }
                constructor({ onTrailerPaused: e, onTrailerPlaying: t, playbackController: a, trailerPlaybackParams: r }) {
                    if (
                        ((0, L._)(this, 'onTrailerPaused', void 0),
                        (0, L._)(this, 'onTrailerPlaying', void 0),
                        (0, L._)(this, 'trailerPlayback', void 0),
                        (this.onTrailerPaused = e),
                        (this.onTrailerPlaying = t),
                        a.createPlayback(r.id, {
                            factory: r.factory,
                            entityProvider: r.entityProvider,
                            playbackConfig: r.playbackConfig,
                            mediaPlayerParams: r.mediaPlayerParams,
                            syncVolumeWithMainPlayback: !0,
                        }),
                        (this.trailerPlayback = a.getPlayback(r.id)),
                        r.plugins)
                    )
                        for (let e of r.plugins) e.apply({ playback: this.trailerPlayback, hooks: this.trailerPlayback.hooks });
                }
            }
            var a7 = a(27576);
            (x || (x = {})).START = 'start';
            class re {
                apply(e) {
                    let { playback: t } = e;
                    this.channel &&
                        ((this.channel.onmessage = (e) => {
                            let { type: a, id: r } = e.data;
                            t.state.playerState.status.value === F.MT.PLAYING && a === x.START && r !== this.activeStreamId && t.pause();
                        }),
                        t.state.playerState.status.onChange((e) => {
                            if (e === F.MT.PLAYING) {
                                var t;
                                null == (t = this.channel) || t.postMessage({ type: x.START, id: this.activeStreamId });
                            }
                        }));
                }
                constructor() {
                    (0, L._)(this, 'channel', void 0),
                        (0, L._)(this, 'activeStreamId', void 0),
                        (this.activeStreamId = (0, a7.A)()),
                        (this.channel = new BroadcastChannel('ya_music_playback'));
                }
            }
            class rt {
                push(e) {
                    this.callbacks.push(e);
                }
                exec() {
                    let e = [];
                    for (let t of this.callbacks)
                        if (0 === e.length) e.push(t());
                        else {
                            let a = e[e.length - 1].then(t);
                            e.push(a);
                        }
                    return Promise.allSettled(e).then(() => Promise.resolve());
                }
                constructor() {
                    (0, L._)(this, 'callbacks', []);
                }
            }
            let ra = {
                ynisonToPlayback: (e) => {
                    switch (e) {
                        case D.Ye.ONE:
                            return F.pM.ONE;
                        case D.Ye.ALL:
                            return F.pM.CONTEXT;
                        default:
                            return F.pM.NONE;
                    }
                },
            };
            class rr extends z.t {
                constructor(e, { code: t = 'E_YNISON', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'YnisonException'), Object.setPrototypeOf(this, rr.prototype);
                }
            }
            let ri = (e, t) => new rr('[YnisonException] '.concat(e), { cause: (0, M.createObjectFromError)(t) }),
                rs = (e, t) => {
                    var a;
                    let r = null == (a = e.player_state) ? void 0 : a.player_queue,
                        i = (null == r ? void 0 : r.current_playable_index) || 0,
                        s = ((null == r ? void 0 : r.playable_list) || [])[i],
                        n = null == r ? void 0 : r.entity_type;
                    return !s || t.includes(n) ? { index: 0 } : { entityId: s.playable_id, index: i };
                },
                rn = (e) => {
                    let { playableList: t, radioSessionId: a, getEntityData: r, restoredParams: { currentPlayableIndex: i } = {} } = e,
                        s = t
                            .filter((e) => {
                                let { playable_type: t, playable_id: a } = e;
                                return t === D.si.TRACK && a;
                            })
                            .map((e, t) => r({ playable: e, wasPlayed: 'number' == typeof i && i >= t, radioSessionId: a })),
                        n = 'number' == typeof i && s[i];
                    return n && (n.isRestored = !0), s;
                };
            function ro(e) {
                let { playable: t, wasPlayed: a } = e;
                return { type: F.z4.Unloaded, meta: { id: t.playable_id, albumId: t.album_id_optional }, wasPlayed: a };
            }
            function rl(e) {
                var t, a;
                let { playable: r, radioSessionId: i } = e;
                return {
                    type: q.R.VibeTrack,
                    meta: { id: r.playable_id, albumId: r.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: !0,
                    batchId: null != (a = null == (t = r.track_info) ? void 0 : t.batch_id_optional) ? a : void 0,
                    radioSessionId: i,
                };
            }
            let ru = (e) => !isNaN(Number(e)) && Number(e) > 0,
                rd = (e) => {
                    var t, a;
                    let r = null == (t = e.player_state) ? void 0 : t.player_queue,
                        i = (null == r ? void 0 : r.playable_list) || [];
                    return r.from_optional || (null == (a = i[0]) ? void 0 : a.from) || 'embedded-radio';
                },
                rc = (e) => {
                    var t, a, r, i;
                    let s = null == (t = e.player_state) ? void 0 : t.player_queue,
                        n = (null == s ? void 0 : s.playable_list) || [],
                        o = null == (i = n[null == (r = e.player_state) || null == (a = r.player_queue) ? void 0 : a.current_playable_index]) ? void 0 : i.playable_id;
                    return o && n.length ? { type: et.K.Various, from: rd(e), meta: { id: o } } : null;
                },
                rh = (e) => {
                    var t, a, r, i, s;
                    let n = null != (s = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.current_playable_index) ? s : 0;
                    return ((null == (i = e.player_state) || null == (r = i.player_queue) ? void 0 : r.playable_list) || []).slice(0, n + 1);
                };
            function rv(e, t, a) {
                return !(function (e, t, a) {
                    let r = e.length - 1;
                    return t !== r && a <= r;
                })(e, t, a)
                    ? e
                    : e.slice(0, -1);
            }
            let ry = (e) => (e.album_id_optional ? ''.concat(e.playable_id, ':').concat(e.album_id_optional) : e.playable_id),
                rp = function (e) {
                    var t, a, r, i, s, n, o, l;
                    let u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        d = null == (t = e.player_state) ? void 0 : t.player_queue,
                        c = d.version.timestamp_ms,
                        h = null == d ? void 0 : d.entity_id,
                        v =
                            null == (s = d.queue) || null == (i = s.wave_queue) || null == (r = i.entity_options) || null == (a = r.wave_entity_optional)
                                ? void 0
                                : a.session_id,
                        y = null != (l = null == (o = e.player_state.player_queue.queue) || null == (n = o.wave_queue) ? void 0 : n.live_playable_index) ? l : 0,
                        p = e.player_state.player_queue.current_playable_index,
                        m = d.playable_list,
                        f = [];
                    return ((f = u ? eN(rv(m, p, y).map(ry), p, y) : rh(e).map(ry).slice(-100)), 'string' == typeof h || v)
                        ? {
                              type: et.K.Vibe,
                              from: rd(e),
                              seeds: [],
                              includeTracksInResponse: !0,
                              cloneSessionId: v,
                              meta: { id: h },
                              queue: f,
                              interactive: !1,
                              timeOfLastInteractionWithVibe: c,
                          }
                        : rc(e);
                },
                rm = 'user:onyourwave',
                rf = (e, t, a) => {
                    var r;
                    let i = null == (r = e.player_state) ? void 0 : r.player_queue,
                        s = null == i ? void 0 : i.entity_type;
                    if (!s) return null;
                    if (t.includes(s)) return { type: et.K.Vibe, from: rd(e), seeds: [rm], includeTracksInResponse: !0, meta: { id: rm } };
                    switch (s) {
                        case D.lv.ALBUM:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id;
                                return ru(r) ? { type: et.K.Album, from: rd(e), meta: { id: r } } : rc(e);
                            })(e);
                        case D.lv.ARTIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id;
                                return ru(r) ? { type: et.K.Artist, from: rd(e), meta: { id: r } } : rc(e);
                            })(e);
                        case D.lv.PLAYLIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id,
                                    i = rd(e),
                                    [s, n] = String(r).split(':');
                                if (ru(s) && ru(n)) {
                                    let e = { uid: Number(s) };
                                    return { type: et.K.Playlist, from: i, meta: { id: r, kind: Number(n), owner: e } };
                                }
                                return rc(e);
                            })(e);
                        case D.lv.RADIO:
                            return rp(e, a.sendCorrectRotorQueueParam);
                        case D.lv.GENERATIVE:
                            return ((e) => {
                                var t, a;
                                let r = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    [i, s] = (null == r || null == (a = r.entity_id) ? void 0 : a.split(' ')) || [];
                                return i ? { type: et.K.Generative, from: rd(e), meta: { id: i, stream: s ? { id: i, url: s } : void 0 } } : null;
                            })(e);
                        case D.lv.VARIOUS:
                            return rc(e);
                        default:
                            return null;
                    }
                };
            function rg(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                switch (e.state.playerState.status.value) {
                    case F.MT.PLAYING:
                        return !1;
                    case F.MT.PAUSED:
                    case F.MT.STOPPED:
                    case F.MT.IDLE:
                        return !0;
                    default:
                        return t;
                }
            }
            let rb = (e, t) => ({ ...e, filterParams: t.queueState.filterParams.value }),
                rE = (e, t) => {
                    if (!e) return null;
                    let a = { ...e };
                    return a.type === et.K.Vibe && (a.allowExplicit = t.queueState.filterParams.value.allowExplicit), a;
                };
            function rS(e) {
                let { playableList: t, trackSourcesMap: a, from: r, livePlayableIndex: i, currentPlayableIndex: s, radioSessionId: n, getEntityData: o } = e,
                    l = t
                        .filter((e) => {
                            let { playable_type: t, playable_id: a } = e;
                            return t === D.si.TRACK && a;
                        })
                        .map((e, t) => o({ playable: e, trackSourcesMap: a, from: r, wasPlayed: t <= i, radioSessionId: n })),
                    u = l[s];
                return u && (u.isRestored = !0), l;
            }
            var r_ = a(83778);
            function rA(e, t) {
                var a, r;
                if (!e || e.wave_source) return;
                let i = e.phonoteka_source;
                if (!i) return;
                let s = null != (a = i.entity_context) ? a : r_.h.BASED_ON_ENTITY_BY_DEFAULT;
                return i.playlist_id
                    ? {
                          type: et.K.Playlist,
                          sourceContextType: s,
                          from: t,
                          meta: { id: i.playlist_id.id },
                          filter: null != (r = i.playlist_id.filter_optional) ? r : void 0,
                      }
                    : i.album_id
                      ? { type: et.K.Album, sourceContextType: s, from: t, meta: { id: Number(i.album_id.id) } }
                      : i.artist_id
                        ? { type: et.K.Artist, sourceContextType: s, from: t, meta: { id: Number(i.artist_id.id) } }
                        : { type: et.K.Various, sourceContextType: s, from: t, meta: { id: '' } };
            }
            function rP(e) {
                var t, a, r;
                let { playable: i, trackSourcesMap: s, from: n, wasPlayed: o, radioSessionId: l } = e,
                    u = null == (t = i.track_info) ? void 0 : t.track_source_key,
                    d = rA(void 0 !== u ? s.get(u) : void 0, n);
                return {
                    type: q.R.VibeTrack,
                    meta: { id: i.playable_id, albumId: i.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: o,
                    batchId: null != (r = null == (a = i.track_info) ? void 0 : a.batch_id_optional) ? r : void 0,
                    sourceContextData: d,
                    radioSessionId: l,
                };
            }
            function rk(e) {
                var t;
                let { playable: a, trackSourcesMap: r, from: i, wasPlayed: s } = e,
                    n = null == (t = a.track_info) ? void 0 : t.track_source_key,
                    o = rA(void 0 !== n ? r.get(n) : void 0, i);
                return { type: F.z4.Unloaded, meta: { id: a.playable_id, albumId: a.album_id_optional }, wasPlayed: s, sourceContextData: o };
            }
            window.onRemoteDeviceConnected = [];
            window.onRemoteDeviceDisconnected = [];
            class rI {
                onYnisonStateUpdated(e) {
                    const isRemoteControlEnabled = window.ENABLE_YNISON_REMOTE_CONTROL;
                    const allowedStatuses1 = [F.MT.ENDED, F.MT.IDLE, F.MT.PAUSED, F.MT.STOPPED, F.MT.MEDIA_ELEMENT_ERROR];
                    const allowedStatuses2 = [F.MT.ENDED, F.MT.IDLE, F.MT.STOPPED, F.MT.MEDIA_ELEMENT_ERROR];
                    const current_device_id = window.ynison?.connector?.config?.device?.device_id;
                    const currentStatus = this.playback.state.playerState.status.value;
                    const shouldApplyState = this.variables.shouldApplyState;
                    const isDeviceMatch = e.state.active_device_id_optional === current_device_id;
                    const selfStateDuped = e.state.player_state?.status?.version?.device_id === current_device_id;
                    if (
                        isRemoteControlEnabled
                            ? shouldApplyState && ((!selfStateDuped && isDeviceMatch) || allowedStatuses2.includes(currentStatus))
                            : allowedStatuses1.includes(currentStatus) && shouldApplyState
                    ) {
                        if (isRemoteControlEnabled && !selfStateDuped) {
                            const currentDevice = e.state.devices?.find((device) => device.info.device_id === e.state.player_state?.status?.version?.device_id);
                            window.onRemoteDeviceConnected.forEach((listener) => listener(currentDevice));
                            window.remoteDeviceConnected = true;
                        }
                    } else if (isRemoteControlEnabled && !isDeviceMatch) {
                        window.onRemoteDeviceDisconnected.forEach((listener) => listener());
                        window.remoteDeviceConnected = false;
                    }
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    var t, a, r, i, s, n;
                    let o = new rt();
                    if (
                        ((function (e) {
                            if (!e.player_state || !e.player_state.player_queue) return !1;
                            let t = e.player_state.player_queue;
                            return 'playable_list' in t || 'entity_id' in t;
                        })(e.diff)
                            ? o.push(() => this.changeContext(e.state))
                            : (n = e.diff).player_state &&
                              n.player_state.player_queue &&
                              (('number' == typeof n.player_state.player_queue.current_playable_index &&
                                  !n.player_state.player_queue.playable_list &&
                                  !n.player_state.player_queue.entity_id) ||
                                  0) &&
                              o.push(() => this.changeEntityInCurrentContext(e.state)),
                        null == (a = e.diff.player_state) || null == (t = a.player_queue) ? void 0 : t.shuffle_optional)
                    ) {
                        let t = e.diff.player_state.player_queue.shuffle_optional;
                        o.push(() => this.changeShuffle(t));
                    }
                    if (null == (i = e.diff.player_state) || null == (r = i.player_queue) ? void 0 : r.options) {
                        let t = e.diff.player_state.player_queue.options;
                        if (e.state.player_state.player_queue.entity_type === D.lv.RADIO) {
                            let e = t.repeat_mode === D.Ye.ALL,
                                a = t.repeat_mode === D.Ye.ONE && !0 !== this.variables.useWaveQueue;
                            (e || a) && (t = { ...t, repeat_mode: D.Ye.NONE });
                        }
                        o.push(() => this.changeOptions(t));
                    }
                    if (null == (s = e.diff.player_state) ? void 0 : s.status) {
                        let t = e.diff.player_state.status;
                        o.push(() => this.changeStatus(t));
                    }
                    return o.exec();
                }
                changeOptions(e) {
                    let t = ra.ynisonToPlayback(e.repeat_mode);
                    return this.playback.setRepeatMode(t), Promise.resolve();
                }
                changeShuffle(e) {
                    let t = !!(Array.isArray(e.playable_indices) && e.playable_indices.length);
                    return this.playback.setShuffle(t), Promise.resolve();
                }
                changeStatus(e) {
                    let t = new rt(),
                        a = Number(e.playback_speed),
                        r = Number(e.progress_ms) / 1e3;
                    return (
                        Number.isNaN(a) || t.push(() => this.playback.setSpeed(a).then(() => Promise.resolve())),
                        Number.isNaN(r) ||
                            t.push(() => {
                                let e = this.playback.state.playerState.status.value,
                                    t = e === F.MT.PLAYING,
                                    a = Math.abs(this.playback.state.playerState.progress.value.position - r);
                                if ((t && a > D.O5) || e === F.MT.IDLE) return this.playback.setProgress(r).then(() => Promise.resolve());
                                let {
                                    currentEntity: { value: i },
                                } = this.playback.state.queueState;
                                return i && (i.positionSec = r), Promise.resolve();
                            }),
                        void 0 !== e.paused && e.paused !== rg(this.playback, e.paused) && t.push(() => this.playback.togglePause()),
                        t.exec()
                    );
                }
                changeContext(e) {
                    var t, a, r;
                    let i =
                            this.variables.useWaveQueue &&
                            (null == (r = e.player_state) || null == (a = r.player_queue) || null == (t = a.queue) ? void 0 : t.wave_queue) !== void 0,
                        s = i ? this.getContextParamsWithWaveQueue(e) : this.getContextParams(e);
                    return s
                        ? this.playback
                              .setContext(s)
                              .then(() => {
                                  if (i) {
                                      var t, a, r, s, n;
                                      let i =
                                          null !=
                                          (n =
                                              null == (s = e.player_state) || null == (r = s.player_queue) || null == (a = r.queue) || null == (t = a.wave_queue)
                                                  ? void 0
                                                  : t.live_playable_index)
                                              ? n
                                              : 0;
                                      this.playback.state.queueState.livePlayableIndex.value = i;
                                  }
                                  return this.playback.stop();
                              })
                              .then(() => {
                                  void 0 !== e.player_state.status.paused &&
                                      e.player_state.status.paused !== rg(this.playback, e.player_state.status.paused) &&
                                      this.playback.togglePause();
                              })
                              .catch((e) => {
                                  e instanceof F.WT || this.playback.hooks.afterError.promise(ri('PlaybackSetContextError', e));
                              })
                        : Promise.resolve();
                }
                changeEntityInCurrentContext(e) {
                    let t = e.player_state.player_queue.current_playable_index,
                        a = !1 !== e.player_state.status.paused;
                    return this.playback.setEntityByIndex(t, a);
                }
                getInitialProgress(e) {
                    return { duration: Number(e.player_state.status.duration_ms) / 1e3, position: Number(e.player_state.status.progress_ms) / 1e3, loaded: 0 };
                }
                getContextParamsWithWaveQueue(e) {
                    try {
                        var t, a, r, i, s, n, o, l, u, d, c;
                        let h = rE(rf(e, this.fallbackTypesQueueToVibe, this.variables), this.playback.state);
                        if (!h) return null;
                        let v = this.factory.createContext({ data: h }),
                            y = this.getInitialProgress(e),
                            p = null == (t = e.player_state) ? void 0 : t.player_queue,
                            m = null == p || null == (a = p.queue) ? void 0 : a.wave_queue,
                            f = null == m || null == (r = m.entity_options) ? void 0 : r.track_sources,
                            g = null != (i = null == m ? void 0 : m.live_playable_index) ? i : 0,
                            b = null != (s = null == p ? void 0 : p.from_optional) ? s : '',
                            E = null != (n = null == p ? void 0 : p.current_playable_index) ? n : 0,
                            S = rb(rs(e, this.fallbackTypesQueueToVibe), this.playback.state),
                            _ = null != (o = null == p ? void 0 : p.playable_list) ? o : [];
                        if ((0, tx.S)(v)) return { context: v, loadContextMeta: !0, progress: y };
                        let A = (function (e) {
                            let t = new Map();
                            if (!e) return t;
                            for (let a of e) t.set(a.key, a);
                            return t;
                        })(f);
                        if ((0, e$.i)(v)) {
                            let e = rv(_, E, g),
                                t =
                                    null == (c = p.queue) || null == (d = c.wave_queue) || null == (u = d.entity_options) || null == (l = u.wave_entity_optional)
                                        ? void 0
                                        : l.session_id,
                                a = rS({
                                    playableList: e,
                                    trackSourcesMap: A,
                                    from: b,
                                    livePlayableIndex: g,
                                    currentPlayableIndex: E,
                                    radioSessionId: t,
                                    getEntityData: rP,
                                });
                            return { context: v, entitiesData: a.length ? a : void 0, loadContextMeta: !0, queueParams: S, progress: y };
                        }
                        let P = rS({ playableList: _, trackSourcesMap: A, from: b, livePlayableIndex: g, currentPlayableIndex: E, getEntityData: rk });
                        if ((0, ae.p)(v)) return { context: v, entitiesData: P, loadContextMeta: !1, queueParams: S, progress: y };
                        return { context: v, entitiesData: P, loadContextMeta: !0, queueParams: S, progress: y };
                    } catch (e) {
                        return this.playback.hooks.afterError.promise(ri('GetContextParamsWithWaveQueueError', e)), null;
                    }
                }
                getContextParams(e) {
                    try {
                        var t, a, r, i, s, n, o;
                        let l = rE(rf(e, this.fallbackTypesQueueToVibe, this.variables), this.playback.state);
                        if (!l) return null;
                        let u = this.factory.createContext({ data: l }),
                            d = this.getInitialProgress(e),
                            c = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.playable_list,
                            h = rb(rs(e, this.fallbackTypesQueueToVibe), this.playback.state);
                        if ((0, e$.i)(u)) {
                            let t = null == (r = e.player_state) ? void 0 : r.player_queue,
                                a =
                                    null == (o = t.queue) || null == (n = o.wave_queue) || null == (s = n.entity_options) || null == (i = s.wave_entity_optional)
                                        ? void 0
                                        : i.session_id,
                                l = rn({ playableList: rh(e), getEntityData: rl, radioSessionId: a, restoredParams: { currentPlayableIndex: t.current_playable_index } });
                            return { context: u, entitiesData: l.length ? l : void 0, loadContextMeta: !0, queueParams: h, progress: d };
                        }
                        let v = rn({ playableList: c, getEntityData: ro, restoredParams: { currentPlayableIndex: e.player_state.player_queue.current_playable_index } });
                        if ((0, ae.p)(u)) return { context: u, entitiesData: v, loadContextMeta: !1, queueParams: h, progress: d };
                        if ((0, tx.S)(u)) return { context: u, loadContextMeta: !0, progress: d };
                        return { context: u, entitiesData: v, loadContextMeta: !0, queueParams: h, progress: d };
                    } catch (e) {
                        return this.playback.hooks.afterError.promise(ri('GetContextParamsError', e)), null;
                    }
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ factory: e, playback: t, ynisonStateController: a, variables: r, fallbackTypesQueueToVibe: i }) {
                    (0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'unlisteners', void 0),
                        (0, L._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.playback = t),
                        (this.variables = r),
                        (this.unlisteners = []),
                        (this.fallbackTypesQueueToVibe = null != i ? i : []);
                    let s = a.on(D.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonPlugin');
                    this.unlisteners.push(s);
                    let n = a.fullState;
                    this.onYnisonStateUpdated({ prevState: n.prevState, state: n.state, diff: n.state });
                }
            }
            let rC = (e) => e.hidden,
                rT = (e) => {
                    var t, a, r, i, s, n, o;
                    switch (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.type) {
                        case q.R.Music:
                        case q.R.VibeTrack:
                            return (null == (a = e.state.currentContext.value) ? void 0 : a.data.meta.id)
                                ? String(null == (r = e.state.currentContext.value) ? void 0 : r.data.meta.id)
                                : '';
                        case q.R.Generative:
                            return (null == (i = e.state.currentContext.value) ? void 0 : i.data.meta.id)
                                ? String(null == (s = e.state.currentContext.value) ? void 0 : s.data.meta.id)
                                : '';
                        default:
                            return (null == (n = e.state.currentContext.value) ? void 0 : n.data.meta.id)
                                ? String(null == (o = e.state.currentContext.value) ? void 0 : o.data.meta.id)
                                : '';
                    }
                },
                rx = (e) => {
                    switch (e) {
                        case et.K.Album:
                            return D.lv.ALBUM;
                        case et.K.Playlist:
                            return D.lv.PLAYLIST;
                        case et.K.Artist:
                            return D.lv.ARTIST;
                        case et.K.Vibe:
                            return D.lv.RADIO;
                        case et.K.Various:
                            return D.lv.VARIOUS;
                        case et.K.Generative:
                            return D.lv.GENERATIVE;
                        default:
                            return D.lv.VARIOUS;
                    }
                },
                rR = (e) => {
                    var t, a, r;
                    return ((e) => 'object' == typeof e && e && 'durationMs' in e && 'number' == typeof e.durationMs)(
                        null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta,
                    ) && null != (r = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta.durationMs)
                        ? r
                        : 0;
                },
                rw = (e, t, a) => ''.concat(e, ':').concat(t, ':').concat(a);
            var rD = a(53512);
            function rN(e) {
                var t, a, r, i, s, n, o;
                if (!e) return;
                let l = { entityContext: null != (t = e.data.sourceContextType) ? t : r_.h.BASED_ON_ENTITY_BY_DEFAULT };
                if ((0, t6.K)(e)) {
                    let { uid: t, kind: n, id: o } = null != (a = e.data.meta) ? a : {},
                        u = void 0 !== o ? String(o) : void 0,
                        [d, c] = null != (r = null == u ? void 0 : u.split(':')) ? r : [];
                    return (
                        d && c
                            ? ((l.playlistId = u), (l.filterOptional = null != (i = e.data.filter) ? i : null))
                            : void 0 !== t && void 0 !== n && ((l.playlistId = ''.concat(t, ':').concat(n)), (l.filterOptional = null != (s = e.data.filter) ? s : null)),
                        l
                    );
                }
                if ((0, e1.F)(e)) {
                    let { id: t } = null != (n = e.data.meta) ? n : {};
                    return void 0 !== t && (l.albumId = String(t)), l;
                }
                if ((0, rD.T)(e)) {
                    let { id: t } = null != (o = e.data.meta) ? o : {};
                    void 0 !== t && (l.artistId = String(t));
                }
                return l;
            }
            function rO(e, t, a) {
                return t && 0 !== t.length
                    ? a
                        ? (function (e, t) {
                              let a = rN(e);
                              if (!a) {
                                  var r;
                                  return null != (r = t.waveSourceKey) ? r : 0;
                              }
                              let { entityContext: i, playlistId: s, albumId: n, artistId: o } = a;
                              if (s) {
                                  let e = rw(i, 'playlist', s),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (n) {
                                  let e = rw(i, 'album', n),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (o) {
                                  let e = rw(i, 'artist', o),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              let l = t.contextOnlyMap.get(i);
                              return null != l ? l : 0;
                          })(e, a)
                        : (function (e, t) {
                              var a, r;
                              let i = rN(e);
                              if (!i) {
                                  let e = t.find((e) => void 0 !== e.wave_source);
                                  return null != (a = null == e ? void 0 : e.key) ? a : 0;
                              }
                              let { entityContext: s, playlistId: n, albumId: o, artistId: l } = i,
                                  u = t.find((e) => {
                                      var t, a, r;
                                      return (
                                          !!e.phonoteka_source &&
                                          e.phonoteka_source.entity_context === s &&
                                          ((!!n && (null == (t = e.phonoteka_source.playlist_id) ? void 0 : t.id) === n) ||
                                              (!!o && (null == (a = e.phonoteka_source.album_id) ? void 0 : a.id) === o) ||
                                              (!!l && (null == (r = e.phonoteka_source.artist_id) ? void 0 : r.id) === l))
                                      );
                                  });
                              if (u) return u.key;
                              let d = t.find(
                                  (e) =>
                                      !!e.phonoteka_source &&
                                      e.phonoteka_source.entity_context === s &&
                                      (!n || !e.phonoteka_source.playlist_id) &&
                                      (!o || !e.phonoteka_source.album_id) &&
                                      (!l || !e.phonoteka_source.artist_id),
                              );
                              return null != (r = null == d ? void 0 : d.key) ? r : 0;
                          })(e, t)
                    : 0;
            }
            function rM(e) {
                let { playableList: t, rangeStart: a, livePlayableIndex: r, isVibeQueue: i } = e;
                return i ? Math.max(0, Math.min(r - a, t.length)) : t.length;
            }
            let rL = [r_.h.BASED_ON_ENTITY_BY_DEFAULT, r_.h.ARTIST_MY_COLLECTION, r_.h.ARTIST_FAMILIAR_FROM_WAVE];
            function rF(e) {
                return { wave_source: { source_type: e } };
            }
            function rB(e) {
                return { phonoteka_source: e };
            }
            class rq {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.status.onChange((e) => {
                            switch (e) {
                                case F.MT.PLAYING:
                                case F.MT.PAUSED:
                                    this.updateYnisonState();
                            }
                        }),
                        t = this.playback.state.playerState.event.onChange((e) => {
                            switch (e) {
                                case F.Iu.SET_PROGRESS:
                                    this.ynisonStateController.currentState.player_state.status.progress_ms / 1e3 !==
                                        this.playback.state.playerState.progress.value.position && this.updateYnisonState();
                                    break;
                                case F.Iu.SET_SPEED:
                                    this.ynisonStateController.currentState.player_state.status.playback_speed !== this.playback.state.playerState.speed.value &&
                                        this.updateYnisonState();
                            }
                        }),
                        a = this.playback.state.playerState.speed.onChange(() => {
                            this.updateYnisonState();
                        }),
                        r = this.playback.state.queueState.repeat.onChange(() => {
                            this.updateYnisonState();
                        }),
                        i = this.playback.state.queueState.shuffle.onChange(() => {
                            this.updateYnisonState();
                        }),
                        s = this.playback.state.queueState.entityList.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        }),
                        n = this.playback.state.queueState.order.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        });
                    this.unsubscribeFromPlayerEvents = () => {
                        e(), t(), r(), i(), a(), s(), n();
                    };
                }
                updateYnisonState(e) {
                    setTimeout(() => {
                        if (!this.playback.state.queueState.currentEntity.value) return;
                        let t = (function (e) {
                            var t, a, r, i, s, n, o, l;
                            let { playback: u, ynisonStateController: d, deviceId: c, variables: h } = e,
                                {
                                    devices: v,
                                    active_device_id_optional: y,
                                    player_state: { player_queue_inject_optional: p, status: m },
                                } = d.currentState,
                                f = h.useWaveQueue && !(0, tx.S)(u.state.currentContext.value),
                                { filteredEntityList: g, firstNotPlayedVibeEntity: b } = (function (e, t) {
                                    let a = e.state.queueState.index.value,
                                        r = e.state.queueState.entityList.value,
                                        i = null,
                                        s = null;
                                    return (
                                        t.enableSendLimitedEntityListToYnison && (r = r.filter((e) => !rC(e.entity))),
                                        (0, e$.i)(e.state.currentContext.value) &&
                                            t.enableSendLimitedEntityListToYnison &&
                                            ({ vibeHistory: r, firstNotPlayedVibeEntity: i, firstNotPlayedVibeEntityIndex: s } = eO(r, a)),
                                        { filteredEntityList: r, firstNotPlayedVibeEntity: i, firstNotPlayedVibeEntityIndex: s }
                                    );
                                })(u, h),
                                E = (function (e, t) {
                                    let a = e.state.currentContext.value,
                                        r = new Set(),
                                        i = [];
                                    for (let { sourceContext: e } of t) {
                                        let t = null != e ? e : a,
                                            { uniqueKey: s, payload: n } = (function (e, t) {
                                                if (!e) return { uniqueKey: 'wave_source', payload: rF(D.Fz.UNRECOGNIZED) };
                                                let { entityContext: a, playlistId: r, albumId: i, artistId: s } = e;
                                                if (r || i || s) {
                                                    let t = (function (e) {
                                                        var t;
                                                        let { entityContext: a, playlistId: r, albumId: i, artistId: s, filterOptional: n } = e;
                                                        return r
                                                            ? ((t = null != n ? n : null),
                                                              {
                                                                  uniqueKey: 'playlist_'
                                                                      .concat(a, '_')
                                                                      .concat(r, '_')
                                                                      .concat(null != t ? t : ''),
                                                                  payload: rB({ entity_context: a, playlist_id: { id: r, filter_optional: t } }),
                                                              })
                                                            : i
                                                              ? { uniqueKey: 'album_'.concat(a, '_').concat(i), payload: rB({ entity_context: a, album_id: { id: i } }) }
                                                              : s
                                                                ? {
                                                                      uniqueKey: 'artist_'.concat(a, '_').concat(s),
                                                                      payload: rB({ entity_context: a, artist_id: { id: s } }),
                                                                  }
                                                                : null;
                                                    })(e);
                                                    if (t) return t;
                                                }
                                                return rL.includes(a) && t
                                                    ? { uniqueKey: 'wave_source', payload: rF(D.Fz.ONLINE_BY_DEFAULT) }
                                                    : { uniqueKey: 'context_'.concat(a), payload: rB({ entity_context: a }) };
                                            })(rN(t), (0, e$.i)(t));
                                        r.has(s) || (r.add(s), i.push({ key: i.length, ...n }));
                                    }
                                    return i;
                                })(u, g),
                                S = (function (e) {
                                    let { entityList: t, from: a, trackSources: r, useWaveQueue: i } = e,
                                        s = (function (e) {
                                            if (!e || 0 === e.length) return null;
                                            let t = { waveSourceKey: null, exactMatchMap: new Map(), contextOnlyMap: new Map() };
                                            for (let a of e) {
                                                if (void 0 !== a.wave_source && null === t.waveSourceKey) {
                                                    t.waveSourceKey = a.key;
                                                    continue;
                                                }
                                                if (a.phonoteka_source) {
                                                    let { entity_context: e, playlist_id: r, album_id: i, artist_id: s } = a.phonoteka_source;
                                                    if (r) {
                                                        let i = rw(e, 'playlist', r.id);
                                                        t.exactMatchMap.has(i) || t.exactMatchMap.set(i, a.key);
                                                    } else if (i) {
                                                        let r = rw(e, 'album', i.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else if (s) {
                                                        let r = rw(e, 'artist', s.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else t.contextOnlyMap.has(e) || t.contextOnlyMap.set(e, a.key);
                                                }
                                            }
                                            return t;
                                        })(r);
                                    return t.map((e) =>
                                        ((e) => {
                                            var t, a, r, i, s, n, o, l, u, d, c, h, v;
                                            let { entityPair: y, from: p = '', trackSources: m, trackSourceIndex: f, useWaveQueue: g = !1 } = e,
                                                { entity: b, sourceContext: E } = y;
                                            switch (b.data.type) {
                                                case q.R.Music:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (a = b.data.meta.albums) || null == (t = a[0]) ? void 0 : t.id)
                                                                ? String(null == (r = b.data.meta.albums) ? void 0 : r[0].id)
                                                                : null,
                                                        from: p,
                                                        playable_id: String(b.data.meta.id),
                                                        playable_type: D.si.TRACK,
                                                        title: null != (i = b.data.meta.title) ? i : '',
                                                        cover_url_optional: null != (s = b.data.meta.coverUri) ? s : null,
                                                        ...(g && {
                                                            track_info: { batch_id_optional: null != (n = b.data.batchId) ? n : null, track_source_key: rO(E, m, f) },
                                                        }),
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case q.R.Generative:
                                                    return {
                                                        album_id_optional: null,
                                                        from: p,
                                                        playable_id: '',
                                                        playable_type: D.si.INFINITE,
                                                        title: null != (o = b.data.meta.title) ? o : '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case q.R.VibeTrack:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (u = b.data.meta.albums) || null == (l = u[0]) ? void 0 : l.id)
                                                                ? String(null == (d = b.data.meta.albums) ? void 0 : d[0].id)
                                                                : null,
                                                        from: p,
                                                        playable_id: String(b.data.meta.id),
                                                        playable_type: D.si.TRACK,
                                                        title: null != (c = b.data.meta.title) ? c : '',
                                                        cover_url_optional: null != (h = b.data.meta.coverUri) ? h : null,
                                                        track_info: { batch_id_optional: null != (v = b.data.batchId) ? v : null, track_source_key: rO(E, m, f) },
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                default:
                                                    return {
                                                        album_id_optional: null,
                                                        from: p,
                                                        playable_id: String(b.data.meta.id),
                                                        playable_type: D.si.TRACK,
                                                        title: '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                            }
                                        })({ entityPair: e, from: a, trackSources: r, trackSourceIndex: s, useWaveQueue: i }),
                                    );
                                })({ entityList: g, from: null == (t = u.state.currentContext.value) ? void 0 : t.from, trackSources: E, useWaveQueue: f }),
                                {
                                    playableIndices: _,
                                    currentPlayableIndex: A,
                                    playableList: P,
                                    livePlayableIndex: k,
                                } = (function (e) {
                                    let { playableList: t, currentPlayableIndex: a, playback: r, newIndexOrderMap: i, variables: s } = e,
                                        n = r.state.queueState.order.value,
                                        o = (0, e$.i)(r.state.currentContext.value),
                                        { livePlayableIndex: l } = r.state.queueState;
                                    if ((s.enableSendLimitedEntityListToYnison && (n = n.filter((e) => i.has(e)).map((e) => i.get(e))), t.length <= 200))
                                        return {
                                            playableList: t,
                                            currentPlayableIndex: a,
                                            playableIndices: n,
                                            livePlayableIndex: rM({ playableList: t, rangeStart: 0, livePlayableIndex: l.value, isVibeQueue: o }),
                                        };
                                    if (r.state.queueState.shuffle.value) {
                                        let e = n.indexOf(a),
                                            r = n.slice(e, 200),
                                            i = [...r].sort((e, t) => e - t).map((e) => t[e]),
                                            s = new Map(),
                                            o = r.map((e) => {
                                                var a;
                                                let r = t[e].playable_id,
                                                    n = null != (a = s.get(r)) ? a : -1,
                                                    o = i.findIndex((e, t) => t > n && e.playable_id === r);
                                                return s.set(r, o), o;
                                            }),
                                            l = i.findIndex((e) => e.playable_id === t[a].playable_id);
                                        return { playableList: i, currentPlayableIndex: l, playableIndices: o, livePlayableIndex: i.length };
                                    }
                                    let u = t[a].playable_id,
                                        d = Math.max(0, a - 100);
                                    d + 200 > t.length && (d = t.length - 200);
                                    let c = t.slice(d, d + 200),
                                        h = c.findIndex((e) => e.playable_id === u);
                                    return {
                                        playableList: c,
                                        currentPlayableIndex: h,
                                        livePlayableIndex: rM({ playableList: c, rangeStart: d, livePlayableIndex: l.value, isVibeQueue: o }),
                                        playableIndices: n,
                                    };
                                })({
                                    playableList: S,
                                    currentPlayableIndex: (function (e, t) {
                                        let {
                                                order: { value: a },
                                                index: { value: r },
                                                entityList: { value: i },
                                            } = e.state.queueState,
                                            s = a[r];
                                        if ('number' != typeof s) return -1;
                                        let n = i[s];
                                        return t.findIndex((e) => {
                                            let { entity: t } = e;
                                            return t.data.meta.id === (null == n ? void 0 : n.entity.data.meta.id);
                                        });
                                    })(u, g),
                                    newIndexOrderMap: (function (e, t) {
                                        let a = new Map(),
                                            r = 0;
                                        for (let i = 0; i < e.length; i++) {
                                            let s = e[i];
                                            s && !t(s.entity) && (a.set(i, r), r++);
                                        }
                                        return a;
                                    })(u.state.queueState.entityList.value, rC),
                                    playback: u,
                                    variables: h,
                                }),
                                I = (function (e) {
                                    let { playback: t, playableList: a, firstNotPlayedVibeEntity: r } = e;
                                    if (!(0, e$.i)(t.state.currentContext.value) || !r) return [];
                                    let i = a.findLast((e) => String(r.entity.data.meta.id) === e.playable_id);
                                    return i ? [i] : [];
                                })({ playback: u, playableList: P, firstNotPlayedVibeEntity: b }),
                                C = rg(u, m.paused),
                                T = {
                                    duration_ms: rR(u),
                                    progress_ms: ((e) => {
                                        var t;
                                        let a = 1e3 * Math.floor(e.state.playerState.progress.value.position),
                                            r = rR(e);
                                        return (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context.data.type) === et.K.Generative
                                            ? 0
                                            : a < r
                                              ? a
                                              : 0;
                                    })(u),
                                    paused: C,
                                    playback_speed: u.state.playerState.speed.value,
                                    version: (0, D.fD)(c),
                                },
                                x = ((e) => {
                                    var t, a;
                                    let r = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context;
                                    return (0, e$.i)(r) && (null == (a = r.data.meta.session) ? void 0 : a.radioSessionId)
                                        ? { session_id: r.data.meta.session.radioSessionId }
                                        : null;
                                })(u);
                            return {
                                active_device_id_optional: y,
                                devices: v,
                                player_state: {
                                    player_queue_inject_optional: p,
                                    status: h.useYnisonStatus ? m : T,
                                    player_queue: {
                                        entity_id: rT(u),
                                        entity_type: rx(null == (a = u.state.currentContext.value) ? void 0 : a.data.type),
                                        current_playable_index: A,
                                        playable_list: P,
                                        shuffle_optional: u.state.queueState.shuffle.value ? { playable_indices: _ } : null,
                                        options: {
                                            repeat_mode: ((e) => {
                                                switch (e) {
                                                    case F.pM.NONE:
                                                        return D.Ye.NONE;
                                                    case F.pM.ONE:
                                                        return D.Ye.ONE;
                                                    case F.pM.CONTEXT:
                                                        return D.Ye.ALL;
                                                    default:
                                                        return D.Ye.NONE;
                                                }
                                            })(u.state.queueState.repeat.value),
                                        },
                                        entity_context: D.az.BASED_ON_ENTITY_BY_DEFAULT,
                                        from_optional: null != (i = null == (r = u.state.currentContext.value) ? void 0 : r.from) ? i : null,
                                        initial_entity_optional: (0, tx.S)(null == (s = u.state.queueState.currentEntity.value) ? void 0 : s.context)
                                            ? { entity_id: rT(u), entity_type: rx(null == (n = u.state.currentContext.value) ? void 0 : n.data.type) }
                                            : null,
                                        adding_options_optional:
                                            (0, e$.i)(null == (o = u.state.queueState.currentEntity.value) ? void 0 : o.context) &&
                                            (null == (l = u.state.queueState.currentEntity.value) ? void 0 : l.context.data.meta.session)
                                                ? { radio_options: { session_id: u.state.queueState.currentEntity.value.context.data.meta.session.radioSessionId } }
                                                : null,
                                        queue: f
                                            ? {
                                                  wave_queue: {
                                                      recommended_playable_list: I,
                                                      live_playable_index: k,
                                                      entity_options: { track_sources: E, wave_entity_optional: x },
                                                      navigation_id_optional: null,
                                                      playback_action_id_optional: null,
                                                  },
                                              }
                                            : null,
                                        version: (0, D.fD)(c),
                                    },
                                },
                            };
                        })({
                            playback: this.playback,
                            ynisonStateController: this.ynisonStateController,
                            deviceId: this.deviceConfig.info.device_id,
                            variables: { ...this.variables, ...e },
                        });
                        this.ynisonStateController.updateState({ newState: t, skipVersionCompare: !0, trigger: 'YnisonPlugin' });
                    }, 0);
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a, variables: r }) {
                    (0, L._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'deviceConfig', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        (this.variables = r),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState();
                }
            }
            class rV {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        r = new rI({
                            playback: t,
                            factory: this.factory,
                            ynisonStateController: this.ynisonStateController,
                            variables: this.variables,
                            fallbackTypesQueueToVibe: this.fallbackTypesQueueToVibe,
                        }),
                        i = new rq({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig, variables: this.variables });
                    a.beforeEntityChange.tapPromise('YnisonPlugin', () => {
                        let {
                            currentEntity: { value: e },
                        } = t.state.queueState;
                        return e && (e.positionSec = void 0), Promise.resolve();
                    }),
                        a.beforeDestroy.tapPromise('YnisonPlugin', () => (r.destroy(), i.destroy(), Promise.resolve()));
                }
                constructor({ factory: e, deviceConfig: t, ynisonStateController: a, variables: r, fallbackTypesQueueToVibe: i }) {
                    (0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'deviceConfig', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.deviceConfig = t),
                        (this.ynisonStateController = a),
                        (this.variables = r),
                        (this.fallbackTypesQueueToVibe = null != i ? i : []);
                }
            }
            class rU {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.volume.onChange(() => {
                        this.updateYnisonState();
                    });
                    this.unsubscribeFromPlayerEvents = () => {
                        e();
                    };
                }
                updateYnisonState() {
                    this.ynisonStateController.updateState({
                        trigger: 'YnisonValuePlugin',
                        newState: { ...this.ynisonStateController.currentState, devices: this.createDevices() },
                    });
                }
                createDevices() {
                    return this.ynisonStateController.currentState.devices.map((e) => {
                        var t;
                        return (
                            (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id &&
                                (e.volume_info = {
                                    volume: (0, D.F4)(this.playback.state.playerState.exponentVolume.value, this.deviceConfig.volumeGranularity),
                                    version: (0, D.fD)(this.deviceConfig.info.device_id),
                                }),
                            e
                        );
                    });
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a }) {
                    (0, L._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'deviceConfig', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState();
                }
            }
            class rW {
                onYnisonStateUpdated(e) {
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    if (e.diff.deviceVolume) {
                        let t = e.diff.deviceVolume.volume;
                        if (void 0 !== t) return this.changeVolume(t);
                    }
                    return Promise.resolve();
                }
                changeVolume(e) {
                    return this.playback.setExponentVolume(e), Promise.resolve();
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ playback: e, ynisonStateController: t, variables: a }) {
                    (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'unlisteners', void 0),
                        (this.playback = e),
                        (this.variables = a),
                        (this.unlisteners = []);
                    let r = t.on(D.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonVolumePlugin');
                    this.unlisteners.push(r), this.onYnisonStateUpdated(t.fullState);
                }
            }
            class rK {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        r = new rW({ playback: t, ynisonStateController: this.ynisonStateController, variables: this.variables }),
                        i = new rU({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig });
                    a.beforeDestroy.tapPromise('YnisonVolumePlugin', () => (r.destroy(), i.destroy(), Promise.resolve()));
                }
                constructor({ deviceConfig: e, ynisonStateController: t, variables: a }) {
                    (0, L._)(this, 'deviceConfig', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (this.deviceConfig = e),
                        (this.ynisonStateController = t),
                        (this.variables = a);
                }
            }
            let rj = [et.K.Album, et.K.Artist, et.K.Playlist, et.K.Various];
            class rY {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.afterContextEnd.tapPromise('AutoflowPlugin', () => {
                        var e, a, r;
                        if (!this.variables.enabled) return Promise.resolve();
                        let i = null == (e = t.state.currentContext.value) ? void 0 : e.data.type;
                        return (
                            (null == (a = t.state.currentContext.value) ? void 0 : a.data) &&
                                'enableVariousAutoFlow' in t.state.currentContext.value.data &&
                                (null == (r = t.state.currentContext.value) ? void 0 : r.data.enableVariousAutoFlow) &&
                                (i = et.K.Various),
                            i && rj.includes(i) && this.playAutoflow(t),
                            Promise.resolve()
                        );
                    });
                }
                playAutoflow(e) {
                    if (!(window.ENABLE_ENDLESS_MUSIC?.() ?? true)) return;
                    var t, a, r;
                    let i,
                        s = null == (t = e.state.currentContext.value) ? void 0 : t.data.type;
                    (null == (a = e.state.currentContext.value) ? void 0 : a.data) &&
                        'enableVariousAutoFlow' in e.state.currentContext.value.data &&
                        (null == (r = e.state.currentContext.value) ? void 0 : r.data.enableVariousAutoFlow) &&
                        (s = et.K.Various);
                    let n = ((e, t) => {
                            var a, r, i, s;
                            let n = null == (a = t.state.currentContext.value) ? void 0 : a.data;
                            if (n) {
                                if (e === et.K.Album) return ['album:'.concat(n.meta.id)];
                                if (e === et.K.Artist) return ['artist:'.concat(n.meta.id)];
                                if (e === et.K.Playlist && 'owner' in n.meta && (null == (r = n.meta.owner) ? void 0 : r.uid) && 'kind' in n.meta && n.meta.kind)
                                    return ['playlist:'.concat(null == (i = n.meta.owner) ? void 0 : i.uid, '_').concat(n.meta.kind)];
                                if (e === et.K.Various) {
                                    if ('overrideAutoflowSeeds' in n && n.overrideAutoflowSeeds) return n.overrideAutoflowSeeds;
                                    let e = null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity.data.meta.id;
                                    return ['track:'.concat(e)];
                                }
                            }
                        })(s, e),
                        o = e.state.currentContext.value;
                    this.variables.sendCorrectRotorQueueParam &&
                        (i = eN(
                            e.state.queueState.entityList.value.map((e) => ey(e.entity)),
                            e.state.queueState.index.value,
                            e.state.queueState.livePlayableIndex.value,
                        ));
                    let l = Object.create(null != o ? o : null);
                    if (!(s && n)) return;
                    let u = this.factory.createContext({
                        data: {
                            type: et.K.Vibe,
                            meta: { id: (0, eR.f)(n) },
                            seeds: n,
                            from: ((e, t, a) => {
                                var r;
                                let i = null == (r = t.state.currentContext.value) ? void 0 : r.data;
                                if (!i) return '';
                                let s = e,
                                    n = t.state.queueState.entityList.value.length || 0;
                                return (
                                    s === et.K.Various && 1 === n && (s = 'track'),
                                    e === et.K.Various && 'overrideContextType' in i && i.overrideContextType && (s = i.overrideContextType),
                                    ''.concat(a, '-radio-').concat(s, '-autoflow')
                                );
                            })(s, e, this.platform),
                            includeTracksInResponse: !0,
                            parentContext: l,
                            interactive: !1,
                            queue: i,
                        },
                    });
                    e.playContext({ context: u, loadContextMeta: !0 });
                }
                constructor({ platform: e, factory: t, variables: a }) {
                    (0, L._)(this, 'platform', void 0),
                        (0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (this.platform = e),
                        (this.factory = t),
                        (this.variables = a);
                }
            }
            class rG {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.telemetry.createTelemetry(t),
                        this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion },
                            !0,
                        ),
                        t.state.playerState.status.onChange(() => {
                            this.telemetry.setPlayingState(t.state.playerState);
                        }),
                        t.state.playerState.event.onChange((e) => {
                            e && e !== F.Iu.UPDATING_PROGRESS && this.telemetry.logEvent({ name: e });
                        }),
                        a.afterError.tapPromise(
                            'TelemetryPlugin',
                            (e) => (e instanceof F.LI && this.telemetry.logError({ error: { ...e, isFatal: !1 } }), Promise.resolve()),
                        ),
                        a.beforeMediaStartPlaying.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve();
                        }),
                        a.beforeMediaSourceContentReload.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve();
                        }),
                        a.beforeMediaSourceContentPreload.tapPromise('TelemetryPlugin', (e) => (this.beforeMediaHandler(e), Promise.resolve()));
                }
                beforeMediaHandler(e) {
                    if (!e || t9(e)) return;
                    let { mediaSourceData: t } = e;
                    t && 'vsid' in t && void 0 === t.vsid && (t.vsid = this.telemetry.vsid),
                        t && 'sourceIndex' in t && void 0 === t.sourceIndex && (t.sourceIndex = this.telemetry.onBeforeSetSource());
                    let a = (function (e) {
                            let { mediaSourceData: t } = e;
                            if (!t) return;
                            let { data: a } = t;
                            return { streamUrl: t.src, ...a };
                        })(e),
                        r = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                    a &&
                        (this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion, testIds: r, ...a },
                            !0,
                        ),
                        this.telemetry.onSetSource(a));
                }
                constructor({ telemetry: e, puid: t, yaspVersion: a, getTelemetryTestIds: r }) {
                    (0, L._)(this, 'telemetry', void 0),
                        (0, L._)(this, 'puid', void 0),
                        (0, L._)(this, 'yaspVersion', void 0),
                        (0, L._)(this, 'getTelemetryTestIds', void 0),
                        (this.telemetry = e),
                        (this.puid = t),
                        (this.yaspVersion = a),
                        (this.getTelemetryTestIds = r);
                }
            }
            class rH {
                setQuality(e) {
                    this.quality.value = e;
                }
                constructor(e) {
                    (0, L._)(this, 'quality', new er.cJ(aW.e.BALANCED)), (0, L._)(this, 'isCrossfadeEnabled', new er.cJ(!0)), this.setQuality(e);
                }
            }
            function rz(e) {
                return (null == e ? void 0 : e.data.type) === q.R.Radio;
            }
            class rQ {
                get src() {
                    let e = this.getQueryParamsString();
                    return e ? ''.concat(this.data.url).concat(e) : this.data.url;
                }
                getQueryParamsString() {
                    let e = new URLSearchParams();
                    this.vsid && e.append('vsid', this.vsid), void 0 !== this.sourceIndex && e.append('source_index', String(this.sourceIndex));
                    let t = e.toString();
                    return t ? '?'.concat(t) : void 0;
                }
                constructor(e) {
                    (0, L._)(this, 'type', 'generativeSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'sourceIndex', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            class rX extends ap {
                constructor(e, { code: t = 'E_GENERATIVE_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'GenerativeMediaProviderException'), Object.setPrototypeOf(this, rX.prototype);
                }
            }
            class rZ {
                getMediaSource(e) {
                    if (aP(e.entity)) {
                        var t;
                        if (null == (t = e.entity.data.meta.stream) ? void 0 : t.url) {
                            let t = new rQ({ data: e.entity.data.meta.stream });
                            return (e.entity.mediaSourceData = t), Promise.resolve(t);
                        }
                        return Promise.reject(new rX('Failed to create generative src link', { code: A.E_GET_MEDIA_SRC }));
                    }
                    return Promise.reject(new rX('Provided entity is not generative entity', { code: A.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            var r$ = a(79713),
                rJ = a(75807),
                r0 = a(17129);
            class r1 {
                getPreloadedFileInfo(e) {
                    let { entity: t, disableCache: a = !1 } = e;
                    if (!(a || a3(t, this.mediaSourceTtlMs, this.mediaConfigController)) && t.mediaSourceData && 'downloadInfoSource' === t.mediaSourceData.type)
                        return t.mediaSourceData.data;
                }
                getFileInfoFromResource(e) {
                    let { trackId: t, quality: a, codecs: r, transports: i } = e,
                        s = (0, r$.T)(),
                        n = r.join(''),
                        o = i.join(''),
                        l = ''.concat(s).concat(t).concat(a).concat(n).concat(o);
                    return new Promise((e, o) => {
                        this.tools
                            .createSign({ data: l, secretKey: this.secretKey })
                            .then((l) => {
                                this.resource
                                    .getFileInfo({
                                        tsInSeconds: s,
                                        trackId: t,
                                        quality: a,
                                        codecs: r,
                                        transports: i,
                                        sign: l,
                                        fromPromoLanding: this.variables.fromPromoLanding,
                                    })
                                    .then((t) => {
                                        e({ downloadInfo: t.downloadInfo, responseTime: t.responseTime, url: t.url });
                                    })
                                    .catch((e) => {
                                        o(new am('Error in get-file-info request', { code: A.E_GET_MEDIA_SRC, cause: e, data: { trackId: t, quality: a, codecs: n } }));
                                    });
                            })
                            .catch((e) => {
                                o(
                                    new am('Error in creating sign for get-file-info request', {
                                        code: A.E_CREATE_SIGN,
                                        cause: e,
                                        data: { trackId: t, quality: a, codecs: n },
                                    }),
                                );
                            });
                    });
                }
                getFileInfo(e) {
                    let { entity: t, disableCache: a = !1, codecs: r, quality: i, transports: s } = e;
                    if (this.variables.isMediaSourcePreloadEnabled)
                        try {
                            let e = this.getPreloadedFileInfo({ entity: t, disableCache: a });
                            if (e) return Promise.resolve({ downloadInfo: e });
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    return this.getFileInfoFromResource({ trackId: t.data.meta.id, quality: i, codecs: r, transports: s });
                }
                getMediaSource(e) {
                    let { entity: t, disableCache: a = !1 } = e,
                        r = (0, rJ.i)({ productQuality: this.mediaConfigController.quality.value, entity: t }),
                        i = (0, tt.l)(t) ? aF.o.RAW : this.transport;
                    return (
                        (t.expectedQuality = r),
                        this.getFileInfo({ entity: t, disableCache: a, quality: r, transports: [i], codecs: this.codecs }).then((e) => {
                            let { downloadInfo: i, responseTime: s, url: n } = e;
                            if (!('error' in i) && !r0.DM.includes(i.codec) && i.transport === aF.o.ENCRAW)
                                return (
                                    (t.mediaSourceData = null),
                                    this.getFileInfo({ entity: t, disableCache: a, quality: r, transports: [aF.o.RAW], codecs: this.codecs })
                                        .then((e) => {
                                            let { downloadInfo: a, responseTime: i, url: s } = e,
                                                n = this.createMediaSource({
                                                    downloadInfo: a,
                                                    trackId: t.data.meta.id,
                                                    quality: r,
                                                    codecs: this.codecs,
                                                    getFileInfoResponseTime: i,
                                                    getFileInfoUrl: s,
                                                });
                                            return (t.mediaSourceData = n), (t.expectedQuality = r), n;
                                        })
                                        .catch((e) => {
                                            let a = this.createMediaSource({
                                                downloadInfo: i,
                                                trackId: t.data.meta.id,
                                                quality: r,
                                                codecs: this.codecs,
                                                getFileInfoResponseTime: s,
                                            });
                                            throw (
                                                ((t.mediaSourceData = a),
                                                new am('Error in get-file-info retry enclaw request', {
                                                    code: A.E_GET_MEDIA_SRC,
                                                    cause: e,
                                                    data: { trackId: t.data.meta.id, quality: r, codecs: this.codecs.join('') },
                                                }))
                                            );
                                        })
                                );
                            let o = this.createMediaSource({
                                downloadInfo: i,
                                trackId: t.data.meta.id,
                                quality: r,
                                codecs: this.codecs,
                                getFileInfoResponseTime: s,
                                getFileInfoUrl: n,
                            });
                            return (t.mediaSourceData = o), o;
                        })
                    );
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e,
                        a = (0, r$.T)(),
                        r = (0, rJ.i)({ productQuality: this.mediaConfigController.quality.value, entities: t }),
                        i = this.codecs.join(''),
                        s = t.reduce((e, t) => ''.concat(e).concat(t.data.meta.id, ','), '').slice(0, -1),
                        n = t.some((e) => (0, tt.l)(e)) ? aF.o.RAW : this.transport,
                        o = ''.concat(a).concat(s).concat(r).concat(i).concat(n);
                    return new Promise((e, l) => {
                        this.tools
                            .createSign({ data: o, secretKey: this.secretKey })
                            .then((o) => {
                                this.resource
                                    .getFileInfoBatch({
                                        tsInSeconds: a,
                                        trackIds: s,
                                        quality: r,
                                        codecs: this.codecs,
                                        transports: [n],
                                        sign: o,
                                        fromPromoLanding: this.variables.fromPromoLanding,
                                    })
                                    .then((a) => {
                                        try {
                                            for (let e of a.downloadInfos) {
                                                let a = t.find((t) => t.data.meta.id === e.trackId);
                                                a &&
                                                    ((a.mediaSourceData = this.createMediaSource({
                                                        downloadInfo: e,
                                                        trackId: e.trackId,
                                                        quality: r,
                                                        codecs: this.codecs,
                                                    })),
                                                    (a.expectedQuality = r));
                                            }
                                            e(a.downloadInfos);
                                        } catch (e) {
                                            l(e);
                                        }
                                    })
                                    .catch((e) => {
                                        l(
                                            new am('Error in get-file-info/batch request', {
                                                code: A.E_GET_MEDIA_SRC,
                                                cause: e,
                                                data: { trackId: s, quality: r, codecs: i },
                                            }),
                                        );
                                    });
                            })
                            .catch((e) => {
                                l(
                                    new am('Error in creating sign for get-file-info request', {
                                        code: A.E_CREATE_SIGN,
                                        cause: e,
                                        data: { trackId: s, quality: r, codecs: i },
                                    }),
                                );
                            });
                    });
                }
                createMediaSource(e) {
                    let { downloadInfo: t, trackId: a, codecs: r, quality: i, getFileInfoResponseTime: s, getFileInfoUrl: n } = e,
                        o = r.join('');
                    if ('error' in t)
                        throw new am('Error message in get-file-info response', { code: A.E_GET_MEDIA_SRC, data: { trackId: a, quality: i, codecs: o, mediaSource: t } });
                    if (!t.urls[0])
                        throw new am('No urls in get-file-info response', { code: A.E_GET_MEDIA_SRC, data: { trackId: a, quality: i, codecs: o, mediaSource: t } });
                    return new aV({ data: t, loadingTime: performance.now(), getFileInfoResponseTime: s, url: n });
                }
                constructor(e) {
                    var t;
                    (0, L._)(this, 'secretKey', void 0),
                        (0, L._)(this, 'resource', void 0),
                        (0, L._)(this, 'mediaConfigController', void 0),
                        (0, L._)(this, 'transport', void 0),
                        (0, L._)(this, 'codecs', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'mediaSourceTtlMs', void 0),
                        (0, L._)(this, 'tools', void 0);
                    let { resource: a, secretKey: r, mediaConfigController: i, transport: s, variables: n, mediaSourceTtlMs: o, codecs: l, tools: u } = e;
                    (this.resource = a),
                        (this.secretKey = r),
                        (this.mediaConfigController = i),
                        (this.transport = s),
                        (this.codecs = l),
                        (this.variables = {
                            isMediaSourcePreloadEnabled: null != (t = null == n ? void 0 : n.isMediaSourcePreloadEnabled) && t,
                            fromPromoLanding: null == n ? void 0 : n.fromPromoLanding,
                        }),
                        (this.mediaSourceTtlMs = null != o ? o : 0),
                        (this.tools = u || r0.$n);
                }
            }
            class r9 {
                get src() {
                    return this.data.src;
                }
                constructor(e) {
                    (0, L._)(this, 'type', 'clipSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (this.data = e.data);
                }
            }
            class r5 {
                getMediaSource(e) {
                    let { entity: t } = e;
                    if (tb(t)) {
                        let e = new r9({
                            data: { src: ''.concat(this.vhUrl).concat(t.data.meta.playerId, '?service=').concat(this.service, '&from=').concat(this.from) },
                        });
                        return (t.mediaSourceData = e), Promise.resolve(e);
                    }
                    return Promise.reject(new z.t('Provided entity is not clip entity', { code: A.E_UNSUITABLE_ENTITY_TYPE }));
                }
                constructor({ service: e, from: t, vhUrl: a }) {
                    (0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'from', void 0),
                        (0, L._)(this, 'vhUrl', void 0),
                        (this.service = e),
                        (this.from = t),
                        (this.vhUrl = a);
                }
            }
            class r3 {
                get src() {
                    let e = new URL(this.data.streamUrl);
                    return (
                        this.vsid && e.searchParams.set('vsid', this.vsid),
                        void 0 !== this.sourceIndex && e.searchParams.set('source_index', String(this.sourceIndex)),
                        e.toString()
                    );
                }
                constructor(e) {
                    (0, L._)(this, 'type', 'radioSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'manualQualitySourceKey', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'sourceIndex', void 0),
                        (0, L._)(this, 'playId', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.manualQualitySourceKey = e.manualQualitySourceKey),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex),
                        (this.playId = e.playId);
                }
            }
            class r2 extends ap {
                constructor(e, { code: t = 'E_RADIO_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, L._)(this, 'name', 'RadioMediaProviderException'), Object.setPrototypeOf(this, r2.prototype);
                }
            }
            class r4 {
                getMediaSource(e) {
                    if (rz(e.entity)) {
                        if (e.entity.data.meta.streamUrl) {
                            let t = new r3({
                                data: { streamUrl: e.entity.data.meta.streamUrl },
                                manualQualitySourceKey: e.entity.data.meta.manualQualitySourceKey,
                                playId: e.entity.playId,
                            });
                            return (e.entity.mediaSourceData = t), Promise.resolve(t);
                        }
                        return Promise.reject(
                            new r2('Failed to create fm radio src link because the "streamUrl" property is missing in the entity meta', { code: A.E_GET_MEDIA_SRC }),
                        );
                    }
                    return Promise.reject(new r2('Provided entity is not fm radio entity', { code: A.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            class r8 {
                async getMediaSource(e) {
                    return aP(e.entity)
                        ? this.generativeProvider.getMediaSource(e)
                        : tb(e.entity)
                          ? this.vhMediaProvider.getMediaSource(e)
                          : rz(e.entity)
                            ? this.radioProvider.getMediaSource(e)
                            : this.getFileInfoProvider.getMediaSource(e);
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e;
                    return t.some((e) => aP(e))
                        ? Promise.reject(new ap('Can not use getMediaSourceBatch for generative entities', { code: A.E_UNSUITABLE_ENTITY_TYPE }))
                        : this.getFileInfoProvider.getMediaSourceBatch({ entities: t });
                }
                constructor(e) {
                    (0, L._)(this, 'generativeProvider', new rZ()),
                        (0, L._)(this, 'radioProvider', new r4()),
                        (0, L._)(this, 'getFileInfoProvider', void 0),
                        (0, L._)(this, 'vhMediaProvider', void 0),
                        (this.getFileInfoProvider = new r1(e.getFileInfoProviderParams)),
                        (this.vhMediaProvider = new r5(e.vhMediaProviderParams));
                }
            }
            class r6 {
                async loadEntities(e) {
                    let { trackIds: t } = (function (e) {
                            let t = [];
                            return (
                                e.forEach((e) => {
                                    let { context: a, entity: r } = e,
                                        i = r.data.meta.id,
                                        s = 'string' == typeof i && i.includes(':');
                                    if (!r.data.fromCurrentContext || s) return void t.push(r.data.meta.id);
                                    (0, e1.F)(a) && (i = ''.concat(r.data.meta.id, ':').concat(a.data.meta.id)),
                                        'albumId' in r.data.meta && r.data.meta.albumId && (i = ''.concat(r.data.meta.id, ':').concat(r.data.meta.albumId)),
                                        t.push(i);
                                }, {}),
                                { trackIds: t }
                            );
                        })(e),
                        a = e.some((e) => {
                            let { context: t } = e;
                            return (0, e$.i)(t);
                        });
                    return this.resource
                        .getTracksMeta({ trackIds: t, withProgress: !0, withMixData: a })
                        .then((t) => {
                            let a = [];
                            for (let r of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id).includes(String(r.id)));
                                if (t) {
                                    let e = t.entity.data.type === F.z4.Unloaded ? q.R.Unknown : t.entity.data.type;
                                    e !== q.R.Clip && a.push({ ...t.entity.data, type: e, meta: r, loadEntityMeta: !1 });
                                }
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new z.t('Failed to get track meta', { code: 'E_TRACK_META_PROVIDER', cause: (0, M.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, L._)(this, 'resource', void 0);
                    let { tracksResource: t } = e;
                    this.resource = t;
                }
            }
            class r7 {
                loadEntities(e) {
                    let t = e.map((e) => e.entity.data.meta.id);
                    return this.resource
                        .getClip({ clipIds: t })
                        .then((t) => {
                            let a = [];
                            for (let r of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id) === String(r.clipId));
                                t && a.push({ ...t.entity.data, type: q.R.Clip, meta: { id: r.clipId, ...r }, loadEntityMeta: !1 });
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new z.t('Failed to get clip meta', { code: 'E_CLIP_META_PROVIDER', cause: (0, M.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, L._)(this, 'resource', void 0), (this.resource = e.clipsResource);
                }
            }
            class ie {
                loadEntities(e) {
                    return e.some((e) => tb(e.entity)) ? this.clipMetaProvider.loadEntities(e) : this.trackMetaProvider.loadEntities(e);
                }
                constructor(e) {
                    (0, L._)(this, 'trackMetaProvider', void 0),
                        (0, L._)(this, 'clipMetaProvider', void 0),
                        (this.trackMetaProvider = new r6({ tracksResource: e.tracksResource })),
                        (this.clipMetaProvider = new r7({ clipsResource: e.clipsResource }));
                }
            }
            (R || (R = {})).MAIN = 'MAIN';
            class it {
                get availablePlaybacks() {
                    return Array.from(this.playbacks.values());
                }
                afterPlayHandler(e) {
                    return (this.activePlayback.value = e), Promise.resolve();
                }
                beforePlayHandler(e) {
                    return this.activePlayback.value && this.activePlayback.value !== e ? this.activePlayback.value.pause() : Promise.resolve();
                }
                beforeDestroyHandler(e) {
                    return e.stop();
                }
                getPlayback(e) {
                    if (e) {
                        let t = this.playbacks.get(e);
                        if (t) return t;
                    }
                    let t = this.playbacks.get(R.MAIN);
                    if (void 0 !== t) return t;
                    throw new z.t('MAIN playback was not created', { code: 'NO_MAIN_PLAYBACK' });
                }
                checkPlaybackBlockingStatus() {
                    var e, t;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.MAIN,
                        r = null == (e = this.activePlayback.value) ? void 0 : e.getId(),
                        i = r === a;
                    return ((null == (t = this.activePlayback.value) ? void 0 : t.isBlocking) || i) && !i
                        ? { status: F.N.BLOCKED, blockingPlaybackId: r }
                        : { status: F.N.UNBLOCKED };
                }
                callIfUnblocked(e, t) {
                    let { status: a, blockingPlaybackId: r } = this.checkPlaybackBlockingStatus(t);
                    return a === F.N.UNBLOCKED
                        ? e()
                        : (this.getPlayback(t).hooks.afterPlaybackCheckBlockingStatus.promise({ status: a, blockingPlaybackId: r }), Promise.resolve());
                }
                createPlayback(e, t) {
                    if (!this.playbacks.has(e)) {
                        let a = new F.VE({
                            id: e,
                            isBlocking: t.isBlocking || !1,
                            factory: t.factory,
                            entityProvider: t.entityProvider,
                            mediaPlayerParams: t.mediaPlayerParams,
                            playbackConfig: t.playbackConfig,
                            variables: t.variables,
                        });
                        this.playbacks.set(e, a),
                            a.hooks.afterMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.afterMediaResume.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaResume.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.beforeDestroy.tapPromise('MusicPlaybackController', () => this.beforeDestroyHandler(a)),
                            this.syncWithMainPlayback(a, t.syncVolumeWithMainPlayback);
                    }
                }
                syncWithMainPlayback(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e.getId() === R.MAIN)
                        return void this.playbacksWaitingForSync.forEach((t) => {
                            this.syncVolume(e, t);
                        });
                    let a = this.playbacks.get(R.MAIN);
                    if (t && a) return void this.syncVolume(a, e);
                    t && !a && this.playbacksWaitingForSync.push(e);
                }
                syncVolume(e, t) {
                    (this.useExponentVolume ? e.state.playerState.exponentVolume : e.state.playerState.volume).onChange((e) => {
                        void 0 !== e && this.useExponentVolume ? t.setExponentVolume(e) : void 0 === e || this.useExponentVolume || t.setVolume(e);
                    });
                }
                constructor(e) {
                    (0, L._)(this, 'activePlayback', new er.cJ(null)),
                        (0, L._)(this, 'playbacks', new Map()),
                        (0, L._)(this, 'playbacksWaitingForSync', []),
                        (0, L._)(this, 'useExponentVolume', void 0),
                        (this.useExponentVolume = !!e.useExponentVolume);
                }
            }
            class ia {
                get state() {
                    return this.playbackController.getPlayback().state;
                }
                getState(e) {
                    return this.playbackController.getPlayback(e).state;
                }
                playContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: r } = e,
                            i = this.factory.createContext({ data: r });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.playContext({ context: i, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    e instanceof F.WT || a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return a.hooks.afterError.promise(e), Promise.resolve();
                    }
                }
                setContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: r } = e,
                            i = this.factory.createContext({ data: r });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.setContext({ context: i, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    e instanceof F.WT || a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return a.hooks.afterError.promise(e), Promise.resolve();
                    }
                }
                restartContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            a.restartContext({ playAfterRestart: e.playAfterRestart, entitiesData: e.entitiesData, queueParams: e.queueParams }).catch((e) => {
                                a.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                play(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.play().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                stop(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.stop().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                pause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.pause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                resume(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.resume().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setProgress(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setProgress(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setSpeed(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setSpeed(e).catch((e) => (a.hooks.afterError.promise(e), 1)), t);
                }
                slideForward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideForward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                slideBackward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideBackward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                moveForward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveForward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                moveBackward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveBackward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setEntityByIndex(e, t, a) {
                    let r = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            r.setEntityByIndex(e, a).catch((e) => {
                                r.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                togglePause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.togglePause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                toggleShuffle(e) {
                    let t = this.playbackController.getPlayback(e);
                    try {
                        this.playbackController.callIfUnblocked(() => t.toggleShuffle(), e);
                    } catch (e) {
                        t.hooks.afterError.promise(e);
                    }
                }
                setShuffle(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setShuffle(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                updateFilterParams(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.updateFilterParams(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                bindPlayer(e) {
                    this.playbackController.getPlayback(e).bindPlayer();
                }
                unbindPlayer(e) {
                    this.playbackController.getPlayback(e).unbindPlayer();
                }
                setRepeatMode(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setRepeatMode(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                removeAndLoadEntities(e) {
                    let { positions: t, playbackId: a, silent: r } = e,
                        i = this.playbackController.getPlayback(a);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            i.removeAndLoadEntities(t, r).catch((e) => {
                                i.hooks.afterError.promise(e);
                            }),
                        a,
                    );
                }
                remove(e) {
                    let t = this.playbackController.getPlayback(e.playbackId);
                    this.playbackController.callIfUnblocked(() => {
                        if (Array.isArray(e.positions)) return void t.remove(e.positions, e.silent);
                        Array.isArray(e.entityIds) && t.removeByEntityIds(e.entityIds, e.silent);
                    }, e.playbackId);
                }
                hide(e) {
                    let t = this.playbackController.getPlayback(e.playbackId);
                    this.playbackController.callIfUnblocked(() => {
                        if (Array.isArray(e.positions)) return void t.hide(e.positions, e.silent);
                        Array.isArray(e.entityIds) && t.hideByEntityIds(e.entityIds, e.silent);
                    }, e.playbackId);
                }
                inject(e) {
                    let { entitiesData: t, position: a, playbackId: r, silent: i, sourceContextData: s } = e,
                        n = this.playbackController.getPlayback(r),
                        o = s ? this.factory.createContext({ data: s }) : void 0;
                    this.playbackController.callIfUnblocked(() => n.inject({ entitiesData: t, position: a, silent: i, sourceContext: o }), r);
                }
                injectNext(e) {
                    let { entitiesData: t, playbackId: a, silent: r, sourceContextData: i } = e,
                        s = this.playbackController.getPlayback(a),
                        n = i ? this.factory.createContext({ data: i }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectNext({ entitiesData: t, silent: r, sourceContext: n }), a);
                }
                injectLast(e) {
                    let { entitiesData: t, playbackId: a, silent: r, sourceContextData: i } = e,
                        s = this.playbackController.getPlayback(a),
                        n = i ? this.factory.createContext({ data: i }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectLast({ entitiesData: t, silent: r, sourceContext: n }), a);
                }
                registerMediaPlayer(e) {
                    let { mediaPlayerParams: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).registerMediaPlayer(t);
                }
                setVideoCoreContainer(e) {
                    let { container: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).setVideoCoreContainer(t);
                }
                destroyVideoCore(e) {
                    this.playbackController.getPlayback(e).destroyVideoCore();
                }
                destroy() {
                    return Promise.allSettled(this.playbackController.availablePlaybacks.map((e) => e.hooks.beforeDestroy.promise()));
                }
                constructor(e) {
                    if (
                        ((0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'playbackController', void 0),
                        (this.factory = e.factory),
                        (this.playbackController = e.playbackController),
                        this.playbackController.createPlayback(R.MAIN, {
                            factory: e.factory,
                            mediaPlayerParams: e.mediaPlayerParams,
                            entityProvider: e.entityProvider,
                            playbackConfig: e.playbackConfig,
                            variables: e.variables,
                        }),
                        e.plugins)
                    ) {
                        let t = this.playbackController.getPlayback(R.MAIN);
                        for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
                    }
                }
            }
            var ir = a(54280),
                ii = a(57594),
                is = a(44128);
            let io = (0, N.PA)(() => {
                ((e) => {
                    var t;
                    let { sonataState: a, continueListen: r } = (0, ii.g)();
                    (0, O.useEffect)(() => {
                        var t, i, s, n, o, l, u, d;
                        if (!e || (!(null == (t = a.entityMeta) ? void 0 : t.isPodcast) && !(null == (i = a.entityMeta) ? void 0 : i.isAudiobook))) return;
                        let c = e.state.queueState.index.value;
                        e.state.queueState.order.value.length > 0 && 'number' == typeof c && r.saveTrackIndex(c);
                        let h = null == (s = e.state.currentContext.value) ? void 0 : s.data.meta;
                        if (
                            h &&
                            a.contextType &&
                            a.contextId &&
                            (r.saveTrack({ contextType: a.contextType, contextId: a.contextId, track: a.entityMeta }), a.entityMeta.isAudiobook)
                        ) {
                            if ('volumes' in h && h.volumes) {
                                let e,
                                    t = ((e, t) => {
                                        let a = !0;
                                        return (0, tG.A)(e).reduce((e, r) => {
                                            if (!r.durationMs) return e;
                                            if (r.id === t) {
                                                var i;
                                                return (a = !1), e + ((null == (i = r.streamProgress) ? void 0 : i.endPositionSec) || 0);
                                            }
                                            return a ? e + r.durationMs / 1e3 : e;
                                        }, 0);
                                    })(h.volumes, a.entityMeta.id);
                                'durationSec' in h && (e = h.durationSec),
                                    r.saveAlbumDuration(e),
                                    null == (l = r.trackTempStreamProgress) ||
                                        l.updateEndPositionSec((null == (o = r.track) || null == (n = o.streamProgress) ? void 0 : n.endPositionSec) || 0),
                                    null == (u = r.albumStreamProgress) || u.updateEndPositionSec(t);
                            }
                            'listeningFinished' in h && (null == (d = r.albumStreamProgress) || d.updateEverFinished(h.listeningFinished || !1));
                        }
                    }, [null == (t = a.entityMeta) ? void 0 : t.id, a.entityMeta, a.contextType, a.contextId, e, r]);
                })((0, is.e)());
            });
            var il = a(15808),
                iu = (function (e) {
                    return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
                })(iu || {}),
                id = a(91027),
                ic = a(32629),
                ih = a(55499);
            class iv {
                async getMediaSource(e) {
                    let { entity: t } = e,
                        a = '';
                    return t instanceof ih.y && t.data.meta.src && (a = t.data.meta.src), Promise.resolve({ src: a });
                }
            }
            var iy = a(78305);
            let ip = !1,
                im = async () => {
                    if (ip) return;
                    let e = window.document.createElement('audio');
                    (e.src =
                        'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAC2QBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJAimTQABzAAAAtmIVtmVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQZAAO4AAAf4AAAAgAAA/wAAABAoQDLmAAACBYgGYMAAAE+oH///////0WKFRVzjKnAmjp+XX9qP//////p0USaKtMwpjZNhNFyEM61QAAOAP////////nfSpMQU1FMy45OC4yqqr/+xBEDI/wAAB/gAAACAxgGaMAAAEAAAH+AAAAIAAAP8AAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGQoD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'),
                        e.load();
                    try {
                        await e.play(), e.pause(), (ip = !0);
                    } catch (e) {}
                },
                ig = async () => im();
            var ib = a(12583),
                iE = a(70204),
                iS = a(34186),
                i_ = a(7697),
                iA = a(61945),
                iP = a(62376),
                ik = a(26518);
            function iI(e) {
                let t = 'MobileSafari' === e.name || 'iOS' === e.OSFamily,
                    a = 'MacOS' === e.OSFamily && 'Safari' === e.name,
                    r = e.version ? Number(e.version.split('.')[0]) : void 0;
                return t
                    ? r && r >= 18
                        ? { transport: aF.o.ENCRAW, codecs: [aB.N.MP3, aB.N.AAC, aB.N.HEAAC, aB.N.AACMP4, aB.N.HEAACMP4] }
                        : { transport: aF.o.RAW, codecs: [aB.N.MP3] }
                    : a
                      ? r && r >= 18
                          ? { transport: aF.o.ENCRAW, codecs: [aB.N.MP3, aB.N.AAC, aB.N.HEAAC, aB.N.AACMP4, aB.N.HEAACMP4] }
                          : { transport: aF.o.ENCRAW, codecs: [aB.N.MP3, aB.N.AACMP4, aB.N.HEAACMP4] }
                      : { transport: aF.o.ENCRAW, codecs: [...r0.iy, ...r0.DM] };
            }
            var iC = (function (e) {
                    return (e.HQ_PLUS = 'hqPlus'), (e.HQ = 'hq'), (e.NQ = 'nq'), (e.LQ = 'lq'), (e.PREVIEW = 'preview'), e;
                })({}),
                iT = a(79406),
                ix = a(56755),
                iR = a(81218),
                iw = a(92496),
                iD = a(49259),
                iN = a(45066),
                iO = a(19379),
                iM = a(19053),
                iL = a(9634);
            let iF = (e) => {
                let { audioLoader: t, children: a } = e;
                return (0, O.use)(t), a;
            };
            var iB = a(92708),
                iq = a(26490);
            let iV = (0, N.PA)(() => {
                let e = (0, iq.S)(),
                    t = (0, iw.i)(),
                    { sonataState: a } = (0, ii.g)();
                (0, O.useEffect)(() => {
                    e.loadPresets();
                }, [e]),
                    (0, O.useEffect)(() => {
                        e.isAvailable &&
                            (null == t ? void 0 : t.equalizer.value) &&
                            (e.isEnabled
                                ? (e.currentPreset && t.equalizer.value.applyPreset((0, iB.HO)(e.currentPreset)), t.equalizer.value.enable())
                                : t.equalizer.value.disable());
                    }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer, a.areCoresRegistered, e.isAvailable]);
            });
            var iU = a(6752),
                iW = a(11541),
                iK = a(60900),
                ij = a(95415),
                iY = a(87748);
            let iG = (0, N.PA)((e) => {
                let { isYnisonDisabled: t } = e,
                    { experiments: a, slam: r } = (0, ii.g)(),
                    i = (0, iS.N)(),
                    s = (0, iU.L)(() => !!t || (void 0 === r.isOfflineModeEnabled ? (0, iW.g)(i.get(iE.U2)) : r.isOfflineModeEnabled)),
                    n = a.checkExperiment(iT.z.WebNextYnisonActivityInterception, 'on');
                (0, O.useEffect)(() => {
                    i.get(iE.by).updateVariables({ isShadow: !n });
                }, [i, n]),
                    ((e) => {
                        let t = (0, iS.N)(),
                            { formatMessage: a } = (0, iK.A)(),
                            { experiments: r } = (0, ii.g)(),
                            i = (0, O.useRef)(null),
                            s = r.checkExperiment(iT.z.WebNextYnisonNetworkMonitoring, 'on');
                        (0, O.useEffect)(() => {
                            let e = t.get(iE.by),
                                r = a(
                                    { id: 'ynison.desktop-device-title' },
                                    {
                                        platformName: (0, iY.t)((0, ij.u)()),
                                        hostname: (() => {
                                            if (void 0 !== window.DEVICE_HOSTNAME) return window.DEVICE_HOSTNAME;
                                        })(),
                                    },
                                );
                            e.updateDeviceInfo({ title: r });
                        }, [t, a]);
                        let { networkMonitorRef: n } = ((e) => {
                            let { isConnectionDisabled: t, isNetworkMonitoringEnabled: a, checkConnectionReasonRef: r } = e,
                                i = (0, iS.N)(),
                                s = (0, O.useRef)(null);
                            return (
                                (0, O.useEffect)(() => {
                                    if (t || !a) return;
                                    let e = i.get(iE.VR)();
                                    s.current = e;
                                    let n = e.subscribe((e) => {
                                        if ('online' === e) {
                                            var t;
                                            null == (t = r.current) || t.call(r);
                                        }
                                    });
                                    return () => {
                                        n(), e.dispose(), s.current === e && (s.current = null);
                                    };
                                }, [r, i, t, a]),
                                { networkMonitorRef: s }
                            );
                        })({ isConnectionDisabled: e.isConnectionDisabled, isNetworkMonitoringEnabled: s, checkConnectionReasonRef: i });
                        (0, O.useEffect)(() => {
                            let a = t.get(iE.by);
                            if (e.isConnectionDisabled) return void a.connector.disconnect();
                            let r = () => {
                                if (!document.hidden) {
                                    var e;
                                    (s && (null == (e = n.current) ? void 0 : e.getStatus()) === 'offline') ||
                                        a.connector.connect({ oauth: t.get(iE.QG).token, multiAuthUserId: t.get(iE.WA).getPassportUid() });
                                }
                            };
                            i.current = r;
                            let o = a.stateController.on(
                                D.p$.UPDATED,
                                (e) => {
                                    a.isActive || e.prevState.active_device_id_optional !== a.deviceConfig.info.device_id || r();
                                },
                                'App',
                            );
                            return (
                                document.addEventListener('visibilitychange', r),
                                r(),
                                () => {
                                    o(), document.removeEventListener('visibilitychange', r), i.current === r && (i.current = null);
                                }
                            );
                        }, [t, s, n, e.isConnectionDisabled, e.isYnisonActivityInterceptionEnabled]),
                            ((e) => {
                                let t = (0, iS.N)(),
                                    a = (0, O.useRef)(0),
                                    { experiments: r } = (0, ii.g)(),
                                    i = r.checkExperiment(iT.z.WebNextYnisonInactiveTimerDesktop, 'on'),
                                    s = r.getExperiment(iT.z.WebNextYnisonInactiveTimerDesktop);
                                (0, O.useEffect)(() => {
                                    if (!e.isEnabled) return;
                                    let { inactiveTimeoutMs: r, inactiveCheckIntervalMs: n } = (function (e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                a = { inactiveTimeoutMs: 6e5, inactiveCheckIntervalMs: 3e4 };
                                            try {
                                                var r, i, s, n;
                                                if (
                                                    e &&
                                                    (null == (i = t.value) || null == (r = i.metadata) ? void 0 : r.inactiveTimeoutSec) &&
                                                    (null == (n = t.value) || null == (s = n.metadata) ? void 0 : s.inactiveCheckIntervalSec)
                                                ) {
                                                    let e = Number(t.value.metadata.inactiveTimeoutSec),
                                                        a = Number(t.value.metadata.inactiveCheckIntervalSec);
                                                    if (!Number.isNaN(e) && !Number.isNaN(a)) return { inactiveTimeoutMs: 1e3 * e, inactiveCheckIntervalMs: 1e3 * a };
                                                }
                                                return a;
                                            } catch (e) {
                                                return a;
                                            }
                                        })(i, s),
                                        o = setInterval(() => {
                                            let e = t.get(iE.by),
                                                i = e.isActive,
                                                s = Date.now() - a.current > r,
                                                n = e.stateController.currentState.player_state.status.paused;
                                            i && s && n && e.becomePassive();
                                        }, n);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }, [t, e.isEnabled, i, s]),
                                    (0, O.useEffect)(() => {
                                        if (!e.isEnabled) return;
                                        let r = t.get(iE.by),
                                            i = r.stateController.on(
                                                D.p$.UPDATED,
                                                (e) => {
                                                    var t, i;
                                                    ((null == (t = e.diff) ? void 0 : t.player_state) ||
                                                        ((null == (i = e.diff) ? void 0 : i.active_device_id_optional) && r.isActive)) &&
                                                        (a.current = Date.now());
                                                },
                                                'App',
                                            );
                                        return () => {
                                            i();
                                        };
                                    }, [t, e.isEnabled]);
                            })({ isEnabled: !e.isConnectionDisabled || !e.isYnisonActivityInterceptionEnabled });
                    })({ isConnectionDisabled: s, isYnisonActivityInterceptionEnabled: n }),
                    (0, O.useEffect)(() => {
                        if (s || !n) return;
                        let e = i.get(iE.by),
                            t = e.stateController.on(
                                D.p$.UPDATED,
                                () => {
                                    var t, a;
                                    let r = (null == (a = e.stateController.fullState.diff.player_state) || null == (t = a.status) ? void 0 : t.paused) === !1;
                                    !e.isActive && r && (window?.YNISON_INTERCEPT_PLAYBACK ?? !1) && e.interceptActivity();
                                },
                                'App',
                            );
                        return () => {
                            t();
                        };
                    }, [i, s, n]);
            });
            var iH = a(60754),
                iz = a(23912);
            let iQ = {
                [iz.f.CUSTOM]: {
                    id: iz.f.CUSTOM,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 0 },
                        { key: 170, value: 0 },
                        { key: 310, value: 0 },
                        { key: 600, value: 0 },
                        { key: 1e3, value: 0 },
                        { key: 3e3, value: 0 },
                        { key: 6e3, value: 0 },
                        { key: 12e3, value: 0 },
                        { key: 14e3, value: 0 },
                        { key: 16e3, value: 0 },
                    ],
                },
                [iz.f.DEFAULT]: {
                    id: iz.f.DEFAULT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 0 },
                        { key: 170, value: 0 },
                        { key: 310, value: 0 },
                        { key: 600, value: 0 },
                        { key: 1e3, value: 0 },
                        { key: 3e3, value: 0 },
                        { key: 6e3, value: 0 },
                        { key: 12e3, value: 0 },
                        { key: 14e3, value: 0 },
                        { key: 16e3, value: 0 },
                    ],
                },
                [iz.f.CLASSICAL]: {
                    id: iz.f.CLASSICAL,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -3.5 },
                        { key: 12e3, value: -3.5 },
                        { key: 14e3, value: -3.5 },
                        { key: 16e3, value: -4.5 },
                    ],
                },
                [iz.f.CLUB]: {
                    id: iz.f.CLUB,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: 4 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 1.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [iz.f.DANCE]: {
                    id: iz.f.DANCE,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4.5 },
                        { key: 170, value: 3.5 },
                        { key: 310, value: 1 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -2.5 },
                        { key: 6e3, value: -3.5 },
                        { key: 12e3, value: -3.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [iz.f.BASS_BOOST]: {
                    id: iz.f.BASS_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 4.5 },
                        { key: 310, value: 4.5 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 0.5 },
                        { key: 3e3, value: -2 },
                        { key: 6e3, value: -4 },
                        { key: 12e3, value: -5 },
                        { key: 14e3, value: -5.5 },
                        { key: 16e3, value: -5.5 },
                    ],
                },
                [iz.f.BASS_AND_TREBLE_BOOST]: {
                    id: iz.f.BASS_AND_TREBLE_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 3.5 },
                        { key: 170, value: 2.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -3.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: 0.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 5.5 },
                        { key: 14e3, value: 6 },
                        { key: 16e3, value: 6 },
                    ],
                },
                [iz.f.TREBLE_BOOST]: {
                    id: iz.f.TREBLE_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -4.5 },
                        { key: 170, value: -4.5 },
                        { key: 310, value: -4.5 },
                        { key: 600, value: -2 },
                        { key: 1e3, value: 1 },
                        { key: 3e3, value: 5.5 },
                        { key: 6e3, value: 8 },
                        { key: 12e3, value: 8 },
                        { key: 14e3, value: 8 },
                        { key: 16e3, value: 8 },
                    ],
                },
                [iz.f.SPEAKERS]: {
                    id: iz.f.SPEAKERS,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 5.5 },
                        { key: 310, value: 2.5 },
                        { key: 600, value: -1.5 },
                        { key: 1e3, value: -1 },
                        { key: 3e3, value: 0.5 },
                        { key: 6e3, value: 2 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 6 },
                        { key: 16e3, value: 7 },
                    ],
                },
                [iz.f.LARGE_HALL]: {
                    id: iz.f.LARGE_HALL,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 5 },
                        { key: 170, value: 5 },
                        { key: 310, value: 2.5 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -2 },
                        { key: 6e3, value: -2 },
                        { key: 12e3, value: -2 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [iz.f.CONCERT]: {
                    id: iz.f.CONCERT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -2 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: 2 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 2 },
                        { key: 12e3, value: 1 },
                        { key: 14e3, value: 1 },
                        { key: 16e3, value: 1 },
                    ],
                },
                [iz.f.PARTY]: {
                    id: iz.f.PARTY,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 3.5 },
                        { key: 170, value: 3.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -0.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: 3.5 },
                        { key: 16e3, value: 3.5 },
                    ],
                },
                [iz.f.POP]: {
                    id: iz.f.POP,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: 2 },
                        { key: 310, value: 3.5 },
                        { key: 600, value: 4 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -1 },
                        { key: 12e3, value: -1 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [iz.f.REGGAE]: {
                    id: iz.f.REGGAE,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -2.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: 3 },
                        { key: 6e3, value: 3 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [iz.f.ROCK]: {
                    id: iz.f.ROCK,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 2 },
                        { key: 310, value: -2.5 },
                        { key: 600, value: -4 },
                        { key: 1e3, value: -1.5 },
                        { key: 3e3, value: 2 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 5.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 5.5 },
                    ],
                },
                [iz.f.SKA]: {
                    id: iz.f.SKA,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -1 },
                        { key: 170, value: -2 },
                        { key: 310, value: -2 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: 2 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 4.5 },
                    ],
                },
                [iz.f.SOFT]: {
                    id: iz.f.SOFT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -1 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: 2 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 6 },
                    ],
                },
                [iz.f.SOFT_ROCK]: {
                    id: iz.f.SOFT_ROCK,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 2 },
                        { key: 310, value: 1 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: -2.5 },
                        { key: 6e3, value: -1.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: 1 },
                        { key: 16e3, value: 4 },
                    ],
                },
                [iz.f.TECHNO]: {
                    id: iz.f.TECHNO,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 2.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -2.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 4.5 },
                        { key: 16e3, value: 4 },
                    ],
                },
            };
            var iX = a(4932);
            let iZ = iH.gK.model('EqualizerFrequency', { key: iH.gK.number, value: iH.gK.number }),
                i$ = iH.gK.model('EqualizerPreset', { id: iH.gK.enumeration(Object.values(iz.f)), preamp: iH.gK.number, frequencies: iH.gK.array(iZ) }).actions((e) => ({
                    setPreamp(t) {
                        e.preamp = t;
                    },
                    setAmp(t, a) {
                        e.frequencies.forEach((e) => {
                            e.key === t && (e.value = a);
                        });
                    },
                })),
                iJ = iH.gK
                    .model('Equalizer', {
                        modal: iX.q,
                        isAvailable: iH.gK.optional(iH.gK.boolean, !1),
                        isEnabled: iH.gK.boolean,
                        currentPreset: iH.gK.optional(i$, iQ[iz.f.DEFAULT]),
                        customPreset: iH.gK.optional(i$, iQ[iz.f.CUSTOM]),
                    })
                    .actions((e) => ({
                        setIsAvailable(t) {
                            e.isAvailable = t;
                        },
                        setEnabled(t) {
                            let { localStorage: a } = (0, iH._$)(e);
                            e.isEnabled = t;
                            let r = a.get(iO.c.EqualizerConfig);
                            a.set(iO.c.EqualizerConfig, { ...r, isEnabled: t, version: '6' });
                        },
                        loadPresets() {
                            let { localStorage: t } = (0, iH._$)(e),
                                a = t.get(iO.c.EqualizerConfig);
                            if (
                                ((null == a ? void 0 : a.version) !== '6' && (t.remove(iO.c.EqualizerConfig), (a = null)),
                                a && ((e.isEnabled = a.isEnabled), a.customPreset && (e.customPreset = (0, iH.wg)(a.customPreset)), a.lastPresetId))
                            ) {
                                if (a.lastPresetId === iz.f.CUSTOM) {
                                    e.currentPreset = (0, iH.o8)(e.customPreset);
                                    return;
                                }
                                let t = iQ[a.lastPresetId];
                                e.currentPreset = i$.create(t);
                            }
                        },
                        changeCurrentPreset(t) {
                            let { localStorage: a } = (0, iH._$)(e),
                                r = a.get(iO.c.EqualizerConfig);
                            if ((a.set(iO.c.EqualizerConfig, { ...r, lastPresetId: t, version: '6' }), t === iz.f.CUSTOM)) {
                                e.currentPreset = (0, iH.o8)(e.customPreset);
                                return;
                            }
                            let i = iQ[t];
                            e.currentPreset = i$.create(i);
                        },
                        changePreamp(t) {
                            let { localStorage: a } = (0, iH._$)(e),
                                r = (0, iH.dV)(e.currentPreset);
                            (e.customPreset = (0, iH.wg)({ ...r, id: iz.f.CUSTOM })), e.customPreset.setPreamp(t), (e.currentPreset = (0, iH.o8)(e.customPreset));
                            let i = a.get(iO.c.EqualizerConfig);
                            a.set(iO.c.EqualizerConfig, { ...i, customPreset: (0, iB.HO)(e.customPreset), lastPresetId: iz.f.CUSTOM, version: '6' });
                        },
                        changeAmp(t, a) {
                            let { localStorage: r } = (0, iH._$)(e),
                                i = (0, iH.dV)(e.currentPreset);
                            (e.customPreset = (0, iH.wg)({ ...i, id: iz.f.CUSTOM })), e.customPreset.setAmp(t, a), (e.currentPreset = (0, iH.o8)(e.customPreset));
                            let s = r.get(iO.c.EqualizerConfig);
                            r.set(iO.c.EqualizerConfig, { ...s, customPreset: (0, iB.HO)(e.customPreset), lastPresetId: iz.f.CUSTOM, version: '6' });
                        },
                    }));
            var i0 = a(31726);
            let i1 = (e) => {
                    let { children: t } = e,
                        a = (0, iw.i)(),
                        r = (0, i0.Y)(),
                        [i] = (0, O.useState)(() => iJ.create({ isEnabled: !1, modal: {} }, r));
                    return (
                        (0, O.useEffect)(() => {
                            let e =
                                null == a
                                    ? void 0
                                    : a.equalizer.onChange((e) => {
                                          i.setIsAvailable(!!e);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [i, null == a ? void 0 : a.equalizer]),
                        (0, w.jsx)(iq.i.Provider, { value: i, children: t })
                    );
                },
                i9 = !1,
                i5 = new Set([R.MAIN, ix.V.TRAILER, ix.V.PROMO_LANDING, ix.V.CLIP]);
            var i3 = a(6612);
            let i2 = null,
                i4 = null,
                i8 = null,
                i6 = null,
                i7 = null,
                se = null,
                st = null,
                sa = null,
                sr = null,
                si = null,
                ss = [iO.c.YmPlayerQuality, iO.c.YmPlayerShuffle, iO.c.YmPlayerPrevVolume, iO.c.YmPlayerVolume, iO.c.YmPlayerRepeatMode, iO.c.CrossFadeMode],
                sn = (e) => {
                    var t, r, i;
                    let { children: s, hostTld: n, quality: o, withPromoLandingPlayback: l } = e,
                        u = (0, iS.N)(),
                        {
                            sonataState: d,
                            experiments: c,
                            library: h,
                            trailer: v,
                            user: y,
                            advert: p,
                            settings: m,
                            album: f,
                            albumCPA: { isPlusCPAPlayerBarEnabled: g },
                        } = (0, ii.g)(),
                        b = (0, iD.s)(iN.n.PROMOLANDING, { throwOnAbsence: !1 }),
                        { isPassToProduct: E, isFreemium: S } = (0, i_.X)(),
                        _ = (0, iP.U)(),
                        A = u.get(iE.oo),
                        P = u.get(iE.QG),
                        k = u.get(iE.tw),
                        I = u.get(iE.P0),
                        { language: C } = (0, iA.h)(),
                        T = (0, iy.r)(),
                        x = (function () {
                            let { experiments: e } = (0, ii.g)();
                            return (0, id.c)(() => {
                                var t, a, r;
                                let i = null == (t = e.getExperiment(iT.z.ABTestIds)) ? void 0 : t.group,
                                    { testids: s } = null != (r = null == (a = window.Ya.YaspAudioElement) ? void 0 : a.getExpConfig()) ? r : {};
                                return (0, M.mergeTestIds)(s, i);
                            });
                        })(),
                        R = c.checkExperiment(iT.z.WebNextCrossMediaPlayer, 'on'),
                        N = !y.isAuthorized || E || S,
                        L = y.isAuthorized && !S,
                        B = I.get(ib.qV),
                        q = I.get(ib.W4),
                        V = !!B && !!A.get(iO.c.EnableMetricsPluginDebugMode),
                        W = !!B && !!A.get(iO.c.EnableYnisonMetricsDebugMode),
                        K = (0, O.useMemo)(() => (i2 || (i2 = new rH(o)), i2), [o]),
                        j = (() => {
                            let e = (0, iS.N)(),
                                { experiments: t } = (0, ii.g)(),
                                a = e.get(iE.tw),
                                r = a.player.yaspExpName,
                                i = a.player.yaspCandidateVersion;
                            return r && i && t.checkExperiment(r, 'on') ? i : a.player.yaspVersionStable;
                        })(),
                        Y = (() => {
                            let e = (0, iS.N)(),
                                { experiments: t } = (0, ii.g)(),
                                {
                                    player: { yaspSourceLimit: a },
                                } = e.get(iE.tw);
                            try {
                                var r;
                                let e = t.checkExperiment(iT.z.WebNextYaspSourceLimit, 'on'),
                                    i = t.getExperiment(iT.z.WebNextYaspSourceLimit);
                                if (e && (null == i || null == (r = i.value.metadata) ? void 0 : r.yaspSourceLimit)) {
                                    let e = Number(i.value.metadata.yaspSourceLimit);
                                    if (!Number.isNaN(e)) return e;
                                }
                                return a;
                            } catch (e) {
                                return a;
                            }
                        })(),
                        G = (() => {
                            let { experiments: e } = (0, ii.g)();
                            try {
                                var t;
                                let a = e.checkExperiment(iT.z.WebNextResetWaveSeeds, 'on'),
                                    r = e.getExperiment(iT.z.WebNextResetWaveSeeds);
                                if (a && (null == r || null == (t = r.value.metadata) ? void 0 : t.sessionLifeTimeMin)) {
                                    let e = Number(r.value.metadata.sessionLifeTimeMin);
                                    if (!Number.isNaN(e)) return { enabled: !0, sessionLifeTimeMin: e };
                                }
                                return { enabled: !1 };
                            } catch (e) {
                                return { enabled: !1 };
                            }
                        })(),
                        H = m.browserInfo,
                        z = 'Safari' !== H.name && 'iOS' !== H.OSFamily,
                        Q = (null == H ? void 0 : H.isTouch) && g(f.id, null == (t = f.meta) ? void 0 : t.isNonMusic),
                        X =
                            !(null == H ? void 0 : H.isTouch) &&
                            y.isAuthorized &&
                            !y.hasPlus &&
                            (null == (i = c.getExperiment(iT.z.WebNextDesktopWebFreemium)) || null == (r = i.value) ? void 0 : r.limitListening) === 'on',
                        Z = (0, O.useMemo)(
                            () =>
                                i8 ||
                                (i8 = new tg({
                                    useAnalyser: z,
                                    useEqualizer: z,
                                    useFade: !1,
                                    useCrossFade: R,
                                    crossFadeConfig: { useVolumeForAudioEffect: !z, useWorker: !!window.Worker },
                                })),
                            [z, R, z],
                        ),
                        $ = (0, O.useMemo)(() => {
                            if (null !== i6) return i6;
                            let e = u.get(iE.gd);
                            return (i6 = new tE({
                                advertModule: T,
                                afterTrackResource: u.get(iE.EN),
                                adsResource: e,
                                variables: {
                                    get enabled() {
                                        return !y.hasPlus;
                                    },
                                },
                            }));
                        }, [T, u, y.hasPlus]),
                        J = (0, O.useMemo)(() => {
                            if (se) return se;
                            let e = u.get(iE.qT),
                                { transport: t, codecs: a } = iI(H);
                            return (se = new r8({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: k.player.secretKey,
                                    mediaConfigController: K,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get fromPromoLanding() {
                                            return !0;
                                        },
                                    },
                                    mediaSourceTtlMs: k.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: k.player.vhMediaProvider,
                            }));
                        }, [H, k.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs, k.player.secretKey, k.player.vhMediaProvider, u, K]),
                        ee = (0, O.useMemo)(() => {
                            if (i7) return i7;
                            let e = u.get(iE.qT),
                                { transport: t, codecs: a } = iI(H);
                            return (i7 = new r8({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: k.player.secretKey,
                                    mediaConfigController: K,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return c.checkExperiment(iT.z.WebNextTracksPreload, 'on');
                                        },
                                    },
                                    mediaSourceTtlMs: k.player.configVariablesMainPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: k.player.vhMediaProvider,
                            }));
                        }, [H, k.player.configVariablesMainPlayback.strmUrlsTtlMs, k.player.secretKey, k.player.vhMediaProvider, u, c, K]),
                        ea = (0, O.useMemo)(() => st || (st = new it({ useExponentVolume: !0 })), []);
                    (0, O.useEffect)(() => {
                        T && ea && (T.createAudioAdvertPlayback({ playbackController: ea }), p.setIsAdvertPlaybackCreated(!0));
                    }, [p, T, ea]);
                    let er = (0, O.useMemo)(() => (sa ? sa : (sa = new ie({ tracksResource: u.get(iE.Oo), clipsResource: u.get(iE.jQ) }))), [u]),
                        ei = (0, O.useMemo)(() => {
                            if (sr) return sr;
                            let e = u.get(iE.Oo),
                                t = u.get(iE._1),
                                a = u.get(iE.ok),
                                r = u.get(iE.qN),
                                i = u.get(iE.tz),
                                s = u.get(iE.O9),
                                n = c.checkExperiment(iT.z.WebNextStoreDeferredVibeFeedbacks, 'on'),
                                o = c.checkExperiment(iT.z.WebNextDeleteDeferredVibeFeedbacksStore, 'on');
                            return (sr = new e5({
                                contextFactoryParams: {
                                    logger: _,
                                    deferredFeedbacksStore: n || o ? new te() : void 0,
                                    variables: {
                                        vibe: {
                                            useWaveQueue: !0,
                                            get multipleSessions() {
                                                return G;
                                            },
                                            get flushDeferredFeedbacksOnContextSwitch() {
                                                return c.checkExperiment(iT.z.WebNextFlushDeferredFeedbacksOnContextSwitch, 'on');
                                            },
                                            get batchFeedbacksOnVibeSettingsChange() {
                                                return c.checkExperiment(iT.z.WebNextBatchFeedbacksOnVibeSettingsChange, 'on');
                                            },
                                            get sendRadioStartedOnVibeSettingsChange() {
                                                return c.checkExperiment(iT.z.WebNextSendRadioStartedOnVibeSettingsChange, 'on');
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return c.checkExperiment(iT.z.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                            get enableStoredDeferredFeedbacks() {
                                                return n;
                                            },
                                            get shouldDeleteDeferredFeedbacksObjectStore() {
                                                return o;
                                            },
                                        },
                                    },
                                    tracksResource: e,
                                    usersResource: t,
                                    rotorResource: a,
                                    playlistResource: r,
                                    albumsResource: i,
                                    artistsResource: s,
                                },
                                entityFactoryParams: { likeStore: h },
                            }));
                        }, [u, c, h, _, G]),
                        es = (0, O.useMemo)(() => si || (si = new tI({ telemetryResource: u.get(iE.LC), ...k.player.telemetry })), [u, k.player.telemetry]),
                        en = (0, O.useMemo)(() => {
                            if (!ee || !ea || !er || !ei) return null;
                            if (i4) return i4;
                            let e = u.get(iE.A4)({ credentials: 'include' }),
                                {
                                    player: { prefixUrl: t, configVariablesMainPlayback: a, configVariablesTrailerPlayback: r },
                                } = k,
                                i = u.get(iE.UB),
                                s = u.get(iE.Tq),
                                o = [new tC(i)];
                            s && o.push(new tT(s));
                            let l = [
                                new tM({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return L;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return !0;
                                        },
                                    },
                                }),
                                new tL(),
                                new tF(),
                                new ab({
                                    httpClient: e,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, ic._)(),
                                                device: (0, ik.V)(),
                                                language: C,
                                                oauth: P.token,
                                                get multiAuthUserId() {
                                                    return u.get(iE.WA).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, M.getTldHost)(t, n, iM.B),
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return c.checkExperiment(iT.z.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        get enableLocalStoredPlaysData() {
                                            return c.checkExperiment(iT.z.WebNextPlayAudioHeartBeat, 'on');
                                        },
                                        get shouldDeletePlaysObjectStore() {
                                            return c.checkExperiment(iT.z.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enableRemoveDuplicatePlays() {
                                            return c.checkExperiment(iT.z.WebNextRemoveDuplicatePlays, 'on');
                                        },
                                        get enableSendFadeFieldsInPlays() {
                                            return c.checkExperiment(iT.z.WebNextEnableSendFadeFieldsInPlays, 'on');
                                        },
                                        get enableSendOriginalContextInVibePlays() {
                                            return c.checkExperiment(iT.z.WebNextEnableSendOriginalContextInVibePlays, 'on');
                                        },
                                    },
                                    isCrossfadeEnabled: K.isCrossfadeEnabled,
                                    store: c.checkExperiment(iT.z.WebNextPlayAudioHeartBeat, 'on') ? new aA() : void 0,
                                }),
                                new aC({ browserName: H.name, browserVersion: H.version }),
                                new aT({ logger: _ }),
                                new ax(K.quality),
                                new aD({
                                    httpClient: e,
                                    streamsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, ic._)(),
                                                device: (0, ik.V)(),
                                                language: C,
                                                oauth: P.token,
                                                get multiAuthUserId() {
                                                    return u.get(iE.WA).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, M.getTldHost)(t, n, iM.B),
                                    },
                                    variables: {
                                        get isEnabled() {
                                            return y.isAuthorized;
                                        },
                                    },
                                }),
                                new aL({
                                    variables: {
                                        get enabled() {
                                            return c.checkExperiment(iT.z.WebNextErrorAutoSkip, 'on');
                                        },
                                    },
                                }),
                                new a9({
                                    mediaConfigController: K,
                                    transports: o,
                                    variables: {
                                        get enableDebugMode() {
                                            return V;
                                        },
                                    },
                                }),
                                new a8({
                                    mediaProvider: ee,
                                    mediaConfigController: K,
                                    config: {
                                        entitiesToPreloadStrmUrlsCount: a.entitiesToPreloadStrmUrlsCount,
                                        entitiesToPreloadSourceCount: a.entitiesToPreloadSourceCount,
                                        preloadedSourcesMaxCount: a.preloadedSourcesMaxCount,
                                        strmUrlsTtlMs: a.strmUrlsTtlMs,
                                        bufferGoal: a.bufferGoal,
                                    },
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return c.checkExperiment(iT.z.WebNextTracksPreload, 'on');
                                        },
                                    },
                                }),
                                new a6({
                                    onTrailerPaused: () => {
                                        v.setIsManuallyPaused(!0);
                                    },
                                    onTrailerPlaying: () => {
                                        v.setIsManuallyPaused(!1);
                                    },
                                    playbackController: ea,
                                    trailerPlaybackParams: {
                                        id: ix.V.TRAILER,
                                        plugins: [
                                            new tg({ useFade: z, useSmartPreview: !0 }),
                                            new tM({
                                                variables: {
                                                    get isAutoflowEnabled() {
                                                        return !1;
                                                    },
                                                    get isVibeRepeatEnabled() {
                                                        return !1;
                                                    },
                                                },
                                            }),
                                            new aT({ logger: _ }),
                                            new tF(),
                                            new a9({
                                                mediaConfigController: K,
                                                transports: o,
                                                variables: {
                                                    get enableDebugMode() {
                                                        return V;
                                                    },
                                                },
                                            }),
                                            new ab({
                                                httpClient: e,
                                                playsResourceConfig: {
                                                    params: {
                                                        common: {
                                                            client: (0, ic._)(),
                                                            device: (0, ik.V)(),
                                                            language: C,
                                                            oauth: P.token,
                                                            get multiAuthUserId() {
                                                                return u.get(iE.WA).getPassportUid();
                                                            },
                                                        },
                                                    },
                                                    prefixUrl: (0, M.getTldHost)(t, n, iM.B),
                                                },
                                                variables: {
                                                    get disableSendPlaysOnTrackStart() {
                                                        return c.checkExperiment(iT.z.WebNextDisableSendPlaysOnTrackStart, 'on');
                                                    },
                                                    get enableLocalStoredPlaysData() {
                                                        return c.checkExperiment(iT.z.WebNextPlayAudioHeartBeat, 'on');
                                                    },
                                                    get shouldDeletePlaysObjectStore() {
                                                        return c.checkExperiment(iT.z.WebNextDeleteIndexedDbPlaysStore, 'on');
                                                    },
                                                },
                                                storePlaysProgressIntervalMs: 5e3,
                                                store: c.checkExperiment(iT.z.WebNextPlayAudioHeartBeat, 'on') ? new aA() : void 0,
                                            }),
                                            new re(),
                                        ],
                                        factory: ei,
                                        entityProvider: er,
                                        playbackConfig: {
                                            mediaElementErrorReloadCount: r.mediaElementErrorReloadCount,
                                            windowSize: r.windowSize,
                                            setupQueueWindowSize: r.setupQueueWindowSize,
                                        },
                                    },
                                }),
                                $,
                                new re(),
                            ];
                            if ((Z && l.push(Z), !N)) {
                                let e = u.get(iE.by);
                                e.updateVariables({ enableDebugMode: W });
                                let t = new rV({
                                        factory: ei,
                                        deviceConfig: e.deviceConfig,
                                        ynisonStateController: e.stateController,
                                        fallbackTypesQueueToVibe: [D.lv.UNSPECIFIED, D.lv.FM_RADIO, D.lv.VIDEO_WAVE, D.lv.LOCAL_TRACKS],
                                        variables: {
                                            get shouldApplyState() {
                                                return d.shouldApplyYnisonState;
                                            },
                                            get enableSendLimitedEntityListToYnison() {
                                                return c.checkExperiment(iT.z.WebNextEnableSendLimitedEntityListToYnison, 'on');
                                            },
                                            useWaveQueue: !0,
                                            get sendCorrectRotorQueueParam() {
                                                return c.checkExperiment(iT.z.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                        },
                                    }),
                                    a = new rK({
                                        deviceConfig: e.deviceConfig,
                                        ynisonStateController: e.stateController,
                                        variables: {
                                            get shouldApplyState() {
                                                return d.shouldApplyYnisonState;
                                            },
                                        },
                                    });
                                l.push(a), l.push(t);
                            }
                            return (
                                l.push(
                                    new rY({
                                        factory: ei,
                                        platform: 'desktop',
                                        variables: {
                                            get enabled() {
                                                return L;
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return c.checkExperiment(iT.z.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                        },
                                    }),
                                ),
                                es &&
                                    l.push(
                                        new rG({
                                            telemetry: es,
                                            get puid() {
                                                return y.puid;
                                            },
                                            yaspVersion: j,
                                            getTelemetryTestIds: x,
                                        }),
                                    ),
                                (i4 = new ia({
                                    factory: ei,
                                    playbackController: ea,
                                    plugins: l,
                                    entityProvider: er,
                                    playbackConfig: {
                                        mediaElementErrorReloadCount: a.mediaElementErrorReloadCount,
                                        windowSize: a.windowSize,
                                        setupQueueWindowSize: a.setupQueueWindowSize,
                                    },
                                    variables: {
                                        get isSkipDebounceEnabled() {
                                            return c.checkExperiment(iT.z.WebNextEnableSkipDebounce, 'on');
                                        },
                                        get enableBurstDebounceDebugLogging() {
                                            return !!B && !!A.get(iO.c.EnableBurstDebounceDebugMode);
                                        },
                                    },
                                }))
                            );
                        }, [
                            ee,
                            ea,
                            er,
                            ei,
                            u,
                            k,
                            C,
                            P.token,
                            n,
                            H.name,
                            H.version,
                            _,
                            K,
                            z,
                            $,
                            Z,
                            N,
                            es,
                            L,
                            c,
                            y.isAuthorized,
                            y.puid,
                            V,
                            W,
                            v,
                            d.shouldApplyYnisonState,
                            j,
                            x,
                            B,
                            A,
                        ]);
                    ((e) => {
                        let { sonataState: t } = (0, ii.g)(),
                            a = (0, O.useCallback)(() => {
                                if (!e) return;
                                let t = e.state.queueState.index.value ?? 0,
                                    a = e.state.queueState.order.value,
                                    r = e.state.queueState.entityList.value,
                                    i = t - 1 >= 0 ? (a?.[t - 1] ?? t - 1) : null,
                                    s = t + 1 < (r?.length ?? 0) ? (a?.[t + 1] ?? t + 1) : null,
                                    n = e.state.queueState.currentEntity.value?.entity,
                                    o = n?.data?.meta,
                                    l = e.state.currentContext.value?.availableActions;
                                window.desktopEvents?.send?.(il.E.PLAYER_STATE, {
                                    status: e.state.playerState.status.value,
                                    isPlaying: 'playing' === e.state.playerState.status.value,
                                    canMoveForward: l?.moveForward?.value,
                                    canMoveBackward: l?.moveBackward?.value,
                                    track: o,
                                    progress: e.state.playerState.progress.value,
                                    availableActions: {
                                        moveBackward: l?.moveBackward?.value,
                                        moveForward: l?.moveForward?.value,
                                        repeat: l?.repeat?.value,
                                        shuffle: l?.shuffle?.value,
                                        speed: l?.speed?.value,
                                    },
                                    actionsStore: {
                                        repeat: e.state.queueState.repeat.value,
                                        shuffle: e.state.queueState.shuffle.value,
                                        isLiked: !!n?.likeStore?.isTrackLiked?.(o?.id),
                                        isDisliked: !!n?.likeStore?.isTrackDisliked?.(o?.id),
                                    },
                                    previousTrack: null == i ? void 0 : r?.[i]?.entity?.data?.meta,
                                    nextTrack: null == s ? void 0 : r?.[s]?.entity?.data?.meta,
                                    volume: e.state.playerState.exponentVolume.value,
                                });
                            }, [e]),
                            r = (0, O.useCallback)(
                                async (r) => {
                                    let i = t.entityMeta;
                                    if (!e || !i) return;
                                    switch (r) {
                                        case 'TOGGLE_LIKE':
                                            await i.toggleLike?.();
                                            break;
                                        case 'LIKE':
                                            i.isLiked || (await i.toggleLike?.());
                                            break;
                                        case 'LIKE_NONE':
                                            i.isLiked && (await i.toggleLike?.());
                                    }
                                    a();
                                },
                                [e, t.entityMeta, a],
                            ),
                            i = (0, O.useCallback)(
                                async (r) => {
                                    let i = t.entityMeta;
                                    if (!e || !i) return;
                                    let s = !1;
                                    switch (r) {
                                        case 'TOGGLE_DISLIKE':
                                            s = !0;
                                            break;
                                        case 'DISLIKE':
                                            s = !i.isDisliked;
                                            break;
                                        case 'DISLIKE_NONE':
                                            s = !!i.isDisliked;
                                    }
                                    s && (await i.toggleDislike?.()),
                                        s && !i.isDisliked && i.id === e.state.queueState.currentEntity.value?.entity?.data?.meta?.id && e.moveForward(),
                                        a();
                                },
                                [e, t.entityMeta, a],
                            ),
                            s = (0, O.useCallback)(
                                (t, n, o, l = 1) => {
                                    if (window.playerActionEventDedupeNonce === l) return;
                                    if (l) window.playerActionEventDedupeNonce = l;
                                    switch (n) {
                                        case 'PLAY':
                                        case 'PAUSE':
                                        case 'TOGGLE_PLAY':
                                            null == e || e.togglePause();
                                            break;
                                        case 'MOVE_BACKWARD':
                                            null == e || e.moveBackward();
                                            break;
                                        case 'MOVE_FORWARD':
                                            null == e || e.moveForward();
                                            break;
                                        case 'REPEAT_NONE':
                                            null == e || e.setRepeatMode('none');
                                            break;
                                        case 'REPEAT_CONTEXT':
                                            null == e || e.setRepeatMode('context');
                                            break;
                                        case 'REPEAT_ONE':
                                            null == e || e.setRepeatMode('one');
                                            break;
                                        case 'TOGGLE_REPEAT': {
                                            let t = 'none';
                                            switch (e?.state?.queueState?.repeat?.value) {
                                                case 'none':
                                                    t = 'vibe' === e?.state?.currentContext?.value?.contextData?.type ? 'one' : 'context';
                                                    break;
                                                case 'context':
                                                    t = 'one';
                                                    break;
                                                case 'one':
                                                default:
                                                    t = 'none';
                                            }
                                            null == e || e.setRepeatMode(t);
                                            break;
                                        }
                                        case 'TOGGLE_SHUFFLE':
                                            null == e || e.toggleShuffle();
                                            break;
                                        case 'TOGGLE_LIKE':
                                        case 'LIKE':
                                        case 'LIKE_NONE':
                                            r(n);
                                            break;
                                        case 'DISLIKE':
                                        case 'DISLIKE_NONE':
                                        case 'TOGGLE_DISLIKE':
                                            i(n);
                                            break;
                                        case 'INCREASE_VOLUME':
                                            null == e || e.increaseExponentVolume(o);
                                            break;
                                        case 'DECREASE_VOLUME':
                                            null == e || e.decreaseExponentVolume(o);
                                            break;
                                        case 'SET_VOLUME':
                                            null == e || e.setExponentVolume(Math.min(Math.max(o, 0), 100));
                                            break;
                                        case 'SET_PROGRESS':
                                            null == e || e.setProgress(Math.max(o, 0));
                                    }
                                },
                                [e, r, i],
                            );
                        (0, O.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(il.E.PLAYER_ACTION, s),
                                () => {
                                    window.desktopEvents?.off?.(il.E.PLAYER_ACTION, s);
                                }
                            );
                        }, [s]),
                            (0, O.useEffect)(() => {
                                window.pulsesyncApi &&
                                    ((window.pulsesyncApi.likeTrack = () => r('LIKE')),
                                    (window.pulsesyncApi.unlikeTrack = () => r('LIKE_NONE')),
                                    (window.pulsesyncApi.dislikeTrack = () => i('DISLIKE')),
                                    (window.pulsesyncApi.undislikeTrack = () => i('DISLIKE_NONE')));
                            }, [r, i]);
                    })(en),
                        ((e) => {
                            let {
                                    mediaProvider: t,
                                    playbackController: a,
                                    factory: r,
                                    entityProvider: i,
                                    mediaConfigController: s,
                                    isEnabled: n,
                                    isMetricsDebugEnabled: o,
                                    hostTld: l,
                                    browserInfo: u,
                                } = e,
                                d = (0, iS.N)(),
                                c = (0, iP.U)(),
                                { experiments: h } = (0, ii.g)(),
                                { language: v } = (0, iA.h)();
                            if (!n || !a || !r || !t || !i || !s || i9) return;
                            let y = d.get(iE.QG),
                                p = d.get(iE.tw),
                                m = d.get(iE.A4)({ credentials: 'include' }),
                                {
                                    player: { configVariablesPromoLandingPlayback: f, prefixUrl: g },
                                } = p,
                                b = d.get(iE.UB),
                                E = d.get(iE.Tq),
                                S = [new tC(b)];
                            E && S.push(new tT(E)),
                                a.createPlayback(ix.V.PROMO_LANDING, {
                                    factory: r,
                                    entityProvider: i,
                                    playbackConfig: {
                                        mediaElementErrorReloadCount: f.mediaElementErrorReloadCount,
                                        windowSize: f.windowSize,
                                        setupQueueWindowSize: f.setupQueueWindowSize,
                                    },
                                });
                            let _ = a.getPlayback(ix.V.PROMO_LANDING);
                            for (let e of [
                                new tM({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return !1;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return !1;
                                        },
                                    },
                                }),
                                new tL(),
                                new tF(),
                                new ab({
                                    httpClient: m,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, ic._)(),
                                                device: (0, ik.V)(),
                                                language: v,
                                                oauth: y.token,
                                                get multiAuthUserId() {
                                                    return d.get(iE.WA).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, M.getTldHost)(g, l, iM.B),
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return h.checkExperiment(iT.z.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        get enableLocalStoredPlaysData() {
                                            return h.checkExperiment(iT.z.WebNextPlayAudioHeartBeat, 'on');
                                        },
                                        get shouldDeletePlaysObjectStore() {
                                            return h.checkExperiment(iT.z.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enablePartialPlayReporting() {
                                            return !0;
                                        },
                                    },
                                    store: h.checkExperiment(iT.z.WebNextPlayAudioHeartBeat, 'on') ? new aA() : void 0,
                                }),
                                new aC({ browserName: u.name, browserVersion: u.version }),
                                new aT({ logger: c }),
                                new a9({
                                    mediaConfigController: s,
                                    transports: S,
                                    variables: {
                                        get enableDebugMode() {
                                            return o;
                                        },
                                    },
                                }),
                                new re(),
                            ])
                                e.apply({ playback: _, hooks: _.hooks });
                            i9 = !0;
                        })({
                            isEnabled: !!l,
                            playbackController: ea,
                            entityProvider: er,
                            factory: ei,
                            mediaConfigController: K,
                            isNonSafariBrowser: z,
                            isMetricsDebugEnabled: V,
                            browserInfo: H,
                            hostTld: n,
                            mediaProvider: J,
                        }),
                        ((e) => {
                            let { sonata: t, isEnabled: a } = e;
                            (0, O.useEffect)(() => {
                                a &&
                                    t &&
                                    ((window.sonataState = t.state),
                                    Object.defineProperty(window, 'sonataPlaybackStates', {
                                        configurable: !0,
                                        enumerable: !0,
                                        get() {
                                            let e = {};
                                            for (let a of t.playbackController.availablePlaybacks) {
                                                let t = a.getId();
                                                i5.has(t) && (e[t] = a.state);
                                            }
                                            return e;
                                        },
                                    }));
                            }, [a, t]);
                        })({ sonata: en, isEnabled: !!q }),
                        (0, O.useEffect)(() => {
                            en &&
                                ee &&
                                J &&
                                es &&
                                !d.areCoresRegistered &&
                                (Promise.all([a.e(9096), a.e(4640)])
                                    .then(a.bind(a, 54640))
                                    .then((e) => {
                                        let { YaspCoreAdapter: t, YaspLoader: a, HlsCoreAdapter: r, HtmlAudioCoreAdapter: i } = e,
                                            s = new a({ logger: _, yaspTelemetry: es, getTelemetryTestIds: x }),
                                            n = z ? new r({ hlsErrorRetryLimit: k.player.hlsErrorRetryLimit }) : new i();
                                        en.registerMediaPlayer({
                                            mediaPlayerParams: { core: n, mediaProvider: ee, mediaPlayerType: 'audioMediaPlayer', contentType: U.e.HLS },
                                        }),
                                            T &&
                                                en.registerMediaPlayer({
                                                    mediaPlayerParams: {
                                                        core: new i(),
                                                        mediaProvider: new iv(),
                                                        mediaPlayerType: 'audioMediaPlayer',
                                                        contentType: U.e.AUDIO,
                                                    },
                                                    playbackId: ix.V.ADVERT,
                                                }),
                                            en.registerMediaPlayer({
                                                mediaPlayerParams: {
                                                    core: new i(),
                                                    mediaProvider: ee,
                                                    mediaPlayerType: 'audioMediaPlayer',
                                                    contentType: U.e.DOWNLOADED_AUDIO,
                                                },
                                            }),
                                            s
                                                .loadYasp({
                                                    version: j,
                                                    sourceLimit: Y,
                                                    retryDelayMs: k.player.yaspLoadRetryDelayMs,
                                                    perfLogUrl: k.player.telemetry.perfLogUrl,
                                                })
                                                .then(() => {
                                                    let e,
                                                        a = s.getYaspAudioElement();
                                                    (e = window.Worker ? new to() : new tn()),
                                                        R
                                                            ? en.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'crossMediaPlayer',
                                                                      mediaProvider: ee,
                                                                      ticker: e,
                                                                      contentType: U.e.AUDIO,
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: es }),
                                                                      additionalCore: new t({ yaspAudioElement: a, yaspTelemetry: es }),
                                                                      config: { useVolumeForAudioEffect: !z },
                                                                      variables: {
                                                                          get enableDebugLogging() {
                                                                              return !!B && !!A.get(iO.c.EnableCrossfadeDebugMode);
                                                                          },
                                                                      },
                                                                      isEnabled: K.isCrossfadeEnabled,
                                                                  },
                                                              })
                                                            : en.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'audioMediaPlayer',
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: es }),
                                                                      mediaProvider: ee,
                                                                      contentType: U.e.AUDIO,
                                                                  },
                                                              }),
                                                        en.registerMediaPlayer({
                                                            mediaPlayerParams: {
                                                                core: new t({ yaspAudioElement: a }),
                                                                mediaProvider: ee,
                                                                mediaPlayerType: 'audioMediaPlayer',
                                                                contentType: U.e.AUDIO,
                                                            },
                                                            playbackId: ix.V.TRAILER,
                                                        }),
                                                        l &&
                                                            J &&
                                                            en.registerMediaPlayer({
                                                                mediaPlayerParams: {
                                                                    core: new t({ yaspAudioElement: a }),
                                                                    mediaProvider: J,
                                                                    mediaPlayerType: 'audioMediaPlayer',
                                                                    contentType: U.e.AUDIO,
                                                                },
                                                                playbackId: ix.V.PROMO_LANDING,
                                                            });
                                                })
                                                .catch((e) => {
                                                    _.error('[SonataProvider] Error trying to register media players', { error: e });
                                                });
                                    }),
                                d.setCoresAsRegistered(!0));
                        }, [
                            T,
                            k.player.hlsErrorRetryLimit,
                            B,
                            j,
                            Y,
                            z,
                            _,
                            ee,
                            J,
                            en,
                            d,
                            l,
                            u,
                            d.areCoresRegistered,
                            A,
                            es,
                            R,
                            x,
                            k.player.yaspSourceLimit,
                            k.player.yaspLoadRetryDelayMs,
                            k.player.telemetry.perfLogUrl,
                            K.isCrossfadeEnabled,
                        ]),
                        (0, O.useEffect)(() => {
                            a.e(5378)
                                .then(a.bind(a, 2997))
                                .then((e) => {
                                    let { loadVHPlayerSdk: t, VHPlayerCoreAdapter: a } = e;
                                    if (!en || !ee || !ea || !er || !ei) return;
                                    let r = new a({ hideAds: !0 }),
                                        { configVariablesMainPlayback: i } = k.player,
                                        s = async () =>
                                            t(k.player.vhPlayerSdkVersion)
                                                .then(() => {
                                                    ea.createPlayback(ix.V.CLIP, {
                                                        mediaPlayerParams: { core: r, mediaProvider: ee, mediaPlayerType: 'videoMediaPlayer', contentType: U.e.CLIP },
                                                        entityProvider: er,
                                                        factory: ei,
                                                        playbackConfig: {
                                                            mediaElementErrorReloadCount: i.mediaElementErrorReloadCount,
                                                            windowSize: i.windowSize,
                                                            setupQueueWindowSize: i.setupQueueWindowSize,
                                                        },
                                                        syncVolumeWithMainPlayback: !0,
                                                    });
                                                    let e = ea.getPlayback(ix.V.CLIP);
                                                    for (let t of [
                                                        new tM({
                                                            variables: {
                                                                get isAutoflowEnabled() {
                                                                    return !1;
                                                                },
                                                                get isVibeRepeatEnabled() {
                                                                    return !1;
                                                                },
                                                            },
                                                        }),
                                                        new tF(),
                                                        $,
                                                    ])
                                                        t.apply({ playback: e, hooks: e.hooks });
                                                    d.setIsVHCoreRegistered(!0);
                                                })
                                                .catch(() => {
                                                    setTimeout(s, 1e3);
                                                });
                                    s();
                                });
                        }, [$, k.player, u, er, ei, ee, ea, en, d, y.hasPlus]),
                        ((e) => {
                            let { sonata: t } = e,
                                a = (0, id.c)((e) => {
                                    var t;
                                    let { isPlaying: a, canMoveBackward: r, canMoveForward: i } = e;
                                    null == (t = window.desktopEvents) ||
                                        t.send(il.E.PLAYER_STATE, {
                                            isPlaying: a,
                                            canMoveBackward: r,
                                            canMoveForward: i,
                                            status: e.status,
                                            track: e.track,
                                            progress: e.progress,
                                            availableActions: e.availableActions,
                                            actionsStore: e.actionsStore,
                                            previousTrack: e.previousTrack,
                                            nextTrack: e.nextTrack,
                                            volume: e.volume,
                                        });
                                }),
                                r = (e) => {
                                    let t = e?.state?.queueState?.index?.value ?? 0,
                                        a = e?.state?.queueState?.order?.value,
                                        r = e?.state?.queueState?.entityList?.value,
                                        i = t - 1 >= 0 ? (a?.[t - 1] ?? t - 1) : null,
                                        s = t + 1 < (r?.length ?? 0) ? (a?.[t + 1] ?? t + 1) : null;
                                    return {
                                        previousTrack: null == i ? void 0 : r?.[i]?.entity?.data?.meta,
                                        nextTrack: null == s ? void 0 : r?.[s]?.entity?.data?.meta,
                                    };
                                },
                                i = (e, t) => {
                                    let { previousTrack: i, nextTrack: s } = r(e),
                                        n = e?.state?.queueState?.currentEntity?.value?.entity,
                                        o = n?.data?.meta,
                                        l = e?.state?.currentContext?.value?.availableActions;
                                    a({
                                        status: t,
                                        isPlaying: t === F.MT.PLAYING,
                                        canMoveForward: l?.moveForward?.value,
                                        canMoveBackward: l?.moveBackward?.value,
                                        track: o,
                                        progress: e?.state?.playerState?.progress?.value,
                                        availableActions: {
                                            moveBackward: l?.moveBackward?.value,
                                            moveForward: l?.moveForward?.value,
                                            repeat: l?.repeat?.value,
                                            shuffle: l?.shuffle?.value,
                                            speed: l?.speed?.value,
                                        },
                                        actionsStore: {
                                            repeat: e?.state?.queueState?.repeat?.value,
                                            shuffle: e?.state?.queueState?.shuffle?.value,
                                            isLiked: !!n?.likeStore?.isTrackLiked?.(o?.id),
                                            isDisliked: !!n?.likeStore?.isTrackDisliked?.(o?.id),
                                        },
                                        previousTrack: i,
                                        nextTrack: s,
                                        volume: e?.state?.playerState?.exponentVolume?.value,
                                    });
                                };
                            (0, O.useEffect)(() => {
                                let e,
                                    r,
                                    s =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.status.onChange((e) => {
                                                  e && i(t, e);
                                              }),
                                    n = t?.state?.queueState?.currentEntity?.onChange((e) => {
                                        e && i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    o = t?.state?.playerState?.event?.onChange(() => {
                                        let e = t?.state?.playerState?.event?.value;
                                        ('SET_PROGRESS' === e || e === F.Iu?.SET_PROGRESS) && i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    l = t?.state?.queueState?.entityList?.onChange(() => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    u = t?.state?.currentContext?.value?.availableActions.repeat?.onChange(() => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    d = t?.state?.currentContext?.value?.availableActions.shuffle?.onChange(() => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    c = t?.state?.queueState?.repeat?.onChange(() => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    h = t?.state?.queueState?.shuffle?.onChange(() => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    v = t?.state?.playerState?.exponentVolume?.onChange(() => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    y = window.desktopEvents?.on?.(il.E.GET_CURRENT_TRACK, () => {
                                        i(t, t?.state?.playerState?.status?.value);
                                    }),
                                    p =
                                        null == t
                                            ? void 0
                                            : t.state.currentContext.onChange(() => {
                                                  var q, z;
                                                  null == e || e(),
                                                      null == r || r(),
                                                      (e =
                                                          null == t || null == (q = t.state.currentContext.value)
                                                              ? void 0
                                                              : q.availableActions.moveBackward.onChange((e) => {
                                                                    i(t, t?.state?.playerState?.status?.value);
                                                                })),
                                                      (r =
                                                          null == t || null == (z = t.state.currentContext.value)
                                                              ? void 0
                                                              : z.availableActions.moveForward.onChange((e) => {
                                                                    i(t, t?.state?.playerState?.status?.value);
                                                                }));
                                              });
                                t && (window.__pulseSyncPendingPlayerInstance = t),
                                    window.pulsesyncApi?.setPlayerInstance?.(t),
                                    i(t, t?.state?.playerState?.status?.value);
                                return () => {
                                    null == s || s(),
                                        null == p || p(),
                                        null == n || n(),
                                        null == y || y(),
                                        null == o || o(),
                                        null == l || l(),
                                        null == u || u(),
                                        null == d || d(),
                                        null == c || c(),
                                        null == h || h(),
                                        null == v || v(),
                                        null == e || e(),
                                        null == r || r();
                                };
                            }, [a, null == t ? void 0 : t.state.currentContext, null == t ? void 0 : t.state.playerState.status]);
                        })({ sonata: en }),
                        ((e) => {
                            let { sonata: t } = e,
                                { sonataState: a } = (0, ii.g)();
                            (0, O.useEffect)(() => {
                                let e =
                                    null == t
                                        ? void 0
                                        : t.state.queueState.currentEntity.onChange((e) => {
                                              if (null == e ? void 0 : e.context.data) {
                                                  if ('filter' in e.context.data) {
                                                      let t = null == e ? void 0 : e.context.data.filter;
                                                      a.setPlaylistFilter(t);
                                                  }
                                                  (null == e ? void 0 : e.context.data.type) === et.K.Vibe && a.setPlaylistFilter(void 0);
                                              }
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [null == t ? void 0 : t.state.queueState.currentEntity, a]);
                        })({ sonata: en }),
                        ((e) => {
                            let { sonata: t, playbackId: a, withStorage: r, sonataState: i } = e,
                                s = (0, iS.N)().get(iE.oo);
                            (0, O.useEffect)(() => {
                                var e;
                                let n, o, l, u, d, c;
                                if (!t) return;
                                let h = s.get(iO.c.YmPlayerVolume);
                                (n = 'number' != typeof h || isNaN(h) ? 1 : h),
                                    t.setExponentVolume(n),
                                    t.setExponentVolume(n, ix.V.TRAILER),
                                    a && t.setExponentVolume(n, a);
                                let v = t.getState(a).queueState.currentEntity.onChange((e) => {
                                        let t = null == e ? void 0 : e.context.data.type,
                                            a = null == e ? void 0 : e.context.data.meta.id,
                                            r = null == e ? void 0 : e.entity;
                                        r && i.setEntityMeta(r), t && i.setContextType(t), a && i.setContextId(a);
                                    }),
                                    y = t.getState(a).playerState.status.onChange((e) => {
                                        e && i.setStatus(e);
                                    }),
                                    p = t.getState(a).currentContext.onChange(() => {
                                        var e, n, h, v, y, p;
                                        if ((null == o || o(), null == l || l(), null == u || u(), null == d || d(), null == c || c(), r)) {
                                            let e = null != (p = s.get(iO.c.YmPlayerRepeatMode)) ? p : i3.pM.NONE;
                                            t.setRepeatMode(e, a);
                                            let r = !!s.get(iO.c.YmPlayerShuffle);
                                            t.setShuffle(r, a);
                                        }
                                        (o =
                                            null == (e = t.getState(a).currentContext.value)
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      i.setCanMoveBackward(!!e);
                                                  })),
                                            (l =
                                                null == (n = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : n.availableActions.moveForward.onChange((e) => {
                                                          i.setCanMoveForward(!!e);
                                                      })),
                                            (u =
                                                null == (h = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : h.availableActions.repeat.onChange((e) => {
                                                          'boolean' == typeof e && i.setCanChangeRepeatMode(e);
                                                      })),
                                            (d =
                                                null == (v = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : v.availableActions.shuffle.onChange((e) => {
                                                          'boolean' == typeof e && i.setCanShuffle(e);
                                                      })),
                                            (c =
                                                null == (y = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : y.availableActions.speed.onChange((e) => {
                                                          'boolean' == typeof e && (i.setCanSpeed(e), e || t.setSpeed(1, a));
                                                      }));
                                    }),
                                    m =
                                        null == (e = t.getState(a).playerState)
                                            ? void 0
                                            : e.progress.onChange((e) => {
                                                  e && (i.setPosition(e.position), i.setDuration(e.duration));
                                              }),
                                    f = t.getState(a).playerState.volume.onChange(() => {
                                        let e = t.getState(a).playerState.exponentVolume.value;
                                        i.setVolume(e), r && s.set(iO.c.YmPlayerVolume, e, { expires: 365 });
                                    }),
                                    g = t.getState(a).queueState.repeat.onChange((e) => {
                                        e && (i.setRepeatMode(e), r && s.set(iO.c.YmPlayerRepeatMode, e, { expires: 365 }));
                                    }),
                                    b = t.getState(a).queueState.shuffle.onChange((e) => {
                                        'boolean' == typeof e && (i.setShuffle(e), r && s.set(iO.c.YmPlayerShuffle, e, { expires: 365 }));
                                    });
                                return () => {
                                    null == v || v(),
                                        null == y || y(),
                                        null == p || p(),
                                        null == f || f(),
                                        null == g || g(),
                                        null == u || u(),
                                        null == d || d(),
                                        null == b || b(),
                                        null == m || m(),
                                        null == o || o(),
                                        null == l || l(),
                                        null == c || c();
                                };
                            }, [a, t, i, s, r]);
                        })({ sonata: en, playbackId: l ? ix.V.PROMO_LANDING : void 0, withStorage: !l, sonataState: l && (null == b ? void 0 : b.state) ? b.state : d });
                    let eo = (0, O.useCallback)(() => {
                        if (!y.isAuthorized || E || Q || X) return aW.e.PREVIEW;
                        if (S) return aW.e.EFFICIENT;
                        let e = A.get(iO.c.YmPlayerQuality);
                        if (e) {
                            if (Object.values(iC).includes(e)) {
                                let t = (function (e) {
                                    switch (e) {
                                        case iC.HQ_PLUS:
                                            return aW.e.HIGH_QUALITY;
                                        case iC.HQ:
                                            return aW.e.BALANCED;
                                        case iC.NQ:
                                        case iC.LQ:
                                            return aW.e.EFFICIENT;
                                        default:
                                            return aW.e.BALANCED;
                                    }
                                })(e);
                                return A.set(iO.c.YmPlayerQuality, t, { expires: 365 }), t;
                            }
                            return e;
                        }
                        return A.set(iO.c.YmPlayerQuality, aW.e.BALANCED, { expires: 365 }), aW.e.BALANCED;
                    }, [A, E, S, y.isAuthorized, Q, X]);
                    return (
                        (0, O.useEffect)(
                            () => (
                                l &&
                                    (null == en || en.stop(),
                                    Object.values(ix.V).forEach((e) => {
                                        e !== ix.V.PROMO_LANDING && (null == en || en.stop(e));
                                    })),
                                () => {
                                    l && (null == en || en.stop(ix.V.PROMO_LANDING));
                                }
                            ),
                            [en, l],
                        ),
                        (0, O.useEffect)(() => {
                            l || (K.setQuality(eo()), d.setQuality(eo()));
                        }, [K, eo, d, l]),
                        (0, O.useEffect)(() => {
                            let e = A.get(iO.c.CrossFadeMode),
                                t = !!R && (null == e || e);
                            A.set(iO.c.CrossFadeMode, t, { expires: 365 }), (K.isCrossfadeEnabled.value = t);
                        }, [K, d, A, R]),
                        (0, O.useEffect)(() => {
                            (0, ir.Bx)(A, ss);
                        }, [A]),
                        (0, w.jsx)(iR.c.Provider, {
                            value: K,
                            children: (0, w.jsxs)(is.G.Provider, {
                                value: en,
                                children: [
                                    (0, w.jsx)(io, {}),
                                    (0, w.jsx)(iG, { isYnisonDisabled: N }),
                                    (0, w.jsx)(iw.W.Provider, { value: Z, children: (0, w.jsxs)(i1, { children: [(0, w.jsx)(iV, {}), s] }) }),
                                ],
                            }),
                        })
                    );
                },
                so = (0, N.PA)((e) => {
                    let { children: t, hostTld: a, quality: r, ...i } = e,
                        s = ig();
                    return (0, w.jsx)(O.Suspense, {
                        fallback: (0, w.jsx)(iL.MainSuspenseLoader, {}),
                        children: (0, w.jsx)(iF, { audioLoader: s, children: (0, w.jsx)(sn, { hostTld: a, quality: r, ...i, children: t }) }),
                    });
                });
        },
        70675: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            let r = 'offline';
        },
        70794: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => u });
            var r = a(55178),
                i = a(57594),
                s = a(39231),
                n = a(80408),
                o = a(71670);
            let l = { INVITE_ID: 'invite_id', UTM_MEDIUM: 'utm_medium' },
                u = () => {
                    let { user: e } = (0, i.g)(),
                        t = (0, o.X)(),
                        { inviteIdSearchParam: a, hasNecessarySearchParams: u } = (0, r.useMemo)(() => {
                            let e = (0, s.q)(l.INVITE_ID),
                                t = !!(e && 'copy_link' === (0, s.q)(l.UTM_MEDIUM));
                            return { inviteIdSearchParam: e, hasNecessarySearchParams: t };
                        }, []),
                        d = (0, r.useCallback)(() => {
                            let e = (0, n.j)();
                            if (null === e) return;
                            e.delete(l.INVITE_ID), e.delete(l.UTM_MEDIUM);
                            let a = new URL(window.location.href);
                            (a.search = e.toString()), t(a.toString());
                        }, [t]);
                    return { inviteId: a, shouldShowFamilyInvite: !!(!e.hasPlus && u), clear: d };
                };
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var r = a(55178);
            let i = () =>
                (0, r.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        72396: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => h });
            var r = a(55178),
                i = a(84782),
                s = a(37240),
                n = a(21916),
                o = a(37862),
                l = a(71483),
                u = a(48922),
                d = a(89083);
            let c = [o.U.TRAILER],
                h = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                a = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: o, pageEntityId: l } = (0, s.$)(),
                                { blockId: u } = (0, i.N)();
                            return (0, r.useMemo)(() => ({ pageId: null != t ? t : o, blockId: null != a ? a : u, pageEntityId: null != n ? n : l }), [a, u, t, n, o, l]);
                        })(e),
                        a = ((e) => {
                            let { pageId: t, blockId: a } = e;
                            return (0, r.useMemo)(() => {
                                let e = ['desktop'];
                                return t && e.push(t.toLowerCase()), a && e.push(a.toLowerCase()), e.push('default'), e.join('-');
                            }, [a, t]);
                        })(t),
                        o = ((e) => {
                            let { pageId: t, blockId: a, pageEntityId: i, contextType: s, contextId: o, utmForPageIds: h } = e,
                                v = (0, n.useSearchParams)();
                            return (0, r.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: a, pageEntityId: r, utmForPageIds: i, contextId: s, contextType: n, blockId: o } = e,
                                            h = t && Object.fromEntries(t),
                                            v = ((e) => {
                                                switch (e) {
                                                    case u._Q.ALBUM:
                                                    case u._Q.PROMOLANDING_ALBUM:
                                                    case u._Q.AUDIOBOOK:
                                                    case u._Q.PODCAST:
                                                        return l.K.Album;
                                                    case u._Q.ARTIST:
                                                    case u._Q.ARTIST_TRACKS:
                                                    case u._Q.ARTIST_ALBUMS:
                                                    case u._Q.ARTIST_DISCOGRAPHY:
                                                        return l.K.Artist;
                                                    case u._Q.PLAYLIST:
                                                        return l.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(a);
                                        return !v || !h || !r || c.includes(o)
                                            ? null
                                            : (Array.isArray(i) ? i.map((e) => String(e)).includes(String(r)) : !!s && v === n && String(s) === String(r)) && h
                                              ? (0, d.Z)(h)
                                              : null;
                                    })({ searchParams: v, pageId: t, pageEntityId: i, utmForPageIds: h, contextId: o, contextType: s, blockId: a }),
                                [v, t, i, o, s, a, h],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, r.useMemo)(() => ({ from: a, utmLink: o || void 0 }), [a, o]);
                };
        },
        73818: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            let r = (0, a(55178).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        74006: (e) => {
            e.exports = {
                root: 'BlockPage_root__crGK_',
                container: 'BlockPage_container__my_l0',
                content: 'BlockPage_content__4nK4D',
                title: 'BlockPage_title__sAejV',
                button: 'BlockPage_button__KoFZX',
                image: 'BlockPage_image__C02Db',
            };
        },
        74196: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => u });
            var r,
                i = a(55178),
                s = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        a.r(t), a.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    4517: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    2865: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = r(a(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: r, ...l } = e,
                                u = (0, s.clsx)(o.default.root, { [o.default.focusable]: a }, t);
                            return (0, n.isValidElement)(r)
                                ? (0, n.cloneElement)(r, { ...l, className: (0, s.clsx)(u, r.props.className) })
                                : (0, i.jsx)('span', { className: u, ...l, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return s[e].call(a.exports, a, a.exports, o), a.exports;
            }
            (o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var l = {};
            (() => {
                Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0);
                var e = o(2865);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var u = l.SROnly;
            l.__esModule;
        },
        74359: (e, t, a) => {
            'use strict';
            a.d(t, { AdvertProvider: () => C });
            var r,
                i = a(32290),
                s = a(96103),
                n = a(55178),
                o = a(72676),
                l = a(2527),
                u = a(91945),
                d = a(41952),
                c = a(29222),
                h = a(56755),
                v = a(46862),
                y = a(23248);
            class p {
                setDefaultState() {
                    (this.isAdvertPlaying.value = !1), (this.afterTrackResponse = null), (this.advertData = null);
                }
                setAudioAdvertState(e, t) {
                    (this.advertData = { type: y.I.AUDIO, data: t }), (this.isAdvertPlaying.value = !0), (this.afterTrackResponse = e);
                }
                setVideoAdvert(e, t) {
                    (this.advertData = { type: y.I.VIDEO, data: t }), (this.isAdvertPlaying.value = !0), (this.afterTrackResponse = e);
                }
                setClickThrough(e) {
                    e && (this.clickThrough = e);
                }
                constructor() {
                    (0, u._)(this, 'isAdvertPlaying', new v.cJ(!1)),
                        (0, u._)(this, 'afterTrackResponse', null),
                        (0, u._)(this, 'advertData', null),
                        (0, u._)(this, 'clickThrough', void 0);
                }
            }
            function m(e, t) {
                let a;
                return ((a = e instanceof c.t ? e : new c.t('Error in '.concat(t, ' advert'), { code: 'E_ADVERT', cause: e })).name = '[Advert] '.concat(a.name)), a;
            }
            class f {
                async loadEntities() {
                    return Promise.resolve([]);
                }
            }
            class g {
                async getContextEntitiesData() {
                    return Promise.resolve([]);
                }
                async loadContextMeta() {
                    return Promise.resolve({ id: '' });
                }
                get isCurrentContext() {
                    return this.isCurrent;
                }
                set isCurrentContext(e) {
                    this.isCurrent = e;
                }
                constructor({ data: e }) {
                    (0, u._)(this, 'data', void 0), (0, u._)(this, 'isCurrent', !1), (this.data = e);
                }
            }
            var b = a(55499);
            !(function (e) {
                (e.CROSSFADE = 'crossfade'), (e.MIX = 'mix'), (e.NONE = 'none');
            })(r || (r = {}));
            class E {
                get isCrossfadeEnabled() {
                    return !1;
                }
                get canBePlayedOnlyWithCrossing() {
                    return !1;
                }
                canBePlayed() {
                    return !0;
                }
                canBeCrossedWith() {
                    return !1;
                }
                getCrossParams() {
                    return null;
                }
                getFadeMode() {
                    return r.NONE;
                }
                constructor(e, t) {
                    (0, u._)(this, 'context', void 0), (0, u._)(this, 'entity', void 0), (0, u._)(this, 'lastChangeMethod', null), (this.context = e), (this.entity = t);
                }
            }
            class S {
                createContext(e) {
                    return new g(e);
                }
                createEntity(e) {
                    return new b.y(e);
                }
                createContextEntityPair(e, t) {
                    return new E(e, t);
                }
            }
            class _ {
                setVideoContentUrl(e) {
                    this.videoContentUrl = e;
                }
                setVideoContentDuration(e) {
                    this.videoContentDuration = e;
                }
                createAudioAdvertPlayback(e) {
                    let { playbackController: t, mediaPlayerParams: a } = e;
                    t.createPlayback(h.V.ADVERT, {
                        mediaPlayerParams: a,
                        factory: this.factory,
                        isBlocking: !0,
                        entityProvider: new f(),
                        playbackConfig: { mediaElementErrorReloadCount: 1, windowSize: 1, setupQueueWindowSize: 1 },
                    }),
                        (this.audioAdvertPlayback = t.getPlayback(h.V.ADVERT)),
                        this.audioAdvertPlayback.state.playerState.event.onChange((e) => {
                            if ((this.audioAdvertResolve && (e === o.Iu.END || e === o.Iu.MEDIA_ELEMENT_ERROR) && this.audioAdvertResolve(), e === o.Iu.END)) {
                                var t;
                                null == (t = this.advertFeedbackCallback) || t.call(this);
                            }
                        });
                }
                init(e) {
                    let t = document.createElement('script');
                    (t.src = 'https://yandex.'.concat(e, '/ads/system/adsdk.js')),
                        document.head.appendChild(t),
                        t.addEventListener('load', () => {
                            let e = window.ya;
                            e.videoAd.loadModule('YaMusicAPI').then((e) => {
                                this.adsdkAudioModule = e;
                            }),
                                e.videoAd.loadModule('AdLoader').then((e) => {
                                    this.adsdkVideoModule = e;
                                });
                        }),
                        this.state.setDefaultState();
                }
                async playAdvert(e) {
                    let { afterTrackResponse: t, advertType: a } = e;
                    return new Promise((e) => {
                        switch (a || (document.hidden ? y.I.AUDIO : y.I.VIDEO)) {
                            case y.I.AUDIO:
                                this.playAudioAdvert(t)
                                    .catch((e) => {
                                        this.logger.warn(m(e, y.I.AUDIO));
                                    })
                                    .finally(() => {
                                        e();
                                    });
                                break;
                            case y.I.VIDEO:
                                this.playVideoAdvert(t)
                                    .catch((e) => {
                                        this.logger.warn(m(e, y.I.VIDEO));
                                    })
                                    .finally(() => {
                                        e();
                                    });
                        }
                    });
                }
                async getAudioAdvert(e) {
                    let { partnerId: t, category: a } = e;
                    return new Promise((e, r) => {
                        this.adsdkAudioModule
                            ? this.adsdkAudioModule
                                  .loadAd({ partnerId: t, category: a })
                                  .then((t) => {
                                      e(t);
                                  })
                                  .catch((t) => {
                                      t && 'NO_AD_SECTION' === t.code && e(null), r(t);
                                  })
                            : r(new c.t('Adsdk script was not inited', { code: 'NO_ADSDK' }));
                    });
                }
                async getVideoAdvertPlayback(e) {
                    let { partnerId: t, category: a, video: r, slot: i, targetRef: s } = e;
                    return new Promise((e, n) => {
                        if (this.adsdkVideoModule) {
                            let o = this.videoContentUrl ? s + this.videoContentUrl : null;
                            this.adsdkVideoModule.AdLoader.create({
                                partnerId: t,
                                category: a,
                                targetRef: s,
                                videoContentUrl: o,
                                videoContentDuration: this.videoContentDuration || 0,
                            })
                                .then((t) => {
                                    t.loadAd()
                                        .then((t) => {
                                            let a = t.createPlaybackController(r, i);
                                            (this.videoAdvertPlaybackController = a), e(a);
                                        })
                                        .catch((t) => {
                                            t instanceof d.d && 'NO_AD_SECTION' === t.code && e(null), n(t);
                                        });
                                })
                                .catch(n);
                        } else n(new c.t('Adsdk script was not inited', { code: 'NO_ADSDK' }));
                    });
                }
                async playVideoAdvert(e) {
                    return new Promise((t, a) => {
                        let r = document.getElementById(this.videoElementId),
                            i = document.getElementById(this.videoSlotId);
                        r && i
                            ? this.getVideoAdvertPlayback({
                                  partnerId: Number(e.ad.adsParams.videoPartnerId),
                                  category: Number(e.ad.adsParams.categoryId),
                                  targetRef: e.ad.adsParams.targetRef,
                                  video: r,
                                  slot: i,
                              })
                                  .then((a) => {
                                      a
                                          ? (a.subscribe('AdStopped', () => {
                                                var e;
                                                this.state.setDefaultState(),
                                                    (this.videoAdvertPlaybackController = null),
                                                    null == (e = this.advertFeedbackCallback) || e.call(this),
                                                    t();
                                            }),
                                            a.subscribe('AdStarted', () => {
                                                let t = a.getCurrentViewerAssets(),
                                                    r = { clickThroughUrl: null == t ? void 0 : t.targetUrl, adTitle: null == t ? void 0 : t.title };
                                                this.state.setVideoAdvert(e, r), this.state.setClickThrough(null == t ? void 0 : t.clickThrough);
                                            }),
                                            a.playAd())
                                          : t();
                                  })
                                  .catch(a)
                            : a(new c.t('Slot or video element for video advert was not found', { code: 'NO_SLOT_OR_VIDEO_ELEMENT' }));
                    });
                }
                async playAudioAdvert(e) {
                    return new Promise((t, a) => {
                        (this.audioAdvertResolve = t),
                            this.getAudioAdvert({ partnerId: Number(e.ad.adsParams.partnerId), category: Number(e.ad.adsParams.categoryId) })
                                .then((r) => {
                                    if (r) {
                                        let t = this.factory.createContext({ data: { type: 'audio-advert-context', meta: { id: '' } } }),
                                            i = { type: 'audio-advert-entity', meta: { id: '', ...r } };
                                        this.audioAdvertPlayback
                                            .playContext({ context: t, entitiesData: [i] })
                                            .then(() => {
                                                this.state.setAudioAdvertState(e, r);
                                            })
                                            .catch(a);
                                    } else t();
                                })
                                .catch(a);
                    });
                }
                pauseVideoAdvert() {
                    var e;
                    null == (e = this.videoAdvertPlaybackController) || e.pauseAd();
                }
                resumeVideoAdvert() {
                    var e;
                    null == (e = this.videoAdvertPlaybackController) || e.resumeAd();
                }
                setAdvertFeedbackCallback(e) {
                    this.advertFeedbackCallback = e;
                }
                constructor(e) {
                    (0, u._)(this, 'adsdkAudioModule', null),
                        (0, u._)(this, 'adsdkVideoModule', null),
                        (0, u._)(this, 'videoSlotId', void 0),
                        (0, u._)(this, 'videoElementId', void 0),
                        (0, u._)(this, 'logger', void 0),
                        (0, u._)(this, 'factory', new S()),
                        (0, u._)(this, 'audioAdvertPlayback', void 0),
                        (0, u._)(this, 'audioAdvertResolve', null),
                        (0, u._)(this, 'state', new p()),
                        (0, u._)(this, 'videoAdvertPlaybackController', null),
                        (0, u._)(this, 'advertFeedbackCallback', null),
                        (0, u._)(this, 'videoContentUrl', null),
                        (0, u._)(this, 'videoContentDuration', null);
                    let { videoSlotId: t, videoElementId: a, logger: r } = e;
                    (this.videoElementId = a), (this.videoSlotId = t), (this.logger = r);
                }
            }
            var A = a(78305),
                P = a(62376),
                k = a(57594);
            let I = null,
                C = (0, s.PA)((e) => {
                    var t, a;
                    let { children: r } = e,
                        { advert: s, user: u, location: d, sonataState: c } = (0, k.g)(),
                        h = (0, P.U)();
                    return (!I &&
                        u.isAuthorized &&
                        ((I = new _({ logger: h, videoSlotId: l.s.SLOT, videoElementId: l.s.VIDEO })).setVideoContentUrl(
                            (null == (a = c.entityMeta) ? void 0 : a.url) || null,
                        ),
                        I.setVideoContentDuration(c.duration)),
                    (0, n.useEffect)(() => {
                        null == I || I.init(d.tld);
                    }, [d.tld]),
                    (0, n.useEffect)(() => {
                        var e;
                        null == I || I.setVideoContentUrl((null == (e = c.entityMeta) ? void 0 : e.url) || null), null == I || I.setVideoContentDuration(c.duration);
                    }, [null == (t = c.entityMeta) ? void 0 : t.url, c.duration]),
                    (0, n.useEffect)(() => {
                        if (!u.isAuthorized) return;
                        let e =
                            null == I
                                ? void 0
                                : I.state.isAdvertPlaying.onChange((e) => {
                                      if ((s.setAdvertShown(e), e)) {
                                          var t, a;
                                          s.setType((null == I || null == (t = I.state.advertData) ? void 0 : t.type) || null),
                                              s.setData((null == I || null == (a = I.state.advertData) ? void 0 : a.data) || null);
                                      } else s.reset();
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [s, u.isAuthorized]),
                    (0, n.useEffect)(() => {
                        let e;
                        if (s.isAdvertPlaybackCreated) {
                            var t;
                            e =
                                null == I || null == (t = I.audioAdvertPlayback)
                                    ? void 0
                                    : t.state.playerState.event.onChange((e) => {
                                          if (s.isAdvertShown) {
                                              if ((e === o.Iu.END && (s.setAdvertShown(!1), null == I || I.state.setDefaultState()), e === o.Iu.PLAYING))
                                                  return void s.setAdvertPlaying(!0);
                                              if (e === o.Iu.END || e === o.Iu.PAUSED) return void s.setAdvertPlaying(!1);
                                          }
                                      });
                        }
                        return () => {
                            null == e || e();
                        };
                    }, [s, s.isAdvertPlaybackCreated]),
                    (0, n.useEffect)(() => {
                        s.isAdvertShown && I && void 0 !== c.volume && I.audioAdvertPlayback.setExponentVolume(c.volume || 0);
                    }, [s.isAdvertShown, c.volume]),
                    (0, n.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    u.isAuthorized)
                        ? (0, i.jsx)(A.p.Provider, { value: I, children: r })
                        : r;
                });
        },
        74523: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            let r = (e, t) => {
                let [a, r] = e.split('?'),
                    i = new URLSearchParams(r || '');
                for (let [e, a] of new URLSearchParams(t).entries()) i.set(e, a);
                let s = i.toString();
                return ''.concat(a).concat(s ? '?'.concat(s) : '');
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s, o: () => i });
            var r = a(14257);
            let i = { [r.S.Dark]: 'ym-dark-theme', [r.S.Light]: 'ym-light-theme' },
                s = (e) => {
                    switch (e) {
                        case r.S.Light:
                        case r.S.Dark:
                            return i[e];
                        default:
                            return '';
                    }
                };
        },
        75369: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            var r = a(3623);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.R.Music;
            }
        },
        75807: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(51607),
                i = a(90369),
                s = a(76232);
            function n(e) {
                let { productQuality: t, entities: a, entity: n } = e,
                    o = !1;
                if ((a && (o = a.some((e) => (0, i.l)(e))), n && (o = (0, i.l)(n)), o)) return r.e.SMART_PREVIEW;
                switch (t) {
                    case s.e.HIGH_QUALITY:
                        return r.e.LOSSLESS;
                    case s.e.BALANCED:
                        return r.e.NQ;
                    case s.e.EFFICIENT:
                        return r.e.LQ;
                    case s.e.PREVIEW:
                        return r.e.PREVIEW;
                    default:
                        return r.e.NQ;
                }
            }
        },
        76202: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockChildUser: () => o });
            var r = a(96103),
                i = a(70204),
                s = a(34186),
                n = a(57594);
            let o = (0, r.PA)(() => {
                let e = (0, s.N)(),
                    { user: t } = (0, n.g)(),
                    a = e.get(i.QG);
                t.isChild && a.redirectToChildPageUrl();
            });
        },
        77156: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var r = a(67893),
                i = a(21263);
            let s = (e, t) => (0, r.A)((0, i.f)(e), (0, i.f)(t));
        },
        77327: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var r = (function (e) {
                return (
                    (e.TRACKS_COUNT = 'tracksCount'),
                    (e.TRACK_DOWNLOAD = 'trackDownload'),
                    (e.TRACK_DELETE = 'trackDelete'),
                    (e.MY_FAVORITES_PLAYLIST_DOWNLOAD = 'myFavoritesPlaylistDownload'),
                    (e.MY_FAVORITES_PLAYLIST_DELETE = 'myFavoritesPlaylistDelete'),
                    e
                );
            })({});
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79490: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var r = a(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Generative;
            }
        },
        79884: (e, t, a) => {
            'use strict';
            a.d(t, { RumScript: () => r }), a(32290);
            let r = (e) => {
                let { nonce: t, requestId: a, assetPrefix: r, rumSettings: i } = e;
                return null;
            };
        },
        80408: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let r = () => new URL(window.location.href).searchParams;
        },
        81933: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => r });
            var r = (function (e) {
                return (
                    (e.KEY_P = 'KeyP'),
                    (e.KEY_F = 'KeyF'),
                    (e.KEY_D = 'KeyD'),
                    (e.KEY_L = 'KeyL'),
                    (e.KEY_J = 'KeyJ'),
                    (e.KEY_K = 'KeyK'),
                    (e.KEY_H = 'KeyH'),
                    (e.KEY_M = 'KeyM'),
                    (e.KEY_N = 'KeyN'),
                    (e.KEY_S = 'KeyS'),
                    (e.KEY_R = 'KeyR'),
                    (e.KEY_W = 'KeyW'),
                    (e.ESC = 'Escape'),
                    (e.SPACE = 'Space'),
                    (e.ARROW_LEFT = 'ArrowLeft'),
                    (e.ARROW_RIGHT = 'ArrowRight'),
                    (e.ARROW_UP = 'ArrowUp'),
                    (e.ARROW_DOWN = 'ArrowDown'),
                    (e.COMMA = 'Comma'),
                    (e.PERIOD = 'Period'),
                    (e.MINUS = 'Minus'),
                    (e.EQUAL = 'Equal'),
                    (e.DIGIT_0 = 'Digit0'),
                    e
                );
            })({});
        },
        82273: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var r = a(80451),
                i = a(57594),
                s = a(19053);
            let n = (e) => {
                let { location: t } = (0, i.g)();
                return (0, r.getTldHost)(e, t.tld, s.B);
            };
        },
        83778: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { h: () => r }),
                (function (e) {
                    (e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE');
                })(r || (r = {}));
        },
        83920: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => i, g: () => s });
            var r = a(55178);
            let i = (0, r.createContext)({
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
                s = () => (0, r.useContext)(i);
        },
        84062: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => n });
            var r = a(21916),
                i = a(91027),
                s = a(36477);
            let n = (e) => {
                let t = (0, r.useRouter)(),
                    { href: a, target: n } = (0, s.u)(e);
                return (0, i.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === n
                            ? ((e) => {
                                  let { target: t, rel: a } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, a);
                              })(a)
                            : t.push(a));
                });
            };
        },
        84199: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s, m: () => i });
            var r = a(55178);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        84782: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var r = a(55178),
                i = a(73818);
            function s() {
                return (0, r.useContext)(i.p);
            }
        },
        87748: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => i });
            var r = a(13598);
            let i = (e) => {
                switch (e) {
                    case 'win32':
                        return r.V.WINDOWS;
                    case 'darwin':
                        return r.V.MACOS;
                    case 'linux':
                        return r.V.LINUX;
                }
                return null;
            };
        },
        88964: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => s });
            var r = a(70204),
                i = a(34186);
            function s() {
                return (0, i.N)().get(r.y$);
            }
        },
        89083: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => i });
            let r = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                i = (e) =>
                    r.reduce((t, a) => {
                        let { queryKey: r, resultKey: i } = a;
                        return 'string' == typeof e[r] && (t[i] = e[r]), t;
                    }, {});
        },
        89337: (e) => {
            e.exports = {
                root: 'ReleaseNotesModal_root__RSw1p',
                modalOverlay: 'ReleaseNotesModal_modalOverlay__GYUgU',
                modalHeader: 'ReleaseNotesModal_modalHeader__gp9SA',
                modalContent: 'ReleaseNotesModal_modalContent__g8OTu',
                scrollableContent: 'ReleaseNotesModal_scrollableContent__zGdbH',
                important: 'ReleaseNotesModal_important__u8yP4',
                notes: 'ReleaseNotesModal_notes__bVAoa',
                date: 'ReleaseNotesModal_date__s3_ux',
                description: 'ReleaseNotesModal_description__B_yLI',
                paragraph: 'ReleaseNotesModal_paragraph___laDJ',
                note: 'ReleaseNotesModal_note__S9E6z',
                version: 'ReleaseNotesModal_version__4Mcd5',
                item: 'ReleaseNotesModal_item___CYml',
                code: 'ReleaseNotesModal_code__Yv3QD',
            };
        },
        90357: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => d });
            var r = a(32290),
                i = a(63618),
                s = a(74196),
                n = a(71926),
                o = a(58534),
                l = a(17679),
                u = a.n(l);
            let d = (e) => {
                let { error: t, closeToast: a, className: l } = e;
                return (0, r.jsx)(o.$, {
                    className: (0, i.$)(u().root, l),
                    message: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, r.jsx)(n.HL, { className: u().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: a,
                });
            };
        },
        90369: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            var r = a(3623);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.R.SmartPreview;
            }
        },
        91030: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => r });
            let r = {
                src: '/_next/static/media/mobile.3fa5bdc0.webp',
                height: 1270,
                width: 750,
                blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoFAAgAAkA4JQBOgCHh3c/IAAD+/eovkSS/bwVeZYW8gP0CqVSvDPwORMoGN02KRYOAAA==',
                blurWidth: 5,
                blurHeight: 8,
            };
        },
        91288: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        92382: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => i });
            var r = a(71483);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Playlist;
            }
        },
        92496: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i, i: () => s });
            var r = a(55178);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        93296: (e, t, a) => {
            'use strict';
            a.d(t, { AnalyticsProvider: () => u });
            var r = a(32290),
                i = a(52068),
                s = a(70204),
                n = a(34186),
                o = a(62376),
                l = a(19379);
            let u = (e) => {
                let { children: t } = e,
                    a = (0, o.U)(),
                    u = (0, n.N)(),
                    d = 'on' === u.get(s.oo).get(l.c.AllowAnalyticsLogs),
                    c = u.get(s.vg);
                return (0, r.jsx)(i.vZ, { metrika: c, allowAnalyticsLogs: d, evgenUserParam: 'evgen', logger: a, children: t });
            };
        },
        96096: (e, t, a) => {
            'use strict';
            a.d(t, { ThemeProvider: () => y });
            var r = a(32290),
                i = a(55178),
                s = a(91027),
                n = a(70204),
                o = a(34186),
                l = a(43352),
                u = a(34291),
                d = a(42040),
                c = a(72733),
                h = a(50),
                v = a(9634);
            let y = (e) => {
                let { children: t, predefinedTheme: a } = e,
                    y = (0, o.N)().get(n.oo),
                    { getThemeFromStorage: p, setThemeToStorage: m } = (0, c.Q)(y),
                    [f, g] = (0, i.useState)(() => (null != a ? a : p())),
                    b = (0, s.c)((e) => {
                        p() || a || (m(u.W), g(e));
                    });
                (0, i.useLayoutEffect)(() => {
                    a || (0, l.Z)(f);
                }, [f, a]),
                    ((e) => {
                        let { onSystemThemeChange: t } = e,
                            a = (0, s.c)(() => {
                                t((0, d.V)());
                            });
                        (0, i.useLayoutEffect)(() => {
                            let e = (0, d.Q)();
                            return (
                                null == e || e.addEventListener('change', a),
                                () => {
                                    null == e || e.removeEventListener('change', a);
                                }
                            );
                        }, [a]);
                    })({ onSystemThemeChange: b }),
                    (0, i.useLayoutEffect)(() => {
                        b((0, d.V)());
                    }, [b]);
                let E = (0, i.useMemo)(() => ({ theme: f, setTheme: g }), [f]);
                return (0, r.jsx)(h.D.Provider, { value: E, children: (0, r.jsx)(i.Suspense, { fallback: (0, r.jsx)(v.MainSuspenseLoader, {}), children: t }) });
            };
        },
        96923: (e, t, a) => {
            'use strict';
            a.d(t, { SettingsInitializer: () => u });
            var r = a(96103),
                i = a(55178),
                s = a(70204),
                n = a(34186),
                o = a(95415),
                l = a(57594);
            let u = (0, r.PA)((e) => {
                let { browserInfo: t } = e,
                    a = (0, n.N)(),
                    { settings: r } = (0, l.g)(),
                    u = (0, o.u)(),
                    d = a.get(s.vg);
                r.setBrowserInfo(t),
                    u && r.setPlatform(u),
                    (0, i.useLayoutEffect)(() => {
                        r.initializeLiteVersionMode(), r.initializeCustomPlayerThumb();
                    }, []),
                    (0, i.useEffect)(() => {
                        r.liteVersionMode && d.count(r.liteVersionMode, 'liteVersionMode');
                    }, [d, r.liteVersionMode]);
            });
        },
        97201: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
            var r = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
        98480: (e, t, a) => {
            'use strict';
            a.d(t, { CrackdownInitializer: () => c });
            var r = a(96103),
                i = a(7697),
                s = a(57594),
                n = a(79406),
                o = a(55178),
                l = a(91027),
                u = a(72676),
                d = a(44128);
            let c = (0, r.PA)(() => {
                var e;
                let {
                        user: t,
                        modals: { crackdownModal: a },
                        settings: { isMobile: r },
                        experiments: c,
                        sonataState: h,
                        desktopPaywall: v,
                    } = (0, s.g)(),
                    { isFreemium: y } = (0, i.X)();
                ((e) => {
                    let { isEnabled: t, intervalMs: a, modal: r, playbackId: i, sonataState: s, isPaywallOpen: n } = e,
                        c = (0, o.useRef)(new Date()),
                        h = (0, d.e)(),
                        v = (0, l.c)(() => {
                            c.current = new Date();
                        }),
                        y = (0, l.c)(() => {
                            c.current.getTime() < Date.now() - (null != a ? a : 18e5) && !n && (r.open(), v());
                        });
                    (0, o.useEffect)(() => {
                        if (!t) return;
                        let e =
                            null == h
                                ? void 0
                                : h.getState(i).playerState.status.onChange((e) => {
                                      e === u.MT.ENDED && y();
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [t, h, y, i]),
                        (0, o.useEffect)(() => {
                            t && r.isOpened && (null == h || h.pause(i));
                        }, [t, r.isOpened, h, s.status, i]),
                        (0, o.useEffect)(() => {
                            if (!t) return;
                            let e = new AbortController();
                            return (
                                window.addEventListener('mousemove', v, { signal: e.signal }),
                                window.addEventListener('keydown', v, { signal: e.signal }),
                                window.addEventListener('touchstart', v, { signal: e.signal }),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [t, v]);
                })({
                    isEnabled: t.isAuthorized && y && !r,
                    intervalMs: ((e) => {
                        if ('number' == typeof e && !Number.isNaN(e)) return e;
                        if ('string' == typeof e) {
                            let t = Number.parseInt(e, 10);
                            if (!Number.isNaN(t)) return t;
                        }
                    })(null == (e = c.getExperiment(n.z.WebNextCrackdownInterval)) ? void 0 : e.value.interval),
                    modal: a,
                    sonataState: h,
                    isPaywallOpen: v.isPaywallOpen,
                });
            });
        },
        98588: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => o });
            var r = a(95415),
                i = a(87748),
                s = a(13598);
            let n = { WINDOWS: '95673843', MACOS: '95673848', LINUX: '98548790', WEB: '95673834' },
                o = () => {
                    switch ((0, i.t)((0, r.u)())) {
                        case s.V.WINDOWS:
                            return n.WINDOWS;
                        case s.V.MACOS:
                            return n.MACOS;
                        case s.V.LINUX:
                            return n.LINUX;
                    }
                    return n.WEB;
                };
        },
    },
    (e) => {
        e.O(
            0,
            [
                8153, 7182, 2497, 8420, 7034, 4755, 6639, 5718, 6706, 1311, 1588, 8892, 2536, 66, 5835, 2812, 8035, 551, 1410, 6252, 1330, 9736, 1693, 6477, 7275, 2586,
                8347, 4522, 7702, 6874, 861, 9740, 4638, 1647, 4547, 5774, 1272, 6966, 5283, 9385, 627, 4220, 9562, 7358,
            ],
            () => e((e.s = 22692)),
        ),
            (_N_E = e.O());
    },
]);
