(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6496],
    {
        6496: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { ShareButton: () => w });
            var l = a(62936),
                r = a(79950),
                n = a(44020),
                o = a(47480),
                i = a(23480),
                s = a(5099),
                c = a(85742),
                d = a(64304),
                u = a(42561),
                h = a(89894),
                y = a(44898),
                x = a.n(y),
                v = a(9156),
                f = a.n(v);
            let m = async (e) => {
                    let { domToBlob: t } = await a.e(8543).then(a.bind(a, 28543)),
                        l = e.clientWidth;
                    return (
                        e.querySelectorAll('[data-scale]').forEach((e) => {
                            let t = e.clientWidth,
                                a = Math.max(1, Math.min((l - 2 * h.EK) / t, h.GF));
                            e.dataset.scale = a.toString();
                        }),
                        t(e, {
                            quality: h.Tu,
                            scale: h.VI / e.clientHeight,
                            onCloneNode: (e) => {
                                e instanceof HTMLElement &&
                                    (e.querySelectorAll('[data-scale]').forEach((e) => {
                                        var t;
                                        e.style.scale = null != (t = e.dataset.scale) ? t : '1';
                                    }),
                                    e.querySelectorAll(h.bg).forEach((e) => {
                                        e.style.opacity = '0';
                                    }),
                                    e.querySelectorAll('[data-screenshot-visible]').forEach((e) => {
                                        e.style.display = 'block';
                                    }));
                            },
                        })
                    );
                },
                b = () => 'ya-music-'.concat(Date.now(), '.png'),
                w = (e) => {
                    var t;
                    let {
                            data: { title: a, textColor: h, buttonColor: y },
                            className: v,
                            cardRef: w,
                            wrapperClassName: p,
                        } = e,
                        {
                            settings: { isMobile: E },
                        } = (0, u.Pjs)(),
                        S = (0, u.mFl)(),
                        { formatMessage: g } = (0, o.A)(),
                        [k, _] = (0, n.useMemo)(() => {
                            let e = { '--text-color': h, '--button-color': y };
                            return [e, E ? void 0 : e];
                        }, [y, E, h]),
                        C = (0, n.useCallback)(async () => {
                            var e;
                            if (!(null == w ? void 0 : w.current)) return;
                            S({ actionType: i.X2.SaveSlide });
                            let t = b(),
                                a = await m(w.current);
                            null == (e = window.desktopEvents) || e.send(u.EE.SAVE_FILE_TO_LOCAL_DISK, t, await a.arrayBuffer());
                        }, [w, S]),
                        j = (0, n.useCallback)(async () => {
                            if (!(null == w ? void 0 : w.current)) return;
                            S({ actionType: i.X2.SaveSlide });
                            let e = await m(w.current),
                                t = b();
                            navigator.share({ files: [new File([e], t, { type: 'image/png' })], text: t });
                        }, [w, S]);
                    return (null == (t = navigator) ? void 0 : t.share)
                        ? (0, l.jsx)('div', {
                              className: p,
                              style: k,
                              children: (0, l.jsxs)(d.W1, {
                                  ariaLabel: g({ id: 'interface-actions.context-menu' }),
                                  className: (0, r.$)(f().root, x().root, v),
                                  color: 'secondary',
                                  isMobile: E,
                                  label: a,
                                  placement: 'right',
                                  radius: 'xxxl',
                                  role: 'button',
                                  size: 'default',
                                  style: _,
                                  children: [
                                      (0, l.jsx)(d.Dr, {
                                          icon: (0, l.jsx)(c.Icon, { variant: 'download', size: 'xxs' }),
                                          onClick: C,
                                          children: g({ id: 'rewind.download-image' }),
                                      }),
                                      (0, l.jsx)(d.Dr, {
                                          icon: (0, l.jsx)(c.Icon, { variant: 'more', size: 'xxs' }),
                                          onClick: j,
                                          children: g({ id: 'interface-actions.more' }),
                                      }),
                                  ],
                              }),
                          })
                        : (0, l.jsx)(s.$, {
                              className: (0, r.$)(f().root, x().root, v),
                              color: 'secondary',
                              onClick: C,
                              radius: 'xxxl',
                              role: 'button',
                              size: 'default',
                              style: _,
                              withHover: !1,
                              children: a,
                          });
                };
        },
        9156: (e) => {
            e.exports = { root: 'ShareButton_root__fGsNv' };
        },
    },
]);
