(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6572],
    {
        15808: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => l });
            var l = (function (e) {
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
                    e
                );
            })({});
        },
        36572: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { ShareButton: () => R });
            var l = a(32290),
                A = a(63618),
                E = a(55178),
                r = a(60900),
                n = a(16172),
                o = a(63423),
                _ = a(82586),
                i = a(19740),
                I = a(12350),
                s = a(15808),
                c = a(57594),
                T = a(1714),
                L = a(23234),
                S = a.n(L),
                d = a(74980),
                u = a.n(d);
            let O = async (e) => {
                    let { domToBlob: t } = await a.e(1899).then(a.bind(a, 31899)),
                        l = e.clientWidth;
                    return (
                        e.querySelectorAll('[data-scale]').forEach((e) => {
                            let t = e.clientWidth,
                                a = Math.max(1, Math.min((l - 2 * T.EK) / t, T.GF));
                            e.dataset.scale = a.toString();
                        }),
                        t(e, {
                            quality: T.Tu,
                            scale: T.VI / e.clientHeight,
                            onCloneNode: (e) => {
                                e instanceof HTMLElement &&
                                    (e.querySelectorAll('[data-scale]').forEach((e) => {
                                        var t;
                                        e.style.scale = null != (t = e.dataset.scale) ? t : '1';
                                    }),
                                    e.querySelectorAll(T.bg).forEach((e) => {
                                        e.style.opacity = '0';
                                    }),
                                    e.querySelectorAll('[data-screenshot-visible]').forEach((e) => {
                                        e.style.display = 'block';
                                    }));
                            },
                        })
                    );
                },
                P = () => 'ya-music-'.concat(Date.now(), '.png'),
                R = (e) => {
                    var t;
                    let {
                            data: { title: a, textColor: T, buttonColor: L },
                            className: d,
                            cardRef: R,
                            wrapperClassName: N,
                        } = e,
                        {
                            settings: { isMobile: D },
                        } = (0, c.g)(),
                        C = (0, I.m)(),
                        { formatMessage: h } = (0, r.A)(),
                        [y, x] = (0, E.useMemo)(() => {
                            let e = { '--text-color': T, '--button-color': L };
                            return [e, D ? void 0 : e];
                        }, [L, D, T]),
                        v = (0, E.useCallback)(async () => {
                            var e;
                            if (!(null == R ? void 0 : R.current)) return;
                            C({ actionType: n.X2.SaveSlide });
                            let t = P(),
                                a = await O(R.current);
                            null == (e = window.desktopEvents) || e.send(s.E.SAVE_FILE_TO_LOCAL_DISK, t, await a.arrayBuffer());
                        }, [R, C]),
                        M = (0, E.useCallback)(async () => {
                            if (!(null == R ? void 0 : R.current)) return;
                            C({ actionType: n.X2.SaveSlide });
                            let e = await O(R.current),
                                t = P();
                            navigator.share({ files: [new File([e], t, { type: 'image/png' })], text: t });
                        }, [R, C]);
                    return (null == (t = navigator) ? void 0 : t.share)
                        ? (0, l.jsx)('div', {
                              className: N,
                              style: y,
                              children: (0, l.jsxs)(i.W1, {
                                  ariaLabel: h({ id: 'interface-actions.context-menu' }),
                                  className: (0, A.$)(u().root, S().root, d),
                                  color: 'secondary',
                                  isMobile: D,
                                  label: a,
                                  placement: 'right',
                                  radius: 'xxxl',
                                  role: 'button',
                                  size: 'default',
                                  style: x,
                                  children: [
                                      (0, l.jsx)(i.Dr, {
                                          icon: (0, l.jsx)(_.I, { variant: 'download', size: 'xxs' }),
                                          onClick: v,
                                          children: h({ id: 'rewind.download-image' }),
                                      }),
                                      (0, l.jsx)(i.Dr, {
                                          icon: (0, l.jsx)(_.I, { variant: 'more', size: 'xxs' }),
                                          onClick: M,
                                          children: h({ id: 'interface-actions.more' }),
                                      }),
                                  ],
                              }),
                          })
                        : (0, l.jsx)(o.$, {
                              className: (0, A.$)(u().root, S().root, d),
                              color: 'secondary',
                              onClick: v,
                              radius: 'xxxl',
                              role: 'button',
                              size: 'default',
                              style: x,
                              withHover: !1,
                              children: a,
                          });
                };
        },
        74980: (e) => {
            e.exports = { root: 'ShareButton_root__fGsNv' };
        },
    },
]);
