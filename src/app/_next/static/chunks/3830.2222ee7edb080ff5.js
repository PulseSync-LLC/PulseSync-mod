(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3830],
    {
        7654: (e) => {
            e.exports = { root: 'ShareButton_root__fGsNv' };
        },
        63830: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ShareButton: () => w }));
            var l = a(88800),
                r = a(65724),
                n = a(53548),
                o = a(2058),
                s = a(87999),
                i = a(70621),
                c = a(96817),
                d = a(52300),
                u = a(19934),
                y = a(97526),
                h = a(72288),
                p = a(89988),
                x = a(26128),
                m = a.n(x),
                v = a(7654),
                f = a.n(v);
            let b = async (e) => {
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
                g = () => 'ya-music-'.concat(Date.now(), '.png'),
                w = (e) => {
                    var t;
                    let {
                            data: { title: a, textColor: p, buttonColor: x },
                            className: v,
                            cardRef: w,
                            wrapperClassName: S,
                            'data-test-id': T,
                        } = e,
                        {
                            settings: { isMobile: k },
                        } = (0, h.g)(),
                        C = (0, i.D)(),
                        { formatMessage: E } = (0, o.A)(),
                        [A, j] = (0, n.useMemo)(() => {
                            let e = { '--text-color': p, '--button-color': x };
                            return [e, k ? void 0 : e];
                        }, [x, k, p]),
                        I = (0, n.useCallback)(async () => {
                            if (!(null == w ? void 0 : w.current)) return;
                            C({ actionType: s.ActionType.SaveSlide, userInteractionType: s.UserInteractionType.Tap });
                            let e = g(),
                                t = await b(w.current);
                            await (0, y.r)(t, e);
                        }, [w, C]),
                        _ = (0, n.useCallback)(async () => {
                            let e, t;
                            if (!(null == w ? void 0 : w.current)) return;
                            C({ actionType: s.ActionType.SaveSlide, userInteractionType: s.UserInteractionType.Tap });
                            let a = await b(w.current),
                                l = g();
                            ((e = new File([a], l, { type: 'image/png' })), (t = l), navigator.share({ files: [e], text: t }));
                        }, [w, C]);
                    return (null == (t = navigator) ? void 0 : t.share)
                        ? (0, l.jsx)('div', {
                              className: S,
                              style: A,
                              children: (0, l.jsxs)(u.W1, {
                                  ariaLabel: E({ id: 'interface-actions.context-menu' }),
                                  className: (0, r.$)(f().root, m().root, v),
                                  color: 'secondary',
                                  isMobile: k,
                                  label: a,
                                  placement: 'right',
                                  radius: 'xxxl',
                                  role: 'button',
                                  size: 'default',
                                  style: j,
                                  'data-test-id': T,
                                  children: [
                                      (0, l.jsx)(u.Dr, {
                                          icon: (0, l.jsx)(d.I, { variant: 'download', size: 'xxs' }),
                                          onClick: I,
                                          children: E({ id: 'rewind.download-image' }),
                                      }),
                                      (0, l.jsx)(u.Dr, {
                                          icon: (0, l.jsx)(d.I, { variant: 'more', size: 'xxs' }),
                                          onClick: _,
                                          children: E({ id: 'interface-actions.more' }),
                                      }),
                                  ],
                              }),
                          })
                        : (0, l.jsx)(c.$, {
                              className: (0, r.$)(f().root, m().root, v),
                              color: 'secondary',
                              onClick: I,
                              radius: 'xxxl',
                              role: 'button',
                              size: 'default',
                              style: j,
                              withHover: !1,
                              'data-test-id': T,
                              children: a,
                          });
                };
        },
    },
]);
