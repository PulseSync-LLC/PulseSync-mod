'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3144],
    {
        83144: (t, r, e) => {
            e.d(r, { initMocks: () => N });
            var a = e(99524),
                n = e(20253),
                l = e(76487),
                i = e(99800),
                o = e(7541);
            let u = (t, r) => {
                    var e;
                    return 'string' == typeof t && (null != (e = t.split(';')[0]) ? e : '').trim().toLowerCase() === r.trim().toLowerCase();
                },
                s = async (t, r) => {
                    try {
                        let e = await fetch((0, o.X)(t));
                        if (!e.ok) {
                            let a = 'Failed to load data from URL: '.concat(e.status, ' ').concat(e.statusText);
                            return null == r || r(a, { url: t, status: e.status, statusText: e.statusText }), null;
                        }
                        if (u(e.headers.get('content-type'), 'application/json')) return await e.json();
                        return await e.text();
                    } catch (e) {
                        return null == r || r('Failed to load data from URL: '.concat(String(e)), { url: t, error: e }), null;
                    }
                },
                c = (t, r) => {
                    try {
                        return new URL(t);
                    } catch (e) {
                        return null == r || r('Failed to convert '.concat(t, ' to URL: ').concat(String(e)), { url: t, error: e }), null;
                    }
                },
                f = async (t) => {
                    var r;
                    let { getMocksConfiguration: e, log: a } = t,
                        n = await Promise.resolve(e());
                    if (!n) return null;
                    let l = null == (r = c(n)) ? void 0 : r.href;
                    return l
                        ? await s(l, a)
                        : ((t, r) => {
                              try {
                                  return JSON.parse(t);
                              } catch (e) {
                                  return null == r || r('Failed to parse configuration', { jsonString: t }), null;
                              }
                          })(n, a);
                };
            var d = e(45100);
            let p = (t) => 'object' == typeof t && null !== t && !Array.isArray(t),
                h = async (t, r) => {
                    if (!u(t.headers.get('content-type'), 'application/json') || t.bodyUsed) return null;
                    try {
                        let r = await t.clone().json();
                        if (!p(r)) return null;
                        let e = {};
                        if (
                            ('string' == typeof r.operationName && (e.operationName = r.operationName),
                            p(r.variables) && (e.variables = r.variables),
                            !e.operationName && !e.variables)
                        )
                            return null;
                        return e;
                    } catch (t) {
                        return null == r || r('GraphQL payload: failed to parse JSON body', { error: t }), null;
                    }
                },
                v = /^(http|https):\/\//i,
                g = (t) => v.test(t),
                w = /\{(\w+)\}/g,
                y = (t, r, e) => {
                    let a = ((t, r) =>
                        'string' == typeof t && r
                            ? t.replace(w, (t, e) => {
                                  let a = r[e];
                                  return void 0 !== a ? String(a) : t;
                              })
                            : t)(r, e);
                    return String(t) === String(a);
                },
                m = (t) => {
                    if (void 0 === t) return null;
                    if (Array.isArray(t)) {
                        var r;
                        return null != (r = t[0]) ? r : null;
                    }
                    return String(t);
                },
                b = async (t, r, e, a) => {
                    let n,
                        l,
                        i = c(r.url, a);
                    if (!i) return null;
                    let o = async function () {
                        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            c = t[s];
                        if (!c) return null;
                        let f = g(c.url) || c.url.startsWith('*') ? c.url : '*'.concat(c.url),
                            { matches: p, params: v } = (0, d.Os)(i, f),
                            w = !c.method || c.method.toLowerCase() === r.method.toLowerCase(),
                            b = async () => o(s + 1);
                        if (!p || !w) return b();
                        if (!c.matchers) return c;
                        let { path: S, queryString: N, formData: k, graphQL: j, headers: I } = c.matchers;
                        if (
                            (S &&
                                !((t, r, e) => {
                                    for (let [a, n] of Object.entries(r)) if (!y(m(t[a]), n, e)) return !1;
                                    return !0;
                                })(null != v ? v : {}, S, e)) ||
                            (N &&
                                !((t, r, e) => {
                                    for (let [a, n] of Object.entries(r)) if (!y(t.get(a), n, e)) return !1;
                                    return !0;
                                })(i.searchParams, N, e)) ||
                            (k &&
                                (void 0 === n && (n = u(r.headers.get('content-type'), 'multipart/form-data') ? await r.formData() : null),
                                n &&
                                    !((t, r, e) => {
                                        for (let [a, n] of Object.entries(r)) {
                                            let r = t.getAll(a).map((t) => String(t));
                                            for (let t of n) if (!r.find((r) => y(r, t, e))) return !1;
                                        }
                                        return !0;
                                    })(n, k, e)))
                        )
                            return b();
                        if (j) {
                            var L;
                            if (
                                (void 0 === l && (l = await h(r, a)),
                                !(
                                    (L = l) &&
                                    y(L.operationName, j.operationName, e) &&
                                    (!j.variables ||
                                        (L.variables &&
                                            Object.entries(j.variables).every((t) => {
                                                var r;
                                                let [a, n] = t;
                                                return y(String(null == (r = L.variables) ? void 0 : r[a]), n, e);
                                            })))
                                ))
                            )
                                return b();
                        }
                        return I &&
                            !((t, r, e) => {
                                for (let [a, n] of Object.entries(r)) if (!y(t.get(a), n, e)) return !1;
                                return !0;
                            })(r.headers, I, e)
                            ? b()
                            : c;
                    };
                    return o();
                },
                S = async (t, r, e) => {
                    var a;
                    if (!t) return null;
                    let n =
                        null ==
                        (a = c(
                            ((t, r) => {
                                if (!r || g(t)) return t;
                                let e = r.replace(/\/+$/, ''),
                                    a = t.replace(/^\/+/, '');
                                return ''.concat(e, '/').concat(a);
                            })(t, r),
                            e,
                        ))
                            ? void 0
                            : a.href;
                    return n ? await s(n, e) : null;
                },
                N = async (t) => {
                    if (globalThis.MSW_INIT_PROMISE) return void (await globalThis.MSW_INIT_PROMISE);
                    (await t.getMocksConfiguration()) &&
                        ((globalThis.MSW_INIT_PROMISE = new Promise((r, e) => {
                            let o = ((t) => {
                                    let { urlCapturePattern: r = '*' } = t;
                                    return r.endsWith('*') || (r += '*'), { ...t, urlCapturePattern: r };
                                })(t),
                                { serviceWorkerUrl: u, urlCapturePattern: s } = o,
                                c = ((t) => [
                                    n.L.all(t.urlCapturePattern, async (r) => {
                                        var e;
                                        let { request: a } = r,
                                            n = await f(t);
                                        if (!n) return (0, l.l)();
                                        let o = await b(n, a, t.variables, t.log);
                                        if (!o) return (0, l.l)();
                                        let { mockUrl: u, status: s = 200, headers: c = {}, delay: d = 0 } = o,
                                            p = await S(u, t.mocksProviderUrl, t.log);
                                        return (
                                            d && (await new Promise((t) => setTimeout(t, d))),
                                            null == (e = t.log) || e.call(t, 'URL was mocked: '.concat(a.url), { rule: o, mockData: p }),
                                            i.c.json(p, { status: s, headers: c })
                                        );
                                    }),
                                ])(o),
                                d = (0, a.k)(...c),
                                p = new URL(u || '/mockServiceWorker.js', window.location.href);
                            p.searchParams.set('capture', s),
                                d
                                    .start({ onUnhandledRequest: 'bypass', serviceWorker: { url: p.toString() } })
                                    .then(r)
                                    .catch((t) => e(Error('Client MSW initialization failed: '.concat(String(t)))));
                        })),
                        await globalThis.MSW_INIT_PROMISE);
                };
        },
    },
]);
