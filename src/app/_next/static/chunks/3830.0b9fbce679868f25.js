(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3830],
    {
        7654: (e) => {
            e.exports = { root: 'ShareButton_root__fGsNv' };
        },
        63830: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ShareButton: () => g }));
            var r = a(88800),
                l = a(65724),
                n = a(53548),
                s = a(2058),
                o = a(87999),
                i = a(70621),
                c = a(96817),
                d = a(52300),
                u = a(19934),
                y = a(97526),
                h = a(72288),
                p = a(89988),
                f = a(26128),
                x = a.n(f),
                v = a(7654),
                m = a.n(v);
            let w = async (e) => {
                    let { snapdom: t } = await a.e(4984).then(a.bind(a, 44984)),
                        r = e.clientWidth,
                        l = e.clientHeight;
                    return (
                        e.querySelectorAll('[data-scale]').forEach((e) => {
                            let t = e.clientWidth,
                                a = Math.max(1, Math.min((r - 2 * p.EK) / t, p.GF));
                            e.dataset.scale = a.toString();
                        }),
                        await document.fonts.ready,
                        t.toBlob(e, {
                            compress: !1,
                            dpr: 1,
                            embedFonts: !0,
                            quality: p.Tu,
                            scale: p.VI / l,
                            type: 'png',
                            plugins: [
                                {
                                    name: 'prepare-screenshot',
                                    afterClone: (e) => {
                                        let { clone: t } = e;
                                        t instanceof HTMLElement &&
                                            (t.querySelectorAll('[data-scale]').forEach((e) => {
                                                var t;
                                                e.style.scale = null != (t = e.dataset.scale) ? t : '1';
                                            }),
                                            t.querySelectorAll('[data-screenshot-value]').forEach((e) => {
                                                var t;
                                                e.textContent = null != (t = e.dataset.screenshotValue) ? t : '';
                                            }),
                                            t.querySelectorAll(p.bg).forEach((e) => {
                                                e.style.opacity = '0';
                                            }),
                                            t.querySelectorAll('[data-screenshot-visible]').forEach((e) => {
                                                ((e.style.display = 'block'), (e.style.height = '100%'), (e.style.maxWidth = 'none'), (e.style.width = '100%'));
                                            }));
                                    },
                                },
                            ],
                        })
                    );
                },
                b = () => 'ya-music-'.concat(Date.now(), '.png'),
                g = (e) => {
                    var t;
                    let {
                            data: { title: a, textColor: p, buttonColor: f },
                            className: v,
                            cardRef: g,
                            wrapperClassName: k,
                            'data-test-id': S,
                        } = e,
                        {
                            settings: { isMobile: T },
                        } = (0, h.g)(),
                        E = (0, i.D)(),
                        { formatMessage: C } = (0, s.A)(),
                        [A, j] = (0, n.useMemo)(() => {
                            let e = { '--text-color': p, '--button-color': f };
                            return [e, T ? void 0 : e];
                        }, [f, T, p]),
                        D = (0, n.useCallback)(async () => {
                            if (!(null == g ? void 0 : g.current)) return;
                            E({ actionType: o.ActionType.SaveSlide, userInteractionType: o.UserInteractionType.Tap });
                            let e = b(),
                                t = await w(g.current);
                            await (0, y.r)(t, e);
                        }, [g, E]),
                        I = (0, n.useCallback)(async () => {
                            let e, t;
                            if (!(null == g ? void 0 : g.current)) return;
                            E({ actionType: o.ActionType.SaveSlide, userInteractionType: o.UserInteractionType.Tap });
                            let a = await w(g.current),
                                r = b();
                            ((e = new File([a], r, { type: 'image/png' })), (t = r), navigator.share({ files: [e], text: t }));
                        }, [g, E]);
                    return (null == (t = navigator) ? void 0 : t.share)
                        ? (0, r.jsx)('div', {
                              className: k,
                              style: A,
                              children: (0, r.jsxs)(u.W1, {
                                  ariaLabel: C({ id: 'interface-actions.context-menu' }),
                                  className: (0, l.$)(m().root, x().root, v),
                                  color: 'secondary',
                                  isMobile: T,
                                  label: a,
                                  placement: 'right',
                                  radius: 'xxxl',
                                  role: 'button',
                                  size: 'default',
                                  style: j,
                                  'data-test-id': S,
                                  children: [
                                      (0, r.jsx)(u.Dr, {
                                          icon: (0, r.jsx)(d.I, { variant: 'download', size: 'xxs' }),
                                          onClick: D,
                                          children: C({ id: 'rewind.download-image' }),
                                      }),
                                      (0, r.jsx)(u.Dr, {
                                          icon: (0, r.jsx)(d.I, { variant: 'more', size: 'xxs' }),
                                          onClick: I,
                                          children: C({ id: 'interface-actions.more' }),
                                      }),
                                  ],
                              }),
                          })
                        : (0, r.jsx)(c.$, {
                              className: (0, l.$)(m().root, x().root, v),
                              color: 'secondary',
                              onClick: D,
                              radius: 'xxxl',
                              role: 'button',
                              size: 'default',
                              style: j,
                              withHover: !1,
                              'data-test-id': S,
                              children: a,
                          });
                };
        },
        97526: (e, t, a) => {
            'use strict';
            (a.d(t, { r: () => r }), a(30282));
            let r = async (e, t) => {
                if (!window.musicDesktop) throw Error('Desktop file saving is unavailable');
                window.musicDesktop.files.savePng(t, await e.arrayBuffer());
            };
        },
    },
]);
