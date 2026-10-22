(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9450],
    {
        1085: (e, L, t) => {
            'use strict';
            t.d(L, { C: () => l });
            var a = t(74631),
                o = t(84e3),
                r = t(90725);
            let l = () => {
                let e = (0, o.U)();
                return (0, a.useCallback)(
                    (L) => {
                        ((e, L) => {
                            if ('code' in e && e.code === r.lo.MISSING_DATA) return;
                            let t = e && 'object' == typeof e && 'code' in e && e.code,
                                a = 'IntlProviderError';
                            (t && (a += ':'.concat(t)), L.error(a, { error: null == e ? void 0 : e.message, stack: null == e ? void 0 : e.stack }));
                        })(L, e);
                    },
                    [e],
                );
            };
        },
        2579: (e, L, t) => {
            'use strict';
            t.d(L, { TitleBar: () => d });
            var a = t(25839),
                o = t(82298),
                r = t(88204),
                l = t(74631),
                s = t(39004),
                n = t(27954),
                i = t(12061),
                c = t.n(i);
            let u = (e) => {
                    let { children: L, className: t, onClick: r, ariaLabel: l, withSecondaryColor: s } = e;
                    return (0, a.jsx)('button', {
                        type: 'button',
                        className: (0, o.$)(c().button, { [c().button_withSecondaryColor]: s }, t),
                        onClick: r,
                        'aria-label': l,
                        children: L,
                    });
                },
                d = (0, r.PA)((e) => {
                    let { withSecondaryColor: L } = e,
                        { settings: t } = (0, n.g)(),
                        r = t.isWindowsApplication || t.isLinuxApplication,
                        { formatMessage: i } = (0, s.A)(),
                        d = (0, l.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.musicDesktop) || e.window.minimize();
                            })();
                        }, []),
                        p = (0, l.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.musicDesktop) || e.window.maximize();
                            })();
                        }, []),
                        m = (0, l.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.musicDesktop) || e.window.close();
                            })();
                        }, []);
                    return (0, a.jsx)('div', {
                        className: c().root,
                        onDoubleClick: p,
                        children:
                            r &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u, {
                                        onClick: d,
                                        ariaLabel: i({ id: 'windows-menu.roll-up' }),
                                        withSecondaryColor: L,
                                        children: (0, a.jsx)('svg', {
                                            width: '10',
                                            height: '1',
                                            viewBox: '0 0 10 1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(c().icon, { [c().icon_withSecondaryColor]: L }),
                                            children: (0, a.jsx)('path', {
                                                d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)(u, {
                                        onClick: p,
                                        ariaLabel: i({ id: 'windows-menu.unwrap' }),
                                        withSecondaryColor: L,
                                        children: (0, a.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(c().icon, { [c().icon_withSecondaryColor]: L }),
                                            children: (0, a.jsx)('path', {
                                                d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                fill: 'currentColor',
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)(u, {
                                        className: c().closeButton,
                                        onClick: m,
                                        ariaLabel: i({ id: 'windows-menu.close' }),
                                        children: (0, a.jsx)('svg', {
                                            width: '10',
                                            height: '10',
                                            viewBox: '0 0 10 10',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, o.$)(c().icon, { [c().icon_withSecondaryColor]: L }),
                                            children: (0, a.jsx)('path', {
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
        6969: (e, L, t) => {
            'use strict';
            t.d(L, { K: () => a });
            var a = (function (e) {
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
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        12061: (e) => {
            e.exports = {
                root: 'TitleBar_root__QjdOZ',
                button: 'TitleBar_button__9MptL',
                button_withSecondaryColor: 'TitleBar_button_withSecondaryColor__oIkuo',
                icon: 'TitleBar_icon__8Wji9',
                icon_withSecondaryColor: 'TitleBar_icon_withSecondaryColor__vuw6G',
                closeButton: 'TitleBar_closeButton__Epxh7',
            };
        },
        12714: (e, L, t) => {
            'use strict';
            t.d(L, { J: () => r, o: () => o });
            var a = t(49337);
            let o = { [a.S.Dark]: 'ym-dark-theme', [a.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case a.S.Light:
                        case a.S.Dark:
                            return o[e];
                        default:
                            return '';
                    }
                };
        },
        15305: (e) => {
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
        17244: (e, L, t) => {
            'use strict';
            t.d(L, { v: () => a });
            var a = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        34656: (e, L, t) => {
            'use strict';
            t.d(L, { Z: () => r });
            var a = t(12714),
                o = t(49337);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(a.o)), e && Object.values(o.S).includes(e) && document.body.classList.add(a.o[e]));
            };
        },
        39187: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        43869: (e, L, t) => {
            'use strict';
            t.d(L, { DesktopInitializer: () => Q });
            var a,
                o = t(25839),
                r = t(74631);
            (t(93588),
                !(function (e) {
                    ((e.LIGHT = 'light'), (e.DARK = 'dark'));
                })(a || (a = {})));
            var l = t(49337),
                s = t(84059),
                n = t(89288),
                i = t(71035),
                c = t(53712),
                u = t(17244),
                d = t(6969),
                p = t(25895),
                m = t(74310);
            let v = m.b.regexPatterns.map((e) => new RegExp(e)),
                _ = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let L = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!L) return e;
                            let t = L[1],
                                a = L[2] || '';
                            if (!t) return e;
                            let o = new URLSearchParams(a.startsWith('?') ? a.substring(1) : '');
                            return (o.set('tab', t), '/?'.concat(o.toString()));
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
                            let L = new URLSearchParams(e.split('?')[1]);
                            L.set(d.K.DEEPLINK, u.v.PLAY_VIBE);
                            let t = ((e, L) => {
                                let t = new URLSearchParams();
                                return (
                                    e.forEach((e, L) => {
                                        t.append(L, e);
                                    }),
                                    L.forEach((e, L) => {
                                        t.append(L, e);
                                    }),
                                    t
                                );
                            })(new URLSearchParams(window.location.search), L);
                            return 'landing' === L.get(d.K.SCREEN) ? '/?'.concat(t.toString()) : ''.concat(window.location.pathname, '?').concat(t.toString());
                        },
                    ],
                ];
            var f = t(39004),
                V = t(91149),
                h = t(92942),
                C = t(82298),
                g = t(61493),
                w = t(4071),
                H = t(4254),
                x = t(51790),
                k = t(50175),
                N = t.n(k);
            let y = (e) => {
                let { version: L, formatMessage: t, closeToast: a } = e,
                    l = (0, r.useCallback)(() => {
                        var e;
                        (null == (e = window.musicDesktop) || e.app.installUpdate(), null == a || a());
                    }, [a]),
                    s = (0, r.useMemo)(
                        () =>
                            (0, o.jsxs)('div', {
                                className: N().message,
                                children: [
                                    (0, o.jsx)(H.HL, {
                                        className: N().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: t({ id: 'desktop.on-update-available' }, { version: L }),
                                    }),
                                    (0, o.jsx)(w.$, {
                                        className: N().button,
                                        onClick: l,
                                        variant: 'default',
                                        color: 'secondary',
                                        size: 'xs',
                                        radius: 'xxxl',
                                        'data-test-id': g.Kq.appUpdate.APP_UPDATE_NOTIFICATION_BUTTON,
                                        children: (0, o.jsx)(H.HL, { variant: 'div', type: 'controls', size: 'm', children: t({ id: 'desktop.update' }) }),
                                    }),
                                ],
                            }),
                        [t, l, L],
                    );
                return (0, o.jsx)(x.$, { className: (0, C.$)(N().root, N().important), message: s });
            };
            var b = t(36484),
                E = t(62562),
                j = t(90208),
                D = t(27954),
                A = t(44478),
                S = t(96444),
                T = t(88204),
                R = t(21878),
                O = t(8487),
                I = t(35622),
                M = t(13833);
            t(40637);
            var P = t(1085),
                U = t(96433),
                B = t(15305),
                Z = t.n(B);
            let $ = {
                    ul: (e) => (0, o.jsx)('ul', { className: Z().description, children: e }),
                    li: (e) => (0, o.jsx)('li', { className: Z().item, children: e }),
                    code: (e) => (0, o.jsx)('code', { className: Z().code, children: e }),
                    date: (e) => (0, o.jsx)('span', { className: Z().date, children: e }),
                    p: (e) => (0, o.jsx)('p', { className: Z().paragraph, children: e }),
                    br: (0, o.jsx)('br', {}),
                },
                F = (0, T.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: L, modal: t },
                        } = (0, D.g)(),
                        { formatMessage: a } = (0, f.A)(),
                        { language: r, defaultLanguage: l } = (0, U.h)(),
                        s = (0, P.C)();
                    return (0, o.jsx)(I.a, {
                        title: a({ id: 'desktop.release-notes-modal-title' }),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: Z().modalOverlay,
                        overlayColor: 'full',
                        labelClose: a({ id: 'interface-actions.close' }),
                        className: Z().root,
                        headerClassName: Z().modalHeader,
                        contentClassName: Z().modalContent,
                        'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_MODAL,
                        closeButtonDataTestId: g.Kq.releaseNotes.RELEASE_NOTES_MODAL_CLOSE_BUTTON,
                        children: (0, o.jsx)(R.A, {
                            onError: s,
                            defaultLocale: l,
                            locale: r,
                            messages: null == e ? void 0 : e.data,
                            children: (0, o.jsx)(M.N, {
                                className: (0, C.$)(Z().scrollableContent, Z().important),
                                containerClassName: (0, C.$)(Z().notes, Z().important),
                                children:
                                    null == L
                                        ? void 0
                                        : L.map((e) =>
                                              (0, o.jsxs)(
                                                  'div',
                                                  {
                                                      className: Z().note,
                                                      children: [
                                                          (0, o.jsx)(H.DZ, {
                                                              variant: 'h4',
                                                              className: (0, C.$)(Z().version, Z().important),
                                                              'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_VERSION,
                                                              children: ((e) => {
                                                                  var L;
                                                                  return null != (L = e.split('desktop-release-notes.')[1]) ? L : '';
                                                              })(e),
                                                          }),
                                                          (0, o.jsx)('div', {
                                                              'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_TEXT,
                                                              children: (0, o.jsx)(O.A, { id: e, values: $ }),
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
            var K = t(96618),
                z = t(44806),
                W = t(36159);
            let Y = (0, T.PA)(
                    () => (
                        (() => {
                            let { experiments: e } = (0, D.g)(),
                                { loadingState: L } = e,
                                t = L === W.G.RESOLVE,
                                a = t ? e.getExperiment(z.z.WebNextLibrarySyncLimits) : void 0,
                                {
                                    fullSyncDisabled: o,
                                    fullSyncPeriodHours: l,
                                    availabilitiesSyncPeriodHours: s,
                                } = ((e, L) => {
                                    if ('on' !== e || 'object' != typeof L || null === L || Array.isArray(L)) return {};
                                    let { fullSyncDisabled: t, availabilitiesSyncPeriodHours: a } = L;
                                    if ('boolean' != typeof t || 'number' != typeof a || !Number.isFinite(a)) return {};
                                    if (t) return { fullSyncDisabled: t, availabilitiesSyncPeriodHours: a };
                                    let { fullSyncPeriodHours: o } = L;
                                    return 'number' == typeof o && Number.isFinite(o)
                                        ? { fullSyncDisabled: t, fullSyncPeriodHours: o, availabilitiesSyncPeriodHours: a }
                                        : {};
                                })(null == a ? void 0 : a.group, null == a ? void 0 : a.value);
                            (0, r.useEffect)(() => {
                                var e;
                                t &&
                                    (null == (e = window.musicDesktop) ||
                                        e.offline.setSyncConfig({ fullSyncDisabled: o, fullSyncPeriodHours: l, availabilitiesSyncPeriodHours: s }));
                            }, [t, o, l, s]);
                        })(),
                        null
                    ),
                ),
                Q = () => {
                    let { language: e } = (0, U.h)();
                    {
                        let { theme: L } = (0, K.W)(),
                            t = (0, E.N)().get(b.vg);
                        ((() => {
                            let [e, L] = (0, r.useState)(!1),
                                {
                                    releaseNotes: { setTranslationsReleaseNotes: t, isReady: a, modal: o, setSortedDescReleaseNotesKeys: l },
                                } = (0, D.g)(),
                                s = (0, r.useCallback)(
                                    (e) => {
                                        let { needToShowReleaseNotes: a, sortedDescReleaseNotesKeys: o, translationsReleaseNotes: r } = e;
                                        (t(r), l(o), a && L(!0));
                                    },
                                    [l, t],
                                );
                            ((0, r.useEffect)(() => {
                                e && a && (o.open(), L(!1));
                            }, [a, o, e]),
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.app.onLoadReleaseNotes(s);
                                }, [s]));
                        })(),
                            (() => {
                                let { formatMessage: e } = (0, f.A)(),
                                    { notify: L } = (0, h.l)(),
                                    t = (0, r.useRef)(''),
                                    a = (0, r.useCallback)(
                                        (a) => {
                                            t.current !== a && ((t.current = a), L((0, o.jsx)(y, { formatMessage: e, version: a }), { containerId: V.u.IMPORTANT }));
                                        },
                                        [e, t, L],
                                    );
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.app.onUpdateAvailable(a);
                                }, [a]);
                            })(),
                            (() => {
                                let { library: e, experiments: L } = (0, D.g)(),
                                    t = (0, r.useCallback)(() => {
                                        (L.getData(), e.getData(), (0, A.Q)());
                                    }, [L, e]);
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.app.onRefreshData(t);
                                }, [t]);
                            })(),
                            (() => {
                                let e = (0, s.useRouter)(),
                                    L = (0, i.c)((L) => {
                                        if (!(0, n.X_)(L)) return;
                                        for (let [t, a] of _) if (t.test(L)) return void e.push(a(L));
                                        if (
                                            !((e) => {
                                                let L = (0, n.aK)(e);
                                                return (
                                                    v.some((e) => e.test(L)) ||
                                                    ((e) => {
                                                        let L = (0, n.aK)(e),
                                                            t = new URLSearchParams(e.split('?')[1]);
                                                        return Object.keys(m.j).some((e) => {
                                                            let a = e
                                                                .split('/')
                                                                .filter(Boolean)
                                                                .filter((e) => e.startsWith(':'))
                                                                .map((e) => e.substring(1));
                                                            return (
                                                                0 !== a.length &&
                                                                ((e) => {
                                                                    let L = e
                                                                        .split('/')
                                                                        .filter(Boolean)
                                                                        .filter((e) => !e.startsWith(':'));
                                                                    return '/'.concat(L.join('/'));
                                                                })(e) === L &&
                                                                a.every((e) => t.has(e))
                                                            );
                                                        });
                                                    })(e)
                                                );
                                            })(L)
                                        )
                                            return;
                                        let { href: t } = (0, p.u)(L);
                                        e.push(t);
                                    });
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.navigation.onOpenDeeplink(L);
                                }, [L]);
                            })(),
                            (() => {
                                let e = (0, E.N)().get(b.vg),
                                    L = (0, r.useCallback)(
                                        (L) => {
                                            L && e.count(L, 'probabilityBucket');
                                        },
                                        [e],
                                    );
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.app.onProbabilityBucket(L);
                                }, [L]);
                            })(),
                            (() => {
                                let e = (0, E.N)().get(b.vg),
                                    L = (0, r.useCallback)(() => {
                                        let L = (0, j.B)();
                                        L && e.count(L, 'installsCount');
                                    }, [e]);
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.app.onFirstLaunch(L);
                                }, [L]);
                            })(),
                            (() => {
                                let e = (0, S.j)(),
                                    L = (0, r.useRef)(!1),
                                    t = (0, r.useCallback)(async () => {
                                        if (e.tracksController && !L.current) {
                                            L.current = !0;
                                            try {
                                                var t;
                                                (await e.tracksController.refreshTracksMeta(),
                                                    null == (t = window.musicDesktop) || t.offline.notifyRepositoryMetaUpdated());
                                            } catch (e) {
                                                return;
                                            } finally {
                                                L.current = !1;
                                            }
                                        }
                                    }, [e.tracksController]);
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.offline.onRefreshRepositoryMeta(t);
                                }, [t]);
                            })(),
                            (() => {
                                let e = (0, S.j)(),
                                    L = (0, r.useRef)(!1),
                                    t = (0, r.useCallback)(async () => {
                                        if (e.tracksController && !L.current) {
                                            L.current = !0;
                                            try {
                                                var t;
                                                (await e.tracksController.refreshTracksAvailability(),
                                                    null == (t = window.musicDesktop) || t.offline.notifyTracksAvailabilityUpdated());
                                            } catch (e) {
                                                return;
                                            } finally {
                                                L.current = !1;
                                            }
                                        }
                                    }, [e.tracksController]);
                                (0, r.useEffect)(() => {
                                    var e;
                                    return null == (e = window.musicDesktop) ? void 0 : e.offline.onRefreshTracksAvailability(t);
                                }, [t]);
                            })(),
                            (0, r.useEffect)(() => {
                                (((e) => {
                                    var L;
                                    null == (L = window.musicDesktop) || L.app.ready(e);
                                })(e),
                                    document.addEventListener('auxclick', (e) => e.preventDefault()),
                                    document.addEventListener('click', (e) => {
                                        (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                                    }));
                            }, [e]),
                            (0, r.useEffect)(() => {
                                let e = (0, j.B)();
                                e && t.count(e, 'appVersion');
                            }, [t]),
                            (0, r.useEffect)(() => {
                                L &&
                                    (((e) => {
                                        var L;
                                        null == (L = window.musicDesktop) || L.app.setTheme(e === l.S.Light ? a.LIGHT : a.DARK);
                                    })(L),
                                    t.count(L, 'appTheme'));
                            }, [L]));
                    }
                    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(F, {}), (0, o.jsx)(Y, {})] });
                };
        },
        44478: (e, L, t) => {
            'use strict';
            t.d(L, { Q: () => r, q: () => o });
            let a = new Set(),
                o = (e) => (
                    a.add(e),
                    () => {
                        a.delete(e);
                    }
                ),
                r = () => {
                    a.forEach((e) => {
                        e();
                    });
                };
        },
        50175: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        74266: () => {},
        74507: (e) => {
            e.exports = {
                root: 'DesktopOutageFullscreen_root__mR2e_',
                content: 'DesktopOutageFullscreen_content__z6l2C',
                description: 'DesktopOutageFullscreen_description__qpSZU',
                downloads: 'DesktopOutageFullscreen_downloads__Q_54f',
                message: 'DesktopOutageFullscreen_message__gDVnb',
                logo: 'DesktopOutageFullscreen_logo__r9QWU',
                text: 'DesktopOutageFullscreen_text__qDIxJ',
                title: 'DesktopOutageFullscreen_title__oPbK5',
                heartIcon: 'DesktopOutageFullscreen_heartIcon__izIuE',
                downloadLink: 'DesktopOutageFullscreen_downloadLink__8sHEQ',
                downloadIcon: 'DesktopOutageFullscreen_downloadIcon__N1xd7',
                downloadLabel: 'DesktopOutageFullscreen_downloadLabel__UnvYZ',
            };
        },
        77594: (e, L, t) => {
            'use strict';
            t.d(L, { DesktopOutageProvider: () => D });
            var a,
                o = t(25839),
                r = t(74631);
            t(93588);
            var l = t(71035),
                s = t(2579);
            let n = (e) => 'object' == typeof e && null !== e && !Array.isArray(e),
                i = (e) => Array.isArray(e) && e.every((e) => 'string' == typeof e);
            var c = t(93989),
                u = t(82298),
                d = t(88204),
                p = t(39004),
                m = t(4071),
                v = t(66738),
                _ = t(9079),
                f = t(70628),
                V = t(4254),
                h = t(22101),
                C = t(12714),
                g = t(49337);
            function w() {
                return (w = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var L = 1; L < arguments.length; L++) {
                              var t = arguments[L];
                              for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let H = function (e) {
                return r.createElement(
                    'svg',
                    w(
                        {
                            preserveAspectRatio: 'none',
                            overflow: 'visible',
                            style: { display: 'block' },
                            viewBox: '0 0 102 60',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e,
                    ),
                    a ||
                        (a = r.createElement('path', {
                            id: 'Vector',
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M99.8626 8.50485L98.6752 7.92233L97.369 7.57282H97.0128L96.8941 7.68932H96.6566L95.7066 7.45631H94.7567L93.688 7.92233L92.7381 8.15534H92.0256L91.5506 8.27184L90.007 8.85437L89.4133 9.32039L88.8196 9.5534L87.9884 10.1359L87.2759 10.835L85.6135 12L85.2573 12.1165L84.901 12.3495L84.3073 12.932L83.7136 13.165L82.8824 13.9806L81.8137 14.6796L80.7451 15.8447L78.6077 17.9417H78.4889L77.6577 18.9903L76.3516 20.2718L75.4016 21.0874H75.0454L74.8079 20.8544L74.6892 20.5049L74.3329 20.1553V19.8058L74.5704 19.5728L74.6892 19.3398L74.5704 19.1068L74.3329 18.8738L73.9767 18.0583V17.7087L74.0955 17.1262L73.858 16.7767V16.5437L73.7392 16.3107L73.858 15.7282L73.5017 15.2621L73.383 14.7961L73.2643 13.7476L73.383 13.5146L73.6205 13.2816H73.7392L73.858 13.165L73.9767 12.932V12.699L74.2142 12.466L74.3329 12.1165V11.767L74.5704 11.301L75.0454 10.7184V10.4854L74.5704 9.90291V9.6699L74.2142 9.08738L73.6205 8.38835L72.7893 7.57282H72.4331L72.0768 7.68932L71.8393 7.92233H71.2456L71.0082 7.33981V7.1068L71.3644 6.75728H71.7206L71.9581 6.64078L71.8393 6.29126L71.4831 6.05825L71.3644 5.70874L71.1269 5.35922L70.8894 5.12621H70.7707L70.5332 4.8932V4.7767L69.4645 3.84466L69.227 3.72816H68.9895L68.5146 3.26214L68.2771 3.14563L67.4459 2.91262L66.4959 2.4466L65.546 1.74757L65.071 1.51456L63.5274 1.16505L62.6962 0.699029L61.865 0.466019H61.0338L60.2026 0.23301H59.1339L58.6589 0H56.8778L56.5215 0.116505L55.9278 0.466019H55.5716L54.9779 0.815534L54.6217 0.932039H53.9092L53.078 1.16505L52.8405 1.28155L51.1781 2.67961L50.3469 4.07767L49.7532 5.24272L49.6345 5.82524L49.2782 6.64078L48.5658 7.33981L48.6845 8.38835L48.922 8.85437V9.08738L48.8033 9.20388V9.5534L48.6845 9.78641L48.447 10.0194L48.0908 10.1359L47.9721 10.2524L47.8533 10.4854L47.7346 11.4175L46.9034 12.3495L46.7846 12.699L46.9034 13.8641L46.6659 14.2136V14.6796L46.9034 14.9126L47.1409 15.9612V15.4951L47.0221 14.6796L47.1409 13.0485L47.3783 12.8155L47.4971 12.466V12L47.6158 11.6505L47.8533 11.4175L47.9721 10.7184L48.2095 10.4854L48.6845 10.6019L48.447 11.4175L48.5658 13.2816L48.8033 14.2136L48.922 15.1456V16.7767L49.0407 18.6408L49.1595 18.8738L49.397 19.1068V19.9223L49.8719 20.6214L50.2282 21.5534V22.0194L50.3469 22.4854L50.7031 23.068L50.8219 23.4175V23.8835L51.0594 24.3495V25.0485L50.9406 25.165V25.7476L51.4156 25.6311L51.6531 25.8641L51.8906 26.4466L52.0093 27.3786L51.6531 27.8447L51.7718 28.6602L52.0093 28.0777H52.4843L52.3655 28.5437L52.1281 28.6602V29.1262L52.2468 29.3592H52.603L52.7218 29.5922L53.3155 29.8252L53.4342 30.0583V30.5243L53.3155 31.3398L53.1967 31.6893L52.8405 32.0388V32.2718L53.078 32.5049L53.3155 32.6214H53.7905L54.3842 32.7379L54.6217 32.8544L54.9779 33.2039V33.4369L54.8591 33.5534V33.9029L54.7404 34.0194L54.8591 34.3689H55.0966V34.1359L54.9779 34.0194L55.0966 33.6699H55.3341L56.4028 34.7184L56.5215 34.9515V35.1845L56.8778 35.534L56.9965 35.8835L57.5902 36.466V36.699L58.4214 37.5146V37.8641L58.0652 38.0971L57.8277 38.4466L57.9465 38.7961H58.4214L58.7776 39.0291H59.1339L59.6088 39.2621L59.8463 39.4951V39.6117L60.2026 39.9612L60.3213 40.3107L60.7963 40.7767V41.2427L61.6275 41.9417L61.865 42.4078L61.9837 42.8738L62.4587 42.9903L62.8149 43.3398L63.1711 43.5728L63.8836 44.2718L63.7648 44.6214H63.2899L62.9336 44.3883L62.4587 43.9223H61.6275L61.5087 44.1553L61.6275 44.5049L62.2212 44.9709L62.4587 45.0874H62.6962L62.9336 45.3204L63.2899 45.4369V45.6699L63.4086 45.9029L63.8836 46.0194L64.2398 46.3689V46.6019L64.3586 46.835L65.4272 47.301L65.9022 47.767L67.2084 48.466H67.5646L68.2771 48.8155L68.5146 49.0485L68.752 49.5146V49.8641L68.2771 50.4466L67.8021 50.9126L67.3271 51.1456L67.0896 51.3786V51.4951L66.7334 51.8447L66.3772 51.9612L65.4272 53.1262L64.8335 53.5922L64.1211 54.4078V55.1068L64.2398 55.5728L64.8335 56.3884L65.071 56.5049H65.3085L66.021 56.1553L66.9709 55.4563L67.5646 55.1068H67.8021L68.0396 54.8738H68.1583L68.752 54.1748L68.8708 53.8252L69.5832 53.1262L70.0582 52.8932L71.0082 52.0777L71.8393 51.4951L72.0768 51.3786H72.3143L72.6705 51.6117H73.0268L73.383 51.2621L73.7392 51.1456L73.9767 50.9126H74.0955L74.2142 50.5631L74.5704 50.2136L74.4517 49.5146L74.5704 49.2816L75.9953 47.8835L76.9453 47.068L77.6577 46.6019L77.8952 46.3689L78.3702 45.6699L79.5576 44.5049L80.1513 44.1553L81.5763 42.8738L82.8824 41.4757L83.3574 41.2427L84.4261 40.1942L84.5448 39.8447L85.2573 39.1456L85.7322 38.7961L86.6822 37.8641L88.1071 36.233L90.3632 34.1359L90.8382 33.5534L91.0757 32.9709L91.3132 32.6214L92.0256 31.9223L92.3818 31.3398L93.213 30.5243L93.8068 29.8252L94.0442 29.2427L94.163 28.6602L94.4005 28.4272V28.3107L95.5879 27.2621L95.9441 26.7961L96.5378 25.7476L97.0128 24.699L97.4878 24L97.7253 23.8835L98.319 23.068L98.4377 22.6019L98.6752 22.3689L98.7939 22.1359V21.7864L99.0314 21.3204L99.3877 20.9709L99.7439 20.3883L99.8626 20.0388V19.2233L99.9814 18.9903L100.338 18.6408L100.575 17.9417L101.169 17.1262V16.5437L101.406 15.9612L101.763 15.3786L101.644 14.7961L101.881 14.4466L102 13.9806L101.881 11.8835L101.525 11.1845V10.6019L101.169 10.0194L100.694 9.5534L100.575 9.20388L99.8626 8.50485ZM55.2154 2.56311H55.6903L55.8091 2.67961L57.709 2.56311L58.3027 2.3301L59.1339 2.4466L59.0151 3.61165L58.6589 4.42718L58.3027 4.7767V5.00971H58.5402L59.0151 4.66019H59.3714L59.4901 4.7767H59.9651L60.2026 5.00971H60.6775L61.1525 5.24272H61.7462L62.9336 5.70874L63.6461 6.17476H63.8836L64.1211 6.29126L64.596 6.75728H64.9523L65.4272 6.99029L66.7334 8.38835L67.0896 8.50485L67.4459 8.85437L67.6834 9.5534L68.0396 9.78641L68.3958 10.2524L68.5146 10.6019L68.8708 10.9515L69.227 12L69.8207 12.5825L70.2957 13.8641L70.5332 14.0971V14.4466L70.4144 14.6796L70.177 14.9126H69.9395L69.1083 15.4951V15.8447H69.702L69.9395 15.6117H70.2957L70.4144 15.4951H70.6519L70.8894 15.6117L71.0082 16.0777L71.2456 16.4272V17.2427L71.4831 17.8252L71.7206 18.0583L71.8393 18.5243V19.3398L72.0768 20.0388L72.1956 20.8544V22.0194L72.4331 22.4854L72.5518 23.068L72.4331 24.1165L72.5518 24.466V25.165L72.4331 26.3301L72.0768 26.6796L71.8393 27.1456V27.7282L71.6019 28.3107V29.0097L71.3644 29.7087L71.4831 29.9417L71.7206 30.1748L71.8393 30.7573V31.4563L72.0768 31.6893V31.8058L72.908 31.9223L73.1455 31.8058L74.3329 30.8738L74.6892 30.7573L74.8079 30.6408L75.1641 29.5922V29.0097L75.4016 28.5437V27.8447L75.5204 27.3786L75.8766 26.6796V25.8641L76.1141 25.3981L76.4703 25.0485L77.1828 23.534L77.6577 22.9515L77.7765 22.7184L77.8952 22.1359L78.2515 21.4369L78.7264 20.9709L79.0827 20.5049L79.2014 20.2718L79.3201 19.6893L79.5576 19.3398L80.1513 18.8738L80.8638 18.6408L81.3388 18.1748L81.5763 17.7087L82.6449 16.7767L83.2387 16.4272L84.4261 15.2621L84.7823 14.7961L85.1385 14.5631H85.376L85.6135 14.4466L86.4447 13.6311H86.6822L86.9197 13.5146L87.3946 12.932L88.3446 12.1165L88.5821 12H88.8196L89.4133 11.4175L90.2445 10.9515L90.8382 11.068L91.7881 10.7184L92.2631 10.3689L94.0442 9.90291H94.638L95.2317 9.78641L95.7066 9.5534H96.0629L96.7753 10.0194H97.844L98.319 10.2524L98.4377 10.4854V11.068L98.7939 11.534L99.2689 12L99.3877 12.466V12.8155L99.5064 12.932V13.165L99.2689 13.5146V14.5631L99.0314 15.2621L98.6752 15.8447L98.4377 16.5437V17.0097L98.319 17.4757L97.844 18.1748V18.5243L97.369 19.1068L97.0128 19.6893V20.0388L96.5378 21.3204L96.3004 21.6699L95.5879 22.3689V22.6019L95.3504 22.835V23.068L94.7567 23.767L94.4005 24.699L93.3318 25.8641L92.5006 27.1456V27.3786L92.0256 27.7282L91.9069 27.9612V28.4272L90.3632 29.9417L90.1257 30.4078L89.4133 31.1068L89.2945 31.4563L88.8196 32.0388L86.4447 34.4854H86.326L85.9697 34.9515L84.1886 36.5825L81.695 39.2621L80.3888 40.5437L79.3201 41.4757L78.9639 41.5922L77.6577 42.9903L75.7579 44.7379L74.2142 46.4854L73.858 46.6019L73.383 47.068L72.4331 47.6505L72.0768 47.767L71.6019 47.6505L71.2456 47.4175L70.8894 47.068V46.835L70.5332 46.3689L69.3458 45.2039L68.9895 45.0874H68.3958L68.1583 44.9709L67.8021 44.6214H67.6834L67.4459 44.3883L67.3271 44.0388L66.2584 43.1068L66.021 42.5243L65.1898 41.7087L64.596 40.8932L64.2398 40.5437L63.6461 40.1942L63.1711 39.7282L62.6962 39.0291L62.5774 38.5631L62.2212 38.0971L60.915 36.8155L60.5588 36L60.0838 35.534V35.301L59.8463 35.068V34.835L59.7276 34.6019L58.7776 33.3204L58.3027 32.8544L57.709 32.0388L57.1153 30.9903L56.6403 30.5243L56.2841 29.7087L55.4529 28.8932L55.3341 28.5437V27.9612L54.8591 27.0291V26.5631L54.6217 25.9806L54.3842 25.7476L54.2654 25.5146V25.2816L53.9092 24.8155L53.1967 22.4854V22.0194L53.078 21.5534L52.9593 21.3204L52.603 21.0874L52.4843 20.8544V20.0388L52.1281 19.6893L51.7718 18.8738V18.5243L52.0093 17.2427L51.8906 16.8932L51.6531 16.6602L51.5343 16.3107V15.3786L51.6531 15.2621V14.4466L51.5343 14.3301V13.3981L51.2969 12.8155L51.4156 12.3495L51.2969 11.8835L51.0594 11.6505L50.9406 11.068V10.6019L51.2969 10.0194V8.03884L51.6531 7.57282V6.75728L52.3655 5.70874L52.4843 5.24272L52.9593 4.7767V4.54369L53.1967 4.19417L54.8591 2.79612L55.2154 2.56311ZM36.3353 5.94175L35.7416 5.70874L34.9104 5.59223L34.5541 5.47573L33.8417 5.00971H33.4854L33.3667 5.12621H32.8917L32.6542 5.00971L32.298 4.66019L31.9418 4.54369L30.6356 4.42718L29.9232 4.54369L29.092 4.31068H28.3795L28.0233 4.42718L27.7858 4.66019H26.3609L24.6985 5.12621L24.1048 5.47573L23.5111 5.59223H23.0361L22.5611 5.70874L21.9674 5.94175L21.3737 6.29126H21.0175L20.4237 6.52427L19.7113 6.99029L18.9988 7.1068L17.4552 7.80583L17.099 8.15534L16.7427 8.38835L16.2678 8.50485L15.9115 8.85437L15.5553 8.97087L14.6054 9.6699L13.6554 10.6019L13.1804 11.1845L13.0617 11.4175L12.943 12.1165L12.1118 13.5146V15.0291L11.7555 15.8447L11.6368 16.4272V17.2427L11.3993 17.4757L11.2806 17.8252L11.6368 18.8738V19.3398L11.3993 19.6893V21.7864L11.7555 22.3689V22.9515L12.1118 23.301L12.3492 23.767L12.943 25.5146L13.4179 25.9806L13.5367 26.3301L14.0116 26.7961L14.1304 27.1456L14.6054 27.6117L14.7241 27.8447V28.0777L14.9616 28.5437L15.3178 28.6602L16.149 29.4757L16.3865 30.0583L16.9802 30.8738L17.3364 31.2233H17.4552L17.8114 31.5728V31.6893L18.0489 31.9223H18.1676L18.4051 32.1553L18.7614 32.7379L19.3551 33.2039L19.4738 33.5534L20.6612 34.7184L21.4924 35.4175L22.3236 35.8835L22.7986 36.3495L22.6799 36.699L22.4424 36.8155H20.1863L19.5925 37.0485L17.8114 37.165H15.674L15.0803 36.932H14.1304L13.0617 36.8155L12.468 36.466L11.993 36.3495H10.5681L8.66822 36.1165L8.31199 36L7.95576 35.767H7.59953L7.24331 35.4175H6.88708L6.41211 35.1845L5.93714 34.7184L5.10594 34.3689L4.51222 34.0194L3.79977 33.3204V32.9709L3.56228 32.5049L3.08731 32.0388L2.96857 31.8058V30.8738L2.73108 30.2913V29.5922L2.96857 29.2427V28.8932L3.3248 28.0777L3.68102 27.4951L4.39348 26.6796L4.51222 26.4466L4.74971 25.5146L4.63097 25.165H3.91851L3.44354 24.932H3.20605L2.61234 25.2816L1.6624 26.3301L1.54366 26.5631V26.7961L0.831199 27.8447L0.593714 28.3107L0.474971 28.8932L0.237485 29.1262L0 29.9417V30.2913L0.237485 30.6408L0.356228 31.5728V32.6214L0.712456 33.4369L1.06868 34.0194L1.89988 34.835H2.13737L2.37485 35.068L2.61234 35.6505L3.44354 36.233L4.27474 37.0485L5.34342 37.6311H5.69965L6.41211 38.0971H6.76834L7.36205 38.4466L7.71828 38.5631L9.38068 38.7961H10.3306L11.3993 38.9126L11.7555 39.1456L12.5867 39.2621H14.3679L14.9616 39.4951H15.5553L15.9115 39.7282L18.1676 39.6117L18.7614 39.3786L19.83 39.2621H21.6112L22.4424 39.1456L23.1548 38.9126L24.6985 38.6796H25.7672L26.0047 38.7961L26.4796 39.2621H27.1921L28.142 39.6117L28.0233 39.9612H27.9045L27.6671 40.1942L26.9546 40.4272L26.3609 40.7767L25.8859 41.2427L25.1735 41.5922H24.936L24.461 41.8252L23.1548 42.6408L22.5611 43.2233L21.8487 43.5728L21.4924 43.9223L21.1362 44.1553L19.9488 44.7379L19.3551 45.2039H19.1176L18.2864 45.9029L16.7427 46.4854H16.2678L15.9115 46.6019L15.5553 46.9515L15.1991 47.068L14.8428 47.4175L13.5367 48.233L11.993 49.0485L11.0431 49.9806L10.4494 50.2136L9.85565 50.9126L9.38068 51.0291L9.02445 51.2621L8.66822 51.6117L8.19325 51.7282L7.48079 52.1942L6.76834 53.0097L5.69965 53.8252L4.74971 54.4078L3.68102 55.4563L3.08731 55.8058L2.61234 56.2718L2.25611 56.8544V57.0874L2.13737 57.3204L2.25611 57.7864L2.4936 58.2524V58.7184L2.84983 59.1845L2.96857 59.767L3.44354 59.6505L3.79977 59.767L4.03725 60H4.63097L5.22468 59.767L5.46217 59.4175L5.34342 59.1845L5.46217 57.5534L5.58091 57.3204L6.17462 56.6214L6.76834 56.0388L7.24331 55.9223L8.19325 54.9903L8.54948 54.8738L9.14319 54.2913L10.0931 53.7087L11.0431 52.8932H11.2806L12.1118 52.3107L12.7055 51.7282H12.943L13.1804 51.4951H13.4179L14.0116 50.9126L14.8428 50.4466L15.9115 49.9806L16.3865 49.5146L17.5739 49.0485H18.0489L18.2864 49.2816L18.4051 49.7476V50.0971L17.9302 50.5631L17.8114 50.7961V51.1456L17.5739 51.4951L17.4552 52.3107V52.7767L17.6927 53.4757L17.9302 53.8252L18.6426 53.1262L18.7614 52.8932L18.8801 52.1942L19.3551 51.1456L19.83 50.6796L19.9488 50.4466V49.165L20.305 48.8155L20.8987 48.466H21.1362L21.3737 48.3495L21.9674 47.8835L22.5611 47.6505L22.9173 47.301L23.8673 46.835L24.461 46.7184L25.0547 46.4854L25.2922 46.2524H25.5297L27.6671 45.0874L28.3795 44.9709L29.8044 44.1553L30.8731 43.9223L31.8231 43.5728L32.0605 43.3398H32.298L33.7229 42.5243L35.979 41.5922L36.929 41.4757L37.1665 41.7087V42.1748L36.8102 42.7573L36.5728 44.1553V44.5049L36.8102 44.9709V45.9029L37.1665 46.6019V47.534L37.5227 47.8835L37.9977 48H38.3539L38.5914 47.8835L38.8289 47.6505H38.9476L39.0664 47.534V47.4175L40.0163 46.6019L40.3725 46.0194V45.3204L40.135 43.4563V42.8738L40.3725 41.8252L40.8475 41.3592H40.9662L41.6787 40.7767L42.5099 39.8447L42.6286 39.6117V38.7961L42.5099 38.5631L41.3225 37.2816L41.085 37.165H40.7288L40.3725 36.8155V36.3495L40.4913 35.8835L40.3725 35.534V35.301L40.61 34.2524V34.0194L40.3725 33.3204V31.4563L40.61 31.1068V29.9417L40.3725 29.3592V28.7767L40.4913 27.4951L40.7288 26.5631V25.8641L40.4913 25.5146L40.3725 24.1165L40.4913 24V23.534L40.61 22.9515L40.8475 22.6019L40.9662 22.1359V20.1553L40.8475 18.7573L41.085 18.4078V16.6602L41.2037 16.5437V14.9126L40.9662 14.6796L40.7288 14.0971V13.0485L40.135 12.466L39.7788 11.6505V11.1845L40.0163 10.835V10.4854L39.7788 10.3689H39.5413L39.1851 10.4854L38.5914 11.068H37.9977L37.8789 11.301V11.6505L38.2352 12L38.7101 13.0485V13.3981L38.2352 13.7476L37.9977 13.5146V13.7476L38.2352 14.2136L37.9977 14.5631V14.9126L37.8789 15.0291V15.2621L37.9977 15.3786L38.1164 15.8447L37.9977 17.3592L37.7602 17.8252L37.9977 18.1748V20.0388L37.7602 20.6214L37.6414 22.6019V24.466L37.404 25.165L37.5227 26.6796L37.404 27.4951L37.1665 28.0777L37.0477 28.6602L36.929 30.6408L37.0477 31.9223L36.8102 32.1553V32.5049L37.0477 32.7379L37.1665 33.3204L37.2852 35.068V36.1165L36.929 36.466L33.8417 36.5825L32.1793 36.233L31.8231 36H31.1106L30.9919 36.1165H30.3981L28.0233 35.8835H27.1921L27.0733 36H26.1234L25.5297 35.301L24.8172 34.7184L24.2235 34.3689L23.8673 34.0194L23.6298 33.5534L22.9173 33.0874L21.8487 31.9223L19.3551 29.5922L19.2363 29.2427L18.6426 28.6602L18.2864 28.0777L17.3364 27.2621L17.099 26.6796L16.149 25.5146L15.7928 24.932L15.3178 23.8835L14.8428 23.4175L14.6054 22.3689L14.4866 22.1359L14.2491 21.9029L14.0116 21.4369L13.8929 19.6893L14.0116 18.7573L14.2491 18.1748L14.1304 17.4757L14.2491 17.1262L14.4866 16.8932V15.9612L14.7241 15.6117V14.6796L14.8428 14.0971L15.1991 13.0485L15.674 12L16.2678 11.4175L16.7427 11.1845L17.3364 10.6019L17.8114 10.2524L18.2864 10.0194H18.5239L18.9988 9.78641L19.2363 9.5534L20.1863 9.20388L20.78 8.62136L21.2549 8.38835H22.0861L22.4424 8.15534H22.7986L23.5111 7.80583L24.8172 7.57282L25.5297 7.2233L26.3609 6.99029H26.8359L27.1921 6.75728L29.2107 6.64078L29.6857 6.75728L30.1607 7.1068L32.6542 7.68932L33.4854 8.03884H34.3166L34.5541 8.15534L34.9104 8.50485V8.85437L34.7916 8.97087V9.20388L35.1478 9.5534V10.3689L35.0291 11.4175L35.2666 11.767L35.1478 13.6311L35.3853 14.0971V14.4466L35.0291 15.0291L34.9104 15.3786V15.9612H35.2666L35.5041 16.1942L35.6228 16.5437H36.929V16.3107L36.5728 15.9612V15.6117L36.6915 15.0291L36.454 14.7961V14.0971L36.6915 13.6311L36.454 13.3981L36.3353 13.0485V12.5825L36.5728 12.233V12L36.0978 11.1845L36.2165 10.7184L35.8603 10.1359L35.7416 9.78641V9.20388L37.1665 7.92233L37.2852 7.2233L37.1665 6.52427H37.0477L36.6915 6.29126L36.3353 5.94175ZM70.7707 8.03884L71.3644 8.15534V8.62136L71.8393 9.08738L72.0768 9.43689V9.78641L72.908 10.835L72.4331 11.301H72.1956L72.0768 10.7184L71.8393 10.2524L71.2456 9.78641L70.5332 8.62136V8.27184L70.7707 8.03884ZM39.5413 48.1165L39.1851 48.3495L38.9476 48.932L39.0664 49.5146L38.9476 50.2136L39.0664 51.0291L39.1851 51.1456V51.7282H39.4226V50.7961L39.6601 49.6311V48.3495L39.5413 48.1165ZM40.2538 51.9612H39.8976L39.6601 52.1942H39.4226V52.4272L39.3038 52.7767V53.1262H39.6601L39.8976 53.0097L40.135 52.7767L40.2538 51.9612ZM60.7963 42.1748H60.5588L60.3213 42.4078V42.8738L60.44 43.1068L60.6775 43.2233L61.1525 42.9903L61.2712 42.7573L60.7963 42.1748ZM46.4284 17.0097H46.6659L47.3783 17.7087H47.6158V17.3592L47.2596 16.4272L46.4284 17.0097Z',
                            fill: 'currentColor',
                        })),
                );
            };
            var x = t(74507),
                k = t.n(x);
            let N = (0, d.PA)((e) => {
                let { notice: L } = e,
                    { formatMessage: t } = (0, p.A)(),
                    a = (0, h.j)(),
                    r = ((e) => {
                        if (e)
                            try {
                                let L = new URL(e);
                                return 'https:' === L.protocol || 'http:' === L.protocol ? e : void 0;
                            } catch (e) {
                                return;
                            }
                    })(null == L ? void 0 : L.url),
                    s = (null == L ? void 0 : L.buttonText) || t({ id: 'interface-actions.more-details' }),
                    n = (0, l.c)(() => {
                        r && window.open(r, '_blank', 'noopener,noreferrer');
                    });
                return (0, o.jsx)('main', {
                    className: (0, u.$)(k().root, (0, C.J)(g.S.Dark)),
                    children: (0, o.jsxs)('div', {
                        className: k().content,
                        children: [
                            (0, o.jsxs)('div', {
                                className: k().message,
                                children: [
                                    (0, o.jsx)(f.gu, { alignIcon: 'center', lang: a, className: k().logo, 'aria-hidden': !0 }),
                                    (0, o.jsxs)('div', {
                                        className: k().description,
                                        children: [
                                            (0, o.jsx)(V.DZ, {
                                                className: k().title,
                                                variant: 'h1',
                                                size: 'xl',
                                                children: (null == L ? void 0 : L.title) || t({ id: 'error-messages.something-went-wrong' }),
                                            }),
                                            (0, o.jsx)(V.HL, {
                                                className: k().text,
                                                variant: 'p',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'normal',
                                                children: (null == L ? void 0 : L.text) || t({ id: 'error-messages.error-during-initial-loading' }),
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)(H, { className: k().heartIcon, 'aria-hidden': !0, focusable: !1 }),
                                ],
                            }),
                            (0, o.jsxs)('div', {
                                className: k().downloads,
                                children: [
                                    r && (0, o.jsx)(m.$, { color: 'primary', variant: 'default', radius: 'xxxl', size: 's', isBlock: !0, onClick: n, children: s }),
                                    (0, o.jsxs)(_.N, {
                                        className: k().downloadLink,
                                        href: 'https://apps.apple.com/ru/app/яндекс-музыка-и-подкасты/id520797969',
                                        target: '_blank',
                                        children: [
                                            (0, o.jsx)(v.I, { variant: 'macos', className: k().downloadIcon }),
                                            (0, o.jsx)(V.HL, {
                                                className: k().downloadLabel,
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'normal',
                                                children: t({ id: 'deeplinks.download-from-app-store' }),
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)(_.N, {
                                        className: k().downloadLink,
                                        href: 'https://play.google.com/store/apps/details?id=ru.yandex.music',
                                        target: '_blank',
                                        children: [
                                            (0, o.jsx)(v.I, { variant: 'googlePlay', className: k().downloadIcon }),
                                            (0, o.jsx)(V.HL, {
                                                className: k().downloadLabel,
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'normal',
                                                children: t({ id: 'deeplinks.download-from-google-play' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var y = t(36484),
                b = t(62562),
                E = t(84e3),
                j = t(27954);
            let D = (e) => {
                var L;
                let { children: t } = e,
                    { slam: a, user: u } = (0, j.g)(),
                    d = (0, b.N)(),
                    p = (0, E.U)(),
                    [m, v] = (0, r.useState)(null),
                    [_, f] = (0, r.useState)(null),
                    V = (0, r.useRef)(!1),
                    h = (0, r.useRef)(!1),
                    w = null != (L = null == m ? void 0 : m.isActive) && L;
                (0, r.useEffect)(() => {
                    let e = !1;
                    return (
                        (h.current = !0),
                        (async () => {
                            try {
                                var L;
                                let t = await (null == (L = window.musicDesktop) ? void 0 : L.app.getOutageNotice());
                                e ||
                                    v(
                                        ((e) => {
                                            if (!n(e) || 0 === Object.keys(e).length) return { isActive: !1 };
                                            let L = n(e.placements) ? e.placements.fullscreen : void 0,
                                                t = ((e) => {
                                                    if (Array.isArray(e))
                                                        return e.flatMap((e) => {
                                                            if (!n(e) || 'string' != typeof e.communicationId || !n(e.when)) return [];
                                                            let { regions: L, os: t } = e.when;
                                                            return !Object.keys(e.when).some((e) => 'regions' !== e && 'os' !== e) &&
                                                                (void 0 === L || i(L)) &&
                                                                (void 0 === t || i(t))
                                                                ? [{ communicationId: e.communicationId, regions: L, os: t }]
                                                                : [];
                                                        });
                                                })(n(L) ? L.rules : void 0),
                                                a = new Set(null == t ? void 0 : t.map((e) => e.communicationId));
                                            a.add('fullscreenCommon');
                                            let o = Array.isArray(e.communications)
                                                ? e.communications.flatMap((e) =>
                                                      n(e) && 'string' == typeof e.id && a.has(e.id)
                                                          ? [
                                                                {
                                                                    ...((e) => {
                                                                        if (n(e))
                                                                            return {
                                                                                ...('string' == typeof e.title ? { title: e.title } : {}),
                                                                                ...('string' == typeof e.text ? { text: e.text } : {}),
                                                                                ...('string' == typeof e.buttonText ? { buttonText: e.buttonText } : {}),
                                                                                ...('string' == typeof e.url ? { url: e.url } : {}),
                                                                            };
                                                                    })(e),
                                                                    id: e.id,
                                                                },
                                                            ]
                                                          : [],
                                                  )
                                                : void 0;
                                            return { isActive: !0, ...(t ? { fullscreenRules: t } : {}), ...(o ? { communications: o } : {}) };
                                        })(t),
                                    );
                            } catch (L) {
                                e || (p.error('Failed to prepare the desktop outage screen', { error: L instanceof Error ? L.message : String(L) }), v({ isActive: !1 }));
                            }
                        })(),
                        () => {
                            ((e = !0), (h.current = !1));
                        }
                    );
                }, [p]);
                let H = (0, l.c)(async () => {
                        if (!(null == m ? void 0 : m.isActive) || V.current) return;
                        V.current = !0;
                        let e = {};
                        try {
                            var L;
                            e =
                                null !=
                                (L = ((e, L) => {
                                    var t, a, o;
                                    let r =
                                            null == (t = e.fullscreenRules)
                                                ? void 0
                                                : t.find((e) => {
                                                      var t;
                                                      return (
                                                          (null == (t = e.os) ? void 0 : t.includes('desktop')) &&
                                                          (!e.regions || (void 0 !== L && e.regions.some((e) => e.toUpperCase() === L.toUpperCase())))
                                                      );
                                                  }),
                                        l = r ? (null == (a = e.communications) ? void 0 : a.find((e) => e.id === r.communicationId)) : void 0,
                                        s = null == (o = e.communications) ? void 0 : o.find((e) => 'fullscreenCommon' === e.id);
                                    return null != l ? l : s;
                                })(m, u.account.data.geoRegionIso))
                                    ? L
                                    : {};
                            let t = d.get(y.y$).tracksController;
                            if (!t) throw Error('Downloaded tracks controller is unavailable');
                            let o = await t.getTracks();
                            if (!h.current) return;
                            o.some((e) => !!e.available) ? a.setOfflineMode(!0, !1) : f(e);
                        } catch (L) {
                            h.current && (p.error('Failed to read downloads for the desktop outage screen', { error: L instanceof Error ? L.message : String(L) }), f(e));
                        }
                    }),
                    x = (0, r.useMemo)(() => ({ isActive: w, checkDownloads: H }), [w, H]),
                    k = t;
                return (
                    m
                        ? _ && (k = (0, o.jsxs)('div', { className: (0, C.J)(g.S.Dark), children: [(0, o.jsx)(s.TitleBar, {}), (0, o.jsx)(N, { notice: _ })] }))
                        : (k = null),
                    (0, o.jsx)(c.d.Provider, { value: x, children: k })
                );
            };
        },
        80766: (e, L, t) => {
            'use strict';
            t.d(L, { TranslationsProvider: () => s });
            var a = t(25839),
                o = t(21878),
                r = t(1085),
                l = t(96433);
            let s = (e) => {
                let { children: L } = e,
                    { dictionary: t, language: s, defaultLanguage: n } = (0, l.h)(),
                    i = (0, r.C)();
                return (0, a.jsx)(o.A, { onError: i, defaultLocale: n, locale: s, messages: t, children: L });
            };
        },
        83581: (e, L, t) => {
            'use strict';
            t.d(L, { ThemeProvider: () => m });
            var a = t(25839),
                o = t(74631),
                r = t(71035),
                l = t(36484),
                s = t(62562),
                n = t(34656),
                i = t(6923),
                c = t(63600),
                u = t(30389),
                d = t(96618),
                p = t(22725);
            let m = (e) => {
                let { children: L, predefinedTheme: t } = e,
                    m = (0, s.N)().get(l.oo),
                    { getThemeFromStorage: v, setThemeToStorage: _ } = (0, u.Q)(m),
                    [f, V] = (0, o.useState)(() => (null != t ? t : v())),
                    h = (0, r.c)((e) => {
                        v() || t || (_(i.W), V(e));
                    });
                ((0, o.useLayoutEffect)(() => {
                    t || (0, n.Z)(f);
                }, [f, t]),
                    ((e) => {
                        let { onSystemThemeChange: L } = e,
                            t = (0, r.c)(() => {
                                L((0, c.V)());
                            });
                        (0, o.useLayoutEffect)(() => {
                            let e = (0, c.Q)();
                            return (
                                null == e || e.addEventListener('change', t),
                                () => {
                                    null == e || e.removeEventListener('change', t);
                                }
                            );
                        }, [t]);
                    })({ onSystemThemeChange: h }),
                    (0, o.useLayoutEffect)(() => {
                        h((0, c.V)());
                    }, [h]));
                let C = (0, o.useMemo)(() => ({ theme: f, setTheme: V }), [f]);
                return (0, a.jsx)(d.D.Provider, { value: C, children: (0, a.jsx)(o.Suspense, { fallback: (0, a.jsx)(p.AppSuspenseLoader, {}), children: L }) });
            };
        },
        90208: (e, L, t) => {
            'use strict';
            function a() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            t.d(L, { B: () => a });
        },
        93989: (e, L, t) => {
            'use strict';
            t.d(L, { d: () => r, j: () => l });
            var a = t(74631),
                o = t(36432);
            let r = (0, a.createContext)(null),
                l = () => {
                    let e = (0, a.useContext)(r);
                    if (!e) throw new o.t('Desktop outage cannot be null, please add a context provider', { code: 'E_CONTEXT_DESKTOP_OUTAGE_NULL' });
                    return e;
                };
        },
        96433: (e, L, t) => {
            'use strict';
            t.d(L, { h: () => l });
            var a = t(74631),
                o = t(36484),
                r = t(62562);
            let l = () => {
                let e = (0, r.N)().get(o.Xc),
                    L = e.getLanguage(),
                    t = e.getDefaultLanguage(),
                    l = e.getDictionary(),
                    s = e.getAvailableLanguages(),
                    n = (0, a.useCallback)(
                        (L) => {
                            e.setLanguage(L);
                        },
                        [L],
                    );
                return (0, a.useMemo)(() => ({ dictionary: l, language: L, defaultLanguage: t, availableLanguages: s, setLanguage: n }), [L, n]);
            };
        },
        96444: (e, L, t) => {
            'use strict';
            t.d(L, { j: () => r });
            var a = t(36484),
                o = t(62562);
            function r() {
                return (0, o.N)().get(a.y$);
            }
        },
        96618: (e, L, t) => {
            'use strict';
            t.d(L, { D: () => o, W: () => r });
            var a = t(74631);
            let o = (0, a.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, a.useContext)(o);
        },
    },
]);
