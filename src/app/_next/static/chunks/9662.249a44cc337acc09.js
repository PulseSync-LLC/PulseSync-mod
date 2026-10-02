'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9662],
    {
        39662: (t, e, r) => {
            r.d(e, { initMocks: () => O });
            var a = r(59391),
                n = r(69055),
                l = r(19696),
                i = r(89089),
                o = r(99028);
            let u = (t, e) => {
                    var r;
                    return 'string' == typeof t && (null != (r = t.split(';')[0]) ? r : '').trim().toLowerCase() === e.trim().toLowerCase();
                },
                s = async (t, e) => {
                    try {
                        let r = await fetch((0, o.X)(t));
                        if (!r.ok) {
                            let a = 'Failed to load data from URL: '.concat(r.status, ' ').concat(r.statusText);
                            return (null == e || e(a, { url: t, status: r.status, statusText: r.statusText }), null);
                        }
                        if (u(r.headers.get('content-type'), 'application/json')) return await r.json();
                        return await r.text();
                    } catch (r) {
                        return (null == e || e('Failed to load data from URL: '.concat(String(r)), { url: t, error: r }), null);
                    }
                },
                c = (t, e) => {
                    try {
                        return new URL(t);
                    } catch (r) {
                        return (null == e || e('Failed to convert '.concat(t, ' to URL: ').concat(String(r)), { url: t, error: r }), null);
                    }
                },
                f = async (t) => {
                    var e;
                    let { getMocksConfiguration: r, log: a } = t,
                        n = await Promise.resolve(r());
                    if (!n) return null;
                    let l = null == (e = c(n)) ? void 0 : e.href;
                    return l
                        ? await s(l, a)
                        : ((t, e) => {
                              try {
                                  return JSON.parse(t);
                              } catch (r) {
                                  return (null == e || e('Failed to parse configuration', { jsonString: t }), null);
                              }
                          })(n, a);
                };
            var d = r(74127);
            let h = (t) => 'object' == typeof t && null !== t && !Array.isArray(t),
                p = async (t, e) => {
                    if (!u(t.headers.get('content-type'), 'application/json') || t.bodyUsed) return null;
                    try {
                        let e = await t.clone().json();
                        if (!h(e)) return null;
                        let r = {};
                        if (
                            ('string' == typeof e.operationName && (r.operationName = e.operationName),
                            h(e.variables) && (r.variables = e.variables),
                            !r.operationName && !r.variables)
                        )
                            return null;
                        return r;
                    } catch (t) {
                        return (null == e || e('GraphQL payload: failed to parse JSON body', { error: t }), null);
                    }
                },
                v = /^(http|https):\/\//i,
                w = (t) => v.test(t),
                g = /\{(\w+)\}/g,
                y = (t, e, r) => {
                    let a = ((t, e) =>
                        'string' == typeof t && e
                            ? t.replace(g, (t, r) => {
                                  let a = e[r];
                                  return void 0 !== a ? String(a) : t;
                              })
                            : t)(e, r);
                    return String(t) === String(a);
                },
                m = (t) => {
                    if (void 0 === t) return null;
                    if (Array.isArray(t)) {
                        var e;
                        return null != (e = t[0]) ? e : null;
                    }
                    return String(t);
                },
                S = async (t, e, r, a) => {
                    let n,
                        l,
                        i = c(e.url, a);
                    if (!i) return null;
                    let o = async function () {
                        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            c = t[s];
                        if (!c) return null;
                        let f = w(c.url) || c.url.startsWith('*') ? c.url : '*'.concat(c.url),
                            { matches: h, params: v } = (0, d.Os)(i, f),
                            g = !c.method || c.method.toLowerCase() === e.method.toLowerCase(),
                            S = async () => o(s + 1);
                        if (!h || !g) return S();
                        if (!c.matchers) return c;
                        let { path: b, queryString: N, formData: k, graphQL: j, headers: I } = c.matchers;
                        if (
                            (b &&
                                !((t, e, r) => {
                                    for (let [a, n] of Object.entries(e)) if (!y(m(t[a]), n, r)) return !1;
                                    return !0;
                                })(null != v ? v : {}, b, r)) ||
                            (N &&
                                !((t, e, r) => {
                                    for (let [a, n] of Object.entries(e)) if (!y(t.get(a), n, r)) return !1;
                                    return !0;
                                })(i.searchParams, N, r)) ||
                            (k &&
                                (void 0 === n && (n = u(e.headers.get('content-type'), 'multipart/form-data') ? await e.formData() : null),
                                n &&
                                    !((t, e, r) => {
                                        for (let [a, n] of Object.entries(e)) {
                                            let e = t.getAll(a).map((t) => String(t));
                                            for (let t of n) if (!e.find((e) => y(e, t, r))) return !1;
                                        }
                                        return !0;
                                    })(n, k, r)))
                        )
                            return S();
                        if (j) {
                            var L;
                            if (
                                (void 0 === l && (l = await p(e, a)),
                                !(
                                    (L = l) &&
                                    y(L.operationName, j.operationName, r) &&
                                    (!j.variables ||
                                        (L.variables &&
                                            Object.entries(j.variables).every((t) => {
                                                var e;
                                                let [a, n] = t;
                                                return y(String(null == (e = L.variables) ? void 0 : e[a]), n, r);
                                            })))
                                ))
                            )
                                return S();
                        }
                        return I &&
                            !((t, e, r) => {
                                for (let [a, n] of Object.entries(e)) if (!y(t.get(a), n, r)) return !1;
                                return !0;
                            })(e.headers, I, r)
                            ? S()
                            : c;
                    };
                    return o();
                },
                b = async (t, e, r) => {
                    var a;
                    if (!t) return null;
                    let n =
                        null ==
                        (a = c(
                            ((t, e) => {
                                if (!e || w(t)) return t;
                                let r = e.replace(/\/+$/, ''),
                                    a = t.replace(/^\/+/, '');
                                return ''.concat(r, '/').concat(a);
                            })(t, e),
                            r,
                        ))
                            ? void 0
                            : a.href;
                    return n ? await s(n, r) : null;
                };
            var N = r(16802),
                k = r(77270),
                j = r(61461);
            let I = (t, e) => {
                    if ((0, N.A)(e) && !(0, N.A)(t)) return (0, k.A)(e);
                },
                L = new Set([204, 205, 304]),
                O = async (t) => {
                    if (globalThis.MSW_INIT_PROMISE) return void (await globalThis.MSW_INIT_PROMISE);
                    (await t.getMocksConfiguration()) &&
                        ((globalThis.MSW_INIT_PROMISE = new Promise((e, r) => {
                            let o = ((t) => {
                                    let { urlCapturePattern: e = '*' } = t;
                                    return (e.endsWith('*') || (e += '*'), { ...t, urlCapturePattern: e });
                                })(t),
                                { serviceWorkerUrl: u, urlCapturePattern: s } = o,
                                c = ((t) => [
                                    n.L.all(t.urlCapturePattern, async (e) => {
                                        var r;
                                        let a,
                                            { request: n } = e,
                                            o = await f(t);
                                        if (!o) return (0, l.l)();
                                        let u = await S(o, n, t.variables, t.log);
                                        if (!u) return (0, l.l)();
                                        let { mockUrl: s, status: c = 200, headers: d = {}, delay: h = 0 } = u,
                                            p = await b(s, t.mocksProviderUrl, t.log),
                                            v = u.overrides ? ((a = u.overrides), (0, j.A)({}, p, a, I)) : p;
                                        return (h && (await new Promise((t) => setTimeout(t, h))),
                                        null == (r = t.log) || r.call(t, 'URL was mocked: '.concat(n.url), { rule: u, body: v }),
                                        L.has(c))
                                            ? new i.cS(null, { status: c, headers: d })
                                            : i.cS.json(v, { status: c, headers: d });
                                    }),
                                ])(o),
                                d = (0, a.k)(...c),
                                h = new URL(u || '/mockServiceWorker.js', window.location.href);
                            (h.searchParams.set('capture', s),
                                d
                                    .start({ onUnhandledRequest: 'bypass', serviceWorker: { url: h.toString() } })
                                    .then(e)
                                    .catch((t) => r(Error('Client MSW initialization failed: '.concat(String(t))))));
                        })),
                        await globalThis.MSW_INIT_PROMISE);
                };
        },
    },
]);
