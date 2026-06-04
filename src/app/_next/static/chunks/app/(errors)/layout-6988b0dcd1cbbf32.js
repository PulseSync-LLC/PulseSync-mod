(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358],
    {
        365: (e) => {
            e.exports = {
                root: 'TitleBar_root__QjdOZ',
                button: 'TitleBar_button__9MptL',
                button_withSecondaryColor: 'TitleBar_button_withSecondaryColor__oIkuo',
                icon: 'TitleBar_icon__8Wji9',
                icon_withSecondaryColor: 'TitleBar_icon_withSecondaryColor__vuw6G',
                closeButton: 'TitleBar_closeButton__Epxh7',
            };
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
        12818: () => {},
        15881: (e, s, o) => {
            'use strict';
            o.d(s, {
                qw: () => w.ReleaseNotesModal,
                _o: () => p,
                cq: () => A.TitleBar,
                CA: () => n,
                M4: () => i,
                _E: () => t,
                LD: () => l.useApplicationDeeplinks,
                P4: () => d.useApplicationUpdate,
                Fn: () => a.useLaunch,
                H: () => v.usePlayerAction,
                t4: () => h.useProbabilityBucket,
                bk: () => m.useRefreshApplicationData,
                eP: () => b.useRefreshRepositoryMeta,
                sb: () => P.useRefreshTracksAvailability,
                sq: () => c.useReleaseNotes,
                OM: () => u.useSendPlayerState,
            });
            let n = () => {
                document.addEventListener('auxclick', (e) => e.preventDefault()),
                    document.addEventListener('click', (e) => {
                        (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                    });
            };
            var r = o(49574);
            let i = (e) => {
                    var s;
                    null == (s = window.desktopEvents) || s.send(r.EE.APPLICATION_READY, e);
                },
                t = (e) => {
                    let s = e === r.Sxu.Light ? '#FFFFFF' : '#000000';
                    window.desktopEvents.send(r.EE.APPLICATION_THEME, s);
                };
            o(45801);
            var l = o(97693),
                d = o(37682),
                a = o(70075),
                v = o(17431),
                h = o(91357),
                m = o(31679),
                b = o(72618),
                P = o(65868),
                c = o(43016),
                u = o(90312),
                E = o(60754),
                C = o(95428);
            let _ = E.gK.model('TranslationsModel', { data: E.gK.frozen() }),
                p = E.gK
                    .model('ReleaseNotes', { modal: C.qt, translations: E.gK.maybeNull(_), sortedDescReleaseNotesKeys: E.gK.maybeNull(E.gK.array(E.gK.string)) })
                    .views((e) => ({
                        get isReady() {
                            var s;
                            return !!(
                                (null == (s = e.translations) ? void 0 : s.data) &&
                                'object' == typeof e.translations.data &&
                                Object.keys(e.translations.data).length > 0
                            );
                        },
                    }))
                    .actions((e) => ({
                        setSortedDescReleaseNotesKeys: (s) => {
                            e.sortedDescReleaseNotesKeys = (0, E.wg)(s);
                        },
                        setTranslationsReleaseNotes: (s) => {
                            s && (e.translations = _.create({ data: s }));
                        },
                    }));
            var w = o(91855),
                A = o(20092);
        },
        17431: (e, s, o) => {
            'use strict';
            o.d(s, { usePlayerAction: () => t });
            var n = o(55178),
                r = o(49574),
                i = (function (e) {
                    return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
                })(i || {});
            let t = (e) => {
                let s = (0, n.useCallback)(
                    (s, o) => {
                        switch (o) {
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
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(r.EE.PLAYER_ACTION, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(r.EE.PLAYER_ACTION, s);
                        }
                    );
                }, [s]);
            };
        },
        20092: (e, s, o) => {
            'use strict';
            o.d(s, { TitleBar: () => b });
            var n = o(32290),
                r = o(63618),
                i = o(96103),
                t = o(55178),
                l = o(60900),
                d = o(49574),
                a = o(45801),
                v = o(365),
                h = o.n(v);
            let m = (e) => {
                    let { children: s, className: o, onClick: i, ariaLabel: t, withSecondaryColor: l } = e;
                    return (0, n.jsx)('button', {
                        type: 'button',
                        className: (0, r.$)(h().button, { [h().button_withSecondaryColor]: l }, o),
                        onClick: i,
                        'aria-label': t,
                        children: s,
                    });
                },
                b = (0, i.PA)((e) => {
                    let { withSecondaryColor: s } = e,
                        { settings: o } = (0, d.Pjs)(),
                        i = o.isWindowsApplication || o.isLinuxApplication,
                        { formatMessage: v } = (0, l.A)(),
                        b = (0, t.useCallback)(() => {
                            (0, a.vZ)();
                        }, []),
                        P = (0, t.useCallback)(() => {
                            (0, a.LO)();
                        }, []),
                        c = (0, t.useCallback)(() => {
                            (0, a.N5)();
                        }, []);
                    return (0, n.jsx)('div', {
                        className: h().root,
                        onDoubleClick: P,
                        children:
                            i &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(m, {
                                        onClick: b,
                                        ariaLabel: v({ id: 'windows-menu.roll-up' }),
                                        withSecondaryColor: s,
                                        children: (0, n.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, r.$)(h().icon, { [h().icon_withSecondaryColor]: s }),
                                            children: (0, n.jsx)('path', {
                                                d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(m, {
                                        onClick: P,
                                        ariaLabel: v({ id: 'windows-menu.unwrap' }),
                                        withSecondaryColor: s,
                                        children: (0, n.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, r.$)(h().icon, { [h().icon_withSecondaryColor]: s }),
                                            children: (0, n.jsx)('path', {
                                                d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(m, {
                                        className: h().closeButton,
                                        onClick: c,
                                        ariaLabel: v({ id: 'windows-menu.close' }),
                                        children: (0, n.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, r.$)(h().icon, { [h().icon_withSecondaryColor]: s }),
                                            children: (0, n.jsx)('path', {
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
        31679: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshApplicationData: () => t });
            var n = o(55178),
                r = o(73474),
                i = o(49574);
            let t = () => {
                let { library: e, collection: s, experiments: o, main: t, user: l } = (0, i.Pjs)(),
                    d = (0, n.useCallback)(() => {
                        o.getData(),
                            e.getData(),
                            t.landing.isLoaded && t.landing.getSkeleton({ id: r.p.WEB_MAIN, showWizard: l.settings.showWizard }, { preloadBlocksCount: 2 }),
                            s.landing.isLoaded && s.landing.getSkeleton({ id: r.p.WEB_COLLECTION, showWizard: l.settings.showWizard }, { preloadBlocksCount: 2 });
                    }, [s.landing, o, e, t.landing, l.settings.showWizard]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(i.EE.REFRESH_APPLICATION_DATA, d),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(i.EE.REFRESH_APPLICATION_DATA, d);
                        }
                    );
                }, [d]);
            };
        },
        37682: (e, s, o) => {
            'use strict';
            o.d(s, { useApplicationUpdate: () => P });
            var n = o(32290),
                r = o(55178),
                i = o(60900),
                t = o(49574),
                l = o(63618),
                d = o(63423),
                a = o(71926),
                v = o(44574),
                h = o(8623),
                m = o.n(h);
            let b = (e) => {
                    let { version: s, formatMessage: o, closeToast: i } = e,
                        h = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(t.EE.INSTALL_UPDATE), null == i || i();
                        }, [i]),
                        b = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: o({ id: 'desktop.on-update-available' }, { version: s }),
                                        }),
                                        (0, n.jsx)(d.$, {
                                            className: m().button,
                                            onClick: h,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            children: (0, n.jsx)(a.Caption, { variant: 'div', type: 'controls', size: 'm', children: o({ id: 'desktop.update' }) }),
                                        }),
                                    ],
                                }),
                            [o, h, s],
                        );
                    return (0, n.jsx)(v.$W, { className: (0, l.$)(m().root, m().important), message: b });
                },
                P = () => {
                    let { formatMessage: e } = (0, i.A)(),
                        { notify: s } = (0, t.lkh)(),
                        o = (0, r.useRef)(''),
                        l = (0, r.useCallback)(
                            (r, i) => {
                                o.current !== i && ((o.current = i), s((0, n.jsx)(b, { formatMessage: e, version: i }), { containerId: t.uQT.IMPORTANT }));
                            },
                            [e, o, s],
                        );
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.UPDATE_AVAILABLE, l),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.UPDATE_AVAILABLE, l);
                            }
                        );
                    }, [l]);
                };
        },
        43016: (e, s, o) => {
            'use strict';
            o.d(s, { useReleaseNotes: () => i });
            var n = o(55178),
                r = o(49574);
            let i = () => {
                let [e, s] = (0, n.useState)(!1),
                    {
                        releaseNotes: { setTranslationsReleaseNotes: o, isReady: i, modal: t, setSortedDescReleaseNotesKeys: l },
                    } = (0, r.Pjs)(),
                    d = (0, n.useCallback)(
                        (e, n) => {
                            let { needToShowReleaseNotes: r, sortedDescReleaseNotesKeys: i, translationsReleaseNotes: t } = n;
                            o(t), l(i), r && s(!0);
                        },
                        [l, o],
                    );
                (0, n.useEffect)(() => {
                    e && i && (t.open(), s(!1));
                }, [i, t, e]),
                    (0, n.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(r.EE.LOAD_RELEASE_NOTES, d),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(r.EE.LOAD_RELEASE_NOTES, d);
                            }
                        );
                    }, [d]);
            };
        },
        45801: (e, s, o) => {
            'use strict';
            o.d(s, { LO: () => i, N5: () => t, vZ: () => r });
            var n = o(49574);
            let r = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_MINIMIZE);
                },
                i = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_MAXIMIZE);
                },
                t = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_CLOSE);
                };
        },
        62198: (e, s, o) => {
            Promise.resolve().then(o.bind(o, 50162)),
                Promise.resolve().then(o.bind(o, 7276)),
                Promise.resolve().then(o.bind(o, 29680)),
                Promise.resolve().then(o.bind(o, 86269)),
                Promise.resolve().then(o.bind(o, 79856)),
                Promise.resolve().then(o.bind(o, 15299)),
                Promise.resolve().then(o.bind(o, 71926)),
                Promise.resolve().then(o.bind(o, 76822)),
                Promise.resolve().then(o.bind(o, 77495)),
                Promise.resolve().then(o.bind(o, 60247)),
                Promise.resolve().then(o.t.bind(o, 36131, 23)),
                Promise.resolve().then(o.bind(o, 7027)),
                Promise.resolve().then(o.bind(o, 97676)),
                Promise.resolve().then(o.bind(o, 65738)),
                Promise.resolve().then(o.bind(o, 53393)),
                Promise.resolve().then(o.bind(o, 47209)),
                Promise.resolve().then(o.bind(o, 41676)),
                Promise.resolve().then(o.bind(o, 99187)),
                Promise.resolve().then(o.bind(o, 57510)),
                Promise.resolve().then(o.t.bind(o, 50880, 23)),
                Promise.resolve().then(o.t.bind(o, 59449, 23)),
                Promise.resolve().then(o.t.bind(o, 28488, 23)),
                Promise.resolve().then(o.t.bind(o, 69e3, 23)),
                Promise.resolve().then(o.t.bind(o, 77088, 23)),
                Promise.resolve().then(o.t.bind(o, 58660, 23)),
                Promise.resolve().then(o.t.bind(o, 94964, 23)),
                Promise.resolve().then(o.t.bind(o, 80556, 23)),
                Promise.resolve().then(o.t.bind(o, 36989, 23)),
                Promise.resolve().then(o.t.bind(o, 53394, 23)),
                Promise.resolve().then(o.t.bind(o, 23708, 23)),
                Promise.resolve().then(o.t.bind(o, 2352, 23)),
                Promise.resolve().then(o.t.bind(o, 3104, 23)),
                Promise.resolve().then(o.t.bind(o, 4340, 23)),
                Promise.resolve().then(o.t.bind(o, 60814, 23)),
                Promise.resolve().then(o.t.bind(o, 12818, 23)),
                Promise.resolve().then(o.bind(o, 66369)),
                Promise.resolve().then(o.bind(o, 84856)),
                Promise.resolve().then(o.bind(o, 45531)),
                Promise.resolve().then(o.bind(o, 90021)),
                Promise.resolve().then(o.bind(o, 74156)),
                Promise.resolve().then(o.bind(o, 39386)),
                Promise.resolve().then(o.bind(o, 20852)),
                Promise.resolve().then(o.bind(o, 38167)),
                Promise.resolve().then(o.bind(o, 48177)),
                Promise.resolve().then(o.bind(o, 47236)),
                Promise.resolve().then(o.bind(o, 96923)),
                Promise.resolve().then(o.bind(o, 60780)),
                Promise.resolve().then(o.bind(o, 95455)),
                Promise.resolve().then(o.bind(o, 64657)),
                Promise.resolve().then(o.bind(o, 39088)),
                Promise.resolve().then(o.bind(o, 93296)),
                Promise.resolve().then(o.bind(o, 19341)),
                Promise.resolve().then(o.bind(o, 68740)),
                Promise.resolve().then(o.bind(o, 80880)),
                Promise.resolve().then(o.bind(o, 83917)),
                Promise.resolve().then(o.bind(o, 73141)),
                Promise.resolve().then(o.bind(o, 73192)),
                Promise.resolve().then(o.bind(o, 11674)),
                Promise.resolve().then(o.bind(o, 10511)),
                Promise.resolve().then(o.bind(o, 44277)),
                Promise.resolve().then(o.bind(o, 47989)),
                Promise.resolve().then(o.bind(o, 54869)),
                Promise.resolve().then(o.bind(o, 39055)),
                Promise.resolve().then(o.bind(o, 12779)),
                Promise.resolve().then(o.bind(o, 96919)),
                Promise.resolve().then(o.bind(o, 8032)),
                Promise.resolve().then(o.bind(o, 85697)),
                Promise.resolve().then(o.bind(o, 52981)),
                Promise.resolve().then(o.bind(o, 2355)),
                Promise.resolve().then(o.bind(o, 10431)),
                Promise.resolve().then(o.bind(o, 83557)),
                Promise.resolve().then(o.bind(o, 66436)),
                Promise.resolve().then(o.bind(o, 54203)),
                Promise.resolve().then(o.bind(o, 58294)),
                Promise.resolve().then(o.bind(o, 23030)),
                Promise.resolve().then(o.bind(o, 74804)),
                Promise.resolve().then(o.bind(o, 60214)),
                Promise.resolve().then(o.bind(o, 66349)),
                Promise.resolve().then(o.bind(o, 62797)),
                Promise.resolve().then(o.bind(o, 71768)),
                Promise.resolve().then(o.bind(o, 65650)),
                Promise.resolve().then(o.bind(o, 59564)),
                Promise.resolve().then(o.bind(o, 9471)),
                Promise.resolve().then(o.bind(o, 78305)),
                Promise.resolve().then(o.bind(o, 70632)),
                Promise.resolve().then(o.bind(o, 35058)),
                Promise.resolve().then(o.bind(o, 85743)),
                Promise.resolve().then(o.bind(o, 90923)),
                Promise.resolve().then(o.bind(o, 17595)),
                Promise.resolve().then(o.bind(o, 41540)),
                Promise.resolve().then(o.bind(o, 48462)),
                Promise.resolve().then(o.bind(o, 8868)),
                Promise.resolve().then(o.bind(o, 12350)),
                Promise.resolve().then(o.bind(o, 95481)),
                Promise.resolve().then(o.bind(o, 47745)),
                Promise.resolve().then(o.bind(o, 12989)),
                Promise.resolve().then(o.bind(o, 2969)),
                Promise.resolve().then(o.bind(o, 84051)),
                Promise.resolve().then(o.bind(o, 27789)),
                Promise.resolve().then(o.bind(o, 70435)),
                Promise.resolve().then(o.bind(o, 19875)),
                Promise.resolve().then(o.bind(o, 54391)),
                Promise.resolve().then(o.bind(o, 63529)),
                Promise.resolve().then(o.bind(o, 73818)),
                Promise.resolve().then(o.bind(o, 20599)),
                Promise.resolve().then(o.bind(o, 84782)),
                Promise.resolve().then(o.bind(o, 30915)),
                Promise.resolve().then(o.bind(o, 70608)),
                Promise.resolve().then(o.bind(o, 18746)),
                Promise.resolve().then(o.bind(o, 71610)),
                Promise.resolve().then(o.bind(o, 23352)),
                Promise.resolve().then(o.bind(o, 10936)),
                Promise.resolve().then(o.bind(o, 2792)),
                Promise.resolve().then(o.bind(o, 22714)),
                Promise.resolve().then(o.bind(o, 37240)),
                Promise.resolve().then(o.bind(o, 3064)),
                Promise.resolve().then(o.bind(o, 51012)),
                Promise.resolve().then(o.bind(o, 9848)),
                Promise.resolve().then(o.bind(o, 47498)),
                Promise.resolve().then(o.bind(o, 8152)),
                Promise.resolve().then(o.bind(o, 43474)),
                Promise.resolve().then(o.bind(o, 46200)),
                Promise.resolve().then(o.bind(o, 5537)),
                Promise.resolve().then(o.bind(o, 34186)),
                Promise.resolve().then(o.bind(o, 56008)),
                Promise.resolve().then(o.bind(o, 67732)),
                Promise.resolve().then(o.bind(o, 30787)),
                Promise.resolve().then(o.bind(o, 65476)),
                Promise.resolve().then(o.bind(o, 83416)),
                Promise.resolve().then(o.bind(o, 31010)),
                Promise.resolve().then(o.bind(o, 19383)),
                Promise.resolve().then(o.bind(o, 3313)),
                Promise.resolve().then(o.bind(o, 81619)),
                Promise.resolve().then(o.bind(o, 83808)),
                Promise.resolve().then(o.bind(o, 22191)),
                Promise.resolve().then(o.bind(o, 14858)),
                Promise.resolve().then(o.bind(o, 61945)),
                Promise.resolve().then(o.bind(o, 83920)),
                Promise.resolve().then(o.bind(o, 49545)),
                Promise.resolve().then(o.bind(o, 3796)),
                Promise.resolve().then(o.bind(o, 40953)),
                Promise.resolve().then(o.bind(o, 30542)),
                Promise.resolve().then(o.bind(o, 59121)),
                Promise.resolve().then(o.bind(o, 71773)),
                Promise.resolve().then(o.bind(o, 34284)),
                Promise.resolve().then(o.bind(o, 46151)),
                Promise.resolve().then(o.bind(o, 32087)),
                Promise.resolve().then(o.bind(o, 5701)),
                Promise.resolve().then(o.bind(o, 10659)),
                Promise.resolve().then(o.bind(o, 68135)),
                Promise.resolve().then(o.bind(o, 75265)),
                Promise.resolve().then(o.bind(o, 36321)),
                Promise.resolve().then(o.bind(o, 29098)),
                Promise.resolve().then(o.bind(o, 92191)),
                Promise.resolve().then(o.bind(o, 27120)),
                Promise.resolve().then(o.bind(o, 53022)),
                Promise.resolve().then(o.bind(o, 22748)),
                Promise.resolve().then(o.bind(o, 84199)),
                Promise.resolve().then(o.bind(o, 81218)),
                Promise.resolve().then(o.bind(o, 90169)),
                Promise.resolve().then(o.bind(o, 6429)),
                Promise.resolve().then(o.bind(o, 44128)),
                Promise.resolve().then(o.bind(o, 31286)),
                Promise.resolve().then(o.bind(o, 92496)),
                Promise.resolve().then(o.bind(o, 21183)),
                Promise.resolve().then(o.bind(o, 59888)),
                Promise.resolve().then(o.bind(o, 95112)),
                Promise.resolve().then(o.bind(o, 57594)),
                Promise.resolve().then(o.bind(o, 26069)),
                Promise.resolve().then(o.bind(o, 4433)),
                Promise.resolve().then(o.bind(o, 50)),
                Promise.resolve().then(o.bind(o, 11262)),
                Promise.resolve().then(o.bind(o, 80792)),
                Promise.resolve().then(o.bind(o, 88424)),
                Promise.resolve().then(o.bind(o, 13528)),
                Promise.resolve().then(o.bind(o, 49932)),
                Promise.resolve().then(o.bind(o, 58534)),
                Promise.resolve().then(o.bind(o, 90357)),
                Promise.resolve().then(o.bind(o, 97755)),
                Promise.resolve().then(o.bind(o, 8097)),
                Promise.resolve().then(o.bind(o, 27373)),
                Promise.resolve().then(o.bind(o, 19620)),
                Promise.resolve().then(o.bind(o, 32156)),
                Promise.resolve().then(o.bind(o, 61376)),
                Promise.resolve().then(o.bind(o, 98148)),
                Promise.resolve().then(o.bind(o, 49522)),
                Promise.resolve().then(o.bind(o, 28563)),
                Promise.resolve().then(o.bind(o, 49518)),
                Promise.resolve().then(o.bind(o, 49346)),
                Promise.resolve().then(o.bind(o, 38223)),
                Promise.resolve().then(o.bind(o, 58237)),
                Promise.resolve().then(o.bind(o, 22369)),
                Promise.resolve().then(o.bind(o, 56367)),
                Promise.resolve().then(o.bind(o, 4914)),
                Promise.resolve().then(o.bind(o, 59833)),
                Promise.resolve().then(o.bind(o, 41566)),
                Promise.resolve().then(o.bind(o, 23042)),
                Promise.resolve().then(o.bind(o, 83755)),
                Promise.resolve().then(o.bind(o, 25160)),
                Promise.resolve().then(o.bind(o, 43679)),
                Promise.resolve().then(o.bind(o, 21027)),
                Promise.resolve().then(o.bind(o, 99752)),
                Promise.resolve().then(o.bind(o, 41972)),
                Promise.resolve().then(o.bind(o, 37711)),
                Promise.resolve().then(o.bind(o, 4820)),
                Promise.resolve().then(o.bind(o, 36011)),
                Promise.resolve().then(o.bind(o, 14388)),
                Promise.resolve().then(o.bind(o, 28724)),
                Promise.resolve().then(o.bind(o, 56664)),
                Promise.resolve().then(o.bind(o, 41812)),
                Promise.resolve().then(o.bind(o, 38420)),
                Promise.resolve().then(o.bind(o, 54290)),
                Promise.resolve().then(o.bind(o, 78570)),
                Promise.resolve().then(o.bind(o, 26452)),
                Promise.resolve().then(o.bind(o, 38936)),
                Promise.resolve().then(o.bind(o, 13798)),
                Promise.resolve().then(o.bind(o, 58054)),
                Promise.resolve().then(o.bind(o, 15509)),
                Promise.resolve().then(o.bind(o, 74694)),
                Promise.resolve().then(o.bind(o, 85377)),
                Promise.resolve().then(o.bind(o, 1444)),
                Promise.resolve().then(o.bind(o, 92744)),
                Promise.resolve().then(o.bind(o, 61258)),
                Promise.resolve().then(o.bind(o, 5592)),
                Promise.resolve().then(o.bind(o, 9634)),
                Promise.resolve().then(o.bind(o, 17584)),
                Promise.resolve().then(o.bind(o, 12894)),
                Promise.resolve().then(o.bind(o, 2694)),
                Promise.resolve().then(o.bind(o, 71730)),
                Promise.resolve().then(o.bind(o, 22734)),
                Promise.resolve().then(o.bind(o, 56037)),
                Promise.resolve().then(o.bind(o, 30584)),
                Promise.resolve().then(o.bind(o, 76385)),
                Promise.resolve().then(o.bind(o, 56059)),
                Promise.resolve().then(o.bind(o, 10180)),
                Promise.resolve().then(o.bind(o, 90326)),
                Promise.resolve().then(o.bind(o, 40229)),
                Promise.resolve().then(o.bind(o, 80195)),
                Promise.resolve().then(o.bind(o, 8264)),
                Promise.resolve().then(o.bind(o, 3630)),
                Promise.resolve().then(o.bind(o, 89363)),
                Promise.resolve().then(o.bind(o, 96677)),
                Promise.resolve().then(o.bind(o, 95432)),
                Promise.resolve().then(o.bind(o, 32562)),
                Promise.resolve().then(o.bind(o, 56568)),
                Promise.resolve().then(o.bind(o, 79884)),
                Promise.resolve().then(o.bind(o, 90048)),
                Promise.resolve().then(o.bind(o, 31236)),
                Promise.resolve().then(o.bind(o, 37340)),
                Promise.resolve().then(o.bind(o, 58345)),
                Promise.resolve().then(o.bind(o, 65755)),
                Promise.resolve().then(o.bind(o, 32152)),
                Promise.resolve().then(o.bind(o, 61748)),
                Promise.resolve().then(o.bind(o, 86844)),
                Promise.resolve().then(o.bind(o, 17106)),
                Promise.resolve().then(o.bind(o, 60244)),
                Promise.resolve().then(o.bind(o, 29268)),
                Promise.resolve().then(o.bind(o, 11260)),
                Promise.resolve().then(o.bind(o, 34925)),
                Promise.resolve().then(o.bind(o, 94218)),
                Promise.resolve().then(o.bind(o, 45257)),
                Promise.resolve().then(o.bind(o, 4008)),
                Promise.resolve().then(o.bind(o, 88523)),
                Promise.resolve().then(o.bind(o, 44390)),
                Promise.resolve().then(o.bind(o, 60194));
        },
        65868: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshTracksAvailability: () => i });
            var n = o(55178),
                r = o(49574);
            let i = () => {
                let e = (0, r.jRO)(),
                    s = (0, n.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksAvailability().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(r.EE.TRACKS_AVAILABILITY_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(r.EE.REFRESH_TRACKS_AVAILABILITY, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(r.EE.REFRESH_TRACKS_AVAILABILITY, s);
                        }
                    );
                }, [s]);
            };
        },
        70075: (e, s, o) => {
            'use strict';
            o.d(s, { useLaunch: () => i });
            var n = o(55178),
                r = o(49574);
            let i = () => {
                let e = (0, r.NFA)().get(r.vgk),
                    s = (0, n.useCallback)(() => {
                        let s = (0, r.HFS)();
                        s && e.count(s, 'installsCount');
                    }, [e]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(r.EE.FIRST_LAUNCH, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(r.EE.FIRST_LAUNCH, s);
                        }
                    );
                }, [s]);
            };
        },
        72618: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshRepositoryMeta: () => i });
            var n = o(55178),
                r = o(49574);
            let i = () => {
                let e = (0, r.jRO)(),
                    s = (0, n.useCallback)(() => {
                        e.tracksController &&
                            e.tracksController.refreshTracksMeta().then(() => {
                                var e;
                                null == (e = window.desktopEvents) || e.send(r.EE.REPOSITORY_META_UPDATED);
                            });
                    }, [e.tracksController]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(r.EE.REFRESH_REPOSITORY_META, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(r.EE.REFRESH_REPOSITORY_META, s);
                        }
                    );
                }, [s]);
            };
        },
        84856: (e, s, o) => {
            'use strict';
            o.d(s, { ClientConfigInitializer: () => n }), o(32290);
            let n = (e) => {
                let { env: s, nonce: o } = e;
                return null;
            };
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
        90312: (e, s, o) => {
            'use strict';
            o.d(s, { useSendPlayerState: () => l });
            var n = o(55178),
                r = o(91027),
                i = o(72676),
                t = o(49574);
            let l = (e) => {
                let { sonata: s } = e,
                    o = (0, r.c)((e) => {
                        var s;
                        let { isPlaying: o, canMoveBackward: n, canMoveForward: r } = e;
                        null == (s = window.desktopEvents) || s.send(t.EE.PLAYER_STATE, { isPlaying: o, canMoveBackward: n, canMoveForward: r });
                    });
                (0, n.useEffect)(() => {
                    let e,
                        n,
                        r =
                            null == s
                                ? void 0
                                : s.state.playerState.status.onChange((e) => {
                                      e && o({ isPlaying: e === i.MT.PLAYING });
                                  }),
                        t =
                            null == s
                                ? void 0
                                : s.state.currentContext.onChange(() => {
                                      var r, i;
                                      null == e || e(),
                                          null == n || n(),
                                          (e =
                                              null == s || null == (r = s.state.currentContext.value)
                                                  ? void 0
                                                  : r.availableActions.moveBackward.onChange((e) => {
                                                        o({ canMoveBackward: !!e });
                                                    })),
                                          (n =
                                              null == s || null == (i = s.state.currentContext.value)
                                                  ? void 0
                                                  : i.availableActions.moveForward.onChange((e) => {
                                                        o({ canMoveForward: !!e });
                                                    }));
                                  });
                    return () => {
                        null == r || r(), null == t || t(), null == n || n(), null == n || n();
                    };
                }, [o, null == s ? void 0 : s.state.currentContext, null == s ? void 0 : s.state.playerState.status]);
            };
        },
        91357: (e, s, o) => {
            'use strict';
            o.d(s, { useProbabilityBucket: () => i });
            var n = o(55178),
                r = o(49574);
            let i = () => {
                let e = (0, r.NFA)().get(r.vgk),
                    s = (0, n.useCallback)(
                        (s, o) => {
                            o && e.count(o, 'probabilityBucket');
                        },
                        [e],
                    );
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(r.EE.PROBABILITY_BUCKET, s),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(r.EE.PROBABILITY_BUCKET, s);
                        }
                    );
                }, [s]);
            };
        },
        91855: (e, s, o) => {
            'use strict';
            o.d(s, { ReleaseNotesModal: () => u });
            var n = o(32290),
                r = o(63618),
                i = o(96103),
                t = o(60900),
                l = o(60764),
                d = o(39407),
                a = o(84638),
                v = o(46049),
                h = o(71926),
                m = o(49574),
                b = o(89337),
                P = o.n(b);
            let c = {
                    ul: (e) => (0, n.jsx)('ul', { className: P().description, children: e }),
                    li: (e) => (0, n.jsx)('li', { className: P().item, children: e }),
                    code: (e) => (0, n.jsx)('code', { className: P().code, children: e }),
                    date: (e) => (0, n.jsx)('span', { className: P().date, children: e }),
                    p: (e) => (0, n.jsx)('p', { className: P().paragraph, children: e }),
                    br: (0, n.jsx)('br', {}),
                },
                u = (0, i.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: s, modal: o },
                        } = (0, m.Pjs)(),
                        { formatMessage: i } = (0, t.A)(),
                        { language: b, defaultLanguage: u } = (0, m.h6b)(),
                        E = (0, m.Crf)();
                    return (0, n.jsx)(a.a, {
                        title: i({ id: 'desktop.release-notes-modal-title' }),
                        open: o.isOpened,
                        onOpenChange: o.onOpenChange,
                        onClose: o.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: P().modalOverlay,
                        overlayColor: 'full',
                        labelClose: i({ id: 'interface-actions.close' }),
                        className: P().root,
                        headerClassName: P().modalHeader,
                        contentClassName: P().modalContent,
                        children: (0, n.jsx)(l.A, {
                            onError: E,
                            defaultLocale: u,
                            locale: b,
                            messages: null == e ? void 0 : e.data,
                            children: (0, n.jsx)(v.N, {
                                className: (0, r.$)(P().scrollableContent, P().important),
                                containerClassName: (0, r.$)(P().notes, P().important),
                                children:
                                    null == s
                                        ? void 0
                                        : s.map((e) =>
                                              (0, n.jsxs)(
                                                  'div',
                                                  {
                                                      className: P().note,
                                                      children: [
                                                          (0, n.jsx)(h.Heading, {
                                                              variant: 'h4',
                                                              className: (0, r.$)(P().version, P().important),
                                                              children: (0, m.Grs)(e),
                                                          }),
                                                          (0, n.jsx)(d.A, { id: e, values: c }),
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
        97693: (e, s, o) => {
            'use strict';
            o.d(s, { useApplicationDeeplinks: () => d });
            var n = o(21916),
                r = o(55178),
                i = o(91027),
                t = o(49574);
            let l = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let s = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!s) return e;
                            let o = s[1],
                                n = s[2] || '';
                            if (!o) return e;
                            let r = new URLSearchParams(n.startsWith('?') ? n.substring(1) : '');
                            return r.set('tab', o), '/?'.concat(r.toString());
                        },
                    ],
                    [/^\/home$/, () => t.Zyd.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => t.Zyd.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => t.Zyd.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => t.Zyd.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => t.Zyd.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => t.Zyd.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => t.Zyd.collection.href],
                    [/^\/users\/(.*)\/history$/, () => t.Zyd.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let s = new URLSearchParams(e.split('?')[1]);
                            s.set(t.K3F.DEEPLINK, t.vEM.PLAY_VIBE);
                            let o = new URLSearchParams(window.location.search),
                                n = (0, t.$cg)(o, s);
                            return 'landing' === s.get(t.K3F.SCREEN) ? '/?'.concat(n.toString()) : ''.concat(window.location.pathname, '?').concat(n.toString());
                        },
                    ],
                ],
                d = () => {
                    let e = (0, n.useRouter)(),
                        s = (0, i.c)((s, o) => {
                            for (let [s, n] of l) if (s.test(o)) return void e.push(n(o));
                            let { href: n } = (0, t.uvd)(null != o ? o : t.Zyd.main.href);
                            e.push(n);
                        });
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.OPEN_DEEPLINK, s),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.OPEN_DEEPLINK, s);
                            }
                        );
                    }, [s]);
                };
        },
    },
    (e) => {
        e.O(
            0,
            [
                1670, 3445, 1891, 7923, 9745, 4826, 5969, 7236, 9221, 4567, 6328, 4394, 6375, 7550, 4086, 4520, 6351, 2287, 9580, 3693, 2537, 13, 9312, 3169, 9204, 5224,
                745, 8414, 2449, 7511, 2575, 5927, 8153, 7182, 2497, 1311, 7764, 6706, 1588, 5201, 3267, 9769, 4250, 1675, 4154, 5283, 9215, 9574, 4574, 5428, 6049, 4089,
                6486, 3317, 864, 3843, 112, 6043, 3557, 4973, 4942, 6758, 2127, 6687, 1403, 4547, 479, 5870, 175, 2994, 1887, 8451, 8735, 5542, 3283, 2812, 2e3, 9652,
                1931, 1402, 4068, 8665, 4220, 9562, 7358,
            ],
            () => e((e.s = 62198)),
        ),
            (_N_E = e.O());
    },
]);
