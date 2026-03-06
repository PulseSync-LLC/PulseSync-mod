'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2357],
    {
        22357: (t, r, e) => {
            e.d(r, { initMocks: () => w });
            var l = e(81931),
                a = e(51403),
                n = e(51832);
            let i = (t, r) => {
                try {
                    return new URL(t);
                } catch (e) {
                    return null == r || r('Failed to convert '.concat(t, ' to URL: ').concat(String(e)), { url: t, error: e }), null;
                }
            };
            var u = e(11285);
            let o = async (t, r) => {
                    try {
                        let r = await fetch((0, u.X)(t));
                        return await r.json();
                    } catch (e) {
                        return null == r || r('Failed to load data from URL: '.concat(String(e)), { url: t, error: e }), null;
                    }
                },
                c = async (t) => {
                    var r;
                    let { getMocksConfiguration: e, onError: l } = t,
                        a = await Promise.resolve(e());
                    if (!a) return null;
                    let n = null == (r = i(a)) ? void 0 : r.href;
                    return n
                        ? await o(n, l)
                        : ((t) => {
                              try {
                                  return JSON.parse(t);
                              } catch (t) {
                                  return null;
                              }
                          })(a);
                };
            var s = e(67443);
            let h = async (t, r, e) => {
                    var l;
                    if (!t) return null;
                    let a =
                        null ==
                        (l = i(
                            ((t, r) => {
                                if (!r || /^(http|https):\/\//i.test(t)) return t;
                                let e = r.replace(/\/+$/, ''),
                                    l = t.replace(/^\/+/, '');
                                return ''.concat(e, '/').concat(l);
                            })(t, r),
                            e,
                        ))
                            ? void 0
                            : l.href;
                    return a ? await o(a) : null;
                },
                w = async (t) => {
                    if (globalThis.MSW_INIT_PROMISE) return void (await globalThis.MSW_INIT_PROMISE);
                    (globalThis.MSW_INIT_PROMISE = new Promise((r, e) => {
                        let u = ((t) => {
                                var r;
                                let e = null != (r = t.urlCapturePattern) ? r : '*';
                                return [
                                    a.L.all(e, async (r) => {
                                        let { request: e } = r,
                                            l = await c(t);
                                        if (!l) return;
                                        let a = ((t, r) => {
                                            var e;
                                            let l = i(r.url);
                                            return l &&
                                                null !=
                                                    (e = t.find((t) => {
                                                        if (!t) return !1;
                                                        let { matches: e } = (0, s.Os)(l, t.url);
                                                        return e && (!t.method || t.method.toLowerCase() === r.method.toLowerCase());
                                                    }))
                                                ? e
                                                : null;
                                        })(l, e);
                                        if (!a) return;
                                        let { mockUrl: u, status: o = 200, headers: w = {}, delay: d = 0 } = a,
                                            f = await h(u, t.mocksProviderUrl);
                                        return d && (await new Promise((t) => setTimeout(t, d))), n.c.json(f, { status: o, headers: w });
                                    }),
                                ];
                            })(t),
                            o = (0, l.k)(...u),
                            w = t.serviceWorkerUrl ? { url: t.serviceWorkerUrl } : {};
                        o.start({ onUnhandledRequest: 'bypass', serviceWorker: w })
                            .then(r)
                            .catch((t) => e(Error('Client: MSW initialization failed: '.concat(String(t)))));
                    })),
                        await globalThis.MSW_INIT_PROMISE;
                };
        },
    },
]);
