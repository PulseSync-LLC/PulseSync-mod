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
        2579: (e, t, a) => {
            'use strict';
            // for PulseSync: BEGIN export the titlebar component for mod integration
            a.d(t, { TitleBar: () => v });
            // for PulseSync: END export the titlebar component for mod integration
            var r = a(25839),
                i = a(82298),
                s = a(88204),
                n = a(74631),
                o = a(39004),
                l = a(27954),
                // for PulseSync: BEGIN titlebar styles and shared button component binding
                d = a(12061),
                c = a.n(d);
            let h = (e) => {
                    let { children: t, className: a, onClick: s, ariaLabel: n, withSecondaryColor: o } = e;
                    return (0, r.jsx)('button', {
                        type: 'button',
                        // for PulseSync: BEGIN apply the titlebar secondary button color
                        className: (0, i.$)(c().button, { [c().button_withSecondaryColor]: o }, a),
                        // for PulseSync: END apply the titlebar secondary button color
                        onClick: s,
                        'aria-label': n,
                        children: t,
                    });
                },
                // for PulseSync: END titlebar styles and shared button component binding
                // for PulseSync: BEGIN bind the mod titlebar component
                v = (0, s.PA)((e) => {
                    let { withSecondaryColor: t } = e,
                        { settings: a } = (0, l.g)(),
                        s = a.isWindowsApplication || a.isLinuxApplication,
                        // for PulseSync: BEGIN macOS titlebar flag and native minimize callback binding
                        isMacOS = a.isMacOSApplication,
                        { formatMessage: d } = (0, o.A)(),
                        v = (0, n.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.musicDesktop) || e.window.minimize();
                            })();
                        }, []),
                        // for PulseSync: END macOS titlebar flag and native minimize callback binding
                        // for PulseSync: BEGIN native maximize callback binding for the mod titlebar
                        y = (0, n.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.musicDesktop) || e.window.maximize();
                            })();
                        }, []),
                        // for PulseSync: END native maximize callback binding for the mod titlebar
                        // for PulseSync: BEGIN native close callback binding for the mod titlebar
                        p = (0, n.useCallback)(() => {
                            (() => {
                                var e;
                                null == (e = window.musicDesktop) || e.window.close();
                            })();
                        }, []),
                        // for PulseSync: END native close callback binding for the mod titlebar
                        // for PulseSync: BEGIN titlebar mini-player, mod settings, double-click and version visibility actions
                        onMiniPlayerToggle = (0, n.useCallback)(() => {
                            window.musicDesktop?.pulsesync.miniplayer.toggle();
                        }, []),
                        onPulseSyncSettingsOpen = (0, n.useCallback)(() => {
                            window.dispatchEvent(new CustomEvent('pulsesync-open-settings'));
                        }, []),
                        E = (0, n.useCallback)((e) => {
                            if (e.target.closest('button')) return;
                            var t;
                            null == (t = window.musicDesktop) || t.window.maximize();
                        }, []),
                        [w, N] = (0, n.useState)(window.HIDE_PULSESYNC_VERSION_IN_TITLEBAR?.() ?? !1);
                    (0, n.useEffect)(() => {
                        let e = (t, a) => {
                                'modSettings.window.hidePulseSyncVersionInTitleBar' === t && N(a);
                            },
                            t = window.musicDesktop?.pulsesync.settings.onChange?.(e);
                        return () => {
                            'function' == typeof t && t();
                        };
                    }, []);
                        // for PulseSync: END titlebar mini-player, mod settings, double-click and version visibility actions
                    return (0, r.jsx)('div', {
                        // for PulseSync: BEGIN macOS titlebar class and platform-specific double-click handling
                        className: (0, i.$)(c().root, { [c().root_macos]: isMacOS }),
                        onDoubleClick: isMacOS ? void 0 : E,
                        // for PulseSync: END macOS titlebar class and platform-specific double-click handling
                        children:
                            // for PulseSync: BEGIN render mod titlebar content on macOS as well as Windows and Linux
                            (s || isMacOS) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    // for PulseSync: BEGIN titlebar mod version, settings, mini-player and minimize controls
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
                                    s &&
                                        (0, r.jsx)(h, {
                                            onClick: v,
                                            ariaLabel: d({ id: 'windows-menu.roll-up' }),
                                            withSecondaryColor: t,
                                            children: (0, r.jsx)('svg', {
                                                width: '10',
                                                height: '1',
                                                viewBox: '0 0 10 1',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                // for PulseSync: BEGIN apply the titlebar secondary icon color
                                                className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                                // for PulseSync: END apply the titlebar secondary icon color
                                                children: (0, r.jsx)('path', {
                                                    d: 'M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z',
                                                    fill: 'currentColor',
                                                }),
                                            }),
                                        }),
                                    // for PulseSync: END titlebar mod version, settings, mini-player and minimize controls
                                    // for PulseSync: BEGIN limit the custom maximize control to Windows and Linux
                                    s &&
                                        (0, r.jsx)(h, {
                                            onClick: y,
                                            ariaLabel: d({ id: 'windows-menu.unwrap' }),
                                            withSecondaryColor: t,
                                            children: (0, r.jsx)('svg', {
                                                width: '10',
                                                height: '10',
                                                viewBox: '0 0 10 10',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                // for PulseSync: BEGIN apply the titlebar secondary icon color
                                                className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                                // for PulseSync: END apply the titlebar secondary icon color
                                                children: (0, r.jsx)('path', {
                                                    d: 'M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z',
                                                    fill: 'currentColor',
                                                }),
                                            }),
                                        }),
                                    // for PulseSync: END limit the custom maximize control to Windows and Linux
                                    // for PulseSync: BEGIN limit the custom close control to Windows and Linux
                                    s &&
                                        (0, r.jsx)(h, {
                                            className: c().closeButton,
                                            onClick: p,
                                            ariaLabel: d({ id: 'windows-menu.close' }),
                                            children: (0, r.jsx)('svg', {
                                                width: '10',
                                                height: '10',
                                                viewBox: '0 0 10 10',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                // for PulseSync: BEGIN apply the titlebar secondary icon color
                                                className: (0, i.$)(c().icon, { [c().icon_withSecondaryColor]: t }),
                                                // for PulseSync: END apply the titlebar secondary icon color
                                                children: (0, r.jsx)('path', {
                                                    d: 'M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z',
                                                    fill: 'currentColor',
                                                }),
                                            }),
                                        }),
                                    // for PulseSync: END limit the custom close control to Windows and Linux
                                ],
                            }),
                            // for PulseSync: END render mod titlebar content on macOS as well as Windows and Linux
                    });
                });
                // for PulseSync: END bind the mod titlebar component
        },
        5962: (e, L, t) => {
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
                p = t(16714);
            // for PulseSync WebHost: BEGIN native addon controls, tabs, tooltips, badges and modal renderer
            const pulseSyncNativeReact = t(74631);
            const NativeFieldComponent = pulseSyncNativeReact.lazy(() =>
                Promise.all([t.e(5622), t.e(5531), t.e(7793), t.e(7404), t.e(2750)]).then(() => ({
                    default: t(35622).NativeField,
                })),
            );
            const NativeSpinnerComponent = pulseSyncNativeReact.lazy(() =>
                t.e(1808).then(() => ({
                    default: t(4550).y,
                })),
            );
            function NativeSpinner({ size, label }) {
                return pulseSyncNativeReact.createElement(
                    'span',
                    {
                        role: 'status',
                        'aria-label': label,
                        style: {
                            display: 'inline-flex',
                            flexShrink: 0,
                            width: `var(--ym-icon-size-${size})`,
                            height: `var(--ym-icon-size-${size})`,
                        },
                    },
                    pulseSyncNativeReact.createElement(
                        pulseSyncNativeReact.Suspense,
                        {
                            fallback: null,
                        },
                        pulseSyncNativeReact.createElement(NativeSpinnerComponent, {
                            size,
                        }),
                    ),
                );
            }
            const NativeTabsComponent = pulseSyncNativeReact.lazy(() =>
                t.e(4932).then(() => {
                    const native = t(5867);
                    const Tab = ({ itemDisabled, ...props }) =>
                        pulseSyncNativeReact.createElement(native.oz, {
                            ...props,
                            disabled: props.disabled || itemDisabled,
                        });
                    return {
                        default: function NativeTabs({ id, label, value, items, disabled, onChange }) {
                            const enabled = items.filter((item) => !item.disabled);
                            const focusValue = enabled.some((item) => item.value === value) ? value : enabled[0]?.value;
                            const select = (next) => {
                                if (!disabled && next !== value && enabled.some((item) => item.value === next)) onChange(next);
                            };
                            const keyDown = (event) => {
                                if (disabled || event.altKey || event.ctrlKey || event.metaKey || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                                const buttons = Array.from(event.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)'));
                                const index = buttons.indexOf(event.target.closest('[role="tab"]'));
                                if (index < 0 || !buttons.length) return;
                                const rtl = getComputedStyle(event.currentTarget).direction === 'rtl';
                                const offset = (event.key === 'ArrowRight' ? 1 : -1) * (rtl ? -1 : 1);
                                const nextIndex =
                                    event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + offset + buttons.length) % buttons.length;
                                event.preventDefault();
                                event.stopPropagation();
                                buttons[nextIndex].focus();
                                select(buttons[nextIndex].getAttribute('data-pulsesync-tab-value'));
                            };
                            return pulseSyncNativeReact.createElement(
                                native.tU,
                                {
                                    elementId: id,
                                    value,
                                    disabled,
                                    'aria-label': label,
                                    'aria-orientation': 'horizontal',
                                    style: {
                                        scrollbarWidth: 'none',
                                    },
                                    onTabChange: select,
                                    onKeyDown: keyDown,
                                },
                                items.map((item) =>
                                    pulseSyncNativeReact.createElement(
                                        Tab,
                                        {
                                            key: item.value,
                                            value: item.value,
                                            itemDisabled: item.disabled,
                                            tabIndex: !disabled && item.value === focusValue ? 0 : -1,
                                            size: 'm',
                                            radius: 'xxxl',
                                            'data-pulsesync-tab-value': item.value,
                                        },
                                        item.label,
                                    ),
                                ),
                            );
                        },
                    };
                }),
            );
            const NativeAddonBadge = pulseSyncNativeReact.lazy(() => t.e(5898).then(() => ({ default: t(9958926).N }))),
                nativeControlDom = t(71910),
                nativeControlButton = t(4071),
                nativeControlIcon = t(66738),
                nativeControlTooltip = {
                    m_: pulseSyncNativeReact.lazy(() => t.e(8649).then(() => ({ default: t(3392).m_ }))),
                    ZI: pulseSyncNativeReact.lazy(() => t.e(8649).then(() => ({ default: t(3392).ZI }))),
                },
                nativeControlCaption = t(4254),
                nativeControlEmptySubscribe = () => () => {},
                nativeControlEmptySnapshot = () => 0,
                NativeTooltipReference = pulseSyncNativeReact.forwardRef(({ anchor, 'aria-describedby': describedBy }, ref) => {
                    pulseSyncNativeReact.useImperativeHandle(ref, () => anchor, [anchor]);
                    pulseSyncNativeReact.useLayoutEffect(() => {
                        if (!describedBy) return;
                        const previous = anchor.getAttribute('aria-describedby'),
                            value = [previous, describedBy].filter(Boolean).join(' ');
                        anchor.setAttribute('aria-describedby', value);
                        return () => {
                            if (anchor.getAttribute('aria-describedby') !== value) return;
                            if (previous === null) anchor.removeAttribute('aria-describedby');
                            else anchor.setAttribute('aria-describedby', previous);
                        };
                    }, [anchor, describedBy]);
                    return null;
                }),
                NativeLegacyTooltip = ({ anchor, title, description, onClose }) =>
                    pulseSyncNativeReact.createElement(
                        pulseSyncNativeReact.Suspense,
                        { fallback: null },
                        pulseSyncNativeReact.createElement(nativeControlTooltip.m_, {
                            open: true,
                            onOpenChange: (open) => {
                                if (!open) onClose();
                            },
                            isHoverEnabled: false,
                            isFocusEnabled: false,
                            enableAriaDescribedby: true,
                            offsetOptions: 4,
                            shiftOptions: {
                                padding: 8,
                            },
                            flipOptions: {
                                padding: 8,
                            },
                            children: [
                                pulseSyncNativeReact.createElement(NativeTooltipReference, {
                                    anchor,
                                    key: 'reference',
                                }),
                                pulseSyncNativeReact.createElement(
                                    nativeControlTooltip.ZI,
                                    {
                                        key: 'content',
                                    },
                                    pulseSyncNativeReact.createElement(
                                        nativeControlCaption.HL,
                                        {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: description ? 'bold' : 'medium',
                                        },
                                        title,
                                    ),
                                    description
                                        ? pulseSyncNativeReact.createElement(
                                              nativeControlCaption.HL,
                                              {
                                                  variant: 'div',
                                                  type: 'text',
                                                  size: 's',
                                                  weight: 'normal',
                                              },
                                              description,
                                          )
                                        : null,
                                ),
                            ],
                        }),
                    ),
                nativeControlTools = {
                    createElement: pulseSyncNativeReact.createElement,
                    createPortal: nativeControlDom.createPortal,
                    Button: nativeControlButton.$,
                    Icon: nativeControlIcon.I,
                    Badge: (props) =>
                        pulseSyncNativeReact.createElement(
                            pulseSyncNativeReact.Suspense,
                            { fallback: null },
                            pulseSyncNativeReact.createElement(
                                NativeAddonBadge,
                                props,
                            ),
                        ),
                    Tooltip: (props) =>
                        pulseSyncNativeReact.createElement(
                            pulseSyncNativeReact.Suspense,
                            { fallback: null },
                            pulseSyncNativeReact.createElement(nativeControlTooltip.m_, props),
                        ),
                    LegacyTooltip: NativeLegacyTooltip,
                    Field: (props) =>
                        pulseSyncNativeReact.createElement(
                            pulseSyncNativeReact.Suspense,
                            {
                                fallback: null,
                            },
                            pulseSyncNativeReact.createElement(NativeFieldComponent, props),
                        ),
                    Tabs: (props) =>
                        pulseSyncNativeReact.createElement(
                            pulseSyncNativeReact.Suspense,
                            {
                                fallback: null,
                            },
                            pulseSyncNativeReact.createElement(NativeTabsComponent, props),
                        ),
                    Spinner: NativeSpinner,
                    Caption: nativeControlCaption.HL,
                };
            function NativeAddonControls() {
                const [renderer, setRenderer] = pulseSyncNativeReact.useState(() => window.pulsesyncApi?.createNativeControlsRenderer?.(nativeControlTools));
                pulseSyncNativeReact.useEffect(() => {
                    const ready = () => setRenderer((current) => current ?? window.pulsesyncApi?.createNativeControlsRenderer?.(nativeControlTools));
                    document.addEventListener('pulsesync:runtime-ready', ready);
                    ready();
                    return () => document.removeEventListener('pulsesync:runtime-ready', ready);
                }, []);
                pulseSyncNativeReact.useSyncExternalStore(
                    renderer?.subscribe ?? nativeControlEmptySubscribe,
                    renderer?.getSnapshot ?? nativeControlEmptySnapshot,
                    nativeControlEmptySnapshot,
                );
                return renderer?.render() ?? null;
            }
            const NativeAddonModalContent = pulseSyncNativeReact.lazy(() =>
                Promise.all([t.e(5622), t.e(5531), t.e(7793), t.e(7404), t.e(2750)]).then(() => ({
                    default: t(35622).AddonModalHost,
                })),
            );
            const nativeModalEmptySnapshot = () => undefined;
            function NativeAddonModals() {
                const [api, setApi] = pulseSyncNativeReact.useState(() => window.pulsesyncApi);
                pulseSyncNativeReact.useEffect(() => {
                    const ready = () => setApi(window.pulsesyncApi);
                    document.addEventListener('pulsesync:runtime-ready', ready);
                    ready();
                    return () => document.removeEventListener('pulsesync:runtime-ready', ready);
                }, []);
                const modal = pulseSyncNativeReact.useSyncExternalStore(
                    api?.registerNativeModals ?? nativeControlEmptySubscribe,
                    api?.getNativeModal ?? nativeModalEmptySnapshot,
                    nativeModalEmptySnapshot,
                );
                const requested = pulseSyncNativeReact.useRef(false);
                if (modal) requested.current = true;
                return requested.current
                    ? pulseSyncNativeReact.createElement(
                          pulseSyncNativeReact.Suspense,
                          {
                              fallback: null,
                          },
                          pulseSyncNativeReact.createElement(NativeAddonModalContent, {
                              modal,
                          }),
                      )
                    : null;
            }
            // for PulseSync WebHost: END native addon controls, tabs, tooltips, badges and modal renderer
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
                // for PulseSync WebHost: BEGIN mount native addon control and modal hosts under the app provider
                return (0, a.jsx)(d.D.Provider, {
                    value: C,
                    children: (0, a.jsx)(o.Suspense, {
                        fallback: (0, a.jsx)(p.MainSuspenseLoader, {}),
                        children: pulseSyncNativeReact.createElement(
                            pulseSyncNativeReact.Fragment,
                            null,
                            L,
                            pulseSyncNativeReact.createElement(NativeAddonControls),
                            pulseSyncNativeReact.createElement(
                                pulseSyncNativeReact.Suspense,
                                {
                                    fallback: null,
                                },
                                pulseSyncNativeReact.createElement(NativeAddonModals),
                            ),
                        ),
                    }),
                });
                // for PulseSync WebHost: END mount native addon control and modal hosts under the app provider
            };
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
                // for PulseSync: BEGIN macOS titlebar CSS class binding
                root_macos: 'TitleBar_root_macos__QjdOZ',
                // for PulseSync: END macOS titlebar CSS class binding
                button: 'TitleBar_button__9MptL',
                button_withSecondaryColor: 'TitleBar_button_withSecondaryColor__oIkuo',
                icon: 'TitleBar_icon__8Wji9',
                icon_withSecondaryColor: 'TitleBar_icon_withSecondaryColor__vuw6G',
                closeButton: 'TitleBar_closeButton__Epxh7',
                // for PulseSync: BEGIN mod version titlebar text CSS class binding
                pulseText: 'TitleBar_pulseText__FhYv',
                // for PulseSync: END mod version titlebar text CSS class binding
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
        22097: (e, L, t) => {
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
            // for PulseSync: BEGIN download progress, mod update and GPU recovery notifications
            var pulseToastReact = t(74631),
                pulseToastJsx = t(25839),
                pulseToastNotifications = t(92942),
                pulseToastContainers = t(91149),
                pulseToastText = t(4254),
                pulseToastButton = t(4071),
                pulseToastBase = t(51790),
                pulseToastClassNames = t(82298),
                pulseToastStylesModule = t(50175),
                pulseToastStyles = t.n(pulseToastStylesModule),
                pulseToastIntl = t(39004);
            const PulseSyncModUpdateToast = (e) => {
                let { version: t, formatMessage: a, closeToast: n, operation } = e,
                    [o, l] = (0, pulseToastReact.useState)(operation.progress),
                    u = (0, pulseToastReact.useCallback)(() => {
                        (window.musicDesktop?.pulsesync.updates.install?.(), null == n || n());
                    }, [n]),
                    d = (0, pulseToastReact.useCallback)(() => {
                        window.musicDesktop?.pulsesync.updates.download?.();
                    }, []),
                    c = (e) => {
                        let t = a({
                            id: 'offline.download',
                        });
                        return (
                            e < 0
                                ? (t = a({
                                      id: 'offline.download',
                                  }))
                                : e >= 0 && e <= 100
                                  ? (t = 'Скачивание…')
                                  : e > 100 && (t = 'Установить'),
                            t
                        );
                    },
                    h = (0, pulseToastReact.useMemo)(
                        () =>
                            (0, pulseToastJsx.jsxs)('div', {
                                className: pulseToastStyles().message,
                                children: [
                                    (0, pulseToastJsx.jsx)(pulseToastText.HL, {
                                        className: pulseToastStyles().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: a(
                                            {
                                                id: 'desktop.on-mod-update-available',
                                                defaultMessage: 'Mod update available {version}',
                                            },
                                            {
                                                version: t,
                                            },
                                        ),
                                    }),
                                    (0, pulseToastJsx.jsx)(pulseToastButton.$, {
                                        className: pulseToastStyles().button,
                                        onClick: o <= 100 ? d : u,
                                        variant: 'default',
                                        color: 'secondary',
                                        size: 'xs',
                                        radius: 'xxxl',
                                        disabled: o <= 100 && o >= 0,
                                        children: (0, pulseToastJsx.jsx)(pulseToastText.HL, {
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: c(o),
                                        }),
                                    }),
                                ],
                            }),
                        [a, u, t, o, d],
                    ),
                    v = () => l(operation.progress);
                return (
                    pulseToastReact.useEffect(() => {
                        operation.listeners.add(v);
                        v();
                        return () => operation.listeners.delete(v);
                    }, [operation]),
                    void 0,
                    (0, pulseToastJsx.jsxs)(pulseToastBase.$, {
                        className: (0, pulseToastClassNames.$)(pulseToastStyles().root, pulseToastStyles().important),
                        message: h,
                        children: [
                            (0, pulseToastJsx.jsx)('div', {
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
            };
            const PulseSyncProgressToast = (e) => {
                let { closeToast: t, message: n, buttonLabel: o, onButtonClick: l, disabled: u = false, dismissOnButtonClick: d = false, operation } = e;
                const [h, v] = pulseToastReact.useState(operation.progress),
                    [y, g] = pulseToastReact.useState(operation.label);
                let I = (0, pulseToastReact.useCallback)(() => {
                        (null == l || l(), d && (null == t || t()));
                    }, [d, l, t]),
                    C = (0, pulseToastReact.useMemo)(
                        () =>
                            (0, pulseToastJsx.jsxs)('div', {
                                className: pulseToastStyles().message,
                                children: [
                                    (0, pulseToastJsx.jsx)(pulseToastText.HL, {
                                        className: pulseToastStyles().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: n.replace('#s', y),
                                    }),
                                    o &&
                                        (0, pulseToastJsx.jsx)(pulseToastButton.$, {
                                            className: pulseToastStyles().button,
                                            onClick: I,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: u,
                                            children: (0, pulseToastJsx.jsx)(pulseToastText.HL, {
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: o,
                                            }),
                                        }),
                                ],
                            }),
                        [u, o, n, I, y],
                    );
                pulseToastReact.useEffect(() => {
                    const update = () => {
                        v(operation.progress);
                        g(operation.label);
                    };
                    operation.listeners.add(update);
                    update();
                    return () => operation.listeners.delete(update);
                }, [operation]);
                return (0, pulseToastJsx.jsxs)(pulseToastBase.$, {
                    className: (0, pulseToastClassNames.$)(pulseToastStyles().root, pulseToastStyles().important),
                    message: C,
                    children: [
                        (0, pulseToastJsx.jsx)('div', {
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
                });
            };
            const usePulseSyncDownloadNotifications = () => {
                const { notify, dismiss } = pulseToastNotifications.l();
                const { formatMessage } = pulseToastIntl.A();
                pulseToastReact.useEffect(() => {
                    const operations = new Map(),
                        seen = new Map();
                    const close = (operation) => {
                        if (operations.get(operation.id) !== operation) return;
                        operations.delete(operation.id);
                        operation.listeners.clear();
                        dismiss({ notificationId: operation.notificationId, forceClose: true });
                    };
                    const create = (id, message, buttonLabel, nonce = 0, actionEvent, actionPayload, options = {}) => {
                        if (nonce && seen.get(id) === nonce) return;
                        if (nonce) seen.set(id, nonce);
                        const previous = operations.get(id);
                        if (previous) close(previous);
                        const operation = { id, nonce, notificationId: undefined, progress: -1, label: 'Ожидание...', listeners: new Set() };
                        operations.set(id, operation);
                        operation.notificationId = notify(
                            pulseToastJsx.jsx(options.component || PulseSyncProgressToast, {
                                toastID: id,
                                message,
                                buttonLabel: buttonLabel || undefined,
                                operation,
                                onButtonClick: actionEvent
                                    ? () => {
                                          const bridge = window.musicDesktop?.pulsesync;
                                          if (actionEvent === 'DOWNLOAD_TRACKS_CANCEL') bridge?.downloads.cancel(actionPayload);
                                          else if (actionEvent === 'APPLICATION_RESTART') bridge?.app.restart();
                                          else if (actionEvent === 'APP_STALL_CANCEL_RESTART') bridge?.app.cancelStallRestart();
                                      }
                                    : undefined,
                                dismissOnButtonClick: !!buttonLabel,
                                createNonce: nonce,
                                ...options.props,
                            }),
                            {
                                containerId: pulseToastContainers.u.IMPORTANT,
                                autoClose: false,
                                onClose: () => {
                                    if (operations.get(id) === operation) operations.delete(id);
                                    operation.listeners.clear();
                                },
                            },
                        );
                        return operation;
                    };
                    const progress = (id, value, nonce = 0, label, createNonce = 0) => {
                        const operation = operations.get(id);
                        if (!operation || (createNonce && operation.nonce && createNonce !== operation.nonce)) return;
                        if (nonce && operation.progressNonce === nonce && operation.progress === value && (label === undefined || operation.label === label)) return;
                        operation.progressNonce = nonce;
                        operation.progress = value;
                        if (label !== undefined) operation.label = label;
                        operation.listeners.forEach((update) => update());
                    };
                    const remove = (id, _nonce = 0, createNonce = 0) => {
                        const operation = operations.get(id);
                        if (!operation || (createNonce && operation.nonce && createNonce !== operation.nonce)) return;
                        close(operation);
                    };
                    const modUpdate = (currentVersion, newVersion, nonce = 0) => {
                        const version = String(currentVersion) + ' -> ' + newVersion;
                        if (operations.get('modUpdateToast')?.version === version) return;
                        const operation = create('modUpdateToast', '', '', nonce ? version + ':' + nonce : 0, undefined, undefined, {
                            component: PulseSyncModUpdateToast,
                            props: { version, formatMessage },
                        });
                        if (operation) operation.version = version;
                    };
                    const gpuStall = (reason = 'GPU_STALL', nonce = 0) => {
                        if (operations.has('GPU_STALL')) return;
                        create('GPU_STALL', 'Аппаратное ускорение отключилось: ' + reason, 'Исправить', nonce, 'APPLICATION_RESTART', undefined, {
                            props: { dismissOnButtonClick: false },
                        });
                    };
                    const disposers = [
                        window.musicDesktop?.pulsesync.updates.onAvailable?.(modUpdate),
                        window.musicDesktop?.pulsesync.app.onGpuStall?.(gpuStall),
                        window.musicDesktop?.pulsesync.notifications.onCreate?.(create),
                        window.musicDesktop?.pulsesync.downloads.onProgress?.(progress),
                        window.musicDesktop?.pulsesync.notifications.onDismiss?.(remove),
                    ];
                    return () => {
                        disposers.forEach((dispose) => dispose?.());
                        for (const operation of operations.values()) close(operation);
                        seen.clear();
                    };
                }, [notify, dismiss, formatMessage]);
            };
            // for PulseSync: END download progress, mod update and GPU recovery notifications
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
                A = t(22097),
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
                    // for PulseSync: BEGIN subscribe to desktop download, mod update and GPU recovery notifications
                    usePulseSyncDownloadNotifications();
                    // for PulseSync: END subscribe to desktop download, mod update and GPU recovery notifications
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
