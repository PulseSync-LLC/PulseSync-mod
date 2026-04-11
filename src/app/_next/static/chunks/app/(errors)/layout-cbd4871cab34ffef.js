(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358],
    {
        15778: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshTracksAvailability: () => t });
            var n = o(61910),
                r = o(83252);
            let t = () => {
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
        15855: (e, s, o) => {
            'use strict';
            o.d(s, { useProbabilityBucket: () => t });
            var n = o(61910),
                r = o(83252);
            let t = () => {
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
        24783: (e, s, o) => {
            'use strict';
            o.d(s, { LO: () => t, N5: () => i, toggleMiniPlayer: () => l, vZ: () => r });
            var n = o(83252);
            let r = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_MINIMIZE);
                },
                t = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_MAXIMIZE);
                },
                i = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.WINDOW_CLOSE);
                },
                l = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.TOGGLE_MINIPLAYER);
                };
        },
        25701: (e, s, o) => {
            Promise.resolve().then(o.bind(o, 58360)),
                Promise.resolve().then(o.bind(o, 14342)),
                Promise.resolve().then(o.bind(o, 62662)),
                Promise.resolve().then(o.bind(o, 6971)),
                Promise.resolve().then(o.bind(o, 22674)),
                Promise.resolve().then(o.bind(o, 51321)),
                Promise.resolve().then(o.bind(o, 97800)),
                Promise.resolve().then(o.bind(o, 42520)),
                Promise.resolve().then(o.t.bind(o, 67270, 23)),
                Promise.resolve().then(o.bind(o, 81713)),
                Promise.resolve().then(o.bind(o, 58699)),
                Promise.resolve().then(o.bind(o, 40493)),
                Promise.resolve().then(o.bind(o, 89381)),
                Promise.resolve().then(o.bind(o, 97691)),
                Promise.resolve().then(o.bind(o, 96269)),
                Promise.resolve().then(o.bind(o, 58055)),
                Promise.resolve().then(o.bind(o, 80616)),
                Promise.resolve().then(o.bind(o, 80986)),
                Promise.resolve().then(o.bind(o, 61777)),
                Promise.resolve().then(o.t.bind(o, 90809, 23)),
                Promise.resolve().then(o.bind(o, 43751)),
                Promise.resolve().then(o.bind(o, 29910)),
                Promise.resolve().then(o.bind(o, 97249)),
                Promise.resolve().then(o.bind(o, 36138)),
                Promise.resolve().then(o.bind(o, 31669)),
                Promise.resolve().then(o.bind(o, 16173)),
                Promise.resolve().then(o.bind(o, 15782)),
                Promise.resolve().then(o.bind(o, 3070)),
                Promise.resolve().then(o.bind(o, 6923)),
                Promise.resolve().then(o.bind(o, 46562)),
                Promise.resolve().then(o.bind(o, 79882)),
                Promise.resolve().then(o.bind(o, 33461)),
                Promise.resolve().then(o.bind(o, 36298)),
                Promise.resolve().then(o.bind(o, 4968)),
                Promise.resolve().then(o.bind(o, 71267)),
                Promise.resolve().then(o.bind(o, 16371)),
                Promise.resolve().then(o.bind(o, 53714)),
                Promise.resolve().then(o.bind(o, 65445)),
                Promise.resolve().then(o.bind(o, 41076)),
                Promise.resolve().then(o.bind(o, 93099)),
                Promise.resolve().then(o.bind(o, 15640)),
                Promise.resolve().then(o.bind(o, 82885)),
                Promise.resolve().then(o.bind(o, 99733)),
                Promise.resolve().then(o.bind(o, 18355)),
                Promise.resolve().then(o.bind(o, 42691)),
                Promise.resolve().then(o.bind(o, 37235)),
                Promise.resolve().then(o.bind(o, 3781)),
                Promise.resolve().then(o.bind(o, 33829)),
                Promise.resolve().then(o.bind(o, 39906)),
                Promise.resolve().then(o.bind(o, 50119)),
                Promise.resolve().then(o.bind(o, 21179)),
                Promise.resolve().then(o.bind(o, 17097)),
                Promise.resolve().then(o.bind(o, 50193)),
                Promise.resolve().then(o.bind(o, 83399)),
                Promise.resolve().then(o.bind(o, 11450)),
                Promise.resolve().then(o.bind(o, 62345)),
                Promise.resolve().then(o.bind(o, 37408)),
                Promise.resolve().then(o.bind(o, 48392)),
                Promise.resolve().then(o.bind(o, 42488)),
                Promise.resolve().then(o.bind(o, 33776)),
                Promise.resolve().then(o.bind(o, 5207)),
                Promise.resolve().then(o.bind(o, 85827)),
                Promise.resolve().then(o.bind(o, 8394)),
                Promise.resolve().then(o.bind(o, 3192)),
                Promise.resolve().then(o.bind(o, 7286)),
                Promise.resolve().then(o.bind(o, 60305)),
                Promise.resolve().then(o.bind(o, 47203)),
                Promise.resolve().then(o.bind(o, 34286)),
                Promise.resolve().then(o.bind(o, 224)),
                Promise.resolve().then(o.bind(o, 24449)),
                Promise.resolve().then(o.bind(o, 79893)),
                Promise.resolve().then(o.bind(o, 81789)),
                Promise.resolve().then(o.bind(o, 87466)),
                Promise.resolve().then(o.bind(o, 34028)),
                Promise.resolve().then(o.bind(o, 99564)),
                Promise.resolve().then(o.bind(o, 95348)),
                Promise.resolve().then(o.bind(o, 52347)),
                Promise.resolve().then(o.bind(o, 61015)),
                Promise.resolve().then(o.bind(o, 1771)),
                Promise.resolve().then(o.bind(o, 80043)),
                Promise.resolve().then(o.bind(o, 65729)),
                Promise.resolve().then(o.bind(o, 12235)),
                Promise.resolve().then(o.bind(o, 60793)),
                Promise.resolve().then(o.bind(o, 74565)),
                Promise.resolve().then(o.bind(o, 8941)),
                Promise.resolve().then(o.bind(o, 38433)),
                Promise.resolve().then(o.bind(o, 8732)),
                Promise.resolve().then(o.bind(o, 43369)),
                Promise.resolve().then(o.bind(o, 47564)),
                Promise.resolve().then(o.bind(o, 41017)),
                Promise.resolve().then(o.bind(o, 27252)),
                Promise.resolve().then(o.bind(o, 65286)),
                Promise.resolve().then(o.bind(o, 45198)),
                Promise.resolve().then(o.bind(o, 46814)),
                Promise.resolve().then(o.bind(o, 92508)),
                Promise.resolve().then(o.bind(o, 40126)),
                Promise.resolve().then(o.bind(o, 83726)),
                Promise.resolve().then(o.bind(o, 90410)),
                Promise.resolve().then(o.bind(o, 13246)),
                Promise.resolve().then(o.bind(o, 26040)),
                Promise.resolve().then(o.bind(o, 92446)),
                Promise.resolve().then(o.bind(o, 42593)),
                Promise.resolve().then(o.bind(o, 70570)),
                Promise.resolve().then(o.bind(o, 88416)),
                Promise.resolve().then(o.bind(o, 24174)),
                Promise.resolve().then(o.bind(o, 78458)),
                Promise.resolve().then(o.bind(o, 59457)),
                Promise.resolve().then(o.bind(o, 6690)),
                Promise.resolve().then(o.bind(o, 88370)),
                Promise.resolve().then(o.bind(o, 66904)),
                Promise.resolve().then(o.bind(o, 39937)),
                Promise.resolve().then(o.bind(o, 33019)),
                Promise.resolve().then(o.bind(o, 38808)),
                Promise.resolve().then(o.bind(o, 58094)),
                Promise.resolve().then(o.bind(o, 78009)),
                Promise.resolve().then(o.bind(o, 33427)),
                Promise.resolve().then(o.bind(o, 30878)),
                Promise.resolve().then(o.bind(o, 53115)),
                Promise.resolve().then(o.bind(o, 52398)),
                Promise.resolve().then(o.bind(o, 82327)),
                Promise.resolve().then(o.bind(o, 17012)),
                Promise.resolve().then(o.bind(o, 9275)),
                Promise.resolve().then(o.bind(o, 17658)),
                Promise.resolve().then(o.bind(o, 36578)),
                Promise.resolve().then(o.bind(o, 66989)),
                Promise.resolve().then(o.bind(o, 58863)),
                Promise.resolve().then(o.bind(o, 60899)),
                Promise.resolve().then(o.bind(o, 59437)),
                Promise.resolve().then(o.bind(o, 43367)),
                Promise.resolve().then(o.bind(o, 66446)),
                Promise.resolve().then(o.bind(o, 86840)),
                Promise.resolve().then(o.bind(o, 75181)),
                Promise.resolve().then(o.bind(o, 99538)),
                Promise.resolve().then(o.bind(o, 45252)),
                Promise.resolve().then(o.bind(o, 59226)),
                Promise.resolve().then(o.bind(o, 75961)),
                Promise.resolve().then(o.bind(o, 33964)),
                Promise.resolve().then(o.bind(o, 33967)),
                Promise.resolve().then(o.bind(o, 64410)),
                Promise.resolve().then(o.bind(o, 91350)),
                Promise.resolve().then(o.bind(o, 4500)),
                Promise.resolve().then(o.bind(o, 55846)),
                Promise.resolve().then(o.bind(o, 65689)),
                Promise.resolve().then(o.bind(o, 99386)),
                Promise.resolve().then(o.bind(o, 5222)),
                Promise.resolve().then(o.bind(o, 60440)),
                Promise.resolve().then(o.bind(o, 37271)),
                Promise.resolve().then(o.bind(o, 66688)),
                Promise.resolve().then(o.bind(o, 76472)),
                Promise.resolve().then(o.bind(o, 41682)),
                Promise.resolve().then(o.bind(o, 77666)),
                Promise.resolve().then(o.bind(o, 8765)),
                Promise.resolve().then(o.bind(o, 48670)),
                Promise.resolve().then(o.bind(o, 22096)),
                Promise.resolve().then(o.bind(o, 33655)),
                Promise.resolve().then(o.bind(o, 27754)),
                Promise.resolve().then(o.bind(o, 47347)),
                Promise.resolve().then(o.bind(o, 45591)),
                Promise.resolve().then(o.bind(o, 52862)),
                Promise.resolve().then(o.bind(o, 79326)),
                Promise.resolve().then(o.bind(o, 73922)),
                Promise.resolve().then(o.bind(o, 10790)),
                Promise.resolve().then(o.bind(o, 78684)),
                Promise.resolve().then(o.bind(o, 76877)),
                Promise.resolve().then(o.bind(o, 61176)),
                Promise.resolve().then(o.bind(o, 62108)),
                Promise.resolve().then(o.bind(o, 75053)),
                Promise.resolve().then(o.bind(o, 23035)),
                Promise.resolve().then(o.bind(o, 82315)),
                Promise.resolve().then(o.t.bind(o, 66154, 23)),
                Promise.resolve().then(o.t.bind(o, 1131, 23)),
                Promise.resolve().then(o.t.bind(o, 65250, 23)),
                Promise.resolve().then(o.t.bind(o, 91786, 23)),
                Promise.resolve().then(o.bind(o, 60673)),
                Promise.resolve().then(o.bind(o, 5048)),
                Promise.resolve().then(o.bind(o, 50215)),
                Promise.resolve().then(o.bind(o, 78308)),
                Promise.resolve().then(o.bind(o, 10084)),
                Promise.resolve().then(o.bind(o, 58681)),
                Promise.resolve().then(o.bind(o, 18658)),
                Promise.resolve().then(o.bind(o, 6323)),
                Promise.resolve().then(o.bind(o, 78817)),
                Promise.resolve().then(o.bind(o, 7230)),
                Promise.resolve().then(o.bind(o, 38378)),
                Promise.resolve().then(o.bind(o, 35609)),
                Promise.resolve().then(o.bind(o, 18606)),
                Promise.resolve().then(o.bind(o, 68014)),
                Promise.resolve().then(o.bind(o, 12126)),
                Promise.resolve().then(o.bind(o, 52742)),
                Promise.resolve().then(o.bind(o, 68098)),
                Promise.resolve().then(o.bind(o, 89190)),
                Promise.resolve().then(o.bind(o, 3270)),
                Promise.resolve().then(o.bind(o, 1220)),
                Promise.resolve().then(o.bind(o, 96584)),
                Promise.resolve().then(o.bind(o, 54598)),
                Promise.resolve().then(o.bind(o, 14196)),
                Promise.resolve().then(o.bind(o, 20576)),
                Promise.resolve().then(o.t.bind(o, 5866, 23)),
                Promise.resolve().then(o.bind(o, 73976)),
                Promise.resolve().then(o.bind(o, 35203)),
                Promise.resolve().then(o.bind(o, 39450)),
                Promise.resolve().then(o.bind(o, 77607)),
                Promise.resolve().then(o.bind(o, 7430)),
                Promise.resolve().then(o.bind(o, 24786)),
                Promise.resolve().then(o.bind(o, 24036)),
                Promise.resolve().then(o.bind(o, 34932)),
                Promise.resolve().then(o.bind(o, 56204)),
                Promise.resolve().then(o.t.bind(o, 71262, 23)),
                Promise.resolve().then(o.t.bind(o, 86318, 23)),
                Promise.resolve().then(o.bind(o, 75450)),
                Promise.resolve().then(o.bind(o, 60608)),
                Promise.resolve().then(o.bind(o, 33648)),
                Promise.resolve().then(o.bind(o, 43548)),
                Promise.resolve().then(o.bind(o, 69672)),
                Promise.resolve().then(o.bind(o, 50711)),
                Promise.resolve().then(o.bind(o, 5185)),
                Promise.resolve().then(o.bind(o, 90555)),
                Promise.resolve().then(o.bind(o, 5602)),
                Promise.resolve().then(o.bind(o, 12390)),
                Promise.resolve().then(o.bind(o, 58376)),
                Promise.resolve().then(o.bind(o, 24491)),
                Promise.resolve().then(o.bind(o, 61993)),
                Promise.resolve().then(o.bind(o, 38644)),
                Promise.resolve().then(o.bind(o, 93668)),
                Promise.resolve().then(o.bind(o, 85949)),
                Promise.resolve().then(o.bind(o, 17519)),
                Promise.resolve().then(o.bind(o, 62010)),
                Promise.resolve().then(o.bind(o, 16372)),
                Promise.resolve().then(o.bind(o, 64434)),
                Promise.resolve().then(o.bind(o, 33158)),
                Promise.resolve().then(o.bind(o, 27314)),
                Promise.resolve().then(o.bind(o, 93206)),
                Promise.resolve().then(o.bind(o, 37226)),
                Promise.resolve().then(o.t.bind(o, 1810, 23)),
                Promise.resolve().then(o.t.bind(o, 69191, 23)),
                Promise.resolve().then(o.t.bind(o, 48384, 23)),
                Promise.resolve().then(o.t.bind(o, 83690, 23)),
                Promise.resolve().then(o.t.bind(o, 63886, 23)),
                Promise.resolve().then(o.bind(o, 13811)),
                Promise.resolve().then(o.bind(o, 45645)),
                Promise.resolve().then(o.bind(o, 24126)),
                Promise.resolve().then(o.bind(o, 20406)),
                Promise.resolve().then(o.bind(o, 21940)),
                Promise.resolve().then(o.t.bind(o, 99882, 23)),
                Promise.resolve().then(o.t.bind(o, 25582, 23)),
                Promise.resolve().then(o.bind(o, 26086)),
                Promise.resolve().then(o.t.bind(o, 18608, 23)),
                Promise.resolve().then(o.bind(o, 96838)),
                Promise.resolve().then(o.bind(o, 10358)),
                Promise.resolve().then(o.bind(o, 23143)),
                Promise.resolve().then(o.bind(o, 51828)),
                Promise.resolve().then(o.bind(o, 51725)),
                Promise.resolve().then(o.bind(o, 23834)),
                Promise.resolve().then(o.bind(o, 88343)),
                Promise.resolve().then(o.bind(o, 24624)),
                Promise.resolve().then(o.bind(o, 75312));
        },
        40493: (e, s, o) => {
            'use strict';
            o.d(s, { ClientConfigInitializer: () => n }), o(54486);
            let n = (e) => {
                let { env: s, nonce: o } = e;
                return null;
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
        47770: (e, s, o) => {
            'use strict';
            o.d(s, { useApplicationUpdate: () => p });
            var n = o(54486),
                r = o(61910),
                t = o(43426),
                i = o(83252),
                l = o(50420),
                d = o(77881),
                a = o(97800),
                v = o(80585),
                h = o(79413),
                m = o.n(h);
            let b = (e) => {
                    let { version: s, formatMessage: o, closeToast: t } = e,
                        h = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(i.EE.INSTALL_UPDATE);
                        }, [t]),
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
                modUpdateToast = (e) => {
                    let { version: s, formatMessage: o, closeToast: t } = e,
                        [h, b] = (0, r.useState)(-1),
                        P = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(i.EE.INSTALL_MOD_UPDATE), null == t || t();
                        }, [t]),
                        C = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(i.EE.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        A = (e) => {
                            let s = o({ id: 'offline.download' });
                            return e < 0 ? (s = o({ id: 'offline.download' })) : e >= 0 && e <= 100 ? (s = 'Скачивание…') : e > 100 && (s = 'Установить'), s;
                        },
                        g = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: o({ id: 'desktop.on-mod-update-available' }, { version: s }),
                                        }),
                                        (0, n.jsx)(d.$, {
                                            className: m().button,
                                            onClick: h <= 100 ? C : P,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: h <= 100 && h >= 0,
                                            children: (0, n.jsx)(a.Caption, { variant: 'div', type: 'controls', size: 'm', children: A(h) }),
                                        }),
                                    ],
                                }),
                            [o, P, s, h, C],
                        ),
                        E = (0, r.useCallback)((e, s, o, r = 0) => {
                            if ('modUpdateToast' !== s) return;
                            if (window.dedupeNonces && window.dedupeNonces[s] === r) return;
                            window.dedupeNonces || (window.dedupeNonces = {}), r && (window.dedupeNonces[s] = r), b(o);
                        }, []);
                    return (
                        (0, r.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(i.EE.PROGRESS_BAR_CHANGE, E),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(i.EE.PROGRESS_BAR_CHANGE, E);
                                }
                            );
                        }, [E]),
                        (0, r.useEffect)(() => {
                            let e = () => {
                                null == t || t();
                            };
                            return (
                                window.desktopEvents?.on(i.EE.MOD_UPDATE_AVAILABLE, e),
                                () => {
                                    window.desktopEvents?.off?.(i.EE.MOD_UPDATE_AVAILABLE, e);
                                }
                            );
                        }, [t]),
                        (0, n.jsxs)(v.$W, {
                            className: (0, l.$)(m().root, m().important),
                            message: g,
                            children: [
                                (0, n.jsx)('div', {
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
                },
                toastWithProgress = (e) => {
                    let { closeToast: s, toastID: o, message: t, buttonLabel: h, onButtonClick: b, disabled: P = !1, dismissOnButtonClick: C = !1 } = e,
                        [A, g] = (0, r.useState)(-1),
                        [E, w] = (0, r.useState)('Ожидание...'),
                        T = '__pulseToastProgressCache',
                        N = (0, r.useCallback)(() => {
                            null == b || b(), C && (null == s || s());
                        }, [C, b, s]),
                        f = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: t.replace('#s', E),
                                        }),
                                        h &&
                                            (0, n.jsx)(d.$, {
                                                className: m().button,
                                                onClick: N,
                                                variant: 'default',
                                                color: 'secondary',
                                                size: 'xs',
                                                radius: 'xxxl',
                                                disabled: P,
                                                children: (0, n.jsx)(a.Caption, { variant: 'div', type: 'controls', size: 'm', children: h }),
                                            }),
                                    ],
                                }),
                            [P, h, t, N, E],
                        ),
                        k = (0, r.useCallback)(
                            (e, s, t, n = 0, r = void 0) => {
                                if (s !== o) return;
                                if (window.dedupeNonces && window.dedupeNonces[s] === n) return;
                                window.dedupeNonces || (window.dedupeNonces = {}),
                                    n && (window.dedupeNonces[s] = n),
                                    window[T] || (window[T] = {}),
                                    (window[T][s] = { progress: t, label: r }),
                                    g(t),
                                    r && w(r);
                            },
                            [o],
                        ),
                        p = (0, r.useCallback)(
                            (e, t, n = 0) => {
                                if (window['onBasicToastDismiss' + o] === n) return;
                                n && (window['onBasicToastDismiss' + o] = n), t === o && (window[T] && delete window[T][o], null == s || s());
                            },
                            [s, o],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            let e = window[T] && window[T][o];
                            e && (g(e.progress), e.label && w(e.label));
                            return () => {
                                window[T] && delete window[T][o];
                            };
                        }, [o]),
                        (0, r.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(i.EE.PROGRESS_BAR_CHANGE, k),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(i.EE.PROGRESS_BAR_CHANGE, k);
                                }
                            );
                        }, [k]),
                        (0, r.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(i.EE.BASIC_TOAST_DISMISS, p),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(i.EE.BASIC_TOAST_DISMISS, p);
                                }
                            );
                        }, [p]),
                        (0, n.jsxs)(v.$W, {
                            className: (0, l.$)(m().root, m().important),
                            message: f,
                            children: [
                                (0, n.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: A + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: A <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                p = () => {
                    let { formatMessage: e } = (0, t.A)(),
                        { notify: s } = (0, i.lkh)(),
                        { notify: o, dismiss: l } = (0, i.lkh)(),
                        { notify: d } = (0, i.lkh)(),
                        { notify: a } = (0, i.lkh)(),
                        { notify: v } = (0, i.lkh)(),
                        h = (0, r.useRef)(''),
                        m = (0, r.useCallback)(
                            (o, t) => {
                                h.current !== t && ((h.current = t), s((0, n.jsx)(b, { formatMessage: e, version: t }), { containerId: i.uQT.IMPORTANT }));
                            },
                            [e, h, s],
                        ),
                        P = (0, r.useCallback)(
                            (s, t, r, d = 0) => {
                                if (window.modUpdateAvailableEventDedupeNonce === d) return;
                                d && (window.modUpdateAvailableEventDedupeNonce = d),
                                    o((0, n.jsx)(modUpdateToast, { formatMessage: e, version: `${t} -> ${r}`, closeToast: l }), { containerId: i.uQT.IMPORTANT });
                            },
                            [e, o, l],
                        ),
                        C = (0, r.useCallback)(() => {
                            window.desktopEvents?.send(i.EE.APPLICATION_RESTART);
                        }, []),
                        A = (0, r.useCallback)(
                            (e, s = 'GPU_STALL', o = 0) => {
                                if (window.onGPUStallEventDedupeNonce === o) return;
                                o && (window.onGPUStallEventDedupeNonce = o),
                                    d(
                                        (0, n.jsx)(toastWithProgress, {
                                            toastID: 'GPU_STALL',
                                            message: `Аппаратное ускорение отключилось: ${s}`,
                                            buttonLabel: 'Исправить',
                                            onButtonClick: C,
                                        }),
                                        { containerId: i.uQT.IMPORTANT },
                                    );
                            },
                            [d, C],
                        ),
                        g = (0, r.useCallback)(() => {
                            window.desktopEvents?.send(i.EE.APP_STALL_CANCEL_RESTART);
                        }, []),
                        E = (0, r.useCallback)(
                            (e, s = 0) => {
                                if (window.onAppStallStallDedupeNonce === s) return;
                                s && (window.onAppStallStallDedupeNonce = s),
                                    a(
                                        (0, n.jsx)(toastWithProgress, {
                                            toastID: 'safeModeRestart',
                                            message: 'Плеер запускается слишком долго. Перезагрузка в безопасном режиме через #s',
                                            buttonLabel: 'Отменить',
                                            onButtonClick: g,
                                            dismissOnButtonClick: !0,
                                        }),
                                        { containerId: i.uQT.IMPORTANT },
                                    );
                            },
                            [a, g],
                        ),
                        w = (0, r.useCallback)(
                            (e, s, o, r, t = 0) => {
                                if (window['onBasicToastCreate' + s] === t) return;
                                t && (window['onBasicToastCreate' + s] = t),
                                    v(
                                        (0, n.jsx)(toastWithProgress, {
                                            toastID: s,
                                            message: o,
                                            buttonLabel: r || void 0,
                                            dismissOnButtonClick: !!r,
                                        }),
                                        { containerId: i.uQT.IMPORTANT },
                                    );
                            },
                            [v],
                        );
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(i.EE.UPDATE_AVAILABLE, m),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(i.EE.UPDATE_AVAILABLE, m);
                            }
                        );
                    }, [m]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(i.EE.BASIC_TOAST_CREATE, w),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(i.EE.BASIC_TOAST_CREATE, w);
                            }
                        );
                    }, [w]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(i.EE.MOD_UPDATE_AVAILABLE, P),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(i.EE.MOD_UPDATE_AVAILABLE, P);
                            }
                        );
                    }, [P]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(i.EE.GPU_STALL, A),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(i.EE.GPU_STALL, A);
                            }
                        );
                    }, [A]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(i.EE.APP_STALL, E),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(i.EE.APP_STALL, E);
                            }
                        );
                    }, [E]);
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
        53466: (e, s, o) => {
            'use strict';
            o.d(s, { useReleaseNotes: () => t });
            var n = o(61910),
                r = o(83252);
            let t = () => {
                let [e, s] = (0, n.useState)(!1),
                    {
                        releaseNotes: { setTranslationsReleaseNotes: o, isReady: t, modal: i, setSortedDescReleaseNotesKeys: l },
                    } = (0, r.Pjs)(),
                    d = (0, n.useCallback)(
                        (e, n) => {
                            let { needToShowReleaseNotes: r, sortedDescReleaseNotesKeys: t, translationsReleaseNotes: i } = n;
                            o(i), l(t), r && s(!0);
                        },
                        [l, o],
                    );
                (0, n.useEffect)(() => {
                    e && t && (i.open(), s(!1));
                }, [t, i, e]),
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
        61337: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshApplicationData: () => i });
            var n = o(61910),
                r = o(6024),
                t = o(83252);
            let i = () => {
                let { library: e, collection: s, experiments: o, main: i, user: l } = (0, t.Pjs)(),
                    d = (0, n.useCallback)(() => {
                        o.getData(),
                            e.getData(),
                            i.landing.isLoaded && i.landing.getSkeleton({ id: r.p.WEB_MAIN, showWizard: l.settings.showWizard }, { preloadBlocksCount: 2 }),
                            s.landing.isLoaded && s.landing.getSkeleton({ id: r.p.WEB_COLLECTION, showWizard: l.settings.showWizard }, { preloadBlocksCount: 2 });
                    }, [s.landing, o, e, i.landing, l.settings.showWizard]);
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(t.EE.REFRESH_APPLICATION_DATA, d),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(t.EE.REFRESH_APPLICATION_DATA, d);
                        }
                    );
                }, [d]);
            };
        },
        65034: (e, s, o) => {
            'use strict';
            o.d(s, { NotFound: () => c });
            var n = o(54486),
                r = o(50420),
                t = o(28303),
                i = o(47713),
                l = o(77881),
                d = o(5956),
                a = o(97800),
                v = o(83252),
                h = o(80585),
                m = o(61910),
                b = o(46215),
                P = o.n(b);
            let c = (0, t.PA)((e) => {
                let { className: s, title: o, description: t, iconVariant: b = 'musicLogo', iconClassName: c, iconSize: u } = e,
                    { contentRef: _ } = (0, v.gKY)(),
                    E = (0, v.ZpR)(v.Zyd.main.href);
                (0, v.LZB)();
                let { handleNavigateToMain: C } = (0, v.D5F)(E);
                return (
                    (0, v.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, v.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, n.jsxs)('div', {
                        className: (0, r.$)(P().root, { [P().root_desktop]: !_ }, s),
                        children: [
                            (0, n.jsx)(h.Lh, { withBackwardFallback: '/', className: P().navigation, withForwardControl: !1 }),
                            (0, n.jsxs)('div', {
                                className: P().content,
                                children: [
                                    (0, n.jsx)(d.Icon, { className: (0, r.$)(P().icon, c), variant: b, size: u }),
                                    (0, n.jsx)(a.Heading, {
                                        className: (0, r.$)(P().title, P().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: o || (0, n.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, n.jsx)(a.Caption, {
                                        className: (0, r.$)(P().text, P().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: t || (0, n.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, n.jsx)(l.$, {
                                        onClick: C,
                                        className: P().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(a.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, n.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        66164: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshRepositoryMeta: () => t });
            var n = o(61910),
                r = o(83252);
            let t = () => {
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
        67270: () => {},
        68317: (e, s, o) => {
            'use strict';
            o.d(s, {
                qw: () => w.ReleaseNotesModal,
                _o: () => p,
                cq: () => N.TitleBar,
                CA: () => n,
                M4: () => t,
                _E: () => i,
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
                sendDownloadTrack: () => sendDownloadTrack,
                sendDownloadCurrentTrack: () => sendDownloadCurrentTrack,
                sendDownloadTracks: () => sendDownloadTracks,
                sendYnisonState: () => sendYnisonState,
            });
            let n = () => {
                document.addEventListener('auxclick', (e) => e.preventDefault()),
                    document.addEventListener('click', (e) => {
                        (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                    });
            };
            var r = o(83252);
            let t = (e) => {
                    var s;
                    null == (s = window.desktopEvents) || s.send(r.EE.APPLICATION_READY, e);
                },
                sendDownloadTrack = (e, s) => {
                    var o;
                    null == (o = window.desktopEvents) || o.send(r.EE.DOWNLOAD_TRACK, e, s);
                },
                sendDownloadCurrentTrack = (e) => {
                    var s;
                    null == (s = window.desktopEvents) || s.send(r.EE.DOWNLOAD_CURRENT_TRACK, e);
                },
                sendDownloadTracks = (e, s, o) => {
                    var t;
                    null == (t = window.desktopEvents) || t.send(r.EE.DOWNLOAD_TRACKS, e, s, o);
                },
                sendYnisonState = (e) => {
                    var s;
                    null == (s = window.desktopEvents) || s.send(r.EE.YNISON_STATE, { rawData: e.rawData });
                },
                i = (e) => {
                    let s = e === r.Sxu.Light ? '#FFFFFF' : '#000000';
                    window.desktopEvents.send(r.EE.APPLICATION_THEME, s);
                };
            o(24783);
            var l = o(99175),
                d = o(47770),
                a = o(71117),
                v = o(89473),
                h = o(15855),
                m = o(61337),
                b = o(66164),
                P = o(15778),
                c = o(53466),
                u = o(96798),
                _ = o(93064),
                E = o(26433);
            let C = _.gK.model('TranslationsModel', { data: _.gK.frozen() }),
                p = _.gK
                    .model('ReleaseNotes', { modal: E.qt, translations: _.gK.maybeNull(C), sortedDescReleaseNotesKeys: _.gK.maybeNull(_.gK.array(_.gK.string)) })
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
                            e.sortedDescReleaseNotesKeys = (0, _.wg)(s);
                        },
                        setTranslationsReleaseNotes: (s) => {
                            s && (e.translations = C.create({ data: s }));
                        },
                    }));
            var w = o(81733),
                N = o(83573);
        },
        71117: (e, s, o) => {
            'use strict';
            o.d(s, { useLaunch: () => t });
            var n = o(61910),
                r = o(83252);
            let t = () => {
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
        79413: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        81733: (e, s, o) => {
            'use strict';
            o.d(s, { ReleaseNotesModal: () => u });
            var n = o(54486),
                r = o(50420),
                t = o(28303),
                i = o(43426),
                l = o(50722),
                d = o(47713),
                a = o(32692),
                v = o(56231),
                h = o(97800),
                m = o(83252),
                b = o(45631),
                P = o.n(b);
            let c = {
                    ul: (e) => (0, n.jsx)('ul', { className: P().description, children: e }),
                    li: (e) => (0, n.jsx)('li', { className: P().item, children: e }),
                    code: (e) => (0, n.jsx)('code', { className: P().code, children: e }),
                    date: (e) => (0, n.jsx)('span', { className: P().date, children: e }),
                    p: (e) => (0, n.jsx)('p', { className: P().paragraph, children: e }),
                    br: (0, n.jsx)('br', {}),
                },
                u = (0, t.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: s, modal: o },
                        } = (0, m.Pjs)(),
                        { formatMessage: t } = (0, i.A)(),
                        { language: b, defaultLanguage: u } = (0, m.h6b)(),
                        _ = (0, m.Crf)();
                    return (0, n.jsx)(a.a, {
                        title: t({ id: 'desktop.release-notes-modal-title' }),
                        open: o.isOpened,
                        onOpenChange: o.onOpenChange,
                        onClose: o.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: P().modalOverlay,
                        overlayColor: 'full',
                        labelClose: t({ id: 'interface-actions.close' }),
                        className: P().root,
                        headerClassName: P().modalHeader,
                        contentClassName: P().modalContent,
                        children: (0, n.jsx)(l.A, {
                            onError: _,
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
        83573: (e, s, o) => {
            'use strict';
            o.d(s, { TitleBar: () => b });
            var n = o(54486),
                r = o(50420),
                t = o(28303),
                i = o(61910),
                l = o(43426),
                d = o(83252),
                a = o(24783),
                v = o(49475),
                h = o.n(v);
            let m = (e) => {
                    let { children: s, className: o, onClick: t, ariaLabel: i, withSecondaryColor: l } = e;
                    return (0, n.jsx)('button', {
                        type: 'button',
                        className: (0, r.$)(h().button, { [h().button_withSecondaryColor]: l }, o),
                        onClick: t,
                        'aria-label': i,
                        children: s,
                    });
                },
                b = (0, t.PA)((e) => {
                    let { withSecondaryColor: s } = e,
                        { settings: o } = (0, d.Pjs)(),
                        t = o.isWindowsApplication || o.isLinuxApplication,
                        { formatMessage: v } = (0, l.A)(),
                        b = (0, i.useCallback)(() => {
                            (0, a.vZ)();
                        }, []),
                        P = (0, i.useCallback)(() => {
                            (0, a.LO)();
                        }, []),
                        c = (0, i.useCallback)(() => {
                            (0, a.N5)();
                        }, []),
                        onMiniPlayerToggle = (0, i.useCallback)(() => {
                            (0, a.toggleMiniPlayer)();
                        }, []),
                        E = (0, i.useCallback)((e) => {
                            if (e.target.closest('button')) return;
                            (0, a.LO)();
                        }, []),
                        [w, N] = (0, i.useState)(window.HIDE_PULSESYNC_VERSION_IN_TITLEBAR?.() ?? !1);
                    (0, i.useEffect)(() => {
                            const e = (event, key, value) => {
                                'modSettings.window.hidePulseSyncVersionInTitleBar' === key && N(value);
                            };
                            return window.desktopEvents?.on('NATIVE_STORE_UPDATE', e), () => window.desktopEvents?.off?.('NATIVE_STORE_UPDATE', e);
                        }, []);
                    return (0, n.jsx)('div', {
                        className: h().root,
                        onDoubleClick: E,
                        children:
                            t &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    !w &&
                                        (0, n.jsx)('span', {
                                            className: h().pulseText,
                                            children: `PulseSync ${window.PULSE_VERSION}`,
                                        }),
                                    (0, n.jsx)(m, {
                                        onClick: onMiniPlayerToggle,
                                        ariaLabel: 'miniplayer',
                                        withSecondaryColor: s,
                                        children: (0, n.jsx)('svg', {
                                            width: '12',
                                            height: '12',
                                            viewBox: '0 0 12 12',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            className: (0, r.$)(h().icon, {
                                                [h().icon_withSecondaryColor]: s,
                                            }),
                                            children: [
                                                (0, n.jsx)('path', {
                                                    d: 'M1.49805 11C1.42969 11 1.36458 10.987 1.30273 10.961C1.24414 10.935 1.19206 10.8992 1.14648 10.8537C1.10091 10.8081 1.0651 10.7561 1.03906 10.6976C1.01302 10.6358 1 10.5707 1 10.5024C1 10.4341 1.01302 10.3707 1.03906 10.3122C1.0651 10.2504 1.10091 10.1967 1.14648 10.1512C1.19206 10.1024 1.24414 10.065 1.30273 10.039C1.36458 10.013 1.42969 10 1.49805 10H10.502C10.5703 10 10.6338 10.013 10.6924 10.039C10.7542 10.065 10.8079 10.1024 10.8535 10.1512C10.8991 10.1967 10.9349 10.2504 10.9609 10.3122C10.987 10.3707 11 10.4341 11 10.5024C11 10.5707 10.987 10.6358 10.9609 10.6976C10.9349 10.7561 10.8991 10.8081 10.8535 10.8537C10.8079 10.8992 10.7542 10.935 10.6924 10.961C10.6338 10.987 10.5703 11 10.502 11H1.49805Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M1.24902 2C1.21484 2 1.18229 1.98699 1.15137 1.96098C1.12207 1.93496 1.09603 1.89919 1.07324 1.85366C1.05046 1.80813 1.03255 1.7561 1.01953 1.69756C1.00651 1.63577 1 1.57073 1 1.50244C1 1.43415 1.00651 1.37073 1.01953 1.31219C1.03255 1.25041 1.05046 1.19675 1.07324 1.15122C1.09603 1.10244 1.12207 1.06504 1.15137 1.03902C1.18229 1.01301 1.21484 1 1.24902 1H5.75098C5.78516 1 5.81689 1.01301 5.84619 1.03902C5.87711 1.06504 5.90397 1.10244 5.92676 1.15122C5.94955 1.19675 5.96745 1.25041 5.98047 1.31219C5.99349 1.37073 6 1.43415 6 1.50244C6 1.57073 5.99349 1.63577 5.98047 1.69756C5.96745 1.7561 5.94955 1.80813 5.92676 1.85366C5.90397 1.89919 5.87711 1.93496 5.84619 1.96098C5.81689 1.98699 5.78516 2 5.75098 2H1.24902Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M10 6.24902C10 6.21484 10.013 6.18229 10.039 6.15137C10.065 6.12207 10.1008 6.09603 10.1463 6.07324C10.1919 6.05046 10.2439 6.03255 10.3024 6.01953C10.3642 6.00651 10.4293 6 10.4976 6C10.5659 6 10.6293 6.00651 10.6878 6.01953C10.7496 6.03255 10.8033 6.05046 10.8488 6.07324C10.8976 6.09603 10.935 6.12207 10.961 6.15137C10.987 6.18229 11 6.21484 11 6.24902L11 10.751C11 10.7852 10.987 10.8169 10.961 10.8462C10.935 10.8771 10.8976 10.904 10.8488 10.9268C10.8033 10.9495 10.7496 10.9675 10.6878 10.9805C10.6293 10.9935 10.5659 11 10.4976 11C10.4293 11 10.3642 10.9935 10.3024 10.9805C10.2439 10.9675 10.1919 10.9495 10.1463 10.9268C10.1008 10.904 10.065 10.8771 10.039 10.8462C10.013 10.8169 10 10.7852 10 10.751L10 6.24902Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M9.85698 1.4045C9.89078 1.37069 9.93219 1.34771 9.98121 1.33556C10.0286 1.32502 10.0797 1.3246 10.1345 1.33432C10.1893 1.34404 10.2439 1.3632 10.2982 1.3918C10.3549 1.4227 10.4074 1.46234 10.4558 1.51072C10.5042 1.55911 10.5427 1.61048 10.5713 1.66483C10.6022 1.72148 10.6225 1.77721 10.6322 1.832C10.6442 1.8891 10.645 1.94135 10.6344 1.98876C10.6223 2.03778 10.5993 2.07919 10.5655 2.11299L6.11287 6.56559C6.07907 6.5994 6.03846 6.62158 5.99105 6.63212C5.94203 6.64427 5.88898 6.64434 5.83188 6.63231C5.77708 6.62259 5.72136 6.60228 5.6647 6.57139C5.61035 6.54279 5.55899 6.5043 5.5106 6.45591C5.46222 6.40753 5.42257 6.35501 5.39167 6.29835C5.36308 6.244 5.34392 6.18943 5.3342 6.13464C5.32448 6.07984 5.3257 6.02794 5.33785 5.97892C5.3484 5.93151 5.37057 5.8909 5.40438 5.8571L9.85698 1.4045Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M10 1.19922C10 1.17188 10.013 1.14583 10.039 1.12109C10.065 1.09766 10.1008 1.07682 10.1463 1.05859C10.1919 1.04036 10.2439 1.02604 10.3024 1.01562C10.3642 1.00521 10.4293 1 10.4976 1C10.5659 1 10.6293 1.00521 10.6878 1.01562C10.7496 1.02604 10.8033 1.04036 10.8488 1.05859C10.8976 1.07682 10.935 1.09766 10.961 1.12109C10.987 1.14583 11 1.17188 11 1.19922L11 4.80078C11 4.82812 10.987 4.85352 10.961 4.87695C10.935 4.90169 10.8976 4.92318 10.8488 4.94141C10.8033 4.95964 10.7496 4.97396 10.6878 4.98438C10.6293 4.99479 10.5659 5 10.4976 5C10.4293 5 10.3642 4.99479 10.3024 4.98438C10.2439 4.97396 10.1919 4.95964 10.1463 4.94141C10.1008 4.92318 10.065 4.90169 10.039 4.87695C10.013 4.85352 10 4.82812 10 4.80078L10 1.19922Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M10.8008 1C10.8281 1 10.8542 1.01301 10.8789 1.03902C10.9023 1.06504 10.9232 1.10081 10.9414 1.14634C10.9596 1.19187 10.974 1.2439 10.9844 1.30244C10.9948 1.36423 11 1.42927 11 1.49756C11 1.56585 10.9948 1.62927 10.9844 1.68781C10.974 1.74959 10.9596 1.80325 10.9414 1.84878C10.9232 1.89756 10.9023 1.93496 10.8789 1.96098C10.8542 1.98699 10.8281 2 10.8008 2L7.19922 2C7.17188 2 7.14648 1.98699 7.12305 1.96098C7.09831 1.93496 7.07682 1.89756 7.05859 1.84878C7.04036 1.80325 7.02604 1.74959 7.01562 1.68781C7.00521 1.62927 7 1.56585 7 1.49756C7 1.42927 7.00521 1.36423 7.01562 1.30244C7.02604 1.2439 7.04036 1.19187 7.05859 1.14634C7.07682 1.10081 7.09831 1.06504 7.12305 1.03902C7.14648 1.01301 7.17188 1 7.19922 1L10.8008 1Z',
                                                    fill: 'currentColor',
                                                }),
                                                (0, n.jsx)('path', {
                                                    d: 'M1 1.49805C1 1.42969 1.01301 1.36458 1.03902 1.30273C1.06504 1.24414 1.10081 1.19206 1.14634 1.14648C1.19187 1.10091 1.2439 1.0651 1.30244 1.03906C1.36423 1.01302 1.42927 1 1.49756 1C1.56585 1 1.62927 1.01302 1.68781 1.03906C1.74959 1.0651 1.80325 1.10091 1.84878 1.14648C1.89756 1.19206 1.93496 1.24414 1.96098 1.30273C1.98699 1.36458 2 1.42969 2 1.49805L2 10.502C2 10.5703 1.98699 10.6338 1.96098 10.6924C1.93496 10.7542 1.89756 10.8079 1.84878 10.8535C1.80325 10.8991 1.74959 10.9349 1.68781 10.9609C1.62927 10.987 1.56585 11 1.49756 11C1.42927 11 1.36423 10.987 1.30244 10.9609C1.2439 10.9349 1.19187 10.8991 1.14634 10.8535C1.10081 10.8079 1.06504 10.7542 1.03902 10.6924C1.01301 10.6338 1 10.5703 1 10.502L1 1.49805Z',
                                                    fill: 'currentColor',
                                                }),
                                            ],
                                        }),
                                    }),
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
        89473: (e, s, o) => {
            'use strict';
            o.d(s, { usePlayerAction: () => i });
            var n = o(61910),
                r = o(83252);
            const sendPlayerStateDefault = (e) => {
                let s;
                const o =
                        (e.state.queueState.index.value ?? 0) - 1 >= 0
                            ? e.state.queueState?.entityList.value?.[e.state.queueState.index.value - 1]?.entity?.entityData?.meta
                            : void 0,
                    n =
                        (e.state.queueState.index.value ?? 0) + 1 >= 0
                            ? e.state.queueState?.entityList.value?.[e.state.queueState.index.value + 1]?.entity?.entityData?.meta
                            : void 0;
                null == (s = window.desktopEvents) ||
                    s.send(r.EE.PLAYER_STATE, {
                        status: e.state.playerState.status.value,
                        isPlaying: 'playing' === e.state.playerState.status.value,
                        canMoveForward: e.state.currentContext.value?.availableActions.moveForward.value,
                        canMoveBackward: e.state.currentContext.value?.availableActions.moveBackward.value,
                        track: e.state.queueState.currentEntity.value?.entity.entityData.meta,
                        progress: e.state.playerState.progress.value,
                        availableActions: {
                            moveBackward: e.state.currentContext.value?.availableActions.moveBackward.value,
                            moveForward: e.state.currentContext.value?.availableActions.moveForward.value,
                            repeat: e.state.currentContext.value?.availableActions.repeat.value,
                            shuffle: e.state.currentContext.value?.availableActions.shuffle.value,
                            speed: e.state.currentContext.value?.availableActions.speed.value,
                        },
                        actionsStore: {
                            repeat: e.state.queueState.repeat.value,
                            shuffle: e.state.queueState.shuffle.value,
                            isLiked: e.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                e.state.queueState.currentEntity.value?.entity.entityData?.meta.id,
                            ),
                            isDisliked: e.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                e.state.queueState.currentEntity.value?.entity.entityData?.meta.id,
                            ),
                        },
                        previousTrack: o,
                        nextTrack: n,
                        volume: e.state.playerState.exponentVolume.value,
                    });
            };
            var t = (function (e) {
                return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
            })(t || {});
            let i = (e) => {
                let { sonataState: s } = (0, r.Pjs)(),
                    t = (0, n.useCallback)(
                        async (o) => {
                            let t = s.entityMeta;
                            if (!e || !t) return;
                            switch (o) {
                                case 'TOGGLE_LIKE':
                                    null == t || (await t.toggleLike?.());
                                    break;
                                case 'LIKE':
                                    t.isLiked || null == t || (await t.toggleLike?.());
                                    break;
                                case 'LIKE_NONE':
                                    t.isLiked && (null == t || (await t.toggleLike?.()));
                            }
                            sendPlayerStateDefault?.(e);
                        },
                        [e, s.entityMeta],
                    ),
                    i = (0, n.useCallback)(
                        async (o) => {
                            let i,
                                l,
                                t = s.entityMeta;
                            if (!e || !t) return;
                            let a = !1;
                            switch (o) {
                                case 'TOGGLE_DISLIKE':
                                    a = !0;
                                    break;
                                case 'DISLIKE':
                                    a = !t.isDisliked;
                                    break;
                                case 'DISLIKE_NONE':
                                    a = !!t.isDisliked;
                            }
                            a && (null == t || (await t.toggleDislike?.())),
                                a &&
                                    !t.isDisliked &&
                                    t.id === (null == e || null == (i = e.state.queueState.currentEntity.value) || null == (l = i.entity) ? void 0 : l.data.meta.id) &&
                                    (null == e || e.moveForward()),
                                sendPlayerStateDefault?.(e);
                        },
                        [e, s.entityMeta],
                    ),
                    l = (0, n.useCallback)(
                        (s, o, l, n = 1) => {
                            if (window.playerActionEventDedupeNonce === n) return;
                            if (n) window.playerActionEventDedupeNonce = n;
                            switch (o) {
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
                                case 'TOGGLE_REPEAT':
                                    let s = 'none';
                                    switch (e?.state?.queueState?.repeat?.value) {
                                        case 'none':
                                            s = e?.state?.currentContext?.value?.contextData?.type === 'vibe' ? 'one' : 'context';
                                            break;
                                        case 'context':
                                            s = 'one';
                                            break;
                                        case 'one':
                                        default:
                                            s = 'none';
                                    }
                                    null == e || e.setRepeatMode(s);
                                    break;
                                case 'TOGGLE_SHUFFLE':
                                    null == e || e.toggleShuffle();
                                    break;
                                case 'TOGGLE_LIKE':
                                case 'LIKE':
                                case 'LIKE_NONE':
                                    t(o);
                                    break;
                                case 'DISLIKE':
                                case 'DISLIKE_NONE':
                                case 'TOGGLE_DISLIKE':
                                    i(o);
                                    break;
                                case 'SET_VOLUME':
                                    null == e || e.setExponentVolume(Math.min(Math.max(l, 0), 100));
                                    break;
                                case 'SET_PROGRESS':
                                    null == e || e.setProgress(Math.max(l, 0));
                            }
                        },
                        [e, t, i],
                    );
                (0, n.useEffect)(() => {
                    var e;
                    return (
                        null == (e = window.desktopEvents) || e.on(r.EE.PLAYER_ACTION, l),
                        () => {
                            var e;
                            null == (e = window.desktopEvents) || e.off(r.EE.PLAYER_ACTION, l);
                        }
                    );
                }, [l]),
                    (0, n.useEffect)(() => {
                        const e = (e, s) => {
                                const o = window.pulsesyncApi;
                                if (!o || !s?.action) return;
                                const { action: n, trackId: r, albumId: t, options: i, args: l } = s,
                                    a = o[n];
                                if ('function' != typeof a) return;
                                if (Array.isArray(l)) {
                                    a(...l);
                                    return;
                                }
                                if ('undefined' != typeof r) {
                                    a(r, { ...i, albumId: t });
                                    return;
                                }
                                a(i);
                            },
                            s = window.desktopEvents?.on(r.EE.PULSESYNC_API, e);
                        return () => {
                            null == s || s();
                        };
                    }, []),
                    (0, n.useEffect)(() => {
                        window.pulsesyncApi &&
                            ((window.pulsesyncApi.likeTrack = () => t('LIKE')),
                            (window.pulsesyncApi.unlikeTrack = () => t('LIKE_NONE')),
                            (window.pulsesyncApi.dislikeTrack = () => i('DISLIKE')),
                            (window.pulsesyncApi.undislikeTrack = () => i('DISLIKE_NONE')));
                    }, [t, i]);
            };
        },
        96798: (e, s, o) => {
            'use strict';
            o.d(s, { useSendPlayerState: () => l });
            var n = o(61910),
                r = o(8817),
                t = o(89461),
                i = o(83252);
            let l = (e) => {
                let { sonata: s } = e,
                    o = (0, r.c)((e) => {
                        var s;
                        let { isPlaying: o, canMoveBackward: n, canMoveForward: r } = e;
                        null == (s = window.desktopEvents) ||
                            s.send(i.EE.PLAYER_STATE, {
                                isPlaying: o,
                                canMoveBackward: n,
                                canMoveForward: r,
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
                    l = (e) => {
                        let s = e?.state?.queueState?.index?.value ?? 0,
                            o = e?.state?.queueState?.order?.value,
                            n = e?.state?.queueState?.entityList?.value,
                            r = s - 1 >= 0 ? (o?.[s - 1] ?? s - 1) : null,
                            t = s + 1 >= 0 ? (o?.[s + 1] ?? s + 1) : null;
                        return {
                            previousTrack: null == r ? void 0 : n?.[r]?.entity?.entityData?.meta,
                            nextTrack: null == t ? void 0 : n?.[t]?.entity?.entityData?.meta,
                        };
                    },
                    d = (e, n) => {
                        let { previousTrack: r, nextTrack: a } = l(e);
                        o({
                            status: n,
                            isPlaying: n === t.MT.PLAYING,
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
                            previousTrack: r,
                            nextTrack: a,
                            volume: e?.state?.playerState?.exponentVolume?.value,
                        });
                    };
                (0, n.useEffect)(() => {
                    s && window.pulsesyncApi?.setPlayerInstance?.(s);
                    let e,
                        n,
                        r =
                            null == s
                                ? void 0
                                : s.state.playerState.status.onChange((e) => {
                                      e && d(s, e);
                                  }),
                        o = s?.state?.queueState?.currentEntity?.onChange((e) => {
                            e && d(s, t.MT.PLAYING);
                        }),
                        l = s?.state?.playerState?.event?.onChange(() => {
                            let e = s?.state?.playerState?.event?.value;
                            ('SET_PROGRESS' === e || e === t.Iu?.SET_PROGRESS) && d(s, s?.state?.playerState?.status?.value);
                        }),
                        a = s?.state?.queueState?.entityList?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        v = s?.state?.currentContext?.value?.availableActions.repeat?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        h = s?.state?.currentContext?.value?.availableActions.shuffle?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        p = s?.state?.queueState?.repeat?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        m = s?.state?.queueState?.shuffle?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        b = s?.state?.playerState?.exponentVolume?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        P = window.desktopEvents?.on(i.EE.GET_CURRENT_TRACK, () => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        c =
                            null == s
                                ? void 0
                                : s.state.currentContext.onChange(() => {
                                      var r, t;
                                      null == e || e(),
                                          null == n || n(),
                                          (e =
                                              null == s || null == (r = s.state.currentContext.value)
                                                  ? void 0
                                                  : r.availableActions.moveBackward.onChange(() => {
                                                        d(s, s?.state?.playerState?.status?.value);
                                                    })),
                                          (n =
                                              null == s || null == (t = s.state.currentContext.value)
                                                  ? void 0
                                                  : t.availableActions.moveForward.onChange(() => {
                                                        d(s, s?.state?.playerState?.status?.value);
                                                    }));
                                  });
                    return () => {
                        null == r || r(),
                            null == c || c(),
                            null == o || o(),
                            null == P || P(),
                            null == l || l(),
                            null == a || a(),
                            null == v || v(),
                            null == h || h(),
                            null == p || p(),
                            null == m || m(),
                            null == b || b(),
                            null == n || n(),
                            null == n || n();
                    };
                }, [o, null == s ? void 0 : s.state.currentContext, null == s ? void 0 : s.state.playerState.status]);
            };
        },
        99175: (e, s, o) => {
            'use strict';
            o.d(s, { useApplicationDeeplinks: () => d });
            var n = o(97396),
                r = o(61910),
                t = o(8817),
                i = o(83252);
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
                    [/^\/home$/, () => i.Zyd.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => i.Zyd.collection.href],
                    [/^\/users\/(.*)\/history$/, () => i.Zyd.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let s = new URLSearchParams(e.split('?')[1]);
                            s.set(i.K3F.DEEPLINK, i.vEM.PLAY_VIBE);
                            let o = new URLSearchParams(window.location.search),
                                n = (0, i.$cg)(o, s);
                            return 'landing' === s.get(i.K3F.SCREEN) ? '/?'.concat(n.toString()) : ''.concat(window.location.pathname, '?').concat(n.toString());
                        },
                    ],
                ],
                d = () => {
                    let e = (0, n.useRouter)(),
                        s = (0, t.c)((s, o) => {
                            for (let [s, n] of l) if (s.test(o)) return void e.push(n(o));
                            let { href: n } = (0, i.uvd)(null != o ? o : i.Zyd.main.href);
                            e.push(n);
                        });
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(i.EE.OPEN_DEEPLINK, s),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(i.EE.OPEN_DEEPLINK, s);
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
                7229, 6374, 2025, 6041, 9834, 5355, 1023, 4354, 1621, 2398, 1469, 6552, 1017, 8748, 4915, 2186, 1776, 2036, 1604, 3146, 1426, 7080, 4841, 6683, 3091,
                8210, 343, 1652, 3384, 2184, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 5973, 6266, 3773, 8627, 3252, 585, 6433, 3286, 156, 6231, 4826, 1365, 3211,
                7858, 5570, 6664, 7656, 5284, 9320, 1656, 8387, 2460, 5288, 2493, 2830, 211, 3143, 928, 9021, 15, 1872, 7870, 4726, 4540, 8972, 5450, 2521, 4367, 6476,
                7760, 5843, 3290, 7358,
            ],
            () => e((e.s = 25701)),
        ),
            (_N_E = e.O());
    },
]);
