(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => s, W: () => o });
            var n = a(55178);
            let s = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                o = () => (0, n.useContext)(s);
        },
        1204: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => n });
            var n = (function (e) {
                return (e.PLAY_VIBE = 'play-vibe'), (e.SHOW_MULTIVIBE_PROMO = 'show-multivibe-promo'), (e.SHOW_MULTIVIBE_INVITE = 'show-multivibe-invite'), e;
            })({});
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
        10790: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => o, q: () => s });
            let n = new Set(),
                s = (e) => (
                    n.add(e),
                    () => {
                        n.delete(e);
                    }
                ),
                o = () => {
                    n.forEach((e) => {
                        e();
                    });
                };
        },
        12818: () => {},
        15808: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => n });
            var n = (function (e) {
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
        22687: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 29680)),
                Promise.resolve().then(a.bind(a, 25366)),
                Promise.resolve().then(a.t.bind(a, 36131, 23)),
                Promise.resolve().then(a.t.bind(a, 12818, 23)),
                Promise.resolve().then(a.bind(a, 39670)),
                Promise.resolve().then(a.bind(a, 75170)),
                Promise.resolve().then(a.bind(a, 96096)),
                Promise.resolve().then(a.bind(a, 57510)),
                Promise.resolve().then(a.bind(a, 49932));
        },
        25366: (e, t, a) => {
            'use strict';
            a.d(t, {
                DesktopInitializer: () => j,
                sendDownloadTrack: () => sendDownloadTrack,
                sendDownloadCurrentTrack: () => sendDownloadCurrentTrack,
                sendDownloadTracks: () => sendDownloadTracks,
                sendYnisonState: () => sendYnisonState,
            });
            var n = a(32290),
                s = a(55178),
                o = a(15808),
                r = a(14257),
                l = a(21916),
                i = a(91027),
                c = a(20472),
                b = a(1204),
                d = a(97201),
                N = a(36477);
            let sendDownloadTrack = (e, t) => {
                    var a;
                    null == (a = window.desktopEvents) || a.send(o.E.DOWNLOAD_TRACK, e, t);
                },
                sendDownloadCurrentTrack = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(o.E.DOWNLOAD_CURRENT_TRACK, e);
                },
                sendDownloadTracks = (e, t, a) => {
                    var n;
                    null == (n = window.desktopEvents) || n.send(o.E.DOWNLOAD_TRACKS, e, t, a);
                },
                sendYnisonState = (e) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(o.E.YNISON_STATE, { rawData: e.rawData });
                },
                u = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let a = t[1],
                                n = t[2] || '';
                            if (!a) return e;
                            let s = new URLSearchParams(n.startsWith('?') ? n.substring(1) : '');
                            return s.set('tab', a), '/?'.concat(s.toString());
                        },
                    ],
                    [/^\/home$/, () => c.Z.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/history$/, () => c.Z.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let t = new URLSearchParams(e.split('?')[1]);
                            t.set(d.K.DEEPLINK, b.v.PLAY_VIBE);
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
                            return 'landing' === t.get(d.K.SCREEN) ? '/?'.concat(a.toString()) : ''.concat(window.location.pathname, '?').concat(a.toString());
                        },
                    ],
                ];
            var x = a(60900),
                E = a(45477),
                W = a(75582),
                _ = a(63618),
                v = a(21732),
                A = a(63423),
                T = a(71926),
                I = a(58534),
                p = a(8623),
                m = a.n(p);
            let S = (e) => {
                    let { version: t, formatMessage: a, closeToast: r } = e,
                        l = (0, s.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(o.E.INSTALL_UPDATE), null == r || r();
                        }, [r]),
                        i = (0, s.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(T.HL, {
                                            className: m().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-update-available' }, { version: t }),
                                        }),
                                        (0, n.jsx)(A.$, {
                                            className: m().button,
                                            onClick: l,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            'data-test-id': v.Kq.appUpdate.APP_UPDATE_NOTIFICATION_BUTTON,
                                            children: (0, n.jsx)(T.HL, { variant: 'div', type: 'controls', size: 'm', children: a({ id: 'desktop.update' }) }),
                                        }),
                                    ],
                                }),
                            [a, l, t],
                        );
                    return (0, n.jsx)(I.$, { className: (0, _.$)(m().root, m().important), message: i });
                },
                modUpdateToast = (e) => {
                    let { version: t, formatMessage: a, closeToast: r } = e,
                        [l, i] = (0, s.useState)(-1),
                        c = (0, s.useCallback)(() => {
                            window.desktopEvents?.send?.(o.E.INSTALL_MOD_UPDATE), null == r || r();
                        }, [r]),
                        b = (0, s.useCallback)(() => {
                            window.desktopEvents?.send?.(o.E.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        d = (e) => {
                            let t = a({ id: 'offline.download' });
                            return e < 0 ? (t = a({ id: 'offline.download' })) : e >= 0 && e <= 100 ? (t = 'Скачивание…') : e > 100 && (t = 'Установить'), t;
                        },
                        N = (0, s.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(T.HL, {
                                            className: m().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-mod-update-available' }, { version: t }),
                                        }),
                                        (0, n.jsx)(A.$, {
                                            className: m().button,
                                            onClick: l <= 100 ? b : c,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: l <= 100 && l >= 0,
                                            children: (0, n.jsx)(T.HL, { variant: 'div', type: 'controls', size: 'm', children: d(l) }),
                                        }),
                                    ],
                                }),
                            [a, c, t, l, b],
                        ),
                        u = (0, s.useCallback)((e, t, a, n = 0) => {
                            if ('modUpdateToast' !== t) return;
                            if (window.dedupeNonces && window.dedupeNonces[t] === n) return;
                            window.dedupeNonces || (window.dedupeNonces = {}), n && (window.dedupeNonces[t] = n), i(a);
                        }, []);
                    return (
                        (0, s.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(o.E.PROGRESS_BAR_CHANGE, u),
                                () => {
                                    window.desktopEvents?.off?.(o.E.PROGRESS_BAR_CHANGE, u);
                                }
                            );
                        }, [u]),
                        (0, s.useEffect)(() => {
                            let e = () => {
                                null == r || r();
                            };
                            return (
                                window.desktopEvents?.on?.(o.E.MOD_UPDATE_AVAILABLE, e),
                                () => {
                                    window.desktopEvents?.off?.(o.E.MOD_UPDATE_AVAILABLE, e);
                                }
                            );
                        }, [r]),
                        (0, n.jsxs)(I.$, {
                            className: (0, _.$)(m().root, m().important),
                            message: N,
                            children: [
                                (0, n.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: l + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: l <= 100 ? 0.1 : 0,
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
                            message: r,
                            buttonLabel: l,
                            onButtonClick: i,
                            disabled: c = !1,
                            dismissOnButtonClick: b = !1,
                            createNonce: d = 0,
                        } = e,
                        [N, u] = (0, s.useState)(-1),
                        [x, E] = (0, s.useState)('Ожидание...'),
                        W = '__pulseToastProgressCache',
                        p = (0, s.useCallback)(() => {
                            null == i || i(), b && (null == t || t());
                        }, [b, i, t]),
                        P = (0, s.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(T.HL, { className: m().text, variant: 'div', type: 'controls', size: 'm', children: r.replace('#s', x) }),
                                        l &&
                                            (0, n.jsx)(A.$, {
                                                className: m().button,
                                                onClick: p,
                                                variant: 'default',
                                                color: 'secondary',
                                                size: 'xs',
                                                radius: 'xxxl',
                                                disabled: c,
                                                children: (0, n.jsx)(T.HL, { variant: 'div', type: 'controls', size: 'm', children: l }),
                                            }),
                                    ],
                                }),
                            [c, l, r, p, x],
                        ),
                        L = (0, s.useCallback)(
                            (e, t, n, s = 0, o = void 0, r = 0) => {
                                if (t !== a) return;
                                if (r && d && r !== d) return;
                                if (window.dedupeNonces && window.dedupeNonces[t] === s) return;
                                window.dedupeNonces || (window.dedupeNonces = {}),
                                    s && (window.dedupeNonces[t] = s),
                                    window[W] || (window[W] = {}),
                                    (window[W][t] = { progress: n, label: o }),
                                    u(n),
                                    o && E(o);
                            },
                            [a, d],
                        ),
                        C = (0, s.useCallback)(
                            (e, n, s = 0, o = 0) => {
                                if (o && d && o !== d) return;
                                if (window['onBasicToastDismiss' + a] === s) return;
                                s && (window['onBasicToastDismiss' + a] = s), n === a && (window[W] && delete window[W][a], null == t || t());
                            },
                            [t, a, d],
                        );
                    return (
                        (0, s.useEffect)(() => {
                            let e = window[W] && window[W][a];
                            e && (u(e.progress), e.label && E(e.label));
                            return () => {
                                window[W] && delete window[W][a];
                            };
                        }, [a]),
                        (0, s.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(o.E.PROGRESS_BAR_CHANGE, L),
                                () => {
                                    window.desktopEvents?.off?.(o.E.PROGRESS_BAR_CHANGE, L);
                                }
                            );
                        }, [L]),
                        (0, s.useEffect)(() => {
                            return (
                                window.desktopEvents?.on?.(o.E.BASIC_TOAST_DISMISS, C),
                                () => {
                                    window.desktopEvents?.off?.(o.E.BASIC_TOAST_DISMISS, C);
                                }
                            );
                        }, [C]),
                        (0, n.jsxs)(I.$, {
                            className: (0, _.$)(m().root, m().important),
                            message: P,
                            children: [
                                (0, n.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: N + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: N <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                };
            var P = a(70204),
                L = a(34186),
                C = a(39472),
                D = a(57594),
                h = a(10790),
                f = a(88964),
                R = a(96103),
                k = a(60764),
                O = a(39407),
                g = a(84638),
                w = a(46049);
            a(75717);
            var y = a(35174),
                M = a(61945),
                F = a(89337),
                V = a.n(F);
            let B = {
                    ul: (e) => (0, n.jsx)('ul', { className: V().description, children: e }),
                    li: (e) => (0, n.jsx)('li', { className: V().item, children: e }),
                    code: (e) => (0, n.jsx)('code', { className: V().code, children: e }),
                    date: (e) => (0, n.jsx)('span', { className: V().date, children: e }),
                    p: (e) => (0, n.jsx)('p', { className: V().paragraph, children: e }),
                    br: (0, n.jsx)('br', {}),
                },
                U = (0, R.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: a },
                        } = (0, D.g)(),
                        { formatMessage: s } = (0, x.A)(),
                        { language: o, defaultLanguage: r } = (0, M.h)(),
                        l = (0, y.C)();
                    return (0, n.jsx)(g.a, {
                        title: s({ id: 'desktop.release-notes-modal-title' }),
                        open: a.isOpened,
                        onOpenChange: a.onOpenChange,
                        onClose: a.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: V().modalOverlay,
                        overlayColor: 'full',
                        labelClose: s({ id: 'interface-actions.close' }),
                        className: V().root,
                        headerClassName: V().modalHeader,
                        contentClassName: V().modalContent,
                        containerProps: { 'data-test-id': v.Kq.releaseNotes.RELEASE_NOTES_MODAL },
                        closeButtonProps: { 'data-test-id': v.Kq.releaseNotes.RELEASE_NOTES_MODAL_CLOSE_BUTTON },
                        children: (0, n.jsx)(k.A, {
                            onError: l,
                            defaultLocale: r,
                            locale: o,
                            messages: null == e ? void 0 : e.data,
                            children: (0, n.jsx)(w.N, {
                                className: (0, _.$)(V().scrollableContent, V().important),
                                containerClassName: (0, _.$)(V().notes, V().important),
                                children:
                                    null == t
                                        ? void 0
                                        : t.map((e) =>
                                              (0, n.jsxs)(
                                                  'div',
                                                  {
                                                      className: V().note,
                                                      children: [
                                                          (0, n.jsx)(T.DZ, {
                                                              variant: 'h4',
                                                              className: (0, _.$)(V().version, V().important),
                                                              'data-test-id': v.Kq.releaseNotes.RELEASE_NOTES_VERSION,
                                                              children: ((e) => {
                                                                  var t;
                                                                  return null != (t = e.split('desktop-release-notes.')[1]) ? t : '';
                                                              })(e),
                                                          }),
                                                          (0, n.jsx)('div', {
                                                              'data-test-id': v.Kq.releaseNotes.RELEASE_NOTES_TEXT,
                                                              children: (0, n.jsx)(O.A, { id: e, values: B }),
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
            var Y = a(50);
            let j = () => {
                let { language: e } = (0, M.h)();
                {
                    let { theme: t } = (0, Y.W)(),
                        a = (0, L.N)().get(P.vg);
                    (() => {
                        let [e, t] = (0, s.useState)(!1),
                            {
                                releaseNotes: { setTranslationsReleaseNotes: a, isReady: n, modal: r, setSortedDescReleaseNotesKeys: l },
                            } = (0, D.g)(),
                            i = (0, s.useCallback)(
                                (e, n) => {
                                    let { needToShowReleaseNotes: s, sortedDescReleaseNotesKeys: o, translationsReleaseNotes: r } = n;
                                    a(r), l(o), s && t(!0);
                                },
                                [l, a],
                            );
                        (0, s.useEffect)(() => {
                            e && n && (r.open(), t(!1));
                        }, [n, r, e]),
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.LOAD_RELEASE_NOTES, i),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.LOAD_RELEASE_NOTES, i);
                                    }
                                );
                            }, [i]);
                    })(),
                        (() => {
                            let { formatMessage: e } = (0, x.A)(),
                                { notify: t } = (0, W.l)(),
                                { notify: a, dismiss: r } = (0, W.l)(),
                                { notify: l } = (0, W.l)(),
                                { notify: i } = (0, W.l)(),
                                { notify: c } = (0, W.l)(),
                                b = (0, s.useRef)(''),
                                d = (0, s.useCallback)(
                                    (a, r) => {
                                        b.current !== r && ((b.current = r), t((0, n.jsx)(S, { formatMessage: e, version: r }), { containerId: E.u.IMPORTANT }));
                                    },
                                    [e, b, t],
                                ),
                                N = (0, s.useCallback)(
                                    (t, l, i, c = 0) => {
                                        if (window.modUpdateAvailableEventDedupeNonce === c) return;
                                        c && (window.modUpdateAvailableEventDedupeNonce = c),
                                            a((0, n.jsx)(modUpdateToast, { formatMessage: e, version: `${l} -> ${i}`, closeToast: r }), { containerId: E.u.IMPORTANT });
                                    },
                                    [e, a, r],
                                ),
                                u = (0, s.useCallback)(() => {
                                    window.desktopEvents?.send(o.E.APPLICATION_RESTART);
                                }, []),
                                P = (0, s.useCallback)(
                                    (e, t = 'GPU_STALL', a = 0) => {
                                        if (window.onGPUStallEventDedupeNonce === a) return;
                                        a && (window.onGPUStallEventDedupeNonce = a),
                                            l(
                                                (0, n.jsx)(toastWithProgress, {
                                                    toastID: 'GPU_STALL',
                                                    message: `Аппаратное ускорение отключилось: ${t}`,
                                                    buttonLabel: 'Исправить',
                                                    onButtonClick: u,
                                                }),
                                                { containerId: E.u.IMPORTANT },
                                            );
                                    },
                                    [l, u],
                                ),
                                L = (0, s.useCallback)(() => {
                                    window.desktopEvents?.send(o.E.APP_STALL_CANCEL_RESTART);
                                }, []),
                                C = (0, s.useCallback)(
                                    (e, t = 0) => {
                                        if (window.onAppStallStallDedupeNonce === t) return;
                                        (window.onAppStallStallDedupeNonce = t),
                                            i(
                                                (0, n.jsx)(toastWithProgress, {
                                                    toastID: 'safeModeRestart',
                                                    message: 'Плеер запускается слишком долго. Перезагрузка в безопасном режиме через #s',
                                                    buttonLabel: 'Отменить',
                                                    onButtonClick: L,
                                                    dismissOnButtonClick: !0,
                                                }),
                                                { containerId: E.u.IMPORTANT },
                                            );
                                    },
                                    [i, L],
                                ),
                                D = (0, s.useCallback)(
                                    (e, t, a, r, l = 0, i, b) => {
                                        if (window['onBasicToastCreate' + t] === l) return;
                                        l && (window['onBasicToastCreate' + t] = l),
                                            window['onBasicToastDismiss' + t] && delete window['onBasicToastDismiss' + t],
                                            window.dedupeNonces && delete window.dedupeNonces[t],
                                            window.__pulseToastProgressCache && delete window.__pulseToastProgressCache[t],
                                            c(
                                                (0, n.jsx)(toastWithProgress, {
                                                    toastID: t,
                                                    message: a,
                                                    buttonLabel: r || void 0,
                                                    onButtonClick: i ? () => window.desktopEvents?.send(i, b) : void 0,
                                                    dismissOnButtonClick: !!r,
                                                    createNonce: l,
                                                }),
                                                { containerId: E.u.IMPORTANT },
                                            );
                                    },
                                    [c],
                                );
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.UPDATE_AVAILABLE, d),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.UPDATE_AVAILABLE, d);
                                    }
                                );
                            }, [d]),
                                (0, s.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(o.E.BASIC_TOAST_CREATE, D),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(o.E.BASIC_TOAST_CREATE, D);
                                        }
                                    );
                                }, [D]),
                                (0, s.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(o.E.MOD_UPDATE_AVAILABLE, N),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(o.E.MOD_UPDATE_AVAILABLE, N);
                                        }
                                    );
                                }, [N]),
                                (0, s.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(o.E.GPU_STALL, P),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(o.E.GPU_STALL, P);
                                        }
                                    );
                                }, [P]),
                                (0, s.useEffect)(() => {
                                    var e;
                                    return (
                                        null == (e = window.desktopEvents) || e.on(o.E.APP_STALL, C),
                                        () => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.off(o.E.APP_STALL, C);
                                        }
                                    );
                                }, [C]);
                        })(),
                        (() => {
                            let { library: e, experiments: t } = (0, D.g)(),
                                a = (0, s.useCallback)(() => {
                                    t.getData(), e.getData(), (0, h.Q)();
                                }, [t, e]);
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.REFRESH_APPLICATION_DATA, a),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.REFRESH_APPLICATION_DATA, a);
                                    }
                                );
                            }, [a]);
                        })(),
                        (() => {
                            let e = (0, l.useRouter)(),
                                t = (0, i.c)((t, a) => {
                                    for (let [t, n] of u) if (t.test(a)) return void e.push(n(a));
                                    let { href: n } = (0, N.u)(null != a ? a : c.Z.main.href);
                                    e.push(n);
                                });
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.OPEN_DEEPLINK, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.OPEN_DEEPLINK, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, L.N)().get(P.vg),
                                t = (0, s.useCallback)(
                                    (t, a) => {
                                        a && e.count(a, 'probabilityBucket');
                                    },
                                    [e],
                                );
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.PROBABILITY_BUCKET, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.PROBABILITY_BUCKET, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, L.N)().get(P.vg),
                                t = (0, s.useCallback)(() => {
                                    let t = (0, C.H)();
                                    t && e.count(t, 'installsCount');
                                }, [e]);
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.FIRST_LAUNCH, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.FIRST_LAUNCH, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, f.j)(),
                                t = (0, s.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksMeta().then(() => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.send(o.E.REPOSITORY_META_UPDATED);
                                        });
                                }, [e.tracksController]);
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.REFRESH_REPOSITORY_META, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.REFRESH_REPOSITORY_META, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, f.j)(),
                                t = (0, s.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksAvailability().then(() => {
                                            var e;
                                            null == (e = window.desktopEvents) || e.send(o.E.TRACKS_AVAILABILITY_UPDATED);
                                        });
                                }, [e.tracksController]);
                            (0, s.useEffect)(() => {
                                var e;
                                return (
                                    null == (e = window.desktopEvents) || e.on(o.E.REFRESH_TRACKS_AVAILABILITY, t),
                                    () => {
                                        var e;
                                        null == (e = window.desktopEvents) || e.off(o.E.REFRESH_TRACKS_AVAILABILITY, t);
                                    }
                                );
                            }, [t]);
                        })(),
                        (0, s.useEffect)(() => {
                            ((e) => {
                                var t;
                                null == (t = window.desktopEvents) || t.send(o.E.APPLICATION_READY, e);
                            })(e),
                                document.addEventListener('auxclick', (e) => e.preventDefault()),
                                document.addEventListener('click', (e) => {
                                    (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                                });
                        }, [e]),
                        (0, s.useEffect)(() => {
                            let e = (0, C.H)();
                            e && a.count(e, 'appVersion');
                        }, [a]),
                        (0, s.useEffect)(() => {
                            t &&
                                (((e) => {
                                    let t = e === r.S.Light ? '#FFFFFF' : '#000000';
                                    window.desktopEvents.send(o.E.APPLICATION_THEME, t);
                                })(t),
                                a.count(t, 'appTheme'));
                        }, [t]);
                }
                return (0, n.jsx)(U, {});
            };
        },
        34291: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            let n = 'system';
        },
        35174: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            var n = a(55178),
                s = a(19805),
                o = a(62376);
            let r = () => {
                let e = (0, o.U)();
                return (0, n.useCallback)(
                    (t) => {
                        if ('code' in t && t.code === s.lo.MISSING_DATA) return;
                        let a = t && 'object' == typeof t && 'code' in t && t.code,
                            n = 'IntlProviderError';
                        a && (n += ':'.concat(a)), e.error(n, { error: null == t ? void 0 : t.message, stack: null == t ? void 0 : t.stack });
                    },
                    [e],
                );
            };
        },
        36131: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        39472: (e, t, a) => {
            'use strict';
            function n() {
                return window.VERSION;
            }
            a.d(t, { H: () => n });
        },
        42040: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s, V: () => o });
            var n = a(14257);
            let s = () => window.matchMedia('(prefers-color-scheme: light)'),
                o = () => {
                    let e = s();
                    return (null == e ? void 0 : e.matches) ? n.S.Light : n.S.Dark;
                };
        },
        43352: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => o });
            var n = a(75314),
                s = a(14257);
            let o = (e) => {
                document.body.classList.remove(...Object.values(n.o)), e && Object.values(s.S).includes(e) && document.body.classList.add(n.o[e]);
            };
        },
        49932: (e, t, a) => {
            'use strict';
            a.d(t, { ApplicationInformationHeadTags: () => s });
            var n = a(32290);
            let s = (e) => {
                let { assetPrefix: t } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('link', { rel: 'icon', type: 'image/png', sizes: '48x48', href: ''.concat(t, '/favicon-48x48.png') }),
                        (0, n.jsx)('link', { rel: 'icon', type: 'image/svg+xml', href: ''.concat(t, '/favicon.svg') }),
                        (0, n.jsx)('link', { rel: 'shortcut icon', href: ''.concat(t, '/favicon.ico') }),
                        (0, n.jsx)('link', { rel: 'apple-touch-icon', sizes: '180x180', href: ''.concat(t, '/apple-touch-icon.png') }),
                        (0, n.jsx)('link', { rel: 'manifest', crossOrigin: 'use-credentials', href: ''.concat(t, '/site.webmanifest') }),
                        (0, n.jsx)('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
                        (0, n.jsx)('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
                        (0, n.jsx)('meta', { name: 'apple-mobile-web-app-title', content: 'Яндекс Музыка' }),
                        (0, n.jsx)('link', {
                            rel: 'search',
                            type: 'application/opensearchdescription+xml',
                            title: 'Яндекс Музыка',
                            href: ''.concat(t, '/opensearch.xml'),
                        }),
                        (0, n.jsx)('meta', { name: 'robots', content: 'noyaca' }),
                    ],
                });
            };
        },
        57510: (e, t, a) => {
            'use strict';
            a.d(t, { TranslationsProvider: () => l });
            var n = a(32290),
                s = a(60764),
                o = a(35174),
                r = a(61945);
            let l = (e) => {
                let { children: t } = e,
                    { dictionary: a, language: l, defaultLanguage: i } = (0, r.h)(),
                    c = (0, o.C)();
                return (0, n.jsx)(s.A, { onError: c, defaultLocale: i, locale: l, messages: a, children: t });
            };
        },
        58741: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => n });
            var n = (function (e) {
                return (e.MACOS = 'darwin'), (e.WINDOWS = 'win32'), (e.LINUX = 'linux'), e;
            })({});
        },
        61945: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var n = a(55178),
                s = a(70204),
                o = a(34186);
            let r = () => {
                let e = (0, o.N)().get(s.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    r = e.getDictionary(),
                    l = e.getAvailableLanguages(),
                    i = (0, n.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, n.useMemo)(() => ({ dictionary: r, language: t, defaultLanguage: a, availableLanguages: l, setLanguage: i }), [t, i]);
            };
        },
        72733: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var n = a(91027),
                s = a(19379),
                o = a(14257);
            let r = (e) => {
                let t = (0, n.c)((t) => {
                    e.set(s.c.Theme, t, { expires: 180 });
                });
                return {
                    getThemeFromStorage: (0, n.c)(() => {
                        let a = e.get(s.c.Theme);
                        return a && Object.values(o.S).includes(a) ? (t(a), a) : null;
                    }),
                    setThemeToStorage: t,
                };
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => o, o: () => s });
            var n = a(14257);
            let s = { [n.S.Dark]: 'ym-dark-theme', [n.S.Light]: 'ym-light-theme' },
                o = (e) => {
                    switch (e) {
                        case n.S.Light:
                        case n.S.Dark:
                            return s[e];
                        default:
                            return '';
                    }
                };
        },
        76232: (e, t, a) => {
            'use strict';
            var n;
            a.d(t, { e: () => n }),
                (function (e) {
                    (e.HIGH_QUALITY = 'high_quality'), (e.BALANCED = 'balanced'), (e.EFFICIENT = 'efficient'), (e.PREVIEW = 'preview');
                })(n || (n = {}));
        },
        79406: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayAudioHeartBeat = 'WebNextPlayAudioHeartBeat'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextUseWaveQueue = 'WebNextUseWaveQueue'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextErids = 'WebNextErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextResetWaveSeeds = 'WebNextResetWaveSeeds'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextFlushDeferredFeedbacksOnContextSwitch = 'WebNextFlushDeferredFeedbacksOnContextSwitch'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextRealTimeWheelFeedbacks = 'WebNextRealTimeWheelFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextVibeQueueButtonLoginPopover = 'WebNextVibeQueueButtonLoginPopover'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextQ2VContextColor = 'WebNextQ2VContextColor'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    e
                );
            })({});
        },
        88964: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => o });
            var n = a(70204),
                s = a(34186);
            function o() {
                return (0, s.N)().get(n.y$);
            }
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
        96096: (e, t, a) => {
            'use strict';
            a.d(t, { ThemeProvider: () => x });
            var n = a(32290),
                s = a(55178),
                o = a(91027),
                r = a(70204),
                l = a(34186),
                i = a(43352),
                c = a(34291),
                b = a(42040),
                d = a(72733),
                N = a(50),
                u = a(9634);
            let x = (e) => {
                let { children: t, predefinedTheme: a } = e,
                    x = (0, l.N)().get(r.oo),
                    { getThemeFromStorage: E, setThemeToStorage: W } = (0, d.Q)(x),
                    [_, v] = (0, s.useState)(() => (null != a ? a : E())),
                    A = (0, o.c)((e) => {
                        E() || a || (W(c.W), v(e));
                    });
                (0, s.useLayoutEffect)(() => {
                    a || (0, i.Z)(_);
                }, [_, a]),
                    ((e) => {
                        let { onSystemThemeChange: t } = e,
                            a = (0, o.c)(() => {
                                t((0, b.V)());
                            });
                        (0, s.useLayoutEffect)(() => {
                            let e = (0, b.Q)();
                            return (
                                null == e || e.addEventListener('change', a),
                                () => {
                                    null == e || e.removeEventListener('change', a);
                                }
                            );
                        }, [a]);
                    })({ onSystemThemeChange: A }),
                    (0, s.useLayoutEffect)(() => {
                        A((0, b.V)());
                    }, [A]);
                let T = (0, s.useMemo)(() => ({ theme: _, setTheme: v }), [_]);
                return (0, n.jsx)(N.D.Provider, { value: T, children: (0, n.jsx)(s.Suspense, { fallback: (0, n.jsx)(u.MainSuspenseLoader, {}), children: t }) });
            };
        },
        97201: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var n = (function (e) {
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
        97323: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => n });
            var n = (function (e) {
                return (e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 4755, 8153, 7182, 2497, 6639, 6706, 1311, 1588, 8892, 2536, 66, 5835, 2812, 8035, 1410, 6252, 1330, 9736, 6149, 6477, 7275, 2586, 8347, 4522, 6874,
                861, 4638, 1647, 4547, 5283, 9385, 4220, 9562, 7358,
            ],
            () => e((e.s = 22687)),
        ),
            (_N_E = e.O());
    },
]);
