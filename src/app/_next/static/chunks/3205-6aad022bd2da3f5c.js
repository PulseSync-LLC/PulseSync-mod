(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3205],
    {
        5594: (e, t, a) => {
            'use strict';
            a.d(t, { WithDownloadMobileAppModal: () => n });
            var s = a(28303),
                o = a(61910),
                l = a(83252);
            let n = (0, s.PA)((e) => {
                let { children: t } = e,
                    { downloadMobileApp: a } = (0, l.Pjs)();
                return (
                    (0, o.useEffect)(() => {
                        a.shouldShow() && a.openModal();
                    }, [a]),
                    t
                );
            });
        },
        6438: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        15778: (e, t, a) => {
            'use strict';
            a.d(t, { useRefreshTracksAvailability: () => l });
            var s = a(61910),
                o = a(83252);
            let l = () => {
                let e = (0, o.jRO)(),
                    t = (0, s.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksAvailability().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(o.EE.TRACKS_AVAILABILITY_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(o.EE.REFRESH_TRACKS_AVAILABILITY, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(o.EE.REFRESH_TRACKS_AVAILABILITY, t);
                        }
                    );
                }, [t]);
            };
        },
        15855: (e, t, a) => {
            'use strict';
            a.d(t, { useProbabilityBucket: () => l });
            var s = a(61910),
                o = a(83252);
            let l = () => {
                let e = (0, o.NFA)().get(o.vgk),
                    t = (0, s.useCallback)(
                        (t, a) => {
                            a && e.count(a, 'probabilityBucket');
                        },
                        [e],
                    );
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(o.EE.PROBABILITY_BUCKET, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(o.EE.PROBABILITY_BUCKET, t);
                        }
                    );
                }, [t]);
            };
        },
        19781: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => p });
            var s = a(54486),
                o = a(28303),
                l = a(97396),
                n = a(50420),
                r = a(47713),
                i = a(97800),
                d = a(80585),
                c = a(6438),
                u = a.n(c);
            let _ = (0, o.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(i.Heading, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(i.Caption, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(d.Hi, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var h = a(83252);
            let p = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: o } = (0, h.Pjs)();
                return o.isAuthorized ? t : (a && (0, l.redirect)(h.Zyd.main.href), (0, s.jsx)(_, {}));
            });
        },
        22329: (e, t, a) => {
            'use strict';
            a.d(t, { WithBetaUser: () => g });
            var s = a(54486),
                o = a(28303),
                l = a(50420),
                n = a(61910),
                r = a(47713),
                i = a(31500),
                d = a(77881),
                c = a(14342),
                u = a(39610),
                _ = a(97800),
                h = a(68317),
                p = a(49320),
                m = a(83252),
                v = a(80585),
                x = a(96034),
                C = a.n(x);
            let A = (0, o.PA)((e) => {
                    let { withoutExperiment: t = !1, showLoginButton: o = !1, showUserProfile: x = !1, withOffer: A = !1 } = e,
                        g = (0, m.NFA)(),
                        {
                            settings: { isMobile: E },
                        } = (0, m.Pjs)(),
                        w = (0, m.jjz)(),
                        N = g.get(m.twC),
                        f = (0, m._lF)(N.oldWebHost),
                        k = (0, n.useMemo)(() => (E ? a(66130).A.src : a(75806).A.src), [E]),
                        b = (0, n.useCallback)(() => {
                            let e = 'https://'.concat(f, '/pay');
                            window.open(e, '_blank', 'noreferrer noopener');
                        }, [f]);
                    (0, m.Jzs)(!0);
                    let j = (0, n.useMemo)(
                            () =>
                                A
                                    ? (0, s.jsx)(_.Heading, {
                                          variant: 'h1',
                                          size: 'xl',
                                          weight: 'bold',
                                          className: C().text,
                                          children: (0, s.jsx)(r.A, { id: 'welcome-page.offer-header' }),
                                      })
                                    : t
                                      ? (0, s.jsx)(_.Heading, {
                                            variant: 'h1',
                                            size: 'xxl',
                                            weight: 'bold',
                                            className: C().text,
                                            children: (0, s.jsx)(r.A, { id: 'welcome-page.beta-header', values: { br: (0, s.jsx)('br', {}) } }),
                                        })
                                      : (0, s.jsx)(_.Heading, {
                                            variant: 'h1',
                                            size: 'xxl',
                                            weight: 'bold',
                                            className: C().text,
                                            children: (0, s.jsx)(r.A, { id: 'welcome-page.not-auth-header', values: { br: (0, s.jsx)('br', {}) } }),
                                        }),
                            [A, t],
                        ),
                        P = (0, n.useMemo)(
                            () =>
                                t
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(_.Caption, {
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'l',
                                                  className: C().text,
                                                  children: (0, s.jsx)(r.A, { id: 'welcome-page.beta-text-short' }),
                                              }),
                                              (0, s.jsx)(u.q, {
                                                  children: (0, s.jsx)(_.Heading, { variant: 'h2', children: (0, s.jsx)(r.A, { id: 'welcome-page.beta-text-short' }) }),
                                              }),
                                          ],
                                      })
                                    : A
                                      ? (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    className: C().offerText,
                                                    children: (0, s.jsx)(r.A, { id: 'welcome-page.offer-text' }),
                                                }),
                                                (0, s.jsx)(u.q, {
                                                    children: (0, s.jsx)(_.Heading, { variant: 'h2', children: (0, s.jsx)(r.A, { id: 'welcome-page.offer-text' }) }),
                                                }),
                                            ],
                                        })
                                      : (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    className: C().text,
                                                    children: (0, s.jsx)(r.A, { id: 'welcome-page.not-auth-text', values: { br: (0, s.jsx)('br', {}) } }),
                                                }),
                                                (0, s.jsx)(u.q, {
                                                    children: (0, s.jsx)(_.Heading, {
                                                        variant: 'h2',
                                                        children: (0, s.jsx)(r.A, { id: 'welcome-page.not-auth-text', values: { br: (0, s.jsx)('br', {}) } }),
                                                    }),
                                                }),
                                            ],
                                        }),
                            [A, t],
                        ),
                        R = (0, n.useMemo)(
                            () =>
                                o
                                    ? (0, s.jsx)(v.Hi, { size: 'm', className: C().loginButton })
                                    : A
                                      ? (0, s.jsx)(d.$, {
                                            onClick: b,
                                            className: (0, l.$)(C().offerButton, C().offerButton_important),
                                            role: 'link',
                                            color: 'plus',
                                            size: 'l',
                                            radius: 'm',
                                            withRipple: !1,
                                            children: (0, s.jsx)(r.A, { id: 'payment.offer-button' }),
                                        })
                                      : void 0,
                            [b, o, A],
                        );
                    return (
                        (0, m.NBO)(!0),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(C().root),
                            ...(0, i.Am)(i.Xk.welcome.WELCOME_PAGE),
                            children: [
                                (0, s.jsx)(h.cq, { withSecondaryColor: !0 }),
                                (0, s.jsx)('div', { className: C().logoContainer, children: (0, s.jsx)(c.gu, { alignIcon: 'center', lang: w, className: C().logo }) }),
                                j,
                                P,
                                R,
                                (0, s.jsx)('img', { className: C().image, src: k }),
                                x &&
                                    (0, s.jsx)(p.YS, {
                                        className: C().user,
                                        withMeta: !E,
                                        variant: E ? 'mobile' : 'desktop',
                                        usernameClassName: (0, l.$)(C().username, C().important),
                                    }),
                            ],
                        })
                    );
                }),
                g = (0, o.PA)((e) => {
                    let { children: t } = e,
                        { user: a, experiments: o } = (0, m.Pjs)(),
                        { hasFreeUserAccess: l } = (0, m.XCI)();
                    if ((a.isAuthorized, a.isAuthorized))
                        return o.checkExperiment(m.zal.WebNext, 'on')
                            ? a.hasPlus || l
                                ? t
                                : (0, s.jsx)(A, { withOffer: !0, showUserProfile: !0 })
                            : (0, s.jsx)(A, { withoutExperiment: !0, showUserProfile: !0 });
                    return (0, s.jsx)(A, { showLoginButton: !0 });
                });
        },
        24783: (e, t, a) => {
            'use strict';
            a.d(t, { LO: () => l, N5: () => n, toggleMiniPlayer: () => r, vZ: () => o });
            var s = a(83252);
            let o = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_MINIMIZE);
                },
                l = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_MAXIMIZE);
                },
                n = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_CLOSE);
                },
                r = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.TOGGLE_MINIPLAYER);
                };
        },
        45631: (e) => {
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
        46215: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        47770: (e, t, a) => {
            'use strict';
            a.d(t, { useApplicationUpdate: () => p });
            var s = a(54486),
                o = a(61910),
                l = a(43426),
                n = a(83252),
                r = a(50420),
                i = a(77881),
                d = a(97800),
                c = a(80585),
                u = a(79413),
                _ = a.n(u);
            let h = (e) => {
                    let { version: t, formatMessage: a, closeToast: l } = e,
                        u = (0, o.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.INSTALL_UPDATE), null == l || l();
                        }, [l]),
                        h = (0, o.useMemo)(
                            () =>
                                (0, s.jsxs)('div', {
                                    className: _().message,
                                    children: [
                                        (0, s.jsx)(d.Caption, {
                                            className: _().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-update-available' }, { version: t }),
                                        }),
                                        (0, s.jsx)(i.$, {
                                            className: _().button,
                                            onClick: u,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(d.Caption, { variant: 'div', type: 'controls', size: 'm', children: a({ id: 'desktop.update' }) }),
                                        }),
                                    ],
                                }),
                            [a, u, t],
                        );
                    return (0, s.jsx)(c.$W, { className: (0, r.$)(_().root, _().important), message: h });
                },
                modUpdateToast = (e) => {
                    let { version: t, formatMessage: a, closeToast: l } = e,
                        [u, p] = (0, o.useState)(-1),
                        h = (0, o.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.INSTALL_MOD_UPDATE), null == l || l();
                        }, [l]),
                        m = (0, o.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        b = (e) => {
                            let t = a({ id: 'offline.download' });
                            return e < 0 ? (t = a({ id: 'offline.download' })) : e >= 0 && e <= 100 ? (t = 'Скачивание…') : e > 100 && (t = 'Установить'), t;
                        },
                        P = (0, o.useMemo)(
                            () =>
                                (0, s.jsxs)('div', {
                                    className: _().message,
                                    children: [
                                        (0, s.jsx)(d.Caption, {
                                            className: _().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-mod-update-available' }, { version: t }),
                                        }),
                                        (0, s.jsx)(i.$, {
                                            className: _().button,
                                            onClick: u <= 100 ? m : h,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: u <= 100 && u >= 0,
                                            children: (0, s.jsx)(d.Caption, { variant: 'div', type: 'controls', size: 'm', children: b(u) }),
                                        }),
                                    ],
                                }),
                            [a, h, t, u, m],
                        ),
                        C = (0, o.useCallback)((e, t, a, s = 0) => {
                            if ('modUpdateToast' !== t) return;
                            if (window.dedupeNonces && window.dedupeNonces[t] === s) return;
                            window.dedupeNonces || (window.dedupeNonces = {}), s && (window.dedupeNonces[t] = s), p(a);
                        }, []);
                    return (
                        (0, o.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(n.EE.PROGRESS_BAR_CHANGE, C),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(n.EE.PROGRESS_BAR_CHANGE, C);
                                }
                            );
                        }, [C]),
                        (0, o.useEffect)(() => {
                            let e = () => {
                                null == l || l();
                            };
                            return (
                                window.desktopEvents?.on(n.EE.MOD_UPDATE_AVAILABLE, e),
                                () => {
                                    window.desktopEvents?.off?.(n.EE.MOD_UPDATE_AVAILABLE, e);
                                }
                            );
                        }, [l]),
                        (0, s.jsxs)(c.$W, {
                            className: (0, r.$)(_().root, _().important),
                            message: P,
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: u + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: u <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                toastWithProgress = (e) => {
                    let { closeToast: t, toastID: a, message: l, buttonLabel: u, onButtonClick: p, disabled: h = !1, dismissOnButtonClick: m = !1 } = e,
                        [b, P] = (0, o.useState)(-1),
                        [C, A] = (0, o.useState)('Ожидание...'),
                        y = '__pulseToastProgressCache',
                        g = (0, o.useCallback)(() => {
                            null == p || p(), m && (null == t || t());
                        }, [m, p, t]),
                        E = (0, o.useMemo)(
                            () =>
                                (0, s.jsxs)('div', {
                                    className: _().message,
                                    children: [
                                        (0, s.jsx)(d.Caption, {
                                            className: _().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: l.replace('#s', C),
                                        }),
                                        u &&
                                            (0, s.jsx)(i.$, {
                                                className: _().button,
                                                onClick: g,
                                                variant: 'default',
                                                color: 'secondary',
                                                size: 'xs',
                                                radius: 'xxxl',
                                                disabled: h,
                                                children: (0, s.jsx)(d.Caption, { variant: 'div', type: 'controls', size: 'm', children: u }),
                                            }),
                                    ],
                                }),
                            [h, u, l, g, C],
                        ),
                        N = (0, o.useCallback)(
                            (e, t, l, s = 0, o = void 0) => {
                                if (t !== a) return;
                                if (window.dedupeNonces && window.dedupeNonces[t] === s) return;
                                window.dedupeNonces || (window.dedupeNonces = {}),
                                    s && (window.dedupeNonces[t] = s),
                                    window[y] || (window[y] = {}),
                                    (window[y][t] = { progress: l, label: o }),
                                    P(l),
                                    o && A(o);
                            },
                            [a],
                        ),
                        f = (0, o.useCallback)(
                            (e, l, s = 0) => {
                                if (window['onBasicToastDismiss' + a] === s) return;
                                s && (window['onBasicToastDismiss' + a] = s),
                                    l === a && (window[y] && delete window[y][a], null == t || t());
                            },
                            [t, a],
                        );
                    return (
                        (0, o.useEffect)(() => {
                            let e = window[y] && window[y][a];
                            e && (P(e.progress), e.label && A(e.label));
                            return () => {
                                window[y] && delete window[y][a];
                            };
                        }, [a]),
                        (0, o.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(n.EE.PROGRESS_BAR_CHANGE, N),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(n.EE.PROGRESS_BAR_CHANGE, N);
                                }
                            );
                        }, [N]),
                        (0, o.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(n.EE.BASIC_TOAST_DISMISS, f),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(n.EE.BASIC_TOAST_DISMISS, f);
                                }
                            );
                        }, [f]),
                        (0, s.jsxs)(c.$W, {
                            className: (0, r.$)(_().root, _().important),
                            message: E,
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: b + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: b <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                p = () => {
                    let { formatMessage: e } = (0, l.A)(),
                        { notify: t } = (0, n.lkh)(),
                        { notify: modUpdateNotify, dismiss: modUpdateDismiss } = (0, n.lkh)(),
                        { notify: gpuStallNotify } = (0, n.lkh)(),
                        { notify: appStallNotify } = (0, n.lkh)(),
                        { notify: basicToastNotify } = (0, n.lkh)(),
                        a = (0, o.useRef)(''),
                        r = (0, o.useCallback)(
                            (o, l) => {
                                a.current !== l && ((a.current = l), t((0, s.jsx)(h, { formatMessage: e, version: l }), { containerId: n.uQT.IMPORTANT }));
                            },
                            [e, a, t],
                        ),
                        w = (0, o.useCallback)(
                            (t, o, r, l = 0) => {
                                if (window.modUpdateAvailableEventDedupeNonce === l) return;
                                l && (window.modUpdateAvailableEventDedupeNonce = l),
                                    modUpdateNotify((0, s.jsx)(modUpdateToast, { formatMessage: e, version: `${o} -> ${r}`, closeToast: modUpdateDismiss }), {
                                        containerId: n.uQT.IMPORTANT,
                                    });
                            },
                            [e, modUpdateNotify, modUpdateDismiss],
                        ),
                        N = (0, o.useCallback)(() => {
                            window.desktopEvents?.send(n.EE.APPLICATION_RESTART);
                        }, []),
                        f = (0, o.useCallback)(
                            (e, t = 'GPU_STALL', a = 0) => {
                                if (window.onGPUStallEventDedupeNonce === a) return;
                                a && (window.onGPUStallEventDedupeNonce = a),
                                    gpuStallNotify(
                                        (0, s.jsx)(toastWithProgress, {
                                            toastID: 'GPU_STALL',
                                            message: `Аппаратное ускорение отключилось: ${t}`,
                                            buttonLabel: 'Исправить',
                                            onButtonClick: N,
                                        }),
                                        { containerId: n.uQT.IMPORTANT },
                                    );
                            },
                            [gpuStallNotify, N],
                        ),
                        k = (0, o.useCallback)(() => {
                            window.desktopEvents?.send(n.EE.APP_STALL_CANCEL_RESTART);
                        }, []),
                        b = (0, o.useCallback)(
                            (e, t = 0) => {
                                if (window.onAppStallStallDedupeNonce === t) return;
                                t && (window.onAppStallStallDedupeNonce = t),
                                    appStallNotify(
                                        (0, s.jsx)(toastWithProgress, {
                                            toastID: 'safeModeRestart',
                                            message: 'Плеер запускается слишком долго. Перезагрузка в безопасном режиме через #s',
                                            buttonLabel: 'Отменить',
                                            onButtonClick: k,
                                            dismissOnButtonClick: !0,
                                        }),
                                        { containerId: n.uQT.IMPORTANT },
                                    );
                            },
                            [appStallNotify, k],
                        ),
                        P = (0, o.useCallback)(
                            (e, t, a, o, r = 0) => {
                                if (window['onBasicToastCreate' + t] === r) return;
                                r && (window['onBasicToastCreate' + t] = r),
                                    basicToastNotify(
                                        (0, s.jsx)(toastWithProgress, {
                                            toastID: t,
                                            message: a,
                                            buttonLabel: o || void 0,
                                            dismissOnButtonClick: !!o,
                                        }),
                                        { containerId: n.uQT.IMPORTANT },
                                    );
                            },
                            [basicToastNotify],
                        );
                    (0, o.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.UPDATE_AVAILABLE, r),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.UPDATE_AVAILABLE, r);
                            }
                        );
                    }, [r]);
                    (0, o.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.BASIC_TOAST_CREATE, P),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.BASIC_TOAST_CREATE, P);
                            }
                        );
                    }, [P]);
                    (0, o.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.MOD_UPDATE_AVAILABLE, w),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.MOD_UPDATE_AVAILABLE, w);
                            }
                        );
                    }, [w]);
                    (0, o.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.GPU_STALL, f),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.GPU_STALL, f);
                            }
                        );
                    }, [f]);
                    (0, o.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.APP_STALL, b),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.APP_STALL, b);
                            }
                        );
                    }, [b]);
                };
        },
        49475: (e) => {
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
        53376: (e, t, a) => {
            'use strict';
            a.d(t, { WithMobilePaywall: () => d });
            var s = a(54486),
                o = a(28303),
                l = a(58387),
                n = a(83252),
                r = a(70470),
                i = a.n(r);
            let d = (0, o.PA)((e) => {
                var t;
                let { children: a } = e,
                    { user: o, settings: r } = (0, n.Pjs)(),
                    { isFreemium: d } = (0, n.XCI)(),
                    { setPaywallRef: c } = (0, n.gKY)();
                return (null == (t = r.browserInfo) ? void 0 : t.isTouch) && (!o.isAuthorized || d)
                    ? (0, s.jsx)('div', { ref: c, className: i().paywallContainer, children: (0, s.jsx)(l.pU, { useOverlayScroll: !1 }) })
                    : a;
            });
        },
        53466: (e, t, a) => {
            'use strict';
            a.d(t, { useReleaseNotes: () => l });
            var s = a(61910),
                o = a(83252);
            let l = () => {
                let [e, t] = (0, s.useState)(!1),
                    {
                        releaseNotes: { setTranslationsReleaseNotes: a, isReady: l, modal: n, setSortedDescReleaseNotesKeys: r },
                    } = (0, o.Pjs)(),
                    i = (0, s.useCallback)(
                        (e, s) => {
                            let { needToShowReleaseNotes: o, sortedDescReleaseNotesKeys: l, translationsReleaseNotes: n } = s;
                            a(n), r(l), o && t(!0);
                        },
                        [r, a],
                    );
                (0, s.useEffect)(() => {
                    e && l && (n.open(), t(!1));
                }, [l, n, e]),
                    (0, s.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(o.EE.LOAD_RELEASE_NOTES, i),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(o.EE.LOAD_RELEASE_NOTES, i);
                            }
                        );
                    }, [i]);
            };
        },
        61337: (e, t, a) => {
            'use strict';
            a.d(t, { useRefreshApplicationData: () => n });
            var s = a(61910),
                o = a(6024),
                l = a(83252);
            let n = () => {
                let { library: e, collection: t, experiments: a, main: n, user: r } = (0, l.Pjs)(),
                    i = (0, s.useCallback)(() => {
                        a.getData(),
                            e.getData(),
                            n.landing.isLoaded && n.landing.getSkeleton({ id: o.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }),
                            t.landing.isLoaded && t.landing.getSkeleton({ id: o.p.WEB_COLLECTION, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                    }, [t.landing, a, e, n.landing, r.settings.showWizard]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.REFRESH_APPLICATION_DATA, i),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.REFRESH_APPLICATION_DATA, i);
                        }
                    );
                }, [i]);
            };
        },
        65034: (e, t, a) => {
            'use strict';
            a.d(t, { NotFound: () => m });
            var s = a(54486),
                o = a(50420),
                l = a(28303),
                n = a(47713),
                r = a(77881),
                i = a(5956),
                d = a(97800),
                c = a(83252),
                u = a(80585),
                _ = a(61910),
                h = a(46215),
                p = a.n(h);
            let m = (0, l.PA)((e) => {
                let { className: t, title: a, description: l, iconVariant: h = 'musicLogo', iconClassName: m, iconSize: v } = e,
                    { contentRef: x } = (0, c.gKY)(),
                    C = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: A } = (0, c.D5F)(C);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, c.Pjs)();
                        (0, _.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, o.$)(p().root, { [p().root_desktop]: !x }, t),
                        children: [
                            (0, s.jsx)(u.Lh, { withBackwardFallback: '/', className: p().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: p().content,
                                children: [
                                    (0, s.jsx)(i.Icon, { className: (0, o.$)(p().icon, m), variant: h, size: v }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, o.$)(p().title, p().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: a || (0, s.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, o.$)(p().text, p().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: l || (0, s.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(r.$, {
                                        onClick: A,
                                        className: p().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(n.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        66130: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            let s = {
                src: '/_next/static/media/mobile.3fa5bdc0.webp',
                height: 1270,
                width: 750,
                blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoFAAgAAkA4JQBOgCHh3c/IAAD+/eovkSS/bwVeZYW8gP0CqVSvDPwORMoGN02KRYOAAA==',
                blurWidth: 5,
                blurHeight: 8,
            };
        },
        66164: (e, t, a) => {
            'use strict';
            a.d(t, { useRefreshRepositoryMeta: () => l });
            var s = a(61910),
                o = a(83252);
            let l = () => {
                let e = (0, o.jRO)(),
                    t = (0, s.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksMeta().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(o.EE.REPOSITORY_META_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(o.EE.REFRESH_REPOSITORY_META, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(o.EE.REFRESH_REPOSITORY_META, t);
                        }
                    );
                }, [t]);
            };
        },
        68317: (e, t, a) => {
            'use strict';
            a.d(t, {
                qw: () => E.ReleaseNotesModal,
                _o: () => g,
                cq: () => w.TitleBar,
                CA: () => s,
                M4: () => l,
                _E: () => n,
                LD: () => r.useApplicationDeeplinks,
                P4: () => i.useApplicationUpdate,
                Fn: () => d.useLaunch,
                H: () => c.usePlayerAction,
                t4: () => u.useProbabilityBucket,
                bk: () => _.useRefreshApplicationData,
                eP: () => h.useRefreshRepositoryMeta,
                sb: () => p.useRefreshTracksAvailability,
                sq: () => m.useReleaseNotes,
                OM: () => v.useSendPlayerState,
                sendDownloadTrack: () => sendDownloadTrack,
                sendDownloadCurrentTrack: () => sendDownloadCurrentTrack,
                sendDownloadTracks: () => sendDownloadTracks,
                sendYnisonState: () => sendYnisonState,
            });
            let s = () => {
                document.addEventListener('auxclick', (e) => e.preventDefault()),
                    document.addEventListener('click', (e) => {
                        (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                    });
            };
            var o = a(83252);
            let l = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(o.EE.APPLICATION_READY, e);
                },
                sendDownloadTrack = (e, t) => {
                    var a;
                    null == (a = window.desktopEvents) || a.send(o.EE.DOWNLOAD_TRACK, e, t);
                },
                sendDownloadCurrentTrack = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(o.EE.DOWNLOAD_CURRENT_TRACK, e);
                },
                sendDownloadTracks = (e, t, a) => {
                    var s;
                    null == (s = window.desktopEvents) || s.send(o.EE.DOWNLOAD_TRACKS, e, t, a);
                },
                sendYnisonState = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(o.EE.YNISON_STATE, { rawData: e.rawData });
                },
                n = (e) => {
                    let t = e === o.Sxu.Light ? '#FFFFFF' : '#000000';
                    window.desktopEvents.send(o.EE.APPLICATION_THEME, t);
                };
            a(24783);
            var r = a(99175),
                i = a(47770),
                d = a(71117),
                c = a(89473),
                u = a(15855),
                _ = a(61337),
                h = a(66164),
                p = a(15778),
                m = a(53466),
                v = a(96798),
                x = a(93064),
                C = a(26433);
            let A = x.gK.model('TranslationsModel', { data: x.gK.frozen() }),
                g = x.gK
                    .model('ReleaseNotes', { modal: C.qt, translations: x.gK.maybeNull(A), sortedDescReleaseNotesKeys: x.gK.maybeNull(x.gK.array(x.gK.string)) })
                    .views((e) => ({
                        get isReady() {
                            var t;
                            return !!(
                                (null == (t = e.translations) ? void 0 : t.data) &&
                                'object' == typeof e.translations.data &&
                                Object.keys(e.translations.data).length > 0
                            );
                        },
                    }))
                    .actions((e) => ({
                        setSortedDescReleaseNotesKeys: (t) => {
                            e.sortedDescReleaseNotesKeys = (0, x.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = A.create({ data: t }));
                        },
                    }));
            var E = a(81733),
                w = a(83573);
        },
        70470: (e) => {
            e.exports = { paywallContainer: 'WithMobilePaywall_paywallContainer__Mk1l_', shimmer: 'WithMobilePaywall_shimmer__fg4QA' };
        },
        71117: (e, t, a) => {
            'use strict';
            a.d(t, { useLaunch: () => l });
            var s = a(61910),
                o = a(83252);
            let l = () => {
                let e = (0, o.NFA)().get(o.vgk),
                    t = (0, s.useCallback)(() => {
                        let t = (0, o.HFS)();
                        t && e.count(t, 'installsCount');
                    }, [e]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(o.EE.FIRST_LAUNCH, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(o.EE.FIRST_LAUNCH, t);
                        }
                    );
                }, [t]);
            };
        },
        73488: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockChildUser: () => l });
            var s = a(28303),
                o = a(83252);
            let l = (0, s.PA)(() => {
                let e = (0, o.NFA)(),
                    { user: t } = (0, o.Pjs)(),
                    a = e.get(o.QGx);
                t.isChild && a.redirectToChildPageUrl();
            });
        },
        75806: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            let s = {
                src: '/_next/static/media/desktop.1e0910e6.webp',
                height: 1800,
                width: 2880,
                blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEOaA+wuAD+/SCh9NmVu/p31WSFlBGQJpSkM3AKDGRsZhmAAAA=',
                blurWidth: 8,
                blurHeight: 5,
            };
        },
        79413: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        81733: (e, t, a) => {
            'use strict';
            a.d(t, { ReleaseNotesModal: () => v });
            var s = a(54486),
                o = a(50420),
                l = a(28303),
                n = a(43426),
                r = a(50722),
                i = a(47713),
                d = a(32692),
                c = a(56231),
                u = a(97800),
                _ = a(83252),
                h = a(45631),
                p = a.n(h);
            let m = {
                    ul: (e) => (0, s.jsx)('ul', { className: p().description, children: e }),
                    li: (e) => (0, s.jsx)('li', { className: p().item, children: e }),
                    code: (e) => (0, s.jsx)('code', { className: p().code, children: e }),
                    date: (e) => (0, s.jsx)('span', { className: p().date, children: e }),
                    p: (e) => (0, s.jsx)('p', { className: p().paragraph, children: e }),
                    br: (0, s.jsx)('br', {}),
                },
                v = (0, l.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: a },
                        } = (0, _.Pjs)(),
                        { formatMessage: l } = (0, n.A)(),
                        { language: h, defaultLanguage: v } = (0, _.h6b)(),
                        x = (0, _.Crf)();
                    return (0, s.jsx)(d.a, {
                        title: l({ id: 'desktop.release-notes-modal-title' }),
                        open: a.isOpened,
                        onOpenChange: a.onOpenChange,
                        onClose: a.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: p().modalOverlay,
                        overlayColor: 'full',
                        labelClose: l({ id: 'interface-actions.close' }),
                        className: p().root,
                        headerClassName: p().modalHeader,
                        contentClassName: p().modalContent,
                        children: (0, s.jsx)(r.A, {
                            onError: x,
                            defaultLocale: v,
                            locale: h,
                            messages: null == e ? void 0 : e.data,
                            children: (0, s.jsx)(c.N, {
                                className: (0, o.$)(p().scrollableContent, p().important),
                                containerClassName: (0, o.$)(p().notes, p().important),
                                children:
                                    null == t
                                        ? void 0
                                        : t.map((e) =>
                                              (0, s.jsxs)(
                                                  'div',
                                                  {
                                                      className: p().note,
                                                      children: [
                                                          (0, s.jsx)(u.Heading, {
                                                              variant: 'h4',
                                                              className: (0, o.$)(p().version, p().important),
                                                              children: (0, _.Grs)(e),
                                                          }),
                                                          (0, s.jsx)(i.A, { id: e, values: m }),
                                                      ],
                                                  },
                                                  e,
                                              ),
                                          ),
                            }),
                        }),
                    });
                });
        },
        83573: (e, t, a) => {
            'use strict';
            a.d(t, { TitleBar: () => h });
            var s = a(54486),
                o = a(50420),
                l = a(28303),
                n = a(61910),
                r = a(43426),
                i = a(83252),
                d = a(24783),
                c = a(49475),
                u = a.n(c);
            let _ = (e) => {
                    let { children: t, className: a, onClick: l, ariaLabel: n, withSecondaryColor: r } = e;
                    return (0, s.jsx)('button', {
                        type: 'button',
                        className: (0, o.$)(u().button, { [u().button_withSecondaryColor]: r }, a),
                        onClick: l,
                        'aria-label': n,
                        children: t,
                    });
                },
                h = (0, l.PA)((e) => {
                    let { withSecondaryColor: t } = e,
                        { settings: a } = (0, i.Pjs)(),
                        l = a.isWindowsApplication || a.isLinuxApplication,
                        { formatMessage: c } = (0, r.A)(),
                        h = (0, n.useCallback)(() => {
                            (0, d.vZ)();
                        }, []),
                        p = (0, n.useCallback)(() => {
                            (0, d.LO)();
                        }, []),
                        m = (0, n.useCallback)(() => {
                            (0, d.N5)();
                        }, []),
                        v = (0, n.useCallback)(() => {
                            (0, d.toggleMiniPlayer)();
                        }, []),
                        x = (0, n.useCallback)((e) => {
                            if (e.target.closest('button')) return;
                            (0, d.LO)();
                        }, []),
                        [C, A] = (0, n.useState)(window.HIDE_PULSESYNC_VERSION_IN_TITLEBAR?.() ?? !1);
                    (0, n.useEffect)(() => {
                        if (window.HIDE_PULSESYNC_VERSION_IN_TITLEBAR?.()) return;
                        const e = `.${u().pulseText}`,
                            t = '[class*="TitleBar_root"]',
                            a = `pulsesync-titlebar-force-style-${u().pulseText}`,
                            s = `PulseSync ${window.PULSE_VERSION}`,
                            o = () => {
                                const o = `${t} { display: flex !important; visibility: visible !important; opacity: 1 !important; } ${e} { display: inline !important; visibility: visible !important; opacity: 1 !important; }`;
                                let l = window.document?.getElementById?.(a);
                                if (!l) {
                                    if (!(l = window.document?.createElement?.('style'))) return;
                                    (l.id = a), (l.textContent = o), (window.document?.head || window.document?.documentElement)?.appendChild?.(l);
                                    return;
                                }
                                l.textContent !== o && (l.textContent = o);
                            },
                            l = () => {
                                const t = window.document?.querySelector(e);
                                t && t.textContent !== s && (t.textContent = s);
                            };
                        let r = 0,
                            i = !1;
                        const d = () => {
                                (r = 0), l();
                            },
                            c = () => {
                                r || (window.requestAnimationFrame ? ((i = !0), (r = window.requestAnimationFrame(d))) : ((i = !1), (r = window.setTimeout(d, 16))));
                            };
                        o();
                        const h =
                                window.MutationObserver &&
                                new MutationObserver(() => {
                                    c();
                                }),
                            p = window.document?.body || window.document?.documentElement;
                        return (
                            p && h?.observe(p, { subtree: !0, childList: !0 }),
                            c(),
                            () => {
                                h?.disconnect(), r && (i && window.cancelAnimationFrame ? window.cancelAnimationFrame(r) : clearTimeout(r));
                            }
                        );
                    }, []),
                        (0, n.useEffect)(() => {
                            const e = (event, key, value) => {
                                'modSettings.window.hidePulseSyncVersionInTitleBar' === key && A(value);
                            };
                            return window.desktopEvents?.on('NATIVE_STORE_UPDATE', e), () => window.desktopEvents?.off?.('NATIVE_STORE_UPDATE', e);
                        }, []);
                    return (0, s.jsx)('div', {
                        className: u().root,
                        onDoubleClick: x,
                        children:
                            l &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    !C &&
                                        (0, s.jsx)('span', {
                                            className: u().pulseText,
                                            children: `PulseSync ${window.PULSE_VERSION}`,
                                        }),
                                    (0, s.jsx)(_, {
                                        onClick: v,
                                        ariaLabel: 'miniplayer',
                                        withSecondaryColor: t,
                                        children: (0, s.jsx)('svg', {
                                            width: '12',
                                            height: '12',
                                            viewBox: '0 0 12 12',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
                                            children: (0, s.jsx)('path', {
                                                d: 'M1 1h10v4H7v6H1V1Zm1 1v8h4V4h4V2H2Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)(_, {
                                        onClick: h,
                                        ariaLabel: c({ id: 'windows-menu.roll-up' }),
                                        withSecondaryColor: t,
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
                                            children: (0, s.jsx)('path', {
                                                d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)(_, {
                                        onClick: p,
                                        ariaLabel: c({ id: 'windows-menu.unwrap' }),
                                        withSecondaryColor: t,
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
                                            children: (0, s.jsx)('path', {
                                                d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)(_, {
                                        className: u().closeButton,
                                        onClick: m,
                                        ariaLabel: c({ id: 'windows-menu.close' }),
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
                                            children: (0, s.jsx)('path', {
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
        88495: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockFullscreen: () => m });
            var s = a(54486),
                o = a(28303),
                l = a(97396),
                n = a(61910),
                r = a(43426),
                i = a(77881),
                d = a(97800),
                c = a(68317),
                u = a(83252),
                _ = a(98744),
                h = a.n(_);
            let p = (0, o.PA)((e) => {
                    var t, a, o, _;
                    let { isAuthorizedUser: p = !1 } = e,
                        { formatMessage: m } = (0, r.A)(),
                        v = (0, l.useRouter)(),
                        {
                            experiments: x,
                            settings: { isMobile: C },
                        } = (0, u.Pjs)(),
                        A = (0, u.NFA)().get(u.QGx),
                        g = x.getExperiment(u.zal.WebNextBlockFullscreen),
                        E = null == g || null == (t = g.value) ? void 0 : t.metadata,
                        w = (0, n.useCallback)(() => {
                            A.authorizationUrl && v.push(A.authorizationUrl);
                        }, [A.authorizationUrl, v]),
                        N = (0, n.useCallback)(() => {
                            var e;
                            let t = new URLSearchParams({
                                    origin: 'music_button-header',
                                    retpath: encodeURIComponent('https://music.yandex.ru/settings?reqid=527383194170610471317084142111361467&from-passport'),
                                }),
                                a = (null == E || null == (e = E.redirectButton) ? void 0 : e.link) || A.getAuthorizationUrlWithParams(t);
                            a && window.open(a, '_self', 'noreferrer noopener');
                        }, [A, null == E || null == (a = E.redirectButton) ? void 0 : a.link]),
                        f = (null == E || null == (o = E.redirectButton) ? void 0 : o.text) || m({ id: 'snegir.redirect-button-text' }),
                        k = (null == E || null == (_ = E.authButton) ? void 0 : _.text) || m({ id: 'snegir.auth-button-text' }),
                        b = (0, n.useMemo)(
                            () =>
                                p
                                    ? (0, s.jsx)(i.$, { onClick: N, className: h().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: f })
                                    : (0, s.jsx)(i.$, { onClick: w, className: h().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: k }),
                            [p, w, k, N, f],
                        ),
                        j = (null == E ? void 0 : E.mainText) || m({ id: 'snegir.main-text' }, { br: '\r\n' });
                    return (0, s.jsxs)('div', {
                        className: h().root,
                        children: [
                            (0, s.jsx)(c.cq, { withSecondaryColor: !0 }),
                            (0, s.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: h().content,
                                        children: [
                                            (0, s.jsx)(d.Heading, { variant: 'h1', size: C ? 'xl' : 'xxl', weight: 'bold', className: h().title, children: j }),
                                            b,
                                        ],
                                    }),
                                    (0, s.jsx)('div', { className: h().image }),
                                ],
                            }),
                        ],
                    });
                }),
                m = (0, o.PA)((e) => {
                    let { children: t } = e,
                        { experiments: a, user: o } = (0, u.Pjs)(),
                        l = a.checkExperiment(u.zal.WebNextBlockFullscreen, 'on') || !o.isServiceAvailable;
                    return ((0, u.QVD)(l), l) ? (o.isAuthorized ? (0, s.jsx)(p, { isAuthorizedUser: !0 }) : (0, s.jsx)(p, {})) : t;
                });
        },
        89473: (e, t, a) => {
            'use strict';
            a.d(t, { usePlayerAction: () => n });
            var s = a(61910),
                o = a(83252),
                l = (function (e) {
                    return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
                })(l || {});
            let n = (e) => {
                let t = (0, s.useCallback)(
                    (t, a) => {
                        switch (a) {
                            case 'PLAY':
                            case 'PAUSE':
                                null == e || e.togglePause();
                                break;
                            case 'MOVE_BACKWARD':
                                null == e || e.moveBackward();
                                break;
                            case 'MOVE_FORWARD':
                                null == e || e.moveForward();
                        }
                    },
                    [e],
                );
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(o.EE.PLAYER_ACTION, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(o.EE.PLAYER_ACTION, t);
                        }
                    );
                }, [t]);
            };
        },
        96034: (e) => {
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
        96798: (e, t, a) => {
            'use strict';
            a.d(t, { useSendPlayerState: () => r });
            var s = a(61910),
                o = a(8817),
                l = a(89461),
                n = a(83252);
            let r = (e) => {
                let { sonata: t } = e,
                    a = (0, o.c)((e) => {
                        var t;
                        let { isPlaying: a, canMoveBackward: s, canMoveForward: o } = e;
                        null == (t = window.desktopEvents) ||
                            t.send(n.EE.PLAYER_STATE, {
                                isPlaying: a,
                                canMoveBackward: s,
                                canMoveForward: o,
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
                            s = e?.state?.queueState?.entityList?.value,
                            o = t - 1 >= 0 ? (a?.[t - 1] ?? t - 1) : null,
                            l = t + 1 >= 0 ? (a?.[t + 1] ?? t + 1) : null;
                        return {
                            previousTrack: null == o ? void 0 : s?.[o]?.entity?.entityData?.meta,
                            nextTrack: null == l ? void 0 : s?.[l]?.entity?.entityData?.meta,
                        };
                    },
                    i = (e, t) => {
                        let { previousTrack: s, nextTrack: o } = r(e);
                        a({
                            status: t,
                            isPlaying: t === l.MT.PLAYING,
                            canMoveForward: e?.state?.currentContext?.value?.availableActions.moveForward.value,
                            canMoveBackward: e?.state?.currentContext?.value?.availableActions.moveBackward.value,
                            track: e?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta,
                            progress: e?.state?.playerState?.progress?.value,
                            availableActions: {
                                moveBackward: e?.state?.currentContext?.value?.availableActions.moveBackward.value,
                                moveForward: e?.state?.currentContext?.value?.availableActions.moveForward.value,
                                repeat: e?.state?.currentContext?.value?.availableActions.repeat?.value,
                                shuffle: e?.state?.currentContext?.value?.availableActions.shuffle?.value,
                                speed: e?.state?.currentContext?.value?.availableActions.speed?.value,
                            },
                            actionsStore: {
                                repeat: e?.state?.queueState?.repeat?.value,
                                shuffle: e?.state?.queueState?.shuffle?.value,
                                isLiked: !!e?.state?.queueState?.currentEntity?.value?.entity?.likeStore?.isTrackLiked?.(
                                    e?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta?.id,
                                ),
                                isDisliked: !!e?.state?.queueState?.currentEntity?.value?.entity?.likeStore?.isTrackDisliked?.(
                                    e?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta?.id,
                                ),
                            },
                            previousTrack: s,
                            nextTrack: o,
                            volume: e?.state?.playerState?.exponentVolume?.value,
                        });
                    };
                (0, s.useEffect)(() => {
                    t && window.pulsesyncApi?.setPlayerInstance?.(t);
                    let e,
                        a,
                        s =
                            null == t
                                ? void 0
                                : t.state.playerState.status.onChange((e) => {
                                      e && i(t, e);
                                  }),
                        o = t?.state?.queueState?.currentEntity?.onChange((e) => {
                            e && i(t, l.MT.PLAYING);
                        }),
                        r = t?.state?.playerState?.event?.onChange(() => {
                            let e = t?.state?.playerState?.event?.value;
                            ('SET_PROGRESS' === e || e === l.Iu?.SET_PROGRESS) && i(t, t?.state?.playerState?.status?.value);
                        }),
                        d = t?.state?.queueState?.entityList?.onChange(() => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        c = t?.state?.currentContext?.value?.availableActions.repeat?.onChange(() => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        u = t?.state?.currentContext?.value?.availableActions.shuffle?.onChange(() => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        _ = t?.state?.queueState?.repeat?.onChange(() => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        h = t?.state?.queueState?.shuffle?.onChange(() => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        p = t?.state?.playerState?.exponentVolume?.onChange(() => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        m = window.desktopEvents?.on(n.EE.GET_CURRENT_TRACK, () => {
                            i(t, t?.state?.playerState?.status?.value);
                        }),
                        v =
                            null == t
                                ? void 0
                                : t.state.currentContext.onChange(() => {
                                      var s, o;
                                      null == e || e(),
                                          null == a || a(),
                                          (e =
                                              null == t || null == (s = t.state.currentContext.value)
                                                  ? void 0
                                                  : s.availableActions.moveBackward.onChange(() => {
                                                        i(t, t?.state?.playerState?.status?.value);
                                                    })),
                                          (a =
                                              null == t || null == (o = t.state.currentContext.value)
                                                  ? void 0
                                                  : o.availableActions.moveForward.onChange(() => {
                                                        i(t, t?.state?.playerState?.status?.value);
                                                    }));
                                  });
                    return () => {
                        null == s || s(),
                            null == v || v(),
                            null == o || o(),
                            null == m || m(),
                            null == r || r(),
                            null == d || d(),
                            null == c || c(),
                            null == u || u(),
                            null == _ || _(),
                            null == h || h(),
                            null == p || p(),
                            null == a || a(),
                            null == a || a();
                    };
                }, [a, null == t ? void 0 : t.state.currentContext, null == t ? void 0 : t.state.playerState.status]);
            };
        },
        98744: (e) => {
            e.exports = {
                root: 'BlockPage_root__crGK_',
                container: 'BlockPage_container__my_l0',
                content: 'BlockPage_content__4nK4D',
                title: 'BlockPage_title__sAejV',
                button: 'BlockPage_button__KoFZX',
                image: 'BlockPage_image__C02Db',
            };
        },
        99175: (e, t, a) => {
            'use strict';
            a.d(t, { useApplicationDeeplinks: () => i });
            var s = a(97396),
                o = a(61910),
                l = a(8817),
                n = a(83252);
            let r = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let a = t[1],
                                s = t[2] || '';
                            if (!a) return e;
                            let o = new URLSearchParams(s.startsWith('?') ? s.substring(1) : '');
                            return o.set('tab', a), '/?'.concat(o.toString());
                        },
                    ],
                    [/^\/home$/, () => n.Zyd.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => n.Zyd.collection.href],
                    [/^\/users\/(.*)\/history$/, () => n.Zyd.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let t = new URLSearchParams(e.split('?')[1]);
                            t.set(n.K3F.DEEPLINK, n.vEM.PLAY_VIBE);
                            let a = new URLSearchParams(window.location.search),
                                s = (0, n.$cg)(a, t);
                            return 'landing' === t.get(n.K3F.SCREEN) ? '/?'.concat(s.toString()) : ''.concat(window.location.pathname, '?').concat(s.toString());
                        },
                    ],
                ],
                i = () => {
                    let e = (0, s.useRouter)(),
                        t = (0, l.c)((t, a) => {
                            for (let [t, s] of r) if (t.test(a)) return void e.push(s(a));
                            let { href: s } = (0, n.uvd)(null != a ? a : n.Zyd.main.href);
                            e.push(s);
                        });
                    (0, o.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.OPEN_DEEPLINK, t),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.OPEN_DEEPLINK, t);
                            }
                        );
                    }, [t]);
                };
        },
    },
]);
