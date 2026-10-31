(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3830],
    {
        7654: (e) => {
            e.exports = { root: 'ShareButton_root__fGsNv' };
        },
        63830: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ShareButton: () => g }));
            var l = a(88800),
                r = a(65724),
                s = a(53548),
                n = a(2058),
                o = a(92716),
                i = a(96817),
                c = a(52300),
                d = a(19934),
                u = a(18684),
                h = a(97526),
                y = a(72288),
                p = a(89988),
                f = a(26128),
                x = a.n(f),
                m = a(7654),
                v = a.n(m);
            let w = async (e) => {
                    let { snapdom: t } = await a.e(4984).then(a.bind(a, 44984)),
                        l = e.clientWidth,
                        r = e.clientHeight;
                    return (
                        e.querySelectorAll('[data-scale]').forEach((e) => {
                            let t = e.clientWidth,
                                a = Math.max(1, Math.min((l - 2 * p.EK) / t, p.GF));
                            e.dataset.scale = a.toString();
                        }),
                        await document.fonts.ready,
                        t.toBlob(e, {
                            compress: !1,
                            dpr: 1,
                            embedFonts: !0,
                            quality: p.Tu,
                            scale: p.VI / r,
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
                            className: m,
                            cardRef: g,
                            wrapperClassName: k,
                            'data-test-id': S,
                        } = e,
                        {
                            settings: { isMobile: E },
                        } = (0, y.g)(),
                        C = (0, u.m)(),
                        { formatMessage: A } = (0, n.A)(),
                        [j, _] = (0, s.useMemo)(() => {
                            let e = { '--text-color': p, '--button-color': f };
                            return [e, E ? void 0 : e];
                        }, [f, E, p]),
                        q = (0, s.useCallback)(async () => {
                            if (!(null == g ? void 0 : g.current)) return;
                            C({ actionType: o.ActionType.SaveSlide });
                            let e = b(),
                                t = await w(g.current);
                            await (0, h.r)(t, e);
                        }, [g, C]),
                        D = (0, s.useCallback)(async () => {
                            let e, t;
                            if (!(null == g ? void 0 : g.current)) return;
                            C({ actionType: o.ActionType.SaveSlide });
                            let a = await w(g.current),
                                l = b();
                            ((e = new File([a], l, { type: 'image/png' })), (t = l), navigator.share({ files: [e], text: t }));
                        }, [g, C]);
                    return (null == (t = navigator) ? void 0 : t.share)
                        ? (0, l.jsx)('div', {
                              className: k,
                              style: j,
                              children: (0, l.jsxs)(d.W1, {
                                  ariaLabel: A({ id: 'interface-actions.context-menu' }),
                                  className: (0, r.$)(v().root, x().root, m),
                                  color: 'secondary',
                                  isMobile: E,
                                  label: a,
                                  placement: 'right',
                                  radius: 'xxxl',
                                  role: 'button',
                                  size: 'default',
                                  style: _,
                                  'data-test-id': S,
                                  children: [
                                      (0, l.jsx)(d.Dr, {
                                          icon: (0, l.jsx)(c.I, { variant: 'download', size: 'xxs' }),
                                          onClick: q,
                                          children: A({ id: 'rewind.download-image' }),
                                      }),
                                      (0, l.jsx)(d.Dr, {
                                          icon: (0, l.jsx)(c.I, { variant: 'more', size: 'xxs' }),
                                          onClick: D,
                                          children: A({ id: 'interface-actions.more' }),
                                      }),
                                  ],
                              }),
                          })
                        : (0, l.jsx)(i.$, {
                              className: (0, r.$)(v().root, x().root, m),
                              color: 'secondary',
                              onClick: q,
                              radius: 'xxxl',
                              role: 'button',
                              size: 'default',
                              style: _,
                              withHover: !1,
                              'data-test-id': S,
                              children: a,
                          });
                };
        },
        97526: (e, t, a) => {
            'use strict';
            (a.d(t, { r: () => l }), a(30282));
            let l = async (e, t) => {
                if (!window.musicDesktop) throw Error('Desktop file saving is unavailable');
                window.musicDesktop.files.savePng(t, await e.arrayBuffer());
            };
        },
    },
]);
