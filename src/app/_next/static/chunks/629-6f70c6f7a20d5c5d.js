(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [629],
    {
        3803: (e, t, a) => {
            'use strict';
            a.d(t, { TitleBar: () => h });
            var s = a(62936),
                l = a(79950),
                o = a(19718),
                n = a(44020),
                r = a(47480),
                i = a(42561),
                d = a(99269),
                c = a(22029),
                u = a.n(c);
            let _ = (e) => {
                    let { children: t, className: a, onClick: o, ariaLabel: n, withSecondaryColor: r } = e;
                    return (0, s.jsx)('button', {
                        type: 'button',
                        className: (0, l.$)(u().button, { [u().button_withSecondaryColor]: r }, a),
                        onClick: o,
                        'aria-label': n,
                        children: t,
                    });
                },
                h = (0, o.PA)((e) => {
                    let { withSecondaryColor: t } = e,
                        { settings: a } = (0, i.Pjs)(),
                        o = a.isWindowsApplication || a.isLinuxApplication,
                        { formatMessage: c } = (0, r.A)(),
                        h = (0, n.useCallback)(() => {
                            (0, d.vZ)();
                        }, []),
                        p = (0, n.useCallback)(() => {
                            (0, d.LO)();
                        }, []),
                        m = (0, n.useCallback)(() => {
                            (0, d.N5)();
                        }, []);
                    return (0, s.jsx)('div', {
                        className: u().root,
                        onDoubleClick: p,
                        children:
                            o &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(_, {
                                        onClick: h,
                                        ariaLabel: c({ id: 'windows-menu.roll-up' }),
                                        withSecondaryColor: t,
                                        children: (0, s.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, l.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
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
                                            className: (0, l.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
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
                                            className: (0, l.$)(u().icon, { [u().icon_withSecondaryColor]: t }),
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
        5257: (e, t, a) => {
            'use strict';
            a.d(t, { useApplicationDeeplinks: () => i });
            var s = a(69526),
                l = a(44020),
                o = a(59935),
                n = a(42561);
            let r = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let a = t[1],
                                s = t[2] || '';
                            if (!a) return e;
                            let l = new URLSearchParams(s.startsWith('?') ? s.substring(1) : '');
                            return l.set('tab', a), '/?'.concat(l.toString());
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
                        t = (0, o.c)((t, a) => {
                            for (let [t, s] of r) if (t.test(a)) return void e.push(s(a));
                            let { href: s } = (0, n.uvd)(null != a ? a : n.Zyd.main.href);
                            e.push(s);
                        });
                    (0, l.useEffect)(() => {
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
        6814: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockChildUser: () => o });
            var s = a(19718),
                l = a(42561);
            let o = (0, s.PA)(() => {
                let e = (0, l.NFA)(),
                    { user: t } = (0, l.Pjs)(),
                    a = e.get(l.QGx);
                t.isChild && a.redirectToChildPageUrl();
            });
        },
        11908: (e, t, a) => {
            'use strict';
            a.d(t, { useReleaseNotes: () => o });
            var s = a(44020),
                l = a(42561);
            let o = () => {
                let [e, t] = (0, s.useState)(!1),
                    {
                        releaseNotes: { setTranslationsReleaseNotes: a, isReady: o, modal: n, setSortedDescReleaseNotesKeys: r },
                    } = (0, l.Pjs)(),
                    i = (0, s.useCallback)(
                        (e, s) => {
                            let { needToShowReleaseNotes: l, sortedDescReleaseNotesKeys: o, translationsReleaseNotes: n } = s;
                            a(n), r(o), l && t(!0);
                        },
                        [r, a],
                    );
                (0, s.useEffect)(() => {
                    e && o && (n.open(), t(!1));
                }, [o, n, e]),
                    (0, s.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(l.EE.LOAD_RELEASE_NOTES, i),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(l.EE.LOAD_RELEASE_NOTES, i);
                            }
                        );
                    }, [i]);
            };
        },
        12275: (e, t, a) => {
            'use strict';
            a.d(t, { usePlayerAction: () => n });
            var s = a(44020),
                l = a(42561),
                o = (function (e) {
                    return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
                })(o || {});
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
                        null == (e = window.desktopEvents) || e.on(l.EE.PLAYER_ACTION, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.PLAYER_ACTION, t);
                        }
                    );
                }, [t]);
            };
        },
        18085: (e, t, a) => {
            'use strict';
            a.d(t, {
                qw: () => g.ReleaseNotesModal,
                _o: () => x,
                cq: () => w.TitleBar,
                CA: () => s,
                M4: () => o,
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
                OM: () => C.useSendPlayerState,
            });
            let s = () => {
                document.addEventListener('auxclick', (e) => e.preventDefault()),
                    document.addEventListener('click', (e) => {
                        (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                    });
            };
            var l = a(42561);
            let o = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(l.EE.APPLICATION_READY, e);
                },
                n = (e) => {
                    let t = e === l.Sxu.Light ? '#FFFFFF' : '#000000';
                    window.desktopEvents.send(l.EE.APPLICATION_THEME, t);
                };
            a(99269);
            var r = a(5257),
                i = a(21240),
                d = a(72439),
                c = a(12275),
                u = a(32873),
                _ = a(63395),
                h = a(92070),
                p = a(71992),
                m = a(11908),
                C = a(42100),
                v = a(51606),
                A = a(54690);
            let E = v.gK.model('TranslationsModel', { data: v.gK.frozen() }),
                x = v.gK
                    .model('ReleaseNotes', { modal: A.qt, translations: v.gK.maybeNull(E), sortedDescReleaseNotesKeys: v.gK.maybeNull(v.gK.array(v.gK.string)) })
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
                            e.sortedDescReleaseNotesKeys = (0, v.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = E.create({ data: t }));
                        },
                    }));
            var g = a(35483),
                w = a(3803);
        },
        19404: (e, t, a) => {
            'use strict';
            a.d(t, { WithDownloadMobileAppModal: () => n });
            var s = a(19718),
                l = a(44020),
                o = a(42561);
            let n = (0, s.PA)((e) => {
                let { children: t } = e,
                    { downloadMobileApp: a } = (0, o.Pjs)();
                return (
                    (0, l.useEffect)(() => {
                        a.shouldShow() && a.openModal();
                    }, [a]),
                    t
                );
            });
        },
        19448: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockFullscreen: () => m });
            var s = a(62936),
                l = a(19718),
                o = a(69526),
                n = a(44020),
                r = a(47480),
                i = a(5099),
                d = a(20418),
                c = a(18085),
                u = a(42561),
                _ = a(67254),
                h = a.n(_);
            let p = (0, l.PA)((e) => {
                    var t, a, l, _;
                    let { isAuthorizedUser: p = !1 } = e,
                        { formatMessage: m } = (0, r.A)(),
                        C = (0, o.useRouter)(),
                        {
                            experiments: v,
                            settings: { isMobile: A },
                        } = (0, u.Pjs)(),
                        E = (0, u.NFA)().get(u.QGx),
                        x = v.getExperiment(u.zal.WebNextBlockFullscreen),
                        g = null == x || null == (t = x.value) ? void 0 : t.metadata,
                        w = (0, n.useCallback)(() => {
                            E.authorizationUrl && C.push(E.authorizationUrl);
                        }, [E.authorizationUrl, C]),
                        f = (0, n.useCallback)(() => {
                            var e;
                            let t = new URLSearchParams({
                                    origin: 'music_button-header',
                                    retpath: encodeURIComponent('https://music.yandex.ru/settings?reqid=527383194170610471317084142111361467&from-passport'),
                                }),
                                a = (null == g || null == (e = g.redirectButton) ? void 0 : e.link) || E.getAuthorizationUrlWithParams(t);
                            a && window.open(a, '_self', 'noreferrer noopener');
                        }, [E, null == g || null == (a = g.redirectButton) ? void 0 : a.link]),
                        k = (null == g || null == (l = g.redirectButton) ? void 0 : l.text) || m({ id: 'snegir.redirect-button-text' }),
                        N = (null == g || null == (_ = g.authButton) ? void 0 : _.text) || m({ id: 'snegir.auth-button-text' }),
                        b = (0, n.useMemo)(
                            () =>
                                p
                                    ? (0, s.jsx)(i.$, { onClick: f, className: h().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: k })
                                    : (0, s.jsx)(i.$, { onClick: w, className: h().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: N }),
                            [p, w, N, f, k],
                        ),
                        j = (null == g ? void 0 : g.mainText) || m({ id: 'snegir.main-text' }, { br: '\r\n' });
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
                                            (0, s.jsx)(d.Heading, { variant: 'h1', size: A ? 'xl' : 'xxl', weight: 'bold', className: h().title, children: j }),
                                            b,
                                        ],
                                    }),
                                    (0, s.jsx)('div', { className: h().image }),
                                ],
                            }),
                        ],
                    });
                }),
                m = (0, l.PA)((e) => {
                    let { children: t } = e,
                        { experiments: a, user: l } = (0, u.Pjs)(),
                        o = a.checkExperiment(u.zal.WebNextBlockFullscreen, 'on') || !l.isServiceAvailable;
                    return ((0, u.QVD)(o), o) ? (l.isAuthorized ? (0, s.jsx)(p, { isAuthorizedUser: !0 }) : (0, s.jsx)(p, {})) : t;
                });
        },
        21240: (e, t, a) => {
            'use strict';
            a.d(t, { useApplicationUpdate: () => p });
            var s = a(62936),
                l = a(44020),
                o = a(47480),
                n = a(42561),
                r = a(79950),
                i = a(5099),
                d = a(20418),
                c = a(85906),
                u = a(63727),
                _ = a.n(u);
            let h = (e) => {
                    let { version: t, formatMessage: a, closeToast: o } = e,
                        u = (0, l.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(n.EE.INSTALL_UPDATE), null == o || o();
                        }, [o]),
                        h = (0, l.useMemo)(
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
                p = () => {
                    let { formatMessage: e } = (0, o.A)(),
                        { notify: t } = (0, n.lkh)(),
                        a = (0, l.useRef)(''),
                        r = (0, l.useCallback)(
                            (l, o) => {
                                a.current !== o && ((a.current = o), t((0, s.jsx)(h, { formatMessage: e, version: o }), { containerId: n.uQT.IMPORTANT }));
                            },
                            [e, a, t],
                        );
                    (0, l.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(n.EE.UPDATE_AVAILABLE, r),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(n.EE.UPDATE_AVAILABLE, r);
                            }
                        );
                    }, [r]);
                };
        },
        22029: (e) => {
            e.exports = {
                root: 'TitleBar_root__QjdOZ',
                button: 'TitleBar_button__9MptL',
                button_withSecondaryColor: 'TitleBar_button_withSecondaryColor__oIkuo',
                icon: 'TitleBar_icon__8Wji9',
                icon_withSecondaryColor: 'TitleBar_icon_withSecondaryColor__vuw6G',
                closeButton: 'TitleBar_closeButton__Epxh7',
            };
        },
        32144: (e, t, a) => {
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
        32873: (e, t, a) => {
            'use strict';
            a.d(t, { useProbabilityBucket: () => o });
            var s = a(44020),
                l = a(42561);
            let o = () => {
                let e = (0, l.NFA)().get(l.vgk),
                    t = (0, s.useCallback)(
                        (t, a) => {
                            a && e.count(a, 'probabilityBucket');
                        },
                        [e],
                    );
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.PROBABILITY_BUCKET, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.PROBABILITY_BUCKET, t);
                        }
                    );
                }, [t]);
            };
        },
        34705: (e, t, a) => {
            'use strict';
            a.d(t, { WithBetaUser: () => x });
            var s = a(62936),
                l = a(19718),
                o = a(79950),
                n = a(44020),
                r = a(26731),
                i = a(8669),
                d = a(5099),
                c = a(50576),
                u = a(20512),
                _ = a(20418),
                h = a(18085),
                p = a(42687),
                m = a(42561),
                C = a(85906),
                v = a(47472),
                A = a.n(v);
            let E = (0, l.PA)((e) => {
                    let { withoutExperiment: t = !1, showLoginButton: l = !1, showUserProfile: v = !1, withOffer: E = !1 } = e,
                        x = (0, m.NFA)(),
                        {
                            settings: { isMobile: g },
                        } = (0, m.Pjs)(),
                        w = (0, m.jjz)(),
                        f = x.get(m.twC),
                        k = (0, m._lF)(f.oldWebHost),
                        N = (0, n.useMemo)(() => (g ? a(32144).A.src : a(70644).A.src), [g]),
                        b = (0, n.useCallback)(() => {
                            let e = 'https://'.concat(k, '/pay');
                            window.open(e, '_blank', 'noreferrer noopener');
                        }, [k]);
                    (0, m.Jzs)(!0);
                    let j = (0, n.useMemo)(
                            () =>
                                E
                                    ? (0, s.jsx)(_.Heading, {
                                          variant: 'h1',
                                          size: 'xl',
                                          weight: 'bold',
                                          className: A().text,
                                          children: (0, s.jsx)(r.A, { id: 'welcome-page.offer-header' }),
                                      })
                                    : t
                                      ? (0, s.jsx)(_.Heading, {
                                            variant: 'h1',
                                            size: 'xxl',
                                            weight: 'bold',
                                            className: A().text,
                                            children: (0, s.jsx)(r.A, { id: 'welcome-page.beta-header', values: { br: (0, s.jsx)('br', {}) } }),
                                        })
                                      : (0, s.jsx)(_.Heading, {
                                            variant: 'h1',
                                            size: 'xxl',
                                            weight: 'bold',
                                            className: A().text,
                                            children: (0, s.jsx)(r.A, { id: 'welcome-page.not-auth-header', values: { br: (0, s.jsx)('br', {}) } }),
                                        }),
                            [E, t],
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
                                                  className: A().text,
                                                  children: (0, s.jsx)(r.A, { id: 'welcome-page.beta-text-short' }),
                                              }),
                                              (0, s.jsx)(u.q, {
                                                  children: (0, s.jsx)(_.Heading, { variant: 'h2', children: (0, s.jsx)(r.A, { id: 'welcome-page.beta-text-short' }) }),
                                              }),
                                          ],
                                      })
                                    : E
                                      ? (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    className: A().offerText,
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
                                                    className: A().text,
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
                            [E, t],
                        ),
                        R = (0, n.useMemo)(
                            () =>
                                l
                                    ? (0, s.jsx)(C.Hi, { size: 'm', className: A().loginButton })
                                    : E
                                      ? (0, s.jsx)(d.$, {
                                            onClick: b,
                                            className: (0, o.$)(A().offerButton, A().offerButton_important),
                                            role: 'link',
                                            color: 'plus',
                                            size: 'l',
                                            radius: 'm',
                                            withRipple: !1,
                                            children: (0, s.jsx)(r.A, { id: 'payment.offer-button' }),
                                        })
                                      : void 0,
                            [b, l, E],
                        );
                    return (
                        (0, m.NBO)(!0),
                        (0, s.jsxs)('div', {
                            className: (0, o.$)(A().root),
                            ...(0, i.Am)(i.Xk.welcome.WELCOME_PAGE),
                            children: [
                                (0, s.jsx)(h.cq, { withSecondaryColor: !0 }),
                                (0, s.jsx)('div', { className: A().logoContainer, children: (0, s.jsx)(c.gu, { alignIcon: 'center', lang: w, className: A().logo }) }),
                                j,
                                P,
                                R,
                                (0, s.jsx)('img', { className: A().image, src: N }),
                                v &&
                                    (0, s.jsx)(p.YS, {
                                        className: A().user,
                                        withMeta: !g,
                                        variant: g ? 'mobile' : 'desktop',
                                        usernameClassName: (0, o.$)(A().username, A().important),
                                    }),
                            ],
                        })
                    );
                }),
                x = (0, l.PA)((e) => {
                    let { children: t } = e,
                        { user: a, experiments: l } = (0, m.Pjs)(),
                        { hasFreeUserAccess: o } = (0, m.XCI)();
                    if ((a.isAuthorized, a.isAuthorized))
                        return l.checkExperiment(m.zal.WebNext, 'on')
                            ? a.hasPlus || o
                                ? t
                                : (0, s.jsx)(E, { withOffer: !0, showUserProfile: !0 })
                            : (0, s.jsx)(E, { withoutExperiment: !0, showUserProfile: !0 });
                    return (0, s.jsx)(E, { showLoginButton: !0 });
                });
        },
        35483: (e, t, a) => {
            'use strict';
            a.d(t, { ReleaseNotesModal: () => C });
            var s = a(62936),
                l = a(79950),
                o = a(19718),
                n = a(47480),
                r = a(29550),
                i = a(26731),
                d = a(4714),
                c = a(14501),
                u = a(20418),
                _ = a(42561),
                h = a(41926),
                p = a.n(h);
            let m = {
                    ul: (e) => (0, s.jsx)('ul', { className: p().description, children: e }),
                    li: (e) => (0, s.jsx)('li', { className: p().item, children: e }),
                    code: (e) => (0, s.jsx)('code', { className: p().code, children: e }),
                    date: (e) => (0, s.jsx)('span', { className: p().date, children: e }),
                    p: (e) => (0, s.jsx)('p', { className: p().paragraph, children: e }),
                    br: (0, s.jsx)('br', {}),
                },
                C = (0, o.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: a },
                        } = (0, _.Pjs)(),
                        { formatMessage: o } = (0, n.A)(),
                        { language: h, defaultLanguage: C } = (0, _.h6b)(),
                        v = (0, _.Crf)();
                    return (0, s.jsx)(d.a, {
                        title: o({ id: 'desktop.release-notes-modal-title' }),
                        open: a.isOpened,
                        onOpenChange: a.onOpenChange,
                        onClose: a.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: p().modalOverlay,
                        overlayColor: 'full',
                        labelClose: o({ id: 'interface-actions.close' }),
                        className: p().root,
                        headerClassName: p().modalHeader,
                        contentClassName: p().modalContent,
                        children: (0, s.jsx)(r.A, {
                            onError: v,
                            defaultLocale: C,
                            locale: h,
                            messages: null == e ? void 0 : e.data,
                            children: (0, s.jsx)(c.N, {
                                className: (0, l.$)(p().scrollableContent, p().important),
                                containerClassName: (0, l.$)(p().notes, p().important),
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
                                                              className: (0, l.$)(p().version, p().important),
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
        40356: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        41926: (e) => {
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
        42100: (e, t, a) => {
            'use strict';
            a.d(t, { useSendPlayerState: () => r });
            var s = a(44020),
                l = a(59935),
                o = a(46663),
                n = a(42561);
            let r = (e) => {
                let { sonata: t } = e,
                    a = (0, l.c)((e) => {
                        var t;
                        let { isPlaying: a, canMoveBackward: s, canMoveForward: l } = e;
                        null == (t = window.desktopEvents) || t.send(n.EE.PLAYER_STATE, { isPlaying: a, canMoveBackward: s, canMoveForward: l });
                    });
                (0, s.useEffect)(() => {
                    let e,
                        s,
                        l =
                            null == t
                                ? void 0
                                : t.state.playerState.status.onChange((e) => {
                                      e && a({ isPlaying: e === o.MT.PLAYING });
                                  }),
                        n =
                            null == t
                                ? void 0
                                : t.state.currentContext.onChange(() => {
                                      var l, o;
                                      null == e || e(),
                                          null == s || s(),
                                          (e =
                                              null == t || null == (l = t.state.currentContext.value)
                                                  ? void 0
                                                  : l.availableActions.moveBackward.onChange((e) => {
                                                        a({ canMoveBackward: !!e });
                                                    })),
                                          (s =
                                              null == t || null == (o = t.state.currentContext.value)
                                                  ? void 0
                                                  : o.availableActions.moveForward.onChange((e) => {
                                                        a({ canMoveForward: !!e });
                                                    }));
                                  });
                    return () => {
                        null == l || l(), null == n || n(), null == s || s(), null == s || s();
                    };
                }, [a, null == t ? void 0 : t.state.currentContext, null == t ? void 0 : t.state.playerState.status]);
            };
        },
        47472: (e) => {
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
        49283: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => p });
            var s = a(62936),
                l = a(19718),
                o = a(69526),
                n = a(79950),
                r = a(26731),
                i = a(20418),
                d = a(85906),
                c = a(40356),
                u = a.n(c);
            let _ = (0, l.PA)(() =>
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
            var h = a(42561);
            let p = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: l } = (0, h.Pjs)();
                return l.isAuthorized ? t : (a && (0, o.redirect)(h.Zyd.main.href), (0, s.jsx)(_, {}));
            });
        },
        63395: (e, t, a) => {
            'use strict';
            a.d(t, { useRefreshApplicationData: () => n });
            var s = a(44020),
                l = a(44262),
                o = a(42561);
            let n = () => {
                let { library: e, collection: t, experiments: a, main: n, user: r } = (0, o.Pjs)(),
                    i = (0, s.useCallback)(() => {
                        a.getData(),
                            e.getData(),
                            n.landing.isLoaded && n.landing.getSkeleton({ id: l.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }),
                            t.landing.isLoaded && t.landing.getSkeleton({ id: l.p.WEB_COLLECTION, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                    }, [t.landing, a, e, n.landing, r.settings.showWizard]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(o.EE.REFRESH_APPLICATION_DATA, i),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(o.EE.REFRESH_APPLICATION_DATA, i);
                        }
                    );
                }, [i]);
            };
        },
        63727: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        67254: (e) => {
            e.exports = {
                root: 'BlockPage_root__crGK_',
                container: 'BlockPage_container__my_l0',
                content: 'BlockPage_content__4nK4D',
                title: 'BlockPage_title__sAejV',
                button: 'BlockPage_button__KoFZX',
                image: 'BlockPage_image__C02Db',
            };
        },
        70644: (e, t, a) => {
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
        71992: (e, t, a) => {
            'use strict';
            a.d(t, { useRefreshTracksAvailability: () => o });
            var s = a(44020),
                l = a(42561);
            let o = () => {
                let e = (0, l.jRO)(),
                    t = (0, s.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksAvailability().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(l.EE.TRACKS_AVAILABILITY_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.REFRESH_TRACKS_AVAILABILITY, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.REFRESH_TRACKS_AVAILABILITY, t);
                        }
                    );
                }, [t]);
            };
        },
        72439: (e, t, a) => {
            'use strict';
            a.d(t, { useLaunch: () => o });
            var s = a(44020),
                l = a(42561);
            let o = () => {
                let e = (0, l.NFA)().get(l.vgk),
                    t = (0, s.useCallback)(() => {
                        let t = (0, l.HFS)();
                        t && e.count(t, 'installsCount');
                    }, [e]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.FIRST_LAUNCH, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.FIRST_LAUNCH, t);
                        }
                    );
                }, [t]);
            };
        },
        77778: (e, t, a) => {
            'use strict';
            a.d(t, { WithMobilePaywall: () => d });
            var s = a(62936),
                l = a(19718),
                o = a(5128),
                n = a(42561),
                r = a(81380),
                i = a.n(r);
            let d = (0, l.PA)((e) => {
                var t;
                let { children: a } = e,
                    { user: l, settings: r } = (0, n.Pjs)(),
                    { isFreemium: d } = (0, n.XCI)(),
                    { setPaywallRef: c } = (0, n.gKY)();
                return (null == (t = r.browserInfo) ? void 0 : t.isTouch) && (!l.isAuthorized || d)
                    ? (0, s.jsx)('div', { ref: c, className: i().paywallContainer, children: (0, s.jsx)(o.pU, { useOverlayScroll: !1 }) })
                    : a;
            });
        },
        81380: (e) => {
            e.exports = { paywallContainer: 'WithMobilePaywall_paywallContainer__Mk1l_', shimmer: 'WithMobilePaywall_shimmer__fg4QA' };
        },
        92070: (e, t, a) => {
            'use strict';
            a.d(t, { useRefreshRepositoryMeta: () => o });
            var s = a(44020),
                l = a(42561);
            let o = () => {
                let e = (0, l.jRO)(),
                    t = (0, s.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksMeta().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(l.EE.REPOSITORY_META_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, s.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(l.EE.REFRESH_REPOSITORY_META, t),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(l.EE.REFRESH_REPOSITORY_META, t);
                        }
                    );
                }, [t]);
            };
        },
        99269: (e, t, a) => {
            'use strict';
            a.d(t, { LO: () => o, N5: () => n, vZ: () => l });
            var s = a(42561);
            let l = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_MINIMIZE);
                },
                o = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_MAXIMIZE);
                },
                n = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(s.EE.WINDOW_CLOSE);
                };
        },
    },
]);
