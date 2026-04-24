(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6808],
    {
        3803: (e, s, o) => {
            'use strict';
            o.d(s, { TitleBar: () => b });
            var n = o(62936),
                r = o(79950),
                i = o(19718),
                t = o(44020),
                l = o(47480),
                d = o(42561),
                a = o(99269),
                v = o(22029),
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
                        }, []),
                        onMiniPlayerToggle = (0, t.useCallback)(() => {
                            (0, a.toggleMiniPlayer)();
                        }, []),
                        E = (0, t.useCallback)((e) => {
                            if (e.target.closest('button')) return;
                            (0, a.LO)();
                        }, []),
                        [w, N] = (0, t.useState)(window.HIDE_PULSESYNC_VERSION_IN_TITLEBAR?.() ?? !1);
                    (0, t.useEffect)(() => {
                        const e = (event, key, value) => {
                            'modSettings.window.hidePulseSyncVersionInTitleBar' === key && N(value);
                        };
                        return window.desktopEvents?.on('NATIVE_STORE_UPDATE', e), () => window.desktopEvents?.off?.('NATIVE_STORE_UPDATE', e);
                    }, []);
                    return (0, n.jsx)('div', {
                        className: h().root,
                        onDoubleClick: E,
                        children:
                            i &&
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
        5257: (e, s, o) => {
            'use strict';
            o.d(s, { useApplicationDeeplinks: () => d });
            var n = o(69526),
                r = o(44020),
                i = o(59935),
                t = o(42561);
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
        11908: (e, s, o) => {
            'use strict';
            o.d(s, { useReleaseNotes: () => i });
            var n = o(44020),
                r = o(42561);
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
        12275: (e, s, o) => {
            'use strict';
            o.d(s, { usePlayerAction: () => t });
            var n = o(44020),
                r = o(42561);
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
            var i = (function (e) {
                return (e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'), e;
            })(i || {});
            let t = (e) => {
                let { sonataState: s } = (0, r.Pjs)(),
                    o = (0, n.useCallback)(
                        async (o) => {
                            let i = s.entityMeta;
                            if (!e || !i) return;
                            switch (o) {
                                case 'TOGGLE_LIKE':
                                    null == i || (await i.toggleLike?.());
                                    break;
                                case 'LIKE':
                                    i.isLiked || null == i || (await i.toggleLike?.());
                                    break;
                                case 'LIKE_NONE':
                                    i.isLiked && (null == i || (await i.toggleLike?.()));
                            }
                            sendPlayerStateDefault?.(e);
                        },
                        [e, s.entityMeta],
                    ),
                    t = (0, n.useCallback)(
                        async (o) => {
                            let t,
                                l,
                                i = s.entityMeta;
                            if (!e || !i) return;
                            let d = !1;
                            switch (o) {
                                case 'TOGGLE_DISLIKE':
                                    d = !0;
                                    break;
                                case 'DISLIKE':
                                    d = !i.isDisliked;
                                    break;
                                case 'DISLIKE_NONE':
                                    d = !!i.isDisliked;
                            }
                            d && (null == i || (await i.toggleDislike?.())),
                                d &&
                                    !i.isDisliked &&
                                    i.id === (null == e || null == (t = e.state.queueState.currentEntity.value) || null == (l = t.entity) ? void 0 : l.data.meta.id) &&
                                    (null == e || e.moveForward()),
                                sendPlayerStateDefault?.(e);
                        },
                        [e, s.entityMeta],
                    ),
                    l = (0, n.useCallback)(
                        (s, i, l, n = 1) => {
                            if (window.playerActionEventDedupeNonce === n) return;
                            if (n) window.playerActionEventDedupeNonce = n;
                            switch (i) {
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
                                    o(i);
                                    break;
                                case 'DISLIKE':
                                case 'DISLIKE_NONE':
                                case 'TOGGLE_DISLIKE':
                                    t(i);
                                    break;
                                case 'SET_VOLUME':
                                    null == e || e.setExponentVolume(Math.min(Math.max(l, 0), 100));
                                    break;
                                case 'SET_PROGRESS':
                                    null == e || e.setProgress(Math.max(l, 0));
                            }
                        },
                        [e, o, t],
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
                                const { action: n, trackId: r, albumId: i, options: t, args: l } = s,
                                    d = o[n];
                                if ('function' != typeof d) return;
                                if (Array.isArray(l)) {
                                    d(...l);
                                    return;
                                }
                                if ('undefined' != typeof r) {
                                    d(r, { ...t, albumId: i });
                                    return;
                                }
                                d(t);
                            },
                            s = window.desktopEvents?.on(r.EE.PULSESYNC_API, e);
                        return () => {
                            null == s || s();
                        };
                    }, []),
                    (0, n.useEffect)(() => {
                        window.pulsesyncApi &&
                            ((window.pulsesyncApi.likeTrack = () => o('LIKE')),
                            (window.pulsesyncApi.unlikeTrack = () => o('LIKE_NONE')),
                            (window.pulsesyncApi.dislikeTrack = () => t('DISLIKE')),
                            (window.pulsesyncApi.undislikeTrack = () => t('DISLIKE_NONE')));
                    }, [o, t]);
            };
        },
        14209: (e, s, o) => {
            Promise.resolve().then(o.bind(o, 13030)),
                Promise.resolve().then(o.bind(o, 50576)),
                Promise.resolve().then(o.bind(o, 59260)),
                Promise.resolve().then(o.bind(o, 56721)),
                Promise.resolve().then(o.bind(o, 30388)),
                Promise.resolve().then(o.bind(o, 85023)),
                Promise.resolve().then(o.bind(o, 20418)),
                Promise.resolve().then(o.bind(o, 54802)),
                Promise.resolve().then(o.bind(o, 15843)),
                Promise.resolve().then(o.bind(o, 83813)),
                Promise.resolve().then(o.bind(o, 29335)),
                Promise.resolve().then(o.bind(o, 58327)),
                Promise.resolve().then(o.bind(o, 53225)),
                Promise.resolve().then(o.bind(o, 36107)),
                Promise.resolve().then(o.bind(o, 93309)),
                Promise.resolve().then(o.bind(o, 2961)),
                Promise.resolve().then(o.bind(o, 50184)),
                Promise.resolve().then(o.bind(o, 15323)),
                Promise.resolve().then(o.t.bind(o, 77475, 23)),
                Promise.resolve().then(o.bind(o, 96389)),
                Promise.resolve().then(o.bind(o, 96016)),
                Promise.resolve().then(o.bind(o, 5599)),
                Promise.resolve().then(o.bind(o, 47440)),
                Promise.resolve().then(o.bind(o, 83043)),
                Promise.resolve().then(o.bind(o, 20054)),
                Promise.resolve().then(o.bind(o, 65516)),
                Promise.resolve().then(o.bind(o, 97820)),
                Promise.resolve().then(o.bind(o, 345)),
                Promise.resolve().then(o.bind(o, 82552)),
                Promise.resolve().then(o.bind(o, 89563)),
                Promise.resolve().then(o.bind(o, 62047)),
                Promise.resolve().then(o.bind(o, 55352)),
                Promise.resolve().then(o.bind(o, 806)),
                Promise.resolve().then(o.bind(o, 27245)),
                Promise.resolve().then(o.bind(o, 35845)),
                Promise.resolve().then(o.bind(o, 58987)),
                Promise.resolve().then(o.bind(o, 64183)),
                Promise.resolve().then(o.bind(o, 5122)),
                Promise.resolve().then(o.bind(o, 51945)),
                Promise.resolve().then(o.bind(o, 14144)),
                Promise.resolve().then(o.bind(o, 34753)),
                Promise.resolve().then(o.bind(o, 34211)),
                Promise.resolve().then(o.bind(o, 63065)),
                Promise.resolve().then(o.bind(o, 31441)),
                Promise.resolve().then(o.bind(o, 37577)),
                Promise.resolve().then(o.bind(o, 9451)),
                Promise.resolve().then(o.bind(o, 64987)),
                Promise.resolve().then(o.bind(o, 77188)),
                Promise.resolve().then(o.bind(o, 50509)),
                Promise.resolve().then(o.bind(o, 16945)),
                Promise.resolve().then(o.bind(o, 11503)),
                Promise.resolve().then(o.bind(o, 60131)),
                Promise.resolve().then(o.bind(o, 3873)),
                Promise.resolve().then(o.bind(o, 41936)),
                Promise.resolve().then(o.bind(o, 32322)),
                Promise.resolve().then(o.bind(o, 69410)),
                Promise.resolve().then(o.bind(o, 80210)),
                Promise.resolve().then(o.bind(o, 91638)),
                Promise.resolve().then(o.bind(o, 86482)),
                Promise.resolve().then(o.bind(o, 70505)),
                Promise.resolve().then(o.bind(o, 36864)),
                Promise.resolve().then(o.bind(o, 70900)),
                Promise.resolve().then(o.bind(o, 11182)),
                Promise.resolve().then(o.bind(o, 95368)),
                Promise.resolve().then(o.bind(o, 12331)),
                Promise.resolve().then(o.bind(o, 52589)),
                Promise.resolve().then(o.bind(o, 83132)),
                Promise.resolve().then(o.bind(o, 7670)),
                Promise.resolve().then(o.bind(o, 395)),
                Promise.resolve().then(o.bind(o, 83543)),
                Promise.resolve().then(o.bind(o, 99303)),
                Promise.resolve().then(o.bind(o, 45648)),
                Promise.resolve().then(o.bind(o, 35042)),
                Promise.resolve().then(o.bind(o, 94311)),
                Promise.resolve().then(o.bind(o, 46650)),
                Promise.resolve().then(o.bind(o, 33405)),
                Promise.resolve().then(o.bind(o, 32101)),
                Promise.resolve().then(o.bind(o, 63329)),
                Promise.resolve().then(o.bind(o, 941)),
                Promise.resolve().then(o.bind(o, 58991)),
                Promise.resolve().then(o.bind(o, 42297)),
                Promise.resolve().then(o.bind(o, 7551)),
                Promise.resolve().then(o.bind(o, 75695)),
                Promise.resolve().then(o.bind(o, 42323)),
                Promise.resolve().then(o.bind(o, 91135)),
                Promise.resolve().then(o.bind(o, 14878)),
                Promise.resolve().then(o.bind(o, 26467)),
                Promise.resolve().then(o.bind(o, 41970)),
                Promise.resolve().then(o.bind(o, 16847)),
                Promise.resolve().then(o.bind(o, 78780)),
                Promise.resolve().then(o.bind(o, 16782)),
                Promise.resolve().then(o.bind(o, 77966)),
                Promise.resolve().then(o.bind(o, 31148)),
                Promise.resolve().then(o.bind(o, 76532)),
                Promise.resolve().then(o.bind(o, 38076)),
                Promise.resolve().then(o.bind(o, 94158)),
                Promise.resolve().then(o.bind(o, 14124)),
                Promise.resolve().then(o.bind(o, 86100)),
                Promise.resolve().then(o.bind(o, 59736)),
                Promise.resolve().then(o.bind(o, 20532)),
                Promise.resolve().then(o.bind(o, 80222)),
                Promise.resolve().then(o.bind(o, 93148)),
                Promise.resolve().then(o.bind(o, 43898)),
                Promise.resolve().then(o.bind(o, 23164)),
                Promise.resolve().then(o.bind(o, 71637)),
                Promise.resolve().then(o.bind(o, 87894)),
                Promise.resolve().then(o.bind(o, 72964)),
                Promise.resolve().then(o.bind(o, 2760)),
                Promise.resolve().then(o.bind(o, 31927)),
                Promise.resolve().then(o.bind(o, 97248)),
                Promise.resolve().then(o.bind(o, 57612)),
                Promise.resolve().then(o.bind(o, 5670)),
                Promise.resolve().then(o.bind(o, 70915)),
                Promise.resolve().then(o.bind(o, 8148)),
                Promise.resolve().then(o.bind(o, 32634)),
                Promise.resolve().then(o.bind(o, 508)),
                Promise.resolve().then(o.bind(o, 36363)),
                Promise.resolve().then(o.bind(o, 15958)),
                Promise.resolve().then(o.bind(o, 78685)),
                Promise.resolve().then(o.bind(o, 34476)),
                Promise.resolve().then(o.bind(o, 60917)),
                Promise.resolve().then(o.bind(o, 62520)),
                Promise.resolve().then(o.bind(o, 21389)),
                Promise.resolve().then(o.bind(o, 85546)),
                Promise.resolve().then(o.bind(o, 80185)),
                Promise.resolve().then(o.bind(o, 38285)),
                Promise.resolve().then(o.bind(o, 792)),
                Promise.resolve().then(o.bind(o, 34291)),
                Promise.resolve().then(o.bind(o, 31299)),
                Promise.resolve().then(o.bind(o, 56209)),
                Promise.resolve().then(o.bind(o, 44162)),
                Promise.resolve().then(o.bind(o, 93427)),
                Promise.resolve().then(o.bind(o, 57861)),
                Promise.resolve().then(o.bind(o, 30615)),
                Promise.resolve().then(o.bind(o, 34990)),
                Promise.resolve().then(o.bind(o, 16395)),
                Promise.resolve().then(o.bind(o, 75020)),
                Promise.resolve().then(o.bind(o, 32746)),
                Promise.resolve().then(o.bind(o, 2552)),
                Promise.resolve().then(o.bind(o, 7323)),
                Promise.resolve().then(o.bind(o, 68270)),
                Promise.resolve().then(o.bind(o, 99525)),
                Promise.resolve().then(o.bind(o, 44276)),
                Promise.resolve().then(o.bind(o, 49452)),
                Promise.resolve().then(o.bind(o, 68834)),
                Promise.resolve().then(o.bind(o, 67484)),
                Promise.resolve().then(o.bind(o, 6987)),
                Promise.resolve().then(o.bind(o, 748)),
                Promise.resolve().then(o.bind(o, 94756)),
                Promise.resolve().then(o.bind(o, 5798)),
                Promise.resolve().then(o.bind(o, 44817)),
                Promise.resolve().then(o.bind(o, 6181)),
                Promise.resolve().then(o.bind(o, 40846)),
                Promise.resolve().then(o.bind(o, 43762)),
                Promise.resolve().then(o.bind(o, 12364)),
                Promise.resolve().then(o.bind(o, 13660)),
                Promise.resolve().then(o.bind(o, 31543)),
                Promise.resolve().then(o.bind(o, 38224)),
                Promise.resolve().then(o.bind(o, 63210)),
                Promise.resolve().then(o.bind(o, 44697)),
                Promise.resolve().then(o.bind(o, 64802)),
                Promise.resolve().then(o.bind(o, 1443)),
                Promise.resolve().then(o.bind(o, 95297)),
                Promise.resolve().then(o.bind(o, 4552)),
                Promise.resolve().then(o.bind(o, 92648)),
                Promise.resolve().then(o.bind(o, 73572)),
                Promise.resolve().then(o.bind(o, 29992)),
                Promise.resolve().then(o.bind(o, 66230)),
                Promise.resolve().then(o.bind(o, 18611)),
                Promise.resolve().then(o.bind(o, 36082)),
                Promise.resolve().then(o.bind(o, 42398)),
                Promise.resolve().then(o.bind(o, 21155)),
                Promise.resolve().then(o.t.bind(o, 23808, 23)),
                Promise.resolve().then(o.t.bind(o, 81305, 23)),
                Promise.resolve().then(o.t.bind(o, 78344, 23)),
                Promise.resolve().then(o.t.bind(o, 90216, 23)),
                Promise.resolve().then(o.bind(o, 44161)),
                Promise.resolve().then(o.bind(o, 38317)),
                Promise.resolve().then(o.bind(o, 22883)),
                Promise.resolve().then(o.bind(o, 59790)),
                Promise.resolve().then(o.bind(o, 47933)),
                Promise.resolve().then(o.bind(o, 88586)),
                Promise.resolve().then(o.bind(o, 34414)),
                Promise.resolve().then(o.bind(o, 41855)),
                Promise.resolve().then(o.bind(o, 10668)),
                Promise.resolve().then(o.bind(o, 51969)),
                Promise.resolve().then(o.bind(o, 93319)),
                Promise.resolve().then(o.bind(o, 6644)),
                Promise.resolve().then(o.bind(o, 73416)),
                Promise.resolve().then(o.bind(o, 6043)),
                Promise.resolve().then(o.bind(o, 98216)),
                Promise.resolve().then(o.bind(o, 68808)),
                Promise.resolve().then(o.bind(o, 94584)),
                Promise.resolve().then(o.bind(o, 77272)),
                Promise.resolve().then(o.bind(o, 20908)),
                Promise.resolve().then(o.bind(o, 26216)),
                Promise.resolve().then(o.bind(o, 62440)),
                Promise.resolve().then(o.bind(o, 99270)),
                Promise.resolve().then(o.bind(o, 55046)),
                Promise.resolve().then(o.bind(o, 32856)),
                Promise.resolve().then(o.bind(o, 2726)),
                Promise.resolve().then(o.bind(o, 75690)),
                Promise.resolve().then(o.t.bind(o, 78432, 23)),
                Promise.resolve().then(o.bind(o, 39695)),
                Promise.resolve().then(o.bind(o, 84929)),
                Promise.resolve().then(o.bind(o, 24301)),
                Promise.resolve().then(o.bind(o, 21485)),
                Promise.resolve().then(o.bind(o, 25992)),
                Promise.resolve().then(o.bind(o, 51692)),
                Promise.resolve().then(o.bind(o, 79374)),
                Promise.resolve().then(o.bind(o, 13514)),
                Promise.resolve().then(o.bind(o, 99974)),
                Promise.resolve().then(o.t.bind(o, 79876, 23)),
                Promise.resolve().then(o.t.bind(o, 67060, 23)),
                Promise.resolve().then(o.bind(o, 42260)),
                Promise.resolve().then(o.bind(o, 72866)),
                Promise.resolve().then(o.bind(o, 81338)),
                Promise.resolve().then(o.bind(o, 82630)),
                Promise.resolve().then(o.bind(o, 49058)),
                Promise.resolve().then(o.bind(o, 39857)),
                Promise.resolve().then(o.bind(o, 48167)),
                Promise.resolve().then(o.bind(o, 40461)),
                Promise.resolve().then(o.bind(o, 59884)),
                Promise.resolve().then(o.bind(o, 73144)),
                Promise.resolve().then(o.bind(o, 66458)),
                Promise.resolve().then(o.bind(o, 77286)),
                Promise.resolve().then(o.bind(o, 53431)),
                Promise.resolve().then(o.bind(o, 22605)),
                Promise.resolve().then(o.bind(o, 94714)),
                Promise.resolve().then(o.bind(o, 90479)),
                Promise.resolve().then(o.bind(o, 64697)),
                Promise.resolve().then(o.bind(o, 5356)),
                Promise.resolve().then(o.bind(o, 6374)),
                Promise.resolve().then(o.bind(o, 39260)),
                Promise.resolve().then(o.bind(o, 68816)),
                Promise.resolve().then(o.bind(o, 20372)),
                Promise.resolve().then(o.bind(o, 85208)),
                Promise.resolve().then(o.bind(o, 95296)),
                Promise.resolve().then(o.t.bind(o, 70444, 23)),
                Promise.resolve().then(o.t.bind(o, 67197, 23)),
                Promise.resolve().then(o.t.bind(o, 62418, 23)),
                Promise.resolve().then(o.t.bind(o, 2236, 23)),
                Promise.resolve().then(o.t.bind(o, 74288, 23)),
                Promise.resolve().then(o.bind(o, 78029)),
                Promise.resolve().then(o.bind(o, 6063)),
                Promise.resolve().then(o.bind(o, 14876)),
                Promise.resolve().then(o.bind(o, 86216)),
                Promise.resolve().then(o.bind(o, 18744)),
                Promise.resolve().then(o.bind(o, 32438)),
                Promise.resolve().then(o.t.bind(o, 4032, 23)),
                Promise.resolve().then(o.t.bind(o, 25556, 23)),
                Promise.resolve().then(o.bind(o, 18792)),
                Promise.resolve().then(o.t.bind(o, 33742, 23)),
                Promise.resolve().then(o.bind(o, 84520)),
                Promise.resolve().then(o.bind(o, 85816)),
                Promise.resolve().then(o.bind(o, 71193)),
                Promise.resolve().then(o.bind(o, 37934)),
                Promise.resolve().then(o.bind(o, 92852)),
                Promise.resolve().then(o.bind(o, 34740)),
                Promise.resolve().then(o.bind(o, 83373)),
                Promise.resolve().then(o.bind(o, 9322)),
                Promise.resolve().then(o.bind(o, 36118));
        },
        18085: (e, s, o) => {
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
            var r = o(42561);
            let i = (e) => {
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
                    var n;
                    null == (n = window.desktopEvents) || n.send(r.EE.DOWNLOAD_TRACKS, e, s, o);
                },
                sendYnisonState = (e) => {
                    var s;
                    null == (s = window.desktopEvents) || s.send(r.EE.YNISON_STATE, { rawData: e.rawData });
                },
                t = (e) => {
                    let s = e === r.Sxu.Light ? '#FFFFFF' : '#000000';
                    window.desktopEvents.send(r.EE.APPLICATION_THEME, s);
                };
            o(99269);
            var l = o(5257),
                d = o(21240),
                a = o(72439),
                v = o(12275),
                h = o(32873),
                m = o(63395),
                b = o(92070),
                P = o(71992),
                c = o(11908),
                u = o(42100),
                E = o(51606),
                C = o(54690);
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
            var w = o(35483),
                A = o(3803);
        },
        21240: (e, s, o) => {
            'use strict';
            o.d(s, { useApplicationUpdate: () => P });
            var n = o(62936),
                r = o(44020),
                i = o(47480),
                t = o(42561),
                l = o(79950),
                d = o(5099),
                a = o(20418),
                v = o(85906),
                h = o(63727),
                m = o.n(h);
            let b = (e) => {
                    let { version: s, formatMessage: o, closeToast: i } = e,
                        h = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(t.EE.INSTALL_UPDATE);
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
                modUpdateToast = (e) => {
                    let { version: s, formatMessage: o, closeToast: i } = e,
                        [h, b] = (0, r.useState)(-1),
                        P = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(t.EE.INSTALL_MOD_UPDATE), null == i || i();
                        }, [i]),
                        C = (0, r.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(t.EE.DOWNLOAD_MOD_UPDATE);
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
                                null == (e = window.desktopEvents) || e.on(t.EE.PROGRESS_BAR_CHANGE, E),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(t.EE.PROGRESS_BAR_CHANGE, E);
                                }
                            );
                        }, [E]),
                        (0, r.useEffect)(() => {
                            let e = () => {
                                null == i || i();
                            };
                            return (
                                window.desktopEvents?.on(t.EE.MOD_UPDATE_AVAILABLE, e),
                                () => {
                                    window.desktopEvents?.off?.(t.EE.MOD_UPDATE_AVAILABLE, e);
                                }
                            );
                        }, [i]),
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
                    let { closeToast: s, toastID: o, message: i, buttonLabel: h, onButtonClick: b, disabled: P = !1, dismissOnButtonClick: C = !1 } = e,
                        [A, g] = (0, r.useState)(-1),
                        [E, w] = (0, r.useState)('Ожидание...'),
                        N = '__pulseToastProgressCache',
                        f = (0, r.useCallback)(() => {
                            null == b || b(), C && (null == s || s());
                        }, [C, b, s]),
                        k = (0, r.useMemo)(
                            () =>
                                (0, n.jsxs)('div', {
                                    className: m().message,
                                    children: [
                                        (0, n.jsx)(a.Caption, {
                                            className: m().text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: i.replace('#s', E),
                                        }),
                                        h &&
                                            (0, n.jsx)(d.$, {
                                                className: m().button,
                                                onClick: f,
                                                variant: 'default',
                                                color: 'secondary',
                                                size: 'xs',
                                                radius: 'xxxl',
                                                disabled: P,
                                                children: (0, n.jsx)(a.Caption, { variant: 'div', type: 'controls', size: 'm', children: h }),
                                            }),
                                    ],
                                }),
                            [P, h, i, f, E],
                        ),
                        p = (0, r.useCallback)(
                            (e, s, i, n = 0, r = void 0) => {
                                if (s !== o) return;
                                if (window.dedupeNonces && window.dedupeNonces[s] === n) return;
                                window.dedupeNonces || (window.dedupeNonces = {}),
                                    n && (window.dedupeNonces[s] = n),
                                    window[N] || (window[N] = {}),
                                    (window[N][s] = { progress: i, label: r }),
                                    g(i),
                                    r && w(r);
                            },
                            [o],
                        ),
                        y = (0, r.useCallback)(
                            (e, i, n = 0) => {
                                if (window['onBasicToastDismiss' + o] === n) return;
                                n && (window['onBasicToastDismiss' + o] = n), i === o && (window[N] && delete window[N][o], null == s || s());
                            },
                            [s, o],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            let e = window[N] && window[N][o];
                            e && (g(e.progress), e.label && w(e.label));
                            return () => {
                                window[N] && delete window[N][o];
                            };
                        }, [o]),
                        (0, r.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(t.EE.PROGRESS_BAR_CHANGE, p),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(t.EE.PROGRESS_BAR_CHANGE, p);
                                }
                            );
                        }, [p]),
                        (0, r.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(t.EE.BASIC_TOAST_DISMISS, y),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(t.EE.BASIC_TOAST_DISMISS, y);
                                }
                            );
                        }, [y]),
                        (0, n.jsxs)(v.$W, {
                            className: (0, l.$)(m().root, m().important),
                            message: k,
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
                P = () => {
                    let { formatMessage: e } = (0, i.A)(),
                        { notify: s } = (0, t.lkh)(),
                        { notify: o, dismiss: l } = (0, t.lkh)(),
                        { notify: d } = (0, t.lkh)(),
                        { notify: a } = (0, t.lkh)(),
                        { notify: v } = (0, t.lkh)(),
                        h = (0, r.useRef)(''),
                        m = (0, r.useCallback)(
                            (o, i) => {
                                h.current !== i && ((h.current = i), s((0, n.jsx)(b, { formatMessage: e, version: i }), { containerId: t.uQT.IMPORTANT }));
                            },
                            [e, h, s],
                        ),
                        C = (0, r.useCallback)(
                            (s, r, i, d = 0) => {
                                if (window.modUpdateAvailableEventDedupeNonce === d) return;
                                d && (window.modUpdateAvailableEventDedupeNonce = d),
                                    o((0, n.jsx)(modUpdateToast, { formatMessage: e, version: `${r} -> ${i}`, closeToast: l }), { containerId: t.uQT.IMPORTANT });
                            },
                            [e, o, l],
                        ),
                        A = (0, r.useCallback)(() => {
                            window.desktopEvents?.send(t.EE.APPLICATION_RESTART);
                        }, []),
                        g = (0, r.useCallback)(
                            (e, s = 'GPU_STALL', o = 0) => {
                                if (window.onGPUStallEventDedupeNonce === o) return;
                                o && (window.onGPUStallEventDedupeNonce = o),
                                    d(
                                        (0, n.jsx)(toastWithProgress, {
                                            toastID: 'GPU_STALL',
                                            message: `Аппаратное ускорение отключилось: ${s}`,
                                            buttonLabel: 'Исправить',
                                            onButtonClick: A,
                                        }),
                                        { containerId: t.uQT.IMPORTANT },
                                    );
                            },
                            [d, A],
                        ),
                        E = (0, r.useCallback)(() => {
                            window.desktopEvents?.send(t.EE.APP_STALL_CANCEL_RESTART);
                        }, []),
                        w = (0, r.useCallback)(
                            (e, s = 0) => {
                                if (window.onAppStallStallDedupeNonce === s) return;
                                s && (window.onAppStallStallDedupeNonce = s),
                                    a(
                                        (0, n.jsx)(toastWithProgress, {
                                            toastID: 'safeModeRestart',
                                            message: 'Плеер запускается слишком долго. Перезагрузка в безопасном режиме через #s',
                                            buttonLabel: 'Отменить',
                                            onButtonClick: E,
                                            dismissOnButtonClick: !0,
                                        }),
                                        { containerId: t.uQT.IMPORTANT },
                                    );
                            },
                            [a, E],
                        ),
                        N = (0, r.useCallback)(
                            (e, s, o, r, i = 0) => {
                                if (window['onBasicToastCreate' + s] === i) return;
                                i && (window['onBasicToastCreate' + s] = i),
                                    v(
                                        (0, n.jsx)(toastWithProgress, {
                                            toastID: s,
                                            message: o,
                                            buttonLabel: r || void 0,
                                            dismissOnButtonClick: !!r,
                                        }),
                                        { containerId: t.uQT.IMPORTANT },
                                    );
                            },
                            [v],
                        );
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.UPDATE_AVAILABLE, m),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.UPDATE_AVAILABLE, m);
                            }
                        );
                    }, [m]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.BASIC_TOAST_CREATE, N),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.BASIC_TOAST_CREATE, N);
                            }
                        );
                    }, [N]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.MOD_UPDATE_AVAILABLE, C),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.MOD_UPDATE_AVAILABLE, C);
                            }
                        );
                    }, [C]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.GPU_STALL, g),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.GPU_STALL, g);
                            }
                        );
                    }, [g]);
                    (0, r.useEffect)(() => {
                        var e;
                        return (
                            null == (e = window.desktopEvents) || e.on(t.EE.APP_STALL, w),
                            () => {
                                var e;
                                null == (e = window.desktopEvents) || e.off(t.EE.APP_STALL, w);
                            }
                        );
                    }, [w]);
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
                pulseText: 'TitleBar_pulseText__FhYv',
            };
        },
        29335: (e, s, o) => {
            'use strict';
            o.d(s, { ClientConfigInitializer: () => n }), o(62936);
            let n = (e) => {
                let { env: s, nonce: o } = e;
                return null;
            };
        },
        32873: (e, s, o) => {
            'use strict';
            o.d(s, { useProbabilityBucket: () => i });
            var n = o(44020),
                r = o(42561);
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
        35483: (e, s, o) => {
            'use strict';
            o.d(s, { ReleaseNotesModal: () => u });
            var n = o(62936),
                r = o(79950),
                i = o(19718),
                t = o(47480),
                l = o(29550),
                d = o(26731),
                a = o(4714),
                v = o(14501),
                h = o(20418),
                m = o(42561),
                b = o(41926),
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
        42100: (e, s, o) => {
            'use strict';
            o.d(s, { useSendPlayerState: () => l });
            var n = o(44020),
                r = o(59935),
                i = o(46663),
                t = o(42561);
            let l = (e) => {
                let { sonata: s } = e,
                    o = (0, r.c)((e) => {
                        var s;
                        let { isPlaying: o, canMoveBackward: n, canMoveForward: r } = e;
                        null == (s = window.desktopEvents) ||
                            s.send(t.EE.PLAYER_STATE, {
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
                            i = s + 1 >= 0 ? (o?.[s + 1] ?? s + 1) : null;
                        return {
                            previousTrack: null == r ? void 0 : n?.[r]?.entity?.entityData?.meta,
                            nextTrack: null == i ? void 0 : n?.[i]?.entity?.entityData?.meta,
                        };
                    },
                    d = (e, n) => {
                        let { previousTrack: r, nextTrack: d } = l(e);
                        o({
                            status: n,
                            isPlaying: n === i.MT.PLAYING,
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
                            nextTrack: d,
                            volume: e?.state?.playerState?.exponentVolume?.value,
                        });
                    };
                (0, n.useEffect)(() => {
                    s && window.pulsesyncApi?.setPlayerInstance?.(s);
                    let e,
                        r,
                        l =
                            null == s
                                ? void 0
                                : s.state.playerState.status.onChange((e) => {
                                      e && d(s, e);
                                  }),
                        o = s?.state?.queueState?.currentEntity?.onChange((e) => {
                            e && d(s, i.MT.PLAYING);
                        }),
                        a = s?.state?.playerState?.event?.onChange(() => {
                            let e = s?.state?.playerState?.event?.value;
                            ('SET_PROGRESS' === e || e === i.Iu?.SET_PROGRESS) && d(s, s?.state?.playerState?.status?.value);
                        }),
                        v = s?.state?.queueState?.entityList?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        h = s?.state?.currentContext?.value?.availableActions.repeat?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        m = s?.state?.currentContext?.value?.availableActions.shuffle?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        b = s?.state?.queueState?.repeat?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        P = s?.state?.queueState?.shuffle?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        c = s?.state?.playerState?.exponentVolume?.onChange(() => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        u = window.desktopEvents?.on(t.EE.GET_CURRENT_TRACK, () => {
                            d(s, s?.state?.playerState?.status?.value);
                        }),
                        E =
                            null == s
                                ? void 0
                                : s.state.currentContext.onChange(() => {
                                      var o, n;
                                      null == e || e(),
                                          null == r || r(),
                                          (e =
                                              null == s || null == (o = s.state.currentContext.value)
                                                  ? void 0
                                                  : o.availableActions.moveBackward.onChange(() => {
                                                        d(s, s?.state?.playerState?.status?.value);
                                                    })),
                                          (r =
                                              null == s || null == (n = s.state.currentContext.value)
                                                  ? void 0
                                                  : n.availableActions.moveForward.onChange(() => {
                                                        d(s, s?.state?.playerState?.status?.value);
                                                    }));
                                  });
                    return () => {
                        null == l || l(),
                            null == E || E(),
                            null == o || o(),
                            null == u || u(),
                            null == a || a(),
                            null == v || v(),
                            null == h || h(),
                            null == m || m(),
                            null == b || b(),
                            null == P || P(),
                            null == c || c(),
                            null == r || r(),
                            null == r || r();
                    };
                }, [o, null == s ? void 0 : s.state.currentContext, null == s ? void 0 : s.state.playerState.status]);
            };
        },
        63395: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshApplicationData: () => t });
            var n = o(44020),
                r = o(44262),
                i = o(42561);
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
        63727: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        71992: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshTracksAvailability: () => i });
            var n = o(44020),
                r = o(42561);
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
        72439: (e, s, o) => {
            'use strict';
            o.d(s, { useLaunch: () => i });
            var n = o(44020),
                r = o(42561);
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
        92070: (e, s, o) => {
            'use strict';
            o.d(s, { useRefreshRepositoryMeta: () => i });
            var n = o(44020),
                r = o(42561);
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
        99269: (e, s, o) => {
            'use strict';
            o.d(s, { LO: () => i, N5: () => t, toggleMiniPlayer: () => d, vZ: () => r });
            var n = o(42561);
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
                },
                d = () => {
                    var e;
                    null == (e = window.desktopEvents) || e.send(n.EE.TOGGLE_MINIPLAYER);
                };
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 226, 2537, 8037, 612, 249, 3789, 5721, 2670, 1970, 494, 3302, 3878, 5356, 2873, 3421, 4297, 4717, 3931, 9417, 9225, 4103, 7606, 9539,
                1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 3359, 881, 5980, 8916, 2561, 5906, 4690, 4501, 9154, 914, 3197, 6161, 3912, 3189, 2632, 2991, 8303, 2290,
                1002, 2687, 5128, 6889, 4622, 5320, 5135, 3889, 7511, 2695, 2591, 8216, 6655, 352, 9756, 6345, 1147, 8707, 255, 6795, 9370, 4716, 4488, 1009, 4670, 7358,
            ],
            () => e((e.s = 14209)),
        ),
            (_N_E = e.O());
    },
]);
