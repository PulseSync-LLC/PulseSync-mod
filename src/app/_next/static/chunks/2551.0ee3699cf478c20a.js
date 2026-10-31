'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2551],
    {
        39569: (t, e, n) => {
            n.d(e, { Q: () => x });
            var r = n(53165);
            let o = '__VPUID_INLINE__',
                i = 'vpuid';
            class s {
                prefix;
                path;
                constructor(t = {}) {
                    ((this.prefix = t.prefix || 'ss_'), (this.path = t.path || '/'));
                }
                getItem(t) {
                    let e = `${this.prefix}${t}=`,
                        n = document.cookie.indexOf(e);
                    if (-1 === n) return null;
                    let r = n + e.length,
                        o = document.cookie.indexOf(';', r);
                    return document.cookie.substring(r, -1 === o ? document.cookie.length : o);
                }
                setItem(t, e) {
                    let n = `${this.prefix}${t}=${e}; path=${this.path}; samesite=strict`;
                    document.cookie = n;
                }
                removeItem(t) {
                    document.cookie = `${this.prefix}${t}=; path=${this.path}; max-age=-1`;
                }
                clear() {
                    let t = document.cookie;
                    if (!t) return;
                    let e = t.split(';');
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t].indexOf('=');
                        if (-1 === n) continue;
                        let r = e[t].substring(0, n).trim();
                        r.startsWith(this.prefix) && this.removeItem(r.substring(this.prefix.length));
                    }
                }
                get length() {
                    let t = 0,
                        e = document.cookie;
                    if (!e) return t;
                    let n = e.split(';');
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e].indexOf('=');
                        -1 !== r && n[e].substring(0, r).trim().startsWith(this.prefix) && t++;
                    }
                    return t;
                }
                key(t) {
                    if (t < 0) return null;
                    let e = -1,
                        n = document.cookie;
                    if (!n) return null;
                    let r = n.split(';');
                    for (let n = 0; n < r.length; n++) {
                        let o = r[n].indexOf('=');
                        if (-1 === o) continue;
                        let i = r[n].substring(0, o).trim();
                        if (i.startsWith(this.prefix) && ++e === t) return i.substring(this.prefix.length);
                    }
                    return null;
                }
                static isSupported() {
                    try {
                        let t = '__test_cookie__',
                            e = new s();
                        e.setItem(t, '1');
                        let n = e.getItem(t);
                        return (e.removeItem(t), '1' === n);
                    } catch {
                        return !1;
                    }
                }
            }
            class a {
                data = {};
                getItem(t) {
                    return this.data[t] || null;
                }
                setItem(t, e) {
                    this.data[t] = e;
                }
                removeItem(t) {
                    delete this.data[t];
                }
                clear() {
                    this.data = {};
                }
                get length() {
                    return Object.keys(this.data).length;
                }
                key(t) {
                    let e = Object.keys(this.data);
                    return t >= 0 && t < e.length ? e[t] : null;
                }
            }
            function c(t) {
                let e = '__test_storage__';
                try {
                    return (t.setItem(e, 'test'), t.removeItem(e), !0);
                } catch {
                    return !1;
                }
            }
            class l {
                fallbackOrder;
                constructor(t = ['local', 'session', 'cookie', 'memory']) {
                    this.fallbackOrder = t;
                }
                getStorage() {
                    for (let t of this.fallbackOrder)
                        if (
                            (function (t) {
                                try {
                                    switch (t) {
                                        case 'local':
                                            return c(window.localStorage);
                                        case 'session':
                                            return c(window.sessionStorage);
                                        case 'cookie':
                                            return s.isSupported();
                                        case 'memory':
                                            return !0;
                                        default:
                                            throw Error(`Unsupported storage type: ${t}`);
                                    }
                                } catch {
                                    return !1;
                                }
                            })(t)
                        )
                            return this.createStorage(t);
                    return new a();
                }
                createStorage(t) {
                    switch (t) {
                        case 'local':
                        default:
                            return window.localStorage;
                        case 'session':
                            return window.sessionStorage;
                        case 'cookie':
                            return new s();
                        case 'memory':
                            return new a();
                    }
                }
            }
            let u = new l().getStorage(),
                f = new l(['local', 'memory']).getStorage(),
                h = new l(['session', 'memory']).getStorage();
            function d(t) {
                return {
                    getItem(e) {
                        try {
                            return t.getItem(e);
                        } catch {
                            return null;
                        }
                    },
                    setItem(e, n) {
                        try {
                            t.setItem(e, n);
                        } catch {}
                    },
                    removeItem(e) {
                        try {
                            t.removeItem(e);
                        } catch {}
                    },
                    clear() {
                        try {
                            t.clear();
                        } catch {}
                    },
                    hasItem(e) {
                        try {
                            return null !== t.getItem(e);
                        } catch {
                            return !1;
                        }
                    },
                    get length() {
                        try {
                            return t.length;
                        } catch {
                            return 0;
                        }
                    },
                    key(e) {
                        try {
                            return t.key(e);
                        } catch {
                            return null;
                        }
                    },
                };
            }
            let p = d(u);
            (d(f), d(h));
            var m = n(47170);
            let g = 'qwertyuiopasdfghjklzxcvbnm0123456789',
                v =
                    -1 === o.indexOf('__VPUID')
                        ? o
                        : (p.getItem(i) ??
                          (function () {
                              let t = [];
                              for (let e = 0; e < 10; e++) t.push(g[Math.floor((0, m.y)() * g.length)]);
                              return t.join('');
                          })());
            async function y(t) {
                let e = [
                    ['vpuid', v],
                    ['version', t?.version],
                    ['testid', isFinite(t.testid) ? String(t.testid) : void 0],
                    ['bundleurl', t?.bundleUrl],
                ]
                    .filter(([t, e]) => !!e)
                    .map((t) => t.join('='))
                    .join('&');
                try {
                    var n, o;
                    let i = t.hostname || 'frontend.vh.yandex.ru',
                        s = e ? `?${e}` : '';
                    await ((n = `https://${i}/get_player/${t.file}${s}`),
                    (o = t.checkLoad),
                    (0, r.I)({
                        src: n,
                        async: !1,
                        retries: 3,
                        dropCacheOnRetry: !0,
                        onBeforeLoad: (t) => {
                            t.crossOrigin = 'use-credentials';
                        },
                        checkLoad: o,
                    }));
                } catch (t) {
                    throw t;
                }
            }
            function w(t) {
                try {
                    return t();
                } catch {
                    return;
                }
            }
            p.setItem(i, v);
            let _ = (0, n(88802).x)();
            async function x(t) {
                if (w(() => _.Ya)?.YaspVideoElement) return Promise.resolve();
                (await y({ file: 'yasp.js', version: t?.version, testid: t?.testid, bundleUrl: t?.bundleUrl, checkLoad: () => !!w(() => _.Ya)?.preloadYaspScripts }),
                    await _.Ya.preloadYaspScripts());
            }
        },
        47170: (t, e, n) => {
            n.d(e, { y: () => m });
            let r =
                !(function (t, e = !1) {
                    if (!t) return !1;
                    let n = e ? Function.prototype.toString.call(t) : t.toString ? t.toString() : '';
                    return /\[native code\]/.test(n) || /\/\* source code not available \*\//.test(n);
                })(Math.random) || Math.random() === Math.random();
            var o = n(45028);
            let i = {}.toString,
                s = /\[object (\w+)\]/;
            function a(t) {
                return (
                    'function' == typeof t ||
                    'Function' ===
                        ((t) => {
                            let e = i.call(t);
                            if (!e) return null;
                            let n = e.match(s);
                            if (!n) return null;
                            let r = n[1];
                            return r || null;
                        })(t)
                );
            }
            let c = Date && a(Date.now) ? () => Date.now() : () => new Date().getTime(),
                l = 'undefined' == typeof window ? void 0 : window.performance,
                u = l && a(l.now),
                f = l && l.timing && l.timing.navigationStart,
                h = l && l.timeOrigin ? l.timeOrigin : f ? l.timing.navigationStart : c(),
                d = 0,
                p = (c() * (0, o.Wj)(u ? l.now() : (d = Math.max(c() - h, d)))) % 0x7fffffff,
                m = r
                    ? function () {
                          return ((p = (16807 * p) % 0x7fffffff) - 1) / 0x7ffffffe;
                      }
                    : function () {
                          return Math.random();
                      };
        },
        53165: (t, e, n) => {
            n.d(e, { I: () => i });
            let r = () => {},
                o = (t) => !0;
            function i(t) {
                return new Promise((e, n) => {
                    !(function (t) {
                        let { dropCacheOnRetry: e = !1, onBeforeLoad: n = r, retries: i = 0 } = t;
                        if (t.checkLoad && t.checkLoad()) {
                            t.onLoad && t.onLoad();
                            return;
                        }
                        let s = n,
                            a = 0;
                        (e &&
                            i > 0 &&
                            (s = (t) => {
                                if ((n(t), a > 0)) {
                                    var e;
                                    let n,
                                        r = -1 === t.src.indexOf('?') ? '?' : '&',
                                        o =
                                            ((e = a),
                                            Number.isFinite((n = Math.floor(1e9 * Math.random()) % 1e9)) || (n = 0),
                                            (n += Date.now() % 1e9),
                                            String(e) + n.toString(36));
                                    t.src += r + o;
                                }
                                a++;
                            }),
                            (function t(e) {
                                let {
                                        src: n,
                                        win: i = window,
                                        charset: s = 'utf-8',
                                        async: a = !0,
                                        retries: c = 0,
                                        onRetry: l = r,
                                        retryDelay: u = 0,
                                        checkLoad: f = o,
                                        onBeforeLoad: h = r,
                                        onLoad: d = r,
                                        onError: p = r,
                                    } = e,
                                    m = i.document.createElement('script'),
                                    g = (r) => {
                                        (c > 0 ? (l(r), t({ ...e, src: n, retries: c - 1 })) : p(r), m.parentNode?.removeChild(m));
                                    };
                                ((m.type = 'text/javascript'),
                                    (m.async = a),
                                    (m.onload = () => (f(m) ? d() : g(Error(`checkLoad for ${n} failed`)))),
                                    (m.onerror = (t) => {
                                        try {
                                            i.setTimeout(() => {
                                                g(t);
                                            }, u);
                                        } catch {}
                                    }),
                                    (m.src = n),
                                    (m.charset = s),
                                    h(m),
                                    (function (t) {
                                        let e = t.document,
                                            n = e.getElementsByTagName('head')[0];
                                        return (n || ((n = e.createElement('head')), e.documentElement.appendChild(n)), n);
                                    })(i).appendChild(m));
                            })({ ...t, onBeforeLoad: s }));
                    })({ ...t, onLoad: e, onError: n });
                });
            }
        },
        64727: (t, e, n) => {
            n.d(e, { b: () => r });
            var r = n(90327);
        },
        88802: (t, e, n) => {
            n.d(e, { x: () => r });
            function r() {
                return 'object' == typeof self ? self : 'object' == typeof window ? window : globalThis;
            }
        },
        90327: (t) => {
            var e = Object.prototype.hasOwnProperty,
                n = '~';
            function r() {}
            function o(t, e, n) {
                ((this.fn = t), (this.context = e), (this.once = n || !1));
            }
            function i(t, e, r, i, s) {
                if ('function' != typeof r) throw TypeError('The listener must be a function');
                var a = new o(r, i || t, s),
                    c = n ? n + e : e;
                return (t._events[c] ? (t._events[c].fn ? (t._events[c] = [t._events[c], a]) : t._events[c].push(a)) : ((t._events[c] = a), t._eventsCount++), t);
            }
            function s(t, e) {
                0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
            }
            function a() {
                ((this._events = new r()), (this._eventsCount = 0));
            }
            (Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
                (a.prototype.eventNames = function () {
                    var t,
                        r,
                        o = [];
                    if (0 === this._eventsCount) return o;
                    for (r in (t = this._events)) e.call(t, r) && o.push(n ? r.slice(1) : r);
                    return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o;
                }),
                (a.prototype.listeners = function (t) {
                    var e = n ? n + t : t,
                        r = this._events[e];
                    if (!r) return [];
                    if (r.fn) return [r.fn];
                    for (var o = 0, i = r.length, s = Array(i); o < i; o++) s[o] = r[o].fn;
                    return s;
                }),
                (a.prototype.listenerCount = function (t) {
                    var e = n ? n + t : t,
                        r = this._events[e];
                    return r ? (r.fn ? 1 : r.length) : 0;
                }),
                (a.prototype.emit = function (t, e, r, o, i, s) {
                    var a = n ? n + t : t;
                    if (!this._events[a]) return !1;
                    var c,
                        l,
                        u = this._events[a],
                        f = arguments.length;
                    if (u.fn) {
                        switch ((u.once && this.removeListener(t, u.fn, void 0, !0), f)) {
                            case 1:
                                return (u.fn.call(u.context), !0);
                            case 2:
                                return (u.fn.call(u.context, e), !0);
                            case 3:
                                return (u.fn.call(u.context, e, r), !0);
                            case 4:
                                return (u.fn.call(u.context, e, r, o), !0);
                            case 5:
                                return (u.fn.call(u.context, e, r, o, i), !0);
                            case 6:
                                return (u.fn.call(u.context, e, r, o, i, s), !0);
                        }
                        for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
                        u.fn.apply(u.context, c);
                    } else {
                        var h,
                            d = u.length;
                        for (l = 0; l < d; l++)
                            switch ((u[l].once && this.removeListener(t, u[l].fn, void 0, !0), f)) {
                                case 1:
                                    u[l].fn.call(u[l].context);
                                    break;
                                case 2:
                                    u[l].fn.call(u[l].context, e);
                                    break;
                                case 3:
                                    u[l].fn.call(u[l].context, e, r);
                                    break;
                                case 4:
                                    u[l].fn.call(u[l].context, e, r, o);
                                    break;
                                default:
                                    if (!c) for (h = 1, c = Array(f - 1); h < f; h++) c[h - 1] = arguments[h];
                                    u[l].fn.apply(u[l].context, c);
                            }
                    }
                    return !0;
                }),
                (a.prototype.on = function (t, e, n) {
                    return i(this, t, e, n, !1);
                }),
                (a.prototype.once = function (t, e, n) {
                    return i(this, t, e, n, !0);
                }),
                (a.prototype.removeListener = function (t, e, r, o) {
                    var i = n ? n + t : t;
                    if (!this._events[i]) return this;
                    if (!e) return (s(this, i), this);
                    var a = this._events[i];
                    if (a.fn) a.fn !== e || (o && !a.once) || (r && a.context !== r) || s(this, i);
                    else {
                        for (var c = 0, l = [], u = a.length; c < u; c++) (a[c].fn !== e || (o && !a[c].once) || (r && a[c].context !== r)) && l.push(a[c]);
                        l.length ? (this._events[i] = 1 === l.length ? l[0] : l) : s(this, i);
                    }
                    return this;
                }),
                (a.prototype.removeAllListeners = function (t) {
                    var e;
                    return (t ? ((e = n ? n + t : t), this._events[e] && s(this, e)) : ((this._events = new r()), (this._eventsCount = 0)), this);
                }),
                (a.prototype.off = a.prototype.removeListener),
                (a.prototype.addListener = a.prototype.on),
                (a.prefixed = n),
                (a.EventEmitter = a),
                (t.exports = a));
        },
    },
]);
